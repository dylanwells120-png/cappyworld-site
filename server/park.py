#!/usr/bin/env python3
"""CappyWorld park lobby: the /mp/* API that functions/mp/[[route]].js served on Cloudflare.

Same routes, rules and JSON as the Pages Function, but the room lives in memory instead of KV.
Zero dependencies. Runs behind nginx, which forwards the site's /mp/ requests here.

    python3 park.py --port 9201
"""

import argparse
import json
import math
import re
import secrets
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

NAME_MAX = 16
TIMEOUT_MS = 5000
MAX_PLAYERS = 50
HEX_FROG_MS = 20000
HEX_FROG_RADIUS = 8
LEVEL_ID = re.compile(r"[a-z][a-z0-9_]{0,23}")
MAX_CLOTHES = 16
MAX_BODY = 16 * 1024

NAME_CHAR = re.compile(r"[a-zA-Z0-9 '\-]")
ID_STRIP = re.compile(r"[^a-zA-Z0-9_-]")


def now_ms():
    return int(time.time() * 1000)


def sanitize_name(raw):
    text = "".join(ch for ch in str(raw or "") if NAME_CHAR.fullmatch(ch))
    return " ".join(text.split())[:NAME_MAX]


def sanitize_gender(raw):
    return "female" if raw == "female" else "male"


def sanitize_id(raw):
    cleaned = ID_STRIP.sub("", str(raw or ""))[:40]
    return cleaned if len(cleaned) >= 8 else ""


def make_id():
    return "c" + secrets.token_hex(8)


def num(value, fallback=0.0):
    """Like JS Number(): finite numbers and numeric strings pass, everything else is the fallback."""
    if isinstance(value, bool):
        return float(value)
    if value is None:
        return 0.0
    try:
        n = float(value.strip() or 0) if isinstance(value, str) else float(value)
    except (TypeError, ValueError):
        return fallback
    return n if math.isfinite(n) else fallback


def sanitize_level(raw):
    return raw if isinstance(raw, str) and LEVEL_ID.fullmatch(raw) else "world"


def sanitize_clothes(raw):
    if not isinstance(raw, list):
        return []
    out = []
    for entry in raw:
        if len(out) >= MAX_CLOTHES:
            break
        if not isinstance(entry, str) or not LEVEL_ID.fullmatch(entry) or entry in out:
            continue
        out.append(entry)
    return out


def sanitize_pose(raw):
    data = raw if isinstance(raw, dict) else {}
    return {
        "x": num(data.get("x")),
        "y": num(data.get("y")),
        "z": max(0.0, num(data.get("z"))),
        "h": num(data.get("h")),
        "walking": bool(data.get("walking")),
        "flop": max(0.0, num(data.get("flop"))),
        "level": sanitize_level(data.get("level")),
        "clothes": sanitize_clothes(data.get("clothes")),
    }


def peer_public(entry, now):
    return {
        "id": entry["id"],
        "name": entry["name"],
        "gender": entry["gender"],
        "x": entry["x"],
        "y": entry["y"],
        "z": entry["z"],
        "h": entry["h"],
        "walking": entry["walking"],
        "flop": entry["flop"],
        "level": entry["level"],
        "clothes": entry.get("clothes") or [],
        "form": "frog" if entry.get("frogUntil", 0) > now else "",
    }


def you_public(entry, now):
    left = max(0, entry.get("frogUntil", 0) - now)
    return {"form": "frog" if left > 0 else "", "frogLeft": left / 1000}


def hex_frog(peers, caster, now):
    for peer in peers.values():
        if peer["id"] == caster["id"] or peer["level"] != caster["level"]:
            continue
        dx = caster["x"] - peer["x"]
        dy = caster["y"] - peer["y"]
        if dx * dx + dy * dy <= HEX_FROG_RADIUS * HEX_FROG_RADIUS:
            peer["frogUntil"] = now + HEX_FROG_MS


def prune(peers, now):
    for pid in [pid for pid, e in peers.items() if now - e["seen"] > TIMEOUT_MS]:
        del peers[pid]


def upsert(room, raw, now):
    prune(room, now)
    data = raw if isinstance(raw, dict) else {}
    pid = sanitize_id(data.get("id")) or make_id()
    entry = room.get(pid)
    if entry is None and len(room) >= MAX_PLAYERS:
        return None, (503, {"error": "park is full", "status": 503})
    name = sanitize_name(data.get("name"))
    gender = sanitize_gender(data.get("gender"))
    pose = sanitize_pose(data)
    if entry is None:
        entry = {"id": pid, "seen": now, "name": name or "Friend", "gender": gender, **pose}
        room[pid] = entry
    else:
        entry.update(pose)
        entry["gender"] = gender
        entry["seen"] = now
        if name:
            entry["name"] = name
    return entry, None


def others(room, pid):
    now = now_ms()
    return [peer_public(e, now) for e in room.values() if e["id"] != pid]


class Park:
    """The single park room, shared by every request."""

    def __init__(self):
        self.peers = {}
        self.lock = threading.Lock()

    def handle(self, method, path, body):
        """Returns (status, payload) for one /mp request; body is a dict or None."""
        path = path.rstrip("/") or "/mp"
        now = now_ms()
        with self.lock:
            room = self.peers
            if method == "POST" and path == "/mp/join":
                entry, err = upsert(room, body, now)
                if err:
                    return err
                return 200, {"id": entry["id"], "peers": others(room, entry["id"]), "you": you_public(entry, now)}
            if method == "POST" and path == "/mp/sync":
                if not sanitize_id((body or {}).get("id")):
                    return 400, {"error": "missing id", "status": 400}
                entry, err = upsert(room, body, now)
                if err:
                    return err
                if body.get("cast") == "frog":
                    hex_frog(room, entry, now)
                return 200, {"peers": others(room, entry["id"]), "you": you_public(entry, now)}
            if method == "POST" and path == "/mp/leave":
                pid = sanitize_id((body or {}).get("id"))
                room.pop(pid, None)
                return 200, {"ok": True}
            if method == "GET" and path == "/mp/status":
                prune(room, now)
                return 200, {"ok": True, "players": len(room)}
        return 404, {"error": "not found"}


PARK = Park()


class Handler(BaseHTTPRequestHandler):
    server_version = "CappyPark"
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):  # nginx already logs requests
        pass

    def send_json(self, status, payload):
        data = json.dumps(payload, separators=(",", ":")).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def read_body(self):
        """None for no body, a dict for a JSON object, or the string 'bad' for unreadable JSON."""
        if self.command in ("GET", "HEAD"):
            return None
        length = int(self.headers.get("Content-Length") or 0)
        if length > MAX_BODY:
            return "bad"
        text = self.rfile.read(length).decode("utf-8", "replace") if length else ""
        if not text:
            return None
        try:
            parsed = json.loads(text)
        except ValueError:
            return "bad"
        return parsed if isinstance(parsed, dict) else None

    def route(self):
        path = self.path.split("?", 1)[0]
        if not (path == "/mp" or path.startswith("/mp/")):
            return self.send_json(404, {"error": "not found"})
        body = self.read_body()
        if body == "bad":
            return self.send_json(400, {"error": "bad json"})
        self.send_json(*PARK.handle(self.command, path, body))

    do_GET = do_POST = route

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Length", "0")
        self.end_headers()


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=9201)
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    server.daemon_threads = True
    print(f"park lobby on http://{args.host}:{args.port}/mp/", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()

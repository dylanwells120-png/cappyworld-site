"""python3 -m unittest server/test_park.py"""
import json
import sys
import threading
import unittest
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import park  # noqa: E402


class ParkLogic(unittest.TestCase):
    def setUp(self):
        self.park = park.Park()

    def test_join_sync_leave(self):
        status, a = self.park.handle("POST", "/mp/join", {"name": "Mo<chi>!!", "x": 1, "y": 2, "level": "world"})
        self.assertEqual(status, 200)
        self.assertEqual(a["peers"], [])
        status, b = self.park.handle("POST", "/mp/join", {"name": "Pip", "x": 3, "y": 2})
        self.assertEqual([p["name"] for p in b["peers"]], ["Mochi"])
        status, s = self.park.handle("POST", "/mp/sync", {"id": a["id"], "x": 4, "y": 2, "cast": "frog"})
        self.assertEqual(status, 200)
        self.assertEqual(s["peers"][0]["name"], "Pip")
        _, after = self.park.handle("POST", "/mp/sync", {"id": b["id"], "x": 3, "y": 2})
        self.assertEqual(after["you"]["form"], "frog", "Pip was in hex range")
        self.park.handle("POST", "/mp/leave", {"id": a["id"]})
        self.assertEqual(self.park.handle("GET", "/mp/status", None), (200, {"ok": True, "players": 1}))

    def test_rejects(self):
        self.assertEqual(self.park.handle("POST", "/mp/sync", {"x": 1})[0], 400)
        self.assertEqual(self.park.handle("POST", "/mp/sync", None)[0], 400)
        self.assertEqual(self.park.handle("GET", "/mp/nope", None)[0], 404)
        self.assertEqual(self.park.handle("GET", "/mp/join", None)[0], 404)

    def test_full_park(self):
        for i in range(park.MAX_PLAYERS):
            self.park.handle("POST", "/mp/join", {"id": f"player{i:04d}"})
        self.assertEqual(self.park.handle("POST", "/mp/join", {})[0], 503)

    def test_sanitizers_match_the_worker(self):
        self.assertEqual(park.sanitize_name("  Big   Cap<b>y  "), "Big Capby")
        self.assertEqual(park.sanitize_id("short"), "")
        self.assertEqual(park.sanitize_level("Bad Level"), "world")
        self.assertEqual(park.sanitize_clothes(["hat", "hat", 5, "Cap"]), ["hat"])
        self.assertEqual(park.num("12"), 12.0)
        self.assertEqual(park.num("abc"), 0.0)
        self.assertEqual(park.num(float("inf")), 0.0)


class ParkHttp(unittest.TestCase):
    def test_over_http(self):
        server = park.ThreadingHTTPServer(("127.0.0.1", 0), park.Handler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        base = f"http://127.0.0.1:{server.server_port}"
        try:
            req = urllib.request.Request(f"{base}/mp/join", data=json.dumps({"name": "Mochi"}).encode(),
                                         headers={"Content-Type": "application/json"}, method="POST")
            with urllib.request.urlopen(req) as r:
                self.assertEqual(r.headers["Cache-Control"], "no-store")
                self.assertTrue(json.load(r)["id"].startswith("c"))
            with urllib.request.urlopen(f"{base}/mp/status") as r:
                self.assertEqual(json.load(r)["players"], 1)
            bad = urllib.request.Request(f"{base}/mp/sync", data=b"{nope", method="POST")
            with self.assertRaises(urllib.error.HTTPError) as ctx:
                urllib.request.urlopen(bad)
            self.assertEqual(ctx.exception.code, 400)
        finally:
            server.shutdown()


if __name__ == "__main__":
    unittest.main()

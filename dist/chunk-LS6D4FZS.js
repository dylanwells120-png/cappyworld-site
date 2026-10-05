function Lf(n={}){let e=n.search??(typeof location<"u"?location.search:""),t=n.userAgent??(typeof navigator<"u"?navigator.userAgent:""),i=n.maxTouchPoints??(typeof navigator<"u"?navigator.maxTouchPoints:0),s=n.pointerCoarse??(typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches),r=n.hoverNone??(typeof matchMedia=="function"&&matchMedia("(hover: none)").matches),o=new URLSearchParams(String(e).replace(/^\?/,"")),a=/iPad/i.test(t)||/Macintosh/i.test(t)&&i>1,l=/iPhone|iPod|Android.+Mobile/i.test(t),c=s||r||a||l,u=c;return o.get("touch")==="0"&&(u=!1),o.get("touch")==="1"&&(u=!0),{touch:u,lightGpu:c}}var So=Lf();function LT(){return Lf().touch}var wo={coarse:So.lightGpu,dprCap:So.lightGpu?1.5:2,shadow:So.lightGpu?1024:2048,tuftsPerM2:So.lightGpu?1.6:3.6,antialias:!0},NT={world:"Mochi's home",house:"Haunted house",hall:"Village hall",cafe:"Caf\xE9",mine:"Crystal mine"},Nf=new Set(["ground.glb","floor.glb","dirt.glb","path.glb","puddle.glb"]);var Jg=0,Uf=1,Qg=2;var gp=0,Xa=1,zs=2,gn=3,Cn=0,Et=1,xn=2,Mt=0,Ss=1,ca=2,Ff=3,Of=4,Fu=5,sn=100,e0=101,t0=102,n0=103,i0=104,Hs=200,s0=201,r0=202,o0=203,uc=204,hc=205,qa=206,a0=207,Ya=208,l0=209,c0=210,u0=211,h0=212,f0=213,d0=214,fc=0,dc=1,pc=2,Es=3,mc=4,gc=5,xc=6,_c=7,xp=0,p0=1,m0=2,En=0,Wr=1,Xr=2,qr=3,yi=4,g0=5,Yr=6,Zr=7,Bf="attached",x0="detached",_p=300,Cs=301,Rs=302,vc=303,yc=304,Za=306,Kt=1e3,Gn=1001,Er=1002,bt=1003,Ou=1004;var _s=1005;var Gt=1006,yr=1007;var An=1008;var yn=1009,vp=1010,yp=1011,Cr=1012,Bu=1013,Fi=1014,vn=1015,Nt=1016,ku=1017,zu=1018,hi=1020,Mp=35902,bp=1021,Sp=1022,Wt=1023,wp=1024,Tp=1025,ws=1026,fi=1027,Hu=1028,Vu=1029,Ap=1030,Gu=1031;var Wu=1033,sa=33776,ra=33777,oa=33778,aa=33779,Mc=35840,bc=35841,Sc=35842,wc=35843,Tc=36196,Ac=37492,Ec=37496,Cc=37808,Rc=37809,Pc=37810,Ic=37811,Dc=37812,Lc=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,zc=37820,Hc=37821,la=36492,Vc=36494,Gc=36495,Ep=36283,Wc=36284,Xc=36285,qc=36286,$a=2200,Ka=2201,_0=2202,Ps=2300,Is=2301,Cl=2302,vs=2400,ys=2401,ua=2402,Xu=2500,v0=2501,Cp=0,ja=1,$r=2,y0=3200,M0=3201;var qu=0,b0=1,li="",ht="srgb",Ut="srgb-linear",Ja="linear",it="srgb";var Qi=7680;var kf=519,S0=512,w0=513,T0=514,Rp=515,A0=516,E0=517,C0=518,R0=519,Yc=35044;var zf="300 es",Wn=2e3,ha=2001,qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=1234567,Mr=Math.PI/180,Ds=180/Math.PI;function rn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function P0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function I0(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function D0(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function L0(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function N0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function U0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function F0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function O0(n,e){return n+Math.random()*(e-n)}function B0(n){return n*(.5-Math.random())}function k0(n){n!==void 0&&(Hf=n);let e=Hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function z0(n){return n*Mr}function H0(n){return n*Ds}function V0(n){return(n&n-1)===0&&n!==0}function G0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function W0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Mi={DEG2RAD:Mr,RAD2DEG:Ds,generateUUID:rn,clamp:vt,euclideanModulo:Yu,mapLinear:P0,inverseLerp:I0,lerp:br,damp:D0,pingpong:L0,smoothstep:N0,smootherstep:U0,randInt:F0,randFloat:O0,randFloatSpread:B0,seededRandom:k0,degToRad:z0,radToDeg:H0,isPowerOfTwo:V0,ceilPowerOfTwo:G0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:rt,denormalize:_n},te=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],v=s[4],_=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*x+a*y+l*R,r[3]=o*g+a*v+l*w,r[6]=o*m+a*_+l*A,r[1]=c*x+u*y+h*R,r[4]=c*g+u*v+h*w,r[7]=c*m+u*_+h*A,r[2]=f*x+d*y+p*R,r[5]=f*g+d*v+p*w,r[8]=f*m+d*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new We;function Pp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function q0(){let n=Rr("canvas");return n.style.display="block",n}var Vf={};function _r(n){n in Vf||(Vf[n]=!0,console.warn(n))}function Y0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Z0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ye={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=Ts(n.r),n.g=Ts(n.g),n.b=Ts(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===li?Ja:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gf=[.64,.33,.3,.6,.15,.06],Wf=[.2126,.7152,.0722],Xf=[.3127,.329],qf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Ut]:{primaries:Gf,whitePoint:Xf,transfer:Ja,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:Gf,whitePoint:Xf,transfer:it,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}});var es,Zc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Rr("canvas")),es.width=e.width,es.height=e.height;let i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},K0=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var j0=0,Ct=class n extends qn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gn,s=Gn,r=Gt,o=An,a=Wt,l=yn,c=n.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=rn(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kt:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kt:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=_p;Ct.DEFAULT_ANISOTROPY=1;var et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(d+1)/2,R=(m+1)/2,w=(u+f)/4,A=(h+x)/4,I=(p+g)/4;return v>_&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=A/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=I/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends qn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ct(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_t=class extends $c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends Ct{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==p){let g=1-a,m=l*f+c*d+u*p+h*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let R=Math.sqrt(v),w=Math.atan2(R,m*y);g=Math.sin(g*w)/R,a=Math.sin(a*w)/R}let _=a*y;if(l=l*g+f*_,c=c*g+d*_,u=u*g+p*_,h=h*g+x*_,g===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Il=new L,Zf=new Dt,Lt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Ao.subVectors(this.max,ar),ts.subVectors(e.a,ar),ns.subVectors(e.b,ar),is.subVectors(e.c,ar),ni.subVectors(ns,ts),ii.subVectors(is,ns),Ci.subVectors(ts,is);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ci.z,Ci.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ci.z,0,-Ci.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ci.y,Ci.x,0];return!Dl(t,ts,ns,is,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,ts,ns,is,Ao))?!1:(Eo.crossVectors(ni,ii),t=[Eo.x,Eo.y,Eo.z],Dl(t,ts,ns,is,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,To=new Lt,ts=new L,ns=new L,is=new L,ni=new L,ii=new L,Ci=new L,ar=new L,Ao=new L,Eo=new L,Ri=new L;function Dl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var J0=new Lt,lr=new L,Ll=new L,jt=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):J0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Ll)),this.expandByPoint(lr.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new L,Nl=new L,Co=new L,si=new L,Ul=new L,Ro=new L,Fl=new L,Oi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nl.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Nl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=si.dot(this.direction),l=-si.dot(Co),c=si.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nl).addScaledVector(Co,f),d}intersectSphere(e,t){On.subVectors(e.center,this.origin);let i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,s,r){Ul.subVectors(t,e),Ro.subVectors(i,e),Fl.crossVectors(Ul,Ro);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let l=a*this.direction.dot(Ro.crossVectors(si,Ro));if(l<0)return null;let c=a*this.direction.dot(Ul.cross(si));if(c<0||l+c>o)return null;let u=-a*si.dot(Fl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,ex)}lookAt(e,t,i){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ri.crossVectors(i,Zt),ri.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ri.crossVectors(i,Zt)),ri.normalize(),Po.crossVectors(Zt,ri),s[0]=ri.x,s[4]=Po.x,s[8]=Zt.x,s[1]=ri.y,s[5]=Po.y,s[9]=Zt.y,s[2]=ri.z,s[6]=Po.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],v=i[7],_=i[11],R=i[15],w=s[0],A=s[4],I=s[8],b=s[12],M=s[1],C=s[5],P=s[9],N=s[13],U=s[2],H=s[6],z=s[10],ne=s[14],G=s[3],ee=s[7],ce=s[11],ue=s[15];return r[0]=o*w+a*M+l*U+c*G,r[4]=o*A+a*C+l*H+c*ee,r[8]=o*I+a*P+l*z+c*ce,r[12]=o*b+a*N+l*ne+c*ue,r[1]=u*w+h*M+f*U+d*G,r[5]=u*A+h*C+f*H+d*ee,r[9]=u*I+h*P+f*z+d*ce,r[13]=u*b+h*N+f*ne+d*ue,r[2]=p*w+x*M+g*U+m*G,r[6]=p*A+x*C+g*H+m*ee,r[10]=p*I+x*P+g*z+m*ce,r[14]=p*b+x*N+g*ne+m*ue,r[3]=y*w+v*M+_*U+R*G,r[7]=y*A+v*C+_*H+R*ee,r[11]=y*I+v*P+_*z+R*ce,r[15]=y*b+v*N+_*ne+R*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+g*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=h*g*c-x*f*c+x*l*d-a*g*d-h*l*m+a*f*m,v=p*f*c-u*g*c-p*l*d+o*g*d+u*l*m-o*f*m,_=u*x*c-p*h*c+p*a*d-o*x*d-u*a*m+o*h*m,R=p*h*l-u*x*l-p*a*f+o*x*f+u*a*g-o*h*g,w=t*y+i*v+s*_+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=y*A,e[1]=(x*f*r-h*g*r-x*s*d+i*g*d+h*s*m-i*f*m)*A,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*A,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*A,e[4]=v*A,e[5]=(u*g*r-p*f*r+p*s*d-t*g*d-u*s*m+t*f*m)*A,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*A,e[8]=_*A,e[9]=(p*h*r-u*x*r-p*i*d+t*x*d+u*i*m-t*h*m)*A,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*A,e[12]=R*A,e[13]=(u*x*s-p*h*s+p*i*f-t*x*f-u*i*g+t*h*g)*A,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*A,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,g=o*h,m=a*h,y=l*c,v=l*u,_=l*h,R=i.x,w=i.y,A=i.z;return s[0]=(1-(x+m))*R,s[1]=(d+_)*R,s[2]=(p-v)*R,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+m))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(p+v)*A,s[9]=(g-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);let c=1/r,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Wn){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,p;if(a===Wn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ha)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,p,x;if(a===Wn)p=(o+r)*h,x=-2*h;else if(a===ha)p=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ss=new L,pn=new Ue,Q0=new L(0,0,0),ex=new L(1,1,1),ri=new L,Po=new L,Zt=new L,$f=new Ue,Kf=new Dt,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tx=0,jf=new L,rs=new Dt,Bn=new Ue,Io=new L,cr=new L,nx=new L,ix=new Dt,Jf=new L(1,0,0),Qf=new L(0,1,0),ed=new L(0,0,1),td={type:"added"},sx={type:"removed"},os={type:"childadded",child:null},Ol={type:"childremoved",child:null},ft=class n extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Rn,i=new Dt,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new We}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Io.copy(e):Io.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(cr,Io,this.up):Bn.lookAt(Io,cr,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Bn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sx),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new L,kn=new L,Bl=new L,zn=new L,as=new L,ls=new L,nd=new L,kl=new L,zl=new L,Hl=new L,Vl=new et,Gl=new et,Wl=new et,ci=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),kn.subVectors(i,t),Bl.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(kn),l=mn.dot(Bl),c=kn.dot(kn),u=kn.dot(Bl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),kn.subVectors(e,t),mn.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,i),ls.subVectors(r,i),kl.subVectors(e,i);let l=as.dot(kl),c=ls.dot(kl);if(l<=0&&c<=0)return t.copy(i);zl.subVectors(e,s);let u=as.dot(zl),h=ls.dot(zl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(as,o);Hl.subVectors(e,r);let d=as.dot(Hl),p=ls.dot(Hl);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(ls,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return nd.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(nd,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=Yu(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let i=Ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ye.fromWorkingColorSpace(It.copy(this),e),Math.round(vt(It.r*255,0,255))*65536+Math.round(vt(It.g*255,0,255))*256+Math.round(vt(It.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(It.copy(this),t);let i=It.r,s=It.g,r=It.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=ht){Ye.fromWorkingColorSpace(It.copy(this),e);let t=It.r,i=It.g,s=It.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Do);let i=br(oi.h,Do.h,t),s=br(oi.s,Do.s,t),r=br(oi.l,Do.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Me;Me.NAMES=Ip;var rx=0,kt=class extends qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=rn(),this.name="",this.blending=Ss,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==sn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xt=class extends kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new L,Lo=new te,xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}};var pa=class extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ma=class extends xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ox=0,nn=new Ue,ql=new ft,cs=new L,$t=new Lt,ur=new Lt,Tt=new L,pt=class n extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors($t.min,ur.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,ur.max),$t.expandByPoint(Tt)):($t.expandByPoint(ur.min),$t.expandByPoint(ur.max))}$t.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Tt.add(cs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new L,l[I]=new L;let c=new L,u=new L,h=new L,f=new te,d=new te,p=new te,x=new L,g=new L;function m(I,b,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),a[I].add(x),a[b].add(x),a[M].add(x),l[I].add(g),l[b].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,b=y.length;I<b;++I){let M=y[I],C=M.start,P=M.count;for(let N=C,U=C+P;N<U;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new L,_=new L,R=new L,w=new L;function A(I){R.fromBufferAttribute(s,I),w.copy(R);let b=a[I];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(w,b);let C=_.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,b=y.length;I<b;++I){let M=y[I],C=M.start,P=M.count;for(let N=C,U=C+P;N<U;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},id=new Ue,Pi=new Oi,No=new jt,sd=new L,Uo=new L,Fo=new L,Oo=new L,Yl=new L,Bo=new L,rd=new L,ko=new L,Xe=class extends ft{constructor(e=new pt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Yl.fromBufferAttribute(h,e),o?Bo.addScaledVector(Yl,u):Bo.addScaledVector(Yl.sub(t),u))}t.add(Bo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(No.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(No,sd)===null||Pi.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(id),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,R=v;_<R;_+=3){let w=a.getX(_),A=a.getX(_+1),I=a.getX(_+2);s=zo(this,m,e,i,c,u,h,w,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=zo(this,o,e,i,c,u,h,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,R=v;_<R;_+=3){let w=_,A=_+1,I=_+2;s=zo(this,m,e,i,c,u,h,w,A,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=g,v=g+1,_=g+2;s=zo(this,o,e,i,c,u,h,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ax(n,e,t,i,s,r,o,a){let l;if(e.side===Et?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Cn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function zo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Uo),n.getVertexPosition(l,Fo),n.getVertexPosition(c,Oo);let u=ax(n,e,t,i,Uo,Fo,Oo,rd);if(u){let h=new L;ci.getBarycoord(rd,Uo,Fo,Oo,h),s&&(u.uv=ci.getInterpolatedAttribute(s,a,l,c,h,new te)),r&&(u.uv1=ci.getInterpolatedAttribute(r,a,l,c,h,new te)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};ci.getNormal(Uo,Fo,Oo,f.normal),u.face=f,u.barycoord=h}return u}var Bi=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function p(x,g,m,y,v,_,R,w,A,I,b){let M=_/A,C=R/I,P=_/2,N=R/2,U=w/2,H=A+1,z=I+1,ne=0,G=0,ee=new L;for(let ce=0;ce<z;ce++){let ue=ce*C-N;for(let Ce=0;Ce<H;Ce++){let Be=Ce*M-P;ee[x]=Be*y,ee[g]=ue*v,ee[m]=U,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[m]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Ce/A),h.push(1-ce/I),ne+=1}}for(let ce=0;ce<I;ce++)for(let ue=0;ue<A;ue++){let Ce=f+ue+H*ce,Be=f+ue+H*(ce+1),K=f+(ue+1)+H*(ce+1),F=f+(ue+1)+H*ce;l.push(Ce,Be,F),l.push(Be,K,F),G+=6}a.addGroup(d,G,b),d+=G,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let s in i)e[s]=i[s]}return e}function lx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Ft={clone:Ls,merge:Bt},cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ot=class extends kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ga=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new L,od=new te,ad=new te,yt=class extends ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,od,ad),t.subVectors(ad,od)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=-90,hs=1,jc=class extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yt(us,hs,e,t);s.layers=this.layers,this.add(s);let r=new yt(us,hs,e,t);r.layers=this.layers,this.add(r);let o=new yt(us,hs,e,t);o.layers=this.layers,this.add(o);let a=new yt(us,hs,e,t);a.layers=this.layers,this.add(a);let l=new yt(us,hs,e,t);l.layers=this.layers,this.add(l);let c=new yt(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xa=class extends Ct{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jc=class extends _t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Bi(5,5,5),r=new ot({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Et,blending:Mt});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=Gt),new jc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Zl=new L,hx=new L,fx=new We,Vn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Zl.subVectors(i,t).cross(hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fx.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new jt,Ho=new L,Ir=class{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],p=s[9],x=s[10],g=s[11],m=s[12],y=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,g-d,_-m).normalize(),i[1].setComponents(l+r,f+c,g+d,_+m).normalize(),i[2].setComponents(l+o,f+u,g+p,_+y).normalize(),i[3].setComponents(l-o,f-u,g-p,_-y).normalize(),i[4].setComponents(l-a,f-h,g-x,_-v).normalize(),t===Wn)i[5].setComponents(l+a,f+h,g+x,_+v).normalize();else if(t===ha)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ho.x=s.normal.x>0?e.max.x:e.min.x,Ho.y=s.normal.y>0?e.max.y:e.min.y,Ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dx(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _a=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*f-o;for(let v=0;v<c;v++){let _=v*h-r;p.push(_,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,_=y+c*(m+1),R=y+1+c*(m+1),w=y+1+c*m;d.push(v,_,w),d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:_x,alphatest_pars_fragment:vx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:bx,batching_vertex:Sx,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Ex,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Lx,color_pars_fragment:Nx,color_pars_vertex:Ux,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:kx,displacementmap_pars_vertex:zx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Zx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:o_,envmap_vertex:Kx,fog_vertex:jx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:a_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:u_,lights_physical_fragment:h_,lights_physical_pars_fragment:f_,lights_fragment_begin:d_,lights_fragment_maps:p_,lights_fragment_end:m_,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:__,logdepthbuf_vertex:v_,map_fragment:y_,map_pars_fragment:M_,map_particle_fragment:b_,map_particle_pars_fragment:S_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:E_,morphnormal_vertex:C_,morphtarget_pars_vertex:R_,morphtarget_vertex:P_,normal_fragment_begin:I_,normal_fragment_maps:D_,normal_pars_fragment:L_,normal_pars_vertex:N_,normal_vertex:U_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:z_,opaque_fragment:H_,packing:V_,premultiplied_alpha_fragment:G_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:K_,shadowmap_vertex:j_,shadowmask_pars_fragment:J_,skinbase_vertex:Q_,skinning_pars_vertex:ev,skinning_vertex:tv,skinnormal_vertex:nv,specularmap_fragment:iv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:ov,transmission_fragment:av,transmission_pars_fragment:lv,uv_pars_fragment:cv,uv_pars_vertex:uv,uv_vertex:hv,worldpos_vertex:fv,background_vert:dv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:xv,cube_frag:_v,depth_vert:vv,depth_frag:yv,distanceRGBA_vert:Mv,distanceRGBA_frag:bv,equirect_vert:Sv,equirect_frag:wv,linedashed_vert:Tv,linedashed_frag:Av,meshbasic_vert:Ev,meshbasic_frag:Cv,meshlambert_vert:Rv,meshlambert_frag:Pv,meshmatcap_vert:Iv,meshmatcap_frag:Dv,meshnormal_vert:Lv,meshnormal_frag:Nv,meshphong_vert:Uv,meshphong_frag:Fv,meshphysical_vert:Ov,meshphysical_frag:Bv,meshtoon_vert:kv,meshtoon_frag:zv,points_vert:Hv,points_frag:Vv,shadow_vert:Gv,shadow_frag:Wv,sprite_vert:Xv,sprite_frag:qv},_e={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Tn={basic:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Bt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Bt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Bt([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Bt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Bt([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Bt([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Bt([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Bt([_e.lights,_e.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Tn.physical={uniforms:Bt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Vo={r:0,b:0,g:0},Di=new Rn,Yv=new Ue;function Zv(n,e,t,i,s,r,o){let a=new Me(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,_=p(y);_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,v){let _=p(v);_&&(_.isCubeTexture||_.mapping===Za)?(u===void 0&&(u=new Xe(new Bi(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:Ls(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(Di)),u.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,(h!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new _a(2,2),new ot({name:"BackgroundMaterial",uniforms:Ls(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Vo,Dp(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:g}}function $v(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,C,P,N,U){let H=!1,z=h(N,P,C);r!==z&&(r=z,c(r.object)),H=d(M,N,P,U),H&&p(M,N,P,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,C,P,N),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,P){let N=P.wireframe===!0,U=i[M.id];U===void 0&&(U={},i[M.id]=U);let H=U[C.id];H===void 0&&(H={},U[C.id]=H);let z=H[N];return z===void 0&&(z=f(l()),H[N]=z),z}function f(M){let C=[],P=[],N=[];for(let U=0;U<t;U++)C[U]=0,P[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,C,P,N){let U=r.attributes,H=C.attributes,z=0,ne=P.getAttributes();for(let G in ne)if(ne[G].location>=0){let ce=U[G],ue=H[G];if(ue===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(M,C,P,N){let U={},H=C.attributes,z=0,ne=P.getAttributes();for(let G in ne)if(ne[G].location>=0){let ce=H[G];ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));let ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),U[G]=ue,z++}r.attributes=U,r.attributesNum=z,r.index=N}function x(){let M=r.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function g(M){m(M,0)}function m(M,C){let P=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;P[M]=1,N[M]===0&&(n.enableVertexAttribArray(M),N[M]=1),U[M]!==C&&(n.vertexAttribDivisor(M,C),U[M]=C)}function y(){let M=r.newAttributes,C=r.enabledAttributes;for(let P=0,N=C.length;P<N;P++)C[P]!==M[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function v(M,C,P,N,U,H,z){z===!0?n.vertexAttribIPointer(M,C,P,U,H):n.vertexAttribPointer(M,C,P,N,U,H)}function _(M,C,P,N){x();let U=N.attributes,H=P.getAttributes(),z=C.defaultAttributeValues;for(let ne in H){let G=H[ne];if(G.location>=0){let ee=U[ne];if(ee===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){let ce=ee.normalized,ue=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;let Be=Ce.buffer,K=Ce.type,F=Ce.bytesPerElement,X=K===n.INT||K===n.UNSIGNED_INT||ee.gpuType===Bu;if(ee.isInterleavedBufferAttribute){let W=ee.data,Z=W.stride,le=ee.offset;if(W.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)m(G.location+de,W.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let de=0;de<G.locationSize;de++)g(G.location+de);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let de=0;de<G.locationSize;de++)v(G.location+de,ue/G.locationSize,K,ce,Z*F,(le+ue/G.locationSize*de)*F,X)}else{if(ee.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)m(G.location+W,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let W=0;W<G.locationSize;W++)g(G.location+W);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let W=0;W<G.locationSize;W++)v(G.location+W,ue/G.locationSize,K,ce,ue*F,ue/G.locationSize*W*F,X)}}else if(z!==void 0){let ce=z[ne];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(G.location,ce);break;case 3:n.vertexAttrib3fv(G.location,ce);break;case 4:n.vertexAttrib4fv(G.location,ce);break;default:n.vertexAttrib1fv(G.location,ce)}}}}y()}function R(){I();for(let M in i){let C=i[M];for(let P in C){let N=C[P];for(let U in N)u(N[U].object),delete N[U];delete C[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let P in C){let N=C[P];for(let U in N)u(N[U].object),delete N[U];delete C[P]}delete i[M.id]}function A(M){for(let C in i){let P=i[C];if(P[M.id]===void 0)continue;let N=P[M.id];for(let U in N)u(N[U].object),delete N[U];delete P[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Kv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Wt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Nt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!I)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:R,maxSamples:w}}function Jv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Vn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let y=r?0:i,v=y*4,_=m.clippingState||null;l.value=_,_=u(p,f,v,d);for(let R=0;R!==v;++R)_[R]=t[R];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Qv(n){let e=new WeakMap;function t(o,a){return a===vc?o.mapping=Cs:a===yc&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vc||a===yc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Jc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var di=class extends ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,ld=[.125,.215,.35,.446,.526,.582],Ui=20,$l=new di,cd=new Me,Kl=null,jl=0,Jl=0,Ql=!1,Ni=(1+Math.sqrt(5))/2,fs=1/Ni,ud=[new L(-Ni,fs,0),new L(Ni,fs,0),new L(-fs,0,Ni),new L(fs,0,Ni),new L(0,Ni,-fs),new L(0,Ni,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ns=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,jl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Nt,format:Wt,colorSpace:Ut,depthBuffer:!1},s=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ey(r)),this._blurMaterial=ty(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,i,s){let a=new yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cd),u.toneMapping=En,u.autoClear=!1;let d=new Xt({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),p=new Xe(new Bi,d),x=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(cd),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Go(s,y*v,m>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Cs||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Go(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$l)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ud[(s-r-1)%ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Xe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Ui;g>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ui}`);let m=[],y=0;for(let A=0;A<Ui;++A){let I=A/x,b=Math.exp(-I*I/2);m.push(b),A===0?y+=b:A<g&&(y+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let _=this._sizeLods[s],R=3*_*(s>v-Ms?s-v+Ms:0),w=4*(this._cubeSize-_);Go(t,R,w,3*_,2*_),l.setRenderTarget(t),l.render(h,$l)}};function ey(n){let e=[],t=[],i=[],s=n,r=n-Ms+1+ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ms?l=ld[o-n+Ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*d),v=new Float32Array(g*p*d),_=new Float32Array(m*p*d);for(let w=0;w<d;w++){let A=w%3*2/3-1,I=w>2?0:-1,b=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(b,x*p*w),v.set(f,g*p*w);let M=[w,w,w,w,w,w];_.set(M,m*p*w)}let R=new pt;R.setAttribute("position",new xt(y,x)),R.setAttribute("uv",new xt(v,g)),R.setAttribute("faceIndex",new xt(_,m)),e.push(R),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hd(n,e,t){let i=new _t(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ty(n,e,t){let i=new Float32Array(Ui),s=new L(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mt,depthTest:!1,depthWrite:!1})}function fd(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mt,depthTest:!1,depthWrite:!1})}function dd(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mt,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ny(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vc||l===yc,u=l===Cs||l===Rs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ns(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Ns(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sy(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let R=y[v+0],w=y[v+1],A=y[v+2];f.push(R,w,w,A,A,R)}}else if(p!==void 0){let y=p.array;x=p.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let R=v+0,w=v+1,A=v+2;f.push(R,w,w,A,A,R)}}else return;let g=new(Pp(f)?ma:pa)(f,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ry(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function h(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*x[y];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ay(n,e,t){let i=new WeakMap,s=new et;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*R*4*h),A=new da(w,_,R,h);A.type=vn,A.needsUpdate=!0;let I=v*4;for(let M=0;M<h;M++){let C=g[M],P=m[M],N=y[M],U=_*R*4*M;for(let H=0;H<C.count;H++){let z=H*I;d===!0&&(s.fromBufferAttribute(C,H),w[U+z+0]=s.x,w[U+z+1]=s.y,w[U+z+2]=s.z,w[U+z+3]=0),p===!0&&(s.fromBufferAttribute(P,H),w[U+z+4]=s.x,w[U+z+5]=s.y,w[U+z+6]=s.z,w[U+z+7]=0),x===!0&&(s.fromBufferAttribute(N,H),w[U+z+8]=s.x,w[U+z+9]=s.y,w[U+z+10]=s.z,w[U+z+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new te(_,R)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function ly(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Us=class extends Ct{constructor(e,t,i,s,r,o,a,l,c,u=ws){if(u!==ws&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=Fi),i===void 0&&u===fi&&(i=hi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Np=new Ct,pd=new Us(1,1),Up=new da,Fp=new Kc,Op=new xa,md=[],gd=[],xd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function Vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function fy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function dy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;vd.set(i),n.uniformMatrix2fv(this.addr,!1,vd),wt(t,i)}}function py(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;_d.set(i),n.uniformMatrix3fv(this.addr,!1,_d),wt(t,i)}}function my(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(St(t,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),wt(t,i)}}function gy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function yy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pd.compareFunction=Rp,r=pd):r=Np,t.setTexture2D(e||r,s)}function Ty(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fp,s)}function Ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Op,s)}function Ey(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Up,s)}function Cy(n){switch(n){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return My;case 36295:return by;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ry(n,e){n.uniform1fv(this.addr,e)}function Py(n,e){let t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function Iy(n,e){let t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function Dy(n,e){let t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ly(n,e){let t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ny(n,e){let t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uy(n,e){let t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fy(n,e){n.uniform1iv(this.addr,e)}function Oy(n,e){n.uniform2iv(this.addr,e)}function By(n,e){n.uniform3iv(this.addr,e)}function ky(n,e){n.uniform4iv(this.addr,e)}function zy(n,e){n.uniform1uiv(this.addr,e)}function Hy(n,e){n.uniform2uiv(this.addr,e)}function Vy(n,e){n.uniform3uiv(this.addr,e)}function Gy(n,e){n.uniform4uiv(this.addr,e)}function Wy(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Np,r[o])}function Xy(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function qy(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Op,r[o])}function Yy(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Up,r[o])}function Zy(n){switch(n){case 5126:return Ry;case 35664:return Py;case 35665:return Iy;case 35666:return Dy;case 35674:return Ly;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}var Qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cy(t.type)}},eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zy(t.type)}},tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ec=/(\w+)(\])?(\[|\.)?/g;function yd(n,e){n.seq.push(e),n.map[e.id]=e}function $y(n,e,t){let i=n.name,s=i.length;for(ec.lastIndex=0;;){let r=ec.exec(i),o=ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new Qc(a,n,e):new eu(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new tu(a),yd(t,h)),t=h}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$y(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Md(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ky=37297,jy=0;function Jy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var bd=new We;function Qy(n){Ye._getMatrix(bd,Ye.workingColorSpace,n);let e=`mat3( ${bd.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Ja:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jy(n.getShaderSource(e),o)}else return s}function eM(n,e){let t=Qy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tM(n,e){let t;switch(e){case Wr:t="Linear";break;case Xr:t="Reinhard";break;case qr:t="Cineon";break;case yi:t="ACESFilmic";break;case Yr:t="AgX";break;case Zr:t="Neutral";break;case g0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wo=new L;function nM(){Ye.getLuminanceCoefficients(Wo);let n=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function sM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function vr(n){return n!==""}function wd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(n){return n.replace(oM,lM)}var aM=new Map;function lM(n,e){let t=qe[e];if(t===void 0){let i=aM.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}var cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(n){return n.replace(cM,uM)}function uM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zs?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function pM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xp:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function mM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hM(t),c=fM(t),u=dM(t),h=pM(t),f=mM(t),d=iM(t),p=sM(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(vr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(vr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?qe.tonemapping_pars_fragment:"",t.toneMapping!==En?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),nM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=nu(o),o=wd(o,t),o=Td(o,t),a=nu(a),a=wd(a,t),a=Td(a,t),o=Ad(o),a=Ad(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+g+o,_=y+m+a,R=Md(s,s.VERTEX_SHADER,v),w=Md(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(w).trim(),H=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,w);else{let ne=Sd(s,R,"vertex"),G=Sd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+ne+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(N===""||U==="")&&(z=!1);z&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(R),s.deleteShader(w),I=new As(s,x),b=rM(s,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ky)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}var xM=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new su(e),t.set(e,i)),i}},su=class{constructor(e){this.id=xM++,this.code=e,this.usedTimes=0}};function _M(n,e,t,i,s,r,o){let a=new Pr,l=new iu,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,C,P,N){let U=P.fog,H=N.geometry,z=b.isMeshStandardMaterial?P.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),G=ne&&ne.mapping===Za?ne.image.height:null,ee=p[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=ce!==void 0?ce.length:0,Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let Be,K,F,X;if(ee){let st=Tn[ee];Be=st.vertexShader,K=st.fragmentShader}else Be=b.vertexShader,K=b.fragmentShader,l.update(b),F=l.getVertexShaderID(b),X=l.getFragmentShaderID(b);let W=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),le=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,Ne=!!b.map,j=!!b.matcap,oe=!!ne,D=!!b.aoMap,xe=!!b.lightMap,re=!!b.bumpMap,pe=!!b.normalMap,he=!!b.displacementMap,Re=!!b.emissiveMap,ve=!!b.metalnessMap,E=!!b.roughnessMap,S=b.anisotropy>0,V=b.clearcoat>0,J=b.dispersion>0,se=b.iridescence>0,Q=b.sheen>0,Ee=b.transmission>0,me=S&&!!b.anisotropyMap,ye=V&&!!b.clearcoatMap,He=V&&!!b.clearcoatNormalMap,ae=V&&!!b.clearcoatRoughnessMap,Te=se&&!!b.iridescenceMap,Fe=se&&!!b.iridescenceThicknessMap,Oe=Q&&!!b.sheenColorMap,Ae=Q&&!!b.sheenRoughnessMap,$e=!!b.specularMap,ke=!!b.specularColorMap,Je=!!b.specularIntensityMap,O=Ee&&!!b.transmissionMap,ge=Ee&&!!b.thicknessMap,$=!!b.gradientMap,ie=!!b.alphaMap,we=b.alphaTest>0,be=!!b.alphaHash,Ve=!!b.extensions,mt=En;b.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mt=n.toneMapping);let Rt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:K,defines:b.defines,customVertexShaderID:F,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:de,batchingColor:de&&N._colorsTexture!==null,instancing:le,instancingColor:le&&N.instanceColor!==null,instancingMorph:le&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ut,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:j,envMap:oe,envMapMode:oe&&ne.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:xe,bumpMap:re,normalMap:pe,displacementMap:f&&he,emissiveMap:Re,normalMapObjectSpace:pe&&b.normalMapType===b0,normalMapTangentSpace:pe&&b.normalMapType===qu,metalnessMap:ve,roughnessMap:E,anisotropy:S,anisotropyMap:me,clearcoat:V,clearcoatMap:ye,clearcoatNormalMap:He,clearcoatRoughnessMap:ae,dispersion:J,iridescence:se,iridescenceMap:Te,iridescenceThicknessMap:Fe,sheen:Q,sheenColorMap:Oe,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:ke,specularIntensityMap:Je,transmission:Ee,transmissionMap:O,thicknessMap:ge,gradientMap:$,opaque:b.transparent===!1&&b.blending===Ss&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:we,alphaHash:be,combine:b.combine,mapUv:Ne&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:xe&&x(b.lightMap.channel),bumpMapUv:re&&x(b.bumpMap.channel),normalMapUv:pe&&x(b.normalMap.channel),displacementMapUv:he&&x(b.displacementMap.channel),emissiveMapUv:Re&&x(b.emissiveMap.channel),metalnessMapUv:ve&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:me&&x(b.anisotropyMap.channel),clearcoatMapUv:ye&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(b.sheenRoughnessMap.channel),specularMapUv:$e&&x(b.specularMap.channel),specularColorMapUv:ke&&x(b.specularColorMap.channel),specularIntensityMapUv:Je&&x(b.specularIntensityMap.channel),transmissionMapUv:O&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:ie&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ne||ie),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:Re&&b.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Et,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=p[b.type],C;if(M){let P=Tn[M];C=Ft.clone(P.uniforms)}else C=b.uniforms;return C}function R(b,M){let C;for(let P=0,N=u.length;P<N;P++){let U=u[P];if(U.cacheKey===M){C=U,++C.usedTimes;break}}return C===void 0&&(C=new gM(n,M,b,r),u.push(C)),C}function w(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function vM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(h,f,d,p,x,g){let m=o(h,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||yM),i.length>1&&i.sort(f||Cd),s.length>1&&s.sort(f||Cd)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function MM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rd,n.set(i,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function SM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var wM=0;function TM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AM(n){let e=new bM,t=SM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new Ue,o=new Ue;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,v=0,_=0,R=0,w=0,A=0;c.sort(TM);for(let b=0,M=c.length;b<M;b++){let C=c[b],P=C.color,N=C.intensity,U=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*N,h+=P.g*N,f+=P.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],N);A++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ne=C.shadow,G=t.get(C);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=C.shadow.matrix,y++}i.directional[d]=z,d++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(P).multiplyScalar(N),z.distance=U,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[x]=z;let ne=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,ne.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[x]=ne.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=H,_++}x++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(P).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=z,g++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let ne=C.shadow,G=t.get(C);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=C.shadow.matrix,v++}i.point[p]=z,p++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[m]=z,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=d,I.pointLength=p,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=A,i.version=wM++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(v.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Pd(n){let e=new AM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function EM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pd(n),e.set(s,[a])):r>=o.length?(a=new Pd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ru=class extends kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ou=class extends kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PM(n,e,t){let i=new Ir,s=new te,r=new te,o=new et,a=new ru({depthPacking:M0}),l=new ou,c={},u=t.maxTextureSize,h={[Cn]:Et,[Et]:Cn,[xn]:xn},f=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:CM,fragmentShader:RM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new pt;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let m=this.type;this.render=function(w,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Mt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=m!==gn&&this.type===gn,U=m===gn&&this.type!==gn;for(let H=0,z=w.length;H<z;H++){let ne=w[H],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||N===!0||U===!0){let ue=this.type!==gn?{minFilter:bt,magFilter:bt}:{};G.map!==null&&G.map.dispose(),G.map=new _t(s.x,s.y,ue),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let ce=G.getViewportCount();for(let ue=0;ue<ce;ue++){let Ce=G.getViewport(ue);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),P.viewport(o),G.updateMatrices(ne,ue),i=G.getFrustum(),_(A,I,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&y(G,I),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,C)};function y(w,A){let I=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _t(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,I,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,I,d,x,null)}function v(w,A,I,b){let M=null,C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let P=M.uuid,N=A.uuid,U=c[P];U===void 0&&(U={},c[P]=U);let H=U[N];H===void 0&&(H=M.clone(),U[N]=H,A.addEventListener("dispose",R)),M=H}if(M.visible=A.visible,M.wireframe=A.wireframe,b===gn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let P=n.properties.get(M);P.light=I}return M}function _(w,A,I,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let N=e.update(w),U=w.material;if(Array.isArray(U)){let H=N.groups;for(let z=0,ne=H.length;z<ne;z++){let G=H[z],ee=U[G.materialIndex];if(ee&&ee.visible){let ce=v(w,ee,b,M);w.onBeforeShadow(n,w,A,I,N,ce,G),n.renderBufferDirect(I,null,N,ce,w,G),w.onAfterShadow(n,w,A,I,N,ce,G)}}}else if(U.visible){let H=v(w,U,b,M);w.onBeforeShadow(n,w,A,I,N,H,null),n.renderBufferDirect(I,null,N,H,w,null),w.onAfterShadow(n,w,A,I,N,H,null)}}let P=w.children;for(let N=0,U=P.length;N<U;N++)_(P[N],A,I,b,M)}function R(w){w.target.removeEventListener("dispose",R);for(let I in c){let b=c[I],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var IM={[fc]:dc,[pc]:xc,[mc]:_c,[Es]:gc,[dc]:fc,[xc]:pc,[_c]:mc,[gc]:Es};function DM(n,e){function t(){let O=!1,ge=new et,$=null,ie=new et(0,0,0,0);return{setMask:function(we){$!==we&&!O&&(n.colorMask(we,we,we,we),$=we)},setLocked:function(we){O=we},setClear:function(we,be,Ve,mt,Rt){Rt===!0&&(we*=mt,be*=mt,Ve*=mt),ge.set(we,be,Ve,mt),ie.equals(ge)===!1&&(n.clearColor(we,be,Ve,mt),ie.copy(ge))},reset:function(){O=!1,$=null,ie.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,$=null,ie=null,we=null;return{setReversed:function(be){if(ge!==be){let Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let mt=we;we=null,this.setClear(mt)}ge=be},getReversed:function(){return ge},setTest:function(be){be?W(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(be){$!==be&&!O&&(n.depthMask(be),$=be)},setFunc:function(be){if(ge&&(be=IM[be]),ie!==be){switch(be){case fc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case xc:n.depthFunc(n.GREATER);break;case _c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=be}},setLocked:function(be){O=be},setClear:function(be){we!==be&&(ge&&(be=1-be),n.clearDepth(be),we=be)},reset:function(){O=!1,$=null,ie=null,we=null,ge=!1}}}function s(){let O=!1,ge=null,$=null,ie=null,we=null,be=null,Ve=null,mt=null,Rt=null;return{setTest:function(st){O||(st?W(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(st){ge!==st&&!O&&(n.stencilMask(st),ge=st)},setFunc:function(st,hn,Nn){($!==st||ie!==hn||we!==Nn)&&(n.stencilFunc(st,hn,Nn),$=st,ie=hn,we=Nn)},setOp:function(st,hn,Nn){(be!==st||Ve!==hn||mt!==Nn)&&(n.stencilOp(st,hn,Nn),be=st,Ve=hn,mt=Nn)},setLocked:function(st){O=st},setClear:function(st){Rt!==st&&(n.clearStencil(st),Rt=st)},reset:function(){O=!1,ge=null,$=null,ie=null,we=null,be=null,Ve=null,mt=null,Rt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,R=null,w=null,A=new Me(0,0,0),I=0,b=!1,M=null,C=null,P=null,N=null,U=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ne=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=ne>=2);let ee=null,ce={},ue=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Be=new et().fromArray(ue),K=new et().fromArray(Ce);function F(O,ge,$,ie){let we=new Uint8Array(4),be=n.createTexture();n.bindTexture(O,be),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<$;Ve++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ge+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return be}let X={};X[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(Es),re(!1),pe(Uf),W(n.CULL_FACE),D(Mt);function W(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Z(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function le(O,ge){return h[O]!==ge?(n.bindFramebuffer(O,ge),h[O]=ge,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function de(O,ge){let $=d,ie=!1;if(O){$=f.get(ge),$===void 0&&($=[],f.set(ge,$));let we=O.textures;if($.length!==we.length||$[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Ve=we.length;be<Ve;be++)$[be]=n.COLOR_ATTACHMENT0+be;$.length=we.length,ie=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ie=!0);ie&&n.drawBuffers($)}function Ne(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let j={[sn]:n.FUNC_ADD,[e0]:n.FUNC_SUBTRACT,[t0]:n.FUNC_REVERSE_SUBTRACT};j[n0]=n.MIN,j[i0]=n.MAX;let oe={[Hs]:n.ZERO,[s0]:n.ONE,[r0]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[c0]:n.SRC_ALPHA_SATURATE,[Ya]:n.DST_COLOR,[qa]:n.DST_ALPHA,[o0]:n.ONE_MINUS_SRC_COLOR,[hc]:n.ONE_MINUS_SRC_ALPHA,[l0]:n.ONE_MINUS_DST_COLOR,[a0]:n.ONE_MINUS_DST_ALPHA,[u0]:n.CONSTANT_COLOR,[h0]:n.ONE_MINUS_CONSTANT_COLOR,[f0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,ge,$,ie,we,be,Ve,mt,Rt,st){if(O===Mt){x===!0&&(Z(n.BLEND),x=!1);return}if(x===!1&&(W(n.BLEND),x=!0),O!==Fu){if(O!==g||st!==b){if((m!==sn||_!==sn)&&(n.blendEquation(n.FUNC_ADD),m=sn,_=sn),st)switch(O){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ca:n.blendFunc(n.ONE,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ca:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Of:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,R=null,w=null,A.set(0,0,0),I=0,g=O,b=st}return}we=we||ge,be=be||$,Ve=Ve||ie,(ge!==m||we!==_)&&(n.blendEquationSeparate(j[ge],j[we]),m=ge,_=we),($!==y||ie!==v||be!==R||Ve!==w)&&(n.blendFuncSeparate(oe[$],oe[ie],oe[be],oe[Ve]),y=$,v=ie,R=be,w=Ve),(mt.equals(A)===!1||Rt!==I)&&(n.blendColor(mt.r,mt.g,mt.b,Rt),A.copy(mt),I=Rt),g=O,b=!1}function xe(O,ge){O.side===xn?Z(n.CULL_FACE):W(n.CULL_FACE);let $=O.side===Et;ge&&($=!$),re($),O.blending===Ss&&O.transparent===!1?D(Mt):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ie=O.stencilWrite;a.setTest(ie),ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function pe(O){O!==Jg?(W(n.CULL_FACE),O!==C&&(O===Uf?n.cullFace(n.BACK):O===Qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),C=O}function he(O){O!==P&&(z&&n.lineWidth(O),P=O)}function Re(O,ge,$){O?(W(n.POLYGON_OFFSET_FILL),(N!==ge||U!==$)&&(n.polygonOffset(ge,$),N=ge,U=$)):Z(n.POLYGON_OFFSET_FILL)}function ve(O){O?W(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function E(O){O===void 0&&(O=n.TEXTURE0+H-1),ee!==O&&(n.activeTexture(O),ee=O)}function S(O,ge,$){$===void 0&&(ee===null?$=n.TEXTURE0+H-1:$=ee);let ie=ce[$];ie===void 0&&(ie={type:void 0,texture:void 0},ce[$]=ie),(ie.type!==O||ie.texture!==ge)&&(ee!==$&&(n.activeTexture($),ee=$),n.bindTexture(O,ge||X[O]),ie.type=O,ie.texture=ge)}function V(){let O=ce[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(O){Be.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Be.copy(O))}function Ae(O){K.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function $e(O,ge){let $=c.get(ge);$===void 0&&($=new WeakMap,c.set(ge,$));let ie=$.get(O);ie===void 0&&(ie=n.getUniformBlockIndex(ge,O.name),$.set(O,ie))}function ke(O,ge){let ie=c.get(ge).get(O);l.get(ge)!==ie&&(n.uniformBlockBinding(ge,ie,O.__bindingPointIndex),l.set(ge,ie))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,ce={},h={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,R=null,w=null,A=new Me(0,0,0),I=0,b=!1,M=null,C=null,P=null,N=null,U=null,Be.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:Z,bindFramebuffer:le,drawBuffers:de,useProgram:Ne,setBlending:D,setMaterial:xe,setFlipSided:re,setCullFace:pe,setLineWidth:he,setPolygonOffset:Re,setScissorTest:ve,activeTexture:E,bindTexture:S,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:se,texImage2D:Te,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:me,compressedTexSubImage3D:ye,scissor:Oe,viewport:Ae,reset:Je}}function Id(n,e,t,i){let s=LM(i);switch(t){case bp:return n*e;case wp:return n*e;case Tp:return n*e*2;case Hu:return n*e/s.components*s.byteLength;case Vu:return n*e/s.components*s.byteLength;case Ap:return n*e*2/s.components*s.byteLength;case Gu:return n*e*2/s.components*s.byteLength;case Sp:return n*e*3/s.components*s.byteLength;case Wt:return n*e*4/s.components*s.byteLength;case Wu:return n*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Mc:case Sc:return Math.max(n,8)*Math.max(e,8)/2;case Tc:case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case Vc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ep:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function LM(n){switch(n){case yn:case vp:return{byteLength:1,components:1};case Cr:case yp:case Nt:return{byteLength:2,components:1};case ku:case zu:return{byteLength:2,components:4};case Fi:case Bu:case vn:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function NM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,S){return d?new OffscreenCanvas(E,S):Rr("canvas")}function x(E,S,V){let J=1,se=ve(E);if((se.width>V||se.height>V)&&(J=V/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(J*se.width),Ee=Math.floor(J*se.height);h===void 0&&(h=p(Q,Ee));let me=S?p(Q,Ee):h;return me.width=Q,me.height=Ee,me.getContext("2d").drawImage(E,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Ee+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(E,S,V,J,se=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=S;if(S===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),S===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),S===n.RGBA){let Ee=se?Ja:Ye.getTransfer(J);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=Ee===it?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(E,S){let V;return E?S===null||S===Fi||S===hi?V=n.DEPTH24_STENCIL8:S===vn?V=n.DEPTH32F_STENCIL8:S===Cr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===hi?V=n.DEPTH_COMPONENT24:S===vn?V=n.DEPTH_COMPONENT32F:S===Cr&&(V=n.DEPTH_COMPONENT16),V}function R(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==bt&&E.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function w(E){let S=E.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&u.delete(S)}function A(E){let S=E.target;S.removeEventListener("dispose",A),M(S)}function I(E){let S=i.get(E);if(S.__webglInit===void 0)return;let V=E.source,J=f.get(V);if(J){let se=J[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(E),Object.keys(J).length===0&&f.delete(V)}i.remove(E)}function b(E){let S=i.get(E);n.deleteTexture(S.__webglTexture);let V=E.source,J=f.get(V);delete J[S.__cacheKey],o.memory.textures--}function M(E){let S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let se=0;se<S.__webglFramebuffer[J].length;se++)n.deleteFramebuffer(S.__webglFramebuffer[J][se]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=E.textures;for(let J=0,se=V.length;J<se;J++){let Q=i.get(V[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(E)}let C=0;function P(){C=0}function N(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function U(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function H(E,S){let V=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,E,S);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function z(E,S){let V=i.get(E);if(E.version>0&&V.__version!==E.version){K(V,E,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function ne(E,S){let V=i.get(E);if(E.version>0&&V.__version!==E.version){K(V,E,S);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function G(E,S){let V=i.get(E);if(E.version>0&&V.__version!==E.version){F(V,E,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}let ee={[Kt]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[Er]:n.MIRRORED_REPEAT},ce={[bt]:n.NEAREST,[Ou]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[yr]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},ue={[S0]:n.NEVER,[R0]:n.ALWAYS,[w0]:n.LESS,[Rp]:n.LEQUAL,[T0]:n.EQUAL,[C0]:n.GEQUAL,[A0]:n.GREATER,[E0]:n.NOTEQUAL};function Ce(E,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===yr||S.magFilter===_s||S.magFilter===An||S.minFilter===Gt||S.minFilter===yr||S.minFilter===_s||S.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[S.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ce[S.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bt||S.minFilter!==_s&&S.minFilter!==An||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Be(E,S){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));let J=S.source,se=f.get(J);se===void 0&&(se={},f.set(J,se));let Q=U(S);if(Q!==E.__cacheKey){se[Q]===void 0&&(se[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[Q].usedTimes++;let Ee=se[E.__cacheKey];Ee!==void 0&&(se[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(S)),E.__cacheKey=Q,E.__webglTexture=se[Q].texture}return V}function K(E,S,V){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);let se=Be(E,S),Q=S.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+V);let Ee=i.get(Q);if(Q.version!==Ee.__version||se===!0){t.activeTexture(n.TEXTURE0+V);let me=Ye.getPrimaries(Ye.workingColorSpace),ye=S.colorSpace===li?null:Ye.getPrimaries(S.colorSpace),He=S.colorSpace===li||me===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ae=x(S.image,!1,s.maxTextureSize);ae=Re(S,ae);let Te=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type),Oe=v(S.internalFormat,Te,Fe,S.colorSpace,S.isVideoTexture);Ce(J,S);let Ae,$e=S.mipmaps,ke=S.isVideoTexture!==!0,Je=Ee.__version===void 0||se===!0,O=Q.dataReady,ge=R(S,ae);if(S.isDepthTexture)Oe=_(S.format===fi,S.type),Je&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Te,Fe,null));else if(S.isDataTexture)if($e.length>0){ke&&Je&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,$e[0].width,$e[0].height);for(let $=0,ie=$e.length;$<ie;$++)Ae=$e[$],ke?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data);S.generateMipmaps=!1}else ke?(Je&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,ae.width,ae.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Fe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Te,Fe,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Oe,$e[0].width,$e[0].height,ae.depth);for(let $=0,ie=$e.length;$<ie;$++)if(Ae=$e[$],S.format!==Wt)if(Te!==null)if(ke){if(O)if(S.layerUpdates.size>0){let we=Id(Ae.width,Ae.height,S.format,S.type);for(let be of S.layerUpdates){let Ve=Ae.data.subarray(be*we/Ae.data.BYTES_PER_ELEMENT,(be+1)*we/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,be,Ae.width,Ae.height,1,Te,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ae.depth,Te,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ae.depth,Te,Fe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ae.depth,0,Te,Fe,Ae.data)}else{ke&&Je&&t.texStorage2D(n.TEXTURE_2D,ge,Oe,$e[0].width,$e[0].height);for(let $=0,ie=$e.length;$<ie;$++)Ae=$e[$],S.format!==Wt?Te!==null?ke?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Te,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Te,Fe,Ae.data)}else if(S.isDataArrayTexture)if(ke){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Oe,ae.width,ae.height,ae.depth),O)if(S.layerUpdates.size>0){let $=Id(ae.width,ae.height,S.format,S.type);for(let ie of S.layerUpdates){let we=ae.data.subarray(ie*$/ae.data.BYTES_PER_ELEMENT,(ie+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,Te,Fe,we)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Fe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Te,Fe,ae.data);else if(S.isData3DTexture)ke?(Je&&t.texStorage3D(n.TEXTURE_3D,ge,Oe,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Fe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Te,Fe,ae.data);else if(S.isFramebufferTexture){if(Je)if(ke)t.texStorage2D(n.TEXTURE_2D,ge,Oe,ae.width,ae.height);else{let $=ae.width,ie=ae.height;for(let we=0;we<ge;we++)t.texImage2D(n.TEXTURE_2D,we,Oe,$,ie,0,Te,Fe,null),$>>=1,ie>>=1}}else if($e.length>0){if(ke&&Je){let $=ve($e[0]);t.texStorage2D(n.TEXTURE_2D,ge,Oe,$.width,$.height)}for(let $=0,ie=$e.length;$<ie;$++)Ae=$e[$],ke?O&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te,Fe,Ae):t.texImage2D(n.TEXTURE_2D,$,Oe,Te,Fe,Ae);S.generateMipmaps=!1}else if(ke){if(Je){let $=ve(ae);t.texStorage2D(n.TEXTURE_2D,ge,Oe,$.width,$.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Fe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Te,Fe,ae);g(S)&&m(J),Ee.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function F(E,S,V){if(S.image.length!==6)return;let J=Be(E,S),se=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);let Q=i.get(se);if(se.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+V);let Ee=Ye.getPrimaries(Ye.workingColorSpace),me=S.colorSpace===li?null:Ye.getPrimaries(S.colorSpace),ye=S.colorSpace===li||Ee===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let He=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let ie=0;ie<6;ie++)!He&&!ae?Te[ie]=x(S.image[ie],!0,s.maxCubemapSize):Te[ie]=ae?S.image[ie].image:S.image[ie],Te[ie]=Re(S,Te[ie]);let Fe=Te[0],Oe=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),$e=v(S.internalFormat,Oe,Ae,S.colorSpace),ke=S.isVideoTexture!==!0,Je=Q.__version===void 0||J===!0,O=se.dataReady,ge=R(S,Fe);Ce(n.TEXTURE_CUBE_MAP,S);let $;if(He){ke&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,$e,Fe.width,Fe.height);for(let ie=0;ie<6;ie++){$=Te[ie].mipmaps;for(let we=0;we<$.length;we++){let be=$[we];S.format!==Wt?Oe!==null?ke?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,be.width,be.height,Oe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,$e,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,be.width,be.height,Oe,Ae,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,$e,be.width,be.height,0,Oe,Ae,be.data)}}}else{if($=S.mipmaps,ke&&Je){$.length>0&&ge++;let ie=ve(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){ke?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te[ie].width,Te[ie].height,Oe,Ae,Te[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,Te[ie].width,Te[ie].height,0,Oe,Ae,Te[ie].data);for(let we=0;we<$.length;we++){let Ve=$[we].image[ie].image;ke?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ve.width,Ve.height,Oe,Ae,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,$e,Ve.width,Ve.height,0,Oe,Ae,Ve.data)}}else{ke?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,Ae,Te[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,Oe,Ae,Te[ie]);for(let we=0;we<$.length;we++){let be=$[we];ke?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Oe,Ae,be.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,$e,Oe,Ae,be.image[ie])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),Q.__version=se.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function X(E,S,V,J,se,Q){let Ee=r.convert(V.format,V.colorSpace),me=r.convert(V.type),ye=v(V.internalFormat,Ee,me,V.colorSpace),He=i.get(S),ae=i.get(V);if(ae.__renderTarget=S,!He.__hasExternalTextures){let Te=Math.max(1,S.width>>Q),Fe=Math.max(1,S.height>>Q);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,ye,Te,Fe,S.depth,0,Ee,me,null):t.texImage2D(se,Q,ye,Te,Fe,0,Ee,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),pe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,se,ae.__webglTexture,0,re(S)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,se,ae.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(E,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),S.depthBuffer){let J=S.depthTexture,se=J&&J.isDepthTexture?J.type:null,Q=_(S.stencilBuffer,se),Ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=re(S);pe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,Q,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{let J=S.textures;for(let se=0;se<J.length;se++){let Q=J[se],Ee=r.convert(Q.format,Q.colorSpace),me=r.convert(Q.type),ye=v(Q.internalFormat,Ee,me,Q.colorSpace),He=re(S);V&&pe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ye,S.width,S.height):pe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,ye,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ye,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let se=J.__webglTexture,Q=re(S);if(S.depthTexture.format===ws)pe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===fi)pe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function le(E){let S=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=J}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,E)}else if(V){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),W(S.__webglDepthbuffer[J],E,!1);else{let se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),W(S.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(E,S,V){let J=i.get(E);S!==void 0&&X(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&le(E)}function Ne(E){let S=E.texture,V=i.get(E),J=i.get(S);E.addEventListener("dispose",A);let se=E.textures,Q=E.isWebGLCubeRenderTarget===!0,Ee=se.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let ye=0;ye<S.mipmaps.length;ye++)V.__webglFramebuffer[me][ye]=n.createFramebuffer()}else V.__webglFramebuffer[me]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)V.__webglFramebuffer[me]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let me=0,ye=se.length;me<ye;me++){let He=i.get(se[me]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&pe(E)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){let ye=se[me];V.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[me]);let He=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),Te=v(ye.internalFormat,He,ae,ye.colorSpace,E.isXRRenderTarget===!0),Fe=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,V.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),W(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)X(V.__webglFramebuffer[me][ye],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else X(V.__webglFramebuffer[me],E,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let me=0,ye=se.length;me<ye;me++){let He=se[me],ae=i.get(He);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ce(n.TEXTURE_2D,He),X(V.__webglFramebuffer,E,He,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),g(He)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,J.__webglTexture),Ce(me,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)X(V.__webglFramebuffer[ye],E,S,n.COLOR_ATTACHMENT0,me,ye);else X(V.__webglFramebuffer,E,S,n.COLOR_ATTACHMENT0,me,0);g(S)&&m(me),t.unbindTexture()}E.depthBuffer&&le(E)}function j(E){let S=E.textures;for(let V=0,J=S.length;V<J;V++){let se=S[V];if(g(se)){let Q=y(E),Ee=i.get(se).__webglTexture;t.bindTexture(Q,Ee),m(Q),t.unbindTexture()}}}let oe=[],D=[];function xe(E){if(E.samples>0){if(pe(E)===!1){let S=E.textures,V=E.width,J=E.height,se=n.COLOR_BUFFER_BIT,Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),me=S.length>1;if(me)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);let He=i.get(S[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,se,n.NEAREST),l===!0&&(oe.length=0,D.length=0,oe.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(Q),D.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);let He=i.get(S[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let S=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function re(E){return Math.min(s.maxSamples,E.samples)}function pe(E){let S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(E){let S=o.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}function Re(E,S){let V=E.colorSpace,J=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==Ut&&V!==li&&(Ye.getTransfer(V)===it?(J!==Wt||se!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=de,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=X,this.useMultisampledRTT=pe}function UM(n,e){function t(i,s=li){let r,o=Ye.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vp)return n.BYTE;if(i===yp)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Bu)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Nt)return n.HALF_FLOAT;if(i===bp)return n.ALPHA;if(i===Sp)return n.RGB;if(i===Wt)return n.RGBA;if(i===wp)return n.LUMINANCE;if(i===Tp)return n.LUMINANCE_ALPHA;if(i===ws)return n.DEPTH_COMPONENT;if(i===fi)return n.DEPTH_STENCIL;if(i===Hu)return n.RED;if(i===Vu)return n.RED_INTEGER;if(i===Ap)return n.RG;if(i===Gu)return n.RG_INTEGER;if(i===Wu)return n.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===bc||i===Sc||i===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tc||i===Ac||i===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tc||i===Ac)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ec)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Ic||i===Dc||i===Lc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Vc||i===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===Wc||i===Xc||i===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===la)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var au=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},At=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},FM={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Ct,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ot({vertexShader:OM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends qn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=new lu,g=t.getContextAttributes(),m=null,y=null,v=[],_=[],R=new te,w=null,A=new yt;A.viewport=new et;let I=new yt;I.viewport=new et;let b=[A,I],M=new au,C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let F=v[K];return F===void 0&&(F=new Sr,v[K]=F),F.getTargetRaySpace()},this.getControllerGrip=function(K){let F=v[K];return F===void 0&&(F=new Sr,v[K]=F),F.getGripSpace()},this.getHand=function(K){let F=v[K];return F===void 0&&(F=new Sr,v[K]=F),F.getHandSpace()};function N(K){let F=_.indexOf(K.inputSource);if(F===-1)return;let X=v[F];X!==void 0&&(X.update(K.inputSource,K.frame,c||o),X.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let K=0;K<v.length;K++){let F=_[K];F!==null&&(_[K]=null,v[K].disconnect(F))}C=null,P=null,x.reset(),e.setRenderTarget(m),d=null,f=null,h=null,s=null,y=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let F={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,F),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _t(d.framebufferWidth,d.framebufferHeight,{format:Wt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,X=null,W=null;g.depth&&(W=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?fi:ws,X=g.stencil?hi:Fi);let Z={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new _t(f.textureWidth,f.textureHeight,{format:Wt,type:yn,depthTexture:new Us(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(K){for(let F=0;F<K.removed.length;F++){let X=K.removed[F],W=_.indexOf(X);W>=0&&(_[W]=null,v[W].disconnect(X))}for(let F=0;F<K.added.length;F++){let X=K.added[F],W=_.indexOf(X);if(W===-1){for(let le=0;le<v.length;le++)if(le>=_.length){_.push(X),W=le;break}else if(_[le]===null){_[le]=X,W=le;break}if(W===-1)break}let Z=v[W];Z&&Z.connect(X)}}let z=new L,ne=new L;function G(K,F,X){z.setFromMatrixPosition(F.matrixWorld),ne.setFromMatrixPosition(X.matrixWorld);let W=z.distanceTo(ne),Z=F.projectionMatrix.elements,le=X.projectionMatrix.elements,de=Z[14]/(Z[10]-1),Ne=Z[14]/(Z[10]+1),j=(Z[9]+1)/Z[5],oe=(Z[9]-1)/Z[5],D=(Z[8]-1)/Z[0],xe=(le[8]+1)/le[0],re=de*D,pe=de*xe,he=W/(-D+xe),Re=he*-D;if(F.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(he),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Z[10]===-1)K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let ve=de+he,E=Ne+he,S=re-Re,V=pe+(W-Re),J=j*Ne/E*ve,se=oe*Ne/E*ve;K.projectionMatrix.makePerspective(S,V,J,se,ve,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,F){F===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(F.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let F=K.near,X=K.far;x.texture!==null&&(x.depthNear>0&&(F=x.depthNear),x.depthFar>0&&(X=x.depthFar)),M.near=I.near=A.near=F,M.far=I.far=A.far=X,(C!==M.near||P!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,P=M.far),A.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let W=K.parent,Z=M.cameras;ee(M,W);for(let le=0;le<Z.length;le++)ee(Z[le],W);Z.length===2?G(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ce(K,M,W)};function ce(K,F,X){X===null?K.matrix.copy(F.matrixWorld):(K.matrix.copy(X.matrixWorld),K.matrix.invert(),K.matrix.multiply(F.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ue=null;function Ce(K,F){if(u=F.getViewerPose(c||o),p=F,u!==null){let X=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let W=!1;X.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let le=0;le<X.length;le++){let de=X[le],Ne=null;if(d!==null)Ne=d.getViewport(de);else{let oe=h.getViewSubImage(f,de);Ne=oe.viewport,le===0&&(e.setRenderTargetTextures(y,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(y))}let j=b[le];j===void 0&&(j=new yt,j.layers.enable(le),j.viewport=new et,b[le]=j),j.matrix.fromArray(de.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(de.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),le===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(j)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let le=h.getDepthInformation(X[0]);le&&le.isValid&&le.texture&&x.init(e,le,s.renderState)}}for(let X=0;X<v.length;X++){let W=_[X],Z=v[X];W!==null&&Z!==void 0&&Z.update(W,F,c||o)}ue&&ue(K,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),p=null}let Be=new Lp;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(K){ue=K},this.dispose=function(){}}},Li=new Rn,kM=new Ue;function zM(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Dp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,Li.copy(_),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Li)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Et&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function HM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;i.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(p(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",g));let R=v.program;i.updateUBOMapping(y,R);let w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){let v=h();y.__bindingPointIndex=v;let _=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,A=_.length;w<A;w++){let I=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=I.length;b<M;b++){let C=I[b];if(d(C,w,b,R)===!0){let P=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],U=0;for(let H=0;H<N.length;H++){let z=N[H],ne=x(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,P+U,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,U),U+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,_,R){let w=y.value,A=v+"_"+_;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{let I=R[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function p(y){let v=y.uniforms,_=0,R=16;for(let A=0,I=v.length;A<I;A++){let b=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,C=b.length;M<C;M++){let P=b[M],N=Array.isArray(P.value)?P.value:[P.value];for(let U=0,H=N.length;U<H;U++){let z=N[U],ne=x(z),G=_%R,ee=G%ne.boundary,ce=G+ee;_+=ee,ce!==0&&R-ce<ne.storage&&(_+=R-ce),P.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=ne.storage}}}let w=_%R;return w>0&&(_+=R-w),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var va=class{constructor(e={}){let{canvas:t=q0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=En,this.toneMappingExposure=1;let _=this,R=!1,w=0,A=0,I=null,b=-1,M=null,C=new et,P=new et,N=null,U=new Me(0),H=0,z=t.width,ne=t.height,G=1,ee=null,ce=null,ue=new et(0,0,z,ne),Ce=new et(0,0,z,ne),Be=!1,K=new Ir,F=!1,X=!1,W=new Ue,Z=new Ue,le=new L,de=new et,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function oe(){return I===null?G:1}let D=i;function xe(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",be,!1),D===null){let B="webgl2";if(D=xe(B,T),D===null)throw xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,pe,he,Re,ve,E,S,V,J,se,Q,Ee,me,ye,He,ae,Te,Fe,Oe,Ae,$e,ke,Je,O;function ge(){re=new iy(D),re.init(),ke=new UM(D,re),pe=new jv(D,re,e,ke),he=new DM(D,re),pe.reverseDepthBuffer&&f&&he.buffers.depth.setReversed(!0),Re=new oy(D),ve=new vM,E=new NM(D,re,he,ve,pe,ke,Re),S=new Qv(_),V=new ny(_),J=new dx(D),Je=new $v(D,J),se=new sy(D,J,Re,Je),Q=new ly(D,se,J,Re),Oe=new ay(D,pe,E),ae=new Jv(ve),Ee=new _M(_,S,V,re,pe,Je,ae),me=new zM(_,ve),ye=new MM,He=new EM(re),Fe=new Zv(_,S,V,he,Q,d,l),Te=new PM(_,Q,pe),O=new HM(D,Re,pe,he),Ae=new Kv(D,re,Re),$e=new ry(D,re,Re),Re.programs=Ee.programs,_.capabilities=pe,_.extensions=re,_.properties=ve,_.renderLists=ye,_.shadowMap=Te,_.state=he,_.info=Re}ge();let $=new cu(_,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(z,ne,!1))},this.getSize=function(T){return T.set(z,ne)},this.setSize=function(T,B,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,ne=B,t.width=Math.floor(T*G),t.height=Math.floor(B*G),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(z*G,ne*G).floor()},this.setDrawingBufferSize=function(T,B,q){z=T,ne=B,G=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,B,q,Y){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,B,q,Y),he.viewport(C.copy(ue).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,B,q,Y){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,B,q,Y),he.scissor(P.copy(Ce).multiplyScalar(G).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){he.setScissorTest(Be=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,B=!0,q=!0){let Y=0;if(T){let k=!1;if(I!==null){let fe=I.texture.format;k=fe===Wu||fe===Gu||fe===Vu}if(k){let fe=I.texture.type,Se=fe===yn||fe===Fi||fe===Cr||fe===hi||fe===ku||fe===zu,Pe=Fe.getClearColor(),Ie=Fe.getClearAlpha(),ze=Pe.r,Ge=Pe.g,De=Pe.b;Se?(p[0]=ze,p[1]=Ge,p[2]=De,p[3]=Ie,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=ze,x[1]=Ge,x[2]=De,x[3]=Ie,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ye.dispose(),He.dispose(),ve.dispose(),S.dispose(),V.dispose(),Q.dispose(),Je.dispose(),O.dispose(),Ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",Tf),$.removeEventListener("sessionend",Af),Ei.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Re.autoReset,B=Te.enabled,q=Te.autoUpdate,Y=Te.needsUpdate,k=Te.type;ge(),Re.autoReset=T,Te.enabled=B,Te.autoUpdate=q,Te.needsUpdate=Y,Te.type=k}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){let B=T.target;B.removeEventListener("dispose",Ve),mt(B)}function mt(T){Rt(T),ve.remove(T)}function Rt(T){let B=ve.get(T).programs;B!==void 0&&(B.forEach(function(q){Ee.releaseProgram(q)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,Y,k,fe){B===null&&(B=Ne);let Se=k.isMesh&&k.matrixWorld.determinant()<0,Pe=$g(T,B,q,Y,k);he.setMaterial(Y,Se);let Ie=q.index,ze=1;if(Y.wireframe===!0){if(Ie=se.getWireframeAttribute(q),Ie===void 0)return;ze=2}let Ge=q.drawRange,De=q.attributes.position,Qe=Ge.start*ze,lt=(Ge.start+Ge.count)*ze;fe!==null&&(Qe=Math.max(Qe,fe.start*ze),lt=Math.min(lt,(fe.start+fe.count)*ze)),Ie!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Ie.count)):De!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,De.count));let ct=lt-Qe;if(ct<0||ct===1/0)return;Je.setup(k,Y,Pe,q,Ie);let Vt,tt=Ae;if(Ie!==null&&(Vt=J.get(Ie),tt=$e,tt.setIndex(Vt)),k.isMesh)Y.wireframe===!0?(he.setLineWidth(Y.wireframeLinewidth*oe()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(k.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*oe()),k.isLineSegments?tt.setMode(D.LINES):k.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else k.isPoints?tt.setMode(D.POINTS):k.isSprite&&tt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Le=k._multiDrawStarts,Un=k._multiDrawCounts,nt=k._multiDrawCount,fn=Ie?J.get(Ie).bytesPerElement:1,Ji=ve.get(Y).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)Ji.setValue(D,"_gl_DrawID",Yt),tt.render(Le[Yt]/fn,Un[Yt])}else if(k.isInstancedMesh)tt.renderInstances(Qe,ct,k.count);else if(q.isInstancedBufferGeometry){let Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Un=Math.min(q.instanceCount,Le);tt.renderInstances(Qe,ct,Un)}else tt.render(Qe,ct)};function st(T,B,q){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=Et,T.needsUpdate=!0,bo(T,B,q),T.side=Cn,T.needsUpdate=!0,bo(T,B,q),T.side=xn):bo(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),m=He.get(q),m.init(B),v.push(m),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==q&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let Y=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){let Pe=fe[Se];st(Pe,q,k),Y.add(Pe)}else st(fe,q,k),Y.add(fe)}),v.pop(),m=null,Y},this.compileAsync=function(T,B,q=null){let Y=this.compile(T,B,q);return new Promise(k=>{function fe(){if(Y.forEach(function(Se){ve.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){k(T);return}setTimeout(fe,10)}re.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let hn=null;function Nn(T){hn&&hn(T)}function Tf(){Ei.stop()}function Af(){Ei.start()}let Ei=new Lp;Ei.setAnimationLoop(Nn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){hn=T,$.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},$.addEventListener("sessionstart",Tf),$.addEventListener("sessionend",Af),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,I),m=He.get(T,v.length),m.init(B),v.push(m),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Z),X=this.localClippingEnabled,F=ae.init(this.clippingPlanes,X),g=ye.get(T,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){let fe=_.xr.getDepthSensingMesh();fe!==null&&El(fe,B,-1/0,_.sortObjects)}El(T,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ee,ce),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&Fe.addToRenderList(g,T),this.info.render.frame++,F===!0&&ae.beginShadows();let q=m.state.shadowsArray;Te.render(q,T,B),F===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,k=g.transmissive;if(m.setupLights(),B.isArrayCamera){let fe=B.cameras;if(k.length>0)for(let Se=0,Pe=fe.length;Se<Pe;Se++){let Ie=fe[Se];Cf(Y,k,T,Ie)}j&&Fe.render(T);for(let Se=0,Pe=fe.length;Se<Pe;Se++){let Ie=fe[Se];Ef(g,T,Ie,Ie.viewport)}}else k.length>0&&Cf(Y,k,T,B),j&&Fe.render(T),Ef(g,T,B);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,B),Je.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],F===!0&&ae.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function El(T,B,q,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){Y&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);let Se=Q.update(T),Pe=T.material;Pe.visible&&g.push(T,Se,Pe,q,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){let Se=Q.update(T),Pe=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),de.copy(Se.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(Pe)){let Ie=Se.groups;for(let ze=0,Ge=Ie.length;ze<Ge;ze++){let De=Ie[ze],Qe=Pe[De.materialIndex];Qe&&Qe.visible&&g.push(T,Se,Qe,q,de.z,De)}}else Pe.visible&&g.push(T,Se,Pe,q,de.z,null)}}let fe=T.children;for(let Se=0,Pe=fe.length;Se<Pe;Se++)El(fe[Se],B,q,Y)}function Ef(T,B,q,Y){let k=T.opaque,fe=T.transmissive,Se=T.transparent;m.setupLightsView(q),F===!0&&ae.setGlobalState(_.clippingPlanes,q),Y&&he.viewport(C.copy(Y)),k.length>0&&Mo(k,B,q),fe.length>0&&Mo(fe,B,q),Se.length>0&&Mo(Se,B,q),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Cf(T,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new _t(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Nt:yn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let fe=m.state.transmissionRenderTarget[Y.id],Se=Y.viewport||C;fe.setSize(Se.z,Se.w);let Pe=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(U),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),j&&Fe.render(q);let Ie=_.toneMapping;_.toneMapping=En;let ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),F===!0&&ae.setGlobalState(_.clippingPlanes,Y),Mo(T,q,Y),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,Qe=B.length;De<Qe;De++){let lt=B[De],ct=lt.object,Vt=lt.geometry,tt=lt.material,Le=lt.group;if(tt.side===xn&&ct.layers.test(Y.layers)){let Un=tt.side;tt.side=Et,tt.needsUpdate=!0,Rf(ct,q,Y,Vt,tt,Le),tt.side=Un,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe))}_.setRenderTarget(Pe),_.setClearColor(U,H),ze!==void 0&&(Y.viewport=ze),_.toneMapping=Ie}function Mo(T,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,fe=T.length;k<fe;k++){let Se=T[k],Pe=Se.object,Ie=Se.geometry,ze=Y===null?Se.material:Y,Ge=Se.group;Pe.layers.test(q.layers)&&Rf(Pe,B,q,Ie,ze,Ge)}}function Rf(T,B,q,Y,k,fe){T.onBeforeRender(_,B,q,Y,k,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,B,q,Y,T,fe),k.transparent===!0&&k.side===xn&&k.forceSinglePass===!1?(k.side=Et,k.needsUpdate=!0,_.renderBufferDirect(q,B,Y,k,T,fe),k.side=Cn,k.needsUpdate=!0,_.renderBufferDirect(q,B,Y,k,T,fe),k.side=xn):_.renderBufferDirect(q,B,Y,k,T,fe),T.onAfterRender(_,B,q,Y,k,fe)}function bo(T,B,q){B.isScene!==!0&&(B=Ne);let Y=ve.get(T),k=m.state.lights,fe=m.state.shadowsArray,Se=k.state.version,Pe=Ee.getParameters(T,k.state,fe,B,q),Ie=Ee.getProgramCacheKey(Pe),ze=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?V:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Ve),ze=new Map,Y.programs=ze);let Ge=ze.get(Ie);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Se)return If(T,Pe),Ge}else Pe.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Pe,_),Ge=Ee.acquireProgram(Pe,Ie),ze.set(Ie,Ge),Y.uniforms=Pe.uniforms;let De=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=ae.uniform),If(T,Pe),Y.needsLights=jg(T),Y.lightsStateVersion=Se,Y.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function Pf(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=As.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function If(T,B){let q=ve.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function $g(T,B,q,Y,k){B.isScene!==!0&&(B=Ne),E.resetTextureUnits();let fe=B.fog,Se=Y.isMeshStandardMaterial?B.environment:null,Pe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ut,Ie=(Y.isMeshStandardMaterial?V:S).get(Y.envMap||Se),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,lt=!!q.morphAttributes.color,ct=En;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=_.toneMapping);let Vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=Vt!==void 0?Vt.length:0,Le=ve.get(Y),Un=m.state.lights;if(F===!0&&(X===!0||T!==M)){let tn=T===M&&Y.id===b;ae.setState(Y,T,tn)}let nt=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Un.state.version||Le.outputColorSpace!==Pe||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==Ie||Y.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==Ge||Le.morphTargets!==De||Le.morphNormals!==Qe||Le.morphColors!==lt||Le.toneMapping!==ct||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=Y.version);let fn=Le.currentProgram;nt===!0&&(fn=bo(Y,B,k));let Ji=!1,Yt=!1,rr=!1,ut=fn.getUniforms(),wn=Le.uniforms;if(he.useProgram(fn.program)&&(Ji=!0,Yt=!0,rr=!0),Y.id!==b&&(b=Y.id,Yt=!0),Ji||M!==T){he.buffers.depth.getReversed()?(W.copy(T.projectionMatrix),Z0(W),$0(W),ut.setValue(D,"projectionMatrix",W)):ut.setValue(D,"projectionMatrix",T.projectionMatrix),ut.setValue(D,"viewMatrix",T.matrixWorldInverse);let ei=ut.map.cameraPosition;ei!==void 0&&ei.setValue(D,le.setFromMatrixPosition(T.matrixWorld)),pe.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ut.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Yt=!0,rr=!0)}if(k.isSkinnedMesh){ut.setOptional(D,k,"bindMatrix"),ut.setOptional(D,k,"bindMatrixInverse");let tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ut.setValue(D,"boneTexture",tn.boneTexture,E))}k.isBatchedMesh&&(ut.setOptional(D,k,"batchingTexture"),ut.setValue(D,"batchingTexture",k._matricesTexture,E),ut.setOptional(D,k,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",k._indirectTexture,E),ut.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",k._colorsTexture,E));let or=q.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Oe.update(k,q,fn),(Yt||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,ut.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(wn.envMap.value=Ie,wn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(wn.envMapIntensity.value=B.environmentIntensity),Yt&&(ut.setValue(D,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Kg(wn,rr),fe&&Y.fog===!0&&me.refreshFogUniforms(wn,fe),me.refreshMaterialUniforms(wn,Y,G,ne,m.state.transmissionRenderTarget[T.id]),As.upload(D,Pf(Le),wn,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(D,Pf(Le),wn,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ut.setValue(D,"center",k.center),ut.setValue(D,"modelViewMatrix",k.modelViewMatrix),ut.setValue(D,"normalMatrix",k.normalMatrix),ut.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let tn=Y.uniformsGroups;for(let ei=0,ti=tn.length;ei<ti;ei++){let Df=tn[ei];O.update(Df,fn),O.bind(Df,fn)}}return fn}function Kg(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function jg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,B,q){ve.get(T.texture).__webglTexture=B,ve.get(T.depthTexture).__webglTexture=q;let Y=ve.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let q=ve.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){I=T,w=B,A=q;let Y=!0,k=null,fe=!1,Se=!1;if(T){let Ie=ve.get(T);if(Ie.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Ie.__hasExternalTextures)E.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(Ie.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);let Ge=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?k=Ge[B][q]:k=Ge[B],fe=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?k=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[q]:k=Ge,C.copy(T.viewport),P.copy(T.scissor),N=T.scissorTest}else C.copy(ue).multiplyScalar(G).floor(),P.copy(Ce).multiplyScalar(G).floor(),N=Be;if(he.bindFramebuffer(D.FRAMEBUFFER,k)&&Y&&he.drawBuffers(T,k),he.viewport(C),he.scissor(P),he.setScissorTest(N),fe){let Ie=ve.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,q)}else if(Se){let Ie=ve.get(T.texture),ze=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,q||0,ze)}b=-1},this.readRenderTargetPixels=function(T,B,q,Y,k,fe,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){he.bindFramebuffer(D.FRAMEBUFFER,Pe);try{let Ie=T.texture,ze=Ie.format,Ge=Ie.type;if(!pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-k&&D.readPixels(B,q,Y,k,ke.convert(ze),ke.convert(Ge),fe)}finally{let Ie=I!==null?ve.get(I).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,Y,k,fe,Se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){let Ie=T.texture,ze=Ie.format,Ge=Ie.type;if(!pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&q>=0&&q<=T.height-k){he.bindFramebuffer(D.FRAMEBUFFER,Pe);let De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(B,q,Y,k,ke.convert(ze),ke.convert(Ge),0);let Qe=I!==null?ve.get(I).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Qe);let lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Y0(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(De),D.deleteSync(lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let Y=Math.pow(2,-q),k=Math.floor(T.image.width*Y),fe=Math.floor(T.image.height*Y),Se=B!==null?B.x:0,Pe=B!==null?B.y:0;E.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Se,Pe,k,fe),he.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,Y=null,k=0){T.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,q=null);let fe,Se,Pe,Ie,ze,Ge,De,Qe,lt,ct=T.isCompressedTexture?T.mipmaps[k]:T.image;q!==null?(fe=q.max.x-q.min.x,Se=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,ze=q.min.y,Ge=q.isBox3?q.min.z:0):(fe=ct.width,Se=ct.height,Pe=ct.depth||1,Ie=0,ze=0,Ge=0),Y!==null?(De=Y.x,Qe=Y.y,lt=Y.z):(De=0,Qe=0,lt=0);let Vt=ke.convert(B.format),tt=ke.convert(B.type),Le;B.isData3DTexture?(E.setTexture3D(B,0),Le=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),Le=D.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),Le=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Un=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ji=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let rr=T.isDataArrayTexture||T.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let wn=ve.get(T),or=ve.get(B),tn=ve.get(wn.__renderTarget),ei=ve.get(or.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Pe;ti++)rr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,k,Ge+ti),T.isDepthTexture?(ut&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(B).__webglTexture,k,lt+ti),D.blitFramebuffer(Ie,ze,fe,Se,De,Qe,fe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST)):ut?D.copyTexSubImage3D(Le,k,De,Qe,lt+ti,Ie,ze,fe,Se):D.copyTexSubImage2D(Le,k,De,Qe,lt+ti,Ie,ze,fe,Se);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ut?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Le,k,De,Qe,lt,fe,Se,Pe,Vt,tt,ct.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,k,De,Qe,lt,fe,Se,Pe,Vt,ct.data):D.texSubImage3D(Le,k,De,Qe,lt,fe,Se,Pe,Vt,tt,ct):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,De,Qe,fe,Se,Vt,tt,ct.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,De,Qe,ct.width,ct.height,Vt,ct.data):D.texSubImage2D(D.TEXTURE_2D,k,De,Qe,fe,Se,Vt,tt,ct);D.pixelStorei(D.UNPACK_ROW_LENGTH,Un),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ji),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),k===0&&B.generateMipmaps&&D.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,Y=null,k=0){return T.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,q,Y,k)},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){w=0,A=0,I=null,he.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}},ya=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fs=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ot=new L,ki=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dr=class extends kt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ds,hr=new L,ps=new L,ms=new L,gs=new te,fr=new te,Bp=new Ue,Xo=new L,dr=new L,qo=new L,Dd=new te,tc=new te,Ld=new te,Ma=class extends ft{constructor(e=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Os(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new ki(i,3,0,!1)),ds.setAttribute("uv",new ki(i,2,3,!1))}this.geometry=ds,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Yo(Xo.set(-.5,-.5,0),ms,o,ps,s,r),Yo(dr.set(.5,-.5,0),ms,o,ps,s,r),Yo(qo.set(.5,.5,0),ms,o,ps,s,r),Dd.set(0,0),tc.set(1,0),Ld.set(1,1);let a=e.ray.intersectTriangle(Xo,dr,qo,!1,hr);if(a===null&&(Yo(dr.set(-.5,.5,0),ms,o,ps,s,r),tc.set(0,1),a=e.ray.intersectTriangle(Xo,qo,dr,!1,hr),a===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:ci.getInterpolation(hr,Xo,dr,qo,Dd,tc,Ld,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(n,e,t,i,s,r){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fr.x=r*gs.x-s*gs.y,fr.y=s*gs.x+r*gs.y):fr.copy(gs),n.copy(e),n.x+=fr.x,n.y+=fr.y,n.applyMatrix4(Bp)}var Nd=new L,Ud=new et,Fd=new et,VM=new L,Od=new Ue,Zo=new L,nc=new jt,Bd=new Ue,ic=new Oi,ba=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bf,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nc.copy(this.boundingSphere),nc.applyMatrix4(s),e.ray.intersectsSphere(nc)!==!1&&(Bd.copy(s).invert(),ic.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===x0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Ud.fromBufferAttribute(s.attributes.skinIndex,e),Fd.fromBufferAttribute(s.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Fd.getComponent(r);if(o!==0){let a=Ud.getComponent(r);Od.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(VM.copy(Nd).applyMatrix4(Od),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Lr=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},pi=class extends Ct{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bt,u=bt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new Ue,GM=new Ue,Sa=class n{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:GM;kd.multiplyMatrices(a,t[r]),kd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new pi(t,e,e,Wt,vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lr),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},zi=class extends xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Ue,zd=new Ue,$o=[],Hd=new Lt,WM=new Ue,pr=new Xe,mr=new jt,wa=class extends Xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,WM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),Hd.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),mr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),zd.multiplyMatrices(i,xs),pr.matrixWorld=zd,pr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(s*this.count),s,this.count,Hu,vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Nr=class extends kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new L,Aa=new L,Vd=new Ue,gr=new Oi,Ko=new jt,sc=new L,Gd=new L,Bs=class extends ft{constructor(e=new pt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Vd.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),v=jo(this,e,gr,l,m,y);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(d),m=jo(this,e,gr,l,x,g);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=jo(this,e,gr,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=jo(this,e,gr,l,p-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jo(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Aa,sc,Gd)>i)return;sc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(sc);if(!(l<e.near||l>e.far))return{distance:l,point:Gd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Wd=new L,Xd=new L,Ea=class extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wd.fromBufferAttribute(t,s),Xd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wd.distanceTo(Xd);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ca=class extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ur=class extends kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qd=new Ue,uu=new Oi,Jo=new jt,Qo=new L,Ra=class extends ft{constructor(e=new pt,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;qd.copy(s).invert(),uu.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Qo.fromBufferAttribute(h,g),Yd(Qo,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Qo.fromBufferAttribute(h,p),Yd(Qo,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yd(n,e,t,i,s,r,o){let a=uu.distanceSqToPoint(n);if(a<t){let l=new L;uu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pa=class extends Ct{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],o=[],a=new L,l=new Ue;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(vt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(vt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends on{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hu=class extends Fr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $u(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ea=new L,rc=new $u,oc=new $u,ac=new $u,fu=class extends on{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),c=ea);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),rc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,x,g),oc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,x,g),ac.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),oc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ac.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(rc.calc(l),oc.calc(l),ac.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function XM(n,e){let t=1-n;return t*t*e}function qM(n,e){return 2*(1-n)*n*e}function YM(n,e){return n*n*e}function wr(n,e,t,i){return XM(n,e)+qM(n,t)+YM(n,i)}function ZM(n,e){let t=1-n;return t*t*t*e}function $M(n,e){let t=1-n;return 3*t*t*n*e}function KM(n,e){return 3*(1-n)*n*n*e}function jM(n,e){return n*n*n*e}function Tr(n,e,t,i,s){return ZM(n,e)+$M(n,t)+KM(n,i)+jM(n,s)}var Ia=class extends on{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},du=class extends on{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends on{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pu=class extends on{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends on{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends on{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y),wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Zd(a,l.x,c.x,u.x,h.x),Zd(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:fu,CubicBezierCurve:Ia,CubicBezierCurve3:du,EllipseCurve:Fr,LineCurve:Da,LineCurve3:pu,QuadraticBezierCurve:La,QuadraticBezierCurve3:mu,SplineCurve:Na}),xu=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gu[s.type]().fromJSON(s))}return this}},Or=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new La(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ia(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Na(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Fr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_u=class n extends pt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=vt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new L,f=new te,d=new L,p=new L,x=new L,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let v=i+y*u*s,_=Math.sin(v),R=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*R,o.push(h.x,h.y,h.z),f.x=y/t,f.y=w/(e.length-1),a.push(f.x,f.y);let A=l[3*w+0]*_,I=l[3*w+1],b=l[3*w+0]*R;c.push(A,I,b)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,R=_,w=_+e.length,A=_+e.length+1,I=_+1;r.push(R,w,I),r.push(A,I,w)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},$d=class n extends _u{constructor(e=1,t=1,i=4,s=8){let r=new Or;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Kd=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vu=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2));function y(){let _=new L,R=new L,w=0,A=(t-e)/i;for(let I=0;I<=r;I++){let b=[],M=I/r,C=M*(t-e)+e;for(let P=0;P<=s;P++){let N=P/s,U=N*l+a,H=Math.sin(U),z=Math.cos(U);R.x=C*H,R.y=-M*i+g,R.z=C*z,h.push(R.x,R.y,R.z),_.set(H,A,z).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-M),b.push(p++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let M=x[b][I],C=x[b+1][I],P=x[b+1][I+1],N=x[b][I+1];(e>0||b!==0)&&(u.push(M,C,N),w+=3),(t>0||b!==r-1)&&(u.push(C,P,N),w+=3)}c.addGroup(m,w,0),m+=w}function v(_){let R=p,w=new te,A=new L,I=0,b=_===!0?e:t,M=_===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let C=p;for(let P=0;P<=s;P++){let U=P/s*l+a,H=Math.cos(U),z=Math.sin(U);A.x=b*z,A.y=g*M,A.z=b*H,h.push(A.x,A.y,A.z),f.push(0,M,0),w.x=H*.5+.5,w.y=z*.5*M+.5,d.push(w.x,w.y),p++}for(let P=0;P<s;P++){let N=R+P,U=C+P;_===!0?u.push(U,U+1,N):u.push(U+1,U,N),I+=3}c.addGroup(m,I,_===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jd=class n extends vu{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new L,_=new L,R=new L;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],_),d(t[w+2],R),l(v,_,R,y)}function l(y,v,_,R){let w=R+1,A=[];for(let I=0;I<=w;I++){A[I]=[];let b=y.clone().lerp(_,I/w),M=v.clone().lerp(_,I/w),C=w-I;for(let P=0;P<=C;P++)P===0&&I===w?A[I][P]=b:A[I][P]=b.clone().lerp(M,P/C)}for(let I=0;I<w;I++)for(let b=0;b<2*(w-I)-1;b++){let M=Math.floor(b/2);b%2===0?(f(A[I][M+1]),f(A[I+1][M]),f(A[I][M])):(f(A[I][M+1]),f(A[I+1][M+1]),f(A[I+1][M]))}}function c(y){let v=new L;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=g(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(_,1-R)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],R=o[y+4],w=Math.max(v,_,R),A=Math.min(v,_,R);w>.9&&A<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function p(){let y=new L,v=new L,_=new L,R=new L,w=new te,A=new te,I=new te;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),R.copy(y).add(v).add(_).divideScalar(3);let C=g(R);x(w,M+0,y,C),x(A,M+2,v,C),x(I,M+4,_,C)}}function x(y,v,_,R){R<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Jd=class n extends Br{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var yu=class extends Or{constructor(e){super(e),this.uuid=rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Or().fromJSON(s))}return this}},JM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=kp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=ib(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let p=t;p<s;p+=t)h=n[p],f=n[p+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return kr(r,o,t,a,l,d,0),o}};function kp(n,e,t,i,s){let r,o;if(s===pb(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Qd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Qd(r,n[r],n[r+1],o);return o&&el(o,o.next)&&(Hr(o),o=o.next),o}function Hi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(el(t,t.next)||dt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&lb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?eb(n,i,s,r):QM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=tb(Hi(n),e,t),kr(n,e,t,i,s,r,2)):o===2&&nb(n,e,t,i,s,r):kr(Hi(n),e,t,i,s,r,1);break}}}function QM(n){let e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&bs(s,a,r,l,o,c,p.x,p.y)&&dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eb(n,e,t,i){let s=n.prev,r=n,o=n.next;if(dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,m=Mu(d,p,e,t,i),y=Mu(x,g,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&bs(a,u,l,h,c,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&bs(a,u,l,h,c,f,_.x,_.y)&&dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&bs(a,u,l,h,c,f,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&bs(a,u,l,h,c,f,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tb(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!el(s,r)&&zp(s,i,i.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Hr(i),Hr(i.next),i=n=r),i=i.next}while(i!==n);return Hi(i)}function nb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hb(o,a)){let l=Hp(o,a);o=Hi(o,o.next),l=Hi(l,l.next),kr(o,e,t,i,s,r,0),kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ib(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=kp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ub(c));for(s.sort(sb),r=0;r<s.length;r++)t=rb(s[r],t);return t}function sb(n,e){return n.x-e.x}function rb(n,e){let t=ob(n,e);if(!t)return e;let i=Hp(t,n);return Hi(i,i.next),Hi(t,t.next)}function ob(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&bs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),zr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&ab(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function ab(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function lb(n,e,t,i){let s=n;do s.z===0&&(s.z=Mu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,cb(s)}function cb(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Mu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ub(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function bs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function hb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!fb(n,e)&&(zr(n,e)&&zr(e,n)&&db(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||el(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function el(n,e){return n.x===e.x&&n.y===e.y}function zp(n,e,t,i){let s=na(dt(n,e,t)),r=na(dt(n,e,i)),o=na(dt(t,i,n)),a=na(dt(t,i,e));return!!(s!==r&&o!==a||s===0&&ta(n,t,e)||r===0&&ta(n,i,e)||o===0&&ta(t,n,i)||a===0&&ta(t,e,i))}function ta(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function na(n){return n>0?1:n<0?-1:0}function fb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function zr(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function db(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hp(n,e){let t=new bu(n.i,n.x,n.y),i=new bu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Qd(n,e,t,i){let s=new bu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pb(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ar=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ep(e),tp(i,e);let o=e.length;t.forEach(ep);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,tp(i,t[l]);let a=JM.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ep(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function tp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var np=class n extends pt{constructor(e=new yu([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:mb,v,_=!1,R,w,A,I;m&&(v=m.getSpacedPoints(u),_=!0,f=!1,R=m.computeFrenetFrames(u,!1),w=new L,A=new L,I=new L),f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(c),M=b.shape,C=b.holes;if(!Ar.isClockWise(M)){M=M.reverse();for(let j=0,oe=C.length;j<oe;j++){let D=C[j];Ar.isClockWise(D)&&(C[j]=D.reverse())}}let N=Ar.triangulateShape(M,C),U=M;for(let j=0,oe=C.length;j<oe;j++){let D=C[j];M=M.concat(D)}function H(j,oe,D){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(oe,D)}let z=M.length,ne=N.length;function G(j,oe,D){let xe,re,pe,he=j.x-oe.x,Re=j.y-oe.y,ve=D.x-j.x,E=D.y-j.y,S=he*he+Re*Re,V=he*E-Re*ve;if(Math.abs(V)>Number.EPSILON){let J=Math.sqrt(S),se=Math.sqrt(ve*ve+E*E),Q=oe.x-Re/J,Ee=oe.y+he/J,me=D.x-E/se,ye=D.y+ve/se,He=((me-Q)*E-(ye-Ee)*ve)/(he*E-Re*ve);xe=Q+he*He-j.x,re=Ee+Re*He-j.y;let ae=xe*xe+re*re;if(ae<=2)return new te(xe,re);pe=Math.sqrt(ae/2)}else{let J=!1;he>Number.EPSILON?ve>Number.EPSILON&&(J=!0):he<-Number.EPSILON?ve<-Number.EPSILON&&(J=!0):Math.sign(Re)===Math.sign(E)&&(J=!0),J?(xe=-Re,re=he,pe=Math.sqrt(S)):(xe=he,re=Re,pe=Math.sqrt(S/2))}return new te(xe/pe,re/pe)}let ee=[];for(let j=0,oe=U.length,D=oe-1,xe=j+1;j<oe;j++,D++,xe++)D===oe&&(D=0),xe===oe&&(xe=0),ee[j]=G(U[j],U[D],U[xe]);let ce=[],ue,Ce=ee.concat();for(let j=0,oe=C.length;j<oe;j++){let D=C[j];ue=[];for(let xe=0,re=D.length,pe=re-1,he=xe+1;xe<re;xe++,pe++,he++)pe===re&&(pe=0),he===re&&(he=0),ue[xe]=G(D[xe],D[pe],D[he]);ce.push(ue),Ce=Ce.concat(ue)}for(let j=0;j<g;j++){let oe=j/g,D=d*Math.cos(oe*Math.PI/2),xe=p*Math.sin(oe*Math.PI/2)+x;for(let re=0,pe=U.length;re<pe;re++){let he=H(U[re],ee[re],xe);W(he.x,he.y,-D)}for(let re=0,pe=C.length;re<pe;re++){let he=C[re];ue=ce[re];for(let Re=0,ve=he.length;Re<ve;Re++){let E=H(he[Re],ue[Re],xe);W(E.x,E.y,-D)}}}let Be=p+x;for(let j=0;j<z;j++){let oe=f?H(M[j],Ce[j],Be):M[j];_?(A.copy(R.normals[0]).multiplyScalar(oe.x),w.copy(R.binormals[0]).multiplyScalar(oe.y),I.copy(v[0]).add(A).add(w),W(I.x,I.y,I.z)):W(oe.x,oe.y,0)}for(let j=1;j<=u;j++)for(let oe=0;oe<z;oe++){let D=f?H(M[oe],Ce[oe],Be):M[oe];_?(A.copy(R.normals[j]).multiplyScalar(D.x),w.copy(R.binormals[j]).multiplyScalar(D.y),I.copy(v[j]).add(A).add(w),W(I.x,I.y,I.z)):W(D.x,D.y,h/u*j)}for(let j=g-1;j>=0;j--){let oe=j/g,D=d*Math.cos(oe*Math.PI/2),xe=p*Math.sin(oe*Math.PI/2)+x;for(let re=0,pe=U.length;re<pe;re++){let he=H(U[re],ee[re],xe);W(he.x,he.y,h+D)}for(let re=0,pe=C.length;re<pe;re++){let he=C[re];ue=ce[re];for(let Re=0,ve=he.length;Re<ve;Re++){let E=H(he[Re],ue[Re],xe);_?W(E.x,E.y+v[u-1].y,v[u-1].x+D):W(E.x,E.y,h+D)}}}K(),F();function K(){let j=s.length/3;if(f){let oe=0,D=z*oe;for(let xe=0;xe<ne;xe++){let re=N[xe];Z(re[2]+D,re[1]+D,re[0]+D)}oe=u+g*2,D=z*oe;for(let xe=0;xe<ne;xe++){let re=N[xe];Z(re[0]+D,re[1]+D,re[2]+D)}}else{for(let oe=0;oe<ne;oe++){let D=N[oe];Z(D[2],D[1],D[0])}for(let oe=0;oe<ne;oe++){let D=N[oe];Z(D[0]+z*u,D[1]+z*u,D[2]+z*u)}}i.addGroup(j,s.length/3-j,0)}function F(){let j=s.length/3,oe=0;X(U,oe),oe+=U.length;for(let D=0,xe=C.length;D<xe;D++){let re=C[D];X(re,oe),oe+=re.length}i.addGroup(j,s.length/3-j,1)}function X(j,oe){let D=j.length;for(;--D>=0;){let xe=D,re=D-1;re<0&&(re=j.length-1);for(let pe=0,he=u+g*2;pe<he;pe++){let Re=z*pe,ve=z*(pe+1),E=oe+xe+Re,S=oe+re+Re,V=oe+re+ve,J=oe+xe+ve;le(E,S,V,J)}}}function W(j,oe,D){l.push(j),l.push(oe),l.push(D)}function Z(j,oe,D){de(j),de(oe),de(D);let xe=s.length/3,re=y.generateTopUV(i,s,xe-3,xe-2,xe-1);Ne(re[0]),Ne(re[1]),Ne(re[2])}function le(j,oe,D,xe){de(j),de(oe),de(xe),de(oe),de(D),de(xe);let re=s.length/3,pe=y.generateSideWallUV(i,s,re-6,re-3,re-2,re-1);Ne(pe[0]),Ne(pe[1]),Ne(pe[3]),Ne(pe[1]),Ne(pe[2]),Ne(pe[3])}function de(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ne(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return gb(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gu[s.type]().fromJSON(s)),new n(i,e.options)}},mb={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,l),new te(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-h),new te(f,1-p),new te(x,1-m)]:[new te(a,1-l),new te(u,1-h),new te(d,1-p),new te(g,1-m)]}};function gb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ip=class n extends Br{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},sp=class n extends Br{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Mn=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,f=new L,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],v=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let w=R/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(w+_,1-v),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let v=u[m][y+1],_=u[m][y],R=u[m+1][y],w=u[m+1][y+1];(m!==0||o>0)&&d.push(v,_,w),(m!==i-1||l<Math.PI)&&d.push(_,R,w)}this.setIndex(d),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rp=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,y=(s+1)*d+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ua=class extends ot{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},qt=class extends kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends qt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fa=class extends kt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function ia(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _b(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function op(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Vp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var mi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Su=class extends mi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:r=e,a=2*t-i;break;case ua:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,l=2*i-t;break;case ua:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+y*o[c+R]+v*o[l+R]+_*o[h+R];return r}},Oa=class extends mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},wu=class extends mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Su(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&xb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Is;var gi=class extends an{constructor(e,t,i){super(e,t,i)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ps;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends an{};Ba.prototype.ValueTypeName="color";var Yn=class extends an{};Yn.prototype.ValueTypeName="number";var Tu=class extends mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Dt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zn=class extends an{InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends an{constructor(e,t,i){super(e,t,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Ps;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends an{};$n.prototype.ValueTypeName="vector";var ks=class{constructor(e="",t=-1,i=[],s=Xu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(yb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(an.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=_b(l);l=op(l,1,u),c=op(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Yn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,d,p,x){if(d.length!==0){let g=[],m=[];Vp(d,g,m,p),g.length!==0&&x.push(new h(f,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let g=[],m=[];for(let y=0;y!==f[p].morphTargets.length;++y){let v=f[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}s.push(new Yn(".morphTargetInfluence["+x+"]",g,m))}l=d.length*o}else{let d=".bones["+t[h].name+"]";i($n,d+".position",f,"pos",s),i(Zn,d+".quaternion",f,"rot",s),i($n,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function vb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return $n;case"color":return Ba;case"quaternion":return Zn;case"bool":case"boolean":return gi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function yb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=vb(n.type);if(n.times===void 0){let t=[],i=[];Vp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ui={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Au=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}},Mb=new Au,Kn=class{constructor(e){this.manager=e!==void 0?e:Mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Kn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends Kn{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:i,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Hn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,g=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:_})=>{if(v)m.close();else{x+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let w=0,A=u.length;w<A;w++){let I=u[w];I.onProgress&&I.onProgress(R)}m.enqueue(_),y()}},v=>{m.error(v)})}}});return new Response(g)}else throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ui.add(e,c);let u=Hn[e];delete Hn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Cu=class extends Kn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Rr("img");function l(){u(),ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ka=class extends Kn{constructor(e){super(e)}load(e,t,i,s){let r=new Ct,o=new Cu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Vi=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ap=class extends Vi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lc=new Ue,lp=new L,cp=new L,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(lp),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ru=class extends Gr{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},za=class extends Vi{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ru}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},up=new Ue,xr=new L,cc=new L,Pu=class extends Gr{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(xr),cc.copy(i.position),cc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cc),i.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}},_i=class extends Vi{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Iu=class extends Gr{constructor(){super(new di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends Vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hp=class extends Vi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var vi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Va=class extends Kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(e,l),r.manager.itemStart(e)}};var Ga=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fp(){return performance.now()}var Du=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){Dt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,o,e,t,e,i),Dt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},Ku="\\[\\]\\.:\\/",bb=new RegExp("["+Ku+"]","g"),ju="[^"+Ku+"]",Sb="[^"+Ku.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",ju),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),Ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),Eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),Cb=new RegExp("^"+wb+Tb+Ab+Eb+"$"),Rb=["material","materials","bones","map"],Lu=class{constructor(e,t,i){let s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},at=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bb,"")}static parseTrackName(e){let t=Cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=Lu;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nu=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:vs,endingEnd:vs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ka,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case v0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Xu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===_0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===$a){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=ys,s.endingEnd=ys):(e?s.endingStart=this.zeroSlopeAtStart?ys:vs:s.endingStart=ua,t?s.endingEnd=this.zeroSlopeAtEnd?ys:vs:s.endingEnd=ua)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}},Pb=new Float32Array(1),Wa=class extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;p=new Du(at.create(i,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Oa(new Float32Array(2),new Float32Array(2),1,Pb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?ks.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Xu),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Nu(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?ks.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var dp=new Ue,pp=class{constructor(e,t,i=0,s=1/0){this.ray=new Oi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dp),this}intersectObject(e,t=!0,i=[]){return Uu(e,this,i,t),i.sort(mp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uu(e[s],this,i,t);return i.sort(mp),i}};function mp(n,e){return n.distance-e.distance}function Uu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Uu(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var tl=class extends Fs{constructor(){super();let e=new Bi;e.deleteAttribute("uv");let t=new qt({side:Et}),i=new qt,s=new _i(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Xe(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Xe(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Xe(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Xe(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Xe(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Xe(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new Xe(e,Ws(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Xe(e,Ws(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let p=new Xe(e,Ws(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let x=new Xe(e,Ws(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Xe(e,Ws(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Xe(e,Ws(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ws(n){let e=new Xt;return e.color.setScalar(n),e}function bn(n,e,t=0){return new L(n,t,-e)}function Ju({canvas:n,profile:e}){n.style.width="100%",n.style.height="100%";let t=new va({canvas:n,antialias:e.antialias??!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.outputColorSpace=ht,t.toneMapping=yi,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=zs;let i=new Fs,s=new Me("#6b3a5e");i.background=s.clone(),i.fog=new ya(s.clone(),.008);let r=new Ns(t);i.environment=r.fromScene(new tl,.04).texture,i.environmentIntensity=.32;let o=new yt(52,1,.08,420),a=0,l=0;function c(h=!1){let f=n.clientWidth,d=n.clientHeight;h&&(a=0),!(f<2||d<2||f===a&&d===l)&&(a=f,l=d,o.aspect=f/d,o.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.setSize(f,d,!1))}function u(){r.dispose(),t.dispose()}return{renderer:t,scene:i,camera:o,fitView:c,toThree:bn,dispose:u}}var bi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ib=new di(-1,1,1,-1,0,1),Qu=class extends pt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},Db=new Qu,Pn=class{constructor(e){this._mesh=new Xe(Db,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gi=class extends zt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ft.clone(e.uniforms),this.material=new ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kr=class extends zt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},nl=class extends zt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var il=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new _t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gi(bi),this.copyPass.material.blending=Mt,this.clock=new Ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kr!==void 0&&(o instanceof Kr?i=!0:o instanceof nl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sl=class extends zt{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var jr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ue},cameraProjectionMatrixInverse:{value:new Ue},cameraWorldMatrix:{value:new Ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Jr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},rl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Gp(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Lb(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new pi(s,e,e);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}function Lb(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Qr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:eh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function eh(n,e,t){let i=Nb(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Nb(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new L(Math.cos(r),Math.sin(r),o))}return i}var ol=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,p=e-f,x=t-d,g,m;p>x?(g=1,m=0):(g=0,m=1);let y=p-g+u,v=x-m+u,_=p-1+2*u,R=x-1+2*u,w=l&255,A=c&255,I=this.perm[w+this.perm[A]]%12,b=this.perm[w+g+this.perm[A+m]]%12,M=this.perm[w+1+this.perm[A+1]]%12,C=.5-p*p-x*x;C<0?i=0:(C*=C,i=C*C*this.dot(this.grad3[I],p,x));let P=.5-y*y-v*v;P<0?s=0:(P*=P,s=P*P*this.dot(this.grad3[b],y,v));let N=.5-_*_-R*R;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[M],_,R)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,p=(u+h+f)*d,x=u-p,g=h-p,m=f-p,y=e-x,v=t-g,_=i-m,R,w,A,I,b,M;y>=v?v>=_?(R=1,w=0,A=0,I=1,b=1,M=0):y>=_?(R=1,w=0,A=0,I=1,b=0,M=1):(R=0,w=0,A=1,I=1,b=0,M=1):v<_?(R=0,w=0,A=1,I=0,b=1,M=1):y<_?(R=0,w=1,A=0,I=0,b=1,M=1):(R=0,w=1,A=0,I=1,b=1,M=0);let C=y-R+d,P=v-w+d,N=_-A+d,U=y-I+2*d,H=v-b+2*d,z=_-M+2*d,ne=y-1+3*d,G=v-1+3*d,ee=_-1+3*d,ce=u&255,ue=h&255,Ce=f&255,Be=this.perm[ce+this.perm[ue+this.perm[Ce]]]%12,K=this.perm[ce+R+this.perm[ue+w+this.perm[Ce+A]]]%12,F=this.perm[ce+I+this.perm[ue+b+this.perm[Ce+M]]]%12,X=this.perm[ce+1+this.perm[ue+1+this.perm[Ce+1]]]%12,W=.6-y*y-v*v-_*_;W<0?s=0:(W*=W,s=W*W*this.dot3(this.grad3[Be],y,v,_));let Z=.6-C*C-P*P-N*N;Z<0?r=0:(Z*=Z,r=Z*Z*this.dot3(this.grad3[K],C,P,N));let le=.6-U*U-H*H-z*z;le<0?o=0:(le*=le,o=le*le*this.dot3(this.grad3[F],U,H,z));let de=.6-ne*ne-G*G-ee*ee;return de<0?a=0:(de*=de,a=de*de*this.dot3(this.grad3[X],ne,G,ee)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,p,x=(e+t+i+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(i+x),v=Math.floor(s+x),_=(g+m+y+v)*c,R=g-_,w=m-_,A=y-_,I=v-_,b=e-R,M=t-w,C=i-A,P=s-I,N=b>M?32:0,U=b>C?16:0,H=M>C?8:0,z=b>P?4:0,ne=M>P?2:0,G=C>P?1:0,ee=N+U+H+z+ne+G,ce=o[ee][0]>=3?1:0,ue=o[ee][1]>=3?1:0,Ce=o[ee][2]>=3?1:0,Be=o[ee][3]>=3?1:0,K=o[ee][0]>=2?1:0,F=o[ee][1]>=2?1:0,X=o[ee][2]>=2?1:0,W=o[ee][3]>=2?1:0,Z=o[ee][0]>=1?1:0,le=o[ee][1]>=1?1:0,de=o[ee][2]>=1?1:0,Ne=o[ee][3]>=1?1:0,j=b-ce+c,oe=M-ue+c,D=C-Ce+c,xe=P-Be+c,re=b-K+2*c,pe=M-F+2*c,he=C-X+2*c,Re=P-W+2*c,ve=b-Z+3*c,E=M-le+3*c,S=C-de+3*c,V=P-Ne+3*c,J=b-1+4*c,se=M-1+4*c,Q=C-1+4*c,Ee=P-1+4*c,me=g&255,ye=m&255,He=y&255,ae=v&255,Te=a[me+a[ye+a[He+a[ae]]]]%32,Fe=a[me+ce+a[ye+ue+a[He+Ce+a[ae+Be]]]]%32,Oe=a[me+K+a[ye+F+a[He+X+a[ae+W]]]]%32,Ae=a[me+Z+a[ye+le+a[He+de+a[ae+Ne]]]]%32,$e=a[me+1+a[ye+1+a[He+1+a[ae+1]]]]%32,ke=.6-b*b-M*M-C*C-P*P;ke<0?u=0:(ke*=ke,u=ke*ke*this.dot4(r[Te],b,M,C,P));let Je=.6-j*j-oe*oe-D*D-xe*xe;Je<0?h=0:(Je*=Je,h=Je*Je*this.dot4(r[Fe],j,oe,D,xe));let O=.6-re*re-pe*pe-he*he-Re*Re;O<0?f=0:(O*=O,f=O*O*this.dot4(r[Oe],re,pe,he,Re));let ge=.6-ve*ve-E*E-S*S-V*V;ge<0?d=0:(ge*=ge,d=ge*ge*this.dot4(r[Ae],ve,E,S,V));let $=.6-J*J-se*se-Q*Q-Ee*Ee;return $<0?p=0:($*=$,p=$*$*this.dot4(r[$e],J,se,Q,Ee)),27*(u+h+f+d+p)}};var eo=class n extends zt{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Gp(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new _t(this.width,this.height,{type:Nt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ot({defines:Object.assign({},jr.defines),uniforms:Ft.clone(jr.uniforms),vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:Mt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Fa,this.normalMaterial.blending=Mt,this.pdMaterial=new ot({defines:Object.assign({},Qr.defines),uniforms:Ft.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ot({defines:Object.assign({},Jr.defines),uniforms:Ft.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,blending:Mt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ot({uniforms:Ft.clone(bi.uniforms),vertexShader:bi.vertexShader,fragmentShader:bi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ya,blendDst:Hs,blendEquation:sn,blendSrcAlpha:qa,blendDstAlpha:Hs,blendEquationAlpha:sn}),this.blendMaterial=new ot({uniforms:Ft.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fu,blendSrc:Ya,blendDst:Hs,blendEquation:sn,blendSrcAlpha:qa,blendDstAlpha:Hs,blendEquationAlpha:sn}),this.fsQuad=new Pn(null),this.originalClearColor=new Me,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Us,this.depthTexture.format=fi,this.depthTexture.type=hi,this.normalRenderTarget=new _t(this.width,this.height,{minFilter:bt,magFilter:bt,type:Nt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=eh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Mt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Mt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Mt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new ol,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new pi(s,e,e,Wt,yn);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}};eo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xs=class n extends zt{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _t(r,o,{type:Nt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new _t(r,o,{type:Nt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new _t(r,o,{type:Nt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Wp;this.highPassUniforms=Ft.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=bi;this.copyUniforms=Ft.clone(u.uniforms),this.blendMaterial=new ot({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ca,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new Pn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Xs.BlurDirectionX=new te(1,0);Xs.BlurDirectionY=new te(0,1);var Xp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var al=class extends zt{constructor(){super();let e=Xp;this.uniforms=Ft.clone(e.uniforms),this.material=new Ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qp={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`};var th={filter:{label:"Filter",params:{mode:{options:["lowpass","highpass","bandpass"],default:"lowpass"},freq:{min:40,max:18e3,curve:"log",default:18e3},q:{min:.1,max:12,curve:"log",default:.7}}},delay:{label:"Delay",params:{time:{min:.02,max:1,curve:"lin",default:.28},feedback:{min:0,max:.9,curve:"lin",default:.35}}},reverb:{label:"Reverb",params:{size:{min:.3,max:6,curve:"lin",default:1.8}}},drive:{label:"Drive",params:{amount:{min:0,max:1,curve:"lin",default:.4}}},compressor:{label:"Compressor",params:{threshold:{min:-60,max:0,curve:"lin",default:-24},ratio:{min:1,max:20,curve:"lin",default:4}}}},Ub=Object.keys(th),Yp={min:0,max:1,curve:"lin",default:.35};function Si(n,e){return e==="mix"?n==="filter"||n==="compressor"||n==="drive"?{...Yp,default:1}:Yp:th[n]?.params?.[e]??null}function ll(n,e){let t=Math.min(1,Math.max(0,Number(e)||0));return n.options?n.options[Math.min(n.options.length-1,Math.floor(t*n.options.length))]:n.curve==="log"?n.min*(n.max/n.min)**t:n.min+(n.max-n.min)*t}function Fb(n,e=1024){let t=1+n*60,i=new Float32Array(e);for(let s=0;s<e;s+=1){let r=s/(e-1)*2-1;i[s]=Math.tanh(t*r)/Math.tanh(t)}return i}function Ob(n,e){let t=Math.max(1,Math.floor(n.sampleRate*e)),i=n.createBuffer(2,t,n.sampleRate);for(let s=0;s<2;s+=1){let r=i.getChannelData(s);for(let o=0;o<t;o+=1)r[o]=(Math.random()*2-1)*(1-o/t)**2.5}return i}function to(n,e,t,i=.015){n.cancelScheduledValues(t),n.setValueAtTime(n.value,t),n.setTargetAtTime(e,t,i)}function Bb(n,e){let t=n.createGain(),i=n.createGain(),s=n.createGain(),r=n.createGain();t.connect(s),s.connect(i),r.connect(i);let o=e.params||{},a={},l=()=>{},c=!1,u=(f,d)=>{c?to(f,d,n.currentTime):f.value=d};if(e.type==="filter"){let f=n.createBiquadFilter();t.connect(f),f.connect(r),a.filter=f,l=d=>{f.type=d.mode??"lowpass",u(f.frequency,d.freq??18e3),u(f.Q,d.q??.7)}}else if(e.type==="delay"){let f=n.createDelay(1.5),d=n.createGain();t.connect(f),f.connect(d),d.connect(f),f.connect(r),l=p=>{u(f.delayTime,p.time??.28),u(d.gain,p.feedback??.35)}}else if(e.type==="reverb"){let f=n.createConvolver();t.connect(f),f.connect(r);let d=null;l=p=>{let x=p.size??1.8;x!==d&&(d=x,f.buffer=Ob(n,x))}}else if(e.type==="drive"){let f=n.createWaveShaper();f.oversample="2x",t.connect(f),f.connect(r),l=d=>{f.curve=Fb(d.amount??.4)}}else if(e.type==="compressor"){let f=n.createDynamicsCompressor();t.connect(f),f.connect(r),l=d=>{u(f.threshold,d.threshold??-24),u(f.ratio,d.ratio??4)}}else t.connect(r);function h(f,d){l(f);let p=d?0:Math.min(1,Math.max(0,f.mix??Si(e.type,"mix").default)),x=n.currentTime;s.gain.setTargetAtTime(1-p,x,.01),r.gain.setTargetAtTime(p,x,.01)}return h(o,e.bypass),c=!0,{input:t,output:i,update:h,dispose(){for(let f of[t,i,s,r,...Object.values(a)])f.disconnect()}}}function nh(n,e,t,i=[]){let s=[],r=[];function o(){e.disconnect();for(let u of r)u.dispose();r=s.map(u=>Bb(n,u));let c=e;for(let u of r)c.connect(u.input),c=u.output;c.connect(t)}function a(c){s=structuredClone(c||[]),o()}function l(c){return s.findIndex(u=>u.id===c)}return a(i),{setSpecs:a,specs:()=>structuredClone(s),setParam(c,u,h){let f=l(c);return f<0||!Si(s[f].type,u)?!1:(s[f].params[u]=h,r[f].update(s[f].params,s[f].bypass),!0)},setNormalized(c,u,h){let f=l(c),d=f<0?null:Si(s[f].type,u);return d?this.setParam(c,u,ll(d,h)):!1},setBypass(c,u){let h=l(c);return h<0?!1:(s[h].bypass=!!u,r[h].update(s[h].params,s[h].bypass),!0)},dispose(){e.disconnect();for(let c of r)c.dispose();r=[]}}}function kb(n,e){return!(!(n.type==="note"?e.type==="noteon"||e.type==="noteoff":e.type===n.type)||n.channel&&n.channel!==e.channel||n.type!=="pitchbend"&&n.number!==void 0&&n.number!==e.number)}function ih(n,e){let t=[];if(!e)return t;for(let i of n||[]){if(!kb(i,e))continue;let s=e.value/127,r=i.min??0,o=i.max??1;if(i.action==="fx"&&e.type!=="noteoff")t.push({action:"fx",bus:i.bus,fx:i.fx,param:i.param,value:r+(o-r)*s});else if(i.action==="bypass"&&e.type!=="noteoff"){let a=i.type==="note"?e.type==="noteon":e.value>=64;t.push({action:"bypass",bus:i.bus,fx:i.fx,bypass:!a})}else if(i.action==="bus"&&e.type!=="noteoff")t.push({action:"bus",bus:i.bus,value:s*(i.max??1)});else if(i.action==="play")if(e.type==="noteon"){let a=i.root!==void 0?2**((e.number-i.root)/12):1;t.push({action:"play",sound:i.sound,volume:s,rate:a})}else e.type==="noteoff"&&i.hold&&t.push({action:"stop",sound:i.sound})}return t}var Zp=["sine","triangle","sawtooth","square"];function rh(n){let e=(n.tempoMap||[]).filter(t=>t.beat>0).sort((t,i)=>t.beat-i.beat);return[{beat:0,bpm:n.bpm},...e]}function In(n,e){if(!n.tempoMap?.length)return e*60/n.bpm;let t=rh(n),i=0;for(let s=0;s<t.length&&t[s].beat<e;s+=1){let r=s+1<t.length?Math.min(e,t[s+1].beat):e;i+=(r-t[s].beat)*60/t[s].bpm}return i}function no(n,e){if(!n.tempoMap?.length)return e*n.bpm/60;let t=rh(n),i=e,s=0;for(let r=0;r<t.length;r+=1){let o=r+1<t.length?t[r+1].beat:1/0,a=(o-t[r].beat)*60/t[r].bpm;if(i<=a)return t[r].beat+i*t[r].bpm/60;i-=a,s=o}return s}var $p=(n,e=60)=>2**((n-e)/12),Kp=n=>440*2**((n-69)/12);function sh(n){let e=n.tracks.some(t=>t.solo);return new Set(n.tracks.filter(t=>!t.mute&&(!e||t.solo)).map(t=>t.id))}function jp(n,e){if(!n?.length)return null;if(e<=n[0][0])return n[0][1];let t=n[n.length-1];if(e>=t[0])return t[1];for(let i=1;i<n.length;i+=1)if(e<=n[i][0]){let[s,r]=n[i-1],[o,a]=n[i];return o===s?a:r+(a-r)*(e-s)/(o-s)}return t[1]}function Jp(n,e,t){if(!t||t.end<=t.start)return[{vb0:n,vb1:e,pos0:n}];let i=t.end-t.start,s=[],r=n;for(;r<e;){let o=r<t.end?r:t.start+(r-t.start)%i,a=t.end-o,l=Math.min(e-r,a>0?a:i);s.push({vb0:r,vb1:r+l,pos0:o}),r+=l}return s}function Qp(n,e,t,{catchUp:i=!1}={}){let s=[];for(let r of n.tracks)for(let o of r.clips||[]){let a=o.start+o.length;if(r.type==="audio"){let l=o.start>=e&&o.start<t,c=i&&o.start<e&&a>e;(l||c)&&s.push({type:"audio",track:r,clip:o,beat:Math.max(o.start,e),skip:Math.max(0,e-o.start),end:a})}else for(let l of o.notes||[]){let c=o.start+l.t;c>=e&&c<t&&l.t<o.length&&s.push({type:"note",track:r,clip:o,note:l,beat:c,dur:Math.min(l.d,o.length-l.t)})}}return s.sort((r,o)=>r.beat-o.beat)}function oh(n,{lookahead:e=.25,interval:t=25}={}){let i=null,s=0,r=0,o=0,a=0,l=0,c=!1,u=new Map,h=new Set,f=new Map,d=0,p=()=>n.context;function x(C){let P=u.get(C.id);if(!P){let N=p();P={gain:N.createGain(),pan:N.createStereoPanner(),volume:C.volume??1,panVal:C.pan??0},P.gain.connect(P.pan),P.pan.connect(n.busNode(C.bus||"music")),u.set(C.id,P)}return P}function g(C,P){let N=x(C),U=p().currentTime;N.gain.gain.setTargetAtTime(P?N.volume:0,U,.01),N.pan.pan.setTargetAtTime(N.panVal,U,.01)}function m(){if(!i||!p())return;let C=sh(i),P=new Set(i.tracks.map(N=>N.id));for(let[N,U]of u)P.has(N)||(U.gain.disconnect(),U.pan.disconnect(),u.delete(N));for(let N of i.tracks){let U=x(N);U.volume=N.volume??1,U.panVal=N.pan??0,U.pan.disconnect(),U.pan.connect(n.busNode(N.bus||"music")),U.meter&&U.pan.connect(U.meter),g(N,C.has(N.id))}}function y(C,P){if(!C)return;if(f.has(C)){P(f.get(C));return}let N=d;n.loadBuffer(C).then(U=>{f.set(C,U),N===d&&P(U)}).catch(()=>{})}function v(C){let P=C.instrument;return P?.sound?n.getSound(P.sound)?.files?.[0]:null}function _(C,P,N,U){let H=p(),z=H.createGain();z.gain.setValueAtTime(1e-4,U),z.connect(x(C).gain);let ne=Math.max(.02,Math.min(1,N))*.8,G=null,ee=!1,ce=null,ue=.12,Ce=F=>{z.gain.cancelScheduledValues(F),z.gain.setValueAtTime(ne,F),z.gain.linearRampToValueAtTime(1e-4,F+ue);try{G?.stop(F+ue+.02)}catch{}},Be=(F,X)=>{G=F,G.connect(z),z.gain.linearRampToValueAtTime(ne,U+.005),G.start(U),G.onended=()=>z.disconnect(),ce!==null&&Ce(ce)},K=C.instrument||{synth:"sawtooth"};if(K.sound)y(v(C),F=>{let X=H.createBufferSource();X.buffer=F,X.playbackRate.value=$p(P,K.root??60),Be(X)});else{let F=H.createOscillator();F.type=Zp.includes(K.synth)?K.synth:"sawtooth",F.frequency.value=Kp(P),Be(F)}return{stop(F){ee=!0,ce=Math.max(F,U+.01),G&&Ce(ce)}}}function R(C,P,N){let U=p(),{track:H,clip:z}=C;y(z.file,ne=>{let G=U.createBufferSource();G.buffer=ne;let ee=U.createGain();ee.gain.value=z.gain??1,G.connect(ee),ee.connect(x(H).gain);let ce=U.currentTime,ue=Math.max(P,ce),Ce=Math.max(0,ce-P),Be=(z.offset||0)+(In(i,C.beat)-In(i,z.start))+Ce;Be>=ne.duration||(G.start(ue,Be,Math.max(.01,N-ue)),G.onended=()=>ee.disconnect())})}function w(C){let P=i;for(let N of P.tracks)for(let U of N.automation||[]){let H=jp(U.points,C);if(H!==null)if(U.kind==="track"){let z=x(N);U.param==="volume"?z.volume=H*1.5:z.panVal=H*2-1,g(N,sh(P).has(N.id))}else n.setFxNormalized(U.bus,U.fx,U.param,H)}}let A=()=>{let C=i.loop;return C&&C.end>C.start?{start:In(i,C.start),end:In(i,C.end)}:null};function I(C){let P=A();return!P||C<P.end?C:P.start+(C-P.start)%(P.end-P.start)}function b(C,P,{catchUp:N=!1}={}){let U=N;for(let H of Jp(C,P,A())){let z=H.vb1-H.vb0,ne=Qp(i,no(i,H.pos0),no(i,H.pos0+z),{catchUp:U});U=!1;let G=r+(H.vb1-a);for(let ee of ne){let ce=In(i,ee.beat),ue=r+(H.vb0-a)+(ce-H.pos0);ee.type==="note"?_(ee.track,ee.note.n,ee.note.v??.8,ue).stop(Math.min(ue+(In(i,ee.beat+ee.dur)-ce),G)):R(ee,ue,Math.min(ue+(In(i,ee.end)-ce),G))}}}function M(){let C=p(),P=a+(C.currentTime-r),N=P+e;N>l&&(b(l,N),l=N),w(no(i,I(P)))}return{refresh:m,play(C,P=0){this.stop(),d+=1,i=C;let N=p();N&&(m(),o=P,a=In(i,P),r=N.currentTime+.06,b(a,a+e,{catchUp:!0}),l=a+e,c=!0,s=setInterval(M,t))},stop(){d+=1,clearInterval(s),s=0,c=!1;let C=p();if(C)for(let P of u.values())P.gain.gain.cancelScheduledValues(C.currentTime);for(let P of u.values())P.gain.disconnect(),P.pan.disconnect();u.clear();for(let P of h)P.stop(p()?.currentTime??0);h.clear()},get playing(){return c},level(C){let P=u.get(C),N=p();if(!P||!N)return 0;P.meter||(P.meter=N.createAnalyser(),P.meter.fftSize=512,P.buf=new Float32Array(512),P.pan.connect(P.meter)),P.meter.getFloatTimeDomainData(P.buf);let U=0;for(let H=0;H<P.buf.length;H+=1)U=Math.max(U,Math.abs(P.buf[H]));return Math.min(1,U)},beat(){return!c||!i?o:no(i,I(a+(p().currentTime-r)))},noteOn(C,P,N,U=.8){i=C;let H=p();u.has(P.id)||m();let z=_(P,N,U,H.currentTime);return h.add(z),{stop:()=>{z.stop(p().currentTime),h.delete(z)}}},async preload(C){let P=new Set;for(let N of C.tracks){let U=v(N);U&&P.add(U);for(let H of N.clips||[])H.file&&P.add(H.file)}await Promise.all([...P].map(N=>n.loadBuffer(N).then(U=>f.set(N,U)).catch(()=>{})))},scheduleAll(C,P,{stepSeconds:N=.05}={}){i={...C,loop:null},o=0,a=0,r=0,m();let U=In(i,P);b(0,U,{catchUp:!0});let H=[];for(let z=N;z<U;z+=N)H.push(z);return H},applyAutomationAt(C){w(C)}}}var em=["music","sfx","ambience","ui"];function qs(n,e,t=Math.random){return typeof n=="number"?n:Array.isArray(n)&&n.length===2?n[0]+(n[1]-n[0])*t():e}function zb(n,e=-1,t=Math.random){if(!n.length)return-1;if(n.length===1)return 0;let i=Math.floor(t()*(n.length-1));return i>=e&&e>=0&&(i+=1),Math.min(i,n.length-1)}function Hb(n,e){let t=n.split(".").pop().toLowerCase();if(e(t))return n;let i=t==="ogg"?"m4a":t==="m4a"?"ogg":null;return i&&e(i)?n.replace(/\.[^.]+$/,`.${i}`):n}function cl(n,e={}){return n?Object.entries(n).every(([t,i])=>e[t]!==void 0&&i.includes(e[t])):!0}function tm(n,e){let t=(n.ambience||[]).filter(s=>cl(s.when,e)),i=(n.music||[]).find(s=>cl(s.when,e))||null;return{ambience:t,music:i}}function Vb(n){return n.loop&&Number.isFinite(n.loop.start)&&Number.isFinite(n.loop.end)?{...n.loop}:{start:0,end:n.bars*n.beatsPerBar}}function Gb(n,e){return!n||!e?!0:(n.sound??null)!==(e.sound??null)||(n.song??null)!==(e.song??null)}function Wb(){if(typeof document>"u")return()=>!0;let n=document.createElement("audio"),e={ogg:'audio/ogg; codecs="vorbis"',m4a:'audio/mp4; codecs="mp4a.40.2"',mp3:"audio/mpeg",wav:"audio/wav"};return t=>!!(e[t]&&n.canPlayType(e[t]))}function Xb({bank:n,baseUrl:e="/assets/",context:t}={}){let i=t||null,s=n||{buses:{},sounds:[]},r=new Map,o=new Map,a=new Map,l=new Map,c={},u=new Map,h={},f=new Map,d={},p=new Set,x=Wb(),g=new Map,m=new Set,y=null,v=0,_=null,R={position:[0,0,0],forward:[0,0,-1],up:[0,1,0]};function w(){r=new Map((s.sounds||[]).map(F=>[F.id,F]))}w();function A(){if(i)return i;let F=globalThis.AudioContext||globalThis.webkitAudioContext;return F?(i=new F,i):null}function I(){let F=A();if(!F)return null;if(!c.master){c.master=F.createGain(),h.master=nh(F,c.master,F.destination,s.fx?.master);for(let X of em)c[X]=F.createGain(),h[X]=nh(F,c[X],c.master,s.fx?.[X]);b(!1)}return c}function b(F=!0){if(!c.master)return;let X=s.buses||{};for(let W of["master",...em]){let Z=X[W]??1;F?to(c[W].gain,Z,i.currentTime):c[W].gain.value=Z}}function M(F){let X=e+Hb(F,x).split("/").map(encodeURIComponent).join("/");if(!o.has(X)){let W=A();o.set(X,fetch(X).then(Z=>{if(!Z.ok)throw new Error(`${Z.status} for ${X}`);return Z.arrayBuffer()}).then(Z=>W.decodeAudioData(Z)).catch(Z=>{throw o.delete(X),Z}))}return o.get(X)}function C(){let F=i;if(!F)return;let X=F.listener,[W,Z,le]=R.position,[de,Ne,j]=R.forward,[oe,D,xe]=R.up;X.positionX?(X.positionX.value=W,X.positionY.value=Z,X.positionZ.value=le,X.forwardX.value=de,X.forwardY.value=Ne,X.forwardZ.value=j,X.upX.value=oe,X.upY.value=D,X.upZ.value=xe):(X.setPosition(W,Z,le),X.setOrientation(de,Ne,j,oe,D,xe))}function P(F,X={}){let W=X,Z=r.get(F),le=I();if(!Z||!le||!Z.files?.length)return null;let de=i.currentTime;if(Z.cooldown&&de-(l.get(F)??-1/0)<Z.cooldown)return null;l.set(F,de);let Ne=zb(Z.files,a.get(F)??-1);a.set(F,Ne);let j=i.createGain(),oe=qs(Z.volume,1)*(W.volume??1),D=W.fadeIn||0;j.gain.setValueAtTime(D?1e-4:oe,de),D&&j.gain.linearRampToValueAtTime(oe,de+D);let xe=null,re=Z.spatial===!0?{}:Z.spatial;re&&W.position?(xe=i.createPanner(),xe.panningModel="HRTF",xe.distanceModel="inverse",xe.refDistance=re.refDistance??2,xe.maxDistance=re.maxDistance??40,xe.rolloffFactor=re.rolloff??1,N(xe,W.position),j.connect(xe),xe.connect(le[Z.bus]||le.sfx)):j.connect(le[Z.bus]||le.sfx);let pe=null,he=!1,Re={id:F,retune(E){let S=i.currentTime;(typeof E.volume=="number"||E.volume==null)&&to(j.gain,qs(E.volume,1)*(W.volume??1),S),pe&&(typeof E.pitch=="number"||E.pitch==null)&&to(pe.playbackRate,qs(E.pitch,1)*(W.rate??1),S)}};p.add(Re);let ve={id:F,stop(E=0){he=!0,p.delete(Re);let S=i.currentTime;j.gain.cancelScheduledValues(S),j.gain.setValueAtTime(j.gain.value,S),j.gain.linearRampToValueAtTime(1e-4,S+Math.max(.01,E)),pe&&pe.stop(S+Math.max(.01,E)+.05)},setPosition(E){xe&&N(xe,E)},setVolume(E){W={...W,volume:E},j.gain.setTargetAtTime(qs(Z.volume,1)*E,i.currentTime,.05)},get playing(){return!he}};return Re.stop=E=>ve.stop(E),M(Z.files[Ne]).then(E=>{he||(pe=i.createBufferSource(),pe.buffer=E,pe.loop=W.loop??Z.loop??!1,pe.playbackRate.value=qs(Z.pitch,1)*(W.rate??1),pe.connect(j),pe.onended=()=>{he=!0,p.delete(Re)},pe.start())}).catch(E=>{he=!0,p.delete(Re),console.warn(`audio: could not play ${F}:`,E.message)}),ve}function N(F,[X,W,Z]){F.positionX?(F.positionX.value=X,F.positionY.value=W,F.positionZ.value=Z):F.setPosition(X,W,Z)}function U(){for(let[F,X]of Object.entries(h)){let W=s.fx?.[F]||[];JSON.stringify(X.specs())!==JSON.stringify(W)&&(X.setSpecs(W),d[F]&&c[F]?.connect(d[F].analyser))}}function H(F){let X=I(),W=X&&X[F];if(!W)return 0;if(!d[F]){let Ne=i.createAnalyser();Ne.fftSize=512,W.connect(Ne),d[F]={analyser:Ne,buf:new Float32Array(512)}}let{analyser:Z,buf:le}=d[F];Z.getFloatTimeDomainData(le);let de=0;for(let Ne=0;Ne<le.length;Ne+=1)de=Math.max(de,Math.abs(le[Ne]));return Math.min(1,de)}function z(F,X){return(s.fx?.[F]||[]).find(W=>W.id===X)}function ne(F,X,W,Z){let le=z(F,X);return!le||!Si(le.type,W)?!1:(le.params={...le.params,[W]:Z},h[F]?.setParam(X,W,Z)??!0)}function G(F,X,W,Z){let le=z(F,X),de=le?Si(le.type,W):null;return de?ne(F,X,W,ll(de,Z)):!1}function ee(F,X,W){let Z=z(F,X);return Z?(Z.bypass=!!W,h[F]?.setBypass(X,W)??!0):!1}function ce(F,X=s.midi?.mappings){let W=ih(X,F);for(let Z of W)if(Z.action==="fx"){let le=z(Z.bus,Z.fx);le&&Si(le.type,Z.param)&&G(Z.bus,Z.fx,Z.param,Z.value)}else if(Z.action==="bypass")ee(Z.bus,Z.fx,Z.bypass);else if(Z.action==="bus")s.buses={...s.buses||{},[Z.bus]:Z.value},b();else if(Z.action==="play"){let le=P(Z.sound,{volume:Z.volume,rate:Z.rate});le&&f.set(Z.sound,[...f.get(Z.sound)||[],le])}else if(Z.action==="stop"){for(let le of f.get(Z.sound)||[])le.stop(.1);f.delete(Z.sound)}return W}function ue(F){if(m.has(F))return Promise.reject(new Error(`song ${F} could not be loaded earlier`));if(!g.has(F)){let X=`${e}village/songs/${encodeURIComponent(F)}.json`;g.set(F,fetch(X).then(W=>{if(!W.ok)throw new Error(`${W.status} for ${X}`);return W.json()}).catch(W=>{throw g.delete(F),m.add(F),console.warn(`audio: could not load song ${F}:`,W.message),W}))}return g.get(F)}function Ce(){v+=1,y?.stop()}async function Be(F,{loop:X=!0}={}){let W=v+=1,Z=await ue(F);if(W!==v)return!1;if(!I())throw new Error("no audio available");return y||=oh(_),y.play(X?{...Z,loop:Vb(Z)}:Z,0),!0}function K(F){if(!i)return;let{ambience:X,music:W}=tm(s,F),Z=new Map;for(let le of X)Z.set(`ambience:${le.id}`,le);W&&Z.set(`music:${W.id}`,W);for(let[le,de]of u)(!Z.has(le)||Gb(de.rule,Z.get(le)))&&(de.handle?.stop(de.rule.fade??2),u.delete(le));for(let[le,de]of Z){if(u.has(le))continue;if(de.song){let j=v+1;Be(de.song,{loop:!0}).catch(()=>{}),u.set(le,{handle:{stop(){v===j&&Ce()}},rule:de});continue}let Ne=P(de.sound,{loop:!0,fadeIn:de.fade??2,volume:qs(de.volume,1)});u.set(le,{handle:Ne,rule:de})}}return _={unlock(){let F=A();return I(),F?.resume?.()},play:P,updateEnvironment:K,setFxParam:ne,setFxNormalized:G,setFxBypass:ee,handleMidi:ce,level:H,loadBuffer:F=>M(F),busNode(F){let X=I();return X?X[F]||X.master:null},getSound:F=>r.get(F),getFx:F=>structuredClone(s.fx?.[F]||[]),setListener(F,X=R.forward,W=R.up){R={position:F,forward:X,up:W},C()},setBusVolume(F,X){s.buses={...s.buses||{},[F]:X},b()},setBank(F){s=F||{buses:{},sounds:[]},w(),b(),U();for(let X of p){let W=r.get(X.id);W&&X.retune(W)}},playSong:Be,stopSong:Ce,stopAll(F=.2){for(let X of u.values())X.handle?.stop(F);u.clear(),f.clear();for(let X of[...p])X.stop?.(F);Ce()},get context(){return i},preload(F){return Promise.allSettled(F.flatMap(X=>(r.get(X)?.files||[]).map(M)))}},_}var nm={saturation:1,contrast:1,brightness:0,tint:"#ffffff",tintAmount:0,vignette:0};function im(n,e){if(!e)return n;let t={...n};for(let[i,s]of Object.entries(e))t[i]=s&&typeof s=="object"&&!Array.isArray(s)&&n?.[i]&&typeof n[i]=="object"?im(n[i],s):s;return t}function ul(n,e={}){let{coarse:t,...i}=n||{},s=e.coarse?im(i,t):i;return e.shadow&&s.shadows&&(s.shadows={...s.shadows,mapSize:Math.min(s.shadows.mapSize??e.shadow,e.shadow)}),s}function Ys(n){let e=parseInt(String(n).slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function sm([n,e,t]){return`#${[n,e,t].map(i=>Math.round(Math.min(1,Math.max(0,i))*255).toString(16).padStart(2,"0")).join("")}`}function io(n,e={}){let t={...nm,...n?.base||{}};for(let i of n?.rules||[]){if(!cl(i.when,e))continue;let{id:s,when:r,tint:o,tintAmount:a,...l}=i;if(t={...t,...l},o&&a){let c=t.tintAmount+a,u=Ys(t.tint),h=Ys(o),f=u.map((d,p)=>(d*t.tintAmount+h[p]*a)/c);t.tint=sm(f),t.tintAmount=Math.min(1,Math.max(t.tintAmount,a)+Math.min(t.tintAmount,a)*.5)}}return t}function ah(n,e,t){let i={};for(let s of Object.keys(nm))if(s==="tint"){let r=Ys(n.tint),o=Ys(e.tint);i.tint=sm(r.map((a,l)=>a+(o[l]-a)*t))}else i[s]=n[s]+(e[s]-n[s])*t;return i}var qb={none:En,linear:Wr,reinhard:Xr,cineon:qr,aces:yi,agx:Yr,neutral:Zr},Yb={basic:gp,pcf:Xa,pcfsoft:zs,vsm:gn},rm={uniforms:{tDiffuse:{value:null},saturation:{value:1},contrast:{value:1},brightness:{value:0},tint:{value:new Me(1,1,1)},tintAmount:{value:0},vignette:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation, contrast, brightness, tintAmount, vignette;
    uniform vec3 tint;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.18) * contrast + 0.18;
      col += brightness;
      col = mix(col, col * tint * 1.6, tintAmount);
      vec2 d = vUv - 0.5;
      col *= 1.0 - vignette * smoothstep(0.2, 0.75, dot(d, d) * 2.0);
      gl_FragColor = vec4(max(col, 0.0), c.a);
    }`},lh={uniforms:{tDiffuse:{value:null},tDepth:{value:null},intensity:{value:1},cameraNear:{value:.1},cameraFar:{value:1e3},fogMode:{value:0},fogDensity:{value:0},fogNear:{value:1},fogFar:{value:1e3}},vertexShader:rm.vertexShader,fragmentShader:`
    #include <packing>
    uniform sampler2D tDiffuse, tDepth;
    uniform float intensity, cameraNear, cameraFar, fogDensity, fogNear, fogFar;
    uniform int fogMode;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float depth = texture2D(tDepth, vUv).x;
      #if PERSPECTIVE_CAMERA == 1
        float dist = -perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
      #else
        float dist = -orthographicDepthToViewZ(depth, cameraNear, cameraFar);
      #endif
      float clear = 1.0;
      if (fogMode == 1) clear = 1.0 - smoothstep(fogNear, fogFar, dist);
      else if (fogMode == 2) clear = exp(-fogDensity * fogDensity * dist * dist);
      if (depth >= 1.0) clear = 0.0;
      gl_FragColor = vec4(mix(vec3(1.0), texel.rgb, intensity * clear), texel.a);
    }`},Zb={strength:[0,3],radius:[0,1],threshold:[0,2]},$b={strength:.35,radius:.5,threshold:.85};function Kb(n,e){let t=Zb[n];return Math.min(t[1],Math.max(t[0],e))}function jb(n){return n.isSprite?!0:(Array.isArray(n.material)?n.material:[n.material]).some(t=>t?.transparent)}function Jb(n,e,t){let i=n.overrideVisibility.bind(n);n.overrideVisibility=()=>{i(),e.traverse(r=>{r.visible&&jb(r)&&(r.visible=!1)})},n.skipsSeeThrough=!0;let s=n.blendMaterial;n.blendMaterial=new ot({uniforms:Ft.clone(lh.uniforms),vertexShader:lh.vertexShader,fragmentShader:lh.fragmentShader,defines:{PERSPECTIVE_CAMERA:t.isPerspectiveCamera?1:0},transparent:!0,depthTest:!1,depthWrite:!1,blending:s.blending,blendSrc:s.blendSrc,blendDst:s.blendDst,blendEquation:s.blendEquation,blendSrcAlpha:s.blendSrcAlpha,blendDstAlpha:s.blendDstAlpha,blendEquationAlpha:s.blendEquationAlpha}),s.dispose(),n.blendMaterial.uniforms.tDepth.value=n.depthTexture}function Qb(n,e,t){let i=n.blendMaterial.uniforms;i.cameraNear.value=t.near,i.cameraFar.value=t.far;let s=e.fog;s?.isFogExp2?(i.fogMode.value=2,i.fogDensity.value=s.density):s?.isFog?(i.fogMode.value=1,i.fogNear.value=s.near,i.fogFar.value=s.far):i.fogMode.value=0}function ch(n,e,t){n.toneMapping=qb[t.toneMapping]??yi,n.toneMappingExposure=t.exposure??1;let i=t.shadows||{};n.shadowMap.enabled=i.enabled!==!1,n.shadowMap.type=Yb[i.type]??zs,n.shadowMap.needsUpdate=!0,e?.traverse(s=>{!s.isLight||!s.shadow||(i.mapSize&&s.shadow.mapSize.x!==i.mapSize&&(s.shadow.mapSize.set(i.mapSize,i.mapSize),s.shadow.map?.dispose(),s.shadow.map=null),i.radius!==void 0&&(s.shadow.radius=i.radius),i.bias!==void 0&&(s.shadow.bias=i.bias),i.normalBias!==void 0&&(s.shadow.normalBias=i.normalBias))})}function eS({renderer:n,scene:e,camera:t,settings:i,profile:s={}}){let r=ul(i,s),o=i,a=null,l={},c=io(r.grading,{}),u=c,h={},f={strength:null,radius:null,threshold:null};function d(R){return r.bloom?.[R]??$b[R]}function p(R){return f[R]??d(R)}function x(R,w){w===null?f[R]=null:typeof w=="number"&&Number.isFinite(w)&&(f[R]=Kb(R,w))}function g(){f.strength=f.radius=f.threshold=null,m()}function m(){let R=l.bloom;R&&(R.strength=p("strength"),R.radius=p("radius"),R.threshold=p("threshold"))}function y(){a?.dispose();let R=n.getDrawingBufferSize(new te),w=new _t(R.x,R.y,{type:Nt,samples:r.antialias==="msaa"?4:0});a=new il(n,w),l={render:new sl(e,t)},a.addPass(l.render),r.ao?.enabled&&(l.ao=new eo(e,t,R.x,R.y),l.ao.updateGtaoMaterial({radius:r.ao.radius??.6,distanceFalloff:r.ao.distanceFalloff??1,thickness:r.ao.thickness??1}),l.ao.blendIntensity=r.ao.intensity??1,Jb(l.ao,e,t),a.addPass(l.ao)),r.bloom?.enabled&&(l.bloom=new Xs(R,p("strength"),p("radius"),p("threshold")),a.addPass(l.bloom)),l.grade=new Gi(rm),a.addPass(l.grade),a.addPass(new al),r.antialias==="fxaa"&&(l.fxaa=new Gi(qp),l.fxaa.uniforms.resolution.value.set(1/R.x,1/R.y),a.addPass(l.fxaa)),v(c)}function v(R){let w=l.grade.uniforms;w.saturation.value=R.saturation,w.contrast.value=R.contrast,w.brightness.value=R.brightness,w.tint.value.setRGB(...Ys(R.tint)),w.tintAmount.value=R.tintAmount,w.vignette.value=R.vignette}ch(n,e,r),y();let _=performance.now();return{render(){let R=performance.now(),w=Math.min(.1,(R-_)/1e3);_=R,c!==u&&(c=ah(c,u,Math.min(1,w*1.5)),v(c)),l.ao&&Qb(l.ao,e,t),a.render(w)},setSize(R,w){a.setPixelRatio(n.getPixelRatio()),a.setSize(R,w);let A=n.getPixelRatio();l.fxaa?.uniforms.resolution.value.set(1/(R*A),1/(w*A))},setSky(R){h={...R},u=io(r.grading,h)},setSettings(R){o=R,r=ul(R,s),ch(n,e,r),c=u=io(r.grading,h),y()},setBloom(R){if(R===null){g();return}R&&typeof R=="object"&&(x("strength",R.strength),x("radius",R.radius),x("threshold",R.threshold)),m()},resetBloom(){g()},getBloom(){return{enabled:!!l.bloom,strength:p("strength"),radius:p("radius"),threshold:p("threshold")}},getBloomDefaults(){return{enabled:!!r.bloom?.enabled,strength:d("strength"),radius:d("radius"),threshold:d("threshold")}},get settings(){return o},get composer(){return a},dispose(){a?.dispose()}}}var tS=120,nS=`
  uniform float eyeCentered;
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 world = eyeCentered > 0.5 ? vec4(cameraPosition + position, 1.0) : modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * world;
  }`,iS=`
  uniform vec3 zenith;
  uniform vec3 horizon;
  uniform vec3 ground;
  uniform vec3 sunColor;
  uniform vec3 sunDir;
  uniform vec3 moonDir;
  uniform vec3 cloudLit;
  uniform vec3 cloudShade;
  uniform float cloudCover;
  uniform float stars;
  uniform float moonPhase;
  uniform float time;
  varying vec3 vDir;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float sum = 0.0;
    float amp = 0.5;
    for (int i = 0; i < OCTAVES; i++) {
      sum += noise(p) * amp;
      p = p * 2.03 + vec2(17.0, 9.0);
      amp *= 0.5;
    }
    return sum / (1.0 - pow(0.5, float(OCTAVES)));
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    vec3 color = h > 0.0
      ? mix(horizon, zenith, pow(smoothstep(0.0, 1.0, h), 0.55))
      : mix(horizon, ground, smoothstep(0.0, 0.25, -h));
    float sunUp = smoothstep(-0.15, 0.05, sunDir.y);
    float toSun = max(dot(dir, sunDir), 0.0);
    float low = 1.0 - smoothstep(0.0, 0.6, sunDir.y);
    color += sunColor * (pow(toSun, 6.0) * (0.25 + 0.45 * low) + pow(toSun, 48.0) * 0.5) * sunUp;
    float starMask = 0.0;
    if (stars > 0.01 && h > 0.0) {
      vec3 cell = floor(dir * 220.0);
      float pick = hash3(cell);
      if (pick > 0.9965) {
        vec3 center = (cell + 0.5) / 220.0;
        float d = length(dir - normalize(center)) * 220.0;
        float twinkle = 0.65 + 0.35 * sin(time * (2.0 + pick * 5.0) + pick * 60.0);
        starMask = smoothstep(0.55, 0.0, d) * twinkle * smoothstep(0.0, 0.12, h);
      }
    }
    vec3 moonAdd = vec3(0.0);
    float moonBlock = 0.0;
    float moonUp = smoothstep(-0.05, 0.05, moonDir.y);
    float moonDot = dot(dir, moonDir);
    float moonSize = 0.045;
    if (moonDot > cos(moonSize * 2.6)) {
      vec3 side = normalize(cross(moonDir, vec3(0.0, 1.0, 0.0)));
      vec3 up = cross(side, moonDir);
      vec3 offset = dir - moonDir * moonDot;
      vec2 uv = vec2(dot(offset, side), dot(offset, up)) / moonSize;
      float r = length(uv);
      float disc = smoothstep(1.0, 0.94, r);
      moonBlock = disc * moonUp;
      float angle = moonPhase * 6.2831853;
      vec3 n = vec3(uv, sqrt(max(0.0, 1.0 - r * r)));
      float lit = smoothstep(-0.05, 0.1, dot(n, vec3(sin(angle), 0.0, -cos(angle))));
      float craters = 0.85 + 0.15 * noise(uv * 3.0 + 4.0);
      moonAdd = vec3(1.0, 0.96, 0.86) * disc * (0.06 + 1.3 * lit) * craters;
      moonAdd += vec3(0.55, 0.6, 0.85) * smoothstep(2.6, 1.0, r) * 0.05 * (1.0 - disc);
      moonAdd *= moonUp;
    }
    float sunDisc = smoothstep(0.99955, 0.9998, dot(dir, sunDir)) * sunUp;
    float cloud = 0.0;
    vec3 cloudColor = cloudShade;
    if (h > 0.0) {
      vec2 p = dir.xz / (h + 0.12) * 1.1;
      vec2 wind = vec2(time * 0.012, time * 0.004);
      float n = fbm(p + wind);
      float edge = 1.0 - cloudCover;
      cloud = smoothstep(edge - 0.08, edge + 0.22, n) * smoothstep(0.0, 0.18, h);
      vec3 lightDir = sunDir.y > -0.05 ? sunDir : moonDir;
      float toward = dot(dir, lightDir) * 0.5 + 0.5;
      float thin = fbm(p + wind + lightDir.xz * 0.12);
      float lit = clamp(0.35 + 0.55 * toward - (thin - n) * 1.6, 0.0, 1.0);
      cloudColor = mix(cloudShade, cloudLit, lit);
      cloudColor += sunColor * pow(max(dot(dir, sunDir), 0.0), 10.0) * 0.4 * sunUp;
    }
    color += vec3(1.0, 0.97, 0.9) * starMask * stars * (1.0 - cloud) * (1.0 - moonBlock);
    color += moonAdd * (1.0 - cloud * 0.85);
    color += sunColor * 18.0 * sunDisc * (1.0 - cloud * 0.9);
    color = mix(color, cloudColor, cloud * 0.92);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Zs=(n,e)=>e.setRGB(n[0],n[1],n[2],ht);function sS({scene:n,coarse:e=!1}){let t={zenith:{value:new Me},horizon:{value:new Me},ground:{value:new Me},sunColor:{value:new Me},sunDir:{value:new L(0,1,0)},moonDir:{value:new L(0,-1,0)},cloudLit:{value:new Me},cloudShade:{value:new Me},cloudCover:{value:.4},stars:{value:0},moonPhase:{value:.5},time:{value:0},eyeCentered:{value:0}},i=new ot({side:Et,depthWrite:!1,fog:!1,uniforms:t,defines:{OCTAVES:e?2:4},vertexShader:nS,fragmentShader:iS}),s=new Xe(new Mn(tS,48,24),i);s.renderOrder=-1,s.frustumCulled=!1,n.add(s);let r=(o,a)=>a.set(o[0],o[2],-o[1]).normalize();return{dome:s,update(o,a,l,c,u,h,f=!1){t.eyeCentered.value=f?1:0,Zs(o.zenith,t.zenith.value),Zs(o.horizon,t.horizon.value),Zs(o.ground,t.ground.value),Zs(o.sun,t.sunColor.value),Zs(o.cloudLit,t.cloudLit.value),Zs(o.cloudShade,t.cloudShade.value),r(a,t.sunDir.value),r(l,t.moonDir.value),t.stars.value=o.stars,t.moonPhase.value=c,t.cloudCover.value=u,t.time.value=h}}}function $A(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new pt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=om(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let p=om(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function om(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new xt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function uh(n,e){if(e===Cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$r||e===ja){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===$r)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var hl=class extends Kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=vi.extractUrlBase(e);o=vi.resolveURL(c,this.path)}else o=vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hm){try{o[Ze.KHR_BINARY_GLTF]=new Dh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new mh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new Lh(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new Nh;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new Uh;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function rS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ph=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ut);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ha(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _i(u),c.distance=h;break;case"spot":c=new za(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},mh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,i){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ch=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ph=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Ih=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let x=new Ue,g=new L,m=new Dt,y=new L(1,1,1),v=new wa(p.geometry,p.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(g,m,y));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];v.instanceColor=new zi(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);ft.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},hm="glTF",so=12,am={JSON:1313821514,BIN:5130562},Dh=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,so),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-so,r=new DataView(e,so),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===am.JSON){let c=new Uint8Array(e,so+o,a);this.content=i.decode(c)}else if(l===am.BIN){let c=so+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Oh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Oh[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=$s[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let x=d.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}h(d)},a,c,Ut,f)})})}},Nh=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Uh=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},fl=class extends mi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*c,x=p-c,g=-2*d+3*f,m=d-f,y=1-g,v=m-f+h;for(let _=0;_!==a;_++){let R=o[x+_+a],w=o[x+_+l]*u,A=o[p+_+a],I=o[p+_]*u;r[_]=y*R+v*w+g*A+m*I}return r}},oS=new Dt,Fh=class extends fl{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return oS.fromArray(r).normalize().toArray(r),r}},ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lm={9728:bt,9729:Gt,9984:Ou,9985:yr,9986:_s,9987:An},cm={33071:Gn,33648:Er,10497:Kt},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aS={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ps},fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),n.DefaultMaterial}function Wi(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function jn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cS(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function uS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hS(n){let e,t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=n.indices+":"+dh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+dh(n.targets[i]);return e}function dh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Bh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dS=new Ue,kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new ka(this.options.manager):this.textureLoader=new Va(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Wi(r,a,s),jn(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=hh[s.type],a=$s[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new xt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=hh[s.type],c=$s[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(d&&d!==h){let m=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(y);v||(x=new c(a,m*d,s.count*d/u),v=new Os(x,d/u),t.cache.add(y,v)),g=new ki(v,l,f%d/u,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),g=new xt(x,l,p);if(s.sparse!==void 0){let m=hh.SCALAR,y=$s[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new y(o[1],v,s.sparse.count*m),w=new c(o[2],_,s.sparse.count*l);a!==null&&(g=new xt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,I=R.length;A<I;A++){let b=R[A];if(g.setX(b,w[A*l]),l>=2&&g.setY(b,w[A*l+1]),l>=3&&g.setZ(b,w[A*l+2]),l>=4&&g.setW(b,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lm[f.magFilter]||Gt,u.minFilter=lm[f.minFilter]||An,u.wrapS=cm[f.wrapS]||Kt,u.wrapT=cm[f.wrapT]||Kt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Ct(x);g.needsUpdate=!0,f(g)}),t.load(vi.resolveURL(h,r.path),p,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),jn(h,o),h.userData.mimeType=o.mimeType||fS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ur,kt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Nr,kt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return qt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let h=s[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ut),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xn);let u=r.alphaMode||fh.OPAQUE;if(u===fh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===fh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let h=r.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Ut)}return r.emissiveTexture!==void 0&&o!==Xt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Wi(s,h,r),h})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return um(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=hS(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=um(new pt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?lS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let x=u[d],g=o[d],m,y=c[d];if(g.mode===ln.TRIANGLES||g.mode===ln.TRIANGLE_STRIP||g.mode===ln.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ba(x,y):new Xe(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ln.TRIANGLE_STRIP?m.geometry=uh(m.geometry,ja):g.mode===ln.TRIANGLE_FAN&&(m.geometry=uh(m.geometry,$r));else if(g.mode===ln.LINES)m=new Ea(x,y);else if(g.mode===ln.LINE_STRIP)m=new Bs(x,y);else if(g.mode===ln.LINE_LOOP)m=new Ca(x,y);else if(g.mode===ln.POINTS)m=new Ra(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&uS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),jn(m,r),g.extensions&&Wi(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Wi(s,h[0],r),h[0];let f=new At;r.extensions&&Wi(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new yt(Mi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new di(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),jn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ue;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],x=d.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],x=h[3],g=h[4],m=[];for(let y=0,v=f.length;y<v;y++){let _=f[y],R=d[y],w=p[y],A=x[y],I=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=i._createAnimationTracks(_,R,w,A,I);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new ks(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dS)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Lr:c.length>1?u=new At:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),jn(u,r),r.extensions&&Wi(i,u,r),r.matrix!==void 0){let h=new Ue;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new At;i.name&&(r.name=s.createUniqueName(i.name)),jn(r,i),i.extensions&&Wi(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof kt||f instanceof Ct)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];wi[r.path]===wi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(wi[r.path]){case wi.weights:c=Yn;break;case wi.rotation:c=Zn;break;case wi.position:case wi.scale:c=$n;break;default:i.itemSize===1?c=Yn:c=$n;break}let u=s.interpolation!==void 0?aS[s.interpolation]:Is,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let p=new c(l[f]+"."+wi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Bh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Zn?Fh:fl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pS(n,e,t){let i=e.attributes,s=new Lt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let u=Bh($s[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Bh($s[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new jt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function um(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Oh[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ye.workingColorSpace!==Ut&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),jn(n,e),pS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cS(n,e.targets,t):n})}var mS=document.querySelector("#view"),gS=Ju({canvas:mS,profile:wo}),{renderer:fm,scene:ro,camera:EE,fitView:CE}=gS;var Xi=n=>n*Math.PI/180,Ks=n=>n*180/Math.PI;function dm(n=0,e=-2.2){return{x:n,y:e,z:0,h:0,vx:0,vy:0,vz:0,grounded:!0,flop:0}}function qi(n,e,t){let i=(e-n+540)%360-180;return Math.abs(i)<=t?e:n+Math.sign(i)*t}function PE(n,e,t,i,s){let r=Xi(i),o=-Math.sin(r),a=Math.cos(r),l=o*t+a*e,c=a*t-o*e,u=Math.hypot(l,c),h=(n.flop>.4?2.6:1.6)*(n.speedMul||1);if(u>.16){let d=Math.min(1,u);n.vx=l/u*h*d,n.vy=c/u*h*d;let p=Ks(Math.atan2(-l,c));n.h=qi(n.h,p,280*s)}else n.vx*=.8,n.vy*=.8;n.vz+=-14*(n.gravMul||1)*s,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;let f=n.floor||0;n.z<=f?(n.z=f,n.vz=0,n.grounded=!0):n.grounded=!1,n.flop>0&&(n.flop=Math.max(0,n.flop-s))}function IE(n){return n.grounded?(n.vz=3.3*(n.hopMul||1),n.grounded=!1,!0):!1}function DE(n){if(n.flop>0)return!1;n.flop=1.1;let e=Xi(n.h);return n.vx+=-Math.sin(e)*2.4,n.vy+=Math.cos(e)*2.4,n.vz=Math.max(n.vz,1.4),!0}function NE(n,e,t=.7){let[i,s]=e.origin,[r,o]=e.half;n.x=Math.min(i+r-t,Math.max(i-r+t,n.x)),n.y=Math.min(s+o-t,Math.max(s-o+t,n.y))}function xS(n,e,t){return Math.abs(n.x-e.x)<e.hx+t&&Math.abs(n.y-e.y)<e.hy+t}function _S(n,e,t,i=.42){let s=0;for(let r of e){if(r.level!==t||!xS(n,r,i))continue;let o=r.z+r.height;o<=s||n.z<o-.35||n.z>o+.08||(s=o)}return s}function UE(n,e,t,i=.42){let s=_S(n,e,t,i);s>0&&n.z<=s&&(n.z=s,(n.vz??0)<0&&(n.vz=0),n.grounded=!0);for(let r of e){if(r.level!==t)continue;let o=r.z+r.height;if(n.z+1e-4>=o||o<=n.z+.35)continue;let a=n.x-r.x,l=n.y-r.y,c=r.hx+i-Math.abs(a),u=r.hy+i-Math.abs(l);c<=0||u<=0||(c<u?(n.x+=Math.sign(a||1)*c,n.vx=0):(n.y+=Math.sign(l||1)*u,n.vy=0))}}function pm(n){return Number(n.coins)||0}function Qt(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return t?(n.coins=pm(n)+t,t):0}function js(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return pm(n)<t?!1:(n.coins-=t,!0)}var cn={center:[40,24],cols:3,rows:3,spacing:1.85,reach:1.25,waterHours:8,yardPad:4.2,crops:{pumpkin:{price:12,hours:16,coins:28,item:"pumpkin",label:"Pumpkin"},carrot:{price:8,hours:8,coins:16,item:"carrot",label:"Carrot"},wheat:{price:6,hours:12,coins:14,item:"wheat",label:"Wheat"}}},oo=Object.keys(cn.crops);function gm(n=cn){let e=[],t=n.center[0]-(n.cols-1)*n.spacing/2,i=n.center[1]-(n.rows-1)*n.spacing/2;for(let s=0;s<n.rows;s+=1)for(let r=0;r<n.cols;r+=1)e.push({id:`f${s}${r}`,x:t+r*n.spacing,y:i+s*n.spacing});return e}function kE(n=cn){let[e,t]=n.center,i=(n.cols-1)*n.spacing/2+n.yardPad,s=(n.rows-1)*n.spacing/2+n.yardPad;return[e-i,t-s,e+i,t+s]}function zE(n=cn){return[n.center[0]+4.6,n.center[1]+2.4]}function mm(){return Object.fromEntries(oo.map(n=>[n,0]))}function vS(n){let e={};for(let t of gm(n))e[t.id]={stage:"soil",crop:null,progress:0,water:0};return e}function Jn(n,e=cn){let t=vS(e),i=n.farm&&typeof n.farm=="object"?n.farm:{},s={...t},r=i.plots&&typeof i.plots=="object"?i.plots:{};for(let l of Object.keys(t)){let c=r[l];if(!c||typeof c!="object")continue;let u=oo.includes(c.crop)?c.crop:null,h=c.stage==="tilled"||c.stage==="planted"?c.stage:"soil";h==="planted"&&!u&&(h="tilled"),s[l]={stage:h,crop:h==="planted"?u:null,progress:Math.max(0,Number(c.progress)||0),water:Math.max(0,Number(c.water)||0)}}let o={...mm()},a={...mm()};for(let l of oo)o[l]=Math.max(0,Math.floor(Number(i.seeds?.[l])||0)),a[l]=Math.max(0,Math.floor(Number(i.crops?.[l])||0));return n.farm={hinted:!!i.hinted,seeds:o,crops:a,plots:s},n.farm}function xm(n){return Jn({farm:n&&typeof n=="object"?n:null})}function yS(n,e=0){return(Number(e)||0)>=.45||n==="winter"?0:n==="autumn"||n==="halloween"?.55:n==="summer"?1.15:1}function MS(n){let e=Jn(n);return oo.reduce((t,i)=>t+e.seeds[i],0)}function zh(n,e){return Jn(n).plots[e]||null}function HE(n,e,t,i=cn){let s=null,r=i.reach*i.reach;for(let o of gm(i)){let a=(e-o.x)**2+(t-o.y)**2;a<=r&&(r=a,s=o)}return s}function VE(n,e,t=cn){let i=zh(n,e.id);if(!i||i.stage==="soil")return"Till";if(i.stage==="tilled")return MS(n)>0?"Plant":"Need seeds";let s=t.crops[i.crop]?.hours??8;return i.progress>=s?"Harvest":i.water<=.05?"Water":"Tend"}function GE(n,e){let t=zh(n,e);return!t||t.stage!=="soil"?!1:(t.stage="tilled",t.crop=null,t.progress=0,t.water=0,!0)}function WE(n){let e=Jn(n);return oo.filter(t=>e.seeds[t]>0)}function XE(n,e,t,i=cn){let s=Jn(n),r=s.plots[e];return!r||r.stage!=="tilled"||!i.crops[t]||s.seeds[t]<=0?!1:(s.seeds[t]-=1,r.stage="planted",r.crop=t,r.progress=0,r.water=0,!0)}function qE(n,e,t=cn){let i=zh(n,e);return!i||i.stage!=="planted"?!1:(i.water=t.waterHours,!0)}function YE(n,e,t=cn){let i=Jn(n),s=i.plots[e],r=s&&t.crops[s.crop];if(!s||s.stage!=="planted"||!r||s.progress<r.hours)return null;i.crops[s.crop]+=1;let o=Qt(n,r.coins);n.inventory=Array.isArray(n.inventory)?n.inventory:[];let a=null;return r.item&&!n.inventory.includes(r.item)&&(n.inventory.push(r.item),a=r.item),s.stage="soil",s.crop=null,s.progress=0,s.water=0,{crop:r.label,coins:o,item:a}}function ZE(n,e,{season:t="spring",snow:i=0}={},s=cn){let r=Math.max(0,Number(e)||0);if(!r)return;let o=yS(t,i),a=Jn(n);for(let l of Object.values(a.plots)){if(l.stage!=="planted"||o<=0||l.water<=0)continue;let c=Math.min(l.water,r);l.water=Math.max(0,l.water-r),l.progress+=c*o}}function _m(n,e,t,i=cn){if(!i.crops[e])return{ok:!1,reason:"invalid"};let s=Math.max(0,Math.floor(Number(t)||0));if(!js(n,s))return{ok:!1,reason:"coins"};let r=Jn(n);return r.seeds[e]+=1,{ok:!0,reason:null,count:r.seeds[e]}}function $E(n){let e=Jn(n);return e.hinted?!1:(e.hinted=!0,!0)}var vm=["japan_korea","china","mainland_se_asia","maritime_se_asia","south_asia","middle_east","north_africa","sahel","west_africa","east_africa","southern_africa","western_europe","eastern_europe","nordic","north_america","mesoamerica","andes","amazon_brazil","southern_cone","caribbean","oceania_pacific","australia","central_asia","arctic"],jE=new Set(vm),dl={japan_korea:{label:"Japan & Korea",ground:"#5a7a5c",architecture:{style:"tiled hip house",roofShape:"hip_tile",wallColor:"#f2ebe0",roofColor:"#3a3530",trimColor:"#2c4a3a",width:2.2,depth:2,height:1.55,eaves:.28},plants:[{name:"cherry",color:"#f4a0b8"},{name:"bamboo",color:"#6fbf6a"},{name:"pine",color:"#2f6b45"},{name:"maple",color:"#c45a3a"}],animals:[{name:"crane",shape:"bird",color:"#e8eef4"},{name:"tanuki",shape:"quad",color:"#8b5a3c"},{name:"koi",shape:"fish",color:"#e07040"}],trees:["v_tree_pine.glb","v_tree_willow.glb"]},china:{label:"China",ground:"#6a8a58",architecture:{style:"courtyard",roofShape:"pagoda_eave",wallColor:"#f0e6d2",roofColor:"#8b1e1e",trimColor:"#c9a227",width:2.6,depth:2.2,height:1.7,eaves:.35},plants:[{name:"bamboo",color:"#5fad55"},{name:"lotus",color:"#e8a0c0"},{name:"ginkgo",color:"#d4c04a"},{name:"osmanthus",color:"#e8d070"}],animals:[{name:"panda",shape:"quad",color:"#2a2a2a"},{name:"crane",shape:"bird",color:"#f0f4f8"},{name:"carp",shape:"fish",color:"#d05040"}],trees:["v_tree_willow.glb","v_tree_oak.glb"]},mainland_se_asia:{label:"Mainland Southeast Asia",ground:"#3f7a48",architecture:{style:"stilt house",roofShape:"thatch_steep",wallColor:"#d8c49a",roofColor:"#8a6a38",trimColor:"#5a4030",width:2.4,depth:1.9,height:1.35,stilts:.55,eaves:.3},plants:[{name:"bamboo",color:"#5fad55"},{name:"banana leaf",color:"#4a9a40"},{name:"frangipani",color:"#f5e6a8"},{name:"rice grass",color:"#8fbf60"}],animals:[{name:"elephant",shape:"large",color:"#7a7a7a"},{name:"water buffalo",shape:"quad",color:"#4a4540"},{name:"hornbill",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_oak.glb","tree.glb"]},maritime_se_asia:{label:"Maritime Southeast Asia",ground:"#2f6e4a",architecture:{style:"stilt house",roofShape:"saddle_thatch",wallColor:"#c9a878",roofColor:"#6b4a28",trimColor:"#3d2a18",width:2.5,depth:1.8,height:1.25,stilts:.65,eaves:.32},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"banana leaf",color:"#4a9a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"orangutan",shape:"quad",color:"#b06030"},{name:"hornbill",shape:"bird",color:"#1a1a1a"},{name:"monitor lizard",shape:"lizard",color:"#5a7040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},south_asia:{label:"South Asia",ground:"#8a9a55",architecture:{style:"courtyard",roofShape:"flat_dome",wallColor:"#e8c878",roofColor:"#c45a28",trimColor:"#8b4510",width:2.5,depth:2.3,height:1.6,eaves:.15},plants:[{name:"banyan",color:"#3d6b3a"},{name:"neem",color:"#4a8040"},{name:"marigold",color:"#f0a020"},{name:"lotus",color:"#e8a0c0"}],animals:[{name:"peacock",shape:"bird",color:"#2a6a8a"},{name:"elephant",shape:"large",color:"#6a6a6a"},{name:"langur",shape:"quad",color:"#7a7080"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},middle_east:{label:"Middle East",ground:"#c9b07a",architecture:{style:"courtyard",roofShape:"flat",wallColor:"#e8dcc8",roofColor:"#d4c4a8",trimColor:"#8a6a40",width:2.4,depth:2.4,height:1.7,eaves:.08},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"pomegranate",color:"#a03030"},{name:"fig",color:"#508040"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"falcon",shape:"bird",color:"#6a5038"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_rock.glb","stone.glb"]},north_africa:{label:"North Africa",ground:"#d2b896",architecture:{style:"adobe",roofShape:"flat",wallColor:"#f5efe6",roofColor:"#e0d4c0",trimColor:"#2a6a6a",width:2.3,depth:2.1,height:1.65,eaves:.06},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"cactus",color:"#4a8048"},{name:"alfalfa",color:"#6a9a40"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"fennec",shape:"quad",color:"#e8c878"},{name:"barbary macaque",shape:"quad",color:"#8a7060"}],trees:["v_rock.glb","stone.glb"]},sahel:{label:"Sahel",ground:"#c4a35a",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#c9a070",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"baobab",color:"#6a5a40"},{name:"acacia",color:"#8a9a40"},{name:"millet",color:"#c4a040"},{name:"desert bloom",color:"#e07090"}],animals:[{name:"giraffe",shape:"tall",color:"#c49050"},{name:"ostrich",shape:"bird",color:"#5a4030"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_tree_oak.glb","v_rock.glb"]},west_africa:{label:"West Africa",ground:"#6a8a48",architecture:{style:"courtyard",roofShape:"thatch_hip",wallColor:"#d4a878",roofColor:"#6a5030",trimColor:"#8b3a2a",width:2.3,depth:2.2,height:1.45,eaves:.25},plants:[{name:"baobab",color:"#6a5a40"},{name:"oil palm",color:"#3d7a40"},{name:"hibiscus",color:"#d03050"},{name:"tall grass",color:"#8fbf50"}],animals:[{name:"lion",shape:"quad",color:"#c49040"},{name:"hornbill",shape:"bird",color:"#2a2a2a"},{name:"chimpanzee",shape:"quad",color:"#4a3020"}],trees:["v_tree_oak.glb","tree.glb"]},east_africa:{label:"East Africa",ground:"#a89050",architecture:{style:"longhouse",roofShape:"cone_thatch",wallColor:"#c9a878",roofColor:"#7a5a28",trimColor:"#4a3020",width:2.1,depth:2.1,height:1.35,eaves:.22},plants:[{name:"acacia",color:"#8a9a40"},{name:"baobab",color:"#6a5a40"},{name:"coffee shrub",color:"#3d6a35"},{name:"tall grass",color:"#9ab050"}],animals:[{name:"zebra",shape:"quad",color:"#e8e8e8"},{name:"flamingo",shape:"bird",color:"#f08090"},{name:"giraffe",shape:"tall",color:"#c49050"}],trees:["v_tree_oak.glb","tree.glb"]},southern_africa:{label:"Southern Africa",ground:"#b09a58",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#e0c8a0",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"aloe",color:"#4a8048"},{name:"acacia",color:"#8a9a40"},{name:"protea",color:"#c04060"},{name:"fynbos",color:"#6a8050"}],animals:[{name:"springbok",shape:"quad",color:"#c4a060"},{name:"meerkat",shape:"upright",color:"#b08050"},{name:"secretary bird",shape:"bird",color:"#c8c0a8"}],trees:["v_tree_oak.glb","v_rock.glb"]},western_europe:{label:"Western Europe",ground:"#4a7c59",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8e0d0",roofColor:"#5a4a48",trimColor:"#3a2a20",width:2.1,depth:1.9,height:1.75,eaves:.2},plants:[{name:"oak",color:"#3d6b3a"},{name:"lavender",color:"#8a70b0"},{name:"grapevine",color:"#4a7040"},{name:"rose",color:"#d04060"}],animals:[{name:"fox",shape:"quad",color:"#c06030"},{name:"sparrow",shape:"bird",color:"#6a5a50"},{name:"hedgehog",shape:"round",color:"#6a5040"}],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},eastern_europe:{label:"Eastern Europe",ground:"#4a7050",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8d8c0",roofColor:"#8b2a2a",trimColor:"#2a4a6a",width:2.15,depth:1.95,height:1.7,eaves:.22},plants:[{name:"birch",color:"#d8d0c0"},{name:"sunflower",color:"#f0c020"},{name:"wheat",color:"#d4b050"},{name:"linden",color:"#4a8040"}],animals:[{name:"stork",shape:"bird",color:"#f0f0f0"},{name:"wolf",shape:"quad",color:"#6a6a6a"},{name:"deer",shape:"quad",color:"#8a6040"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},nordic:{label:"Nordic",ground:"#3d5c4a",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#5a4030",roofColor:"#3d5a40",trimColor:"#2a2018",width:2.8,depth:1.6,height:1.5,eaves:.18},plants:[{name:"pine",color:"#2f5a3a"},{name:"lingonberry",color:"#a03040"},{name:"birch",color:"#d8d0c0"},{name:"lichen",color:"#a8b070"}],animals:[{name:"moose",shape:"large",color:"#5a4030"},{name:"reindeer",shape:"quad",color:"#8a6a48"},{name:"puffin",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_pine.glb","tree.glb"]},north_america:{label:"North America",ground:"#4a7a50",architecture:{style:"timber frame",roofShape:"clapboard_gable",wallColor:"#f0ebe4",roofColor:"#5a3030",trimColor:"#2a4050",width:2.3,depth:2,height:1.65,eaves:.2},plants:[{name:"maple",color:"#c45a3a"},{name:"pine",color:"#2f5a3a"},{name:"goldenrod",color:"#e0b030"},{name:"oak",color:"#3d6b3a"}],animals:[{name:"deer",shape:"quad",color:"#8a6040"},{name:"raccoon",shape:"quad",color:"#5a5a5a"},{name:"blue jay",shape:"bird",color:"#3a6aaa"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},mesoamerica:{label:"Mesoamerica",ground:"#6a8a48",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#e8d0a8",roofColor:"#a05030",trimColor:"#2a6a6a",width:2.2,depth:2,height:1.55,eaves:.18},plants:[{name:"agave",color:"#5a8a50"},{name:"cactus",color:"#4a8048"},{name:"ceiba",color:"#3d6b3a"},{name:"marigold",color:"#f0a020"}],animals:[{name:"jaguar",shape:"quad",color:"#c08030",model:"animals/jaguar.glb"},{name:"quetzal",shape:"bird",color:"#2a8a50",model:"animals/quetzal.glb"},{name:"iguana",shape:"lizard",color:"#5a8040",model:"animals/iguana.glb"},{name:"axolotl",shape:"fish",color:"#f4a9bd",model:"animals/axolotl.glb"}],trees:["v_tree_oak.glb","tree.glb"]},andes:{label:"Andes",ground:"#7a8a60",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#d4c0a0",roofColor:"#8a4030",trimColor:"#5a4030",width:2.15,depth:1.95,height:1.5,eaves:.16},plants:[{name:"quinoa",color:"#c4a050"},{name:"cactus",color:"#4a8048"},{name:"ichu grass",color:"#b0a060"},{name:"cantuta",color:"#e04050"}],animals:[{name:"llama",shape:"tall",color:"#c8b090"},{name:"condor",shape:"bird",color:"#2a2a2a"},{name:"vicu\xF1a",shape:"quad",color:"#c4a070"}],trees:["v_rock.glb","v_tree_oak.glb"]},amazon_brazil:{label:"Amazon & Brazil",ground:"#2d6a3e",architecture:{style:"stilt house",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:2.3,depth:1.9,height:1.2,stilts:.5,eaves:.28},plants:[{name:"rubber tree",color:"#3d6b3a"},{name:"bromeliad",color:"#d04060"},{name:"a\xE7a\xED palm",color:"#3d7a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"capybara",shape:"round",color:"#8a6a48"},{name:"toucan",shape:"bird",color:"#2a2a2a"},{name:"jaguar",shape:"quad",color:"#c08030"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},southern_cone:{label:"Southern Cone",ground:"#5a8a58",architecture:{style:"courtyard",roofShape:"tile_gable",wallColor:"#f0ebe4",roofColor:"#8a4030",trimColor:"#2a4a6a",width:2.25,depth:2.05,height:1.6,eaves:.2},plants:[{name:"omb\xFA",color:"#3d6b3a"},{name:"yerba mate",color:"#4a7040"},{name:"pampas grass",color:"#d8c890"},{name:"jacaranda",color:"#7a60b0"}],animals:[{name:"guanaco",shape:"tall",color:"#c4a070"},{name:"rhea",shape:"bird",color:"#8a7a60"},{name:"armadillo",shape:"round",color:"#8a7a60"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},caribbean:{label:"Caribbean",ground:"#5a9e7a",architecture:{style:"stilt house",roofShape:"hip_tile",wallColor:"#f0e8d0",roofColor:"#c04040",trimColor:"#2a6a8a",width:2.2,depth:1.9,height:1.4,stilts:.35,eaves:.25},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"sea grape",color:"#4a8040"},{name:"banana leaf",color:"#4a9a40"}],animals:[{name:"parrot",shape:"bird",color:"#2a8a40"},{name:"iguana",shape:"lizard",color:"#5a8040"},{name:"hummingbird",shape:"bird",color:"#2a8a8a"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},oceania_pacific:{label:"Oceania & Pacific",ground:"#4a8a68",architecture:{style:"longhouse",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:3,depth:1.5,height:1.3,stilts:.4,eaves:.3},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"breadfruit",color:"#4a8040"},{name:"hibiscus",color:"#e04060"},{name:"kelp-side grass",color:"#5a8a60"}],animals:[{name:"fruit bat",shape:"bird",color:"#4a3a30"},{name:"gecko",shape:"lizard",color:"#7a9a40"},{name:"parrot",shape:"bird",color:"#d04040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},australia:{label:"Australia",ground:"#c4a868",architecture:{style:"timber frame",roofShape:"verandah_gable",wallColor:"#e8e0d0",roofColor:"#6a7070",trimColor:"#3a4a50",width:2.4,depth:2.1,height:1.55,eaves:.35},plants:[{name:"eucalyptus",color:"#6a8a58"},{name:"wattle",color:"#e8c030"},{name:"spinifex",color:"#b0a050"},{name:"bottlebrush",color:"#c03040"}],animals:[{name:"kangaroo",shape:"upright",color:"#a07040"},{name:"emu",shape:"bird",color:"#4a4038"},{name:"koala",shape:"round",color:"#8a8a80"}],trees:["v_tree_oak.glb","v_rock.glb"]},central_asia:{label:"Central Asia",ground:"#b0a068",architecture:{style:"adobe",roofShape:"flat_dome",wallColor:"#e0d0b0",roofColor:"#a05040",trimColor:"#6a4030",width:2.3,depth:2.3,height:1.55,eaves:.1},plants:[{name:"saxaul",color:"#6a7050"},{name:"tulip",color:"#d03040"},{name:"wormwood",color:"#8a9a60"},{name:"apricot",color:"#e8a040"}],animals:[{name:"snow leopard",shape:"quad",color:"#c0b090"},{name:"saiga",shape:"quad",color:"#b09060"},{name:"eagle",shape:"bird",color:"#5a4030"}],trees:["v_rock.glb","v_tree_oak.glb"]},arctic:{label:"Arctic",ground:"#dce6ef",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#d0c8b8",roofColor:"#6a7a70",trimColor:"#3a4038",width:2.5,depth:1.7,height:1.25,eaves:.15},plants:[{name:"arctic willow",color:"#8a9a80"},{name:"reindeer moss",color:"#c0c890"},{name:"tundra flower",color:"#d080a0"},{name:"ice lichen",color:"#a8b8a0"}],animals:[{name:"arctic fox",shape:"quad",color:"#e8e8e8"},{name:"seal",shape:"round",color:"#4a5058"},{name:"ptarmigan",shape:"bird",color:"#d8d8d0"}],trees:["v_rock.glb","stone.glb"]}},Hh={JP:"japan_korea",KR:"japan_korea",KP:"japan_korea",CN:"china",MN:"china",TH:"mainland_se_asia",VN:"mainland_se_asia",LA:"mainland_se_asia",KH:"mainland_se_asia",MM:"mainland_se_asia",ID:"maritime_se_asia",MY:"maritime_se_asia",SG:"maritime_se_asia",BN:"maritime_se_asia",PH:"maritime_se_asia",TL:"maritime_se_asia",IN:"south_asia",PK:"south_asia",BD:"south_asia",NP:"south_asia",BT:"south_asia",LK:"south_asia",MV:"south_asia",AF:"south_asia",SA:"middle_east",AE:"middle_east",IQ:"middle_east",IR:"middle_east",JO:"middle_east",SY:"middle_east",LB:"middle_east",IL:"middle_east",PS:"middle_east",KW:"middle_east",QA:"middle_east",BH:"middle_east",OM:"middle_east",YE:"middle_east",TR:"middle_east",CY:"middle_east",MA:"north_africa",DZ:"north_africa",TN:"north_africa",LY:"north_africa",EG:"north_africa",SD:"north_africa",ML:"sahel",NE:"sahel",TD:"sahel",BF:"sahel",MR:"sahel",NG:"west_africa",GH:"west_africa",CI:"west_africa",SN:"west_africa",GN:"west_africa",LR:"west_africa",SL:"west_africa",BJ:"west_africa",TG:"west_africa",GW:"west_africa",CV:"west_africa",GM:"west_africa",KE:"east_africa",TZ:"east_africa",UG:"east_africa",ET:"east_africa",RW:"east_africa",BI:"east_africa",SO:"east_africa",DJ:"east_africa",ER:"east_africa",SS:"east_africa",KM:"east_africa",SC:"east_africa",MG:"east_africa",MU:"east_africa",ZA:"southern_africa",NA:"southern_africa",BW:"southern_africa",ZW:"southern_africa",ZM:"southern_africa",MW:"southern_africa",MZ:"southern_africa",SZ:"southern_africa",LS:"southern_africa",AO:"southern_africa",FR:"western_europe",DE:"western_europe",BE:"western_europe",NL:"western_europe",LU:"western_europe",CH:"western_europe",AT:"western_europe",GB:"western_europe",IE:"western_europe",PT:"western_europe",ES:"western_europe",IT:"western_europe",AD:"western_europe",MC:"western_europe",SM:"western_europe",LI:"western_europe",VA:"western_europe",MT:"western_europe",GR:"western_europe",PL:"eastern_europe",CZ:"eastern_europe",SK:"eastern_europe",HU:"eastern_europe",RO:"eastern_europe",BG:"eastern_europe",RS:"eastern_europe",BA:"eastern_europe",HR:"eastern_europe",SI:"eastern_europe",ME:"eastern_europe",MK:"eastern_europe",AL:"eastern_europe",MD:"eastern_europe",UA:"eastern_europe",BY:"eastern_europe",RU:"eastern_europe",SE:"nordic",NO:"nordic",FI:"nordic",DK:"nordic",IS:"nordic",EE:"nordic",LV:"nordic",LT:"nordic",US:"north_america",CA:"north_america",MX:"mesoamerica",GT:"mesoamerica",BZ:"mesoamerica",HN:"mesoamerica",SV:"mesoamerica",NI:"mesoamerica",CR:"mesoamerica",PA:"mesoamerica",PE:"andes",BO:"andes",EC:"andes",CL:"andes",BR:"amazon_brazil",GY:"amazon_brazil",SR:"amazon_brazil",VE:"amazon_brazil",CO:"amazon_brazil",AR:"southern_cone",UY:"southern_cone",PY:"southern_cone",CU:"caribbean",JM:"caribbean",HT:"caribbean",DO:"caribbean",BS:"caribbean",BB:"caribbean",AG:"caribbean",DM:"caribbean",GD:"caribbean",KN:"caribbean",LC:"caribbean",VC:"caribbean",TT:"caribbean",FJ:"oceania_pacific",PG:"oceania_pacific",SB:"oceania_pacific",VU:"oceania_pacific",WS:"oceania_pacific",TO:"oceania_pacific",KI:"oceania_pacific",MH:"oceania_pacific",FM:"oceania_pacific",NR:"oceania_pacific",PW:"oceania_pacific",TV:"oceania_pacific",NZ:"oceania_pacific",AU:"australia",KZ:"central_asia",UZ:"central_asia",TM:"central_asia",TJ:"central_asia",KG:"central_asia",AM:"central_asia",AZ:"central_asia",GE:"central_asia",CM:"west_africa",CF:"west_africa",CG:"west_africa",CD:"west_africa",GA:"west_africa",GQ:"west_africa",ST:"west_africa"};function Vh(n){let e=String(n?.iso||"").toUpperCase();if(Hh[e])return Hh[e];let t=Number(n?.lat)||0,i=Number(n?.lon)||0;return Math.abs(t)>=66?"arctic":i>=100&&i<=150&&t>=20&&t<=50?"china":i>=120&&i<=150&&t>=30&&t<=46?"japan_korea":i>=95&&i<=110&&t>=5&&t<=25?"mainland_se_asia":i>=95&&i<=140&&t>=-12&&t<=15?"maritime_se_asia":i>=60&&i<=95&&t>=5&&t<=40?"south_asia":i>=30&&i<=65&&t>=12&&t<=42?"middle_east":i>=-20&&i<=40&&t>=20&&t<=38?"north_africa":i>=-20&&i<=40&&t>=8&&t<=20?"sahel":i>=-20&&i<=20&&t>=-5&&t<=15?"west_africa":i>=20&&i<=50&&t>=-15&&t<=15?"east_africa":i>=10&&i<=40&&t>=-35&&t<=-15?"southern_africa":i>=-15&&i<=20&&t>=35&&t<=60?"western_europe":i>=15&&i<=50&&t>=40&&t<=65?"eastern_europe":i>=-30&&i<=35&&t>=54?"nordic":i>=-130&&i<=-50&&t>=25?"north_america":i>=-120&&i<=-80&&t>=5&&t<=30?"mesoamerica":i>=-85&&i<=-60&&t>=-25&&t<=5?"andes":i>=-75&&i<=-30&&t>=-35&&t<=10?"amazon_brazil":i>=-75&&i<=-45&&t>=-56&&t<=-20?"southern_cone":i>=110&&i<=180&&t>=-50&&t<=0?"oceania_pacific":i>=110&&i<=155&&t>=-45&&t<=-10?"australia":i>=-90&&i<=-55&&t>=10&&t<=28?"caribbean":i>=45&&i<=90&&t>=35&&t<=55?"central_asia":"western_europe"}var SS=["tropical_rainforest","savanna","desert","temperate_forest","mediterranean","boreal","tundra","polar","island"],tC=new Set(SS),wS={tropical_rainforest:{label:"Tropical rainforest",ground:"#2d6a3e",plants:["fern","orchid","banana leaf"],animals:["toucan","capybara","butterfly"],trees:["v_tree_oak.glb","tree.glb"]},savanna:{label:"Savanna",ground:"#c4a35a",plants:["acacia scrub","tall grass","baobab seedling"],animals:["gazelle","lion cub","ostrich"],trees:["v_tree_oak.glb","tree.glb"]},desert:{label:"Desert",ground:"#d4b896",plants:["cactus","desert bloom","sagebrush"],animals:["lizard","camel calf","fennec"],trees:["v_rock.glb","stone.glb"]},temperate_forest:{label:"Temperate forest",ground:"#4a7c59",plants:["oak leaf","wild berry","moss"],animals:["deer","fox","squirrel"],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},mediterranean:{label:"Mediterranean",ground:"#8fa86a",plants:["olive sprig","lavender","cypress cone"],animals:["goat","lizard","sparrow"],trees:["v_tree_oak.glb","v_tree_willow.glb"]},boreal:{label:"Boreal",ground:"#3d5c4a",plants:["pine needle","lichen","blueberry"],animals:["moose","wolf","owl"],trees:["v_tree_pine.glb","tree.glb"]},tundra:{label:"Tundra",ground:"#9aa7a0",plants:["arctic willow","reindeer moss","tundra flower"],animals:["reindeer","arctic fox","ptarmigan"],trees:["v_rock.glb","stone.glb"]},polar:{label:"Polar",ground:"#dce6ef",plants:["ice lichen","snow moss","polar blossom"],animals:["penguin","seal","snow petrel"],trees:["v_rock.glb","stone.glb"]},island:{label:"Island",ground:"#5a9e7a",plants:["coconut palm","hibiscus","sea grape"],animals:["parrot","crab","dolphin"],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]}};function TS(n){let e=String(n||"tree.glb").replace(/^village\//,"");return e.startsWith("v_")?`village/${e}`:e}var ym=[{id:"home",role:"home"},{id:"hall",role:"hall"},{id:"cafe",role:"cafe"},{id:"station",role:"station"}],Mm={home:{w:1,d:1,h:1},hall:{w:1.25,d:1.15,h:1.15},cafe:{w:.95,d:.9,h:.95},station:{w:1.15,d:1.05,h:1.05}};function Gh(n){let e=String(n||"").toUpperCase(),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function bm(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function AS(n,e=0,t=""){let i=Math.abs(Number(n)||0),s=bm(Gh(t||`${n},${e}`));if(new Set(["AG","BS","BB","CV","KM","CU","CY","DM","DO","FJ","GD","HT","IS","JM","KI","MV","MT","MH","MU","FM","NR","PW","KN","LC","VC","WS","ST","SC","SG","SB","TO","TT","TV","VU","MG","LK","PH","ID","JP","NZ","GB","IE","SR","GY","BZ"]).has(String(t).toUpperCase())&&i<55&&s()<.72)return"island";if(i>=72)return"polar";if(i>=60)return s()<.55?"tundra":"boreal";if(i>=50)return s()<.65?"boreal":"temperate_forest";if(i>=35){let o=s();return o<.4?"mediterranean":o<.85?"temperate_forest":"desert"}if(i>=15){let o=s();return o<.4?"savanna":o<.7?"desert":"tropical_rainforest"}return s()<.55?"tropical_rainforest":"savanna"}function ES(n){let e=String(n?.iso||"XX").toUpperCase(),t=Number(n?.lat)||0,i=Number(n?.lon)||0,s=AS(t,i,e),r=wS[s],o=Vh(n),a=dl[o]||dl.western_europe,l=a.architecture,c=bm(Gh(e)),u=ym.map((P,N)=>{let U=Math.PI*2-1.9,H=-Math.PI/2+.95+N/Math.max(1,ym.length-1)*U+(c()-.5)*.25,z=4.5+c()*2.5,ne=Mm[P.role]||Mm.home;return{id:P.id,role:P.role,procedural:!0,style:l.style,roofShape:l.roofShape,wallColor:l.wallColor,roofColor:l.roofColor,trimColor:l.trimColor,width:l.width*ne.w*(.92+c()*.16),depth:l.depth*ne.d*(.92+c()*.16),height:l.height*ne.h*(.94+c()*.12),stilts:l.stilts||0,eaves:l.eaves||.15,at:[Math.cos(H)*z,Math.sin(H)*z,0],h:c()*360|0}}),h=[],f=(a.trees?.length?a.trees:r.trees)||["tree.glb"],d=6+(c()*6|0),p=a.plants[c()*a.plants.length|0]?.color||"#4a7c59";for(let P=0;P<d;P++){let N=c()*Math.PI*2,U=8+c()*10;h.push({file:TS(f[c()*f.length|0]),at:[Math.cos(N)*U,Math.sin(N)*U,0],h:c()*360|0,s:.85+c()*.4,tint:p})}let x=a.plants,g=a.animals,m=x[c()*x.length|0],y=g[c()*g.length|0],v=[],_=4+(c()*3|0);for(let P=0;P<_;P++){let N=x[P%x.length],U=c()*Math.PI*2,H=2.5+c()*7;v.push({id:P===0?`plant_${e}`:`plant_${e}_${P}`,label:N.name,color:N.color,at:[Math.cos(U)*H,Math.sin(U)*H,.15],quest:P===0})}let R=[],w=(P,N)=>{let U=0,H=0;for(let z=0;z<20;z++){let ne=c()*Math.PI*2,G=P+c()*(N-P);U=Math.cos(ne)*G,H=Math.sin(ne)*G;let ee=u.some(ue=>{let Ce=(ue.width||2)*.55+1.5,Be=(ue.depth||2)*.55+1.5;return Math.abs(U-ue.at[0])<Ce&&Math.abs(H-ue.at[1])<Be}),ce=R.some(ue=>(U-ue[0])**2+(H-ue[1])**2<10);if(!ee&&!ce)break}return R.push([U,H]),[U,H,.2]},A=[{id:`animal_${e}`,label:y.name,color:y.color,shape:y.shape,model:y.model,at:w(6.5,11),quest:!0}],I=[],b=Math.min(3,Math.max(2,g.length));for(let P=0;P<b;P++){let N=g[P%g.length];I.push({id:`wander_${e}_${P}`,label:N.name,color:N.color,shape:N.shape,model:N.model,at:w(7,14),speed:.45+c()*.55,phase:c()*Math.PI*2})}let M=["Elder Momo","Elder Pip","Elder Juniper","Elder Sora","Elder Coco"],C={id:`elder_${e}`,name:M[(Gh(e)+3)%M.length],at:[.5+c(),-1.2+c()*.5,0]};return{iso:e,biome:s,biomeLabel:r.label,culture:o,cultureLabel:a.label,architecture:{...l},ground:a.ground||r.ground,buildings:u,trees:h,plants:v,animals:A,creatures:I,elder:C,plant:m.name,animal:y.name}}function Sm(n,e){let t=String(n?.iso||"XX").toUpperCase(),i=n?.name||t,s=e||ES(n),r=s.elder.id,o=s.plants[0].id,a=s.animals[0].id;return{quests:[{id:`w_${t}_welcome`,title:`Welcome to ${i}`,giver:r,intro:`${s.elder.name} waves you into the village.`,outro:`You found your footing in ${i}.`,reward:{coins:5},steps:[{type:"visit",region:`village_${t}`},{type:"talk",npc:r}]},{id:`w_${t}_nature`,title:`${s.cultureLabel||s.biomeLabel} walk`,giver:r,intro:`Seek the ${s.plant} and watch for a ${s.animal} in this ${s.architecture?.style||"village"}.`,outro:`You know the wilds of ${i} a little better.`,reward:{coins:8},requires:[`w_${t}_welcome`],steps:[{type:"find",item:o,label:s.plant},{type:"find",item:a,label:s.animal},{type:"talk",npc:r}]}]}}function pl(){return{iso:null,quests:{active:[],done:[],tracked:null,progress:{}}}}function Yi(n){return(!n.world||typeof n.world!="object")&&(n.world=pl()),(!n.world.quests||typeof n.world.quests!="object")&&(n.world.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.world.quests.active)||(n.world.quests.active=[]),Array.isArray(n.world.quests.done)||(n.world.quests.done=[]),(!n.world.quests.progress||typeof n.world.quests.progress!="object")&&(n.world.quests.progress={}),n.world}function nC(n,e,t){let i=Yi(n);i.iso=String(e.iso).toUpperCase();let s=Sm(e,t),r=i.quests;for(let a of s.quests)r.done.includes(a.id)||r.active.includes(a.id)||(a.requires&&!a.requires.every(c=>r.done.includes(c))&&a.requires.every(c=>r.done.includes(c)||r.active.includes(c)),!(!(a.requires||[]).length||(a.requires||[]).every(c=>r.done.includes(c))))||(r.active.push(a.id),r.progress[a.id]={step:0,counts:{}},r.tracked||(r.tracked=a.id));let o=s.quests[0];return!r.done.includes(o.id)&&!r.active.includes(o.id)&&(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked=o.id),s}function iC(n,e,t){let i=Yi(n),s=Sm(e,t),r=i.quests;for(let o of s.quests)r.done.includes(o.id)||r.active.includes(o.id)||!(o.requires||[]).every(l=>r.done.includes(l))||(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked||(r.tracked=o.id))}function Wh(n){return new Map((n?.quests||[]).map(e=>[e.id,e]))}function CS(n,e){return!n||!e||n.type!==e.type?!1:n.type==="talk"?n.npc===e.npc:n.type==="visit"?n.region===e.region:n.type==="find"?n.item===e.item:!1}function RS(n,e,t){let i=Yi(n),s=Wh(t).get(e),r=i.quests;r.active=r.active.filter(a=>a!==e),r.done.includes(e)||r.done.push(e),delete r.progress[e],r.tracked===e&&(r.tracked=r.active[0]??null);let o=[{kind:"complete",questId:e,title:s?.title,outro:s?.outro}];return s?.reward?.coins&&(n.coins=(Number(n.coins)||0)+s.reward.coins,o.push({kind:"coins",amount:s.reward.coins})),o}function sC(n,e,t){let i=Yi(n),s=Wh(e),r=[];for(let o of[...i.quests.active]){let a=s.get(o);if(!a)continue;let l=i.quests.progress[o]||{step:0,counts:{}},c=a.steps[l.step];CS(c,t)&&(l.step+=1,i.quests.progress[o]=l,l.step>=a.steps.length?r.push(...RS(n,o,e)):r.push({kind:"step",questId:o,step:l.step}))}return r}function rC(n,e){let t=Yi(n),i=Wh(e),s=[];for(let r of t.quests.active){let o=i.get(r);if(!o)continue;let a=t.quests.progress[r]||{step:0},l=o?.steps?.[a.step];s.push({id:r,title:o?.title??r,tracked:t.quests.tracked===r,stepText:PS(l),done:!1})}for(let r of t.quests.done){if(!i.has(r)&&!String(r).startsWith("w_"))continue;let o=i.get(r);o&&s.push({id:r,title:o.title,done:!0})}return s}function PS(n){return n?n.type==="talk"?"Talk to the elder":n.type==="visit"?"Visit the village":n.type==="find"?n.label?`Find the ${n.label}`:`Find ${n.item.replace(/^plant_[A-Z]{2}$/,"the plant").replace(/^animal_[A-Z]{2}$/,"the animal")}`:n.type:""}function IS(n){return String(n??"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,16)}function DS(n){return n==="female"?"female":"male"}function Xh(n){return{name:IS(n?.name),gender:DS(n?.gender)}}var LS=.9;function hC(n){return Array.isArray(n?.activities)?n.activities:[]}function NS(n){return Array.isArray(n.spots)&&n.spots.length?n.spots:Array.isArray(n.at)?[n.at]:[]}function fC(n,e,t,i,s=LS){let r=null,o=1/0;for(let a of n||[]){if(!a||a.level!==e)continue;let l=Number(a.radius)>0?Number(a.radius):s;for(let c of NS(a)){let u=(t-c[0])**2+(i-c[1])**2;u<=l*l&&u<o&&(o=u,r=a)}}return r}function ml(n){return(!n.civic||typeof n.civic!="object")&&(n.civic={lessons:{},checkups:{}}),(!n.civic.lessons||typeof n.civic.lessons!="object")&&(n.civic.lessons={}),(!n.civic.checkups||typeof n.civic.checkups!="object")&&(n.civic.checkups={}),n.civic}function wm(n){let e={lessons:{},checkups:{}};for(let t of["lessons","checkups"]){let i=n?.[t];if(!(!i||typeof i!="object"))for(let[s,r]of Object.entries(i))Number.isFinite(r)&&(e[t][s]=r)}return e}function US(n){let e=Math.floor(Math.abs(n))*2654435761+1013904223>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function dC(n,e,t=3){let i=(n||[]).filter(o=>o&&typeof o.q=="string"&&Array.isArray(o.answers)&&o.answers.length>1),s=US(e),r=i.map((o,a)=>({q:o,k:s()+a*1e-9})).sort((o,a)=>o.k-a.k).map(o=>o.q);return r.slice(0,Math.max(0,Math.min(t,r.length)))}function pC(n,e){return Number.isInteger(n?.correct)&&n.correct===e}function mC(n,e,t){return ml(n).lessons[e.id]!==t}function gC(n,e,t,i,s){let r=ml(n);if(r.lessons[e.id]===s)return{coins:0,sticker:null};r.lessons[e.id]=s;let o=Qt(n,Math.max(0,t)*(Number(e.reward_per_correct)||0)),a=null,l=e.sticker;return l&&i>0&&t===i&&(n.inventory=Array.isArray(n.inventory)?n.inventory:[],n.inventory.includes(l)||(n.inventory.push(l),a=l)),{coins:o,sticker:a}}function Tm(n){if(n?.seed)return n.seed;let e=String(n?.item||"");return e.startsWith("seed_")?e.slice(5):null}function FS(n,e){return Tm(e)?!1:e.clothing?(n.clothes?.owned||[]).includes(e.clothing):e.item?(n.inventory||[]).includes(e.item):!1}function xC(n,e){if(!e||!(Number(e.price)>=0))return{ok:!1,reason:"invalid"};let t=Tm(e);return t?_m(n,t,e.price):FS(n,e)?{ok:!1,reason:"owned"}:js(n,e.price)?(e.potion?(n.potions=n.potions||{found:[],bag:{}},n.potions.bag={...n.potions.bag||{},[e.potion]:(n.potions.bag?.[e.potion]||0)+1}):e.clothing?(n.clothes=n.clothes||{owned:[],wearing:[]},n.clothes.owned=[...n.clothes.owned||[],e.clothing]):e.item&&(n.inventory=[...n.inventory||[],e.item]),{ok:!0,reason:null}):{ok:!1,reason:"coins"}}function _C(n,e){return(Number(n)||0)*24+(Number(e)||0)}function OS(n,e,t){let i=ml(n).checkups[e.id],s=Number(e.cooldown_hours)||0;return Number.isFinite(i)?Math.max(0,s-(t-i)):0}function vC(n,e,t){return OS(n,e,t)>0?null:(ml(n).checkups[e.id]=t,{potion:e.buff||null,seconds:Number(e.seconds)||0})}function yC(n,e){return!e||typeof e!="object"?!1:!!(e.quest_done&&(n.quests?.done||[]).includes(e.quest_done)||e.has_item&&(n.inventory||[]).includes(e.has_item))}var Am={chickens:6,squirrels:4,eggHours:6,befriendRadius:1.45,chickenRadius:1.35};function gl(n){let e=n.critters&&typeof n.critters=="object"?n.critters:{},t={};for(let[i,s]of Object.entries(e.eggs||{}))Number.isFinite(Number(s))&&(t[i]=Number(s));return n.critters={pet:typeof e.pet=="string"&&e.pet?e.pet:null,eggs:t},n.critters}function Em(n){return gl({critters:n&&typeof n=="object"?n:null})}function bC(n=Am){return Array.from({length:n.chickens},(e,t)=>`c${t}`)}function BS(n,e,t,i=Am){let s=gl(n).eggs;return Number.isFinite(s[e])?t-s[e]>=i.eggHours:e==="c0"}function SC(n,e,t){return BS(n,e,t)?(gl(n).eggs[e]=t,n.supplies=n.supplies&&typeof n.supplies=="object"?n.supplies:{},n.supplies.eggs=Math.max(0,Math.floor(Number(n.supplies.eggs)||0))+1,n.inventory=Array.isArray(n.inventory)?n.inventory:[],n.inventory.includes("egg")||n.inventory.push("egg"),!0):!1}function wC(n,e){if(!e)return!1;let t=gl(n);return t.pet=e,!0}var Zi={seed:20261004,count:64,apples:14,protectedApples:8,minSpacing:4.4,pushRadius:1.35,pushSpeed:.35,pickRadius:1.55,wood:1,fruitHours:36,stumpHours:72,fallSeconds:.7,bounds:[-118,-128,138,128]};function kS(n){let e=n>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Cm=["oak","pine","willow"];function AC({blocked:n=()=>!1,heightAt:e=null,config:t=Zi}={}){let i=kS(t.seed),[s,r,o,a]=t.bounds,l=[],c=0,u=t.count*90;for(;l.length<t.count&&c<u;){c+=1;let f=s+i()*(o-s),d=r+i()*(a-r);if(n(f,d)||l.some(m=>Math.hypot(m.x-f,m.y-d)<t.minSpacing))continue;let p=e?e(f,d):0;if(!(c>t.count*40)&&Math.abs(p)<.35&&i()<.72)continue;let g=Cm[l.length%Cm.length];l.push({id:`t${l.length}`,x:f,y:d,kind:g,heading:Math.floor(i()*360),scale:.85+i()*.35,protect:!1})}let h=0;for(let f of l){if(h>=t.apples)break;e&&e(f.x,f.y)<-.4||(f.kind="apple",f.protect=h<t.protectedApples,h+=1)}return l}function Ti(n){let e=n.grove&&typeof n.grove=="object"?n.grove:{},t={};for(let[s,r]of Object.entries(e.felled||{}))!r||typeof r!="object"||(t[s]={at:Number(r.at)||0,taken:!!r.taken,anim:Math.max(0,Math.min(1,Number(r.anim)||0))});let i={};for(let[s,r]of Object.entries(e.fruit||{}))Number.isFinite(Number(r))&&(i[s]=Number(r));return n.grove={felled:t,fruit:i},n.grove}function Rm(n){return Ti({grove:n&&typeof n=="object"?n:null})}function EC(n,e){return(Number(n)||0)*24+(Number(e)||0)}function CC(n,e,t=Zi){let i=Ti(n);for(let[s,r]of Object.entries(i.felled))e-r.at>=t.stumpHours&&delete i.felled[s];return i}function zS(n,e){return!!Ti(n).felled[e]}function RC(n,e,t,i){let s=null,r=i*i;for(let o of n||[]){let a=(o.x-e)**2+(o.y-t)**2;a<=r&&(r=a,s=o)}return s}function PC(n,e,t,i=Zi){if(!e)return{ok:!1,reason:"none"};if(e.protect)return{ok:!1,reason:"orchard"};let s=Ti(n);return s.felled[e.id]?{ok:!1,reason:"down"}:(s.felled[e.id]={at:t,taken:!1,anim:0},{ok:!0,reason:null})}function IC(n,e,t=Zi){let i=Ti(n),s=Math.max(0,Number(e)||0)/t.fallSeconds;if(s)for(let r of Object.values(i.felled))!r.taken&&r.anim<1&&(r.anim=Math.min(1,r.anim+s))}function DC(n,e,t=Zi){let i=e&&Ti(n).felled[e.id];return!i||i.taken||i.anim<1?0:(i.taken=!0,n.supplies=qh(n),n.supplies.wood+=t.wood,t.wood)}function HS(n,e,t,i=Zi){if(!e||e.kind!=="apple"||zS(n,e.id))return!1;let s=Ti(n).fruit[e.id];return Number.isFinite(s)?t-s>=i.fruitHours:!0}function LC(n,e,t,i=Zi){return HS(n,e,t,i)?(Ti(n).fruit[e.id]=t,n.supplies=qh(n),n.supplies.apples+=1,n.inventory=Array.isArray(n.inventory)?n.inventory:[],n.inventory.includes("apple")||n.inventory.push("apple"),!0):!1}function qh(n){let e=n.supplies&&typeof n.supplies=="object"?n.supplies:{};return n.supplies={wood:Math.max(0,Math.floor(Number(e.wood)||0)),apples:Math.max(0,Math.floor(Number(e.apples)||0)),eggs:Math.max(0,Math.floor(Number(e.eggs)||0))},n.supplies}function Pm(n){return qh({supplies:n&&typeof n=="object"?n:null})}var VS=1.25,FC=[{id:"yard_west",level:"world",at:[-6.5,-5.5],amount:10},{id:"yard_east",level:"world",at:[8.5,3.5],amount:10},{id:"square_path",level:"world",at:[1.5,42],amount:8},{id:"store_path",level:"world",at:[16.5,73.5],amount:12},{id:"civic_gap",level:"world",at:[28.2,76.4],amount:10}],GS=20,xl={level:"store",at:[3.2,577.4],radius:.9},WS=new Set(["off","go","ready","paid"]);function Yh(n){let e=n?.maple_crate,t=WS.has(e?.stage)?e.stage:"off";return{maple_crate:{day:Number.isInteger(e?.day)?e.day:-1,stage:t}}}function Zh(n){return Array.isArray(n)?[...new Set(n.filter(e=>typeof e=="string"))]:[]}function XS(n){return(!n.errands||typeof n.errands!="object")&&(n.errands=Yh(n.errands)),n.errands.maple_crate||(n.errands.maple_crate={day:-1,stage:"off"}),n.errands}function qS(n){return new Set(Zh(n?.sparks))}function OC(n,e,t,i,s,r=VS){let o=null,a=1/0;for(let l of n||[]){if(!l||e.has(l.id)||(l.level||"world")!==t)continue;let c=i-l.at[0],u=s-l.at[1],h=c*c+u*u;h<=r*r&&h<a&&(o=l,a=h)}return o}function BC(n,e){if(!e?.id||!(Number(e.amount)>0))return 0;let t=qS(n);return t.has(e.id)?0:(n.sparks=[...t,e.id],Qt(n,e.amount))}function $h(n,e){let t=XS(n),i=t.maple_crate;return i.stage==="paid"&&i.day!==e&&(i={day:e,stage:"off"}),t.maple_crate=i,i}function kC(n,e){let t=$h(n,e);return t.stage==="paid"?!1:(t.stage==="off"&&(t.stage="go",t.day=e),!0)}function zC(n,e,t,i,s){let r=$h(n,s);if(r.stage!=="go"||e!==xl.level)return!1;let o=t-xl.at[0],a=i-xl.at[1];return o*o+a*a>xl.radius**2?!1:(r.stage="ready",!0)}function HC(n,e){let t=$h(n,e);return t.stage!=="ready"?0:(t.stage="paid",t.day=e,Qt(n,GS))}var Im={bounce:{hopMul:1.9,speedMul:1,gravMul:1,glow:!1},swift:{hopMul:1,speedMul:1.75,gravMul:1,glow:!1},glow:{hopMul:1,speedMul:1.08,gravMul:1,glow:!0},float:{hopMul:1.35,speedMul:1.12,gravMul:.38,glow:!0},hex_frog:{hopMul:1,speedMul:1,gravMul:1,glow:!0,hex:"frog"}},YS=8;var ZS=.8;function Dm(n,e){return(n?.kinds||[]).find(t=>t.id===e)||null}function $S(){return{found:[],bag:{}}}function Lm(n){let e=Array.isArray(n?.found)?[...new Set(n.found.filter(i=>typeof i=="string"))]:[],t={};if(n?.bag&&typeof n.bag=="object")for(let[i,s]of Object.entries(n.bag)){let r=Math.floor(Number(s));r>0&&(t[i]=r)}return{found:e,bag:t}}function GC(n){return new Set(n?.potions?.found||[])}function KS(n,e){return n?.potions?.bag?.[e]||0}function WC(n,e,t,i,s,r=.95){return(n||[]).filter(o=>{if(e.has(o.id)||(o.level||"world")!==t)return!1;let a=i-o.at[0],l=s-o.at[1];return a*a+l*l<=r*r})}function XC(n,e){if(!e?.id||!e.potion)return!1;let t=n.potions||(n.potions=$S());return t.found.includes(e.id)?!1:(t.found=[...t.found,e.id],t.bag={...t.bag,[e.potion]:(t.bag[e.potion]||0)+1},!0)}function qC(n,e,t,i){let s=Dm(t,i);if(!s||KS(n,i)<1)return!1;let r={...n.potions.bag||{}};return r[i]-=1,r[i]<=0&&delete r[i],n.potions.bag=r,Im[s.effect]?.hex==="frog"?(e.cast={effect:"frog",left:ZS},e.buff=null,e.glowColor=s.color||"#3cb371"):(e.cast=null,e.buff={id:i,left:s.duration},Kh(e,t)),!0}function jS(n,e,t,i,s=YS){return(n||[]).filter(r=>{if(!r||(r.level||"world")!==i)return!1;let o=e-r.x,a=t-r.y;return o*o+a*a<=s*s})}function Kh(n,e){n.speedMul=1,n.hopMul=1,n.gravMul=1,n.glowColor=null;let t=n.buff;if(!t)return;let i=Dm(e,t.id),s=Im[i?.effect];s&&(n.speedMul=s.speedMul,n.hopMul=s.hopMul,n.gravMul=s.gravMul,s.glow&&(n.glowColor=i.color||"#c9a0ff"))}function YC(n,e){return n.cast?(n.cast.left-=e,n.cast.left>0?!0:(n.cast=null,n.buff||(n.glowColor=null),!1)):!1}function ZC(n,e,t){return n.buff?(n.buff.left-=t,n.buff.left>0?(Kh(n,e),!1):(n.buff=null,Kh(n,e),!0)):!1}var JS="ruckus-yard-web",Um="capy-village-save";var Fm=()=>({v:2,player:{x:0,y:-2.2,h:0},clockHours:9,clockDay:0,clothes:{owned:[],wearing:[]},discovered:["home"],signposts:[],score:0,coins:0,inventory:[],quests:{active:[],done:[],tracked:null,progress:{}},plots:["home"],buildings:[],economy:{lastTick:0},flags:{},bulletin:{day:-1},potions:{found:[],bag:{}},civic:{lessons:{},checkups:{}},sparks:[],errands:{maple_crate:{day:-1,stage:"off"}},character:{name:"",gender:"male"},world:pl(),farm:null,grove:null,supplies:{wood:0,apples:0,eggs:0},critters:{pet:null,eggs:{}}});function Nm(n,e){try{let t=n.getItem(e);return t?JSON.parse(t):null}catch{return null}}function QS(n){let e=Fm();return!n||typeof n!="object"||(e.clothes.owned=Array.isArray(n.owned)?[...n.owned]:[],e.clothes.wearing=Array.isArray(n.wearing)?[...n.wearing]:[]),e}function Om(n){let e=Nm(n,Um);if(e&&e.v===2)return Bm(e);let t=Nm(n,JS),i=QS(t);return e1(n,i),i}function Bm(n){let e=Fm();return e.player={x:Number(n.player?.x)||0,y:Number(n.player?.y)??-2.2,h:Number(n.player?.h)||0},e.clockHours=Number.isFinite(n.clockHours)?n.clockHours%24:9,e.clockDay=Number.isInteger(n.clockDay)&&n.clockDay>=0?n.clockDay:0,e.clothes.owned=Array.isArray(n.clothes?.owned)?[...n.clothes.owned]:[],e.clothes.wearing=Array.isArray(n.clothes?.wearing)?[...n.clothes.wearing]:[],e.discovered=Array.isArray(n.discovered)&&n.discovered.length?[...n.discovered]:["home"],e.signposts=Array.isArray(n.signposts)?[...n.signposts]:[],e.score=Number(n.score)||0,e.coins=Number(n.coins)||0,e.inventory=Array.isArray(n.inventory)?[...n.inventory]:[],e.quests=n.quests&&typeof n.quests=="object"?{active:Array.isArray(n.quests.active)?[...n.quests.active]:[],done:Array.isArray(n.quests.done)?[...n.quests.done]:[],tracked:n.quests.tracked??null,progress:n.quests.progress&&typeof n.quests.progress=="object"?{...n.quests.progress}:{}}:{active:[],done:[],tracked:null,progress:{}},e.plots=Array.isArray(n.plots)&&n.plots.length?[...n.plots]:["home"],e.buildings=Array.isArray(n.buildings)?n.buildings.map(t=>({...t})):[],e.economy=n.economy&&typeof n.economy=="object"?{lastTick:Number(n.economy.lastTick)||0}:{lastTick:0},e.flags=n.flags&&typeof n.flags=="object"?{...n.flags}:{},e.bulletin={day:Number.isInteger(n.bulletin?.day)?n.bulletin.day:-1},e.potions=Lm(n.potions),e.civic=wm(n.civic),e.farm=xm(n.farm),e.grove=Rm(n.grove),e.supplies=Pm(n.supplies),e.critters=Em(n.critters),e.sparks=Zh(n.sparks),e.errands=Yh(n.errands),e.character=Xh(n.character),n.world&&typeof n.world=="object"?e.world={iso:n.world.iso??null,quests:{active:Array.isArray(n.world.quests?.active)?[...n.world.quests.active]:[],done:Array.isArray(n.world.quests?.done)?[...n.world.quests.done]:[],tracked:n.world.quests?.tracked??null,progress:n.world.quests?.progress&&typeof n.world.quests.progress=="object"?{...n.world.quests.progress}:{}}}:e.world=pl(),Yi(e),e}function e1(n,e){n.setItem(Um,JSON.stringify(e))}var jh="CAPPY2:";function sR(n){let e=new TextEncoder().encode(JSON.stringify(n)),t="";for(let i of e)t+=String.fromCharCode(i);return jh+btoa(t)}function rR(n){let e=String(n||"").trim();if(!e.startsWith(jh))return null;try{let t=atob(e.slice(jh.length)),i=Uint8Array.from(t,r=>r.charCodeAt(0)),s=JSON.parse(new TextDecoder().decode(i));return!s||s.v!==2?null:Bm(s)}catch{return null}}function Jh(n){let e=n.clothes?.owned??n.owned;return new Set(e||[])}function ao(n){let e=Jh(n),t=n.clothes?.wearing??n.wearing;return new Set((t||[]).filter(i=>e.has(i)))}function oR(n,e){let t=Jh(n),i=ao(n);t.add(e),i.add(e),n.clothes?(n.clothes.owned=[...t],n.clothes.wearing=[...i]):(n.owned=[...t],n.wearing=[...i])}function aR(n,e){if(!Jh(n).has(e))return;let t=ao(n);t.has(e)?t.delete(e):t.add(e),n.clothes?n.clothes.wearing=[...t]:n.wearing=[...t]}function t1(n){return new Set(n.discovered||[])}function lR(n,e){if(!e?.id)return null;let t=t1(n);return t.has(e.id)?null:(t.add(e.id),n.discovered=[...t],e.name)}function cR(n,e){let t=new Set(n.signposts||[]);return t.has(e)?!1:(t.add(e),n.signposts=[...t],!0)}function uR(n){return new Set(n.signposts||[])}function hR(n,e){let t=e instanceof Set?e:new Set(e||[]);return t.has(n.region)?!0:(n.unlock_with||[]).some(i=>t.has(i))}function fR(n,e,t,i,s){return{...n,player:{x:e.x,y:e.y,h:e.h},clockHours:t??n.clockHours,clockDay:s??n.clockDay??0,score:i??n.score}}function dR(n,e,t,i){return e.x=n.player.x,e.y=n.player.y,e.h=n.player.h,t&&Number.isFinite(n.clockHours)&&(t.hours=n.clockHours%24),t&&Number.isInteger(n.clockDay)&&(t.day=n.clockDay),Number.isFinite(i)?n.score:n.score??0}var n1=new Set(["world","house"]);function mR(n){return typeof n=="string"&&n!=="world"}function i1(n){return{origin:[...n.origin],half:[...n.half],inset:n.inset,cam_back:n.cam_back,cam_up:n.cam_up,fog:n.fog,name:n.name}}function km(n,e){if(!e||typeof e!="object")return n;let t={...n.levels};for(let i of e.levels||[])!i||typeof i.id!="string"||n1.has(i.id)||!Array.isArray(i.origin)||!Array.isArray(i.half)||(t[i.id]=i1(i));return{...n,levels:t,dress:[...n.dress||[],...e.dress||[]],lights:[...n.lights||[],...e.lights||[]]}}function $i(n){let e=n?.quests??n??[];return new Map(e.map(t=>[t.id,t]))}function Sn(n){return(!n.quests||typeof n.quests!="object")&&(n.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.quests.active)||(n.quests.active=[]),Array.isArray(n.quests.done)||(n.quests.done=[]),(!n.quests.progress||typeof n.quests.progress!="object")&&(n.quests.progress={}),Array.isArray(n.inventory)||(n.inventory=[]),n.quests}function lo(n,e){return Sn(n).done.includes(e)}function Js(n,e){return Sn(n).active.includes(e)}function Hm(n,e=[]){return(e||[]).every(t=>lo(n,t))}function _R(n,e){let t=e?.requires;return t?t.quest_done?lo(n,t.quest_done):t.flag?!!n.flags?.[t.flag]:!0:!0}function vR(n,e,t){let i=$i(e),s=Sn(n);return[...i.values()].filter(r=>r.giver!==t||s.done.includes(r.id)||s.active.includes(r.id)?!1:Hm(n,r.requires))}function yR(n,e,t){let i=$i(t).get(e);if(!i)return!1;let s=Sn(n);return s.done.includes(e)||s.active.includes(e)||!Hm(n,i.requires)?!1:(s.active.push(e),s.progress[e]={step:0,counts:{}},s.tracked||(s.tracked=e),!0)}function Qs(n,e,t){let i=$i(t).get(e);if(!i||!Js(n,e))return null;let s=Sn(n).progress[e]||{step:0,counts:{}},r=i.steps[s.step];return r?{quest:i,step:r,index:s.step}:null}function s1(n,e){let t=Sn(n);return!t.tracked||!Js(n,t.tracked)?null:Qs(n,t.tracked,e)}function MR(n,e){let t=Sn(n);return Js(n,e)?(t.tracked=e,!0):!1}function _l(n,e){return(n.inventory||[]).includes(e)}function Vm(n,e){return!e||_l(n,e)?!1:(n.inventory=[...n.inventory||[],e],!0)}function r1(n,e){let t=n.inventory||[],i=t.indexOf(e);return i<0?!1:(t.splice(i,1),n.inventory=t,!0)}function o1(n,e){if(!n||!e||n.type!==e.type)return!1;switch(n.type){case"talk":return n.npc===e.npc;case"visit":return n.region===e.region;case"enter":return n.level===e.level;case"collect":case"find":return n.item===e.item;case"deliver":return n.npc===e.npc&&n.item===e.item;case"ruckus":return(e.score??0)>=(n.score??1);case"soak":return n.zone===e.zone||!n.zone&&n.region===e.region;case"buy_plot":return n.plot===e.plot;case"build":return n.building===e.building;default:return!1}}function a1(n,e,t){let i=$i(t).get(e),s=Sn(n),r=s.progress[e]||{step:0,counts:{}};return r.step+=1,s.progress[e]=r,r.step>=i.steps.length?l1(n,e,t):{kind:"step",questId:e,step:r.step}}function l1(n,e,t){let i=$i(t).get(e),s=Sn(n);s.active=s.active.filter(a=>a!==e),s.done.includes(e)||s.done.push(e),delete s.progress[e],s.tracked===e&&(s.tracked=s.active[0]??null);let r=[{kind:"complete",questId:e,title:i.title,outro:i.outro}],o=i.reward||{};return o.coins&&(Qt(n,o.coins),r.push({kind:"coins",amount:o.coins})),o.flag&&(n.flags={...n.flags||{},[o.flag]:!0},r.push({kind:"flag",flag:o.flag})),o.item&&(Vm(n,o.item),r.push({kind:"item",item:o.item})),r}function zm(n,e,t){let i=$i(e),s=[];for(let r of[...Sn(n).active]){let o=Qs(n,r,e);if(!o||!o1(o.step,t)||(o.step.type==="collect"||o.step.type==="find")&&!_l(n,o.step.item))continue;if(o.step.type==="deliver"){if(!_l(n,o.step.item))continue;r1(n,o.step.item)}let a=a1(n,r,e);Array.isArray(a)?s.push(...a):s.push(a)}return s}function Gm(n,e,t){return Vm(n,t)?[...zm(n,e,{type:"collect",item:t}),...zm(n,e,{type:"find",item:t})]:[]}function c1(n,e,t){if(!e?.item||_l(n,e.item))return!1;if(!e?.quest)return!0;if(lo(n,e.quest)||!Js(n,e.quest))return!1;let i=Qs(n,e.quest,t);if(!i)return!1;let s=i.step;return(s.type==="collect"||s.type==="find")&&s.item===e.item}function bR(n,e,t={}){let i=$i(e),s=Sn(n),r=[];for(let o of s.active){let a=i.get(o),l=Qs(n,o,e);r.push({id:o,title:a?.title??o,tracked:s.tracked===o,stepText:u1(l?.step,t),giver:a?.giver})}for(let o of s.done){let a=i.get(o);r.push({id:o,title:a?.title??o,done:!0,giver:a?.giver})}return r}function SR(n,e,t={}){let i=s1(n,e);if(!i)return null;let s=i.step,r=t.npcs||[],o=t.pickups||[],a=t.regions||[],l=t.soakZones||[],c=t.plots||[],u=t.labels||{},h=(f,d)=>u[f]?.[d]??d;if(s.type==="talk"||s.type==="deliver"){let f=r.find(d=>d.id===s.npc);return f?.spot?{x:f.spot.at[0],y:f.spot.at[1],level:f.spot.level||"world",label:f.name||s.npc}:null}if(s.type==="visit"){let f=a.find(m=>m.id===s.region);if(!f?.rect)return null;let[d,p,x,g]=f.rect;return{x:(d+x)/2,y:(p+g)/2,level:"world",label:f.name||s.region}}if(s.type==="enter"){let f=(t.portals||[]).find(d=>d.level===s.level||d.to===s.level);return f?.at?{x:f.at[0],y:f.at[1],level:f.from||"world",label:h("levels",s.level)}:null}if(s.type==="collect"||s.type==="find"){let f=o.find(d=>d.item===s.item&&c1(n,d,e));return f?{x:f.at[0],y:f.at[1],level:f.level||"world",label:h("items",s.item)}:null}if(s.type==="soak"){let f=l.find(d=>d.id===s.zone)||l.find(d=>d.region===s.region);return f?{x:f.at[0],y:f.at[1],level:f.level||"world",label:f.label||"Hot springs"}:null}if(s.type==="buy_plot"){let f=c.find(d=>d.id===s.plot);return f?.sign?{x:f.sign.at[0],y:f.sign.at[1],level:"world",label:f.label||s.plot}:null}if(s.type==="build"){let d=[...n.plots||[]].reverse().map(y=>c.find(v=>v.id===y)).find(Boolean);if(!d?.rect)return null;let[p,x,g,m]=d.rect;return{x:(p+g)/2,y:(x+m)/2,level:"world",label:`Build: ${d.label||d.id}`}}return null}function u1(n,e={}){if(!n)return"";let t=(i,s)=>e[i]?.[s]??s;switch(n.type){case"talk":return`Talk to ${t("npcs",n.npc)}`;case"visit":return`Visit ${t("regions",n.region)}`;case"enter":return`Enter ${t("levels",n.level)}`;case"collect":return`Collect ${t("items",n.item)}`;case"find":return`Find ${t("items",n.item)}`;case"deliver":return`Deliver ${t("items",n.item)} to ${t("npcs",n.npc)}`;case"ruckus":return`Ruckus score ${n.score}+`;case"soak":return n.zone?`Soak at ${n.zone}`:`Soak in ${t("regions",n.region)}`;case"buy_plot":return`Buy ${t("plots",n.plot)}`;case"build":return`Build ${t("buildings",n.building)}`;default:return n.type}}function Wm(n){return new Set(n.plots||[])}function Xm(n,e){return Wm(n).has(e)}function AR(n,e,t){for(let i of n?.plots||[]){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function ER(n,e){Array.isArray(n.plots)||(n.plots=[]);for(let t of e?.plots||[])t.owned_default&&!n.plots.includes(t.id)&&n.plots.push(t.id)}function CR(n,e,t){let i=(t?.plots||[]).find(s=>s.id===e);return!i||Xm(n,e)||i.price>0&&!js(n,i.price)?!1:(n.plots=[...Wm(n),e],!0)}function RR(n,e,t,i,s,r=1.45){let o=null,a=1/0;for(let l of n?.plots||[]){if(!l.sign||Xm(e,l.id))continue;let c=(i-l.sign.at[0])**2+(s-l.sign.at[1])**2;c<=r**2&&c<a&&(o=l,a=c)}return o}var h1=7200*1e3,f1=.5,d1=60*1e3;function p1(n,e){return(n?.buildings||[]).find(t=>t.id===e)}function m1(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]),n.economy||(n.economy={lastTick:t});let i=Number.isFinite(n.economy.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i);if(s<=0)return n.economy.lastTick=t,0;let o=s>300*1e3?f1:1;s=Math.min(s,h1);let a=s/6e4*o,l=0;for(let c of n.buildings){let u=p1(e,c.type);if(!u?.income)continue;let h=Number(u.income.per_min)||0,f=Number(u.income.cap_min)||0,d=c.bank||0;c.bank=Math.min(d+h*a,h*f),l+=Math.max(0,c.bank-d)}return n.economy.lastTick=t,l}function DR(n,e,t){let i=Number.isFinite(n?.economy?.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i),r=Math.floor(m1(n,e,t));return{credited:r,elapsedMs:s,away:s>=d1&&r>=1}}function LR(n,e){let t=(n.buildings||[]).find(s=>s.uid===e);if(!t||!t.bank)return 0;let i=Math.floor(t.bank);return t.bank=0,Qt(n,i),i}function NR(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.bank||a.bank<1)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function kR(n){let e=String(n||"").replace(/[^a-zA-Z0-9_-]/g,"").slice(0,40);return e.length>=8?e:""}function zR(){return`c${(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):`${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`).slice(0,15)}`}function g1(n,e=0){let t=Number(n);return Number.isFinite(t)?t:e}function co(n,e,t,i=0){return Math.min(t,Math.max(e,g1(n,i)))}var qm=/^[a-z][a-z0-9_]{0,23}$/,x1=qm,_1=16;function Qh(n){return typeof n=="string"&&qm.test(n)?n:"world"}function ef(n){if(!Array.isArray(n))return[];let e=[],t=new Set;for(let i of n){if(e.length>=_1)break;let s=typeof i=="string"?i:"";!x1.test(s)||t.has(s)||(t.add(s),e.push(s))}return e}function Ym(n){return{x:co(n?.x,-1e5,1e5),y:co(n?.y,-1e5,1e5),z:co(n?.z,0,500),h:co(n?.h,-1e4,1e4),walking:!!n?.walking,flop:co(n?.flop,0,60),level:Qh(n?.level),clothes:ef(n?.clothes)}}var v1="CappyCoin";function VR(n){return`${Math.max(0,Math.floor(Number(n)||0))} ${v1}`}var Zm={maxHeight:4.4,hills:[{id:"windy-ridge",x:102,y:122,radius:28,height:4.4},{id:"whisper-hill",x:-108,y:108,radius:26,height:3.6},{id:"orchard-rise",x:124,y:62,radius:20,height:2.6},{id:"berry-hill",x:112,y:-108,radius:30,height:3.5},{id:"marsh-knoll",x:-100,y:-112,radius:24,height:2.3},{id:"mine-hollow",x:-112,y:-48,radius:16,height:-1.8},{id:"spring-slope",x:96,y:92,radius:18,height:2.2},{id:"south-roll",x:20,y:-110,radius:26,height:2},{id:"east-knoll",x:72,y:18,radius:16,height:2.9}]},y1=[["v_bridge",6],["v_station",5],["v_school",7],["v_hospital",7],["v_store",6],["v_boutique",6],["v_firestation",8],["v_police",7],["v_firetruck",4],["v_hall",8],["v_cafe",7],["v_playhouse",7],["v_rowhouse",8],["v_manor",9],["v_mine",8],["v_garden",4],["v_notice",2.5]];function M1(n){return Math.max(0,Math.min(1,n))}function b1(n){let e=M1(n);return e*e*(3-2*e)}function S1(n,e){if(!(e>0))return 0;let t=n/e;if(t>=1)return 0;let i=1-t*t;return i*i}function w1(n,e,t){let i=1/0,s=n||[];for(let r=0;r<s.length-1;r+=1){let o=s[r][0],a=s[r][1],l=s[r+1][0],c=s[r+1][1],u=l-o,h=c-a,f=u*u+h*h||1,d=((e-o)*u+(t-a)*h)/f;d=Math.max(0,Math.min(1,d)),i=Math.min(i,Math.hypot(e-(o+u*d),t-(a+h*d)))}return i}function T1(n,e,t){let[i,s,r,o]=t,a=Math.max(i-n,0,n-r),l=Math.max(s-e,0,e-o);return Math.hypot(a,l)}function A1(n,e,t){let i=Math.max(.001,n.feather??6),s=0;if(n.kind==="rect")s=T1(e,t,n.rect);else if(n.kind==="disc")s=Math.max(0,Math.hypot(e-n.x,t-n.y)-(n.radius||0));else if(n.kind==="path")s=Math.max(0,w1(n.points,e,t)-(n.half||0));else return 0;return s<=0?1:s>=i?0:1-b1(s/i)}function E1(n,e,t){let i=1;for(let s of t||[]){let r=A1(s,n,e);r>0&&(i*=1-r)}return i}function C1(n,e,t=Zm){let i=0;for(let s of t.hills||[])i+=(s.height||0)*S1(Math.hypot(n-s.x,e-s.y),s.radius);return i}function WR(n,e,t,i=Zm){return C1(n,e,i)*E1(n,e,t)}function R1(n){let e=String(n||"");for(let[t,i]of y1)if(e.includes(t))return i;return 0}function XR(n,e,t={}){let i=[],s=n?.regions||[];for(let a of["home","village","civic"]){let l=s.find(c=>c.id===a);l?.rect&&i.push({kind:"rect",rect:l.rect,feather:8})}for(let a of n?.roads||[])a.points?.length&&i.push({kind:"path",points:a.points,half:(a.width||2)/2+.35,feather:5});let r=n?.river;r?.points?.length&&i.push({kind:"path",points:r.points,half:(r.width||6)/2+1.1,feather:8});for(let a of e?.edges||[])a.points?.length&&i.push({kind:"path",points:a.points,half:2.5,feather:4.5});for(let a of n?.dressing||[]){let l=R1(a.file);!l||!a.at||i.push({kind:"disc",x:a.at[0],y:a.at[1],radius:l,feather:5})}let o=n?.spawn?.at;o&&i.push({kind:"disc",x:o[0],y:o[1],radius:3.2,feather:2});for(let a of t.rects||[])a&&i.push({kind:"rect",rect:a,feather:t.feather??6});return i}var P1=new Set(["cottage","hut","cafe","bakery","workshop","market","greenhouse","springs"]),I1={south:0,west:90,north:180,east:270};function D1(n){return`home_${n}`}function YR(n){return typeof n=="string"&&n.startsWith("home_")}function L1(n){return I1[n]??0}function N1(n=0,e="south"){return(((Number(n)||0)+L1(e))%360+360)%360}function U1(n,e){let t=N1(n.h,e?.exterior?.door),i=e?.footprint||[4,3],s=t*Math.PI/180,r=i[1]/2+.95;return{at:[n.at[0]+Math.sin(s)*r,n.at[1]-Math.cos(s)*r],heading:t}}function F1(n){let e=n?.footprint||[4,3];return[Math.max(2.4,e[0]/2+.35),Math.max(2.2,e[1]/2+.45)]}function O1(n,e,t=0){if(!n?.uid||!e?.interior?.pieces?.length||!P1.has(n.type))return null;let i=D1(n.uid),s=F1(e),r=[0,900+t*55],o=U1(n,e),a=r[1]-s[1]+.55,l=r[1]-s[1]+1.35,c=(o.heading+180)%360;return{id:i,level:{id:i,name:e.label||"Home",origin:r,half:s,inset:.55,cam_back:3.2,cam_up:1.55,fog:.018},portals:[{from:"world",level:i,at:o.at,radius:1.05,spawn:[r[0],l],heading:0,prompt:`Step into the ${String(e.label||"house").toLowerCase()}`,verb:"Enter"},{from:i,level:"world",at:[r[0],a],radius:1.15,spawn:o.at,heading:c,prompt:"Back outside",verb:"Leave"}],pieces:(e.interior.pieces||[]).map(u=>({...u,at:[r[0]+(u.at?.[0]||0),r[1]+(u.at?.[1]||0),u.at?.[2]||0],h:u.rot??u.h??0,level:i,file:u.file}))}}function ZR(n,e){let t=e?.buildings||[],i=Object.fromEntries(t.map(o=>[o.id,o])),s=[],r=0;for(let o of n?.buildings||[]){let a=i[o.type],l=O1(o,a,r);l&&(s.push(l),r+=1)}return s}function $R(n){let e=new Set;for(let t of n?.buildings||[])for(let i of t.interior?.pieces||[])i?.file&&e.add(i.file);return[...e]}var vl={pumpkin:{file:"pumpkin.glb",radius:.36,height:.52,origin:"base"},hay:{file:"hay.glb",radius:.42,height:.46,origin:"base"},crate:{file:"crate.glb",radius:.4,height:.56,origin:"center"},pot:{file:"pot.glb",radius:.22,height:.36,origin:"center"}};function QR(n){let e=vl[n.kind];return{x:n.at[0],y:n.at[1],z:n.z,vx:0,vy:0,vz:0,radius:e.radius,height:e.height,origin:e.origin,level:n.level}}function Dn(n){return n.origin==="base"?n.z:n.z-n.height/2}function z1(n,e){let t=e.x-n.x,i=e.y-n.y,s=Math.hypot(t,i)||.001,r=n.radius+e.radius;if(s>=r)return;let o=Dn(n)+n.height,a=Dn(e)+e.height;if(Dn(e)>=o-.08&&Dn(e)<o+.2){e.z+=o-Dn(e),e.vz=Math.max(0,e.vz);return}if(Dn(n)>=a-.08&&Dn(n)<a+.2){n.z+=a-Dn(n),n.vz=Math.max(0,n.vz);return}let l=(r-s)*.5;n.x-=t/s*l,n.y-=i/s*l,e.x+=t/s*l,e.y+=i/s*l}function e2(n,e,t){for(let s of n){s.vz+=-14*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.vx*=.98,s.vy*=.98;let r=0;if(Dn(s)<r){let u=r-Dn(s);s.z+=u,s.vz=0,s.vx*=.9,s.vy*=.9}let o=s.x-e.x,a=s.y-e.y,l=Math.hypot(o,a)||.001,c=s.radius+.42;if(l<c&&e.z<s.height){let u=(e.flop>0?7.5:4.2)*(1-l/c);s.vx+=o/l*u,s.vy+=a/l*u,s.vz+=e.flop>0?2.2:.4}}for(let s=0;s<3;s+=1)for(let r=0;r<n.length;r+=1)for(let o=r+1;o<n.length;o+=1)z1(n[r],n[o]);let i=0;for(let s of n){let r=Math.hypot(s.vx,s.vy,s.vz);r>.45&&(i+=(r-.45)*t)}return i}var H1=1.85,tf=.88,nf=.72,ho=.16,jm=80;function i2(n,e){return{id:n.id,label:n.label||n.id,flies:!!n.flies,hover:!!n.hover,level:n.level||"world",spot:n.spot?n.spot.slice():[0,0],seat:n.seat||[0,0,ho],craft:e,phase:"idle",t:0,from:null,exit:null,sit:0}}function V1(n,e=1.25){let t=Xi(n.h||0),i=-Math.sin(t),s=Math.cos(t),r=Math.cos(t),o=Math.sin(t);return[(n.x||0)+r*e+i*.45,(n.y||0)+o*e+s*.45]}function s2(n,e){return!n||Qm(n)?!1:(n.spot=V1(e),n.craft.reset(e.h||0),!0)}function Jm(n,e,t,i,s=H1){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let l=uo(a),c=(t-l.x)**2+(i-l.y)**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function uo(n){return n.craft.parkPose(n.spot)}function Qm(n){return n?.phase==="mounting"||n?.phase==="flying"||n?.phase==="dismounting"}function G1(n,e){return!(!n||Qm(n)||(e.z||0)>.55)}function eg(n,e){return G1(n,e)?(n.phase="mounting",n.t=0,n.sit=0,n.from={x:e.x,y:e.y,z:e.z||0,h:e.h||0},!0):!1}function tg(n,e){if(n.phase!=="flying")return!1;let t=uo(n);n.phase="dismounting",n.t=0,n.from={x:e.x,y:e.y,z:e.z,h:e.h};let i=Xi(t.h),s=Math.cos(i),r=Math.sin(i);return n.exit={x:t.x+s*1.15,y:t.y+r*1.15,z:Math.max(0,t.z),h:t.h},!0}function $m(n){return n*n*(3-2*n)}function er(n,e,t){return n+(e-n)*t}function Km(n,e){return Math.sin(Math.PI*Math.max(0,Math.min(1,n)))*e}function tr(n,e,t){n.x=e.x,n.y=e.y,n.z=e.z+(t?.[2]??ho),n.h=e.h,n.vx=e.ve,n.vy=e.vn,n.vz=e.vd,n.grounded=e.z<.12,n.flop=0}function r2(n,e,t,i,s,r){if(n.phase==="idle")return n.sit=Math.max(0,n.sit-t*3),n.craft.idle?.(t),n;if(n.phase==="mounting"){n.t+=t;let o=Math.min(1,n.t/tf),a=$m(o),l=uo(n),c=l.z+(n.seat?.[2]??ho);return e.x=er(n.from.x,l.x,a),e.y=er(n.from.y,l.y,a),e.z=er(n.from.z,c,a)+Km(o,.62),e.h=qi(n.from.h,l.h,420*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.min(1,Math.max(0,(o-.28)/.45)),o>=1&&(n.phase="flying",n.t=0,tr(e,l,n.seat)),n}if(n.phase==="dismounting"){n.t+=t;let o=Math.min(1,n.t/nf),a=$m(o);return e.x=er(n.from.x,n.exit.x,a),e.y=er(n.from.y,n.exit.y,a),e.z=er(n.from.z,0,a)+Km(o,.5),e.h=qi(n.from.h,n.exit.h,360*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.max(0,1-o/.45),n.craft.idle?.(t),o>=1&&(n.phase="idle",n.t=0,e.x=n.exit.x,e.y=n.exit.y,e.z=n.exit.z,e.grounded=n.exit.z<=0,e.vz=0,n.sit=0),n}if(n.craft.step(t,i),s&&n.craft.contain(s.eastMin,s.eastMax,s.northMin,s.northMax,s.maxAgl??jm),r&&n.craft.moveTo){let o=uo(n),a=r(o);a&&n.craft.moveTo(a.x-n.spot[0],a.y-n.spot[1],a.z??o.z)}return tr(e,uo(n),n.seat),n.sit=1,n}function o2(n,e,t,i,s,r=!1){let o=Math.max(-1,Math.min(1,Number(e)||0)),a=Math.max(-1,Math.min(1,Number(n)||0)),l=(t?1:0)-(r?1:0);return{forward:o,turn:a,lift:l,lookH:i,heading:s}}function a2(n,e,t,i=4,s=jm){let r=t[0]-i,o=t[1]-i,a=n[0]-e[0],l=n[1]-e[1];return{eastMin:-r-a,eastMax:r-a,northMin:-o-l,northMax:o-l,maxAgl:s}}var W1={maxSpeed:12,reverseSpeed:3,accel:7,brake:16,drag:.7,turnRate:95,cameraSteer:2.4,climbRate:4.5,descendRate:4.5,climbAccel:10,maxBank:25,maxPitch:25,minAlt:.3,maxAlt:80};function Ai(n,e,t){return Math.max(e,Math.min(t,n))}function sf(n,e,t){return n<e?Math.min(e,n+t):Math.max(e,n-t)}function rf(n,e){return 1-Math.exp(-n*e)}function yl(n){let e=((n+180)%360+360)%360-180;return e===-180?180:e}function c2(n={}){let e={...W1,...n},{minAlt:t,maxAlt:i}=e,s={east:0,north:0,agl:t,heading:0,pitch:0,roll:0,speed:0,climb:0,turnRate:0,keyTurning:!1};function r(p=0){s.east=0,s.north=0,s.agl=t,s.heading=yl(p||0),s.pitch=0,s.roll=0,s.speed=0,s.climb=0,s.turnRate=0,s.keyTurning=!1}function o(p){let x=Math.min(1,Math.abs(s.speed)/e.maxSpeed),g=Ai(s.turnRate*.32*(.35+.65*x),-e.maxBank,e.maxBank),m=Ai(s.climb*5,-e.maxPitch,e.maxPitch);s.roll=Ai(s.roll+(g-s.roll)*rf(5,p),-e.maxBank,e.maxBank),s.pitch=Ai(s.pitch+(m-s.pitch)*rf(4,p),-e.maxPitch,e.maxPitch)}function a(){s.agl<t&&(s.agl=t,s.climb<0&&(s.climb=0)),s.agl>i&&(s.agl=i,s.climb>0&&(s.climb=0))}function l(p,x={}){if(!(p>0))return d;let g=Ai(Number(x.forward)||0,-1,1),m=Ai(Number(x.turn)||0,-1,1),y=Ai(Number(x.lift)||0,-1,1);if(g===0)s.speed*=Math.exp(-e.drag*p),Math.abs(s.speed)<.02&&(s.speed=0);else{let R=g>0?g*e.maxSpeed:g*e.reverseSpeed,w=Math.abs(R)<Math.abs(s.speed)||R*s.speed<0;s.speed=sf(s.speed,R,(w?e.brake:e.accel)*p)}let v=-m*e.turnRate;if(m!==0?s.keyTurning=!0:Math.abs(s.turnRate)<3&&(s.keyTurning=!1),m===0&&!s.keyTurning&&Number.isFinite(x.lookH)&&Math.abs(s.speed)>1){let R=yl(x.lookH-s.heading);v=Ai(R*e.cameraSteer,-e.turnRate*.8,e.turnRate*.8)}s.turnRate+=(v-s.turnRate)*rf(8,p),s.heading=yl(s.heading+s.turnRate*p),s.climb=sf(s.climb,y>0?y*e.climbRate:y*e.descendRate,e.climbAccel*p);let _=s.heading*Math.PI/180;return s.east+=-Math.sin(_)*s.speed*p,s.north+=Math.cos(_)*s.speed*p,s.agl+=s.climb*p,a(),o(p),d}function c(p){if(!(p>0))return d;s.speed*=Math.exp(-4*p),Math.abs(s.speed)<.02&&(s.speed=0),s.turnRate*=Math.exp(-8*p),s.keyTurning=!1,s.climb=0;let x=s.heading*Math.PI/180;return s.east+=-Math.sin(x)*s.speed*p,s.north+=Math.cos(x)*s.speed*p,s.agl=sf(s.agl,t,2.5*p),a(),o(p),d}function u(p,x,g,m,y=i){let v=!1;return s.east<p&&(s.east=p,v=!0),s.east>x&&(s.east=x,v=!0),s.north<g&&(s.north=g,v=!0),s.north>m&&(s.north=m,v=!0),v&&(s.speed*=.35),s.agl>y&&(s.agl=y,s.climb>0&&(s.climb=0),v=!0),v}function h(p,x,g=s.agl){let m=Math.hypot(p-s.east,x-s.north)>1e-4;return s.east=p,s.north=x,s.agl=g,a(),m&&(s.speed*=.85),m}function f(){let p=s.heading*Math.PI/180;return{ve:-Math.sin(p)*s.speed,vn:Math.cos(p)*s.speed}}let d={get east(){return s.east},get north(){return s.north},get agl(){return s.agl},get heading(){return s.heading},get pitch(){return s.pitch},get roll(){return s.roll},get speed(){return s.speed},get climb(){return s.climb},get turnRate(){return s.turnRate},get keyTurning(){return s.keyTurning},get ve(){return f().ve},get vn(){return f().vn},get vd(){return-s.climb},config:e,reset:r,step:l,idle:c,contain:u,moveTo:h,parkPose(p){let{ve:x,vn:g}=f();return{x:p[0]+s.east,y:p[1]+s.north,z:s.agl,h:s.heading,pitch:s.pitch,roll:s.roll,ve:x,vn:g,vd:s.climb}},crossedFence(p,x,g,m){return!(p<=s.east&&s.east<=x&&g<=s.north&&s.north<=m)}};return r(),d}var af={gauge:.76,railWidth:.08,railBase:.075,railHead:.145,capWidth:.05,railTop:.18,tieLength:1.15,tieWidth:.145,tieHeight:.08,tieSpacing:.727,sampleStep:1,bridgeFile:"v_bridge.glb",bridgeDeck:.19,bridgeHalfLength:2.3,bridgeHalfWidth:.68,bridgeRamp:2.5,trainLift:.17,platformGap:1.6,endStub:2.2,bufferWidth:1,bufferHeight:.34,bufferDepth:.22};function of(n,e,t,i){return Ks(Math.atan2(-(t-n),i-e))||0}function ng(n){return(n?.points||[]).map(e=>[Number(e[0]),Number(e[1])]).filter((e,t,i)=>t===0||Math.hypot(e[0]-i[t-1][0],e[1]-i[t-1][1])>1e-6)}function d2(n,e=af){return(n||[]).filter(t=>String(t.file||"").endsWith(e.bridgeFile)).map(t=>{let i=t.s||1;return{x:t.at[0],y:t.at[1],h:t.h||0,halfLength:e.bridgeHalfLength*i,halfWidth:e.bridgeHalfWidth*i,deck:e.bridgeDeck*i}})}function nr(n,e,t,i=af){let s=0;for(let r of n||[]){let o=r.h*Math.PI/180,a=e-r.x,l=t-r.y,c=Math.abs(a*Math.cos(o)+l*Math.sin(o));if(Math.abs(a*Math.sin(o)-l*Math.cos(o))>r.halfWidth)continue;let h=0;c<=r.halfLength?h=r.deck:c<r.halfLength+i.bridgeRamp&&(h=r.deck*(1-(c-r.halfLength)/i.bridgeRamp)),s=Math.max(s,h)}return s}function p2(n,e){let t=n.length;if(t<2)return n.map(s=>[s[0],s[1]]);let i=[];for(let s=0;s<t-1;s+=1){let r=n[s+1][0]-n[s][0],o=n[s+1][1]-n[s][1],a=Math.hypot(r,o)||1;i.push([-o/a,r/a])}return n.map((s,r)=>{let o=i[Math.max(0,r-1)],a=i[Math.min(t-2,r)],l=o[0]+a[0],c=o[1]+a[1],u=Math.hypot(l,c);if(u<1e-9)return[s[0]+a[0]*e,s[1]+a[1]*e];l/=u,c/=u;let h=e/Math.max(.25,l*a[0]+c*a[1]);return[s[0]+l*h,s[1]+c*h]})}function X1(n,e,t){let i=0;for(let s=0;s<e.length;s+=1){if(t<=i+e[s]||s===e.length-1){let r=e[s]>0?Math.max(0,Math.min(1,(t-i)/e[s])):0,[o,a]=n[s],[l,c]=n[s+1];return{x:o+(l-o)*r,y:a+(c-a)*r,seg:s}}i+=e[s]}return{x:n[0][0],y:n[0][1],seg:0}}function m2(n,{bridges:e=[],cfg:t=af}={}){let i=[],s=[],r=[],o=[],a=new Set,l=(u,h)=>[u,h].map(f=>`${f[0]},${f[1]}`).sort().join("|"),c=0;(n?.edges||[]).forEach((u,h)=>{let f=ng(u);if(f.length<2)return;let d=[],p=[];for(let w=0;w<f.length-1;w+=1){let[A,I]=f[w],[b,M]=f[w+1];d.push(Math.hypot(b-A,M-I)),p.push(of(A,I,b,M))}let x=[],g=0;for(let w=0;w<f.length-1;w+=1){let[A,I]=f[w],[b,M]=f[w+1],C=Math.max(1,Math.ceil(d[w]/t.sampleStep-1e-9));for(let P=0;P<C;P+=1){let N=P/C,U=A+(b-A)*N,H=I+(M-I)*N;x.push({x:U,y:H,z:nr(e,U,H,t),s:g+d[w]*N,seg:w})}g+=d[w]}let[m,y]=f[f.length-1];x.push({x:m,y,z:nr(e,m,y,t),s:g,seg:f.length-2});let v=new Set;for(let w=0;w<f.length-1;w+=1){let A=l(f[w],f[w+1]);a.has(A)?v.add(w):a.add(A)}let _=Math.max(1,Math.round(g/t.tieSpacing)),R=g/_;for(let w=0;w<_;w+=1){let A=X1(f,d,R*(w+.5));v.has(A.seg)||o.push({x:A.x,y:A.y,z:nr(e,A.x,A.y,t),h:p[A.seg],edge:h,seg:A.seg})}i.push({edge:h,a:u.a||u.from,b:u.b||u.to,route:f,headings:p,points:x,length:g}),c+=g});for(let u of n?.stations||[]){let h=[];if(i.forEach(A=>{A.a===u.id&&h.push({run:A,from:A.route[0],next:A.route[1]}),A.b===u.id&&h.push({run:A,from:A.route[A.route.length-1],next:A.route[A.route.length-2]})}),h.length!==1||!(t.endStub>0))continue;let{run:f,from:d,next:p}=h[0],x=Math.hypot(p[0]-d[0],p[1]-d[1]),g=(d[0]-p[0])/x,m=(d[1]-p[1])/x,y=[d[0]+g*t.endStub,d[1]+m*t.endStub],v=of(d[0],d[1],y[0],y[1]),_=Math.max(1,Math.ceil(t.endStub/t.sampleStep-1e-9)),R=[];for(let A=0;A<=_;A+=1){let I=t.endStub*A/_,b=d[0]+g*I,M=d[1]+m*I;R.push({x:b,y:M,z:nr(e,b,M,t),s:I,seg:0})}s.push({edge:f.edge,station:u.id,route:[d.slice(),y],headings:[v],points:R,length:t.endStub});let w=Math.max(1,Math.round(t.endStub/t.tieSpacing));for(let A=0;A<w;A+=1){let I=t.endStub*(A+.5)/w,b=d[0]+g*I,M=d[1]+m*I;o.push({x:b,y:M,z:nr(e,b,M,t),h:v,edge:f.edge,seg:0,stub:!0})}r.push({x:y[0],y:y[1],z:nr(e,y[0],y[1],t),h:v,station:u.id})}return{runs:i,stubs:s,buffers:r,ties:o,length:c}}function q1(n,e){let t=[];for(let i of n?.edges||[]){let s=ng(i);s.length<2||((i.a||i.from)===e&&t.push([s[0],s[1]]),(i.b||i.to)===e&&t.push([s[s.length-1],s[s.length-2]]))}return t}function ig(n,e){let t=q1(n,e)[0];return t?of(t[0][0],t[0][1],t[1][0],t[1][1]):null}var Y1=1.85,Z1=5,sg=[0,0,.22];function $1(n){return n.level||"world"}function rg(n,e,t,i,s=Y1){let r=null,o=1/0;for(let a of n||[]){if($1(a)!==e)continue;let l=a.at;if(!l||l.length<2)continue;let c=(t-l[0])**2+(i-l[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function ir(n,e){return(n||[]).find(t=>t.id===e)||null}function K1(n){return n.slice().reverse()}function j1(n){let e=new Map,t=(i,s,r)=>{e.has(i)||e.set(i,[]),e.get(i).push({to:s,points:r})};for(let i of n||[]){let s=i.a||i.from,r=i.b||i.to,o=i.points||[];!s||!r||o.length<2||(t(s,r,o.map(a=>a.slice(0,2))),t(r,s,K1(o).map(a=>a.slice(0,2))))}return e}function J1(n,e,t){if(!e||!t)return null;if(e===t)return[e];let i=[e],s=new Map([[e,null]]);for(;i.length;){let r=i.shift();for(let o of n.get(r)||[])if(!s.has(o.to)){if(s.set(o.to,r),o.to===t){let a=[t],l=r;for(;l!=null;)a.push(l),l=s.get(l);return a.reverse()}i.push(o.to)}}return null}function Q1(n,e,t){for(let i of n.get(e)||[])if(i.to===t)return i.points;return null}function ew(n,e){if(!e||e.length<2)return[];let t=[];for(let i=0;i<e.length-1;i+=1){let s=Q1(n,e[i],e[i+1]);if(!s||s.length<2)return[];let r=i===0?0:1;for(let o=r;o<s.length;o+=1)t.push(s[o].slice(0,2))}return t}function tw(n,e,t){let i=J1(n,e,t);if(!i)return null;let s=ew(n,i);return i.length>1&&s.length<2?null:{stations:i,points:s,length:lf(s)}}function lf(n){let e=0;for(let t=1;t<(n||[]).length;t+=1)e+=Math.hypot(n[t][0]-n[t-1][0],n[t][1]-n[t-1][1]);return e}function cf(n,e){if(!n||n.length===0)return{x:0,y:0,h:0,s:0};if(n.length===1)return{x:n[0][0],y:n[0][1],h:0,s:0};let t=lf(n),i=Math.max(0,Math.min(t,e)),s=0;for(let a=1;a<n.length;a+=1){let l=n[a-1][0],c=n[a-1][1],u=n[a][0],h=n[a][1],f=Math.hypot(u-l,h-c);if(s+f>=i-1e-9||a===n.length-1){let d=f>1e-9?Math.min(1,(i-s)/f):0,p=l+(u-l)*d,x=c+(h-c)*d,g=Ks(Math.atan2(-(u-l),h-c));return{x:p,y:x,h:g,s:i}}s+=f}let r=n[n.length-1],o=n[n.length-2];return{x:r[0],y:r[1],h:Ks(Math.atan2(-(r[0]-o[0]),r[1]-o[1])),s:t}}function nw(n,e){if(!n?.length)return null;let t=n.indexOf(e);return t<0||t>=n.length-1?n[n.length-1]:n[t+1]}function uf(n,e,t=.35){if(!e?.at||!n?.length)return 0;let[i,s]=e.at,r=0;for(let o=0;o<n.length;o+=1)if(o>0&&(r+=Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1])),Math.hypot(n[o][0]-i,n[o][1]-s)<=t)return r;return lf(n)}function Ml(n){return{reset(){},step(){},contain(){},parkPose(){let e=n.pose;return{x:e.x,y:e.y,z:e.z,h:e.h,pitch:0,roll:0,ve:e.ve||0,vn:e.vn||0,vd:e.vd||0}}}}function iw(n,e){let t=n?.at||[0,0];return{x:t[0],y:t[1],z:0,h:e??n?.h??0,ve:0,vn:0,vd:0,pitch:0,roll:0}}function y2(n,e={}){let t=(n?.stations||[]).map(l=>({id:l.id,label:l.label||l.id,at:l.at.slice(0,2),region:l.region||l.id,level:l.level||"world",h:l.h??0})),i=j1(n?.edges||[]),s=n?.speed??Z1,r=t[0]||{id:"home",at:[6,-8],label:"Home",region:"home",level:"world",h:-90},o={state:"idle",stationId:r.id,destId:null,pathStations:[r.id],points:[],length:0,arc:0,speed:s,hopOffAt:null,seat:sg.slice(),pose:iw(r,ig(n,r.id)),heightAt:typeof e.heightAt=="function"?e.heightAt:()=>0,t:0,sit:0},a={id:"train",label:"train",flies:!1,hover:!1,level:"world",spot:r.at.slice(),seat:sg.slice(),craft:Ml(o),phase:"idle",t:0,from:null,exit:null,sit:0};return o.ride=a,{stations:t,graph:i,speed:s,train:o,edges:n?.edges||[]}}function sw(n){let e=n?.train?.state;return e==="boarding"||e==="enroute"||e==="alighting"}function M2(n){return n?.train?.pose||{x:0,y:0,z:0,h:0,ve:0,vn:0,vd:0}}function hf(n){n.ride.spot=[n.pose.x,n.pose.y]}function fo(n,e,t=0){let i=Xi(e.h);n.pose.x=e.x,n.pose.y=e.y,n.pose.z=n.heightAt?n.heightAt(e.x,e.y):0,n.pose.h=e.h,n.pose.ve=-Math.sin(i)*t,n.pose.vn=Math.cos(i)*t,n.pose.vd=0,n.arc=e.s,hf(n)}function b2(n,e,t){let i=e instanceof Set?e:new Set(e||[]);return(n?.stations||[]).filter(s=>s.id===t?!1:i.has(s.region)||i.has(s.id))}function S2(n,e,t){let i=n?.train;if(!i||sw(n)||!t||t===i.stationId)return!1;let s=tw(n.graph,i.stationId,t);if(!s||s.points.length<2)return!1;let r=cf(s.points,0);return fo(i,r,0),i.destId=t,i.pathStations=s.stations,i.points=s.points,i.length=s.length,i.arc=0,i.hopOffAt=null,i.state="boarding",i.sit=0,hf(i),i.ride.phase="idle",i.ride.sit=0,eg(i.ride,e)?!0:(i.state="idle",i.destId=null,!1)}function w2(n){let e=n?.train;if(!e||e.state!=="enroute")return!1;let t=rw(n),i=nw(e.pathStations,t)||e.destId;return e.hopOffAt=i,!!i}function rw(n){let e=n.train,t=e.pathStations[0];for(let i of e.pathStations){let s=ir(n.stations,i);s&&uf(e.points,s)<=e.arc+.4&&(t=i)}return t}function ow(n,e,t){let i=n.train,s=ir(n.stations,t)||ir(n.stations,i.destId);if(s){let r=uf(i.points,s);fo(i,cf(i.points,r),0)}i.stationId=s?.id||t||i.destId,i.state="alighting",i.ride.phase="flying",hf(i),tr(e,Ml(i).parkPose(),i.seat),tg(i.ride,e)}function T2(n,e,t){let i=n?.train;if(!i)return n;let s=i.ride;if(i.state==="idle"){i.sit=Math.max(0,i.sit-t*3),s.sit=i.sit;let r=ir(n.stations,i.stationId);return r&&fo(i,{x:r.at[0],y:r.at[1],h:i.pose.h,s:0},0),n}if(i.state==="boarding"){s.t+=t;let r=Math.min(1,s.t/tf),o=r*r*(3-2*r),a=Ml(i).parkPose(),l=a.z+(i.seat?.[2]??ho),c=s.from;return e.x=c.x+(a.x-c.x)*o,e.y=c.y+(a.y-c.y)*o,e.z=c.z+(l-c.z)*o+Math.sin(Math.PI*r)*.62,e.h=qi(c.h,a.h,420*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.min(1,Math.max(0,(r-.28)/.45)),s.sit=i.sit,r>=1&&(i.state="enroute",s.phase="flying",s.t=0,tr(e,a,i.seat),i.sit=1,s.sit=1),n}if(i.state==="enroute"){let r=Math.min(i.length,i.arc+i.speed*t),o=cf(i.points,r);fo(i,o,i.speed),tr(e,Ml(i).parkPose(),i.seat),i.sit=1,s.sit=1;let a=i.hopOffAt||i.destId,l=ir(n.stations,a),c=l?uf(i.points,l):i.length;return(i.arc>=c-.05||i.arc>=i.length-.05)&&ow(n,e,a),n}if(i.state==="alighting"){s.t+=t;let r=Math.min(1,s.t/nf),o=r*r*(3-2*r),a=s.from,l=s.exit;if(e.x=a.x+(l.x-a.x)*o,e.y=a.y+(l.y-a.y)*o,e.z=a.z+(0-a.z)*o+Math.sin(Math.PI*r)*.5,e.h=qi(a.h,l.h,360*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.max(0,1-r/.45),s.sit=i.sit,r>=1){i.state="idle",s.phase="idle",s.t=0,e.x=l.x,e.y=l.y,e.z=l.z,e.grounded=l.z<=0,e.vz=0,i.sit=0,s.sit=0,i.destId=null,i.hopOffAt=null,i.points=[],i.length=0,i.arc=0;let c=ir(n.stations,i.stationId);c&&fo(i,{x:c.at[0],y:c.at[1],h:i.pose.h,s:0},0)}return n}return n}function og(n,e,t,i){let s=null,r=1/0;for(let o of n){if(o.from!==e)continue;let a=(t-o.at[0])**2+(i-o.at[1])**2;a<=o.radius**2&&a<r&&(s=o,r=a)}return s}function aw(n){return n?`${n.from}|${n.level}|${n.at[0]}|${n.at[1]}`:null}function R2(n,e,t,i,s){let r=og(n,e,t,i),o=aw(r);return o?r.auto===!1||o===s?{portal:null,latch:o}:{portal:r,latch:o}:{portal:null,latch:null}}var ag=.95,ff=1.45,lw="notice_board";function P2(n,e,t,i,s=ff){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e||!String(a.file||"").includes(lw))continue;let l=a.at;if(!l||l.length<2)continue;let c=(t-l[0])**2+(i-l[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function cw(n,e,t,i,s=ff){let r=null,o=1/0;for(let a of n||[]){let l=a.spot;if(!l||l.level!==e)continue;let c=(t-l.at[0])**2+(i-l.at[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function uw(n,e,t,i,s=ff){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let l=a.radius??2,c=(t-a.at[0])**2+(i-a.at[1])**2;c<=(l+s)**2&&c<o&&(r=a,o=c)}return r}function I2({portals:n,level:e,x:t,y:i,npcs:s=[],pickups:r=[],soakZones:o=[],plotSign:a=null,income:l=null,noticeBoard:c=null,visibleNpcs:u=s,visiblePickups:h=r,vehicles:f=[],stations:d=[],fishSpot:p=null}){let x=og(n,e,t,i);if(x)return{kind:"portal",verb:x.verb||"Go",portal:x};if(l)return{kind:"income",verb:`Collect ${Math.floor(l.bank)}`,building:l};if(a)return{kind:"plot",verb:`Buy ${a.price}`,plot:a};let g=rg(d,e,t,i);if(g)return{kind:"station",verb:"Board train",station:g};let m=Jm(f,e,t,i);if(m)return{kind:"vehicle",verb:`Ride ${m.label||"broom"}`,vehicle:m};let y=cw(u,e,t,i);if(y)return{kind:"npc",verb:"Talk",npc:y};if(c)return{kind:"bulletin",verb:"Read",board:c};let v=uw(o,e,t,i);if(v)return{kind:"soak",verb:"Soak",zone:v};if(p)return{kind:"fish",verb:"Fish",spot:p};let _=hw(h,e,t,i);return _?{kind:"pickup",verb:"Collect",pickup:_}:null}function hw(n,e,t,i,s=ag){let r=null,o=1/0;for(let a of n||[]){if(a.level!==e)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function D2(n,e,t,i,s=ag){return n.filter(r=>{if(e.has(r.id))return!1;let o=t-r.spot[0],a=i-r.spot[1];return o*o+a*a<=s*s})}function lg(n){let e=n.patch_field,t=[];for(let s of n.clothing)t.push([s.spot[0],s.spot[1],1.6]);for(let s of n.dynamics)t.push([s.at[0],s.at[1],1.5]);for(let s of n.dress)s.blocks&&t.push([s.at[0],s.at[1],s.block||1.6]);let i=[];for(let s of e.cols)for(let r of e.rows){let o=e.origin[0]+s*e.spacing[0],a=e.origin[1]+r*e.spacing[1];t.some(([l,c,u])=>(o-l)**2+(a-c)**2<u*u)||i.push([o,a])}return i}function fw(n,e){let t=(Math.imul(n,73856093)^Math.imul(e,19349663)^1540483477)>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function N2(n,e,t,i,s,r){let o=[],a=Math.round(s*s*r),l=Math.floor((e-i)/s),c=Math.floor((e+i)/s),u=Math.floor((t-i)/s),h=Math.floor((t+i)/s);for(let f=l;f<=c;f+=1)for(let d=u;d<=h;d+=1){let p=(f+.5)*s,x=(d+.5)*s;if(Math.hypot(p-e,x-t)>i)continue;let g=fw(f,d);for(let m=0;m<a;m+=1){let y=(f+g())*s,v=(d+g())*s,_=n(y,v),R=g()<_**1.4,w=g()*Math.PI*2,A=(.75+g()*.6)*(.7+.3*_);R&&o.push([y,v,w,A])}}return o}var df=35*Math.PI/180;function F2(n=9,e=0){return{day:e,hours:n}}function O2(n,e,t=1200){for(n.hours+=e/t*24;n.hours>=24;)n.hours-=24,n.day+=1}function B2(n){let e=(n-6)/12*Math.PI;return[Math.cos(e),-Math.sin(e)*Math.sin(df),Math.sin(e)*Math.cos(df)]}function k2(n){let e=(n-18.6)/12*Math.PI,t=df*.8;return[Math.cos(e),-Math.sin(e)*Math.sin(t),Math.sin(e)*Math.cos(t)]}function z2(n){return(n%8+8)%8/8}var dw=[{at:-1,zenith:"#050814",horizon:"#101a33",ground:"#07090f",sun:"#9fb4ff",key:.7,hemiSky:"#4a5c94",hemiGround:"#1a1622",hemi:.6,fog:"#141c34",exposure:1.4,env:.12,stars:1,night:1,cloudLit:"#5c6a8e",cloudShade:"#1b2238"},{at:-.18,zenith:"#0b1230",horizon:"#27305a",ground:"#0c0d18",sun:"#9fb4ff",key:.6,hemiSky:"#4d5a8a",hemiGround:"#1a1520",hemi:.6,fog:"#212a4a",exposure:1.35,env:.13,stars:.9,night:1,cloudLit:"#5f6b92",cloudShade:"#20263e"},{at:-.06,zenith:"#1c2352",horizon:"#b8607a",ground:"#231a26",sun:"#ff9a6a",key:0,hemiSky:"#7a6aa0",hemiGround:"#2a1e22",hemi:.5,fog:"#6a4a6a",exposure:1.15,env:.15,stars:.35,night:.8,cloudLit:"#ff8f7a",cloudShade:"#4a3a5e"},{at:.04,zenith:"#3a5a9a",horizon:"#ffa060",ground:"#4a3424",sun:"#ffb070",key:1.2,hemiSky:"#9aa0c8",hemiGround:"#4a3424",hemi:.65,fog:"#c89a82",exposure:1.1,env:.22,stars:0,night:.35,cloudLit:"#ffc28a",cloudShade:"#8a6a7a"},{at:.22,zenith:"#4a86d0",horizon:"#f0d0a8",ground:"#5a4a34",sun:"#ffe0b8",key:2.4,hemiSky:"#b8d0f0",hemiGround:"#5a4a34",hemi:.8,fog:"#c8d4e0",exposure:1.05,env:.3,stars:0,night:0,cloudLit:"#fff4e4",cloudShade:"#a4acbe"},{at:1,zenith:"#3a78d8",horizon:"#bcd8f2",ground:"#5a5040",sun:"#fff4e0",key:2.9,hemiSky:"#c8e0ff",hemiGround:"#5a5040",hemi:.9,fog:"#c4d8ec",exposure:1,env:.35,stars:0,night:0,cloudLit:"#ffffff",cloudShade:"#b0bccc"}],pw={zenith:"#1a0a2e",horizon:"#c2603a",fog:"#3a2450",hemiSky:"#8d78c8",cloudLit:"#ff9a6a",cloudShade:"#3b2160"};function cg(n){let e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function ug(n,e,t){if(typeof n=="number")return n+(e-n)*t;let i=typeof n=="string"?cg(n):n,s=typeof e=="string"?cg(e):e;return i.map((r,o)=>r+(s[o]-r)*t)}function H2(n,e=""){let t=dw,i=Math.max(t[0].at,Math.min(t[t.length-1].at,n)),s=0;for(;s<t.length-2&&i>t[s+1].at;)s+=1;let r=t[s],o=t[s+1],a=(i-r.at)/(o.at-r.at),l={};for(let c of Object.keys(r))c!=="at"&&(l[c]=ug(r[c],o[c],a));if(e==="halloween"){let c=.65*l.night+.25;for(let[u,h]of Object.entries(pw))l[u]=ug(l[u],h,c*(u==="fog"?.8:1))}return l}function V2(n,e){if(e!=null)return e;let t=n.getMonth()+1,i=n.getDate();return t===10||t===11&&i<=7?"halloween":""}var pg=["spring","summer","autumn","winter"],mg=["clear","cloudy","rain","storm","snow","fog"],en={daySeconds:1200,dawnHour:6,duskHour:18,weatherChangeSeconds:360,weatherBlendSeconds:30,seasonSource:"calendar",daysPerSeason:7,sharedClockInMultiplayer:!0,seasonWeights:{spring:{clear:40,cloudy:25,rain:25,storm:5,fog:5},summer:{clear:60,cloudy:18,rain:8,storm:12,fog:2},autumn:{clear:35,cloudy:30,rain:20,storm:5,fog:10},winter:{clear:30,cloudy:28,snow:32,fog:10}},weatherLooks:{clear:{cloud:.15,dim:0,rain:0,snow:0,fog:0,lightning:0},cloudy:{cloud:.78,dim:.3,rain:0,snow:0,fog:0,lightning:0},rain:{cloud:.9,dim:.45,rain:1,snow:0,fog:.15,lightning:0},storm:{cloud:1,dim:.65,rain:1,snow:0,fog:.2,lightning:1},snow:{cloud:.82,dim:.25,rain:0,snow:1,fog:.2,lightning:0},fog:{cloud:.45,dim:.2,rain:0,snow:0,fog:1,lightning:0}}},gw=["cloud","dim","rain","snow","fog","lightning"];function Qn(n){return Math.max(0,Math.min(1,Number(n)||0))}function mo(n){return n&&n!==en?{...en,...n}:en}function gg(n){return(Number(n)%24+24)%24/24}function xw(n,e=en){let{dawnHour:t,duskHour:i}=mo(e),s=gg(n)*24;return s<t||s>=i}function _w(n){let e=n.getMonth();return e>=2&&e<=4?"spring":e>=5&&e<=7?"summer":e>=8&&e<=10?"autumn":"winter"}function vw(n,e=en.daysPerSeason){let t=Math.max(1,Math.floor(e)||1),i=Math.floor((Number(n)||0)/t);return pg[(i%4+4)%4]}function yw({date:n=new Date,day:e=0,config:t=en}={}){let i=mo(t);return i.seasonSource==="days"?vw(e,i.daysPerSeason):_w(n)}function X2(n,e=en.daySeconds){let t=n/1e3/e,i=Math.floor(t);return{day:i,hours:(t-i)*24}}function hg(n){let e=(Math.floor(n)^2654435769)>>>0;return e=Math.imul(e^e>>>16,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function fg(n,e,t=en.seasonWeights){let i=t[n]||t.spring||{},s=mg.map(a=>[a,Math.max(0,Number(i[a])||0)]).filter(([,a])=>a>0);if(!s.length)return"clear";let r=s.reduce((a,[,l])=>a+l,0),o=Qn(e)*r;for(let[a,l]of s){if(o<l)return a;o-=l}return s[s.length-1][0]}function pf(n,e,t=en){let i=mo(t),s=n/1e3,r=Math.floor(s/i.weatherChangeSeconds),o=s-r*i.weatherChangeSeconds,a=fg(e,hg(r),i.seasonWeights),l=fg(e,hg(r-1),i.seasonWeights),c=i.weatherBlendSeconds>0?Qn(o/i.weatherBlendSeconds):1;return{weather:a,previous:l,blend:c,slot:r}}function mf(n,e=n,t=1,i=en){let s=mo(i).weatherLooks,r=s[n]||s.clear,o=s[e]||r,a=Qn(t),l={};for(let c of gw)l[c]=(o[c]??0)+((r[c]??0)-(o[c]??0))*a;return l}function q2({hours:n=12,day:e=0,nowMs:t=Date.now(),date:i,config:s=en,force:r={}}={}){let o=mo(s),a=pg.includes(r.season)?r.season:yw({date:i||new Date(t),day:e,config:o}),l,c,u;return mg.includes(r.weather)?(l=r.weather,c=r.weather,u=1):{weather:l,previous:c,blend:u}=pf(t,a,o),{hours:n,day:e,timeOfDay:gg(n),isNight:xw(n,o),season:a,weather:l,previousWeather:c,blend:u,look:mf(l,c,u,o)}}function po(n,e,t){return n.map((i,s)=>i+(e[s]-i)*t)}function dg(n,e=1){let t=(.2126*n[0]+.7152*n[1]+.0722*n[2])*e;return[t,t,t]}var Mw=[.79,.81,.84],bw=[.16,.19,.25];function Y2(n,e){let t=Qn(e?.dim),i=Qn(e?.fog),s={...n};for(let r of["zenith","horizon","ground","sun","cloudLit","cloudShade","hemiSky"])Array.isArray(n[r])&&(s[r]=po(n[r],dg(n[r],.9),t*.75));if(Array.isArray(n.fog)){let r=po(Mw,bw,Qn(n.night));s.fog=po(po(n.fog,dg(n.fog,.9),t*.75),r,i*.8),Array.isArray(s.horizon)&&(s.horizon=po(s.horizon,r,i*.6))}return s.key=n.key*(1-.7*t)*(1-.35*i),s.hemi=n.hemi*(1-.35*t),s.env=n.env*(1-.35*t),s.exposure=n.exposure*(1-.15*t),s}function Z2(n){return 1+Qn(n?.fog)*4+Qn(n?.rain)*.6+Qn(n?.snow)*1.2}var Ki={buildupSeconds:150,meltSeconds:{winter:900,spring:240,summer:90,autumn:300},rainMeltFactor:3,sunMeltFactor:1.6,nightMeltFactor:.6,maxCover:.95,historySeconds:1800,historyStepSeconds:15,color:"#d9e1ea",slushColor:"#8e969d",pathSlush:.45,roofSlope:[.38,.72],bloomDamp:.8,bloomThresholdLift:.5};function ji(n){return Math.max(0,Math.min(1,Number(n)||0))}function bl(n){return n&&n!==Ki?{...Ki,...n}:Ki}function Sw(n,e=Ki){let t=bl(e);return ji(t.maxCover)*ji(n?.snow)}function ww({look:n={},season:e="winter",isNight:t=!1}={},i=Ki){let s=bl(i),r=Number(s.meltSeconds?.[e])||Number(s.meltSeconds?.winter)||900,o=1/Math.max(1,r);return o*=1+(s.rainMeltFactor-1)*ji(n.rain),t?o*=s.nightMeltFactor:o*=1+(s.sunMeltFactor-1)*(1-ji(n.cloud)),o}function Tw(n,e,t={},i=Ki){let s=bl(i),r=ji(n),o=Math.max(0,Number(e)||0),a=t.look||{},l=Sw(a,s);if(r<l){let c=ji(s.maxCover)/Math.max(1,s.buildupSeconds)*ji(a.snow);return Math.min(l,r+c*o)}return r>l?Math.max(l,r-ww(t,s)*o):r}function j2(n,e,{config:t=Ki,skyConfig:i=en,isNight:s=!1}={}){let r=bl(t),o=Math.max(1,r.historyStepSeconds),a=0;for(let l=n-r.historySeconds*1e3;l<n;l+=o*1e3){let{weather:c,previous:u,blend:h}=pf(l,e,i);a=Tw(a,o,{look:mf(c,u,h,i),season:e,isNight:s},r)}return a}function Q2(n,e,t){for(let i of n){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function xg(n){let e=n.bridge_gap??3,t=[],i=n.points;for(let s=0;s<i.length-1;s+=1){let r=[[0,1]],[o,a]=i[s],[l,c]=i[s+1],u=Math.hypot(l-o,c-a);for(let[h,f]of n.bridges||[]){let d=((h-o)*(l-o)+(f-a)*(c-a))/(u*u),p=o+(l-o)*d,x=a+(c-a)*d;if(d<-.05||d>1.05||Math.hypot(h-p,f-x)>n.width)continue;let g=e/u;r=r.flatMap(([m,y])=>{let v=[];return d-g>m&&v.push([m,Math.min(y,d-g)]),d+g<y&&v.push([Math.max(m,d+g),y]),v})}for(let[h,f]of r)t.push([o+(l-o)*h,a+(c-a)*h,o+(l-o)*f,a+(c-a)*f])}return t}function go(n,e,t){let[i,s,r,o]=n,a=r-i,l=o-s,c=a*a+l*l||1e-9,u=Math.max(0,Math.min(1,((e-i)*a+(t-s)*l)/c));return[i+a*u,s+l*u]}function eP(n,e,t,i=.42){let s=t+i;for(let r of e){let[o,a]=go(r,n.x,n.y),l=n.x-o,c=n.y-a,u=Math.hypot(l,c);if(u>=s)continue;let h,f;if(u>1e-6)h=l/u,f=c/u;else{let p=r[2]-r[0],x=r[3]-r[1],g=Math.hypot(p,x)||1;h=-x/g,f=p/g}n.x=o+h*s,n.y=a+f*s;let d=n.vx*h+n.vy*f;d<0&&(n.vx-=d*h,n.vy-=d*f)}}function Sl(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function gf(n,e,t,i=0){let s=n/t,r=e/t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a;l=l*l*(3-2*l),c=c*c*(3-2*c);let u=Sl(o,a,i),h=Sl(o+1,a,i),f=Sl(o,a+1,i),d=Sl(o+1,a+1,i);return u+(h-u)*l+(f-u)*c+(u-h-f+d)*l*c}function _g(n){let e=[];for(let t=0;t<n.length-1;t+=1)e.push([...n[t],...n[t+1]]);return e}function vg(n,e,t){let i=1/0;for(let s of n){let[r,o]=go(s,e,t);i=Math.min(i,Math.hypot(e-r,t-o))}return i}var xo=n=>Math.max(0,Math.min(1,n));function Aw(n,e,t,i=yg(n)){let s=(gf(e,t,3.1,1)-.5)*1.6+(gf(e,t,.9,2)-.5)*.6,r=0;for(let c of i.roads){let u=vg(c.segments,e,t);r=Math.max(r,xo((c.width/2+.4+s*.5-u)/.9))}for(let[c,u,h,f]of i.fields){let d=Math.min(e-c,h-e,t-u,f-t);r=Math.max(r,xo((d+s)/1.5))}let o=0;if(i.river){let c=vg(i.river,e,t);o=xo((n.river.width/2+2.6+s-c)/1.4)}let a=0;if(n.forest){let[c,u,h,f]=n.forest.rect,d=Math.min(e-c,h-e,t-u,f-t);if(a=xo((d+s*2.5)/5),n.forest.clearing){let[p,x,g]=n.forest.clearing,m=xo((g-Math.hypot(e-p,t-x)+s*2)/4);a*=1-m,r=Math.max(r,m*.35*gf(e,t,1.7,3))}}o*=1-r,a*=(1-r)*(1-o);let l=Math.max(0,1-r-o-a);return{dirt:r,sand:o,forest:a,grass:l}}function yg(n,e=[]){return{roads:(n.roads||[]).map(t=>({width:t.width,segments:_g(t.points)})),river:n.river?_g(n.river.points):null,fields:e}}function iP(n,e,t=[]){let[i,s,r,o]=n.bounds,a=yg(n,t),l=new Uint8Array(e*e*4);for(let c=0;c<e;c+=1){let u=o-(c+.5)/e*(o-s);for(let h=0;h<e;h+=1){let f=i+(h+.5)/e*(r-i),d=Aw(n,f,u,a),p=(c*e+h)*4;l[p]=Math.round(d.dirt*255),l[p+1]=Math.round(d.sand*255),l[p+2]=Math.round(d.forest*255),l[p+3]=Math.round(d.grass*255)}}return l}function sP(n,e,t,i,s){let[r,o,a,l]=t,c=Math.floor((i-r)/(a-r)*e),u=Math.floor((l-s)/(l-o)*e);return c<0||u<0||c>=e||u>=e?0:n[(u*e+c)*4+3]/255}var Ew=new Set(["park","patch"]);function Mg(n,e){let[t,i]=e.meadow_offset||[0,0],s=(h,f)=>h==="patch"?[f[0]+t,f[1]+i,...f.slice(2)]:[...f],r=h=>Ew.has(h)?"world":h,o=h=>(h||[]).map(f=>({...f,at:s(f.level,f.at),level:r(f.level)})),a=(n.clothing||[]).map(h=>{let f=h.place==="house"?"house":"world",d=h.place==="patch"?[h.spot[0]+t,h.spot[1]+i]:[...h.spot];return{...h,spot:d,level:f}}),l=n.patch_field?{...n.patch_field,origin:[n.patch_field.origin[0]+t,n.patch_field.origin[1]+i]}:null,c=n.levels?.patch,u=c?[c.origin[0]+t-c.half[0],c.origin[1]+i-c.half[1],c.origin[0]+t+c.half[0],c.origin[1]+i+c.half[1]]:null;return{...n,levels:{world:e.level,house:n.levels.house},portals:e.portals.map(h=>({...h})),dress:o(n.dress),dynamics:o(n.dynamics),web_toys:o(n.web_toys),web_park:(n.web_park||[]).map(h=>({...h,level:"world"})),clothing:a,patch_field:l,field_rect:u,lights:(n.lights||[]).map(h=>({...h,level:r(h.level||"house")}))}}var Cw=.5;function lP(n,e=1){return Math.round(n/e)*e}function Rw(n,e){let[t,i]=n;return(Math.round(e/90)%4+4)%4%2===0?[t,i]:[i,t]}function bg(n,e,t=0){let[i,s]=Rw(e,t);return[n[0]-i/2,n[1]-s/2,n[0]+i/2,n[1]+s/2]}function Pw(n,e){return n[0]<e[2]&&n[2]>e[0]&&n[1]<e[3]&&n[3]>e[1]}function Sg(n,e){return n[0]>=e[0]&&n[0]<=e[2]&&n[1]>=e[1]&&n[1]<=e[3]}function Iw(n){return Math.floor(Math.max(0,Number(n)||0)*Cw)}function Dw(n,e,t,i,s=[],r=null){if(!n||!e)return!1;let o=bg(t,n.footprint,i);if(!Sg([o[0],o[1]],e.rect)||!Sg([o[2],o[3]],e.rect))return!1;let a=s.filter(l=>l.type===n.id&&l.uid!==r).length;if(n.limit&&a>=n.limit)return!1;for(let l of s){if(r&&l.uid===r)continue;let c=l.def;if(c&&Pw(o,bg(l.at,c.footprint,l.h||0)))return!1}return!0}function wg(n,e,t=0,i=.9){let s=t*Math.PI/180,r=e[1]/2+i;return{at:[n[0]+Math.sin(s)*r,n[1]-Math.cos(s)*r],h:((t+180)%360+360)%360}}function cP(n,e){return(n.buildings||[]).filter(t=>t.type===e).length}function uP(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.at||a.at.length<2)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function hP(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]);let i=n.buildings.findIndex(a=>a.uid===e);if(i<0)return null;let s=n.buildings[i],r=(t?.buildings||[]).find(a=>a.id===s.type),o=Iw(r?.price);return s.bank=0,n.buildings.splice(i,1),Qt(n,o),{uid:e,type:s.type,refund:o,label:r?.label||s.type,def:r||null}}function fP(n,e,t,i,s,r,o=[]){if(!r||!t)return!1;let a=(n.buildings||[]).find(l=>l.uid===e);return!a||!Dw(r,t,i,s,o,e)?!1:(a.plot=t.id,a.at=[i[0],i[1]],a.h=s,!0)}function Tg(n,e){if(n!=="halloween")return!1;let t=(e%24+24)%24;return t>=17&&t<22}var Lw={yuzu:{at:[-7,-3],h:110,state:"idle"},momo:{at:[5,1],h:200,state:"idle"},pip:{at:[10,-7],h:280,state:"wander"},juniper:{at:[-11,5],h:40,state:"idle"},hana:{at:[-2,9],h:180,state:"idle"}};function Ag(n,e=()=>!0){let t=Lw[n];return!t||!e({id:n})?null:{at:t.at,h:t.h,state:t.state,wandering:t.state==="wander",party:!0}}var Nw={start:21,end:6};function xP(n,e,t){let i=t?.buildings||[];for(let s of e?.buildings||[]){let r=i.find(o=>o.id===s.type);if(r?.effects?.villager===n.id)return{...wg(s.at,r.footprint,s.h||0),building:s.uid}}return null}function _P(n,e){if(!e)return n;let t={at:e.at,h:e.h,state:"sleep"},i=n.schedule?.length?n.schedule.map(s=>s.state==="sleep"?{...s,...t}:s):[{...Nw,...t}];return{...n,home:e,schedule:i}}function Uw(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function xf(n,e){for(let t of n.schedule||[])if(Uw(e,t.start,t.end))return t;return null}function Fw(n,e,t=0){let i=xf(n,e),s=i?.at?{at:i.at,h:i.h??n.spot.h,state:i.state||"idle"}:{at:n.spot.at,h:n.spot.h||0,state:"idle"};if(s.state==="sleep")return{...s,wandering:!1};if(s.state==="wander"){let r=Math.sin((e+t)*1.7)*.55,o=Math.cos((e+t*.3)*2.1)*.55;return{at:[s.at[0]+r,s.at[1]+o],h:s.h,state:"wander",wandering:!0}}return{...s,wandering:!1}}function Eg(n,e,t,i,s=()=>!0){if(Tg(i,e)){let r=Ag(n.id,s);if(r)return r}return Fw(n,e,t)}function Ow(n,e,t,i){let s=n-t,r=e-i;return s*s+r*r}function _o(n,e,t,i){return Math.hypot(n-t,e-i)}function Rg(n){let e=[],t=[],i=(o,a)=>`${Math.round(o*10)}:${Math.round(a*10)}`,s=new Map;function r(o,a){let l=i(o,a);if(s.has(l))return s.get(l);let c=e.length;return e.push({x:o,y:a}),s.set(l,c),c}for(let o of n?.roads||[]){let a=o.points||[];for(let l=0;l<a.length-1;l++){let[c,u]=a[l],[h,f]=a[l+1],d=r(c,u),p=r(h,f),x=_o(c,u,h,f);t.push({a:d,b:p,w:x}),t.push({a:p,b:d,w:x})}}return{nodes:e,edges:t}}function Cg(n,e,t){let i=-1,s=1/0;for(let r=0;r<n.nodes.length;r++){let o=n.nodes[r],a=Ow(e,t,o.x,o.y);a<s&&(s=a,i=r)}return s<=2.5*2.5?i:-1}function Bw(n,e,t){if(e<0||t<0||e===t)return e===t?[e]:[];let i=new Map;for(let l of n.edges)i.has(l.a)||i.set(l.a,[]),i.get(l.a).push(l);let s=new Set([e]),r=new Map,o=new Map([[e,0]]),a=new Map([[e,_o(n.nodes[e].x,n.nodes[e].y,n.nodes[t].x,n.nodes[t].y)]]);for(;s.size;){let l=-1,c=1/0;for(let u of s){let h=a.get(u)??1/0;h<c&&(c=h,l=u)}if(l===t){let u=[l];for(;r.has(u[0]);)u.unshift(r.get(u[0]));return u}s.delete(l);for(let u of i.get(l)||[]){let h=(o.get(l)??1/0)+u.w;if(h>=(o.get(u.b)??1/0))continue;r.set(u.b,l),o.set(u.b,h);let f=_o(n.nodes[u.b].x,n.nodes[u.b].y,n.nodes[t].x,n.nodes[t].y);a.set(u.b,h+f),s.add(u.b)}}return[]}function kw(n,e,t,i,s){let r=Cg(n,e,t),o=Cg(n,i,s);if(r<0||o<0)return[[i,s]];let a=Bw(n,r,o);if(!a.length)return[[i,s]];let l=a.map(u=>[n.nodes[u].x,n.nodes[u].y]),c=l[l.length-1];return _o(c[0],c[1],i,s)>.35&&l.push([i,s]),l}var zw=2.2;function Pg(n,e,t,i,s=zw){let r=e[0],o=e[1],a=n.x,l=n.y;(!n.path||n.targetKey!==`${r},${o}`)&&(n.path=kw(t,a,l,r,o),n.index=0,n.targetKey=`${r},${o}`);let c=n.path,u=!1;for(;n.index<c.length&&i>0;){let[f,d]=c[n.index],p=_o(a,l,f,d),x=s*i;if(p<=x||p<1e-4){a=f,l=d,n.index+=1,i-=p/s,u=!0;continue}let g=x/p;a+=(f-a)*g,l+=(d-l)*g,i=0,u=!0}n.x=a,n.y=l;let h=u&&n.index<c.length?Math.atan2(c[n.index][0]-a,c[n.index][1]-l)*180/Math.PI:n.h??0;return n.h=h,{x:a,y:l,h,moving:u}}var wl=null,Ig="";function Hw(n){let e=String(n?.roads?.length??0);return wl&&Ig===e||(Ig=e,wl=Rg(n)),wl}var Dg=new Map;function SP(n,e,t,i,s=()=>!0,r={}){let o=Eg(n,e,t,i,s);if(o.wandering||o.state==="sleep"||o.party)return o;let a=r.overworld?Hw(r.overworld):null;if(!a?.nodes?.length||!r.dt)return{...o,at:o.at};let l=Dg.get(n.id);if(!l){let u=n.spot?.at||o.at;l={x:u[0],y:u[1],h:o.h??0},Dg.set(n.id,l)}let c=Pg(l,o.at,a,r.dt);return{...o,at:[c.x,c.y],h:c.h,moving:c.moving}}var EP=4.5,Vw=3;function Gw(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function _f(n){return typeof n=="string"?{text:n}:n}function Lg(n,e){return!!(e&&n?.flags?.[e])}function Ng(n,e){return!!(e&&lo(n,e))}function Ww(n,e,t){let i=_f(n);if(!i||!i.text||i.flag&&!Lg(e,i.flag)||i.quest_done&&!Ng(e,i.quest_done))return!1;if(i.hours){let[s,r]=i.hours;if(!Gw(t,s,r))return!1}return!0}function Xw(n){let e=_f(n);return e.flag?3:e.quest_done?2:e.hours?1:0}function qw(n,e){return!(!n||n.flag&&!Lg(e,n.flag)||n.quest_done&&!Ng(e,n.quest_done))}function CP(n,e){let t=[];for(let i of n?.topics||[])if(qw(i,e)&&(t.push(i),t.length>=Vw))break;return t}function vo(n,e,t){let i=null,s=-1;for(let r of n||[]){let o=_f(r);if(!Ww(o,e,t))continue;let a=Xw(o);a>s&&(i=o,s=a)}return i?.text||null}function RP(n,e,t,i=!1){return!n||xf(n,t)?.state==="sleep"?null:i&&n.party?.length?vo(n.party,e,t):vo(n.barks,e,t)}function PP(n,e,t,i=!1){return n?i&&n.party?.length?vo(n.party,e,t)||"...":vo(n.barks,e,t)||vo(n.idle,e,t)||"...":"..."}function Tl(n){return n?.bulletin??[]}function Yw(n){let e=Math.sin(n*12.9898+78.233)*43758.5453;return e-Math.floor(e)}function Ug(n,e){let t=Tl(n).length;return t?Math.floor(Yw(e)*t)%t:-1}function Zw(n,e){let t=Ug(n,e);if(t<0)return null;let i=Tl(n)[t],{pickups:s,...r}=i;return{...r,bulletin:!0}}function $w(n,e){let t=Ug(n,e);if(t<0)return[];let i=Tl(n)[t];return(i.pickups||[]).map(s=>({...s,quest:i.id}))}function DP(n,e,t){if((!n.bulletin||typeof n.bulletin!="object")&&(n.bulletin={day:-1}),n.bulletin.day===t)return{changed:!1,expired:[]};let i=new Set(Tl(e).map(o=>o.id)),s=n.quests||{active:[],done:[],tracked:null,progress:{}},r=(s.active||[]).filter(o=>i.has(o));s.active=(s.active||[]).filter(o=>!i.has(o)),s.done=(s.done||[]).filter(o=>!i.has(o));for(let o of i)delete s.progress?.[o];return i.has(s.tracked)&&(s.tracked=s.active[0]??null),n.quests=s,n.bulletin={day:t},{changed:!0,expired:r}}function LP(n,e,t,i){let s=Zw(t,i);return{quests:{...n,quests:[...n?.quests||[],...s?[s]:[]]},pickups:{...e,pickups:[...e?.pickups||[],...$w(t,i)]}}}var Fg=new Set(["on_talk","on_collect","on_place"]),Kw=new Set(["give_coins","say","start_quest","spawn_prop"]);function jw(n,e){if(!n||n.type!==e?.type)return!1;let t=n.data&&typeof n.data=="object"?n.data:{};if(n.type==="on_talk"){let i=typeof t.npc=="string"?t.npc:"";return!(i&&i!==e.npc)}return n.type==="on_collect"?typeof t.item=="string"&&t.item===e.item:n.type==="on_place"?typeof t.building=="string"&&t.building===e.building:!1}function Jw(n,e){let t=n.data&&typeof n.data=="object"?n.data:{};return n.type==="give_coins"?(e.addCoins?.(t.amount),!0):n.type==="say"?(e.say?.(t.text),!0):n.type==="start_quest"?(e.offerQuest?.(t.quest),!0):n.type==="spawn_prop"?(e.spawnProp?.(t.file,t.at,t.h),!0):!1}function Qw(n){let e=new Map;for(let t of Array.isArray(n)?n:[])!t||typeof t.from!="string"||typeof t.to!="string"||(e.has(t.from)||e.set(t.from,[]),e.get(t.from).push(t.to));return e}function eT(n,e,t){let i=new Map;for(let r of Array.isArray(n?.nodes)?n.nodes:[])r&&typeof r.id=="string"&&i.set(r.id,r);let s=Qw(n?.wires);for(let r of i.values()){if(!Fg.has(r.type)||!jw(r,e))continue;let o=[...s.get(r.id)||[]],a=new Set;for(;o.length;){let l=o.shift();if(a.has(l))continue;a.add(l);let c=i.get(l);if(c&&!Fg.has(c.type)&&Kw.has(c.type)&&Jw(c,t))for(let u of s.get(l)||[])o.push(u)}}}function UP(n,e,t={}){if(!(!n||!e||typeof e.type!="string"))for(let i of Array.isArray(n.blueprints)?n.blueprints:[])i&&typeof i=="object"&&eT(i,e,t)}var Al=["fish_minnow","fish_silver","fish_carp"],tT={fish_minnow:"river minnow",fish_silver:"silver fish",fish_carp:"lazy carp"},vf=1.45,nT=new Set(Al);function iT(n,e,t){let i=1/0;for(let s of n||[]){let[r,o]=go(s,e,t),a=Math.hypot(e-r,t-o);a<i&&(i=a)}return i}function sT(n,e,t,i,s=vf){if(!n?.length||!(e>0))return!1;let r=iT(n,t,i),o=e;return r>=o-.35&&r<=o+s+.65}function rT(n,e,t,i,s=vf){for(let r of n||[]){if((r.level||"world")!==e)continue;let o=r.radius??2;if(Math.hypot(t-r.at[0],i-r.at[1])<=o+s+1.25)return r}return null}function kP({segments:n=[],halfWidth:e=0,soakZones:t=[],level:i,x:s,y:r,reach:o=vf}){if(i!=="world")return null;let a=rT(t,i,s,r,o);return a?{id:a.id||"soak",kind:"soak",at:a.at}:sT(n,e,s,r,o)?{id:"river",kind:"river",at:[s,r]}:null}function oT(n,e){for(let t of n?.quests?.active||[]){if(!Js(n,t))continue;let i=Qs(n,t,e);if(i&&i.step.type==="collect"&&nT.has(i.step.item))return i.step.item}return null}function aT(n,e,t=Math.random){let i=oT(n,e);if(i&&t()<.7)return i;let s=Math.floor(t()*Al.length)%Al.length;return Al[s]}function zP(n,e,t=Math.random){let i=aT(n,e,t),s=tT[i]||i,r=(n.inventory||[]).includes(i),o=Gm(n,e,i),a=(n.inventory||[]).includes(i);return{item:i,label:s,fresh:!r&&a,effects:o}}var lT=["mochi.glb","floor.glb","wall.glb","dirt.glb"];function cT(n,e,t=[],i=null){let s=km(Mg(n,e),i),r=Bg(s,e);for(let c of t)r.add(c);let o={segments:xg(e.river),halfWidth:e.river.width/2},a=e.spawn||{at:[0,-2.2],h:0},l=lg(s);return{world:s,overworld:e,files:r,river:o,spawn:a,pumpkinSpots:l}}function Bg(n,e){let t=new Set(lT);for(let i of[...n.dress,...n.web_park,...n.clothing])t.add(i.file);for(let i of e.dressing||[])t.add(i.file);for(let i of n.dynamics)t.add(vl[i.kind].file);for(let i of n.web_toys)t.add(vl[i.kind].file);return t}function Og(n,e,t,i){if(!Array.isArray(i)||i.length<3||!t)return;let[s,r,o]=i;n.push({level:e,x:t[0],y:t[1],z:t[2]||0,hx:s,hy:r,height:o})}function uT(n,e){let t=[];for(let i of n){let s=i.level||e;Og(t,s,i.at,i.solid);for(let r of i.solids||[])Og(t,r.level||s,r.at||i.at,r.solid)}return t}function yf(){let n=1,e=new Set,t=new Map;function i(s){return t.has(s)||t.set(s,new Map),t.get(s)}return{createEntity(){let s=n++;return e.add(s),s},destroyEntity(s){if(e.has(s)){e.delete(s);for(let r of t.values())r.delete(s)}},addComponent(s,r,o){if(!e.has(s))throw new Error(`unknown entity ${s}`);i(r).set(s,o)},getComponent(s,r){return i(r).get(s)},hasComponent(s,r){return i(r).has(s)},query(s){return[...i(s).entries()].map(([o,a])=>({id:o,data:a}))},idsWith(s){return i(s).keys()}}}function yo(n,e){let t=Ym(e);return n.x=t.x,n.y=t.y,n.z=t.z,n.h=t.h,n.walking=t.walking,n.flop=t.flop,n.level=Qh(t.level),n.clothes=ef(t.clothes),n}var Ln={transform:"Transform",player:"PlayerTag",villager:"NpcId",peer:"NetId",body:"BodyId"};function hT(n){let e=yf(),t=e.createEntity();e.addComponent(t,Ln.transform,{x:0,y:0,z:0,h:0}),e.addComponent(t,Ln.player,{id:"player"});let i=new Map,s=new Map;function r(){if(n.player){let a=e.getComponent(t,Ln.transform);yo(a,n.player),a.level=n.level}for(let[a,l]of i){let c=e.getComponent(l.entityId,Ln.transform);c&&l.pos&&(c.x=l.pos.x,c.y=l.pos.y)}for(let[a,l]of s){let c=e.getComponent(l.entityId,Ln.transform);c&&l.peer&&yo(c,l.peer)}}function o(){let a=e.getComponent(t,Ln.transform);a&&n.player&&yo(n.player,a)}return{world:e,playerId:t,villagerIds:i,peerIds:s,registerVillager(a,l){let c=e.createEntity();return e.addComponent(c,Ln.villager,{id:a}),e.addComponent(c,Ln.transform,{x:l.x,y:l.y,z:0,h:0}),i.set(a,{entityId:c,pos:l}),c},registerPeer(a,l){let c=e.createEntity();return e.addComponent(c,Ln.peer,{id:a}),e.addComponent(c,Ln.transform,{x:0,y:0,z:0,h:0}),s.set(a,{entityId:c,peer:l}),c},syncFromGame:r,syncToGame:o}}var fT=()=>({keys:{forward:!1,back:!1,left:!1,right:!1,lookLeft:!1,lookRight:!1,hop:!1,down:!1},run:!1,stickX:0,stickY:0,stickTouch:!1,lookX:0,lookY:0,lookTouch:!1});function Mf(n="play",e=null){let i=Om(e??{getItem:()=>null,setItem:()=>{}});return{mode:n,world:null,overworld:null,fit:{},save:i,netId:"",character:{name:i.character.name,gender:i.character.gender},peers:[],player:dm(),level:"world",river:null,regionName:"",regionId:"",score:0,playing:!1,playMode:"story",paused:!1,mapOpen:!1,solids:[],bodies:[],clock:null,season:null,daylight:null,input:fT(),view:{lookH:0,lookPitch:0},portalLatch:null,selection:null,dirty:!1}}var dT=.016666666666666666,pT=4;function mT(n){let e=n.fixedStep??dT,t=n.maxSteps??pT,i=0,s=0,r=0,o=!1;function a(c,u){let h=i?Math.min(.1,(c-i)/1e3):0;i=c;let f=n.onStudioStep?.()??!1,d=n.isRunning?.()??!0,p=0;if(d&&n.stepSim){s+=h||e;let x=0;for(;s>=e&&x<t;)n.stepSim(e),s-=e,p+=e,x+=1;x>=t&&(s=Math.min(s,e))}else s=0;n.onFrame?.({dtReal:h||e,dtSim:p,running:d,studioStep:f}),u&&(r=requestAnimationFrame(()=>a(performance.now(),!0)))}function l(c){a(c,!0)}return{start(){o||(o=!0,i=0,s=0,r=requestAnimationFrame(()=>a(performance.now(),!0)))},stop(){o&&(o=!1,cancelAnimationFrame(r))},tick(c,u=16.67){let h=c??i+u;a(h,!1)},resetAccumulator(){s=0}}}var Ht=Mf("play",localStorage);var gT=new hl,un=new Map;async function bf(n){if(un.has(n))return un.get(n);let e;try{e=await gT.loadAsync(`/assets/models/${n}`)}catch(r){return console.warn(`Missing model ${n}`,r),un.set(n,{root:null,clips:[],box:null,missing:!0}),un.get(n)}let t=e.scene,i=Nf.has(n)||n.includes("rug");t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!i,r.receiveShadow=!0;let o=r.name.includes("Fur"),a=[].concat(r.material);for(let l of a)o&&(l.vertexColors=!1),l.emissive&&l.emissiveIntensity>0&&l.emissive.getHex()!==0&&(l.emissiveIntensity=Math.max(l.emissiveIntensity,1.6)),l.map&&(l.map.anisotropy=fm.capabilities.getMaxAnisotropy());o&&(r.castShadow=!1)});let s=new Lt().setFromObject(t);return un.set(n,{root:t,clips:e.animations||[],box:s}),un.get(n)}function rD(n,e,t,i,s,r){let o=un.get(n);if(!o?.root){let h=new At;return h.name=`missing:${n}`,h.position.copy(bn(e,t,i)),r.add(h),h}let{root:a}=o,l=a.clone(!0);l.position.copy(bn(e,t,i));let c=Mi.degToRad(s||0),u=n.startsWith("manor_")||n.startsWith("village/");return l.rotation.y=u?c:Math.PI-c,r.add(l),l}function kg(n){let e=new Map,t=new Map,i=n.clone();return zg(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function zg(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)zg(n.children[i],e.children[i],t)}var Hg={male:{scale:1.04,tint:null,flower:!1},female:{scale:.92,tint:"#f0a8b4",flower:!0}};async function Vg(){await bf("mochi.glb"),await bf("bloompin.glb")}function _T(n){n.traverse(e=>{if(!e.isMesh)return;let t=[].concat(e.material);for(let i of t)i&&i.color&&!i.userData.baseColor&&(i.userData.baseColor=i.color.clone())})}function vT(n,e){_T(n);let t=e?new Me(e):null;n.traverse(i=>{if(!i.isMesh)return;let s=i.name.includes("Fur"),r=[].concat(i.material);for(let o of r){if(!o||!o.color)continue;let a=o.userData.baseColor||o.color;o.color.copy(a),t&&o.color.lerp(t,s?.28:.42)}})}function yT(n){let e=un.get("bloompin.glb");if(!e)return null;let t=e.root.clone(!0);return t.scale.setScalar(1.35),t.position.copy(bn(-.18,.42,.58)),n.add(t),t}function MT(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=new Pa(e);t.colorSpace=ht;let i=new Ma(new Dr({map:t,transparent:!0,depthTest:!1}));return i.position.y=1.12,i.scale.set(1.5,.38,1),i.renderOrder=8,Gg(i,n),i}function bT(n,{indoor:e=!1,compact:t=!1}={}){if(!n)return;let i=1,s=1;e?(i*=t?.48:.58,s=t?.55:.68,n.position.y=Math.min(n.position.y,.92)):t?(i*=.72,s=.9):n.position.y=Math.max(n.position.y,1.12),n.scale.set(1.5*i,.38*i,1),n.material.opacity=s,n.material.transparent=!0,n.material.depthTest=!1}function Gg(n,e){let t=n.material.map.image,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height);let s=String(e||"").slice(0,16);if(n.visible=!!s,!s){n.material.map.needsUpdate=!0;return}i.font="700 28px Gill Sans, Trebuchet MS, sans-serif";let r=Math.min(240,Math.max(72,i.measureText(s).width+28)),o=(t.width-r)/2;i.fillStyle="rgba(28, 14, 36, 0.86)",i.strokeStyle="rgba(242, 132, 42, 0.85)",i.lineWidth=3,ST(i,o,12,r,40,14),i.fill(),i.stroke(),i.fillStyle="#f8edd4",i.textAlign="center",i.textBaseline="middle",i.fillText(s,t.width/2,32,r-16),n.material.map.needsUpdate=!0}function ST(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function wT(){let n=new At,e=new qt({color:"#3d9b4a",roughness:.42}),t=new qt({color:"#c8ec7a",roughness:.5}),i=new qt({color:"#1a2418",roughness:.4}),s=new Xe(new Mn(.22,12,10),e);s.scale.set(1.2,.78,1.05),s.position.y=.16;let r=new Xe(new Mn(.14,10,8),t);r.scale.set(1,.7,.55),r.position.set(0,.12,.12);let o=new Xe(new Mn(.13,10,8),e);o.position.set(0,.26,.16);function a(c){let u=new At,h=new Xe(new Mn(.045,8,8),new qt({color:"#f4f7e8"})),f=new Xe(new Mn(.02,8,8),i);return f.position.z=.03,u.add(h,f),u.position.set(c*.07,.32,.22),u}function l(c,u){let h=new Xe(new Mn(.07,8,8),e);return h.scale.set(.7,.45,1.1),h.position.set(c*.16,.07,u),h}return n.add(s,r,o,a(-1),a(1),l(-1,.08),l(1,.08),l(-1,-.1),l(1,-.1)),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),n.visible=!1,n}function Wg(n,{gender:e="male",name:t=""}={}){let i=un.get("mochi.glb"),s=kg(i.root);s.traverse(w=>{w.isMesh&&(Array.isArray(w.material)?w.material=w.material.map(A=>A.clone()):w.material&&(w.material=w.material.clone()),w.name.includes("Fur")||(w.castShadow=!0))});let r=new Lt().setFromObject(s),o=r.getSize(new L),a=r.getCenter(new L);s.position.sub(a),s.position.y+=o.y/2;let l=i.clips?.length?new Wa(s):null,c={},u="";if(l){for(let w of i.clips){let A=l.clipAction(w);A.enabled=!0,c[w.name]=A}c.Idle&&(c.Idle.setLoop(Ka,1/0),c.Idle.play(),u="Idle"),c.Walk&&c.Walk.setLoop(Ka,1/0),c.Hop&&c.Hop.setLoop($a,1)}let h=yT(s),f=MT(t),d=new At;d.add(s),d.add(f),n.add(d);let p=Object.entries(CT).map(([w,A])=>({bone:s.getObjectByName(w),side:A})).filter(w=>w.bone);function x(w=1){if(w>0)for(let{bone:A,side:I}of p)A.quaternion.multiply(RT.setFromAxisAngle(ET,I*AT*w))}function g(){return o.y*TT*s.scale.y}function m(w){let A=Hg[w]||Hg.male;s.scale.setScalar(A.scale),vT(s,A.tint),h&&(h.visible=A.flower)}function y(w,{once:A=!1}={}){if(!l||!c[w]||u===w&&!A)return;let I=c[w],b=u?c[u]:null;I.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.12).play(),(A||w==="Hop"||w==="Flop")&&I.setLoop($a,1),b&&b!==I&&b.fadeOut(.12),u=w}m(e);let v=wT();d.add(v);let _="";function R(w){let A=w==="frog";_=A?"frog":"",s.visible=!A,v.visible=A,f.position.y=A?.52:1.12}return{holder:d,model:s,mixer:l,actions:c,nameplate:f,setLook:m,setName:w=>Gg(f,w),fitName:w=>bT(f,w),setClip:y,setForm:R,straddle:x,bellyHeight:g,form:()=>_,dispose(){n.remove(d),l?.stopAllAction()}}}var TT=.21,AT=.5,ET=new L(0,0,1),CT={leg_fl:1,leg_bl:1,leg_fr:-1,leg_br:-1},RT=new Dt;function Xg(n,{x:e,y:t,z:i=0,h:s=0,flop:r=0,pitch:o=0,roll:a=0}){n.position.copy(bn(e,t,i)),n.rotation.order="YXZ",n.rotation.y=Mi.degToRad(s),n.rotation.x=Mi.degToRad(o),n.rotation.z=r>0?Math.sin(r*8)*.6:Mi.degToRad(a)}var Ke=null,qg=new Map,wf=null,sr=null;async function xD(){await Vg(),Ke=Wg(ro,{gender:Ht.character?.gender||"male",name:Ht.character?.name||""}),wf=ro,sr=new _i("#c9a0ff",0,4.5),sr.position.set(0,.45,0),Ke.holder.add(sr)}function _D(){return Ke}function vD(n){Ke?.setClip(n,{once:n==="Hop"||n==="Flop"})}var PT=.045;function Yg(){return-(Ke?.bellyHeight?.()??.14)+PT}function yD(n){!Ke||!n||(wf=Ke.holder.parent,n.add(Ke.holder),Ke.holder.position.set(0,Yg(),0),Ke.holder.rotation.set(0,0,0))}function MD(){if(!Ke)return;let n=wf||ro;Ke.holder.parent!==n&&n.add(Ke.holder)}function Sf(n){Ke?.setClip(n)}function bD(n,e){if(!Ke?.mixer)return;let t=Ht.rides?.[0],i=t&&(t.phase==="mounting"||t.phase==="dismounting"),s=t?.phase==="flying"||(t?.sit||0)>.4;i&&Ke.actions.Hop?Sf("Hop"):Sf(s?"Idle":e&&Ke.actions.Walk?"Walk":"Idle"),Ke.mixer.update(n);let r=t?.phase==="flying"?1:i?t.sit:0;r>0&&Ke.straddle?.(r)}function SD(){if(!Ke)return;let n=Ht.rides?.[0];if(Ke.holder.parent&&Ke.holder.parent!==ro){Ke.holder.position.set(0,Yg(),0),Ke.holder.rotation.order="YXZ",Ke.holder.rotation.x=0,Ke.holder.rotation.y=0,Ke.holder.rotation.z=0;return}Xg(Ke.holder,{...Ht.player,sit:n?.sit||0}),Ke.setForm?.(Ht.player.form);let e=wo.coarse||typeof window<"u"&&window.innerWidth<700;if(Ke.fitName?.({indoor:Ht.level!=="world",compact:e}),sr){let t=Ht.player.glowColor;sr.intensity=t?2.4:0,t&&sr.color.set(t)}}function wD(n,e){Ke&&(Ke.setLook(n||"male"),Ke.setName(e||Ht.character?.name||""))}function IT(n,e,t){if(!(Ht.fit[t]||[]).some(a=>a.joint==="head"))return;let i=null,s=null;if(n.traverse(a=>{if(i||!a.isSkinnedMesh)return;let l=a.skeleton.bones.findIndex(c=>/^head$/i.test(c.name));l>=0&&(i=a.skeleton.bones[l],s=a.skeleton.boneInverses[l])}),!i)return;let r=new Ue,o=e.updateMatrixWorld;e.matrixAutoUpdate=!1,e.updateMatrixWorld=function(a){r.copy(n.matrixWorld).invert().multiply(i.matrixWorld).multiply(s),this.matrix.copy(r),o.call(this,!0)}}function Zg(n,e,t){let i=Ht.world.clothing.find(r=>r.id===t);if(!i||!n?.model)return null;let s=e.get(t);if(s)return s;s=new At;for(let r of Ht.fit[t]||[]){let o=un.get(i.file);if(!o)continue;let a=o.root.clone(!0);a.position.copy(bn(r.at[0],r.at[1],r.at[2])),s.add(a)}return e.set(t,s),n.model.add(s),IT(n.model,s,i.id),s}function DT(n,e,t){if(!n?.model)return;let i=new Set(t||[]);for(let s of i)Zg(n,e,s);for(let[s,r]of e)r.visible=i.has(s)}function TD(n){if(!Ke)return;let e=Zg(Ke,qg,n);e&&(e.visible=ao(Ht.save).has(n))}function AD(){DT(Ke,qg,[...ao(Ht.save)])}export{Xa as a,Et as b,Kt as c,Gt as d,An as e,yn as f,Wt as g,Ka as h,ht as i,Mi as j,te as k,et as l,_t as m,Dt as n,L as o,Lt as p,Ue as q,ft as r,Me as s,Xt as t,xt as u,je as v,pt as w,Xe as x,Bi as y,yt as z,_a as A,At as B,va as C,Fs as D,Dr as E,Ma as F,pi as G,wa as H,Nr as I,Ea as J,Ur as K,Ra as L,Pa as M,Or as N,_u as O,$d as P,Kd as Q,vu as R,jd as S,Jd as T,yu as U,np as V,ip as W,sp as X,Mn as Y,rp as Z,qt as _,ka as $,ap as aa,_i as ba,Ha as ca,hp as da,Wa as ea,pp as fa,LT as ga,wo as ha,NT as ia,bn as ja,Xb as ka,eS as la,sS as ma,$A as na,fm as oa,ro as pa,EE as qa,CE as ra,Xi as sa,PE as ta,IE as ua,DE as va,NE as wa,UE as xa,vl as ya,QR as za,e2 as Aa,i2 as Ba,s2 as Ca,uo as Da,Qm as Ea,eg as Fa,tg as Ga,r2 as Ha,o2 as Ia,a2 as Ja,yl as Ka,c2 as La,af as Ma,d2 as Na,nr as Oa,p2 as Pa,m2 as Qa,y2 as Ra,sw as Sa,M2 as Ta,b2 as Ua,S2 as Va,w2 as Wa,T2 as Xa,og as Ya,aw as Za,R2 as _a,P2 as $a,uw as ab,I2 as bb,D2 as cb,IS as db,DS as eb,pm as fb,Qt as gb,js as hb,cn as ib,gm as jb,kE as kb,zE as lb,Jn as mb,HE as nb,VE as ob,GE as pb,WE as qb,XE as rb,qE as sb,YE as tb,ZE as ub,_m as vb,$E as wb,hC as xb,fC as yb,dC as zb,pC as Ab,mC as Bb,gC as Cb,Tm as Db,FS as Eb,xC as Fb,_C as Gb,OS as Hb,vC as Ib,yC as Jb,Am as Kb,gl as Lb,bC as Mb,BS as Nb,SC as Ob,wC as Pb,Zi as Qb,AC as Rb,EC as Sb,CC as Tb,RC as Ub,PC as Vb,IC as Wb,DC as Xb,HS as Yb,LC as Zb,qh as _b,FC as $b,GS as ac,xl as bc,qS as cc,OC as dc,BC as ec,$h as fc,kC as gc,zC as hc,HC as ic,Dm as jc,GC as kc,KS as lc,WC as mc,XC as nc,qC as oc,jS as pc,Kh as qc,YC as rc,ZC as sc,wS as tc,ES as uc,Sm as vc,Yi as wc,nC as xc,iC as yc,sC as zc,rC as Ac,e1 as Bc,sR as Cc,rR as Dc,Jh as Ec,ao as Fc,oR as Gc,aR as Hc,lR as Ic,cR as Jc,uR as Kc,hR as Lc,fR as Mc,dR as Nc,N2 as Oc,F2 as Pc,O2 as Qc,B2 as Rc,k2 as Sc,z2 as Tc,cg as Uc,H2 as Vc,V2 as Wc,pg as Xc,mg as Yc,en as Zc,X2 as _c,q2 as $c,Y2 as ad,Z2 as bd,Ki as cd,Tw as dd,j2 as ed,Q2 as fd,xg as gd,go as hd,eP as id,iP as jd,sP as kd,mR as ld,lo as md,Js as nd,Hm as od,_R as pd,vR as qd,yR as rd,Qs as sd,MR as td,zm as ud,Gm as vd,c1 as wd,bR as xd,SR as yd,lP as zd,bg as Ad,Iw as Bd,Dw as Cd,cP as Dd,uP as Ed,hP as Fd,fP as Gd,Tg as Hd,xP as Id,_P as Jd,SP as Kd,EP as Ld,CP as Md,vo as Nd,RP as Od,PP as Pd,Xm as Qd,AR as Rd,ER as Sd,CR as Td,RR as Ud,m1 as Vd,DR as Wd,LR as Xd,NR as Yd,Zw as Zd,DP as _d,LP as $d,kR as ae,zR as be,VR as ce,UP as de,kP as ee,zP as fe,E1 as ge,WR as he,XR as ie,YR as je,ZR as ke,$R as le,cT as me,uT as ne,mT as oe,hT as pe,Ht as qe,un as re,bf as se,rD as te,kg as ue,Wg as ve,Xg as we,xD as xe,_D as ye,vD as ze,Yg as Ae,yD as Be,MD as Ce,bD as De,SD as Ee,wD as Fe,DT as Ge,TD as He,AD as Ie};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

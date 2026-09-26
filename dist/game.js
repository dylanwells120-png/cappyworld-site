(()=>{var ib=Object.defineProperty;var sb=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var rb=(n,e)=>{for(var t in e)ib(n,t,{get:e[t],enumerable:!0})};var Ix={};rb(Ix,{say:()=>ae,showBark:()=>cp,tickToast:()=>ql});function ae(n){document.querySelector("#toast").textContent=n,Gl=performance.now()+2200}function cp(n,e){let t=document.querySelector("#bark");t&&(t.textContent=`${n}: ${e}`,Wl=performance.now()+2200)}function ql(n){if(Gl&&n>Gl&&(document.querySelector("#toast").textContent="",Gl=0),Wl&&n>Wl){let e=document.querySelector("#bark");e&&(e.textContent=""),Wl=0}}var Gl,Wl,qt=sb(()=>{Gl=0,Wl=0});var ob=0,pm=1,ab=2;var tl=1,Td=2,bi=3,ii=0,Lt=1,Gn=2,Ji=0,Tr=1,mm=2,gm=3,ym=4,cb=5,Ls=100,lb=101,ub=102,hb=103,db=104,fb=200,pb=201,mb=202,gb=203,sh=204,rh=205,yb=206,xb=207,_b=208,vb=209,bb=210,Mb=211,Sb=212,wb=213,Eb=214,oh=0,ah=1,ch=2,Ir=3,lh=4,uh=5,hh=6,dh=7,kg=0,Tb=1,Ab=2,Qi=0,Rb=1,Cb=2,Ib=3,Ad=4,Pb=5,Lb=6,Db=7,xm="attached",Nb="detached",Og=300,Pr=301,Lr=302,fh=303,ph=304,nl=306,bn=1e3,Si=1001,Ko=1002,en=1003,Rd=1004;var Mr=1005;var $t=1006,qo=1007;var ni=1008;var Xn=1009,Fg=1010,Bg=1011,Jo=1012,Cd=1013,Ns=1014,qn=1015,aa=1016,Id=1017,Pd=1018,Dr=1020,zg=35902,Hg=1021,Vg=1022,Qt=1023,Gg=1024,Wg=1025,Ar=1026,Nr=1027,Ld=1028,Dd=1029,qg=1030,Nd=1031;var Ud=1033,bc=33776,Mc=33777,Sc=33778,wc=33779,mh=35840,gh=35841,yh=35842,xh=35843,_h=36196,vh=37492,bh=37496,Mh=37808,Sh=37809,wh=37810,Eh=37811,Th=37812,Ah=37813,Rh=37814,Ch=37815,Ih=37816,Ph=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,Ec=36492,kh=36494,Oh=36495,$g=36283,Fh=36284,Bh=36285,zh=36286,il=2200,jr=2201,Ub=2202,Ur=2300,kr=2301,Mu=2302,Sr=2400,wr=2401,Tc=2402,kd=2500,kb=2501,Xg=0,sl=1,ca=2,Ob=3200,Fb=3201;var Yg=0,Bb=1,ji="",et="srgb",nn="srgb-linear",rl="linear",dt="srgb";var ir=7680;var _m=519,zb=512,Hb=513,Vb=514,jg=515,Gb=516,Wb=517,qb=518,$b=519,Hh=35044;var vm="300 es",wi=2e3,Ac=2001,Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bm=1234567,$o=Math.PI/180,Or=180/Math.PI;function $n(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Od(n,e){return(n%e+e)%e}function Xb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yb(n,e,t){return n!==e?(t-n)/(e-n):0}function Xo(n,e,t){return(1-t)*n+t*e}function jb(n,e,t,i){return Xo(n,e,1-Math.exp(-t*i))}function Zb(n,e=1){return e-Math.abs(Od(n,e*2)-e)}function Kb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function eM(n,e){return n+Math.random()*(e-n)}function tM(n){return n*(.5-Math.random())}function nM(n){n!==void 0&&(bm=n);let e=bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iM(n){return n*$o}function sM(n){return n*Or}function rM(n){return(n&n-1)===0&&n!==0}function oM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function aM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cM(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Wt={DEG2RAD:$o,RAD2DEG:Or,generateUUID:$n,clamp:kt,euclideanModulo:Od,mapLinear:Xb,inverseLerp:Yb,lerp:Xo,damp:jb,pingpong:Zb,smoothstep:Kb,smootherstep:Jb,randInt:Qb,randFloat:eM,randFloatSpread:tM,seededRandom:nM,degToRad:iM,radToDeg:sM,isPowerOfTwo:rM,ceilPowerOfTwo:oM,floorPowerOfTwo:aM,setQuaternionFromProperEuler:cM,normalize:ut,denormalize:Wn},le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=s[0],y=s[3],p=s[6],_=s[1],b=s[4],v=s[7],P=s[2],R=s[5],I=s[8];return r[0]=o*x+a*_+c*P,r[3]=o*y+a*b+c*R,r[6]=o*p+a*v+c*I,r[1]=l*x+u*_+h*P,r[4]=l*y+u*b+h*R,r[7]=l*p+u*v+h*I,r[2]=d*x+f*_+g*P,r[5]=d*y+f*b+g*R,r[8]=d*p+f*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Su.makeScale(e,t)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,t){return this.premultiply(Su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Su=new Ve;function Zg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lM(){let n=Qo("canvas");return n.style.display="block",n}var Mm={};function Go(n){n in Mm||(Mm[n]=!0,console.warn(n))}function uM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function hM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(n.r=Rr(n.r),n.g=Rr(n.g),n.b=Rr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ji?rl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sm=[.64,.33,.3,.6,.15,.06],wm=[.2126,.7152,.0722],Em=[.3127,.329],Tm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Am=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[nn]:{primaries:Sm,whitePoint:Em,transfer:rl,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:wm,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:Sm,whitePoint:Em,transfer:dt,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:wm,outputColorSpaceConfig:{drawingBufferColorSpace:et}}});var sr,Vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Qo("canvas")),sr.width=e.width,sr.height=e.height;let i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fM=0,Rc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wu(s[o].image)):r.push(wu(s[o]))}else r=wu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pM=0,Vt=class n extends Ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=$t,o=ni,a=Qt,c=Xn,l=n.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=$n(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Og;Vt.DEFAULT_ANISOTROPY=1;var tt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],y=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-y)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+y)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(f+1)/2,P=(p+1)/2,R=(u+d)/4,I=(h+x)/4,L=(g+y)/4;return b>v&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=I/i):v>P?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=I/r,s=L/r),this.set(i,s,r,t),this}let _=Math.sqrt((y-g)*(y-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(y-g)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends Ti{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Vt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends Gh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Cc=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wh=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let y=1-a,p=c*d+l*f+u*g+h*x,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,p*_);y=Math.sin(y*R)/P,a=Math.sin(a*R)/P}let v=a*_;if(c=c*y+d*v,l=l*y+f*v,u=u*y+g*v,h=h*y+x*v,y===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eu=new C,Rm=new tn,Dt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),qa.subVectors(this.max,Lo),rr.subVectors(e.a,Lo),or.subVectors(e.b,Lo),ar.subVectors(e.c,Lo),Gi.subVectors(or,rr),Wi.subVectors(ar,or),Es.subVectors(rr,ar);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Es.z,Es.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Es.z,0,-Es.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Es.y,Es.x,0];return!Tu(t,rr,or,ar,qa)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,rr,or,ar,qa))?!1:($a.crossVectors(Gi,Wi),t=[$a.x,$a.y,$a.z],Tu(t,rr,or,ar,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mi=[new C,new C,new C,new C,new C,new C,new C,new C],zn=new C,Wa=new Dt,rr=new C,or=new C,ar=new C,Gi=new C,Wi=new C,Es=new C,Lo=new C,qa=new C,$a=new C,Ts=new C;function Tu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),c=e.dot(Ts),l=t.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mM=new Dt,Do=new C,Au=new C,Mn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);let t=Do.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Do,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Au)),this.expandByPoint(Do.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new C,Ru=new C,Xa=new C,qi=new C,Cu=new C,Ya=new C,Iu=new C,Us=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ru.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=qi.dot(this.direction),c=-qi.dot(Xa),l=qi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ru).addScaledVector(Xa,d),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){Cu.subVectors(t,e),Ya.subVectors(i,e),Iu.crossVectors(Cu,Ya);let o=this.direction.dot(Iu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);let c=a*this.direction.dot(Ya.crossVectors(qi,Ya));if(c<0)return null;let l=a*this.direction.dot(Cu.cross(qi));if(l<0||c+l>o)return null;let u=-a*qi.dot(Iu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,y)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,x,y){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,yM)}lookAt(e,t,i){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),$i.crossVectors(i,_n),$i.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),$i.crossVectors(i,_n)),$i.normalize(),ja.crossVectors(_n,$i),s[0]=$i.x,s[4]=ja.x,s[8]=_n.x,s[1]=$i.y,s[5]=ja.y,s[9]=_n.y,s[2]=$i.z,s[6]=ja.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],y=i[10],p=i[14],_=i[3],b=i[7],v=i[11],P=i[15],R=s[0],I=s[4],L=s[8],E=s[12],M=s[1],T=s[5],O=s[9],F=s[13],W=s[2],Q=s[6],$=s[10],ne=s[14],q=s[3],te=s[7],z=s[11],Z=s[15];return r[0]=o*R+a*M+c*W+l*q,r[4]=o*I+a*T+c*Q+l*te,r[8]=o*L+a*O+c*$+l*z,r[12]=o*E+a*F+c*ne+l*Z,r[1]=u*R+h*M+d*W+f*q,r[5]=u*I+h*T+d*Q+f*te,r[9]=u*L+h*O+d*$+f*z,r[13]=u*E+h*F+d*ne+f*Z,r[2]=g*R+x*M+y*W+p*q,r[6]=g*I+x*T+y*Q+p*te,r[10]=g*L+x*O+y*$+p*z,r[14]=g*E+x*F+y*ne+p*Z,r[3]=_*R+b*M+v*W+P*q,r[7]=_*I+b*T+v*Q+P*te,r[11]=_*L+b*O+v*$+P*z,r[15]=_*E+b*F+v*ne+P*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],y=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+y*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],y=e[14],p=e[15],_=h*y*l-x*d*l+x*c*f-a*y*f-h*c*p+a*d*p,b=g*d*l-u*y*l-g*c*f+o*y*f+u*c*p-o*d*p,v=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,P=g*h*c-u*x*c-g*a*d+o*x*d+u*a*y-o*h*y,R=t*_+i*b+s*v+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=_*I,e[1]=(x*d*r-h*y*r-x*s*f+i*y*f+h*s*p-i*d*p)*I,e[2]=(a*y*r-x*c*r+x*s*l-i*y*l-a*s*p+i*c*p)*I,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*I,e[4]=b*I,e[5]=(u*y*r-g*d*r+g*s*f-t*y*f-u*s*p+t*d*p)*I,e[6]=(g*c*r-o*y*r-g*s*l+t*y*l+o*s*p-t*c*p)*I,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*I,e[8]=v*I,e[9]=(g*h*r-u*x*r-g*i*f+t*x*f+u*i*p-t*h*p)*I,e[10]=(o*x*r-g*a*r+g*i*l-t*x*l-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*I,e[12]=P*I,e[13]=(u*x*s-g*h*s+g*i*d-t*x*d-u*i*y+t*h*y)*I,e[14]=(g*a*s-o*x*s-g*i*c+t*x*c+o*i*y-t*a*y)*I,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,y=o*h,p=a*h,_=c*l,b=c*u,v=c*h,P=i.x,R=i.y,I=i.z;return s[0]=(1-(x+p))*P,s[1]=(f+v)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(y+_)*R,s[7]=0,s[8]=(g+b)*I,s[9]=(y-_)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let l=1/r,u=1/o,h=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=wi){let c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===wi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ac)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=wi){let c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*l,f=(i+s)*u,g,x;if(a===wi)g=(o+r)*h,x=-2*h;else if(a===Ac)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},cr=new C,Hn=new ke,gM=new C(0,0,0),yM=new C(1,1,1),$i=new C,ja=new C,_n=new C,Cm=new ke,Im=new tn,si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xM=0,Pm=new C,lr=new tn,yi=new ke,Za=new C,No=new C,_M=new C,vM=new tn,Lm=new C(1,0,0),Dm=new C(0,1,0),Nm=new C(0,0,1),Um={type:"added"},bM={type:"removed"},ur={type:"childadded",child:null},Pu={type:"childremoved",child:null},Mt=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new si,i=new tn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Dm,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Dm,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(No,Za,this.up):yi.lookAt(Za,No,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(yi),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bM),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new C(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new C,xi=new C,Lu=new C,_i=new C,hr=new C,dr=new C,km=new C,Du=new C,Nu=new C,Uu=new C,ku=new tt,Ou=new tt,Fu=new tt,Zi=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),xi.subVectors(i,t),Lu.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(xi),c=Vn.dot(Lu),l=xi.dot(xi),u=xi.dot(Lu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ku.setScalar(0),Ou.setScalar(0),Fu.setScalar(0),ku.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ku,r.x),o.addScaledVector(Ou,r.y),o.addScaledVector(Fu,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),xi.subVectors(e,t),Vn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,i),dr.subVectors(r,i),Du.subVectors(e,i);let c=hr.dot(Du),l=dr.dot(Du);if(c<=0&&l<=0)return t.copy(i);Nu.subVectors(e,s);let u=hr.dot(Nu),h=dr.dot(Nu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(hr,o);Uu.subVectors(e,r);let f=hr.dot(Uu),g=dr.dot(Uu);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(dr,a);let y=u*g-f*h;if(y<=0&&h-u>=0&&f-g>=0)return km.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(km,a);let p=1/(y+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Od(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Bu(o,r,e+1/3),this.g=Bu(o,r,e),this.b=Bu(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let i=Kg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Ke.fromWorkingColorSpace(Jt.copy(this),e),Math.round(kt(Jt.r*255,0,255))*65536+Math.round(kt(Jt.g*255,0,255))*256+Math.round(kt(Jt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Jt.copy(this),t);let i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=et){Ke.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,s=Jt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Ka);let i=Xo(Xi.h,Ka.h,t),s=Xo(Xi.s,Ka.s,t),r=Xo(Xi.l,Ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new ye;ye.NAMES=Kg;var MM=0,dn=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=$n(),this.name="",this.blending=Tr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new C,Ja=new le,Ot=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}};var Ic=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pc=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},SM=0,Tn=new ke,zu=new Mt,fr=new C,vn=new Dt,Uo=new Dt,Ht=new C,Rt=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?Pc:Ic)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(vn.min,Uo.min),vn.expandByPoint(Ht),Ht.addVectors(vn.max,Uo.max),vn.expandByPoint(Ht)):(vn.expandByPoint(Uo.min),vn.expandByPoint(Uo.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(e,l),Ht.add(fr)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new C,c[L]=new C;let l=new C,u=new C,h=new C,d=new le,f=new le,g=new le,x=new C,y=new C;function p(L,E,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),y.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[L].add(x),a[E].add(x),a[M].add(x),c[L].add(y),c[E].add(y),c[M].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,E=_.length;L<E;++L){let M=_[L],T=M.start,O=M.count;for(let F=T,W=T+O;F<W;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new C,v=new C,P=new C,R=new C;function I(L){P.fromBufferAttribute(s,L),R.copy(P);let E=a[L];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(R,E);let T=v.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,T)}for(let L=0,E=_.length;L<E;++L){let M=_[L],T=M.start,O=M.count;for(let F=T,W=T+O;F<W;F+=3)I(e.getX(F+0)),I(e.getX(F+1)),I(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,y=c.length;x<y;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Om=new ke,As=new Us,Qa=new Mn,Fm=new C,ec=new C,tc=new C,nc=new C,Hu=new C,ic=new C,Bm=new C,sc=new C,Y=class extends Mt{constructor(e=new Rt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ic.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Hu.fromBufferAttribute(h,e),o?ic.addScaledVector(Hu,u):ic.addScaledVector(Hu.sub(t),u))}t.add(ic)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Qa.containsPoint(As.origin)===!1&&(As.intersectSphere(Qa,Fm)===null||As.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Om.copy(r).invert(),As.copy(e.ray).applyMatrix4(Om),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let y=d[g],p=o[y.materialIndex],_=Math.max(y.start,f.start),b=Math.min(a.count,Math.min(y.start+y.count,f.start+f.count));for(let v=_,P=b;v<P;v+=3){let R=a.getX(v),I=a.getX(v+1),L=a.getX(v+2);s=rc(this,p,e,i,l,u,h,R,I,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let y=g,p=x;y<p;y+=3){let _=a.getX(y),b=a.getX(y+1),v=a.getX(y+2);s=rc(this,o,e,i,l,u,h,_,b,v),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let y=d[g],p=o[y.materialIndex],_=Math.max(y.start,f.start),b=Math.min(c.count,Math.min(y.start+y.count,f.start+f.count));for(let v=_,P=b;v<P;v+=3){let R=v,I=v+1,L=v+2;s=rc(this,p,e,i,l,u,h,R,I,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let y=g,p=x;y<p;y+=3){let _=y,b=y+1,v=y+2;s=rc(this,o,e,i,l,u,h,_,b,v),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function wM(n,e,t,i,s,r,o,a){let c;if(e.side===Lt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ii,a),c===null)return null;sc.copy(a),sc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(sc);return l<t.near||l>t.far?null:{distance:l,point:sc.clone(),object:n}}function rc(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ec),n.getVertexPosition(c,tc),n.getVertexPosition(l,nc);let u=wM(n,e,t,i,ec,tc,nc,Bm);if(u){let h=new C;Zi.getBarycoord(Bm,ec,tc,nc,h),s&&(u.uv=Zi.getInterpolatedAttribute(s,a,c,l,h,new le)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,a,c,l,h,new le)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new C,materialIndex:0};Zi.getNormal(ec,tc,nc,d.normal),u.face=d,u.barycoord=h}return u}var Gt=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(x,y,p,_,b,v,P,R,I,L,E){let M=v/I,T=P/L,O=v/2,F=P/2,W=R/2,Q=I+1,$=L+1,ne=0,q=0,te=new C;for(let z=0;z<$;z++){let Z=z*T-F;for(let ce=0;ce<Q;ce++){let Re=ce*M-O;te[x]=Re*_,te[y]=Z*b,te[p]=W,l.push(te.x,te.y,te.z),te[x]=0,te[y]=0,te[p]=R>0?1:-1,u.push(te.x,te.y,te.z),h.push(ce/I),h.push(1-z/L),ne+=1}}for(let z=0;z<L;z++)for(let Z=0;Z<I;Z++){let ce=d+Z+Q*z,Re=d+Z+Q*(z+1),H=d+(Z+1)+Q*(z+1),ee=d+(Z+1)+Q*z;c.push(ce,Re,ee),c.push(Re,H,ee),q+=6}a.addGroup(f,q,E),f+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Fr(n[t]);for(let s in i)e[s]=i[s]}return e}function EM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var TM={clone:Fr,merge:an},AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Lc=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new C,zm=new le,Hm=new le,Ct=class extends Lc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,zm,Hm),t.subVectors(Hm,zm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,qh=class extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new Ct(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new Ct(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new Ct(pr,mr,e,t);a.layers=this.layers,this.add(a);let c=new Ct(pr,mr,e,t);c.layers=this.layers,this.add(c);let l=new Ct(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Dc=class extends Vt{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$h=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Ji});r.uniforms.tEquirect.value=t;let o=new Y(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=$t),new qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Vu=new C,CM=new C,IM=new Ve,Mi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vu.subVectors(i,t).cross(CM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||IM.getNormalMatrix(e),s=this.coplanarPoint(Vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Mn,oc=new C,ta=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],y=s[11],p=s[12],_=s[13],b=s[14],v=s[15];if(i[0].setComponents(c-r,d-l,y-f,v-p).normalize(),i[1].setComponents(c+r,d+l,y+f,v+p).normalize(),i[2].setComponents(c+o,d+u,y+g,v+_).normalize(),i[3].setComponents(c-o,d-u,y-g,v-_).normalize(),i[4].setComponents(c-a,d-h,y-x,v-b).normalize(),t===wi)i[5].setComponents(c+a,d+h,y+x,v+b).normalize();else if(t===Ac)i[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function PM(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Br=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],x=[],y=[];for(let p=0;p<u;p++){let _=p*d-o;for(let b=0;b<l;b++){let v=b*h-r;g.push(v,-_,0),x.push(0,0,1),y.push(b/a),y.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let b=_+l*p,v=_+l*(p+1),P=_+1+l*(p+1),R=_+1+l*p;f.push(b,v,R),f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tS=`#define PI 3.141592653589793
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
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iS=`vec3 transformedNormal = objectNormal;
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
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
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
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
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
#endif`,IS=`struct PhysicalMaterial {
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
}`,PS=`
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,US=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HS=`#if defined( USE_POINTS_UV )
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
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ew=`#ifdef USE_NORMALMAP
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
#endif`,tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ow=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gw=`float getShadowMask() {
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
}`,yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
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
#endif`,_w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lw=`uniform sampler2D t2D;
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`#include <common>
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
}`,Fw=`#if DEPTH_PACKING == 3200
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
}`,Bw=`#define DISTANCE
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
}`,zw=`#define DISTANCE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,qw=`#include <common>
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
}`,$w=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,Yw=`#define LAMBERT
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
}`,jw=`#define MATCAP
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
}`,Zw=`#define MATCAP
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
}`,Kw=`#define NORMAL
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
}`,Jw=`#define NORMAL
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
}`,Qw=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,tE=`#define STANDARD
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
}`,nE=`#define STANDARD
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
}`,iE=`#define TOON
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
}`,sE=`#define TOON
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
}`,rE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,cE=`uniform vec3 color;
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
}`,lE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:LM,alphahash_pars_fragment:DM,alphamap_fragment:NM,alphamap_pars_fragment:UM,alphatest_fragment:kM,alphatest_pars_fragment:OM,aomap_fragment:FM,aomap_pars_fragment:BM,batching_pars_vertex:zM,batching_vertex:HM,begin_vertex:VM,beginnormal_vertex:GM,bsdfs:WM,iridescence_fragment:qM,bumpmap_pars_fragment:$M,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:ZM,color_fragment:KM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:sS,displacementmap_vertex:rS,emissivemap_fragment:oS,emissivemap_pars_fragment:aS,colorspace_fragment:cS,colorspace_pars_fragment:lS,envmap_fragment:uS,envmap_common_pars_fragment:hS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:wS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:yS,fog_pars_fragment:xS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:vS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:MS,lights_pars_begin:SS,lights_toon_fragment:ES,lights_toon_pars_fragment:TS,lights_phong_fragment:AS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:IS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:DS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:US,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:OS,map_fragment:FS,map_pars_fragment:BS,map_particle_fragment:zS,map_particle_pars_fragment:HS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:GS,morphinstance_vertex:WS,morphcolor_vertex:qS,morphnormal_vertex:$S,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:jS,normal_fragment_maps:ZS,normal_pars_fragment:KS,normal_pars_vertex:JS,normal_vertex:QS,normalmap_pars_fragment:ew,clearcoat_normal_fragment_begin:tw,clearcoat_normal_fragment_maps:nw,clearcoat_pars_fragment:iw,iridescence_pars_fragment:sw,opaque_fragment:rw,packing:ow,premultiplied_alpha_fragment:aw,project_vertex:cw,dithering_fragment:lw,dithering_pars_fragment:uw,roughnessmap_fragment:hw,roughnessmap_pars_fragment:dw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:pw,shadowmap_vertex:mw,shadowmask_pars_fragment:gw,skinbase_vertex:yw,skinning_pars_vertex:xw,skinning_vertex:_w,skinnormal_vertex:vw,specularmap_fragment:bw,specularmap_pars_fragment:Mw,tonemapping_fragment:Sw,tonemapping_pars_fragment:ww,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:Rw,uv_vertex:Cw,worldpos_vertex:Iw,background_vert:Pw,background_frag:Lw,backgroundCube_vert:Dw,backgroundCube_frag:Nw,cube_vert:Uw,cube_frag:kw,depth_vert:Ow,depth_frag:Fw,distanceRGBA_vert:Bw,distanceRGBA_frag:zw,equirect_vert:Hw,equirect_frag:Vw,linedashed_vert:Gw,linedashed_frag:Ww,meshbasic_vert:qw,meshbasic_frag:$w,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:jw,meshmatcap_frag:Zw,meshnormal_vert:Kw,meshnormal_frag:Jw,meshphong_vert:Qw,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:sE,points_vert:rE,points_frag:oE,shadow_vert:aE,shadow_frag:cE,sprite_vert:lE,sprite_frag:uE},ue={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ti={basic:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:an([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:an([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:an([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:an([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:an([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:an([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:an([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:an([ue.lights,ue.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ac={r:0,b:0,g:0},Cs=new si,hE=new ke;function dE(n,e,t,i,s,r,o){let a=new ye(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1,v=g(_);v===null?p(a,c):v&&v.isColor&&(p(v,1),b=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===nl)?(u===void 0&&(u=new Y(new Gt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Fr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Cs.copy(b.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Cs)),u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==dt,(h!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Y(new Br(2,2),new An({name:"BackgroundMaterial",uniforms:Fr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(ac,Jg(n)),i.buffers.color.setClear(ac.r,ac.g,ac.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:y}}function fE(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,T,O,F,W){let Q=!1,$=h(F,O,T);r!==$&&(r=$,l(r.object)),Q=f(M,F,O,W),Q&&g(M,F,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(M,T,O,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,T,O){let F=O.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Q=W[T.id];Q===void 0&&(Q={},W[T.id]=Q);let $=Q[F];return $===void 0&&($=d(c()),Q[F]=$),$}function d(M){let T=[],O=[],F=[];for(let W=0;W<t;W++)T[W]=0,O[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,T,O,F){let W=r.attributes,Q=T.attributes,$=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let z=W[q],Z=Q[q];if(Z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),z===void 0||z.attribute!==Z||Z&&z.data!==Z.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(M,T,O,F){let W={},Q=T.attributes,$=0,ne=O.getAttributes();for(let q in ne)if(ne[q].location>=0){let z=Q[q];z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(z=M.instanceColor));let Z={};Z.attribute=z,z&&z.data&&(Z.data=z.data),W[q]=Z,$++}r.attributes=W,r.attributesNum=$,r.index=F}function x(){let M=r.newAttributes;for(let T=0,O=M.length;T<O;T++)M[T]=0}function y(M){p(M,0)}function p(M,T){let O=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),W[M]!==T&&(n.vertexAttribDivisor(M,T),W[M]=T)}function _(){let M=r.newAttributes,T=r.enabledAttributes;for(let O=0,F=T.length;O<F;O++)T[O]!==M[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function b(M,T,O,F,W,Q,$){$===!0?n.vertexAttribIPointer(M,T,O,W,Q):n.vertexAttribPointer(M,T,O,F,W,Q)}function v(M,T,O,F){x();let W=F.attributes,Q=O.getAttributes(),$=T.defaultAttributeValues;for(let ne in Q){let q=Q[ne];if(q.location>=0){let te=W[ne];if(te===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){let z=te.normalized,Z=te.itemSize,ce=e.get(te);if(ce===void 0)continue;let Re=ce.buffer,H=ce.type,ee=ce.bytesPerElement,de=H===n.INT||H===n.UNSIGNED_INT||te.gpuType===Cd;if(te.isInterleavedBufferAttribute){let se=te.data,Ae=se.stride,Ue=te.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<q.locationSize;Be++)p(q.location+Be,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<q.locationSize;Be++)y(q.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Be=0;Be<q.locationSize;Be++)b(q.location+Be,Z/q.locationSize,H,z,Ae*ee,(Ue+Z/q.locationSize*Be)*ee,de)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)p(q.location+se,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<q.locationSize;se++)y(q.location+se);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let se=0;se<q.locationSize;se++)b(q.location+se,Z/q.locationSize,H,z,Z*ee,Z/q.locationSize*se*ee,de)}}else if($!==void 0){let z=$[ne];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(q.location,z);break;case 3:n.vertexAttrib3fv(q.location,z);break;case 4:n.vertexAttrib4fv(q.location,z);break;default:n.vertexAttrib1fv(q.location,z)}}}}_()}function P(){L();for(let M in i){let T=i[M];for(let O in T){let F=T[O];for(let W in F)u(F[W].object),delete F[W];delete T[O]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let T=i[M.id];for(let O in T){let F=T[O];for(let W in F)u(F[W].object),delete F[W];delete T[O]}delete i[M.id]}function I(M){for(let T in i){let O=i[T];if(O[M.id]===void 0)continue;let F=O[M.id];for(let W in F)u(F[W].object),delete F[W];delete O[M.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:_}}function pE(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Qt&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Xn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qn&&!L)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:P,maxSamples:R}}function gE(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Mi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,y=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!y)r?u(null):l();else{let _=r?0:i,b=_*4,v=p.clippingState||null;c.value=v,v=u(g,d,b,f);for(let P=0;P!==b;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,y=null;if(x!==0){if(y=c.value,g!==!0||y===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(y===null||y.length<p)&&(y=new Float32Array(p));for(let b=0,v=f;b!==x;++b,v+=4)o.copy(h[b]).applyMatrix4(_,a),o.normal.toArray(y,v),y[v+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function yE(n){let e=new WeakMap;function t(o,a){return a===fh?o.mapping=Pr:a===ph&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fh||a===ph)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new $h(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var zr=class extends Lc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Er=4,Vm=[.125,.215,.35,.446,.526,.582],Ds=20,Gu=new zr,Gm=new ye,Wu=null,qu=0,$u=0,Xu=!1,Ps=(1+Math.sqrt(5))/2,gr=1/Ps,Wm=[new C(-Ps,gr,0),new C(Ps,gr,0),new C(-gr,0,Ps),new C(gr,0,Ps),new C(0,Ps,-gr),new C(0,Ps,gr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,qu,$u),this._renderer.xr.enabled=Xu,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:aa,format:Qt,colorSpace:nn,depthBuffer:!1},s=qm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xE(r)),this._blurMaterial=_E(r,e,t)}return s}_compileMaterial(e){let t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,i,s){let a=new Ct(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Gm),u.toneMapping=Qi,u.autoClear=!1;let f=new cn({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Y(new Gt,f),x=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,x=!0):(f.color.copy(Gm),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;cc(s,_*b,p>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pr||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;cc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Gu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wm[(s-r-1)%Wm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Y(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),x=r/g,y=isFinite(r)?1+Math.floor(u*x):Ds;y>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);let p=[],_=0;for(let I=0;I<Ds;++I){let L=I/x,E=Math.exp(-L*L/2);p.push(E),I===0?_+=E:I<y&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let v=this._sizeLods[s],P=3*v*(s>b-Er?s-b+Er:0),R=4*(this._cubeSize-v);cc(t,P,R,3*v,2*v),c.setRenderTarget(t),c.render(h,Gu)}};function xE(n){let e=[],t=[],i=[],s=n,r=n-Er+1+Vm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Er?c=Vm[o-n+Er-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,y=2,p=1,_=new Float32Array(x*g*f),b=new Float32Array(y*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,L=R>2?0:-1,E=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];_.set(E,x*g*R),b.set(d,y*g*R);let M=[R,R,R,R,R,R];v.set(M,p*g*R)}let P=new Rt;P.setAttribute("position",new Ot(_,x)),P.setAttribute("uv",new Ot(b,y)),P.setAttribute("faceIndex",new Ot(v,p)),e.push(P),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qm(n,e,t){let i=new Yn(n,e,t);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _E(n,e,t){let i=new Float32Array(Ds),s=new C(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $m(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Xm(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function vE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===fh||c===ph,u=c===Pr||c===Lr;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hr(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Hr(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bE(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ME(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let y=0,p=x.length;y<p;y++)e.remove(x[y])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let y=0,p=x.length;y<p;y++)e.update(x[y],n.ARRAY_BUFFER)}}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let b=0,v=_.length;b<v;b+=3){let P=_[b+0],R=_[b+1],I=_[b+2];d.push(P,R,R,I,I,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let b=0,v=_.length/3-1;b<v;b+=3){let P=b+0,R=b+1,I=b+2;d.push(P,R,R,I,I,P)}}else return;let y=new(Zg(d)?Pc:Ic)(d,1);y.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,y)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function SE(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let y=0;for(let p=0;p<g;p++)y+=f[p];t.update(y,i,1)}function h(d,f,g,x){if(g===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{y.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wE(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EE(n,e,t){let i=new WeakMap,s=new tt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*P*4*h),I=new Cc(R,v,P,h);I.type=qn,I.needsUpdate=!0;let L=b*4;for(let M=0;M<h;M++){let T=y[M],O=p[M],F=_[M],W=v*P*4*M;for(let Q=0;Q<T.count;Q++){let $=Q*L;f===!0&&(s.fromBufferAttribute(T,Q),R[W+$+0]=s.x,R[W+$+1]=s.y,R[W+$+2]=s.z,R[W+$+3]=0),g===!0&&(s.fromBufferAttribute(O,Q),R[W+$+4]=s.x,R[W+$+5]=s.y,R[W+$+6]=s.z,R[W+$+7]=0),x===!0&&(s.fromBufferAttribute(F,Q),R[W+$+8]=s.x,R[W+$+9]=s.y,R[W+$+10]=s.z,R[W+$+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new le(v,P)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function TE(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Nc=class extends Vt{constructor(e,t,i,s,r,o,a,c,l,u=Ar){if(u!==Ar&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ar&&(i=Ns),i===void 0&&u===Nr&&(i=Dr),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},e0=new Vt,Ym=new Nc(1,1),t0=new Cc,n0=new Wh,i0=new Dc,jm=[],Zm=[],Km=new Float32Array(16),Jm=new Float32Array(9),Qm=new Float32Array(4);function Zr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jm[s];if(r===void 0&&(r=new Float32Array(s),jm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ol(n,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function CE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function IE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function PE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Qm.set(i),n.uniformMatrix2fv(this.addr,!1,Qm),Bt(t,i)}}function LE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Jm.set(i),n.uniformMatrix3fv(this.addr,!1,Jm),Bt(t,i)}}function DE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Km.set(i),n.uniformMatrix4fv(this.addr,!1,Km),Bt(t,i)}}function NE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function kE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function OE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function FE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function zE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function HE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function VE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ym.compareFunction=jg,r=Ym):r=e0,t.setTexture2D(e||r,s)}function GE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||n0,s)}function WE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||i0,s)}function qE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||t0,s)}function $E(n){switch(n){case 5126:return AE;case 35664:return RE;case 35665:return CE;case 35666:return IE;case 35674:return PE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return NE;case 35667:case 35671:return UE;case 35668:case 35672:return kE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return BE;case 36295:return zE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return qE}}function XE(n,e){n.uniform1fv(this.addr,e)}function YE(n,e){let t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function jE(n,e){let t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function ZE(n,e){let t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function KE(n,e){let t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JE(n,e){let t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QE(n,e){let t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eT(n,e){n.uniform1iv(this.addr,e)}function tT(n,e){n.uniform2iv(this.addr,e)}function nT(n,e){n.uniform3iv(this.addr,e)}function iT(n,e){n.uniform4iv(this.addr,e)}function sT(n,e){n.uniform1uiv(this.addr,e)}function rT(n,e){n.uniform2uiv(this.addr,e)}function oT(n,e){n.uniform3uiv(this.addr,e)}function aT(n,e){n.uniform4uiv(this.addr,e)}function cT(n,e,t){let i=this.cache,s=e.length,r=ol(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||e0,r[o])}function lT(n,e,t){let i=this.cache,s=e.length,r=ol(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||n0,r[o])}function uT(n,e,t){let i=this.cache,s=e.length,r=ol(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||i0,r[o])}function hT(n,e,t){let i=this.cache,s=e.length,r=ol(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||t0,r[o])}function dT(n){switch(n){case 5126:return XE;case 35664:return YE;case 35665:return jE;case 35666:return ZE;case 35674:return KE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return sT;case 36294:return rT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return hT}}var Xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$E(t.type)}},Yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dT(t.type)}},jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function eg(n,e){n.seq.push(e),n.map[e.id]=e}function fT(n,e,t){let i=n.name,s=i.length;for(Yu.lastIndex=0;;){let r=Yu.exec(i),o=Yu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){eg(t,l===void 0?new Xh(a,n,e):new Yh(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new jh(a),eg(t,h)),t=h}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fT(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function tg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pT=37297,mT=0;function gT(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ng=new Ve;function yT(n){Ke._getMatrix(ng,Ke.workingColorSpace,n);let e=`mat3( ${ng.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case rl:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ig(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gT(n.getShaderSource(e),o)}else return s}function xT(n,e){let t=yT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _T(n,e){let t;switch(e){case Rb:t="Linear";break;case Cb:t="Reinhard";break;case Ib:t="Cineon";break;case Ad:t="ACESFilmic";break;case Lb:t="AgX";break;case Db:t="Neutral";break;case Pb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new C;function vT(){Ke.getLuminanceCoefficients(lc);let n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function MT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ST(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wo(n){return n!==""}function sg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(n){return n.replace(wT,TT)}var ET=new Map;function TT(n,e){let t=We[e];if(t===void 0){let i=ET.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zh(t)}var AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(n){return n.replace(AT,RT)}function RT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ag(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function CT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Lr&&(e="ENVMAP_MODE_REFRACTION"),e}function LT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Tb:e="ENVMAP_BLENDING_MIX";break;case Ab:e="ENVMAP_BLENDING_ADD";break}return e}function DT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function NT(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=CT(t),l=IT(t),u=PT(t),h=LT(t),d=DT(t),f=bT(t),g=MT(r),x=s.createProgram(),y,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(y=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?We.tonemapping_pars_fragment:"",t.toneMapping!==Qi?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,xT("linearToOutputTexel",t.outputColorSpace),vT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Zh(o),o=sg(o,t),o=rg(o,t),a=Zh(a),a=sg(a,t),a=rg(a,t),o=og(o),a=og(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+y+o,v=_+p+a,P=tg(s,s.VERTEX_SHADER,b),R=tg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(T){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(R).trim(),Q=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,R);else{let ne=ig(s,P,"vertex"),q=ig(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+ne+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||W==="")&&($=!1);$&&(T.diagnostics={runnable:Q,programLog:O,vertexShader:{log:F,prefix:y},fragmentShader:{log:W,prefix:p}})}s.deleteShader(P),s.deleteShader(R),L=new Cr(s,x),E=ST(s,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,pT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}var UT=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jh(e),t.set(e,i)),i}},Jh=class{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}};function kT(n,e,t,i,s,r,o){let a=new ea,c=new Kh,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function y(E,M,T,O,F){let W=O.fog,Q=F.geometry,$=E.isMeshStandardMaterial?O.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),q=ne&&ne.mapping===nl?ne.image.height:null,te=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let z=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Z=z!==void 0?z.length:0,ce=0;Q.morphAttributes.position!==void 0&&(ce=1),Q.morphAttributes.normal!==void 0&&(ce=2),Q.morphAttributes.color!==void 0&&(ce=3);let Re,H,ee,de;if(te){let lt=ti[te];Re=lt.vertexShader,H=lt.fragmentShader}else Re=E.vertexShader,H=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),de=c.getFragmentShaderID(E);let se=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,gt=!!E.map,Ze=!!E.matcap,St=!!ne,U=!!E.aoMap,rn=!!E.lightMap,qe=!!E.bumpMap,$e=!!E.normalMap,Ce=!!E.displacementMap,ft=!!E.emissiveMap,Ie=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,B=E.clearcoat>0,K=E.dispersion>0,ie=E.iridescence>0,j=E.sheen>0,Me=E.transmission>0,he=S&&!!E.anisotropyMap,ve=B&&!!E.clearcoatMap,Qe=B&&!!E.clearcoatNormalMap,re=B&&!!E.clearcoatRoughnessMap,be=ie&&!!E.iridescenceMap,Pe=ie&&!!E.iridescenceThicknessMap,De=j&&!!E.sheenColorMap,xe=j&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Ge=!!E.specularColorMap,yt=!!E.specularIntensityMap,D=Me&&!!E.transmissionMap,fe=Me&&!!E.thicknessMap,X=!!E.gradientMap,J=!!E.alphaMap,ge=E.alphaTest>0,pe=!!E.alphaHash,ze=!!E.extensions,At=Qi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(At=n.toneMapping);let Zt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Re,fragmentShader:H,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nn,alphaToCoverage:!!E.alphaToCoverage,map:gt,matcap:Ze,envMap:St,envMapMode:St&&ne.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:rn,bumpMap:qe,normalMap:$e,displacementMap:d&&Ce,emissiveMap:ft,normalMapObjectSpace:$e&&E.normalMapType===Bb,normalMapTangentSpace:$e&&E.normalMapType===Yg,metalnessMap:Ie,roughnessMap:A,anisotropy:S,anisotropyMap:he,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:Qe,clearcoatRoughnessMap:re,dispersion:K,iridescence:ie,iridescenceMap:be,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:yt,transmission:Me,transmissionMap:D,thicknessMap:fe,gradientMap:X,opaque:E.transparent===!1&&E.blending===Tr&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ge,alphaHash:pe,combine:E.combine,mapUv:gt&&x(E.map.channel),aoMapUv:U&&x(E.aoMap.channel),lightMapUv:rn&&x(E.lightMap.channel),bumpMapUv:qe&&x(E.bumpMap.channel),normalMapUv:$e&&x(E.normalMap.channel),displacementMapUv:Ce&&x(E.displacementMap.channel),emissiveMapUv:ft&&x(E.emissiveMap.channel),metalnessMapUv:Ie&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:he&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(E.sheenRoughnessMap.channel),specularMapUv:Xe&&x(E.specularMap.channel),specularColorMapUv:Ge&&x(E.specularColorMap.channel),specularIntensityMapUv:yt&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:fe&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($e||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(gt||J),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:gt&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:ft&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gn,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let T in E.defines)M.push(T),M.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(_(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){let M=g[E.type],T;if(M){let O=ti[M];T=TM.clone(O.uniforms)}else T=E.uniforms;return T}function P(E,M){let T;for(let O=0,F=u.length;O<F;O++){let W=u[O];if(W.cacheKey===M){T=W,++T.usedTimes;break}}return T===void 0&&(T=new NT(n,M,E,r),u.push(T)),T}function R(E){if(--E.usedTimes===0){let M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function I(E){c.remove(E)}function L(){c.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:L}}function OT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function FT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,x,y){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:y},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=y),e++,p}function a(h,d,f,g,x,y){let p=o(h,d,f,g,x,y);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,x,y){let p=o(h,d,f,g,x,y);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||FT),i.length>1&&i.sort(d||cg),s.length>1&&s.sort(d||cg)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function BT(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new lg,n.set(i,[o])):s>=r.length?(o=new lg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function HT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var VT=0;function GT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WT(n){let e=new zT,t=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);let s=new C,r=new ke,o=new ke;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,y=0,p=0,_=0,b=0,v=0,P=0,R=0,I=0;l.sort(GT);for(let E=0,M=l.length;E<M;E++){let T=l[E],O=T.color,F=T.intensity,W=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*F,h+=O.g*F,d+=O.b*F;else if(T.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(T.sh.coefficients[$],F);I++}else if(T.isDirectionalLight){let $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let ne=T.shadow,q=t.get(T);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=T.shadow.matrix,_++}i.directional[f]=$,f++}else if(T.isSpotLight){let $=e.get(T);$.position.setFromMatrixPosition(T.matrixWorld),$.color.copy(O).multiplyScalar(F),$.distance=W,$.coneCos=Math.cos(T.angle),$.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),$.decay=T.decay,i.spot[x]=$;let ne=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,ne.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[x]=ne.matrix,T.castShadow){let q=t.get(T);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=Q,v++}x++}else if(T.isRectAreaLight){let $=e.get(T);$.color.copy(O).multiplyScalar(F),$.halfWidth.set(T.width*.5,0,0),$.halfHeight.set(0,T.height*.5,0),i.rectArea[y]=$,y++}else if(T.isPointLight){let $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),$.distance=T.distance,$.decay=T.decay,T.castShadow){let ne=T.shadow,q=t.get(T);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=T.shadow.matrix,b++}i.point[g]=$,g++}else if(T.isHemisphereLight){let $=e.get(T);$.skyColor.copy(T.color).multiplyScalar(F),$.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[p]=$,p++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==y||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=y,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=y,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=I,i.version=VT++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,y=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let b=l[p];if(b.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(y),h++}else if(b.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(y),f++}else if(b.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(y),o.identity(),r.copy(b.matrixWorld),r.premultiply(y),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(y),d++}else if(b.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(y),x++}}}return{setup:a,setupView:c,state:i}}function ug(n){let e=new WT(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qT(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ug(n),e.set(s,[a])):r>=o.length?(a=new ug(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qh=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ed=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
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
}`;function YT(n,e,t){let i=new ta,s=new le,r=new le,o=new tt,a=new Qh({depthPacking:Fb}),c=new ed,l={},u=t.maxTextureSize,h={[ii]:Lt,[Lt]:ii,[Gn]:Gn},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:$T,fragmentShader:XT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(g,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let p=this.type;this.render=function(R,I,L){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ji),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=p!==bi&&this.type===bi,W=p===bi&&this.type!==bi;for(let Q=0,$=R.length;Q<$;Q++){let ne=R[Q],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let te=q.getFrameExtents();if(s.multiply(te),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,q.mapSize.y=r.y)),q.map===null||F===!0||W===!0){let Z=this.type!==bi?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new Yn(s.x,s.y,Z),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let z=q.getViewportCount();for(let Z=0;Z<z;Z++){let ce=q.getViewport(Z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),O.viewport(o),q.updateMatrices(ne,Z),i=q.getFrustum(),v(I,L,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&_(q,L),q.needsUpdate=!1}p=this.type,y.needsUpdate=!1,n.setRenderTarget(E,M,T)};function _(R,I){let L=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,L,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,L,f,x,null)}function b(R,I,L,E){let M=null,T=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let O=M.uuid,F=I.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let Q=W[F];Q===void 0&&(Q=M.clone(),W[F]=Q,I.addEventListener("dispose",P)),M=Q}if(M.visible=I.visible,M.wireframe=I.wireframe,E===bi?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=n.properties.get(M);O.light=L}return M}function v(R,I,L,E,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===bi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let F=e.update(R),W=R.material;if(Array.isArray(W)){let Q=F.groups;for(let $=0,ne=Q.length;$<ne;$++){let q=Q[$],te=W[q.materialIndex];if(te&&te.visible){let z=b(R,te,E,M);R.onBeforeShadow(n,R,I,L,F,z,q),n.renderBufferDirect(L,null,F,z,R,q),R.onAfterShadow(n,R,I,L,F,z,q)}}}else if(W.visible){let Q=b(R,W,E,M);R.onBeforeShadow(n,R,I,L,F,Q,null),n.renderBufferDirect(L,null,F,Q,R,null),R.onAfterShadow(n,R,I,L,F,Q,null)}}let O=R.children;for(let F=0,W=O.length;F<W;F++)v(O[F],I,L,E,M)}function P(R){R.target.removeEventListener("dispose",P);for(let L in l){let E=l[L],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var jT={[oh]:ah,[ch]:hh,[lh]:dh,[Ir]:uh,[ah]:oh,[hh]:ch,[dh]:lh,[uh]:Ir};function ZT(n,e){function t(){let D=!1,fe=new tt,X=null,J=new tt(0,0,0,0);return{setMask:function(ge){X!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){D=ge},setClear:function(ge,pe,ze,At,Zt){Zt===!0&&(ge*=At,pe*=At,ze*=At),fe.set(ge,pe,ze,At),J.equals(fe)===!1&&(n.clearColor(ge,pe,ze,At),J.copy(fe))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,X=null,J=null,ge=null;return{setReversed:function(pe){if(fe!==pe){let ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let At=ge;ge=null,this.setClear(At)}fe=pe},getReversed:function(){return fe},setTest:function(pe){pe?se(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(pe){X!==pe&&!D&&(n.depthMask(pe),X=pe)},setFunc:function(pe){if(fe&&(pe=jT[pe]),J!==pe){switch(pe){case oh:n.depthFunc(n.NEVER);break;case ah:n.depthFunc(n.ALWAYS);break;case ch:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case uh:n.depthFunc(n.GEQUAL);break;case hh:n.depthFunc(n.GREATER);break;case dh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ge!==pe&&(fe&&(pe=1-pe),n.clearDepth(pe),ge=pe)},reset:function(){D=!1,X=null,J=null,ge=null,fe=!1}}}function s(){let D=!1,fe=null,X=null,J=null,ge=null,pe=null,ze=null,At=null,Zt=null;return{setTest:function(lt){D||(lt?se(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!D&&(n.stencilMask(lt),fe=lt)},setFunc:function(lt,Fn,fi){(X!==lt||J!==Fn||ge!==fi)&&(n.stencilFunc(lt,Fn,fi),X=lt,J=Fn,ge=fi)},setOp:function(lt,Fn,fi){(pe!==lt||ze!==Fn||At!==fi)&&(n.stencilOp(lt,Fn,fi),pe=lt,ze=Fn,At=fi)},setLocked:function(lt){D=lt},setClear:function(lt){Zt!==lt&&(n.clearStencil(lt),Zt=lt)},reset:function(){D=!1,fe=null,X=null,J=null,ge=null,pe=null,ze=null,At=null,Zt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,y=null,p=null,_=null,b=null,v=null,P=null,R=null,I=new ye(0,0,0),L=0,E=!1,M=null,T=null,O=null,F=null,W=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ne=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ne>=2);let te=null,z={},Z=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Re=new tt().fromArray(Z),H=new tt().fromArray(ce);function ee(D,fe,X,J){let ge=new Uint8Array(4),pe=n.createTexture();n.bindTexture(D,pe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<X;ze++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(fe+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return pe}let de={};de[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ir),qe(!1),$e(pm),se(n.CULL_FACE),U(Ji);function se(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ue(D,fe){return h[D]!==fe?(n.bindFramebuffer(D,fe),h[D]=fe,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Be(D,fe){let X=f,J=!1;if(D){X=d.get(fe),X===void 0&&(X=[],d.set(fe,X));let ge=D.textures;if(X.length!==ge.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)X[pe]=n.COLOR_ATTACHMENT0+pe;X.length=ge.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function gt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let Ze={[Ls]:n.FUNC_ADD,[lb]:n.FUNC_SUBTRACT,[ub]:n.FUNC_REVERSE_SUBTRACT};Ze[hb]=n.MIN,Ze[db]=n.MAX;let St={[fb]:n.ZERO,[pb]:n.ONE,[mb]:n.SRC_COLOR,[sh]:n.SRC_ALPHA,[bb]:n.SRC_ALPHA_SATURATE,[_b]:n.DST_COLOR,[yb]:n.DST_ALPHA,[gb]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[vb]:n.ONE_MINUS_DST_COLOR,[xb]:n.ONE_MINUS_DST_ALPHA,[Mb]:n.CONSTANT_COLOR,[Sb]:n.ONE_MINUS_CONSTANT_COLOR,[wb]:n.CONSTANT_ALPHA,[Eb]:n.ONE_MINUS_CONSTANT_ALPHA};function U(D,fe,X,J,ge,pe,ze,At,Zt,lt){if(D===Ji){x===!0&&(Ae(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),D!==cb){if(D!==y||lt!==E){if((p!==Ls||v!==Ls)&&(n.blendEquation(n.FUNC_ADD),p=Ls,v=Ls),lt)switch(D){case Tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mm:n.blendFunc(n.ONE,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ym:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ym:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,b=null,P=null,R=null,I.set(0,0,0),L=0,y=D,E=lt}return}ge=ge||fe,pe=pe||X,ze=ze||J,(fe!==p||ge!==v)&&(n.blendEquationSeparate(Ze[fe],Ze[ge]),p=fe,v=ge),(X!==_||J!==b||pe!==P||ze!==R)&&(n.blendFuncSeparate(St[X],St[J],St[pe],St[ze]),_=X,b=J,P=pe,R=ze),(At.equals(I)===!1||Zt!==L)&&(n.blendColor(At.r,At.g,At.b,Zt),I.copy(At),L=Zt),y=D,E=!1}function rn(D,fe){D.side===Gn?Ae(n.CULL_FACE):se(n.CULL_FACE);let X=D.side===Lt;fe&&(X=!X),qe(X),D.blending===Tr&&D.transparent===!1?U(Ji):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function $e(D){D!==ob?(se(n.CULL_FACE),D!==T&&(D===pm?n.cullFace(n.BACK):D===ab?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),T=D}function Ce(D){D!==O&&($&&n.lineWidth(D),O=D)}function ft(D,fe,X){D?(se(n.POLYGON_OFFSET_FILL),(F!==fe||W!==X)&&(n.polygonOffset(fe,X),F=fe,W=X)):Ae(n.POLYGON_OFFSET_FILL)}function Ie(D){D?se(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+Q-1),te!==D&&(n.activeTexture(D),te=D)}function S(D,fe,X){X===void 0&&(te===null?X=n.TEXTURE0+Q-1:X=te);let J=z[X];J===void 0&&(J={type:void 0,texture:void 0},z[X]=J),(J.type!==D||J.texture!==fe)&&(te!==X&&(n.activeTexture(X),te=X),n.bindTexture(D,fe||de[D]),J.type=D,J.texture=fe)}function B(){let D=z[te];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function xe(D){H.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),H.copy(D))}function Xe(D,fe){let X=l.get(fe);X===void 0&&(X=new WeakMap,l.set(fe,X));let J=X.get(D);J===void 0&&(J=n.getUniformBlockIndex(fe,D.name),X.set(D,J))}function Ge(D,fe){let J=l.get(fe).get(D);c.get(fe)!==J&&(n.uniformBlockBinding(fe,J,D.__bindingPointIndex),c.set(fe,J))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,z={},h={},d=new WeakMap,f=[],g=null,x=!1,y=null,p=null,_=null,b=null,v=null,P=null,R=null,I=new ye(0,0,0),L=0,E=!1,M=null,T=null,O=null,F=null,W=null,Re.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Ae,bindFramebuffer:Ue,drawBuffers:Be,useProgram:gt,setBlending:U,setMaterial:rn,setFlipSided:qe,setCullFace:$e,setLineWidth:Ce,setPolygonOffset:ft,setScissorTest:Ie,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:be,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:Qe,texStorage3D:re,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:De,viewport:xe,reset:yt}}function hg(n,e,t,i){let s=KT(i);switch(t){case Hg:return n*e;case Gg:return n*e;case Wg:return n*e*2;case Ld:return n*e/s.components*s.byteLength;case Dd:return n*e/s.components*s.byteLength;case qg:return n*e*2/s.components*s.byteLength;case Nd:return n*e*2/s.components*s.byteLength;case Vg:return n*e*3/s.components*s.byteLength;case Qt:return n*e*4/s.components*s.byteLength;case Ud:return n*e*4/s.components*s.byteLength;case bc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(n,16)*Math.max(e,8)/4;case mh:case yh:return Math.max(n,8)*Math.max(e,8)/2;case _h:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ec:case kh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $g:case Fh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bh:case zh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KT(n){switch(n){case Xn:case Fg:return{byteLength:1,components:1};case Jo:case Bg:case aa:return{byteLength:2,components:1};case Id:case Pd:return{byteLength:2,components:4};case Ns:case Cd:case qn:return{byteLength:4,components:1};case zg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function JT(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Qo("canvas")}function x(A,S,B){let K=1,ie=Ie(A);if((ie.width>B||ie.height>B)&&(K=B/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(K*ie.width),Me=Math.floor(K*ie.height);h===void 0&&(h=g(j,Me));let he=S?g(j,Me):h;return he.width=j,he.height=Me,he.getContext("2d").drawImage(A,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Me+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function y(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,S,B,K,ie=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),S===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),S===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){let Me=ie?rl:Ke.getTransfer(K);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=Me===dt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(A,S){let B;return A?S===null||S===Ns||S===Dr?B=n.DEPTH24_STENCIL8:S===qn?B=n.DEPTH32F_STENCIL8:S===Jo&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ns||S===Dr?B=n.DEPTH_COMPONENT24:S===qn?B=n.DEPTH_COMPONENT32F:S===Jo&&(B=n.DEPTH_COMPONENT16),B}function P(A,S){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==$t?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),L(S),S.isVideoTexture&&u.delete(S)}function I(A){let S=A.target;S.removeEventListener("dispose",I),M(S)}function L(A){let S=i.get(A);if(S.__webglInit===void 0)return;let B=A.source,K=d.get(B);if(K){let ie=K[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(A),Object.keys(K).length===0&&d.delete(B)}i.remove(A)}function E(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let B=A.source,K=d.get(B);delete K[S.__cacheKey],o.memory.textures--}function M(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ie=0;ie<S.__webglFramebuffer[K].length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[K][ie]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=A.textures;for(let K=0,ie=B.length;K<ie;K++){let j=i.get(B[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(A)}let T=0;function O(){T=0}function F(){let A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function W(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Q(A,S){let B=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,A,S);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function $(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){H(B,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function ne(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){H(B,A,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function q(A,S){let B=i.get(A);if(A.version>0&&B.__version!==A.version){ee(B,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}let te={[bn]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},z={[en]:n.NEAREST,[Rd]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},Z={[zb]:n.NEVER,[$b]:n.ALWAYS,[Hb]:n.LESS,[jg]:n.LEQUAL,[Vb]:n.EQUAL,[qb]:n.GEQUAL,[Gb]:n.GREATER,[Wb]:n.NOTEQUAL};function ce(A,S){if(S.type===qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===$t||S.magFilter===qo||S.magFilter===Mr||S.magFilter===ni||S.minFilter===$t||S.minFilter===qo||S.minFilter===Mr||S.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,te[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,te[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,te[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,z[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==Mr&&S.minFilter!==ni||S.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Re(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let K=S.source,ie=d.get(K);ie===void 0&&(ie={},d.set(K,ie));let j=W(S);if(j!==A.__cacheKey){ie[j]===void 0&&(ie[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[j].usedTimes++;let Me=ie[A.__cacheKey];Me!==void 0&&(ie[A.__cacheKey].usedTimes--,Me.usedTimes===0&&E(S)),A.__cacheKey=j,A.__webglTexture=ie[j].texture}return B}function H(A,S,B){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);let ie=Re(A,S),j=S.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+B);let Me=i.get(j);if(j.version!==Me.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);let he=Ke.getPrimaries(Ke.workingColorSpace),ve=S.colorSpace===ji?null:Ke.getPrimaries(S.colorSpace),Qe=S.colorSpace===ji||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let re=x(S.image,!1,s.maxTextureSize);re=ft(S,re);let be=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),De=b(S.internalFormat,be,Pe,S.colorSpace,S.isVideoTexture);ce(K,S);let xe,Xe=S.mipmaps,Ge=S.isVideoTexture!==!0,yt=Me.__version===void 0||ie===!0,D=j.dataReady,fe=P(S,re);if(S.isDepthTexture)De=v(S.format===Nr,S.type),yt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,be,Pe,null));else if(S.isDataTexture)if(Xe.length>0){Ge&&yt&&t.texStorage2D(n.TEXTURE_2D,fe,De,Xe[0].width,Xe[0].height);for(let X=0,J=Xe.length;X<J;X++)xe=Xe[X],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,be,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,X,De,xe.width,xe.height,0,be,Pe,xe.data);S.generateMipmaps=!1}else Ge?(yt&&t.texStorage2D(n.TEXTURE_2D,fe,De,re.width,re.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,be,Pe,re.data)):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,be,Pe,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,De,Xe[0].width,Xe[0].height,re.depth);for(let X=0,J=Xe.length;X<J;X++)if(xe=Xe[X],S.format!==Qt)if(be!==null)if(Ge){if(D)if(S.layerUpdates.size>0){let ge=hg(xe.width,xe.height,S.format,S.type);for(let pe of S.layerUpdates){let ze=xe.data.subarray(pe*ge/xe.data.BYTES_PER_ELEMENT,(pe+1)*ge/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pe,xe.width,xe.height,1,be,ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,re.depth,be,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,De,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,re.depth,be,Pe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,De,xe.width,xe.height,re.depth,0,be,Pe,xe.data)}else{Ge&&yt&&t.texStorage2D(n.TEXTURE_2D,fe,De,Xe[0].width,Xe[0].height);for(let X=0,J=Xe.length;X<J;X++)xe=Xe[X],S.format!==Qt?be!==null?Ge?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,be,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,X,De,xe.width,xe.height,0,be,Pe,xe.data)}else if(S.isDataArrayTexture)if(Ge){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,De,re.width,re.height,re.depth),D)if(S.layerUpdates.size>0){let X=hg(re.width,re.height,S.format,S.type);for(let J of S.layerUpdates){let ge=re.data.subarray(J*X/re.data.BYTES_PER_ELEMENT,(J+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,be,Pe,ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,Pe,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,be,Pe,re.data);else if(S.isData3DTexture)Ge?(yt&&t.texStorage3D(n.TEXTURE_3D,fe,De,re.width,re.height,re.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,Pe,re.data)):t.texImage3D(n.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,be,Pe,re.data);else if(S.isFramebufferTexture){if(yt)if(Ge)t.texStorage2D(n.TEXTURE_2D,fe,De,re.width,re.height);else{let X=re.width,J=re.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,De,X,J,0,be,Pe,null),X>>=1,J>>=1}}else if(Xe.length>0){if(Ge&&yt){let X=Ie(Xe[0]);t.texStorage2D(n.TEXTURE_2D,fe,De,X.width,X.height)}for(let X=0,J=Xe.length;X<J;X++)xe=Xe[X],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,be,Pe,xe):t.texImage2D(n.TEXTURE_2D,X,De,be,Pe,xe);S.generateMipmaps=!1}else if(Ge){if(yt){let X=Ie(re);t.texStorage2D(n.TEXTURE_2D,fe,De,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Pe,re)}else t.texImage2D(n.TEXTURE_2D,0,De,be,Pe,re);y(S)&&p(K),Me.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ee(A,S,B){if(S.image.length!==6)return;let K=Re(A,S),ie=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let j=i.get(ie);if(ie.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+B);let Me=Ke.getPrimaries(Ke.workingColorSpace),he=S.colorSpace===ji?null:Ke.getPrimaries(S.colorSpace),ve=S.colorSpace===ji||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,be=[];for(let J=0;J<6;J++)!Qe&&!re?be[J]=x(S.image[J],!0,s.maxCubemapSize):be[J]=re?S.image[J].image:S.image[J],be[J]=ft(S,be[J]);let Pe=be[0],De=r.convert(S.format,S.colorSpace),xe=r.convert(S.type),Xe=b(S.internalFormat,De,xe,S.colorSpace),Ge=S.isVideoTexture!==!0,yt=j.__version===void 0||K===!0,D=ie.dataReady,fe=P(S,Pe);ce(n.TEXTURE_CUBE_MAP,S);let X;if(Qe){Ge&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Xe,Pe.width,Pe.height);for(let J=0;J<6;J++){X=be[J].mipmaps;for(let ge=0;ge<X.length;ge++){let pe=X[ge];S.format!==Qt?De!==null?Ge?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,De,xe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Xe,pe.width,pe.height,0,De,xe,pe.data)}}}else{if(X=S.mipmaps,Ge&&yt){X.length>0&&fe++;let J=Ie(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(re){Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be[J].width,be[J].height,De,xe,be[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,be[J].width,be[J].height,0,De,xe,be[J].data);for(let ge=0;ge<X.length;ge++){let ze=X[ge].image[J].image;Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,ze.width,ze.height,De,xe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Xe,ze.width,ze.height,0,De,xe,ze.data)}}else{Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,xe,be[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,De,xe,be[J]);for(let ge=0;ge<X.length;ge++){let pe=X[ge];Ge?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,De,xe,pe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Xe,De,xe,pe.image[J])}}}y(S)&&p(n.TEXTURE_CUBE_MAP),j.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,B,K,ie,j){let Me=r.convert(B.format,B.colorSpace),he=r.convert(B.type),ve=b(B.internalFormat,Me,he,B.colorSpace),Qe=i.get(S),re=i.get(B);if(re.__renderTarget=S,!Qe.__hasExternalTextures){let be=Math.max(1,S.width>>j),Pe=Math.max(1,S.height>>j);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,ve,be,Pe,S.depth,0,Me,he,null):t.texImage2D(ie,j,ve,be,Pe,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ie,re.__webglTexture,0,qe(S)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ie,re.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(A,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){let K=S.depthTexture,ie=K&&K.isDepthTexture?K.type:null,j=v(S.stencilBuffer,ie),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=qe(S);$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,j,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{let K=S.textures;for(let ie=0;ie<K.length;ie++){let j=K[ie],Me=r.convert(j.format,j.colorSpace),he=r.convert(j.type),ve=b(j.internalFormat,Me,he,j.colorSpace),Qe=qe(S);B&&$e(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ve,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,ve,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ve,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);let ie=K.__webglTexture,j=qe(S);if(S.depthTexture.format===Ar)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Nr)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ue(A){let S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=n.createRenderbuffer(),se(S.__webglDepthbuffer[K],A,!1);else{let ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),se(S.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(A,S,B){let K=i.get(A);S!==void 0&&de(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ue(A)}function gt(A){let S=A.texture,B=i.get(A),K=i.get(S);A.addEventListener("dispose",I);let ie=A.textures,j=A.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ve=0;ve<S.mipmaps.length;ve++)B.__webglFramebuffer[he][ve]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let he=0,ve=ie.length;he<ve;he++){let Qe=i.get(ie[he]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&$e(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){let ve=ie[he];B.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[he]);let Qe=r.convert(ve.format,ve.colorSpace),re=r.convert(ve.type),be=b(ve.internalFormat,Qe,re,ve.colorSpace,A.isXRRenderTarget===!0),Pe=qe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,B.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),se(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ce(n.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)de(B.__webglFramebuffer[he][ve],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else de(B.__webglFramebuffer[he],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,ve=ie.length;he<ve;he++){let Qe=ie[he],re=i.get(Qe);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ce(n.TEXTURE_2D,Qe),de(B.__webglFramebuffer,A,Qe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),y(Qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),ce(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)de(B.__webglFramebuffer[ve],A,S,n.COLOR_ATTACHMENT0,he,ve);else de(B.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,he,0);y(S)&&p(he),t.unbindTexture()}A.depthBuffer&&Ue(A)}function Ze(A){let S=A.textures;for(let B=0,K=S.length;B<K;B++){let ie=S[B];if(y(ie)){let j=_(A),Me=i.get(ie).__webglTexture;t.bindTexture(j,Me),p(j),t.unbindTexture()}}}let St=[],U=[];function rn(A){if(A.samples>0){if($e(A)===!1){let S=A.textures,B=A.width,K=A.height,ie=n.COLOR_BUFFER_BIT,j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),he=S.length>1;if(he)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let Qe=i.get(S[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,ie,n.NEAREST),c===!0&&(St.length=0,U.length=0,St.push(n.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(St.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let Qe=i.get(S[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function qe(A){return Math.min(s.maxSamples,A.samples)}function $e(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(A){let S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ft(A,S){let B=A.colorSpace,K=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==nn&&B!==ji&&(Ke.getTransfer(B)===dt?(K!==Qt||ie!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=Be,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=$e}function QT(n,e){function t(i,s=ji){let r,o=Ke.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Id)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fg)return n.BYTE;if(i===Bg)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===Cd)return n.INT;if(i===Ns)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===aa)return n.HALF_FLOAT;if(i===Hg)return n.ALPHA;if(i===Vg)return n.RGB;if(i===Qt)return n.RGBA;if(i===Gg)return n.LUMINANCE;if(i===Wg)return n.LUMINANCE_ALPHA;if(i===Ar)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===Ld)return n.RED;if(i===Dd)return n.RED_INTEGER;if(i===qg)return n.RG;if(i===Nd)return n.RG_INTEGER;if(i===Ud)return n.RGBA_INTEGER;if(i===bc||i===Mc||i===Sc||i===wc)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===yh||i===xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===vh||i===bh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_h||i===vh)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mh||i===Sh||i===wh||i===Eh||i===Th||i===Ah||i===Rh||i===Ch||i===Ih||i===Ph||i===Lh||i===Dh||i===Nh||i===Uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Th)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ah)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===kh||i===Oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$g||i===Fh||i===Bh||i===zh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var td=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Oe=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},e1={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),p=this._getHandJoint(l,x);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new An({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends Ti{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=new nd,y=t.getContextAttributes(),p=null,_=null,b=[],v=[],P=new le,R=null,I=new Ct;I.viewport=new tt;let L=new Ct;L.viewport=new tt;let E=[I,L],M=new td,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=b[H];return ee===void 0&&(ee=new Yo,b[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=b[H];return ee===void 0&&(ee=new Yo,b[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=b[H];return ee===void 0&&(ee=new Yo,b[H]=ee),ee.getHandSpace()};function F(H){let ee=v.indexOf(H.inputSource);if(ee===-1)return;let de=b[ee];de!==void 0&&(de.update(H.inputSource,H.frame,l||o),de.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let H=0;H<b.length;H++){let ee=v[H];ee!==null&&(v[H]=null,b[H].disconnect(ee))}T=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,de=null,se=null;y.depth&&(se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?Nr:Ar,de=y.stencil?Dr:Ns);let Ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Yn(d.textureWidth,d.textureHeight,{format:Qt,type:Xn,depthTexture:new Nc(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(H){for(let ee=0;ee<H.removed.length;ee++){let de=H.removed[ee],se=v.indexOf(de);se>=0&&(v[se]=null,b[se].disconnect(de))}for(let ee=0;ee<H.added.length;ee++){let de=H.added[ee],se=v.indexOf(de);if(se===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=v.length){v.push(de),se=Ue;break}else if(v[Ue]===null){v[Ue]=de,se=Ue;break}if(se===-1)break}let Ae=b[se];Ae&&Ae.connect(de)}}let $=new C,ne=new C;function q(H,ee,de){$.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);let se=$.distanceTo(ne),Ae=ee.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),gt=Ae[14]/(Ae[10]+1),Ze=(Ae[9]+1)/Ae[5],St=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],rn=(Ue[8]+1)/Ue[0],qe=Be*U,$e=Be*rn,Ce=se/(-U+rn),ft=Ce*-U;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ft),H.translateZ(Ce),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ae[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ie=Be+Ce,A=gt+Ce,S=qe-ft,B=$e+(se-ft),K=Ze*gt/A*Ie,ie=St*gt/A*Ie;H.projectionMatrix.makePerspective(S,B,K,ie,Ie,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function te(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ee=H.near,de=H.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(de=x.depthFar)),M.near=L.near=I.near=ee,M.far=L.far=I.far=de,(T!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,O=M.far),I.layers.mask=H.layers.mask|2,L.layers.mask=H.layers.mask|4,M.layers.mask=I.layers.mask|L.layers.mask;let se=H.parent,Ae=M.cameras;te(M,se);for(let Ue=0;Ue<Ae.length;Ue++)te(Ae[Ue],se);Ae.length===2?q(M,I,L):M.projectionMatrix.copy(I.projectionMatrix),z(H,M,se)};function z(H,ee,de){de===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Or*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Z=null;function ce(H,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let de=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let se=!1;de.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Ue=0;Ue<de.length;Ue++){let Be=de[Ue],gt=null;if(f!==null)gt=f.getViewport(Be);else{let St=h.getViewSubImage(d,Be);gt=St.viewport,Ue===0&&(e.setRenderTargetTextures(_,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(_))}let Ze=E[Ue];Ze===void 0&&(Ze=new Ct,Ze.layers.enable(Ue),Ze.viewport=new tt,E[Ue]=Ze),Ze.matrix.fromArray(Be.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Be.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(gt.x,gt.y,gt.width,gt.height),Ue===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Ze)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let Ue=h.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,s.renderState)}}for(let de=0;de<b.length;de++){let se=v[de],Ae=b[de];se!==null&&Ae!==void 0&&Ae.update(se,ee,l||o)}Z&&Z(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Re=new Qg;Re.setAnimationLoop(ce),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}},Is=new si,i1=new ke;function s1(n,e){function t(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function i(y,p){p.color.getRGB(y.fogColor.value,Jg(n)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function s(y,p,_,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(y,p):p.isMeshToonMaterial?(r(y,p),h(y,p)):p.isMeshPhongMaterial?(r(y,p),u(y,p)):p.isMeshStandardMaterial?(r(y,p),d(y,p),p.isMeshPhysicalMaterial&&f(y,p,v)):p.isMeshMatcapMaterial?(r(y,p),g(y,p)):p.isMeshDepthMaterial?r(y,p):p.isMeshDistanceMaterial?(r(y,p),x(y,p)):p.isMeshNormalMaterial?r(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&a(y,p)):p.isPointsMaterial?c(y,p,_,b):p.isSpriteMaterial?l(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,t(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,t(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Lt&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,t(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Lt&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,t(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,t(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,v=_.envMapRotation;b&&(y.envMap.value=b,Is.copy(v),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),y.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(Is)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform))}function a(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function c(y,p,_,b){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*_,y.scale.value=b*.5,p.map&&(y.map.value=p.map,t(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,t(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function l(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,t(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,t(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function u(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function h(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function d(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function f(y,p,_){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=_.texture,y.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,y.specularIntensityMapTransform))}function g(y,p){p.matcap&&(y.matcap.value=p.matcap)}function x(y,p){let _=e.get(p).light;y.referencePosition.value.setFromMatrixPosition(_.matrixWorld),y.nearDistance.value=_.shadow.camera.near,y.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let v=b.program;i.uniformBlockBinding(_,v)}function l(_,b){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",y));let P=b.program;i.updateUBOMapping(_,P);let R=e.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function u(_){let b=h();_.__bindingPointIndex=b;let v=n.createBuffer(),P=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],v=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=v.length;R<I;R++){let L=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,M=L.length;E<M;E++){let T=L[E];if(f(T,R,E,P)===!0){let O=T.__offset,F=Array.isArray(T.value)?T.value:[T.value],W=0;for(let Q=0;Q<F.length;Q++){let $=F[Q],ne=x($);typeof $=="number"||typeof $=="boolean"?(T.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,O+W,T.__data)):$.isMatrix3?(T.__data[0]=$.elements[0],T.__data[1]=$.elements[1],T.__data[2]=$.elements[2],T.__data[3]=0,T.__data[4]=$.elements[3],T.__data[5]=$.elements[4],T.__data[6]=$.elements[5],T.__data[7]=0,T.__data[8]=$.elements[6],T.__data[9]=$.elements[7],T.__data[10]=$.elements[8],T.__data[11]=0):($.toArray(T.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,b,v,P){let R=_.value,I=b+"_"+v;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{let L=P[I];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[I]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(_){let b=_.uniforms,v=0,P=16;for(let I=0,L=b.length;I<L;I++){let E=Array.isArray(b[I])?b[I]:[b[I]];for(let M=0,T=E.length;M<T;M++){let O=E[M],F=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Q=F.length;W<Q;W++){let $=F[W],ne=x($),q=v%P,te=q%ne.boundary,z=q+te;v+=te,z!==0&&P-z<ne.storage&&(v+=P-z),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=ne.storage}}}let R=v%P;return R>0&&(v+=P-R),_.__size=v,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Uc=class{constructor(e={}){let{canvas:t=lM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),y=null,p=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this.toneMapping=Qi,this.toneMappingExposure=1;let v=this,P=!1,R=0,I=0,L=null,E=-1,M=null,T=new tt,O=new tt,F=null,W=new ye(0),Q=0,$=t.width,ne=t.height,q=1,te=null,z=null,Z=new tt(0,0,$,ne),ce=new tt(0,0,$,ne),Re=!1,H=new ta,ee=!1,de=!1,se=new ke,Ae=new ke,Ue=new C,Be=new tt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function St(){return L===null?q:1}let U=i;function rn(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){let N="webgl2";if(U=rn(N,w),U===null)throw rn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qe,$e,Ce,ft,Ie,A,S,B,K,ie,j,Me,he,ve,Qe,re,be,Pe,De,xe,Xe,Ge,yt,D;function fe(){qe=new bE(U),qe.init(),Ge=new QT(U,qe),$e=new mE(U,qe,e,Ge),Ce=new ZT(U,qe),$e.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),ft=new wE(U),Ie=new OT,A=new JT(U,qe,Ce,Ie,$e,Ge,ft),S=new yE(v),B=new vE(v),K=new PM(U),yt=new fE(U,K),ie=new ME(U,K,ft,yt),j=new TE(U,ie,K,ft),De=new EE(U,$e,A),re=new gE(Ie),Me=new kT(v,S,B,qe,$e,yt,re),he=new s1(v,Ie),ve=new BT,Qe=new qT(qe),Pe=new dE(v,S,B,Ce,j,f,c),be=new YT(v,j,$e),D=new r1(U,ft,$e,Ce),xe=new pE(U,qe,ft),Xe=new SE(U,qe,ft),ft.programs=Me.programs,v.capabilities=$e,v.extensions=qe,v.properties=Ie,v.renderLists=ve,v.shadowMap=be,v.state=Ce,v.info=ft}fe();let X=new id(v,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,ne,!1))},this.getSize=function(w){return w.set($,ne)},this.setSize=function(w,N,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,ne=N,t.width=Math.floor(w*q),t.height=Math.floor(N*q),V===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*q,ne*q).floor()},this.setDrawingBufferSize=function(w,N,V){$=w,ne=N,q=V,t.width=Math.floor(w*V),t.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,N,V,G){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,N,V,G),Ce.viewport(T.copy(Z).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,N,V,G){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,N,V,G),Ce.scissor(O.copy(ce).multiplyScalar(q).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){Ce.setScissorTest(Re=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,N=!0,V=!0){let G=0;if(w){let k=!1;if(L!==null){let oe=L.texture.format;k=oe===Ud||oe===Nd||oe===Dd}if(k){let oe=L.texture.type,me=oe===Xn||oe===Ns||oe===Jo||oe===Dr||oe===Id||oe===Pd,Se=Pe.getClearColor(),we=Pe.getClearAlpha(),Fe=Se.r,He=Se.g,Ee=Se.b;me?(g[0]=Fe,g[1]=He,g[2]=Ee,g[3]=we,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Fe,x[1]=He,x[2]=Ee,x[3]=we,U.clearBufferiv(U.COLOR,0,x))}else G|=U.COLOR_BUFFER_BIT}N&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Qe.dispose(),Ie.dispose(),S.dispose(),B.dispose(),j.dispose(),yt.dispose(),D.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",om),X.removeEventListener("sessionend",am),ws.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=ft.autoReset,N=be.enabled,V=be.autoUpdate,G=be.needsUpdate,k=be.type;fe(),ft.autoReset=w,be.enabled=N,be.autoUpdate=V,be.needsUpdate=G,be.type=k}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){let N=w.target;N.removeEventListener("dispose",ze),At(N)}function At(w){Zt(w),Ie.remove(w)}function Zt(w){let N=Ie.get(w).programs;N!==void 0&&(N.forEach(function(V){Me.releaseProgram(V)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,G,k,oe){N===null&&(N=gt);let me=k.isMesh&&k.matrixWorld.determinant()<0,Se=eb(w,N,V,G,k);Ce.setMaterial(G,me);let we=V.index,Fe=1;if(G.wireframe===!0){if(we=ie.getWireframeAttribute(V),we===void 0)return;Fe=2}let He=V.drawRange,Ee=V.attributes.position,it=He.start*Fe,xt=(He.start+He.count)*Fe;oe!==null&&(it=Math.max(it,oe.start*Fe),xt=Math.min(xt,(oe.start+oe.count)*Fe)),we!==null?(it=Math.max(it,0),xt=Math.min(xt,we.count)):Ee!=null&&(it=Math.max(it,0),xt=Math.min(xt,Ee.count));let vt=xt-it;if(vt<0||vt===1/0)return;yt.setup(k,G,Se,V,we);let hn,at=xe;if(we!==null&&(hn=K.get(we),at=Xe,at.setIndex(hn)),k.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*St()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(k.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*St()),k.isLineSegments?at.setMode(U.LINES):k.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else k.isPoints?at.setMode(U.POINTS):k.isSprite&&at.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)at.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Te=k._multiDrawStarts,pi=k._multiDrawCounts,ct=k._multiDrawCount,Bn=we?K.get(we).bytesPerElement:1,nr=Ie.get(G).currentProgram.getUniforms();for(let xn=0;xn<ct;xn++)nr.setValue(U,"_gl_DrawID",xn),at.render(Te[xn]/Bn,pi[xn])}else if(k.isInstancedMesh)at.renderInstances(it,vt,k.count);else if(V.isInstancedBufferGeometry){let Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pi=Math.min(V.instanceCount,Te);at.renderInstances(it,vt,pi)}else at.render(it,vt)};function lt(w,N,V){w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,Ga(w,N,V),w.side=ii,w.needsUpdate=!0,Ga(w,N,V),w.side=Gn):Ga(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),p=Qe.get(V),p.init(N),b.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let G=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let oe=k.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let Se=oe[me];lt(Se,V,k),G.add(Se)}else lt(oe,V,k),G.add(oe)}),b.pop(),p=null,G},this.compileAsync=function(w,N,V=null){let G=this.compile(w,N,V);return new Promise(k=>{function oe(){if(G.forEach(function(me){Ie.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){k(w);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Fn=null;function fi(w){Fn&&Fn(w)}function om(){ws.stop()}function am(){ws.start()}let ws=new Qg;ws.setAnimationLoop(fi),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(w){Fn=w,X.setAnimationLoop(w),w===null?ws.stop():ws.start()},X.addEventListener("sessionstart",om),X.addEventListener("sessionend",am),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,L),p=Qe.get(w,b.length),p.init(N),b.push(p),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(Ae),de=this.localClippingEnabled,ee=re.init(this.clippingPlanes,de),y=ve.get(w,_.length),y.init(),_.push(y),X.enabled===!0&&X.isPresenting===!0){let oe=v.xr.getDepthSensingMesh();oe!==null&&bu(oe,N,-1/0,v.sortObjects)}bu(w,N,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(te,z),Ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ze&&Pe.addToRenderList(y,w),this.info.render.frame++,ee===!0&&re.beginShadows();let V=p.state.shadowsArray;be.render(V,w,N),ee===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=y.opaque,k=y.transmissive;if(p.setupLights(),N.isArrayCamera){let oe=N.cameras;if(k.length>0)for(let me=0,Se=oe.length;me<Se;me++){let we=oe[me];lm(G,k,w,we)}Ze&&Pe.render(w);for(let me=0,Se=oe.length;me<Se;me++){let we=oe[me];cm(y,w,we,we.viewport)}}else k.length>0&&lm(G,k,w,N),Ze&&Pe.render(w),cm(y,w,N);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,N),yt.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ee===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?y=_[_.length-1]:y=null};function bu(w,N,V,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){G&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);let me=j.update(w),Se=w.material;Se.visible&&y.push(w,me,Se,V,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){let me=j.update(w),Se=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Be.copy(me.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Se)){let we=me.groups;for(let Fe=0,He=we.length;Fe<He;Fe++){let Ee=we[Fe],it=Se[Ee.materialIndex];it&&it.visible&&y.push(w,me,it,V,Be.z,Ee)}}else Se.visible&&y.push(w,me,Se,V,Be.z,null)}}let oe=w.children;for(let me=0,Se=oe.length;me<Se;me++)bu(oe[me],N,V,G)}function cm(w,N,V,G){let k=w.opaque,oe=w.transmissive,me=w.transparent;p.setupLightsView(V),ee===!0&&re.setGlobalState(v.clippingPlanes,V),G&&Ce.viewport(T.copy(G)),k.length>0&&Va(k,N,V),oe.length>0&&Va(oe,N,V),me.length>0&&Va(me,N,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function lm(w,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Yn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?aa:Xn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let oe=p.state.transmissionRenderTarget[G.id],me=G.viewport||T;oe.setSize(me.z,me.w);let Se=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(W),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&Pe.render(V);let we=v.toneMapping;v.toneMapping=Qi;let Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ee===!0&&re.setGlobalState(v.clippingPlanes,G),Va(w,V,G),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,it=N.length;Ee<it;Ee++){let xt=N[Ee],vt=xt.object,hn=xt.geometry,at=xt.material,Te=xt.group;if(at.side===Gn&&vt.layers.test(G.layers)){let pi=at.side;at.side=Lt,at.needsUpdate=!0,um(vt,V,G,hn,at,Te),at.side=pi,at.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe))}v.setRenderTarget(Se),v.setClearColor(W,Q),Fe!==void 0&&(G.viewport=Fe),v.toneMapping=we}function Va(w,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,oe=w.length;k<oe;k++){let me=w[k],Se=me.object,we=me.geometry,Fe=G===null?me.material:G,He=me.group;Se.layers.test(V.layers)&&um(Se,N,V,we,Fe,He)}}function um(w,N,V,G,k,oe){w.onBeforeRender(v,N,V,G,k,oe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,N,V,G,w,oe),k.transparent===!0&&k.side===Gn&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,v.renderBufferDirect(V,N,G,k,w,oe),k.side=ii,k.needsUpdate=!0,v.renderBufferDirect(V,N,G,k,w,oe),k.side=Gn):v.renderBufferDirect(V,N,G,k,w,oe),w.onAfterRender(v,N,V,G,k,oe)}function Ga(w,N,V){N.isScene!==!0&&(N=gt);let G=Ie.get(w),k=p.state.lights,oe=p.state.shadowsArray,me=k.state.version,Se=Me.getParameters(w,k.state,oe,N,V),we=Me.getProgramCacheKey(Se),Fe=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ze),Fe=new Map,G.programs=Fe);let He=Fe.get(we);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return dm(w,Se),He}else Se.uniforms=Me.getUniforms(w),w.onBeforeCompile(Se,v),He=Me.acquireProgram(Se,we),Fe.set(we,He),G.uniforms=Se.uniforms;let Ee=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=re.uniform),dm(w,Se),G.needsLights=nb(w),G.lightsStateVersion=me,G.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMap.value=k.state.directionalShadowMap,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotShadowMap.value=k.state.spotShadowMap,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMap.value=k.state.pointShadowMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function hm(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function dm(w,N){let V=Ie.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function eb(w,N,V,G,k){N.isScene!==!0&&(N=gt),A.resetTextureUnits();let oe=N.fog,me=G.isMeshStandardMaterial?N.environment:null,Se=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:nn,we=(G.isMeshStandardMaterial?B:S).get(G.envMap||me),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color,vt=Qi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=v.toneMapping);let hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=hn!==void 0?hn.length:0,Te=Ie.get(G),pi=p.state.lights;if(ee===!0&&(de===!0||w!==M)){let En=w===M&&G.id===E;re.setState(G,w,En)}let ct=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==pi.state.version||Te.outputColorSpace!==Se||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==we||G.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==He||Te.morphTargets!==Ee||Te.morphNormals!==it||Te.morphColors!==xt||Te.toneMapping!==vt||Te.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Te.__version=G.version);let Bn=Te.currentProgram;ct===!0&&(Bn=Ga(G,N,k));let nr=!1,xn=!1,Io=!1,bt=Bn.getUniforms(),ei=Te.uniforms;if(Ce.useProgram(Bn.program)&&(nr=!0,xn=!0,Io=!0),G.id!==E&&(E=G.id,xn=!0),nr||M!==w){Ce.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),hM(se),dM(se),bt.setValue(U,"projectionMatrix",se)):bt.setValue(U,"projectionMatrix",w.projectionMatrix),bt.setValue(U,"viewMatrix",w.matrixWorldInverse);let Hi=bt.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,Ue.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,xn=!0,Io=!0)}if(k.isSkinnedMesh){bt.setOptional(U,k,"bindMatrix"),bt.setOptional(U,k,"bindMatrixInverse");let En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),bt.setValue(U,"boneTexture",En.boneTexture,A))}k.isBatchedMesh&&(bt.setOptional(U,k,"batchingTexture"),bt.setValue(U,"batchingTexture",k._matricesTexture,A),bt.setOptional(U,k,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",k._indirectTexture,A),bt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",k._colorsTexture,A));let Po=V.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0)&&De.update(k,V,Bn),(xn||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,bt.setValue(U,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ei.envMap.value=we,ei.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ei.envMapIntensity.value=N.environmentIntensity),xn&&(bt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&tb(ei,Io),oe&&G.fog===!0&&he.refreshFogUniforms(ei,oe),he.refreshMaterialUniforms(ei,G,q,ne,p.state.transmissionRenderTarget[w.id]),Cr.upload(U,hm(Te),ei,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cr.upload(U,hm(Te),ei,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(U,"center",k.center),bt.setValue(U,"modelViewMatrix",k.modelViewMatrix),bt.setValue(U,"normalMatrix",k.normalMatrix),bt.setValue(U,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let En=G.uniformsGroups;for(let Hi=0,Vi=En.length;Hi<Vi;Hi++){let fm=En[Hi];D.update(fm,Bn),D.bind(fm,Bn)}}return Bn}function tb(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function nb(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,V){Ie.get(w.texture).__webglTexture=N,Ie.get(w.depthTexture).__webglTexture=V;let G=Ie.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let V=Ie.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){L=w,R=N,I=V;let G=!0,k=null,oe=!1,me=!1;if(w){let we=Ie.get(w);if(we.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(we.__hasExternalTextures)A.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ee=w.depthTexture;if(we.__boundDepthTexture!==Ee){if(Ee!==null&&Ie.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);let He=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[N])?k=He[N][V]:k=He[N],oe=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?k=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[V]:k=He,T.copy(w.viewport),O.copy(w.scissor),F=w.scissorTest}else T.copy(Z).multiplyScalar(q).floor(),O.copy(ce).multiplyScalar(q).floor(),F=Re;if(Ce.bindFramebuffer(U.FRAMEBUFFER,k)&&G&&Ce.drawBuffers(w,k),Ce.viewport(T),Ce.scissor(O),Ce.setScissorTest(F),oe){let we=Ie.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,V)}else if(me){let we=Ie.get(w.texture),Fe=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Fe)}E=-1},this.readRenderTargetPixels=function(w,N,V,G,k,oe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){Ce.bindFramebuffer(U.FRAMEBUFFER,Se);try{let we=w.texture,Fe=we.format,He=we.type;if(!$e.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&V>=0&&V<=w.height-k&&U.readPixels(N,V,G,k,Ge.convert(Fe),Ge.convert(He),oe)}finally{let we=L!==null?Ie.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,G,k,oe,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){let we=w.texture,Fe=we.format,He=we.type;if(!$e.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&V>=0&&V<=w.height-k){Ce.bindFramebuffer(U.FRAMEBUFFER,Se);let Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,oe.byteLength,U.STREAM_READ),U.readPixels(N,V,G,k,Ge.convert(Fe),Ge.convert(He),0);let it=L!==null?Ie.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,it);let xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await uM(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,oe),U.deleteBuffer(Ee),U.deleteSync(xt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),k=Math.floor(w.image.width*G),oe=Math.floor(w.image.height*G),me=N!==null?N.x:0,Se=N!==null?N.y:0;A.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,me,Se,k,oe),Ce.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,G=null,k=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],k=arguments[3]||0,V=null);let oe,me,Se,we,Fe,He,Ee,it,xt,vt=w.isCompressedTexture?w.mipmaps[k]:w.image;V!==null?(oe=V.max.x-V.min.x,me=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Fe=V.min.y,He=V.isBox3?V.min.z:0):(oe=vt.width,me=vt.height,Se=vt.depth||1,we=0,Fe=0,He=0),G!==null?(Ee=G.x,it=G.y,xt=G.z):(Ee=0,it=0,xt=0);let hn=Ge.convert(N.format),at=Ge.convert(N.type),Te;N.isData3DTexture?(A.setTexture3D(N,0),Te=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Te=U.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let pi=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=U.getParameter(U.UNPACK_SKIP_PIXELS),nr=U.getParameter(U.UNPACK_SKIP_ROWS),xn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He);let Io=w.isDataArrayTexture||w.isData3DTexture,bt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ei=Ie.get(w),Po=Ie.get(N),En=Ie.get(ei.__renderTarget),Hi=Ie.get(Po.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Vi=0;Vi<Se;Vi++)Io&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(w).__webglTexture,k,He+Vi),w.isDepthTexture?(bt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(N).__webglTexture,k,xt+Vi),U.blitFramebuffer(we,Fe,oe,me,Ee,it,oe,me,U.DEPTH_BUFFER_BIT,U.NEAREST)):bt?U.copyTexSubImage3D(Te,k,Ee,it,xt+Vi,we,Fe,oe,me):U.copyTexSubImage2D(Te,k,Ee,it,xt+Vi,we,Fe,oe,me);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else bt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Te,k,Ee,it,xt,oe,me,Se,hn,at,vt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,k,Ee,it,xt,oe,me,Se,hn,vt.data):U.texSubImage3D(Te,k,Ee,it,xt,oe,me,Se,hn,at,vt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Ee,it,oe,me,hn,at,vt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Ee,it,vt.width,vt.height,hn,vt.data):U.texSubImage2D(U.TEXTURE_2D,k,Ee,it,oe,me,hn,at,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,pi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,nr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,xn),k===0&&N.generateMipmaps&&U.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,G=null,k=0){return w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],k=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,V,G,k)},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){R=0,I=0,L=null,Ce.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}},kc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var es=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new C,ks=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ai=class extends dn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yr,ko=new C,xr=new C,_r=new C,vr=new le,Oo=new le,s0=new ke,uc=new C,Fo=new C,hc=new C,dg=new le,ju=new le,fg=new le,ts=class extends Mt{constructor(e=new Ai){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vr(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new ks(i,3,0,!1)),yr.setAttribute("uv",new ks(i,2,3,!1))}this.geometry=yr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),s0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-_r.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;dc(uc.set(-.5,-.5,0),_r,o,xr,s,r),dc(Fo.set(.5,-.5,0),_r,o,xr,s,r),dc(hc.set(.5,.5,0),_r,o,xr,s,r),dg.set(0,0),ju.set(1,0),fg.set(1,1);let a=e.ray.intersectTriangle(uc,Fo,hc,!1,ko);if(a===null&&(dc(Fo.set(-.5,.5,0),_r,o,xr,s,r),ju.set(0,1),a=e.ray.intersectTriangle(uc,hc,Fo,!1,ko),a===null))return;let c=e.ray.origin.distanceTo(ko);c<e.near||c>e.far||t.push({distance:c,point:ko.clone(),uv:Zi.getInterpolation(ko,uc,Fo,hc,dg,ju,fg,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dc(n,e,t,i,s,r){vr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Oo.x=r*vr.x-s*vr.y,Oo.y=s*vr.x+r*vr.y):Oo.copy(vr),n.copy(e),n.x+=Oo.x,n.y+=Oo.y,n.applyMatrix4(s0)}var pg=new C,mg=new tt,gg=new tt,o1=new C,yg=new ke,fc=new C,Zu=new Mn,xg=new ke,Ku=new Us,Oc=class extends Y{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xm,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zu.copy(this.boundingSphere),Zu.applyMatrix4(s),e.ray.intersectsSphere(Zu)!==!1&&(xg.copy(s).invert(),Ku.copy(e.ray).applyMatrix4(xg),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;mg.fromBufferAttribute(s.attributes.skinIndex,e),gg.fromBufferAttribute(s.attributes.skinWeight,e),pg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=gg.getComponent(r);if(o!==0){let a=mg.getComponent(r);yg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(o1.copy(pg).applyMatrix4(yg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},na=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ns=class extends Vt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=en,u=en,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_g=new ke,a1=new ke,Fc=class n{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:a1;_g.multiplyMatrices(a,t[r]),_g.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ns(t,e,e,Qt,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new na),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Os=class extends Ot{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new ke,vg=new ke,pc=[],bg=new Dt,c1=new ke,Bo=new Y,zo=new Mn,Gr=class extends Y{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,c1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),bg.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(bg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),zo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),vg.multiplyMatrices(i,br),Bo.matrixWorld=vg,Bo.raycast(e,pc);for(let o=0,a=pc.length;o<a;o++){let c=pc[o];c.instanceId=r,c.object=this,t.push(c)}pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Ld,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ia=class extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bc=new C,zc=new C,Mg=new ke,Ho=new Us,mc=new Mn,Ju=new C,Sg=new C,Wr=class extends Mt{constructor(e=new Rt,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bc.fromBufferAttribute(t,s-1),zc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bc.distanceTo(zc);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;Mg.copy(s).invert(),Ho.copy(e.ray).applyMatrix4(Mg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,y=g-1;x<y;x+=l){let p=u.getX(x),_=u.getX(x+1),b=gc(this,e,Ho,c,p,_);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),y=u.getX(f),p=gc(this,e,Ho,c,x,y);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,y=g-1;x<y;x+=l){let p=gc(this,e,Ho,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=gc(this,e,Ho,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gc(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Bc.fromBufferAttribute(o,s),zc.fromBufferAttribute(o,r),t.distanceSqToSegment(Bc,zc,Ju,Sg)>i)return;Ju.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ju);if(!(c<e.near||c>e.far))return{distance:c,point:Sg.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var wg=new C,Eg=new C,Hc=class extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)wg.fromBufferAttribute(t,s),Eg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wg.distanceTo(Eg);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vc=class extends Wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fs=class extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tg=new ke,sd=new Us,yc=new Mn,xc=new C,qr=class extends Mt{constructor(e=new Rt,t=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),yc.radius+=r,e.ray.intersectsSphere(yc)===!1)return;Tg.copy(s).invert(),sd.copy(e.ray).applyMatrix4(Tg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let y=l.getX(g);xc.fromBufferAttribute(h,y),Ag(xc,y,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)xc.fromBufferAttribute(h,g),Ag(xc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ag(n,e,t,i,s,r,o){let a=sd.distanceSqToPoint(n);if(a<t){let c=new C;sd.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var is=class extends Vt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],o=[],a=new C,c=new ke;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sa=class extends Rn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rd=class extends sa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bd(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var _c=new C,Qu=new Bd,eh=new Bd,th=new Bd,od=class extends Rn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(_c.subVectors(s[0],s[1]).add(s[0]),l=_c);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(_c.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_c),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),y<1e-4&&(y=x),Qu.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,y),eh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,y),th.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,y)}else this.curveType==="catmullrom"&&(Qu.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),eh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),th.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Qu.calc(c),eh.calc(c),th.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rg(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function l1(n,e){let t=1-n;return t*t*e}function u1(n,e){return 2*(1-n)*n*e}function h1(n,e){return n*n*e}function jo(n,e,t,i){return l1(n,e)+u1(n,t)+h1(n,i)}function d1(n,e){let t=1-n;return t*t*t*e}function f1(n,e){let t=1-n;return 3*t*t*n*e}function p1(n,e){return 3*(1-n)*n*n*e}function m1(n,e){return n*n*n*e}function Zo(n,e,t,i,s){return d1(n,e)+f1(n,t)+p1(n,i)+m1(n,s)}var Gc=class extends Rn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zo(e,s.x,r.x,o.x,a.x),Zo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ad=class extends Rn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Zo(e,s.x,r.x,o.x,a.x),Zo(e,s.y,r.y,o.y,a.y),Zo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends Rn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cd=class extends Rn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qc=class extends Rn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(jo(e,s.x,r.x,o.x),jo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ld=class extends Rn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(jo(e,s.x,r.x,o.x),jo(e,s.y,r.y,o.y),jo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Rg(a,c.x,l.x,u.x,h.x),Rg(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Cg=Object.freeze({__proto__:null,ArcCurve:rd,CatmullRomCurve3:od,CubicBezierCurve:Gc,CubicBezierCurve3:ad,EllipseCurve:sa,LineCurve:Wc,LineCurve3:cd,QuadraticBezierCurve:qc,QuadraticBezierCurve3:ld,SplineCurve:$c}),ud=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cg[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Cg[s.type]().fromJSON(s))}return this}},hd=class extends ud{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wc(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new qc(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Gc(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $c(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new sa(e,t,i,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},dd=class n extends Rt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new C,d=new le,f=new C,g=new C,x=new C,y=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:y=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-y,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:y=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-y,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let b=i+_*u*s,v=Math.sin(b),P=Math.cos(b);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*v,h.y=e[R].y,h.z=e[R].x*P,o.push(h.x,h.y,h.z),d.x=_/t,d.y=R/(e.length-1),a.push(d.x,d.y);let I=c[3*R+0]*v,L=c[3*R+1],E=c[3*R+0]*P;l.push(I,L,E)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let v=b+_*e.length,P=v,R=v+e.length,I=v+e.length+1,L=v+1;r.push(P,R,L),r.push(I,L,R)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ss=class n extends dd{constructor(e=1,t=1,i=4,s=8){let r=new hd;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Xc=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,u=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_t=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],y=i/2,p=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function _(){let v=new C,P=new C,R=0,I=(t-e)/i;for(let L=0;L<=r;L++){let E=[],M=L/r,T=M*(t-e)+e;for(let O=0;O<=s;O++){let F=O/s,W=F*c+a,Q=Math.sin(W),$=Math.cos(W);P.x=T*Q,P.y=-M*i+y,P.z=T*$,h.push(P.x,P.y,P.z),v.set(Q,I,$).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-M),E.push(g++)}x.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){let M=x[E][L],T=x[E+1][L],O=x[E+1][L+1],F=x[E][L+1];(e>0||E!==0)&&(u.push(M,T,F),R+=3),(t>0||E!==r-1)&&(u.push(T,O,F),R+=3)}l.addGroup(p,R,0),p+=R}function b(v){let P=g,R=new le,I=new C,L=0,E=v===!0?e:t,M=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,y*M,0),d.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let O=0;O<=s;O++){let W=O/s*c+a,Q=Math.cos(W),$=Math.sin(W);I.x=E*$,I.y=y*M,I.z=E*Q,h.push(I.x,I.y,I.z),d.push(0,M,0),R.x=Q*.5+.5,R.y=$*.5*M+.5,f.push(R.x,R.y),g++}for(let O=0;O<s;O++){let F=P+O,W=T+O;v===!0?u.push(W,W+1,F):u.push(W+1,W,F),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ln=class n extends _t{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ye=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new C,d=new C,f=[],g=[],x=[],y=[];for(let p=0;p<=i;p++){let _=[],b=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){let R=P/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),y.push(R+v,1-b),_.push(l++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let b=u[p][_+1],v=u[p][_],P=u[p+1][_],R=u[p+1][_+1];(p!==0||o>0)&&f.push(b,v,R),(p!==i-1||c<Math.PI)&&f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yc=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,y=f/i*Math.PI*2;h.x=(e+t*Math.cos(y))*Math.cos(x),h.y=(e+t*Math.cos(y))*Math.sin(x),h.z=t*Math.sin(y),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,y=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,y,_),o.push(y,p,_)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var nt=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends nt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function vc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function g1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function y1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ig(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function r0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var rs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fd=class extends rs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wr:r=e,a=2*t-i;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case wr:o=e,c=2*i-t;break;case Tc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,y=x*g,p=-d*y+2*d*x-d*g,_=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*y+(1.5+f)*x+.5*g,v=f*y-f*x;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+_*o[l+P]+b*o[c+P]+v*o[h+P];return r}},jc=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},pd=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vc(t,this.TimeBufferType),this.values=vc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vc(e.times,Array),values:vc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case Mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&g1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Mu,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=kr;var os=class extends Cn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ur;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Cn{};Zc.prototype.ValueTypeName="color";var Ri=class extends Cn{};Ri.prototype.ValueTypeName="number";var md=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ci=class extends Cn{InterpolantFactoryMethodLinear(e){return new md(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Cn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Ur;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Cn{};Ii.prototype.ValueTypeName="vector";var $r=class{constructor(e="",t=-1,i=[],s=kd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(_1(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=y1(c);c=Ig(c,1,u),l=Ig(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,f,g,x){if(f.length!==0){let y=[],p=[];r0(f,y,p,g),y.length!==0&&x.push(new h(d,y,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let y=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let b=d[g];y.push(b.time),p.push(b.morphTarget===x?1:0)}s.push(new Ri(".morphTargetInfluence["+x+"]",y,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";i(Ii,f+".position",d,"pos",s),i(Ci,f+".quaternion",d,"rot",s),i(Ii,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function x1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Zc;case"quaternion":return Ci;case"bool":case"boolean":return os;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=x1(n.type);if(n.times===void 0){let t=[],i=[];r0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},gd=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},v1=new gd,Pi=class{constructor(e){this.manager=e!==void 0?e:v1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},yd=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends Pi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:i,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=vi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,y=new ReadableStream({start(p){_();function _(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{x+=v.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let R=0,I=u.length;R<I;R++){let L=u[R];L.onProgress&&L.onProgress(P)}p.enqueue(v),_()}},b=>{p.error(b)})}}});return new Response(y)}else throw new yd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ki.add(e,l);let u=vi[e];delete vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var xd=class extends Pi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function c(){u(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var cs=class extends Pi{constructor(e){super(e)}load(e,t,i,s){let r=new Vt,o=new xd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Bs=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Kc=class extends Bs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nh=new ke,Pg=new C,Lg=new C,oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pg),Lg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lg),t.updateMatrixWorld(),nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_d=class extends oa{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jc=class extends Bs{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _d}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dg=new ke,Vo=new C,ih=new C,vd=class extends oa{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vo),ih.copy(i.position),ih.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ih),i.updateMatrixWorld(),s.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Dg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg)}},ri=class extends Bs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bd=class extends oa{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},In=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new bd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xr=class extends Bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ls=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Qc=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ki.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,c),r.manager.itemStart(e)}};var Md=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){tn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;tn.multiplyQuaternionsFlat(e,o,e,t,e,i),tn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},zd="\\[\\]\\.:\\/",b1=new RegExp("["+zd+"]","g"),Hd="[^"+zd+"]",M1="[^"+zd.replace("\\.","")+"]",S1=/((?:WC+[\/:])*)/.source.replace("WC",Hd),w1=/(WCOD+)?/.source.replace("WCOD",M1),E1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hd),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hd),A1=new RegExp("^"+S1+w1+E1+T1+"$"),R1=["material","materials","bones","map"],Sd=class{constructor(e,t,i){let s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b1,"")}static parseTrackName(e){let t=A1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);R1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Sd;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wd=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Sr,endingEnd:Sr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kb:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case kd:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===Ub;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===il){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=wr,s.endingEnd=wr):(e?s.endingStart=this.zeroSlopeAtStart?wr:Sr:s.endingStart=Tc,t?s.endingEnd=this.zeroSlopeAtEnd?wr:Sr:s.endingEnd=Tc)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}},C1=new Float32Array(1),Yr=class extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Md(pt.create(i,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new jc(new Float32Array(2),new Float32Array(2),1,C1),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?$r.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=kd),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new wd(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?$r.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Ng=new ke,el=class{constructor(e,t,i=0,s=1/0){this.ray=new Us(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ng),this}intersectObject(e,t=!0,i=[]){return Ed(e,this,i,t),i.sort(Ug),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ed(e[s],this,i,t);return i.sort(Ug),i}};function Ug(n,e){return n.distance-e.distance}function Ed(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ed(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function o0(n={}){let e=n.search??(typeof location<"u"?location.search:""),t=n.userAgent??(typeof navigator<"u"?navigator.userAgent:""),i=n.maxTouchPoints??(typeof navigator<"u"?navigator.maxTouchPoints:0),s=n.pointerCoarse??(typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches),r=n.hoverNone??(typeof matchMedia=="function"&&matchMedia("(hover: none)").matches),o=new URLSearchParams(String(e).replace(/^\?/,"")),a=/iPad/i.test(t)||/Macintosh/i.test(t)&&i>1,c=/iPhone|iPod|Android.+Mobile/i.test(t),l=s||r||a||c,u=l;return o.get("touch")==="0"&&(u=!1),o.get("touch")==="1"&&(u=!0),{touch:u,lightGpu:l}}var al=o0();function a0(){return o0().touch}var fn={coarse:al.lightGpu,dprCap:al.lightGpu?1.5:2,shadow:al.lightGpu?1024:2048,tuftsPerM2:al.lightGpu?1.6:3.6,antialias:!0},c0={world:"Mochi's home",house:"Haunted house",hall:"Village hall",cafe:"Caf\xE9",mine:"Crystal mine"},l0=new Set(["ground.glb","floor.glb","dirt.glb","path.glb","puddle.glb"]);var cl=class extends es{constructor(){super();let e=new Gt;e.deleteAttribute("uv");let t=new nt({side:Lt}),i=new nt,s=new ri(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Y(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Y(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Y(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Y(e,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Y(e,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let u=new Y(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Y(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new Y(e,Kr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Y(e,Kr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Y(e,Kr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Y(e,Kr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let y=new Y(e,Kr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let p=new Y(e,Kr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Kr(n){let e=new cn;return e.color.setScalar(n),e}function Le(n,e,t=0){return new C(n,t,-e)}function Vd({canvas:n,profile:e}){n.style.width="100%",n.style.height="100%";let t=new Uc({canvas:n,antialias:e.antialias??!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.outputColorSpace=et,t.toneMapping=Ad,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=Td;let i=new es,s=new ye("#6b3a5e");i.background=s.clone(),i.fog=new kc(s.clone(),.008);let r=new Hr(t);i.environment=r.fromScene(new cl,.04).texture,i.environmentIntensity=.32;let o=new Ct(52,1,.08,420),a=0,c=0;function l(h=!1){let d=n.clientWidth,f=n.clientHeight;h&&(a=0),!(d<2||f<2||d===a&&f===c)&&(a=d,c=f,o.aspect=d/f,o.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.setSize(d,f,!1))}function u(){r.dispose(),t.dispose()}return{renderer:t,scene:i,camera:o,fitView:l,toThree:Le,dispose:u}}var I1=document.querySelector("#view"),P1=Vd({canvas:I1,profile:fn}),{renderer:ht,scene:Je,camera:wt,fitView:us}=P1;var Li=n=>n*Math.PI/180,ll=n=>n*180/Math.PI;function u0(n=0,e=-2.2){return{x:n,y:e,z:0,h:0,vx:0,vy:0,vz:0,grounded:!0,flop:0}}function zs(n,e,t){let i=(e-n+540)%360-180;return Math.abs(i)<=t?e:n+Math.sign(i)*t}function ul(n,e,t,i,s){let r=Li(i),o=-Math.sin(r),a=Math.cos(r),c=o*t+a*e,l=a*t-o*e,u=Math.hypot(c,l),h=(n.flop>.4?2.6:1.6)*(n.speedMul||1);if(u>.16){let d=Math.min(1,u);n.vx=c/u*h*d,n.vy=l/u*h*d;let f=ll(Math.atan2(-c,l));n.h=zs(n.h,f,280*s)}else n.vx*=.8,n.vy*=.8;n.vz+=-14*(n.gravMul||1)*s,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s,n.z<=0?(n.z=0,n.vz=0,n.grounded=!0):n.grounded=!1,n.flop>0&&(n.flop=Math.max(0,n.flop-s))}function h0(n){return n.grounded?(n.vz=3.3*(n.hopMul||1),n.grounded=!1,!0):!1}function d0(n){if(n.flop>0)return!1;n.flop=1.1;let e=Li(n.h);return n.vx+=-Math.sin(e)*2.4,n.vy+=Math.cos(e)*2.4,n.vz=Math.max(n.vz,1.4),!0}function la(n,e,t=.7){let[i,s]=e.origin,[r,o]=e.half;n.x=Math.min(i+r-t,Math.max(i-r+t,n.x)),n.y=Math.min(s+o-t,Math.max(s-o+t,n.y))}function L1(n,e,t){return Math.abs(n.x-e.x)<e.hx+t&&Math.abs(n.y-e.y)<e.hy+t}function D1(n,e,t,i=.42){let s=0;for(let r of e){if(r.level!==t||!L1(n,r,i))continue;let o=r.z+r.height;o<=s||n.z<o-.35||n.z>o+.08||(s=o)}return s}function f0(n,e,t,i=.42){let s=D1(n,e,t,i);s>0&&n.z<=s&&(n.z=s,(n.vz??0)<0&&(n.vz=0),n.grounded=!0);for(let r of e){if(r.level!==t)continue;let o=r.z+r.height;if(n.z+1e-4>=o||o<=n.z+.35)continue;let a=n.x-r.x,c=n.y-r.y,l=r.hx+i-Math.abs(a),u=r.hy+i-Math.abs(c);l<=0||u<=0||(l<u?(n.x+=Math.sign(a||1)*l,n.vx=0):(n.y+=Math.sign(c||1)*u,n.vy=0))}}var Jr={pumpkin:{file:"pumpkin.glb",radius:.36,height:.52,origin:"base"},hay:{file:"hay.glb",radius:.42,height:.46,origin:"base"},crate:{file:"crate.glb",radius:.4,height:.56,origin:"center"},pot:{file:"pot.glb",radius:.22,height:.36,origin:"center"}};function p0(n){let e=Jr[n.kind];return{x:n.at[0],y:n.at[1],z:n.z,vx:0,vy:0,vz:0,radius:e.radius,height:e.height,origin:e.origin,level:n.level}}function oi(n){return n.origin==="base"?n.z:n.z-n.height/2}function k1(n,e){let t=e.x-n.x,i=e.y-n.y,s=Math.hypot(t,i)||.001,r=n.radius+e.radius;if(s>=r)return;let o=oi(n)+n.height,a=oi(e)+e.height;if(oi(e)>=o-.08&&oi(e)<o+.2){e.z+=o-oi(e),e.vz=Math.max(0,e.vz);return}if(oi(n)>=a-.08&&oi(n)<a+.2){n.z+=a-oi(n),n.vz=Math.max(0,n.vz);return}let c=(r-s)*.5;n.x-=t/s*c,n.y-=i/s*c,e.x+=t/s*c,e.y+=i/s*c}function m0(n,e,t){for(let s of n){s.vz+=-14*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.vx*=.98,s.vy*=.98;let r=0;if(oi(s)<r){let u=r-oi(s);s.z+=u,s.vz=0,s.vx*=.9,s.vy*=.9}let o=s.x-e.x,a=s.y-e.y,c=Math.hypot(o,a)||.001,l=s.radius+.42;if(c<l&&e.z<s.height){let u=(e.flop>0?7.5:4.2)*(1-c/l);s.vx+=o/c*u,s.vy+=a/c*u,s.vz+=e.flop>0?2.2:.4}}for(let s=0;s<3;s+=1)for(let r=0;r<n.length;r+=1)for(let o=r+1;o<n.length;o+=1)k1(n[r],n[o]);let i=0;for(let s of n){let r=Math.hypot(s.vx,s.vy,s.vz);r>.45&&(i+=(r-.45)*t)}return i}var O1=1.85,Gd=.88,Wd=.72,ua=.16,x0=80;function _0(n,e){return{id:n.id,label:n.label||n.id,flies:!!n.flies,hover:!!n.hover,level:n.level||"world",spot:n.spot?n.spot.slice():[0,0],seat:n.seat||[0,0,ua],craft:e,phase:"idle",t:0,from:null,exit:null,sit:0}}function F1(n,e=1.25){let t=Li(n.h||0),i=-Math.sin(t),s=Math.cos(t),r=Math.cos(t),o=Math.sin(t);return[(n.x||0)+r*e+i*.45,(n.y||0)+o*e+s*.45]}function v0(n,e){return!n||ai(n)?!1:(n.spot=F1(e),n.craft.reset(),!0)}function b0(n,e,t,i,s=O1){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let c=eo(a),l=(t-c.x)**2+(i-c.y)**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function eo(n){return n.craft.parkPose(n.spot)}function ai(n){return n?.phase==="mounting"||n?.phase==="flying"||n?.phase==="dismounting"}function B1(n,e){return!(!n||ai(n)||(e.z||0)>.55)}function hl(n,e){return B1(n,e)?(n.phase="mounting",n.t=0,n.sit=0,n.from={x:e.x,y:e.y,z:e.z||0,h:e.h||0},!0):!1}function dl(n,e){if(n.phase!=="flying")return!1;let t=eo(n);n.phase="dismounting",n.t=0,n.from={x:e.x,y:e.y,z:e.z,h:e.h};let i=Li(t.h),s=Math.cos(i),r=Math.sin(i);return n.exit={x:t.x+s*1.15,y:t.y+r*1.15,z:Math.max(0,t.z),h:t.h},!0}function g0(n){return n*n*(3-2*n)}function Qr(n,e,t){return n+(e-n)*t}function y0(n,e){return Math.sin(Math.PI*Math.max(0,Math.min(1,n)))*e}function to(n,e,t){n.x=e.x,n.y=e.y,n.z=e.z+(t?.[2]??ua),n.h=e.h,n.vx=e.ve,n.vy=e.vn,n.vz=e.vd,n.grounded=e.z<.12,n.flop=0}function M0(n,e,t,i,s){if(n.phase==="idle")return n.sit=Math.max(0,n.sit-t*3),n;if(n.phase==="mounting"){n.t+=t;let r=Math.min(1,n.t/Gd),o=g0(r),a=eo(n),c=a.z+(n.seat?.[2]??ua);return e.x=Qr(n.from.x,a.x,o),e.y=Qr(n.from.y,a.y,o),e.z=Qr(n.from.z,c,o)+y0(r,.62),e.h=zs(n.from.h,a.h,420*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.min(1,Math.max(0,(r-.28)/.45)),r>=1&&(n.phase="flying",n.t=0,to(e,a,n.seat)),n}if(n.phase==="dismounting"){n.t+=t;let r=Math.min(1,n.t/Wd),o=g0(r);return e.x=Qr(n.from.x,n.exit.x,o),e.y=Qr(n.from.y,n.exit.y,o),e.z=Qr(n.from.z,0,o)+y0(r,.5),e.h=zs(n.from.h,n.exit.h,360*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.max(0,1-r/.45),r>=1&&(n.phase="idle",n.t=0,e.x=n.exit.x,e.y=n.exit.y,e.z=n.exit.z,e.grounded=n.exit.z<=0,e.vz=0,n.sit=0),n}return n.craft.step(t,i),s&&n.craft.contain(s.eastMin,s.eastMax,s.northMin,s.northMax,s.maxAgl??x0),to(e,eo(n),n.seat),n.sit=1,n}function S0(n,e,t,i,s){let r=Math.max(-.12,Math.min(1,e)),o=Math.max(-1,Math.min(1,n)),a=0;return t?a=.72:e<-.2?a=e*.55:r>.2&&(a=.18),{throttle:r,steer:o,elevator:a,lookH:i,heading:s}}function w0(n,e,t,i=4,s=x0){let r=t[0]-i,o=t[1]-i,a=n[0]-e[0],c=n[1]-e[1];return{eastMin:-r-a,eastMax:r-a,northMin:-o-c,northMax:o-c,maxAgl:s}}var z1=1.85,H1=5,E0=[0,0,.22];function V1(n){return n.level||"world"}function T0(n,e,t,i,s=z1){let r=null,o=1/0;for(let a of n||[]){if(V1(a)!==e)continue;let c=a.at;if(!c||c.length<2)continue;let l=(t-c[0])**2+(i-c[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function no(n,e){return(n||[]).find(t=>t.id===e)||null}function G1(n){return n.slice().reverse()}function W1(n){let e=new Map,t=(i,s,r)=>{e.has(i)||e.set(i,[]),e.get(i).push({to:s,points:r})};for(let i of n||[]){let s=i.a||i.from,r=i.b||i.to,o=i.points||[];!s||!r||o.length<2||(t(s,r,o.map(a=>a.slice(0,2))),t(r,s,G1(o).map(a=>a.slice(0,2))))}return e}function q1(n,e,t){if(!e||!t)return null;if(e===t)return[e];let i=[e],s=new Map([[e,null]]);for(;i.length;){let r=i.shift();for(let o of n.get(r)||[])if(!s.has(o.to)){if(s.set(o.to,r),o.to===t){let a=[t],c=r;for(;c!=null;)a.push(c),c=s.get(c);return a.reverse()}i.push(o.to)}}return null}function $1(n,e,t){for(let i of n.get(e)||[])if(i.to===t)return i.points;return null}function X1(n,e){if(!e||e.length<2)return[];let t=[];for(let i=0;i<e.length-1;i+=1){let s=$1(n,e[i],e[i+1]);if(!s||s.length<2)return[];let r=i===0?0:1;for(let o=r;o<s.length;o+=1)t.push(s[o].slice(0,2))}return t}function Y1(n,e,t){let i=q1(n,e,t);if(!i)return null;let s=X1(n,i);return i.length>1&&s.length<2?null:{stations:i,points:s,length:qd(s)}}function qd(n){let e=0;for(let t=1;t<(n||[]).length;t+=1)e+=Math.hypot(n[t][0]-n[t-1][0],n[t][1]-n[t-1][1]);return e}function $d(n,e){if(!n||n.length===0)return{x:0,y:0,h:0,s:0};if(n.length===1)return{x:n[0][0],y:n[0][1],h:0,s:0};let t=qd(n),i=Math.max(0,Math.min(t,e)),s=0;for(let a=1;a<n.length;a+=1){let c=n[a-1][0],l=n[a-1][1],u=n[a][0],h=n[a][1],d=Math.hypot(u-c,h-l);if(s+d>=i-1e-9||a===n.length-1){let f=d>1e-9?Math.min(1,(i-s)/d):0,g=c+(u-c)*f,x=l+(h-l)*f,y=ll(Math.atan2(-(u-c),h-l));return{x:g,y:x,h:y,s:i}}s+=d}let r=n[n.length-1],o=n[n.length-2];return{x:r[0],y:r[1],h:ll(Math.atan2(-(r[0]-o[0]),r[1]-o[1])),s:t}}function j1(n,e){if(!n?.length)return null;let t=n.indexOf(e);return t<0||t>=n.length-1?n[n.length-1]:n[t+1]}function Xd(n,e,t=.35){if(!e?.at||!n?.length)return 0;let[i,s]=e.at,r=0;for(let o=0;o<n.length;o+=1)if(o>0&&(r+=Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1])),Math.hypot(n[o][0]-i,n[o][1]-s)<=t)return r;return qd(n)}function fl(n){return{reset(){},step(){},contain(){},parkPose(){let e=n.pose;return{x:e.x,y:e.y,z:e.z,h:e.h,pitch:0,roll:0,ve:e.ve||0,vn:e.vn||0,vd:e.vd||0}}}}function Z1(n){let e=n?.at||[0,0];return{x:e[0],y:e[1],z:0,h:n?.h??0,ve:0,vn:0,vd:0,pitch:0,roll:0}}function A0(n){let e=(n?.stations||[]).map(a=>({id:a.id,label:a.label||a.id,at:a.at.slice(0,2),region:a.region||a.id,level:a.level||"world",h:a.h??0})),t=W1(n?.edges||[]),i=n?.speed??H1,s=e[0]||{id:"home",at:[6,-8],label:"Home",region:"home",level:"world",h:-90},r={state:"idle",stationId:s.id,destId:null,pathStations:[s.id],points:[],length:0,arc:0,speed:i,hopOffAt:null,seat:E0.slice(),pose:Z1(s),t:0,sit:0},o={id:"train",label:"train",flies:!1,hover:!1,level:"world",spot:s.at.slice(),seat:E0.slice(),craft:fl(r),phase:"idle",t:0,from:null,exit:null,sit:0};return r.ride=o,{stations:e,graph:t,speed:i,train:r,edges:n?.edges||[]}}function hs(n){let e=n?.train?.state;return e==="boarding"||e==="enroute"||e==="alighting"}function R0(n){return n?.train?.pose||{x:0,y:0,z:0,h:0,ve:0,vn:0,vd:0}}function Yd(n){n.ride.spot=[n.pose.x,n.pose.y]}function ha(n,e,t=0){let i=Li(e.h);n.pose.x=e.x,n.pose.y=e.y,n.pose.z=0,n.pose.h=e.h,n.pose.ve=-Math.sin(i)*t,n.pose.vn=Math.cos(i)*t,n.pose.vd=0,n.arc=e.s,Yd(n)}function C0(n,e,t){let i=e instanceof Set?e:new Set(e||[]);return(n?.stations||[]).filter(s=>s.id===t?!1:i.has(s.region)||i.has(s.id))}function I0(n,e,t){let i=n?.train;if(!i||hs(n)||!t||t===i.stationId)return!1;let s=Y1(n.graph,i.stationId,t);if(!s||s.points.length<2)return!1;let r=$d(s.points,0);return ha(i,r,0),i.destId=t,i.pathStations=s.stations,i.points=s.points,i.length=s.length,i.arc=0,i.hopOffAt=null,i.state="boarding",i.sit=0,Yd(i),i.ride.phase="idle",i.ride.sit=0,hl(i.ride,e)?!0:(i.state="idle",i.destId=null,!1)}function P0(n){let e=n?.train;if(!e||e.state!=="enroute")return!1;let t=K1(n),i=j1(e.pathStations,t)||e.destId;return e.hopOffAt=i,!!i}function K1(n){let e=n.train,t=e.pathStations[0];for(let i of e.pathStations){let s=no(n.stations,i);s&&Xd(e.points,s)<=e.arc+.4&&(t=i)}return t}function J1(n,e,t){let i=n.train,s=no(n.stations,t)||no(n.stations,i.destId);if(s){let r=Xd(i.points,s);ha(i,$d(i.points,r),0)}i.stationId=s?.id||t||i.destId,i.state="alighting",i.ride.phase="flying",Yd(i),to(e,fl(i).parkPose(),i.seat),dl(i.ride,e)}function L0(n,e,t){let i=n?.train;if(!i)return n;let s=i.ride;if(i.state==="idle"){i.sit=Math.max(0,i.sit-t*3),s.sit=i.sit;let r=no(n.stations,i.stationId);return r&&ha(i,{x:r.at[0],y:r.at[1],h:r.h??i.pose.h,s:0},0),n}if(i.state==="boarding"){s.t+=t;let r=Math.min(1,s.t/Gd),o=r*r*(3-2*r),a=fl(i).parkPose(),c=a.z+(i.seat?.[2]??ua),l=s.from;return e.x=l.x+(a.x-l.x)*o,e.y=l.y+(a.y-l.y)*o,e.z=l.z+(c-l.z)*o+Math.sin(Math.PI*r)*.62,e.h=zs(l.h,a.h,420*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.min(1,Math.max(0,(r-.28)/.45)),s.sit=i.sit,r>=1&&(i.state="enroute",s.phase="flying",s.t=0,to(e,a,i.seat),i.sit=1,s.sit=1),n}if(i.state==="enroute"){let r=Math.min(i.length,i.arc+i.speed*t),o=$d(i.points,r);ha(i,o,i.speed),to(e,fl(i).parkPose(),i.seat),i.sit=1,s.sit=1;let a=i.hopOffAt||i.destId,c=no(n.stations,a),l=c?Xd(i.points,c):i.length;return(i.arc>=l-.05||i.arc>=i.length-.05)&&J1(n,e,a),n}if(i.state==="alighting"){s.t+=t;let r=Math.min(1,s.t/Wd),o=r*r*(3-2*r),a=s.from,c=s.exit;if(e.x=a.x+(c.x-a.x)*o,e.y=a.y+(c.y-a.y)*o,e.z=a.z+(0-a.z)*o+Math.sin(Math.PI*r)*.5,e.h=zs(a.h,c.h,360*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.max(0,1-r/.45),s.sit=i.sit,r>=1){i.state="idle",s.phase="idle",s.t=0,e.x=c.x,e.y=c.y,e.z=c.z,e.grounded=c.z<=0,e.vz=0,i.sit=0,s.sit=0,i.destId=null,i.hopOffAt=null,i.points=[],i.length=0,i.arc=0;let l=no(n.stations,i.stationId);l&&ha(i,{x:l.at[0],y:l.at[1],h:l.h??0,s:0},0)}return n}return n}function io(n,e,t,i){let s=null,r=1/0;for(let o of n){if(o.from!==e)continue;let a=(t-o.at[0])**2+(i-o.at[1])**2;a<=o.radius**2&&a<r&&(s=o,r=a)}return s}function jd(n){return n?`${n.from}|${n.level}|${n.at[0]}|${n.at[1]}`:null}function D0(n,e,t,i,s){let r=io(n,e,t,i),o=jd(r);return o?r.auto===!1||o===s?{portal:null,latch:o}:{portal:r,latch:o}:{portal:null,latch:null}}var N0=.95,Zd=1.45,Q1="notice_board";function U0(n,e,t,i,s=Zd){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e||!String(a.file||"").includes(Q1))continue;let c=a.at;if(!c||c.length<2)continue;let l=(t-c[0])**2+(i-c[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function eA(n,e,t,i,s=Zd){let r=null,o=1/0;for(let a of n||[]){let c=a.spot;if(!c||c.level!==e)continue;let l=(t-c.at[0])**2+(i-c.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function Kd(n,e,t,i,s=Zd){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let c=a.radius??2,l=(t-a.at[0])**2+(i-a.at[1])**2;l<=(c+s)**2&&l<o&&(r=a,o=l)}return r}function k0({portals:n,level:e,x:t,y:i,npcs:s=[],pickups:r=[],soakZones:o=[],plotSign:a=null,income:c=null,noticeBoard:l=null,visibleNpcs:u=s,visiblePickups:h=r,vehicles:d=[],stations:f=[],fishSpot:g=null}){let x=io(n,e,t,i);if(x)return{kind:"portal",verb:x.verb||"Go",portal:x};if(c)return{kind:"income",verb:`Collect ${Math.floor(c.bank)}`,building:c};if(a)return{kind:"plot",verb:`Buy ${a.price}`,plot:a};let y=T0(f,e,t,i);if(y)return{kind:"station",verb:"Board train",station:y};let p=b0(d,e,t,i);if(p)return{kind:"vehicle",verb:`Ride ${p.label||"broom"}`,vehicle:p};let _=eA(u,e,t,i);if(_)return{kind:"npc",verb:"Talk",npc:_};if(l)return{kind:"bulletin",verb:"Read",board:l};let b=Kd(o,e,t,i);if(b)return{kind:"soak",verb:"Soak",zone:b};if(g)return{kind:"fish",verb:"Fish",spot:g};let v=tA(h,e,t,i);return v?{kind:"pickup",verb:"Collect",pickup:v}:null}function tA(n,e,t,i,s=N0){let r=null,o=1/0;for(let a of n||[]){if(a.level!==e)continue;let c=(t-a.at[0])**2+(i-a.at[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function O0(n,e,t,i,s=N0){return n.filter(r=>{if(e.has(r.id))return!1;let o=t-r.spot[0],a=i-r.spot[1];return o*o+a*a<=s*s})}function pl(n){return String(n??"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,16)}function da(n){return n==="female"?"female":"male"}function Jd(n){return{name:pl(n?.name),gender:da(n?.gender)}}var F0={bounce:{hopMul:1.9,speedMul:1,gravMul:1,glow:!1},swift:{hopMul:1,speedMul:1.75,gravMul:1,glow:!1},glow:{hopMul:1,speedMul:1.08,gravMul:1,glow:!0},float:{hopMul:1.35,speedMul:1.12,gravMul:.38,glow:!0},hex_frog:{hopMul:1,speedMul:1,gravMul:1,glow:!0,hex:"frog"}},nA=8;var iA=.8;function ds(n,e){return(n?.kinds||[]).find(t=>t.id===e)||null}function sA(){return{found:[],bag:{}}}function B0(n){let e=Array.isArray(n?.found)?[...new Set(n.found.filter(i=>typeof i=="string"))]:[],t={};if(n?.bag&&typeof n.bag=="object")for(let[i,s]of Object.entries(n.bag)){let r=Math.floor(Number(s));r>0&&(t[i]=r)}return{found:e,bag:t}}function so(n){return new Set(n?.potions?.found||[])}function ef(n,e){return n?.potions?.bag?.[e]||0}function z0(n,e,t,i,s,r=.95){return(n||[]).filter(o=>{if(e.has(o.id)||(o.level||"world")!==t)return!1;let a=i-o.at[0],c=s-o.at[1];return a*a+c*c<=r*r})}function H0(n,e){if(!e?.id||!e.potion)return!1;let t=n.potions||(n.potions=sA());return t.found.includes(e.id)?!1:(t.found=[...t.found,e.id],t.bag={...t.bag,[e.potion]:(t.bag[e.potion]||0)+1},!0)}function V0(n,e,t,i){let s=ds(t,i);if(!s||ef(n,i)<1)return!1;let r={...n.potions.bag||{}};return r[i]-=1,r[i]<=0&&delete r[i],n.potions.bag=r,F0[s.effect]?.hex==="frog"?(e.cast={effect:"frog",left:iA},e.buff=null,e.glowColor=s.color||"#3cb371"):(e.cast=null,e.buff={id:i,left:s.duration},Qd(e,t)),!0}function tf(n,e,t,i,s=nA){return(n||[]).filter(r=>{if(!r||(r.level||"world")!==i)return!1;let o=e-r.x,a=t-r.y;return o*o+a*a<=s*s})}function Qd(n,e){n.speedMul=1,n.hopMul=1,n.gravMul=1,n.glowColor=null;let t=n.buff;if(!t)return;let i=ds(e,t.id),s=F0[i?.effect];s&&(n.speedMul=s.speedMul,n.hopMul=s.hopMul,n.gravMul=s.gravMul,s.glow&&(n.glowColor=i.color||"#c9a0ff"))}function G0(n,e){return n.cast?(n.cast.left-=e,n.cast.left>0?!0:(n.cast=null,n.buff||(n.glowColor=null),!1)):!1}function W0(n,e,t){return n.buff?(n.buff.left-=t,n.buff.left>0?(Qd(n,e),!1):(n.buff=null,Qd(n,e),!0)):!1}var q0=["japan_korea","china","mainland_se_asia","maritime_se_asia","south_asia","middle_east","north_africa","sahel","west_africa","east_africa","southern_africa","western_europe","eastern_europe","nordic","north_america","mesoamerica","andes","amazon_brazil","southern_cone","caribbean","oceania_pacific","australia","central_asia","arctic"],mI=new Set(q0),ml={japan_korea:{label:"Japan & Korea",ground:"#5a7a5c",architecture:{style:"tiled hip house",roofShape:"hip_tile",wallColor:"#f2ebe0",roofColor:"#3a3530",trimColor:"#2c4a3a",width:2.2,depth:2,height:1.55,eaves:.28},plants:[{name:"cherry",color:"#f4a0b8"},{name:"bamboo",color:"#6fbf6a"},{name:"pine",color:"#2f6b45"},{name:"maple",color:"#c45a3a"}],animals:[{name:"crane",shape:"bird",color:"#e8eef4"},{name:"tanuki",shape:"quad",color:"#8b5a3c"},{name:"koi",shape:"fish",color:"#e07040"}],trees:["v_tree_pine.glb","v_tree_willow.glb"]},china:{label:"China",ground:"#6a8a58",architecture:{style:"courtyard",roofShape:"pagoda_eave",wallColor:"#f0e6d2",roofColor:"#8b1e1e",trimColor:"#c9a227",width:2.6,depth:2.2,height:1.7,eaves:.35},plants:[{name:"bamboo",color:"#5fad55"},{name:"lotus",color:"#e8a0c0"},{name:"ginkgo",color:"#d4c04a"},{name:"osmanthus",color:"#e8d070"}],animals:[{name:"panda",shape:"quad",color:"#2a2a2a"},{name:"crane",shape:"bird",color:"#f0f4f8"},{name:"carp",shape:"fish",color:"#d05040"}],trees:["v_tree_willow.glb","v_tree_oak.glb"]},mainland_se_asia:{label:"Mainland Southeast Asia",ground:"#3f7a48",architecture:{style:"stilt house",roofShape:"thatch_steep",wallColor:"#d8c49a",roofColor:"#8a6a38",trimColor:"#5a4030",width:2.4,depth:1.9,height:1.35,stilts:.55,eaves:.3},plants:[{name:"bamboo",color:"#5fad55"},{name:"banana leaf",color:"#4a9a40"},{name:"frangipani",color:"#f5e6a8"},{name:"rice grass",color:"#8fbf60"}],animals:[{name:"elephant",shape:"large",color:"#7a7a7a"},{name:"water buffalo",shape:"quad",color:"#4a4540"},{name:"hornbill",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_oak.glb","tree.glb"]},maritime_se_asia:{label:"Maritime Southeast Asia",ground:"#2f6e4a",architecture:{style:"stilt house",roofShape:"saddle_thatch",wallColor:"#c9a878",roofColor:"#6b4a28",trimColor:"#3d2a18",width:2.5,depth:1.8,height:1.25,stilts:.65,eaves:.32},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"banana leaf",color:"#4a9a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"orangutan",shape:"quad",color:"#b06030"},{name:"hornbill",shape:"bird",color:"#1a1a1a"},{name:"monitor lizard",shape:"lizard",color:"#5a7040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},south_asia:{label:"South Asia",ground:"#8a9a55",architecture:{style:"courtyard",roofShape:"flat_dome",wallColor:"#e8c878",roofColor:"#c45a28",trimColor:"#8b4510",width:2.5,depth:2.3,height:1.6,eaves:.15},plants:[{name:"banyan",color:"#3d6b3a"},{name:"neem",color:"#4a8040"},{name:"marigold",color:"#f0a020"},{name:"lotus",color:"#e8a0c0"}],animals:[{name:"peacock",shape:"bird",color:"#2a6a8a"},{name:"elephant",shape:"large",color:"#6a6a6a"},{name:"langur",shape:"quad",color:"#7a7080"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},middle_east:{label:"Middle East",ground:"#c9b07a",architecture:{style:"courtyard",roofShape:"flat",wallColor:"#e8dcc8",roofColor:"#d4c4a8",trimColor:"#8a6a40",width:2.4,depth:2.4,height:1.7,eaves:.08},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"pomegranate",color:"#a03030"},{name:"fig",color:"#508040"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"falcon",shape:"bird",color:"#6a5038"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_rock.glb","stone.glb"]},north_africa:{label:"North Africa",ground:"#d2b896",architecture:{style:"adobe",roofShape:"flat",wallColor:"#f5efe6",roofColor:"#e0d4c0",trimColor:"#2a6a6a",width:2.3,depth:2.1,height:1.65,eaves:.06},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"cactus",color:"#4a8048"},{name:"alfalfa",color:"#6a9a40"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"fennec",shape:"quad",color:"#e8c878"},{name:"barbary macaque",shape:"quad",color:"#8a7060"}],trees:["v_rock.glb","stone.glb"]},sahel:{label:"Sahel",ground:"#c4a35a",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#c9a070",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"baobab",color:"#6a5a40"},{name:"acacia",color:"#8a9a40"},{name:"millet",color:"#c4a040"},{name:"desert bloom",color:"#e07090"}],animals:[{name:"giraffe",shape:"tall",color:"#c49050"},{name:"ostrich",shape:"bird",color:"#5a4030"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_tree_oak.glb","v_rock.glb"]},west_africa:{label:"West Africa",ground:"#6a8a48",architecture:{style:"courtyard",roofShape:"thatch_hip",wallColor:"#d4a878",roofColor:"#6a5030",trimColor:"#8b3a2a",width:2.3,depth:2.2,height:1.45,eaves:.25},plants:[{name:"baobab",color:"#6a5a40"},{name:"oil palm",color:"#3d7a40"},{name:"hibiscus",color:"#d03050"},{name:"tall grass",color:"#8fbf50"}],animals:[{name:"lion",shape:"quad",color:"#c49040"},{name:"hornbill",shape:"bird",color:"#2a2a2a"},{name:"chimpanzee",shape:"quad",color:"#4a3020"}],trees:["v_tree_oak.glb","tree.glb"]},east_africa:{label:"East Africa",ground:"#a89050",architecture:{style:"longhouse",roofShape:"cone_thatch",wallColor:"#c9a878",roofColor:"#7a5a28",trimColor:"#4a3020",width:2.1,depth:2.1,height:1.35,eaves:.22},plants:[{name:"acacia",color:"#8a9a40"},{name:"baobab",color:"#6a5a40"},{name:"coffee shrub",color:"#3d6a35"},{name:"tall grass",color:"#9ab050"}],animals:[{name:"zebra",shape:"quad",color:"#e8e8e8"},{name:"flamingo",shape:"bird",color:"#f08090"},{name:"giraffe",shape:"tall",color:"#c49050"}],trees:["v_tree_oak.glb","tree.glb"]},southern_africa:{label:"Southern Africa",ground:"#b09a58",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#e0c8a0",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"aloe",color:"#4a8048"},{name:"acacia",color:"#8a9a40"},{name:"protea",color:"#c04060"},{name:"fynbos",color:"#6a8050"}],animals:[{name:"springbok",shape:"quad",color:"#c4a060"},{name:"meerkat",shape:"upright",color:"#b08050"},{name:"secretary bird",shape:"bird",color:"#c8c0a8"}],trees:["v_tree_oak.glb","v_rock.glb"]},western_europe:{label:"Western Europe",ground:"#4a7c59",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8e0d0",roofColor:"#5a4a48",trimColor:"#3a2a20",width:2.1,depth:1.9,height:1.75,eaves:.2},plants:[{name:"oak",color:"#3d6b3a"},{name:"lavender",color:"#8a70b0"},{name:"grapevine",color:"#4a7040"},{name:"rose",color:"#d04060"}],animals:[{name:"fox",shape:"quad",color:"#c06030"},{name:"sparrow",shape:"bird",color:"#6a5a50"},{name:"hedgehog",shape:"round",color:"#6a5040"}],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},eastern_europe:{label:"Eastern Europe",ground:"#4a7050",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8d8c0",roofColor:"#8b2a2a",trimColor:"#2a4a6a",width:2.15,depth:1.95,height:1.7,eaves:.22},plants:[{name:"birch",color:"#d8d0c0"},{name:"sunflower",color:"#f0c020"},{name:"wheat",color:"#d4b050"},{name:"linden",color:"#4a8040"}],animals:[{name:"stork",shape:"bird",color:"#f0f0f0"},{name:"wolf",shape:"quad",color:"#6a6a6a"},{name:"deer",shape:"quad",color:"#8a6040"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},nordic:{label:"Nordic",ground:"#3d5c4a",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#5a4030",roofColor:"#3d5a40",trimColor:"#2a2018",width:2.8,depth:1.6,height:1.5,eaves:.18},plants:[{name:"pine",color:"#2f5a3a"},{name:"lingonberry",color:"#a03040"},{name:"birch",color:"#d8d0c0"},{name:"lichen",color:"#a8b070"}],animals:[{name:"moose",shape:"large",color:"#5a4030"},{name:"reindeer",shape:"quad",color:"#8a6a48"},{name:"puffin",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_pine.glb","tree.glb"]},north_america:{label:"North America",ground:"#4a7a50",architecture:{style:"timber frame",roofShape:"clapboard_gable",wallColor:"#f0ebe4",roofColor:"#5a3030",trimColor:"#2a4050",width:2.3,depth:2,height:1.65,eaves:.2},plants:[{name:"maple",color:"#c45a3a"},{name:"pine",color:"#2f5a3a"},{name:"goldenrod",color:"#e0b030"},{name:"oak",color:"#3d6b3a"}],animals:[{name:"deer",shape:"quad",color:"#8a6040"},{name:"raccoon",shape:"quad",color:"#5a5a5a"},{name:"blue jay",shape:"bird",color:"#3a6aaa"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},mesoamerica:{label:"Mesoamerica",ground:"#6a8a48",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#e8d0a8",roofColor:"#a05030",trimColor:"#2a6a6a",width:2.2,depth:2,height:1.55,eaves:.18},plants:[{name:"agave",color:"#5a8a50"},{name:"cactus",color:"#4a8048"},{name:"ceiba",color:"#3d6b3a"},{name:"marigold",color:"#f0a020"}],animals:[{name:"jaguar",shape:"quad",color:"#c08030"},{name:"quetzal",shape:"bird",color:"#2a8a50"},{name:"iguana",shape:"lizard",color:"#5a8040"}],trees:["v_tree_oak.glb","tree.glb"]},andes:{label:"Andes",ground:"#7a8a60",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#d4c0a0",roofColor:"#8a4030",trimColor:"#5a4030",width:2.15,depth:1.95,height:1.5,eaves:.16},plants:[{name:"quinoa",color:"#c4a050"},{name:"cactus",color:"#4a8048"},{name:"ichu grass",color:"#b0a060"},{name:"cantuta",color:"#e04050"}],animals:[{name:"llama",shape:"tall",color:"#c8b090"},{name:"condor",shape:"bird",color:"#2a2a2a"},{name:"vicu\xF1a",shape:"quad",color:"#c4a070"}],trees:["v_rock.glb","v_tree_oak.glb"]},amazon_brazil:{label:"Amazon & Brazil",ground:"#2d6a3e",architecture:{style:"stilt house",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:2.3,depth:1.9,height:1.2,stilts:.5,eaves:.28},plants:[{name:"rubber tree",color:"#3d6b3a"},{name:"bromeliad",color:"#d04060"},{name:"a\xE7a\xED palm",color:"#3d7a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"capybara",shape:"round",color:"#8a6a48"},{name:"toucan",shape:"bird",color:"#2a2a2a"},{name:"jaguar",shape:"quad",color:"#c08030"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},southern_cone:{label:"Southern Cone",ground:"#5a8a58",architecture:{style:"courtyard",roofShape:"tile_gable",wallColor:"#f0ebe4",roofColor:"#8a4030",trimColor:"#2a4a6a",width:2.25,depth:2.05,height:1.6,eaves:.2},plants:[{name:"omb\xFA",color:"#3d6b3a"},{name:"yerba mate",color:"#4a7040"},{name:"pampas grass",color:"#d8c890"},{name:"jacaranda",color:"#7a60b0"}],animals:[{name:"guanaco",shape:"tall",color:"#c4a070"},{name:"rhea",shape:"bird",color:"#8a7a60"},{name:"armadillo",shape:"round",color:"#8a7a60"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},caribbean:{label:"Caribbean",ground:"#5a9e7a",architecture:{style:"stilt house",roofShape:"hip_tile",wallColor:"#f0e8d0",roofColor:"#c04040",trimColor:"#2a6a8a",width:2.2,depth:1.9,height:1.4,stilts:.35,eaves:.25},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"sea grape",color:"#4a8040"},{name:"banana leaf",color:"#4a9a40"}],animals:[{name:"parrot",shape:"bird",color:"#2a8a40"},{name:"iguana",shape:"lizard",color:"#5a8040"},{name:"hummingbird",shape:"bird",color:"#2a8a8a"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},oceania_pacific:{label:"Oceania & Pacific",ground:"#4a8a68",architecture:{style:"longhouse",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:3,depth:1.5,height:1.3,stilts:.4,eaves:.3},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"breadfruit",color:"#4a8040"},{name:"hibiscus",color:"#e04060"},{name:"kelp-side grass",color:"#5a8a60"}],animals:[{name:"fruit bat",shape:"bird",color:"#4a3a30"},{name:"gecko",shape:"lizard",color:"#7a9a40"},{name:"parrot",shape:"bird",color:"#d04040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},australia:{label:"Australia",ground:"#c4a868",architecture:{style:"timber frame",roofShape:"verandah_gable",wallColor:"#e8e0d0",roofColor:"#6a7070",trimColor:"#3a4a50",width:2.4,depth:2.1,height:1.55,eaves:.35},plants:[{name:"eucalyptus",color:"#6a8a58"},{name:"wattle",color:"#e8c030"},{name:"spinifex",color:"#b0a050"},{name:"bottlebrush",color:"#c03040"}],animals:[{name:"kangaroo",shape:"upright",color:"#a07040"},{name:"emu",shape:"bird",color:"#4a4038"},{name:"koala",shape:"round",color:"#8a8a80"}],trees:["v_tree_oak.glb","v_rock.glb"]},central_asia:{label:"Central Asia",ground:"#b0a068",architecture:{style:"adobe",roofShape:"flat_dome",wallColor:"#e0d0b0",roofColor:"#a05040",trimColor:"#6a4030",width:2.3,depth:2.3,height:1.55,eaves:.1},plants:[{name:"saxaul",color:"#6a7050"},{name:"tulip",color:"#d03040"},{name:"wormwood",color:"#8a9a60"},{name:"apricot",color:"#e8a040"}],animals:[{name:"snow leopard",shape:"quad",color:"#c0b090"},{name:"saiga",shape:"quad",color:"#b09060"},{name:"eagle",shape:"bird",color:"#5a4030"}],trees:["v_rock.glb","v_tree_oak.glb"]},arctic:{label:"Arctic",ground:"#dce6ef",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#d0c8b8",roofColor:"#6a7a70",trimColor:"#3a4038",width:2.5,depth:1.7,height:1.25,eaves:.15},plants:[{name:"arctic willow",color:"#8a9a80"},{name:"reindeer moss",color:"#c0c890"},{name:"tundra flower",color:"#d080a0"},{name:"ice lichen",color:"#a8b8a0"}],animals:[{name:"arctic fox",shape:"quad",color:"#e8e8e8"},{name:"seal",shape:"round",color:"#4a5058"},{name:"ptarmigan",shape:"bird",color:"#d8d8d0"}],trees:["v_rock.glb","stone.glb"]}},nf={JP:"japan_korea",KR:"japan_korea",KP:"japan_korea",CN:"china",MN:"china",TH:"mainland_se_asia",VN:"mainland_se_asia",LA:"mainland_se_asia",KH:"mainland_se_asia",MM:"mainland_se_asia",ID:"maritime_se_asia",MY:"maritime_se_asia",SG:"maritime_se_asia",BN:"maritime_se_asia",PH:"maritime_se_asia",TL:"maritime_se_asia",IN:"south_asia",PK:"south_asia",BD:"south_asia",NP:"south_asia",BT:"south_asia",LK:"south_asia",MV:"south_asia",AF:"south_asia",SA:"middle_east",AE:"middle_east",IQ:"middle_east",IR:"middle_east",JO:"middle_east",SY:"middle_east",LB:"middle_east",IL:"middle_east",PS:"middle_east",KW:"middle_east",QA:"middle_east",BH:"middle_east",OM:"middle_east",YE:"middle_east",TR:"middle_east",CY:"middle_east",MA:"north_africa",DZ:"north_africa",TN:"north_africa",LY:"north_africa",EG:"north_africa",SD:"north_africa",ML:"sahel",NE:"sahel",TD:"sahel",BF:"sahel",MR:"sahel",NG:"west_africa",GH:"west_africa",CI:"west_africa",SN:"west_africa",GN:"west_africa",LR:"west_africa",SL:"west_africa",BJ:"west_africa",TG:"west_africa",GW:"west_africa",CV:"west_africa",GM:"west_africa",KE:"east_africa",TZ:"east_africa",UG:"east_africa",ET:"east_africa",RW:"east_africa",BI:"east_africa",SO:"east_africa",DJ:"east_africa",ER:"east_africa",SS:"east_africa",KM:"east_africa",SC:"east_africa",MG:"east_africa",MU:"east_africa",ZA:"southern_africa",NA:"southern_africa",BW:"southern_africa",ZW:"southern_africa",ZM:"southern_africa",MW:"southern_africa",MZ:"southern_africa",SZ:"southern_africa",LS:"southern_africa",AO:"southern_africa",FR:"western_europe",DE:"western_europe",BE:"western_europe",NL:"western_europe",LU:"western_europe",CH:"western_europe",AT:"western_europe",GB:"western_europe",IE:"western_europe",PT:"western_europe",ES:"western_europe",IT:"western_europe",AD:"western_europe",MC:"western_europe",SM:"western_europe",LI:"western_europe",VA:"western_europe",MT:"western_europe",GR:"western_europe",PL:"eastern_europe",CZ:"eastern_europe",SK:"eastern_europe",HU:"eastern_europe",RO:"eastern_europe",BG:"eastern_europe",RS:"eastern_europe",BA:"eastern_europe",HR:"eastern_europe",SI:"eastern_europe",ME:"eastern_europe",MK:"eastern_europe",AL:"eastern_europe",MD:"eastern_europe",UA:"eastern_europe",BY:"eastern_europe",RU:"eastern_europe",SE:"nordic",NO:"nordic",FI:"nordic",DK:"nordic",IS:"nordic",EE:"nordic",LV:"nordic",LT:"nordic",US:"north_america",CA:"north_america",MX:"mesoamerica",GT:"mesoamerica",BZ:"mesoamerica",HN:"mesoamerica",SV:"mesoamerica",NI:"mesoamerica",CR:"mesoamerica",PA:"mesoamerica",PE:"andes",BO:"andes",EC:"andes",CL:"andes",BR:"amazon_brazil",GY:"amazon_brazil",SR:"amazon_brazil",VE:"amazon_brazil",CO:"amazon_brazil",AR:"southern_cone",UY:"southern_cone",PY:"southern_cone",CU:"caribbean",JM:"caribbean",HT:"caribbean",DO:"caribbean",BS:"caribbean",BB:"caribbean",AG:"caribbean",DM:"caribbean",GD:"caribbean",KN:"caribbean",LC:"caribbean",VC:"caribbean",TT:"caribbean",FJ:"oceania_pacific",PG:"oceania_pacific",SB:"oceania_pacific",VU:"oceania_pacific",WS:"oceania_pacific",TO:"oceania_pacific",KI:"oceania_pacific",MH:"oceania_pacific",FM:"oceania_pacific",NR:"oceania_pacific",PW:"oceania_pacific",TV:"oceania_pacific",NZ:"oceania_pacific",AU:"australia",KZ:"central_asia",UZ:"central_asia",TM:"central_asia",TJ:"central_asia",KG:"central_asia",AM:"central_asia",AZ:"central_asia",GE:"central_asia",CM:"west_africa",CF:"west_africa",CG:"west_africa",CD:"west_africa",GA:"west_africa",GQ:"west_africa",ST:"west_africa"};function sf(n){let e=String(n?.iso||"").toUpperCase();if(nf[e])return nf[e];let t=Number(n?.lat)||0,i=Number(n?.lon)||0;return Math.abs(t)>=66?"arctic":i>=100&&i<=150&&t>=20&&t<=50?"china":i>=120&&i<=150&&t>=30&&t<=46?"japan_korea":i>=95&&i<=110&&t>=5&&t<=25?"mainland_se_asia":i>=95&&i<=140&&t>=-12&&t<=15?"maritime_se_asia":i>=60&&i<=95&&t>=5&&t<=40?"south_asia":i>=30&&i<=65&&t>=12&&t<=42?"middle_east":i>=-20&&i<=40&&t>=20&&t<=38?"north_africa":i>=-20&&i<=40&&t>=8&&t<=20?"sahel":i>=-20&&i<=20&&t>=-5&&t<=15?"west_africa":i>=20&&i<=50&&t>=-15&&t<=15?"east_africa":i>=10&&i<=40&&t>=-35&&t<=-15?"southern_africa":i>=-15&&i<=20&&t>=35&&t<=60?"western_europe":i>=15&&i<=50&&t>=40&&t<=65?"eastern_europe":i>=-30&&i<=35&&t>=54?"nordic":i>=-130&&i<=-50&&t>=25?"north_america":i>=-120&&i<=-80&&t>=5&&t<=30?"mesoamerica":i>=-85&&i<=-60&&t>=-25&&t<=5?"andes":i>=-75&&i<=-30&&t>=-35&&t<=10?"amazon_brazil":i>=-75&&i<=-45&&t>=-56&&t<=-20?"southern_cone":i>=110&&i<=180&&t>=-50&&t<=0?"oceania_pacific":i>=110&&i<=155&&t>=-45&&t<=-10?"australia":i>=-90&&i<=-55&&t>=10&&t<=28?"caribbean":i>=45&&i<=90&&t>=35&&t<=55?"central_asia":"western_europe"}var oA=["tropical_rainforest","savanna","desert","temperate_forest","mediterranean","boreal","tundra","polar","island"],_I=new Set(oA),aA={tropical_rainforest:{label:"Tropical rainforest",ground:"#2d6a3e",plants:["fern","orchid","banana leaf"],animals:["toucan","capybara","butterfly"],trees:["v_tree_oak.glb","tree.glb"]},savanna:{label:"Savanna",ground:"#c4a35a",plants:["acacia scrub","tall grass","baobab seedling"],animals:["gazelle","lion cub","ostrich"],trees:["v_tree_oak.glb","tree.glb"]},desert:{label:"Desert",ground:"#d4b896",plants:["cactus","desert bloom","sagebrush"],animals:["lizard","camel calf","fennec"],trees:["v_rock.glb","stone.glb"]},temperate_forest:{label:"Temperate forest",ground:"#4a7c59",plants:["oak leaf","wild berry","moss"],animals:["deer","fox","squirrel"],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},mediterranean:{label:"Mediterranean",ground:"#8fa86a",plants:["olive sprig","lavender","cypress cone"],animals:["goat","lizard","sparrow"],trees:["v_tree_oak.glb","v_tree_willow.glb"]},boreal:{label:"Boreal",ground:"#3d5c4a",plants:["pine needle","lichen","blueberry"],animals:["moose","wolf","owl"],trees:["v_tree_pine.glb","tree.glb"]},tundra:{label:"Tundra",ground:"#9aa7a0",plants:["arctic willow","reindeer moss","tundra flower"],animals:["reindeer","arctic fox","ptarmigan"],trees:["v_rock.glb","stone.glb"]},polar:{label:"Polar",ground:"#dce6ef",plants:["ice lichen","snow moss","polar blossom"],animals:["penguin","seal","snow petrel"],trees:["v_rock.glb","stone.glb"]},island:{label:"Island",ground:"#5a9e7a",plants:["coconut palm","hibiscus","sea grape"],animals:["parrot","crab","dolphin"],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]}};function cA(n){let e=String(n||"tree.glb").replace(/^village\//,"");return e.startsWith("v_")?`village/${e}`:e}var $0=[{id:"home",role:"home"},{id:"hall",role:"hall"},{id:"cafe",role:"cafe"},{id:"station",role:"station"}],X0={home:{w:1,d:1,h:1},hall:{w:1.25,d:1.15,h:1.15},cafe:{w:.95,d:.9,h:.95},station:{w:1.15,d:1.05,h:1.05}};function rf(n){let e=String(n||"").toUpperCase(),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function Y0(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function lA(n,e=0,t=""){let i=Math.abs(Number(n)||0),s=Y0(rf(t||`${n},${e}`));if(new Set(["AG","BS","BB","CV","KM","CU","CY","DM","DO","FJ","GD","HT","IS","JM","KI","MV","MT","MH","MU","FM","NR","PW","KN","LC","VC","WS","ST","SC","SG","SB","TO","TT","TV","VU","MG","LK","PH","ID","JP","NZ","GB","IE","SR","GY","BZ"]).has(String(t).toUpperCase())&&i<55&&s()<.72)return"island";if(i>=72)return"polar";if(i>=60)return s()<.55?"tundra":"boreal";if(i>=50)return s()<.65?"boreal":"temperate_forest";if(i>=35){let o=s();return o<.4?"mediterranean":o<.85?"temperate_forest":"desert"}if(i>=15){let o=s();return o<.4?"savanna":o<.7?"desert":"tropical_rainforest"}return s()<.55?"tropical_rainforest":"savanna"}function of(n){let e=String(n?.iso||"XX").toUpperCase(),t=Number(n?.lat)||0,i=Number(n?.lon)||0,s=lA(t,i,e),r=aA[s],o=sf(n),a=ml[o]||ml.western_europe,c=a.architecture,l=Y0(rf(e)),u=$0.map((M,T)=>{let O=T/$0.length*Math.PI*2+l()*.4,F=4.5+l()*2.5,W=X0[M.role]||X0.home;return{id:M.id,role:M.role,procedural:!0,style:c.style,roofShape:c.roofShape,wallColor:c.wallColor,roofColor:c.roofColor,trimColor:c.trimColor,width:c.width*W.w*(.92+l()*.16),depth:c.depth*W.d*(.92+l()*.16),height:c.height*W.h*(.94+l()*.12),stilts:c.stilts||0,eaves:c.eaves||.15,at:[Math.cos(O)*F,Math.sin(O)*F,0],h:l()*360|0}}),h=[],d=(a.trees?.length?a.trees:r.trees)||["tree.glb"],f=6+(l()*6|0),g=a.plants[l()*a.plants.length|0]?.color||"#4a7c59";for(let M=0;M<f;M++){let T=l()*Math.PI*2,O=8+l()*10;h.push({file:cA(d[l()*d.length|0]),at:[Math.cos(T)*O,Math.sin(T)*O,0],h:l()*360|0,s:.85+l()*.4,tint:g})}let x=a.plants,y=a.animals,p=x[l()*x.length|0],_=y[l()*y.length|0],b=[],v=4+(l()*3|0);for(let M=0;M<v;M++){let T=x[M%x.length],O=l()*Math.PI*2,F=2.5+l()*7;b.push({id:M===0?`plant_${e}`:`plant_${e}_${M}`,label:T.name,color:T.color,at:[Math.cos(O)*F,Math.sin(O)*F,.15],quest:M===0})}let P=[{id:`animal_${e}`,label:_.name,color:_.color,shape:_.shape,at:[Math.cos(l()*Math.PI*2)*(5+l()*5),Math.sin(l()*Math.PI*2)*(5+l()*5),.2],quest:!0}],R=[],I=Math.min(3,Math.max(2,y.length));for(let M=0;M<I;M++){let T=y[M%y.length];R.push({id:`wander_${e}_${M}`,label:T.name,color:T.color,shape:T.shape,at:[(l()-.5)*16,(l()-.5)*16,.15],speed:.45+l()*.55,phase:l()*Math.PI*2})}let L=["Elder Momo","Elder Pip","Elder Juniper","Elder Sora","Elder Coco"],E={id:`elder_${e}`,name:L[(rf(e)+3)%L.length],at:[.5+l(),-1.2+l()*.5,0]};return{iso:e,biome:s,biomeLabel:r.label,culture:o,cultureLabel:a.label,architecture:{...c},ground:a.ground||r.ground,buildings:u,trees:h,plants:b,animals:P,creatures:R,elder:E,plant:p.name,animal:_.name}}function ro(n,e){let t=String(n?.iso||"XX").toUpperCase(),i=n?.name||t,s=e||of(n),r=s.elder.id,o=s.plants[0].id,a=s.animals[0].id;return{quests:[{id:`w_${t}_welcome`,title:`Welcome to ${i}`,giver:r,intro:`${s.elder.name} waves you into the village.`,outro:`You found your footing in ${i}.`,reward:{coins:5},steps:[{type:"visit",region:`village_${t}`},{type:"talk",npc:r}]},{id:`w_${t}_nature`,title:`${s.cultureLabel||s.biomeLabel} walk`,giver:r,intro:`Seek the ${s.plant} and watch for a ${s.animal} in this ${s.architecture?.style||"village"}.`,outro:`You know the wilds of ${i} a little better.`,reward:{coins:8},requires:[`w_${t}_welcome`],steps:[{type:"find",item:o,label:s.plant},{type:"find",item:a,label:s.animal},{type:"talk",npc:r}]}]}}function gl(){return{iso:null,quests:{active:[],done:[],tracked:null,progress:{}}}}function ci(n){return(!n.world||typeof n.world!="object")&&(n.world=gl()),(!n.world.quests||typeof n.world.quests!="object")&&(n.world.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.world.quests.active)||(n.world.quests.active=[]),Array.isArray(n.world.quests.done)||(n.world.quests.done=[]),(!n.world.quests.progress||typeof n.world.quests.progress!="object")&&(n.world.quests.progress={}),n.world}function j0(n,e,t){let i=ci(n);i.iso=String(e.iso).toUpperCase();let s=ro(e,t),r=i.quests;for(let a of s.quests)r.done.includes(a.id)||r.active.includes(a.id)||(a.requires&&!a.requires.every(l=>r.done.includes(l))&&a.requires.every(l=>r.done.includes(l)||r.active.includes(l)),!(!(a.requires||[]).length||(a.requires||[]).every(l=>r.done.includes(l))))||(r.active.push(a.id),r.progress[a.id]={step:0,counts:{}},r.tracked||(r.tracked=a.id));let o=s.quests[0];return!r.done.includes(o.id)&&!r.active.includes(o.id)&&(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked=o.id),s}function af(n,e,t){let i=ci(n),s=ro(e,t),r=i.quests;for(let o of s.quests)r.done.includes(o.id)||r.active.includes(o.id)||!(o.requires||[]).every(c=>r.done.includes(c))||(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked||(r.tracked=o.id))}function cf(n){return new Map((n?.quests||[]).map(e=>[e.id,e]))}function uA(n,e){return!n||!e||n.type!==e.type?!1:n.type==="talk"?n.npc===e.npc:n.type==="visit"?n.region===e.region:n.type==="find"?n.item===e.item:!1}function hA(n,e,t){let i=ci(n),s=cf(t).get(e),r=i.quests;r.active=r.active.filter(a=>a!==e),r.done.includes(e)||r.done.push(e),delete r.progress[e],r.tracked===e&&(r.tracked=r.active[0]??null);let o=[{kind:"complete",questId:e,title:s?.title,outro:s?.outro}];return s?.reward?.coins&&(n.coins=(Number(n.coins)||0)+s.reward.coins,o.push({kind:"coins",amount:s.reward.coins})),o}function Z0(n,e,t){let i=ci(n),s=cf(e),r=[];for(let o of[...i.quests.active]){let a=s.get(o);if(!a)continue;let c=i.quests.progress[o]||{step:0,counts:{}},l=a.steps[c.step];uA(l,t)&&(c.step+=1,i.quests.progress[o]=c,c.step>=a.steps.length?r.push(...hA(n,o,e)):r.push({kind:"step",questId:o,step:c.step}))}return r}function K0(n,e){let t=ci(n),i=cf(e),s=[];for(let r of t.quests.active){let o=i.get(r),a=t.quests.progress[r]||{step:0},c=o?.steps?.[a.step];s.push({id:r,title:o?.title??r,tracked:t.quests.tracked===r,stepText:dA(c),done:!1})}for(let r of t.quests.done){if(!i.has(r)&&!String(r).startsWith("w_"))continue;let o=i.get(r);o&&s.push({id:r,title:o.title,done:!0})}return s}function dA(n){return n?n.type==="talk"?"Talk to the elder":n.type==="visit"?"Visit the village":n.type==="find"?n.label?`Find the ${n.label}`:`Find ${n.item.replace(/^plant_[A-Z]{2}$/,"the plant").replace(/^animal_[A-Z]{2}$/,"the animal")}`:n.type:""}var fA="ruckus-yard-web",Q0="capy-village-save";var ey=()=>({v:2,player:{x:0,y:-2.2,h:0},clockHours:9,clockDay:0,clothes:{owned:[],wearing:[]},discovered:["home"],signposts:[],score:0,coins:0,inventory:[],quests:{active:[],done:[],tracked:null,progress:{}},plots:["home"],buildings:[],economy:{lastTick:0},flags:{},bulletin:{day:-1},potions:{found:[],bag:{}},character:{name:"",gender:"male"},world:gl()});function J0(n,e){try{let t=n.getItem(e);return t?JSON.parse(t):null}catch{return null}}function pA(n){let e=ey();return!n||typeof n!="object"||(e.clothes.owned=Array.isArray(n.owned)?[...n.owned]:[],e.clothes.wearing=Array.isArray(n.wearing)?[...n.wearing]:[]),e}function ty(n){let e=J0(n,Q0);if(e&&e.v===2)return ny(e);let t=J0(n,fA),i=pA(t);return li(n,i),i}function ny(n){let e=ey();return e.player={x:Number(n.player?.x)||0,y:Number(n.player?.y)??-2.2,h:Number(n.player?.h)||0},e.clockHours=Number.isFinite(n.clockHours)?n.clockHours%24:9,e.clockDay=Number.isInteger(n.clockDay)&&n.clockDay>=0?n.clockDay:0,e.clothes.owned=Array.isArray(n.clothes?.owned)?[...n.clothes.owned]:[],e.clothes.wearing=Array.isArray(n.clothes?.wearing)?[...n.clothes.wearing]:[],e.discovered=Array.isArray(n.discovered)&&n.discovered.length?[...n.discovered]:["home"],e.signposts=Array.isArray(n.signposts)?[...n.signposts]:[],e.score=Number(n.score)||0,e.coins=Number(n.coins)||0,e.inventory=Array.isArray(n.inventory)?[...n.inventory]:[],e.quests=n.quests&&typeof n.quests=="object"?{active:Array.isArray(n.quests.active)?[...n.quests.active]:[],done:Array.isArray(n.quests.done)?[...n.quests.done]:[],tracked:n.quests.tracked??null,progress:n.quests.progress&&typeof n.quests.progress=="object"?{...n.quests.progress}:{}}:{active:[],done:[],tracked:null,progress:{}},e.plots=Array.isArray(n.plots)&&n.plots.length?[...n.plots]:["home"],e.buildings=Array.isArray(n.buildings)?n.buildings.map(t=>({...t})):[],e.economy=n.economy&&typeof n.economy=="object"?{lastTick:Number(n.economy.lastTick)||0}:{lastTick:0},e.flags=n.flags&&typeof n.flags=="object"?{...n.flags}:{},e.bulletin={day:Number.isInteger(n.bulletin?.day)?n.bulletin.day:-1},e.potions=B0(n.potions),e.character=Jd(n.character),n.world&&typeof n.world=="object"?e.world={iso:n.world.iso??null,quests:{active:Array.isArray(n.world.quests?.active)?[...n.world.quests.active]:[],done:Array.isArray(n.world.quests?.done)?[...n.world.quests.done]:[],tracked:n.world.quests?.tracked??null,progress:n.world.quests?.progress&&typeof n.world.quests.progress=="object"?{...n.world.quests.progress}:{}}}:e.world=gl(),ci(e),e}function li(n,e){n.setItem(Q0,JSON.stringify(e))}var lf="CAPPY2:";function iy(n){let e=new TextEncoder().encode(JSON.stringify(n)),t="";for(let i of e)t+=String.fromCharCode(i);return lf+btoa(t)}function sy(n){let e=String(n||"").trim();if(!e.startsWith(lf))return null;try{let t=atob(e.slice(lf.length)),i=Uint8Array.from(t,r=>r.charCodeAt(0)),s=JSON.parse(new TextDecoder().decode(i));return!s||s.v!==2?null:ny(s)}catch{return null}}function Di(n){let e=n.clothes?.owned??n.owned;return new Set(e||[])}function Ni(n){let e=Di(n),t=n.clothes?.wearing??n.wearing;return new Set((t||[]).filter(i=>e.has(i)))}function ry(n,e){let t=Di(n),i=Ni(n);t.add(e),i.add(e),n.clothes?(n.clothes.owned=[...t],n.clothes.wearing=[...i]):(n.owned=[...t],n.wearing=[...i])}function oy(n,e){if(!Di(n).has(e))return;let t=Ni(n);t.has(e)?t.delete(e):t.add(e),n.clothes?n.clothes.wearing=[...t]:n.wearing=[...t]}function mA(n){return new Set(n.discovered||[])}function ay(n,e){if(!e?.id)return null;let t=mA(n);return t.has(e.id)?null:(t.add(e.id),n.discovered=[...t],e.name)}function yl(n,e){let t=new Set(n.signposts||[]);return t.has(e)?!1:(t.add(e),n.signposts=[...t],!0)}function uf(n){return new Set(n.signposts||[])}function xl(n,e){let t=e instanceof Set?e:new Set(e||[]);return t.has(n.region)?!0:(n.unlock_with||[]).some(i=>t.has(i))}function cy(n,e,t,i,s){return{...n,player:{x:e.x,y:e.y,h:e.h},clockHours:t??n.clockHours,clockDay:s??n.clockDay??0,score:i??n.score}}function ly(n,e,t,i){return e.x=n.player.x,e.y=n.player.y,e.h=n.player.h,t&&Number.isFinite(n.clockHours)&&(t.hours=n.clockHours%24),t&&Number.isInteger(n.clockDay)&&(t.day=n.clockDay),Number.isFinite(i)?n.score:n.score??0}function uy(n){let e=n.patch_field,t=[];for(let s of n.clothing)t.push([s.spot[0],s.spot[1],1.6]);for(let s of n.dynamics)t.push([s.at[0],s.at[1],1.5]);for(let s of n.dress)s.blocks&&t.push([s.at[0],s.at[1],s.block||1.6]);let i=[];for(let s of e.cols)for(let r of e.rows){let o=e.origin[0]+s*e.spacing[0],a=e.origin[1]+r*e.spacing[1];t.some(([c,l,u])=>(o-c)**2+(a-l)**2<u*u)||i.push([o,a])}return i}function gA(n,e){let t=(Math.imul(n,73856093)^Math.imul(e,19349663)^1540483477)>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function hy(n,e,t,i,s,r){let o=[],a=Math.round(s*s*r),c=Math.floor((e-i)/s),l=Math.floor((e+i)/s),u=Math.floor((t-i)/s),h=Math.floor((t+i)/s);for(let d=c;d<=l;d+=1)for(let f=u;f<=h;f+=1){let g=(d+.5)*s,x=(f+.5)*s;if(Math.hypot(g-e,x-t)>i)continue;let y=gA(d,f);for(let p=0;p<a;p+=1){let _=(d+y())*s,b=(f+y())*s,v=n(_,b),P=y()<v**1.4,R=y()*Math.PI*2,I=(.75+y()*.6)*(.7+.3*v);P&&o.push([_,b,R,I])}}return o}var hf=35*Math.PI/180;function my(n=9,e=0){return{day:e,hours:n}}function gy(n,e,t=1200){for(n.hours+=e/t*24;n.hours>=24;)n.hours-=24,n.day+=1}function yy(n){let e=(n-6)/12*Math.PI;return[Math.cos(e),-Math.sin(e)*Math.sin(hf),Math.sin(e)*Math.cos(hf)]}function xy(n){let e=(n-18.6)/12*Math.PI,t=hf*.8;return[Math.cos(e),-Math.sin(e)*Math.sin(t),Math.sin(e)*Math.cos(t)]}function _y(n){return(n%8+8)%8/8}function dy(n){let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)}function vy(n,e){let t=e/24,i=.15+.6*dy(n),s=.15+.6*dy(n+1),r=t*t*(3-2*t);return i+(s-i)*r}var yA=[{at:-1,zenith:"#050814",horizon:"#101a33",ground:"#07090f",sun:"#9fb4ff",key:.7,hemiSky:"#4a5c94",hemiGround:"#1a1622",hemi:.6,fog:"#141c34",exposure:1.4,env:.12,stars:1,night:1,cloudLit:"#5c6a8e",cloudShade:"#1b2238"},{at:-.18,zenith:"#0b1230",horizon:"#27305a",ground:"#0c0d18",sun:"#9fb4ff",key:.6,hemiSky:"#4d5a8a",hemiGround:"#1a1520",hemi:.6,fog:"#212a4a",exposure:1.35,env:.13,stars:.9,night:1,cloudLit:"#5f6b92",cloudShade:"#20263e"},{at:-.06,zenith:"#1c2352",horizon:"#b8607a",ground:"#231a26",sun:"#ff9a6a",key:0,hemiSky:"#7a6aa0",hemiGround:"#2a1e22",hemi:.5,fog:"#6a4a6a",exposure:1.15,env:.15,stars:.35,night:.8,cloudLit:"#ff8f7a",cloudShade:"#4a3a5e"},{at:.04,zenith:"#3a5a9a",horizon:"#ffa060",ground:"#4a3424",sun:"#ffb070",key:1.2,hemiSky:"#9aa0c8",hemiGround:"#4a3424",hemi:.65,fog:"#c89a82",exposure:1.1,env:.22,stars:0,night:.35,cloudLit:"#ffc28a",cloudShade:"#8a6a7a"},{at:.22,zenith:"#4a86d0",horizon:"#f0d0a8",ground:"#5a4a34",sun:"#ffe0b8",key:2.4,hemiSky:"#b8d0f0",hemiGround:"#5a4a34",hemi:.8,fog:"#c8d4e0",exposure:1.05,env:.3,stars:0,night:0,cloudLit:"#fff4e4",cloudShade:"#a4acbe"},{at:1,zenith:"#3a78d8",horizon:"#bcd8f2",ground:"#5a5040",sun:"#fff4e0",key:2.9,hemiSky:"#c8e0ff",hemiGround:"#5a5040",hemi:.9,fog:"#c4d8ec",exposure:1,env:.35,stars:0,night:0,cloudLit:"#ffffff",cloudShade:"#b0bccc"}],xA={zenith:"#1a0a2e",horizon:"#c2603a",fog:"#3a2450",hemiSky:"#8d78c8",cloudLit:"#ff9a6a",cloudShade:"#3b2160"};function fy(n){let e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function py(n,e,t){if(typeof n=="number")return n+(e-n)*t;let i=typeof n=="string"?fy(n):n,s=typeof e=="string"?fy(e):e;return i.map((r,o)=>r+(s[o]-r)*t)}function by(n,e=""){let t=yA,i=Math.max(t[0].at,Math.min(t[t.length-1].at,n)),s=0;for(;s<t.length-2&&i>t[s+1].at;)s+=1;let r=t[s],o=t[s+1],a=(i-r.at)/(o.at-r.at),c={};for(let l of Object.keys(r))l!=="at"&&(c[l]=py(r[l],o[l],a));if(e==="halloween"){let l=.65*c.night+.25;for(let[u,h]of Object.entries(xA))c[u]=py(c[u],h,l*(u==="fog"?.8:1))}return c}function My(n,e){if(e!=null)return e;let t=n.getMonth()+1,i=n.getDate();return t===10||t===11&&i<=7?"halloween":""}function Sy(n,e,t){for(let i of n){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function _l(n){let e=n.bridge_gap??3,t=[],i=n.points;for(let s=0;s<i.length-1;s+=1){let r=[[0,1]],[o,a]=i[s],[c,l]=i[s+1],u=Math.hypot(c-o,l-a);for(let[h,d]of n.bridges||[]){let f=((h-o)*(c-o)+(d-a)*(l-a))/(u*u),g=o+(c-o)*f,x=a+(l-a)*f;if(f<-.05||f>1.05||Math.hypot(h-g,d-x)>n.width)continue;let y=e/u;r=r.flatMap(([p,_])=>{let b=[];return f-y>p&&b.push([p,Math.min(_,f-y)]),f+y<_&&b.push([Math.max(p,f+y),_]),b})}for(let[h,d]of r)t.push([o+(c-o)*h,a+(l-a)*h,o+(c-o)*d,a+(l-a)*d])}return t}function Hs(n,e,t){let[i,s,r,o]=n,a=r-i,c=o-s,l=a*a+c*c||1e-9,u=Math.max(0,Math.min(1,((e-i)*a+(t-s)*c)/l));return[i+a*u,s+c*u]}function wy(n,e,t,i=.42){let s=t+i;for(let r of e){let[o,a]=Hs(r,n.x,n.y),c=n.x-o,l=n.y-a,u=Math.hypot(c,l);if(u>=s)continue;let h,d;if(u>1e-6)h=c/u,d=l/u;else{let g=r[2]-r[0],x=r[3]-r[1],y=Math.hypot(g,x)||1;h=-x/y,d=g/y}n.x=o+h*s,n.y=a+d*s;let f=n.vx*h+n.vy*d;f<0&&(n.vx-=f*h,n.vy-=f*d)}}function vl(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function df(n,e,t,i=0){let s=n/t,r=e/t,o=Math.floor(s),a=Math.floor(r),c=s-o,l=r-a;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=vl(o,a,i),h=vl(o+1,a,i),d=vl(o,a+1,i),f=vl(o+1,a+1,i);return u+(h-u)*c+(d-u)*l+(u-h-d+f)*c*l}function Ey(n){let e=[];for(let t=0;t<n.length-1;t+=1)e.push([...n[t],...n[t+1]]);return e}function Ty(n,e,t){let i=1/0;for(let s of n){let[r,o]=Hs(s,e,t);i=Math.min(i,Math.hypot(e-r,t-o))}return i}var fa=n=>Math.max(0,Math.min(1,n));function _A(n,e,t,i=Ay(n)){let s=(df(e,t,3.1,1)-.5)*1.6+(df(e,t,.9,2)-.5)*.6,r=0;for(let l of i.roads){let u=Ty(l.segments,e,t);r=Math.max(r,fa((l.width/2+.4+s*.5-u)/.9))}for(let[l,u,h,d]of i.fields){let f=Math.min(e-l,h-e,t-u,d-t);r=Math.max(r,fa((f+s)/1.5))}let o=0;if(i.river){let l=Ty(i.river,e,t);o=fa((n.river.width/2+2.6+s-l)/1.4)}let a=0;if(n.forest){let[l,u,h,d]=n.forest.rect,f=Math.min(e-l,h-e,t-u,d-t);if(a=fa((f+s*2.5)/5),n.forest.clearing){let[g,x,y]=n.forest.clearing,p=fa((y-Math.hypot(e-g,t-x)+s*2)/4);a*=1-p,r=Math.max(r,p*.35*df(e,t,1.7,3))}}o*=1-r,a*=(1-r)*(1-o);let c=Math.max(0,1-r-o-a);return{dirt:r,sand:o,forest:a,grass:c}}function Ay(n,e=[]){return{roads:(n.roads||[]).map(t=>({width:t.width,segments:Ey(t.points)})),river:n.river?Ey(n.river.points):null,fields:e}}function Ry(n,e,t=[]){let[i,s,r,o]=n.bounds,a=Ay(n,t),c=new Uint8Array(e*e*4);for(let l=0;l<e;l+=1){let u=o-(l+.5)/e*(o-s);for(let h=0;h<e;h+=1){let d=i+(h+.5)/e*(r-i),f=_A(n,d,u,a),g=(l*e+h)*4;c[g]=Math.round(f.dirt*255),c[g+1]=Math.round(f.sand*255),c[g+2]=Math.round(f.forest*255),c[g+3]=Math.round(f.grass*255)}}return c}function Cy(n,e,t,i,s){let[r,o,a,c]=t,l=Math.floor((i-r)/(a-r)*e),u=Math.floor((c-s)/(c-o)*e);return l<0||u<0||l>=e||u>=e?0:n[(u*e+l)*4+3]/255}var vA=new Set(["park","patch"]);function Iy(n,e){let[t,i]=e.meadow_offset||[0,0],s=(h,d)=>h==="patch"?[d[0]+t,d[1]+i,...d.slice(2)]:[...d],r=h=>vA.has(h)?"world":h,o=h=>(h||[]).map(d=>({...d,at:s(d.level,d.at),level:r(d.level)})),a=(n.clothing||[]).map(h=>{let d=h.place==="house"?"house":"world",f=h.place==="patch"?[h.spot[0]+t,h.spot[1]+i]:[...h.spot];return{...h,spot:f,level:d}}),c=n.patch_field?{...n.patch_field,origin:[n.patch_field.origin[0]+t,n.patch_field.origin[1]+i]}:null,l=n.levels?.patch,u=l?[l.origin[0]+t-l.half[0],l.origin[1]+i-l.half[1],l.origin[0]+t+l.half[0],l.origin[1]+i+l.half[1]]:null;return{...n,levels:{world:e.level,house:n.levels.house},portals:e.portals.map(h=>({...h})),dress:o(n.dress),dynamics:o(n.dynamics),web_toys:o(n.web_toys),web_park:(n.web_park||[]).map(h=>({...h,level:"world"})),clothing:a,patch_field:c,field_rect:u,lights:(n.lights||[]).map(h=>({...h,level:r(h.level||"house")}))}}var bA=new Set(["world","house"]);function Py(n){return typeof n=="string"&&n!=="world"}function MA(n){return{origin:[...n.origin],half:[...n.half],inset:n.inset,cam_back:n.cam_back,cam_up:n.cam_up,fog:n.fog,name:n.name}}function Ly(n,e){if(!e||typeof e!="object")return n;let t={...n.levels};for(let i of e.levels||[])!i||typeof i.id!="string"||bA.has(i.id)||!Array.isArray(i.origin)||!Array.isArray(i.half)||(t[i.id]=MA(i));return{...n,levels:t,dress:[...n.dress||[],...e.dress||[]],lights:[...n.lights||[],...e.lights||[]]}}function bl(n){return Number(n.coins)||0}function ui(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return t?(n.coins=bl(n)+t,t):0}function Ml(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return bl(n)<t?!1:(n.coins-=t,!0)}function Vs(n){let e=n?.quests??n??[];return new Map(e.map(t=>[t.id,t]))}function jn(n){return(!n.quests||typeof n.quests!="object")&&(n.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.quests.active)||(n.quests.active=[]),Array.isArray(n.quests.done)||(n.quests.done=[]),(!n.quests.progress||typeof n.quests.progress!="object")&&(n.quests.progress={}),Array.isArray(n.inventory)||(n.inventory=[]),n.quests}function Ui(n,e){return jn(n).done.includes(e)}function hi(n,e){return jn(n).active.includes(e)}function El(n,e=[]){return(e||[]).every(t=>Ui(n,t))}function fs(n,e){let t=e?.requires;return t?t.quest_done?Ui(n,t.quest_done):t.flag?!!n.flags?.[t.flag]:!0:!0}function ff(n,e,t){let i=Vs(e),s=jn(n);return[...i.values()].filter(r=>r.giver!==t||s.done.includes(r.id)||s.active.includes(r.id)?!1:El(n,r.requires))}function pa(n,e,t){let i=Vs(t).get(e);if(!i)return!1;let s=jn(n);return s.done.includes(e)||s.active.includes(e)||!El(n,i.requires)?!1:(s.active.push(e),s.progress[e]={step:0,counts:{}},s.tracked||(s.tracked=e),!0)}function ps(n,e,t){let i=Vs(t).get(e);if(!i||!hi(n,e))return null;let s=jn(n).progress[e]||{step:0,counts:{}},r=i.steps[s.step];return r?{quest:i,step:r,index:s.step}:null}function SA(n,e){let t=jn(n);return!t.tracked||!hi(n,t.tracked)?null:ps(n,t.tracked,e)}function Dy(n,e){let t=jn(n);return hi(n,e)?(t.tracked=e,!0):!1}function Sl(n,e){return(n.inventory||[]).includes(e)}function Ny(n,e){return!e||Sl(n,e)?!1:(n.inventory=[...n.inventory||[],e],!0)}function wA(n,e){let t=n.inventory||[],i=t.indexOf(e);return i<0?!1:(t.splice(i,1),n.inventory=t,!0)}function EA(n,e){if(!n||!e||n.type!==e.type)return!1;switch(n.type){case"talk":return n.npc===e.npc;case"visit":return n.region===e.region;case"enter":return n.level===e.level;case"collect":case"find":return n.item===e.item;case"deliver":return n.npc===e.npc&&n.item===e.item;case"ruckus":return(e.score??0)>=(n.score??1);case"soak":return n.zone===e.zone||!n.zone&&n.region===e.region;case"buy_plot":return n.plot===e.plot;case"build":return n.building===e.building;default:return!1}}function TA(n,e,t){let i=Vs(t).get(e),s=jn(n),r=s.progress[e]||{step:0,counts:{}};return r.step+=1,s.progress[e]=r,r.step>=i.steps.length?AA(n,e,t):{kind:"step",questId:e,step:r.step}}function AA(n,e,t){let i=Vs(t).get(e),s=jn(n);s.active=s.active.filter(a=>a!==e),s.done.includes(e)||s.done.push(e),delete s.progress[e],s.tracked===e&&(s.tracked=s.active[0]??null);let r=[{kind:"complete",questId:e,title:i.title,outro:i.outro}],o=i.reward||{};return o.coins&&(ui(n,o.coins),r.push({kind:"coins",amount:o.coins})),o.flag&&(n.flags={...n.flags||{},[o.flag]:!0},r.push({kind:"flag",flag:o.flag})),o.item&&(Ny(n,o.item),r.push({kind:"item",item:o.item})),r}function wl(n,e,t){let i=Vs(e),s=[];for(let r of[...jn(n).active]){let o=ps(n,r,e);if(!o||!EA(o.step,t)||(o.step.type==="collect"||o.step.type==="find")&&!Sl(n,o.step.item))continue;if(o.step.type==="deliver"){if(!Sl(n,o.step.item))continue;wA(n,o.step.item)}let a=TA(n,r,e);Array.isArray(a)?s.push(...a):s.push(a)}return s}function Tl(n,e,t){return Ny(n,t)?[...wl(n,e,{type:"collect",item:t}),...wl(n,e,{type:"find",item:t})]:[]}function Al(n,e,t){if(!e?.item||Sl(n,e.item))return!1;if(!e?.quest)return!0;if(Ui(n,e.quest)||!hi(n,e.quest))return!1;let i=ps(n,e.quest,t);if(!i)return!1;let s=i.step;return(s.type==="collect"||s.type==="find")&&s.item===e.item}function pf(n,e,t={}){let i=Vs(e),s=jn(n),r=[];for(let o of s.active){let a=i.get(o),c=ps(n,o,e);r.push({id:o,title:a?.title??o,tracked:s.tracked===o,stepText:RA(c?.step,t),giver:a?.giver})}for(let o of s.done){let a=i.get(o);r.push({id:o,title:a?.title??o,done:!0,giver:a?.giver})}return r}function Rl(n,e,t={}){let i=SA(n,e);if(!i)return null;let s=i.step,r=t.npcs||[],o=t.pickups||[],a=t.regions||[],c=t.soakZones||[],l=t.plots||[],u=t.labels||{},h=(d,f)=>u[d]?.[f]??f;if(s.type==="talk"||s.type==="deliver"){let d=r.find(f=>f.id===s.npc);return d?.spot?{x:d.spot.at[0],y:d.spot.at[1],level:d.spot.level||"world",label:d.name||s.npc}:null}if(s.type==="visit"){let d=a.find(p=>p.id===s.region);if(!d?.rect)return null;let[f,g,x,y]=d.rect;return{x:(f+x)/2,y:(g+y)/2,level:"world",label:d.name||s.region}}if(s.type==="enter"){let d=(t.portals||[]).find(f=>f.level===s.level||f.to===s.level);return d?.at?{x:d.at[0],y:d.at[1],level:d.from||"world",label:h("levels",s.level)}:null}if(s.type==="collect"||s.type==="find"){let d=o.find(f=>f.item===s.item&&Al(n,f,e));return d?{x:d.at[0],y:d.at[1],level:d.level||"world",label:h("items",s.item)}:null}if(s.type==="soak"){let d=c.find(f=>f.id===s.zone)||c.find(f=>f.region===s.region);return d?{x:d.at[0],y:d.at[1],level:d.level||"world",label:d.label||"Hot springs"}:null}if(s.type==="buy_plot"){let d=l.find(f=>f.id===s.plot);return d?.sign?{x:d.sign.at[0],y:d.sign.at[1],level:"world",label:d.label||s.plot}:null}if(s.type==="build"){let f=[...n.plots||[]].reverse().map(_=>l.find(b=>b.id===_)).find(Boolean);if(!f?.rect)return null;let[g,x,y,p]=f.rect;return{x:(g+y)/2,y:(x+p)/2,level:"world",label:`Build: ${f.label||f.id}`}}return null}function RA(n,e={}){if(!n)return"";let t=(i,s)=>e[i]?.[s]??s;switch(n.type){case"talk":return`Talk to ${t("npcs",n.npc)}`;case"visit":return`Visit ${t("regions",n.region)}`;case"enter":return`Enter ${t("levels",n.level)}`;case"collect":return`Collect ${t("items",n.item)}`;case"find":return`Find ${t("items",n.item)}`;case"deliver":return`Deliver ${t("items",n.item)} to ${t("npcs",n.npc)}`;case"ruckus":return`Ruckus score ${n.score}+`;case"soak":return n.zone?`Soak at ${n.zone}`:`Soak in ${t("regions",n.region)}`;case"buy_plot":return`Buy ${t("plots",n.plot)}`;case"build":return`Build ${t("buildings",n.building)}`;default:return n.type}}var CA=.5;function Gs(n,e=1){return Math.round(n/e)*e}function IA(n,e){let[t,i]=n;return(Math.round(e/90)%4+4)%4%2===0?[t,i]:[i,t]}function Cl(n,e,t=0){let[i,s]=IA(e,t);return[n[0]-i/2,n[1]-s/2,n[0]+i/2,n[1]+s/2]}function PA(n,e){return n[0]<e[2]&&n[2]>e[0]&&n[1]<e[3]&&n[3]>e[1]}function Uy(n,e){return n[0]>=e[0]&&n[0]<=e[2]&&n[1]>=e[1]&&n[1]<=e[3]}function ma(n){return Math.floor(Math.max(0,Number(n)||0)*CA)}function Il(n,e,t,i,s=[],r=null){if(!n||!e)return!1;let o=Cl(t,n.footprint,i);if(!Uy([o[0],o[1]],e.rect)||!Uy([o[2],o[3]],e.rect))return!1;let a=s.filter(c=>c.type===n.id&&c.uid!==r).length;if(n.limit&&a>=n.limit)return!1;for(let c of s){if(r&&c.uid===r)continue;let l=c.def;if(l&&PA(o,Cl(c.at,l.footprint,c.h||0)))return!1}return!0}function ky(n,e,t=0,i=.9){let s=t*Math.PI/180,r=e[1]/2+i;return{at:[n[0]+Math.sin(s)*r,n[1]-Math.cos(s)*r],h:((t+180)%360+360)%360}}function Pl(n,e){return(n.buildings||[]).filter(t=>t.type===e).length}function Oy(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.at||a.at.length<2)continue;let c=(t-a.at[0])**2+(i-a.at[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function Fy(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]);let i=n.buildings.findIndex(a=>a.uid===e);if(i<0)return null;let s=n.buildings[i],r=(t?.buildings||[]).find(a=>a.id===s.type),o=ma(r?.price);return s.bank=0,n.buildings.splice(i,1),ui(n,o),{uid:e,type:s.type,refund:o,label:r?.label||s.type,def:r||null}}function By(n,e,t,i,s,r,o=[]){if(!r||!t)return!1;let a=(n.buildings||[]).find(c=>c.uid===e);return!a||!Il(r,t,i,s,o,e)?!1:(a.plot=t.id,a.at=[i[0],i[1]],a.h=s,!0)}function oo(n,e){if(n!=="halloween")return!1;let t=(e%24+24)%24;return t>=17&&t<22}var LA={yuzu:{at:[-7,-3],h:110,state:"idle"},momo:{at:[5,1],h:200,state:"idle"},pip:{at:[10,-7],h:280,state:"wander"},juniper:{at:[-11,5],h:40,state:"idle"},hana:{at:[-2,9],h:180,state:"idle"}};function zy(n,e=()=>!0){let t=LA[n];return!t||!e({id:n})?null:{at:t.at,h:t.h,state:t.state,wandering:t.state==="wander",party:!0}}var DA={start:21,end:6};function Hy(n,e,t){let i=t?.buildings||[];for(let s of e?.buildings||[]){let r=i.find(o=>o.id===s.type);if(r?.effects?.villager===n.id)return{...ky(s.at,r.footprint,s.h||0),building:s.uid}}return null}function Vy(n,e){if(!e)return n;let t={at:e.at,h:e.h,state:"sleep"},i=n.schedule?.length?n.schedule.map(s=>s.state==="sleep"?{...s,...t}:s):[{...DA,...t}];return{...n,home:e,schedule:i}}function NA(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function mf(n,e){for(let t of n.schedule||[])if(NA(e,t.start,t.end))return t;return null}function UA(n,e,t=0){let i=mf(n,e),s=i?.at?{at:i.at,h:i.h??n.spot.h,state:i.state||"idle"}:{at:n.spot.at,h:n.spot.h||0,state:"idle"};if(s.state==="sleep")return{...s,wandering:!1};if(s.state==="wander"){let r=Math.sin((e+t)*1.7)*.55,o=Math.cos((e+t*.3)*2.1)*.55;return{at:[s.at[0]+r,s.at[1]+o],h:s.h,state:"wander",wandering:!0}}return{...s,wandering:!1}}function Gy(n,e,t,i,s=()=>!0){if(oo(i,e)){let r=zy(n.id,s);if(r)return r}return UA(n,e,t)}var Wy=4.5,kA=3;function OA(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function gf(n){return typeof n=="string"?{text:n}:n}function qy(n,e){return!!(e&&n?.flags?.[e])}function $y(n,e){return!!(e&&Ui(n,e))}function FA(n,e,t){let i=gf(n);if(!i||!i.text||i.flag&&!qy(e,i.flag)||i.quest_done&&!$y(e,i.quest_done))return!1;if(i.hours){let[s,r]=i.hours;if(!OA(t,s,r))return!1}return!0}function BA(n){let e=gf(n);return e.flag?3:e.quest_done?2:e.hours?1:0}function zA(n,e){return!(!n||n.flag&&!qy(e,n.flag)||n.quest_done&&!$y(e,n.quest_done))}function Xy(n,e){let t=[];for(let i of n?.topics||[])if(zA(i,e)&&(t.push(i),t.length>=kA))break;return t}function Ws(n,e,t){let i=null,s=-1;for(let r of n||[]){let o=gf(r);if(!FA(o,e,t))continue;let a=BA(o);a>s&&(i=o,s=a)}return i?.text||null}function Yy(n,e,t,i=!1){return!n||mf(n,t)?.state==="sleep"?null:i&&n.party?.length?Ws(n.party,e,t):Ws(n.barks,e,t)}function jy(n,e,t,i=!1){return n?i&&n.party?.length?Ws(n.party,e,t)||"...":Ws(n.barks,e,t)||Ws(n.idle,e,t)||"...":"..."}function Zy(n){return new Set(n.plots||[])}function Zn(n,e){return Zy(n).has(e)}function Ll(n,e,t){for(let i of n?.plots||[]){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function Ky(n,e){Array.isArray(n.plots)||(n.plots=[]);for(let t of e?.plots||[])t.owned_default&&!n.plots.includes(t.id)&&n.plots.push(t.id)}function Jy(n,e,t){let i=(t?.plots||[]).find(s=>s.id===e);return!i||Zn(n,e)||i.price>0&&!Ml(n,i.price)?!1:(n.plots=[...Zy(n),e],!0)}function Qy(n,e,t,i,s,r=1.45){let o=null,a=1/0;for(let c of n?.plots||[]){if(!c.sign||Zn(e,c.id))continue;let l=(i-c.sign.at[0])**2+(s-c.sign.at[1])**2;l<=r**2&&l<a&&(o=c,a=l)}return o}var HA=7200*1e3,VA=.5,GA=60*1e3;function WA(n,e){return(n?.buildings||[]).find(t=>t.id===e)}function yf(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]),n.economy||(n.economy={lastTick:t});let i=Number.isFinite(n.economy.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i);if(s<=0)return n.economy.lastTick=t,0;let o=s>300*1e3?VA:1;s=Math.min(s,HA);let a=s/6e4*o,c=0;for(let l of n.buildings){let u=WA(e,l.type);if(!u?.income)continue;let h=Number(u.income.per_min)||0,d=Number(u.income.cap_min)||0,f=l.bank||0;l.bank=Math.min(f+h*a,h*d),c+=Math.max(0,l.bank-f)}return n.economy.lastTick=t,c}function ex(n,e,t){let i=Number.isFinite(n?.economy?.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i),r=Math.floor(yf(n,e,t));return{credited:r,elapsedMs:s,away:s>=GA&&r>=1}}function tx(n,e){let t=(n.buildings||[]).find(s=>s.uid===e);if(!t||!t.bank)return 0;let i=Math.floor(t.bank);return t.bank=0,ui(n,i),i}function nx(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.bank||a.bank<1)continue;let c=(t-a.at[0])**2+(i-a.at[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function Dl(n){return n?.bulletin??[]}function qA(n){let e=Math.sin(n*12.9898+78.233)*43758.5453;return e-Math.floor(e)}function ix(n,e){let t=Dl(n).length;return t?Math.floor(qA(e)*t)%t:-1}function ga(n,e){let t=ix(n,e);if(t<0)return null;let i=Dl(n)[t],{pickups:s,...r}=i;return{...r,bulletin:!0}}function $A(n,e){let t=ix(n,e);if(t<0)return[];let i=Dl(n)[t];return(i.pickups||[]).map(s=>({...s,quest:i.id}))}function sx(n,e,t){if((!n.bulletin||typeof n.bulletin!="object")&&(n.bulletin={day:-1}),n.bulletin.day===t)return{changed:!1,expired:[]};let i=new Set(Dl(e).map(o=>o.id)),s=n.quests||{active:[],done:[],tracked:null,progress:{}},r=(s.active||[]).filter(o=>i.has(o));s.active=(s.active||[]).filter(o=>!i.has(o)),s.done=(s.done||[]).filter(o=>!i.has(o));for(let o of i)delete s.progress?.[o];return i.has(s.tracked)&&(s.tracked=s.active[0]??null),n.quests=s,n.bulletin={day:t},{changed:!0,expired:r}}function rx(n,e,t,i){let s=ga(t,i);return{quests:{...n,quests:[...n?.quests||[],...s?[s]:[]]},pickups:{...e,pickups:[...e?.pickups||[],...$A(t,i)]}}}function ox(n){let e=String(n||"").replace(/[^a-zA-Z0-9_-]/g,"").slice(0,40);return e.length>=8?e:""}function xf(){return`c${(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):`${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`).slice(0,15)}`}var XA="CappyCoin";function pn(n){return`${Math.max(0,Math.floor(Number(n)||0))} ${XA}`}var ax=new Set(["on_talk","on_collect","on_place"]),YA=new Set(["give_coins","say","start_quest","spawn_prop"]);function jA(n,e){if(!n||n.type!==e?.type)return!1;let t=n.data&&typeof n.data=="object"?n.data:{};if(n.type==="on_talk"){let i=typeof t.npc=="string"?t.npc:"";return!(i&&i!==e.npc)}return n.type==="on_collect"?typeof t.item=="string"&&t.item===e.item:n.type==="on_place"?typeof t.building=="string"&&t.building===e.building:!1}function ZA(n,e){let t=n.data&&typeof n.data=="object"?n.data:{};return n.type==="give_coins"?(e.addCoins?.(t.amount),!0):n.type==="say"?(e.say?.(t.text),!0):n.type==="start_quest"?(e.offerQuest?.(t.quest),!0):n.type==="spawn_prop"?(e.spawnProp?.(t.file,t.at,t.h),!0):!1}function KA(n){let e=new Map;for(let t of Array.isArray(n)?n:[])!t||typeof t.from!="string"||typeof t.to!="string"||(e.has(t.from)||e.set(t.from,[]),e.get(t.from).push(t.to));return e}function JA(n,e,t){let i=new Map;for(let r of Array.isArray(n?.nodes)?n.nodes:[])r&&typeof r.id=="string"&&i.set(r.id,r);let s=KA(n?.wires);for(let r of i.values()){if(!ax.has(r.type)||!jA(r,e))continue;let o=[...s.get(r.id)||[]],a=new Set;for(;o.length;){let c=o.shift();if(a.has(c))continue;a.add(c);let l=i.get(c);if(l&&!ax.has(l.type)&&YA.has(l.type)&&ZA(l,t))for(let u of s.get(c)||[])o.push(u)}}}function cx(n,e,t={}){if(!(!n||!e||typeof e.type!="string"))for(let i of Array.isArray(n.blueprints)?n.blueprints:[])i&&typeof i=="object"&&JA(i,e,t)}var _f=.008333333333333333,ao=111320,Kn=.3048;var QA=1/14.5939029,vf=1/1.355817948,eR=.0023769,bf=32.174;function wf(n,e=0){let t=Number.parseFloat(n);return Number.isFinite(t)?t:e}function di(n,e){let t=n.match(new RegExp(`<${e}\\b([^>]*)>([\\s\\S]*?)</${e}>`,"i"));return t?{attrs:t[1]||"",body:t[2]}:null}function lx(n,e){let t=n.match(new RegExp(`${e}="([^"]*)"`));return t?t[1]:""}function Pn(n,e){let t=di(n,e);return t?wf(t.body):0}function tR(n,e){if(!n.length)return 0;if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t+=1){let[i,s]=n[t],[r,o]=n[t-1];if(e<=i){let a=(e-r)/(i-r||1);return o+(s-o)*a}}return n[n.length-1][1]}function nR(n){let e=di(n,"tableData");if(!e)return[];let t=e.body.trim().split(/[\s,]+/).map(s=>wf(s)).filter(s=>Number.isFinite(s)),i=[];for(let s=0;s+1<t.length;s+=2)i.push([t[s],t[s+1]]);return i}function Sf(n){let e=di(n,"value");return e?wf(e.body):0}function iR(n){let e=[],t=/<force\b([^>]*)>([\s\S]*?)<\/force>/gi,i;for(;i=t.exec(n);){let s=di(i[2],"direction");e.push({name:lx(i[1],"name"),frame:lx(i[1],"frame")||"BODY",dx:s?Pn(s.body,"x"):1,dy:s?Pn(s.body,"y"):0,dz:s?Pn(s.body,"z"):0,scale:Sf(i[2])})}return e}function Mf(n){let e=di(n,"range");return e?{min:Pn(e.body,"min"),max:Pn(e.body,"max")}:{min:-.35,max:.35}}function sR(n){let e=[],t=/<product>([\s\S]*?)<\/product>/gi,i;for(;i=t.exec(n);)i[1].includes("<product")||e.push(i[1]);return e}function co(n,e){let t=new RegExp(`<axis name="${e}"[\\s\\S]*?</axis>`,"i"),i=n.match(t)?.[0]||"";if(e==="LIFT")return{table:nR(i)};if(e==="DRAG"||e==="SIDE")return{value:Sf(i)};let s={damping:0,rate:0,surface:0};for(let r of sR(i)){let o=Sf(r);/alpha-rad|beta-rad/.test(r)?s.damping=o:/p-aero|q-aero|r-aero/.test(r)?s.rate=o:/elevator|aileron|rudder/.test(r)&&(s.surface=o)}return s}function rR(n){let e=di(n,"metrics")?.body||"",t=di(n,"mass_balance")?.body||"",i=di(n,"aerodynamics")?.body||n,s=di(n,"flight_control")?.body||n;return{name:n.match(/<fdm_config[^>]*name="([^"]+)"/)?.[1]||"craft",wingarea:Pn(e,"wingarea"),wingspan:Pn(e,"wingspan"),chord:Pn(e,"chord"),ixx:Pn(t,"ixx"),iyy:Pn(t,"iyy"),izz:Pn(t,"izz"),emptywt:Pn(t,"emptywt"),forces:iR(n),elevator:Mf(di(s,"channel")?.body||s),aileron:Mf((s.match(/<channel name="Roll"[\s\S]*?<\/channel>/i)||[""])[0]),rudder:Mf((s.match(/<channel name="Yaw"[\s\S]*?<\/channel>/i)||[""])[0]),lift:co(i,"LIFT"),drag:co(i,"DRAG"),side:co(i,"SIDE"),roll:co(i,"ROLL"),pitch:co(i,"PITCH"),yaw:co(i,"YAW")}}function qs(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,{flies:e=!0,hover:t=!1}={}){let i=typeof n=="string"?rR(n):n,s=Math.max(.05,i.emptywt*QA),r=Math.max(.02,i.ixx*vf),o=Math.max(.02,i.iyy*vf),a=Math.max(.02,i.izz*vf),c=i.wingarea||18,l=i.wingspan||4,u=i.chord||4,h={east:0,north:0,agl:.08,heading:0,pitch:0,roll:0,speed:0,vn:0,ve:0,vd:0},d=37.4,f=-122.1,g=2/Kn*.08,x=d,y=f,p=Math.max(.2,Math.cos(d*Math.PI/180)),_=0,b=0,v=0,P=0,R=0,I=0,L=0,E=0,M=0,T=0;function O(){x=d,y=f,p=Math.max(.2,Math.cos(d*Math.PI/180))}function F(){h.north=(d-x)*ao,h.east=(f-y)*ao*p,h.agl=g*Kn,h.heading=v*180/Math.PI,h.pitch=b*180/Math.PI,h.roll=_*180/Math.PI;let te=Math.hypot(P,R,I);h.speed=te*Kn;let z=Math.cos(b),Z=Math.sin(b),ce=Math.cos(_),Re=Math.sin(_),H=Math.cos(v),ee=Math.sin(v),de=z*H*P+(Re*Z*H-ce*ee)*R+(ce*Z*H+Re*ee)*I,se=z*ee*P+(Re*Z*ee+ce*H)*R+(ce*Z*ee-Re*H)*I,Ae=-Z*P+Re*z*R+ce*z*I;h.vn=de*Kn,h.ve=se*Kn,h.vd=Ae*Kn}function W(te,z,Z){d=x+z/ao,f=y+te/(ao*p),g=Math.max(.26,Z/Kn)}function Q(te,z,Z,ce,Re=80){F();let H=h.east,ee=h.north,de=h.agl,se=!1;return H<te&&(H=te,se=!0),H>z&&(H=z,se=!0),ee<Z&&(ee=Z,se=!0),ee>ce&&(ee=ce,se=!0),de>Re&&(de=Re,se=!0),se?(W(H,ee,de),P*=.35,R*=.35,I*=.35,F(),!0):!1}function $(){d=37.4,f=-122.1,g=.26,_=0,b=0,v=0,P=0,R=0,I=0,L=0,E=0,M=0,T=0,O(),F()}function ne(te,z,Z){let ce=qs(te,t?-.15:-.35,1),Re=qs(z,-1,1),H=qs(Z,-.6,1),ee=g*Kn,de=Math.hypot(P,R,I)*Kn;t&&ce>.28&&(H=Math.max(H,.22)),e&&!t&&ce>.75&&ee<1.6&&de>5.5&&(H=Math.max(H,.42));let se=e?qs(Re*.55-_*180/Math.PI/28,-1,1):0;return{throttle:ce,elevator:H,aileron:se,rudder:Re*.35,steer:Re}}function q(te,z){let Z=z.elevator*(i.elevator.max||.45),ce=z.aileron*(i.aileron.max||.4),Re=z.rudder*(i.rudder.max||.5),H=Math.max(.15,Math.hypot(P,R,I)),ee=Math.atan2(I,P),de=Math.asin(qs(R/H,-1,1)),se=.5*eR*H*H,Ae=l/(2*H),Ue=u/(2*H),Be=tR(i.lift.table||[],ee*180/Math.PI),gt=se*c*Be,Ze=se*c*(i.drag.value||.34),St=se*c*de*(i.side.value||-.4),U=Math.cos(ee),rn=Math.sin(ee),qe=-Ze*U+gt*rn,$e=St,Ce=-gt*U-Ze*rn;for(let xe of i.forces){let Xe=z.throttle*xe.scale;qe+=Xe*xe.dx,$e+=Xe*xe.dy,Ce+=Xe*xe.dz}let ft=-bf*Math.sin(b),Ie=bf*Math.sin(_)*Math.cos(b),A=bf*Math.cos(_)*Math.cos(b);qe+=ft*s,$e+=Ie*s,Ce+=A*s;let S=se*c*l*((i.roll.damping||0)*de+(i.roll.rate||0)*L*Ae+(i.roll.surface||0)*ce),B=se*c*u*((i.pitch.damping||0)*ee+(i.pitch.rate||0)*E*Ue+(i.pitch.surface||0)*Z),K=se*c*l*((i.yaw.damping||0)*de+(i.yaw.rate||0)*M*Ae+(i.yaw.surface||0)*Re),ie=qe/s+M*R-E*I,j=$e/s+L*I-M*P,Me=Ce/s+E*P-L*R,he=(S+(o-a)*E*M)/r,ve=(B+(a-r)*L*M)/o,Qe=(K+(r-o)*L*E)/a;P+=ie*te,R+=j*te,I+=Me*te,L+=he*te,E+=ve*te,M+=Qe*te;let re=Math.max(.2,Math.cos(b));_+=(L+Math.tan(b)*(E*Math.sin(_)+M*Math.cos(_)))*te,b+=(E*Math.cos(_)-M*Math.sin(_))*te,v+=(E*Math.sin(_)+M*Math.cos(_))/re*te,_=qs(_,-.85,.85),b=qs(b,-.7,.85);let be=Math.cos(b)*Math.cos(v)*P+(Math.sin(_)*Math.sin(b)*Math.cos(v)-Math.cos(_)*Math.sin(v))*R+(Math.cos(_)*Math.sin(b)*Math.cos(v)+Math.sin(_)*Math.sin(v))*I,Pe=Math.cos(b)*Math.sin(v)*P+(Math.sin(_)*Math.sin(b)*Math.sin(v)+Math.cos(_)*Math.cos(v))*R+(Math.cos(_)*Math.sin(b)*Math.sin(v)-Math.sin(_)*Math.cos(v))*I,De=-Math.sin(b)*P+Math.sin(_)*Math.cos(b)*R+Math.cos(_)*Math.cos(b)*I;d+=be*Kn*te/ao,f+=Pe*Kn*te/(ao*p),g-=De*te,g<.26&&(g=.26,I>0&&(I*=.15),De>0&&(P*=.92,R*=.92),b<0&&(b*=.6))}return $(),{spec:i,flies:e,hover:t,get east(){return h.east},get north(){return h.north},get agl(){return h.agl},get heading(){return h.heading},get pitch(){return h.pitch},get roll(){return h.roll},get speed(){return h.speed},get vn(){return h.vn},get ve(){return h.ve},get vd(){return h.vd},reset:$,contain:Q,step(te,{throttle:z=0,steer:Z=0,elevator:ce=0}={}){T+=te;let Re=ne(z,Z,ce);for(;T>=_f;)T-=_f,q(_f,Re);return F(),h},parkPose(te){return{x:te[0]+h.east,y:te[1]+h.north,z:Math.max(0,h.agl),h:-h.heading,pitch:h.pitch,roll:-h.roll,ve:h.ve,vn:h.vn,vd:-h.vd}},crossedFence(te,z,Z,ce){return!(te<=h.east&&h.east<=z&&Z<=h.north&&h.north<=ce)}}}var Nl=["fish_minnow","fish_silver","fish_carp"],oR={fish_minnow:"river minnow",fish_silver:"silver fish",fish_carp:"lazy carp"},Ef=1.45,aR=new Set(Nl);function cR(n,e,t){let i=1/0;for(let s of n||[]){let[r,o]=Hs(s,e,t),a=Math.hypot(e-r,t-o);a<i&&(i=a)}return i}function lR(n,e,t,i,s=Ef){if(!n?.length||!(e>0))return!1;let r=cR(n,t,i),o=e;return r>=o-.35&&r<=o+s+.65}function uR(n,e,t,i,s=Ef){for(let r of n||[]){if((r.level||"world")!==e)continue;let o=r.radius??2;if(Math.hypot(t-r.at[0],i-r.at[1])<=o+s+1.25)return r}return null}function hx({segments:n=[],halfWidth:e=0,soakZones:t=[],level:i,x:s,y:r,reach:o=Ef}){if(i!=="world")return null;let a=uR(t,i,s,r,o);return a?{id:a.id||"soak",kind:"soak",at:a.at}:lR(n,e,s,r,o)?{id:"river",kind:"river",at:[s,r]}:null}function hR(n,e){for(let t of n?.quests?.active||[]){if(!hi(n,t))continue;let i=ps(n,t,e);if(i&&i.step.type==="collect"&&aR.has(i.step.item))return i.step.item}return null}function dR(n,e,t=Math.random){let i=hR(n,e);if(i&&t()<.7)return i;let s=Math.floor(t()*Nl.length)%Nl.length;return Nl[s]}function dx(n,e,t=Math.random){let i=dR(n,e,t),s=oR[i]||i,r=(n.inventory||[]).includes(i),o=Tl(n,e,i),a=(n.inventory||[]).includes(i);return{item:i,label:s,fresh:!r&&a,effects:o}}var fR=()=>({keys:{forward:!1,back:!1,left:!1,right:!1,lookLeft:!1,lookRight:!1,hop:!1},stickX:0,stickY:0,stickTouch:!1,lookX:0,lookY:0,lookTouch:!1});function Tf(n="play",e=null){let i=ty(e??{getItem:()=>null,setItem:()=>{}});return{mode:n,world:null,overworld:null,fit:{},save:i,netId:"",character:{name:i.character.name,gender:i.character.gender},peers:[],player:u0(),level:"world",river:null,regionName:"",regionId:"",score:0,playing:!1,playMode:"story",paused:!1,mapOpen:!1,solids:[],bodies:[],clock:null,season:null,daylight:null,input:fR(),view:{lookH:0,lookPitch:0},portalLatch:null,selection:null,dirty:!1}}var pR=["mochi.glb","floor.glb","wall.glb","dirt.glb"];function Af(n,e,t=[],i=null){let s=Ly(Iy(n,e),i),r=px(s,e);for(let l of t)r.add(l);let o={segments:_l(e.river),halfWidth:e.river.width/2},a=e.spawn||{at:[0,-2.2],h:0},c=uy(s);return{world:s,overworld:e,files:r,river:o,spawn:a,pumpkinSpots:c}}function px(n,e){let t=new Set(pR);for(let i of[...n.dress,...n.web_park,...n.clothing])t.add(i.file);for(let i of e.dressing||[])t.add(i.file);for(let i of n.dynamics)t.add(Jr[i.kind].file);for(let i of n.web_toys)t.add(Jr[i.kind].file);return t}function fx(n,e,t,i){if(!Array.isArray(i)||i.length<3||!t)return;let[s,r,o]=i;n.push({level:e,x:t[0],y:t[1],z:t[2]||0,hx:s,hy:r,height:o})}function Ul(n,e){let t=[];for(let i of n){let s=i.level||e;fx(t,s,i.at,i.solid);for(let r of i.solids||[])fx(t,r.level||s,r.at||i.at,r.solid)}return t}var m=Tf("play",localStorage);function Rf(n,e){if(e===Xg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ca||e===sl){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===ca)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var kl=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new jf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ls.extractUrlBase(e);o=ls.resolveURL(l,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ra(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_x){try{o[je.KHR_BINARY_GLTF]=new Zf(e)}catch(h){s&&s(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ip(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new Df;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Kf(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Jf;break;case je.KHR_MESH_QUANTIZATION:o[h]=new Qf;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function mR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lf=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new ye(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],nn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new In(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ri(u),l.distance=h;break;case"spot":l=new Jc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Df=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,i){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,et))}return Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Uf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}},kf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Of=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,et)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,et)),Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$f=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xf=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yf=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},jf=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let x=new ke,y=new C,p=new tn,_=new C(1,1,1),b=new Gr(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&y.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,x.compose(y,p,_));for(let v in c)if(v==="_COLOR_0"){let P=c[v];b.instanceColor=new Os(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},_x="glTF",ya=12,mx={JSON:1313821514,BIN:5130562},Zf=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ya),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_x)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ya,r=new DataView(e,ya),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===mx.JSON){let l=new Uint8Array(e,ya+o,a);this.content=i.decode(l)}else if(c===mx.BIN){let l=ya+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Kf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=tp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=tp[u]||u.toLowerCase();if(o[u]!==void 0){let d=i.accessors[e.attributes[u]],f=lo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],y=c[g];y!==void 0&&(x.normalized=y)}h(f)},a,l,nn,d)})})}},Jf=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qf=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Ol=class extends rs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,y=-2*f+3*d,p=f-d,_=1-y,b=p-d+h;for(let v=0;v!==a;v++){let P=o[x+v+a],R=o[x+v+c]*u,I=o[g+v+a],L=o[g+v]*u;r[v]=_*P+b*R+y*I+p*L}return r}},gR=new tn,ep=class extends Ol{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return gR.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gx={9728:en,9729:$t,9984:Rd,9985:qo,9986:Mr,9987:ni},yx={33071:Si,33648:Ko,10497:bn},Cf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yR={CUBICSPLINE:void 0,LINEAR:kr,STEP:Ur},If={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function $s(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ki(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _R(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function vR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bR(n){let e,t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pf(t.attributes):e=n.indices+":"+Pf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Pf(n.targets[i]);return e}function Pf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function np(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var SR=new ke,ip=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new cs(this.options.manager):this.textureLoader=new Qc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return $s(r,a,s),ki(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ls.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Cf[s.type],a=lo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ot(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Cf[s.type],l=lo[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,y;if(f&&f!==h){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(_);b||(x=new l(a,p*f,s.count*f/u),b=new Vr(x,f/u),t.cache.add(_,b)),y=new ks(b,c,d%f/u,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),y=new Ot(x,c,g);if(s.sparse!==void 0){let p=Cf.SCALAR,_=lo[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,P=new _(o[1],b,s.sparse.count*p),R=new l(o[2],v,s.sparse.count*c);a!==null&&(y=new Ot(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let I=0,L=P.length;I<L;I++){let E=P[I];if(y.setX(E,R[I*c]),c>=2&&y.setY(E,R[I*c+1]),c>=3&&y.setZ(E,R[I*c+2]),c>=4&&y.setW(E,R[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=g}return y})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=gx[d.magFilter]||$t,u.minFilter=gx[d.minFilter]||ni,u.wrapS=yx[d.wrapS]||bn,u.wrapT=yx[d.wrapT]||bn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==$t,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let y=new Vt(x);y.needsUpdate=!0,d(y)}),t.load(ls.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ki(h,o),h.userData.mimeType=o.mimeType||MR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Fs,dn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ia,dn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return nt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Gn);let u=r.alphaMode||If.OPAQUE;if(u===If.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===If.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==cn){let h=r.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&o!==cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,et)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ki(h,r),t.associations.set(h,{materials:e}),r.extensions&&$s(s,h,r),h})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return xx(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=bR(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xx(new Rt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?xR(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],y=o[f],p,_=l[f];if(y.mode===Ln.TRIANGLES||y.mode===Ln.TRIANGLE_STRIP||y.mode===Ln.TRIANGLE_FAN||y.mode===void 0)p=r.isSkinnedMesh===!0?new Oc(x,_):new Y(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),y.mode===Ln.TRIANGLE_STRIP?p.geometry=Rf(p.geometry,sl):y.mode===Ln.TRIANGLE_FAN&&(p.geometry=Rf(p.geometry,ca));else if(y.mode===Ln.LINES)p=new Hc(x,_);else if(y.mode===Ln.LINE_STRIP)p=new Wr(x,_);else if(y.mode===Ln.LINE_LOOP)p=new Vc(x,_);else if(y.mode===Ln.POINTS)p=new qr(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(p.geometry.morphAttributes).length>0&&vR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ki(p,r),y.extensions&&$s(s,p,y),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&$s(s,h[0],r),h[0];let d=new Oe;r.extensions&&$s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ct(Wt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new zr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ki(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fc(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,y=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",y)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],y=h[4],p=[];for(let _=0,b=d.length;_<b;_++){let v=d[_],P=f[_],R=g[_],I=x[_],L=y[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let E=i._createAnimationTracks(v,P,R,I,L);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new $r(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,SR)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new na:l.length>1?u=new Oe:l.length===1?u=l[0]:u=new Mt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ki(u,r),r.extensions&&$s(i,u,r),r.matrix!==void 0){let h=new ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Oe;i.name&&(r.name=s.createUniqueName(i.name)),ki(r,i),i.extensions&&$s(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof dn||d instanceof Vt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ms[r.path]===ms.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ms[r.path]){case ms.weights:l=Ri;break;case ms.rotation:l=Ci;break;case ms.position:case ms.scale:l=Ii;break;default:i.itemSize===1?l=Ri:l=Ii;break}let u=s.interpolation!==void 0?yR[s.interpolation]:kr,h=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ms[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=np(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ci?ep:Ol;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wR(n,e,t){let i=e.attributes,s=new Dt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let u=np(lo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=np(lo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function xx(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=tp[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ki(n,e),wR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_R(n,e.targets,t):n})}var ER=new kl,Ut=new Map;async function mn(n){if(Ut.has(n))return Ut.get(n);let e;try{e=await ER.loadAsync(`/assets/models/${n}`)}catch(r){return console.warn(`Missing model ${n}`,r),Ut.set(n,{root:null,clips:[],box:null,missing:!0}),Ut.get(n)}let t=e.scene,i=l0.has(n)||n.includes("rug");t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!i,r.receiveShadow=!0;let o=r.name.includes("Fur"),a=[].concat(r.material);for(let c of a)o&&(c.vertexColors=!1),c.emissive&&c.emissiveIntensity>0&&c.emissive.getHex()!==0&&(c.emissiveIntensity=Math.max(c.emissiveIntensity,1.6)),c.map&&(c.map.anisotropy=ht.capabilities.getMaxAnisotropy());o&&(r.castShadow=!1)});let s=new Dt().setFromObject(t);return Ut.set(n,{root:t,clips:e.animations||[],box:s}),Ut.get(n)}function mt(n,e,t,i,s,r){let o=Ut.get(n);if(!o?.root){let h=new Oe;return h.name=`missing:${n}`,h.position.copy(Le(e,t,i)),r.add(h),h}let{root:a}=o,c=a.clone(!0);c.position.copy(Le(e,t,i));let l=Wt.degToRad(s||0),u=n.startsWith("manor_")||n.startsWith("village/");return c.rotation.y=u?l:Math.PI-l,r.add(c),c}function Fl(n){let e=new Map,t=new Map,i=n.clone();return vx(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function vx(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)vx(n.children[i],e.children[i],t)}var Mx={male:{scale:1.04,tint:null,flower:!1},female:{scale:.92,tint:"#f0a8b4",flower:!0}};async function Sx(){await mn("mochi.glb"),await mn("bloompin.glb")}function TR(n){n.traverse(e=>{if(!e.isMesh)return;let t=[].concat(e.material);for(let i of t)i&&i.color&&!i.userData.baseColor&&(i.userData.baseColor=i.color.clone())})}function AR(n,e){TR(n);let t=e?new ye(e):null;n.traverse(i=>{if(!i.isMesh)return;let s=i.name.includes("Fur"),r=[].concat(i.material);for(let o of r){if(!o||!o.color)continue;let a=o.userData.baseColor||o.color;o.color.copy(a),t&&o.color.lerp(t,s?.28:.42)}})}function RR(n){let e=Ut.get("bloompin.glb");if(!e)return null;let t=e.root.clone(!0);return t.scale.setScalar(1.35),t.position.copy(Le(-.18,.42,.58)),n.add(t),t}function CR(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=new is(e);t.colorSpace=et;let i=new ts(new Ai({map:t,transparent:!0,depthTest:!1}));return i.position.y=1.12,i.scale.set(1.5,.38,1),i.renderOrder=8,wx(i,n),i}function wx(n,e){let t=n.material.map.image,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height);let s=String(e||"").slice(0,16);if(n.visible=!!s,!s){n.material.map.needsUpdate=!0;return}i.font="700 28px Gill Sans, Trebuchet MS, sans-serif";let r=Math.min(240,Math.max(72,i.measureText(s).width+28)),o=(t.width-r)/2;i.fillStyle="rgba(28, 14, 36, 0.86)",i.strokeStyle="rgba(242, 132, 42, 0.85)",i.lineWidth=3,IR(i,o,12,r,40,14),i.fill(),i.stroke(),i.fillStyle="#f8edd4",i.textAlign="center",i.textBaseline="middle",i.fillText(s,t.width/2,32,r-16),n.material.map.needsUpdate=!0}function IR(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function PR(){let n=new Oe,e=new nt({color:"#3d9b4a",roughness:.42}),t=new nt({color:"#c8ec7a",roughness:.5}),i=new nt({color:"#1a2418",roughness:.4}),s=new Y(new Ye(.22,12,10),e);s.scale.set(1.2,.78,1.05),s.position.y=.16;let r=new Y(new Ye(.14,10,8),t);r.scale.set(1,.7,.55),r.position.set(0,.12,.12);let o=new Y(new Ye(.13,10,8),e);o.position.set(0,.26,.16);function a(l){let u=new Oe,h=new Y(new Ye(.045,8,8),new nt({color:"#f4f7e8"})),d=new Y(new Ye(.02,8,8),i);return d.position.z=.03,u.add(h,d),u.position.set(l*.07,.32,.22),u}function c(l,u){let h=new Y(new Ye(.07,8,8),e);return h.scale.set(.7,.45,1.1),h.position.set(l*.16,.07,u),h}return n.add(s,r,o,a(-1),a(1),c(-1,.08),c(1,.08),c(-1,-.1),c(1,-.1)),n.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n.visible=!1,n}function Bl(n,{gender:e="male",name:t=""}={}){let i=Ut.get("mochi.glb"),s=Fl(i.root);s.traverse(b=>{b.isMesh&&(Array.isArray(b.material)?b.material=b.material.map(v=>v.clone()):b.material&&(b.material=b.material.clone()),b.name.includes("Fur")||(b.castShadow=!0))});let r=new Dt().setFromObject(s),o=r.getSize(new C),a=r.getCenter(new C);s.position.sub(a),s.position.y+=o.y/2;let c=i.clips?.length?new Yr(s):null,l={},u="";if(c){for(let b of i.clips){let v=c.clipAction(b);v.enabled=!0,l[b.name]=v}l.Idle&&(l.Idle.setLoop(jr,1/0),l.Idle.play(),u="Idle"),l.Walk&&l.Walk.setLoop(jr,1/0),l.Hop&&l.Hop.setLoop(il,1)}let h=RR(s),d=CR(t),f=new Oe;f.add(s),f.add(d),n.add(f);function g(b){let v=Mx[b]||Mx.male;s.scale.setScalar(v.scale),AR(s,v.tint),h&&(h.visible=v.flower)}function x(b,{once:v=!1}={}){if(!c||!l[b]||u===b&&!v)return;let P=l[b],R=u?l[u]:null;P.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.12).play(),(v||b==="Hop"||b==="Flop")&&P.setLoop(il,1),R&&R!==P&&R.fadeOut(.12),u=b}g(e);let y=PR();f.add(y);let p="";function _(b){let v=b==="frog";p=v?"frog":"",s.visible=!v,y.visible=v,d.position.y=v?.52:1.12}return{holder:f,model:s,mixer:c,actions:l,setLook:g,setName:b=>wx(d,b),setClip:x,setForm:_,form:()=>p,dispose(){n.remove(f),c?.stopAllAction()}}}function zl(n,{x:e,y:t,z:i=0,h:s=0,flop:r=0,pitch:o=0,roll:a=0,sit:c=0}){n.position.copy(Le(e,t,i)),n.rotation.order="YXZ",n.rotation.y=Wt.degToRad(s),n.rotation.x=Wt.degToRad(o)+c*-.52,n.rotation.z=r>0?Math.sin(r*8)*.6:Wt.degToRad(a)}var ot=null,Ex=new Map,rp=null,uo=null;async function Tx(){await Sx(),ot=Bl(Je,{gender:m.character?.gender||"male",name:m.character?.name||""}),rp=Je,uo=new ri("#c9a0ff",0,4.5),uo.position.set(0,.45,0),ot.holder.add(uo)}function gs(n){ot?.setClip(n,{once:n==="Hop"||n==="Flop"})}function Hl(n){!ot||!n||(rp=ot.holder.parent,n.add(ot.holder),ot.holder.position.set(0,0,0),ot.holder.rotation.set(0,0,0))}function ho(){if(!ot)return;let n=rp||Je;ot.holder.parent!==n&&n.add(ot.holder)}function sp(n){ot?.setClip(n)}function op(n,e){if(!ot?.mixer)return;let t=m.rides?.[0],i=t&&(t.phase==="mounting"||t.phase==="dismounting"),s=t?.phase==="flying"||(t?.sit||0)>.4;i&&ot.actions.Hop?sp("Hop"):sp(s?"Idle":e&&ot.actions.Walk?"Walk":"Idle"),ot.mixer.update(n)}function xa(){if(!ot)return;let n=m.rides?.[0];if(n?.phase==="flying"&&ot.holder.parent!==Je){ot.holder.position.set(0,0,0),ot.holder.rotation.order="YXZ",ot.holder.rotation.x=n.sit*-.52,ot.holder.rotation.y=0,ot.holder.rotation.z=0;return}if(zl(ot.holder,{...m.player,sit:n?.sit||0}),ot.setForm?.(m.player.form),uo){let e=m.player.glowColor;uo.intensity=e?2.4:0,e&&uo.color.set(e)}}function Ax(n,e){ot&&(ot.setLook(n||"male"),ot.setName(e||m.character?.name||""))}function Rx(n,e,t){let i=m.world.clothing.find(r=>r.id===t);if(!i||!n?.model)return null;let s=e.get(t);if(s)return s;s=new Oe;for(let r of m.fit[t]||[]){let o=Ut.get(i.file);if(!o)continue;let a=o.root.clone(!0);a.position.copy(Le(r.at[0],r.at[1],r.at[2])),s.add(a)}return e.set(t,s),n.model.add(s),s}function ap(n,e,t){if(!n?.model)return;let i=new Set(t||[]);for(let s of i)Rx(n,e,s);for(let[s,r]of e)r.visible=i.has(s)}function Cx(n){if(!ot)return;let e=Rx(ot,Ex,n);e&&(e.visible=Ni(m.save).has(n))}function Vl(){ap(ot,Ex,[...Ni(m.save)])}qt();var Xs=new Map;function lp(n,e,t){return n+(e-n)*t}function LR(n){return Array.isArray(n)?n.join("\0"):""}function up(n){let e=new Set;for(let t of n){if(!t?.id||t.id===m.netId)continue;e.add(t.id);let i=Xs.get(t.id);if(!i){let r=Bl(Je,{gender:t.gender,name:t.name});i={id:t.id,capy:r,gender:t.gender,name:t.name,worn:new Map,clothesKey:"",x:t.x,y:t.y,z:t.z||0,h:t.h||0,target:t},Xs.set(t.id,i),m.playing&&ae(`${t.name||"A capybara"} wandered in`)}i.gender!==t.gender&&(i.gender=t.gender,i.capy.setLook(t.gender)),i.name!==t.name&&(i.name=t.name,i.capy.setName(t.name)),i.target=t,i.capy.setForm?.(t.form);let s=LR(t.clothes);s!==i.clothesKey&&(i.clothesKey=s,ap(i.capy,i.worn,t.clothes||[]))}for(let[t,i]of Xs)e.has(t)||(Xs.delete(t),i.capy.dispose(),m.playing&&ae(`${i.name||"A capybara"} headed home`));m.peers=n.filter(t=>t.id!==m.netId)}function Px(n){let e=Math.min(1,n*10);for(let t of Xs.values()){let i=t.target;t.x=lp(t.x,i.x,e),t.y=lp(t.y,i.y,e),t.z=lp(t.z,i.z||0,e),t.h=i.h||0,zl(t.capy.holder,t);let s=i.level===m.level;t.capy.holder.visible=s,!(!s||!t.capy.mixer)&&(t.capy.setClip(i.walking&&t.capy.actions.Walk?"Walk":"Idle"),t.capy.mixer.update(n),t.capy.holder.rotation.z=i.flop>0?Math.sin(i.flop*8)*.6:0)}}function Lx(){for(let n of Xs.values())n.capy.dispose();Xs.clear(),m.peers=[]}var Et=new In("#ffb070",2.4);Et.castShadow=!0;Et.shadow.mapSize.set(fn.shadow,fn.shadow);Et.shadow.camera.near=.5;Et.shadow.camera.far=40;Et.shadow.camera.left=Et.shadow.camera.bottom=-11;Et.shadow.camera.right=Et.shadow.camera.top=11;Et.shadow.bias=-4e-4;Et.shadow.normalBias=.02;Et.shadow.radius=3;Je.add(Et);Je.add(Et.target);var $l=new In("#8fa6ff",.7);Je.add($l);Je.add($l.target);var Ys=new Kc("#8d78c8","#3a2418",.9);Je.add(Ys);var hp={park:{sun:2.4,moon:.7,hemi:.9,env:.32,exposure:1.15},patch:{sun:2.1,moon:.8,hemi:.8,env:.28,exposure:1.15},house:{sun:1.1,moon:.35,hemi:.45,env:.18,exposure:1.25,sunColor:"#ffc890"},hall:{sun:1.2,moon:.4,hemi:.5,env:.2,exposure:1.22,sunColor:"#ffd4a0"},cafe:{sun:1.35,moon:.4,hemi:.55,env:.22,exposure:1.2,sunColor:"#ffc8a0"},mine:{sun:.45,moon:.25,hemi:.28,env:.08,exposure:1.05,sunColor:"#c8a070"}},dp=[];function Dx(n){let e=new Map,t=[];for(let i of Array.isArray(n.lights)?n.lights:[]){let s=i.level||"house",r=e.get(s)||0;r>=3||(e.set(s,r+1),t.push(i))}for(let i of t){let s=i.at||[0,0,1.5],r=i.intensity??1.2,o=new ri(i.color||"#ff9a4a",r,i.distance??7);o.position.copy(Le(s[0],s[1],s[2]??1.5)),o.castShadow=!1,Je.add(o),dp.push({light:o,base:r,flicker:!!i.flicker,level:i.level||"house"})}}function Nx(n,e){Je.fog.density=e;let t=hp[n]||(n==="world"?hp.park:hp.house);Et.intensity=t.sun,$l.intensity=t.moon,Ys.intensity=t.hemi,Je.environmentIntensity=t.env,ht.toneMappingExposure=t.exposure,Et.color.set(t.sunColor||"#ffb070"),Ys.color.set("#8d78c8"),Ys.groundColor.set("#3a2418"),Je.fog.color.set("#6b3a5e"),Je.background.set("#6b3a5e");for(let i of dp){let s=i.level===n;i.light.visible=s,i.light.intensity=s?i.base:0}}function fp(n){for(let e of dp)!e.light.visible||!e.flicker||(e.light.intensity=e.base*(.82+.18*Math.sin(n*2.3+e.light.id)))}function Ux(n,e,t=[-.35,-.47,.7]){let i=Math.max(t[2],.3),r=16/Math.hypot(t[0],t[1],i);Et.position.copy(Le(n+t[0]*r,e+t[1]*r,i*r)),Et.target.position.copy(Le(n,e,0)),Et.target.updateMatrixWorld()}var _a=(n,e)=>n.setRGB(e[0],e[1],e[2],et);function kx(n){_a(Et.color,n.sun),Et.intensity=n.key,$l.intensity=0,_a(Ys.color,n.hemiSky),_a(Ys.groundColor,n.hemiGround),Ys.intensity=n.hemi,_a(Je.fog.color,n.fog),_a(Je.background,n.fog),Je.environmentIntensity=n.env,ht.toneMappingExposure=n.exposure}function Ox(n){let e=0,t=0,i=0,s=!1;return r=>{if(s||!n()){i=r;return}i&&(t+=r-i,e+=1),i=r,!(e<150)&&(s=!0,t/e>24&&(fn.dprCap=1,ht.shadowMap.type=tl,Et.shadow.mapSize.set(512,512),Et.shadow.map?.dispose(),Et.shadow.map=null,us(!0)))}}var DR=120,NR=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,UR=`
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

    // Gradient: ground below, horizon band, zenith overhead.
    vec3 color = h > 0.0
      ? mix(horizon, zenith, pow(smoothstep(0.0, 1.0, h), 0.55))
      : mix(horizon, ground, smoothstep(0.0, 0.25, -h));

    // Warm glow around the sun, strongest when it is low.
    float sunUp = smoothstep(-0.15, 0.05, sunDir.y);
    float toSun = max(dot(dir, sunDir), 0.0);
    float low = 1.0 - smoothstep(0.0, 0.6, sunDir.y);
    color += sunColor * (pow(toSun, 6.0) * (0.25 + 0.45 * low) + pow(toSun, 48.0) * 0.5) * sunUp;

    // Stars: a sparse grid of points on the sphere, twinkling.
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

    // Moon: a lit disc whose terminator follows the phase.
    vec3 moonAdd = vec3(0.0);
    float moonBlock = 0.0; // the disc hides the stars behind it, lit or not
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

    // Sun disc.
    float sunDisc = smoothstep(0.99955, 0.9998, dot(dir, sunDir)) * sunUp;

    // Clouds: one noise layer projected onto a sky plane, drifting east.
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
  }`,fo=(n,e)=>e.setRGB(n[0],n[1],n[2],et);function Fx(){let n={zenith:{value:new ye},horizon:{value:new ye},ground:{value:new ye},sunColor:{value:new ye},sunDir:{value:new C(0,1,0)},moonDir:{value:new C(0,-1,0)},cloudLit:{value:new ye},cloudShade:{value:new ye},cloudCover:{value:.4},stars:{value:0},moonPhase:{value:.5},time:{value:0}},e=new An({side:Lt,depthWrite:!1,fog:!1,uniforms:n,defines:{OCTAVES:fn.coarse?2:4},vertexShader:NR,fragmentShader:UR}),t=new Y(new Ye(DR,48,24),e);t.renderOrder=-1,t.frustumCulled=!1,Je.add(t);let i=(s,r)=>r.set(s[0],s[2],-s[1]).normalize();return{dome:t,update(s,r,o,a,c,l){fo(s.zenith,n.zenith.value),fo(s.horizon,n.horizon.value),fo(s.ground,n.ground.value),fo(s.sun,n.sunColor.value),fo(s.cloudLit,n.cloudLit.value),fo(s.cloudShade,n.cloudShade.value),i(r,n.sunDir.value),i(o,n.moonDir.value),n.stars.value=s.stars,n.moonPhase.value=a,n.cloudCover.value=c,n.time.value=l}}}function Bx(n){let e=new URLSearchParams(location.search),t=Number(m.save?.clockHours),i=e.has("time")?Number(e.get("time")):Number.isFinite(t)?t:9,s=e.has("speed")?Number(e.get("speed")):1,r=Number.isInteger(m.save?.clockDay)?m.save.clockDay:0;return m.clock=my(Number.isFinite(i)?i%24:9,r),m.season=My(new Date,e.get("season")),{update(o,a,c){a&&gy(m.clock,o*s);let{hours:l,day:u}=m.clock,h=yy(l),d=xy(l),f=by(h[2],m.season);n.update(f,h,d,_y(u),vy(u,l),c),m.daylight={sun:h,moon:d,night:f.night,key:h[2]>-.05?h:d},Py(m.level)||kx(f)}}}var pp=0,zx=!1;function Hx(){zx=!0,clearTimeout(pp)}function Xt(){if(!m.save||zx)return;let n=cy(m.save,m.player,m.clock?.hours??m.save.clockHours,m.score,m.clock?.day??m.save.clockDay);m.save=n,li(localStorage,n)}function Tt(){clearTimeout(pp),pp=setTimeout(Xt,2e3)}function Vx(){window.addEventListener("pagehide",Xt),setInterval(()=>{m.playing&&!m.paused&&Xt()},3e4)}var ys,js;function rt(n,e,t="sine"){if(!ys)return;let i=ys.currentTime,s=ys.createOscillator(),r=ys.createGain();s.type=t,s.frequency.value=n,r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.06,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+e),s.connect(r),r.connect(ys.destination),s.start(i),s.stop(i+e+.02)}function Zs(){let n=window.AudioContext||window.webkitAudioContext;n&&(ys||(ys=new n),ys.resume()),kR()}function kR(){if(js){Dn();return}let n=new Audio("/assets/music/halloween.m4a");n.loop=!0,n.volume=.35,n.addEventListener("error",()=>{js===n&&(js=null)},{once:!0}),js=n,Dn()}function Dn(){if(js)if(m.playing&&!m.paused&&!document.hidden){let n=js.play();n&&n.catch&&n.catch(()=>{})}else js.pause()}var Ks,va=0,ba=0,Ma=0,Gx=!1;function qx(){Ks=document.querySelector("#coins-amt")||document.querySelector("#coins")}function $x(n){document.querySelector("#score").textContent=`Ruckus ${Math.floor(n)}`}function Wx(n){Ks&&(Ks.textContent=pn(n))}function un(n){if(!Ks)return;let e=Math.floor(n);if(e===ba&&Ma)return;let t=va;if(ba=e,t===e||!Gx){Gx=!0,va=e,Wx(e);return}cancelAnimationFrame(Ma);let i=performance.now(),s=550;Ks.classList.remove("pop"),Ks.offsetWidth,Ks.classList.add("pop");let r=o=>{let a=Math.min(1,(o-i)/s),c=1-(1-a)**3;va=t+(ba-t)*c,Wx(a<1?va:ba),Ma=a<1?requestAnimationFrame(r):0,Ma||(va=ba)};Ma=requestAnimationFrame(r)}function Xl(){let n=document.querySelector("#potion-buff");if(!n)return;if(m.player?.form==="frog"){n.classList.remove("hidden"),n.textContent=`Ribbit! \xB7 ${Math.max(0,Math.ceil(m.player.frogLeft||0))}s`;return}let e=m.player?.buff,t=e?ds(m.potions,e.id):null;if(!t){n.classList.add("hidden"),n.textContent="";return}n.classList.remove("hidden"),n.textContent=`${t.label} \xB7 ${Math.max(0,Math.ceil(e.left))}s`}qt();var Ne={world:new Oe,house:new Oe};Ne.world.name="world";Ne.house.name="house";Je.add(Ne.world,Ne.house);function Xx(n){for(let e of n){if(!e||Ne[e])continue;let t=new Oe;t.name=e,t.visible=!1,Ne[e]=t,Je.add(t)}return Ne}function OR(){return io(m.world.portals,m.level,m.player.x,m.player.y)}function mp(n){m.level=n;for(let[e,t]of Object.entries(Ne))t.visible=e===n;Nx(n,m.world.levels[n].fog),document.querySelector("#where").textContent=c0[n]||m.world.levels[n]?.name||n,m.regionName="",zt()}function gp(){let n=OR();if(!n){ae("Walk up to a gate");return}let{player:e,view:t}=m;e.x=n.spawn[0],e.y=n.spawn[1],e.z=0,e.vz=0,e.h=n.heading,t.lookH=n.heading,t.lookPitch=0,mp(n.level),ae(n.prompt),rt(520,.12)}function Yx(n,e,t){let i=m.world.levels[n],[s,r]=i.origin,[o,a]=i.half;if(mt(e,s,r,.02,0,Ne[n]).scale.set(o*2/4,1,a*2/4),n!=="world"){let h=mt(e,s,r,2.42,0,Ne[n]);h.scale.set(o*2/4,1,a*2/4),h.rotation.x=Math.PI}if(!t)return;let l=2,u=[["x",a],["x",-a],["y",o],["y",-o]];for(let[h,d]of u)for(let f=-(h==="x"?o:a)+1;f<(h==="x"?o:a)-.15;f+=l){let g=h==="x"?s+f:s+d,x=h==="x"?r+d:r+f;mt(t,g,x,0,h==="x"?0:90,Ne[n])}}var yp=[];function xp(){for(let n of yp)n.parent?.remove(n);yp.length=0;for(let n of m.plots?.plots||[]){if(!n.sign||Zn(m.save,n.id))continue;let e=mt("village/v_plot_sign.glb",n.sign.at[0],n.sign.at[1],0,n.sign.h||0,Ne.world);yp.push(e)}}function jx(){xp()}var _p=new Map;function FR(n){return m.buildings?.buildings?.find(e=>e.id===n)}function xs(){for(let e of _p.values())e.parent?.remove(e);_p.clear();let n=m.buildMode?.moveUid||null;for(let e of m.save.buildings||[]){if(n&&e.uid===n)continue;let t=FR(e.type);if(!t)continue;let i=mt(t.file,e.at[0],e.at[1],0,e.h||0,Ne.world);_p.set(e.uid,i)}}var Js=new Map,BR=new Set(["yuzu","momo","pip","juniper","hana"]);function zR(n,e){let t=new ye(e);n.traverse(i=>{!i.isMesh||i.name.includes("Fur")||(i.material=i.material.clone(),i.material.color.lerp(t,.35))})}async function Zx(n){let e=await mn("mochi.glb");if(!e?.root)throw new Error("mochi.glb failed to load");for(let t of n){let i=Fl(e.root);i.scale.setScalar(t.scale||1),zR(i,t.tint||"#c9a66b");let s=new Dt().setFromObject(i),r=s.getSize(new C),o=s.getCenter(new C);i.position.sub(o),i.position.y+=r.y/2;let a=new Oe;a.add(i);let c=null;if(BR.has(t.id)){await mn("witch.glb");let h=Ut.get("witch.glb").root.clone(!0);h.scale.setScalar(.34),h.position.copy(Le(0,.48,.12)),c=h,a.add(c),c.visible=!1}Ne[t.spot.level||"world"].add(a);let l,u={};if(e.clips?.length){l=new Yr(i);for(let h of e.clips){let d=l.clipAction(h);d.enabled=!0,u[h.name]=d}u.Idle?.setLoop(jr,1/0).play()}Js.set(t.id,{npc:t,base:t,holder:a,mixer:l,actions:u,clip:"Idle",visible:!0,partyHat:c,pos:{x:t.spot.at[0],y:t.spot.at[1]}}),Jx(t.id)}}function Kx(n){for(let e of Js.values())e.npc=n(e.base)}function vp(n=()=>!0){let e=[];for(let t of Js.values())n(t.npc)&&e.push({...t.npc,spot:{...t.npc.spot,at:[t.pos.x,t.pos.y]}});return e}function Yl(n){for(let[e,t]of Js){let i=n(t.npc);t.visible=i,t.holder.visible=i}}function Jx(n){let e=Js.get(n);if(!e)return;let{holder:t,pos:i}=e;t.position.copy(Le(i.x,i.y,0))}function bp(n,e,t){let i=Js.get(n);if(!i)return;let s=e-i.pos.x,r=t-i.pos.y;i.holder.rotation.y=Math.atan2(-s,r)}function Qx(n,e,t,i=9){for(let[s,r]of Js){let o=Gy(r.npc,i,s.length,m.season,u=>fs(m.save,u));r.partyHat&&(r.partyHat.visible=!!o.party);let a=o.state==="sleep"?.8:o.wandering?1.1:2.2;r.pos.x+=(o.at[0]-r.pos.x)*Math.min(1,n*a),r.pos.y+=(o.at[1]-r.pos.y)*Math.min(1,n*a),Jx(s);let c=Math.hypot(e-r.pos.x,t-r.pos.y);if(!r.visible||c>60){r.holder.visible=!1;continue}r.holder.visible=!0;let l=o.state!=="sleep"&&c<25;r.mixer&&r.mixer.update(n*(l?1:0)),c<8&&o.state!=="sleep"?bp(s,e,t):r.holder.rotation.y=Wt.degToRad(o.h||0)}}var po,jl;function e_(){po=document.querySelector("#quest-tracker"),jl=document.querySelector("#quest-list"),document.querySelector("#quests-btn").addEventListener("click",HR),document.querySelector("#quests-close").addEventListener("click",VR)}function HR(){t_(),m.paused=!0,document.querySelector("#quests").classList.remove("hidden")}function VR(){document.querySelector("#quests").classList.add("hidden"),m.paused=!1}function mo(){if(!po)return;let n=pf(m.save,m.quests,Zl()).filter(e=>e.tracked&&!e.done);if(!n.length){po.textContent="",po.classList.add("hidden");return}po.textContent=`${n[0].title}: ${n[0].stepText}`,po.classList.remove("hidden")}function GR(){let n=ga(m.bulletin,m.clock?.day??0);if(!n||hi(m.save,n.id)||Ui(m.save,n.id))return null;let e=m.npcs?.npcs?.find(i=>i.id===n.giver),t=document.createElement("div");return t.className="quest-row bulletin",t.textContent=`Notice board: ${n.title.replace(/^Bulletin:\s*/,"")} (${pn(n.reward?.coins??0)}) \u2014 ask ${e?.name||n.giver}`,t}function t_(){jl.replaceChildren();let n=GR();n&&jl.append(n);for(let e of pf(m.save,m.quests,Zl())){let t=document.createElement("div");if(t.className="quest-row",e.done)t.textContent=`\u2713 ${e.title}`,t.classList.add("done");else{t.textContent=e.tracked?`\u25B6 ${e.title}: ${e.stepText}`:e.title;let i=document.createElement("button");i.type="button",i.textContent=e.tracked?"Tracking":"Track",i.disabled=e.tracked,i.addEventListener("click",()=>{Dy(m.save,e.id),Tt(),t_(),mo()}),t.append(i)}jl.append(t)}}qt();var Sa,Kl,Nn,Yt,Mp;function n_(){Sa=document.querySelector("#dialogue"),Kl=document.querySelector("#dialogue-name"),Nn=document.querySelector("#dialogue-line"),Yt=document.querySelector("#dialogue-choices"),Mp=document.querySelector("#dialogue-tint"),document.querySelector("#dialogue-close").addEventListener("click",Jl)}function wa(){return Sa&&!Sa.classList.contains("hidden")}function Jl(){Sa?.classList.add("hidden"),m.paused=!1}function sn(n,e,t={}){let i=document.createElement("button");return i.type="button",i.textContent=n,i.addEventListener("click",()=>{e(),t.stay||Jl()}),i}function i_(){return m.clock?.hours??12}function WR(n,e){Nn.textContent=Ws(e.lines,m.save,i_())||"...",Yt.replaceChildren(sn("Back",()=>s_(n),{stay:!0}),sn("Goodbye",()=>{}))}function s_(n){let e=i_(),t=oo(m.season,e);Nn.textContent=jy(n,m.save,e,t),Yt.replaceChildren();for(let i of Xy(n,m.save))Yt.append(sn(i.label,()=>WR(n,i),{stay:!0}));Yt.append(sn("Goodbye",()=>{}))}function Sp(){Sa.classList.remove("hidden")}function r_(){m.paused=!0,Mp.style.background="#8a7355",Kl.textContent="Notice board",Yt.replaceChildren();let n=m.clock?.day??0,e=ga(m.bulletin,n),t=ff(m.save,m.quests,"juniper").filter(i=>i.bulletin);if(t.length){let i=t[0];Nn.textContent=i.intro,Yt.append(sn("Take the job",()=>{pa(m.save,i.id,m.quests),Un({type:"talk",npc:"juniper"}),ae(`Quest started: ${i.title}`),rt(540,.1)}),sn("Not now",()=>{}))}else e&&hi(m.save,e.id)?(Nn.textContent=e.intro,Yt.append(sn("Okay",()=>{}))):e&&Ui(m.save,e.id)?(Nn.textContent="Today's notice is already stamped. Come back tomorrow.",Yt.append(sn("Okay",()=>{}))):e&&!El(m.save,e.requires)?(Nn.textContent="The notices are blank for now.",Yt.append(sn("Okay",()=>{}))):(Nn.textContent="The board is empty.",Yt.append(sn("Okay",()=>{})));Sp()}function o_(n){if(!n)return;m.paused=!0,bp(n.id,m.player.x,m.player.y),Mp.style.background=n.tint||"#c9a66b",Kl.textContent=n.name,Yt.replaceChildren();let e=ff(m.save,m.quests,n.id),t=(m.save.quests?.active||[]).map(r=>({quest:m.quests.quests.find(o=>o.id===r),current:ps(m.save,r,m.quests)})).filter(({quest:r})=>r),i=t.find(({current:r})=>r?.step.type==="deliver"&&r.step.npc===n.id&&(m.save.inventory||[]).includes(r.step.item)),s=t.filter(({quest:r})=>r.giver===n.id);if(i){let{step:r}=i.current,o=m.items?.items?.find(a=>a.id===r.item);Nn.textContent=`Is that ${(o?.label||r.item).toLowerCase()} for me?`,Yt.append(sn(`Deliver ${o?.label||r.item}`,()=>{Un({type:"deliver",npc:n.id,item:r.item})}))}else if(e.length){let r=e[0];Nn.textContent=r.intro,Yt.append(sn(r.bulletin?"Take the job":`Accept: ${r.title}`,()=>{pa(m.save,r.id,m.quests),Un({type:"talk",npc:n.id}),ae(`Quest started: ${r.title}`),rt(540,.1)}),sn("Not now",()=>{}))}else if(s.length){let{quest:r,current:o}=s[0];Nn.textContent=r.intro,o?.step.type==="talk"&&o.step.npc===n.id?Yt.append(sn("Continue",()=>{Un({type:"talk",npc:n.id})})):Yt.append(sn("Okay",()=>{}))}else s_(n);Sp()}function a_(n,e,t){Nn.textContent=e||"Quest complete!",Kl.textContent=n,Yt.replaceChildren(sn("Nice!",()=>{t&&un(m.save.coins)})),Sp(),m.paused=!0,rt(620,.14)}qt();var Qs=Object.freeze(["walk","hop","talk_yuzu","open_map","station"]),qR=3.5,$R=5,wp=Object.freeze([-6,56]),XR=Object.freeze({walk:"Walk a few steps with WASD (or the stick)",hop:"Press Space (or Hop) to bounce",talk_yuzu:"Walk north to Yuzu and press E to talk",open_map:"Open the Map to see the lanes",station:"Walk west to the village station by the platform"});function c_(n){return(!n.flags||typeof n.flags!="object")&&(n.flags={}),n.flags}function yo(n){if(!n||typeof n!="object")return null;let e=c_(n);if(e.tutorial_done)return n.tutorial={step:"done"},n.tutorial;if(!n.tutorial||typeof n.tutorial!="object"){let t=typeof e.tutorial_step=="string"&&Qs.includes(e.tutorial_step)?e.tutorial_step:null;n.tutorial={step:t}}return n.tutorial.step!=null&&n.tutorial.step!=="done"&&!Qs.includes(n.tutorial.step)&&(n.tutorial.step="walk"),n.tutorial}function xo(n){return!n||n.flags?.tutorial_done?!1:(yo(n),Qs.includes(n.tutorial?.step))}function l_(n){return xo(n)&&XR[n.tutorial.step]||null}function Ql(n,e){yo(n),n.tutorial.step=e;let t=c_(n);e==="done"?(t.tutorial_done=!0,delete t.tutorial_step):t.tutorial_step=e}function go(n){let e=yo(n),t=Qs.indexOf(e.step);return t<0?!1:t>=Qs.length-1?(Ql(n,"done"),!0):(Ql(n,Qs[t+1]),!0)}function u_(n,e=null){return!n||n.flags?.tutorial_done?!1:(yo(n),!n.tutorial.origin&&e?n.tutorial.origin={x:e.x??0,y:e.y??0}:n.tutorial.origin||(n.tutorial.origin={x:0,y:-2.2}),Qs.includes(n.tutorial.step)?Ql(n,n.tutorial.step):Ql(n,"walk"),!0)}function h_(n,e){if(!xo(n)||!e)return!1;let t=n.tutorial.step;return t==="talk_yuzu"&&e.type==="talk"&&e.npc==="yuzu"||t==="open_map"&&(e.type==="map"||e.type==="open_map")?go(n):!1}function d_(n,e={}){if(!xo(n))return!1;let t=n.tutorial.step,i=e.player;if(t==="walk"&&i){let s=n.tutorial.origin||{x:0,y:-2.2};if(Math.hypot((i.x??0)-s.x,(i.y??0)-s.y)>=qR)return go(n)}if(t==="hop"&&i&&i.grounded===!1&&(i.vz??0)>.5||t==="open_map"&&e.mapOpen)return go(n);if(t==="station"&&i){let s=e.stationAt||wp;if(Math.hypot((i.x??0)-s[0],(i.y??0)-s[1])<=$R)return go(n)}return!1}var f_="WASD move \xB7 drag to look \xB7 Space hop \xB7 F flop \xB7 E talk \xB7 Ride the broom by the yard";function YR(){return document.querySelector("#keys-hint")}function jR(n){n.dataset.baseIdle||(n.dataset.baseIdle=n.dataset.idle||n.textContent||f_)}function eu(){let n=YR();if(!n)return;if(jR(n),!m.save||m.playMode==="multiplayer"||!xo(m.save)){let t=n.dataset.baseIdle||f_;n.dataset.idle=t,(!n.textContent||n.textContent!==t)&&(n.dataset.idle=t);return}let e=l_(m.save);e&&(n.dataset.idle=e,n.textContent=e)}function p_(){if(!(m.playMode==="multiplayer"||!m.save)){if(yo(m.save),m.save.flags?.tutorial_done){eu();return}u_(m.save,m.player),eu(),Tt()}}function m_(n){m.playMode==="multiplayer"||!m.save||h_(m.save,n)&&(eu(),Tt())}function g_(){if(m.playMode==="multiplayer"||!m.save||!m.playing||!xo(m.save))return;d_(m.save,{player:m.player,mapOpen:!!m.mapOpen,stationAt:wp})&&(eu(),Tt())}qt();var ZR={id:"broomstick",label:"broom",flies:!0,hover:!0,level:"world",spot:[1.25,.45],seat:[0,.02,.14]},Oi=null,_s=null;function Ea(n,e=.72){return new nt({color:n,roughness:e,metalness:.04})}function KR(){let n=new Oe,e=new Y(new _t(.028,.034,1.42,10),Ea("#6b3d1f",.55));e.rotation.x=-Math.PI/2,e.castShadow=!0,n.add(e);let t=new Y(new Yc(.038,.01,8,14),Ea("#c4a574",.45));t.position.z=.48,t.castShadow=!0,n.add(t);let i=new Oe;i.position.z=.62;let s=Ea("#c4a04a",.88),r=Ea("#8a6a2c",.9);for(let c=0;c<18;c+=1){let l=new Y(new ln(.018,.42,5),c%3===0?r:s),u=c/18*Math.PI*2;l.position.set(Math.cos(u)*.04,Math.sin(u)*.035,.18),l.rotation.x=Math.PI/2,l.rotation.z=Math.cos(u)*.12,l.castShadow=!0,i.add(l)}let o=new Y(new _t(.055,.05,.06,10),Ea("#4a2a12"));o.rotation.x=-Math.PI/2,i.add(o),n.add(i);let a=new Oe;return a.name="seat",a.position.set(0,.12,-.08),n.add(a),_s=new qr(new Rt().setAttribute("position",new st(new Float32Array(36),3)),new Fs({color:16757066,size:.05,transparent:!0,opacity:.85,depthWrite:!1})),_s.position.z=.78,n.add(_s),n.scale.setScalar(1.55),{root:n,seat:a}}function Ep(){let n=m.rides?.[0];return!n||!v0(n,m.player)?!1:(x_(),!0)}async function y_(n,e){let t=ux(n,{flies:!0,hover:!0}),i={...ZR,spot:[m.player.x||0,m.player.y||0]},s=_0(i,t),r=KR();return Oi=r.root,e.add(Oi),s.mesh=Oi,s.seatNode=r.seat,m.rides=[s],Ep(),s}function x_(){let n=m.rides?.[0];if(!n||!Oi)return;let e=eo(n);if(Oi.position.copy(Le(e.x,e.y,e.z+.08)),Oi.rotation.order="YXZ",Oi.rotation.y=Wt.degToRad(e.h),Oi.rotation.x=Wt.degToRad(e.pitch),Oi.rotation.z=Wt.degToRad(e.roll),_s&&n.phase==="flying"){let t=_s.geometry.attributes.position;for(let i=0;i<t.count;i+=1)t.setXYZ(i,(Math.random()-.5)*.12,(Math.random()-.5)*.08,Math.random()*.22);t.needsUpdate=!0,_s.visible=!0}else _s&&(_s.visible=!1)}function JR(){let n=m.rides?.[0];return!n||!hl(n,m.player)?!1:(gs("Hop"),rt(480,.1),ae("Hop on!"),!0)}function QR(){let n=m.rides?.[0];return!n||!dl(n,m.player)?!1:(ho(),gs("Hop"),rt(220,.1,"triangle"),ae("Hop off"),!0)}function __(){let n=m.rides?.[0];n&&(n.phase==="flying"?QR():n.phase==="idle"&&JR())}function v_(n){let e=m.rides?.[0];if(!e)return;let{input:t,player:i,view:s,world:r,level:o}=m,a=r?.levels?.[o],c=e.phase,l=S0(t.stickX,t.stickY,!!t.keys.hop,s.lookH,i.h),u=a?w0(e.spot,a.origin,a.half):null;(ai(e)||e.phase==="flying")&&M0(e,i,n,l,u),c==="mounting"&&e.phase==="flying"&&(Hl(e.seatNode),gs("Idle")),c==="dismounting"&&e.phase==="idle"&&ho(),x_()}function b_(){let n=m.rides?.[0];return n?n.phase==="flying"?"WASD fly \xB7 Space climb \xB7 E hop off":n.phase==="mounting"?"Hopping on\u2026":n.phase==="dismounting"?"Hopping off\u2026":"":""}qt();var M_="village/v_train.glb",Fi=null,Tp=null;function eC(n){let e=null;return n.traverse(t=>{e||t.name&&/seat/i.test(t.name)&&(e=t)}),e||(e=new Oe,e.name="seat",e.position.set(0,.18,-.1),n.add(e)),e}async function S_(n,e){let t=A0(n);return m.transit=t,await mn(M_),Fi=mt(M_,t.train.pose.x,t.train.pose.y,0,t.train.pose.h,e),Tp=eC(Fi),t.train.mesh=Fi,t.train.seatNode=Tp,w_(),t}function w_(){let n=m.transit;if(!n||!Fi)return;let e=R0(n);Fi.position.copy(Le(e.x,e.y,e.z)),Fi.rotation.order="YXZ",Fi.rotation.y=Wt.degToRad(e.h),Fi.rotation.x=0,Fi.rotation.z=0}function E_(n){let e=m.transit;return!e||!I0(e,m.player,n)?!1:(gs("Hop"),rt(480,.1),ae("All aboard!"),!0)}function T_(){let n=m.transit;return!n||n.train.state!=="enroute"||!P0(n)?!1:(ae("Next stop"),rt(260,.08,"triangle"),!0)}function A_(n){let e=m.transit;if(!e)return;let t=e.train.state;L0(e,m.player,n);let i=e.train.state;if(t==="boarding"&&i==="enroute"&&(Hl(Tp),gs("Idle")),t==="alighting"&&i==="idle"&&ho(),t==="enroute"&&i==="alighting"){ho(),gs("Hop"),rt(220,.1,"triangle");let s=e.stations.find(r=>r.id===e.train.stationId);ae(s?`Arrived: ${s.label}`:"Hop off")}w_()}function R_(){let n=m.transit;if(!n)return"";let e=n.train.state;return e==="enroute"?"E hop off at next station":e==="boarding"?"Boarding\u2026":e==="alighting"?"Hopping off\u2026":""}qt();var C_=!1;function I_(){C_||(C_=!0,document.querySelector("#dest-close")?.addEventListener("click",L_))}function P_(){let n=m.transit;if(!n){ae("No train here yet");return}let e=document.querySelector("#dest-list"),t=document.querySelector("#destination");if(!e||!t)return;let i=n.train.stationId,s=n.stations.find(a=>a.id===i),r=C0(n,m.save.discovered||[],i);e.replaceChildren();let o=[];s&&o.push({station:s,here:!0,unlocked:!0});for(let a of r)o.push({station:a,here:!1,unlocked:!0});for(let a of o){let c=document.createElement("button");c.type="button",c.className="dest-pill",c.textContent=a.station.label,c.disabled=a.here,a.here&&c.classList.add("current"),c.addEventListener("click",()=>{c.disabled||(L_(),E_(a.station.id)?rt(520,.1):ae("Can't board right now"))}),e.append(c)}m.paused=!0;for(let a of document.querySelectorAll(".sheet"))a.classList.add("hidden");t.classList.remove("hidden")}function L_(){document.querySelector("#destination")?.classList.add("hidden"),m.playing&&(m.paused=!1)}var tC="/assets/textures/nasa/blue_marble_2k.jpg",Ta=4.2,Ap=1.35;function D_(n,e,t=1){let i=(90-n)*(Math.PI/180),s=(e+180)*(Math.PI/180);return new C(-t*Math.sin(i)*Math.cos(s),t*Math.cos(i),t*Math.sin(i)*Math.sin(s))}function N_(n){let e=new Oe;e.name="world-globe",e.visible=!1,Je.add(e);let i=new cs().load(tC);i.colorSpace=et;let s=new Y(new Ye(1,64,48),new nt({map:i,roughness:.85,metalness:.05}));s.name="earth",e.add(s);let r=new Y(new Ye(1.02,48,32),new cn({color:7260415,transparent:!0,opacity:.08,side:Lt}));e.add(r);let o=new Xr(16777215,.55),a=new In(16773856,1.1);a.position.set(3,2,2),e.add(o,a);let c=new Oe;c.name="country-markers",e.add(c);let l=new Ye(.008,4,4),u=new cn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),h=new Map;for(let z of n||[]){let Z=new Y(l,u),ce=D_(z.lat,z.lon,1.015);Z.position.copy(ce),Z.userData.country=z,c.add(Z),h.set(z.iso,{country:z,mesh:Z,pos:ce.clone()})}let d=document.createElement("canvas");d.width=256,d.height=64;let f=new is(d);f.colorSpace=et;let g=new ts(new Ai({map:f,transparent:!0,depthTest:!0}));g.scale.set(.28,.07,1),g.visible=!1,e.add(g);function x(z){let Z=d.getContext("2d");Z.clearRect(0,0,256,64),Z.fillStyle="rgba(8, 12, 20, 0.55)",Z.beginPath(),Z.roundRect?Z.roundRect(16,14,224,36,10):Z.rect(16,14,224,36),Z.fill(),Z.fillStyle="#f4efe4",Z.font="600 22px system-ui, sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(String(z||"").slice(0,22),128,32),f.needsUpdate=!0}function y(){g.visible=!1}function p(z){let Z=z.pos.clone().normalize();x(z.country.name),g.position.copy(Z).multiplyScalar(1.06),g.visible=!0}let _={root:e,sphere:s,markers:c,byIso:h,yaw:.4,pitch:.25,dist:Ta,targetDist:Ta,dragging:!1,lastX:0,lastY:0,focusIso:null,enabled:!1,onSelect:null},b=new el,v=new le;function P(){let z=Math.max(-1.2,Math.min(1.2,_.pitch)),Z=_.dist*Math.cos(z)*Math.sin(_.yaw),ce=_.dist*Math.sin(z),Re=_.dist*Math.cos(z)*Math.cos(_.yaw);wt.position.set(Z,ce,Re),wt.lookAt(0,0,0),wt.near=.05,wt.far=40,wt.updateProjectionMatrix()}function R(z){_.enabled=z,e.visible=z,z&&P()}function I(){_.targetDist=Ta,_.focusIso=null,y()}function L(z){let Z=h.get(String(z).toUpperCase());if(!Z)return;_.focusIso=Z.country.iso;let ce=Z.pos.clone().normalize();_.yaw=Math.atan2(ce.x,ce.z),_.pitch=Math.asin(Math.max(-1,Math.min(1,ce.y))),_.targetDist=Ap,p(Z)}function E(z,Z){let ce=ht.domElement.getBoundingClientRect();v.x=(z-ce.left)/ce.width*2-1,v.y=-((Z-ce.top)/ce.height)*2+1,b.setFromCamera(v,wt);let Re=b.intersectObjects(c.children,!1);if(Re[0]?.object?.userData?.country)return Re[0].object.userData.country;let H=b.intersectObject(s,!1);if(!H[0])return null;let ee=H[0].point.clone().normalize(),de=null,se=.92;for(let{country:Ae,pos:Ue}of h.values()){let Be=Ue.clone().normalize().dot(ee);Be>se&&(se=Be,de=Ae)}return de}function M(z){_.enabled&&(_.dragging=!0,_.lastX=z.clientX??z.touches?.[0]?.clientX??0,_.lastY=z.clientY??z.touches?.[0]?.clientY??0,_._downX=_.lastX,_._downY=_.lastY)}function T(z){if(!_.enabled||!_.dragging)return;let Z=z.clientX??z.touches?.[0]?.clientX??_.lastX,ce=z.clientY??z.touches?.[0]?.clientY??_.lastY,Re=Z-_.lastX,H=ce-_.lastY;_.lastX=Z,_.lastY=ce,_.yaw-=Re*.005,_.pitch+=H*.004}function O(z){if(!_.enabled)return;let Z=z.clientX??z.changedTouches?.[0]?.clientX??_.lastX,ce=z.clientY??z.changedTouches?.[0]?.clientY??_.lastY,Re=Math.hypot(Z-(_._downX??Z),ce-(_._downY??ce));if(_.dragging=!1,Re<8){let H=E(Z,ce);H&&(L(H.iso),(_.dist<Ap+.55||_.targetDist<=Ap+.2)&&_.onSelect?.(H))}}function F(z){_.enabled&&(z.preventDefault(),_.targetDist=Math.max(1.15,Math.min(Ta+.8,_.targetDist+z.deltaY*.002)))}let W=0;function Q(z){_.enabled&&(z.touches.length===2?W=Math.hypot(z.touches[0].clientX-z.touches[1].clientX,z.touches[0].clientY-z.touches[1].clientY):M(z))}function $(z){if(_.enabled)if(z.touches.length===2){let Z=Math.hypot(z.touches[0].clientX-z.touches[1].clientX,z.touches[0].clientY-z.touches[1].clientY);if(W>0){let ce=W/Z;_.targetDist=Math.max(1.15,Math.min(Ta+.8,_.targetDist*ce))}W=Z}else T(z)}let ne=ht.domElement;ne.addEventListener("pointerdown",M),ne.addEventListener("pointermove",T),ne.addEventListener("pointerup",O),ne.addEventListener("wheel",F,{passive:!1}),ne.addEventListener("touchstart",Q,{passive:!0}),ne.addEventListener("touchmove",$,{passive:!0}),ne.addEventListener("touchend",O);function q(z){_.enabled&&(_.dist+=(_.targetDist-_.dist)*Math.min(1,z*4),P())}function te(){ne.removeEventListener("pointerdown",M),ne.removeEventListener("pointermove",T),ne.removeEventListener("pointerup",O),ne.removeEventListener("wheel",F),ne.removeEventListener("touchstart",Q),ne.removeEventListener("touchmove",$),ne.removeEventListener("touchend",O),Je.remove(e)}return{state:_,setEnabled:R,zoomOut:I,focusCountry:L,update:q,dispose:te,latLonToVec3:D_,set onSelect(z){_.onSelect=z}}}var k_={origin:[0,0],half:[22,22],inset:1.5,cam_back:7.5,cam_up:4.2,fog:[.55,.62,.48],name:"Country"};function nu(){return k_}async function O_(n){let e=of(n),t=new Oe;t.name=`country-${e.iso}`;let i=new Y(new Xc(24,48),new nt({color:e.ground,roughness:.95}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s=new Set(e.trees.map(d=>d.file));for(let d of s)try{await mn(d)}catch{}for(let d of e.buildings){let f=iC(d),[g,x,y]=d.at;f.position.copy(Le(g,x,y||0)),f.rotation.y=Wt.degToRad(-(d.h||0)),f.castShadow=!0,t.add(f)}for(let d of e.trees)try{let f=mt(d.file,d.at[0],d.at[1],0,d.h||0,t);f&&(d.s&&f.scale.setScalar(d.s),d.tint&&nC(f,d.tint))}catch{}let r=[];for(let d of e.plants){let f=rC(d);f.position.copy(Le(d.at[0],d.at[1],d.at[2]||.15)),f.userData.worldInteract=d,t.add(f);let g=tu(d.label);g.position.copy(f.position).add(new C(0,.85,0)),t.add(g),r.push({entry:d,mesh:f})}for(let d of e.animals){let f=U_(d);f.position.copy(Le(d.at[0],d.at[1],d.at[2]||.2)),f.userData.worldInteract=d,t.add(f);let g=tu(d.label);g.position.copy(f.position).add(new C(0,.9,0)),t.add(g),r.push({entry:d,mesh:f})}let o=new Y(new ss(.28,.55,4,8),new nt({color:15255968}));o.position.copy(Le(e.elder.at[0],e.elder.at[1],.55)),o.userData.worldInteract={kind:"elder",...e.elder},t.add(o);let a=tu(e.elder.name);a.position.copy(o.position).add(new C(0,1.1,0)),t.add(a);let c=e.creatures.map(d=>{let f=U_(d);f.position.copy(Le(d.at[0],d.at[1],.22)),t.add(f);let g=tu(d.label);return g.position.copy(f.position).add(new C(0,.75,0)),t.add(g),{...d,mesh:f,tag:g,ox:d.at[0],oy:d.at[1]}}),l=e.buildings.map(d=>{let f=(d.width||2)*.55,g=(d.depth||2)*.55;return{level:"country",min:[d.at[0]-f,d.at[1]-g],max:[d.at[0]+f,d.at[1]+g]}});Je.add(t);function u(d,f){for(let g of c){let x=g.phase+f*g.speed*.28,y=2.8+g.id.charCodeAt(g.id.length-1)%5*.45,p=g.ox+Math.cos(x)*y*.4,_=g.oy+Math.sin(x)*y*.4,b=oC(g.shape);g.mesh.position.copy(Le(p,_,b)),g.mesh.rotation.y=-x+Math.PI/2,g.tag.position.copy(g.mesh.position).add(new C(0,.75,0))}}function h(){Je.remove(t),t.traverse(d=>{d.geometry&&d.geometry.dispose?.(),d.material&&(Array.isArray(d.material)?d.material.forEach(f=>f.dispose?.()):d.material.dispose?.())})}return{group:t,layout:e,solids:l,labels:r,elderMesh:o,tick:u,dispose:h,level:k_}}function nC(n,e){let t=new ye(e);n.traverse(i=>{if(!i.isMesh||!i.material)return;let s=Array.isArray(i.material)?i.material:[i.material];for(let r of s)if(r?.color){let o=r.clone();o.color.lerp(t,.55),Array.isArray(i.material)?i.material=s.map(a=>a===r?o:a):i.material=o}})}function vs(n,e={}){return new nt({color:n,roughness:e.roughness??.85,metalness:e.metalness??.02})}function iC(n){let e=new Oe,t=n.width||2.2,i=n.depth||2,s=n.height||1.5,r=n.stilts||0,o=n.eaves||.15,a=vs(n.wallColor||"#e8e0d0"),c=vs(n.roofColor||"#5a4a48",{roughness:.75}),l=vs(n.trimColor||"#3a2a20");if(r>.05){let f=new _t(.07,.08,r,6);for(let[g,x]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let y=new Y(f,l);y.position.set(g*(t*.38),r*.5,x*(i*.38)),y.castShadow=!0,e.add(y)}}let u=new Y(new Gt(t,s,i),a);u.position.y=r+s*.5,u.castShadow=!0,u.receiveShadow=!0,e.add(u);let h=new Y(new Gt(t*.22,s*.45,.06),l);h.position.set(0,r+s*.28,i*.5+.02),e.add(h);let d=r+s;return sC(e,n.roofShape||"steep_gable",t,i,d,o,c,l),e}function sC(n,e,t,i,s,r,o,a){let c=t+r*2,l=i+r*2;if(e==="flat"||e==="flat_dome"){let h=new Y(new Gt(c,.12,l),o);if(h.position.y=s+.06,h.castShadow=!0,n.add(h),e==="flat_dome"){let d=new Y(new Ye(Math.min(t,i)*.22,10,8,0,Math.PI*2,0,Math.PI/2),o);d.position.y=s+.12,d.castShadow=!0,n.add(d)}return}if(e==="cone_thatch"){let h=new Y(new ln(Math.max(c,l)*.55,1.1,10),o);h.position.y=s+.55,h.castShadow=!0,n.add(h);return}if(e==="hip_tile"||e==="thatch_hip"||e==="pagoda_eave"||e==="saddle_thatch"||e==="palm_thatch"){let h=e==="pagoda_eave"?.95:e==="saddle_thatch"?1.15:.75,d=new Y(new ln(Math.max(c,l)*.62,h,4),o);if(d.position.y=s+h*.5,d.rotation.y=Math.PI/4,d.castShadow=!0,n.add(d),e==="pagoda_eave"){let f=new Y(new Gt(c*1.08,.08,l*1.08),a);f.position.y=s+.1,n.add(f)}return}if(e==="thatch_steep"){let h=Aa(c,l,1.2,o);h.position.y=s,n.add(h);return}if(e==="verandah_gable"){let h=Aa(c*1.15,l*1.1,.7,o);h.position.y=s,n.add(h);let d=new Y(new Gt(c*.35,.08,l*.9),a);d.position.set(t*.55,s-.35,0),n.add(d);return}if(e==="sod_gable"){let h=Aa(c,l,.55,o);h.position.y=s,n.add(h);return}if(e==="tile_gable"||e==="clapboard_gable"||e==="steep_gable"){let d=Aa(c,l,e==="steep_gable"?1:.72,o);d.position.y=s,n.add(d);return}let u=Aa(c,l,.8,o);u.position.y=s,n.add(u)}function Aa(n,e,t,i){let s=new Oe,r=Math.hypot(n*.5,t),o=Math.atan2(t,n*.5);for(let a of[-1,1]){let c=new Y(new Gt(r,.1,e),i);c.position.set(a*(n*.25),t*.5,0),c.rotation.z=a*o,c.castShadow=!0,s.add(c)}return s}function rC(n){let e=new Oe,t=n.color||"#5fd08a",i=vs(t,{roughness:.9}),s=vs("#4a6030"),r=String(n.label||"").toLowerCase();if(/palm|coconut|açaí|date|oil palm/.test(r)){let c=new Y(new _t(.06,.09,1.1,6),s);c.position.y=.55,e.add(c);for(let l=0;l<5;l++){let u=new Y(new Gt(.85,.05,.18),i);u.position.set(Math.cos(l/5*Math.PI*2)*.25,1.15,Math.sin(l/5*Math.PI*2)*.25),u.rotation.z=Math.cos(l/5*Math.PI*2)*.5,u.rotation.x=Math.sin(l/5*Math.PI*2)*.5,e.add(u)}return e}if(/cactus|aloe|agave/.test(r)){let c=new Y(new _t(.14,.16,.7,8),i);c.position.y=.35,e.add(c);let l=new Y(new _t(.08,.09,.35,6),i);return l.position.set(.22,.45,0),l.rotation.z=-.7,e.add(l),e}if(/bamboo/.test(r)){for(let c=0;c<3;c++){let l=new Y(new _t(.04,.045,1.2+c*.1,5),i);l.position.set((c-1)*.12,.6+c*.05,c%2*.08),e.add(l)}return e}if(/cherry|flower|hibiscus|lotus|orchid|rose|tulip|marigold|protea|cantuta|lavender|wattle|bottlebrush|frangipani|pomegranate/.test(r)){let c=new Y(new _t(.03,.04,.55,5),s);c.position.y=.28,e.add(c);let l=new Y(new Ye(.2,8,8),i);return l.position.y=.62,e.add(l),e}let o=new Y(new _t(.05,.07,.45,5),s);o.position.y=.22,e.add(o);let a=new Y(new Ye(.32,8,8),i);return a.position.y=.6,e.add(a),e}function oC(n){return n==="bird"?.55:n==="fish"?.12:n==="tall"?.45:n==="large"?.35:n==="upright"?.4:.22}function U_(n){let e=new Oe,t=n.color||"#8a6a48",i=vs(t,{roughness:.7}),s=vs("#2a2a2a"),r=n.shape||"quad";if(r==="bird"){let u=new Y(new Ye(.16,8,8),i);u.scale.set(1,.85,1.35),u.position.y=.2,e.add(u);let h=new Y(new Ye(.09,8,8),i);h.position.set(0,.32,.16),e.add(h);let d=new Y(new ln(.035,.12,5),vs("#e0a040"));d.rotation.x=Math.PI/2,d.position.set(0,.3,.28),e.add(d);let f=new Y(new Gt(.45,.04,.18),i);return f.position.set(0,.22,0),e.add(f),e}if(r==="fish"){let u=new Y(new Ye(.14,8,8),i);u.scale.set(1.6,.7,.9),u.position.y=.1,e.add(u);let h=new Y(new ln(.08,.16,4),i);return h.rotation.z=Math.PI/2,h.position.set(-.22,.1,0),e.add(h),e}if(r==="lizard"){let u=new Y(new ss(.08,.35,4,6),i);u.rotation.z=Math.PI/2,u.position.y=.1,e.add(u);let h=new Y(new Ye(.07,6,6),i);h.position.set(.22,.12,0),e.add(h);let d=new Y(new ln(.05,.28,5),i);return d.rotation.z=-Math.PI/2,d.position.set(-.28,.1,0),e.add(d),e}if(r==="tall"){let u=new Y(new ss(.14,.35,4,6),i);u.position.y=.35,e.add(u);let h=new Y(new _t(.05,.06,.55,5),i);h.position.set(.05,.75,0),h.rotation.z=-.25,e.add(h);let d=new Y(new Ye(.09,6,6),i);d.position.set(.18,1,0),e.add(d);for(let f of[-1,1]){let g=new Y(new _t(.035,.04,.45,5),s);g.position.set(f*.1,.22,.06),e.add(g)}return e}if(r==="large"){let u=new Y(new Ye(.28,10,10),i);u.scale.set(1.35,.9,1.1),u.position.y=.32,e.add(u);let h=new Y(new Ye(.14,8,8),i);h.position.set(.28,.4,0),e.add(h);for(let[d,f]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let g=new Y(new _t(.05,.06,.28,5),s);g.position.set(d*.14,.14,f*.12),e.add(g)}return e}if(r==="upright"){let u=new Y(new ss(.12,.28,4,6),i);u.position.y=.4,e.add(u);let h=new Y(new Ye(.1,8,8),i);h.position.set(0,.7,.05),e.add(h);let d=new Y(new _t(.04,.05,.35,5),s);d.position.set(.05,.18,0),e.add(d);let f=d.clone();return f.position.x=-.05,e.add(f),e}if(r==="round"){let u=new Y(new Ye(.22,10,10),i);u.position.y=.22,e.add(u);let h=new Y(new Ye(.1,8,8),i);return h.position.set(.18,.28,0),e.add(h),e}let o=new Y(new ss(.12,.28,4,6),i);o.rotation.z=Math.PI/2,o.position.y=.28,e.add(o);let a=new Y(new Ye(.1,8,8),i);a.position.set(.24,.34,0),e.add(a);let c=new Y(new ln(.04,.1,4),i);c.position.set(.22,.46,.05),e.add(c);for(let[u,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let d=new Y(new _t(.03,.035,.22,5),s);d.position.set(u*.12,.11,h*.08),e.add(d)}let l=new Y(new ln(.035,.18,4),i);return l.rotation.z=Math.PI/2,l.position.set(-.28,.3,0),e.add(l),e}function tu(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.clearRect(0,0,256,64),t.fillStyle="rgba(12, 8, 16, 0.72)",t.roundRect?.(8,12,240,40,12),t.roundRect?t.fill():t.fillRect(8,12,240,40),t.fillStyle="#f6f0e6",t.font="600 22px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(String(n).slice(0,28),128,32);let i=new is(e);i.colorSpace=et;let s=new Ai({map:i,transparent:!0,depthTest:!0}),r=new ts(s);return r.scale.set(2.4,.6,1),r}qt();var wn=null,Ra=[],It=null,bs=null,iu=null,F_=0;function Ca(){return m.playMode==="world"}function er(){return Ca()&&m.worldPhase==="globe"}function Cp(){return Ca()&&m.worldPhase==="country"}async function aC(){return Ra.length||(Ra=(await(await fetch("/assets/world/countries.json")).json()).countries||[]),Ra}function z_(){for(let n of Object.values(Ne))n.visible=!1}function cC(){for(let[n,e]of Object.entries(Ne))e.visible=n==="world"}function H_(){if(iu)return iu;let n=document.createElement("div");return n.id="world-hud",n.className="hidden",n.innerHTML=`
    <div id="world-title"></div>
    <div id="world-quests"></div>
    <div id="world-actions">
      <button id="world-zoomout" type="button">Zoom to space</button>
      <button id="world-leave" type="button" class="hidden">Leave country</button>
      <button id="world-menu" type="button">Menu</button>
    </div>
  `,document.body.appendChild(n),n.querySelector("#world-zoomout").addEventListener("click",()=>{wn&&er()&&wn.zoomOut()}),n.querySelector("#world-leave").addEventListener("click",()=>W_()),n.querySelector("#world-menu").addEventListener("click",()=>lC()),iu=n,n}function V_(){let e=H_().querySelector("#world-quests");if(!bs||!m.save){e.innerHTML="";return}let t=K0(m.save,bs);e.innerHTML=t.map(i=>i.done?`<div class="wq done">\u2713 ${Rp(i.title)}</div>`:`<div class="wq">${Rp(i.title)} \u2014 ${Rp(i.stepText||"")}</div>`).join("")}function Rp(n){return String(n||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ru(n,e){let t=H_();t.classList.remove("hidden");let i=t.querySelector("#world-title"),s=t.querySelector("#world-zoomout"),r=t.querySelector("#world-leave");n==="globe"?(i.textContent=e?`${e.name} \xB7 drag to orbit \xB7 scroll to zoom \xB7 click again to enter`:"Earth \xB7 drag to orbit \xB7 scroll to zoom \xB7 click a country",s.classList.remove("hidden"),r.classList.add("hidden"),document.querySelector("#where").textContent="Earth"):(i.textContent=`${e.name} \xB7 ${It?.layout?.cultureLabel||It?.layout?.biomeLabel||""}`,s.classList.add("hidden"),r.classList.remove("hidden"),document.querySelector("#where").textContent=e.name),V_()}async function G_(){Zs(),ci(m.save),m.playMode="world",m.worldPhase="globe",m.playing=!0,document.body.classList.add("playing","world-mode"),document.body.classList.add("world-globe"),document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#character")?.classList.add("hidden"),document.querySelector("#toolbar")?.classList.add("world-hide"),z_();let n=await aC();if(wn||(wn=N_(n),wn.onSelect=e=>B_(e)),wn.setEnabled(!0),m.save.world?.iso){wn.focusCountry(m.save.world.iso);let e=n.find(t=>t.iso===m.save.world.iso);ru("globe",e)}else wn.zoomOut(),ru("globe",null);ae("World mode \u2014 pick a country on the globe"),Dn(),typeof window<"u"&&(window.__cappyWorld={enterIso:e=>{let t=Ra.find(i=>i.iso===String(e).toUpperCase());return t?B_(t):null},leave:()=>W_(),phase:()=>m.worldPhase})}async function B_(n){n?.iso&&(ci(m.save).iso=n.iso,It&&(It.dispose(),It=null),wn?.setEnabled(!1),z_(),It=await O_(n),It.group.visible=!0,bs=j0(m.save,n,It.layout),af(m.save,n,It.layout),bs=ro(n,It.layout),m.worldPhase="country",m.level="country",m.worldCountry=n,m.countrySolids=It.solids,document.body.classList.remove("world-globe"),m.world?.levels&&(m.world.levels.country=nu()),m.player.x=0,m.player.y=-3,m.player.z=0,m.player.h=0,m.view.lookH=0,m.view.lookPitch=.15,su({type:"visit",region:`village_${n.iso}`}),ru("country",n),Xt(),ae(`Arrived in ${n.name}`))}function W_(){let n=m.worldCountry;It&&(It.dispose(),It=null),m.worldPhase="globe",m.level="world",document.body.classList.add("world-globe"),bs=n?ro(n,null):null,wn?.setEnabled(!0),n&&wn.focusCountry(n.iso),ru("globe",n),Xt(),ae(n?`Back above ${n.name}`:"Back to space")}function lC(){It&&(It.dispose(),It=null),wn?.setEnabled(!1),iu?.classList.add("hidden"),document.body.classList.remove("world-mode","world-globe","playing"),document.querySelector("#toolbar")?.classList.remove("world-hide"),m.playMode="story",m.worldPhase=null,m.playing=!1,cC(),document.querySelector("#menu")?.classList.remove("hidden"),Dn()}function su(n){if(!bs||!m.save||!m.worldCountry)return;let e=Z0(m.save,bs,n);for(let t of e)t.kind==="complete"&&(ae(t.outro||`Quest done: ${t.title}`),af(m.save,m.worldCountry,It?.layout),bs=ro(m.worldCountry,It?.layout)),t.kind==="coins"&&un(m.save.coins);e.length&&(V_(),Xt())}function uC(n){if(!Cp())return;F_+=n,It?.tick(n,F_);let{input:e,view:t,player:i}=m;e.lookTouch?(t.lookH-=e.lookX*70*n,t.lookPitch=Math.max(-.35,Math.min(.85,t.lookPitch+e.lookY*.55*n))):t.lookH-=((e.keys.lookRight?1:0)-(e.keys.lookLeft?1:0))*70*n,e.stickTouch||(e.stickX=(e.keys.right?1:0)-(e.keys.left?1:0),e.stickY=(e.keys.forward?1:0)-(e.keys.back?1:0)),ul(i,e.stickX,e.stickY,t.lookH,n),la(i,nu());for(let s of m.countrySolids||[]){let r=Math.max(s.min[0],Math.min(s.max[0],i.x)),o=Math.max(s.min[1],Math.min(s.max[1],i.y));if(r===i.x&&o===i.y){let a=i.x-(s.min[0]+s.max[0])/2,c=i.y-(s.min[1]+s.max[1])/2,l=Math.hypot(a,c)||1;i.x+=a/l*.15,i.y+=c/l*.15}}xa(),hC()}function q_(){return Cp()?(dC(),!0):!1}function hC(){let{player:n,view:e}=m,t=nu(),i=e.lookH*Math.PI/180,s=-Math.sin(i),r=Math.cos(i),o=n.x-s*t.cam_back,a=n.y-r*t.cam_back,c=t.cam_up+e.lookPitch*2.2;wt.position.set(o,c,-a),wt.lookAt(n.x,.45+Math.max(0,n.z)-e.lookPitch*.35,-n.y),wt.near=.2,wt.far=200,wt.updateProjectionMatrix()}function dC(){let n=It?.layout,e=m.worldCountry;if(!n||!e)return;let t=m.player.x,i=m.player.y,s=(r,o=1.8)=>Math.hypot(r[0]-t,r[1]-i)<o;if(s(n.elder.at,2.2)){su({type:"talk",npc:n.elder.id}),ae(`${n.elder.name}: Welcome, traveler.`);return}for(let r of n.plants)if(s(r.at)){su({type:"find",item:r.id}),ae(`Found ${r.label}`);return}for(let r of n.animals)if(s(r.at)){su({type:"find",item:r.id}),ae(`Spotted ${r.label}`);return}ae("Walk to a glowing marker or the elder, then press Go / Hop")}function fC(n){er()&&wn?.update(n)}function $_(n){!Ca()||m.paused||(er()?fC(n):Cp()&&uC(n))}function pC(){return{addCoins(n){ui(m.save,n)&&un(m.save.coins)},say(n){typeof n=="string"&&n&&ae(n)},offerQuest(n){if(!n||!pa(m.save,n,m.quests))return;let e=m.quests?.quests?.find(t=>t.id===n)?.title||n;ae(`Quest started: ${e}`),mo()},spawnProp(n,e,t){if(typeof n!="string"||!n||!Ut.has(n)||!Array.isArray(e)||e.length<2)return;let i=Ne[m.level]||Ne.world;mt(n,e[0],e[1],e[2]||0,t||0,i)}}}function Pa(n){m.blueprints&&(cx(m.blueprints,n,pC()),Tt())}function Y_(){return vp(n=>fs(m.save,n))}function mC(){return(m.pickups?.pickups||[]).filter(n=>Al(m.save,n,m.quests))}function ou(){return{regions:m.overworld?.regions||[],npcs:Y_(),pickups:m.pickups?.pickups||[],soakZones:m.overworld?.soak_zones||[],plots:m.plots?.plots||[],labels:Zl()}}function Zl(){let n=(e,t="label")=>Object.fromEntries((e||[]).map(i=>[i.id,i[t]]));return{npcs:n(m.npcs?.npcs,"name"),items:n(m.items?.items),regions:n(m.overworld?.regions,"name"),plots:n(m.plots?.plots),buildings:n(m.buildings?.buildings)}}function _o(){Kx(n=>Vy(n,Hy(n,m.save,m.buildings)))}function Ip(){let n=m.clock?.day??0,{changed:e,expired:t}=sx(m.save,m.bulletin,n);if(!e&&m.quests)return;for(let s of m.pickups?.pickups||[])s.node?.parent?.remove(s.node);let i=rx(m.base.quests,m.base.pickups,m.bulletin,n);m.quests=i.quests,m.pickups=i.pickups,m.playing&&ae(t.length?"The notice board changed overnight; yesterday's job is gone":"A new notice is up on the village board"),Q_(),mo(),Tt()}function j_(){if(!m.world)return null;if(Ms())return{kind:"build_place",verb:tv()||"Place"};let n=m.transit?.train;if(n?.state==="enroute")return{kind:"train_hopoff",verb:"Hop off"};if(n?.state==="boarding"||n?.state==="alighting")return{kind:"train_hopoff",verb:n.state==="boarding"?"Boarding\u2026":"Hopping off\u2026"};let e=m.rides?.[0];if(e?.phase==="flying")return{kind:"dismount",verb:"Hop off",vehicle:e};if(e?.phase==="mounting"||e?.phase==="dismounting")return{kind:"dismount",verb:e.phase==="mounting"?"Hopping on":"Hopping off",vehicle:e};let t=nx(m.save,m.level,m.player.x,m.player.y),i=Qy(m.plots,m.save,m.level,m.player.x,m.player.y),s=Y_(),r=U0(m.overworld?.dressing||[],m.level,m.player.x,m.player.y),o=m.overworld?.soak_zones||[],c=Kd(o,m.level,m.player.x,m.player.y)?null:hx({segments:m.river?.segments||[],halfWidth:m.river?.halfWidth||0,soakZones:o,level:m.level,x:m.player.x,y:m.player.y});return k0({portals:m.world.portals,level:m.level,x:m.player.x,y:m.player.y,npcs:s,pickups:m.pickups?.pickups||[],soakZones:o,plotSign:i,income:t,noticeBoard:r,visibleNpcs:s,visiblePickups:mC(),vehicles:m.rides||[],stations:m.transit?.stations||[],fishSpot:c})}function zt(){let n=j_(),e=document.querySelector("#go");e.textContent=n?.verb||"Go",e.classList.toggle("ready",!!n)}function Z_(){if(!m.playing||m.paused||!m.world||Ms()||wa()||ai(m.rides?.[0])||hs(m.transit))return;let n=D0(m.world.portals,m.level,m.player.x,m.player.y,m.portalLatch);if(!n.portal){m.portalLatch=n.latch;return}gp(),m.portalLatch=jd(io(m.world.portals,m.level,m.player.x,m.player.y))}function Pp(n){for(let e of n)e.kind==="complete"&&(ae(`Quest complete: ${e.title}`),a_(e.title,e.outro,!0)),e.kind==="coins"&&un(m.save.coins),e.kind==="step"&&mo();return Tt(),mo(),zt(),Yl(e=>fs(m.save,e)),xC(),n}function Un(n){return n?.type==="talk"&&m_(n),Pp(wl(m.save,m.quests,n))}function Lp(){if(q_())return;if(Ms()){ev(),zt();return}let n=j_();if(!n){ae("Nothing to do here");return}if(n.kind==="plot"){Jy(m.save,n.plot.id,m.plots)?(Un({type:"buy_plot",plot:n.plot.id}),ae(`Bought ${n.plot.label}`),rt(540,.12),un(m.save.coins),jx(),Tt(),zt()):ae("Not enough CappyCoin");return}if(n.kind==="income"){let e=tx(m.save,n.building.uid);e>0&&(ae(`Collected ${pn(e)}`),un(m.save.coins),rt(620,.1),Tt(),zt());return}if(n.kind==="portal"){gp();return}if(n.kind==="station"){P_(),zt();return}if(n.kind==="train_hopoff"){m.transit?.train?.state==="enroute"&&T_(),zt();return}if(n.kind==="vehicle"||n.kind==="dismount"){__(),zt();return}if(n.kind==="npc"){o_(n.npc),Pa({type:"on_talk",npc:n.npc.id});return}if(n.kind==="bulletin"){r_();return}if(n.kind==="pickup"){yC(n.pickup);return}if(n.kind==="soak"){Un({type:"soak",zone:n.zone.id,region:n.zone.region}),ae("Ahh\u2026 warm paws."),rt(280,.18);return}n.kind==="fish"&&gC()}var X_=0;function gC(){let n=performance.now();if(n<X_){ae("Wait for a nibble\u2026");return}X_=n+1600;let e=dx(m.save,m.quests);e.fresh?(ae(`Caught a ${e.label}!`),rt(520,.14)):e.effects.length?(ae(`Caught a ${e.label}!`),rt(520,.14)):(ae(`A ${e.label} slipped back \u2014 you already have one.`),rt(300,.08)),Pp(e.effects),Pa({type:"on_collect",item:e.item})}function yC(n){let e=m.items?.items?.find(i=>i.id===n.item)?.label||n.item;n.node&&(n.node.visible=!1);let t=Tl(m.save,m.quests,n.item);ae(`Collected ${e.toLowerCase()}`),rt(660,.12),Pp(t),Pa({type:"on_collect",item:n.item})}function K_(){Ip(),g_(),m.level!==m.lastQuestLevel&&(m.lastQuestLevel=m.level,m.level&&Un({type:"enter",level:m.level})),m.level==="world"&&(Un({type:"visit",region:m.regionId}),m.score>(m.lastRuckusQuest||0)&&(m.lastRuckusQuest=m.score,Un({type:"ruckus",score:m.score})))}var Ia=new Set;function J_(){if(wa()||m.level!=="world"){m.level!=="world"&&Ia.clear();return}let n=m.clock?.hours??12,e=oo(m.season,n),t=m.player.x,i=m.player.y,s=new Set;for(let r of vp(o=>fs(m.save,o))){let o=r.spot?.at;if(!o||Math.hypot(t-o[0],i-o[1])>Wy||(s.add(r.id),Ia.has(r.id)))continue;Ia.add(r.id);let c=Yy(r,m.save,n,e);c&&cp(r.name,c)}for(let r of[...Ia])s.has(r)||Ia.delete(r)}function Q_(){for(let n of m.pickups?.pickups||[]){if(n.node=null,!Al(m.save,n,m.quests))continue;let e=mt("marker.glb",n.at[0],n.at[1],.25,0,Ne[n.level||"world"]);e.scale.setScalar(.35),n.node=e}}function xC(){for(let n of m.pickups?.pickups||[])n.node?.parent&&n.node.parent.remove(n.node),n.node=null;Q_()}qt();var kn=null,Jn=null;function cu(n){return m.buildings?.buildings?.find(e=>e.id===n)}function La(n){document.querySelector("#build-place")?.classList.toggle("hidden",!n)}function nv(){return(m.save.buildings||[]).map(n=>({...n,def:cu(n.type)}))}function _C(){if(Jn)return Jn;Jn=document.createElement("div"),Jn.id="build-manage",Jn.className="hidden",Jn.style.cssText=["position:fixed","left:50%","bottom:calc(168px + env(safe-area-inset-bottom))","transform:translateX(-50%)","z-index:3","display:flex","gap:10px","pointer-events:none"].join(";");let n=document.createElement("button");n.type="button",n.id="manage-move",n.textContent="Move",n.style.cssText="pointer-events:auto;min-width:108px;min-height:48px";let e=document.createElement("button");return e.type="button",e.id="manage-sell",e.textContent="Sell",e.style.cssText="pointer-events:auto;min-width:108px;min-height:48px",n.addEventListener("click",()=>{let t=Jn?.dataset.uid;t&&Dp(t)}),e.addEventListener("click",()=>{let t=Jn?.dataset.uid;t&&Np(t)}),Jn.append(n,e),document.body.append(Jn),Jn}function vo(n){let e=_C();if(!n){e.classList.add("hidden"),e.style.display="none",delete e.dataset.uid;return}let t=cu(n.type),i=ma(t?.price);e.dataset.uid=n.uid;let s=e.querySelector("#manage-sell");s&&(s.textContent=i>0?`Sell (${pn(i)})`:"Sell"),e.classList.remove("hidden"),e.style.display="flex"}function vC(){if(!m.playing||m.paused||m.buildMode||m.level!=="world"){vo(null);return}if(document.querySelector("#build:not(.hidden)")){vo(null);return}let n=Oy(m.save,m.level,m.player.x,m.player.y);vo(n)}function Ms(){return!!m.buildMode?.type}function iv(n){let e=cu(n),t=Ll(m.plots,m.player.x,m.player.y);if(!e||!t||!Zn(m.save,t.id))return ae("Stand on one of your plots to build"),!1;if(e.limit&&Pl(m.save,n)>=e.limit)return ae("You already built the limit for that"),!1;if(!Ml(m.save,e.price))return ae("Not enough CappyCoin"),!1;let i=(t.rect[0]+t.rect[2])/2,s=(t.rect[1]+t.rect[3])/2;return m.buildMode={type:n,plotId:t.id,at:[Gs(i),Gs(s)],h:0,def:e,plot:t,moveUid:null},sv(),m.paused=!1,un(m.save.coins),La(!0),vo(null),!0}function Dp(n){if(m.buildMode)return!1;let e=(m.save.buildings||[]).find(s=>s.uid===n),t=e?cu(e.type):null,i=(m.plots?.plots||[]).find(s=>s.id===e?.plot);return!e||!t||!i||!Zn(m.save,i.id)?(ae("Can't move that building"),!1):(m.buildMode={type:e.type,plotId:i.id,at:[Gs(e.at[0]),Gs(e.at[1])],h:e.h||0,def:t,plot:i,moveUid:e.uid},xs(),sv(),m.paused=!1,document.querySelector("#build")?.classList.add("hidden"),La(!0),vo(null),ae(`Moving ${t.label} \u2014 Place when it looks right`),!0)}function Np(n){if(m.buildMode)return!1;let e=Fy(m.save,n,m.buildings);return e?(xs(),_o(),un(m.save.coins),vo(null),document.querySelector("#build")?.classList.add("hidden"),m.playing&&(m.paused=!1),ae(e.refund>0?`Sold ${e.label} for ${pn(e.refund)}`:`Sold ${e.label}`),rt(360,.12),Tt(),!0):(ae("Nothing to sell"),!1)}function sv(){au();let n=m.buildMode;n&&(kn=mt(n.def.file,n.at[0],n.at[1],0,n.h,Ne.world),kn.traverse(e=>{e.isMesh&&e.material&&(e.material=e.material.clone(),e.material.transparent=!0,e.material.opacity=.55)}),Up())}function au(){kn?.parent&&kn.parent.remove(kn),kn=null}function Up(){if(!kn||!m.buildMode)return;let n=m.buildMode,e=Il(n.def,n.plot,n.at,n.h,nv(),n.moveUid||null);kn.traverse(t=>{!t.isMesh||!t.material||t.material.color?.setHex(e?6750088:16733525)})}function rv(n){vC();let e=m.buildMode;if(!e)return;let t=e.plot,i=m.input.stickX,s=m.input.stickY;Math.hypot(i,s)>.2&&(e.at[0]=Gs(e.at[0]+i*n*4),e.at[1]=Gs(e.at[1]+s*n*4),e.at[0]=Math.min(t.rect[2],Math.max(t.rect[0],e.at[0])),e.at[1]=Math.min(t.rect[3],Math.max(t.rect[1],e.at[1])),kn&&kn.position.copy(Le(e.at[0],e.at[1],0)),Up())}function Da(){m.buildMode&&(m.buildMode.h=(m.buildMode.h+90)%360,kn&&(kn.rotation.y=m.buildMode.h*Math.PI/180),Up())}function ev(){let n=m.buildMode;if(!n)return!1;let e=nv();if(n.moveUid)return By(m.save,n.moveUid,n.plot,n.at,n.h,n.def,e)?(au(),m.buildMode=null,La(!1),xs(),_o(),ae(`Moved ${n.def.label}`),rt(500,.12),Tt(),!0):(ae("Can't build there"),!1);if(!Il(n.def,n.plot,n.at,n.h,e))return ae("Can't build there"),!1;let t=`b_${Date.now()}`;m.save.buildings.push({uid:t,type:n.type,plot:n.plotId,at:[...n.at],h:n.h,level:"world",bank:0}),au(),m.buildMode=null,La(!1),xs(),_o();let i=m.npcs?.npcs?.find(s=>s.id===n.def.effects?.villager);return ae(i?`Built ${n.def.label}. ${i.name} is moving in tonight!`:`Built ${n.def.label}`),rt(500,.12),Un({type:"build",building:n.type}),Pa({type:"on_place",building:n.type}),Tt(),!0}function lu(){if(!m.buildMode)return!1;let n=m.buildMode;return n.moveUid||ui(m.save,n.def.price),au(),m.buildMode=null,La(!1),xs(),un(m.save.coins),ae(n.moveUid?"Move cancelled":"Build cancelled"),Tt(),!0}function tv(){return Ms()?m.buildMode?.moveUid?"Set down":"Place":null}qt();function ov(n){let e=Jr[n.kind],t=Ut.get(e.file),i=t.root.clone(!0);Ne[n.level].add(i);let s=p0(n);s.mesh=i,s.drop=t.box.min.y,kp(s),m.bodies.push(s)}function kp(n){let e=n.origin==="base"?n.z:n.z-n.height/2,t=Le(n.x,n.y,Math.max(0,e));t.y-=n.drop||0,n.mesh.position.copy(t)}var av=.03,Bi=null,bo=[],cv=[],lv=3.5;function tr(n,e={}){return new nt({color:n,roughness:e.roughness??.75,metalness:e.metalness??.02})}function uv(n){n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.renderOrder=2)})}function bC(){let n=new Oe,e=tr("#c6863a"),t=tr("#e6d2a8"),i=tr("#2f6a48"),s=tr("#8a5a2e"),r=tr("#e8892a"),o=tr("#1a1a1a",{roughness:.4}),a=new Y(new Ye(.1,10,8),e);a.scale.set(1.15,.7,1.65),a.position.y=.07,n.add(a);let c=new Y(new Ye(.055,8,6),t);c.scale.set(1.05,.85,.9),c.position.set(0,.065,.1),n.add(c);let l=new Y(new _t(.028,.034,.07,6),i);l.position.set(0,.145,.12),l.rotation.x=.35,n.add(l);let u=new Y(new Ye(.058,9,7),i);u.position.set(0,.2,.155),n.add(u);let h=new Y(new Gt(.055,.02,.08),r);h.position.set(0,.185,.215),n.add(h);let d=new Y(new ln(.042,.09,5),e);d.rotation.x=-Math.PI/2.4,d.position.set(0,.1,-.165),n.add(d);for(let f of[-1,1]){let g=new Y(new Ye(.055,7,6),s);g.scale.set(.45,.55,1.15),g.position.set(f*.095,.075,-.01),n.add(g);let x=new Y(new Ye(.012,5,5),o);x.position.set(f*.038,.215,.195),n.add(x)}return uv(n),n}function MC(n="#3fe0d2"){let e=new Oe,t=tr(n,{roughness:.35});t.emissive=new ye(n).multiplyScalar(.22);let i=new Y(new Ye(.16,8,8),t);i.scale.set(1.6,.65,.85),i.position.y=.04,e.add(i);let s=new Y(new ln(.09,.18,4),t);return s.rotation.z=Math.PI/2,s.position.set(-.26,.04,0),e.add(s),uv(e),e}function SC(n){let e=n?.overworld?.river;if(!e?.points)return null;let t=n.river?.segments?.length?n.river.segments:_l(e),i=n.river?.halfWidth??e.width/2;return{segments:t,halfWidth:i}}function wC(n,e){let t=[],i=0;for(let s of n){let[r,o,a,c]=s,l=Math.hypot(a-r,c-o);if(l<8||(i+=1,i%2===0))continue;let u=(r+a)*.5,h=(o+c)*.5,d=-(c-o)/l,f=(a-r)/l,g=e*.28,x=t.length%2===0?1:-1;t.push([u+d*g*x,h+f*g*x])}return t}function EC(n,e,t){let i=1/0,s=n,r=e;for(let a of cv){let[c,l]=Hs(a,n,e),u=Math.hypot(n-c,e-l);u<i&&(i=u,s=c,r=l)}if(!(i<1/0)||i<=t)return[n,e];let o=1/i;return[s+(n-s)*o*t,r+(e-r)*o*t]}function TC(n,e,t,i,s){let r=n-t,o=e-i,a=Math.hypot(r,o);return a<=s?[n,e]:[t+r/a*s,i+o/a*s]}function Na(n,e,t,i,s){let r=n==="duck"?bC():MC(i%2===0?"#3fe0d2":"#ff8a40"),o=n==="duck"?av:av-.08;return r.position.copy(Le(e,t,o)),Bi.add(r),{kind:n,home:s,mesh:r,ox:e,oy:t,lift:o,phase:i*1.7,speed:n==="duck"?.55+i%5*.08:.9+i%4*.12,radius:n==="duck"?.9+i%3*.2:.7+i%4*.15}}function Op(n){if(Bi)return;let e=SC(n);if(!e)return;let t=Ne.world;if(!t)return;Bi=new Oe,Bi.name="ambient-life",t.add(Bi),cv=e.segments,lv=e.halfWidth;let i=wC(e.segments,e.halfWidth),s=1;for(let[o,a]of i){let c=e.halfWidth*.18;bo.push(Na("fish",o+c*.4,a+.35,s,"river")),s+=1,bo.push(Na("duck",o-c*.3,a-.25,s,"river")),s+=1}let r=(n.overworld.soak_zones||[]).find(o=>o.id==="main_pool")||n.overworld.soak_zones?.[0];if(r?.at){let[o,a]=r.at,c=Math.max(.8,(r.radius??4)*.35);bo.push(Na("fish",o-.7,a+.4,s,{kind:"soak",x:o,y:a,r:c})),s+=1,bo.push(Na("fish",o+.55,a-.5,s,{kind:"soak",x:o,y:a,r:c})),s+=1,bo.push(Na("duck",o+.3,a+.2,s,{kind:"soak",x:o,y:a,r:c}))}}function hv(n,e){if(Bi||Op(n),!Bi||(Bi.visible=n.level==="world",!Bi.visible))return;let t=Math.max(.4,lv*.42);for(let i of bo){let s=i.phase+e*i.speed*.28,r=i.ox+Math.cos(s)*i.radius*.4,o=i.oy+Math.sin(s)*i.radius*.4;i.home==="river"?[r,o]=EC(r,o,t):i.home?.kind==="soak"&&([r,o]=TC(r,o,i.home.x,i.home.y,i.home.r));let a=i.kind==="duck"?Math.sin(s*1.6)*.025:Math.sin(s*2.2)*.03;i.mesh.position.copy(Le(r,o,i.lift+a)),i.mesh.rotation.y=-s+Math.PI/2}}var dv=0;function fv(n){let{input:e,view:t,player:i}=m;e.lookTouch?(t.lookH-=e.lookX*70*n,t.lookPitch=Math.max(-.35,Math.min(.85,t.lookPitch+e.lookY*.55*n))):t.lookH-=((e.keys.lookRight?1:0)-(e.keys.lookLeft?1:0))*70*n,e.stickTouch||(e.stickX=(e.keys.right?1:0)-(e.keys.left?1:0),e.stickY=(e.keys.forward?1:0)-(e.keys.back?1:0));let s=ai(m.rides?.[0])||hs(m.transit);s||(ul(i,e.stickX,e.stickY,t.lookH,n),la(i,m.world.levels[m.level]),f0(i,m.solids,m.level),Z_()),W0(i,m.potions,n)&&ae("The potion wore off"),G0(i,n),i.form==="frog"&&i.frogLeft>0&&(i.frogLeft-=n),Xl(),v_(n),A_(n),s||la(i,m.world.levels[m.level]);let r=R_()||b_(),o=document.querySelector("#keys-hint");if(o&&r?o.textContent=r:o&&o.dataset.idle&&(o.textContent=o.dataset.idle),m.level==="world"){m.river&&!s&&wy(i,m.river.segments,m.river.halfWidth);let c=Sy(m.overworld.regions,i.x,i.y),l=c?c.name:"",u=c?c.id:"";if(u!==m.regionId&&(m.regionId=u,m.regionName=l,document.querySelector("#where").textContent=l,c)){let h=ay(m.save,c);if(h){for(let d of m.overworld.signposts||[])xl(d,m.save.discovered)&&yl(m.save,d.id);ae(`Discovered: ${h}`),Tt()}}}let a=m.bodies.filter(c=>c.level===m.level);m.score+=m0(a,i,n);for(let c of a)kp(c);$x(m.score),m.buildings&&yf(m.save,m.buildings,Date.now()),rv(n),K_(),J_(),dv+=n,Op(m),hv(m,dv),zt(),AC()}function AC(){let{player:n,save:e}=m;for(let t of O0(m.world.clothing,Di(e),n.x,n.y))ry(e,t.id),li(localStorage,e),Tt(),t.node.visible=!1,Cx(t.id),ae(`Found the ${t.label.toLowerCase()}`),rt(660,.16);for(let t of z0(m.potions?.bottles,so(e),m.level,n.x,n.y)){if(!H0(e,t))continue;li(localStorage,e),Tt(),t.node&&(t.node.visible=!1);let i=ds(m.potions,t.potion);ae(`Found ${i?.label?.toLowerCase()||"a potion"}`),rt(700,.14)}}function Fp(){!m.playing||m.paused||ai(m.rides?.[0])||hs(m.transit)||h0(m.player)&&rt(420,.08)}function Bp(){!m.playing||m.paused||ai(m.rides?.[0])||hs(m.transit)||d0(m.player)&&rt(180,.1,"triangle")}qt();var RC="/assets/map/world_map.png?v=3";function CC(n){return m.buildings?.buildings?.find(e=>e.id===n)}var yn=null,_e=null,uu=null,Ua="idle",jt={u:.5,v:.5,zoom:1},On=null;function mv(){yn||(yn=document.querySelector("#map-canvas"),_e=yn.getContext("2d"),yn.addEventListener("pointerdown",LC),yn.addEventListener("pointermove",DC),yn.addEventListener("pointerup",pv),yn.addEventListener("pointercancel",pv),yn.addEventListener("wheel",NC,{passive:!1}),document.querySelector("#map-zoom-in")?.addEventListener("click",()=>zp(1.25)),document.querySelector("#map-zoom-out")?.addEventListener("click",()=>zp(1/1.25)),document.querySelector("#map-recenter")?.addEventListener("click",()=>{gv(2.4),Mo()}))}function gv(n=jt.zoom){let[e,t,i,s]=m.overworld?.bounds||[-1,-1,1,1];jt.u=(m.player.x-e)/(i-e),jt.v=(s-m.player.y)/(s-t),jt.zoom=n,Hp()}function Hp(){jt.zoom=Math.min(6,Math.max(.7,jt.zoom));let n=.35;jt.u=Math.min(1+n,Math.max(-n,jt.u)),jt.v=Math.min(1+n,Math.max(-n,jt.v))}function zp(n){jt.zoom*=n,Hp(),Mo()}function yv(n,e){let t=Math.min(n,e)*jt.zoom;return{left:n/2-jt.u*t,top:e/2-jt.v*t,size:t}}function xv(){if(Ua!=="idle")return;Ua="loading";let n=new Image;n.onload=()=>{uu=n,Ua="ready",m.mapOpen&&Mo()},n.onerror=()=>{uu=null,Ua="missing",m.mapOpen&&Mo()},n.src=RC}function gn(n,e,t,i,s){let[r,o,a,c]=s,l=(n-r)/(a-r),u=(c-e)/(c-o),h=yv(t,i);return[h.left+l*h.size,h.top+u*h.size]}function IC(n,e,t,i){for(let s of m.overworld.regions){let[r,o,a,c]=s.rect,[l,u]=gn(r,o,n,e,t),[h,d]=gn(a,c,n,e,t),f=h-l,g=d-u;i.has(s.id)?(_e.fillStyle="rgba(242, 132, 42, 0.22)",_e.strokeStyle="rgba(248, 237, 212, 0.45)"):(_e.fillStyle="rgba(20, 8, 24, 0.85)",_e.strokeStyle="rgba(80, 60, 90, 0.5)"),_e.fillRect(l,u,f,g),_e.strokeRect(l,u,f,g)}}function PC(n,e,t,i){_e.font="13px Gill Sans, sans-serif",_e.textAlign="center";for(let s of m.overworld.regions){if(s.id==="fields"||s.id==="river"||!i.has(s.id))continue;let[r,o,a,c]=s.rect,[l,u]=gn((r+a)/2,(o+c)/2,n,e,t);_e.lineWidth=3,_e.strokeStyle="rgba(20, 12, 8, 0.85)",_e.strokeText(s.name,l,u),_e.fillStyle="rgba(255, 248, 230, 0.95)",_e.fillText(s.name,l,u)}_e.textAlign="left"}function Mo(){mv(),xv();let{overworld:n,save:e}=m;if(!n)return;let t=yn.getBoundingClientRect(),i=window.devicePixelRatio||1;yn.width=t.width*i,yn.height=t.height*i,_e.setTransform(i,0,0,i,0,0);let s=t.width,r=t.height,o=n.bounds,a=new Set(e.discovered||[]),c=uf(e);if(_e.fillStyle="#1a0c16",_e.fillRect(0,0,s,r),Ua==="ready"&&uu){let f=yv(s,r);_e.drawImage(uu,f.left,f.top,f.size,f.size),PC(s,r,o,a)}else{IC(s,r,o,a);for(let f of n.regions){if(!a.has(f.id))continue;let[g,x]=f.rect,[y,p]=gn(g,x,s,r,o);_e.fillStyle="#f8edd4",_e.font="12px Gill Sans, sans-serif",_e.fillText(f.name,y+4,p+14)}}for(let f of m.plots?.plots||[]){if(!Zn(e,f.id))continue;let[g,x,y,p]=f.rect,[_,b]=gn(g,x,s,r,o),[v,P]=gn(y,p,s,r,o);_e.strokeStyle="rgba(125, 255, 106, 0.75)",_e.lineWidth=2,_e.strokeRect(_,b,v-_,P-b)}for(let f of e.buildings||[]){if((f.level||"world")!=="world")continue;let g=CC(f.type);if(g?.footprint){let[x,y,p,_]=Cl(f.at,g.footprint,f.h||0),[b,v]=gn(x,y,s,r,o),[P,R]=gn(p,_,s,r,o);_e.fillStyle="rgba(255, 213, 106, 0.55)",_e.strokeStyle="rgba(232, 160, 32, 0.9)",_e.lineWidth=1.5,_e.fillRect(b,v,P-b,R-v),_e.strokeRect(b,v,P-b,R-v)}else{let[x,y]=gn(f.at[0],f.at[1],s,r,o);_e.beginPath(),_e.fillStyle="#ffd56a",_e.arc(x,y,4,0,Math.PI*2),_e.fill()}}_e.font="11px Gill Sans, sans-serif";for(let f of n.signposts||[]){if(!c.has(f.id))continue;let[g,x]=gn(f.at[0],f.at[1],s,r,o);_e.beginPath(),_e.fillStyle="#ffe1a8",_e.arc(g,x,5,0,Math.PI*2),_e.fill(),_e.strokeStyle="#2a100c",_e.lineWidth=1.5,_e.stroke(),_e.fillStyle="#ffe1a8",_e.fillText(f.label,g+8,x+4)}let u=Rl(e,m.quests,ou());if(u){let[f,g]=gn(u.x,u.y,s,r,o);_e.beginPath(),_e.fillStyle="#ff6eb4",_e.arc(f,g,6,0,Math.PI*2),_e.fill(),_e.strokeStyle="#fff",_e.lineWidth=2,_e.stroke(),_e.fillStyle="#ffd0e8",_e.font="11px Gill Sans, sans-serif",_e.fillText(u.label,f+8,g-8)}let[h,d]=gn(m.player.x,m.player.y,s,r,o);_e.beginPath(),_e.fillStyle="#7dff6a",_e.arc(h,d,4,0,Math.PI*2),_e.fill();for(let f of m.peers||[]){let[g,x]=gn(f.x,f.y,s,r,o);_e.beginPath(),_e.fillStyle=f.gender==="female"?"#ff9ad4":"#ffb24a",_e.arc(g,x,4,0,Math.PI*2),_e.fill(),_e.strokeStyle="#2a100c",_e.lineWidth=1.2,_e.stroke(),f.name&&(_e.fillStyle="#ffe1a8",_e.font="11px Gill Sans, sans-serif",_e.fillText(f.name,g+7,x-7))}}function LC(n){yn.setPointerCapture(n.pointerId),On={id:n.pointerId,x:n.clientX,y:n.clientY,moved:!1}}function DC(n){if(!On||On.id!==n.pointerId)return;let e=n.clientX-On.x,t=n.clientY-On.y;Math.hypot(e,t)>4&&(On.moved=!0);let i=yn.getBoundingClientRect(),s=Math.min(i.width,i.height)*jt.zoom;jt.u-=e/s,jt.v-=t/s,On.x=n.clientX,On.y=n.clientY,Hp(),Mo()}function pv(n){if(!On||On.id!==n.pointerId)return;let e=On.moved;On=null,e||UC(n)}function NC(n){n.preventDefault(),zp(n.deltaY>0?1/1.12:1.12)}function UC(n){let{overworld:e,save:t,player:i,view:s}=m,r=yn.getBoundingClientRect(),o=n.clientX-r.left,a=n.clientY-r.top,c=e.bounds,l=uf(t),u=null,h=20;for(let d of e.signposts||[]){if(!l.has(d.id))continue;let[f,g]=gn(d.at[0],d.at[1],r.width,r.height,c),x=Math.hypot(o-f,a-g);x<h&&(h=x,u=d)}u&&(i.x=u.at[0],i.y=u.at[1],i.z=0,i.vz=0,s.lookPitch=0,ka(),ae(`Travelled to ${u.label}`),Tt())}function _v(){!m.playing||m.paused||(mv(),xv(),gv(2.2),m.mapOpen=!0,m.paused=!0,document.querySelector("#map").classList.remove("hidden"),Mo())}function ka(){m.mapOpen=!1,document.querySelector("#map").classList.add("hidden"),m.playing&&(m.paused=!1)}var hu=new Map,Qn=256;function kC(n,e){let t=new Uint8ClampedArray(n.length),i=e*4;for(let s=0;s<e;s+=1)t.set(n.subarray((e-1-s)*i,(e-s)*i),s*i);return t}function vv(n){if(hu.has(n))return hu.get(n);let e=Ut.get(n);if(!e?.root)return hu.set(n,""),"";let t=new Yn(Qn,Qn,{type:Xn});t.texture.colorSpace=et;let i=new es;i.background=new ye("#24151f");let s=new In("#ffe4c4",2.4);s.position.set(1.6,2.4,2.8);let r=new In("#c9a0ff",.55);r.position.set(-2,.6,1.2),i.add(s,r,new Xr("#ffd8b0",.85));let o=e.root.clone(!0);i.add(o);let a=new Dt().setFromObject(o),c=a.getCenter(new C),l=a.getSize(new C);o.position.sub(c);let u=Math.max(l.x,l.y,l.z,.08),h=new Ct(36,1,.01,80);h.position.set(u*1.55,u*.85,u*2.05),h.lookAt(0,0,0);let d=ht.getRenderTarget(),f=new ye;ht.getClearColor(f);let g=ht.getClearAlpha();ht.setRenderTarget(t),ht.setClearColor("#24151f",1),ht.render(i,h);let x=new Uint8Array(Qn*Qn*4);ht.readRenderTargetPixels(t,0,0,Qn,Qn,x),ht.setRenderTarget(d),ht.setClearColor(f,g);let y=document.createElement("canvas");y.width=Qn,y.height=Qn;let p=y.getContext("2d"),_=p.createImageData(Qn,Qn);_.data.set(kC(x,Qn)),p.putImageData(_,0,0);let b=y.toDataURL("image/png");return t.dispose(),hu.set(n,b),b}var OC={yard:"Yard",house:"House",patch:"Patch"};function FC(n){return OC[n.place]||n.place||"Park"}function Vp(){let n=document.querySelector("#outfit-list");n.replaceChildren();let e=Di(m.save),t=Ni(m.save);for(let i of m.world.clothing){let s=e.has(i.id),r=t.has(i.id),o=document.createElement("button");o.type="button",o.className="cloth-card",o.classList.toggle("owned",s),o.classList.toggle("wearing",r),o.classList.toggle("locked",!s),o.setAttribute("aria-pressed",s?String(r):"false"),o.disabled=!1;let a=document.createElement("span");a.className="cloth-art";let c=vv(i.file);if(c){let h=document.createElement("img");h.alt="",h.src=c,a.append(h)}else a.classList.add("missing");let l=document.createElement("strong");l.textContent=i.label;let u=document.createElement("span");u.className="cloth-meta",s?u.textContent=r?"Wearing":"Tap to wear":u.textContent=`Find in the ${FC(i).toLowerCase()}`,o.append(a,l,u),o.addEventListener("click",()=>{e.has(i.id)&&(oy(m.save,i.id),li(localStorage,m.save),Vl(),Vp())}),n.append(o)}document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#paused")?.classList.add("hidden"),document.querySelector("#wardrobe").classList.remove("hidden")}qt();function Gp(){let n=document.querySelector("#potion-list");n.replaceChildren();let e=so(m.save),t=new Map;for(let i of m.potions?.bottles||[])t.has(i.potion)||t.set(i.potion,[]),t.get(i.potion).push(i);for(let i of m.potions?.kinds||[]){let s=ef(m.save,i.id),r=(t.get(i.id)||[]).some(u=>e.has(u.id)),o=document.createElement("button");o.type="button",o.className="cloth-card potion-card",o.classList.toggle("owned",s>0),o.classList.toggle("locked",!r),o.disabled=s<1;let a=document.createElement("span");a.className="potion-art",a.style.setProperty("--fizz",i.color);let c=document.createElement("strong");c.textContent=i.label;let l=document.createElement("span");l.className="cloth-meta",r?s<1?l.textContent="Used up":l.textContent=s===1?`Tap to drink \xB7 ${i.hint}`:`${s} left \xB7 ${i.hint}`:l.textContent="Find in the haunted house",o.append(a,c,l),o.addEventListener("click",()=>{if(V0(m.save,m.player,m.potions,i.id)){if(Xt(),i.effect==="hex_frog"){let u=tf(m.peers,m.player.x,m.player.y,m.level);ae(u.length?`Hexed ${u.length} friend${u.length===1?"":"s"} into frogs!`:"No one was close enough to hex")}else ae(`Drank the ${i.label.toLowerCase()}`);Xl(),Gp()}}),n.append(o)}document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#paused")?.classList.add("hidden"),document.querySelector("#potion-bag")?.classList.remove("hidden")}qt();function bv(){return""}var zC=120,HC=5,qp="cappy-mp-id",du=0,wo=!1,$p=!1,Mv="",So=0;function VC(){try{let n=ox(sessionStorage.getItem(qp));if(n)return n;let e=xf();return sessionStorage.setItem(qp,e),e}catch{return xf()}}function Wp(n){return String(n||"").replace(/\/+$/,"")}function GC(){let n=new URLSearchParams(location.search).get("mp");if(n)return Wp(n);try{let e=Wp(localStorage.getItem("cappy-mp-url"));if(e)return e}catch{}return Wp(bv())}function WC(n){return`${Mv}${n}`}async function fu(n,e){let t=await fetch(WC(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`${n} ${t.status}`);return t.json()}function Xp(){let{player:n,input:e,character:t,level:i,save:s}=m;return{id:m.netId,name:t.name,gender:t.gender,x:n.x,y:n.y,z:n.z,h:n.h,walking:Math.hypot(e.stickX,e.stickY)>.16,flop:n.flop,level:i,clothes:[...Ni(s)],cast:n.cast?.effect==="frog"?"frog":void 0}}function Sv(n){if(n){m.netId=n;try{sessionStorage.setItem(qp,n)}catch{}}}function Yp(n){n.id&&Sv(n.id),$C(n.you),up(n.peers||[])}async function qC(){if(!(!wo||!m.playing))try{let n=await fu("/mp/sync",Xp());So=0,Yp(n)}catch{if(So+=1,So<HC)return;try{let n=await fu("/mp/join",Xp());So=0,Yp(n);return}catch{}$p||($p=!0,wo=!1,ae("Lost the shared park \u2014 playing on your own."))}}async function wv(){m.netId=VC(),Mv=GC(),So=0;try{let n=await fu("/mp/join",Xp());Sv(n.id),wo=!0,$p=!1,Yp(n);let e=n.peers||[];if(e.length){let t=e.length;m.player.x+=Math.cos(t*2.1)*1.8,m.player.y+=Math.sin(t*2.1)*1.8,ae(`${e.length} friend${e.length===1?"":"s"} in the park`)}else ae("You're in the shared park");clearInterval(du),du=setInterval(qC,zC)}catch{wo=!1,up([]),ae("Couldn't find friends \u2014 playing on your own.")}}function Ev(){clearInterval(du),du=0,So=0,wo&&m.netId&&fu("/mp/leave",{id:m.netId}).catch(()=>{}),wo=!1,Lx()}function $C(n){if(!n||!m.player)return;let e=m.player.form==="frog";m.player.form=n.form==="frog"?"frog":"",m.player.frogLeft=n.form==="frog"?n.frogLeft:0,m.player.form==="frog"&&!e&&ae("Ribbit! Someone hexed you into a frog"),e&&m.player.form!=="frog"&&ae("You're a capybara again")}qt();var yu="male";function Av(){return document.querySelector("#character")}function Oa(){return document.querySelector("#character-name")}function pu(){return document.querySelector("#character-join")}function XC(){return document.querySelector("#character-hint")}function YC(){return document.querySelector("#character-copy")}function mu(){return m.playMode==="multiplayer"}function gu(){let e=!!pl(Oa()?.value);pu()&&(pu().disabled=!e);let t=XC();t&&(mu()?t.textContent=e?"Friends will see this name above you.":"Type a name to join the park.":t.textContent=e?"This name is yours in the park.":"Type a name to start your story.")}function Rv(){for(let n of document.querySelectorAll(".look-card")){let e=n.dataset.gender===yu;n.classList.toggle("selected",e),n.setAttribute("aria-pressed",e?"true":"false")}}function jC(){let n=mu(),e=YC();e&&(e.textContent=n?"Type a name and pick a capybara. Friends in the park will see you.":"Type a name and pick a capybara. The park is yours \u2014 no one else joins.");let t=pu();t&&(t.textContent=n?"Join the park":"Start story"),gu()}function jp(n="story"){m.playMode=n==="multiplayer"?"multiplayer":"story",yu=da(m.character?.gender||m.save?.character?.gender);let e=m.character?.name||m.save?.character?.name||"",t=Oa();t&&(t.value=e),Rv(),jC(),document.querySelector("#menu")?.classList.add("hidden"),Av()?.classList.remove("hidden"),requestAnimationFrame(()=>t?.focus())}function Cv(){Av()?.classList.add("hidden")}function ZC(){Zs(),m.playing=!0,document.body.classList.add("playing"),document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#load")?.classList.add("hidden"),Cv(),Ep()&&ae("Broom's right next to you \u2014 E to hop on"),mu()||p_(),Dn(),Xt(),mu()&&wv()}function Tv(){let n=pl(Oa()?.value);if(!n){gu(),Oa()?.focus();return}let e=da(yu);m.character={name:n,gender:e},m.save.character={name:n,gender:e},Ax(e,n),Xt(),ZC()}function Iv(){let n=Oa();if(n){n.addEventListener("input",gu),n.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Tv())});for(let e of document.querySelectorAll(".look-card"))e.addEventListener("click",()=>{yu=da(e.dataset.gender),Rv()});pu()?.addEventListener("click",Tv),document.querySelector("#character-back")?.addEventListener("click",()=>{Cv(),document.querySelector("#menu")?.classList.remove("hidden")}),gu()}}var Pv={w:"forward",arrowup:"forward",s:"back",arrowdown:"back",a:"left",arrowleft:"left",d:"right",arrowright:"right"},KC=.22,JC=.0025,QC=100;function Lv(n,e,t=QC){if(!n)return()=>{};let i=0,s=0,r=!1,o=(l,u)=>{let h=l-i,d=u-s,f=Math.max(-t,Math.min(t,h)),g=Math.max(-t,Math.min(t,d));e(f/t,-g/t,!0)},a=()=>{r=!1,e(0,0,!1)};n.addEventListener("pointerdown",l=>{l.button===0&&(l.preventDefault(),r=!0,i=l.clientX,s=l.clientY,n.setPointerCapture(l.pointerId),o(l.clientX,l.clientY))}),n.addEventListener("pointermove",l=>{!r||!n.hasPointerCapture(l.pointerId)||(l.preventDefault(),o(l.clientX,l.clientY))});let c=l=>{n.hasPointerCapture(l.pointerId)&&n.releasePointerCapture(l.pointerId),a()};return n.addEventListener("pointerup",c),n.addEventListener("pointercancel",a),a}function e2(n){if(!n)return;let e=!1,t=0,i=0;n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(!m.playing||m.paused||er()||(e=!0,t=r.clientX,i=r.clientY,n.setPointerCapture(r.pointerId)))}),n.addEventListener("pointermove",r=>{if(!e)return;let o=r.clientX-t,a=r.clientY-i;t=r.clientX,i=r.clientY,m.view.lookH-=o*KC,m.view.lookPitch=Math.max(-.35,Math.min(.85,m.view.lookPitch+a*JC))});let s=r=>{n.hasPointerCapture(r.pointerId)&&n.releasePointerCapture(r.pointerId),e=!1};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function Dv(n,e){if(document.body.classList.contains("touch-layout"))return;document.body.classList.add("touch-layout");let t=e();t.stick=Lv(document.querySelector("#touch-move"),(i,s,r)=>{n.stickX=i,n.stickY=s,n.stickTouch=r}),t.look=Lv(document.querySelector("#touch-look"),(i,s,r)=>{n.lookX=i,n.lookY=s,n.lookTouch=r})}function Nv(){let{input:n}=m;window.addEventListener("keydown",r=>{if(r.target?.closest?.("input, textarea"))return;let o=Pv[r.key.toLowerCase()];o&&(n.keys[o]=!0),r.key===" "&&(r.preventDefault(),n.keys.hop=!0,Fp()),r.key.toLowerCase()==="f"&&Bp(),r.key.toLowerCase()==="e"&&Lp(),r.key.toLowerCase()==="r"&&Ms()&&(r.preventDefault(),Da()),r.key==="Escape"&&Ms()&&(r.preventDefault(),lu()&&zt())}),window.addEventListener("keyup",r=>{let o=Pv[r.key.toLowerCase()];o&&(n.keys[o]=!1),r.key===" "&&(n.keys.hop=!1)});let e={stick:()=>{},look:()=>{}};a0()&&Dv(n,()=>e),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&Dv(n,()=>e)},!0),e2(document.querySelector("#view"));let t=(r,o)=>{document.querySelector(r).addEventListener("pointerdown",a=>{a.preventDefault(),o()})};t("#flop",Bp);let i=document.querySelector("#hop");i.addEventListener("pointerdown",r=>{r.preventDefault(),m.input.keys.hop=!0,Fp()});let s=()=>{m.input.keys.hop=!1};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),t("#go",()=>{wa()?Jl():Lp()}),t("#pause",()=>{m.playing&&(m.paused=!0,e.stick(),e.look(),Dn(),document.querySelector("#paused").classList.remove("hidden"))}),document.querySelector("#resume").addEventListener("click",()=>{m.paused=!1,document.querySelector("#paused").classList.add("hidden"),Dn()}),document.querySelector("#pause-clothes").addEventListener("click",()=>{document.querySelector("#paused").classList.add("hidden"),Vp()}),document.querySelector("#pause-potions").addEventListener("click",()=>{document.querySelector("#paused").classList.add("hidden"),Gp()}),document.querySelector("#story").addEventListener("click",()=>{Zs(),jp("story")}),document.querySelector("#multiplayer").addEventListener("click",()=>{Zs(),jp("multiplayer")}),document.querySelector("#world")?.addEventListener("click",()=>{G_()}),document.querySelector("#map-btn").addEventListener("click",_v),document.querySelector("#map-close").addEventListener("click",()=>{ka(),Dn()}),document.querySelector("#clothes-back").addEventListener("click",()=>{document.querySelector("#wardrobe").classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}),document.querySelector("#potions-back").addEventListener("click",()=>{document.querySelector("#potion-bag").classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}),window.addEventListener("resize",()=>us()),window.addEventListener("orientationchange",()=>us()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>us()),document.addEventListener("contextmenu",r=>{r.target?.closest?.("input, textarea")||r.preventDefault()}),document.addEventListener("visibilitychange",Dn)}qt();var t2=new Set(["on_talk","on_collect","on_place"]),n2=new Set(["give_coins","say","start_quest","spawn_prop"]),mU=new Set([...t2,...n2]);var Zp=["score","coins","where","quest-tracker"],Kp=["pause","map-btn","quests-btn","build-btn"],Jp=["hop","flop","go"],xu=["top-left","top-right","bottom-left","bottom-right"],CU=new Set(xu);var Eo={main:{sheet:"menu",buttons:["story","multiplayer","world"],notes:["menu-version"],copyKeys:["title","kicker","body","event"]},paused:{sheet:"paused",buttons:["resume","pause-clothes","pause-potions","pause-save"],notes:["pause-version"],copyKeys:["title"]}};function To(n,e){if(!Array.isArray(n))return[...e];let t=new Set,i=[];for(let s of n)typeof s!="string"||!e.includes(s)||t.has(s)||(t.add(s),i.push(s));for(let s of e)t.has(s)||i.push(s);return i}function Qp(n,e){let t=Eo[n];return t?Array.isArray(e?.items)?e.items:Array.isArray(e?.buttons)?e.buttons.map(i=>typeof i=="string"?{type:"button",ref:i}:i):t.buttons.map(i=>({type:"button",ref:i})):[]}var sk=new Set(xu);function Uv(n,e={}){let t=e.x??14,i=e.y??12,s=a=>`calc(${t}px + env(safe-area-inset-${a}))`,r=a=>`calc(${i}px + env(safe-area-inset-${a}))`,o={top:"auto",right:"auto",bottom:"auto",left:"auto",textAlign:"left"};switch(n){case"top-right":return{...o,top:r("top"),right:s("right"),textAlign:"right"};case"bottom-left":return{...o,bottom:r("bottom"),left:s("left")};case"bottom-right":return{...o,bottom:r("bottom"),right:s("right"),textAlign:"right"};default:return{...o,top:r("top"),left:s("left")}}}function o2(n){for(let t of document.querySelectorAll(".sheet"))t.classList.add("hidden");document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#load")?.classList.add("hidden");let e=document.querySelector(`#${n}`);e&&e.classList.remove("hidden")}function a2(){m.paused=!1,document.querySelector("#paused")?.classList.add("hidden")}function kv(){for(let n of document.querySelectorAll("[data-ui-action]"))n.dataset.uiBound||(n.dataset.uiBound="1",n.addEventListener("click",()=>{let e=n.dataset.uiAction,t=n.dataset.uiTarget||"";if(e==="open_sheet")o2(t);else if(e==="close_sheets")for(let i of document.querySelectorAll(".sheet"))i.classList.add("hidden");else e==="resume_game"&&a2()}))}function em(n,e){if(n)for(let t of e){let i=n.querySelector(`#${t}`);i&&n.appendChild(i)}}function Ov(n,e,t){if(!n)return;let i=Uv(e||"top-left",t);for(let[s,r]of Object.entries(i))s==="textAlign"?n.style.textAlign=r:n.style[s]=r}function c2(n){if(!n||typeof n!="object")return;let e=document.documentElement;for(let[t,i]of Object.entries(n))typeof i=="string"&&e.style.setProperty(`--${t}`,i)}function l2(n){let e=n.querySelector(".menu-actions");if(!e){e=document.createElement("div"),e.className="menu-actions";let t=n.querySelector(".version-tag");for(let i of[...n.querySelectorAll(":scope > button")])e.appendChild(i);n.insertBefore(e,t)}return e}function u2(n){for(let e of[...n.querySelectorAll("[data-layout-dynamic]")])e.remove()}function h2(n,e,t){if(!(!t||typeof t!="object")){if(t.title!=null){let i=n.querySelector(e==="main"?"h1":"h2");i&&(i.textContent=t.title)}if(e==="main"){let i=n.querySelector(".kicker");i&&t.kicker!=null&&(i.textContent=t.kicker);let s=n.querySelector(".menu-body");s&&t.body!=null&&(s.textContent=t.body);let r=n.querySelector(".comic-pop");r&&d2(r,t.event)}}}function d2(n,e){if(!e||typeof e!="object"){n.classList.add("hidden");return}n.classList.remove("hidden");let t=n.querySelector(".comic-title"),i=n.querySelector(".comic-ends");t&&e.title!=null&&(t.textContent=e.title),i&&e.ends!=null&&(i.textContent=e.ends)}function f2(){let n=document.querySelector("#event-callout-close"),e=document.querySelector("#event-callout");!n||!e||n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",()=>e.classList.add("hidden")))}function p2(n,e){let t=l2(n),i=e||{};return i.justify&&(n.style.justifyContent=i.justify),i.align&&(n.style.alignItems=i.align),i.gap!=null&&(t.style.gap=`${i.gap}px`),t.classList.toggle("cols-2",i.columns===2),t.classList.toggle("cols-3",i.columns===3),t}function m2(n,e,t){let i=p2(e,t.layout);u2(i);let s=Eo[n],r=Qp(n,t),o=document.createDocumentFragment(),a=[];for(let c of r)if(!(!c||typeof c!="object")){if(c.type==="note"){let l=e.querySelector(`#${c.ref}`);l&&a.push(l);continue}if(c.type==="separator"){let l=document.createElement("hr");l.className="menu-separator",l.dataset.layoutDynamic="1",o.append(l);continue}if(c.type==="spacer"){let l=document.createElement("div");l.className="menu-spacer",l.dataset.layoutDynamic="1",c.size!=null&&(l.style.height=`${c.size}px`),o.append(l);continue}if(c.type==="text"){let l=document.createElement("p");l.className="menu-text",l.dataset.layoutDynamic="1",l.textContent=c.text||"",o.append(l);continue}if(c.type==="button"){let l=null;if(typeof c.ref=="string"&&(l=e.querySelector(`#${c.ref}`)||document.querySelector(`#${c.ref}`)),!l&&c.action&&(l=document.createElement("button"),l.type="button",l.dataset.layoutDynamic="1",l.dataset.uiAction=c.action,c.target&&(l.dataset.uiTarget=c.target),l.textContent=c.label||c.action),!l)continue;c.label&&(l.textContent=c.label),c.hidden?l.classList.add("hidden"):l.classList.remove("hidden"),o.append(l)}}i.append(o);for(let c of a)e.append(c)}function Fv(n){if(!n||typeof n!="object")return;c2(n.theme);let e=n.hud||{},t=document.querySelector("#hud");Ov(t,e.anchor,e.inset),e.gap!=null&&(t.style.gap=`${e.gap}px`),e.align&&(t.style.alignItems=e.align==="right"?"flex-end":"flex-start"),em(t,To(e.rows,Zp));let i=n.toolbar||{},s=document.querySelector("#toolbar");if(Ov(s,i.anchor,i.inset),i.gap!=null&&(s.style.gap=`${i.gap}px`),i.direction&&(s.style.flexDirection=i.direction),em(s,To(i.buttons,Kp)),i.labels&&typeof i.labels=="object")for(let[a,c]of Object.entries(i.labels)){if(typeof c!="string")continue;let l=document.querySelector(`#${a}`);l&&(l.textContent=c)}let r=n.menus||{};for(let a of Object.keys(Eo)){let c=r[a]||{},l=c.sheet||Eo[a].sheet,u=document.querySelector(`#${l}`);u&&(h2(u,a,c.copy),m2(a,u,c))}let o=n.controls||{};em(document.querySelector("#actions"),To(o.actions,Jp)),kv(),f2()}var Ao;function Bv(){Ao=document.querySelector("#build-list"),document.querySelector("#build-btn").addEventListener("click",g2),document.querySelector("#build-close").addEventListener("click",_u),document.querySelector("#build-rotate").addEventListener("click",()=>{Da()}),document.querySelector("#place-rotate").addEventListener("click",()=>{Da()}),document.querySelector("#place-cancel").addEventListener("click",()=>{lu()&&zt()})}function g2(){if(!m.playing)return;let n=Ll(m.plots,m.player.x,m.player.y);if(!n||!Zn(m.save,n.id)){Promise.resolve().then(()=>(qt(),Ix)).then(({say:e})=>e("Stand on one of your plots to build"));return}ka(),_2(n.id),m.paused=!0,document.querySelector("#build").classList.remove("hidden")}function _u(){document.querySelector("#build").classList.add("hidden"),m.playing&&!m.buildMode&&(m.paused=!1)}function y2(n){return m.buildings?.buildings?.find(e=>e.id===n)}function x2(n){let e=y2(n.type),t=document.createElement("div");t.className="row",t.style.width="100%";let i=document.createElement("button");i.type="button",i.disabled=!0,i.textContent=e?.label||n.type,i.style.flex="1";let s=document.createElement("button");s.type="button",s.textContent="Move",s.style.flex="0 0 auto",s.style.minWidth="72px",s.addEventListener("click",()=>{Dp(n.uid)&&(_u(),zt())});let r=ma(e?.price),o=document.createElement("button");return o.type="button",o.textContent=r>0?`Sell ${pn(r)}`:"Sell",o.style.flex="0 0 auto",o.style.minWidth="96px",o.addEventListener("click",()=>{Np(n.uid)&&(_u(),zt())}),t.append(i,s,o),t}function _2(n){Ao.replaceChildren();let e=(m.save.buildings||[]).filter(s=>s.plot===n);if(e.length){let s=document.createElement("p");s.textContent="Your buildings \u2014 Move or Sell",s.style.margin="0 0 4px",Ao.append(s);for(let r of e)Ao.append(x2(r))}let t=bl(m.save),i=document.createElement("p");i.textContent=e.length?"Build new":"Choose a building",i.style.margin=e.length?"12px 0 4px":"0 0 4px",Ao.append(i);for(let s of m.buildings?.buildings||[]){let r=Pl(m.save,s.id),o=s.limit&&r>=s.limit,a=document.createElement("button");a.type="button",a.disabled=o||t<s.price,a.textContent=`${s.label} \u2014 ${pn(s.price)}`,o&&(a.textContent+=" (built)"),a.addEventListener("click",()=>{iv(s.id)&&_u()}),Ao.append(a)}}qt();var tm,Ro,Fa;function zv(){tm=document.querySelector("#savecode"),Ro=document.querySelector("#savecode-text"),Fa=document.querySelector("#savecode-status"),document.querySelector("#pause-save").addEventListener("click",v2),document.querySelector("#savecode-copy").addEventListener("click",M2),document.querySelector("#savecode-import").addEventListener("click",S2),document.querySelector("#savecode-back").addEventListener("click",b2)}function v2(){Xt(),Ro.value=iy(m.save),Fa.textContent="Copy this code somewhere safe, or paste one in to restore.",document.querySelector("#paused").classList.add("hidden"),tm.classList.remove("hidden")}function b2(){tm.classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}async function M2(){try{await navigator.clipboard.writeText(Ro.value),Fa.textContent="Copied."}catch{Ro.focus(),Ro.select(),Fa.textContent="Select the code and copy it."}}function S2(){let n=sy(Ro.value);if(!n){Fa.textContent="That code didn't look right.";return}Hx(),li(localStorage,n),ae("Save restored. Reloading\u2026"),setTimeout(()=>location.reload(),600)}var Ss=null,Hv=0,w2=()=>document.querySelector("#quest-arrow"),Ba=new C;function E2(){Ss||(Ss=mt("marker.glb",0,0,.5,0,Ne.world),Ss.scale.setScalar(.45),Ss.visible=!1)}function Vv(n){E2();let e=w2();if(!m.playing||m.level!=="world"||!m.overworld){Ss.visible=!1,e?.classList.add("hidden");return}let t=Rl(m.save,m.quests,ou());if(!t||t.level!==m.level){Ss.visible=!1,e?.classList.add("hidden");return}Hv+=n*3,Ss.position.copy(Le(t.x,t.y,.55+Math.sin(Hv)*.08)),Ss.visible=!0,Ba.copy(Le(t.x,t.y,.5)).project(wt);let i=ht.domElement.getBoundingClientRect(),s=i.left+(Ba.x*.5+.5)*i.width,r=i.top+(-Ba.y*.5+.5)*i.height,o=28,a=Ba.z>=-1&&Ba.z<=1&&s>=i.left+o&&s<=i.right-o&&r>=i.top+o&&r<=i.bottom-o;if(!e)return;if(a){e.classList.add("hidden");return}let c=i.left+i.width/2,l=i.top+i.height/2,u=s-c,h=r-l,d=Math.atan2(h,u),f=i.width/2-o,g=i.height/2-o,x=Math.min(Math.abs(f/Math.cos(d))||1/0,Math.abs(g/Math.sin(d))||1/0),y=c+Math.cos(d)*Math.min(x,Math.hypot(u,h)),p=l+Math.sin(d)*Math.min(x,Math.hypot(u,h));e.style.left=`${y}px`,e.style.top=`${p}px`,e.style.transform=`translate(-50%, -50%) rotate(${d}rad)`,e.textContent=t.label,e.classList.remove("hidden")}var za=new C,Ha=new Map,zi=null,Gv=0;function T2(){return zi||(zi=document.querySelector("#income-markers"),zi||(zi=document.createElement("div"),zi.id="income-markers",zi.setAttribute("aria-hidden","true"),document.body.appendChild(zi)),zi)}function A2(n){return m.buildings?.buildings?.find(e=>e.id===n)}function R2(n){return n?.income?(Number(n.income.per_min)||0)*(Number(n.income.cap_min)||0):0}function C2(){for(let n of Ha.values())n.classList.add("hidden")}function Wv(n=0){let e=T2();if(!m.playing||m.paused||!m.world){C2();return}Gv+=n*3;let t=new Set,i=ht.domElement.getBoundingClientRect();for(let s of m.save.buildings||[]){if((s.level||"world")!==m.level)continue;let r=s.bank||0;if(r<1)continue;let o=A2(s.type),a=R2(o),c=a>0&&r>=a-1e-9,l=1.35+Math.sin(Gv+(s.at[0]+s.at[1])*.2)*.06;za.copy(Le(s.at[0],s.at[1],l)).project(wt);let u=i.left+(za.x*.5+.5)*i.width,h=i.top+(-za.y*.5+.5)*i.height,d=za.z>=-1&&za.z<=1&&u>=i.left-8&&u<=i.right+8&&h>=i.top-8&&h<=i.bottom+8,f=Ha.get(s.uid);if(f||(f=document.createElement("div"),f.className="income-marker",e.appendChild(f),Ha.set(s.uid,f)),t.add(s.uid),!d){f.classList.add("hidden");continue}f.classList.toggle("full",c),f.classList.remove("hidden"),f.style.left=`${u}px`,f.style.top=`${h}px`,f.title=c?"Full \u2014 collect CappyCoin":"CappyCoin ready"}for(let[s,r]of Ha)t.has(s)||(r.remove(),Ha.delete(s))}var I2=3.2;function vu(n,e){let t=n.load(`/assets/textures/village/ground_${e}.jpg`);return t.wrapS=bn,t.wrapT=bn,t.colorSpace=et,t.anisotropy=ht.capabilities.getMaxAnisotropy(),t}function qv(n,e,t=[]){let i=fn.coarse?384:512,s=Ry(n,i,t),r=new ns(s,i,i,Qt);r.magFilter=$t,r.minFilter=$t,r.needsUpdate=!0;let o=new cs,a={grass:vu(o,"grass"),dirt:vu(o,"dirt"),sand:vu(o,"sand"),forest:vu(o,"forest")},[c,l,u,h]=n.bounds,d=new nt({color:"#ffffff",roughness:.95,metalness:0});d.onBeforeCompile=g=>{g.uniforms.splat={value:r},g.uniforms.layerGrass={value:a.grass},g.uniforms.layerDirt={value:a.dirt},g.uniforms.layerSand={value:a.sand},g.uniforms.layerForest={value:a.forest},g.uniforms.bounds={value:new tt(c,l,u,h)},g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGround = (modelMatrix * vec4(transformed, 1.0)).xyz;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vGround;
        uniform sampler2D splat;
        uniform sampler2D layerGrass;
        uniform sampler2D layerDirt;
        uniform sampler2D layerSand;
        uniform sampler2D layerForest;
        uniform vec4 bounds;`).replace("#include <map_fragment>",`
        vec2 g = vec2(vGround.x, -vGround.z);
        vec2 st = vec2((g.x - bounds.x) / (bounds.z - bounds.x), (bounds.w - g.y) / (bounds.w - bounds.y));
        vec4 w = texture2D(splat, st);
        vec2 uv = g / ${I2.toFixed(2)};
        // Two scales of grass, blended, so the repeat does not show.
        vec3 grass = mix(texture2D(layerGrass, uv).rgb, texture2D(layerGrass, uv * 0.31 + vec2(0.37, 0.71)).rgb, 0.4);
        vec3 ground = grass * w.a
          + texture2D(layerDirt, uv).rgb * w.r
          + texture2D(layerSand, uv * 1.3).rgb * w.g
          + texture2D(layerForest, uv * 0.8).rgb * w.b;
        diffuseColor.rgb *= ground / max(w.r + w.g + w.b + w.a, 0.001);`)};let f=new Y(new Br(u-c,h-l),d);return f.rotation.x=-Math.PI/2,f.position.set((c+u)/2,-.012,-(l+h)/2),f.receiveShadow=!0,e.add(f),{grassAt:(g,x)=>Cy(s,i,n.bounds,g,x)}}var nm={value:0},P2=fn.coarse?16:22,L2=2,D2=4,$v=fn.coarse?2600:7e3;async function N2(){let n=new Image;n.src="/assets/lawn_mask.png",await n.decode();let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.drawImage(n,0,0);let i=t.getImageData(0,0,n.width,n.height).data;return{width:n.width,height:n.height,pixels:i}}function U2(n){return n=n.clone(),n.vertexColors=!1,n.onBeforeCompile=e=>{e.uniforms.lawnTime=nm,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 windData;
uniform float lawnTime;
varying vec4 vWind;`).replace("#include <begin_vertex>",["#include <begin_vertex>","vWind = windData;","float tip = windData.r * windData.r;","float gust = sin(lawnTime * 1.7 + windData.g * 6.2831 + instanceMatrix[3].x * 0.7) * 0.65","           + sin(lawnTime * 0.6 + windData.g * 8.1681) * 0.35;","transformed.x += gust * 0.04 * tip;"].join(`
`)),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vWind;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(0.62, 1.25, vWind.r) * (0.85 + 0.3 * vWind.b);`)},n}async function Xv(n,e,t){let[i,s]=await Promise.all([N2(),mn("tuft.glb")]),[r,o,a,c]=e,l=(p,_)=>{if(p>=r&&p<=a&&_>=o&&_<=c){let b=Math.floor((p-r)/(a-r)*i.width),v=Math.floor((c-_)/(c-o)*i.height);return b<0||v<0||b>=i.width||v>=i.height?0:i.pixels[(v*i.width+b)*4]/255}return t(p,_)},u=[];s.root.updateMatrixWorld(!0),s.root.traverse(p=>{if(!p.isMesh)return;let _=p.geometry.clone();_.attributes.color&&_.setAttribute("windData",_.attributes.color);let b=new Gr(_,U2(p.material),$v);b.count=0,b.receiveShadow=!0,b.frustumCulled=!1,b.userData.local=p.matrixWorld.clone(),n.add(b),u.push(b)});let h=new ke,d=new tn,f=new C(0,1,0),g=new C,x=1/0,y=1/0;return{update(p,_){if(Math.hypot(p-x,_-y)<D2)return;x=p,y=_;let b=hy(l,p,_,P2,L2,fn.tuftsPerM2).slice(0,$v);for(let v of u)b.forEach(([P,R,I,L],E)=>{d.setFromAxisAngle(f,I),g.setScalar(L),h.compose(Le(P,R,0),d,g).multiply(v.userData.local),v.setMatrixAt(E,h)}),v.count=b.length,v.instanceMatrix.needsUpdate=!0}}}function k2(n=128){let e=new Uint8Array(n*n*4);for(let i=0;i<n;i+=1)for(let s=0;s<n;s+=1){let r=s/n*Math.PI*2,o=i/n*Math.PI*2,a=.5*Math.cos(r*3+o)+.35*Math.cos(r*5-o*2),c=.5*Math.cos(o*4-r)+.3*Math.cos(o*2+r*3),l=Math.hypot(a,c,3),u=(i*n+s)*4;e[u]=Math.round((a/l*.5+.5)*255),e[u+1]=Math.round((c/l*.5+.5)*255),e[u+2]=Math.round((3/l*.5+.5)*255),e[u+3]=255}let t=new ns(e,n,n,Qt);return t.wrapS=bn,t.wrapT=bn,t.needsUpdate=!0,t}function O2(n){let e=n.map(([r,o])=>new le(r,o)),t=0;for(let r=0;r<e.length-1;r+=1)t+=e[r].distanceTo(e[r+1]);let i=t/Math.max(40,(e.length-1)*8),s=[e[0].clone()];for(let r=0;r<e.length-1;r+=1){let o=e[r],a=e[r+1],c=Math.max(1,Math.ceil(o.distanceTo(a)/i));for(let l=1;l<=c;l+=1)s.push(new le().lerpVectors(o,a,l/c))}return s}function Yv(n,e){let t=O2(n.points),i=n.width/2,s=[],r=[],o=[],a=0;t.forEach((d,f)=>{let g=t[Math.min(f+1,t.length-1)],x=t[Math.max(f-1,0)],y=g.x-x.x,p=g.y-x.y,_=Math.hypot(y,p)||1,b=-p/_,v=y/_;f>0&&(a+=d.distanceTo(x));for(let P of[-1,1])s.push(d.x+b*i*P,.03,-(d.y+v*i*P)),r.push(P*.5+.5,a/n.width);if(f>0){let P=(f-1)*2;o.push(P,P+2,P+1,P+1,P+2,P+3)}});let c=new Rt;c.setAttribute("position",new st(s,3)),c.setAttribute("uv",new st(r,2)),c.setIndex(o),c.computeVertexNormals();let l=k2();l.repeat.set(1.5,1.5);let u=new nt({color:"#3d7d86",roughness:.12,metalness:0,normalMap:l,normalScale:new le(.45,.45),transparent:!0,opacity:.9}),h=new Y(c,u);return h.receiveShadow=!0,e.add(h),{update(d){l.offset.set(d*.01,-d*.06)}}}var jv="0.3.4";var F2=[{file:"pumpkin.glb",at:[-15,-9,0],h:12},{file:"pumpkin.glb",at:[14,-10,0],h:-18},{file:"pumpkin.glb",at:[-13,11,0],h:30},{file:"pumpkin.glb",at:[12,12,.52],h:5},{file:"hay.glb",at:[11,8,0],h:40},{file:"hay.glb",at:[-12,-8,0],h:-20},{file:"scarecrow.glb",at:[-17,2,0],h:15,s:.55},{file:"village/v_lantern.glb",at:[-4,-11,0],h:0},{file:"village/v_lantern.glb",at:[6,-11,0],h:0},{file:"candle.glb",at:[-2,4,.3],h:0,s:1.4},{file:"candle.glb",at:[3,4,.3],h:0,s:1.4},{file:"ghost.glb",at:[16,4,0],h:-30,s:.35}];function Zv(){let n=[];for(let e of F2){let t=mt(e.file,e.at[0],e.at[1],e.at[2]||0,e.h||0,Ne.world);e.s&&t.scale.setScalar(e.s),n.push(t)}return n}function B2(n){let e=new Oe,t=new Y(new _t(.07,.09,.22,10),new nt({color:"#d8ecff",transparent:!0,opacity:.42,roughness:.12,metalness:.15}));t.position.y=.14;let i=new Y(new _t(.055,.07,.13,10),new nt({color:n,emissive:n,emissiveIntensity:.45,roughness:.35}));i.position.y=.1;let s=new Y(new _t(.03,.045,.08,8),new nt({color:"#e7f4ff",transparent:!0,opacity:.5,roughness:.1}));s.position.y=.28;let r=new Y(new _t(.032,.032,.04,8),new nt({color:"#c48a4a",roughness:.8}));return r.position.y=.33,e.add(t,i,s,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),e}function Kv(){let n=so(m.save);for(let e of m.potions?.bottles||[]){let t=ds(m.potions,e.potion),i=B2(t?.color||"#ff8a3d"),s=e.at[2]||.02;i.position.copy(Le(e.at[0],e.at[1],s)),(Ne[e.level]||Ne.world).add(i),e.node=i,n.has(e.id)&&(i.visible=!1)}}new URLSearchParams(location.search).has("debug")&&Object.assign(window,{game:m,scene:Je,renderer:ht,camera:wt});var Co=Fx(),z2=Bx(Co),im=0,sm=null,rm=null,Jv=Ox(()=>m.playing);function H2(){let{player:n,view:e}=m,t=m.world.levels[m.level],i=Li(e.lookH),s=-Math.sin(i),r=Math.cos(i),o=m.rides?.[0]?.phase==="flying",a=t.cam_back+(o?1.4:0),c=n.x-s*a,l=n.y-r*a,u=t.origin[0]-t.half[0]+t.inset,h=t.origin[0]+t.half[0]-t.inset,d=t.origin[1]-t.half[1]+t.inset,f=t.origin[1]+t.half[1]-t.inset,g=t.cam_up+e.lookPitch*2.2+Math.max(0,n.z);wt.position.copy(Le(Math.min(h,Math.max(u,c)),Math.min(f,Math.max(d,l)),g)),wt.lookAt(Le(n.x,n.y,.45+Math.max(0,n.z)-e.lookPitch*.35)),Ux(n.x,n.y,m.daylight?.key)}function Qv(n){requestAnimationFrame(Qv),us(),nm.value=n/1e3;let e=1/60,t=m.playing&&!m.paused&&!document.hidden,i=im?Math.min(.1,(n-im)/1e3):0;if(im=n,Ca()){$_(i||e),er()?Co.dome.visible=!1:(Co.dome.visible=!0,Co.dome.position.copy(Le(m.player.x,m.player.y,0)),t&&(op(e,Math.hypot(m.input.stickX,m.input.stickY)>.16),xa())),fp(n*.001),ql(n),Jv(n),ht.render(Je,wt);return}Co.dome.visible=!0,m.world&&z2.update(i,t,n/1e3),m.world&&t&&fv(e),sm&&m.level==="world"&&sm.update(m.player.x,m.player.y),rm&&rm.update(n/1e3),t&&(op(e,Math.hypot(m.input.stickX,m.input.stickY)>.16),Qx(e,m.player.x,m.player.y,m.clock?.hours??9),Vv(e)),Px(e),xa(),m.world&&H2(),Co.dome.position.copy(Le(m.player.x,m.player.y,0)),fp(n*.001),ql(n),Jv(n),ht.render(Je,wt),Wv(t?e:0)}async function V2(){let n=null;try{n=await(await fetch("/assets/village/ui_layout.json")).json()}catch{}Fv(n),Nv(),Vx(),qx();let e=document.querySelector("#keys-hint");e&&(e.dataset.idle=e.textContent);let t=`v${jv}`;for(let T of["load-version","menu-version","pause-version"]){let O=document.querySelector(`#${T}`);O&&(O.textContent=t)}n_(),e_(),Bv(),zv(),Iv(),I_(),window.addEventListener("pagehide",Ev),requestAnimationFrame(Qv);let i=await(await fetch("/assets/world.json")).json(),s=await(await fetch("/assets/village/overworld.json")).json(),r=await(await fetch("/assets/village/quests.json")).json(),o=await(await fetch("/assets/village/npcs.json")).json(),a=await(await fetch("/assets/village/items.json")).json(),c=await(await fetch("/assets/village/pickups.json")).json(),l=await(await fetch("/assets/village/plots.json")).json(),u=await(await fetch("/assets/village/buildings.json")).json(),h=await(await fetch("/assets/village/bulletin.json")).json(),d=await(await fetch("/assets/village/potions.json")).json(),f=await(await fetch("/assets/village/interiors.json")).json(),g={version:1,stations:[],edges:[],speed:5};try{g=await(await fetch("/assets/village/transit.json")).json()}catch{}let x={version:1,blueprints:[]};try{x=await(await fetch("/assets/village/blueprints.json")).json()}catch{}let y=Af(i,s,["marker.glb","village/v_plot_sign.glb","bloompin.glb",...u.buildings.map(T=>T.file)],f),{world:p,files:_,river:b,spawn:v,pumpkinSpots:P}=y;m.world=p,m.world.clothing=p.clothing.filter(T=>!T.season||T.season===m.season),m.overworld=s,m.interiors=f,Xx(Object.keys(p.levels)),m.base={quests:r,pickups:c},m.bulletin=h,m.potions=d,m.npcs=o,m.items=a,m.plots=l,m.buildings=u,m.blueprints=x,m.river=b,Ky(m.save,l);let R=ex(m.save,u,Date.now());if(R.away){let T=()=>{ae(`While you were away your buildings earned ${pn(R.credited)} (tap them to collect)`)};document.querySelector("#story")?.addEventListener("click",T,{once:!0}),document.querySelector("#multiplayer")?.addEventListener("click",T,{once:!0})}m.lastRuckusQuest=0,m.fit=await(await fetch("/assets/clothes_fit.json")).json(),un(m.save.coins),m.score=ly(m.save,m.player,null,m.save.score);for(let T of s.signposts||[])xl(T,m.save.discovered)&&yl(m.save,T.id);let I=0,L=()=>{let T=Math.round(I/_.size*100);document.querySelector("#load-status").textContent=`Loading the park\u2026 ${T}%`,document.querySelector("#load-bar").style.width=`${T}%`};L();for(let T of _)await mn(T),I+=1,L();await Tx(),await Zx(o.npcs),Yl(T=>fs(m.save,T)),_o(),Ip(),xp(),xs();for(let T of p.web_park)mt(T.file,T.at[0],T.at[1],T.at[2]||0,T.h||0,Ne.world);let E=qv(s,Ne.world,p.field_rect?[p.field_rect]:[]);rm=Yv(s.river,Ne.world),sm=await Xv(Ne.world,s.home.rect,E.grassAt);for(let T of Object.keys(p.levels))T!=="world"&&Yx(T,T==="mine"?"dirt.glb":"floor.glb","wall.glb");m.solids=[...Ul(p.dress,null),...Ul(s.dressing||[],"world")];for(let T of p.dress){let O=mt(T.file,T.at[0],T.at[1],T.at[2]||0,T.h||0,Ne[T.level]);T.s&&O.scale.setScalar(T.s)}for(let T of s.dressing||[]){let O=mt(T.file,T.at[0],T.at[1],T.at[2]||0,T.h||0,Ne.world);T.s&&O.scale.setScalar(T.s),T.node=O}Dx(p);for(let[T,O]of P)mt("pumpkin.glb",T,O,0,T*40%360,Ne.world);m.season==="halloween"&&Zv();let M=Di(m.save);for(let T of p.clothing){let O=mt(T.file,T.spot[0],T.spot[1],.2,0,Ne[T.level]);T.node=O,M.has(T.id)&&(O.visible=!1)}Kv();for(let T of[...p.dynamics,...p.web_toys])ov(T);Vl(),mp("world");try{let T=await(await fetch("/assets/jsbsim/aircraft/broomstick/broomstick.xml")).text();await y_(T,Ne.world)}catch(T){console.warn("Broomstick FDM missing",T)}try{await S_(g,Ne.world)}catch(T){console.warn("Transit train missing",T)}if(zt(),Xt(),document.querySelector("#load-bar").style.width="100%",document.querySelector("#load-status").textContent="Ready",document.querySelector("#load").classList.add("hidden"),document.querySelector("#menu").classList.remove("hidden"),m.season==="halloween"&&!m.save.flags?.halloween_hint){let T=()=>{ae("Halloween live event! Party at your yard from 5pm\u201310pm. Talk to Pip to start."),m.save.flags={...m.save.flags||{},halloween_hint:!0},Xt()};document.querySelector("#story")?.addEventListener("click",T,{once:!0}),document.querySelector("#multiplayer")?.addEventListener("click",T,{once:!0})}}V2().catch(n=>{let e=document.querySelector("#load-status");e.textContent="Could not load the park. Check the Wi-Fi and try again.",console.error(n)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

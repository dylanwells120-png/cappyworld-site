(()=>{var a1=Object.defineProperty;var l1=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var c1=(n,e)=>{for(var t in e)a1(n,t,{get:e[t],enumerable:!0})};var Tb={};c1(Tb,{say:()=>ce,showBark:()=>El,tickToast:()=>bh});function ce(n){document.querySelector("#toast").textContent=n,vh=performance.now()+2200}function El(n,e){let t=document.querySelector("#bark");t&&(t.textContent=`${n}: ${e}`,_h=performance.now()+2200)}function bh(n){if(vh&&n>vh&&(document.querySelector("#toast").textContent="",vh=0),_h&&n>_h){let e=document.querySelector("#bark");e&&(e.textContent=""),_h=0}}var vh,_h,Qt=l1(()=>{vh=0,_h=0});var u1=0,U0=1,h1=2;var sx=0,Ro=1,Po=2,ri=3,Mi=0,Vt=1,oi=2,Yt=0,lo=1,Hc=2,O0=3,F0=4,xp=5,Wn=100,f1=101,d1=102,p1=103,m1=104,Io=200,g1=201,y1=202,x1=203,Zf=204,Kf=205,yu=206,v1=207,xu=208,_1=209,b1=210,M1=211,S1=212,w1=213,E1=214,Jf=0,Qf=1,ed=2,fo=3,td=4,nd=5,id=6,sd=7,rx=0,T1=1,A1=2,bi=0,Ja=1,Qa=2,el=3,Ns=4,C1=5,tl=6,nl=7,B0="attached",R1="detached",ox=300,po=301,mo=302,rd=303,od=304,vu=306,Zt=1e3,Wi=1001,Ga=1002,jt=1003,vp=1004;var so=1005;var hn=1006,Oa=1007;var _i=1008;var kn=1009,ax=1010,lx=1011,Wa=1012,_p=1013,or=1014,li=1015,_n=1016,bp=1017,Mp=1018,Ms=1020,cx=35902,ux=1021,hx=1022,sn=1023,fx=1024,dx=1025,co=1026,Ss=1027,Sp=1028,wp=1029,px=1030,Ep=1031;var Tp=1033,Uc=33776,Oc=33777,Fc=33778,Bc=33779,ad=35840,ld=35841,cd=35842,ud=35843,hd=36196,fd=37492,dd=37496,pd=37808,md=37809,gd=37810,yd=37811,xd=37812,vd=37813,_d=37814,bd=37815,Md=37816,Sd=37817,wd=37818,Ed=37819,Td=37820,Ad=37821,zc=36492,Cd=36494,Rd=36495,mx=36283,Pd=36284,Id=36285,Ld=36286,_u=2200,Lo=2201,P1=2202,go=2300,yo=2301,pf=2302,ro=2400,oo=2401,Vc=2402,Ap=2500,I1=2501,gx=0,bu=1,il=2,L1=3200,D1=3201;var Cp=0,N1=1,vs="",qe="srgb",bn="srgb-linear",Mu="linear",dt="srgb";var Br=7680;var z0=519,k1=512,U1=513,O1=514,yx=515,F1=516,B1=517,z1=518,H1=519,Dd=35044;var H0="300 es",qi=2e3,Gc=2001,Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],V0=1234567,Fa=Math.PI/180,xo=180/Math.PI;function ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Rp(n,e){return(n%e+e)%e}function V1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function G1(n,e,t){return n!==e?(t-n)/(e-n):0}function Ba(n,e,t){return(1-t)*n+t*e}function W1(n,e,t,i){return Ba(n,e,1-Math.exp(-t*i))}function q1(n,e=1){return e-Math.abs(Rp(n,e*2)-e)}function $1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function X1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Y1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function j1(n,e){return n+Math.random()*(e-n)}function Z1(n){return n*(.5-Math.random())}function K1(n){n!==void 0&&(V0=n);let e=V0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J1(n){return n*Fa}function Q1(n){return n*xo}function eE(n){return(n&n-1)===0&&n!==0}function tE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iE(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ct={DEG2RAD:Fa,RAD2DEG:xo,generateUUID:ci,clamp:Xt,euclideanModulo:Rp,mapLinear:V1,inverseLerp:G1,lerp:Ba,damp:W1,pingpong:q1,smoothstep:$1,smootherstep:X1,randInt:Y1,randFloat:j1,randFloatSpread:Z1,seededRandom:K1,degToRad:J1,radToDeg:Q1,isPowerOfTwo:eE,ceilPowerOfTwo:tE,floorPowerOfTwo:nE,setQuaternionFromProperEuler:iE,normalize:xt,denormalize:ai},te=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],x=s[0],y=s[3],g=s[6],v=s[1],b=s[4],_=s[7],R=s[2],M=s[5],T=s[8];return r[0]=o*x+a*v+l*R,r[3]=o*y+a*b+l*M,r[6]=o*g+a*_+l*T,r[1]=c*x+u*v+h*R,r[4]=c*y+u*b+h*M,r[7]=c*g+u*_+h*T,r[2]=f*x+d*v+p*R,r[5]=f*y+d*b+p*M,r[8]=f*g+d*_+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mf.makeScale(e,t)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mf=new We;function xx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sE(){let n=qa("canvas");return n.style.display="block",n}var G0={};function ka(n){n in G0||(G0[n]=!0,console.warn(n))}function rE(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function oE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(n.r=$i(n.r),n.g=$i(n.g),n.b=$i(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(n.r=uo(n.r),n.g=uo(n.g),n.b=uo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vs?Mu:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var W0=[.64,.33,.3,.6,.15,.06],q0=[.2126,.7152,.0722],$0=[.3127,.329],X0=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[bn]:{primaries:W0,whitePoint:$0,transfer:Mu,toXYZ:X0,fromXYZ:Y0,luminanceCoefficients:q0,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:W0,whitePoint:$0,transfer:dt,toXYZ:X0,fromXYZ:Y0,luminanceCoefficients:q0,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var zr,Nd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=qa("canvas")),zr.width=e.width,zr.height=e.height;let i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lE=0,Wc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gf(s[o].image)):r.push(gf(s[o]))}else r=gf(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cE=0,on=class n extends Xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wi,s=Wi,r=hn,o=_i,a=sn,l=kn,c=n.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ci(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zt:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zt:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ox;on.DEFAULT_ANISOTROPY=1;var rt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],x=l[2],y=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(p-y)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(p+y)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(d+1)/2,R=(g+1)/2,M=(u+f)/4,T=(h+x)/4,I=(p+y)/4;return b>_&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=M/i,r=T/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=M/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=I/r),this.set(i,s,r,t),this}let v=Math.sqrt((y-p)*(y-p)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(y-p)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kd=class extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends kd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qc=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ud=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==p){let y=1-a,g=l*f+c*d+u*p+h*x,v=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){let R=Math.sqrt(b),M=Math.atan2(R,g*v);y=Math.sin(y*M)/R,a=Math.sin(a*M)/R}let _=a*v;if(l=l*y+f*_,c=c*y+d*_,u=u*y+p*_,h=h*y+x*_,y===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(j0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(j0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yf=new P,j0=new rn,zt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),oc.subVectors(this.max,wa),Hr.subVectors(e.a,wa),Vr.subVectors(e.b,wa),Gr.subVectors(e.c,wa),ds.subVectors(Vr,Hr),ps.subVectors(Gr,Vr),Js.subVectors(Hr,Gr);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Js.z,Js.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Js.z,0,-Js.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Js.y,Js.x,0];return!xf(t,Hr,Vr,Gr,oc)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,Hr,Vr,Gr,oc))?!1:(ac.crossVectors(ds,ps),t=[ac.x,ac.y,ac.z],xf(t,Hr,Vr,Gr,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new P,new P,new P,new P,new P,new P,new P,new P],ni=new P,rc=new zt,Hr=new P,Vr=new P,Gr=new P,ds=new P,ps=new P,Js=new P,wa=new P,oc=new P,ac=new P,Qs=new P;function xf(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qs.fromArray(n,r);let a=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),u=i.dot(Qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var uE=new zt,Ea=new P,vf=new P,Un=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):uE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(vf)),this.expandByPoint(Ea.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new P,_f=new P,lc=new P,ms=new P,bf=new P,cc=new P,Mf=new P,ar=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_f.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(_f);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=ms.dot(this.direction),l=-ms.dot(lc),c=ms.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_f).addScaledVector(lc,f),d}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,r){bf.subVectors(t,e),cc.subVectors(i,e),Mf.crossVectors(bf,cc);let o=this.direction.dot(Mf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,e);let l=a*this.direction.dot(cc.crossVectors(ms,cc));if(l<0)return null;let c=a*this.direction.dot(bf.cross(ms));if(c<0||l+c>o)return null;let u=-a*ms.dot(Mf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,y){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,y)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,p,x,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,fE)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),gs.crossVectors(i,Dn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),gs.crossVectors(i,Dn)),gs.normalize(),uc.crossVectors(Dn,gs),s[0]=gs.x,s[4]=uc.x,s[8]=Dn.x,s[1]=gs.y,s[5]=uc.y,s[9]=Dn.y,s[2]=gs.z,s[6]=uc.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],x=i[6],y=i[10],g=i[14],v=i[3],b=i[7],_=i[11],R=i[15],M=s[0],T=s[4],I=s[8],E=s[12],S=s[1],L=s[5],N=s[9],z=s[13],G=s[2],D=s[6],V=s[10],ne=s[14],$=s[3],ie=s[7],ae=s[11],ve=s[15];return r[0]=o*M+a*S+l*G+c*$,r[4]=o*T+a*L+l*D+c*ie,r[8]=o*I+a*N+l*V+c*ae,r[12]=o*E+a*z+l*ne+c*ve,r[1]=u*M+h*S+f*G+d*$,r[5]=u*T+h*L+f*D+d*ie,r[9]=u*I+h*N+f*V+d*ae,r[13]=u*E+h*z+f*ne+d*ve,r[2]=p*M+x*S+y*G+g*$,r[6]=p*T+x*L+y*D+g*ie,r[10]=p*I+x*N+y*V+g*ae,r[14]=p*E+x*z+y*ne+g*ve,r[3]=v*M+b*S+_*G+R*$,r[7]=v*T+b*L+_*D+R*ie,r[11]=v*I+b*N+_*V+R*ae,r[15]=v*E+b*z+_*ne+R*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],x=e[7],y=e[11],g=e[15];return p*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+y*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+g*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],x=e[13],y=e[14],g=e[15],v=h*y*c-x*f*c+x*l*d-a*y*d-h*l*g+a*f*g,b=p*f*c-u*y*c-p*l*d+o*y*d+u*l*g-o*f*g,_=u*x*c-p*h*c+p*a*d-o*x*d-u*a*g+o*h*g,R=p*h*l-u*x*l-p*a*f+o*x*f+u*a*y-o*h*y,M=t*v+i*b+s*_+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=v*T,e[1]=(x*f*r-h*y*r-x*s*d+i*y*d+h*s*g-i*f*g)*T,e[2]=(a*y*r-x*l*r+x*s*c-i*y*c-a*s*g+i*l*g)*T,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*T,e[4]=b*T,e[5]=(u*y*r-p*f*r+p*s*d-t*y*d-u*s*g+t*f*g)*T,e[6]=(p*l*r-o*y*r-p*s*c+t*y*c+o*s*g-t*l*g)*T,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*T,e[8]=_*T,e[9]=(p*h*r-u*x*r-p*i*d+t*x*d+u*i*g-t*h*g)*T,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*g+t*a*g)*T,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*T,e[12]=R*T,e[13]=(u*x*s-p*h*s+p*i*f-t*x*f-u*i*y+t*h*y)*T,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*y-t*a*y)*T,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,x=o*u,y=o*h,g=a*h,v=l*c,b=l*u,_=l*h,R=i.x,M=i.y,T=i.z;return s[0]=(1-(x+g))*R,s[1]=(d+_)*R,s[2]=(p-b)*R,s[3]=0,s[4]=(d-_)*M,s[5]=(1-(f+g))*M,s[6]=(y+v)*M,s[7]=0,s[8]=(p+b)*T,s[9]=(y-v)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Wr.set(s[0],s[1],s[2]).length(),o=Wr.set(s[4],s[5],s[6]).length(),a=Wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,u=1/o,h=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,p;if(a===qi)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Gc)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,p,x;if(a===qi)p=(o+r)*h,x=-2*h;else if(a===Gc)p=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wr=new P,ii=new Ie,hE=new P(0,0,0),fE=new P(1,1,1),gs=new P,uc=new P,Dn=new P,Z0=new Ie,K0=new rn,Si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dE=0,J0=new P,qr=new rn,Bi=new Ie,hc=new P,Ta=new P,pE=new P,mE=new rn,Q0=new P(1,0,0),ey=new P(0,1,0),ty=new P(0,0,1),ny={type:"added"},gE={type:"removed"},$r={type:"childadded",child:null},Sf={type:"childremoved",child:null},Tt=class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Si,i=new rn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new We}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(ey,e)}rotateZ(e){return this.rotateOnAxis(ty,e)}translateOnAxis(e,t){return J0.copy(e).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(ey,e)}translateZ(e){return this.translateOnAxis(ty,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ta,hc,this.up):Bi.lookAt(hc,Ta,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(Bi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ny),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gE),Sf.child=e,this.dispatchEvent(Sf),Sf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ny),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new P,zi=new P,wf=new P,Hi=new P,Xr=new P,Yr=new P,iy=new P,Ef=new P,Tf=new P,Af=new P,Cf=new rt,Rf=new rt,Pf=new rt,_s=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),zi.subVectors(i,t),wf.subVectors(e,t);let o=si.dot(si),a=si.dot(zi),l=si.dot(wf),c=zi.dot(zi),u=zi.dot(wf),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Cf.setScalar(0),Rf.setScalar(0),Pf.setScalar(0),Cf.fromBufferAttribute(e,t),Rf.fromBufferAttribute(e,i),Pf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cf,r.x),o.addScaledVector(Rf,r.y),o.addScaledVector(Pf,r.z),o}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),zi.subVectors(e,t),si.cross(zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),si.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Xr.subVectors(s,i),Yr.subVectors(r,i),Ef.subVectors(e,i);let l=Xr.dot(Ef),c=Yr.dot(Ef);if(l<=0&&c<=0)return t.copy(i);Tf.subVectors(e,s);let u=Xr.dot(Tf),h=Yr.dot(Tf);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xr,o);Af.subVectors(e,r);let d=Xr.dot(Af),p=Yr.dot(Af);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Yr,a);let y=u*p-d*h;if(y<=0&&h-u>=0&&d-p>=0)return iy.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(iy,a);let g=1/(y+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},fc={h:0,s:0,l:0};function If(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Rp(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=If(o,r,e+1/3),this.g=If(o,r,e),this.b=If(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return et.fromWorkingColorSpace(vn.copy(this),e),Math.round(Xt(vn.r*255,0,255))*65536+Math.round(Xt(vn.g*255,0,255))*256+Math.round(Xt(vn.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(vn.copy(this),t);let i=vn.r,s=vn.g,r=vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=qe){et.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,i=vn.g,s=vn.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(fc);let i=Ba(ys.h,fc.h,t),s=Ba(ys.s,fc.s,t),r=Ba(ys.l,fc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new oe;oe.NAMES=vx;var yE=0,En=class extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ci(),this.name="",this.blending=lo,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Kf,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fn=class extends En{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new P,dc=new te,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dd,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dd&&(e.usage=this.usage),e}};var $c=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xc=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},xE=0,Gn=new Ie,Lf=new Tt,jr=new P,Nn=new zt,Aa=new zt,nn=new P,ot=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Xc:$c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Lf.lookAt(e),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Aa.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Nn.min,Aa.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Aa.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Aa.min),Nn.expandByPoint(Aa.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),nn.add(jr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new P,l[I]=new P;let c=new P,u=new P,h=new P,f=new te,d=new te,p=new te,x=new P,y=new P;function g(I,E,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(L),y.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(L),a[I].add(x),a[E].add(x),a[S].add(x),l[I].add(y),l[E].add(y),l[S].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,E=v.length;I<E;++I){let S=v[I],L=S.start,N=S.count;for(let z=L,G=L+N;z<G;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new P,_=new P,R=new P,M=new P;function T(I){R.fromBufferAttribute(s,I),M.copy(R);let E=a[I];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),_.crossVectors(M,E);let L=_.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,E=v.length;I<E;++I){let S=v[I],L=S.start,N=S.count;for(let z=L,G=L+N;z<G;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sy=new Ie,er=new ar,pc=new Un,ry=new P,mc=new P,gc=new P,yc=new P,Df=new P,xc=new P,oy=new P,vc=new P,Y=class extends Tt{constructor(e=new ot,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Df.fromBufferAttribute(h,e),o?xc.addScaledVector(Df,u):xc.addScaledVector(Df.sub(t),u))}t.add(xc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),er.copy(e.ray).recast(e.near),!(pc.containsPoint(er.origin)===!1&&(er.intersectSphere(pc,ry)===null||er.origin.distanceToSquared(ry)>(e.far-e.near)**2))&&(sy.copy(r).invert(),er.copy(e.ray).applyMatrix4(sy),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let y=f[p],g=o[y.materialIndex],v=Math.max(y.start,d.start),b=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let _=v,R=b;_<R;_+=3){let M=a.getX(_),T=a.getX(_+1),I=a.getX(_+2);s=_c(this,g,e,i,c,u,h,M,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let y=p,g=x;y<g;y+=3){let v=a.getX(y),b=a.getX(y+1),_=a.getX(y+2);s=_c(this,o,e,i,c,u,h,v,b,_),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let y=f[p],g=o[y.materialIndex],v=Math.max(y.start,d.start),b=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let _=v,R=b;_<R;_+=3){let M=_,T=_+1,I=_+2;s=_c(this,g,e,i,c,u,h,M,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let y=p,g=x;y<g;y+=3){let v=y,b=y+1,_=y+2;s=_c(this,o,e,i,c,u,h,v,b,_),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function vE(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Mi,a),l===null)return null;vc.copy(a),vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:n}}function _c(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mc),n.getVertexPosition(l,gc),n.getVertexPosition(c,yc);let u=vE(n,e,t,i,mc,gc,yc,oy);if(u){let h=new P;_s.getBarycoord(oy,mc,gc,yc,h),s&&(u.uv=_s.getInterpolatedAttribute(s,a,l,c,h,new te)),r&&(u.uv1=_s.getInterpolatedAttribute(r,a,l,c,h,new te)),o&&(u.normal=_s.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};_s.getNormal(mc,gc,yc,f.normal),u.face=f,u.barycoord=h}return u}var Lt=class n extends ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function p(x,y,g,v,b,_,R,M,T,I,E){let S=_/T,L=R/I,N=_/2,z=R/2,G=M/2,D=T+1,V=I+1,ne=0,$=0,ie=new P;for(let ae=0;ae<V;ae++){let ve=ae*L-z;for(let Re=0;Re<D;Re++){let $e=Re*S-N;ie[x]=$e*v,ie[y]=ve*b,ie[g]=G,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[y]=0,ie[g]=M>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Re/T),h.push(1-ae/I),ne+=1}}for(let ae=0;ae<I;ae++)for(let ve=0;ve<T;ve++){let Re=f+ve+D*ae,$e=f+ve+D*(ae+1),Z=f+(ve+1)+D*(ae+1),re=f+(ve+1)+D*ae;l.push(Re,$e,re),l.push($e,Z,re),$+=6}a.addGroup(d,$,E),d+=$,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=vo(n[t]);for(let s in i)e[s]=i[s]}return e}function _E(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _x(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Mn={clone:vo,merge:wn},bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ME=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends En{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=ME,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Yc=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xs=new P,ay=new te,ly=new te,Ut=class extends Yc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,ay,ly),t.subVectors(ly,ay)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zr=-90,Kr=1,Od=class extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Zr,Kr,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Zr,Kr,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Zr,Kr,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Zr,Kr,e,t);a.layers=this.layers,this.add(a);let l=new Ut(Zr,Kr,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Zr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},jc=class extends on{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fd=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lt(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Yt});r.uniforms.tEquirect.value=t;let o=new Y(s,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=hn),new Od(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Nf=new P,SE=new P,wE=new We,Gi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nf.subVectors(i,t).cross(SE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wE.getNormalMatrix(e),s=this.coplanarPoint(Nf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new Un,bc=new P,Xa=class{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],p=s[9],x=s[10],y=s[11],g=s[12],v=s[13],b=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,y-d,_-g).normalize(),i[1].setComponents(l+r,f+c,y+d,_+g).normalize(),i[2].setComponents(l+o,f+u,y+p,_+v).normalize(),i[3].setComponents(l-o,f-u,y-p,_-v).normalize(),i[4].setComponents(l-a,f-h,y-x,_-b).normalize(),t===qi)i[5].setComponents(l+a,f+h,y+x,_+b).normalize();else if(t===Gc)i[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bc.x=s.normal.x>0?e.max.x:e.min.x,bc.y=s.normal.y>0?e.max.y:e.min.y,bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bx(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function EE(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ws=class n extends ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],x=[],y=[];for(let g=0;g<u;g++){let v=g*f-o;for(let b=0;b<c;b++){let _=b*h-r;p.push(_,-v,0),x.push(0,0,1),y.push(b/a),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,_=v+c*(g+1),R=v+1+c*(g+1),M=v+1+c*g;d.push(b,_,M),d.push(_,R,M)}this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
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
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`#ifdef USE_BATCHING
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
#endif`,kE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BE=`#ifdef USE_IRIDESCENCE
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
#endif`,zE=`#ifdef USE_BUMPMAP
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KE=`vec3 transformedNormal = objectNormal;
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
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nT="gl_FragColor = linearToOutputTexel( gl_FragColor );",iT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,aT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dT=`#ifdef USE_GRADIENTMAP
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
}`,pT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
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
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
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
#endif`,wT=`struct PhysicalMaterial {
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
}`,ET=`
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
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
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
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
#endif`,VT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
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
#endif`,jT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uA=`float getShadowMask() {
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
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TA=`uniform sampler2D t2D;
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
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
}`,LA=`#if DEPTH_PACKING == 3200
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
}`,DA=`#define DISTANCE
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
}`,NA=`#define DISTANCE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`uniform float scale;
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
}`,FA=`uniform vec3 diffuse;
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
}`,BA=`#include <common>
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
}`,zA=`uniform vec3 diffuse;
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
}`,HA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,GA=`#define MATCAP
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
}`,WA=`#define MATCAP
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
}`,qA=`#define NORMAL
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
}`,$A=`#define NORMAL
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
}`,XA=`#define PHONG
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
}`,YA=`#define PHONG
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
}`,jA=`#define STANDARD
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
}`,ZA=`#define STANDARD
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
}`,KA=`#define TOON
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
}`,JA=`#define TOON
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
}`,QA=`uniform float size;
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
}`,e2=`uniform vec3 diffuse;
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
}`,t2=`#include <common>
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
}`,n2=`uniform vec3 color;
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
}`,i2=`uniform float rotation;
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
}`,s2=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:CE,alphamap_pars_fragment:RE,alphatest_fragment:PE,alphatest_pars_fragment:IE,aomap_fragment:LE,aomap_pars_fragment:DE,batching_pars_vertex:NE,batching_vertex:kE,begin_vertex:UE,beginnormal_vertex:OE,bsdfs:FE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:WE,color_fragment:qE,color_pars_fragment:$E,color_pars_vertex:XE,color_vertex:YE,common:jE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:KE,displacementmap_pars_vertex:JE,displacementmap_vertex:QE,emissivemap_fragment:eT,emissivemap_pars_fragment:tT,colorspace_fragment:nT,colorspace_pars_fragment:iT,envmap_fragment:sT,envmap_common_pars_fragment:rT,envmap_pars_fragment:oT,envmap_pars_vertex:aT,envmap_physical_pars_fragment:xT,envmap_vertex:lT,fog_vertex:cT,fog_pars_vertex:uT,fog_fragment:hT,fog_pars_fragment:fT,gradientmap_pars_fragment:dT,lightmap_pars_fragment:pT,lights_lambert_fragment:mT,lights_lambert_pars_fragment:gT,lights_pars_begin:yT,lights_toon_fragment:vT,lights_toon_pars_fragment:_T,lights_phong_fragment:bT,lights_phong_pars_fragment:MT,lights_physical_fragment:ST,lights_physical_pars_fragment:wT,lights_fragment_begin:ET,lights_fragment_maps:TT,lights_fragment_end:AT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:IT,map_fragment:LT,map_pars_fragment:DT,map_particle_fragment:NT,map_particle_pars_fragment:kT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:OT,morphinstance_vertex:FT,morphcolor_vertex:BT,morphnormal_vertex:zT,morphtarget_pars_vertex:HT,morphtarget_vertex:VT,normal_fragment_begin:GT,normal_fragment_maps:WT,normal_pars_fragment:qT,normal_pars_vertex:$T,normal_vertex:XT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:jT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:JT,opaque_fragment:QT,packing:eA,premultiplied_alpha_fragment:tA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:sA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:lA,shadowmap_vertex:cA,shadowmask_pars_fragment:uA,skinbase_vertex:hA,skinning_pars_vertex:fA,skinning_vertex:dA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:yA,tonemapping_pars_fragment:xA,transmission_fragment:vA,transmission_pars_fragment:_A,uv_pars_fragment:bA,uv_pars_vertex:MA,uv_vertex:SA,worldpos_vertex:wA,background_vert:EA,background_frag:TA,backgroundCube_vert:AA,backgroundCube_frag:CA,cube_vert:RA,cube_frag:PA,depth_vert:IA,depth_frag:LA,distanceRGBA_vert:DA,distanceRGBA_frag:NA,equirect_vert:kA,equirect_frag:UA,linedashed_vert:OA,linedashed_frag:FA,meshbasic_vert:BA,meshbasic_frag:zA,meshlambert_vert:HA,meshlambert_frag:VA,meshmatcap_vert:GA,meshmatcap_frag:WA,meshnormal_vert:qA,meshnormal_frag:$A,meshphong_vert:XA,meshphong_frag:YA,meshphysical_vert:jA,meshphysical_frag:ZA,meshtoon_vert:KA,meshtoon_frag:JA,points_vert:QA,points_frag:e2,shadow_vert:t2,shadow_frag:n2,sprite_vert:i2,sprite_frag:s2},pe={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vi={basic:{uniforms:wn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:wn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:wn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:wn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:wn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new oe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:wn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:wn([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:wn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:wn([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:wn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:wn([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:wn([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:wn([pe.lights,pe.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};vi.physical={uniforms:wn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Mc={r:0,b:0,g:0},nr=new Si,r2=new Ie;function o2(n,e,t,i,s,r,o){let a=new oe(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function p(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function x(v){let b=!1,_=p(v);_===null?g(a,l):_&&_.isColor&&(g(_,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===vu)?(u===void 0&&(u=new Y(new Lt(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:vo(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),nr.copy(b.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(nr)),u.material.toneMapped=et.getTransfer(_.colorSpace)!==dt,(h!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Y(new ws(2,2),new vt({name:"BackgroundMaterial",uniforms:vo(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,b){v.getRGB(Mc,_x(n)),i.buffers.color.setClear(Mc.r,Mc.g,Mc.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:x,addToRenderList:y}}function a2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,L,N,z,G){let D=!1,V=h(z,N,L);r!==V&&(r=V,c(r.object)),D=d(S,z,N,G),D&&p(S,z,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(S,L,N,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,N){let z=N.wireframe===!0,G=i[S.id];G===void 0&&(G={},i[S.id]=G);let D=G[L.id];D===void 0&&(D={},G[L.id]=D);let V=D[z];return V===void 0&&(V=f(l()),D[z]=V),V}function f(S){let L=[],N=[],z=[];for(let G=0;G<t;G++)L[G]=0,N[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,L,N,z){let G=r.attributes,D=L.attributes,V=0,ne=N.getAttributes();for(let $ in ne)if(ne[$].location>=0){let ae=G[$],ve=D[$];if(ve===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ae===void 0||ae.attribute!==ve||ve&&ae.data!==ve.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function p(S,L,N,z){let G={},D=L.attributes,V=0,ne=N.getAttributes();for(let $ in ne)if(ne[$].location>=0){let ae=D[$];ae===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));let ve={};ve.attribute=ae,ae&&ae.data&&(ve.data=ae.data),G[$]=ve,V++}r.attributes=G,r.attributesNum=V,r.index=z}function x(){let S=r.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function y(S){g(S,0)}function g(S,L){let N=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;N[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),G[S]!==L&&(n.vertexAttribDivisor(S,L),G[S]=L)}function v(){let S=r.newAttributes,L=r.enabledAttributes;for(let N=0,z=L.length;N<z;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function b(S,L,N,z,G,D,V){V===!0?n.vertexAttribIPointer(S,L,N,G,D):n.vertexAttribPointer(S,L,N,z,G,D)}function _(S,L,N,z){x();let G=z.attributes,D=N.getAttributes(),V=L.defaultAttributeValues;for(let ne in D){let $=D[ne];if($.location>=0){let ie=G[ne];if(ie===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){let ae=ie.normalized,ve=ie.itemSize,Re=e.get(ie);if(Re===void 0)continue;let $e=Re.buffer,Z=Re.type,re=Re.bytesPerElement,be=Z===n.INT||Z===n.UNSIGNED_INT||ie.gpuType===_p;if(ie.isInterleavedBufferAttribute){let ue=ie.data,Ee=ue.stride,Le=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<$.locationSize;Oe++)g($.location+Oe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<$.locationSize;Oe++)y($.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Oe=0;Oe<$.locationSize;Oe++)b($.location+Oe,ve/$.locationSize,Z,ae,Ee*re,(Le+ve/$.locationSize*Oe)*re,be)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)g($.location+ue,ie.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<$.locationSize;ue++)y($.location+ue);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ue=0;ue<$.locationSize;ue++)b($.location+ue,ve/$.locationSize,Z,ae,ve*re,ve/$.locationSize*ue*re,be)}}else if(V!==void 0){let ae=V[ne];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv($.location,ae);break;case 3:n.vertexAttrib3fv($.location,ae);break;case 4:n.vertexAttrib4fv($.location,ae);break;default:n.vertexAttrib1fv($.location,ae)}}}}v()}function R(){I();for(let S in i){let L=i[S];for(let N in L){let z=L[N];for(let G in z)u(z[G].object),delete z[G];delete L[N]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;let L=i[S.id];for(let N in L){let z=L[N];for(let G in z)u(z[G].object),delete z[G];delete L[N]}delete i[S.id]}function T(S){for(let L in i){let N=i[L];if(N[S.id]===void 0)continue;let z=N[S.id];for(let G in z)u(z[G].object),delete z[G];delete N[S.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:y,disableUnusedAttributes:v}}function l2(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==sn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==kn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!I)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:R,maxSamples:M}}function u2(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Gi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,x=h.clipIntersection,y=h.clipShadows,g=n.get(h);if(!s||p===null||p.length===0||r&&!y)r?u(null):c();else{let v=r?0:i,b=v*4,_=g.clippingState||null;l.value=_,_=u(p,f,b,d);for(let R=0;R!==b;++R)_[R]=t[R];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){let x=h!==null?h.length:0,y=null;if(x!==0){if(y=l.value,p!==!0||y===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,_=d;b!==x;++b,_+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(y,_),y[_+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function h2(n){let e=new WeakMap;function t(o,a){return a===rd?o.mapping=po:a===od&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===rd||a===od)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Es=class extends Yc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ao=4,cy=[.125,.215,.35,.446,.526,.582],rr=20,kf=new Es,uy=new oe,Uf=null,Of=0,Ff=0,Bf=!1,sr=(1+Math.sqrt(5))/2,Jr=1/sr,hy=[new P(-sr,Jr,0),new P(sr,Jr,0),new P(-Jr,0,sr),new P(Jr,0,sr),new P(0,sr,-Jr),new P(0,sr,Jr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=py(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Of,Ff),this._renderer.xr.enabled=Bf,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:_n,format:sn,colorSpace:bn,depthBuffer:!1},s=fy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fy(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f2(r)),this._blurMaterial=d2(r,e,t)}return s}_compileMaterial(e){let t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,kf)}_sceneToCubeUV(e,t,i,s){let a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(uy),u.toneMapping=bi,u.autoClear=!1;let d=new fn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new Y(new Lt,d),x=!1,y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,x=!0):(d.color.copy(uy),x=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let b=this._cubeSize;Sc(s,v*b,g>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===po||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=py()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dy());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Sc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,kf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hy[(s-r-1)%hy.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Y(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rr-1),x=r/p,y=isFinite(r)?1+Math.floor(u*x):rr;y>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rr}`);let g=[],v=0;for(let T=0;T<rr;++T){let I=T/x,E=Math.exp(-I*I/2);g.push(E),T===0?v+=E:T<y&&(v+=2*E)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;f.envMap.value=e.texture,f.samples.value=y,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-i;let _=this._sizeLods[s],R=3*_*(s>b-ao?s-b+ao:0),M=4*(this._cubeSize-_);Sc(t,R,M,3*_,2*_),l.setRenderTarget(t),l.render(h,kf)}};function f2(n){let e=[],t=[],i=[],s=n,r=n-ao+1+cy.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ao?l=cy[o-n+ao-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,x=3,y=2,g=1,v=new Float32Array(x*p*d),b=new Float32Array(y*p*d),_=new Float32Array(g*p*d);for(let M=0;M<d;M++){let T=M%3*2/3-1,I=M>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(E,x*p*M),b.set(f,y*p*M);let S=[M,M,M,M,M,M];_.set(S,g*p*M)}let R=new ot;R.setAttribute("position",new Nt(v,x)),R.setAttribute("uv",new Nt(b,y)),R.setAttribute("faceIndex",new Nt(_,g)),e.push(R),s>ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fy(n,e,t){let i=new Bt(n,e,t);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function d2(n,e,t){let i=new Float32Array(rr),s=new P(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function dy(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function py(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Pp(){return`

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
	`}function p2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===rd||l===od,u=l===po||l===mo;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _o(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new _o(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function m2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ka("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function g2(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let y=0,g=x.length;y<g;y++)e.remove(x[y])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let p in d){let x=d[p];for(let y=0,g=x.length;y<g;y++)e.update(x[y],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,p=h.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let b=0,_=v.length;b<_;b+=3){let R=v[b+0],M=v[b+1],T=v[b+2];f.push(R,M,M,T,T,R)}}else if(p!==void 0){let v=p.array;x=p.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let R=b+0,M=b+1,T=b+2;f.push(R,M,M,T,T,R)}}else return;let y=new(xx(f)?Xc:$c)(f,1);y.version=x;let g=r.get(h);g&&e.remove(g),r.set(h,y)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function y2(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];t.update(y,i,1)}function h(f,d,p,x){if(p===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],x[g]);else{y.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*x[v];t.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v2(n,e,t){let i=new WeakMap,s=new rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*R*4*h),T=new qc(M,_,R,h);T.type=li,T.needsUpdate=!0;let I=b*4;for(let S=0;S<h;S++){let L=y[S],N=g[S],z=v[S],G=_*R*4*S;for(let D=0;D<L.count;D++){let V=D*I;d===!0&&(s.fromBufferAttribute(L,D),M[G+V+0]=s.x,M[G+V+1]=s.y,M[G+V+2]=s.z,M[G+V+3]=0),p===!0&&(s.fromBufferAttribute(N,D),M[G+V+4]=s.x,M[G+V+5]=s.y,M[G+V+6]=s.z,M[G+V+7]=0),x===!0&&(s.fromBufferAttribute(z,D),M[G+V+8]=s.x,M[G+V+9]=s.y,M[G+V+10]=s.z,M[G+V+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new te(_,R)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _2(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var bo=class extends on{constructor(e,t,i,s,r,o,a,l,c,u=co){if(u!==co&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===co&&(i=or),i===void 0&&u===Ss&&(i=Ms),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mx=new on,my=new bo(1,1),Sx=new qc,wx=new Ud,Ex=new jc,gy=[],yy=[],xy=new Float32Array(16),vy=new Float32Array(9),_y=new Float32Array(4);function Do(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=gy[s];if(r===void 0&&(r=new Float32Array(s),gy[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Su(n,e){let t=yy[e];t===void 0&&(t=new Int32Array(e),yy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function S2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function w2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function E2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;_y.set(i),n.uniformMatrix2fv(this.addr,!1,_y),Jt(t,i)}}function T2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;vy.set(i),n.uniformMatrix3fv(this.addr,!1,vy),Jt(t,i)}}function A2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;xy.set(i),n.uniformMatrix4fv(this.addr,!1,xy),Jt(t,i)}}function C2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function L2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function N2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function U2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(my.compareFunction=yx,r=my):r=Mx,t.setTexture2D(e||r,s)}function O2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wx,s)}function F2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ex,s)}function B2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sx,s)}function z2(n){switch(n){case 5126:return b2;case 35664:return M2;case 35665:return S2;case 35666:return w2;case 35674:return E2;case 35675:return T2;case 35676:return A2;case 5124:case 35670:return C2;case 35667:case 35671:return R2;case 35668:case 35672:return P2;case 35669:case 35673:return I2;case 5125:return L2;case 36294:return D2;case 36295:return N2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return B2}}function H2(n,e){n.uniform1fv(this.addr,e)}function V2(n,e){let t=Do(e,this.size,2);n.uniform2fv(this.addr,t)}function G2(n,e){let t=Do(e,this.size,3);n.uniform3fv(this.addr,t)}function W2(n,e){let t=Do(e,this.size,4);n.uniform4fv(this.addr,t)}function q2(n,e){let t=Do(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $2(n,e){let t=Do(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X2(n,e){let t=Do(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Y2(n,e){n.uniform1iv(this.addr,e)}function j2(n,e){n.uniform2iv(this.addr,e)}function Z2(n,e){n.uniform3iv(this.addr,e)}function K2(n,e){n.uniform4iv(this.addr,e)}function J2(n,e){n.uniform1uiv(this.addr,e)}function Q2(n,e){n.uniform2uiv(this.addr,e)}function eC(n,e){n.uniform3uiv(this.addr,e)}function tC(n,e){n.uniform4uiv(this.addr,e)}function nC(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mx,r[o])}function iC(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wx,r[o])}function sC(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ex,r[o])}function rC(n,e,t){let i=this.cache,s=e.length,r=Su(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sx,r[o])}function oC(n){switch(n){case 5126:return H2;case 35664:return V2;case 35665:return G2;case 35666:return W2;case 35674:return q2;case 35675:return $2;case 35676:return X2;case 5124:case 35670:return Y2;case 35667:case 35671:return j2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return J2;case 36294:return Q2;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return rC}}var Bd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z2(t.type)}},zd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oC(t.type)}},Hd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},zf=/(\w+)(\])?(\[|\.)?/g;function by(n,e){n.seq.push(e),n.map[e.id]=e}function aC(n,e,t){let i=n.name,s=i.length;for(zf.lastIndex=0;;){let r=zf.exec(i),o=zf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){by(t,c===void 0?new Bd(a,n,e):new zd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Hd(a),by(t,h)),t=h}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);aC(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function My(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var lC=37297,cC=0;function uC(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Sy=new We;function hC(n){et._getMatrix(Sy,et.workingColorSpace,n);let e=`mat3( ${Sy.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Mu:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wy(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+uC(n.getShaderSource(e),o)}else return s}function fC(n,e){let t=hC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dC(n,e){let t;switch(e){case Ja:t="Linear";break;case Qa:t="Reinhard";break;case el:t="Cineon";break;case Ns:t="ACESFilmic";break;case tl:t="AgX";break;case nl:t="Neutral";break;case C1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new P;function pC(){et.getLuminanceCoefficients(wc);let n=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function gC(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yC(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ua(n){return n!==""}function Ey(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ty(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(n){return n.replace(xC,_C)}var vC=new Map;function _C(n,e){let t=Ze[e];if(t===void 0){let i=vC.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(t)}var bC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ay(n){return n.replace(bC,MC)}function MC(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cy(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function SC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ro?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function wC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EC(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===mo&&(e="ENVMAP_MODE_REFRACTION"),e}function TC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rx:e="ENVMAP_BLENDING_MULTIPLY";break;case T1:e="ENVMAP_BLENDING_MIX";break;case A1:e="ENVMAP_BLENDING_ADD";break}return e}function AC(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CC(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=SC(t),c=wC(t),u=EC(t),h=TC(t),f=AC(t),d=mC(t),p=gC(r),x=s.createProgram(),y,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),g.length>0&&(g+=`
`)):(y=[Cy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),g=[Cy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==bi?dC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,fC("linearToOutputTexel",t.outputColorSpace),pC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=Vd(o),o=Ey(o,t),o=Ty(o,t),a=Vd(a),a=Ey(a,t),a=Ty(a,t),o=Ay(o),a=Ay(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+y+o,_=v+g+a,R=My(s,s.VERTEX_SHADER,b),M=My(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(M).trim(),D=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,M);else{let ne=wy(s,R,"vertex"),$=wy(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+ne+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:D,programLog:N,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:g}})}s.deleteShader(R),s.deleteShader(M),I=new ho(s,x),E=yC(s,x)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,lC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=M,this}var RC=0,Gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wd(e),t.set(e,i)),i}},Wd=class{constructor(e){this.id=RC++,this.code=e,this.usedTimes=0}};function PC(n,e,t,i,s,r,o){let a=new $a,l=new Gd,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function y(E,S,L,N,z){let G=N.fog,D=z.geometry,V=E.isMeshStandardMaterial?N.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),$=ne&&ne.mapping===vu?ne.image.height:null,ie=p[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let ae=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ve=ae!==void 0?ae.length:0,Re=0;D.morphAttributes.position!==void 0&&(Re=1),D.morphAttributes.normal!==void 0&&(Re=2),D.morphAttributes.color!==void 0&&(Re=3);let $e,Z,re,be;if(ie){let yt=vi[ie];$e=yt.vertexShader,Z=yt.fragmentShader}else $e=E.vertexShader,Z=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),be=l.getFragmentShaderID(E);let ue=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,ut=!!E.map,Xe=!!E.matcap,mt=!!ne,U=!!E.aoMap,gt=!!E.lightMap,Ye=!!E.bumpMap,je=!!E.normalMap,B=!!E.displacementMap,he=!!E.emissiveMap,ee=!!E.metalnessMap,C=!!E.roughnessMap,w=E.anisotropy>0,H=E.clearcoat>0,j=E.dispersion>0,J=E.iridescence>0,K=E.sheen>0,we=E.transmission>0,fe=w&&!!E.anisotropyMap,me=H&&!!E.clearcoatMap,He=H&&!!E.clearcoatNormalMap,se=H&&!!E.clearcoatRoughnessMap,Me=J&&!!E.iridescenceMap,Ue=J&&!!E.iridescenceThicknessMap,Fe=K&&!!E.sheenColorMap,Se=K&&!!E.sheenRoughnessMap,it=!!E.specularMap,Be=!!E.specularColorMap,at=!!E.specularIntensityMap,k=we&&!!E.transmissionMap,de=we&&!!E.thicknessMap,X=!!E.gradientMap,Q=!!E.alphaMap,xe=E.alphaTest>0,ge=!!E.alphaHash,Ve=!!E.extensions,Ft=bi;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let yn={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:Z,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:bn,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:Xe,envMap:mt,envMapMode:mt&&ne.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:gt,bumpMap:Ye,normalMap:je,displacementMap:f&&B,emissiveMap:he,normalMapObjectSpace:je&&E.normalMapType===N1,normalMapTangentSpace:je&&E.normalMapType===Cp,metalnessMap:ee,roughnessMap:C,anisotropy:w,anisotropyMap:fe,clearcoat:H,clearcoatMap:me,clearcoatNormalMap:He,clearcoatRoughnessMap:se,dispersion:j,iridescence:J,iridescenceMap:Me,iridescenceThicknessMap:Ue,sheen:K,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:it,specularColorMap:Be,specularIntensityMap:at,transmission:we,transmissionMap:k,thicknessMap:de,gradientMap:X,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:xe,alphaHash:ge,combine:E.combine,mapUv:ut&&x(E.map.channel),aoMapUv:U&&x(E.aoMap.channel),lightMapUv:gt&&x(E.lightMap.channel),bumpMapUv:Ye&&x(E.bumpMap.channel),normalMapUv:je&&x(E.normalMap.channel),displacementMapUv:B&&x(E.displacementMap.channel),emissiveMapUv:he&&x(E.emissiveMap.channel),metalnessMapUv:ee&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(E.sheenRoughnessMap.channel),specularMapUv:it&&x(E.specularMap.channel),specularColorMapUv:Be&&x(E.specularColorMap.channel),specularIntensityMapUv:at&&x(E.specularIntensityMap.channel),transmissionMapUv:k&&x(E.transmissionMap.channel),thicknessMapUv:de&&x(E.thicknessMap.channel),alphaMapUv:Q&&x(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(je||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(ut||Q),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:he&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oi,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yn.vertexUv1s=c.has(1),yn.vertexUv2s=c.has(2),yn.vertexUv3s=c.has(3),c.clear(),yn}function g(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let S=p[E.type],L;if(S){let N=vi[S];L=Mn.clone(N.uniforms)}else L=E.uniforms;return L}function R(E,S){let L;for(let N=0,z=u.length;N<z;N++){let G=u[N];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new CC(n,S,E,r),u.push(L)),L}function M(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function I(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:_,acquireProgram:R,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:I}}function IC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function LC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ry(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Py(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,p,x,y){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:x,group:y},n[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=x,g.group=y),e++,g}function a(h,f,d,p,x,y){let g=o(h,f,d,p,x,y);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):t.push(g)}function l(h,f,d,p,x,y){let g=o(h,f,d,p,x,y);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||LC),i.length>1&&i.sort(f||Ry),s.length>1&&s.sort(f||Ry)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function DC(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Py,n.set(i,[o])):s>=r.length?(o=new Py,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new oe};break;case"SpotLight":t={position:new P,direction:new P,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function kC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UC=0;function OC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FC(n){let e=new NC,t=kC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ie,o=new Ie;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,p=0,x=0,y=0,g=0,v=0,b=0,_=0,R=0,M=0,T=0;c.sort(OC);for(let E=0,S=c.length;E<S;E++){let L=c[E],N=L.color,z=L.intensity,G=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*z,h+=N.g*z,f+=N.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],z);T++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,$=t.get(L);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=D,i.directionalShadowMatrix[d]=L.shadow.matrix,v++}i.directional[d]=V,d++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(N).multiplyScalar(z),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[x]=V;let ne=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ne.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[x]=ne.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=D,_++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(N).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=V,y++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let ne=L.shadow,$=t.get(L);$.shadowIntensity=ne.intensity,$.shadowBias=ne.bias,$.shadowNormalBias=ne.normalBias,$.shadowRadius=ne.radius,$.shadowMapSize=ne.mapSize,$.shadowCameraNear=ne.camera.near,$.shadowCameraFar=ne.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=V,p++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[g]=V,g++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==y||I.hemiLength!==g||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=y,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+R-M,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=T,I.directionalLength=d,I.pointLength=p,I.spotLength=x,I.rectAreaLength=y,I.hemiLength=g,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=T,i.version=UC++)}function l(c,u){let h=0,f=0,d=0,p=0,x=0,y=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){let b=c[g];if(b.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(y),h++}else if(b.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(y),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(y),d++}else if(b.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(y),o.identity(),r.copy(b.matrixWorld),r.premultiply(y),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(y),f++}else if(b.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(y),x++}}}return{setup:a,setupView:l,state:i}}function Iy(n){let e=new FC(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BC(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Iy(n),e.set(s,[a])):r>=o.length?(a=new Iy(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var qd=class extends En{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=L1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$d=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HC=`uniform sampler2D shadow_pass;
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
}`;function VC(n,e,t){let i=new Xa,s=new te,r=new te,o=new rt,a=new qd({depthPacking:D1}),l=new $d,c={},u=t.maxTextureSize,h={[Mi]:Vt,[Vt]:Mi,[oi]:oi},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:zC,fragmentShader:HC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ot;p.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(p,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let g=this.type;this.render=function(M,T,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;let E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Yt),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=g!==ri&&this.type===ri,G=g===ri&&this.type!==ri;for(let D=0,V=M.length;D<V;D++){let ne=M[D],$=ne.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ie=$.getFrameExtents();if(s.multiply(ie),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,$.mapSize.y=r.y)),$.map===null||z===!0||G===!0){let ve=this.type!==ri?{minFilter:jt,magFilter:jt}:{};$.map!==null&&$.map.dispose(),$.map=new Bt(s.x,s.y,ve),$.map.texture.name=ne.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let ae=$.getViewportCount();for(let ve=0;ve<ae;ve++){let Re=$.getViewport(ve);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),N.viewport(o),$.updateMatrices(ne,ve),i=$.getFrustum(),_(T,I,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===ri&&v($,I),$.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(E,S,L)};function v(M,T){let I=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Bt(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,I,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,I,d,x,null)}function b(M,T,I,E){let S=null,L=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=S.uuid,z=T.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let D=G[z];D===void 0&&(D=S.clone(),G[z]=D,T.addEventListener("dispose",R)),S=D}if(S.visible=T.visible,S.wireframe=T.wireframe,E===ri?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=I}return S}function _(M,T,I,E,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===ri)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);let z=e.update(M),G=M.material;if(Array.isArray(G)){let D=z.groups;for(let V=0,ne=D.length;V<ne;V++){let $=D[V],ie=G[$.materialIndex];if(ie&&ie.visible){let ae=b(M,ie,E,S);M.onBeforeShadow(n,M,T,I,z,ae,$),n.renderBufferDirect(I,null,z,ae,M,$),M.onAfterShadow(n,M,T,I,z,ae,$)}}}else if(G.visible){let D=b(M,G,E,S);M.onBeforeShadow(n,M,T,I,z,D,null),n.renderBufferDirect(I,null,z,D,M,null),M.onAfterShadow(n,M,T,I,z,D,null)}}let N=M.children;for(let z=0,G=N.length;z<G;z++)_(N[z],T,I,E,S)}function R(M){M.target.removeEventListener("dispose",R);for(let I in c){let E=c[I],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var GC={[Jf]:Qf,[ed]:id,[td]:sd,[fo]:nd,[Qf]:Jf,[id]:ed,[sd]:td,[nd]:fo};function WC(n,e){function t(){let k=!1,de=new rt,X=null,Q=new rt(0,0,0,0);return{setMask:function(xe){X!==xe&&!k&&(n.colorMask(xe,xe,xe,xe),X=xe)},setLocked:function(xe){k=xe},setClear:function(xe,ge,Ve,Ft,yn){yn===!0&&(xe*=Ft,ge*=Ft,Ve*=Ft),de.set(xe,ge,Ve,Ft),Q.equals(de)===!1&&(n.clearColor(xe,ge,Ve,Ft),Q.copy(de))},reset:function(){k=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let k=!1,de=!1,X=null,Q=null,xe=null;return{setReversed:function(ge){if(de!==ge){let Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let Ft=xe;xe=null,this.setClear(Ft)}de=ge},getReversed:function(){return de},setTest:function(ge){ge?ue(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ge){X!==ge&&!k&&(n.depthMask(ge),X=ge)},setFunc:function(ge){if(de&&(ge=GC[ge]),Q!==ge){switch(ge){case Jf:n.depthFunc(n.NEVER);break;case Qf:n.depthFunc(n.ALWAYS);break;case ed:n.depthFunc(n.LESS);break;case fo:n.depthFunc(n.LEQUAL);break;case td:n.depthFunc(n.EQUAL);break;case nd:n.depthFunc(n.GEQUAL);break;case id:n.depthFunc(n.GREATER);break;case sd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ge}},setLocked:function(ge){k=ge},setClear:function(ge){xe!==ge&&(de&&(ge=1-ge),n.clearDepth(ge),xe=ge)},reset:function(){k=!1,X=null,Q=null,xe=null,de=!1}}}function s(){let k=!1,de=null,X=null,Q=null,xe=null,ge=null,Ve=null,Ft=null,yn=null;return{setTest:function(yt){k||(yt?ue(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(yt){de!==yt&&!k&&(n.stencilMask(yt),de=yt)},setFunc:function(yt,ei,ki){(X!==yt||Q!==ei||xe!==ki)&&(n.stencilFunc(yt,ei,ki),X=yt,Q=ei,xe=ki)},setOp:function(yt,ei,ki){(ge!==yt||Ve!==ei||Ft!==ki)&&(n.stencilOp(yt,ei,ki),ge=yt,Ve=ei,Ft=ki)},setLocked:function(yt){k=yt},setClear:function(yt){yn!==yt&&(n.clearStencil(yt),yn=yt)},reset:function(){k=!1,de=null,X=null,Q=null,xe=null,ge=null,Ve=null,Ft=null,yn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],p=null,x=!1,y=null,g=null,v=null,b=null,_=null,R=null,M=null,T=new oe(0,0,0),I=0,E=!1,S=null,L=null,N=null,z=null,G=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ne>=2);let ie=null,ae={},ve=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),$e=new rt().fromArray(ve),Z=new rt().fromArray(Re);function re(k,de,X,Q){let xe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(k,ge),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<X;Ve++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(de+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ge}let be={};be[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(fo),Ye(!1),je(U0),ue(n.CULL_FACE),U(Yt);function ue(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Ee(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function Le(k,de){return h[k]!==de?(n.bindFramebuffer(k,de),h[k]=de,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(k,de){let X=d,Q=!1;if(k){X=f.get(de),X===void 0&&(X=[],f.set(de,X));let xe=k.textures;if(X.length!==xe.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ve=xe.length;ge<Ve;ge++)X[ge]=n.COLOR_ATTACHMENT0+ge;X.length=xe.length,Q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Q=!0);Q&&n.drawBuffers(X)}function ut(k){return p!==k?(n.useProgram(k),p=k,!0):!1}let Xe={[Wn]:n.FUNC_ADD,[f1]:n.FUNC_SUBTRACT,[d1]:n.FUNC_REVERSE_SUBTRACT};Xe[p1]=n.MIN,Xe[m1]=n.MAX;let mt={[Io]:n.ZERO,[g1]:n.ONE,[y1]:n.SRC_COLOR,[Zf]:n.SRC_ALPHA,[b1]:n.SRC_ALPHA_SATURATE,[xu]:n.DST_COLOR,[yu]:n.DST_ALPHA,[x1]:n.ONE_MINUS_SRC_COLOR,[Kf]:n.ONE_MINUS_SRC_ALPHA,[_1]:n.ONE_MINUS_DST_COLOR,[v1]:n.ONE_MINUS_DST_ALPHA,[M1]:n.CONSTANT_COLOR,[S1]:n.ONE_MINUS_CONSTANT_COLOR,[w1]:n.CONSTANT_ALPHA,[E1]:n.ONE_MINUS_CONSTANT_ALPHA};function U(k,de,X,Q,xe,ge,Ve,Ft,yn,yt){if(k===Yt){x===!0&&(Ee(n.BLEND),x=!1);return}if(x===!1&&(ue(n.BLEND),x=!0),k!==xp){if(k!==y||yt!==E){if((g!==Wn||_!==Wn)&&(n.blendEquation(n.FUNC_ADD),g=Wn,_=Wn),yt)switch(k){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.ONE,n.ONE);break;case O0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case F0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case O0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case F0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,b=null,R=null,M=null,T.set(0,0,0),I=0,y=k,E=yt}return}xe=xe||de,ge=ge||X,Ve=Ve||Q,(de!==g||xe!==_)&&(n.blendEquationSeparate(Xe[de],Xe[xe]),g=de,_=xe),(X!==v||Q!==b||ge!==R||Ve!==M)&&(n.blendFuncSeparate(mt[X],mt[Q],mt[ge],mt[Ve]),v=X,b=Q,R=ge,M=Ve),(Ft.equals(T)===!1||yn!==I)&&(n.blendColor(Ft.r,Ft.g,Ft.b,yn),T.copy(Ft),I=yn),y=k,E=!1}function gt(k,de){k.side===oi?Ee(n.CULL_FACE):ue(n.CULL_FACE);let X=k.side===Vt;de&&(X=!X),Ye(X),k.blending===lo&&k.transparent===!1?U(Yt):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Q=k.stencilWrite;a.setTest(Q),Q&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),he(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(k){S!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),S=k)}function je(k){k!==u1?(ue(n.CULL_FACE),k!==L&&(k===U0?n.cullFace(n.BACK):k===h1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),L=k}function B(k){k!==N&&(V&&n.lineWidth(k),N=k)}function he(k,de,X){k?(ue(n.POLYGON_OFFSET_FILL),(z!==de||G!==X)&&(n.polygonOffset(de,X),z=de,G=X)):Ee(n.POLYGON_OFFSET_FILL)}function ee(k){k?ue(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function C(k){k===void 0&&(k=n.TEXTURE0+D-1),ie!==k&&(n.activeTexture(k),ie=k)}function w(k,de,X){X===void 0&&(ie===null?X=n.TEXTURE0+D-1:X=ie);let Q=ae[X];Q===void 0&&(Q={type:void 0,texture:void 0},ae[X]=Q),(Q.type!==k||Q.texture!==de)&&(ie!==X&&(n.activeTexture(X),ie=X),n.bindTexture(k,de||be[k]),Q.type=k,Q.texture=de)}function H(){let k=ae[ie];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){$e.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),$e.copy(k))}function Se(k){Z.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function it(k,de){let X=c.get(de);X===void 0&&(X=new WeakMap,c.set(de,X));let Q=X.get(k);Q===void 0&&(Q=n.getUniformBlockIndex(de,k.name),X.set(k,Q))}function Be(k,de){let Q=c.get(de).get(k);l.get(de)!==Q&&(n.uniformBlockBinding(de,Q,k.__bindingPointIndex),l.set(de,Q))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,ae={},h={},f=new WeakMap,d=[],p=null,x=!1,y=null,g=null,v=null,b=null,_=null,R=null,M=null,T=new oe(0,0,0),I=0,E=!1,S=null,L=null,N=null,z=null,G=null,$e.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ee,bindFramebuffer:Le,drawBuffers:Oe,useProgram:ut,setBlending:U,setMaterial:gt,setFlipSided:Ye,setCullFace:je,setLineWidth:B,setPolygonOffset:he,setScissorTest:ee,activeTexture:C,bindTexture:w,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:Me,texImage3D:Ue,updateUBOMapping:it,uniformBlockBinding:Be,texStorage2D:He,texStorage3D:se,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Fe,viewport:Se,reset:at}}function Ly(n,e,t,i){let s=qC(i);switch(t){case ux:return n*e;case fx:return n*e;case dx:return n*e*2;case Sp:return n*e/s.components*s.byteLength;case wp:return n*e/s.components*s.byteLength;case px:return n*e*2/s.components*s.byteLength;case Ep:return n*e*2/s.components*s.byteLength;case hx:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case Tp:return n*e*4/s.components*s.byteLength;case Uc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(n,16)*Math.max(e,8)/4;case ad:case cd:return Math.max(n,8)*Math.max(e,8)/2;case hd:case fd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zc:case Cd:case Rd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mx:case Pd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Id:case Ld:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qC(n){switch(n){case kn:case ax:return{byteLength:1,components:1};case Wa:case lx:case _n:return{byteLength:2,components:1};case bp:case Mp:return{byteLength:2,components:4};case or:case _p:case li:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $C(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return d?new OffscreenCanvas(C,w):qa("canvas")}function x(C,w,H){let j=1,J=ee(C);if((J.width>H||J.height>H)&&(j=H/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(j*J.width),we=Math.floor(j*J.height);h===void 0&&(h=p(K,we));let fe=w?p(K,we):h;return fe.width=K,fe.height=we,fe.getContext("2d").drawImage(C,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+we+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function y(C){return C.generateMipmaps}function g(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,w,H,j,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=w;if(w===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),w===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),w===n.RGBA){let we=J?Mu:et.getTransfer(j);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=we===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(C,w){let H;return C?w===null||w===or||w===Ms?H=n.DEPTH24_STENCIL8:w===li?H=n.DEPTH32F_STENCIL8:w===Wa&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===or||w===Ms?H=n.DEPTH_COMPONENT24:w===li?H=n.DEPTH_COMPONENT32F:w===Wa&&(H=n.DEPTH_COMPONENT16),H}function R(C,w){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==hn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function M(C){let w=C.target;w.removeEventListener("dispose",M),I(w),w.isVideoTexture&&u.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),S(w)}function I(C){let w=i.get(C);if(w.__webglInit===void 0)return;let H=C.source,j=f.get(H);if(j){let J=j[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(C),Object.keys(j).length===0&&f.delete(H)}i.remove(C)}function E(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let H=C.source,j=f.get(H);delete j[w.__cacheKey],o.memory.textures--}function S(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let J=0;J<w.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(w.__webglFramebuffer[j][J]);else n.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)n.deleteFramebuffer(w.__webglFramebuffer[j]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=C.textures;for(let j=0,J=H.length;j<J;j++){let K=i.get(H[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[j])}i.remove(C)}let L=0;function N(){L=0}function z(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function G(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function D(C,w){let H=i.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,C,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function V(C,w){let H=i.get(C);if(C.version>0&&H.__version!==C.version){Z(H,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function ne(C,w){let H=i.get(C);if(C.version>0&&H.__version!==C.version){Z(H,C,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function $(C,w){let H=i.get(C);if(C.version>0&&H.__version!==C.version){re(H,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}let ie={[Zt]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},ae={[jt]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},ve={[k1]:n.NEVER,[H1]:n.ALWAYS,[U1]:n.LESS,[yx]:n.LEQUAL,[O1]:n.EQUAL,[z1]:n.GEQUAL,[F1]:n.GREATER,[B1]:n.NOTEQUAL};function Re(C,w){if(w.type===li&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hn||w.magFilter===Oa||w.magFilter===so||w.magFilter===_i||w.minFilter===hn||w.minFilter===Oa||w.minFilter===so||w.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ie[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ie[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ie[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jt||w.minFilter!==so&&w.minFilter!==_i||w.type===li&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function $e(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",M));let j=w.source,J=f.get(j);J===void 0&&(J={},f.set(j,J));let K=G(w);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[K].usedTimes++;let we=J[C.__cacheKey];we!==void 0&&(J[C.__cacheKey].usedTimes--,we.usedTimes===0&&E(w)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return H}function Z(C,w,H){let j=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=n.TEXTURE_3D);let J=$e(C,w),K=w.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+H);let we=i.get(K);if(K.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+H);let fe=et.getPrimaries(et.workingColorSpace),me=w.colorSpace===vs?null:et.getPrimaries(w.colorSpace),He=w.colorSpace===vs||fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let se=x(w.image,!1,s.maxTextureSize);se=he(w,se);let Me=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type),Fe=b(w.internalFormat,Me,Ue,w.colorSpace,w.isVideoTexture);Re(j,w);let Se,it=w.mipmaps,Be=w.isVideoTexture!==!0,at=we.__version===void 0||J===!0,k=K.dataReady,de=R(w,se);if(w.isDepthTexture)Fe=_(w.format===Ss,w.type),at&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,Me,Ue,null));else if(w.isDataTexture)if(it.length>0){Be&&at&&t.texStorage2D(n.TEXTURE_2D,de,Fe,it[0].width,it[0].height);for(let X=0,Q=it.length;X<Q;X++)Se=it[X],Be?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,Ue,Se.data):t.texImage2D(n.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Me,Ue,Se.data);w.generateMipmaps=!1}else Be?(at&&t.texStorage2D(n.TEXTURE_2D,de,Fe,se.width,se.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Me,Ue,se.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,Me,Ue,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Fe,it[0].width,it[0].height,se.depth);for(let X=0,Q=it.length;X<Q;X++)if(Se=it[X],w.format!==sn)if(Me!==null)if(Be){if(k)if(w.layerUpdates.size>0){let xe=Ly(Se.width,Se.height,w.format,w.type);for(let ge of w.layerUpdates){let Ve=Se.data.subarray(ge*xe/Se.data.BYTES_PER_ELEMENT,(ge+1)*xe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ge,Se.width,Se.height,1,Me,Ve)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,se.depth,Me,Ue,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Fe,Se.width,Se.height,se.depth,0,Me,Ue,Se.data)}else{Be&&at&&t.texStorage2D(n.TEXTURE_2D,de,Fe,it[0].width,it[0].height);for(let X=0,Q=it.length;X<Q;X++)Se=it[X],w.format!==sn?Me!==null?Be?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,Ue,Se.data):t.texImage2D(n.TEXTURE_2D,X,Fe,Se.width,Se.height,0,Me,Ue,Se.data)}else if(w.isDataArrayTexture)if(Be){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Fe,se.width,se.height,se.depth),k)if(w.layerUpdates.size>0){let X=Ly(se.width,se.height,w.format,w.type);for(let Q of w.layerUpdates){let xe=se.data.subarray(Q*X/se.data.BYTES_PER_ELEMENT,(Q+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,Me,Ue,xe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ue,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,Me,Ue,se.data);else if(w.isData3DTexture)Be?(at&&t.texStorage3D(n.TEXTURE_3D,de,Fe,se.width,se.height,se.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ue,se.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,Me,Ue,se.data);else if(w.isFramebufferTexture){if(at)if(Be)t.texStorage2D(n.TEXTURE_2D,de,Fe,se.width,se.height);else{let X=se.width,Q=se.height;for(let xe=0;xe<de;xe++)t.texImage2D(n.TEXTURE_2D,xe,Fe,X,Q,0,Me,Ue,null),X>>=1,Q>>=1}}else if(it.length>0){if(Be&&at){let X=ee(it[0]);t.texStorage2D(n.TEXTURE_2D,de,Fe,X.width,X.height)}for(let X=0,Q=it.length;X<Q;X++)Se=it[X],Be?k&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Me,Ue,Se):t.texImage2D(n.TEXTURE_2D,X,Fe,Me,Ue,Se);w.generateMipmaps=!1}else if(Be){if(at){let X=ee(se);t.texStorage2D(n.TEXTURE_2D,de,Fe,X.width,X.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ue,se)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Me,Ue,se);y(w)&&g(j),we.__version=K.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function re(C,w,H){if(w.image.length!==6)return;let j=$e(C,w),J=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+H);let K=i.get(J);if(J.version!==K.__version||j===!0){t.activeTexture(n.TEXTURE0+H);let we=et.getPrimaries(et.workingColorSpace),fe=w.colorSpace===vs?null:et.getPrimaries(w.colorSpace),me=w.colorSpace===vs||we===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let He=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let Q=0;Q<6;Q++)!He&&!se?Me[Q]=x(w.image[Q],!0,s.maxCubemapSize):Me[Q]=se?w.image[Q].image:w.image[Q],Me[Q]=he(w,Me[Q]);let Ue=Me[0],Fe=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),it=b(w.internalFormat,Fe,Se,w.colorSpace),Be=w.isVideoTexture!==!0,at=K.__version===void 0||j===!0,k=J.dataReady,de=R(w,Ue);Re(n.TEXTURE_CUBE_MAP,w);let X;if(He){Be&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,it,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){X=Me[Q].mipmaps;for(let xe=0;xe<X.length;xe++){let ge=X[xe];w.format!==sn?Fe!==null?Be?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,it,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ge.width,ge.height,Fe,Se,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,it,ge.width,ge.height,0,Fe,Se,ge.data)}}}else{if(X=w.mipmaps,Be&&at){X.length>0&&de++;let Q=ee(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,it,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Be?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Me[Q].width,Me[Q].height,Fe,Se,Me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,Me[Q].width,Me[Q].height,0,Fe,Se,Me[Q].data);for(let xe=0;xe<X.length;xe++){let Ve=X[xe].image[Q].image;Be?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Ve.width,Ve.height,Fe,Se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,it,Ve.width,Ve.height,0,Fe,Se,Ve.data)}}else{Be?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,Se,Me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,Fe,Se,Me[Q]);for(let xe=0;xe<X.length;xe++){let ge=X[xe];Be?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Fe,Se,ge.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,it,Fe,Se,ge.image[Q])}}}y(w)&&g(n.TEXTURE_CUBE_MAP),K.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function be(C,w,H,j,J,K){let we=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),me=b(H.internalFormat,we,fe,H.colorSpace),He=i.get(w),se=i.get(H);if(se.__renderTarget=w,!He.__hasExternalTextures){let Me=Math.max(1,w.width>>K),Ue=Math.max(1,w.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,K,me,Me,Ue,w.depth,0,we,fe,null):t.texImage2D(J,K,me,Me,Ue,0,we,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),je(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,se.__webglTexture,0,Ye(w)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,se.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let j=w.depthTexture,J=j&&j.isDepthTexture?j.type:null,K=_(w.stencilBuffer,J),we=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Ye(w);je(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,K,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,K,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,K,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,C)}else{let j=w.textures;for(let J=0;J<j.length;J++){let K=j[J],we=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),me=b(K.internalFormat,we,fe,K.colorSpace),He=Ye(w);H&&je(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,me,w.width,w.height):je(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);let J=j.__webglTexture,K=Ye(w);if(w.depthTexture.format===co)je(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(w.depthTexture.format===Ss)je(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(C){let w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=j}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=n.createRenderbuffer(),ue(w.__webglDepthbuffer[j],C,!1);else{let J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ue(w.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(C,w,H){let j=i.get(C);w!==void 0&&be(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Le(C)}function ut(C){let w=C.texture,H=i.get(C),j=i.get(w);C.addEventListener("dispose",T);let J=C.textures,K=C.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=w.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let me=0;me<w.mipmaps.length;me++)H.__webglFramebuffer[fe][me]=n.createFramebuffer()}else H.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)H.__webglFramebuffer[fe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(we)for(let fe=0,me=J.length;fe<me;fe++){let He=i.get(J[fe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&je(C)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){let me=J[fe];H.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);let He=r.convert(me.format,me.colorSpace),se=r.convert(me.type),Me=b(me.internalFormat,He,se,me.colorSpace,C.isXRRenderTarget===!0),Ue=Ye(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Re(n.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)be(H.__webglFramebuffer[fe][me],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else be(H.__webglFramebuffer[fe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(w)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,me=J.length;fe<me;fe++){let He=J[fe],se=i.get(He);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Re(n.TEXTURE_2D,He),be(H.__webglFramebuffer,C,He,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),y(He)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),Re(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)be(H.__webglFramebuffer[me],C,w,n.COLOR_ATTACHMENT0,fe,me);else be(H.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,fe,0);y(w)&&g(fe),t.unbindTexture()}C.depthBuffer&&Le(C)}function Xe(C){let w=C.textures;for(let H=0,j=w.length;H<j;H++){let J=w[H];if(y(J)){let K=v(C),we=i.get(J).__webglTexture;t.bindTexture(K,we),g(K),t.unbindTexture()}}}let mt=[],U=[];function gt(C){if(C.samples>0){if(je(C)===!1){let w=C.textures,H=C.width,j=C.height,J=n.COLOR_BUFFER_BIT,K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(C),fe=w.length>1;if(fe)for(let me=0;me<w.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<w.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let He=i.get(w[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,H,j,0,0,H,j,J,n.NEAREST),l===!0&&(mt.length=0,U.length=0,mt.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(mt.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<w.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let He=i.get(w[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ye(C){return Math.min(s.maxSamples,C.samples)}function je(C){let w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function B(C){let w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function he(C,w){let H=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==bn&&H!==vs&&(et.getTransfer(H)===dt?(j!==sn||J!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=$,this.rebindTextures=Oe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je}function XC(n,e){function t(i,s=vs){let r,o=et.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===bp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ax)return n.BYTE;if(i===lx)return n.SHORT;if(i===Wa)return n.UNSIGNED_SHORT;if(i===_p)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===_n)return n.HALF_FLOAT;if(i===ux)return n.ALPHA;if(i===hx)return n.RGB;if(i===sn)return n.RGBA;if(i===fx)return n.LUMINANCE;if(i===dx)return n.LUMINANCE_ALPHA;if(i===co)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===wp)return n.RED_INTEGER;if(i===px)return n.RG;if(i===Ep)return n.RG_INTEGER;if(i===Tp)return n.RGBA_INTEGER;if(i===Uc||i===Oc||i===Fc||i===Bc)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ad||i===ld||i===cd||i===ud)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ad)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ld)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ud)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hd||i===fd||i===dd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hd||i===fd)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pd||i===md||i===gd||i===yd||i===xd||i===vd||i===_d||i===bd||i===Md||i===Sd||i===wd||i===Ed||i===Td||i===Ad)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===md)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_d)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Md)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wd)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Td)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ad)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Cd||i===Rd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zc)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mx||i===Pd||i===Id||i===Ld)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Id)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xd=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},YC={type:"move"},za=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),g=this._getHandJoint(c,x);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZC=`
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

}`,Yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new vt({vertexShader:jC,fragmentShader:ZC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jd=class extends Xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,x=new Yd,y=t.getContextAttributes(),g=null,v=null,b=[],_=[],R=new te,M=null,T=new Ut;T.viewport=new rt;let I=new Ut;I.viewport=new rt;let E=[T,I],S=new Xd,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=b[Z];return re===void 0&&(re=new za,b[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=b[Z];return re===void 0&&(re=new za,b[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=b[Z];return re===void 0&&(re=new za,b[Z]=re),re.getHandSpace()};function z(Z){let re=_.indexOf(Z.inputSource);if(re===-1)return;let be=b[re];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",D);for(let Z=0;Z<b.length;Z++){let re=_[Z];re!==null&&(_[Z]=null,b[Z].disconnect(re))}L=null,N=null,x.reset(),e.setRenderTarget(g),d=null,f=null,h=null,s=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Bt(d.framebufferWidth,d.framebufferHeight,{format:sn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,be=null,ue=null;y.depth&&(ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Ss:co,be=y.stencil?Ms:or);let Ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Bt(f.textureWidth,f.textureHeight,{format:sn,type:kn,depthTexture:new bo(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(Z){for(let re=0;re<Z.removed.length;re++){let be=Z.removed[re],ue=_.indexOf(be);ue>=0&&(_[ue]=null,b[ue].disconnect(be))}for(let re=0;re<Z.added.length;re++){let be=Z.added[re],ue=_.indexOf(be);if(ue===-1){for(let Le=0;Le<b.length;Le++)if(Le>=_.length){_.push(be),ue=Le;break}else if(_[Le]===null){_[Le]=be,ue=Le;break}if(ue===-1)break}let Ee=b[ue];Ee&&Ee.connect(be)}}let V=new P,ne=new P;function $(Z,re,be){V.setFromMatrixPosition(re.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);let ue=V.distanceTo(ne),Ee=re.projectionMatrix.elements,Le=be.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),ut=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],mt=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],gt=(Le[8]+1)/Le[0],Ye=Oe*U,je=Oe*gt,B=ue/(-U+gt),he=B*-U;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(he),Z.translateZ(B),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ee=Oe+B,C=ut+B,w=Ye-he,H=je+(ue-he),j=Xe*ut/C*ee,J=mt*ut/C*ee;Z.projectionMatrix.makePerspective(w,H,j,J,ee,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,be=Z.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(be=x.depthFar)),S.near=I.near=T.near=re,S.far=I.far=T.far=be,(L!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far),T.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,S.layers.mask=T.layers.mask|I.layers.mask;let ue=Z.parent,Ee=S.cameras;ie(S,ue);for(let Le=0;Le<Ee.length;Le++)ie(Ee[Le],ue);Ee.length===2?$(S,T,I):S.projectionMatrix.copy(T.projectionMatrix),ae(Z,S,ue)};function ae(Z,re,be){be===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ve=null;function Re(Z,re){if(u=re.getViewerPose(c||o),p=re,u!==null){let be=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ue=!1;be.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Le=0;Le<be.length;Le++){let Oe=be[Le],ut=null;if(d!==null)ut=d.getViewport(Oe);else{let mt=h.getViewSubImage(f,Oe);ut=mt.viewport,Le===0&&(e.setRenderTargetTextures(v,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(v))}let Xe=E[Le];Xe===void 0&&(Xe=new Ut,Xe.layers.enable(Le),Xe.viewport=new rt,E[Le]=Xe),Xe.matrix.fromArray(Oe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Oe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Xe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){let Le=h.getDepthInformation(be[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,s.renderState)}}for(let be=0;be<b.length;be++){let ue=_[be],Ee=b[be];ue!==null&&Ee!==void 0&&Ee.update(ue,re,c||o)}ve&&ve(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}let $e=new bx;$e.setAnimationLoop(Re),this.setAnimationLoop=function(Z){ve=Z},this.dispose=function(){}}},ir=new Si,KC=new Ie;function JC(n,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,_x(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,v,b,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),h(y,g)):g.isMeshPhongMaterial?(r(y,g),u(y,g)):g.isMeshStandardMaterial?(r(y,g),f(y,g),g.isMeshPhysicalMaterial&&d(y,g,_)):g.isMeshMatcapMaterial?(r(y,g),p(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),x(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?l(y,g,v,b):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Vt&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Vt&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,_=v.envMapRotation;b&&(y.envMap.value=b,ir.copy(_),ir.x*=-1,ir.y*=-1,ir.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),y.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(ir)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,v,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*v,y.scale.value=b*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function h(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function f(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function d(y,g,v){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vt&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=v.texture,y.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function p(y,g){g.matcap&&(y.matcap.value=g.matcap)}function x(y,g){let v=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(v.matrixWorld),y.nearDistance.value=v.shadow.camera.near,y.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QC(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let _=b.program;i.uniformBlockBinding(v,_)}function c(v,b){let _=s[v.id];_===void 0&&(p(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",y));let R=b.program;i.updateUBOMapping(v,R);let M=e.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function u(v){let b=h();v.__bindingPointIndex=b;let _=n.createBuffer(),R=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],_=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,T=_.length;M<T;M++){let I=Array.isArray(_[M])?_[M]:[_[M]];for(let E=0,S=I.length;E<S;E++){let L=I[E];if(d(L,M,E,R)===!0){let N=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],G=0;for(let D=0;D<z.length;D++){let V=z[D],ne=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,b,_,R){let M=v.value,T=b+"_"+_;if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:R[T]=M.clone(),!0;{let I=R[T];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return R[T]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function p(v){let b=v.uniforms,_=0,R=16;for(let T=0,I=b.length;T<I;T++){let E=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,L=E.length;S<L;S++){let N=E[S],z=Array.isArray(N.value)?N.value:[N.value];for(let G=0,D=z.length;G<D;G++){let V=z[G],ne=x(V),$=_%R,ie=$%ne.boundary,ae=$+ie;_+=ie,ae!==0&&R-ae<ne.storage&&(_+=R-ae),N.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=ne.storage}}}let M=_%R;return M>0&&(_+=R-M),v.__size=_,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Mo=class{constructor(e={}){let{canvas:t=sE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),y=null,g=null,v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=bi,this.toneMappingExposure=1;let _=this,R=!1,M=0,T=0,I=null,E=-1,S=null,L=new rt,N=new rt,z=null,G=new oe(0),D=0,V=t.width,ne=t.height,$=1,ie=null,ae=null,ve=new rt(0,0,V,ne),Re=new rt(0,0,V,ne),$e=!1,Z=new Xa,re=!1,be=!1,ue=new Ie,Ee=new Ie,Le=new P,Oe=new rt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function mt(){return I===null?$:1}let U=i;function gt(A,O){return t.getContext(A,O)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){let O="webgl2";if(U=gt(O,A),U===null)throw gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,je,B,he,ee,C,w,H,j,J,K,we,fe,me,He,se,Me,Ue,Fe,Se,it,Be,at,k;function de(){Ye=new m2(U),Ye.init(),Be=new XC(U,Ye),je=new c2(U,Ye,e,Be),B=new WC(U,Ye),je.reverseDepthBuffer&&f&&B.buffers.depth.setReversed(!0),he=new x2(U),ee=new IC,C=new $C(U,Ye,B,ee,je,Be,he),w=new h2(_),H=new p2(_),j=new EE(U),at=new a2(U,j),J=new g2(U,j,he,at),K=new _2(U,J,j,he),Fe=new v2(U,je,C),se=new u2(ee),we=new PC(_,w,H,Ye,je,at,se),fe=new JC(_,ee),me=new DC,He=new BC(Ye),Ue=new o2(_,w,H,B,K,d,l),Me=new VC(_,K,je),k=new QC(U,he,je,B),Se=new l2(U,Ye,he),it=new y2(U,Ye,he),he.programs=we.programs,_.capabilities=je,_.extensions=Ye,_.properties=ee,_.renderLists=me,_.shadowMap=Me,_.state=B,_.info=he}de();let X=new jd(_,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(V,ne,!1))},this.getSize=function(A){return A.set(V,ne)},this.setSize=function(A,O,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,ne=O,t.width=Math.floor(A*$),t.height=Math.floor(O*$),W===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(V*$,ne*$).floor()},this.setDrawingBufferSize=function(A,O,W){V=A,ne=O,$=W,t.width=Math.floor(A*W),t.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,O,W,q){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,O,W,q),B.viewport(L.copy(ve).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,O,W,q){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,O,W,q),B.scissor(N.copy(Re).multiplyScalar($).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){B.setScissorTest($e=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(A=!0,O=!0,W=!0){let q=0;if(A){let F=!1;if(I!==null){let le=I.texture.format;F=le===Tp||le===Ep||le===wp}if(F){let le=I.texture.type,ye=le===kn||le===or||le===Wa||le===Ms||le===bp||le===Mp,Te=Ue.getClearColor(),Ae=Ue.getClearAlpha(),ze=Te.r,Ge=Te.g,Ce=Te.b;ye?(p[0]=ze,p[1]=Ge,p[2]=Ce,p[3]=Ae,U.clearBufferuiv(U.COLOR,0,p)):(x[0]=ze,x[1]=Ge,x[2]=Ce,x[3]=Ae,U.clearBufferiv(U.COLOR,0,x))}else q|=U.COLOR_BUFFER_BIT}O&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),me.dispose(),He.dispose(),ee.dispose(),w.dispose(),H.dispose(),K.dispose(),at.dispose(),k.dispose(),we.dispose(),X.dispose(),X.removeEventListener("sessionstart",C0),X.removeEventListener("sessionend",R0),Ks.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=he.autoReset,O=Me.enabled,W=Me.autoUpdate,q=Me.needsUpdate,F=Me.type;de(),he.autoReset=A,Me.enabled=O,Me.autoUpdate=W,Me.needsUpdate=q,Me.type=F}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){let O=A.target;O.removeEventListener("dispose",Ve),Ft(O)}function Ft(A){yn(A),ee.remove(A)}function yn(A){let O=ee.get(A).programs;O!==void 0&&(O.forEach(function(W){we.releaseProgram(W)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,q,F,le){O===null&&(O=ut);let ye=F.isMesh&&F.matrixWorld.determinant()<0,Te=s1(A,O,W,q,F);B.setMaterial(q,ye);let Ae=W.index,ze=1;if(q.wireframe===!0){if(Ae=J.getWireframeAttribute(W),Ae===void 0)return;ze=2}let Ge=W.drawRange,Ce=W.attributes.position,lt=Ge.start*ze,Et=(Ge.start+Ge.count)*ze;le!==null&&(lt=Math.max(lt,le.start*ze),Et=Math.min(Et,(le.start+le.count)*ze)),Ae!==null?(lt=Math.max(lt,0),Et=Math.min(Et,Ae.count)):Ce!=null&&(lt=Math.max(lt,0),Et=Math.min(Et,Ce.count));let Pt=Et-lt;if(Pt<0||Pt===1/0)return;at.setup(F,q,Te,W,Ae);let An,ht=Se;if(Ae!==null&&(An=j.get(Ae),ht=it,ht.setIndex(An)),F.isMesh)q.wireframe===!0?(B.setLineWidth(q.wireframeLinewidth*mt()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(F.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),B.setLineWidth(Pe*mt()),F.isLineSegments?ht.setMode(U.LINES):F.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else F.isPoints?ht.setMode(U.POINTS):F.isSprite&&ht.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pe=F._multiDrawStarts,Ui=F._multiDrawCounts,ft=F._multiDrawCount,ti=Ae?j.get(Ae).bytesPerElement:1,Fr=ee.get(q).currentProgram.getUniforms();for(let Ln=0;Ln<ft;Ln++)Fr.setValue(U,"_gl_DrawID",Ln),ht.render(Pe[Ln]/ti,Ui[Ln])}else if(F.isInstancedMesh)ht.renderInstances(lt,Pt,F.count);else if(W.isInstancedBufferGeometry){let Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ui=Math.min(W.instanceCount,Pe);ht.renderInstances(lt,Pt,Ui)}else ht.render(lt,Pt)};function yt(A,O,W){A.transparent===!0&&A.side===oi&&A.forceSinglePass===!1?(A.side=Vt,A.needsUpdate=!0,sc(A,O,W),A.side=Mi,A.needsUpdate=!0,sc(A,O,W),A.side=oi):sc(A,O,W)}this.compile=function(A,O,W=null){W===null&&(W=A),g=He.get(W),g.init(O),b.push(g),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),A!==W&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();let q=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let le=F.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){let Te=le[ye];yt(Te,W,F),q.add(Te)}else yt(le,W,F),q.add(le)}),b.pop(),g=null,q},this.compileAsync=function(A,O,W=null){let q=this.compile(A,O,W);return new Promise(F=>{function le(){if(q.forEach(function(ye){ee.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){F(A);return}setTimeout(le,10)}Ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ei=null;function ki(A){ei&&ei(A)}function C0(){Ks.stop()}function R0(){Ks.start()}let Ks=new bx;Ks.setAnimationLoop(ki),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(A){ei=A,X.setAnimationLoop(A),A===null?Ks.stop():Ks.start()},X.addEventListener("sessionstart",C0),X.addEventListener("sessionend",R0),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,O,I),g=He.get(A,b.length),g.init(O),b.push(g),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Ee),be=this.localClippingEnabled,re=se.init(this.clippingPlanes,be),y=me.get(A,v.length),y.init(),v.push(y),X.enabled===!0&&X.isPresenting===!0){let le=_.xr.getDepthSensingMesh();le!==null&&df(le,O,-1/0,_.sortObjects)}df(A,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(ie,ae),Xe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xe&&Ue.addToRenderList(y,A),this.info.render.frame++,re===!0&&se.beginShadows();let W=g.state.shadowsArray;Me.render(W,A,O),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=y.opaque,F=y.transmissive;if(g.setupLights(),O.isArrayCamera){let le=O.cameras;if(F.length>0)for(let ye=0,Te=le.length;ye<Te;ye++){let Ae=le[ye];I0(q,F,A,Ae)}Xe&&Ue.render(A);for(let ye=0,Te=le.length;ye<Te;ye++){let Ae=le[ye];P0(y,A,Ae,Ae.viewport)}}else F.length>0&&I0(q,F,A,O),Xe&&Ue.render(A),P0(y,A,O);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,O),at.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(g=b[b.length-1],re===!0&&se.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?y=v[v.length-1]:y=null};function df(A,O,W,q){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){q&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);let ye=K.update(A),Te=A.material;Te.visible&&y.push(A,ye,Te,W,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){let ye=K.update(A),Te=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Oe.copy(ye.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){let Ae=ye.groups;for(let ze=0,Ge=Ae.length;ze<Ge;ze++){let Ce=Ae[ze],lt=Te[Ce.materialIndex];lt&&lt.visible&&y.push(A,ye,lt,W,Oe.z,Ce)}}else Te.visible&&y.push(A,ye,Te,W,Oe.z,null)}}let le=A.children;for(let ye=0,Te=le.length;ye<Te;ye++)df(le[ye],O,W,q)}function P0(A,O,W,q){let F=A.opaque,le=A.transmissive,ye=A.transparent;g.setupLightsView(W),re===!0&&se.setGlobalState(_.clippingPlanes,W),q&&B.viewport(L.copy(q)),F.length>0&&ic(F,O,W),le.length>0&&ic(le,O,W),ye.length>0&&ic(ye,O,W),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function I0(A,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Bt(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?_n:kn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let le=g.state.transmissionRenderTarget[q.id],ye=q.viewport||L;le.setSize(ye.z,ye.w);let Te=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(G),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&Ue.render(W);let Ae=_.toneMapping;_.toneMapping=bi;let ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),re===!0&&se.setGlobalState(_.clippingPlanes,q),ic(A,W,q),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ce=0,lt=O.length;Ce<lt;Ce++){let Et=O[Ce],Pt=Et.object,An=Et.geometry,ht=Et.material,Pe=Et.group;if(ht.side===oi&&Pt.layers.test(q.layers)){let Ui=ht.side;ht.side=Vt,ht.needsUpdate=!0,L0(Pt,W,q,An,ht,Pe),ht.side=Ui,ht.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le))}_.setRenderTarget(Te),_.setClearColor(G,D),ze!==void 0&&(q.viewport=ze),_.toneMapping=Ae}function ic(A,O,W){let q=O.isScene===!0?O.overrideMaterial:null;for(let F=0,le=A.length;F<le;F++){let ye=A[F],Te=ye.object,Ae=ye.geometry,ze=q===null?ye.material:q,Ge=ye.group;Te.layers.test(W.layers)&&L0(Te,O,W,Ae,ze,Ge)}}function L0(A,O,W,q,F,le){A.onBeforeRender(_,O,W,q,F,le),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(_,O,W,q,A,le),F.transparent===!0&&F.side===oi&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,_.renderBufferDirect(W,O,q,F,A,le),F.side=Mi,F.needsUpdate=!0,_.renderBufferDirect(W,O,q,F,A,le),F.side=oi):_.renderBufferDirect(W,O,q,F,A,le),A.onAfterRender(_,O,W,q,F,le)}function sc(A,O,W){O.isScene!==!0&&(O=ut);let q=ee.get(A),F=g.state.lights,le=g.state.shadowsArray,ye=F.state.version,Te=we.getParameters(A,F.state,le,O,W),Ae=we.getProgramCacheKey(Te),ze=q.programs;q.environment=A.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Ve),ze=new Map,q.programs=ze);let Ge=ze.get(Ae);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===ye)return N0(A,Te),Ge}else Te.uniforms=we.getUniforms(A),A.onBeforeCompile(Te,_),Ge=we.acquireProgram(Te,Ae),ze.set(Ae,Ge),q.uniforms=Te.uniforms;let Ce=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=se.uniform),N0(A,Te),q.needsLights=o1(A),q.lightsStateVersion=ye,q.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function D0(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=ho.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function N0(A,O){let W=ee.get(A);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function s1(A,O,W,q,F){O.isScene!==!0&&(O=ut),C.resetTextureUnits();let le=O.fog,ye=q.isMeshStandardMaterial?O.environment:null,Te=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bn,Ae=(q.isMeshStandardMaterial?H:w).get(q.envMap||ye),ze=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color,Pt=bi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pt=_.toneMapping);let An=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=An!==void 0?An.length:0,Pe=ee.get(q),Ui=g.state.lights;if(re===!0&&(be===!0||A!==S)){let Vn=A===S&&q.id===E;se.setState(q,A,Vn)}let ft=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ui.state.version||Pe.outputColorSpace!==Te||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||q.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==Ge||Pe.morphTargets!==Ce||Pe.morphNormals!==lt||Pe.morphColors!==Et||Pe.toneMapping!==Pt||Pe.morphTargetsCount!==ht)&&(ft=!0):(ft=!0,Pe.__version=q.version);let ti=Pe.currentProgram;ft===!0&&(ti=sc(q,O,F));let Fr=!1,Ln=!1,Ma=!1,It=ti.getUniforms(),xi=Pe.uniforms;if(B.useProgram(ti.program)&&(Fr=!0,Ln=!0,Ma=!0),q.id!==E&&(E=q.id,Ln=!0),Fr||S!==A){B.buffers.depth.getReversed()?(ue.copy(A.projectionMatrix),oE(ue),aE(ue),It.setValue(U,"projectionMatrix",ue)):It.setValue(U,"projectionMatrix",A.projectionMatrix),It.setValue(U,"viewMatrix",A.matrixWorldInverse);let hs=It.map.cameraPosition;hs!==void 0&&hs.setValue(U,Le.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&It.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ln=!0,Ma=!0)}if(F.isSkinnedMesh){It.setOptional(U,F,"bindMatrix"),It.setOptional(U,F,"bindMatrixInverse");let Vn=F.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),It.setValue(U,"boneTexture",Vn.boneTexture,C))}F.isBatchedMesh&&(It.setOptional(U,F,"batchingTexture"),It.setValue(U,"batchingTexture",F._matricesTexture,C),It.setOptional(U,F,"batchingIdTexture"),It.setValue(U,"batchingIdTexture",F._indirectTexture,C),It.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&It.setValue(U,"batchingColorTexture",F._colorsTexture,C));let Sa=W.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&Fe.update(F,W,ti),(Ln||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,It.setValue(U,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xi.envMap.value=Ae,xi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(xi.envMapIntensity.value=O.environmentIntensity),Ln&&(It.setValue(U,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&r1(xi,Ma),le&&q.fog===!0&&fe.refreshFogUniforms(xi,le),fe.refreshMaterialUniforms(xi,q,$,ne,g.state.transmissionRenderTarget[A.id]),ho.upload(U,D0(Pe),xi,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ho.upload(U,D0(Pe),xi,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&It.setValue(U,"center",F.center),It.setValue(U,"modelViewMatrix",F.modelViewMatrix),It.setValue(U,"normalMatrix",F.normalMatrix),It.setValue(U,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Vn=q.uniformsGroups;for(let hs=0,fs=Vn.length;hs<fs;hs++){let k0=Vn[hs];k.update(k0,ti),k.bind(k0,ti)}}return ti}function r1(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function o1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,O,W){ee.get(A.texture).__webglTexture=O,ee.get(A.depthTexture).__webglTexture=W;let q=ee.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let W=ee.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){I=A,M=O,T=W;let q=!0,F=null,le=!1,ye=!1;if(A){let Ae=ee.get(A);if(Ae.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ae.__hasExternalTextures)C.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ce=A.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&ee.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);let Ge=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?F=Ge[O][W]:F=Ge[O],le=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?F=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[W]:F=Ge,L.copy(A.viewport),N.copy(A.scissor),z=A.scissorTest}else L.copy(ve).multiplyScalar($).floor(),N.copy(Re).multiplyScalar($).floor(),z=$e;if(B.bindFramebuffer(U.FRAMEBUFFER,F)&&q&&B.drawBuffers(A,F),B.viewport(L),B.scissor(N),B.setScissorTest(z),le){let Ae=ee.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,W)}else if(ye){let Ae=ee.get(A.texture),ze=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,ze)}E=-1},this.readRenderTargetPixels=function(A,O,W,q,F,le,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){B.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ae=A.texture,ze=Ae.format,Ge=Ae.type;if(!je.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-q&&W>=0&&W<=A.height-F&&U.readPixels(O,W,q,F,Be.convert(ze),Be.convert(Ge),le)}finally{let Ae=I!==null?ee.get(I).__webglFramebuffer:null;B.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,O,W,q,F,le,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){let Ae=A.texture,ze=Ae.format,Ge=Ae.type;if(!je.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-q&&W>=0&&W<=A.height-F){B.bindFramebuffer(U.FRAMEBUFFER,Te);let Ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ce),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),U.readPixels(O,W,q,F,Be.convert(ze),Be.convert(Ge),0);let lt=I!==null?ee.get(I).__webglFramebuffer:null;B.bindFramebuffer(U.FRAMEBUFFER,lt);let Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rE(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.deleteBuffer(Ce),U.deleteSync(Et),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,W=0){A.isTexture!==!0&&(ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let q=Math.pow(2,-W),F=Math.floor(A.image.width*q),le=Math.floor(A.image.height*q),ye=O!==null?O.x:0,Te=O!==null?O.y:0;C.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ye,Te,F,le),B.unbindTexture()},this.copyTextureToTexture=function(A,O,W=null,q=null,F=0){A.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],O=arguments[2],F=arguments[3]||0,W=null);let le,ye,Te,Ae,ze,Ge,Ce,lt,Et,Pt=A.isCompressedTexture?A.mipmaps[F]:A.image;W!==null?(le=W.max.x-W.min.x,ye=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,ze=W.min.y,Ge=W.isBox3?W.min.z:0):(le=Pt.width,ye=Pt.height,Te=Pt.depth||1,Ae=0,ze=0,Ge=0),q!==null?(Ce=q.x,lt=q.y,Et=q.z):(Ce=0,lt=0,Et=0);let An=Be.convert(O.format),ht=Be.convert(O.type),Pe;O.isData3DTexture?(C.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Ui=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ti=U.getParameter(U.UNPACK_SKIP_PIXELS),Fr=U.getParameter(U.UNPACK_SKIP_ROWS),Ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);let Ma=A.isDataArrayTexture||A.isData3DTexture,It=O.isDataArrayTexture||O.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let xi=ee.get(A),Sa=ee.get(O),Vn=ee.get(xi.__renderTarget),hs=ee.get(Sa.__renderTarget);B.bindFramebuffer(U.READ_FRAMEBUFFER,Vn.__webglFramebuffer),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let fs=0;fs<Te;fs++)Ma&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,F,Ge+fs),A.isDepthTexture?(It&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ee.get(O).__webglTexture,F,Et+fs),U.blitFramebuffer(Ae,ze,le,ye,Ce,lt,le,ye,U.DEPTH_BUFFER_BIT,U.NEAREST)):It?U.copyTexSubImage3D(Pe,F,Ce,lt,Et+fs,Ae,ze,le,ye):U.copyTexSubImage2D(Pe,F,Ce,lt,Et+fs,Ae,ze,le,ye);B.bindFramebuffer(U.READ_FRAMEBUFFER,null),B.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Pe,F,Ce,lt,Et,le,ye,Te,An,ht,Pt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,F,Ce,lt,Et,le,ye,Te,An,Pt.data):U.texSubImage3D(Pe,F,Ce,lt,Et,le,ye,Te,An,ht,Pt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Ce,lt,le,ye,An,ht,Pt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Ce,lt,Pt.width,Pt.height,An,Pt.data):U.texSubImage2D(U.TEXTURE_2D,F,Ce,lt,le,ye,An,ht,Pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ti),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ln),F===0&&O.generateMipmaps&&U.generateMipmap(Pe),B.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W=null,q=null,F=0){return A.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,A=arguments[2],O=arguments[3],F=arguments[4]||0),ka('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,W,q,F)},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),B.unbindTexture()},this.resetState=function(){M=0,T=0,I=null,B.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},Zc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wi=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},So=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dd,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new P,lr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends En{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qr,Ca=new P,eo=new P,to=new P,no=new te,Ra=new te,Tx=new Ie,Ec=new P,Pa=new P,Tc=new P,Dy=new te,Hf=new te,Ny=new te,wo=class extends Tt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new So(t,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new lr(i,3,0,!1)),Qr.setAttribute("uv",new lr(i,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),Tx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-to.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ac(Ec.set(-.5,-.5,0),to,o,eo,s,r),Ac(Pa.set(.5,-.5,0),to,o,eo,s,r),Ac(Tc.set(.5,.5,0),to,o,eo,s,r),Dy.set(0,0),Hf.set(1,0),Ny.set(1,1);let a=e.ray.intersectTriangle(Ec,Pa,Tc,!1,Ca);if(a===null&&(Ac(Pa.set(-.5,.5,0),to,o,eo,s,r),Hf.set(0,1),a=e.ray.intersectTriangle(Ec,Tc,Pa,!1,Ca),a===null))return;let l=e.ray.origin.distanceTo(Ca);l<e.near||l>e.far||t.push({distance:l,point:Ca.clone(),uv:_s.getInterpolation(Ca,Ec,Pa,Tc,Dy,Hf,Ny,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ac(n,e,t,i,s,r){no.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ra.x=r*no.x-s*no.y,Ra.y=s*no.x+r*no.y):Ra.copy(no),n.copy(e),n.x+=Ra.x,n.y+=Ra.y,n.applyMatrix4(Tx)}var ky=new P,Uy=new rt,Oy=new rt,eR=new P,Fy=new Ie,Cc=new P,Vf=new Un,By=new Ie,Gf=new ar,Kc=class extends Y{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=B0,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cc),this.boundingBox.expandByPoint(Cc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cc),this.boundingSphere.expandByPoint(Cc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vf.copy(this.boundingSphere),Vf.applyMatrix4(s),e.ray.intersectsSphere(Vf)!==!1&&(By.copy(s).invert(),Gf.copy(e.ray).applyMatrix4(By),!(this.boundingBox!==null&&Gf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===B0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Uy.fromBufferAttribute(s.attributes.skinIndex,e),Oy.fromBufferAttribute(s.attributes.skinWeight,e),ky.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Oy.getComponent(r);if(o!==0){let a=Uy.getComponent(r);Fy.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(eR.copy(ky).applyMatrix4(Fy),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ya=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qn=class extends on{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,u=jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zy=new Ie,tR=new Ie,Jc=class n{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:tR;zy.multiplyMatrices(a,t[r]),zy.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new qn(t,e,e,sn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ya),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ur=class extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},io=new Ie,Hy=new Ie,Rc=[],Vy=new zt,nR=new Ie,Ia=new Y,La=new Un,Ts=class extends Y{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nR)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),Vy.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(Vy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),La.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,io),Hy.multiplyMatrices(i,io),Ia.matrixWorld=Hy,Ia.raycast(e,Rc);for(let o=0,a=Rc.length;o<a;o++){let l=Rc[o];l.instanceId=r,l.object=this,t.push(l)}Rc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qn(new Float32Array(s*this.count),s,this.count,Sp,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yi=class extends En{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qc=new P,eu=new P,Gy=new Ie,Da=new ar,Pc=new Un,Wf=new P,Wy=new P,Eo=class extends Tt{constructor(e=new ot,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qc.fromBufferAttribute(t,s-1),eu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qc.distanceTo(eu);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(s),Pc.radius+=r,e.ray.intersectsSphere(Pc)===!1)return;Gy.copy(s).invert(),Da.copy(e.ray).applyMatrix4(Gy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,y=p-1;x<y;x+=c){let g=u.getX(x),v=u.getX(x+1),b=Ic(this,e,Da,l,g,v);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),y=u.getX(d),g=Ic(this,e,Da,l,x,y);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,y=p-1;x<y;x+=c){let g=Ic(this,e,Da,l,x,x+1);g&&t.push(g)}if(this.isLineLoop){let x=Ic(this,e,Da,l,p-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ic(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Qc.fromBufferAttribute(o,s),eu.fromBufferAttribute(o,r),t.distanceSqToSegment(Qc,eu,Wf,Wy)>i)return;Wf.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Wf);if(!(l<e.near||l>e.far))return{distance:l,point:Wy.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var qy=new P,$y=new P,As=class extends Eo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)qy.fromBufferAttribute(t,s),$y.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qy.distanceTo($y);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tu=class extends Eo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ui=class extends En{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xy=new Ie,Zd=new ar,Lc=new Un,Dc=new P,Ei=class extends Tt{constructor(e=new ot,t=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=r,e.ray.intersectsSphere(Lc)===!1)return;Xy.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(Xy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let y=c.getX(p);Dc.fromBufferAttribute(h,y),Yy(Dc,y,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Dc.fromBufferAttribute(h,p),Yy(Dc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yy(n,e,t,i,s,r,o){let a=Zd.distanceSqToPoint(n);if(a<t){let l=new P;Zd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var $n=class extends on{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new Ie;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Xt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Xt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ja=class extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Kd=class extends ja{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ip(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Nc=new P,qf=new Ip,$f=new Ip,Xf=new Ip,Jd=class extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Nc.subVectors(s[0],s[1]).add(s[0]),c=Nc);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Nc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),y<1e-4&&(y=x),qf.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,x,y),$f.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,x,y),Xf.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,x,y)}else this.curveType==="catmullrom"&&(qf.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$f.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Xf.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(qf.calc(l),$f.calc(l),Xf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jy(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function iR(n,e){let t=1-n;return t*t*e}function sR(n,e){return 2*(1-n)*n*e}function rR(n,e){return n*n*e}function Ha(n,e,t,i){return iR(n,e)+sR(n,t)+rR(n,i)}function oR(n,e){let t=1-n;return t*t*t*e}function aR(n,e){let t=1-n;return 3*t*t*n*e}function lR(n,e){return 3*(1-n)*n*n*e}function cR(n,e){return n*n*n*e}function Va(n,e,t,i,s){return oR(n,e)+aR(n,t)+lR(n,i)+cR(n,s)}var nu=class extends Xn{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qd=class extends Xn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y),Va(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},iu=class extends Xn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ep=class extends Xn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Xn{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ha(e,s.x,r.x,o.x),Ha(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tp=class extends Xn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ha(e,s.x,r.x,o.x),Ha(e,s.y,r.y,o.y),Ha(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ru=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(jy(a,l.x,c.x,u.x,h.x),jy(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},Zy=Object.freeze({__proto__:null,ArcCurve:Kd,CatmullRomCurve3:Jd,CubicBezierCurve:nu,CubicBezierCurve3:Qd,EllipseCurve:ja,LineCurve:iu,LineCurve3:ep,QuadraticBezierCurve:su,QuadraticBezierCurve3:tp,SplineCurve:ru}),np=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zy[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zy[s.type]().fromJSON(s))}return this}},ip=class extends np{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new iu(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new su(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new nu(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ru(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ja(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sp=class n extends ot{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Xt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new P,f=new te,d=new P,p=new P,x=new P,y=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:y=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-y,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:y=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-y,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let v=0;v<=t;v++){let b=i+v*u*s,_=Math.sin(b),R=Math.cos(b);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*_,h.y=e[M].y,h.z=e[M].x*R,o.push(h.x,h.y,h.z),f.x=v/t,f.y=M/(e.length-1),a.push(f.x,f.y);let T=l[3*M+0]*_,I=l[3*M+1],E=l[3*M+0]*R;c.push(T,I,E)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let _=b+v*e.length,R=_,M=_+e.length,T=_+e.length+1,I=_+1;r.push(R,M,I),r.push(T,I,M)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Cs=class n extends sp{constructor(e=1,t=1,i=4,s=8){let r=new ip;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},ou=class n extends ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},At=class n extends ot{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,x=[],y=i/2,g=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function v(){let _=new P,R=new P,M=0,T=(t-e)/i;for(let I=0;I<=r;I++){let E=[],S=I/r,L=S*(t-e)+e;for(let N=0;N<=s;N++){let z=N/s,G=z*l+a,D=Math.sin(G),V=Math.cos(G);R.x=L*D,R.y=-S*i+y,R.z=L*V,h.push(R.x,R.y,R.z),_.set(D,T,V).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-S),E.push(p++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){let S=x[E][I],L=x[E+1][I],N=x[E+1][I+1],z=x[E][I+1];(e>0||E!==0)&&(u.push(S,L,z),M+=3),(t>0||E!==r-1)&&(u.push(L,N,z),M+=3)}c.addGroup(g,M,0),g+=M}function b(_){let R=p,M=new te,T=new P,I=0,E=_===!0?e:t,S=_===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,y*S,0),f.push(0,S,0),d.push(.5,.5),p++;let L=p;for(let N=0;N<=s;N++){let G=N/s*l+a,D=Math.cos(G),V=Math.sin(G);T.x=E*V,T.y=y*S,T.z=E*D,h.push(T.x,T.y,T.z),f.push(0,S,0),M.x=D*.5+.5,M.y=V*.5*S+.5,d.push(M.x,M.y),p++}for(let N=0;N<s;N++){let z=R+N,G=L+N;_===!0?u.push(G,G+1,z):u.push(G+1,G,z),I+=3}c.addGroup(g,I,_===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dn=class n extends At{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var tt=class n extends ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new P,f=new P,d=[],p=[],x=[],y=[];for(let g=0;g<=i;g++){let v=[],b=g/i,_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let M=R/t;h.x=-e*Math.cos(s+M*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+M*r)*Math.sin(o+b*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),y.push(M+_,1-b),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let b=u[g][v+1],_=u[g][v],R=u[g+1][v],M=u[g+1][v+1];(g!==0||o>0)&&d.push(b,_,M),(g!==i-1||l<Math.PI)&&d.push(_,R,M)}this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var au=class n extends ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new P,h=new P,f=new P;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,y=d/i*Math.PI*2;h.x=(e+t*Math.cos(y))*Math.cos(x),h.y=(e+t*Math.cos(y))*Math.sin(x),h.z=t*Math.sin(y),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,y=(s+1)*(d-1)+p-1,g=(s+1)*(d-1)+p,v=(s+1)*d+p;o.push(x,y,v),o.push(y,g,v)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var lu=class extends vt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Je=class extends En{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cp,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends Je{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var cu=class extends En{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cp,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function kc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hR(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ky(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Ax(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Rs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rp=class extends Rs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ro,endingEnd:ro}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oo:r=e,a=2*t-i;break;case Vc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case oo:o=e,l=2*i-t;break;case Vc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,y=x*p,g=-f*y+2*f*x-f*p,v=(1+f)*y+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-d)*y+(1.5+d)*x+.5*p,_=d*y-d*x;for(let R=0;R!==a;++R)r[R]=g*o[u+R]+v*o[c+R]+b*o[l+R]+_*o[h+R];return r}},uu=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},op=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new op(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case pf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return pf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&uR(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pf,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=yo;var Ps=class extends Yn{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=go;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var hu=class extends Yn{};hu.prototype.ValueTypeName="color";var ji=class extends Yn{};ji.prototype.ValueTypeName="number";var ap=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zi=class extends Yn{InterpolantFactoryMethodLinear(e){return new ap(this.times,this.values,this.getValueSize(),e)}};Zi.prototype.ValueTypeName="quaternion";Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Yn{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=go;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Yn{};Ki.prototype.ValueTypeName="vector";var To=class{constructor(e="",t=-1,i=[],s=Ap){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dR(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Yn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=hR(l);l=Ky(l,1,u),c=Ky(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,d,p,x){if(d.length!==0){let y=[],g=[];Ax(d,y,g,p),y.length!==0&&x.push(new h(f,y,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let x=0;x<f[p].morphTargets.length;x++)d[f[p].morphTargets[x]]=-1;for(let x in d){let y=[],g=[];for(let v=0;v!==f[p].morphTargets.length;++v){let b=f[p];y.push(b.time),g.push(b.morphTarget===x?1:0)}s.push(new ji(".morphTargetInfluence["+x+"]",y,g))}l=d.length*o}else{let d=".bones["+t[h].name+"]";i(Ki,d+".position",f,"pos",s),i(Zi,d+".quaternion",f,"rot",s),i(Ki,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function fR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return hu;case"quaternion":return Zi;case"bool":case"boolean":return Ps;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fR(n.type);if(n.times===void 0){let t=[],i=[];Ax(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var bs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},lp=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}},pR=new lp,Ji=class{constructor(e){this.manager=e!==void 0?e:pR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},cp=class extends Error{constructor(e,t){super(e),this.response=t}},Za=class extends Ji{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Vi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,y=new ReadableStream({start(g){v();function v(){h.read().then(({done:b,value:_})=>{if(b)g.close();else{x+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let M=0,T=u.length;M<T;M++){let I=u[M];I.onProgress&&I.onProgress(R)}g.enqueue(_),v()}},b=>{g.error(b)})}}});return new Response(y)}else throw new cp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{bs.add(e,c);let u=Vi[e];delete Vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var up=class extends Ji{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=qa("img");function l(){u(),bs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ls=class extends Ji{constructor(e){super(e)}load(e,t,i,s){let r=new on,o=new up(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},hr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},fu=class extends hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yf=new Ie,Jy=new P,Qy=new P,Ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jy.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jy),Qy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qy),t.updateMatrixWorld(),Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hp=class extends Ka{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=xo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},du=class extends hr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ex=new Ie,Na=new P,jf=new P,fp=class extends Ka{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Na.setFromMatrixPosition(e.matrixWorld),i.position.copy(Na),jf.copy(i.position),jf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jf),i.updateMatrixWorld(),s.makeTranslation(-Na.x,-Na.y,-Na.z),ex.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ex)}},Ti=class extends hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new fp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dp=class extends Ka{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new dp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ao=class extends hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ds=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pu=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return bs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),bs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bs.add(e,l),r.manager.itemStart(e)}};var mu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tx(){return performance.now()}var pp=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){rn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;rn.multiplyQuaternionsFlat(e,o,e,t,e,i),rn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},Lp="\\[\\]\\.:\\/",mR=new RegExp("["+Lp+"]","g"),Dp="[^"+Lp+"]",gR="[^"+Lp.replace("\\.","")+"]",yR=/((?:WC+[\/:])*)/.source.replace("WC",Dp),xR=/(WCOD+)?/.source.replace("WCOD",gR),vR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dp),_R=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dp),bR=new RegExp("^"+yR+xR+vR+_R+"$"),MR=["material","materials","bones","map"],mp=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mR,"")}static parseTrackName(e){let t=bR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);MR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=mp;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gp=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ro,endingEnd:ro};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case I1:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ap:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===P1;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===_u){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=oo,s.endingEnd=oo):(e?s.endingStart=this.zeroSlopeAtStart?oo:ro:s.endingStart=Vc,t?s.endingEnd=this.zeroSlopeAtEnd?oo:ro:s.endingEnd=Vc)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}},SR=new Float32Array(1),Co=class extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;p=new pp(bt.create(i,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new uu(new Float32Array(2),new Float32Array(2),1,SR),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?To.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Ap),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new gp(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?To.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var nx=new Ie,gu=class{constructor(e,t,i=0,s=1/0){this.ray=new ar(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nx),this}intersectObject(e,t=!0,i=[]){return yp(e,this,i,t),i.sort(ix),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)yp(e[s],this,i,t);return i.sort(ix),i}};function ix(n,e){return n.distance-e.distance}function yp(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)yp(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Cx(n={}){let e=n.search??(typeof location<"u"?location.search:""),t=n.userAgent??(typeof navigator<"u"?navigator.userAgent:""),i=n.maxTouchPoints??(typeof navigator<"u"?navigator.maxTouchPoints:0),s=n.pointerCoarse??(typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches),r=n.hoverNone??(typeof matchMedia=="function"&&matchMedia("(hover: none)").matches),o=new URLSearchParams(String(e).replace(/^\?/,"")),a=/iPad/i.test(t)||/Macintosh/i.test(t)&&i>1,l=/iPhone|iPod|Android.+Mobile/i.test(t),c=s||r||a||l,u=c;return o.get("touch")==="0"&&(u=!1),o.get("touch")==="1"&&(u=!0),{touch:u,lightGpu:c}}var wu=Cx();function Rx(){return Cx().touch}var Rt={coarse:wu.lightGpu,dprCap:wu.lightGpu?1.5:2,shadow:wu.lightGpu?1024:2048,tuftsPerM2:wu.lightGpu?1.6:3.6,antialias:!0},Px={world:"Mochi's home",house:"Haunted house",hall:"Village hall",cafe:"Caf\xE9",mine:"Crystal mine"},Ix=new Set(["ground.glb","floor.glb","dirt.glb","path.glb","puddle.glb"]);var Eu=class extends wi{constructor(){super();let e=new Lt;e.deleteAttribute("uv");let t=new Je({side:Vt}),i=new Je,s=new Ti(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Y(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Y(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Y(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Y(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Y(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Y(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Y(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new Y(e,No(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Y(e,No(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let p=new Y(e,No(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let x=new Y(e,No(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let y=new Y(e,No(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let g=new Y(e,No(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function No(n){let e=new fn;return e.color.setScalar(n),e}function De(n,e,t=0){return new P(n,t,-e)}function Np({canvas:n,profile:e}){n.style.width="100%",n.style.height="100%";let t=new Mo({canvas:n,antialias:e.antialias??!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.outputColorSpace=qe,t.toneMapping=Ns,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=Po;let i=new wi,s=new oe("#6b3a5e");i.background=s.clone(),i.fog=new Zc(s.clone(),.008);let r=new _o(t);i.environment=r.fromScene(new Eu,.04).texture,i.environmentIntensity=.32;let o=new Ut(52,1,.08,420),a=0,l=0;function c(h=!1){let f=n.clientWidth,d=n.clientHeight;h&&(a=0),!(f<2||d<2||f===a&&d===l)&&(a=f,l=d,o.aspect=f/d,o.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dprCap??2)),t.setSize(f,d,!1))}function u(){r.dispose(),t.dispose()}return{renderer:t,scene:i,camera:o,fitView:c,toThree:De,dispose:u}}var Lx=["music","sfx","ambience","ui"];function Tu(n,e,t=Math.random){return typeof n=="number"?n:Array.isArray(n)&&n.length===2?n[0]+(n[1]-n[0])*t():e}function wR(n,e=-1,t=Math.random){if(!n.length)return-1;if(n.length===1)return 0;let i=Math.floor(t()*(n.length-1));return i>=e&&e>=0&&(i+=1),Math.min(i,n.length-1)}function ER(n,e){let t=n.split(".").pop().toLowerCase();if(e(t))return n;let i=t==="ogg"?"m4a":t==="m4a"?"ogg":null;return i&&e(i)?n.replace(/\.[^.]+$/,`.${i}`):n}function Au(n,e={}){return n?Object.entries(n).every(([t,i])=>e[t]!==void 0&&i.includes(e[t])):!0}function Dx(n,e){let t=(n.ambience||[]).filter(s=>Au(s.when,e)),i=(n.music||[]).find(s=>Au(s.when,e))||null;return{ambience:t,music:i}}function TR(){if(typeof document>"u")return()=>!0;let n=document.createElement("audio"),e={ogg:'audio/ogg; codecs="vorbis"',m4a:'audio/mp4; codecs="mp4a.40.2"',mp3:"audio/mpeg",wav:"audio/wav"};return t=>!!(e[t]&&n.canPlayType(e[t]))}function kp({bank:n,baseUrl:e="/assets/",context:t}={}){let i=t||null,s=n||{buses:{},sounds:[]},r=new Map,o=new Map,a=new Map,l=new Map,c={},u=new Map,h=TR(),f={position:[0,0,0],forward:[0,0,-1],up:[0,1,0]};function d(){r=new Map((s.sounds||[]).map(M=>[M.id,M]))}d();function p(){if(i)return i;let M=globalThis.AudioContext||globalThis.webkitAudioContext;return M?(i=new M,i):null}function x(){let M=p();if(!M)return null;if(!c.master){c.master=M.createGain(),c.master.connect(M.destination);for(let T of Lx)c[T]=M.createGain(),c[T].connect(c.master);y()}return c}function y(){if(!c.master)return;let M=s.buses||{};c.master.gain.value=M.master??1;for(let T of Lx)c[T].gain.value=M[T]??1}function g(M){let T=e+ER(M,h).split("/").map(encodeURIComponent).join("/");if(!o.has(T)){let I=p();o.set(T,fetch(T).then(E=>{if(!E.ok)throw new Error(`${E.status} for ${T}`);return E.arrayBuffer()}).then(E=>I.decodeAudioData(E)).catch(E=>{throw o.delete(T),E}))}return o.get(T)}function v(){let M=i;if(!M)return;let T=M.listener,[I,E,S]=f.position,[L,N,z]=f.forward,[G,D,V]=f.up;T.positionX?(T.positionX.value=I,T.positionY.value=E,T.positionZ.value=S,T.forwardX.value=L,T.forwardY.value=N,T.forwardZ.value=z,T.upX.value=G,T.upY.value=D,T.upZ.value=V):(T.setPosition(I,E,S),T.setOrientation(L,N,z,G,D,V))}function b(M,T={}){let I=r.get(M),E=x();if(!I||!E||!I.files?.length)return null;let S=i.currentTime;if(I.cooldown&&S-(l.get(M)??-1/0)<I.cooldown)return null;l.set(M,S);let L=wR(I.files,a.get(M)??-1);a.set(M,L);let N=i.createGain(),z=Tu(I.volume,1)*(T.volume??1),G=T.fadeIn||0;N.gain.setValueAtTime(G?1e-4:z,S),G&&N.gain.linearRampToValueAtTime(z,S+G);let D=null,V=I.spatial===!0?{}:I.spatial;V&&T.position?(D=i.createPanner(),D.panningModel="HRTF",D.distanceModel="inverse",D.refDistance=V.refDistance??2,D.maxDistance=V.maxDistance??40,D.rolloffFactor=V.rolloff??1,_(D,T.position),N.connect(D),D.connect(E[I.bus]||E.sfx)):N.connect(E[I.bus]||E.sfx);let ne=null,$=!1,ie={id:M,stop(ae=0){$=!0;let ve=i.currentTime;N.gain.cancelScheduledValues(ve),N.gain.setValueAtTime(N.gain.value,ve),N.gain.linearRampToValueAtTime(1e-4,ve+Math.max(.01,ae)),ne&&ne.stop(ve+Math.max(.01,ae)+.05)},setPosition(ae){D&&_(D,ae)},setVolume(ae){N.gain.setTargetAtTime(Tu(I.volume,1)*ae,i.currentTime,.05)},get playing(){return!$}};return g(I.files[L]).then(ae=>{$||(ne=i.createBufferSource(),ne.buffer=ae,ne.loop=T.loop??I.loop??!1,ne.playbackRate.value=Tu(I.pitch,1),ne.connect(N),ne.onended=()=>{$=!0},ne.start())}).catch(ae=>{$=!0,console.warn(`audio: could not play ${M}:`,ae.message)}),ie}function _(M,[T,I,E]){M.positionX?(M.positionX.value=T,M.positionY.value=I,M.positionZ.value=E):M.setPosition(T,I,E)}function R(M){if(!i)return;let{ambience:T,music:I}=Dx(s,M),E=new Map;for(let S of T)E.set(`ambience:${S.id}`,S);I&&E.set(`music:${I.id}`,I);for(let[S,L]of u)E.has(S)||(L.handle?.stop(L.rule.fade??2),u.delete(S));for(let[S,L]of E){if(u.has(S))continue;let N=b(L.sound,{loop:!0,fadeIn:L.fade??2,volume:Tu(L.volume,1)});u.set(S,{handle:N,rule:L})}}return{unlock(){let M=p();return x(),M?.resume?.()},play:b,updateEnvironment:R,setListener(M,T=f.forward,I=f.up){f={position:M,forward:T,up:I},v()},setBusVolume(M,T){s.buses={...s.buses||{},[M]:T},y()},setBank(M){s=M||{buses:{},sounds:[]},d(),y()},stopAll(M=.2){for(let T of u.values())T.handle?.stop(M);u.clear()},get context(){return i},preload(M){return Promise.allSettled(M.flatMap(T=>(r.get(T)?.files||[]).map(g)))}}}var Nx={saturation:1,contrast:1,brightness:0,tint:"#ffffff",tintAmount:0,vignette:0};function kx(n,e){if(!e)return n;let t={...n};for(let[i,s]of Object.entries(e))t[i]=s&&typeof s=="object"&&!Array.isArray(s)&&n?.[i]&&typeof n[i]=="object"?kx(n[i],s):s;return t}function Cu(n,e={}){let{coarse:t,...i}=n||{},s=e.coarse?kx(i,t):i;return e.shadow&&s.shadows&&(s.shadows={...s.shadows,mapSize:Math.min(s.shadows.mapSize??e.shadow,e.shadow)}),s}function ko(n){let e=parseInt(String(n).slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Ux([n,e,t]){return`#${[n,e,t].map(i=>Math.round(Math.min(1,Math.max(0,i))*255).toString(16).padStart(2,"0")).join("")}`}function sl(n,e={}){let t={...Nx,...n?.base||{}};for(let i of n?.rules||[]){if(!Au(i.when,e))continue;let{id:s,when:r,tint:o,tintAmount:a,...l}=i;if(t={...t,...l},o&&a){let c=t.tintAmount+a,u=ko(t.tint),h=ko(o),f=u.map((d,p)=>(d*t.tintAmount+h[p]*a)/c);t.tint=Ux(f),t.tintAmount=Math.min(1,Math.max(t.tintAmount,a)+Math.min(t.tintAmount,a)*.5)}}return t}function Up(n,e,t){let i={};for(let s of Object.keys(Nx))if(s==="tint"){let r=ko(n.tint),o=ko(e.tint);i.tint=Ux(r.map((a,l)=>a+(o[l]-a)*t))}else i[s]=n[s]+(e[s]-n[s])*t;return i}var ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},AR=new Es(-1,1,1,-1,0,1),Op=class extends ot{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},CR=new Op,Ai=class{constructor(e){this._mesh=new Y(CR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fr=class extends Tn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mn.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ai(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rl=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ru=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fr(ks),this.copyPass.material.blending=Yt,this.clock=new mu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rl!==void 0&&(o instanceof rl?i=!0:o instanceof Ru&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Iu=class extends Tn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ol={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ie},cameraProjectionMatrixInverse:{value:new Ie},cameraWorldMatrix:{value:new Ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},al={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Lu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ox(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=RR(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new qn(s,e,e);return r.wrapS=Zt,r.wrapT=Zt,r.needsUpdate=!0,r}function RR(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var ll={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Fp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Fp(n,e,t){let i=PR(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function PR(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new P(Math.cos(r),Math.sin(r),o))}return i}var Du=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,p=e-f,x=t-d,y,g;p>x?(y=1,g=0):(y=0,g=1);let v=p-y+u,b=x-g+u,_=p-1+2*u,R=x-1+2*u,M=l&255,T=c&255,I=this.perm[M+this.perm[T]]%12,E=this.perm[M+y+this.perm[T+g]]%12,S=this.perm[M+1+this.perm[T+1]]%12,L=.5-p*p-x*x;L<0?i=0:(L*=L,i=L*L*this.dot(this.grad3[I],p,x));let N=.5-v*v-b*b;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[E],v,b));let z=.5-_*_-R*R;return z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[S],_,R)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,p=(u+h+f)*d,x=u-p,y=h-p,g=f-p,v=e-x,b=t-y,_=i-g,R,M,T,I,E,S;v>=b?b>=_?(R=1,M=0,T=0,I=1,E=1,S=0):v>=_?(R=1,M=0,T=0,I=1,E=0,S=1):(R=0,M=0,T=1,I=1,E=0,S=1):b<_?(R=0,M=0,T=1,I=0,E=1,S=1):v<_?(R=0,M=1,T=0,I=0,E=1,S=1):(R=0,M=1,T=0,I=1,E=1,S=0);let L=v-R+d,N=b-M+d,z=_-T+d,G=v-I+2*d,D=b-E+2*d,V=_-S+2*d,ne=v-1+3*d,$=b-1+3*d,ie=_-1+3*d,ae=u&255,ve=h&255,Re=f&255,$e=this.perm[ae+this.perm[ve+this.perm[Re]]]%12,Z=this.perm[ae+R+this.perm[ve+M+this.perm[Re+T]]]%12,re=this.perm[ae+I+this.perm[ve+E+this.perm[Re+S]]]%12,be=this.perm[ae+1+this.perm[ve+1+this.perm[Re+1]]]%12,ue=.6-v*v-b*b-_*_;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[$e],v,b,_));let Ee=.6-L*L-N*N-z*z;Ee<0?r=0:(Ee*=Ee,r=Ee*Ee*this.dot3(this.grad3[Z],L,N,z));let Le=.6-G*G-D*D-V*V;Le<0?o=0:(Le*=Le,o=Le*Le*this.dot3(this.grad3[re],G,D,V));let Oe=.6-ne*ne-$*$-ie*ie;return Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this.dot3(this.grad3[be],ne,$,ie)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,p,x=(e+t+i+s)*l,y=Math.floor(e+x),g=Math.floor(t+x),v=Math.floor(i+x),b=Math.floor(s+x),_=(y+g+v+b)*c,R=y-_,M=g-_,T=v-_,I=b-_,E=e-R,S=t-M,L=i-T,N=s-I,z=E>S?32:0,G=E>L?16:0,D=S>L?8:0,V=E>N?4:0,ne=S>N?2:0,$=L>N?1:0,ie=z+G+D+V+ne+$,ae=o[ie][0]>=3?1:0,ve=o[ie][1]>=3?1:0,Re=o[ie][2]>=3?1:0,$e=o[ie][3]>=3?1:0,Z=o[ie][0]>=2?1:0,re=o[ie][1]>=2?1:0,be=o[ie][2]>=2?1:0,ue=o[ie][3]>=2?1:0,Ee=o[ie][0]>=1?1:0,Le=o[ie][1]>=1?1:0,Oe=o[ie][2]>=1?1:0,ut=o[ie][3]>=1?1:0,Xe=E-ae+c,mt=S-ve+c,U=L-Re+c,gt=N-$e+c,Ye=E-Z+2*c,je=S-re+2*c,B=L-be+2*c,he=N-ue+2*c,ee=E-Ee+3*c,C=S-Le+3*c,w=L-Oe+3*c,H=N-ut+3*c,j=E-1+4*c,J=S-1+4*c,K=L-1+4*c,we=N-1+4*c,fe=y&255,me=g&255,He=v&255,se=b&255,Me=a[fe+a[me+a[He+a[se]]]]%32,Ue=a[fe+ae+a[me+ve+a[He+Re+a[se+$e]]]]%32,Fe=a[fe+Z+a[me+re+a[He+be+a[se+ue]]]]%32,Se=a[fe+Ee+a[me+Le+a[He+Oe+a[se+ut]]]]%32,it=a[fe+1+a[me+1+a[He+1+a[se+1]]]]%32,Be=.6-E*E-S*S-L*L-N*N;Be<0?u=0:(Be*=Be,u=Be*Be*this.dot4(r[Me],E,S,L,N));let at=.6-Xe*Xe-mt*mt-U*U-gt*gt;at<0?h=0:(at*=at,h=at*at*this.dot4(r[Ue],Xe,mt,U,gt));let k=.6-Ye*Ye-je*je-B*B-he*he;k<0?f=0:(k*=k,f=k*k*this.dot4(r[Fe],Ye,je,B,he));let de=.6-ee*ee-C*C-w*w-H*H;de<0?d=0:(de*=de,d=de*de*this.dot4(r[Se],ee,C,w,H));let X=.6-j*j-J*J-K*K-we*we;return X<0?p=0:(X*=X,p=X*X*this.dot4(r[it],j,J,K,we)),27*(u+h+f+d+p)}};var cl=class n extends Tn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ox(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Bt(this.width,this.height,{type:_n}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},ol.defines),uniforms:Mn.clone(ol.uniforms),vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new cu,this.normalMaterial.blending=Yt,this.pdMaterial=new vt({defines:Object.assign({},ll.defines),uniforms:Mn.clone(ll.uniforms),vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},al.defines),uniforms:Mn.clone(al.uniforms),vertexShader:al.vertexShader,fragmentShader:al.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:Mn.clone(ks.uniforms),vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:xu,blendDst:Io,blendEquation:Wn,blendSrcAlpha:yu,blendDstAlpha:Io,blendEquationAlpha:Wn}),this.blendMaterial=new vt({uniforms:Mn.clone(Lu.uniforms),vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xp,blendSrc:xu,blendDst:Io,blendEquation:Wn,blendSrcAlpha:yu,blendDstAlpha:Io,blendEquationAlpha:Wn}),this.fsQuad=new Ai(null),this.originalClearColor=new oe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new bo,this.depthTexture.format=Ss,this.depthTexture.type=Ms,this.normalRenderTarget=new Bt(this.width,this.height,{minFilter:jt,magFilter:jt,type:_n,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Fp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Du,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new qn(s,e,e,sn,kn);return r.wrapS=Zt,r.wrapT=Zt,r.needsUpdate=!0,r}};cl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Fx={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Uo=class n extends Tn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Bt(r,o,{type:_n});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Bt(r,o,{type:_n});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Fx;this.highPassUniforms=Mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ks;this.copyUniforms=Mn.clone(u.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Hc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new fn,this.fsQuad=new Ai(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Uo.BlurDirectionX=new te(1,0);Uo.BlurDirectionY=new te(0,1);var Bx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nu=class extends Tn{constructor(){super();let e=Bx;this.uniforms=Mn.clone(e.uniforms),this.material=new lu({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ja?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===el?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

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
			
		}`};var IR={none:bi,linear:Ja,reinhard:Qa,cineon:el,aces:Ns,agx:tl,neutral:nl},LR={basic:sx,pcf:Ro,pcfsoft:Po,vsm:ri},Hx={uniforms:{tDiffuse:{value:null},saturation:{value:1},contrast:{value:1},brightness:{value:0},tint:{value:new oe(1,1,1)},tintAmount:{value:0},vignette:{value:0}},vertexShader:`
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
    }`},Bp={uniforms:{tDiffuse:{value:null},tDepth:{value:null},intensity:{value:1},cameraNear:{value:.1},cameraFar:{value:1e3},fogMode:{value:0},fogDensity:{value:0},fogNear:{value:1},fogFar:{value:1e3}},vertexShader:Hx.vertexShader,fragmentShader:`
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
    }`},DR={strength:[0,3],radius:[0,1],threshold:[0,2]},NR={strength:.35,radius:.5,threshold:.85};function kR(n,e){let t=DR[n];return Math.min(t[1],Math.max(t[0],e))}function UR(n){return n.isSprite?!0:(Array.isArray(n.material)?n.material:[n.material]).some(t=>t?.transparent)}function OR(n,e,t){let i=n.overrideVisibility.bind(n);n.overrideVisibility=()=>{i(),e.traverse(r=>{r.visible&&UR(r)&&(r.visible=!1)})},n.skipsSeeThrough=!0;let s=n.blendMaterial;n.blendMaterial=new vt({uniforms:Mn.clone(Bp.uniforms),vertexShader:Bp.vertexShader,fragmentShader:Bp.fragmentShader,defines:{PERSPECTIVE_CAMERA:t.isPerspectiveCamera?1:0},transparent:!0,depthTest:!1,depthWrite:!1,blending:s.blending,blendSrc:s.blendSrc,blendDst:s.blendDst,blendEquation:s.blendEquation,blendSrcAlpha:s.blendSrcAlpha,blendDstAlpha:s.blendDstAlpha,blendEquationAlpha:s.blendEquationAlpha}),s.dispose(),n.blendMaterial.uniforms.tDepth.value=n.depthTexture}function FR(n,e,t){let i=n.blendMaterial.uniforms;i.cameraNear.value=t.near,i.cameraFar.value=t.far;let s=e.fog;s?.isFogExp2?(i.fogMode.value=2,i.fogDensity.value=s.density):s?.isFog?(i.fogMode.value=1,i.fogNear.value=s.near,i.fogFar.value=s.far):i.fogMode.value=0}function zp(n,e,t){n.toneMapping=IR[t.toneMapping]??Ns,n.toneMappingExposure=t.exposure??1;let i=t.shadows||{};n.shadowMap.enabled=i.enabled!==!1,n.shadowMap.type=LR[i.type]??Po,n.shadowMap.needsUpdate=!0,e?.traverse(s=>{!s.isLight||!s.shadow||(i.mapSize&&s.shadow.mapSize.x!==i.mapSize&&(s.shadow.mapSize.set(i.mapSize,i.mapSize),s.shadow.map?.dispose(),s.shadow.map=null),i.radius!==void 0&&(s.shadow.radius=i.radius),i.bias!==void 0&&(s.shadow.bias=i.bias),i.normalBias!==void 0&&(s.shadow.normalBias=i.normalBias))})}function Hp({renderer:n,scene:e,camera:t,settings:i,profile:s={}}){let r=Cu(i,s),o=i,a=null,l={},c=sl(r.grading,{}),u=c,h={},f={strength:null,radius:null,threshold:null};function d(R){return r.bloom?.[R]??NR[R]}function p(R){return f[R]??d(R)}function x(R,M){M===null?f[R]=null:typeof M=="number"&&Number.isFinite(M)&&(f[R]=kR(R,M))}function y(){f.strength=f.radius=f.threshold=null,g()}function g(){let R=l.bloom;R&&(R.strength=p("strength"),R.radius=p("radius"),R.threshold=p("threshold"))}function v(){a?.dispose();let R=n.getDrawingBufferSize(new te),M=new Bt(R.x,R.y,{type:_n,samples:r.antialias==="msaa"?4:0});a=new Pu(n,M),l={render:new Iu(e,t)},a.addPass(l.render),r.ao?.enabled&&(l.ao=new cl(e,t,R.x,R.y),l.ao.updateGtaoMaterial({radius:r.ao.radius??.6,distanceFalloff:r.ao.distanceFalloff??1,thickness:r.ao.thickness??1}),l.ao.blendIntensity=r.ao.intensity??1,OR(l.ao,e,t),a.addPass(l.ao)),r.bloom?.enabled&&(l.bloom=new Uo(R,p("strength"),p("radius"),p("threshold")),a.addPass(l.bloom)),l.grade=new fr(Hx),a.addPass(l.grade),a.addPass(new Nu),r.antialias==="fxaa"&&(l.fxaa=new fr(zx),l.fxaa.uniforms.resolution.value.set(1/R.x,1/R.y),a.addPass(l.fxaa)),b(c)}function b(R){let M=l.grade.uniforms;M.saturation.value=R.saturation,M.contrast.value=R.contrast,M.brightness.value=R.brightness,M.tint.value.setRGB(...ko(R.tint)),M.tintAmount.value=R.tintAmount,M.vignette.value=R.vignette}zp(n,e,r),v();let _=performance.now();return{render(){let R=performance.now(),M=Math.min(.1,(R-_)/1e3);_=R,c!==u&&(c=Up(c,u,Math.min(1,M*1.5)),b(c)),l.ao&&FR(l.ao,e,t),a.render(M)},setSize(R,M){a.setPixelRatio(n.getPixelRatio()),a.setSize(R,M);let T=n.getPixelRatio();l.fxaa?.uniforms.resolution.value.set(1/(R*T),1/(M*T))},setSky(R){h={...R},u=sl(r.grading,h)},setSettings(R){o=R,r=Cu(R,s),zp(n,e,r),c=u=sl(r.grading,h),v()},setBloom(R){if(R===null){y();return}R&&typeof R=="object"&&(x("strength",R.strength),x("radius",R.radius),x("threshold",R.threshold)),g()},resetBloom(){y()},getBloom(){return{enabled:!!l.bloom,strength:p("strength"),radius:p("radius"),threshold:p("threshold")}},getBloomDefaults(){return{enabled:!!r.bloom?.enabled,strength:d("strength"),radius:d("radius"),threshold:d("threshold")}},get settings(){return o},get composer(){return a},dispose(){a?.dispose()}}}var BR=document.querySelector("#view"),zR=Np({canvas:BR,profile:Rt}),{renderer:pt,scene:Qe,camera:St,fitView:Qi}=zR;var es=n=>n*Math.PI/180,Oo=n=>n*180/Math.PI;function Vx(n=0,e=-2.2){return{x:n,y:e,z:0,h:0,vx:0,vy:0,vz:0,grounded:!0,flop:0}}function dr(n,e,t){let i=(e-n+540)%360-180;return Math.abs(i)<=t?e:n+Math.sign(i)*t}function ku(n,e,t,i,s){let r=es(i),o=-Math.sin(r),a=Math.cos(r),l=o*t+a*e,c=a*t-o*e,u=Math.hypot(l,c),h=(n.flop>.4?2.6:1.6)*(n.speedMul||1);if(u>.16){let f=Math.min(1,u);n.vx=l/u*h*f,n.vy=c/u*h*f;let d=Oo(Math.atan2(-l,c));n.h=dr(n.h,d,280*s)}else n.vx*=.8,n.vy*=.8;n.vz+=-14*(n.gravMul||1)*s,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s,n.z<=0?(n.z=0,n.vz=0,n.grounded=!0):n.grounded=!1,n.flop>0&&(n.flop=Math.max(0,n.flop-s))}function Gx(n){return n.grounded?(n.vz=3.3*(n.hopMul||1),n.grounded=!1,!0):!1}function Wx(n){if(n.flop>0)return!1;n.flop=1.1;let e=es(n.h);return n.vx+=-Math.sin(e)*2.4,n.vy+=Math.cos(e)*2.4,n.vz=Math.max(n.vz,1.4),!0}function pr(n,e,t=.7){let[i,s]=e.origin,[r,o]=e.half;n.x=Math.min(i+r-t,Math.max(i-r+t,n.x)),n.y=Math.min(s+o-t,Math.max(s-o+t,n.y))}function HR(n,e,t){return Math.abs(n.x-e.x)<e.hx+t&&Math.abs(n.y-e.y)<e.hy+t}function VR(n,e,t,i=.42){let s=0;for(let r of e){if(r.level!==t||!HR(n,r,i))continue;let o=r.z+r.height;o<=s||n.z<o-.35||n.z>o+.08||(s=o)}return s}function Uu(n,e,t,i=.42){let s=VR(n,e,t,i);s>0&&n.z<=s&&(n.z=s,(n.vz??0)<0&&(n.vz=0),n.grounded=!0);for(let r of e){if(r.level!==t)continue;let o=r.z+r.height;if(n.z+1e-4>=o||o<=n.z+.35)continue;let a=n.x-r.x,l=n.y-r.y,c=r.hx+i-Math.abs(a),u=r.hy+i-Math.abs(l);c<=0||u<=0||(c<u?(n.x+=Math.sign(a||1)*c,n.vx=0):(n.y+=Math.sign(l||1)*u,n.vy=0))}}var Fo={pumpkin:{file:"pumpkin.glb",radius:.36,height:.52,origin:"base"},hay:{file:"hay.glb",radius:.42,height:.46,origin:"base"},crate:{file:"crate.glb",radius:.4,height:.56,origin:"center"},pot:{file:"pot.glb",radius:.22,height:.36,origin:"center"}};function qx(n){let e=Fo[n.kind];return{x:n.at[0],y:n.at[1],z:n.z,vx:0,vy:0,vz:0,radius:e.radius,height:e.height,origin:e.origin,level:n.level}}function Ci(n){return n.origin==="base"?n.z:n.z-n.height/2}function qR(n,e){let t=e.x-n.x,i=e.y-n.y,s=Math.hypot(t,i)||.001,r=n.radius+e.radius;if(s>=r)return;let o=Ci(n)+n.height,a=Ci(e)+e.height;if(Ci(e)>=o-.08&&Ci(e)<o+.2){e.z+=o-Ci(e),e.vz=Math.max(0,e.vz);return}if(Ci(n)>=a-.08&&Ci(n)<a+.2){n.z+=a-Ci(n),n.vz=Math.max(0,n.vz);return}let l=(r-s)*.5;n.x-=t/s*l,n.y-=i/s*l,e.x+=t/s*l,e.y+=i/s*l}function $x(n,e,t){for(let s of n){s.vz+=-14*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.vx*=.98,s.vy*=.98;let r=0;if(Ci(s)<r){let u=r-Ci(s);s.z+=u,s.vz=0,s.vx*=.9,s.vy*=.9}let o=s.x-e.x,a=s.y-e.y,l=Math.hypot(o,a)||.001,c=s.radius+.42;if(l<c&&e.z<s.height){let u=(e.flop>0?7.5:4.2)*(1-l/c);s.vx+=o/l*u,s.vy+=a/l*u,s.vz+=e.flop>0?2.2:.4}}for(let s=0;s<3;s+=1)for(let r=0;r<n.length;r+=1)for(let o=r+1;o<n.length;o+=1)qR(n[r],n[o]);let i=0;for(let s of n){let r=Math.hypot(s.vx,s.vy,s.vz);r>.45&&(i+=(r-.45)*t)}return i}var $R=1.85,Vp=.88,Gp=.72,ul=.16,jx=80;function Zx(n,e){return{id:n.id,label:n.label||n.id,flies:!!n.flies,hover:!!n.hover,level:n.level||"world",spot:n.spot?n.spot.slice():[0,0],seat:n.seat||[0,0,ul],craft:e,phase:"idle",t:0,from:null,exit:null,sit:0}}function XR(n,e=1.25){let t=es(n.h||0),i=-Math.sin(t),s=Math.cos(t),r=Math.cos(t),o=Math.sin(t);return[(n.x||0)+r*e+i*.45,(n.y||0)+o*e+s*.45]}function Kx(n,e){return!n||Us(n)?!1:(n.spot=XR(e),n.craft.reset(e.h||0),!0)}function Jx(n,e,t,i,s=$R){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let l=mr(a),c=(t-l.x)**2+(i-l.y)**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function mr(n){return n.craft.parkPose(n.spot)}function Us(n){return n?.phase==="mounting"||n?.phase==="flying"||n?.phase==="dismounting"}function YR(n,e){return!(!n||Us(n)||(e.z||0)>.55)}function Ou(n,e){return YR(n,e)?(n.phase="mounting",n.t=0,n.sit=0,n.from={x:e.x,y:e.y,z:e.z||0,h:e.h||0},!0):!1}function Fu(n,e){if(n.phase!=="flying")return!1;let t=mr(n);n.phase="dismounting",n.t=0,n.from={x:e.x,y:e.y,z:e.z,h:e.h};let i=es(t.h),s=Math.cos(i),r=Math.sin(i);return n.exit={x:t.x+s*1.15,y:t.y+r*1.15,z:Math.max(0,t.z),h:t.h},!0}function Xx(n){return n*n*(3-2*n)}function Bo(n,e,t){return n+(e-n)*t}function Yx(n,e){return Math.sin(Math.PI*Math.max(0,Math.min(1,n)))*e}function zo(n,e,t){n.x=e.x,n.y=e.y,n.z=e.z+(t?.[2]??ul),n.h=e.h,n.vx=e.ve,n.vy=e.vn,n.vz=e.vd,n.grounded=e.z<.12,n.flop=0}function Qx(n,e,t,i,s,r){if(n.phase==="idle")return n.sit=Math.max(0,n.sit-t*3),n.craft.idle?.(t),n;if(n.phase==="mounting"){n.t+=t;let o=Math.min(1,n.t/Vp),a=Xx(o),l=mr(n),c=l.z+(n.seat?.[2]??ul);return e.x=Bo(n.from.x,l.x,a),e.y=Bo(n.from.y,l.y,a),e.z=Bo(n.from.z,c,a)+Yx(o,.62),e.h=dr(n.from.h,l.h,420*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.min(1,Math.max(0,(o-.28)/.45)),o>=1&&(n.phase="flying",n.t=0,zo(e,l,n.seat)),n}if(n.phase==="dismounting"){n.t+=t;let o=Math.min(1,n.t/Gp),a=Xx(o);return e.x=Bo(n.from.x,n.exit.x,a),e.y=Bo(n.from.y,n.exit.y,a),e.z=Bo(n.from.z,0,a)+Yx(o,.5),e.h=dr(n.from.h,n.exit.h,360*t),e.vx=0,e.vy=0,e.vz=0,n.sit=Math.max(0,1-o/.45),n.craft.idle?.(t),o>=1&&(n.phase="idle",n.t=0,e.x=n.exit.x,e.y=n.exit.y,e.z=n.exit.z,e.grounded=n.exit.z<=0,e.vz=0,n.sit=0),n}if(n.craft.step(t,i),s&&n.craft.contain(s.eastMin,s.eastMax,s.northMin,s.northMax,s.maxAgl??jx),r&&n.craft.moveTo){let o=mr(n),a=r(o);a&&n.craft.moveTo(a.x-n.spot[0],a.y-n.spot[1],a.z??o.z)}return zo(e,mr(n),n.seat),n.sit=1,n}function ev(n,e,t,i,s,r=!1){let o=Math.max(-1,Math.min(1,Number(e)||0)),a=Math.max(-1,Math.min(1,Number(n)||0)),l=(t?1:0)-(r?1:0);return{forward:o,turn:a,lift:l,lookH:i,heading:s}}function tv(n,e,t,i=4,s=jx){let r=t[0]-i,o=t[1]-i,a=n[0]-e[0],l=n[1]-e[1];return{eastMin:-r-a,eastMax:r-a,northMin:-o-l,northMax:o-l,maxAgl:s}}var jR={maxSpeed:12,reverseSpeed:3,accel:7,brake:16,drag:.7,turnRate:95,cameraSteer:2.4,climbRate:4.5,descendRate:4.5,climbAccel:10,maxBank:25,maxPitch:25,minAlt:.3,maxAlt:80};function Os(n,e,t){return Math.max(e,Math.min(t,n))}function Wp(n,e,t){return n<e?Math.min(e,n+t):Math.max(e,n-t)}function qp(n,e){return 1-Math.exp(-n*e)}function Ho(n){let e=((n+180)%360+360)%360-180;return e===-180?180:e}function nv(n={}){let e={...jR,...n},{minAlt:t,maxAlt:i}=e,s={east:0,north:0,agl:t,heading:0,pitch:0,roll:0,speed:0,climb:0,turnRate:0,keyTurning:!1};function r(p=0){s.east=0,s.north=0,s.agl=t,s.heading=Ho(p||0),s.pitch=0,s.roll=0,s.speed=0,s.climb=0,s.turnRate=0,s.keyTurning=!1}function o(p){let x=Math.min(1,Math.abs(s.speed)/e.maxSpeed),y=Os(s.turnRate*.32*(.35+.65*x),-e.maxBank,e.maxBank),g=Os(s.climb*5,-e.maxPitch,e.maxPitch);s.roll=Os(s.roll+(y-s.roll)*qp(5,p),-e.maxBank,e.maxBank),s.pitch=Os(s.pitch+(g-s.pitch)*qp(4,p),-e.maxPitch,e.maxPitch)}function a(){s.agl<t&&(s.agl=t,s.climb<0&&(s.climb=0)),s.agl>i&&(s.agl=i,s.climb>0&&(s.climb=0))}function l(p,x={}){if(!(p>0))return d;let y=Os(Number(x.forward)||0,-1,1),g=Os(Number(x.turn)||0,-1,1),v=Os(Number(x.lift)||0,-1,1);if(y===0)s.speed*=Math.exp(-e.drag*p),Math.abs(s.speed)<.02&&(s.speed=0);else{let R=y>0?y*e.maxSpeed:y*e.reverseSpeed,M=Math.abs(R)<Math.abs(s.speed)||R*s.speed<0;s.speed=Wp(s.speed,R,(M?e.brake:e.accel)*p)}let b=-g*e.turnRate;if(g!==0?s.keyTurning=!0:Math.abs(s.turnRate)<3&&(s.keyTurning=!1),g===0&&!s.keyTurning&&Number.isFinite(x.lookH)&&Math.abs(s.speed)>1){let R=Ho(x.lookH-s.heading);b=Os(R*e.cameraSteer,-e.turnRate*.8,e.turnRate*.8)}s.turnRate+=(b-s.turnRate)*qp(8,p),s.heading=Ho(s.heading+s.turnRate*p),s.climb=Wp(s.climb,v>0?v*e.climbRate:v*e.descendRate,e.climbAccel*p);let _=s.heading*Math.PI/180;return s.east+=-Math.sin(_)*s.speed*p,s.north+=Math.cos(_)*s.speed*p,s.agl+=s.climb*p,a(),o(p),d}function c(p){if(!(p>0))return d;s.speed*=Math.exp(-4*p),Math.abs(s.speed)<.02&&(s.speed=0),s.turnRate*=Math.exp(-8*p),s.keyTurning=!1,s.climb=0;let x=s.heading*Math.PI/180;return s.east+=-Math.sin(x)*s.speed*p,s.north+=Math.cos(x)*s.speed*p,s.agl=Wp(s.agl,t,2.5*p),a(),o(p),d}function u(p,x,y,g,v=i){let b=!1;return s.east<p&&(s.east=p,b=!0),s.east>x&&(s.east=x,b=!0),s.north<y&&(s.north=y,b=!0),s.north>g&&(s.north=g,b=!0),b&&(s.speed*=.35),s.agl>v&&(s.agl=v,s.climb>0&&(s.climb=0),b=!0),b}function h(p,x,y=s.agl){let g=Math.hypot(p-s.east,x-s.north)>1e-4;return s.east=p,s.north=x,s.agl=y,a(),g&&(s.speed*=.85),g}function f(){let p=s.heading*Math.PI/180;return{ve:-Math.sin(p)*s.speed,vn:Math.cos(p)*s.speed}}let d={get east(){return s.east},get north(){return s.north},get agl(){return s.agl},get heading(){return s.heading},get pitch(){return s.pitch},get roll(){return s.roll},get speed(){return s.speed},get climb(){return s.climb},get turnRate(){return s.turnRate},get keyTurning(){return s.keyTurning},get ve(){return f().ve},get vn(){return f().vn},get vd(){return-s.climb},config:e,reset:r,step:l,idle:c,contain:u,moveTo:h,parkPose(p){let{ve:x,vn:y}=f();return{x:p[0]+s.east,y:p[1]+s.north,z:s.agl,h:s.heading,pitch:s.pitch,roll:s.roll,ve:x,vn:y,vd:s.climb}},crossedFence(p,x,y,g){return!(p<=s.east&&s.east<=x&&y<=s.north&&s.north<=g)}};return r(),d}var gr={gauge:.76,railWidth:.08,railBase:.075,railHead:.145,capWidth:.05,railTop:.18,tieLength:1.15,tieWidth:.145,tieHeight:.08,tieSpacing:.727,sampleStep:1,bridgeFile:"v_bridge.glb",bridgeDeck:.19,bridgeHalfLength:2.3,bridgeHalfWidth:.68,bridgeRamp:2.5,trainLift:.17,platformGap:1.6,endStub:2.2,bufferWidth:1,bufferHeight:.34,bufferDepth:.22};function $p(n,e,t,i){return Oo(Math.atan2(-(t-n),i-e))||0}function iv(n){return(n?.points||[]).map(e=>[Number(e[0]),Number(e[1])]).filter((e,t,i)=>t===0||Math.hypot(e[0]-i[t-1][0],e[1]-i[t-1][1])>1e-6)}function sv(n,e=gr){return(n||[]).filter(t=>String(t.file||"").endsWith(e.bridgeFile)).map(t=>{let i=t.s||1;return{x:t.at[0],y:t.at[1],h:t.h||0,halfLength:e.bridgeHalfLength*i,halfWidth:e.bridgeHalfWidth*i,deck:e.bridgeDeck*i}})}function Fs(n,e,t,i=gr){let s=0;for(let r of n||[]){let o=r.h*Math.PI/180,a=e-r.x,l=t-r.y,c=Math.abs(a*Math.cos(o)+l*Math.sin(o));if(Math.abs(a*Math.sin(o)-l*Math.cos(o))>r.halfWidth)continue;let h=0;c<=r.halfLength?h=r.deck:c<r.halfLength+i.bridgeRamp&&(h=r.deck*(1-(c-r.halfLength)/i.bridgeRamp)),s=Math.max(s,h)}return s}function Xp(n,e){let t=n.length;if(t<2)return n.map(s=>[s[0],s[1]]);let i=[];for(let s=0;s<t-1;s+=1){let r=n[s+1][0]-n[s][0],o=n[s+1][1]-n[s][1],a=Math.hypot(r,o)||1;i.push([-o/a,r/a])}return n.map((s,r)=>{let o=i[Math.max(0,r-1)],a=i[Math.min(t-2,r)],l=o[0]+a[0],c=o[1]+a[1],u=Math.hypot(l,c);if(u<1e-9)return[s[0]+a[0]*e,s[1]+a[1]*e];l/=u,c/=u;let h=e/Math.max(.25,l*a[0]+c*a[1]);return[s[0]+l*h,s[1]+c*h]})}function ZR(n,e,t){let i=0;for(let s=0;s<e.length;s+=1){if(t<=i+e[s]||s===e.length-1){let r=e[s]>0?Math.max(0,Math.min(1,(t-i)/e[s])):0,[o,a]=n[s],[l,c]=n[s+1];return{x:o+(l-o)*r,y:a+(c-a)*r,seg:s}}i+=e[s]}return{x:n[0][0],y:n[0][1],seg:0}}function rv(n,{bridges:e=[],cfg:t=gr}={}){let i=[],s=[],r=[],o=[],a=new Set,l=(u,h)=>[u,h].map(f=>`${f[0]},${f[1]}`).sort().join("|"),c=0;(n?.edges||[]).forEach((u,h)=>{let f=iv(u);if(f.length<2)return;let d=[],p=[];for(let M=0;M<f.length-1;M+=1){let[T,I]=f[M],[E,S]=f[M+1];d.push(Math.hypot(E-T,S-I)),p.push($p(T,I,E,S))}let x=[],y=0;for(let M=0;M<f.length-1;M+=1){let[T,I]=f[M],[E,S]=f[M+1],L=Math.max(1,Math.ceil(d[M]/t.sampleStep-1e-9));for(let N=0;N<L;N+=1){let z=N/L,G=T+(E-T)*z,D=I+(S-I)*z;x.push({x:G,y:D,z:Fs(e,G,D,t),s:y+d[M]*z,seg:M})}y+=d[M]}let[g,v]=f[f.length-1];x.push({x:g,y:v,z:Fs(e,g,v,t),s:y,seg:f.length-2});let b=new Set;for(let M=0;M<f.length-1;M+=1){let T=l(f[M],f[M+1]);a.has(T)?b.add(M):a.add(T)}let _=Math.max(1,Math.round(y/t.tieSpacing)),R=y/_;for(let M=0;M<_;M+=1){let T=ZR(f,d,R*(M+.5));b.has(T.seg)||o.push({x:T.x,y:T.y,z:Fs(e,T.x,T.y,t),h:p[T.seg],edge:h,seg:T.seg})}i.push({edge:h,a:u.a||u.from,b:u.b||u.to,route:f,headings:p,points:x,length:y}),c+=y});for(let u of n?.stations||[]){let h=[];if(i.forEach(T=>{T.a===u.id&&h.push({run:T,from:T.route[0],next:T.route[1]}),T.b===u.id&&h.push({run:T,from:T.route[T.route.length-1],next:T.route[T.route.length-2]})}),h.length!==1||!(t.endStub>0))continue;let{run:f,from:d,next:p}=h[0],x=Math.hypot(p[0]-d[0],p[1]-d[1]),y=(d[0]-p[0])/x,g=(d[1]-p[1])/x,v=[d[0]+y*t.endStub,d[1]+g*t.endStub],b=$p(d[0],d[1],v[0],v[1]),_=Math.max(1,Math.ceil(t.endStub/t.sampleStep-1e-9)),R=[];for(let T=0;T<=_;T+=1){let I=t.endStub*T/_,E=d[0]+y*I,S=d[1]+g*I;R.push({x:E,y:S,z:Fs(e,E,S,t),s:I,seg:0})}s.push({edge:f.edge,station:u.id,route:[d.slice(),v],headings:[b],points:R,length:t.endStub});let M=Math.max(1,Math.round(t.endStub/t.tieSpacing));for(let T=0;T<M;T+=1){let I=t.endStub*(T+.5)/M,E=d[0]+y*I,S=d[1]+g*I;o.push({x:E,y:S,z:Fs(e,E,S,t),h:b,edge:f.edge,seg:0,stub:!0})}r.push({x:v[0],y:v[1],z:Fs(e,v[0],v[1],t),h:b,station:u.id})}return{runs:i,stubs:s,buffers:r,ties:o,length:c}}function KR(n,e){let t=[];for(let i of n?.edges||[]){let s=iv(i);s.length<2||((i.a||i.from)===e&&t.push([s[0],s[1]]),(i.b||i.to)===e&&t.push([s[s.length-1],s[s.length-2]]))}return t}function ov(n,e){let t=KR(n,e)[0];return t?$p(t[0][0],t[0][1],t[1][0],t[1][1]):null}var JR=1.85,QR=5,av=[0,0,.22];function eP(n){return n.level||"world"}function lv(n,e,t,i,s=JR){let r=null,o=1/0;for(let a of n||[]){if(eP(a)!==e)continue;let l=a.at;if(!l||l.length<2)continue;let c=(t-l[0])**2+(i-l[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function Vo(n,e){return(n||[]).find(t=>t.id===e)||null}function tP(n){return n.slice().reverse()}function nP(n){let e=new Map,t=(i,s,r)=>{e.has(i)||e.set(i,[]),e.get(i).push({to:s,points:r})};for(let i of n||[]){let s=i.a||i.from,r=i.b||i.to,o=i.points||[];!s||!r||o.length<2||(t(s,r,o.map(a=>a.slice(0,2))),t(r,s,tP(o).map(a=>a.slice(0,2))))}return e}function iP(n,e,t){if(!e||!t)return null;if(e===t)return[e];let i=[e],s=new Map([[e,null]]);for(;i.length;){let r=i.shift();for(let o of n.get(r)||[])if(!s.has(o.to)){if(s.set(o.to,r),o.to===t){let a=[t],l=r;for(;l!=null;)a.push(l),l=s.get(l);return a.reverse()}i.push(o.to)}}return null}function sP(n,e,t){for(let i of n.get(e)||[])if(i.to===t)return i.points;return null}function rP(n,e){if(!e||e.length<2)return[];let t=[];for(let i=0;i<e.length-1;i+=1){let s=sP(n,e[i],e[i+1]);if(!s||s.length<2)return[];let r=i===0?0:1;for(let o=r;o<s.length;o+=1)t.push(s[o].slice(0,2))}return t}function oP(n,e,t){let i=iP(n,e,t);if(!i)return null;let s=rP(n,i);return i.length>1&&s.length<2?null:{stations:i,points:s,length:Yp(s)}}function Yp(n){let e=0;for(let t=1;t<(n||[]).length;t+=1)e+=Math.hypot(n[t][0]-n[t-1][0],n[t][1]-n[t-1][1]);return e}function jp(n,e){if(!n||n.length===0)return{x:0,y:0,h:0,s:0};if(n.length===1)return{x:n[0][0],y:n[0][1],h:0,s:0};let t=Yp(n),i=Math.max(0,Math.min(t,e)),s=0;for(let a=1;a<n.length;a+=1){let l=n[a-1][0],c=n[a-1][1],u=n[a][0],h=n[a][1],f=Math.hypot(u-l,h-c);if(s+f>=i-1e-9||a===n.length-1){let d=f>1e-9?Math.min(1,(i-s)/f):0,p=l+(u-l)*d,x=c+(h-c)*d,y=Oo(Math.atan2(-(u-l),h-c));return{x:p,y:x,h:y,s:i}}s+=f}let r=n[n.length-1],o=n[n.length-2];return{x:r[0],y:r[1],h:Oo(Math.atan2(-(r[0]-o[0]),r[1]-o[1])),s:t}}function aP(n,e){if(!n?.length)return null;let t=n.indexOf(e);return t<0||t>=n.length-1?n[n.length-1]:n[t+1]}function Zp(n,e,t=.35){if(!e?.at||!n?.length)return 0;let[i,s]=e.at,r=0;for(let o=0;o<n.length;o+=1)if(o>0&&(r+=Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1])),Math.hypot(n[o][0]-i,n[o][1]-s)<=t)return r;return Yp(n)}function Bu(n){return{reset(){},step(){},contain(){},parkPose(){let e=n.pose;return{x:e.x,y:e.y,z:e.z,h:e.h,pitch:0,roll:0,ve:e.ve||0,vn:e.vn||0,vd:e.vd||0}}}}function lP(n,e){let t=n?.at||[0,0];return{x:t[0],y:t[1],z:0,h:e??n?.h??0,ve:0,vn:0,vd:0,pitch:0,roll:0}}function cv(n,e={}){let t=(n?.stations||[]).map(l=>({id:l.id,label:l.label||l.id,at:l.at.slice(0,2),region:l.region||l.id,level:l.level||"world",h:l.h??0})),i=nP(n?.edges||[]),s=n?.speed??QR,r=t[0]||{id:"home",at:[6,-8],label:"Home",region:"home",level:"world",h:-90},o={state:"idle",stationId:r.id,destId:null,pathStations:[r.id],points:[],length:0,arc:0,speed:s,hopOffAt:null,seat:av.slice(),pose:lP(r,ov(n,r.id)),heightAt:typeof e.heightAt=="function"?e.heightAt:()=>0,t:0,sit:0},a={id:"train",label:"train",flies:!1,hover:!1,level:"world",spot:r.at.slice(),seat:av.slice(),craft:Bu(o),phase:"idle",t:0,from:null,exit:null,sit:0};return o.ride=a,{stations:t,graph:i,speed:s,train:o,edges:n?.edges||[]}}function Bs(n){let e=n?.train?.state;return e==="boarding"||e==="enroute"||e==="alighting"}function uv(n){return n?.train?.pose||{x:0,y:0,z:0,h:0,ve:0,vn:0,vd:0}}function Kp(n){n.ride.spot=[n.pose.x,n.pose.y]}function hl(n,e,t=0){let i=es(e.h);n.pose.x=e.x,n.pose.y=e.y,n.pose.z=n.heightAt?n.heightAt(e.x,e.y):0,n.pose.h=e.h,n.pose.ve=-Math.sin(i)*t,n.pose.vn=Math.cos(i)*t,n.pose.vd=0,n.arc=e.s,Kp(n)}function hv(n,e,t){let i=e instanceof Set?e:new Set(e||[]);return(n?.stations||[]).filter(s=>s.id===t?!1:i.has(s.region)||i.has(s.id))}function fv(n,e,t){let i=n?.train;if(!i||Bs(n)||!t||t===i.stationId)return!1;let s=oP(n.graph,i.stationId,t);if(!s||s.points.length<2)return!1;let r=jp(s.points,0);return hl(i,r,0),i.destId=t,i.pathStations=s.stations,i.points=s.points,i.length=s.length,i.arc=0,i.hopOffAt=null,i.state="boarding",i.sit=0,Kp(i),i.ride.phase="idle",i.ride.sit=0,Ou(i.ride,e)?!0:(i.state="idle",i.destId=null,!1)}function dv(n){let e=n?.train;if(!e||e.state!=="enroute")return!1;let t=cP(n),i=aP(e.pathStations,t)||e.destId;return e.hopOffAt=i,!!i}function cP(n){let e=n.train,t=e.pathStations[0];for(let i of e.pathStations){let s=Vo(n.stations,i);s&&Zp(e.points,s)<=e.arc+.4&&(t=i)}return t}function uP(n,e,t){let i=n.train,s=Vo(n.stations,t)||Vo(n.stations,i.destId);if(s){let r=Zp(i.points,s);hl(i,jp(i.points,r),0)}i.stationId=s?.id||t||i.destId,i.state="alighting",i.ride.phase="flying",Kp(i),zo(e,Bu(i).parkPose(),i.seat),Fu(i.ride,e)}function pv(n,e,t){let i=n?.train;if(!i)return n;let s=i.ride;if(i.state==="idle"){i.sit=Math.max(0,i.sit-t*3),s.sit=i.sit;let r=Vo(n.stations,i.stationId);return r&&hl(i,{x:r.at[0],y:r.at[1],h:i.pose.h,s:0},0),n}if(i.state==="boarding"){s.t+=t;let r=Math.min(1,s.t/Vp),o=r*r*(3-2*r),a=Bu(i).parkPose(),l=a.z+(i.seat?.[2]??ul),c=s.from;return e.x=c.x+(a.x-c.x)*o,e.y=c.y+(a.y-c.y)*o,e.z=c.z+(l-c.z)*o+Math.sin(Math.PI*r)*.62,e.h=dr(c.h,a.h,420*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.min(1,Math.max(0,(r-.28)/.45)),s.sit=i.sit,r>=1&&(i.state="enroute",s.phase="flying",s.t=0,zo(e,a,i.seat),i.sit=1,s.sit=1),n}if(i.state==="enroute"){let r=Math.min(i.length,i.arc+i.speed*t),o=jp(i.points,r);hl(i,o,i.speed),zo(e,Bu(i).parkPose(),i.seat),i.sit=1,s.sit=1;let a=i.hopOffAt||i.destId,l=Vo(n.stations,a),c=l?Zp(i.points,l):i.length;return(i.arc>=c-.05||i.arc>=i.length-.05)&&uP(n,e,a),n}if(i.state==="alighting"){s.t+=t;let r=Math.min(1,s.t/Gp),o=r*r*(3-2*r),a=s.from,l=s.exit;if(e.x=a.x+(l.x-a.x)*o,e.y=a.y+(l.y-a.y)*o,e.z=a.z+(0-a.z)*o+Math.sin(Math.PI*r)*.5,e.h=dr(a.h,l.h,360*t),e.vx=0,e.vy=0,e.vz=0,i.sit=Math.max(0,1-r/.45),s.sit=i.sit,r>=1){i.state="idle",s.phase="idle",s.t=0,e.x=l.x,e.y=l.y,e.z=l.z,e.grounded=l.z<=0,e.vz=0,i.sit=0,s.sit=0,i.destId=null,i.hopOffAt=null,i.points=[],i.length=0,i.arc=0;let c=Vo(n.stations,i.stationId);c&&hl(i,{x:c.at[0],y:c.at[1],h:i.pose.h,s:0},0)}return n}return n}function Go(n,e,t,i){let s=null,r=1/0;for(let o of n){if(o.from!==e)continue;let a=(t-o.at[0])**2+(i-o.at[1])**2;a<=o.radius**2&&a<r&&(s=o,r=a)}return s}function Jp(n){return n?`${n.from}|${n.level}|${n.at[0]}|${n.at[1]}`:null}function mv(n,e,t,i,s){let r=Go(n,e,t,i),o=Jp(r);return o?r.auto===!1||o===s?{portal:null,latch:o}:{portal:r,latch:o}:{portal:null,latch:null}}var gv=.95,Qp=1.45,hP="notice_board";function yv(n,e,t,i,s=Qp){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e||!String(a.file||"").includes(hP))continue;let l=a.at;if(!l||l.length<2)continue;let c=(t-l[0])**2+(i-l[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function fP(n,e,t,i,s=Qp){let r=null,o=1/0;for(let a of n||[]){let l=a.spot;if(!l||l.level!==e)continue;let c=(t-l.at[0])**2+(i-l.at[1])**2;c<=s**2&&c<o&&(r=a,o=c)}return r}function em(n,e,t,i,s=Qp){let r=null,o=1/0;for(let a of n||[]){if((a.level||"world")!==e)continue;let l=a.radius??2,c=(t-a.at[0])**2+(i-a.at[1])**2;c<=(l+s)**2&&c<o&&(r=a,o=c)}return r}function xv({portals:n,level:e,x:t,y:i,npcs:s=[],pickups:r=[],soakZones:o=[],plotSign:a=null,income:l=null,noticeBoard:c=null,visibleNpcs:u=s,visiblePickups:h=r,vehicles:f=[],stations:d=[],fishSpot:p=null}){let x=Go(n,e,t,i);if(x)return{kind:"portal",verb:x.verb||"Go",portal:x};if(l)return{kind:"income",verb:`Collect ${Math.floor(l.bank)}`,building:l};if(a)return{kind:"plot",verb:`Buy ${a.price}`,plot:a};let y=lv(d,e,t,i);if(y)return{kind:"station",verb:"Board train",station:y};let g=Jx(f,e,t,i);if(g)return{kind:"vehicle",verb:`Ride ${g.label||"broom"}`,vehicle:g};let v=fP(u,e,t,i);if(v)return{kind:"npc",verb:"Talk",npc:v};if(c)return{kind:"bulletin",verb:"Read",board:c};let b=em(o,e,t,i);if(b)return{kind:"soak",verb:"Soak",zone:b};if(p)return{kind:"fish",verb:"Fish",spot:p};let _=dP(h,e,t,i);return _?{kind:"pickup",verb:"Collect",pickup:_}:null}function dP(n,e,t,i,s=gv){let r=null,o=1/0;for(let a of n||[]){if(a.level!==e)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function vv(n,e,t,i,s=gv){return n.filter(r=>{if(e.has(r.id))return!1;let o=t-r.spot[0],a=i-r.spot[1];return o*o+a*a<=s*s})}function zu(n){return String(n??"").replace(/[^\p{L}\p{N} '\-]/gu,"").replace(/\s+/g," ").trim().slice(0,16)}function fl(n){return n==="female"?"female":"male"}function tm(n){return{name:zu(n?.name),gender:fl(n?.gender)}}function Hu(n){return Number(n.coins)||0}function Zn(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return t?(n.coins=Hu(n)+t,t):0}function Wo(n,e){let t=Math.max(0,Math.floor(Number(e)||0));return Hu(n)<t?!1:(n.coins-=t,!0)}var pP=.9;function _v(n){return Array.isArray(n?.activities)?n.activities:[]}function mP(n){return Array.isArray(n.spots)&&n.spots.length?n.spots:Array.isArray(n.at)?[n.at]:[]}function bv(n,e,t,i,s=pP){let r=null,o=1/0;for(let a of n||[]){if(!a||a.level!==e)continue;let l=Number(a.radius)>0?Number(a.radius):s;for(let c of mP(a)){let u=(t-c[0])**2+(i-c[1])**2;u<=l*l&&u<o&&(o=u,r=a)}}return r}function Vu(n){return(!n.civic||typeof n.civic!="object")&&(n.civic={lessons:{},checkups:{}}),(!n.civic.lessons||typeof n.civic.lessons!="object")&&(n.civic.lessons={}),(!n.civic.checkups||typeof n.civic.checkups!="object")&&(n.civic.checkups={}),n.civic}function Mv(n){let e={lessons:{},checkups:{}};for(let t of["lessons","checkups"]){let i=n?.[t];if(!(!i||typeof i!="object"))for(let[s,r]of Object.entries(i))Number.isFinite(r)&&(e[t][s]=r)}return e}function gP(n){let e=Math.floor(Math.abs(n))*2654435761+1013904223>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Sv(n,e,t=3){let i=(n||[]).filter(o=>o&&typeof o.q=="string"&&Array.isArray(o.answers)&&o.answers.length>1),s=gP(e),r=i.map((o,a)=>({q:o,k:s()+a*1e-9})).sort((o,a)=>o.k-a.k).map(o=>o.q);return r.slice(0,Math.max(0,Math.min(t,r.length)))}function wv(n,e){return Number.isInteger(n?.correct)&&n.correct===e}function Ev(n,e,t){return Vu(n).lessons[e.id]!==t}function Tv(n,e,t,i,s){let r=Vu(n);if(r.lessons[e.id]===s)return{coins:0,sticker:null};r.lessons[e.id]=s;let o=Zn(n,Math.max(0,t)*(Number(e.reward_per_correct)||0)),a=null,l=e.sticker;return l&&i>0&&t===i&&(n.inventory=Array.isArray(n.inventory)?n.inventory:[],n.inventory.includes(l)||(n.inventory.push(l),a=l)),{coins:o,sticker:a}}function nm(n,e){return e.clothing?(n.clothes?.owned||[]).includes(e.clothing):e.item?(n.inventory||[]).includes(e.item):!1}function Av(n,e){return!e||!(Number(e.price)>=0)?{ok:!1,reason:"invalid"}:nm(n,e)?{ok:!1,reason:"owned"}:Wo(n,e.price)?(e.potion?(n.potions=n.potions||{found:[],bag:{}},n.potions.bag={...n.potions.bag||{},[e.potion]:(n.potions.bag?.[e.potion]||0)+1}):e.clothing?(n.clothes=n.clothes||{owned:[],wearing:[]},n.clothes.owned=[...n.clothes.owned||[],e.clothing]):e.item&&(n.inventory=[...n.inventory||[],e.item]),{ok:!0,reason:null}):{ok:!1,reason:"coins"}}function Cv(n,e){return(Number(n)||0)*24+(Number(e)||0)}function im(n,e,t){let i=Vu(n).checkups[e.id],s=Number(e.cooldown_hours)||0;return Number.isFinite(i)?Math.max(0,s-(t-i)):0}function Rv(n,e,t){return im(n,e,t)>0?null:(Vu(n).checkups[e.id]=t,{potion:e.buff||null,seconds:Number(e.seconds)||0})}function Pv(n,e){return!e||typeof e!="object"?!1:!!(e.quest_done&&(n.quests?.done||[]).includes(e.quest_done)||e.has_item&&(n.inventory||[]).includes(e.has_item))}var Iv={bounce:{hopMul:1.9,speedMul:1,gravMul:1,glow:!1},swift:{hopMul:1,speedMul:1.75,gravMul:1,glow:!1},glow:{hopMul:1,speedMul:1.08,gravMul:1,glow:!0},float:{hopMul:1.35,speedMul:1.12,gravMul:.38,glow:!0},hex_frog:{hopMul:1,speedMul:1,gravMul:1,glow:!0,hex:"frog"}},yP=8;var xP=.8;function hi(n,e){return(n?.kinds||[]).find(t=>t.id===e)||null}function vP(){return{found:[],bag:{}}}function Lv(n){let e=Array.isArray(n?.found)?[...new Set(n.found.filter(i=>typeof i=="string"))]:[],t={};if(n?.bag&&typeof n.bag=="object")for(let[i,s]of Object.entries(n.bag)){let r=Math.floor(Number(s));r>0&&(t[i]=r)}return{found:e,bag:t}}function qo(n){return new Set(n?.potions?.found||[])}function sm(n,e){return n?.potions?.bag?.[e]||0}function Dv(n,e,t,i,s,r=.95){return(n||[]).filter(o=>{if(e.has(o.id)||(o.level||"world")!==t)return!1;let a=i-o.at[0],l=s-o.at[1];return a*a+l*l<=r*r})}function Nv(n,e){if(!e?.id||!e.potion)return!1;let t=n.potions||(n.potions=vP());return t.found.includes(e.id)?!1:(t.found=[...t.found,e.id],t.bag={...t.bag,[e.potion]:(t.bag[e.potion]||0)+1},!0)}function kv(n,e,t,i){let s=hi(t,i);if(!s||sm(n,i)<1)return!1;let r={...n.potions.bag||{}};return r[i]-=1,r[i]<=0&&delete r[i],n.potions.bag=r,Iv[s.effect]?.hex==="frog"?(e.cast={effect:"frog",left:xP},e.buff=null,e.glowColor=s.color||"#3cb371"):(e.cast=null,e.buff={id:i,left:s.duration},dl(e,t)),!0}function rm(n,e,t,i,s=yP){return(n||[]).filter(r=>{if(!r||(r.level||"world")!==i)return!1;let o=e-r.x,a=t-r.y;return o*o+a*a<=s*s})}function dl(n,e){n.speedMul=1,n.hopMul=1,n.gravMul=1,n.glowColor=null;let t=n.buff;if(!t)return;let i=hi(e,t.id),s=Iv[i?.effect];s&&(n.speedMul=s.speedMul,n.hopMul=s.hopMul,n.gravMul=s.gravMul,s.glow&&(n.glowColor=i.color||"#c9a0ff"))}function Uv(n,e){return n.cast?(n.cast.left-=e,n.cast.left>0?!0:(n.cast=null,n.buff||(n.glowColor=null),!1)):!1}function Ov(n,e,t){return n.buff?(n.buff.left-=t,n.buff.left>0?(dl(n,e),!1):(n.buff=null,dl(n,e),!0)):!1}var Fv=["japan_korea","china","mainland_se_asia","maritime_se_asia","south_asia","middle_east","north_africa","sahel","west_africa","east_africa","southern_africa","western_europe","eastern_europe","nordic","north_america","mesoamerica","andes","amazon_brazil","southern_cone","caribbean","oceania_pacific","australia","central_asia","arctic"],oU=new Set(Fv),Gu={japan_korea:{label:"Japan & Korea",ground:"#5a7a5c",architecture:{style:"tiled hip house",roofShape:"hip_tile",wallColor:"#f2ebe0",roofColor:"#3a3530",trimColor:"#2c4a3a",width:2.2,depth:2,height:1.55,eaves:.28},plants:[{name:"cherry",color:"#f4a0b8"},{name:"bamboo",color:"#6fbf6a"},{name:"pine",color:"#2f6b45"},{name:"maple",color:"#c45a3a"}],animals:[{name:"crane",shape:"bird",color:"#e8eef4"},{name:"tanuki",shape:"quad",color:"#8b5a3c"},{name:"koi",shape:"fish",color:"#e07040"}],trees:["v_tree_pine.glb","v_tree_willow.glb"]},china:{label:"China",ground:"#6a8a58",architecture:{style:"courtyard",roofShape:"pagoda_eave",wallColor:"#f0e6d2",roofColor:"#8b1e1e",trimColor:"#c9a227",width:2.6,depth:2.2,height:1.7,eaves:.35},plants:[{name:"bamboo",color:"#5fad55"},{name:"lotus",color:"#e8a0c0"},{name:"ginkgo",color:"#d4c04a"},{name:"osmanthus",color:"#e8d070"}],animals:[{name:"panda",shape:"quad",color:"#2a2a2a"},{name:"crane",shape:"bird",color:"#f0f4f8"},{name:"carp",shape:"fish",color:"#d05040"}],trees:["v_tree_willow.glb","v_tree_oak.glb"]},mainland_se_asia:{label:"Mainland Southeast Asia",ground:"#3f7a48",architecture:{style:"stilt house",roofShape:"thatch_steep",wallColor:"#d8c49a",roofColor:"#8a6a38",trimColor:"#5a4030",width:2.4,depth:1.9,height:1.35,stilts:.55,eaves:.3},plants:[{name:"bamboo",color:"#5fad55"},{name:"banana leaf",color:"#4a9a40"},{name:"frangipani",color:"#f5e6a8"},{name:"rice grass",color:"#8fbf60"}],animals:[{name:"elephant",shape:"large",color:"#7a7a7a"},{name:"water buffalo",shape:"quad",color:"#4a4540"},{name:"hornbill",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_oak.glb","tree.glb"]},maritime_se_asia:{label:"Maritime Southeast Asia",ground:"#2f6e4a",architecture:{style:"stilt house",roofShape:"saddle_thatch",wallColor:"#c9a878",roofColor:"#6b4a28",trimColor:"#3d2a18",width:2.5,depth:1.8,height:1.25,stilts:.65,eaves:.32},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"banana leaf",color:"#4a9a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"orangutan",shape:"quad",color:"#b06030"},{name:"hornbill",shape:"bird",color:"#1a1a1a"},{name:"monitor lizard",shape:"lizard",color:"#5a7040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},south_asia:{label:"South Asia",ground:"#8a9a55",architecture:{style:"courtyard",roofShape:"flat_dome",wallColor:"#e8c878",roofColor:"#c45a28",trimColor:"#8b4510",width:2.5,depth:2.3,height:1.6,eaves:.15},plants:[{name:"banyan",color:"#3d6b3a"},{name:"neem",color:"#4a8040"},{name:"marigold",color:"#f0a020"},{name:"lotus",color:"#e8a0c0"}],animals:[{name:"peacock",shape:"bird",color:"#2a6a8a"},{name:"elephant",shape:"large",color:"#6a6a6a"},{name:"langur",shape:"quad",color:"#7a7080"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},middle_east:{label:"Middle East",ground:"#c9b07a",architecture:{style:"courtyard",roofShape:"flat",wallColor:"#e8dcc8",roofColor:"#d4c4a8",trimColor:"#8a6a40",width:2.4,depth:2.4,height:1.7,eaves:.08},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"pomegranate",color:"#a03030"},{name:"fig",color:"#508040"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"falcon",shape:"bird",color:"#6a5038"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_rock.glb","stone.glb"]},north_africa:{label:"North Africa",ground:"#d2b896",architecture:{style:"adobe",roofShape:"flat",wallColor:"#f5efe6",roofColor:"#e0d4c0",trimColor:"#2a6a6a",width:2.3,depth:2.1,height:1.65,eaves:.06},plants:[{name:"date palm",color:"#4a7a40"},{name:"olive",color:"#6a8040"},{name:"cactus",color:"#4a8048"},{name:"alfalfa",color:"#6a9a40"}],animals:[{name:"camel",shape:"large",color:"#c4a060"},{name:"fennec",shape:"quad",color:"#e8c878"},{name:"barbary macaque",shape:"quad",color:"#8a7060"}],trees:["v_rock.glb","stone.glb"]},sahel:{label:"Sahel",ground:"#c4a35a",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#c9a070",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"baobab",color:"#6a5a40"},{name:"acacia",color:"#8a9a40"},{name:"millet",color:"#c4a040"},{name:"desert bloom",color:"#e07090"}],animals:[{name:"giraffe",shape:"tall",color:"#c49050"},{name:"ostrich",shape:"bird",color:"#5a4030"},{name:"gazelle",shape:"quad",color:"#b89060"}],trees:["v_tree_oak.glb","v_rock.glb"]},west_africa:{label:"West Africa",ground:"#6a8a48",architecture:{style:"courtyard",roofShape:"thatch_hip",wallColor:"#d4a878",roofColor:"#6a5030",trimColor:"#8b3a2a",width:2.3,depth:2.2,height:1.45,eaves:.25},plants:[{name:"baobab",color:"#6a5a40"},{name:"oil palm",color:"#3d7a40"},{name:"hibiscus",color:"#d03050"},{name:"tall grass",color:"#8fbf50"}],animals:[{name:"lion",shape:"quad",color:"#c49040"},{name:"hornbill",shape:"bird",color:"#2a2a2a"},{name:"chimpanzee",shape:"quad",color:"#4a3020"}],trees:["v_tree_oak.glb","tree.glb"]},east_africa:{label:"East Africa",ground:"#a89050",architecture:{style:"longhouse",roofShape:"cone_thatch",wallColor:"#c9a878",roofColor:"#7a5a28",trimColor:"#4a3020",width:2.1,depth:2.1,height:1.35,eaves:.22},plants:[{name:"acacia",color:"#8a9a40"},{name:"baobab",color:"#6a5a40"},{name:"coffee shrub",color:"#3d6a35"},{name:"tall grass",color:"#9ab050"}],animals:[{name:"zebra",shape:"quad",color:"#e8e8e8"},{name:"flamingo",shape:"bird",color:"#f08090"},{name:"giraffe",shape:"tall",color:"#c49050"}],trees:["v_tree_oak.glb","tree.glb"]},southern_africa:{label:"Southern Africa",ground:"#b09a58",architecture:{style:"adobe",roofShape:"cone_thatch",wallColor:"#e0c8a0",roofColor:"#8a6a30",trimColor:"#5a4030",width:2,depth:2,height:1.4,eaves:.2},plants:[{name:"aloe",color:"#4a8048"},{name:"acacia",color:"#8a9a40"},{name:"protea",color:"#c04060"},{name:"fynbos",color:"#6a8050"}],animals:[{name:"springbok",shape:"quad",color:"#c4a060"},{name:"meerkat",shape:"upright",color:"#b08050"},{name:"secretary bird",shape:"bird",color:"#c8c0a8"}],trees:["v_tree_oak.glb","v_rock.glb"]},western_europe:{label:"Western Europe",ground:"#4a7c59",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8e0d0",roofColor:"#5a4a48",trimColor:"#3a2a20",width:2.1,depth:1.9,height:1.75,eaves:.2},plants:[{name:"oak",color:"#3d6b3a"},{name:"lavender",color:"#8a70b0"},{name:"grapevine",color:"#4a7040"},{name:"rose",color:"#d04060"}],animals:[{name:"fox",shape:"quad",color:"#c06030"},{name:"sparrow",shape:"bird",color:"#6a5a50"},{name:"hedgehog",shape:"round",color:"#6a5040"}],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},eastern_europe:{label:"Eastern Europe",ground:"#4a7050",architecture:{style:"timber frame",roofShape:"steep_gable",wallColor:"#e8d8c0",roofColor:"#8b2a2a",trimColor:"#2a4a6a",width:2.15,depth:1.95,height:1.7,eaves:.22},plants:[{name:"birch",color:"#d8d0c0"},{name:"sunflower",color:"#f0c020"},{name:"wheat",color:"#d4b050"},{name:"linden",color:"#4a8040"}],animals:[{name:"stork",shape:"bird",color:"#f0f0f0"},{name:"wolf",shape:"quad",color:"#6a6a6a"},{name:"deer",shape:"quad",color:"#8a6040"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},nordic:{label:"Nordic",ground:"#3d5c4a",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#5a4030",roofColor:"#3d5a40",trimColor:"#2a2018",width:2.8,depth:1.6,height:1.5,eaves:.18},plants:[{name:"pine",color:"#2f5a3a"},{name:"lingonberry",color:"#a03040"},{name:"birch",color:"#d8d0c0"},{name:"lichen",color:"#a8b070"}],animals:[{name:"moose",shape:"large",color:"#5a4030"},{name:"reindeer",shape:"quad",color:"#8a6a48"},{name:"puffin",shape:"bird",color:"#2a2a2a"}],trees:["v_tree_pine.glb","tree.glb"]},north_america:{label:"North America",ground:"#4a7a50",architecture:{style:"timber frame",roofShape:"clapboard_gable",wallColor:"#f0ebe4",roofColor:"#5a3030",trimColor:"#2a4050",width:2.3,depth:2,height:1.65,eaves:.2},plants:[{name:"maple",color:"#c45a3a"},{name:"pine",color:"#2f5a3a"},{name:"goldenrod",color:"#e0b030"},{name:"oak",color:"#3d6b3a"}],animals:[{name:"deer",shape:"quad",color:"#8a6040"},{name:"raccoon",shape:"quad",color:"#5a5a5a"},{name:"blue jay",shape:"bird",color:"#3a6aaa"}],trees:["v_tree_oak.glb","v_tree_pine.glb","tree.glb"]},mesoamerica:{label:"Mesoamerica",ground:"#6a8a48",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#e8d0a8",roofColor:"#a05030",trimColor:"#2a6a6a",width:2.2,depth:2,height:1.55,eaves:.18},plants:[{name:"agave",color:"#5a8a50"},{name:"cactus",color:"#4a8048"},{name:"ceiba",color:"#3d6b3a"},{name:"marigold",color:"#f0a020"}],animals:[{name:"jaguar",shape:"quad",color:"#c08030"},{name:"quetzal",shape:"bird",color:"#2a8a50"},{name:"iguana",shape:"lizard",color:"#5a8040"}],trees:["v_tree_oak.glb","tree.glb"]},andes:{label:"Andes",ground:"#7a8a60",architecture:{style:"adobe",roofShape:"tile_gable",wallColor:"#d4c0a0",roofColor:"#8a4030",trimColor:"#5a4030",width:2.15,depth:1.95,height:1.5,eaves:.16},plants:[{name:"quinoa",color:"#c4a050"},{name:"cactus",color:"#4a8048"},{name:"ichu grass",color:"#b0a060"},{name:"cantuta",color:"#e04050"}],animals:[{name:"llama",shape:"tall",color:"#c8b090"},{name:"condor",shape:"bird",color:"#2a2a2a"},{name:"vicu\xF1a",shape:"quad",color:"#c4a070"}],trees:["v_rock.glb","v_tree_oak.glb"]},amazon_brazil:{label:"Amazon & Brazil",ground:"#2d6a3e",architecture:{style:"stilt house",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:2.3,depth:1.9,height:1.2,stilts:.5,eaves:.28},plants:[{name:"rubber tree",color:"#3d6b3a"},{name:"bromeliad",color:"#d04060"},{name:"a\xE7a\xED palm",color:"#3d7a40"},{name:"orchid",color:"#c070d0"}],animals:[{name:"capybara",shape:"round",color:"#8a6a48"},{name:"toucan",shape:"bird",color:"#2a2a2a"},{name:"jaguar",shape:"quad",color:"#c08030"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},southern_cone:{label:"Southern Cone",ground:"#5a8a58",architecture:{style:"courtyard",roofShape:"tile_gable",wallColor:"#f0ebe4",roofColor:"#8a4030",trimColor:"#2a4a6a",width:2.25,depth:2.05,height:1.6,eaves:.2},plants:[{name:"omb\xFA",color:"#3d6b3a"},{name:"yerba mate",color:"#4a7040"},{name:"pampas grass",color:"#d8c890"},{name:"jacaranda",color:"#7a60b0"}],animals:[{name:"guanaco",shape:"tall",color:"#c4a070"},{name:"rhea",shape:"bird",color:"#8a7a60"},{name:"armadillo",shape:"round",color:"#8a7a60"}],trees:["v_tree_oak.glb","v_tree_willow.glb"]},caribbean:{label:"Caribbean",ground:"#5a9e7a",architecture:{style:"stilt house",roofShape:"hip_tile",wallColor:"#f0e8d0",roofColor:"#c04040",trimColor:"#2a6a8a",width:2.2,depth:1.9,height:1.4,stilts:.35,eaves:.25},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"hibiscus",color:"#e04060"},{name:"sea grape",color:"#4a8040"},{name:"banana leaf",color:"#4a9a40"}],animals:[{name:"parrot",shape:"bird",color:"#2a8a40"},{name:"iguana",shape:"lizard",color:"#5a8040"},{name:"hummingbird",shape:"bird",color:"#2a8a8a"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},oceania_pacific:{label:"Oceania & Pacific",ground:"#4a8a68",architecture:{style:"longhouse",roofShape:"palm_thatch",wallColor:"#c9a878",roofColor:"#6a8a40",trimColor:"#4a3020",width:3,depth:1.5,height:1.3,stilts:.4,eaves:.3},plants:[{name:"coconut palm",color:"#3d8a45"},{name:"breadfruit",color:"#4a8040"},{name:"hibiscus",color:"#e04060"},{name:"kelp-side grass",color:"#5a8a60"}],animals:[{name:"fruit bat",shape:"bird",color:"#4a3a30"},{name:"gecko",shape:"lizard",color:"#7a9a40"},{name:"parrot",shape:"bird",color:"#d04040"}],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]},australia:{label:"Australia",ground:"#c4a868",architecture:{style:"timber frame",roofShape:"verandah_gable",wallColor:"#e8e0d0",roofColor:"#6a7070",trimColor:"#3a4a50",width:2.4,depth:2.1,height:1.55,eaves:.35},plants:[{name:"eucalyptus",color:"#6a8a58"},{name:"wattle",color:"#e8c030"},{name:"spinifex",color:"#b0a050"},{name:"bottlebrush",color:"#c03040"}],animals:[{name:"kangaroo",shape:"upright",color:"#a07040"},{name:"emu",shape:"bird",color:"#4a4038"},{name:"koala",shape:"round",color:"#8a8a80"}],trees:["v_tree_oak.glb","v_rock.glb"]},central_asia:{label:"Central Asia",ground:"#b0a068",architecture:{style:"adobe",roofShape:"flat_dome",wallColor:"#e0d0b0",roofColor:"#a05040",trimColor:"#6a4030",width:2.3,depth:2.3,height:1.55,eaves:.1},plants:[{name:"saxaul",color:"#6a7050"},{name:"tulip",color:"#d03040"},{name:"wormwood",color:"#8a9a60"},{name:"apricot",color:"#e8a040"}],animals:[{name:"snow leopard",shape:"quad",color:"#c0b090"},{name:"saiga",shape:"quad",color:"#b09060"},{name:"eagle",shape:"bird",color:"#5a4030"}],trees:["v_rock.glb","v_tree_oak.glb"]},arctic:{label:"Arctic",ground:"#dce6ef",architecture:{style:"longhouse",roofShape:"sod_gable",wallColor:"#d0c8b8",roofColor:"#6a7a70",trimColor:"#3a4038",width:2.5,depth:1.7,height:1.25,eaves:.15},plants:[{name:"arctic willow",color:"#8a9a80"},{name:"reindeer moss",color:"#c0c890"},{name:"tundra flower",color:"#d080a0"},{name:"ice lichen",color:"#a8b8a0"}],animals:[{name:"arctic fox",shape:"quad",color:"#e8e8e8"},{name:"seal",shape:"round",color:"#4a5058"},{name:"ptarmigan",shape:"bird",color:"#d8d8d0"}],trees:["v_rock.glb","stone.glb"]}},om={JP:"japan_korea",KR:"japan_korea",KP:"japan_korea",CN:"china",MN:"china",TH:"mainland_se_asia",VN:"mainland_se_asia",LA:"mainland_se_asia",KH:"mainland_se_asia",MM:"mainland_se_asia",ID:"maritime_se_asia",MY:"maritime_se_asia",SG:"maritime_se_asia",BN:"maritime_se_asia",PH:"maritime_se_asia",TL:"maritime_se_asia",IN:"south_asia",PK:"south_asia",BD:"south_asia",NP:"south_asia",BT:"south_asia",LK:"south_asia",MV:"south_asia",AF:"south_asia",SA:"middle_east",AE:"middle_east",IQ:"middle_east",IR:"middle_east",JO:"middle_east",SY:"middle_east",LB:"middle_east",IL:"middle_east",PS:"middle_east",KW:"middle_east",QA:"middle_east",BH:"middle_east",OM:"middle_east",YE:"middle_east",TR:"middle_east",CY:"middle_east",MA:"north_africa",DZ:"north_africa",TN:"north_africa",LY:"north_africa",EG:"north_africa",SD:"north_africa",ML:"sahel",NE:"sahel",TD:"sahel",BF:"sahel",MR:"sahel",NG:"west_africa",GH:"west_africa",CI:"west_africa",SN:"west_africa",GN:"west_africa",LR:"west_africa",SL:"west_africa",BJ:"west_africa",TG:"west_africa",GW:"west_africa",CV:"west_africa",GM:"west_africa",KE:"east_africa",TZ:"east_africa",UG:"east_africa",ET:"east_africa",RW:"east_africa",BI:"east_africa",SO:"east_africa",DJ:"east_africa",ER:"east_africa",SS:"east_africa",KM:"east_africa",SC:"east_africa",MG:"east_africa",MU:"east_africa",ZA:"southern_africa",NA:"southern_africa",BW:"southern_africa",ZW:"southern_africa",ZM:"southern_africa",MW:"southern_africa",MZ:"southern_africa",SZ:"southern_africa",LS:"southern_africa",AO:"southern_africa",FR:"western_europe",DE:"western_europe",BE:"western_europe",NL:"western_europe",LU:"western_europe",CH:"western_europe",AT:"western_europe",GB:"western_europe",IE:"western_europe",PT:"western_europe",ES:"western_europe",IT:"western_europe",AD:"western_europe",MC:"western_europe",SM:"western_europe",LI:"western_europe",VA:"western_europe",MT:"western_europe",GR:"western_europe",PL:"eastern_europe",CZ:"eastern_europe",SK:"eastern_europe",HU:"eastern_europe",RO:"eastern_europe",BG:"eastern_europe",RS:"eastern_europe",BA:"eastern_europe",HR:"eastern_europe",SI:"eastern_europe",ME:"eastern_europe",MK:"eastern_europe",AL:"eastern_europe",MD:"eastern_europe",UA:"eastern_europe",BY:"eastern_europe",RU:"eastern_europe",SE:"nordic",NO:"nordic",FI:"nordic",DK:"nordic",IS:"nordic",EE:"nordic",LV:"nordic",LT:"nordic",US:"north_america",CA:"north_america",MX:"mesoamerica",GT:"mesoamerica",BZ:"mesoamerica",HN:"mesoamerica",SV:"mesoamerica",NI:"mesoamerica",CR:"mesoamerica",PA:"mesoamerica",PE:"andes",BO:"andes",EC:"andes",CL:"andes",BR:"amazon_brazil",GY:"amazon_brazil",SR:"amazon_brazil",VE:"amazon_brazil",CO:"amazon_brazil",AR:"southern_cone",UY:"southern_cone",PY:"southern_cone",CU:"caribbean",JM:"caribbean",HT:"caribbean",DO:"caribbean",BS:"caribbean",BB:"caribbean",AG:"caribbean",DM:"caribbean",GD:"caribbean",KN:"caribbean",LC:"caribbean",VC:"caribbean",TT:"caribbean",FJ:"oceania_pacific",PG:"oceania_pacific",SB:"oceania_pacific",VU:"oceania_pacific",WS:"oceania_pacific",TO:"oceania_pacific",KI:"oceania_pacific",MH:"oceania_pacific",FM:"oceania_pacific",NR:"oceania_pacific",PW:"oceania_pacific",TV:"oceania_pacific",NZ:"oceania_pacific",AU:"australia",KZ:"central_asia",UZ:"central_asia",TM:"central_asia",TJ:"central_asia",KG:"central_asia",AM:"central_asia",AZ:"central_asia",GE:"central_asia",CM:"west_africa",CF:"west_africa",CG:"west_africa",CD:"west_africa",GA:"west_africa",GQ:"west_africa",ST:"west_africa"};function am(n){let e=String(n?.iso||"").toUpperCase();if(om[e])return om[e];let t=Number(n?.lat)||0,i=Number(n?.lon)||0;return Math.abs(t)>=66?"arctic":i>=100&&i<=150&&t>=20&&t<=50?"china":i>=120&&i<=150&&t>=30&&t<=46?"japan_korea":i>=95&&i<=110&&t>=5&&t<=25?"mainland_se_asia":i>=95&&i<=140&&t>=-12&&t<=15?"maritime_se_asia":i>=60&&i<=95&&t>=5&&t<=40?"south_asia":i>=30&&i<=65&&t>=12&&t<=42?"middle_east":i>=-20&&i<=40&&t>=20&&t<=38?"north_africa":i>=-20&&i<=40&&t>=8&&t<=20?"sahel":i>=-20&&i<=20&&t>=-5&&t<=15?"west_africa":i>=20&&i<=50&&t>=-15&&t<=15?"east_africa":i>=10&&i<=40&&t>=-35&&t<=-15?"southern_africa":i>=-15&&i<=20&&t>=35&&t<=60?"western_europe":i>=15&&i<=50&&t>=40&&t<=65?"eastern_europe":i>=-30&&i<=35&&t>=54?"nordic":i>=-130&&i<=-50&&t>=25?"north_america":i>=-120&&i<=-80&&t>=5&&t<=30?"mesoamerica":i>=-85&&i<=-60&&t>=-25&&t<=5?"andes":i>=-75&&i<=-30&&t>=-35&&t<=10?"amazon_brazil":i>=-75&&i<=-45&&t>=-56&&t<=-20?"southern_cone":i>=110&&i<=180&&t>=-50&&t<=0?"oceania_pacific":i>=110&&i<=155&&t>=-45&&t<=-10?"australia":i>=-90&&i<=-55&&t>=10&&t<=28?"caribbean":i>=45&&i<=90&&t>=35&&t<=55?"central_asia":"western_europe"}var bP=["tropical_rainforest","savanna","desert","temperate_forest","mediterranean","boreal","tundra","polar","island"],uU=new Set(bP),MP={tropical_rainforest:{label:"Tropical rainforest",ground:"#2d6a3e",plants:["fern","orchid","banana leaf"],animals:["toucan","capybara","butterfly"],trees:["v_tree_oak.glb","tree.glb"]},savanna:{label:"Savanna",ground:"#c4a35a",plants:["acacia scrub","tall grass","baobab seedling"],animals:["gazelle","lion cub","ostrich"],trees:["v_tree_oak.glb","tree.glb"]},desert:{label:"Desert",ground:"#d4b896",plants:["cactus","desert bloom","sagebrush"],animals:["lizard","camel calf","fennec"],trees:["v_rock.glb","stone.glb"]},temperate_forest:{label:"Temperate forest",ground:"#4a7c59",plants:["oak leaf","wild berry","moss"],animals:["deer","fox","squirrel"],trees:["v_tree_oak.glb","v_tree_willow.glb","tree.glb"]},mediterranean:{label:"Mediterranean",ground:"#8fa86a",plants:["olive sprig","lavender","cypress cone"],animals:["goat","lizard","sparrow"],trees:["v_tree_oak.glb","v_tree_willow.glb"]},boreal:{label:"Boreal",ground:"#3d5c4a",plants:["pine needle","lichen","blueberry"],animals:["moose","wolf","owl"],trees:["v_tree_pine.glb","tree.glb"]},tundra:{label:"Tundra",ground:"#9aa7a0",plants:["arctic willow","reindeer moss","tundra flower"],animals:["reindeer","arctic fox","ptarmigan"],trees:["v_rock.glb","stone.glb"]},polar:{label:"Polar",ground:"#dce6ef",plants:["ice lichen","snow moss","polar blossom"],animals:["penguin","seal","snow petrel"],trees:["v_rock.glb","stone.glb"]},island:{label:"Island",ground:"#5a9e7a",plants:["coconut palm","hibiscus","sea grape"],animals:["parrot","crab","dolphin"],trees:["v_tree_oak.glb","tree.glb","v_reeds.glb"]}};function SP(n){let e=String(n||"tree.glb").replace(/^village\//,"");return e.startsWith("v_")?`village/${e}`:e}var Bv=[{id:"home",role:"home"},{id:"hall",role:"hall"},{id:"cafe",role:"cafe"},{id:"station",role:"station"}],zv={home:{w:1,d:1,h:1},hall:{w:1.25,d:1.15,h:1.15},cafe:{w:.95,d:.9,h:.95},station:{w:1.15,d:1.05,h:1.05}};function lm(n){let e=String(n||"").toUpperCase(),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return t>>>0}function Hv(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function wP(n,e=0,t=""){let i=Math.abs(Number(n)||0),s=Hv(lm(t||`${n},${e}`));if(new Set(["AG","BS","BB","CV","KM","CU","CY","DM","DO","FJ","GD","HT","IS","JM","KI","MV","MT","MH","MU","FM","NR","PW","KN","LC","VC","WS","ST","SC","SG","SB","TO","TT","TV","VU","MG","LK","PH","ID","JP","NZ","GB","IE","SR","GY","BZ"]).has(String(t).toUpperCase())&&i<55&&s()<.72)return"island";if(i>=72)return"polar";if(i>=60)return s()<.55?"tundra":"boreal";if(i>=50)return s()<.65?"boreal":"temperate_forest";if(i>=35){let o=s();return o<.4?"mediterranean":o<.85?"temperate_forest":"desert"}if(i>=15){let o=s();return o<.4?"savanna":o<.7?"desert":"tropical_rainforest"}return s()<.55?"tropical_rainforest":"savanna"}function cm(n){let e=String(n?.iso||"XX").toUpperCase(),t=Number(n?.lat)||0,i=Number(n?.lon)||0,s=wP(t,i,e),r=MP[s],o=am(n),a=Gu[o]||Gu.western_europe,l=a.architecture,c=Hv(lm(e)),u=Bv.map((S,L)=>{let N=L/Bv.length*Math.PI*2+c()*.4,z=4.5+c()*2.5,G=zv[S.role]||zv.home;return{id:S.id,role:S.role,procedural:!0,style:l.style,roofShape:l.roofShape,wallColor:l.wallColor,roofColor:l.roofColor,trimColor:l.trimColor,width:l.width*G.w*(.92+c()*.16),depth:l.depth*G.d*(.92+c()*.16),height:l.height*G.h*(.94+c()*.12),stilts:l.stilts||0,eaves:l.eaves||.15,at:[Math.cos(N)*z,Math.sin(N)*z,0],h:c()*360|0}}),h=[],f=(a.trees?.length?a.trees:r.trees)||["tree.glb"],d=6+(c()*6|0),p=a.plants[c()*a.plants.length|0]?.color||"#4a7c59";for(let S=0;S<d;S++){let L=c()*Math.PI*2,N=8+c()*10;h.push({file:SP(f[c()*f.length|0]),at:[Math.cos(L)*N,Math.sin(L)*N,0],h:c()*360|0,s:.85+c()*.4,tint:p})}let x=a.plants,y=a.animals,g=x[c()*x.length|0],v=y[c()*y.length|0],b=[],_=4+(c()*3|0);for(let S=0;S<_;S++){let L=x[S%x.length],N=c()*Math.PI*2,z=2.5+c()*7;b.push({id:S===0?`plant_${e}`:`plant_${e}_${S}`,label:L.name,color:L.color,at:[Math.cos(N)*z,Math.sin(N)*z,.15],quest:S===0})}let R=[{id:`animal_${e}`,label:v.name,color:v.color,shape:v.shape,at:[Math.cos(c()*Math.PI*2)*(5+c()*5),Math.sin(c()*Math.PI*2)*(5+c()*5),.2],quest:!0}],M=[],T=Math.min(3,Math.max(2,y.length));for(let S=0;S<T;S++){let L=y[S%y.length];M.push({id:`wander_${e}_${S}`,label:L.name,color:L.color,shape:L.shape,at:[(c()-.5)*16,(c()-.5)*16,.15],speed:.45+c()*.55,phase:c()*Math.PI*2})}let I=["Elder Momo","Elder Pip","Elder Juniper","Elder Sora","Elder Coco"],E={id:`elder_${e}`,name:I[(lm(e)+3)%I.length],at:[.5+c(),-1.2+c()*.5,0]};return{iso:e,biome:s,biomeLabel:r.label,culture:o,cultureLabel:a.label,architecture:{...l},ground:a.ground||r.ground,buildings:u,trees:h,plants:b,animals:R,creatures:M,elder:E,plant:g.name,animal:v.name}}function $o(n,e){let t=String(n?.iso||"XX").toUpperCase(),i=n?.name||t,s=e||cm(n),r=s.elder.id,o=s.plants[0].id,a=s.animals[0].id;return{quests:[{id:`w_${t}_welcome`,title:`Welcome to ${i}`,giver:r,intro:`${s.elder.name} waves you into the village.`,outro:`You found your footing in ${i}.`,reward:{coins:5},steps:[{type:"visit",region:`village_${t}`},{type:"talk",npc:r}]},{id:`w_${t}_nature`,title:`${s.cultureLabel||s.biomeLabel} walk`,giver:r,intro:`Seek the ${s.plant} and watch for a ${s.animal} in this ${s.architecture?.style||"village"}.`,outro:`You know the wilds of ${i} a little better.`,reward:{coins:8},requires:[`w_${t}_welcome`],steps:[{type:"find",item:o,label:s.plant},{type:"find",item:a,label:s.animal},{type:"talk",npc:r}]}]}}function Wu(){return{iso:null,quests:{active:[],done:[],tracked:null,progress:{}}}}function fi(n){return(!n.world||typeof n.world!="object")&&(n.world=Wu()),(!n.world.quests||typeof n.world.quests!="object")&&(n.world.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.world.quests.active)||(n.world.quests.active=[]),Array.isArray(n.world.quests.done)||(n.world.quests.done=[]),(!n.world.quests.progress||typeof n.world.quests.progress!="object")&&(n.world.quests.progress={}),n.world}function Vv(n,e,t){let i=fi(n);i.iso=String(e.iso).toUpperCase();let s=$o(e,t),r=i.quests;for(let a of s.quests)r.done.includes(a.id)||r.active.includes(a.id)||(a.requires&&!a.requires.every(c=>r.done.includes(c))&&a.requires.every(c=>r.done.includes(c)||r.active.includes(c)),!(!(a.requires||[]).length||(a.requires||[]).every(c=>r.done.includes(c))))||(r.active.push(a.id),r.progress[a.id]={step:0,counts:{}},r.tracked||(r.tracked=a.id));let o=s.quests[0];return!r.done.includes(o.id)&&!r.active.includes(o.id)&&(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked=o.id),s}function um(n,e,t){let i=fi(n),s=$o(e,t),r=i.quests;for(let o of s.quests)r.done.includes(o.id)||r.active.includes(o.id)||!(o.requires||[]).every(l=>r.done.includes(l))||(r.active.push(o.id),r.progress[o.id]={step:0,counts:{}},r.tracked||(r.tracked=o.id))}function hm(n){return new Map((n?.quests||[]).map(e=>[e.id,e]))}function EP(n,e){return!n||!e||n.type!==e.type?!1:n.type==="talk"?n.npc===e.npc:n.type==="visit"?n.region===e.region:n.type==="find"?n.item===e.item:!1}function TP(n,e,t){let i=fi(n),s=hm(t).get(e),r=i.quests;r.active=r.active.filter(a=>a!==e),r.done.includes(e)||r.done.push(e),delete r.progress[e],r.tracked===e&&(r.tracked=r.active[0]??null);let o=[{kind:"complete",questId:e,title:s?.title,outro:s?.outro}];return s?.reward?.coins&&(n.coins=(Number(n.coins)||0)+s.reward.coins,o.push({kind:"coins",amount:s.reward.coins})),o}function Gv(n,e,t){let i=fi(n),s=hm(e),r=[];for(let o of[...i.quests.active]){let a=s.get(o);if(!a)continue;let l=i.quests.progress[o]||{step:0,counts:{}},c=a.steps[l.step];EP(c,t)&&(l.step+=1,i.quests.progress[o]=l,l.step>=a.steps.length?r.push(...TP(n,o,e)):r.push({kind:"step",questId:o,step:l.step}))}return r}function Wv(n,e){let t=fi(n),i=hm(e),s=[];for(let r of t.quests.active){let o=i.get(r),a=t.quests.progress[r]||{step:0},l=o?.steps?.[a.step];s.push({id:r,title:o?.title??r,tracked:t.quests.tracked===r,stepText:AP(l),done:!1})}for(let r of t.quests.done){if(!i.has(r)&&!String(r).startsWith("w_"))continue;let o=i.get(r);o&&s.push({id:r,title:o.title,done:!0})}return s}function AP(n){return n?n.type==="talk"?"Talk to the elder":n.type==="visit"?"Visit the village":n.type==="find"?n.label?`Find the ${n.label}`:`Find ${n.item.replace(/^plant_[A-Z]{2}$/,"the plant").replace(/^animal_[A-Z]{2}$/,"the animal")}`:n.type:""}var CP="ruckus-yard-web",$v="capy-village-save";var Xv=()=>({v:2,player:{x:0,y:-2.2,h:0},clockHours:9,clockDay:0,clothes:{owned:[],wearing:[]},discovered:["home"],signposts:[],score:0,coins:0,inventory:[],quests:{active:[],done:[],tracked:null,progress:{}},plots:["home"],buildings:[],economy:{lastTick:0},flags:{},bulletin:{day:-1},potions:{found:[],bag:{}},civic:{lessons:{},checkups:{}},character:{name:"",gender:"male"},world:Wu()});function qv(n,e){try{let t=n.getItem(e);return t?JSON.parse(t):null}catch{return null}}function RP(n){let e=Xv();return!n||typeof n!="object"||(e.clothes.owned=Array.isArray(n.owned)?[...n.owned]:[],e.clothes.wearing=Array.isArray(n.wearing)?[...n.wearing]:[]),e}function Yv(n){let e=qv(n,$v);if(e&&e.v===2)return jv(e);let t=qv(n,CP),i=RP(t);return Ri(n,i),i}function jv(n){let e=Xv();return e.player={x:Number(n.player?.x)||0,y:Number(n.player?.y)??-2.2,h:Number(n.player?.h)||0},e.clockHours=Number.isFinite(n.clockHours)?n.clockHours%24:9,e.clockDay=Number.isInteger(n.clockDay)&&n.clockDay>=0?n.clockDay:0,e.clothes.owned=Array.isArray(n.clothes?.owned)?[...n.clothes.owned]:[],e.clothes.wearing=Array.isArray(n.clothes?.wearing)?[...n.clothes.wearing]:[],e.discovered=Array.isArray(n.discovered)&&n.discovered.length?[...n.discovered]:["home"],e.signposts=Array.isArray(n.signposts)?[...n.signposts]:[],e.score=Number(n.score)||0,e.coins=Number(n.coins)||0,e.inventory=Array.isArray(n.inventory)?[...n.inventory]:[],e.quests=n.quests&&typeof n.quests=="object"?{active:Array.isArray(n.quests.active)?[...n.quests.active]:[],done:Array.isArray(n.quests.done)?[...n.quests.done]:[],tracked:n.quests.tracked??null,progress:n.quests.progress&&typeof n.quests.progress=="object"?{...n.quests.progress}:{}}:{active:[],done:[],tracked:null,progress:{}},e.plots=Array.isArray(n.plots)&&n.plots.length?[...n.plots]:["home"],e.buildings=Array.isArray(n.buildings)?n.buildings.map(t=>({...t})):[],e.economy=n.economy&&typeof n.economy=="object"?{lastTick:Number(n.economy.lastTick)||0}:{lastTick:0},e.flags=n.flags&&typeof n.flags=="object"?{...n.flags}:{},e.bulletin={day:Number.isInteger(n.bulletin?.day)?n.bulletin.day:-1},e.potions=Lv(n.potions),e.civic=Mv(n.civic),e.character=tm(n.character),n.world&&typeof n.world=="object"?e.world={iso:n.world.iso??null,quests:{active:Array.isArray(n.world.quests?.active)?[...n.world.quests.active]:[],done:Array.isArray(n.world.quests?.done)?[...n.world.quests.done]:[],tracked:n.world.quests?.tracked??null,progress:n.world.quests?.progress&&typeof n.world.quests.progress=="object"?{...n.world.quests.progress}:{}}}:e.world=Wu(),fi(e),e}function Ri(n,e){n.setItem($v,JSON.stringify(e))}var fm="CAPPY2:";function Zv(n){let e=new TextEncoder().encode(JSON.stringify(n)),t="";for(let i of e)t+=String.fromCharCode(i);return fm+btoa(t)}function Kv(n){let e=String(n||"").trim();if(!e.startsWith(fm))return null;try{let t=atob(e.slice(fm.length)),i=Uint8Array.from(t,r=>r.charCodeAt(0)),s=JSON.parse(new TextDecoder().decode(i));return!s||s.v!==2?null:jv(s)}catch{return null}}function ts(n){let e=n.clothes?.owned??n.owned;return new Set(e||[])}function ns(n){let e=ts(n),t=n.clothes?.wearing??n.wearing;return new Set((t||[]).filter(i=>e.has(i)))}function qu(n,e){let t=ts(n),i=ns(n);t.add(e),i.add(e),n.clothes?(n.clothes.owned=[...t],n.clothes.wearing=[...i]):(n.owned=[...t],n.wearing=[...i])}function Jv(n,e){if(!ts(n).has(e))return;let t=ns(n);t.has(e)?t.delete(e):t.add(e),n.clothes?n.clothes.wearing=[...t]:n.wearing=[...t]}function PP(n){return new Set(n.discovered||[])}function Qv(n,e){if(!e?.id)return null;let t=PP(n);return t.has(e.id)?null:(t.add(e.id),n.discovered=[...t],e.name)}function $u(n,e){let t=new Set(n.signposts||[]);return t.has(e)?!1:(t.add(e),n.signposts=[...t],!0)}function dm(n){return new Set(n.signposts||[])}function Xu(n,e){let t=e instanceof Set?e:new Set(e||[]);return t.has(n.region)?!0:(n.unlock_with||[]).some(i=>t.has(i))}function e_(n,e,t,i,s){return{...n,player:{x:e.x,y:e.y,h:e.h},clockHours:t??n.clockHours,clockDay:s??n.clockDay??0,score:i??n.score}}function t_(n,e,t,i){return e.x=n.player.x,e.y=n.player.y,e.h=n.player.h,t&&Number.isFinite(n.clockHours)&&(t.hours=n.clockHours%24),t&&Number.isInteger(n.clockDay)&&(t.day=n.clockDay),Number.isFinite(i)?n.score:n.score??0}function n_(n){let e=n.patch_field,t=[];for(let s of n.clothing)t.push([s.spot[0],s.spot[1],1.6]);for(let s of n.dynamics)t.push([s.at[0],s.at[1],1.5]);for(let s of n.dress)s.blocks&&t.push([s.at[0],s.at[1],s.block||1.6]);let i=[];for(let s of e.cols)for(let r of e.rows){let o=e.origin[0]+s*e.spacing[0],a=e.origin[1]+r*e.spacing[1];t.some(([l,c,u])=>(o-l)**2+(a-c)**2<u*u)||i.push([o,a])}return i}function IP(n,e){let t=(Math.imul(n,73856093)^Math.imul(e,19349663)^1540483477)>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function i_(n,e,t,i,s,r){let o=[],a=Math.round(s*s*r),l=Math.floor((e-i)/s),c=Math.floor((e+i)/s),u=Math.floor((t-i)/s),h=Math.floor((t+i)/s);for(let f=l;f<=c;f+=1)for(let d=u;d<=h;d+=1){let p=(f+.5)*s,x=(d+.5)*s;if(Math.hypot(p-e,x-t)>i)continue;let y=IP(f,d);for(let g=0;g<a;g+=1){let v=(f+y())*s,b=(d+y())*s,_=n(v,b),R=y()<_**1.4,M=y()*Math.PI*2,T=(.75+y()*.6)*(.7+.3*_);R&&o.push([v,b,M,T])}}return o}var pm=35*Math.PI/180;function o_(n=9,e=0){return{day:e,hours:n}}function a_(n,e,t=1200){for(n.hours+=e/t*24;n.hours>=24;)n.hours-=24,n.day+=1}function l_(n){let e=(n-6)/12*Math.PI;return[Math.cos(e),-Math.sin(e)*Math.sin(pm),Math.sin(e)*Math.cos(pm)]}function c_(n){let e=(n-18.6)/12*Math.PI,t=pm*.8;return[Math.cos(e),-Math.sin(e)*Math.sin(t),Math.sin(e)*Math.cos(t)]}function u_(n){return(n%8+8)%8/8}var LP=[{at:-1,zenith:"#050814",horizon:"#101a33",ground:"#07090f",sun:"#9fb4ff",key:.7,hemiSky:"#4a5c94",hemiGround:"#1a1622",hemi:.6,fog:"#141c34",exposure:1.4,env:.12,stars:1,night:1,cloudLit:"#5c6a8e",cloudShade:"#1b2238"},{at:-.18,zenith:"#0b1230",horizon:"#27305a",ground:"#0c0d18",sun:"#9fb4ff",key:.6,hemiSky:"#4d5a8a",hemiGround:"#1a1520",hemi:.6,fog:"#212a4a",exposure:1.35,env:.13,stars:.9,night:1,cloudLit:"#5f6b92",cloudShade:"#20263e"},{at:-.06,zenith:"#1c2352",horizon:"#b8607a",ground:"#231a26",sun:"#ff9a6a",key:0,hemiSky:"#7a6aa0",hemiGround:"#2a1e22",hemi:.5,fog:"#6a4a6a",exposure:1.15,env:.15,stars:.35,night:.8,cloudLit:"#ff8f7a",cloudShade:"#4a3a5e"},{at:.04,zenith:"#3a5a9a",horizon:"#ffa060",ground:"#4a3424",sun:"#ffb070",key:1.2,hemiSky:"#9aa0c8",hemiGround:"#4a3424",hemi:.65,fog:"#c89a82",exposure:1.1,env:.22,stars:0,night:.35,cloudLit:"#ffc28a",cloudShade:"#8a6a7a"},{at:.22,zenith:"#4a86d0",horizon:"#f0d0a8",ground:"#5a4a34",sun:"#ffe0b8",key:2.4,hemiSky:"#b8d0f0",hemiGround:"#5a4a34",hemi:.8,fog:"#c8d4e0",exposure:1.05,env:.3,stars:0,night:0,cloudLit:"#fff4e4",cloudShade:"#a4acbe"},{at:1,zenith:"#3a78d8",horizon:"#bcd8f2",ground:"#5a5040",sun:"#fff4e0",key:2.9,hemiSky:"#c8e0ff",hemiGround:"#5a5040",hemi:.9,fog:"#c4d8ec",exposure:1,env:.35,stars:0,night:0,cloudLit:"#ffffff",cloudShade:"#b0bccc"}],DP={zenith:"#1a0a2e",horizon:"#c2603a",fog:"#3a2450",hemiSky:"#8d78c8",cloudLit:"#ff9a6a",cloudShade:"#3b2160"};function s_(n){let e=parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function r_(n,e,t){if(typeof n=="number")return n+(e-n)*t;let i=typeof n=="string"?s_(n):n,s=typeof e=="string"?s_(e):e;return i.map((r,o)=>r+(s[o]-r)*t)}function h_(n,e=""){let t=LP,i=Math.max(t[0].at,Math.min(t[t.length-1].at,n)),s=0;for(;s<t.length-2&&i>t[s+1].at;)s+=1;let r=t[s],o=t[s+1],a=(i-r.at)/(o.at-r.at),l={};for(let c of Object.keys(r))c!=="at"&&(l[c]=r_(r[c],o[c],a));if(e==="halloween"){let c=.65*l.night+.25;for(let[u,h]of Object.entries(DP))l[u]=r_(l[u],h,c*(u==="fog"?.8:1))}return l}function f_(n,e){if(e!=null)return e;let t=n.getMonth()+1,i=n.getDate();return t===10||t===11&&i<=7?"halloween":""}var yr=["spring","summer","autumn","winter"],ml=["clear","cloudy","rain","storm","snow","fog"],Gt={daySeconds:1200,dawnHour:6,duskHour:18,weatherChangeSeconds:360,weatherBlendSeconds:30,seasonSource:"calendar",daysPerSeason:7,sharedClockInMultiplayer:!0,seasonWeights:{spring:{clear:40,cloudy:25,rain:25,storm:5,fog:5},summer:{clear:60,cloudy:18,rain:8,storm:12,fog:2},autumn:{clear:35,cloudy:30,rain:20,storm:5,fog:10},winter:{clear:30,cloudy:28,snow:32,fog:10}},weatherLooks:{clear:{cloud:.15,dim:0,rain:0,snow:0,fog:0,lightning:0},cloudy:{cloud:.78,dim:.3,rain:0,snow:0,fog:0,lightning:0},rain:{cloud:.9,dim:.45,rain:1,snow:0,fog:.15,lightning:0},storm:{cloud:1,dim:.65,rain:1,snow:0,fog:.2,lightning:1},snow:{cloud:.82,dim:.25,rain:0,snow:1,fog:.2,lightning:0},fog:{cloud:.45,dim:.2,rain:0,snow:0,fog:1,lightning:0}}},kP=["cloud","dim","rain","snow","fog","lightning"];function is(n){return Math.max(0,Math.min(1,Number(n)||0))}function gl(n){return n&&n!==Gt?{...Gt,...n}:Gt}function g_(n){return(Number(n)%24+24)%24/24}function UP(n,e=Gt){let{dawnHour:t,duskHour:i}=gl(e),s=g_(n)*24;return s<t||s>=i}function OP(n){let e=n.getMonth();return e>=2&&e<=4?"spring":e>=5&&e<=7?"summer":e>=8&&e<=10?"autumn":"winter"}function FP(n,e=Gt.daysPerSeason){let t=Math.max(1,Math.floor(e)||1),i=Math.floor((Number(n)||0)/t);return yr[(i%4+4)%4]}function BP({date:n=new Date,day:e=0,config:t=Gt}={}){let i=gl(t);return i.seasonSource==="days"?FP(e,i.daysPerSeason):OP(n)}function y_(n,e=Gt.daySeconds){let t=n/1e3/e,i=Math.floor(t);return{day:i,hours:(t-i)*24}}function d_(n){let e=(Math.floor(n)^2654435769)>>>0;return e=Math.imul(e^e>>>16,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function p_(n,e,t=Gt.seasonWeights){let i=t[n]||t.spring||{},s=ml.map(a=>[a,Math.max(0,Number(i[a])||0)]).filter(([,a])=>a>0);if(!s.length)return"clear";let r=s.reduce((a,[,l])=>a+l,0),o=is(e)*r;for(let[a,l]of s){if(o<l)return a;o-=l}return s[s.length-1][0]}function mm(n,e,t=Gt){let i=gl(t),s=n/1e3,r=Math.floor(s/i.weatherChangeSeconds),o=s-r*i.weatherChangeSeconds,a=p_(e,d_(r),i.seasonWeights),l=p_(e,d_(r-1),i.seasonWeights),c=i.weatherBlendSeconds>0?is(o/i.weatherBlendSeconds):1;return{weather:a,previous:l,blend:c,slot:r}}function gm(n,e=n,t=1,i=Gt){let s=gl(i).weatherLooks,r=s[n]||s.clear,o=s[e]||r,a=is(t),l={};for(let c of kP)l[c]=(o[c]??0)+((r[c]??0)-(o[c]??0))*a;return l}function x_({hours:n=12,day:e=0,nowMs:t=Date.now(),date:i,config:s=Gt,force:r={}}={}){let o=gl(s),a=yr.includes(r.season)?r.season:BP({date:i||new Date(t),day:e,config:o}),l,c,u;return ml.includes(r.weather)?(l=r.weather,c=r.weather,u=1):{weather:l,previous:c,blend:u}=mm(t,a,o),{hours:n,day:e,timeOfDay:g_(n),isNight:UP(n,o),season:a,weather:l,previousWeather:c,blend:u,look:gm(l,c,u,o)}}function pl(n,e,t){return n.map((i,s)=>i+(e[s]-i)*t)}function m_(n,e=1){let t=(.2126*n[0]+.7152*n[1]+.0722*n[2])*e;return[t,t,t]}var zP=[.79,.81,.84],HP=[.16,.19,.25];function v_(n,e){let t=is(e?.dim),i=is(e?.fog),s={...n};for(let r of["zenith","horizon","ground","sun","cloudLit","cloudShade","hemiSky"])Array.isArray(n[r])&&(s[r]=pl(n[r],m_(n[r],.9),t*.75));if(Array.isArray(n.fog)){let r=pl(zP,HP,is(n.night));s.fog=pl(pl(n.fog,m_(n.fog,.9),t*.75),r,i*.8),Array.isArray(s.horizon)&&(s.horizon=pl(s.horizon,r,i*.6))}return s.key=n.key*(1-.7*t)*(1-.35*i),s.hemi=n.hemi*(1-.35*t),s.env=n.env*(1-.35*t),s.exposure=n.exposure*(1-.15*t),s}function __(n){return 1+is(n?.fog)*4+is(n?.rain)*.6+is(n?.snow)*1.2}var Fn={buildupSeconds:150,meltSeconds:{winter:900,spring:240,summer:90,autumn:300},rainMeltFactor:3,sunMeltFactor:1.6,nightMeltFactor:.6,maxCover:.95,historySeconds:1800,historyStepSeconds:15,color:"#d9e1ea",slushColor:"#8e969d",pathSlush:.45,roofSlope:[.38,.72],bloomDamp:.8,bloomThresholdLift:.5};function xr(n){return Math.max(0,Math.min(1,Number(n)||0))}function Yu(n){return n&&n!==Fn?{...Fn,...n}:Fn}function VP(n,e=Fn){let t=Yu(e);return xr(t.maxCover)*xr(n?.snow)}function GP({look:n={},season:e="winter",isNight:t=!1}={},i=Fn){let s=Yu(i),r=Number(s.meltSeconds?.[e])||Number(s.meltSeconds?.winter)||900,o=1/Math.max(1,r);return o*=1+(s.rainMeltFactor-1)*xr(n.rain),t?o*=s.nightMeltFactor:o*=1+(s.sunMeltFactor-1)*(1-xr(n.cloud)),o}function ym(n,e,t={},i=Fn){let s=Yu(i),r=xr(n),o=Math.max(0,Number(e)||0),a=t.look||{},l=VP(a,s);if(r<l){let c=xr(s.maxCover)/Math.max(1,s.buildupSeconds)*xr(a.snow);return Math.min(l,r+c*o)}return r>l?Math.max(l,r-GP(t,s)*o):r}function b_(n,e,{config:t=Fn,skyConfig:i=Gt,isNight:s=!1}={}){let r=Yu(t),o=Math.max(1,r.historyStepSeconds),a=0;for(let l=n-r.historySeconds*1e3;l<n;l+=o*1e3){let{weather:c,previous:u,blend:h}=mm(l,e,i);a=ym(a,o,{look:gm(c,u,h,i),season:e,isNight:s},r)}return a}function M_(n,e,t){for(let i of n){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function ju(n){let e=n.bridge_gap??3,t=[],i=n.points;for(let s=0;s<i.length-1;s+=1){let r=[[0,1]],[o,a]=i[s],[l,c]=i[s+1],u=Math.hypot(l-o,c-a);for(let[h,f]of n.bridges||[]){let d=((h-o)*(l-o)+(f-a)*(c-a))/(u*u),p=o+(l-o)*d,x=a+(c-a)*d;if(d<-.05||d>1.05||Math.hypot(h-p,f-x)>n.width)continue;let y=e/u;r=r.flatMap(([g,v])=>{let b=[];return d-y>g&&b.push([g,Math.min(v,d-y)]),d+y<v&&b.push([Math.max(g,d+y),v]),b})}for(let[h,f]of r)t.push([o+(l-o)*h,a+(c-a)*h,o+(l-o)*f,a+(c-a)*f])}return t}function vr(n,e,t){let[i,s,r,o]=n,a=r-i,l=o-s,c=a*a+l*l||1e-9,u=Math.max(0,Math.min(1,((e-i)*a+(t-s)*l)/c));return[i+a*u,s+l*u]}function S_(n,e,t,i=.42){let s=t+i;for(let r of e){let[o,a]=vr(r,n.x,n.y),l=n.x-o,c=n.y-a,u=Math.hypot(l,c);if(u>=s)continue;let h,f;if(u>1e-6)h=l/u,f=c/u;else{let p=r[2]-r[0],x=r[3]-r[1],y=Math.hypot(p,x)||1;h=-x/y,f=p/y}n.x=o+h*s,n.y=a+f*s;let d=n.vx*h+n.vy*f;d<0&&(n.vx-=d*h,n.vy-=d*f)}}function Zu(n,e,t){let i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function xm(n,e,t,i=0){let s=n/t,r=e/t,o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a;l=l*l*(3-2*l),c=c*c*(3-2*c);let u=Zu(o,a,i),h=Zu(o+1,a,i),f=Zu(o,a+1,i),d=Zu(o+1,a+1,i);return u+(h-u)*l+(f-u)*c+(u-h-f+d)*l*c}function w_(n){let e=[];for(let t=0;t<n.length-1;t+=1)e.push([...n[t],...n[t+1]]);return e}function E_(n,e,t){let i=1/0;for(let s of n){let[r,o]=vr(s,e,t);i=Math.min(i,Math.hypot(e-r,t-o))}return i}var yl=n=>Math.max(0,Math.min(1,n));function WP(n,e,t,i=T_(n)){let s=(xm(e,t,3.1,1)-.5)*1.6+(xm(e,t,.9,2)-.5)*.6,r=0;for(let c of i.roads){let u=E_(c.segments,e,t);r=Math.max(r,yl((c.width/2+.4+s*.5-u)/.9))}for(let[c,u,h,f]of i.fields){let d=Math.min(e-c,h-e,t-u,f-t);r=Math.max(r,yl((d+s)/1.5))}let o=0;if(i.river){let c=E_(i.river,e,t);o=yl((n.river.width/2+2.6+s-c)/1.4)}let a=0;if(n.forest){let[c,u,h,f]=n.forest.rect,d=Math.min(e-c,h-e,t-u,f-t);if(a=yl((d+s*2.5)/5),n.forest.clearing){let[p,x,y]=n.forest.clearing,g=yl((y-Math.hypot(e-p,t-x)+s*2)/4);a*=1-g,r=Math.max(r,g*.35*xm(e,t,1.7,3))}}o*=1-r,a*=(1-r)*(1-o);let l=Math.max(0,1-r-o-a);return{dirt:r,sand:o,forest:a,grass:l}}function T_(n,e=[]){return{roads:(n.roads||[]).map(t=>({width:t.width,segments:w_(t.points)})),river:n.river?w_(n.river.points):null,fields:e}}function A_(n,e,t=[]){let[i,s,r,o]=n.bounds,a=T_(n,t),l=new Uint8Array(e*e*4);for(let c=0;c<e;c+=1){let u=o-(c+.5)/e*(o-s);for(let h=0;h<e;h+=1){let f=i+(h+.5)/e*(r-i),d=WP(n,f,u,a),p=(c*e+h)*4;l[p]=Math.round(d.dirt*255),l[p+1]=Math.round(d.sand*255),l[p+2]=Math.round(d.forest*255),l[p+3]=Math.round(d.grass*255)}}return l}function C_(n,e,t,i,s){let[r,o,a,l]=t,c=Math.floor((i-r)/(a-r)*e),u=Math.floor((l-s)/(l-o)*e);return c<0||u<0||c>=e||u>=e?0:n[(u*e+c)*4+3]/255}var qP=new Set(["park","patch"]);function R_(n,e){let[t,i]=e.meadow_offset||[0,0],s=(h,f)=>h==="patch"?[f[0]+t,f[1]+i,...f.slice(2)]:[...f],r=h=>qP.has(h)?"world":h,o=h=>(h||[]).map(f=>({...f,at:s(f.level,f.at),level:r(f.level)})),a=(n.clothing||[]).map(h=>{let f=h.place==="house"?"house":"world",d=h.place==="patch"?[h.spot[0]+t,h.spot[1]+i]:[...h.spot];return{...h,spot:d,level:f}}),l=n.patch_field?{...n.patch_field,origin:[n.patch_field.origin[0]+t,n.patch_field.origin[1]+i]}:null,c=n.levels?.patch,u=c?[c.origin[0]+t-c.half[0],c.origin[1]+i-c.half[1],c.origin[0]+t+c.half[0],c.origin[1]+i+c.half[1]]:null;return{...n,levels:{world:e.level,house:n.levels.house},portals:e.portals.map(h=>({...h})),dress:o(n.dress),dynamics:o(n.dynamics),web_toys:o(n.web_toys),web_park:(n.web_park||[]).map(h=>({...h,level:"world"})),clothing:a,patch_field:l,field_rect:u,lights:(n.lights||[]).map(h=>({...h,level:r(h.level||"house")}))}}var $P=new Set(["world","house"]);function xl(n){return typeof n=="string"&&n!=="world"}function XP(n){return{origin:[...n.origin],half:[...n.half],inset:n.inset,cam_back:n.cam_back,cam_up:n.cam_up,fog:n.fog,name:n.name}}function P_(n,e){if(!e||typeof e!="object")return n;let t={...n.levels};for(let i of e.levels||[])!i||typeof i.id!="string"||$P.has(i.id)||!Array.isArray(i.origin)||!Array.isArray(i.half)||(t[i.id]=XP(i));return{...n,levels:t,dress:[...n.dress||[],...e.dress||[]],lights:[...n.lights||[],...e.lights||[]]}}function _r(n){let e=n?.quests??n??[];return new Map(e.map(t=>[t.id,t]))}function di(n){return(!n.quests||typeof n.quests!="object")&&(n.quests={active:[],done:[],tracked:null,progress:{}}),Array.isArray(n.quests.active)||(n.quests.active=[]),Array.isArray(n.quests.done)||(n.quests.done=[]),(!n.quests.progress||typeof n.quests.progress!="object")&&(n.quests.progress={}),Array.isArray(n.inventory)||(n.inventory=[]),n.quests}function ss(n,e){return di(n).done.includes(e)}function Pi(n,e){return di(n).active.includes(e)}function Qu(n,e=[]){return(e||[]).every(t=>ss(n,t))}function Ii(n,e){let t=e?.requires;return t?t.quest_done?ss(n,t.quest_done):t.flag?!!n.flags?.[t.flag]:!0:!0}function vm(n,e,t){let i=_r(e),s=di(n);return[...i.values()].filter(r=>r.giver!==t||s.done.includes(r.id)||s.active.includes(r.id)?!1:Qu(n,r.requires))}function vl(n,e,t){let i=_r(t).get(e);if(!i)return!1;let s=di(n);return s.done.includes(e)||s.active.includes(e)||!Qu(n,i.requires)?!1:(s.active.push(e),s.progress[e]={step:0,counts:{}},s.tracked||(s.tracked=e),!0)}function zs(n,e,t){let i=_r(t).get(e);if(!i||!Pi(n,e))return null;let s=di(n).progress[e]||{step:0,counts:{}},r=i.steps[s.step];return r?{quest:i,step:r,index:s.step}:null}function YP(n,e){let t=di(n);return!t.tracked||!Pi(n,t.tracked)?null:zs(n,t.tracked,e)}function I_(n,e){let t=di(n);return Pi(n,e)?(t.tracked=e,!0):!1}function Ku(n,e){return(n.inventory||[]).includes(e)}function L_(n,e){return!e||Ku(n,e)?!1:(n.inventory=[...n.inventory||[],e],!0)}function jP(n,e){let t=n.inventory||[],i=t.indexOf(e);return i<0?!1:(t.splice(i,1),n.inventory=t,!0)}function ZP(n,e){if(!n||!e||n.type!==e.type)return!1;switch(n.type){case"talk":return n.npc===e.npc;case"visit":return n.region===e.region;case"enter":return n.level===e.level;case"collect":case"find":return n.item===e.item;case"deliver":return n.npc===e.npc&&n.item===e.item;case"ruckus":return(e.score??0)>=(n.score??1);case"soak":return n.zone===e.zone||!n.zone&&n.region===e.region;case"buy_plot":return n.plot===e.plot;case"build":return n.building===e.building;default:return!1}}function KP(n,e,t){let i=_r(t).get(e),s=di(n),r=s.progress[e]||{step:0,counts:{}};return r.step+=1,s.progress[e]=r,r.step>=i.steps.length?JP(n,e,t):{kind:"step",questId:e,step:r.step}}function JP(n,e,t){let i=_r(t).get(e),s=di(n);s.active=s.active.filter(a=>a!==e),s.done.includes(e)||s.done.push(e),delete s.progress[e],s.tracked===e&&(s.tracked=s.active[0]??null);let r=[{kind:"complete",questId:e,title:i.title,outro:i.outro}],o=i.reward||{};return o.coins&&(Zn(n,o.coins),r.push({kind:"coins",amount:o.coins})),o.flag&&(n.flags={...n.flags||{},[o.flag]:!0},r.push({kind:"flag",flag:o.flag})),o.item&&(L_(n,o.item),r.push({kind:"item",item:o.item})),r}function Ju(n,e,t){let i=_r(e),s=[];for(let r of[...di(n).active]){let o=zs(n,r,e);if(!o||!ZP(o.step,t)||(o.step.type==="collect"||o.step.type==="find")&&!Ku(n,o.step.item))continue;if(o.step.type==="deliver"){if(!Ku(n,o.step.item))continue;jP(n,o.step.item)}let a=KP(n,r,e);Array.isArray(a)?s.push(...a):s.push(a)}return s}function eh(n,e,t){return L_(n,t)?[...Ju(n,e,{type:"collect",item:t}),...Ju(n,e,{type:"find",item:t})]:[]}function th(n,e,t){if(!e?.item||Ku(n,e.item))return!1;if(!e?.quest)return!0;if(ss(n,e.quest)||!Pi(n,e.quest))return!1;let i=zs(n,e.quest,t);if(!i)return!1;let s=i.step;return(s.type==="collect"||s.type==="find")&&s.item===e.item}function _m(n,e,t={}){let i=_r(e),s=di(n),r=[];for(let o of s.active){let a=i.get(o),l=zs(n,o,e);r.push({id:o,title:a?.title??o,tracked:s.tracked===o,stepText:QP(l?.step,t),giver:a?.giver})}for(let o of s.done){let a=i.get(o);r.push({id:o,title:a?.title??o,done:!0,giver:a?.giver})}return r}function nh(n,e,t={}){let i=YP(n,e);if(!i)return null;let s=i.step,r=t.npcs||[],o=t.pickups||[],a=t.regions||[],l=t.soakZones||[],c=t.plots||[],u=t.labels||{},h=(f,d)=>u[f]?.[d]??d;if(s.type==="talk"||s.type==="deliver"){let f=r.find(d=>d.id===s.npc);return f?.spot?{x:f.spot.at[0],y:f.spot.at[1],level:f.spot.level||"world",label:f.name||s.npc}:null}if(s.type==="visit"){let f=a.find(g=>g.id===s.region);if(!f?.rect)return null;let[d,p,x,y]=f.rect;return{x:(d+x)/2,y:(p+y)/2,level:"world",label:f.name||s.region}}if(s.type==="enter"){let f=(t.portals||[]).find(d=>d.level===s.level||d.to===s.level);return f?.at?{x:f.at[0],y:f.at[1],level:f.from||"world",label:h("levels",s.level)}:null}if(s.type==="collect"||s.type==="find"){let f=o.find(d=>d.item===s.item&&th(n,d,e));return f?{x:f.at[0],y:f.at[1],level:f.level||"world",label:h("items",s.item)}:null}if(s.type==="soak"){let f=l.find(d=>d.id===s.zone)||l.find(d=>d.region===s.region);return f?{x:f.at[0],y:f.at[1],level:f.level||"world",label:f.label||"Hot springs"}:null}if(s.type==="buy_plot"){let f=c.find(d=>d.id===s.plot);return f?.sign?{x:f.sign.at[0],y:f.sign.at[1],level:"world",label:f.label||s.plot}:null}if(s.type==="build"){let d=[...n.plots||[]].reverse().map(v=>c.find(b=>b.id===v)).find(Boolean);if(!d?.rect)return null;let[p,x,y,g]=d.rect;return{x:(p+y)/2,y:(x+g)/2,level:"world",label:`Build: ${d.label||d.id}`}}return null}function QP(n,e={}){if(!n)return"";let t=(i,s)=>e[i]?.[s]??s;switch(n.type){case"talk":return`Talk to ${t("npcs",n.npc)}`;case"visit":return`Visit ${t("regions",n.region)}`;case"enter":return`Enter ${t("levels",n.level)}`;case"collect":return`Collect ${t("items",n.item)}`;case"find":return`Find ${t("items",n.item)}`;case"deliver":return`Deliver ${t("items",n.item)} to ${t("npcs",n.npc)}`;case"ruckus":return`Ruckus score ${n.score}+`;case"soak":return n.zone?`Soak at ${n.zone}`:`Soak in ${t("regions",n.region)}`;case"buy_plot":return`Buy ${t("plots",n.plot)}`;case"build":return`Build ${t("buildings",n.building)}`;default:return n.type}}var eI=.5;function br(n,e=1){return Math.round(n/e)*e}function tI(n,e){let[t,i]=n;return(Math.round(e/90)%4+4)%4%2===0?[t,i]:[i,t]}function ih(n,e,t=0){let[i,s]=tI(e,t);return[n[0]-i/2,n[1]-s/2,n[0]+i/2,n[1]+s/2]}function nI(n,e){return n[0]<e[2]&&n[2]>e[0]&&n[1]<e[3]&&n[3]>e[1]}function D_(n,e){return n[0]>=e[0]&&n[0]<=e[2]&&n[1]>=e[1]&&n[1]<=e[3]}function _l(n){return Math.floor(Math.max(0,Number(n)||0)*eI)}function sh(n,e,t,i,s=[],r=null){if(!n||!e)return!1;let o=ih(t,n.footprint,i);if(!D_([o[0],o[1]],e.rect)||!D_([o[2],o[3]],e.rect))return!1;let a=s.filter(l=>l.type===n.id&&l.uid!==r).length;if(n.limit&&a>=n.limit)return!1;for(let l of s){if(r&&l.uid===r)continue;let c=l.def;if(c&&nI(o,ih(l.at,c.footprint,l.h||0)))return!1}return!0}function N_(n,e,t=0,i=.9){let s=t*Math.PI/180,r=e[1]/2+i;return{at:[n[0]+Math.sin(s)*r,n[1]-Math.cos(s)*r],h:((t+180)%360+360)%360}}function rh(n,e){return(n.buildings||[]).filter(t=>t.type===e).length}function k_(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.at||a.at.length<2)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function U_(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]);let i=n.buildings.findIndex(a=>a.uid===e);if(i<0)return null;let s=n.buildings[i],r=(t?.buildings||[]).find(a=>a.id===s.type),o=_l(r?.price);return s.bank=0,n.buildings.splice(i,1),Zn(n,o),{uid:e,type:s.type,refund:o,label:r?.label||s.type,def:r||null}}function O_(n,e,t,i,s,r,o=[]){if(!r||!t)return!1;let a=(n.buildings||[]).find(l=>l.uid===e);return!a||!sh(r,t,i,s,o,e)?!1:(a.plot=t.id,a.at=[i[0],i[1]],a.h=s,!0)}function Xo(n,e){if(n!=="halloween")return!1;let t=(e%24+24)%24;return t>=17&&t<22}var iI={yuzu:{at:[-7,-3],h:110,state:"idle"},momo:{at:[5,1],h:200,state:"idle"},pip:{at:[10,-7],h:280,state:"wander"},juniper:{at:[-11,5],h:40,state:"idle"},hana:{at:[-2,9],h:180,state:"idle"}};function F_(n,e=()=>!0){let t=iI[n];return!t||!e({id:n})?null:{at:t.at,h:t.h,state:t.state,wandering:t.state==="wander",party:!0}}var sI={start:21,end:6};function B_(n,e,t){let i=t?.buildings||[];for(let s of e?.buildings||[]){let r=i.find(o=>o.id===s.type);if(r?.effects?.villager===n.id)return{...N_(s.at,r.footprint,s.h||0),building:s.uid}}return null}function z_(n,e){if(!e)return n;let t={at:e.at,h:e.h,state:"sleep"},i=n.schedule?.length?n.schedule.map(s=>s.state==="sleep"?{...s,...t}:s):[{...sI,...t}];return{...n,home:e,schedule:i}}function rI(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function bm(n,e){for(let t of n.schedule||[])if(rI(e,t.start,t.end))return t;return null}function oI(n,e,t=0){let i=bm(n,e),s=i?.at?{at:i.at,h:i.h??n.spot.h,state:i.state||"idle"}:{at:n.spot.at,h:n.spot.h||0,state:"idle"};if(s.state==="sleep")return{...s,wandering:!1};if(s.state==="wander"){let r=Math.sin((e+t)*1.7)*.55,o=Math.cos((e+t*.3)*2.1)*.55;return{at:[s.at[0]+r,s.at[1]+o],h:s.h,state:"wander",wandering:!0}}return{...s,wandering:!1}}function H_(n,e,t,i,s=()=>!0){if(Xo(i,e)){let r=F_(n.id,s);if(r)return r}return oI(n,e,t)}var V_=4.5,aI=3;function lI(n,e,t){let i=(n%24+24)%24;return e===t?!0:e<t?i>=e&&i<t:i>=e||i<t}function Mm(n){return typeof n=="string"?{text:n}:n}function G_(n,e){return!!(e&&n?.flags?.[e])}function W_(n,e){return!!(e&&ss(n,e))}function cI(n,e,t){let i=Mm(n);if(!i||!i.text||i.flag&&!G_(e,i.flag)||i.quest_done&&!W_(e,i.quest_done))return!1;if(i.hours){let[s,r]=i.hours;if(!lI(t,s,r))return!1}return!0}function uI(n){let e=Mm(n);return e.flag?3:e.quest_done?2:e.hours?1:0}function hI(n,e){return!(!n||n.flag&&!G_(e,n.flag)||n.quest_done&&!W_(e,n.quest_done))}function q_(n,e){let t=[];for(let i of n?.topics||[])if(hI(i,e)&&(t.push(i),t.length>=aI))break;return t}function Mr(n,e,t){let i=null,s=-1;for(let r of n||[]){let o=Mm(r);if(!cI(o,e,t))continue;let a=uI(o);a>s&&(i=o,s=a)}return i?.text||null}function $_(n,e,t,i=!1){return!n||bm(n,t)?.state==="sleep"?null:i&&n.party?.length?Mr(n.party,e,t):Mr(n.barks,e,t)}function X_(n,e,t,i=!1){return n?i&&n.party?.length?Mr(n.party,e,t)||"...":Mr(n.barks,e,t)||Mr(n.idle,e,t)||"...":"..."}function Y_(n){return new Set(n.plots||[])}function pi(n,e){return Y_(n).has(e)}function oh(n,e,t){for(let i of n?.plots||[]){let[s,r,o,a]=i.rect;if(e>=s&&e<=o&&t>=r&&t<=a)return i}return null}function j_(n,e){Array.isArray(n.plots)||(n.plots=[]);for(let t of e?.plots||[])t.owned_default&&!n.plots.includes(t.id)&&n.plots.push(t.id)}function Z_(n,e,t){let i=(t?.plots||[]).find(s=>s.id===e);return!i||pi(n,e)||i.price>0&&!Wo(n,i.price)?!1:(n.plots=[...Y_(n),e],!0)}function K_(n,e,t,i,s,r=1.45){let o=null,a=1/0;for(let l of n?.plots||[]){if(!l.sign||pi(e,l.id))continue;let c=(i-l.sign.at[0])**2+(s-l.sign.at[1])**2;c<=r**2&&c<a&&(o=l,a=c)}return o}var fI=7200*1e3,dI=.5,pI=60*1e3;function mI(n,e){return(n?.buildings||[]).find(t=>t.id===e)}function Sm(n,e,t){Array.isArray(n.buildings)||(n.buildings=[]),n.economy||(n.economy={lastTick:t});let i=Number.isFinite(n.economy.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i);if(s<=0)return n.economy.lastTick=t,0;let o=s>300*1e3?dI:1;s=Math.min(s,fI);let a=s/6e4*o,l=0;for(let c of n.buildings){let u=mI(e,c.type);if(!u?.income)continue;let h=Number(u.income.per_min)||0,f=Number(u.income.cap_min)||0,d=c.bank||0;c.bank=Math.min(d+h*a,h*f),l+=Math.max(0,c.bank-d)}return n.economy.lastTick=t,l}function J_(n,e,t){let i=Number.isFinite(n?.economy?.lastTick)?n.economy.lastTick:t,s=Math.max(0,t-i),r=Math.floor(Sm(n,e,t));return{credited:r,elapsedMs:s,away:s>=pI&&r>=1}}function Q_(n,e){let t=(n.buildings||[]).find(s=>s.uid===e);if(!t||!t.bank)return 0;let i=Math.floor(t.bank);return t.bank=0,Zn(n,i),i}function eb(n,e,t,i,s=1.45){let r=null,o=1/0;for(let a of n.buildings||[]){if((a.level||"world")!==e||!a.bank||a.bank<1)continue;let l=(t-a.at[0])**2+(i-a.at[1])**2;l<=s**2&&l<o&&(r=a,o=l)}return r}function ah(n){return n?.bulletin??[]}function gI(n){let e=Math.sin(n*12.9898+78.233)*43758.5453;return e-Math.floor(e)}function tb(n,e){let t=ah(n).length;return t?Math.floor(gI(e)*t)%t:-1}function bl(n,e){let t=tb(n,e);if(t<0)return null;let i=ah(n)[t],{pickups:s,...r}=i;return{...r,bulletin:!0}}function yI(n,e){let t=tb(n,e);if(t<0)return[];let i=ah(n)[t];return(i.pickups||[]).map(s=>({...s,quest:i.id}))}function nb(n,e,t){if((!n.bulletin||typeof n.bulletin!="object")&&(n.bulletin={day:-1}),n.bulletin.day===t)return{changed:!1,expired:[]};let i=new Set(ah(e).map(o=>o.id)),s=n.quests||{active:[],done:[],tracked:null,progress:{}},r=(s.active||[]).filter(o=>i.has(o));s.active=(s.active||[]).filter(o=>!i.has(o)),s.done=(s.done||[]).filter(o=>!i.has(o));for(let o of i)delete s.progress?.[o];return i.has(s.tracked)&&(s.tracked=s.active[0]??null),n.quests=s,n.bulletin={day:t},{changed:!0,expired:r}}function ib(n,e,t,i){let s=bl(t,i);return{quests:{...n,quests:[...n?.quests||[],...s?[s]:[]]},pickups:{...e,pickups:[...e?.pickups||[],...yI(t,i)]}}}function sb(n){let e=String(n||"").replace(/[^a-zA-Z0-9_-]/g,"").slice(0,40);return e.length>=8?e:""}function wm(){return`c${(typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):`${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`).slice(0,15)}`}var xI="CappyCoin";function Wt(n){return`${Math.max(0,Math.floor(Number(n)||0))} ${xI}`}var rb=new Set(["on_talk","on_collect","on_place"]),vI=new Set(["give_coins","say","start_quest","spawn_prop"]);function _I(n,e){if(!n||n.type!==e?.type)return!1;let t=n.data&&typeof n.data=="object"?n.data:{};if(n.type==="on_talk"){let i=typeof t.npc=="string"?t.npc:"";return!(i&&i!==e.npc)}return n.type==="on_collect"?typeof t.item=="string"&&t.item===e.item:n.type==="on_place"?typeof t.building=="string"&&t.building===e.building:!1}function bI(n,e){let t=n.data&&typeof n.data=="object"?n.data:{};return n.type==="give_coins"?(e.addCoins?.(t.amount),!0):n.type==="say"?(e.say?.(t.text),!0):n.type==="start_quest"?(e.offerQuest?.(t.quest),!0):n.type==="spawn_prop"?(e.spawnProp?.(t.file,t.at,t.h),!0):!1}function MI(n){let e=new Map;for(let t of Array.isArray(n)?n:[])!t||typeof t.from!="string"||typeof t.to!="string"||(e.has(t.from)||e.set(t.from,[]),e.get(t.from).push(t.to));return e}function SI(n,e,t){let i=new Map;for(let r of Array.isArray(n?.nodes)?n.nodes:[])r&&typeof r.id=="string"&&i.set(r.id,r);let s=MI(n?.wires);for(let r of i.values()){if(!rb.has(r.type)||!_I(r,e))continue;let o=[...s.get(r.id)||[]],a=new Set;for(;o.length;){let l=o.shift();if(a.has(l))continue;a.add(l);let c=i.get(l);if(c&&!rb.has(c.type)&&vI.has(c.type)&&bI(c,t))for(let u of s.get(l)||[])o.push(u)}}}function ob(n,e,t={}){if(!(!n||!e||typeof e.type!="string"))for(let i of Array.isArray(n.blueprints)?n.blueprints:[])i&&typeof i=="object"&&SI(i,e,t)}var lh=["fish_minnow","fish_silver","fish_carp"],wI={fish_minnow:"river minnow",fish_silver:"silver fish",fish_carp:"lazy carp"},Em=1.45,EI=new Set(lh);function TI(n,e,t){let i=1/0;for(let s of n||[]){let[r,o]=vr(s,e,t),a=Math.hypot(e-r,t-o);a<i&&(i=a)}return i}function AI(n,e,t,i,s=Em){if(!n?.length||!(e>0))return!1;let r=TI(n,t,i),o=e;return r>=o-.35&&r<=o+s+.65}function CI(n,e,t,i,s=Em){for(let r of n||[]){if((r.level||"world")!==e)continue;let o=r.radius??2;if(Math.hypot(t-r.at[0],i-r.at[1])<=o+s+1.25)return r}return null}function ab({segments:n=[],halfWidth:e=0,soakZones:t=[],level:i,x:s,y:r,reach:o=Em}){if(i!=="world")return null;let a=CI(t,i,s,r,o);return a?{id:a.id||"soak",kind:"soak",at:a.at}:AI(n,e,s,r,o)?{id:"river",kind:"river",at:[s,r]}:null}function RI(n,e){for(let t of n?.quests?.active||[]){if(!Pi(n,t))continue;let i=zs(n,t,e);if(i&&i.step.type==="collect"&&EI.has(i.step.item))return i.step.item}return null}function PI(n,e,t=Math.random){let i=RI(n,e);if(i&&t()<.7)return i;let s=Math.floor(t()*lh.length)%lh.length;return lh[s]}function lb(n,e,t=Math.random){let i=PI(n,e,t),s=wI[i]||i,r=(n.inventory||[]).includes(i),o=eh(n,e,i),a=(n.inventory||[]).includes(i);return{item:i,label:s,fresh:!r&&a,effects:o}}var II=()=>({keys:{forward:!1,back:!1,left:!1,right:!1,lookLeft:!1,lookRight:!1,hop:!1},stickX:0,stickY:0,stickTouch:!1,lookX:0,lookY:0,lookTouch:!1});function Tm(n="play",e=null){let i=Yv(e??{getItem:()=>null,setItem:()=>{}});return{mode:n,world:null,overworld:null,fit:{},save:i,netId:"",character:{name:i.character.name,gender:i.character.gender},peers:[],player:Vx(),level:"world",river:null,regionName:"",regionId:"",score:0,playing:!1,playMode:"story",paused:!1,mapOpen:!1,solids:[],bodies:[],clock:null,season:null,daylight:null,input:II(),view:{lookH:0,lookPitch:0},portalLatch:null,selection:null,dirty:!1}}var LI=["mochi.glb","floor.glb","wall.glb","dirt.glb"];function Am(n,e,t=[],i=null){let s=P_(R_(n,e),i),r=ub(s,e);for(let c of t)r.add(c);let o={segments:ju(e.river),halfWidth:e.river.width/2},a=e.spawn||{at:[0,-2.2],h:0},l=n_(s);return{world:s,overworld:e,files:r,river:o,spawn:a,pumpkinSpots:l}}function ub(n,e){let t=new Set(LI);for(let i of[...n.dress,...n.web_park,...n.clothing])t.add(i.file);for(let i of e.dressing||[])t.add(i.file);for(let i of n.dynamics)t.add(Fo[i.kind].file);for(let i of n.web_toys)t.add(Fo[i.kind].file);return t}function cb(n,e,t,i){if(!Array.isArray(i)||i.length<3||!t)return;let[s,r,o]=i;n.push({level:e,x:t[0],y:t[1],z:t[2]||0,hx:s,hy:r,height:o})}function ch(n,e){let t=[];for(let i of n){let s=i.level||e;cb(t,s,i.at,i.solid);for(let r of i.solids||[])cb(t,r.level||s,r.at||i.at,r.solid)}return t}var m=Tm("play",localStorage);function Cm(n,e){if(e===gx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===il||e===bu){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===il)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var uh=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new km(t)}),this.register(function(t){return new Um(t)}),this.register(function(t){return new qm(t)}),this.register(function(t){return new $m(t)}),this.register(function(t){return new Xm(t)}),this.register(function(t){return new Fm(t)}),this.register(function(t){return new Bm(t)}),this.register(function(t){return new zm(t)}),this.register(function(t){return new Hm(t)}),this.register(function(t){return new Nm(t)}),this.register(function(t){return new Vm(t)}),this.register(function(t){return new Om(t)}),this.register(function(t){return new Wm(t)}),this.register(function(t){return new Gm(t)}),this.register(function(t){return new Lm(t)}),this.register(function(t){return new Ym(t)}),this.register(function(t){return new jm(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ds.extractUrlBase(e);o=Ds.resolveURL(c,this.path)}else o=Ds.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Za(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mb){try{o[nt.KHR_BINARY_GLTF]=new Zm(e)}catch(h){s&&s(h);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ig(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case nt.KHR_MATERIALS_UNLIT:o[h]=new Dm;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Km(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[h]=new Jm;break;case nt.KHR_MESH_QUANTIZATION:o[h]=new Qm;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function DI(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lm=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],bn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ti(u),c.distance=h;break;case"spot":c=new du(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Dm=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,i){let s=[];e.color=new oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(s)}},Nm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},km=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},Um=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Om=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Fm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qe)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Bm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}},Hm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,qe)),Promise.all(r)}},Gm=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Wm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qm=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$m=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xm=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ym=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},jm=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let x=new Ie,y=new P,g=new rn,v=new P(1,1,1),b=new Ts(p.geometry,p.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&y.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,x.compose(y,g,v));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];b.instanceColor=new ur(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);Tt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},mb="glTF",Ml=12,hb={JSON:1313821514,BIN:5130562},Zm=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ml),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ml,r=new DataView(e,Ml),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===hb.JSON){let c=new Uint8Array(e,Ml+o,a);this.content=i.decode(c)}else if(l===hb.BIN){let c=Ml+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Km=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=tg[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=tg[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Yo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let x=d.attributes[p],y=l[p];y!==void 0&&(x.normalized=y)}h(d)},a,c,bn,f)})})}},Jm=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qm=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},hh=class extends Rs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,p=e*c,x=p-c,y=-2*d+3*f,g=d-f,v=1-y,b=g-f+h;for(let _=0;_!==a;_++){let R=o[x+_+a],M=o[x+_+l]*u,T=o[p+_+a],I=o[p+_]*u;r[_]=v*R+b*M+y*T+g*I}return r}},NI=new rn,eg=class extends hh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return NI.fromArray(r).normalize().toArray(r),r}},Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fb={9728:jt,9729:hn,9984:vp,9985:Oa,9986:so,9987:_i},db={33071:Wi,33648:Ga,10497:Zt},Rm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kI={CUBICSPLINE:void 0,LINEAR:yo,STEP:go},Pm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UI(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),n.DefaultMaterial}function Sr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rs(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OI(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function FI(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BI(n){let e,t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Im(t.attributes):e=n.indices+":"+Im(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Im(n.targets[i]);return e}function Im(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ng(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zI(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var HI=new Ie,ig=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Ls(this.options.manager):this.textureLoader=new pu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Za(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Sr(r,a,s),rs(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ds.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Rm[s.type],a=Yo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Nt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Rm[s.type],c=Yo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,y;if(d&&d!==h){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(v);b||(x=new c(a,g*d,s.count*d/u),b=new So(x,d/u),t.cache.add(v,b)),y=new lr(b,l,f%d/u,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),y=new Nt(x,l,p);if(s.sparse!==void 0){let g=Rm.SCALAR,v=Yo[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new v(o[1],b,s.sparse.count*g),M=new c(o[2],_,s.sparse.count*l);a!==null&&(y=new Nt(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let T=0,I=R.length;T<I;T++){let E=R[T];if(y.setX(E,M[T*l]),l>=2&&y.setY(E,M[T*l+1]),l>=3&&y.setZ(E,M[T*l+2]),l>=4&&y.setW(E,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=p}return y})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=fb[f.magFilter]||hn,u.minFilter=fb[f.minFilter]||_i,u.wrapS=db[f.wrapS]||Zt,u.wrapT=db[f.wrapT]||Zt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==hn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let y=new on(x);y.needsUpdate=!0,f(y)}),t.load(Ds.resolveURL(h,r.path),p,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),rs(h,o),h.userData.mimeType=o.mimeType||zI(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new ui,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Yi,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Je}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let h=s[nt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,qe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=oi);let u=r.alphaMode||Pm.OPAQUE;if(u===Pm.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pm.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==fn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fn){let h=r.emissiveFactor;a.emissive=new oe().setRGB(h[0],h[1],h[2],bn)}return r.emissiveTexture!==void 0&&o!==fn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),rs(h,r),t.associations.set(h,{materials:e}),r.extensions&&Sr(s,h,r),h})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pb(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=BI(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=pb(new ot,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?UI(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let x=u[d],y=o[d],g,v=c[d];if(y.mode===Kn.TRIANGLES||y.mode===Kn.TRIANGLE_STRIP||y.mode===Kn.TRIANGLE_FAN||y.mode===void 0)g=r.isSkinnedMesh===!0?new Kc(x,v):new Y(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),y.mode===Kn.TRIANGLE_STRIP?g.geometry=Cm(g.geometry,bu):y.mode===Kn.TRIANGLE_FAN&&(g.geometry=Cm(g.geometry,il));else if(y.mode===Kn.LINES)g=new As(x,v);else if(y.mode===Kn.LINE_STRIP)g=new Eo(x,v);else if(y.mode===Kn.LINE_LOOP)g=new tu(x,v);else if(y.mode===Kn.POINTS)g=new Ei(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(g.geometry.morphAttributes).length>0&&FI(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),rs(g,r),y.extensions&&Sr(s,g,y),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Sr(s,h[0],r),h[0];let f=new ke;r.extensions&&Sr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ut(Ct.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Es(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jc(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],x=d.target,y=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",y)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],x=h[3],y=h[4],g=[];for(let v=0,b=f.length;v<b;v++){let _=f[v],R=d[v],M=p[v],T=x[v],I=y[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=i._createAnimationTracks(_,R,M,T,I);if(E)for(let S=0;S<E.length;S++)g.push(E[S])}return new To(r,void 0,g)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,HI)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Ya:c.length>1?u=new ke:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),rs(u,r),r.extensions&&Sr(i,u,r),r.matrix!==void 0){let h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ke;i.name&&(r.name=s.createUniqueName(i.name)),rs(r,i),i.extensions&&Sr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof En||f instanceof on)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Hs[r.path]===Hs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Hs[r.path]){case Hs.weights:c=ji;break;case Hs.rotation:c=Zi;break;case Hs.position:case Hs.scale:c=Ki;break;default:i.itemSize===1?c=ji:c=Ki;break}let u=s.interpolation!==void 0?kI[s.interpolation]:yo,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let p=new c(l[f]+"."+Hs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ng(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Zi?eg:hh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function VI(n,e,t){let i=e.attributes,s=new zt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let u=ng(Yo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=ng(Yo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function pb(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=tg[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return et.workingColorSpace!==bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),rs(n,e),VI(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?OI(n,e.targets,t):n})}var GI=new uh,qt=new Map;async function pn(n){if(qt.has(n))return qt.get(n);let e;try{e=await GI.loadAsync(`/assets/models/${n}`)}catch(r){return console.warn(`Missing model ${n}`,r),qt.set(n,{root:null,clips:[],box:null,missing:!0}),qt.get(n)}let t=e.scene,i=Ix.has(n)||n.includes("rug");t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!i,r.receiveShadow=!0;let o=r.name.includes("Fur"),a=[].concat(r.material);for(let l of a)o&&(l.vertexColors=!1),l.emissive&&l.emissiveIntensity>0&&l.emissive.getHex()!==0&&(l.emissiveIntensity=Math.max(l.emissiveIntensity,1.6)),l.map&&(l.map.anisotropy=pt.capabilities.getMaxAnisotropy());o&&(r.castShadow=!1)});let s=new zt().setFromObject(t);return qt.set(n,{root:t,clips:e.animations||[],box:s}),qt.get(n)}function _t(n,e,t,i,s,r){let o=qt.get(n);if(!o?.root){let h=new ke;return h.name=`missing:${n}`,h.position.copy(De(e,t,i)),r.add(h),h}let{root:a}=o,l=a.clone(!0);l.position.copy(De(e,t,i));let c=Ct.degToRad(s||0),u=n.startsWith("manor_")||n.startsWith("village/");return l.rotation.y=u?c:Math.PI-c,r.add(l),l}function fh(n){let e=new Map,t=new Map,i=n.clone();return gb(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function gb(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)gb(n.children[i],e.children[i],t)}var xb={male:{scale:1.04,tint:null,flower:!1},female:{scale:.92,tint:"#f0a8b4",flower:!0}};async function vb(){await pn("mochi.glb"),await pn("bloompin.glb")}function WI(n){n.traverse(e=>{if(!e.isMesh)return;let t=[].concat(e.material);for(let i of t)i&&i.color&&!i.userData.baseColor&&(i.userData.baseColor=i.color.clone())})}function qI(n,e){WI(n);let t=e?new oe(e):null;n.traverse(i=>{if(!i.isMesh)return;let s=i.name.includes("Fur"),r=[].concat(i.material);for(let o of r){if(!o||!o.color)continue;let a=o.userData.baseColor||o.color;o.color.copy(a),t&&o.color.lerp(t,s?.28:.42)}})}function $I(n){let e=qt.get("bloompin.glb");if(!e)return null;let t=e.root.clone(!0);return t.scale.setScalar(1.35),t.position.copy(De(-.18,.42,.58)),n.add(t),t}function XI(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=new $n(e);t.colorSpace=qe;let i=new wo(new cr({map:t,transparent:!0,depthTest:!1}));return i.position.y=1.12,i.scale.set(1.5,.38,1),i.renderOrder=8,_b(i,n),i}function _b(n,e){let t=n.material.map.image,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height);let s=String(e||"").slice(0,16);if(n.visible=!!s,!s){n.material.map.needsUpdate=!0;return}i.font="700 28px Gill Sans, Trebuchet MS, sans-serif";let r=Math.min(240,Math.max(72,i.measureText(s).width+28)),o=(t.width-r)/2;i.fillStyle="rgba(28, 14, 36, 0.86)",i.strokeStyle="rgba(242, 132, 42, 0.85)",i.lineWidth=3,YI(i,o,12,r,40,14),i.fill(),i.stroke(),i.fillStyle="#f8edd4",i.textAlign="center",i.textBaseline="middle",i.fillText(s,t.width/2,32,r-16),n.material.map.needsUpdate=!0}function YI(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function jI(){let n=new ke,e=new Je({color:"#3d9b4a",roughness:.42}),t=new Je({color:"#c8ec7a",roughness:.5}),i=new Je({color:"#1a2418",roughness:.4}),s=new Y(new tt(.22,12,10),e);s.scale.set(1.2,.78,1.05),s.position.y=.16;let r=new Y(new tt(.14,10,8),t);r.scale.set(1,.7,.55),r.position.set(0,.12,.12);let o=new Y(new tt(.13,10,8),e);o.position.set(0,.26,.16);function a(c){let u=new ke,h=new Y(new tt(.045,8,8),new Je({color:"#f4f7e8"})),f=new Y(new tt(.02,8,8),i);return f.position.z=.03,u.add(h,f),u.position.set(c*.07,.32,.22),u}function l(c,u){let h=new Y(new tt(.07,8,8),e);return h.scale.set(.7,.45,1.1),h.position.set(c*.16,.07,u),h}return n.add(s,r,o,a(-1),a(1),l(-1,.08),l(1,.08),l(-1,-.1),l(1,-.1)),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),n.visible=!1,n}function dh(n,{gender:e="male",name:t=""}={}){let i=qt.get("mochi.glb"),s=fh(i.root);s.traverse(M=>{M.isMesh&&(Array.isArray(M.material)?M.material=M.material.map(T=>T.clone()):M.material&&(M.material=M.material.clone()),M.name.includes("Fur")||(M.castShadow=!0))});let r=new zt().setFromObject(s),o=r.getSize(new P),a=r.getCenter(new P);s.position.sub(a),s.position.y+=o.y/2;let l=i.clips?.length?new Co(s):null,c={},u="";if(l){for(let M of i.clips){let T=l.clipAction(M);T.enabled=!0,c[M.name]=T}c.Idle&&(c.Idle.setLoop(Lo,1/0),c.Idle.play(),u="Idle"),c.Walk&&c.Walk.setLoop(Lo,1/0),c.Hop&&c.Hop.setLoop(_u,1)}let h=$I(s),f=XI(t),d=new ke;d.add(s),d.add(f),n.add(d);let p=Object.entries(QI).map(([M,T])=>({bone:s.getObjectByName(M),side:T})).filter(M=>M.bone);function x(M=1){if(M>0)for(let{bone:T,side:I}of p)T.quaternion.multiply(eL.setFromAxisAngle(JI,I*KI*M))}function y(){return o.y*ZI*s.scale.y}function g(M){let T=xb[M]||xb.male;s.scale.setScalar(T.scale),qI(s,T.tint),h&&(h.visible=T.flower)}function v(M,{once:T=!1}={}){if(!l||!c[M]||u===M&&!T)return;let I=c[M],E=u?c[u]:null;I.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.12).play(),(T||M==="Hop"||M==="Flop")&&I.setLoop(_u,1),E&&E!==I&&E.fadeOut(.12),u=M}g(e);let b=jI();d.add(b);let _="";function R(M){let T=M==="frog";_=T?"frog":"",s.visible=!T,b.visible=T,f.position.y=T?.52:1.12}return{holder:d,model:s,mixer:l,actions:c,setLook:g,setName:M=>_b(f,M),setClip:v,setForm:R,straddle:x,bellyHeight:y,form:()=>_,dispose(){n.remove(d),l?.stopAllAction()}}}var ZI=.21,KI=.5,JI=new P(0,0,1),QI={leg_fl:1,leg_bl:1,leg_fr:-1,leg_br:-1},eL=new rn;function ph(n,{x:e,y:t,z:i=0,h:s=0,flop:r=0,pitch:o=0,roll:a=0}){n.position.copy(De(e,t,i)),n.rotation.order="YXZ",n.rotation.y=Ct.degToRad(s),n.rotation.x=Ct.degToRad(o),n.rotation.z=r>0?Math.sin(r*8)*.6:Ct.degToRad(a)}var st=null,bb=new Map,rg=null,jo=null;async function Mb(){await vb(),st=dh(Qe,{gender:m.character?.gender||"male",name:m.character?.name||""}),rg=Qe,jo=new Ti("#c9a0ff",0,4.5),jo.position.set(0,.45,0),st.holder.add(jo)}function Sb(){return st}function Vs(n){st?.setClip(n,{once:n==="Hop"||n==="Flop"})}var tL=.045;function mh(){return-(st?.bellyHeight?.()??.14)+tL}function gh(n){!st||!n||(rg=st.holder.parent,n.add(st.holder),st.holder.position.set(0,mh(),0),st.holder.rotation.set(0,0,0))}function Zo(){if(!st)return;let n=rg||Qe;st.holder.parent!==n&&n.add(st.holder)}function sg(n){st?.setClip(n)}function og(n,e){if(!st?.mixer)return;let t=m.rides?.[0],i=t&&(t.phase==="mounting"||t.phase==="dismounting"),s=t?.phase==="flying"||(t?.sit||0)>.4;i&&st.actions.Hop?sg("Hop"):sg(s?"Idle":e&&st.actions.Walk?"Walk":"Idle"),st.mixer.update(n);let r=t?.phase==="flying"?1:i?t.sit:0;r>0&&st.straddle?.(r)}function Sl(){if(!st)return;let n=m.rides?.[0];if(st.holder.parent&&st.holder.parent!==Qe){st.holder.position.set(0,mh(),0),st.holder.rotation.order="YXZ",st.holder.rotation.x=0,st.holder.rotation.y=0,st.holder.rotation.z=0;return}if(ph(st.holder,{...m.player,sit:n?.sit||0}),st.setForm?.(m.player.form),jo){let e=m.player.glowColor;jo.intensity=e?2.4:0,e&&jo.color.set(e)}}function wb(n,e){st&&(st.setLook(n||"male"),st.setName(e||m.character?.name||""))}function Eb(n,e,t){let i=m.world.clothing.find(r=>r.id===t);if(!i||!n?.model)return null;let s=e.get(t);if(s)return s;s=new ke;for(let r of m.fit[t]||[]){let o=qt.get(i.file);if(!o)continue;let a=o.root.clone(!0);a.position.copy(De(r.at[0],r.at[1],r.at[2])),s.add(a)}return e.set(t,s),n.model.add(s),s}function wl(n,e,t){if(!n?.model)return;let i=new Set(t||[]);for(let s of i)Eb(n,e,s);for(let[s,r]of e)r.visible=i.has(s)}function yh(n){if(!st)return;let e=Eb(st,bb,n);e&&(e.visible=ns(m.save).has(n))}function xh(){wl(st,bb,[...ns(m.save)])}Qt();var wr=new Map;function ag(n,e,t){return n+(e-n)*t}function nL(n){return Array.isArray(n)?n.join("\0"):""}function lg(n){let e=new Set;for(let t of n){if(!t?.id||t.id===m.netId)continue;e.add(t.id);let i=wr.get(t.id);if(!i){let r=dh(Qe,{gender:t.gender,name:t.name});i={id:t.id,capy:r,gender:t.gender,name:t.name,worn:new Map,clothesKey:"",x:t.x,y:t.y,z:t.z||0,h:t.h||0,target:t},wr.set(t.id,i),m.playing&&ce(`${t.name||"A capybara"} wandered in`)}i.gender!==t.gender&&(i.gender=t.gender,i.capy.setLook(t.gender)),i.name!==t.name&&(i.name=t.name,i.capy.setName(t.name)),i.target=t,i.capy.setForm?.(t.form);let s=nL(t.clothes);s!==i.clothesKey&&(i.clothesKey=s,wl(i.capy,i.worn,t.clothes||[]))}for(let[t,i]of wr)e.has(t)||(wr.delete(t),i.capy.dispose(),m.playing&&ce(`${i.name||"A capybara"} headed home`));m.peers=n.filter(t=>t.id!==m.netId)}function Ab(n){let e=Math.min(1,n*10);for(let t of wr.values()){let i=t.target;t.x=ag(t.x,i.x,e),t.y=ag(t.y,i.y,e),t.z=ag(t.z,i.z||0,e),t.h=i.h||0,ph(t.capy.holder,t);let s=i.level===m.level;t.capy.holder.visible=s,!(!s||!t.capy.mixer)&&(t.capy.setClip(i.walking&&t.capy.actions.Walk?"Walk":"Idle"),t.capy.mixer.update(n),t.capy.holder.rotation.z=i.flop>0?Math.sin(i.flop*8)*.6:0)}}function Cb(){for(let n of wr.values())n.capy.dispose();wr.clear(),m.peers=[]}var Ot=new jn("#ffb070",2.4);Ot.castShadow=!0;Ot.shadow.mapSize.set(Rt.shadow,Rt.shadow);Ot.shadow.camera.near=.5;Ot.shadow.camera.far=40;Ot.shadow.camera.left=Ot.shadow.camera.bottom=-11;Ot.shadow.camera.right=Ot.shadow.camera.top=11;Ot.shadow.bias=-4e-4;Ot.shadow.normalBias=.02;Ot.shadow.radius=3;Qe.add(Ot);Qe.add(Ot.target);var Mh=new jn("#8fa6ff",.7);Qe.add(Mh);Qe.add(Mh.target);var Er=new fu("#8d78c8","#3a2418",.9);Qe.add(Er);var cg={park:{sun:2.4,moon:.7,hemi:.9,env:.32,exposure:1.15},patch:{sun:2.1,moon:.8,hemi:.8,env:.28,exposure:1.15},house:{sun:1.1,moon:.35,hemi:.45,env:.18,exposure:1.25,sunColor:"#ffc890"},hall:{sun:1.2,moon:.4,hemi:.5,env:.2,exposure:1.22,sunColor:"#ffd4a0"},cafe:{sun:1.35,moon:.4,hemi:.55,env:.22,exposure:1.2,sunColor:"#ffc8a0"},mine:{sun:.45,moon:.25,hemi:.28,env:.08,exposure:1.05,sunColor:"#c8a070"}},ug=[];function Rb(n){let e=new Map,t=[];for(let i of Array.isArray(n.lights)?n.lights:[]){let s=i.level||"house",r=e.get(s)||0;r>=3||(e.set(s,r+1),t.push(i))}for(let i of t){let s=i.at||[0,0,1.5],r=i.intensity??1.2,o=new Ti(i.color||"#ff9a4a",r,i.distance??7);o.position.copy(De(s[0],s[1],s[2]??1.5)),o.castShadow=!1,Qe.add(o),ug.push({light:o,base:r,flicker:!!i.flicker,level:i.level||"house"})}}var Pb=Qe.fog.density;function Ib(n,e){Pb=e,Qe.fog.density=e;let t=cg[n]||(n==="world"?cg.park:cg.house);Ot.intensity=t.sun,Mh.intensity=t.moon,Er.intensity=t.hemi,Qe.environmentIntensity=t.env,pt.toneMappingExposure=t.exposure,Ot.color.set(t.sunColor||"#ffb070"),Er.color.set("#8d78c8"),Er.groundColor.set("#3a2418"),Qe.fog.color.set("#6b3a5e"),Qe.background.set("#6b3a5e");for(let i of ug){let s=i.level===n;i.light.visible=s,i.light.intensity=s?i.base:0}}function Lb(n=1){Qe.fog.density=Pb*n}function hg(n){for(let e of ug)!e.light.visible||!e.flicker||(e.light.intensity=e.base*(.82+.18*Math.sin(n*2.3+e.light.id)))}function Db(n,e,t=[-.35,-.47,.7]){let i=Math.max(t[2],.3),r=16/Math.hypot(t[0],t[1],i);Ot.position.copy(De(n+t[0]*r,e+t[1]*r,i*r)),Ot.target.position.copy(De(n,e,0)),Ot.target.updateMatrixWorld()}var Tl=(n,e)=>n.setRGB(e[0],e[1],e[2],qe);function Nb(n){Tl(Ot.color,n.sun),Ot.intensity=n.key,Mh.intensity=0,Tl(Er.color,n.hemiSky),Tl(Er.groundColor,n.hemiGround),Er.intensity=n.hemi,Tl(Qe.fog.color,n.fog),Tl(Qe.background,n.fog),Qe.environmentIntensity=n.env,pt.toneMappingExposure=n.exposure}function kb(n,e){let t=0,i=0,s=0,r=!1;return o=>{if(r||!n()){s=o;return}s&&(i+=o-s,t+=1),s=o,!(t<150)&&(r=!0,i/t>24&&(Rt.dprCap=1,pt.shadowMap.type=Ro,Ot.shadow.mapSize.set(512,512),Ot.shadow.map?.dispose(),Ot.shadow.map=null,Qi(!0),e?.()))}}var iL=120,sL=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,rL=`
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
  }`,Ko=(n,e)=>e.setRGB(n[0],n[1],n[2],qe);function Ub(){let n={zenith:{value:new oe},horizon:{value:new oe},ground:{value:new oe},sunColor:{value:new oe},sunDir:{value:new P(0,1,0)},moonDir:{value:new P(0,-1,0)},cloudLit:{value:new oe},cloudShade:{value:new oe},cloudCover:{value:.4},stars:{value:0},moonPhase:{value:.5},time:{value:0}},e=new vt({side:Vt,depthWrite:!1,fog:!1,uniforms:n,defines:{OCTAVES:Rt.coarse?2:4},vertexShader:sL,fragmentShader:rL}),t=new Y(new tt(iL,48,24),e);t.renderOrder=-1,t.frustumCulled=!1,Qe.add(t);let i=(s,r)=>r.set(s[0],s[2],-s[1]).normalize();return{dome:t,update(s,r,o,a,l,c){Ko(s.zenith,n.zenith.value),Ko(s.horizon,n.horizon.value),Ko(s.ground,n.ground.value),Ko(s.sun,n.sunColor.value),Ko(s.cloudLit,n.cloudLit.value),Ko(s.cloudShade,n.cloudShade.value),i(r,n.sunDir.value),i(o,n.moonDir.value),n.stars.value=s.stars,n.moonPhase.value=a,n.cloudCover.value=l,n.time.value=c}}}var Ob="cappyworld.sound",pg={buses:{},sounds:[],ambience:[],music:[]},Bn=kp({bank:pg,baseUrl:"/assets/"}),Tr=pg,mg=!1,Jo=!1,Ar=null,Al={},fg=!1,Li=oL();function oL(){try{let n=JSON.parse(localStorage.getItem(Ob)||"{}"),e=Number(n.volume);return{volume:Number.isFinite(e)?Math.min(1,Math.max(0,e)):1,muted:n.muted===!0}}catch{return{volume:1,muted:!1}}}function Fb(){try{localStorage.setItem(Ob,JSON.stringify(Li))}catch{}}function dg(){return Li.muted?0:Li.volume}function Sh(){Bn.setBusVolume("master",(Tr.buses?.master??1)*dg()),Ar&&(Ar.gain.value=dg())}async function Bb(){try{let n=await fetch("/assets/village/audio.json");if(!n.ok)throw new Error(`${n.status}`);Tr=await n.json(),mg=!0}catch(n){console.warn("audio.json unavailable; using synth blips only",n.message||n),Tr=pg}Bn.setBank(structuredClone(Tr)),Sh(),Cn(),Jo&&Bn.updateEnvironment(Al)}function wh(n,e){return!Jo||!mg||!Tr.sounds?.some(t=>t.id===n)?null:Bn.play(n,e)}function en(n,e,t,i){wh(n)||Dt(e,t,i)}function Dt(n,e,t="sine"){let i=Bn.context;if(!Jo||!i||!Ar||dg()<=0)return;let s=i.currentTime,r=i.createOscillator(),o=i.createGain();r.type=t,r.frequency.value=n,o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.06,s+.02),o.gain.exponentialRampToValueAtTime(1e-4,s+e),r.connect(o),o.connect(Ar),r.start(s),r.stop(s+e+.02)}function Di(){let n=Bn.unlock(),e=Bn.context;return e&&(Jo=!0,Ar||(Ar=e.createGain(),Ar.connect(e.destination)),Sh(),Bn.updateEnvironment(Al),Cn()),n}function Cn(){fg=!!(m.playing&&!m.paused&&!document.hidden),Bn.setBusVolume("music",fg?Tr.buses?.music??1:0)}function zb(n){Al=n,Jo&&Bn.updateEnvironment(Al)}function Hb(n,e,t){Bn.setListener(n,e,t)}function gg(){return{...Li}}function yg(n){Li.volume=Math.min(1,Math.max(0,Number(n)||0)),Li.volume>0&&(Li.muted=!1),Fb(),Sh()}function xg(n){Li.muted=!!n,Fb(),Sh()}window.cappyAudio={get:()=>({state:Bn.context?.state??"not created",unlocked:Jo,bankLoaded:mg,sounds:(Tr.sounds||[]).map(n=>n.id),environment:{...Al},music:fg,volume:Li.volume,muted:Li.muted}),play:n=>!!wh(n),setVolume:yg,setMuted:xg,engine:Bn};function aL(){let n=["pointerdown","keydown","click","touchend"],e=()=>{let t=Di();Promise.resolve(t).then(()=>{if(window.cappyAudio?.get().state==="running")for(let i of n)window.removeEventListener(i,e,!0)}).catch(()=>{})};for(let t of n)window.addEventListener(t,e,!0)}function lL(n){if(!n||n.querySelector("#pause-sound"))return;let e=document.createElement("div");e.id="pause-sound",e.className="row",e.style.cssText="display:flex;align-items:center;gap:10px;justify-content:center;margin:6px 0;";let t=document.createElement("button");t.type="button",t.id="pause-mute";let i=document.createElement("input");i.type="range",i.id="pause-volume",i.min="0",i.max="100",i.step="5",i.setAttribute("aria-label","Volume"),i.style.cssText="flex:1;max-width:180px;accent-color:#f0a24a;";let s=()=>{let{volume:o,muted:a}=gg();t.textContent=a?"Sound: off":"Sound: on",t.setAttribute("aria-pressed",String(a)),i.value=String(Math.round(o*100))};t.addEventListener("click",()=>{xg(!gg().muted),s()}),i.addEventListener("input",()=>{yg(Number(i.value)/100),s()}),e.append(t,i);let r=n.querySelector("#pause-version");n.insertBefore(e,r||null),s()}function Vb(){aL(),lL(document.querySelector("#paused")),document.addEventListener("click",n=>{let e=n.target instanceof Element?n.target.closest("button"):null;e&&!e.disabled&&e.closest(".sheet")&&wh("ui_click")})}function cL(n,e=Gt){let t=(Number(n)%24+24)%24,{dawnHour:i,duskHour:s}=e;return t>=i-1&&t<i+2?"dawn":t>=i+2&&t<s?"day":t>=s&&t<s+3?"dusk":"night"}function Gb(n,e=""){if(!n)return null;let t={tod:cL(n.hours),weather:n.weather,season:n.season};return e&&(t.event=e),t}function Wb(n,e){return e?n.event?{event:n.event}:{}:n}var os={x:34,y:18,z:34},vg=2400,qb=2600,$b=17,Xb=.55,Yb=.12,uL=1.1;function jb(n){let e=new Float32Array(n*3);for(let t=0;t<n;t+=1)e[t*3]=(Math.random()-.5)*os.x,e[t*3+1]=(Math.random()-.5)*os.y,e[t*3+2]=(Math.random()-.5)*os.z;return e}function Qo(n,e,t){let i=t/2,s=n;for(;s-e>i;)s-=t;for(;s-e<-i;)s+=t;return s}function hL(){let n=document.createElement("canvas");n.width=n.height=32;let e=n.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32);let i=new $n(n);return i.colorSpace=qe,i}function Zb(n){let e=jb(vg),t=new ot;t.setAttribute("position",new Nt(new Float32Array(vg*6),3));let i=new Yi({color:"#b9cfe8",transparent:!0,opacity:0,depthWrite:!1}),s=new As(t,i);s.frustumCulled=!1,s.visible=!1,n.add(s);let r=jb(qb),o=new ot;o.setAttribute("position",new Nt(r,3));let a=new ui({color:"#ffffff",size:.21,map:hL(),transparent:!0,opacity:0,depthWrite:!1}),l=new Ei(o,a);l.frustumCulled=!1,l.visible=!1,n.add(l);let c=!1;function u(d){for(let p of[e,r])for(let x=0;x<p.length;x+=3)p[x]+=d.x,p[x+1]+=d.y,p[x+2]+=d.z;c=!0}function h(d,p,x){let y=t.attributes.position.array,g=Math.round(vg*Math.min(1,x));for(let v=0;v<g;v+=1){let b=v*3;e[b]+=Yb*$b*d,e[b+1]-=$b*d*(.85+v%7*.05),e[b]=Qo(e[b],p.x,os.x),e[b+1]=Qo(e[b+1],p.y,os.y),e[b+2]=Qo(e[b+2],p.z,os.z);let _=v*6;y[_]=e[b],y[_+1]=e[b+1],y[_+2]=e[b+2],y[_+3]=e[b]-Yb*Xb,y[_+4]=e[b+1]+Xb,y[_+5]=e[b+2]}t.setDrawRange(0,g*2),t.attributes.position.needsUpdate=!0}function f(d,p,x,y){let g=Math.round(qb*Math.min(1,x));for(let v=0;v<g;v+=1){let b=v*3;r[b]+=Math.sin(y*.9+v*1.7)*.35*d,r[b+1]-=uL*d*(.7+v%5*.12),r[b+2]+=Math.cos(y*.7+v*2.3)*.3*d,r[b]=Qo(r[b],p.x,os.x),r[b+1]=Qo(r[b+1],p.y,os.y),r[b+2]=Qo(r[b+2],p.z,os.z)}o.setDrawRange(0,g),o.attributes.position.needsUpdate=!0}return{update(d,p,x,y,g=0){let v=Math.min(.1,Math.max(0,d||0)),b=y&&x?.rain||0,_=y&&x?.snow||0;(b>.01||_>.01)&&!c&&u(p),s.visible=b>.01,l.visible=_>.01,s.visible&&(i.opacity=.65*Math.min(1,b*1.5),h(v,p,b)),l.visible&&(a.opacity=.95*Math.min(1,_*1.5),f(v,p,_,g))},hide(){s.visible=!1,l.visible=!1}}}var Qb='<path d="M7 18h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.1 9.2 4.4 4.4 0 0 0 7 18z" fill="currentColor"/>',_g=`<g transform="translate(0 -3)">${Qb}</g>`,Kb='<circle cx="12" cy="12" r="4.4" fill="currentColor"/><path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',fL={sun:Kb,moon:'<path d="M19.5 14.6A7.9 7.9 0 1 1 9.4 4.5a6.3 6.3 0 0 0 10.1 10.1z" fill="currentColor"/>',clear:'<path d="M12 3.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z" fill="currentColor"/>',cloudy:Qb,rain:`${_g}<path d="M8.5 18.5l-1 2.6M12.5 18.5l-1 2.6M16.5 18.5l-1 2.6" stroke="#8fc3ff" stroke-width="2" stroke-linecap="round"/>`,storm:`${_g}<path d="M12.6 14.6l-2.8 4.3h2.6l-1.4 3.8 4.3-5.6h-2.7l1.7-2.5z" fill="#ffd36a"/>`,snow:`${_g}<g fill="#ffffff"><circle cx="8" cy="19.2" r="1.25"/><circle cx="12" cy="21" r="1.25"/><circle cx="16" cy="19.2" r="1.25"/></g>`,fog:'<path d="M4 8h16M6.5 12h11M4 16h16M8 20h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',spring:'<g fill="currentColor"><circle cx="12" cy="6.8" r="3"/><circle cx="17" cy="10.4" r="3"/><circle cx="15.1" cy="16.2" r="3"/><circle cx="8.9" cy="16.2" r="3"/><circle cx="7" cy="10.4" r="3"/></g><circle cx="12" cy="12" r="2.5" fill="#ffd36a"/>',summer:Kb,autumn:'<path d="M5 19.5C5 10.5 11 5 20 4c-1 9-6.5 15.5-15 15.5z" fill="currentColor"/><path d="M5.5 19l8-8" stroke="#7a3410" stroke-width="1.6" stroke-linecap="round"/>',winter:'<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.6 4.6L12 6.1l2.4-1.5M9.6 19.4L12 17.9l2.4 1.5"/></g>'},Eh={clear:"Clear",cloudy:"Cloudy",rain:"Rain",storm:"Storm",snow:"Snow",fog:"Fog",spring:"Spring",summer:"Summer",autumn:"Autumn",winter:"Winter"};function bg(n){return`<svg viewBox="0 0 24 24" aria-hidden="true">${fL[n]||""}</svg>`}function Jb(n){let e=Math.floor((n%24+24)%24*60),t=Math.floor(e/60),i=e%60;return`${t%12===0?12:t%12}:${String(i).padStart(2,"0")} ${t<12?"AM":"PM"}`}function eM(n=document.body){let e=document.createElement("div");e.id="sky-hud",e.setAttribute("role","status"),e.innerHTML=`
    <div class="sky-cell sky-time">
      <span class="sky-icon" data-part="daynight"></span>
      <span class="sky-stack">
        <span class="sky-label sky-clock" data-part="clock"></span>
        <span class="sky-track" aria-hidden="true"><span class="sky-dot" data-part="dot"></span></span>
      </span>
    </div>
    <div class="sky-cell sky-weather">
      <span class="sky-icon" data-part="weather-icon"></span>
      <span class="sky-label" data-part="weather"></span>
    </div>
    <div class="sky-cell sky-season">
      <span class="sky-icon" data-part="season-icon"></span>
      <span class="sky-label" data-part="season"></span>
    </div>`,n.appendChild(e);let t=o=>e.querySelector(`[data-part="${o}"]`),i={daynight:t("daynight"),clock:t("clock"),dot:t("dot"),weatherIcon:t("weather-icon"),weather:t("weather"),seasonIcon:t("season-icon"),season:t("season")},s={};function r(o,a,l){s[o]!==a&&(s[o]=a,l(a))}return{element:e,update(o){if(!o)return;let a=!!o.isNight;r("daynight",a?"moon":"sun",l=>{i.daynight.innerHTML=bg(l),i.daynight.dataset.icon=l,e.classList.toggle("night",l==="moon")}),r("clock",Jb(o.hours),l=>{i.clock.textContent=l}),r("dot",Math.round(o.timeOfDay*400)/4,l=>{i.dot.style.left=`${l}%`}),r("weather",o.weather,l=>{i.weatherIcon.innerHTML=bg(l),i.weatherIcon.dataset.icon=l,i.weather.textContent=Eh[l]||l}),r("season",o.season,l=>{i.seasonIcon.innerHTML=bg(l),i.seasonIcon.dataset.icon=l,i.season.textContent=Eh[l]||l}),r("title",`${Jb(o.hours)} \xB7 ${Eh[o.weather]||o.weather} \xB7 ${Eh[o.season]||o.season}`,l=>e.setAttribute("aria-label",l))}}}var Cr={weather:null,season:null};function dL(n){let e=n.get("weather"),t=n.get("season"),i=yr.includes(t)?t:n.get("seasonOfYear");return Cr.weather=ml.includes(e)?e:null,Cr.season=yr.includes(i)?i:null,yr.includes(t)?null:t}function pL(n){if(n.has("tod"))return Number(n.get("tod"))*24;if(n.has("time"))return Number(n.get("time"));let e=Number(m.save?.clockHours);return Number.isFinite(e)?e:9}function tM(n){let e=new URLSearchParams(location.search),t=pL(e),i=e.has("speed")?Number(e.get("speed")):1,s=e.has("tod")||e.has("time"),r=Number.isInteger(m.save?.clockDay)?m.save.clockDay:0;m.clock=o_(Number.isFinite(t)?(t%24+24)%24:9,r),m.season=f_(new Date,dL(e));let o=Zb(Qe),a=eM(),l=0,c=4;window.cappySky={config:Gt,get:()=>m.sky,set({time:f,tod:d,weather:p,season:x}={}){return Number.isFinite(d)?m.clock.hours=(d*24%24+24)%24:Number.isFinite(f)&&(m.clock.hours=(f%24+24)%24),p!==void 0&&(Cr.weather=ml.includes(p)?p:null),x!==void 0&&(Cr.season=yr.includes(x)?x:null),m.sky},clear(){return Cr.weather=null,Cr.season=null,m.sky}};function u(f,d){if(Gt.sharedClockInMultiplayer&&m.playMode==="multiplayer"&&!s){let{hours:x}=y_(Date.now(),Gt.daySeconds);x<m.clock.hours-12&&(m.clock.day+=1),m.clock.hours=x}else d&&a_(m.clock,f*i,Gt.daySeconds)}function h(f,d){return d.lightning>.05?(c-=f,c<=0&&(l=1,c=5+Math.random()*9),l=Math.max(0,l-f*5),l*d.lightning):(l=0,0)}return{update(f,d,p){u(f,d);let{hours:x,day:y}=m.clock,g=x_({hours:x,day:y,force:Cr});m.sky=g;let{look:v}=g,b=l_(x),_=c_(x),R=v_(h_(b[2],m.season),v),M=d?h(f,v):0;M>0&&(R.exposure*=1+1.6*M,R.hemi*=1+2.5*M),n.update(R,b,_,u_(y),v.cloud,p),m.daylight={sun:b,moon:_,night:R.night,key:b[2]>-.05?b:_};let T=!xl(m.level);T&&(Nb(R),Lb(__(v))),o.update(d?f:0,St.position,v,T,p),a.update(g)},hideEffects(){o.hide()}}}var Mg=0,nM=!1;function iM(){nM=!0,clearTimeout(Mg)}function an(){if(!m.save||nM)return;let n=e_(m.save,m.parkPose||m.player,m.clock?.hours??m.save.clockHours,m.score,m.clock?.day??m.save.clockDay);m.save=n,Ri(localStorage,n)}function wt(){clearTimeout(Mg),Mg=setTimeout(an,2e3)}function sM(){window.addEventListener("pagehide",an),setInterval(()=>{m.playing&&!m.paused&&an()},3e4)}var Rr,Cl=0,Rl=0,Pl=0,rM=!1;function aM(){Rr=document.querySelector("#coins-amt")||document.querySelector("#coins")}function lM(n){document.querySelector("#score").textContent=`Ruckus ${Math.floor(n)}`}function oM(n){Rr&&(Rr.textContent=Wt(n))}function ln(n){if(!Rr)return;let e=Math.floor(n);if(e===Rl&&Pl)return;let t=Cl;if(Rl=e,t===e||!rM){rM=!0,Cl=e,oM(e);return}cancelAnimationFrame(Pl);let i=performance.now(),s=550;Rr.classList.remove("pop"),Rr.offsetWidth,Rr.classList.add("pop");let r=o=>{let a=Math.min(1,(o-i)/s),l=1-(1-a)**3;Cl=t+(Rl-t)*l,oM(a<1?Cl:Rl),Pl=a<1?requestAnimationFrame(r):0,Pl||(Cl=Rl)};Pl=requestAnimationFrame(r)}function ea(){let n=document.querySelector("#potion-buff");if(!n)return;if(m.player?.form==="frog"){n.classList.remove("hidden"),n.textContent=`Ribbit! \xB7 ${Math.max(0,Math.ceil(m.player.frogLeft||0))}s`;return}let e=m.player?.buff,t=e?hi(m.potions,e.id):null;if(!t){n.classList.add("hidden"),n.textContent="";return}n.classList.remove("hidden"),n.textContent=`${t.label} \xB7 ${Math.max(0,Math.ceil(e.left))}s`}Qt();var Ne={world:new ke,house:new ke};Ne.world.name="world";Ne.house.name="house";Qe.add(Ne.world,Ne.house);function cM(n){for(let e of n){if(!e||Ne[e])continue;let t=new ke;t.name=e,t.visible=!1,Ne[e]=t,Qe.add(t)}return Ne}function mL(){return Go(m.world.portals,m.level,m.player.x,m.player.y)}function Il(n){m.level=n;for(let[e,t]of Object.entries(Ne))t.visible=e===n;Ib(n,m.world.levels[n].fog),document.querySelector("#where").textContent=Px[n]||m.world.levels[n]?.name||n,m.regionName="",$t()}function Sg(){let n=mL();if(!n){ce("Walk up to a gate");return}let{player:e,view:t}=m;e.x=n.spawn[0],e.y=n.spawn[1],e.z=0,e.vz=0,e.h=n.heading,t.lookH=n.heading,t.lookPitch=0,Il(n.level),ce(n.prompt),Dt(520,.12)}function uM(n,e,t){let i=m.world.levels[n],[s,r]=i.origin,[o,a]=i.half;if(_t(e,s,r,.02,0,Ne[n]).scale.set(o*2/4,1,a*2/4),n!=="world"){let h=_t(e,s,r,2.42,0,Ne[n]);h.scale.set(o*2/4,1,a*2/4),h.rotation.x=Math.PI}if(!t)return;let c=2,u=[["x",a],["x",-a],["y",o],["y",-o]];for(let[h,f]of u)for(let d=-(h==="x"?o:a)+1;d<(h==="x"?o:a)-.15;d+=c){let p=h==="x"?s+d:s+f,x=h==="x"?r+f:r+d;_t(t,p,x,0,h==="x"?0:90,Ne[n])}}var wg=[];function Eg(){for(let n of wg)n.parent?.remove(n);wg.length=0;for(let n of m.plots?.plots||[]){if(!n.sign||pi(m.save,n.id))continue;let e=_t("village/v_plot_sign.glb",n.sign.at[0],n.sign.at[1],0,n.sign.h||0,Ne.world);wg.push(e)}}function hM(){Eg()}var gL={south:0,west:90,north:180,east:270};function yL(n){return 1+((n===2||n===3?n:1)-1)*.85}function xL(n){return gL[n]??0}function Tg(n,e){return((Number.isFinite(n)?n:0)+xL(e)+360)%360}function vL(n){return[].concat(n.material||[]).map(e=>String(e?.name||"").toLowerCase())}function _L(n){Array.isArray(n.material)?n.material=n.material.map(e=>e.clone()):n.material&&(n.material=n.material.clone())}function fM(n,e){if(!n.geometry||(n.geometry.boundingBox||n.geometry.computeBoundingBox(),!n.geometry.boundingBox))return null;let t=n.geometry.boundingBox.clone();return t.applyMatrix4(new Ie().copy(e).multiply(n.matrixWorld)),t}function dM(n,e){n.updateWorldMatrix(!0,!0);let t=new Ie().copy(n.matrixWorld).invert(),i=new zt,s=!1;return n.traverse(r=>{if(!r.isMesh||!r.visible||r.userData.exteriorRoof||e&&!e(r))return;let o=fM(r,t);!o||o.isEmpty()||(i.union(o),s=!0)}),s?i:null}function bL(n){n.updateWorldMatrix(!0,!0),n.traverse(s=>{if(!s.isMesh)return;let r=vL(s);r.length&&r.every(o=>o.includes("roof")||o.includes("ridge"))&&(s.visible=!1)});let e=dM(n);if(!e)return;let t=e.min.y+(e.max.y-e.min.y)*.62,i=new Ie().copy(n.matrixWorld).invert();n.traverse(s=>{if(!s.isMesh||!s.visible||s.userData.exteriorRoof)return;let r=fM(s,i);r&&r.min.y>=t&&(s.visible=!1)})}function ML(n,e,t){let i=new Je({color:"#8a4030",roughness:.84}),s=new ke;s.name="exterior-roof",s.userData.exteriorRoof=!0;let r=Math.max(e,.4),o=Math.max(t,.4);if(n==="flat"){let p=new Y(new Lt(r+.35,.16,o+.35),i);return p.userData.exteriorRoof=!0,s.add(p),s}if(n==="hip"){let p=Math.max(r,o)*.62,x=new Y(new dn(p,Math.min(r,o)*.55,4),i);return x.rotation.y=Math.PI/4,x.userData.exteriorRoof=!0,s.add(x),s}let a=Math.min(r,o)*.42,l=r>=o,c=(l?r:o)+.35,u=(l?o:r)+.4,h=i,f=new Y(new Lt(c,.12,u*.62),h),d=new Y(new Lt(c,.12,u*.62),h.clone());return f.userData.exteriorRoof=!0,d.userData.exteriorRoof=!0,l?(f.position.set(0,a*.35,-u*.16),d.position.set(0,a*.35,u*.16),f.rotation.x=.55,d.rotation.x=-.55):(f.position.set(-u*.16,a*.35,0),d.position.set(u*.16,a*.35,0),f.rotation.z=.55,d.rotation.z=-.55),s.add(f,d),s}function SL(n,e){let t;try{t=new oe(e)}catch{return}n.traverse(i=>{if(!i.isMesh)return;_L(i);let s=[].concat(i.material||[]);for(let r of s)String(r?.name||"").toLowerCase().includes("wall")&&r.color&&r.color.copy(t)})}function Th(n,e){if(!n||!e||typeof e!="object")return;let t=n.getObjectByName("exterior-roof");t&&t.removeFromParent(),n.scale.y=yL(e.stories),bL(n);let i=dM(n);if(i&&e.roof){let r=ML(e.roof,i.max.x-i.min.x,i.max.z-i.min.z),o=e.roof==="flat"?.08:e.roof==="hip"?Math.min(i.max.x-i.min.x,i.max.z-i.min.z)*.22:.05;r.position.set((i.min.x+i.max.x)/2,i.max.y+o,(i.min.z+i.max.z)/2),n.add(r)}typeof e.wall=="string"&&SL(n,e.wall);let s=Ct.radToDeg(n.rotation.y);n.rotation.y=Ct.degToRad(Tg(s,e.door))}var Ag=new Map;function wL(n){return m.buildings?.buildings?.find(e=>e.id===n)}function Gs(){for(let e of Ag.values())e.parent?.remove(e);Ag.clear();let n=m.buildMode?.moveUid||null;for(let e of m.save.buildings||[]){if(n&&e.uid===n)continue;let t=wL(e.type);if(!t)continue;let i=_t(t.file,e.at[0],e.at[1],0,e.h||0,Ne.world);Th(i,t.exterior),Ag.set(e.uid,i)}}var Pr=new Map,EL=new Set(["yuzu","momo","pip","juniper","hana"]);function TL(n,e){let t=new oe("#c9a66b");if(Array.isArray(e)&&e.length===3&&e.every(i=>typeof i=="number")){let[i,s,r]=e;t=i>1||s>1||r>1?new oe(i/255,s/255,r/255):new oe(i,s,r)}else typeof e=="string"&&e&&(t=new oe(e));n.traverse(i=>{!i.isMesh||i.name.includes("Fur")||(i.material=i.material.clone(),i.material.color.lerp(t,.35))})}async function pM(n){let e=await pn("mochi.glb");if(!e?.root)throw new Error("mochi.glb failed to load");for(let t of n){let i=fh(e.root);i.scale.setScalar(t.scale||1),TL(i,t.tint||"#c9a66b");let s=new zt().setFromObject(i),r=s.getSize(new P),o=s.getCenter(new P);i.position.sub(o),i.position.y+=r.y/2;let a=new ke;a.userData.noSnow=!0,a.add(i);let l=new Map,c=null;if(Array.isArray(t.wearing)){for(let f of t.wearing){let d=m.world?.clothing?.find(p=>p.id===f);d?.file&&await pn(d.file)}wl({model:i},l,t.wearing)}else if(EL.has(t.id)){await pn("witch.glb");let f=qt.get("witch.glb").root.clone(!0);f.scale.setScalar(.34),f.position.copy(De(0,.48,.12)),c=f,a.add(c),c.visible=!1}Ne[t.spot.level||"world"].add(a);let u,h={};if(e.clips?.length){u=new Co(i);for(let f of e.clips){let d=u.clipAction(f);d.enabled=!0,h[f.name]=d}h.Idle?.setLoop(Lo,1/0).play()}Pr.set(t.id,{npc:t,base:t,holder:a,mixer:u,actions:h,clip:"Idle",visible:!0,partyHat:c,pos:{x:t.spot.at[0],y:t.spot.at[1]}}),gM(t.id)}}function mM(n){for(let e of Pr.values())e.npc=n(e.base)}function Cg(n=()=>!0){let e=[];for(let t of Pr.values())n(t.npc)&&e.push({...t.npc,spot:{...t.npc.spot,at:[t.pos.x,t.pos.y]}});return e}function Ah(n){for(let[e,t]of Pr){let i=n(t.npc);t.visible=i,t.holder.visible=i}}function gM(n){let e=Pr.get(n);if(!e)return;let{holder:t,pos:i}=e;t.position.copy(De(i.x,i.y,0))}function Ll(n,e,t){let i=Pr.get(n);if(!i)return;let s=e-i.pos.x,r=t-i.pos.y;i.holder.rotation.y=Math.atan2(-s,r)}function yM(n,e,t,i=9){for(let[s,r]of Pr){let o=H_(r.npc,i,s.length,m.season,u=>Ii(m.save,u));r.partyHat&&(r.partyHat.visible=!!o.party);let a=o.state==="sleep"?.8:o.wandering?1.1:2.2;r.pos.x+=(o.at[0]-r.pos.x)*Math.min(1,n*a),r.pos.y+=(o.at[1]-r.pos.y)*Math.min(1,n*a),gM(s);let l=Math.hypot(e-r.pos.x,t-r.pos.y);if(!r.visible||l>60){r.holder.visible=!1;continue}r.holder.visible=!0;let c=o.state!=="sleep"&&l<25;r.mixer&&r.mixer.update(n*(c?1:0)),l<8&&o.state!=="sleep"?Ll(s,e,t):r.holder.rotation.y=Ct.degToRad(o.h||0)}}var ta,Ch;function xM(){ta=document.querySelector("#quest-tracker"),Ch=document.querySelector("#quest-list"),document.querySelector("#quests-btn").addEventListener("click",AL),document.querySelector("#quests-close").addEventListener("click",CL)}function AL(){vM(),m.paused=!0,document.querySelector("#quests").classList.remove("hidden")}function CL(){document.querySelector("#quests").classList.add("hidden"),m.paused=!1}function na(){if(!ta)return;let n=_m(m.save,m.quests,Rh()).filter(e=>e.tracked&&!e.done);if(!n.length){ta.textContent="",ta.classList.add("hidden");return}ta.textContent=`${n[0].title}: ${n[0].stepText}`,ta.classList.remove("hidden")}function RL(){let n=bl(m.bulletin,m.clock?.day??0);if(!n||Pi(m.save,n.id)||ss(m.save,n.id))return null;let e=m.npcs?.npcs?.find(i=>i.id===n.giver),t=document.createElement("div");return t.className="quest-row bulletin",t.textContent=`Notice board: ${n.title.replace(/^Bulletin:\s*/,"")} (${Wt(n.reward?.coins??0)}) \u2014 ask ${e?.name||n.giver}`,t}function vM(){Ch.replaceChildren();let n=RL();n&&Ch.append(n);for(let e of _m(m.save,m.quests,Rh())){let t=document.createElement("div");if(t.className="quest-row",e.done)t.textContent=`\u2713 ${e.title}`,t.classList.add("done");else{t.textContent=e.tracked?`\u25B6 ${e.title}: ${e.stepText}`:e.title;let i=document.createElement("button");i.type="button",i.textContent=e.tracked?"Tracking":"Track",i.disabled=e.tracked,i.addEventListener("click",()=>{I_(m.save,e.id),wt(),vM(),na()}),t.append(i)}Ch.append(t)}}Qt();var Dl,Nl,zn,cn,Ph;function _M(){Dl=document.querySelector("#dialogue"),Nl=document.querySelector("#dialogue-name"),zn=document.querySelector("#dialogue-line"),cn=document.querySelector("#dialogue-choices"),Ph=document.querySelector("#dialogue-tint"),document.querySelector("#dialogue-close").addEventListener("click",Ih)}function Ir(){return Dl&&!Dl.classList.contains("hidden")}function Ih(){Dl?.classList.add("hidden"),m.paused=!1}function mn(n,e,t={}){let i=document.createElement("button");return i.type="button",i.textContent=n,i.addEventListener("click",()=>{e(),t.stay||Ih()}),i}function bM(){return m.clock?.hours??12}function PL(n,e){zn.textContent=Mr(e.lines,m.save,bM())||"...",cn.replaceChildren(mn("Back",()=>MM(n),{stay:!0}),mn("Goodbye",()=>{}))}function MM(n){let e=bM(),t=Xo(m.season,e);zn.textContent=X_(n,m.save,e,t),cn.replaceChildren();for(let i of q_(n,m.save))cn.append(mn(i.label,()=>PL(n,i),{stay:!0}));cn.append(mn("Goodbye",()=>{}))}function Lh(){Dl.classList.remove("hidden")}function SM(){m.paused=!0,Ph.style.background="#8a7355",Nl.textContent="Notice board",cn.replaceChildren();let n=m.clock?.day??0,e=bl(m.bulletin,n),t=vm(m.save,m.quests,"juniper").filter(i=>i.bulletin);if(t.length){let i=t[0];zn.textContent=i.intro,cn.append(mn("Take the job",()=>{vl(m.save,i.id,m.quests),Jn({type:"talk",npc:"juniper"}),ce(`Quest started: ${i.title}`),Dt(540,.1)}),mn("Not now",()=>{}))}else e&&Pi(m.save,e.id)?(zn.textContent=e.intro,cn.append(mn("Okay",()=>{}))):e&&ss(m.save,e.id)?(zn.textContent="Today's notice is already stamped. Come back tomorrow.",cn.append(mn("Okay",()=>{}))):e&&!Qu(m.save,e.requires)?(zn.textContent="The notices are blank for now.",cn.append(mn("Okay",()=>{}))):(zn.textContent="The board is empty.",cn.append(mn("Okay",()=>{})));Lh()}function Dh(n){if(!n)return;m.paused=!0,Ll(n.id,m.player.x,m.player.y),Ph.style.background=n.tint||"#c9a66b",Nl.textContent=n.name,cn.replaceChildren();let e=vm(m.save,m.quests,n.id),t=(m.save.quests?.active||[]).map(r=>({quest:m.quests.quests.find(o=>o.id===r),current:zs(m.save,r,m.quests)})).filter(({quest:r})=>r),i=t.find(({current:r})=>r?.step.type==="deliver"&&r.step.npc===n.id&&(m.save.inventory||[]).includes(r.step.item)),s=t.filter(({quest:r})=>r.giver===n.id);if(i){let{step:r}=i.current,o=m.items?.items?.find(a=>a.id===r.item);zn.textContent=`Is that ${(o?.label||r.item).toLowerCase()} for me?`,cn.append(mn(`Deliver ${o?.label||r.item}`,()=>{Jn({type:"deliver",npc:n.id,item:r.item})}))}else if(e.length){let r=e[0];zn.textContent=r.intro,cn.append(mn(r.bulletin?"Take the job":`Accept: ${r.title}`,()=>{vl(m.save,r.id,m.quests),Jn({type:"talk",npc:n.id}),ce(`Quest started: ${r.title}`),Dt(540,.1)}),mn("Not now",()=>{}))}else if(s.length){let{quest:r,current:o}=s[0];zn.textContent=r.intro,o?.step.type==="talk"&&o.step.npc===n.id?cn.append(mn("Continue",()=>{Jn({type:"talk",npc:n.id})})):cn.append(mn("Okay",()=>{}))}else MM(n);Lh()}function wM({name:n,tint:e,line:t,choices:i}){m.paused=!0,Ph.style.background=e||"#c9a66b",Nl.textContent=n||"",Lr(t,i),Lh()}function Lr(n,e=[]){zn.textContent=n||"",cn.replaceChildren(...e.map(t=>mn(t.label,t.action||(()=>{}),{stay:!!t.stay})))}function EM(n,e,t){zn.textContent=e||"Quest complete!",Nl.textContent=n,cn.replaceChildren(mn("Nice!",()=>{t&&ln(m.save.coins)})),Lh(),m.paused=!0,Dt(620,.14)}Qt();var Dr=Object.freeze(["walk","hop","talk_yuzu","open_map","station"]),IL=3.5,LL=5,Rg=Object.freeze([-6,56]),DL=Object.freeze({walk:"Walk a few steps with WASD (or the stick)",hop:"Press Space (or Hop) to bounce",talk_yuzu:"Walk north to Yuzu and press E to talk",open_map:"Open the Map to see the lanes",station:"Walk west to the village station by the platform"});function TM(n){return(!n.flags||typeof n.flags!="object")&&(n.flags={}),n.flags}function sa(n){if(!n||typeof n!="object")return null;let e=TM(n);if(e.tutorial_done)return n.tutorial={step:"done"},n.tutorial;if(!n.tutorial||typeof n.tutorial!="object"){let t=typeof e.tutorial_step=="string"&&Dr.includes(e.tutorial_step)?e.tutorial_step:null;n.tutorial={step:t}}return n.tutorial.step!=null&&n.tutorial.step!=="done"&&!Dr.includes(n.tutorial.step)&&(n.tutorial.step="walk"),n.tutorial}function ra(n){return!n||n.flags?.tutorial_done?!1:(sa(n),Dr.includes(n.tutorial?.step))}function AM(n){return ra(n)&&DL[n.tutorial.step]||null}function Nh(n,e){sa(n),n.tutorial.step=e;let t=TM(n);e==="done"?(t.tutorial_done=!0,delete t.tutorial_step):t.tutorial_step=e}function ia(n){let e=sa(n),t=Dr.indexOf(e.step);return t<0?!1:t>=Dr.length-1?(Nh(n,"done"),!0):(Nh(n,Dr[t+1]),!0)}function CM(n,e=null){return!n||n.flags?.tutorial_done?!1:(sa(n),!n.tutorial.origin&&e?n.tutorial.origin={x:e.x??0,y:e.y??0}:n.tutorial.origin||(n.tutorial.origin={x:0,y:-2.2}),Dr.includes(n.tutorial.step)?Nh(n,n.tutorial.step):Nh(n,"walk"),!0)}function RM(n,e){if(!ra(n)||!e)return!1;let t=n.tutorial.step;return t==="talk_yuzu"&&e.type==="talk"&&e.npc==="yuzu"||t==="open_map"&&(e.type==="map"||e.type==="open_map")?ia(n):!1}function PM(n,e={}){if(!ra(n))return!1;let t=n.tutorial.step,i=e.player;if(t==="walk"&&i){let s=n.tutorial.origin||{x:0,y:-2.2};if(Math.hypot((i.x??0)-s.x,(i.y??0)-s.y)>=IL)return ia(n)}if(t==="hop"&&i&&i.grounded===!1&&(i.vz??0)>.5||t==="open_map"&&e.mapOpen)return ia(n);if(t==="station"&&i){let s=e.stationAt||Rg;if(Math.hypot((i.x??0)-s[0],(i.y??0)-s[1])<=LL)return ia(n)}return!1}var IM="WASD move \xB7 drag to look \xB7 Space hop \xB7 F flop \xB7 E talk \xB7 Ride the broom by the yard";function NL(){return document.querySelector("#keys-hint")}function kL(n){n.dataset.baseIdle||(n.dataset.baseIdle=n.dataset.idle||n.textContent||IM)}function kh(){let n=NL();if(!n)return;if(kL(n),!m.save||m.playMode==="multiplayer"||!ra(m.save)){let t=n.dataset.baseIdle||IM;n.dataset.idle=t,(!n.textContent||n.textContent!==t)&&(n.dataset.idle=t);return}let e=AM(m.save);e&&(n.dataset.idle=e,n.textContent=e)}function LM(){if(!(m.playMode==="multiplayer"||!m.save)){if(sa(m.save),m.save.flags?.tutorial_done){kh();return}CM(m.save,m.player),kh(),wt()}}function DM(n){m.playMode==="multiplayer"||!m.save||RM(m.save,n)&&(kh(),wt())}function NM(){if(m.playMode==="multiplayer"||!m.save||!m.playing||!ra(m.save))return;PM(m.save,{player:m.player,mapOpen:!!m.mapOpen,stationAt:Rg})&&(kh(),wt())}Qt();var kM=1.55,Pg=.031*kM,UL=.45,OL={id:"broomstick",label:"broom",flies:!0,hover:!0,level:"world",spot:[1.25,.45],seat:[0,0,Pg-.14]},as=null,Ws=null;function kl(n,e=.72){return new Je({color:n,roughness:e,metalness:.04})}function FL(){let n=new ke,e=new ke;e.scale.setScalar(kM),n.add(e);let t=new Y(new At(.028,.034,1.42,10),kl("#6b3d1f",.55));t.rotation.x=-Math.PI/2,t.castShadow=!0,e.add(t);let i=new Y(new au(.038,.01,8,14),kl("#c4a574",.45));i.position.z=.48,i.castShadow=!0,e.add(i);let s=new ke;s.position.z=.62;let r=kl("#c4a04a",.88),o=kl("#8a6a2c",.9);for(let c=0;c<18;c+=1){let u=new Y(new dn(.018,.42,5),c%3===0?o:r),h=c/18*Math.PI*2;u.position.set(Math.cos(h)*.04,Math.sin(h)*.035,.18),u.rotation.x=Math.PI/2,u.rotation.z=Math.cos(h)*.12,u.castShadow=!0,s.add(u)}let a=new Y(new At(.055,.05,.06,10),kl("#4a2a12"));a.rotation.x=-Math.PI/2,s.add(a),e.add(s),Ws=new Ei(new ot().setAttribute("position",new Ke(new Float32Array(36),3)),new ui({color:16757066,size:.05,transparent:!0,opacity:.85,depthWrite:!1})),Ws.position.z=.78,e.add(Ws);let l=new ke;return l.name="seat",l.position.set(0,Pg,0),n.add(l),{root:n,seat:l}}function Ig(){let n=m.rides?.[0];return!n||!Kx(n,m.player)?!1:(OM(),!0)}async function UM(n){let e=nv(),t={...OL,spot:[m.player.x||0,m.player.y||0]},i=Zx(t,e),s=FL();return as=s.root,n.add(as),i.mesh=as,i.seatNode=s.seat,m.rides=[i],Ig(),i}function OM(){let n=m.rides?.[0];if(!n||!as)return;let e=mr(n);if(as.position.copy(De(e.x,e.y,e.z)),as.rotation.order="YXZ",as.rotation.y=Ct.degToRad(e.h),as.rotation.x=Ct.degToRad(e.pitch),as.rotation.z=Ct.degToRad(e.roll),Ws&&n.phase==="flying"){let t=Ws.geometry.attributes.position;for(let i=0;i<t.count;i+=1)t.setXYZ(i,(Math.random()-.5)*.12,(Math.random()-.5)*.08,Math.random()*.22);t.needsUpdate=!0,Ws.visible=!0}else Ws&&(Ws.visible=!1)}function BL(){let n=m.rides?.[0];return!n||(n.seat=[0,0,Pg+mh()],!Ou(n,m.player))?!1:(Vs("Hop"),Dt(480,.1),ce("Hop on!"),!0)}function zL(){let n=m.rides?.[0];return!n||!Fu(n,m.player)?!1:(Zo(),Vs("Hop"),Dt(220,.1,"triangle"),ce("Hop off"),!0)}function FM(){let n=m.rides?.[0];n&&(n.phase==="flying"?zL():n.phase==="idle"&&BL())}function HL(n,e,t){let i={x:n.x,y:n.y,z:n.z,vx:n.ve,vy:n.vn,vz:n.vd};return m.solids?.length&&Uu(i,m.solids,t,UL),e&&pr(i,e),i.x===n.x&&i.y===n.y&&i.z===n.z?null:i}function BM(n){let e=m.rides?.[0];if(!e)return;let{input:t,player:i,view:s,world:r,level:o}=m,a=r?.levels?.[o],l=e.phase,c=ev(t.stickX,t.stickY,!!t.keys.hop,s.lookH,i.h,!!t.keys.down),u=a?tv(e.spot,a.origin,a.half):null,h=e.craft.heading;Qx(e,i,n,c,u,f=>HL(f,a,o)),e.phase==="flying"&&e.craft.keyTurning&&(s.lookH+=Ho(e.craft.heading-h)),l==="mounting"&&e.phase==="flying"&&(gh(e.seatNode),Vs("Idle")),l==="dismounting"&&e.phase==="idle"&&Zo(),OM()}function zM(){let n=m.rides?.[0];return n?n.phase==="flying"?"W/S speed \xB7 A/D turn \xB7 Space up \xB7 Shift/C down \xB7 E hop off":n.phase==="mounting"?"Hopping on\u2026":n.phase==="dismounting"?"Hopping off\u2026":"":""}var VL="village/v_rail.glb",HM={RailSteel:[.147,.163,.196,.35],RailRust:[.214,.084,.04,.7],RailTie:[.133,.064,.022,.9]};async function GL(){let n={};try{(await pn(VL))?.root?.traverse(t=>{if(t.isMesh)for(let i of[].concat(t.material))i?.name&&HM[i.name]&&!n[i.name]&&(n[i.name]=i)})}catch{}for(let[e,[t,i,s,r]]of Object.entries(HM)){if(n[e])continue;let o=new Je({roughness:r,metalness:0});o.color.setRGB(t,i,s),o.name=e,n[e]=o}return n}function oa(n,e,t,i){n.push(e,i,-t)}function Ul(n,e,t,i,s){oa(n,...e),oa(n,...t),oa(n,...i),oa(n,...e),oa(n,...i),oa(n,...s)}function VM(n,e,t,i,s,r){let o=e.map(p=>[p.x,p.y]),a=Xp(o,t+i/2),l=Xp(o,t-i/2),c=p=>[a[p][0],a[p][1],e[p].z+s],u=p=>[a[p][0],a[p][1],e[p].z+r],h=p=>[l[p][0],l[p][1],e[p].z+s],f=p=>[l[p][0],l[p][1],e[p].z+r],d=e.length-1;for(let p=0;p<d;p+=1)Ul(n,f(p),f(p+1),u(p+1),u(p)),Ul(n,h(p),h(p+1),f(p+1),f(p)),Ul(n,c(p+1),c(p),u(p),u(p+1));Ul(n,c(0),h(0),f(0),u(0)),Ul(n,h(d),c(d),u(d),f(d))}function GM(n){let e=new ot;return e.setAttribute("position",new Ke(n,3)),e.computeVertexNormals(),e.computeBoundingSphere(),e}async function WM(n,e,t=gr){let i=await GL(),s=new ke;s.name="track";let r=[],o=[],a=t.gauge/2;for(let p of[...n.runs,...n.stubs||[]])for(let x of[-1,1])VM(r,p.points,x*a,t.railWidth,t.railBase,t.railHead),VM(o,p.points,x*a,t.capWidth,t.railHead-.005,t.railTop);let l=new Y(GM(r),i.RailSteel);l.name="track-rails";let c=new Y(GM(o),i.RailRust);c.name="track-rail-heads";for(let p of[l,c])p.castShadow=!0,p.receiveShadow=!0,s.add(p);let u=new Lt(t.tieLength,t.tieHeight,t.tieWidth),h=new Ts(u,i.RailTie,n.ties.length);h.name="track-sleepers",h.castShadow=!0,h.receiveShadow=!0;let f=new Tt;n.ties.forEach((p,x)=>{f.position.set(p.x,p.z+t.tieHeight/2,-p.y),f.rotation.set(0,Ct.degToRad(p.h),0),f.updateMatrix(),h.setMatrixAt(x,f.matrix)}),h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),s.add(h);let d=new Lt(t.bufferWidth,t.bufferHeight,t.bufferDepth);for(let p of n.buffers||[]){let x=new Y(d,i.RailTie);x.name="track-buffer",x.position.set(p.x,p.z+t.tieHeight+t.bufferHeight/2,-p.y),x.rotation.y=Ct.degToRad(p.h),x.castShadow=!0,x.receiveShadow=!0,s.add(x)}return e.add(s),s}Qt();var qM="village/v_train.glb",ls=null,Lg=null,Uh=()=>0;function WL(n){let e=null;return n.traverse(t=>{e||t.name&&/seat/i.test(t.name)&&(e=t)}),e||(e=new ke,e.name="seat",e.position.set(0,1.225,-.4),n.add(e)),e}async function $M(n,e,{dressing:t=[]}={}){let i=sv(t);Uh=(o,a)=>Fs(i,o,a);let s=rv(n,{bridges:i});try{await WM(s,e)}catch(o){console.warn("Train track failed to build",o)}let r=cv(n,{heightAt:Uh});return r.track=s,m.transit=r,await pn(qM),ls=_t(qM,r.train.pose.x,r.train.pose.y,0,r.train.pose.h,e),Lg=WL(ls),r.train.mesh=ls,r.train.seatNode=Lg,XM(),r}function XM(){let n=m.transit;if(!n||!ls)return;let e=uv(n),t=Ct.degToRad(e.h),i=-Math.sin(t),s=Math.cos(t),r=.9,o=Uh(e.x+i*r,e.y+s*r)-Uh(e.x-i*r,e.y-s*r);ls.position.copy(De(e.x,e.y,e.z+gr.trainLift)),ls.rotation.order="YXZ",ls.rotation.y=t,ls.rotation.x=Math.atan2(o,r*2),ls.rotation.z=0}function YM(n){let e=m.transit;return!e||!fv(e,m.player,n)?!1:(Vs("Hop"),Dt(480,.1),ce("All aboard!"),!0)}function jM(){let n=m.transit;return!n||n.train.state!=="enroute"||!dv(n)?!1:(ce("Next stop"),Dt(260,.08,"triangle"),!0)}function ZM(n){let e=m.transit;if(!e)return;let t=e.train.state;pv(e,m.player,n);let i=e.train.state;if(t==="boarding"&&i==="enroute"&&(gh(Lg),Vs("Idle")),t==="alighting"&&i==="idle"&&Zo(),t==="enroute"&&i==="alighting"){Zo(),Vs("Hop"),Dt(220,.1,"triangle");let s=e.stations.find(r=>r.id===e.train.stationId);ce(s?`Arrived: ${s.label}`:"Hop off")}XM()}function KM(){let n=m.transit;if(!n)return"";let e=n.train.state;return e==="enroute"?"E hop off at next station":e==="boarding"?"Boarding\u2026":e==="alighting"?"Hopping off\u2026":""}Qt();var JM=!1;function QM(){JM||(JM=!0,document.querySelector("#dest-close")?.addEventListener("click",tS))}function eS(){let n=m.transit;if(!n){ce("No train here yet");return}let e=document.querySelector("#dest-list"),t=document.querySelector("#destination");if(!e||!t)return;let i=n.train.stationId,s=n.stations.find(a=>a.id===i),r=hv(n,m.save.discovered||[],i);e.replaceChildren();let o=[];s&&o.push({station:s,here:!0,unlocked:!0});for(let a of r)o.push({station:a,here:!1,unlocked:!0});for(let a of o){let l=document.createElement("button");l.type="button",l.className="dest-pill",l.textContent=a.station.label,l.disabled=a.here,a.here&&l.classList.add("current"),l.addEventListener("click",()=>{l.disabled||(tS(),YM(a.station.id)?Dt(520,.1):ce("Can't board right now"))}),e.append(l)}m.paused=!0;for(let a of document.querySelectorAll(".sheet"))a.classList.add("hidden");t.classList.remove("hidden")}function tS(){document.querySelector("#destination")?.classList.add("hidden"),m.playing&&(m.paused=!1)}function qL(n){let{scale:e=[1,1],translate:t=[0,0]}=n.transform||{},i=!!n.transform;return n.arcs.map(s=>{let r=0,o=0;return s.map(([a,l])=>i?(r+=a,o+=l,[r*e[0]+t[0],o*e[1]+t[1]]):[a,l])})}function nS(n,e){let t=[];for(let i of n){let s=i<0?[...e[~i]].reverse():e[i];for(let r=t.length?1:0;r<s.length;r+=1)t.push(s[r])}return t}function $L(n){let e=1/0,t=1/0,i=-1/0,s=-1/0;for(let r of n)for(let[o,a]of r[0])o<e&&(e=o),o>i&&(i=o),a<t&&(t=a),a>s&&(s=a);return[e,t,i,s]}function sS(n,e="countries"){let t=qL(n),i=n.objects[e]||Object.values(n.objects)[0],s=[];for(let r of i.geometries){let o=[];if(r.type==="Polygon")o=[r.arcs.map(u=>nS(u,t))];else if(r.type==="MultiPolygon")o=r.arcs.map(u=>u.map(h=>nS(h,t)));else continue;let{id:a,name:l}=r.properties||{},c=$L(o);s.push({id:String(a),name:l||String(a),polygons:o,bbox:c,area:(c[2]-c[0])*(c[3]-c[1])})}return s.sort((r,o)=>r.area-o.area),{shapes:s,arcs:t}}function iS(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s,s+=1){let[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function XL(n,e,t){if(!iS(n,e,t[0]))return!1;for(let i=1;i<t.length;i+=1)if(iS(n,e,t[i]))return!1;return!0}function YL(n,e,t){let[i,s,r,o]=t.bbox;return n<i||n>r||e<s||e>o?!1:t.polygons.some(a=>XL(n,e,a))}function rS(n,e,t){for(let i of t)if(YL(n,e,i))return i;return null}function oS(n,e){let t=new Map(n.map(o=>[o.id,o])),i=new Map,s=[];for(let o of e){let a=t.get(o.iso);a?i.set(o.iso,{country:o,shape:a}):s.push(o)}let r=n.filter(o=>!i.has(o.id));return{byIso:i,unmatchedShapes:r,countriesWithoutShape:s}}function aS(n,e,t){let i=Math.hypot(n,e,t)||1,s=90-Math.acos(Math.max(-1,Math.min(1,e/i)))*180/Math.PI,r=Math.atan2(t,-n)*180/Math.PI-180;return r<-180&&(r+=360),[r,s]}function lS([n,e],[t,i]){let s=Math.PI/180,r=Math.sin(e*s)*Math.sin(i*s)+Math.cos(e*s)*Math.cos(i*s)*Math.cos((t-n)*s);return Math.acos(Math.max(-1,Math.min(1,r)))*180/Math.PI}var jL="/assets/textures/nasa/blue_marble_4k.jpg",ZL="/assets/textures/nasa/blue_marble_2k.jpg",cS="/assets/world/countries-50m.topo.json",Oh=4.2,Dg=1.35,KL=1.15,JL=1.5,Fh=null;function QL(){return Fh||(Fh=fetch(cS).then(n=>{if(!n.ok)throw new Error(`${n.status} for ${cS}`);return n.json()}).then(n=>sS(n)).catch(n=>{throw Fh=null,n})),Fh}function Ol(n,e,t=1){let i=(90-n)*(Math.PI/180),s=(e+180)*(Math.PI/180);return new P(-t*Math.sin(i)*Math.cos(s),t*Math.cos(i),t*Math.sin(i)*Math.sin(s))}function e3(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Bh(n,e={}){let t=e.renderer||pt,i=e.scene||Qe,s=e.camera||St,r=e.container||document.body,o=Rt.coarse||t.capabilities.maxTextureSize<4096,a=new ke;a.name="world-globe",a.visible=!1,i.add(a);let l=new Ls().load(o?ZL:jL);l.colorSpace=qe,l.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy());let c=new Y(new tt(1,96,64),new Je({map:l,roughness:.85,metalness:.05}));c.name="earth",a.add(c);let u=document.createElement("canvas");u.width=o?1024:2048,u.height=u.width/2;let h=new $n(u);h.colorSpace=qe;let f=new Y(new tt(1.001,96,64),new fn({map:h,transparent:!0,depthWrite:!1}));f.name="country-highlight",a.add(f);let d=new Y(new tt(1.02,48,32),new fn({color:7260415,transparent:!0,opacity:.08,side:Vt}));a.add(d);let p=new Ao(16777215,.55),x=new jn(16773856,1.1);x.position.set(3,2,2),a.add(p,x);let y=document.createElement("div");y.className="globe-tip hidden",y.setAttribute("aria-live","polite"),r.appendChild(y);let g=new Map;for(let B of n||[])g.set(B.iso,{country:B,pos:Ol(B.lat,B.lon,1)});let v={root:a,sphere:c,byIso:g,borders:null,matched:null,yaw:.4,pitch:.25,targetYaw:null,targetPitch:null,dist:Oh,targetDist:Oh,dragging:!1,focusIso:null,hovered:null,chosen:null,enabled:!1,onSelect:null,ready:null},b=null;v.ready=QL().then(B=>{v.borders=B,v.matched=oS(B.shapes,n||[]);let he=[];for(let C of B.arcs)for(let w=1;w<C.length;w+=1){let H=Ol(C[w-1][1],C[w-1][0],1.0015),j=Ol(C[w][1],C[w][0],1.0015);he.push(H.x,H.y,H.z,j.x,j.y,j.z)}let ee=new ot;return ee.setAttribute("position",new Ke(he,3)),b=new As(ee,new Yi({color:16774880,transparent:!0,opacity:.55})),b.name="country-borders",a.add(b),N(),B}).catch(B=>(console.warn("Country borders unavailable; picking by nearest capital",B.message||B),null));let _=new gu,R=new te;function M(){let B=Math.max(-1.2,Math.min(1.2,v.pitch)),he=v.dist*Math.cos(B)*Math.sin(v.yaw),ee=v.dist*Math.sin(B),C=v.dist*Math.cos(B)*Math.cos(v.yaw);s.position.set(he,ee,C),s.lookAt(0,0,0),s.near=.05,s.far=40,s.updateProjectionMatrix()}function T(B,he){let ee=v.borders?rS(B,he,v.borders.shapes):null;if(ee){let j=v.matched?.byIso.get(ee.id)?.country||null;return{iso:ee.id,name:j?.name||ee.name,country:j,shape:ee,lon:B,lat:he}}let C=null,w=v.borders?JL:8;for(let{country:j}of g.values()){let J=lS([B,he],[j.lon,j.lat]);J<w&&(w=J,C=j)}if(!C)return null;let H=v.matched?.byIso.get(C.iso)?.shape||null;return{iso:C.iso,name:C.name,country:C,shape:H,lon:B,lat:he}}function I(B,he){let ee=t.domElement.getBoundingClientRect();R.x=(B-ee.left)/ee.width*2-1,R.y=-((he-ee.top)/ee.height)*2+1,s.updateMatrixWorld(),_.setFromCamera(R,s);let C=_.intersectObject(c,!1)[0];if(!C)return null;let w=C.point.clone();return a.worldToLocal(w),aS(w.x,w.y,w.z)}function E(B,he){let ee=I(B,he);return ee?T(ee[0],ee[1]):null}function S(B,he,ee,C,w){let H=u.width,j=u.height;B.beginPath();for(let J of he.polygons)for(let K of J)K.forEach(([we,fe],me)=>{let He=(we+180)/360*H,se=(90-fe)/180*j;me===0?B.moveTo(He,se):B.lineTo(He,se)}),B.closePath();B.fillStyle=ee,B.fill("evenodd"),B.lineWidth=w,B.strokeStyle=C,B.stroke()}let L="";function N(){let B=v.hovered?.shape||null,he=v.chosen?.shape||null,ee=`${B?.id||""}|${he?.id||""}`;if(ee===L)return;L=ee;let C=u.getContext("2d");C.clearRect(0,0,u.width,u.height);let w=u.width/1024;he&&S(C,he,"rgba(242, 132, 42, 0.38)","rgba(255, 214, 150, 1)",2*w),B&&B!==he&&S(C,B,"rgba(255, 226, 150, 0.30)","rgba(255, 244, 214, 0.95)",1.5*w),h.needsUpdate=!0}function z(B,he,ee){let C=r.getBoundingClientRect();y.textContent=B,y.style.left=`${he-C.left}px`,y.style.top=`${ee-C.top}px`,y.classList.remove("hidden")}function G(){y.classList.add("hidden")}function D(B,he,ee){v.hovered=B,N(),B?z(B.country?B.name:`${B.name} \xB7 no village`,he,ee):G(),e.onHover?.(B)}function V(B){v.enabled=B,a.visible=B,B?M():(v.dragging=!1,v.hovered=null,N(),G())}function ne(){v.targetDist=Oh,v.focusIso=null,v.chosen=null,N(),G()}function $(B,he,ee=Dg){let C=Ol(B,he,1);v.targetYaw=v.yaw+e3(v.yaw,Math.atan2(C.x,C.z)),v.targetPitch=Math.asin(Math.max(-1,Math.min(1,C.y))),v.targetDist=ee}function ie(B){if(typeof B=="string"){let ee=g.get(B.toUpperCase());if(!ee)return null;let C=v.matched?.byIso.get(ee.country.iso)?.shape||null;B={iso:ee.country.iso,name:ee.country.name,country:ee.country,shape:C,lon:ee.country.lon,lat:ee.country.lat}}v.chosen=B,v.focusIso=B.country?.iso||null;let he=B.country||B;return $(he.lat,he.lon),N(),B}function ae(B){ie(String(B))&&(v.yaw=v.targetYaw,v.pitch=v.targetPitch)}function ve(){v.chosen=null,v.focusIso=null,N()}let Re=new Map,$e=null,Z=0,re=null;function be(B){if(v.enabled){if(Re.set(B.pointerId,{x:B.clientX,y:B.clientY}),t.domElement.setPointerCapture?.(B.pointerId),Re.size===1)v.dragging=!0,$e={x:B.clientX,y:B.clientY,moved:0};else if(Re.size===2){let[he,ee]=[...Re.values()];Z=Math.hypot(he.x-ee.x,he.y-ee.y),$e=null}}}function ue(B){if(!v.enabled)return;let he=Re.get(B.pointerId);if(!he){B.pointerType==="mouse"&&Oe(B.clientX,B.clientY);return}if(Re.set(B.pointerId,{x:B.clientX,y:B.clientY}),Re.size===2){let[H,j]=[...Re.values()],J=Math.hypot(H.x-j.x,H.y-j.y);Z>0&&J>0&&(v.targetDist=ut(v.targetDist*(Z/J))),Z=J;return}let ee=B.clientX-he.x,C=B.clientY-he.y;$e&&($e.moved+=Math.hypot(ee,C));let w=.0014+.0012*(v.dist-1);v.yaw-=ee*w,v.pitch+=C*w*.8,v.targetYaw=null,v.targetPitch=null,B.pointerType==="mouse"&&Oe(B.clientX,B.clientY)}function Ee(B){if(!v.enabled)return;let he=Re.delete(B.pointerId);if(Re.size===0&&(v.dragging=!1),!he||!$e||B.type==="pointercancel")return;let ee=$e.moved<8;if($e=null,!ee)return;let C=E(B.clientX,B.clientY);if(D(C,B.clientX,B.clientY),!C)return;if(e.onPick){ie(C),e.onPick(C);return}if(!C.country)return;let w=v.focusIso===C.country.iso;ie(C),w&&(v.dist<Dg+.55||v.targetDist<=Dg+.2)&&v.onSelect?.(C.country)}function Le(B){B.pointerType==="mouse"&&!v.dragging&&D(null)}function Oe(B,he){let ee=re;re={x:B,y:he},!ee&&requestAnimationFrame(()=>{let C=re;if(re=null,!v.enabled||!C)return;let w=E(C.x,C.y);w?.iso!==v.hovered?.iso?D(w,C.x,C.y):w&&z(y.textContent,C.x,C.y)})}function ut(B){return Math.max(KL,Math.min(Oh+.8,B))}function Xe(B){v.enabled&&(B.preventDefault(),v.targetDist=ut(v.targetDist+B.deltaY*.002))}function mt(B){v.targetDist=ut(v.targetDist*B)}function U(B){if(!v.enabled)return!1;let he=.12*(.4+.6*(v.dist-1));if(B.key==="ArrowLeft")v.yaw-=he;else if(B.key==="ArrowRight")v.yaw+=he;else if(B.key==="ArrowUp")v.pitch=Math.min(1.2,v.pitch+he);else if(B.key==="ArrowDown")v.pitch=Math.max(-1.2,v.pitch-he);else if(B.key==="+"||B.key==="=")mt(.85);else if(B.key==="-"||B.key==="_")mt(1/.85);else return!1;return v.targetYaw=null,v.targetPitch=null,!0}let gt=t.domElement;gt.addEventListener("pointerdown",be),gt.addEventListener("pointermove",ue),gt.addEventListener("pointerup",Ee),gt.addEventListener("pointercancel",Ee),gt.addEventListener("pointerleave",Le),gt.addEventListener("wheel",Xe,{passive:!1});function Ye(B){if(!v.enabled)return;let he=Math.min(1,B*4);v.dist+=(v.targetDist-v.dist)*he,v.targetYaw!==null&&(v.yaw+=(v.targetYaw-v.yaw)*he,v.pitch+=(v.targetPitch-v.pitch)*he,Math.abs(v.targetYaw-v.yaw)<1e-4&&Math.abs(v.targetPitch-v.pitch)<1e-4&&(v.targetYaw=null,v.targetPitch=null)),M()}function je(){gt.removeEventListener("pointerdown",be),gt.removeEventListener("pointermove",ue),gt.removeEventListener("pointerup",Ee),gt.removeEventListener("pointercancel",Ee),gt.removeEventListener("pointerleave",Le),gt.removeEventListener("wheel",Xe),y.remove(),i.remove(a),a.traverse(B=>{B.geometry?.dispose(),B.material?.dispose?.()}),l.dispose(),h.dispose()}return{state:v,setEnabled:V,zoomOut:ne,zoomBy:mt,focusCountry:ae,choose:ie,clearChoice:ve,handleKey:U,hitAt:T,pick:E,update:Ye,dispose:je,latLonToVec3:Ol,set onSelect(B){v.onSelect=B}}}var hS={origin:[0,0],half:[22,22],inset:1.5,cam_back:7.5,cam_up:4.2,fog:[.55,.62,.48],name:"Country"};function Hh(){return hS}async function fS(n){let e=cm(n),t=new ke;t.name=`country-${e.iso}`;let i=new Y(new ou(24,48),new Je({color:e.ground,roughness:.95}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let s=new Set(e.trees.map(f=>f.file));for(let f of s)try{await pn(f)}catch{}for(let f of e.buildings){let d=n3(f),[p,x,y]=f.at;d.position.copy(De(p,x,y||0)),d.rotation.y=Ct.degToRad(-(f.h||0)),d.castShadow=!0,t.add(d)}for(let f of e.trees)try{let d=_t(f.file,f.at[0],f.at[1],0,f.h||0,t);d&&(f.s&&d.scale.setScalar(f.s),f.tint&&t3(d,f.tint))}catch{}let r=[];for(let f of e.plants){let d=s3(f);d.position.copy(De(f.at[0],f.at[1],f.at[2]||.15)),d.userData.worldInteract=f,t.add(d);let p=zh(f.label);p.position.copy(d.position).add(new P(0,.85,0)),t.add(p),r.push({entry:f,mesh:d})}for(let f of e.animals){let d=uS(f);d.position.copy(De(f.at[0],f.at[1],f.at[2]||.2)),d.userData.worldInteract=f,t.add(d);let p=zh(f.label);p.position.copy(d.position).add(new P(0,.9,0)),t.add(p),r.push({entry:f,mesh:d})}let o=new Y(new Cs(.28,.55,4,8),new Je({color:15255968}));o.position.copy(De(e.elder.at[0],e.elder.at[1],.55)),o.userData.worldInteract={kind:"elder",...e.elder},t.add(o);let a=zh(e.elder.name);a.position.copy(o.position).add(new P(0,1.1,0)),t.add(a);let l=e.creatures.map(f=>{let d=uS(f);d.position.copy(De(f.at[0],f.at[1],.22)),t.add(d);let p=zh(f.label);return p.position.copy(d.position).add(new P(0,.75,0)),t.add(p),{...f,mesh:d,tag:p,ox:f.at[0],oy:f.at[1]}}),c=e.buildings.map(f=>{let d=(f.width||2)*.55,p=(f.depth||2)*.55;return{level:"country",min:[f.at[0]-d,f.at[1]-p],max:[f.at[0]+d,f.at[1]+p]}});Qe.add(t);function u(f,d){for(let p of l){let x=p.phase+d*p.speed*.28,y=2.8+p.id.charCodeAt(p.id.length-1)%5*.45,g=p.ox+Math.cos(x)*y*.4,v=p.oy+Math.sin(x)*y*.4,b=r3(p.shape);p.mesh.position.copy(De(g,v,b)),p.mesh.rotation.y=-x+Math.PI/2,p.tag.position.copy(p.mesh.position).add(new P(0,.75,0))}}function h(){Qe.remove(t),t.traverse(f=>{f.geometry&&f.geometry.dispose?.(),f.material&&(Array.isArray(f.material)?f.material.forEach(d=>d.dispose?.()):f.material.dispose?.())})}return{group:t,layout:e,solids:c,labels:r,elderMesh:o,tick:u,dispose:h,level:hS}}function t3(n,e){let t=new oe(e);n.traverse(i=>{if(!i.isMesh||!i.material)return;let s=Array.isArray(i.material)?i.material:[i.material];for(let r of s)if(r?.color){let o=r.clone();o.color.lerp(t,.55),Array.isArray(i.material)?i.material=s.map(a=>a===r?o:a):i.material=o}})}function qs(n,e={}){return new Je({color:n,roughness:e.roughness??.85,metalness:e.metalness??.02})}function n3(n){let e=new ke,t=n.width||2.2,i=n.depth||2,s=n.height||1.5,r=n.stilts||0,o=n.eaves||.15,a=qs(n.wallColor||"#e8e0d0"),l=qs(n.roofColor||"#5a4a48",{roughness:.75}),c=qs(n.trimColor||"#3a2a20");if(r>.05){let d=new At(.07,.08,r,6);for(let[p,x]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let y=new Y(d,c);y.position.set(p*(t*.38),r*.5,x*(i*.38)),y.castShadow=!0,e.add(y)}}let u=new Y(new Lt(t,s,i),a);u.position.y=r+s*.5,u.castShadow=!0,u.receiveShadow=!0,e.add(u);let h=new Y(new Lt(t*.22,s*.45,.06),c);h.position.set(0,r+s*.28,i*.5+.02),e.add(h);let f=r+s;return i3(e,n.roofShape||"steep_gable",t,i,f,o,l,c),e}function i3(n,e,t,i,s,r,o,a){let l=t+r*2,c=i+r*2;if(e==="flat"||e==="flat_dome"){let h=new Y(new Lt(l,.12,c),o);if(h.position.y=s+.06,h.castShadow=!0,n.add(h),e==="flat_dome"){let f=new Y(new tt(Math.min(t,i)*.22,10,8,0,Math.PI*2,0,Math.PI/2),o);f.position.y=s+.12,f.castShadow=!0,n.add(f)}return}if(e==="cone_thatch"){let h=new Y(new dn(Math.max(l,c)*.55,1.1,10),o);h.position.y=s+.55,h.castShadow=!0,n.add(h);return}if(e==="hip_tile"||e==="thatch_hip"||e==="pagoda_eave"||e==="saddle_thatch"||e==="palm_thatch"){let h=e==="pagoda_eave"?.95:e==="saddle_thatch"?1.15:.75,f=new Y(new dn(Math.max(l,c)*.62,h,4),o);if(f.position.y=s+h*.5,f.rotation.y=Math.PI/4,f.castShadow=!0,n.add(f),e==="pagoda_eave"){let d=new Y(new Lt(l*1.08,.08,c*1.08),a);d.position.y=s+.1,n.add(d)}return}if(e==="thatch_steep"){let h=Fl(l,c,1.2,o);h.position.y=s,n.add(h);return}if(e==="verandah_gable"){let h=Fl(l*1.15,c*1.1,.7,o);h.position.y=s,n.add(h);let f=new Y(new Lt(l*.35,.08,c*.9),a);f.position.set(t*.55,s-.35,0),n.add(f);return}if(e==="sod_gable"){let h=Fl(l,c,.55,o);h.position.y=s,n.add(h);return}if(e==="tile_gable"||e==="clapboard_gable"||e==="steep_gable"){let f=Fl(l,c,e==="steep_gable"?1:.72,o);f.position.y=s,n.add(f);return}let u=Fl(l,c,.8,o);u.position.y=s,n.add(u)}function Fl(n,e,t,i){let s=new ke,r=Math.hypot(n*.5,t),o=Math.atan2(t,n*.5);for(let a of[-1,1]){let l=new Y(new Lt(r,.1,e),i);l.position.set(a*(n*.25),t*.5,0),l.rotation.z=a*o,l.castShadow=!0,s.add(l)}return s}function s3(n){let e=new ke,t=n.color||"#5fd08a",i=qs(t,{roughness:.9}),s=qs("#4a6030"),r=String(n.label||"").toLowerCase();if(/palm|coconut|açaí|date|oil palm/.test(r)){let l=new Y(new At(.06,.09,1.1,6),s);l.position.y=.55,e.add(l);for(let c=0;c<5;c++){let u=new Y(new Lt(.85,.05,.18),i);u.position.set(Math.cos(c/5*Math.PI*2)*.25,1.15,Math.sin(c/5*Math.PI*2)*.25),u.rotation.z=Math.cos(c/5*Math.PI*2)*.5,u.rotation.x=Math.sin(c/5*Math.PI*2)*.5,e.add(u)}return e}if(/cactus|aloe|agave/.test(r)){let l=new Y(new At(.14,.16,.7,8),i);l.position.y=.35,e.add(l);let c=new Y(new At(.08,.09,.35,6),i);return c.position.set(.22,.45,0),c.rotation.z=-.7,e.add(c),e}if(/bamboo/.test(r)){for(let l=0;l<3;l++){let c=new Y(new At(.04,.045,1.2+l*.1,5),i);c.position.set((l-1)*.12,.6+l*.05,l%2*.08),e.add(c)}return e}if(/cherry|flower|hibiscus|lotus|orchid|rose|tulip|marigold|protea|cantuta|lavender|wattle|bottlebrush|frangipani|pomegranate/.test(r)){let l=new Y(new At(.03,.04,.55,5),s);l.position.y=.28,e.add(l);let c=new Y(new tt(.2,8,8),i);return c.position.y=.62,e.add(c),e}let o=new Y(new At(.05,.07,.45,5),s);o.position.y=.22,e.add(o);let a=new Y(new tt(.32,8,8),i);return a.position.y=.6,e.add(a),e}function r3(n){return n==="bird"?.55:n==="fish"?.12:n==="tall"?.45:n==="large"?.35:n==="upright"?.4:.22}function uS(n){let e=new ke,t=n.color||"#8a6a48",i=qs(t,{roughness:.7}),s=qs("#2a2a2a"),r=n.shape||"quad";if(r==="bird"){let u=new Y(new tt(.16,8,8),i);u.scale.set(1,.85,1.35),u.position.y=.2,e.add(u);let h=new Y(new tt(.09,8,8),i);h.position.set(0,.32,.16),e.add(h);let f=new Y(new dn(.035,.12,5),qs("#e0a040"));f.rotation.x=Math.PI/2,f.position.set(0,.3,.28),e.add(f);let d=new Y(new Lt(.45,.04,.18),i);return d.position.set(0,.22,0),e.add(d),e}if(r==="fish"){let u=new Y(new tt(.14,8,8),i);u.scale.set(1.6,.7,.9),u.position.y=.1,e.add(u);let h=new Y(new dn(.08,.16,4),i);return h.rotation.z=Math.PI/2,h.position.set(-.22,.1,0),e.add(h),e}if(r==="lizard"){let u=new Y(new Cs(.08,.35,4,6),i);u.rotation.z=Math.PI/2,u.position.y=.1,e.add(u);let h=new Y(new tt(.07,6,6),i);h.position.set(.22,.12,0),e.add(h);let f=new Y(new dn(.05,.28,5),i);return f.rotation.z=-Math.PI/2,f.position.set(-.28,.1,0),e.add(f),e}if(r==="tall"){let u=new Y(new Cs(.14,.35,4,6),i);u.position.y=.35,e.add(u);let h=new Y(new At(.05,.06,.55,5),i);h.position.set(.05,.75,0),h.rotation.z=-.25,e.add(h);let f=new Y(new tt(.09,6,6),i);f.position.set(.18,1,0),e.add(f);for(let d of[-1,1]){let p=new Y(new At(.035,.04,.45,5),s);p.position.set(d*.1,.22,.06),e.add(p)}return e}if(r==="large"){let u=new Y(new tt(.28,10,10),i);u.scale.set(1.35,.9,1.1),u.position.y=.32,e.add(u);let h=new Y(new tt(.14,8,8),i);h.position.set(.28,.4,0),e.add(h);for(let[f,d]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let p=new Y(new At(.05,.06,.28,5),s);p.position.set(f*.14,.14,d*.12),e.add(p)}return e}if(r==="upright"){let u=new Y(new Cs(.12,.28,4,6),i);u.position.y=.4,e.add(u);let h=new Y(new tt(.1,8,8),i);h.position.set(0,.7,.05),e.add(h);let f=new Y(new At(.04,.05,.35,5),s);f.position.set(.05,.18,0),e.add(f);let d=f.clone();return d.position.x=-.05,e.add(d),e}if(r==="round"){let u=new Y(new tt(.22,10,10),i);u.position.y=.22,e.add(u);let h=new Y(new tt(.1,8,8),i);return h.position.set(.18,.28,0),e.add(h),e}let o=new Y(new Cs(.12,.28,4,6),i);o.rotation.z=Math.PI/2,o.position.y=.28,e.add(o);let a=new Y(new tt(.1,8,8),i);a.position.set(.24,.34,0),e.add(a);let l=new Y(new dn(.04,.1,4),i);l.position.set(.22,.46,.05),e.add(l);for(let[u,h]of[[-1,-1],[-1,1],[1,-1],[1,1]]){let f=new Y(new At(.03,.035,.22,5),s);f.position.set(u*.12,.11,h*.08),e.add(f)}let c=new Y(new dn(.035,.18,4),i);return c.rotation.z=Math.PI/2,c.position.set(-.28,.3,0),e.add(c),e}function zh(n){let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.clearRect(0,0,256,64),t.fillStyle="rgba(12, 8, 16, 0.72)",t.roundRect?.(8,12,240,40,12),t.roundRect?t.fill():t.fillRect(8,12,240,40),t.fillStyle="#f6f0e6",t.font="600 22px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(String(n).slice(0,28),128,32);let i=new $n(e);i.colorSpace=qe;let s=new cr({map:i,transparent:!0,depthTest:!0}),r=new wo(s);return r.scale.set(2.4,.6,1),r}Qt();var Rn=null,Bl=[],kt=null,cs=null,zl=null,dS=0,$s=null;function aa(){return m.playMode==="world"}function Nr(){return aa()&&m.worldPhase==="globe"}function Ug(){return aa()&&m.worldPhase==="country"}async function Wh(){return Bl.length||(Bl=(await(await fetch("/assets/world/countries.json")).json()).countries||[]),Bl}function Og(){for(let n of Object.values(Ne))n.visible=!1}function o3(){for(let[n,e]of Object.entries(Ne))e.visible=n==="world"}function pS(){if(zl)return zl;let n=document.createElement("div");return n.id="world-hud",n.className="hidden",n.innerHTML=`
    <div id="world-title"></div>
    <div id="world-quests"></div>
    <div id="world-actions">
      <button id="world-zoomout" type="button">Zoom to space</button>
      <button id="world-leave" type="button" class="hidden">Leave country</button>
      <button id="world-menu" type="button">Menu</button>
    </div>
  `,document.body.appendChild(n),n.querySelector("#world-zoomout").addEventListener("click",()=>{Rn&&Nr()&&Rn.zoomOut()}),n.querySelector("#world-leave").addEventListener("click",()=>yS()),n.querySelector("#world-menu").addEventListener("click",()=>a3()),zl=n,n}function mS(){let e=pS().querySelector("#world-quests");if(!cs||!m.save){e.innerHTML="";return}let t=Wv(m.save,cs);e.innerHTML=t.map(i=>i.done?`<div class="wq done">\u2713 ${Ng(i.title)}</div>`:`<div class="wq">${Ng(i.title)} \u2014 ${Ng(i.stepText||"")}</div>`).join("")}function Ng(n){return String(n||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Gh(n,e){let t=pS();t.classList.remove("hidden");let i=t.querySelector("#world-title"),s=t.querySelector("#world-zoomout"),r=t.querySelector("#world-leave");n==="globe"?(i.textContent=e?`${e.name} \xB7 drag to orbit \xB7 scroll to zoom \xB7 click again to enter`:"Earth \xB7 drag to orbit \xB7 scroll to zoom \xB7 click a country",s.classList.remove("hidden"),r.classList.add("hidden"),document.querySelector("#where").textContent="Earth"):(i.textContent=`${e.name} \xB7 ${kt?.layout?.cultureLabel||kt?.layout?.biomeLabel||""}`,s.classList.add("hidden"),r.classList.remove("hidden"),r.textContent=$s?"Back to the park":"Leave country",t.querySelector("#world-menu").classList.toggle("hidden",!!$s),document.querySelector("#where").textContent=e.name),mS()}async function gS(){Di(),fi(m.save),m.playMode="world",m.worldPhase="globe",m.playing=!0,document.body.classList.add("playing","world-mode"),document.body.classList.add("world-globe"),document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#character")?.classList.add("hidden"),document.querySelector("#toolbar")?.classList.add("world-hide"),Og();let n=await Wh();if(Rn||(Rn=Bh(n),Rn.onSelect=e=>kg(e)),Rn.setEnabled(!0),m.save.world?.iso){Rn.focusCountry(m.save.world.iso);let e=n.find(t=>t.iso===m.save.world.iso);Gh("globe",e)}else Rn.zoomOut(),Gh("globe",null);ce("World mode \u2014 pick a country on the globe"),Cn(),typeof window<"u"&&(window.__cappyWorld={enterIso:e=>{let t=Bl.find(i=>i.iso===String(e).toUpperCase());return t?kg(t):null},leave:()=>yS(),phase:()=>m.worldPhase})}async function kg(n){n?.iso&&(fi(m.save).iso=n.iso,kt&&(kt.dispose(),kt=null),Rn?.setEnabled(!1),Og(),kt=await fS(n),kt.group.visible=!0,cs=Vv(m.save,n,kt.layout),um(m.save,n,kt.layout),cs=$o(n,kt.layout),m.worldPhase="country",m.level="country",qh(!0),m.worldCountry=n,m.countrySolids=kt.solids,document.body.classList.remove("world-globe"),m.world?.levels&&(m.world.levels.country=Hh()),m.player.x=0,m.player.y=-3,m.player.z=0,m.player.h=0,m.view.lookH=0,m.view.lookPitch=.15,Vh({type:"visit",region:`village_${n.iso}`}),Gh("country",n),an(),ce(`Arrived in ${n.name}`))}function yS(){if($s)return vS();let n=m.worldCountry;kt&&(kt.dispose(),kt=null),m.worldPhase="globe",m.level="world",document.body.classList.add("world-globe"),cs=n?$o(n,null):null,Rn?.setEnabled(!0),n&&Rn.focusCountry(n.iso),Gh("globe",n),an(),ce(n?`Back above ${n.name}`:"Back to space")}function a3(){if($s)return vS();kt&&(kt.dispose(),kt=null),Rn?.setEnabled(!1),zl?.classList.add("hidden"),document.body.classList.remove("world-mode","world-globe","playing"),document.querySelector("#toolbar")?.classList.remove("world-hide"),m.playMode="story",m.worldPhase=null,m.playing=!1,qh(!0),o3(),document.querySelector("#menu")?.classList.remove("hidden"),Cn()}async function xS(n){if(!n?.iso||aa()||!m.save)return;let{player:e,view:t}=m;$s={playMode:m.playMode,level:m.level,player:{x:e.x,y:e.y,z:e.z,h:e.h},view:{lookH:t.lookH,lookPitch:t.lookPitch},camera:{near:St.near,far:St.far}},m.parkPose={...$s.player},Di(),fi(m.save),await Wh(),m.playMode="world",m.worldPhase="globe",m.playing=!0,m.paused=!1,document.body.classList.add("playing","world-mode"),document.querySelector("#toolbar")?.classList.add("world-hide"),Og(),await kg(n),Cn()}function vS(){let n=$s,e=m.worldCountry;$s=null,m.parkPose=null,kt&&(kt.dispose(),kt=null),Rn?.setEnabled(!1),cs=null,zl?.classList.add("hidden"),document.body.classList.remove("world-mode","world-globe"),document.querySelector("#toolbar")?.classList.remove("world-hide"),m.playMode=n.playMode,m.worldPhase=null,m.worldCountry=null,m.countrySolids=null,Object.assign(m.player,n.player,{vz:0}),Object.assign(m.view,n.view),St.near=n.camera.near,St.far=n.camera.far,St.updateProjectionMatrix(),qh(!0),Il(n.level),m.playing=!0,m.paused=!1,an(),Cn(),ce(e?`Back in the park from ${e.name}`:"Back in the park")}function Vh(n){if(!cs||!m.save||!m.worldCountry)return;let e=Gv(m.save,cs,n);for(let t of e)t.kind==="complete"&&(ce(t.outro||`Quest done: ${t.title}`),um(m.save,m.worldCountry,kt?.layout),cs=$o(m.worldCountry,kt?.layout)),t.kind==="coins"&&ln(m.save.coins);e.length&&(mS(),an())}function l3(n){if(!Ug())return;dS+=n,kt?.tick(n,dS);let{input:e,view:t,player:i}=m;e.lookTouch?(t.lookH-=e.lookX*70*n,t.lookPitch=Math.max(-.35,Math.min(.85,t.lookPitch+e.lookY*.55*n))):t.lookH-=((e.keys.lookRight?1:0)-(e.keys.lookLeft?1:0))*70*n,e.stickTouch||(e.stickX=(e.keys.right?1:0)-(e.keys.left?1:0),e.stickY=(e.keys.forward?1:0)-(e.keys.back?1:0)),ku(i,e.stickX,e.stickY,t.lookH,n),pr(i,Hh());for(let s of m.countrySolids||[]){let r=Math.max(s.min[0],Math.min(s.max[0],i.x)),o=Math.max(s.min[1],Math.min(s.max[1],i.y));if(r===i.x&&o===i.y){let a=i.x-(s.min[0]+s.max[0])/2,l=i.y-(s.min[1]+s.max[1])/2,c=Math.hypot(a,l)||1;i.x+=a/c*.15,i.y+=l/c*.15}}Sl(),c3()}function _S(){return Ug()?(u3(),!0):!1}function c3(){let{player:n,view:e}=m,t=Hh(),i=e.lookH*Math.PI/180,s=-Math.sin(i),r=Math.cos(i),o=n.x-s*t.cam_back,a=n.y-r*t.cam_back,l=t.cam_up+e.lookPitch*2.2;St.position.set(o,l,-a),St.lookAt(n.x,.45+Math.max(0,n.z)-e.lookPitch*.35,-n.y),St.near=.2,St.far=200,St.updateProjectionMatrix()}function u3(){let n=kt?.layout,e=m.worldCountry;if(!n||!e)return;let t=m.player.x,i=m.player.y,s=(r,o=1.8)=>Math.hypot(r[0]-t,r[1]-i)<o;if(s(n.elder.at,2.2)){Vh({type:"talk",npc:n.elder.id}),ce(`${n.elder.name}: Welcome, traveler.`);return}for(let r of n.plants)if(s(r.at)){Vh({type:"find",item:r.id}),ce(`Found ${r.label}`);return}for(let r of n.animals)if(s(r.at)){Vh({type:"find",item:r.id}),ce(`Spotted ${r.label}`);return}ce("Walk to a glowing marker or the elder, then press Go / Hop")}function qh(n){let e=Sb()?.holder;e&&(e.visible=n)}function h3(n){Nr()&&(qh(!1),Rn?.update(n))}function bS(n){!aa()||m.paused||(Nr()?h3(n):Ug()&&l3(n))}Qt();var Fg=[],MS=[];function f3(n,e,t){let i=document.createElement("canvas");i.width=512,i.height=Math.max(32,Math.round(512*t/e));let s=i.getContext("2d");s.fillStyle="#f3e6c8",s.fillRect(0,0,i.width,i.height);let r=Math.max(3,Math.round(i.height*.08));s.strokeStyle="#5a3b22",s.lineWidth=r,s.strokeRect(r/2,r/2,i.width-r,i.height-r);let o=Math.round(i.height*.62);s.textAlign="center",s.textBaseline="middle";let a=c=>`bold ${c}px Georgia, "Times New Roman", serif`;for(s.font=a(o);o>10&&s.measureText(n).width>i.width-r*5;)o-=2,s.font=a(o);s.fillStyle="#3b2616",s.fillText(n,i.width/2,i.height/2+o*.04);let l=new $n(i);return l.colorSpace=qe,l.anisotropy=4,l}function SS(n){for(let e of Fg)e.parent?.remove(e);Fg.length=0;for(let e of n||[]){let t=e.sign;if(!t?.text||!Array.isArray(t.at))continue;let[i,s]=Array.isArray(t.size)?t.size:[1.6,.3],r=new ke;r.position.copy(De(e.at[0],e.at[1],e.at[2]||0)),r.rotation.y=Ct.degToRad(e.h||0);let o=new Je({map:f3(t.text,i,s),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Y(new ws(i,s),o);a.position.copy(De(t.at[0],t.at[1],t.at[2]||0)),a.name=`sign:${e.civic||t.text}`,r.add(a),Ne.world.add(r),Fg.push(r)}MS=(n||[]).filter(e=>e.hide_if&&e.node),zg()}function zg(){for(let n of MS)n.node.visible=!Pv(m.save,n.hide_if)}function d3(){return _v(m.interiors)}function wS(){let n=bv(d3(),m.level,m.player.x,m.player.y);return n?{kind:"civic",verb:n.verb||n.label||"Use",activity:n}:null}function ua(n){if(!n.host)return null;let e=m.npcs?.npcs?.find(t=>t.id===n.host);return e&&Ii(m.save,e)?e:null}function ES(n){return m.items?.items?.find(e=>e.id===n)?.label||n}function p3(n){return m.world?.clothing?.find(e=>e.id===n)?.label||n}function Hg(n){return!Array.isArray(n)||!n.length?"":n[Math.floor(Math.random()*n.length)]}function la(n){return n?[{label:`Chat with ${n.name}`,action:()=>setTimeout(()=>Dh(n),0)}]:[]}function ca(n,e,t){let i=ua(n);i&&Ll(i.id,m.player.x,m.player.y),wM({name:n.label||i?.name||"",tint:i?.tint,line:e,choices:t})}function m3(n){let e=ua(n),t=e?`${e.name}: `:"",i=m.clock?.day??0;if(!Ev(m.save,n,i)){ca(n,`${t}That's all for today's lesson. Come back tomorrow for new questions!`,[...la(e),{label:"Okay"}]);return}let s=Sv(n.pool,i*31+7,n.questions||3);if(!s.length)return;let r=0,o=0,a=h=>{let{coins:f,sticker:d}=Tv(m.save,n,o,s.length,i);ln(m.save.coins),wt();let p=`${h} You got ${o} of ${s.length} right`;p+=f?` and earned ${Wt(f)}.`:".",d&&(p+=` Perfect score! Here's a ${ES(d).toLowerCase()}.`),Lr(p,[{label:"Thanks!"}]),f&&en("coin",600,.12)},l=h=>{let f=s[r],d=wv(f,h);d&&(o+=1),Dt(d?660:220,.12);let p=d?"Correct!":`Not quite: it's ${f.answers[f.correct]}.`;r+=1,r<s.length?Lr(p,[{label:"Next question",stay:!0,action:c}]):a(p)},c=()=>{let h=s[r];Lr(`Question ${r+1} of ${s.length}: ${h.q}`,h.answers.map((f,d)=>({label:f,stay:!0,action:()=>l(d)})))},u=Number(n.reward_per_correct)||0;ca(n,`${t}Settle in! ${s.length} questions today, ${Wt(u)} for each right answer.`,[{label:"I'm ready",stay:!0,action:c},...la(e),{label:"Maybe later"}])}function g3(n){let e=ua(n),t=e?`${e.name}: `:"",i=Cv(m.clock?.day,m.clock?.hours),s=im(m.save,n,i);if(s>0){ca(n,`${t}You were just here! Come back in about ${Math.ceil(s)} hours.`,[...la(e),{label:"Okay"}]);return}ca(n,`${t}Hop up on the bed and I'll take a look.`,[{label:"Hop up",stay:!0,action:()=>{let r=Rv(m.save,n,i);if(!r)return;let o=hi(m.potions,r.potion);o&&r.seconds>0&&(m.player.cast=null,m.player.buff={id:r.potion,left:r.seconds},dl(m.player,m.potions),ea()),wt(),en("pickup",700,.14);let a=o?` (${o.label} for ${r.seconds}s)`:"";Lr(`${t}${Hg(n.lines)||"All done!"}${a}`,[{label:"Thank you!"}])}},...la(e),{label:"Not now"}])}function TS(n){return n.potion?hi(m.potions,n.potion)?.label||n.potion:n.clothing?p3(n.clothing):ES(n.item)}function Bg(n,e){let t=ua(n),i=t?`${t.name}: `:"",r=(Array.isArray(n.stock)?n.stock:[]).map(l=>{let c=nm(m.save,l);return{label:`${TS(l)} \xB7 ${c?"owned":Wt(l.price)}`,stay:!0,action:()=>y3(n,l)}}),o=e||`${i}Have a look around! You have ${Wt(m.save.coins||0)}.`,a=[...r,...la(t),{label:"Done"}];Ir()&&e?Lr(o,a):ca(n,o,a)}function y3(n,e){let t=Av(m.save,e),i=TS(e);if(!t.ok){Dt(220,.12),Bg(n,t.reason==="owned"?`You already have the ${i.toLowerCase()}.`:`Not enough CappyCoin for the ${i.toLowerCase()}.`);return}if(e.clothing){qu(m.save,e.clothing);let r=m.world?.clothing?.find(o=>o.id===e.clothing);r?.node&&(r.node.visible=!1),yh(e.clothing)}ln(m.save.coins),wt(),en("coin",540,.12),ce(`Bought ${i.toLowerCase()}`);let s=e.potion?" It's in your potion bag.":e.clothing?" You're wearing it now.":"";Bg(n,`Thank you!${s} You have ${Wt(m.save.coins||0)} left.`)}function x3(n){let{player:e}=m;e.z=Number(n.height)||2,e.vz=0,en("pickup",380,.2),ce("Wheee!")}function v3(n){let e=ua(n);for(let[i,s]of[[0,880],[1,880],[2,990]])setTimeout(()=>Dt(s,.16,"triangle"),i*180);let t=Hg(n.lines);t&&El(e?.name||n.label,t)}function _3(n){let e=ua(n),t=Hg(n.lines)||"Nothing in the box today.";ca(n,e?`${e.name}: ${t}`:t,[...la(e),{label:"Okay"}])}function AS(n){n&&(n.kind==="quiz"?m3(n):n.kind==="checkup"?g3(n):n.kind==="shop"?Bg(n):n.kind==="pole"?x3(n):n.kind==="bell"?v3(n):n.kind==="lostfound"&&_3(n))}function b3(){return{addCoins(n){Zn(m.save,n)&&ln(m.save.coins)},say(n){typeof n=="string"&&n&&ce(n)},offerQuest(n){if(!n||!vl(m.save,n,m.quests))return;let e=m.quests?.quests?.find(t=>t.id===n)?.title||n;ce(`Quest started: ${e}`),na()},spawnProp(n,e,t){if(typeof n!="string"||!n||!qt.has(n)||!Array.isArray(e)||e.length<2)return;let i=Ne[m.level]||Ne.world;_t(n,e[0],e[1],e[2]||0,t||0,i)}}}function Vl(n){m.blueprints&&(ob(m.blueprints,n,b3()),wt())}function PS(){return Cg(n=>Ii(m.save,n))}function M3(){return(m.pickups?.pickups||[]).filter(n=>th(m.save,n,m.quests))}function $h(){return{regions:m.overworld?.regions||[],npcs:PS(),pickups:m.pickups?.pickups||[],soakZones:m.overworld?.soak_zones||[],plots:m.plots?.plots||[],labels:Rh()}}function Rh(){let n=(e,t="label")=>Object.fromEntries((e||[]).map(i=>[i.id,i[t]]));return{npcs:n(m.npcs?.npcs,"name"),items:n(m.items?.items),regions:n(m.overworld?.regions,"name"),plots:n(m.plots?.plots),buildings:n(m.buildings?.buildings)}}function ha(){mM(n=>z_(n,B_(n,m.save,m.buildings)))}function Vg(){let n=m.clock?.day??0,{changed:e,expired:t}=nb(m.save,m.bulletin,n);if(!e&&m.quests)return;for(let s of m.pickups?.pickups||[])s.node?.parent?.remove(s.node);let i=ib(m.base.quests,m.base.pickups,m.bulletin,n);m.quests=i.quests,m.pickups=i.pickups,m.playing&&ce(t.length?"The notice board changed overnight; yesterday's job is gone":"A new notice is up on the village board"),kS(),na(),wt()}function IS(){if(!m.world)return null;if(Xs())return{kind:"build_place",verb:OS()||"Place"};let n=m.transit?.train;if(n?.state==="enroute")return{kind:"train_hopoff",verb:"Hop off"};if(n?.state==="boarding"||n?.state==="alighting")return{kind:"train_hopoff",verb:n.state==="boarding"?"Boarding\u2026":"Hopping off\u2026"};let e=m.rides?.[0];if(e?.phase==="flying")return{kind:"dismount",verb:"Hop off",vehicle:e};if(e?.phase==="mounting"||e?.phase==="dismounting")return{kind:"dismount",verb:e.phase==="mounting"?"Hopping on":"Hopping off",vehicle:e};let t=eb(m.save,m.level,m.player.x,m.player.y),i=K_(m.plots,m.save,m.level,m.player.x,m.player.y),s=PS(),r=yv(m.overworld?.dressing||[],m.level,m.player.x,m.player.y),o=m.overworld?.soak_zones||[],l=em(o,m.level,m.player.x,m.player.y)?null:ab({segments:m.river?.segments||[],halfWidth:m.river?.halfWidth||0,soakZones:o,level:m.level,x:m.player.x,y:m.player.y}),c=xv({portals:m.world.portals,level:m.level,x:m.player.x,y:m.player.y,npcs:s,pickups:m.pickups?.pickups||[],soakZones:o,plotSign:i,income:t,noticeBoard:r,visibleNpcs:s,visiblePickups:M3(),vehicles:m.rides||[],stations:m.transit?.stations||[],fishSpot:l});return(!c||c.kind==="npc")&&wS()||c}function $t(){let n=IS(),e=document.querySelector("#go");e.textContent=n?.verb||"Go",e.classList.toggle("ready",!!n)}function LS(){if(!m.playing||m.paused||!m.world||Xs()||Ir()||Us(m.rides?.[0])||Bs(m.transit))return;let n=mv(m.world.portals,m.level,m.player.x,m.player.y,m.portalLatch);if(!n.portal){m.portalLatch=n.latch;return}Sg(),m.portalLatch=Jp(Go(m.world.portals,m.level,m.player.x,m.player.y))}function Gg(n){for(let e of n)e.kind==="complete"&&(ce(`Quest complete: ${e.title}`),EM(e.title,e.outro,!0)),e.kind==="coins"&&ln(m.save.coins),e.kind==="step"&&na();return wt(),na(),$t(),Ah(e=>Ii(m.save,e)),E3(),zg(),n}function Jn(n){return n?.type==="talk"&&DM(n),Gg(Ju(m.save,m.quests,n))}function Wg(){if(_S())return;if(Xs()){US(),$t();return}let n=IS();if(!n){ce("Nothing to do here");return}if(n.kind==="plot"){Z_(m.save,n.plot.id,m.plots)?(Jn({type:"buy_plot",plot:n.plot.id}),ce(`Bought ${n.plot.label}`),en("coin",540,.12),ln(m.save.coins),hM(),wt(),$t()):ce("Not enough CappyCoin");return}if(n.kind==="income"){let e=Q_(m.save,n.building.uid);e>0&&(ce(`Collected ${Wt(e)}`),ln(m.save.coins),en("coin",620,.1),wt(),$t());return}if(n.kind==="portal"){Sg();return}if(n.kind==="station"){eS(),$t();return}if(n.kind==="train_hopoff"){m.transit?.train?.state==="enroute"&&jM(),$t();return}if(n.kind==="vehicle"||n.kind==="dismount"){FM(),$t();return}if(n.kind==="civic"){AS(n.activity),$t();return}if(n.kind==="npc"){Dh(n.npc),Vl({type:"on_talk",npc:n.npc.id});return}if(n.kind==="bulletin"){SM();return}if(n.kind==="pickup"){w3(n.pickup);return}if(n.kind==="soak"){Jn({type:"soak",zone:n.zone.id,region:n.zone.region}),ce("Ahh\u2026 warm paws."),Dt(280,.18);return}n.kind==="fish"&&S3()}var CS=0;function S3(){let n=performance.now();if(n<CS){ce("Wait for a nibble\u2026");return}CS=n+1600;let e=lb(m.save,m.quests);e.fresh?(ce(`Caught a ${e.label}!`),en("pickup",520,.14)):e.effects.length?(ce(`Caught a ${e.label}!`),en("pickup",520,.14)):(ce(`A ${e.label} slipped back \u2014 you already have one.`),Dt(300,.08)),Gg(e.effects),Vl({type:"on_collect",item:e.item})}function w3(n){let e=m.items?.items?.find(i=>i.id===n.item)?.label||n.item;n.node&&(n.node.visible=!1);let t=eh(m.save,m.quests,n.item);ce(`Collected ${e.toLowerCase()}`),en("pickup",660,.12),Gg(t),Vl({type:"on_collect",item:n.item})}function DS(){Vg(),NM(),m.level!==m.lastQuestLevel&&(m.lastQuestLevel=m.level,m.level&&Jn({type:"enter",level:m.level})),m.level==="world"&&(Jn({type:"visit",region:m.regionId}),m.score>(m.lastRuckusQuest||0)&&(m.lastRuckusQuest=m.score,Jn({type:"ruckus",score:m.score})))}var Hl=new Set,RS=null;function NS(){if(m.level!==RS&&(RS=m.level,Hl.clear()),Ir())return;let n=m.clock?.hours??12,e=Xo(m.season,n),t=m.player.x,i=m.player.y,s=new Set;for(let r of Cg(o=>Ii(m.save,o))){let o=r.spot?.at;if(!o||(r.spot.level||"world")!==m.level||Math.hypot(t-o[0],i-o[1])>V_||(s.add(r.id),Hl.has(r.id)))continue;Hl.add(r.id);let l=$_(r,m.save,n,e);l&&El(r.name,l)}for(let r of[...Hl])s.has(r)||Hl.delete(r)}function kS(){for(let n of m.pickups?.pickups||[]){if(n.node=null,!th(m.save,n,m.quests))continue;let e=_t("marker.glb",n.at[0],n.at[1],.25,0,Ne[n.level||"world"]);e.scale.setScalar(.35),n.node=e}}function E3(){for(let n of m.pickups?.pickups||[])n.node?.parent&&n.node.parent.remove(n.node),n.node=null;kS()}Qt();var Hn=null,mi=null;function Yh(n){return m.buildings?.buildings?.find(e=>e.id===n)}function Gl(n){document.querySelector("#build-place")?.classList.toggle("hidden",!n)}function FS(){return(m.save.buildings||[]).map(n=>({...n,def:Yh(n.type)}))}function T3(){if(mi)return mi;mi=document.createElement("div"),mi.id="build-manage",mi.className="hidden",mi.style.cssText=["position:fixed","left:50%","bottom:calc(168px + env(safe-area-inset-bottom))","transform:translateX(-50%)","z-index:3","display:flex","gap:10px","pointer-events:none"].join(";");let n=document.createElement("button");n.type="button",n.id="manage-move",n.textContent="Move",n.style.cssText="pointer-events:auto;min-width:108px;min-height:48px";let e=document.createElement("button");return e.type="button",e.id="manage-sell",e.textContent="Sell",e.style.cssText="pointer-events:auto;min-width:108px;min-height:48px",n.addEventListener("click",()=>{let t=mi?.dataset.uid;t&&qg(t)}),e.addEventListener("click",()=>{let t=mi?.dataset.uid;t&&$g(t)}),mi.append(n,e),document.body.append(mi),mi}function fa(n){let e=T3();if(!n){e.classList.add("hidden"),e.style.display="none",delete e.dataset.uid;return}let t=Yh(n.type),i=_l(t?.price);e.dataset.uid=n.uid;let s=e.querySelector("#manage-sell");s&&(s.textContent=i>0?`Sell (${Wt(i)})`:"Sell"),e.classList.remove("hidden"),e.style.display="flex"}function A3(){if(!m.playing||m.paused||m.buildMode||m.level!=="world"){fa(null);return}if(document.querySelector("#build:not(.hidden)")){fa(null);return}let n=k_(m.save,m.level,m.player.x,m.player.y);fa(n)}function Xs(){return!!m.buildMode?.type}function BS(n){let e=Yh(n),t=oh(m.plots,m.player.x,m.player.y);if(!e||!t||!pi(m.save,t.id))return ce("Stand on one of your plots to build"),!1;if(e.limit&&rh(m.save,n)>=e.limit)return ce("You already built the limit for that"),!1;if(!Wo(m.save,e.price))return ce("Not enough CappyCoin"),!1;let i=(t.rect[0]+t.rect[2])/2,s=(t.rect[1]+t.rect[3])/2;return m.buildMode={type:n,plotId:t.id,at:[br(i),br(s)],h:0,def:e,plot:t,moveUid:null},zS(),m.paused=!1,ln(m.save.coins),Gl(!0),fa(null),!0}function qg(n){if(m.buildMode)return!1;let e=(m.save.buildings||[]).find(s=>s.uid===n),t=e?Yh(e.type):null,i=(m.plots?.plots||[]).find(s=>s.id===e?.plot);return!e||!t||!i||!pi(m.save,i.id)?(ce("Can't move that building"),!1):(m.buildMode={type:e.type,plotId:i.id,at:[br(e.at[0]),br(e.at[1])],h:e.h||0,def:t,plot:i,moveUid:e.uid},Gs(),zS(),m.paused=!1,document.querySelector("#build")?.classList.add("hidden"),Gl(!0),fa(null),ce(`Moving ${t.label} \u2014 Place when it looks right`),!0)}function $g(n){if(m.buildMode)return!1;let e=U_(m.save,n,m.buildings);return e?(Gs(),ha(),ln(m.save.coins),fa(null),document.querySelector("#build")?.classList.add("hidden"),m.playing&&(m.paused=!1),ce(e.refund>0?`Sold ${e.label} for ${Wt(e.refund)}`:`Sold ${e.label}`),en("coin",360,.12),wt(),!0):(ce("Nothing to sell"),!1)}function zS(){Xh();let n=m.buildMode;n&&(Hn=_t(n.def.file,n.at[0],n.at[1],0,n.h,Ne.world),Th(Hn,n.def.exterior),Hn.traverse(e=>{e.isMesh&&e.material&&(e.material=e.material.clone(),e.material.transparent=!0,e.material.opacity=.55)}),Xg())}function Xh(){Hn?.parent&&Hn.parent.remove(Hn),Hn=null}function Xg(){if(!Hn||!m.buildMode)return;let n=m.buildMode,e=sh(n.def,n.plot,n.at,n.h,FS(),n.moveUid||null);Hn.traverse(t=>{!t.isMesh||!t.material||t.material.color?.setHex(e?6750088:16733525)})}function HS(n){A3();let e=m.buildMode;if(!e)return;let t=e.plot,i=m.input.stickX,s=m.input.stickY;Math.hypot(i,s)>.2&&(e.at[0]=br(e.at[0]+i*n*4),e.at[1]=br(e.at[1]+s*n*4),e.at[0]=Math.min(t.rect[2],Math.max(t.rect[0],e.at[0])),e.at[1]=Math.min(t.rect[3],Math.max(t.rect[1],e.at[1])),Hn&&Hn.position.copy(De(e.at[0],e.at[1],0)),Xg())}function Wl(){if(m.buildMode){if(m.buildMode.h=(m.buildMode.h+90)%360,Hn){let n=m.buildMode.def?.exterior?.door;Hn.rotation.y=Tg(m.buildMode.h,n)*Math.PI/180}Xg()}}function US(){let n=m.buildMode;if(!n)return!1;let e=FS();if(n.moveUid)return O_(m.save,n.moveUid,n.plot,n.at,n.h,n.def,e)?(Xh(),m.buildMode=null,Gl(!1),Gs(),ha(),ce(`Moved ${n.def.label}`),en("thud",500,.12),wt(),!0):(ce("Can't build there"),!1);if(!sh(n.def,n.plot,n.at,n.h,e))return ce("Can't build there"),!1;let t=`b_${Date.now()}`;m.save.buildings.push({uid:t,type:n.type,plot:n.plotId,at:[...n.at],h:n.h,level:"world",bank:0}),Xh(),m.buildMode=null,Gl(!1),Gs(),ha();let i=m.npcs?.npcs?.find(s=>s.id===n.def.effects?.villager);return ce(i?`Built ${n.def.label}. ${i.name} is moving in tonight!`:`Built ${n.def.label}`),en("thud",500,.12),Jn({type:"build",building:n.type}),Vl({type:"on_place",building:n.type}),wt(),!0}function jh(){if(!m.buildMode)return!1;let n=m.buildMode;return n.moveUid||Zn(m.save,n.def.price),Xh(),m.buildMode=null,Gl(!1),Gs(),ln(m.save.coins),ce(n.moveUid?"Move cancelled":"Build cancelled"),wt(),!0}function OS(){return Xs()?m.buildMode?.moveUid?"Set down":"Place":null}Qt();function VS(n){let e=Fo[n.kind],t=qt.get(e.file),i=t.root.clone(!0);Ne[n.level].add(i);let s=qx(n);s.mesh=i,s.drop=t.box.min.y,Yg(s),m.bodies.push(s)}function Yg(n){let e=n.origin==="base"?n.z:n.z-n.height/2,t=De(n.x,n.y,Math.max(0,e));t.y-=n.drop||0,n.mesh.position.copy(t)}var GS=.03,Ni=null,da=[],WS=[],qS=3.5;function kr(n,e={}){return new Je({color:n,roughness:e.roughness??.75,metalness:e.metalness??.02})}function $S(n){n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.renderOrder=2)})}function C3(){let n=new ke,e=kr("#c6863a"),t=kr("#e6d2a8"),i=kr("#2f6a48"),s=kr("#8a5a2e"),r=kr("#e8892a"),o=kr("#1a1a1a",{roughness:.4}),a=new Y(new tt(.1,10,8),e);a.scale.set(1.15,.7,1.65),a.position.y=.07,n.add(a);let l=new Y(new tt(.055,8,6),t);l.scale.set(1.05,.85,.9),l.position.set(0,.065,.1),n.add(l);let c=new Y(new At(.028,.034,.07,6),i);c.position.set(0,.145,.12),c.rotation.x=.35,n.add(c);let u=new Y(new tt(.058,9,7),i);u.position.set(0,.2,.155),n.add(u);let h=new Y(new Lt(.055,.02,.08),r);h.position.set(0,.185,.215),n.add(h);let f=new Y(new dn(.042,.09,5),e);f.rotation.x=-Math.PI/2.4,f.position.set(0,.1,-.165),n.add(f);for(let d of[-1,1]){let p=new Y(new tt(.055,7,6),s);p.scale.set(.45,.55,1.15),p.position.set(d*.095,.075,-.01),n.add(p);let x=new Y(new tt(.012,5,5),o);x.position.set(d*.038,.215,.195),n.add(x)}return $S(n),n}function R3(n="#3fe0d2"){let e=new ke,t=kr(n,{roughness:.35});t.emissive=new oe(n).multiplyScalar(.22);let i=new Y(new tt(.16,8,8),t);i.scale.set(1.6,.65,.85),i.position.y=.04,e.add(i);let s=new Y(new dn(.09,.18,4),t);return s.rotation.z=Math.PI/2,s.position.set(-.26,.04,0),e.add(s),$S(e),e}function P3(n){let e=n?.overworld?.river;if(!e?.points)return null;let t=n.river?.segments?.length?n.river.segments:ju(e),i=n.river?.halfWidth??e.width/2;return{segments:t,halfWidth:i}}function I3(n,e){let t=[],i=0;for(let s of n){let[r,o,a,l]=s,c=Math.hypot(a-r,l-o);if(c<8||(i+=1,i%2===0))continue;let u=(r+a)*.5,h=(o+l)*.5,f=-(l-o)/c,d=(a-r)/c,p=e*.28,x=t.length%2===0?1:-1;t.push([u+f*p*x,h+d*p*x])}return t}function L3(n,e,t){let i=1/0,s=n,r=e;for(let a of WS){let[l,c]=vr(a,n,e),u=Math.hypot(n-l,e-c);u<i&&(i=u,s=l,r=c)}if(!(i<1/0)||i<=t)return[n,e];let o=1/i;return[s+(n-s)*o*t,r+(e-r)*o*t]}function D3(n,e,t,i,s){let r=n-t,o=e-i,a=Math.hypot(r,o);return a<=s?[n,e]:[t+r/a*s,i+o/a*s]}function ql(n,e,t,i,s){let r=n==="duck"?C3():R3(i%2===0?"#3fe0d2":"#ff8a40"),o=n==="duck"?GS:GS-.08;return r.position.copy(De(e,t,o)),Ni.add(r),{kind:n,home:s,mesh:r,ox:e,oy:t,lift:o,phase:i*1.7,speed:n==="duck"?.55+i%5*.08:.9+i%4*.12,radius:n==="duck"?.9+i%3*.2:.7+i%4*.15}}function jg(n){if(Ni)return;let e=P3(n);if(!e)return;let t=Ne.world;if(!t)return;Ni=new ke,Ni.name="ambient-life",Ni.userData.noSnow=!0,t.add(Ni),WS=e.segments,qS=e.halfWidth;let i=I3(e.segments,e.halfWidth),s=1;for(let[o,a]of i){let l=e.halfWidth*.18;da.push(ql("fish",o+l*.4,a+.35,s,"river")),s+=1,da.push(ql("duck",o-l*.3,a-.25,s,"river")),s+=1}let r=(n.overworld.soak_zones||[]).find(o=>o.id==="main_pool")||n.overworld.soak_zones?.[0];if(r?.at){let[o,a]=r.at,l=Math.max(.8,(r.radius??4)*.35);da.push(ql("fish",o-.7,a+.4,s,{kind:"soak",x:o,y:a,r:l})),s+=1,da.push(ql("fish",o+.55,a-.5,s,{kind:"soak",x:o,y:a,r:l})),s+=1,da.push(ql("duck",o+.3,a+.2,s,{kind:"soak",x:o,y:a,r:l}))}}function XS(n,e){if(Ni||jg(n),!Ni||(Ni.visible=n.level==="world",!Ni.visible))return;let t=Math.max(.4,qS*.42);for(let i of da){let s=i.phase+e*i.speed*.28,r=i.ox+Math.cos(s)*i.radius*.4,o=i.oy+Math.sin(s)*i.radius*.4;i.home==="river"?[r,o]=L3(r,o,t):i.home?.kind==="soak"&&([r,o]=D3(r,o,i.home.x,i.home.y,i.home.r));let a=i.kind==="duck"?Math.sin(s*1.6)*.025:Math.sin(s*2.2)*.03;i.mesh.position.copy(De(r,o,i.lift+a)),i.mesh.rotation.y=-s+Math.PI/2}}var YS=0;function jS(n){let{input:e,view:t,player:i}=m;e.lookTouch?(t.lookH-=e.lookX*70*n,t.lookPitch=Math.max(-.35,Math.min(.85,t.lookPitch+e.lookY*.55*n))):t.lookH-=((e.keys.lookRight?1:0)-(e.keys.lookLeft?1:0))*70*n,e.stickTouch||(e.stickX=(e.keys.right?1:0)-(e.keys.left?1:0),e.stickY=(e.keys.forward?1:0)-(e.keys.back?1:0));let s=Us(m.rides?.[0])||Bs(m.transit);s||(ku(i,e.stickX,e.stickY,t.lookH,n),pr(i,m.world.levels[m.level]),Uu(i,m.solids,m.level),LS()),Ov(i,m.potions,n)&&ce("The potion wore off"),Uv(i,n),i.form==="frog"&&i.frogLeft>0&&(i.frogLeft-=n),ea(),BM(n),ZM(n),s||pr(i,m.world.levels[m.level]);let r=KM()||zM(),o=document.querySelector("#keys-hint");if(o&&r?o.textContent=r:o&&o.dataset.idle&&(o.textContent=o.dataset.idle),m.level==="world"){m.river&&!s&&S_(i,m.river.segments,m.river.halfWidth);let l=M_(m.overworld.regions,i.x,i.y),c=l?l.name:"",u=l?l.id:"";if(u!==m.regionId&&(m.regionId=u,m.regionName=c,document.querySelector("#where").textContent=c,l)){let h=Qv(m.save,l);if(h){for(let f of m.overworld.signposts||[])Xu(f,m.save.discovered)&&$u(m.save,f.id);ce(`Discovered: ${h}`),wt()}}}let a=m.bodies.filter(l=>l.level===m.level);m.score+=$x(a,i,n);for(let l of a)Yg(l);lM(m.score),m.buildings&&Sm(m.save,m.buildings,Date.now()),HS(n),DS(),NS(),YS+=n,jg(m),XS(m,YS),$t(),N3()}function N3(){let{player:n,save:e}=m;for(let t of vv(m.world.clothing,ts(e),n.x,n.y))qu(e,t.id),Ri(localStorage,e),wt(),t.node.visible=!1,yh(t.id),ce(`Found the ${t.label.toLowerCase()}`),en("pickup",660,.16);for(let t of Dv(m.potions?.bottles,qo(e),m.level,n.x,n.y)){if(!Nv(e,t))continue;Ri(localStorage,e),wt(),t.node&&(t.node.visible=!1);let i=hi(m.potions,t.potion);ce(`Found ${i?.label?.toLowerCase()||"a potion"}`),en("pickup",700,.14)}}function Zg(){!m.playing||m.paused||Us(m.rides?.[0])||Bs(m.transit)||Gx(m.player)&&Dt(420,.08)}function Kg(){!m.playing||m.paused||Us(m.rides?.[0])||Bs(m.transit)||Wx(m.player)&&en("flop",180,.1,"triangle")}Qt();var k3="Drag to spin, scroll or +/\u2212 to zoom (arrow keys work too). Point at a country to see its name, tap it to plan a trip.",ct=null,gi="park",KS="",Xl={closeMap:()=>{},renderMap:()=>{}},Ys=null,Zh=null,Yl=null,un=null,$l=null,Ur=0,Kh=0,Jh=null;function JS(){return!!(m.mapOpen&&gi==="globe"&&un)}function QS(){if(ct)return ct;let n=document.querySelector("#map"),e=n.querySelector("h2"),t=n.querySelector("p"),i=n.querySelector("#map-stage");KS=t?.textContent||"";let s=document.createElement("div");s.id="map-tabs",s.setAttribute("role","tablist"),s.innerHTML=`
    <button type="button" role="tab" data-tab="park" aria-selected="true" class="active">Park</button>
    <button type="button" role="tab" data-tab="globe" aria-selected="false">Globe</button>
  `,e.after(s);let r=document.createElement("div");return r.id="map-globe",r.className="hidden",r.innerHTML=`
    <canvas id="map-globe-canvas" tabindex="0" aria-label="Globe. Drag to spin, arrow keys turn it, plus and minus zoom."></canvas>
    <div id="map-globe-status">Loading Earth\u2026</div>
    <div id="map-globe-nav">
      <button id="globe-zoom-in" type="button" aria-label="Zoom in">+</button>
      <button id="globe-zoom-out" type="button" aria-label="Zoom out">\u2212</button>
      <button id="globe-earth" type="button" aria-label="Whole Earth">Earth</button>
    </div>
    <div id="globe-card" class="hidden" role="dialog" aria-labelledby="globe-card-name">
      <p class="kicker">Travel</p>
      <h3 id="globe-card-name"></h3>
      <p id="globe-card-info"></p>
      <div class="row">
        <button id="globe-go" type="button">Travel there</button>
        <button id="globe-cancel" type="button">Not now</button>
      </div>
    </div>
  `,i.after(r),ct={sheet:n,hint:t,tabs:s,parkStage:i,stage:r,canvas:r.querySelector("#map-globe-canvas"),status:r.querySelector("#map-globe-status"),card:r.querySelector("#globe-card"),name:r.querySelector("#globe-card-name"),info:r.querySelector("#globe-card-info"),go:r.querySelector("#globe-go")},s.addEventListener("click",o=>{let a=o.target.closest("button[data-tab]");a&&Jg(a.dataset.tab)}),r.querySelector("#globe-zoom-in").addEventListener("click",()=>un?.zoomBy(.8)),r.querySelector("#globe-zoom-out").addEventListener("click",()=>un?.zoomBy(1.25)),r.querySelector("#globe-earth").addEventListener("click",()=>{jl(),un?.zoomOut()}),ct.go.addEventListener("click",()=>nw()),r.querySelector("#globe-cancel").addEventListener("click",()=>{jl(),un?.clearChoice()}),window.addEventListener("keydown",H3,!0),ct}function Jg(n){QS(),gi=n==="globe"?"globe":"park";for(let e of ct.tabs.querySelectorAll("button[data-tab]")){let t=e.dataset.tab===gi;e.classList.toggle("active",t),e.setAttribute("aria-selected",String(t))}ct.sheet.classList.toggle("globe-tab",gi==="globe"),ct.parkStage.classList.toggle("hidden",gi!=="park"),ct.stage.classList.toggle("hidden",gi!=="globe"),ct.hint&&(ct.hint.textContent=gi==="globe"?k3:KS),gi==="globe"?F3():(ew(),Xl.renderMap())}async function U3(){return un||$l||($l=(async()=>{try{Ys=new Mo({canvas:ct.canvas,antialias:!0,powerPreference:"low-power"})}catch(e){throw ct.status.textContent="The globe needs WebGL, which this browser has turned off.",$l=null,e}Ys.setPixelRatio(Math.min(window.devicePixelRatio||1,Rt.coarse?1.5:2)),Ys.outputColorSpace=qe,Ys.setClearColor(263435,1),Zh=new wi,Zh.add(O3()),Yl=new Ut(40,1,.05,60);let n=await Wh();return un=Bh(n,{renderer:Ys,scene:Zh,camera:Yl,container:ct.stage,onPick:e=>z3(e)}),un.state.ready.then(e=>{e?ct.status.classList.add("hidden"):ct.status.textContent="Country borders didn't load; picking by nearest capital."}),un})(),$l)}function O3(){let e=new Float32Array(2700);for(let s=0;s<900;s+=1){let r=Math.random()*2-1,o=Math.random()*Math.PI*2,a=Math.sqrt(1-r*r)*30;e.set([a*Math.cos(o),r*30,a*Math.sin(o)],s*3)}let t=new ot;t.setAttribute("position",new Nt(e,3));let i=new Ei(t,new ui({color:14674175,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.7}));return i.name="stars",i}function F3(){U3().then(()=>{!m.mapOpen||gi!=="globe"||(un.setEnabled(!0),Ur||(Kh=0,Ur=requestAnimationFrame(tw)))}).catch(n=>console.warn("Globe unavailable",n?.message||n))}function ew(){Ur&&cancelAnimationFrame(Ur),Ur=0,jl(),un&&(un.clearChoice(),un.setEnabled(!1))}function B3(){let n=ct.canvas.clientWidth,e=ct.canvas.clientHeight;if(!n||!e)return;let t=Ys.getSize(new te);(t.x!==n||t.y!==e)&&(Ys.setSize(n,e,!1),Yl.aspect=n/e,Yl.updateProjectionMatrix())}function tw(n){if(Ur=0,!JS())return;let e=Kh?Math.min(.1,(n-Kh)/1e3):1/60;Kh=n,B3(),un.update(e),Ys.render(Zh,Yl),Ur=requestAnimationFrame(tw)}function z3(n){Jh=n,ct.name.textContent=n.name;let e=m.playMode==="multiplayer";n.country?e?(ct.info.textContent=`Capital: ${n.country.capital}. Trips are for your own park, so leave the online park first.`,ct.go.disabled=!0):(ct.info.textContent=`Capital: ${n.country.capital}. Visit a village there, then come back to the park.`,ct.go.disabled=!1):(ct.info.textContent="No village here yet. Try a neighbouring country.",ct.go.disabled=!0),ct.card.classList.remove("hidden")}function jl(){Jh=null,ct?.card.classList.add("hidden")}function ZS(){return!!(ct&&!ct.card.classList.contains("hidden"))}async function nw(){let n=Jh?.country;!n||ct.go.disabled||(jl(),Xl.closeMap(),await xS(n))}function H3(n){if(!JS()||n.target?.closest?.("input, textarea, select"))return;let e=!1;n.key==="Escape"?(ZS()?(jl(),un.clearChoice()):Xl.closeMap(),e=!0):n.key==="Enter"&&ZS()&&!n.target?.closest?.("button")?(nw(),e=!0):e=un.handleKey(n),e&&(n.preventDefault(),n.stopPropagation())}function iw(n){Xl={...Xl,...n},QS(),Jg(gi)}function sw(){ct&&ew()}function V3(){return{tab:gi,globe:un,chosen:Jh}}typeof window<"u"&&(window.__cappyMapGlobe={show:n=>Jg(n),debug:V3});var G3="/assets/map/world_map.png?v=3";function W3(n){return m.buildings?.buildings?.find(e=>e.id===n)}var In=null,_e=null,Qh=null,Zl="idle",gn={u:.5,v:.5,zoom:1},Qn=null;function ow(){In||(In=document.querySelector("#map-canvas"),_e=In.getContext("2d"),In.addEventListener("pointerdown",X3),In.addEventListener("pointermove",Y3),In.addEventListener("pointerup",rw),In.addEventListener("pointercancel",rw),In.addEventListener("wheel",j3,{passive:!1}),document.querySelector("#map-zoom-in")?.addEventListener("click",()=>Qg(1.25)),document.querySelector("#map-zoom-out")?.addEventListener("click",()=>Qg(1/1.25)),document.querySelector("#map-recenter")?.addEventListener("click",()=>{aw(2.4),Or()}))}function aw(n=gn.zoom){let[e,t,i,s]=m.overworld?.bounds||[-1,-1,1,1];gn.u=(m.player.x-e)/(i-e),gn.v=(s-m.player.y)/(s-t),gn.zoom=n,e0()}function e0(){gn.zoom=Math.min(6,Math.max(.7,gn.zoom));let n=.35;gn.u=Math.min(1+n,Math.max(-n,gn.u)),gn.v=Math.min(1+n,Math.max(-n,gn.v))}function Qg(n){gn.zoom*=n,e0(),Or()}function lw(n,e){let t=Math.min(n,e)*gn.zoom;return{left:n/2-gn.u*t,top:e/2-gn.v*t,size:t}}function cw(){if(Zl!=="idle")return;Zl="loading";let n=new Image;n.onload=()=>{Qh=n,Zl="ready",m.mapOpen&&Or()},n.onerror=()=>{Qh=null,Zl="missing",m.mapOpen&&Or()},n.src=G3}function Pn(n,e,t,i,s){let[r,o,a,l]=s,c=(n-r)/(a-r),u=(l-e)/(l-o),h=lw(t,i);return[h.left+c*h.size,h.top+u*h.size]}function q3(n,e,t,i){for(let s of m.overworld.regions){let[r,o,a,l]=s.rect,[c,u]=Pn(r,o,n,e,t),[h,f]=Pn(a,l,n,e,t),d=h-c,p=f-u;i.has(s.id)?(_e.fillStyle="rgba(242, 132, 42, 0.22)",_e.strokeStyle="rgba(248, 237, 212, 0.45)"):(_e.fillStyle="rgba(20, 8, 24, 0.85)",_e.strokeStyle="rgba(80, 60, 90, 0.5)"),_e.fillRect(c,u,d,p),_e.strokeRect(c,u,d,p)}}function $3(n,e,t,i){_e.font="13px Gill Sans, sans-serif",_e.textAlign="center";for(let s of m.overworld.regions){if(s.id==="fields"||s.id==="river"||!i.has(s.id))continue;let[r,o,a,l]=s.rect,[c,u]=Pn((r+a)/2,(o+l)/2,n,e,t);_e.lineWidth=3,_e.strokeStyle="rgba(20, 12, 8, 0.85)",_e.strokeText(s.name,c,u),_e.fillStyle="rgba(255, 248, 230, 0.95)",_e.fillText(s.name,c,u)}_e.textAlign="left"}function Or(){ow(),cw();let{overworld:n,save:e}=m;if(!n)return;let t=In.getBoundingClientRect(),i=window.devicePixelRatio||1;In.width=t.width*i,In.height=t.height*i,_e.setTransform(i,0,0,i,0,0);let s=t.width,r=t.height,o=n.bounds,a=new Set(e.discovered||[]),l=dm(e);if(_e.fillStyle="#1a0c16",_e.fillRect(0,0,s,r),Zl==="ready"&&Qh){let d=lw(s,r);_e.drawImage(Qh,d.left,d.top,d.size,d.size),$3(s,r,o,a)}else{q3(s,r,o,a);for(let d of n.regions){if(!a.has(d.id))continue;let[p,x]=d.rect,[y,g]=Pn(p,x,s,r,o);_e.fillStyle="#f8edd4",_e.font="12px Gill Sans, sans-serif",_e.fillText(d.name,y+4,g+14)}}for(let d of m.plots?.plots||[]){if(!pi(e,d.id))continue;let[p,x,y,g]=d.rect,[v,b]=Pn(p,x,s,r,o),[_,R]=Pn(y,g,s,r,o);_e.strokeStyle="rgba(125, 255, 106, 0.75)",_e.lineWidth=2,_e.strokeRect(v,b,_-v,R-b)}for(let d of e.buildings||[]){if((d.level||"world")!=="world")continue;let p=W3(d.type);if(p?.footprint){let[x,y,g,v]=ih(d.at,p.footprint,d.h||0),[b,_]=Pn(x,y,s,r,o),[R,M]=Pn(g,v,s,r,o);_e.fillStyle="rgba(255, 213, 106, 0.55)",_e.strokeStyle="rgba(232, 160, 32, 0.9)",_e.lineWidth=1.5,_e.fillRect(b,_,R-b,M-_),_e.strokeRect(b,_,R-b,M-_)}else{let[x,y]=Pn(d.at[0],d.at[1],s,r,o);_e.beginPath(),_e.fillStyle="#ffd56a",_e.arc(x,y,4,0,Math.PI*2),_e.fill()}}_e.font="11px Gill Sans, sans-serif";for(let d of n.signposts||[]){if(!l.has(d.id))continue;let[p,x]=Pn(d.at[0],d.at[1],s,r,o);_e.beginPath(),_e.fillStyle="#ffe1a8",_e.arc(p,x,5,0,Math.PI*2),_e.fill(),_e.strokeStyle="#2a100c",_e.lineWidth=1.5,_e.stroke(),_e.fillStyle="#ffe1a8",_e.fillText(d.label,p+8,x+4)}let u=nh(e,m.quests,$h());if(u){let[d,p]=Pn(u.x,u.y,s,r,o);_e.beginPath(),_e.fillStyle="#ff6eb4",_e.arc(d,p,6,0,Math.PI*2),_e.fill(),_e.strokeStyle="#fff",_e.lineWidth=2,_e.stroke(),_e.fillStyle="#ffd0e8",_e.font="11px Gill Sans, sans-serif",_e.fillText(u.label,d+8,p-8)}let[h,f]=Pn(m.player.x,m.player.y,s,r,o);_e.beginPath(),_e.fillStyle="#7dff6a",_e.arc(h,f,4,0,Math.PI*2),_e.fill();for(let d of m.peers||[]){let[p,x]=Pn(d.x,d.y,s,r,o);_e.beginPath(),_e.fillStyle=d.gender==="female"?"#ff9ad4":"#ffb24a",_e.arc(p,x,4,0,Math.PI*2),_e.fill(),_e.strokeStyle="#2a100c",_e.lineWidth=1.2,_e.stroke(),d.name&&(_e.fillStyle="#ffe1a8",_e.font="11px Gill Sans, sans-serif",_e.fillText(d.name,p+7,x-7))}}function X3(n){In.setPointerCapture(n.pointerId),Qn={id:n.pointerId,x:n.clientX,y:n.clientY,moved:!1}}function Y3(n){if(!Qn||Qn.id!==n.pointerId)return;let e=n.clientX-Qn.x,t=n.clientY-Qn.y;Math.hypot(e,t)>4&&(Qn.moved=!0);let i=In.getBoundingClientRect(),s=Math.min(i.width,i.height)*gn.zoom;gn.u-=e/s,gn.v-=t/s,Qn.x=n.clientX,Qn.y=n.clientY,e0(),Or()}function rw(n){if(!Qn||Qn.id!==n.pointerId)return;let e=Qn.moved;Qn=null,e||Z3(n)}function j3(n){n.preventDefault(),Qg(n.deltaY>0?1/1.12:1.12)}function Z3(n){let{overworld:e,save:t,player:i,view:s}=m,r=In.getBoundingClientRect(),o=n.clientX-r.left,a=n.clientY-r.top,l=e.bounds,c=dm(t),u=null,h=20;for(let f of e.signposts||[]){if(!c.has(f.id))continue;let[d,p]=Pn(f.at[0],f.at[1],r.width,r.height,l),x=Math.hypot(o-d,a-p);x<h&&(h=x,u=f)}u&&(i.x=u.at[0],i.y=u.at[1],i.z=0,i.vz=0,s.lookPitch=0,pa(),ce(`Travelled to ${u.label}`),wt())}function uw(){!m.playing||m.paused||(ow(),cw(),aw(2.2),m.mapOpen=!0,m.paused=!0,document.querySelector("#map").classList.remove("hidden"),Or(),iw({closeMap:pa,renderMap:Or}))}function pa(){m.mapOpen=!1,sw(),document.querySelector("#map").classList.add("hidden"),m.playing&&(m.paused=!1)}var ef=new Map,yi=256;function K3(n,e){let t=new Uint8ClampedArray(n.length),i=e*4;for(let s=0;s<e;s+=1)t.set(n.subarray((e-1-s)*i,(e-s)*i),s*i);return t}function hw(n){if(ef.has(n))return ef.get(n);let e=qt.get(n);if(!e?.root)return ef.set(n,""),"";let t=new Bt(yi,yi,{type:kn});t.texture.colorSpace=qe;let i=new wi;i.background=new oe("#24151f");let s=new jn("#ffe4c4",2.4);s.position.set(1.6,2.4,2.8);let r=new jn("#c9a0ff",.55);r.position.set(-2,.6,1.2),i.add(s,r,new Ao("#ffd8b0",.85));let o=e.root.clone(!0);i.add(o);let a=new zt().setFromObject(o),l=a.getCenter(new P),c=a.getSize(new P);o.position.sub(l);let u=Math.max(c.x,c.y,c.z,.08),h=new Ut(36,1,.01,80);h.position.set(u*1.55,u*.85,u*2.05),h.lookAt(0,0,0);let f=pt.getRenderTarget(),d=new oe;pt.getClearColor(d);let p=pt.getClearAlpha();pt.setRenderTarget(t),pt.setClearColor("#24151f",1),pt.render(i,h);let x=new Uint8Array(yi*yi*4);pt.readRenderTargetPixels(t,0,0,yi,yi,x),pt.setRenderTarget(f),pt.setClearColor(d,p);let y=document.createElement("canvas");y.width=yi,y.height=yi;let g=y.getContext("2d"),v=g.createImageData(yi,yi);v.data.set(K3(x,yi)),g.putImageData(v,0,0);let b=y.toDataURL("image/png");return t.dispose(),ef.set(n,b),b}var J3={yard:"Yard",house:"House",patch:"Patch"};function Q3(n){return J3[n.place]||n.place||"Park"}function t0(){let n=document.querySelector("#outfit-list");n.replaceChildren();let e=ts(m.save),t=ns(m.save);for(let i of m.world.clothing){let s=e.has(i.id),r=t.has(i.id),o=document.createElement("button");o.type="button",o.className="cloth-card",o.classList.toggle("owned",s),o.classList.toggle("wearing",r),o.classList.toggle("locked",!s),o.setAttribute("aria-pressed",s?String(r):"false"),o.disabled=!1;let a=document.createElement("span");a.className="cloth-art";let l=hw(i.file);if(l){let h=document.createElement("img");h.alt="",h.src=l,a.append(h)}else a.classList.add("missing");let c=document.createElement("strong");c.textContent=i.label;let u=document.createElement("span");u.className="cloth-meta",s?u.textContent=r?"Wearing":"Tap to wear":u.textContent=`Find in the ${Q3(i).toLowerCase()}`,o.append(a,c,u),o.addEventListener("click",()=>{e.has(i.id)&&(Jv(m.save,i.id),Ri(localStorage,m.save),xh(),t0())}),n.append(o)}document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#paused")?.classList.add("hidden"),document.querySelector("#wardrobe").classList.remove("hidden")}Qt();function n0(){let n=document.querySelector("#potion-list");n.replaceChildren();let e=qo(m.save),t=new Map;for(let i of m.potions?.bottles||[])t.has(i.potion)||t.set(i.potion,[]),t.get(i.potion).push(i);for(let i of m.potions?.kinds||[]){let s=sm(m.save,i.id),r=(t.get(i.id)||[]).some(u=>e.has(u.id)),o=document.createElement("button");o.type="button",o.className="cloth-card potion-card",o.classList.toggle("owned",s>0),o.classList.toggle("locked",!r),o.disabled=s<1;let a=document.createElement("span");a.className="potion-art",a.style.setProperty("--fizz",i.color);let l=document.createElement("strong");l.textContent=i.label;let c=document.createElement("span");c.className="cloth-meta",r?s<1?c.textContent="Used up":c.textContent=s===1?`Tap to drink \xB7 ${i.hint}`:`${s} left \xB7 ${i.hint}`:c.textContent="Find in the haunted house",o.append(a,l,c),o.addEventListener("click",()=>{if(kv(m.save,m.player,m.potions,i.id)){if(an(),i.effect==="hex_frog"){let u=rm(m.peers,m.player.x,m.player.y,m.level);ce(u.length?`Hexed ${u.length} friend${u.length===1?"":"s"} into frogs!`:"No one was close enough to hex")}else ce(`Drank the ${i.label.toLowerCase()}`);ea(),n0()}}),n.append(o)}document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#paused")?.classList.add("hidden"),document.querySelector("#potion-bag")?.classList.remove("hidden")}Qt();function fw(){return""}var tD=120,nD=5,s0="cappy-mp-id",tf=0,ga=!1,r0=!1,dw="",ma=0;function iD(){try{let n=sb(sessionStorage.getItem(s0));if(n)return n;let e=wm();return sessionStorage.setItem(s0,e),e}catch{return wm()}}function i0(n){return String(n||"").replace(/\/+$/,"")}function sD(){let n=new URLSearchParams(location.search).get("mp");if(n)return i0(n);try{let e=i0(localStorage.getItem("cappy-mp-url"));if(e)return e}catch{}return i0(fw())}function rD(n){return`${dw}${n}`}async function nf(n,e){let t=await fetch(rD(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`${n} ${t.status}`);return t.json()}function o0(){let{player:n,input:e,character:t,level:i,save:s}=m;return{id:m.netId,name:t.name,gender:t.gender,x:n.x,y:n.y,z:n.z,h:n.h,walking:Math.hypot(e.stickX,e.stickY)>.16,flop:n.flop,level:i,clothes:[...ns(s)],cast:n.cast?.effect==="frog"?"frog":void 0}}function pw(n){if(n){m.netId=n;try{sessionStorage.setItem(s0,n)}catch{}}}function a0(n){n.id&&pw(n.id),aD(n.you),lg(n.peers||[])}async function oD(){if(!(!ga||!m.playing))try{let n=await nf("/mp/sync",o0());ma=0,a0(n)}catch{if(ma+=1,ma<nD)return;try{let n=await nf("/mp/join",o0());ma=0,a0(n);return}catch{}r0||(r0=!0,ga=!1,ce("Lost the shared park \u2014 playing on your own."))}}async function mw(){m.netId=iD(),dw=sD(),ma=0;try{let n=await nf("/mp/join",o0());pw(n.id),ga=!0,r0=!1,a0(n);let e=n.peers||[];if(e.length){let t=e.length;m.player.x+=Math.cos(t*2.1)*1.8,m.player.y+=Math.sin(t*2.1)*1.8,ce(`${e.length} friend${e.length===1?"":"s"} in the park`)}else ce("You're in the shared park");clearInterval(tf),tf=setInterval(oD,tD)}catch{ga=!1,lg([]),ce("Couldn't find friends \u2014 playing on your own.")}}function gw(){clearInterval(tf),tf=0,ma=0,ga&&m.netId&&nf("/mp/leave",{id:m.netId}).catch(()=>{}),ga=!1,Cb()}function aD(n){if(!n||!m.player)return;let e=m.player.form==="frog";m.player.form=n.form==="frog"?"frog":"",m.player.frogLeft=n.form==="frog"?n.frogLeft:0,m.player.form==="frog"&&!e&&ce("Ribbit! Someone hexed you into a frog"),e&&m.player.form!=="frog"&&ce("You're a capybara again")}Qt();var af="male";function xw(){return document.querySelector("#character")}function Kl(){return document.querySelector("#character-name")}function sf(){return document.querySelector("#character-join")}function lD(){return document.querySelector("#character-hint")}function cD(){return document.querySelector("#character-copy")}function rf(){return m.playMode==="multiplayer"}function of(){let e=!!zu(Kl()?.value);sf()&&(sf().disabled=!e);let t=lD();t&&(rf()?t.textContent=e?"Friends will see this name above you.":"Type a name to join the park.":t.textContent=e?"This name is yours in the park.":"Type a name to start your story.")}function vw(){for(let n of document.querySelectorAll(".look-card")){let e=n.dataset.gender===af;n.classList.toggle("selected",e),n.setAttribute("aria-pressed",e?"true":"false")}}function uD(){let n=rf(),e=cD();e&&(e.textContent=n?"Type a name and pick a capybara. Friends in the park will see you.":"Type a name and pick a capybara. The park is yours \u2014 no one else joins.");let t=sf();t&&(t.textContent=n?"Join the park":"Start story"),of()}function l0(n="story"){m.playMode=n==="multiplayer"?"multiplayer":"story",af=fl(m.character?.gender||m.save?.character?.gender);let e=m.character?.name||m.save?.character?.name||"",t=Kl();t&&(t.value=e),vw(),uD(),document.querySelector("#menu")?.classList.add("hidden"),xw()?.classList.remove("hidden"),requestAnimationFrame(()=>t?.focus())}function _w(){xw()?.classList.add("hidden")}function hD(){Di(),m.playing=!0,document.body.classList.add("playing"),document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#load")?.classList.add("hidden"),_w(),Ig()&&ce("Broom's right next to you \u2014 E to hop on"),rf()||LM(),Cn(),an(),rf()&&mw()}function yw(){let n=zu(Kl()?.value);if(!n){of(),Kl()?.focus();return}let e=fl(af);m.character={name:n,gender:e},m.save.character={name:n,gender:e},wb(e,n),an(),hD()}function bw(){let n=Kl();if(n){n.addEventListener("input",of),n.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),yw())});for(let e of document.querySelectorAll(".look-card"))e.addEventListener("click",()=>{af=fl(e.dataset.gender),vw()});sf()?.addEventListener("click",yw),document.querySelector("#character-back")?.addEventListener("click",()=>{_w(),document.querySelector("#menu")?.classList.remove("hidden")}),of()}}var Mw={w:"forward",arrowup:"forward",s:"back",arrowdown:"back",a:"left",arrowleft:"left",d:"right",arrowright:"right",shift:"down",c:"down"},fD=.22,dD=.0025,pD=100;function Sw(n,e,t=pD){if(!n)return()=>{};let i=0,s=0,r=!1,o=(c,u)=>{let h=c-i,f=u-s,d=Math.max(-t,Math.min(t,h)),p=Math.max(-t,Math.min(t,f));e(d/t,-p/t,!0)},a=()=>{r=!1,e(0,0,!1)};n.addEventListener("pointerdown",c=>{c.button===0&&(c.preventDefault(),r=!0,i=c.clientX,s=c.clientY,n.setPointerCapture(c.pointerId),o(c.clientX,c.clientY))}),n.addEventListener("pointermove",c=>{!r||!n.hasPointerCapture(c.pointerId)||(c.preventDefault(),o(c.clientX,c.clientY))});let l=c=>{n.hasPointerCapture(c.pointerId)&&n.releasePointerCapture(c.pointerId),a()};return n.addEventListener("pointerup",l),n.addEventListener("pointercancel",a),a}function mD(n){if(!n)return;let e=!1,t=0,i=0;n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(!m.playing||m.paused||Nr()||(e=!0,t=r.clientX,i=r.clientY,n.setPointerCapture(r.pointerId)))}),n.addEventListener("pointermove",r=>{if(!e)return;let o=r.clientX-t,a=r.clientY-i;t=r.clientX,i=r.clientY,m.view.lookH-=o*fD,m.view.lookPitch=Math.max(-.35,Math.min(.85,m.view.lookPitch+a*dD))});let s=r=>{n.hasPointerCapture(r.pointerId)&&n.releasePointerCapture(r.pointerId),e=!1};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function ww(n,e){if(document.body.classList.contains("touch-layout"))return;document.body.classList.add("touch-layout");let t=e();t.stick=Sw(document.querySelector("#touch-move"),(i,s,r)=>{n.stickX=i,n.stickY=s,n.stickTouch=r}),t.look=Sw(document.querySelector("#touch-look"),(i,s,r)=>{n.lookX=i,n.lookY=s,n.lookTouch=r})}function Ew(){let{input:n}=m;window.addEventListener("keydown",r=>{if(r.target?.closest?.("input, textarea"))return;let o=Mw[r.key.toLowerCase()];o&&(n.keys[o]=!0),r.key===" "&&(r.preventDefault(),n.keys.hop=!0,Zg()),r.key.toLowerCase()==="f"&&Kg(),r.key.toLowerCase()==="e"&&Wg(),r.key.toLowerCase()==="r"&&Xs()&&(r.preventDefault(),Wl()),r.key==="Escape"&&Xs()&&(r.preventDefault(),jh()&&$t())}),window.addEventListener("keyup",r=>{let o=Mw[r.key.toLowerCase()];o&&(n.keys[o]=!1),r.key===" "&&(n.keys.hop=!1)});let e={stick:()=>{},look:()=>{}};Rx()&&ww(n,()=>e),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&ww(n,()=>e)},!0),mD(document.querySelector("#view"));let t=(r,o)=>{document.querySelector(r).addEventListener("pointerdown",a=>{a.preventDefault(),o()})};t("#flop",Kg);let i=document.querySelector("#hop");i.addEventListener("pointerdown",r=>{r.preventDefault(),m.input.keys.hop=!0,Zg()});let s=()=>{m.input.keys.hop=!1};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),t("#go",()=>{Ir()?Ih():Wg()}),t("#pause",()=>{m.playing&&(m.paused=!0,e.stick(),e.look(),Cn(),document.querySelector("#paused").classList.remove("hidden"))}),document.querySelector("#resume").addEventListener("click",()=>{m.paused=!1,document.querySelector("#paused").classList.add("hidden"),Cn()}),document.querySelector("#pause-clothes").addEventListener("click",()=>{document.querySelector("#paused").classList.add("hidden"),t0()}),document.querySelector("#pause-potions").addEventListener("click",()=>{document.querySelector("#paused").classList.add("hidden"),n0()}),document.querySelector("#story").addEventListener("click",()=>{Di(),l0("story")}),document.querySelector("#multiplayer").addEventListener("click",()=>{Di(),l0("multiplayer")}),document.querySelector("#world")?.addEventListener("click",()=>{gS()}),document.querySelector("#map-btn").addEventListener("click",uw),document.querySelector("#map-close").addEventListener("click",()=>{pa(),Cn()}),document.querySelector("#clothes-back").addEventListener("click",()=>{document.querySelector("#wardrobe").classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}),document.querySelector("#potions-back").addEventListener("click",()=>{document.querySelector("#potion-bag").classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}),window.addEventListener("resize",()=>Qi()),window.addEventListener("orientationchange",()=>Qi()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>Qi()),document.addEventListener("contextmenu",r=>{r.target?.closest?.("input, textarea")||r.preventDefault()}),document.addEventListener("visibilitychange",Cn)}var gD=new Set(["on_talk","on_collect","on_place"]),yD=new Set(["give_coins","say","start_quest","spawn_prop"]),nH=new Set([...gD,...yD]);function _D(n){return typeof n=="number"&&Number.isFinite(n)}function bD(n){return Array.isArray(n)&&(n.length===2||n.length===3)&&n.every(_D)}function u0(n){return bD(n)?[n[0],n[1],n[2]||0]:[0,0,0]}function Tw(n,e){return n?.prefabs?.find(t=>t?.id===e)||null}function c0(n,e){let t=n?.overrides;return t?e==="root"?t.root||t[""]||null:t[e]||null:null}function MD(n){return(n||[]).find(t=>t?.type==="model"&&t.file)?.file||null}function Aw(n,e){let t=(n.h||0)*Math.PI/180,i=Math.cos(t),s=Math.sin(t),r=n.s||1,o=u0(e.at);return{at:[n.at[0]+r*(o[0]*i-o[1]*s),n.at[1]+r*(o[0]*s+o[1]*i),(n.at[2]||0)+r*o[2]],h:(n.h||0)+(e.h||0),s:r*(e.s||1)}}function SD(n,e){return{at:u0(e?.at||n?.at),h:e?.h??n?.h??0,s:e?.s??n?.s??1}}function h0(n,e){let t=[],i=Array.isArray(e)?e:[];for(let s=0;s<i.length;s+=1){let r=i[s],o=Tw(n,r?.prefab);if(!o?.root)continue;let a=c0(r,"root"),l={at:u0(a?.at||r.at),h:a?.h??r.h??0,s:a?.s??r.s??1};Cw(o,r,o.root,"root",l,s,0,t)}return t}function Cw(n,e,t,i,s,r,o,a){let l=c0(e,i),c=l?.components||t.components||[];a.push({instanceId:e.id,prefabId:n.id,index:r,path:i,name:l?.name||(i==="root"?e.name||t.name||n.name:t.name),file:MD(c),at:s.at,h:s.h,s:s.s,overridden:!!l,depth:o});for(let u of t.children||[]){let h=`${i==="root"?"":`${i}/`}${u.name}`.replace(/^\//,""),f=c0(e,h),d=Aw(s,SD(u,f));Cw(n,e,u,h,d,r,o+1,a)}}var f0=["score","coins","where","quest-tracker"],d0=["pause","map-btn","quests-btn","build-btn"],p0=["hop","flop","go"],lf=["top-left","top-right","bottom-left","bottom-right"],xH=new Set(lf);var ya={main:{sheet:"menu",buttons:["story","multiplayer","world"],notes:["menu-version"],copyKeys:["title","kicker","body","event"]},paused:{sheet:"paused",buttons:["resume","pause-clothes","pause-potions","pause-save"],notes:["pause-version"],copyKeys:["title"]}};function xa(n,e){if(!Array.isArray(n))return[...e];let t=new Set,i=[];for(let s of n)typeof s!="string"||!e.includes(s)||t.has(s)||(t.add(s),i.push(s));for(let s of e)t.has(s)||i.push(s);return i}function m0(n,e){let t=ya[n];return t?Array.isArray(e?.items)?e.items:Array.isArray(e?.buttons)?e.buttons.map(i=>typeof i=="string"?{type:"button",ref:i}:i):t.buttons.map(i=>({type:"button",ref:i})):[]}Qt();var gV=new Set(lf);function Rw(n,e={}){let t=e.x??14,i=e.y??12,s=a=>`calc(${t}px + env(safe-area-inset-${a}))`,r=a=>`calc(${i}px + env(safe-area-inset-${a}))`,o={top:"auto",right:"auto",bottom:"auto",left:"auto",textAlign:"left"};switch(n){case"top-right":return{...o,top:r("top"),right:s("right"),textAlign:"right"};case"bottom-left":return{...o,bottom:r("bottom"),left:s("left")};case"bottom-right":return{...o,bottom:r("bottom"),right:s("right"),textAlign:"right"};default:return{...o,top:r("top"),left:s("left")}}}function TD(n){for(let t of document.querySelectorAll(".sheet"))t.classList.add("hidden");document.querySelector("#menu")?.classList.add("hidden"),document.querySelector("#load")?.classList.add("hidden");let e=document.querySelector(`#${n}`);e&&e.classList.remove("hidden")}function AD(){m.paused=!1,document.querySelector("#paused")?.classList.add("hidden")}function Pw(){for(let n of document.querySelectorAll("[data-ui-action]"))n.dataset.uiBound||(n.dataset.uiBound="1",n.addEventListener("click",()=>{let e=n.dataset.uiAction,t=n.dataset.uiTarget||"";if(e==="open_sheet")TD(t);else if(e==="close_sheets")for(let i of document.querySelectorAll(".sheet"))i.classList.add("hidden");else e==="resume_game"&&AD()}))}function g0(n,e){if(n)for(let t of e){let i=n.querySelector(`#${t}`);i&&n.appendChild(i)}}function Iw(n,e,t){if(!n)return;let i=Rw(e||"top-left",t);for(let[s,r]of Object.entries(i))s==="textAlign"?n.style.textAlign=r:n.style[s]=r}function CD(n){if(!n||typeof n!="object")return;let e=document.documentElement;for(let[t,i]of Object.entries(n))typeof i=="string"&&e.style.setProperty(`--${t}`,i)}function RD(n){let e=n.querySelector(".menu-actions");if(!e){e=document.createElement("div"),e.className="menu-actions";let t=n.querySelector(".version-tag");for(let i of[...n.querySelectorAll(":scope > button")])e.appendChild(i);n.insertBefore(e,t)}return e}function PD(n){for(let e of[...n.querySelectorAll("[data-layout-dynamic]")])e.remove()}function ID(n,e,t){if(!(!t||typeof t!="object")){if(t.title!=null){let i=n.querySelector(e==="main"?"h1":"h2");i&&(i.textContent=t.title)}if(e==="main"){let i=n.querySelector(".kicker");i&&t.kicker!=null&&(i.textContent=t.kicker);let s=n.querySelector(".menu-body");s&&t.body!=null&&(s.textContent=t.body);let r=n.querySelector(".comic-pop");r&&LD(r,t.event)}}}function LD(n,e){if(!e||typeof e!="object"){n.classList.add("hidden");return}n.classList.remove("hidden");let t=n.querySelector(".comic-title"),i=n.querySelector(".comic-ends");t&&e.title!=null&&(t.textContent=e.title),i&&e.ends!=null&&(i.textContent=e.ends)}function DD(){let n=document.querySelector("#event-callout-close"),e=document.querySelector("#event-callout");!n||!e||n.dataset.bound||(n.dataset.bound="1",n.addEventListener("click",()=>e.classList.add("hidden")))}function ND(n,e){let t=RD(n),i=e||{};return i.justify&&(n.style.justifyContent=i.justify),i.align&&(n.style.alignItems=i.align),i.gap!=null&&(t.style.gap=`${i.gap}px`),t.classList.toggle("cols-2",i.columns===2),t.classList.toggle("cols-3",i.columns===3),t}function kD(n,e,t){let i=ND(e,t.layout);PD(i);let s=ya[n],r=m0(n,t),o=document.createDocumentFragment(),a=[];for(let l of r)if(!(!l||typeof l!="object")){if(l.type==="note"){let c=e.querySelector(`#${l.ref}`);c&&a.push(c);continue}if(l.type==="separator"){let c=document.createElement("hr");c.className="menu-separator",c.dataset.layoutDynamic="1",o.append(c);continue}if(l.type==="spacer"){let c=document.createElement("div");c.className="menu-spacer",c.dataset.layoutDynamic="1",l.size!=null&&(c.style.height=`${l.size}px`),o.append(c);continue}if(l.type==="text"){let c=document.createElement("p");c.className="menu-text",c.dataset.layoutDynamic="1",c.textContent=l.text||"",o.append(c);continue}if(l.type==="button"){let c=null;if(typeof l.ref=="string"&&(c=e.querySelector(`#${l.ref}`)||document.querySelector(`#${l.ref}`)),!c&&l.action&&(c=document.createElement("button"),c.type="button",c.dataset.layoutDynamic="1",c.dataset.uiAction=l.action,l.target&&(c.dataset.uiTarget=l.target),c.textContent=l.label||l.action),!c)continue;l.label&&(c.textContent=l.label),l.hidden?c.classList.add("hidden"):c.classList.remove("hidden"),o.append(c)}}i.append(o);for(let l of a)e.append(l)}function Lw(n){if(!n||typeof n!="object")return;CD(n.theme);let e=n.hud||{},t=document.querySelector("#hud");Iw(t,e.anchor,e.inset),e.gap!=null&&(t.style.gap=`${e.gap}px`),e.align&&(t.style.alignItems=e.align==="right"?"flex-end":"flex-start"),g0(t,xa(e.rows,f0));let i=n.toolbar||{},s=document.querySelector("#toolbar");if(Iw(s,i.anchor,i.inset),i.gap!=null&&(s.style.gap=`${i.gap}px`),i.direction&&(s.style.flexDirection=i.direction),g0(s,xa(i.buttons,d0)),i.labels&&typeof i.labels=="object")for(let[a,l]of Object.entries(i.labels)){if(typeof l!="string")continue;let c=document.querySelector(`#${a}`);c&&(c.textContent=l)}let r=n.menus||{};for(let a of Object.keys(ya)){let l=r[a]||{},c=l.sheet||ya[a].sheet,u=document.querySelector(`#${c}`);u&&(ID(u,a,l.copy),kD(a,u,l))}let o=n.controls||{};g0(document.querySelector("#actions"),xa(o.actions,p0)),Pw(),DD()}var va;function Dw(){va=document.querySelector("#build-list"),document.querySelector("#build-btn").addEventListener("click",UD),document.querySelector("#build-close").addEventListener("click",cf),document.querySelector("#build-rotate").addEventListener("click",()=>{Wl()}),document.querySelector("#place-rotate").addEventListener("click",()=>{Wl()}),document.querySelector("#place-cancel").addEventListener("click",()=>{jh()&&$t()})}function UD(){if(!m.playing)return;let n=oh(m.plots,m.player.x,m.player.y);if(!n||!pi(m.save,n.id)){Promise.resolve().then(()=>(Qt(),Tb)).then(({say:e})=>e("Stand on one of your plots to build"));return}pa(),BD(n.id),m.paused=!0,document.querySelector("#build").classList.remove("hidden")}function cf(){document.querySelector("#build").classList.add("hidden"),m.playing&&!m.buildMode&&(m.paused=!1)}function OD(n){return m.buildings?.buildings?.find(e=>e.id===n)}function FD(n){let e=OD(n.type),t=document.createElement("div");t.className="row",t.style.width="100%";let i=document.createElement("button");i.type="button",i.disabled=!0,i.textContent=e?.label||n.type,i.style.flex="1";let s=document.createElement("button");s.type="button",s.textContent="Move",s.style.flex="0 0 auto",s.style.minWidth="72px",s.addEventListener("click",()=>{qg(n.uid)&&(cf(),$t())});let r=_l(e?.price),o=document.createElement("button");return o.type="button",o.textContent=r>0?`Sell ${Wt(r)}`:"Sell",o.style.flex="0 0 auto",o.style.minWidth="96px",o.addEventListener("click",()=>{$g(n.uid)&&(cf(),$t())}),t.append(i,s,o),t}function BD(n){va.replaceChildren();let e=(m.save.buildings||[]).filter(s=>s.plot===n);if(e.length){let s=document.createElement("p");s.textContent="Your buildings \u2014 Move or Sell",s.style.margin="0 0 4px",va.append(s);for(let r of e)va.append(FD(r))}let t=Hu(m.save),i=document.createElement("p");i.textContent=e.length?"Build new":"Choose a building",i.style.margin=e.length?"12px 0 4px":"0 0 4px",va.append(i);for(let s of m.buildings?.buildings||[]){let r=rh(m.save,s.id),o=s.limit&&r>=s.limit,a=document.createElement("button");a.type="button",a.disabled=o||t<s.price,a.textContent=`${s.label} \u2014 ${Wt(s.price)}`,o&&(a.textContent+=" (built)"),a.addEventListener("click",()=>{BS(s.id)&&cf()}),va.append(a)}}Qt();var y0,_a,Jl;function Nw(){y0=document.querySelector("#savecode"),_a=document.querySelector("#savecode-text"),Jl=document.querySelector("#savecode-status"),document.querySelector("#pause-save").addEventListener("click",zD),document.querySelector("#savecode-copy").addEventListener("click",VD),document.querySelector("#savecode-import").addEventListener("click",GD),document.querySelector("#savecode-back").addEventListener("click",HD)}function zD(){an(),_a.value=Zv(m.save),Jl.textContent="Copy this code somewhere safe, or paste one in to restore.",document.querySelector("#paused").classList.add("hidden"),y0.classList.remove("hidden")}function HD(){y0.classList.add("hidden"),m.paused&&document.querySelector("#paused").classList.remove("hidden")}async function VD(){try{await navigator.clipboard.writeText(_a.value),Jl.textContent="Copied."}catch{_a.focus(),_a.select(),Jl.textContent="Select the code and copy it."}}function GD(){let n=Kv(_a.value);if(!n){Jl.textContent="That code didn't look right.";return}iM(),Ri(localStorage,n),ce("Save restored. Reloading\u2026"),setTimeout(()=>location.reload(),600)}var js=null,kw=0,WD=()=>document.querySelector("#quest-arrow"),Ql=new P;function qD(){js||(js=_t("marker.glb",0,0,.5,0,Ne.world),js.scale.setScalar(.45),js.visible=!1)}function Uw(n){qD();let e=WD();if(!m.playing||m.level!=="world"||!m.overworld){js.visible=!1,e?.classList.add("hidden");return}let t=nh(m.save,m.quests,$h());if(!t||t.level!==m.level){js.visible=!1,e?.classList.add("hidden");return}kw+=n*3,js.position.copy(De(t.x,t.y,.55+Math.sin(kw)*.08)),js.visible=!0,Ql.copy(De(t.x,t.y,.5)).project(St);let i=pt.domElement.getBoundingClientRect(),s=i.left+(Ql.x*.5+.5)*i.width,r=i.top+(-Ql.y*.5+.5)*i.height,o=28,a=Ql.z>=-1&&Ql.z<=1&&s>=i.left+o&&s<=i.right-o&&r>=i.top+o&&r<=i.bottom-o;if(!e)return;if(a){e.classList.add("hidden");return}let l=i.left+i.width/2,c=i.top+i.height/2,u=s-l,h=r-c,f=Math.atan2(h,u),d=i.width/2-o,p=i.height/2-o,x=Math.min(Math.abs(d/Math.cos(f))||1/0,Math.abs(p/Math.sin(f))||1/0),y=l+Math.cos(f)*Math.min(x,Math.hypot(u,h)),g=c+Math.sin(f)*Math.min(x,Math.hypot(u,h));e.style.left=`${y}px`,e.style.top=`${g}px`,e.style.transform=`translate(-50%, -50%) rotate(${f}rad)`,e.textContent=t.label,e.classList.remove("hidden")}var ec=new P,tc=new Map,us=null,Ow=0;function $D(){return us||(us=document.querySelector("#income-markers"),us||(us=document.createElement("div"),us.id="income-markers",us.setAttribute("aria-hidden","true"),document.body.appendChild(us)),us)}function XD(n){return m.buildings?.buildings?.find(e=>e.id===n)}function YD(n){return n?.income?(Number(n.income.per_min)||0)*(Number(n.income.cap_min)||0):0}function jD(){for(let n of tc.values())n.classList.add("hidden")}function Fw(n=0){let e=$D();if(!m.playing||m.paused||!m.world){jD();return}Ow+=n*3;let t=new Set,i=pt.domElement.getBoundingClientRect();for(let s of m.save.buildings||[]){if((s.level||"world")!==m.level)continue;let r=s.bank||0;if(r<1)continue;let o=XD(s.type),a=YD(o),l=a>0&&r>=a-1e-9,c=1.35+Math.sin(Ow+(s.at[0]+s.at[1])*.2)*.06;ec.copy(De(s.at[0],s.at[1],c)).project(St);let u=i.left+(ec.x*.5+.5)*i.width,h=i.top+(-ec.y*.5+.5)*i.height,f=ec.z>=-1&&ec.z<=1&&u>=i.left-8&&u<=i.right+8&&h>=i.top-8&&h<=i.bottom+8,d=tc.get(s.uid);if(d||(d=document.createElement("div"),d.className="income-marker",e.appendChild(d),tc.set(s.uid,d)),t.add(s.uid),!f){d.classList.add("hidden");continue}d.classList.toggle("full",l),d.classList.remove("hidden"),d.style.left=`${u}px`,d.style.top=`${h}px`,d.title=l?"Full \u2014 collect CappyCoin":"CappyCoin ready"}for(let[s,r]of tc)t.has(s)||(r.remove(),tc.delete(s))}var tn={snowCover:{value:0},snowColor:{value:new oe("#d9e1ea")},snowSlushColor:{value:new oe("#8e969d")},snowSlope:{value:new te(.38,.72)},snowPathSlush:{value:.45}};function x0(n){tn.snowColor.value.set(n.color),tn.snowSlushColor.value.set(n.slushColor),tn.snowSlope.value.set(n.roofSlope[0],n.roofSlope[1]),tn.snowPathSlush.value=n.pathSlush}var v0=`
float snowHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float snowNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(snowHash(i), snowHash(i + vec2(1.0, 0.0)), f.x),
             mix(snowHash(i + vec2(0.0, 1.0)), snowHash(i + vec2(1.0, 1.0)), f.x), f.y);
}`,ZD=`
uniform float snowCover;
uniform vec3 snowColor;
uniform vec2 snowSlope;`;function KD(n){return`
    if (snowCover > 0.001) {
      vec3 snowN = inverseTransformDirection(normal, viewMatrix);
      float snowUp = smoothstep(snowSlope.x, snowSlope.y, snowN.y);
      ${n?"float snowPatch = 0.35;":`vec3 snowW = (vec4(-vViewPosition, 0.0) * viewMatrix).xyz + cameraPosition;
      float snowPatch = 0.65 * snowNoise(snowW.xz * 1.7) + 0.35 * snowNoise(snowW.xz * 5.3 + 11.0);`}
      float snowAmt = snowUp * smoothstep(snowPatch * 0.8, snowPatch * 0.8 + 0.2, snowCover);
      diffuseColor.rgb = mix(diffuseColor.rgb, snowColor, snowAmt);
      roughnessFactor = mix(roughnessFactor, 0.82, snowAmt);
      metalnessFactor = mix(metalnessFactor, 0.0, snowAmt);
    }`}function JD(n,{lite:e=!1}={}){let t="#include <normal_fragment_maps>";return n.fragmentShader.includes(t)?(n.uniforms.snowCover=tn.snowCover,n.uniforms.snowColor=tn.snowColor,n.uniforms.snowSlope=tn.snowSlope,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
${ZD}
${e?"":v0}`).replace(t,`${t}
${KD(e)}`),!0):!1}var Bw=new WeakSet;function QD(n){return!n?.isMeshStandardMaterial||n.transparent||n.userData?.noSnow?!1:!((n.emissive?n.emissive.r+n.emissive.g+n.emissive.b:0)>.05&&n.emissiveIntensity>0)}function eN(n,{lite:e=!1}={}){if(!QD(n)||Bw.has(n))return!1;Bw.add(n);let t=Object.prototype.hasOwnProperty.call(n,"onBeforeCompile")?n.onBeforeCompile:null,i=Object.prototype.hasOwnProperty.call(n,"customProgramCacheKey")?n.customProgramCacheKey:null;return n.onBeforeCompile=function(r,o){t&&t.call(this,r,o),JD(r,{lite:e})},n.customProgramCacheKey=function(){let r=i?i.call(this):t?t.toString():"";return`snow:${e?"lite":"full"}|${r}`},n.needsUpdate=!0,!0}function zw(n,e={}){let t=0,i=s=>{if(!s.userData?.noSnow){if(s.isMesh&&!s.isSkinnedMesh){let r=Array.isArray(s.material)?s.material:[s.material];for(let o of r)eN(o,e)&&(t+=1)}for(let r of s.children)i(r)}};return n&&i(n),t}var tN=3.2;function uf(n,e){let t=n.load(`/assets/textures/village/ground_${e}.jpg`);return t.wrapS=Zt,t.wrapT=Zt,t.colorSpace=qe,t.anisotropy=pt.capabilities.getMaxAnisotropy(),t}function Hw(n,e,t=[]){let i=Rt.coarse?384:512,s=A_(n,i,t),r=new qn(s,i,i,sn);r.magFilter=hn,r.minFilter=hn,r.needsUpdate=!0;let o=new Ls,a={grass:uf(o,"grass"),dirt:uf(o,"dirt"),sand:uf(o,"sand"),forest:uf(o,"forest")},[l,c,u,h]=n.bounds,f=new Je({color:"#ffffff",roughness:.95,metalness:0});f.userData.noSnow=!0,f.onBeforeCompile=p=>{p.uniforms.splat={value:r},p.uniforms.layerGrass={value:a.grass},p.uniforms.layerDirt={value:a.dirt},p.uniforms.layerSand={value:a.sand},p.uniforms.layerForest={value:a.forest},p.uniforms.bounds={value:new rt(l,c,u,h)},p.uniforms.snowCover=tn.snowCover,p.uniforms.snowColor=tn.snowColor,p.uniforms.snowSlushColor=tn.snowSlushColor,p.uniforms.snowPathSlush=tn.snowPathSlush,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGround = (modelMatrix * vec4(transformed, 1.0)).xyz;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vGround;
        uniform sampler2D splat;
        uniform sampler2D layerGrass;
        uniform sampler2D layerDirt;
        uniform sampler2D layerSand;
        uniform sampler2D layerForest;
        uniform vec4 bounds;
        uniform float snowCover;
        uniform vec3 snowColor;
        uniform vec3 snowSlushColor;
        uniform float snowPathSlush;
        ${v0}`).replace("#include <map_fragment>",`
        vec2 g = vec2(vGround.x, -vGround.z);
        vec2 st = vec2((g.x - bounds.x) / (bounds.z - bounds.x), (bounds.w - g.y) / (bounds.w - bounds.y));
        vec4 w = texture2D(splat, st);
        vec2 uv = g / ${tN.toFixed(2)};
        // Two scales of grass, blended, so the repeat does not show.
        vec3 grass = mix(texture2D(layerGrass, uv).rgb, texture2D(layerGrass, uv * 0.31 + vec2(0.37, 0.71)).rgb, 0.4);
        vec3 ground = grass * w.a
          + texture2D(layerDirt, uv).rgb * w.r
          + texture2D(layerSand, uv * 1.3).rgb * w.g
          + texture2D(layerForest, uv * 0.8).rgb * w.b;
        ground /= max(w.r + w.g + w.b + w.a, 0.001);
        if (snowCover > 0.001) {
          // Dirt and sand (paths, banks) hold less snow and turn to slush.
          float path = clamp((w.r + w.g) / max(w.r + w.g + w.b + w.a, 0.001), 0.0, 1.0);
          float patchy = 0.7 * snowNoise(g * 0.45) + 0.3 * snowNoise(g * 2.3 + 7.0);
          float settle = snowCover * (1.0 - path * snowPathSlush);
          // Paths get a thinner but more even wash of slush rather than bare blotches.
          float edge = patchy * mix(0.75, 0.35, path);
          float amt = smoothstep(edge, edge + 0.22, settle);
          float grain = dot(ground, vec3(0.299, 0.587, 0.114));
          vec3 snow = mix(snowColor, snowSlushColor, path) * (0.9 + 0.25 * grain);
          ground = mix(ground, snow, amt);
        }
        diffuseColor.rgb *= ground;`)};let d=new Y(new ws(u-l,h-c),f);return d.rotation.x=-Math.PI/2,d.position.set((l+u)/2,-.012,-(c+h)/2),d.receiveShadow=!0,e.add(d),{grassAt:(p,x)=>C_(s,i,n.bounds,p,x)}}var _0={value:0},nN=Rt.coarse?16:22,iN=2,sN=4,Vw=Rt.coarse?2600:7e3;async function rN(){let n=new Image;n.src="/assets/lawn_mask.png",await n.decode();let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.drawImage(n,0,0);let i=t.getImageData(0,0,n.width,n.height).data;return{width:n.width,height:n.height,pixels:i}}function oN(n){return n=n.clone(),n.vertexColors=!1,n.userData.noSnow=!0,n.onBeforeCompile=e=>{e.uniforms.lawnTime=_0,e.uniforms.snowCover=tn.snowCover,e.uniforms.snowColor=tn.snowColor,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 windData;
uniform float lawnTime;
uniform float snowCover;
varying vec4 vWind;`).replace("#include <begin_vertex>",["#include <begin_vertex>","vWind = windData;","float tip = windData.r * windData.r;","float gust = sin(lawnTime * 1.7 + windData.g * 6.2831 + instanceMatrix[3].x * 0.7) * 0.65","           + sin(lawnTime * 0.6 + windData.g * 8.1681) * 0.35;","transformed.x += gust * 0.04 * tip;","transformed.y *= 1.0 - 0.55 * snowCover; // half buried under snow"].join(`
`)),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float snowCover;
uniform vec3 snowColor;
varying vec4 vWind;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(0.62, 1.25, vWind.r) * (0.85 + 0.3 * vWind.b);
diffuseColor.rgb = mix(diffuseColor.rgb, snowColor * 0.85, snowCover * (0.25 + 0.4 * (1.0 - vWind.r)));`)},n}async function Gw(n,e,t){let[i,s]=await Promise.all([rN(),pn("tuft.glb")]),[r,o,a,l]=e,c=(g,v)=>{if(g>=r&&g<=a&&v>=o&&v<=l){let b=Math.floor((g-r)/(a-r)*i.width),_=Math.floor((l-v)/(l-o)*i.height);return b<0||_<0||b>=i.width||_>=i.height?0:i.pixels[(_*i.width+b)*4]/255}return t(g,v)},u=[];s.root.updateMatrixWorld(!0),s.root.traverse(g=>{if(!g.isMesh)return;let v=g.geometry.clone();v.attributes.color&&v.setAttribute("windData",v.attributes.color);let b=new Ts(v,oN(g.material),Vw);b.count=0,b.receiveShadow=!0,b.frustumCulled=!1,b.userData.local=g.matrixWorld.clone(),n.add(b),u.push(b)});let h=new Ie,f=new rn,d=new P(0,1,0),p=new P,x=1/0,y=1/0;return{update(g,v){if(Math.hypot(g-x,v-y)<sN)return;x=g,y=v;let b=i_(c,g,v,nN,iN,Rt.tuftsPerM2).slice(0,Vw);for(let _ of u)b.forEach(([R,M,T,I],E)=>{f.setFromAxisAngle(d,T),p.setScalar(I),h.compose(De(R,M,0),f,p).multiply(_.userData.local),_.setMatrixAt(E,h)}),_.count=b.length,_.instanceMatrix.needsUpdate=!0}}}function aN(n=128){let e=new Uint8Array(n*n*4);for(let i=0;i<n;i+=1)for(let s=0;s<n;s+=1){let r=s/n*Math.PI*2,o=i/n*Math.PI*2,a=.5*Math.cos(r*3+o)+.35*Math.cos(r*5-o*2),l=.5*Math.cos(o*4-r)+.3*Math.cos(o*2+r*3),c=Math.hypot(a,l,3),u=(i*n+s)*4;e[u]=Math.round((a/c*.5+.5)*255),e[u+1]=Math.round((l/c*.5+.5)*255),e[u+2]=Math.round((3/c*.5+.5)*255),e[u+3]=255}let t=new qn(e,n,n,sn);return t.wrapS=Zt,t.wrapT=Zt,t.needsUpdate=!0,t}function lN(n){let e=n.map(([r,o])=>new te(r,o)),t=0;for(let r=0;r<e.length-1;r+=1)t+=e[r].distanceTo(e[r+1]);let i=t/Math.max(40,(e.length-1)*8),s=[e[0].clone()];for(let r=0;r<e.length-1;r+=1){let o=e[r],a=e[r+1],l=Math.max(1,Math.ceil(o.distanceTo(a)/i));for(let c=1;c<=l;c+=1)s.push(new te().lerpVectors(o,a,c/l))}return s}function Ww(n,e){let t=lN(n.points),i=n.width/2,s=[],r=[],o=[],a=0;t.forEach((f,d)=>{let p=t[Math.min(d+1,t.length-1)],x=t[Math.max(d-1,0)],y=p.x-x.x,g=p.y-x.y,v=Math.hypot(y,g)||1,b=-g/v,_=y/v;d>0&&(a+=f.distanceTo(x));for(let R of[-1,1])s.push(f.x+b*i*R,.03,-(f.y+_*i*R)),r.push(R*.5+.5,a/n.width);if(d>0){let R=(d-1)*2;o.push(R,R+2,R+1,R+1,R+2,R+3)}});let l=new ot;l.setAttribute("position",new Ke(s,3)),l.setAttribute("uv",new Ke(r,2)),l.setIndex(o),l.computeVertexNormals();let c=aN();c.repeat.set(1.5,1.5);let u=new Je({color:"#3d7d86",roughness:.12,metalness:0,normalMap:c,normalScale:new te(.45,.45),transparent:!0,opacity:.9}),h=new Y(l,u);return h.receiveShadow=!0,e.add(h),{update(f){c.offset.set(f*.01,-f*.06)}}}var qw="0.3.4";var cN=[{file:"pumpkin.glb",at:[-15,-9,0],h:12},{file:"pumpkin.glb",at:[14,-10,0],h:-18},{file:"pumpkin.glb",at:[-13,11,0],h:30},{file:"pumpkin.glb",at:[12,12,.52],h:5},{file:"hay.glb",at:[11,8,0],h:40},{file:"hay.glb",at:[-12,-8,0],h:-20},{file:"scarecrow.glb",at:[-17,2,0],h:15,s:.55},{file:"village/v_lantern.glb",at:[-4,-11,0],h:0},{file:"village/v_lantern.glb",at:[6,-11,0],h:0},{file:"candle.glb",at:[-2,4,.3],h:0,s:1.4},{file:"candle.glb",at:[3,4,.3],h:0,s:1.4},{file:"ghost.glb",at:[16,4,0],h:-30,s:.35}];function $w(){let n=[];for(let e of cN){let t=_t(e.file,e.at[0],e.at[1],e.at[2]||0,e.h||0,Ne.world);e.s&&t.scale.setScalar(e.s),n.push(t)}return n}var uN=2;function hf(n){return Math.max(0,Math.min(1,Number(n)||0))}function Xw(n){let e=new URLSearchParams(location.search),t=Rt.coarse,i=e.has("weather"),s=e.has("snowRate")?Math.max(0,Number(e.get("snowRate"))||0):1,r=e.has("snow")?hf(e.get("snow")):null,o=e.has("snowPin")?hf(e.get("snowPin")):null,a=0;x0(Fn),window.cappySnow={config:Fn,get:()=>r??0,set(c){return r=hf(c),r},pin(c){return o=c==null?null:hf(c),o},refresh:()=>x0(Fn)};function l(){zw(n,{lite:t})}return{sweep:l,update(c,u,h,f){h&&(r===null&&(r=i?0:b_(Date.now(),h.season,{isNight:h.isNight})),o!==null?r=o:u&&(r=ym(r,c*s,h)),m.snowCover=r,tn.snowCover.value=f?r:0,a-=c,a<=0&&(a=uN,l()))},tameBloom(c){if(!c?.getBloomDefaults)return;let u=tn.snowCover.value,h=c.getBloomDefaults();c.setBloom({strength:h.strength*(1-Fn.bloomDamp*u),threshold:h.threshold+Fn.bloomThresholdLift*u})},suppress(){tn.snowCover.value=0}}}function hN(n){let e=new ke,t=new Y(new At(.07,.09,.22,10),new Je({color:"#d8ecff",transparent:!0,opacity:.42,roughness:.12,metalness:.15}));t.position.y=.14;let i=new Y(new At(.055,.07,.13,10),new Je({color:n,emissive:n,emissiveIntensity:.45,roughness:.35}));i.position.y=.1;let s=new Y(new At(.03,.045,.08,8),new Je({color:"#e7f4ff",transparent:!0,opacity:.5,roughness:.1}));s.position.y=.28;let r=new Y(new At(.032,.032,.04,8),new Je({color:"#c48a4a",roughness:.8}));return r.position.y=.33,e.add(t,i,s,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),e}function Yw(){let n=qo(m.save);for(let e of m.potions?.bottles||[]){let t=hi(m.potions,e.potion),i=hN(t?.color||"#ff8a3d"),s=e.at[2]||.02;i.position.copy(De(e.at[0],e.at[1],s)),(Ne[e.level]||Ne.world).add(i),e.node=i,n.has(e.id)&&(i.visible=!1)}}var fN="cappyengine-studio";function jw(n){return!!(n&&n.source===fN&&typeof n.cmd=="string")}function Zw(n,e){return!n||typeof n!="object"?!1:e==="pause"?(n.paused=!0,n.studioStep=!1,!0):e==="resume"||e==="play"?(n.paused=!1,n.studioStep=!1,!0):e==="step"?(n.paused=!0,n.studioStep=!0,!0):!1}new URLSearchParams(location.search).has("debug")&&Object.assign(window,{game:m,scene:Qe,renderer:pt,camera:St});new URLSearchParams(location.search).has("studio")&&window.addEventListener("message",n=>{jw(n.data)&&Zw(m,n.data.cmd)});var ba=Ub(),Kw=tM(ba),nc=Xw(Ne.world),b0=0,M0=null,S0=null,Jw=kb(()=>m.playing,()=>dN()),ff=new URLSearchParams(location.search),T0=ff.get("gfx")==="off",A0=ff.get("gfx")==="low"?!0:ff.get("gfx")==="high"?!1:Rt.coarse;T0||(A0?Rt.dprCap=Math.min(Rt.dprCap,1.5):Rt.dprCap=1);var e1={},Zs=null,t1=!1,w0="",E0="";function n1(n,e){Zs?.dispose(),Zs=Hp({renderer:pt,scene:Qe,camera:St,settings:e1,profile:{coarse:n,shadow:e}}),w0="",E0="",ff.has("debug")&&(window.cappyFx=Zs)}function dN(){A0||T0||n1(!0,512)}function pN(){let n=pt.domElement,e=`${n.width}x${n.height}`;if(e===w0||n.width<2)return;w0=e;let t=pt.getPixelRatio();Zs.setSize(n.width/t,n.height/t)}function mN(){let n=Gb(m.sky,m.season);if(!n)return;let e=xl(m.level),t=`${JSON.stringify(n)}|${e}`;t!==E0&&(E0=t,zb(n),Zs.setSky(Wb(n,e)))}function Qw(){t1&&!T0?Zs.render():pt.render(Qe,St)}function gN(){St.updateMatrixWorld();let n=St.matrixWorld.elements;Hb([n[12],n[13],n[14]],[-n[8],-n[9],-n[10]],[n[4],n[5],n[6]])}var yN=2.25;function xN(){let{player:n,view:e}=m,t=m.world.levels[m.level],i=es(e.lookH),s=-Math.sin(i),r=Math.cos(i),o=m.rides?.[0]?.phase==="flying",a=t.cam_back+(o?1.4:0),l=n.x-s*a,c=n.y-r*a,u=t.origin[0]-t.half[0]+t.inset,h=t.origin[0]+t.half[0]-t.inset,f=t.origin[1]-t.half[1]+t.inset,d=t.origin[1]+t.half[1]-t.inset,p=m.level==="world"?1/0:yN,x=Math.min(p,t.cam_up+e.lookPitch*2.2+Math.max(0,n.z));St.position.copy(De(Math.min(h,Math.max(u,l)),Math.min(d,Math.max(f,c)),x)),St.lookAt(De(n.x,n.y,.45+Math.max(0,n.z)-e.lookPitch*.35)),Db(n.x,n.y,m.daylight?.key)}function i1(n){requestAnimationFrame(i1),Qi(),pN(),_0.value=n/1e3;let e=1/60,t=m.studioStep===!0&&m.playing;m.studioStep&&(m.studioStep=!1);let i=m.playing&&!document.hidden&&(!m.paused||t),s=b0?Math.min(.1,(n-b0)/1e3):0;if(b0=n,aa()){bS(s||e),Kw.hideEffects(),nc.suppress(),nc.tameBloom(Zs),Nr()?ba.dome.visible=!1:(ba.dome.visible=!0,ba.dome.position.copy(De(m.player.x,m.player.y,0)),i&&(og(e,Math.hypot(m.input.stickX,m.input.stickY)>.16),Sl())),hg(n*.001),bh(n),Jw(n),Qw();return}ba.dome.visible=!0,m.world&&(Kw.update(s,i,n/1e3),nc.update(s,i,m.sky,!xl(m.level)),nc.tameBloom(Zs)),m.world&&i&&jS(e),M0&&m.level==="world"&&M0.update(m.player.x,m.player.y),S0&&S0.update(n/1e3),i&&(og(e,Math.hypot(m.input.stickX,m.input.stickY)>.16),yM(e,m.player.x,m.player.y,m.clock?.hours??9),Uw(e)),Ab(e),Sl(),m.world&&xN(),ba.dome.position.copy(De(m.player.x,m.player.y,0)),hg(n*.001),bh(n),Jw(n),m.world&&(mN(),gN()),Qw(),Fw(i?e:0)}async function vN(){try{let n=await fetch("/assets/village/graphics.json");if(!n.ok)throw new Error(`${n.status}`);return await n.json()}catch(n){return console.warn("graphics.json unavailable; post-processing uses defaults",n.message||n),{}}}async function _N(){let n=vN();Bb();let e=null;try{e=await(await fetch("/assets/village/ui_layout.json")).json()}catch{}Lw(e),Ew(),sM(),aM();let t=document.querySelector("#keys-hint");t&&(t.dataset.idle=t.textContent);let i=`v${qw}`;for(let D of["load-version","menu-version","pause-version"]){let V=document.querySelector(`#${D}`);V&&(V.textContent=i)}_M(),xM(),Dw(),Nw(),bw(),QM(),Vb(),window.addEventListener("pagehide",gw),e1=await n,n1(A0,Rt.shadow),Qi(!0),requestAnimationFrame(i1);let s=await(await fetch("/assets/world.json")).json(),r=await(await fetch("/assets/village/overworld.json")).json(),o=await(await fetch("/assets/village/quests.json")).json(),a=await(await fetch("/assets/village/npcs.json")).json(),l=await(await fetch("/assets/village/items.json")).json(),c=await(await fetch("/assets/village/pickups.json")).json(),u=await(await fetch("/assets/village/plots.json")).json(),h=await(await fetch("/assets/village/buildings.json")).json(),f=await(await fetch("/assets/village/bulletin.json")).json(),d=await(await fetch("/assets/village/potions.json")).json(),p=await(await fetch("/assets/village/interiors.json")).json(),x={version:1,stations:[],edges:[],speed:5};try{x=await(await fetch("/assets/village/transit.json")).json()}catch{}let y={version:1,blueprints:[]};try{y=await(await fetch("/assets/village/blueprints.json")).json()}catch{}let g={version:1,prefabs:[]};try{g=await(await fetch("/assets/village/prefabs.json")).json()}catch{}let v=h0(g,r.prefab_instances||[]),b=[...new Set(v.map(D=>D.file).filter(Boolean))],_=Am(s,r,["marker.glb","village/v_plot_sign.glb","bloompin.glb",...h.buildings.map(D=>D.file),...b],p),{world:R,files:M,river:T,spawn:I,pumpkinSpots:E}=_;m.world=R,m.world.clothing=R.clothing.filter(D=>!D.season||D.season===m.season),m.overworld=r,m.interiors=p,cM(Object.keys(R.levels)),m.base={quests:o,pickups:c},m.bulletin=f,m.potions=d,m.npcs=a,m.items=l,m.plots=u,m.buildings=h,m.blueprints=y,m.river=T,j_(m.save,u);let S=J_(m.save,h,Date.now());if(S.away){let D=()=>{ce(`While you were away your buildings earned ${Wt(S.credited)} (tap them to collect)`)};document.querySelector("#story")?.addEventListener("click",D,{once:!0}),document.querySelector("#multiplayer")?.addEventListener("click",D,{once:!0})}m.lastRuckusQuest=0,m.fit=await(await fetch("/assets/clothes_fit.json")).json(),ln(m.save.coins),m.score=t_(m.save,m.player,null,m.save.score);for(let D of r.signposts||[])Xu(D,m.save.discovered)&&$u(m.save,D.id);let L=0,N=()=>{let D=Math.round(L/M.size*100);document.querySelector("#load-status").textContent=`Loading the park\u2026 ${D}%`,document.querySelector("#load-bar").style.width=`${D}%`};N();for(let D of M)await pn(D),L+=1,N();await Mb(),await pM(a.npcs),Ah(D=>Ii(m.save,D)),ha(),Vg(),Eg(),Gs();for(let D of R.web_park)_t(D.file,D.at[0],D.at[1],D.at[2]||0,D.h||0,Ne.world);let z=Hw(r,Ne.world,R.field_rect?[R.field_rect]:[]);S0=Ww(r.river,Ne.world),M0=await Gw(Ne.world,r.home.rect,z.grassAt);for(let D of Object.keys(R.levels))D!=="world"&&uM(D,D==="mine"?"dirt.glb":"floor.glb","wall.glb");m.solids=[...ch(R.dress,null),...ch(r.dressing||[],"world")];for(let D of R.dress){let V=_t(D.file,D.at[0],D.at[1],D.at[2]||0,D.h||0,Ne[D.level]);D.s&&V.scale.setScalar(D.s)}for(let D of r.dressing||[]){let V=_t(D.file,D.at[0],D.at[1],D.at[2]||0,D.h||0,Ne.world);D.s&&V.scale.setScalar(D.s),D.node=V}for(let D of v){if(!D.file)continue;let V=_t(D.file,D.at[0],D.at[1],D.at[2]||0,D.h||0,Ne.world);D.s&&D.s!==1&&V.scale.setScalar(D.s)}SS(r.dressing||[]),Rb(R);for(let[D,V]of E)_t("pumpkin.glb",D,V,0,D*40%360,Ne.world);m.season==="halloween"&&$w();let G=ts(m.save);for(let D of R.clothing){let V=_t(D.file,D.spot[0],D.spot[1],.2,0,Ne[D.level]);D.node=V,G.has(D.id)&&(V.visible=!1)}Yw();for(let D of[...R.dynamics,...R.web_toys])VS(D);xh(),Il("world");try{await UM(Ne.world)}catch(D){console.warn("Broomstick failed to spawn",D)}try{await $M(x,Ne.world,{dressing:r.dressing||[]})}catch(D){console.warn("Transit train missing",D)}if($t(),an(),nc.sweep(),document.querySelector("#load-bar").style.width="100%",document.querySelector("#load-status").textContent="Ready",t1=!0,document.querySelector("#load").classList.add("hidden"),document.querySelector("#menu").classList.remove("hidden"),m.season==="halloween"&&!m.save.flags?.halloween_hint){let D=()=>{ce("Halloween live event! Party at your yard from 5pm\u201310pm. Talk to Pip to start."),m.save.flags={...m.save.flags||{},halloween_hint:!0},an()};document.querySelector("#story")?.addEventListener("click",D,{once:!0}),document.querySelector("#multiplayer")?.addEventListener("click",D,{once:!0})}}_N().catch(n=>{let e=document.querySelector("#load-status");e.textContent="Could not load the park. Check the Wi-Fi and try again.",console.error(n)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

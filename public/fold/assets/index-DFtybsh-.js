(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Go="180",hf=0,Ec=1,pf=2,jl=1,Jl=2,Fn=3,ln=0,wt=1,vn=2,Qn=0,Zi=1,Tc=2,Ac=3,wc=4,mf=5,_i=100,gf=101,_f=102,vf=103,bf=104,xf=200,Sf=201,yf=202,Mf=203,Xs=204,qs=205,Ef=206,Tf=207,Af=208,wf=209,Rf=210,Cf=211,Pf=212,Df=213,Lf=214,Ys=0,$s=1,Ks=2,Ji=3,Zs=4,js=5,Js=6,Qs=7,Ql=0,If=1,Uf=2,ei=0,Ff=1,Nf=2,Of=3,ed=4,Bf=5,kf=6,zf=7,td=300,Qi=301,er=302,eo=303,to=304,Ya=306,no=1e3,bi=1001,io=1002,dn=1003,Hf=1004,ta=1005,yn=1006,ls=1007,xi=1008,En=1009,nd=1010,id=1011,Rr=1012,Vo=1013,Mi=1014,Nn=1015,Vr=1016,Wo=1017,Xo=1018,Cr=1020,rd=35902,ad=35899,sd=1021,od=1022,on=1023,Pr=1026,Dr=1027,cd=1028,qo=1029,ld=1030,Yo=1031,$o=1033,Da=33776,La=33777,Ia=33778,Ua=33779,ro=35840,ao=35841,so=35842,oo=35843,co=36196,lo=37492,fo=37496,uo=37808,ho=37809,po=37810,mo=37811,go=37812,_o=37813,vo=37814,bo=37815,xo=37816,So=37817,yo=37818,Mo=37819,Eo=37820,To=37821,Ao=36492,wo=36494,Ro=36495,Co=36283,Po=36284,Do=36285,Lo=36286,Gf=3200,Vf=3201,dd=0,Wf=1,jn="",Ht="srgb",tr="srgb-linear",Oa="linear",Qe="srgb",Di=7680,Rc=519,Xf=512,qf=513,Yf=514,fd=515,$f=516,Kf=517,Zf=518,jf=519,Io=35044,Cc="300 es",Mn=2e3,Ba=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const Ar=Math.PI/180,Lr=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Ko(n,e){return(n%e+e)%e}function Jf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Qf(n,e,t){return n!==e?(t-n)/(e-n):0}function wr(n,e,t){return(1-t)*n+t*e}function eu(n,e,t,i){return wr(n,e,1-Math.exp(-t*i))}function tu(n,e=1){return e-Math.abs(Ko(n,e*2)-e)}function nu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ru(n,e){return n+Math.floor(Math.random()*(e-n+1))}function au(n,e){return n+Math.random()*(e-n)}function su(n){return n*(.5-Math.random())}function ou(n){n!==void 0&&(Pc=n);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cu(n){return n*Ar}function lu(n){return n*Lr}function du(n){return(n&n-1)===0&&n!==0}function fu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hu(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),d=s((e+i)/2),f=a((e-i)/2),h=s((e-i)/2),m=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*d,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ud={DEG2RAD:Ar,RAD2DEG:Lr,generateUUID:On,clamp:Ve,euclideanModulo:Ko,mapLinear:Jf,inverseLerp:Qf,lerp:wr,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:ru,randFloat:au,randFloatSpread:su,seededRandom:ou,degToRad:cu,radToDeg:lu,isPowerOfTwo:du,ceilPowerOfTwo:fu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:hu,normalize:Ze,denormalize:sn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=a[s+0],m=a[s+1],g=a[s+2],b=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=b;return}if(f!==b||l!==h||c!==m||d!==g){let p=1-o;const u=l*h+c*m+d*g+f*b,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const C=Math.sqrt(M),P=Math.atan2(C,u*T);p=Math.sin(p*P)/C,o=Math.sin(o*P)/C}const x=o*T;if(l=l*p+h*x,c=c*p+m*x,d=d*p+g*x,f=f*p+b*x,p===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[s],h=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+d*f+l*m-c*h,e[t+1]=l*g+d*h+c*f-o*m,e[t+2]=c*g+d*m+o*h-l*f,e[t+3]=d*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(a/2),h=l(i/2),m=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=h*d*f+c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f-h*m*g;break;case"YXZ":this._x=h*d*f+c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f+h*m*g;break;case"ZXY":this._x=h*d*f-c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f-h*m*g;break;case"ZYX":this._x=h*d*f-c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f+h*m*g;break;case"YZX":this._x=h*d*f+c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f-h*m*g;break;case"XZY":this._x=h*d*f-c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),f=2*(a*i-s*t);return this.x=t+l*c+s*f-o*d,this.y=i+l*d+o*c-a*f,this.z=r+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ds.copy(this).projectOnVector(e),this.sub(ds)}reflect(e){return this.sub(ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new U,Dc=new ti;class Oe{constructor(e,t,i,r,a,s,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],g=i[8],b=r[0],p=r[3],u=r[6],T=r[1],M=r[4],x=r[7],C=r[2],P=r[5],R=r[8];return a[0]=s*b+o*T+l*C,a[3]=s*p+o*M+l*P,a[6]=s*u+o*x+l*R,a[1]=c*b+d*T+f*C,a[4]=c*p+d*M+f*P,a[7]=c*u+d*x+f*R,a[2]=h*b+m*T+g*C,a[5]=h*p+m*M+g*P,a[8]=h*u+m*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,h=o*l-d*a,m=c*a-s*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=f*b,e[1]=(r*c-d*i)*b,e[2]=(o*i-r*s)*b,e[3]=h*b,e[4]=(d*t-r*l)*b,e[5]=(r*a-o*t)*b,e[6]=m*b,e[7]=(i*l-c*t)*b,e[8]=(s*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fs.makeScale(e,t)),this}rotate(e){return this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new Oe;function hd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){const n=ka("canvas");return n.style.display="block",n}const Lc={};function Ir(n){n in Lc||(Lc[n]=!0,console.warn(n))}function mu(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Ic=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Qe&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Qe&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:Oa,toXYZ:Ic,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Ic,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const Ye=gu();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class _u{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Li===void 0&&(Li=ka("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Bn(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vu=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(us(r[s].image)):a.push(us(r[s]))}else a=us(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function us(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_u.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bu=0;const hs=new U;class Nt extends or{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=bi,r=bi,a=yn,s=xi,o=on,l=En,c=Nt.DEFAULT_ANISOTROPY,d=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=On(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hs).x}get height(){return this.source.getSize(hs).y}get depth(){return this.source.getSize(hs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=td;Nt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],g=l[9],b=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+b)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(m+1)/2,C=(u+1)/2,P=(d+h)/4,R=(f+b)/4,N=(g+p)/4;return M>x&&M>C?M<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(M),r=P/i,a=R/i):x>C?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=P/r,a=N/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=R/a,r=N/a),this.set(i,r,a,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-b)*(f-b)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-b)/T,this.z=(h-d)/T,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends or{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new Nt(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends xu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,nn):nn.fromBufferAttribute(a,s),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ia.subVectors(this.max,pr),Ii.subVectors(e.a,pr),Ui.subVectors(e.b,pr),Fi.subVectors(e.c,pr),Wn.subVectors(Ui,Ii),Xn.subVectors(Fi,Ui),di.subVectors(Ii,Fi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-di.z,di.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,di.z,0,-di.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-di.y,di.x,0];return!ps(t,Ii,Ui,Fi,ia)||(t=[1,0,0,0,1,0,0,0,1],!ps(t,Ii,Ui,Fi,ia))?!1:(ra.crossVectors(Wn,Xn),t=[ra.x,ra.y,ra.z],ps(t,Ii,Ui,Fi,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,na=new Wr,Ii=new U,Ui=new U,Fi=new U,Wn=new U,Xn=new U,di=new U,pr=new U,ia=new U,ra=new U,fi=new U;function ps(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){fi.fromArray(n,a);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),d=i.dot(fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const yu=new Wr,mr=new U,ms=new U;class $a{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yu.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ms)),this.expandByPoint(mr.copy(e.center).sub(ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new U,gs=new U,aa=new U,qn=new U,_s=new U,sa=new U,vs=new U;class jo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gs.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(gs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(aa),o=qn.dot(this.direction),l=-qn.dot(aa),c=qn.lengthSq(),d=Math.abs(1-s*s);let f,h,m,g;if(d>0)if(f=s*l-o,h=s*o-l,g=a*d,f>=0)if(h>=-g)if(h<=g){const b=1/d;f*=b,h*=b,m=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gs).addScaledVector(aa,h),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,a){_s.subVectors(t,e),sa.subVectors(i,e),vs.crossVectors(_s,sa);let s=this.direction.dot(vs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(sa.crossVectors(qn,sa));if(l<0)return null;const c=o*this.direction.dot(_s.cross(qn));if(c<0||l+c>s)return null;const d=-o*qn.dot(vs);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,a,s,o,l,c,d,f,h,m,g,b,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,f,h,m,g,b,p)}set(e,t,i,r,a,s,o,l,c,d,f,h,m,g,b,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=g,u[11]=b,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),a=1/Ni.setFromMatrixColumn(e,1).length(),s=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*d,m=s*f,g=o*d,b=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,g=c*d,b=c*f;t[0]=h+b*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=m*o-g,t[6]=b+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,g=c*d,b=c*f;t[0]=h-b*o,t[4]=-s*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*d,t[9]=b-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*d,m=s*f,g=o*d,b=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-h*f,t[8]=g*f+m,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=h-b*f}else if(e.order==="XZY"){const h=s*l,m=s*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+b,t[5]=s*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mu,e,Eu)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yn.crossVectors(i,Yt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yn.crossVectors(i,Yt)),Yn.normalize(),oa.crossVectors(Yt,Yn),r[0]=Yn.x,r[4]=oa.x,r[8]=Yt.x,r[1]=Yn.y,r[5]=oa.y,r[9]=Yt.y,r[2]=Yn.z,r[6]=oa.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],g=i[2],b=i[6],p=i[10],u=i[14],T=i[3],M=i[7],x=i[11],C=i[15],P=r[0],R=r[4],N=r[8],y=r[12],S=r[1],D=r[5],k=r[9],V=r[13],K=r[2],X=r[6],Y=r[10],j=r[14],z=r[3],se=r[7],de=r[11],Me=r[15];return a[0]=s*P+o*S+l*K+c*z,a[4]=s*R+o*D+l*X+c*se,a[8]=s*N+o*k+l*Y+c*de,a[12]=s*y+o*V+l*j+c*Me,a[1]=d*P+f*S+h*K+m*z,a[5]=d*R+f*D+h*X+m*se,a[9]=d*N+f*k+h*Y+m*de,a[13]=d*y+f*V+h*j+m*Me,a[2]=g*P+b*S+p*K+u*z,a[6]=g*R+b*D+p*X+u*se,a[10]=g*N+b*k+p*Y+u*de,a[14]=g*y+b*V+p*j+u*Me,a[3]=T*P+M*S+x*K+C*z,a[7]=T*R+M*D+x*X+C*se,a[11]=T*N+M*k+x*Y+C*de,a[15]=T*y+M*V+x*j+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],g=e[3],b=e[7],p=e[11],u=e[15];return g*(+a*l*f-r*c*f-a*o*h+i*c*h+r*o*m-i*l*m)+b*(+t*l*m-t*c*h+a*s*h-r*s*m+r*c*d-a*l*d)+p*(+t*c*f-t*o*m-a*s*f+i*s*m+a*o*d-i*c*d)+u*(-r*o*d-t*l*f+t*o*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],g=e[12],b=e[13],p=e[14],u=e[15],T=f*p*c-b*h*c+b*l*m-o*p*m-f*l*u+o*h*u,M=g*h*c-d*p*c-g*l*m+s*p*m+d*l*u-s*h*u,x=d*b*c-g*f*c+g*o*m-s*b*m-d*o*u+s*f*u,C=g*f*l-d*b*l-g*o*h+s*b*h+d*o*p-s*f*p,P=t*T+i*M+r*x+a*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=T*R,e[1]=(b*h*a-f*p*a-b*r*m+i*p*m+f*r*u-i*h*u)*R,e[2]=(o*p*a-b*l*a+b*r*c-i*p*c-o*r*u+i*l*u)*R,e[3]=(f*l*a-o*h*a-f*r*c+i*h*c+o*r*m-i*l*m)*R,e[4]=M*R,e[5]=(d*p*a-g*h*a+g*r*m-t*p*m-d*r*u+t*h*u)*R,e[6]=(g*l*a-s*p*a-g*r*c+t*p*c+s*r*u-t*l*u)*R,e[7]=(s*h*a-d*l*a+d*r*c-t*h*c-s*r*m+t*l*m)*R,e[8]=x*R,e[9]=(g*f*a-d*b*a-g*i*m+t*b*m+d*i*u-t*f*u)*R,e[10]=(s*b*a-g*o*a+g*i*c-t*b*c-s*i*u+t*o*u)*R,e[11]=(d*o*a-s*f*a-d*i*c+t*f*c+s*i*m-t*o*m)*R,e[12]=C*R,e[13]=(d*b*r-g*f*r+g*i*h-t*b*h-d*i*p+t*f*p)*R,e[14]=(g*o*r-s*b*r-g*i*l+t*b*l+s*i*p-t*o*p)*R,e[15]=(s*f*r-d*o*r+d*i*l-t*f*l-s*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,f=o+o,h=a*c,m=a*d,g=a*f,b=s*d,p=s*f,u=o*f,T=l*c,M=l*d,x=l*f,C=i.x,P=i.y,R=i.z;return r[0]=(1-(b+u))*C,r[1]=(m+x)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(m-x)*P,r[5]=(1-(h+u))*P,r[6]=(p+T)*P,r[7]=0,r[8]=(g+M)*R,r[9]=(p-T)*R,r[10]=(1-(h+b))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Ni.set(r[0],r[1],r[2]).length();const s=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/a,d=1/s,f=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=d,rn.elements[5]*=d,rn.elements[6]*=d,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=Mn,l=!1){const c=this.elements,d=2*a/(t-e),f=2*a/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let g,b;if(l)g=a/(s-a),b=s*a/(s-a);else if(o===Mn)g=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(o===Ba)g=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Mn,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,b;if(l)g=1/(s-a),b=s/(s-a);else if(o===Mn)g=-2/(s-a),b=-(s+a)/(s-a);else if(o===Ba)g=-1/(s-a),b=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new U,rn=new ct,Mu=new U(0,0,0),Eu=new U(1,1,1),Yn=new U,oa=new U,Yt=new U,Fc=new ct,Nc=new ti;class Tn{constructor(e=0,t=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tu=0;const Oc=new U,Oi=new ti,Dn=new ct,ca=new U,gr=new U,Au=new U,wu=new ti,Bc=new U(1,0,0),kc=new U(0,1,0),zc=new U(0,0,1),Hc={type:"added"},Ru={type:"removed"},Bi={type:"childadded",child:null},bs={type:"childremoved",child:null};class xt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new U,t=new Tn,i=new ti,r=new U(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(gr,ca,this.up):Dn.lookAt(ca,gr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru),bs.child=e,this.dispatchEvent(bs),bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new U(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new U,Ln=new U,xs=new U,In=new U,ki=new U,zi=new U,Gc=new U,Ss=new U,ys=new U,Ms=new U,Es=new ht,Ts=new ht,As=new ht;class en{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){an.subVectors(r,t),Ln.subVectors(i,t),xs.subVectors(e,t);const s=an.dot(an),o=an.dot(Ln),l=an.dot(xs),c=Ln.dot(Ln),d=Ln.dot(xs),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,g=(s*d-o*l)*h;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,In.x),l.addScaledVector(s,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Es.setScalar(0),Ts.setScalar(0),As.setScalar(0),Es.fromBufferAttribute(e,t),Ts.fromBufferAttribute(e,i),As.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Es,a.x),s.addScaledVector(Ts,a.y),s.addScaledVector(As,a.z),s}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Ln.subVectors(e,t),an.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),an.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;ki.subVectors(r,i),zi.subVectors(a,i),Ss.subVectors(e,i);const l=ki.dot(Ss),c=zi.dot(Ss);if(l<=0&&c<=0)return t.copy(i);ys.subVectors(e,r);const d=ki.dot(ys),f=zi.dot(ys);if(d>=0&&f<=d)return t.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(ki,s);Ms.subVectors(e,a);const m=ki.dot(Ms),g=zi.dot(Ms);if(g>=0&&m<=g)return t.copy(a);const b=m*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zi,o);const p=d*g-m*f;if(p<=0&&f-d>=0&&m-g>=0)return Gc.subVectors(a,r),o=(f-d)/(f-d+(m-g)),t.copy(r).addScaledVector(Gc,o);const u=1/(p+b+h);return s=b*u,o=h*u,t.copy(i).addScaledVector(ki,s).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},la={h:0,s:0,l:0};function ws(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Ko(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=ws(s,a,e+1/3),this.g=ws(s,a,e),this.b=ws(s,a,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ye.workingToColorSpace(Pt.copy(this),e),Math.round(Ve(Pt.r*255,0,255))*65536+Math.round(Ve(Pt.g*255,0,255))*256+Math.round(Ve(Pt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,a=Pt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ht){Ye.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(la);const i=wr($n.h,la.h,t),r=wr($n.s,la.s,t),a=wr($n.l,la.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new We;We.NAMES=md;let Cu=0;class si extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Zi,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=qs,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xs&&(i.blendSrc=this.blendSrc),this.blendDst!==qs&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gd extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new U,da=new ze;let Pu=0;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class _d extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Du=0;const Jt=new ct,Rs=new xt,Hi=new U,$t=new Wr,_r=new Wr,Et=new U;class Wt extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?vd:_d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];$t.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors($t.min,_r.min),$t.expandByPoint(Et),Et.addVectors($t.max,_r.max),$t.expandByPoint(Et)):($t.expandByPoint(_r.min),$t.expandByPoint(_r.max))}$t.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Et.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Et.add(Hi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new U,l[N]=new U;const c=new U,d=new U,f=new U,h=new ze,m=new ze,g=new ze,b=new U,p=new U;function u(N,y,S){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),h.fromBufferAttribute(a,N),m.fromBufferAttribute(a,y),g.fromBufferAttribute(a,S),d.sub(c),f.sub(c),m.sub(h),g.sub(h);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),o[N].add(b),o[y].add(b),o[S].add(b),l[N].add(p),l[y].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,y=T.length;N<y;++N){const S=T[N],D=S.start,k=S.count;for(let V=D,K=D+k;V<K;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new U,x=new U,C=new U,P=new U;function R(N){C.fromBufferAttribute(r,N),P.copy(C);const y=o[N];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(P,y);const D=x.dot(l[N])<0?-1:1;s.setXYZW(N,M.x,M.y,M.z,D)}for(let N=0,y=T.length;N<y;++N){const S=T[N],D=S.start,k=S.count;for(let V=D,K=D+k;V<K;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,a=new U,s=new U,o=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),b=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,p),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*d;for(let u=0;u<d;u++)h[g++]=c[m++]}return new fn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ct,ui=new jo,fa=new $a,Wc=new U,ua=new U,ha=new U,pa=new U,Cs=new U,ma=new U,Xc=new U,ga=new U;class Gt extends xt{constructor(e=new Wt,t=new gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ma.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(Cs.fromBufferAttribute(f,e),s?ma.addScaledVector(Cs,d):ma.addScaledVector(Cs.sub(t),d))}t.add(ma)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(a),ui.copy(e.ray).recast(e.near),!(fa.containsPoint(ui.origin)===!1&&(ui.intersectSphere(fa,Wc)===null||ui.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Vc.copy(a).invert(),ui.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){const p=h[g],u=s[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,C=M;x<C;x+=3){const P=o.getX(x),R=o.getX(x+1),N=o.getX(x+2);r=_a(this,u,e,i,c,d,f,P,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let p=g,u=b;p<u;p+=3){const T=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);r=_a(this,s,e,i,c,d,f,T,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){const p=h[g],u=s[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,C=M;x<C;x+=3){const P=x,R=x+1,N=x+2;r=_a(this,u,e,i,c,d,f,P,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let p=g,u=b;p<u;p+=3){const T=p,M=p+1,x=p+2;r=_a(this,s,e,i,c,d,f,T,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Lu(n,e,t,i,r,a,s,o){let l;if(e.side===wt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===ln,o),l===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:n}}function _a(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,ua),n.getVertexPosition(l,ha),n.getVertexPosition(c,pa);const d=Lu(n,e,t,i,ua,ha,pa,Xc);if(d){const f=new U;en.getBarycoord(Xc,ua,ha,pa,f),r&&(d.uv=en.getInterpolatedAttribute(r,o,l,c,f,new ze)),a&&(d.uv1=en.getInterpolatedAttribute(a,o,l,c,f,new ze)),s&&(d.normal=en.getInterpolatedAttribute(s,o,l,c,f,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};en.getNormal(ua,ha,pa,h.normal),d.face=h,d.barycoord=f}return d}class Xr extends Wt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function g(b,p,u,T,M,x,C,P,R,N,y){const S=x/R,D=C/N,k=x/2,V=C/2,K=P/2,X=R+1,Y=N+1;let j=0,z=0;const se=new U;for(let de=0;de<Y;de++){const Me=de*D-V;for(let He=0;He<X;He++){const nt=He*S-k;se[b]=nt*T,se[p]=Me*M,se[u]=K,c.push(se.x,se.y,se.z),se[b]=0,se[p]=0,se[u]=P>0?1:-1,d.push(se.x,se.y,se.z),f.push(He/R),f.push(1-de/N),j+=1}}for(let de=0;de<N;de++)for(let Me=0;Me<R;Me++){const He=h+Me+X*de,nt=h+Me+X*(de+1),at=h+(Me+1)+X*(de+1),$e=h+(Me+1)+X*de;l.push(He,nt,$e),l.push(nt,at,$e),z+=6}o.addGroup(m,z,y),m+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const r in i)e[r]=i[r]}return e}function Iu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Uu={clone:nr,merge:Ft};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xd extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new U,qc=new ze,Yc=new ze;class Qt extends xd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Yc),t.subVectors(Yc,qc)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class Ou extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new Qt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const s=new Qt(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new Qt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sd extends Nt{constructor(e=[],t=Qi,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bu extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xr(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:Qn});a.uniforms.tEquirect.value=t;const s=new Gt(r,a),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=yn),new Ou(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class Jn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ku={type:"move"};class Ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const p=t.getJointPose(b,i),u=this._getHandJoint(c,b);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zu extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Io,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new U;class za{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yd extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const vr=new U,Xi=new U,qi=new U,Yi=new ze,br=new ze,Md=new ct,va=new U,xr=new U,ba=new U,$c=new ze,Ds=new ze,Kc=new ze;class Gu extends xt{constructor(e=new yd){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hu(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new za(i,3,0,!1)),Wi.setAttribute("uv",new za(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;xa(va.set(-.5,-.5,0),qi,s,Xi,r,a),xa(xr.set(.5,-.5,0),qi,s,Xi,r,a),xa(ba.set(.5,.5,0),qi,s,Xi,r,a),$c.set(0,0),Ds.set(1,0),Kc.set(1,1);let o=e.ray.intersectTriangle(va,xr,ba,!1,vr);if(o===null&&(xa(xr.set(-.5,.5,0),qi,s,Xi,r,a),Ds.set(0,1),o=e.ray.intersectTriangle(va,ba,xr,!1,vr),o===null))return;const l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:en.getInterpolation(vr,va,xr,ba,$c,Ds,Kc,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xa(n,e,t,i,r,a){Yi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(br.x=a*Yi.x-r*Yi.y,br.y=r*Yi.x+a*Yi.y):br.copy(Yi),n.copy(e),n.x+=br.x,n.y+=br.y,n.applyMatrix4(Md)}const Ls=new U,Vu=new U,Wu=new Oe;class Zn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ls.subVectors(i,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ls),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wu.getNormalMatrix(e),r=this.coplanarPoint(Ls).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new $a,Xu=new ze(.5,.5),Sa=new U;class Qo{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,a=new Zn,s=new Zn){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],f=a[5],h=a[6],m=a[7],g=a[8],b=a[9],p=a[10],u=a[11],T=a[12],M=a[13],x=a[14],C=a[15];if(r[0].setComponents(c-s,m-d,u-g,C-T).normalize(),r[1].setComponents(c+s,m+d,u+g,C+T).normalize(),r[2].setComponents(c+o,m+f,u+b,C+M).normalize(),r[3].setComponents(c-o,m-f,u-b,C-M).normalize(),i)r[4].setComponents(l,h,p,x).normalize(),r[5].setComponents(c-l,m-h,u-p,C-x).normalize();else if(r[4].setComponents(c-l,m-h,u-p,C-x).normalize(),t===Mn)r[5].setComponents(c+l,m+h,u+p,C+x).normalize();else if(t===Ba)r[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Xu.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ec extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new U,Ga=new U,Zc=new ct,Sr=new jo,ya=new $a,Is=new U,jc=new U;class Ed extends xt{constructor(e=new Wt,t=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Ha.fromBufferAttribute(t,r-1),Ga.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(Ga);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),ya.radius+=a,e.ray.intersectsSphere(ya)===!1)return;Zc.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(Zc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let b=m,p=g-1;b<p;b+=c){const u=d.getX(b),T=d.getX(b+1),M=Ma(this,e,Sr,l,u,T,b);M&&t.push(M)}if(this.isLineLoop){const b=d.getX(g-1),p=d.getX(m),u=Ma(this,e,Sr,l,b,p,g-1);u&&t.push(u)}}else{const m=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let b=m,p=g-1;b<p;b+=c){const u=Ma(this,e,Sr,l,b,b+1,b);u&&t.push(u)}if(this.isLineLoop){const b=Ma(this,e,Sr,l,g-1,m,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ma(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(Ha.fromBufferAttribute(o,r),Ga.fromBufferAttribute(o,a),t.distanceSqToSegment(Ha,Ga,Is,jc)>i)return;Is.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Is);if(!(c<e.near||c>e.far))return{distance:c,point:jc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Jc=new U,Qc=new U;class Uo extends Ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Jc.fromBufferAttribute(t,r),Qc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jc.distanceTo(Qc);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends Nt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Td extends Nt{constructor(e,t,i=Mi,r,a,s,o=dn,l=dn,c,d=Pr,f=1){if(d!==Pr&&d!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ad extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}function Yu(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=wd(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c;if(i&&(a=Ju(n,e,a,t)),n.length>80*t){o=1/0,l=1/0;let d=-1/0,f=-1/0;for(let h=t;h<r;h+=t){const m=n[h],g=n[h+1];m<o&&(o=m),g<l&&(l=g),m>d&&(d=m),g>f&&(f=g)}c=Math.max(d-o,f-l),c=c!==0?32767/c:0}return Ur(a,s,t,o,l,c,0),s}function wd(n,e,t,i,r){let a;if(r===lh(n,e,t,i)>0)for(let s=e;s<t;s+=i)a=el(s/i|0,n[s],n[s+1],a);else for(let s=t-i;s>=e;s-=i)a=el(s/i|0,n[s],n[s+1],a);return a&&ir(a,a.next)&&(Nr(a),a=a.next),a}function Ti(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ir(t,t.next)||ft(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ur(n,e,t,i,r,a,s){if(!n)return;!s&&a&&ih(n,i,r,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?Ku(n,i,r,a):$u(n)){e.push(l.i,n.i,c.i),Nr(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=Zu(Ti(n),e),Ur(n,e,t,i,r,a,2)):s===2&&ju(n,e,t,i,r,a):Ur(Ti(n),e,t,i,r,a,1);break}}}function $u(n){const e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,d=Math.min(r,a,s),f=Math.min(o,l,c),h=Math.max(r,a,s),m=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=f&&g.y<=m&&yr(r,o,a,l,s,c,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ku(n,e,t,i){const r=n.prev,a=n,s=n.next;if(ft(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,d=r.y,f=a.y,h=s.y,m=Math.min(o,l,c),g=Math.min(d,f,h),b=Math.max(o,l,c),p=Math.max(d,f,h),u=Fo(m,g,e,t,i),T=Fo(b,p,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=u&&x&&x.z<=T;){if(M.x>=m&&M.x<=b&&M.y>=g&&M.y<=p&&M!==r&&M!==s&&yr(o,d,l,f,c,h,M.x,M.y)&&ft(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=m&&x.x<=b&&x.y>=g&&x.y<=p&&x!==r&&x!==s&&yr(o,d,l,f,c,h,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=u;){if(M.x>=m&&M.x<=b&&M.y>=g&&M.y<=p&&M!==r&&M!==s&&yr(o,d,l,f,c,h,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=T;){if(x.x>=m&&x.x<=b&&x.y>=g&&x.y<=p&&x!==r&&x!==s&&yr(o,d,l,f,c,h,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zu(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ir(i,r)&&Cd(i,t,t.next,r)&&Fr(i,r)&&Fr(r,i)&&(e.push(i.i,t.i,r.i),Nr(t),Nr(t.next),t=n=r),t=t.next}while(t!==n);return Ti(t)}function ju(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&sh(s,o)){let l=Pd(s,o);s=Ti(s,s.next),l=Ti(l,l.next),Ur(s,e,t,i,r,a,0),Ur(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function Ju(n,e,t,i){const r=[];for(let a=0,s=e.length;a<s;a++){const o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=wd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ah(c))}r.sort(Qu);for(let a=0;a<r.length;a++)t=eh(r[a],t);return t}function Qu(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function eh(n,e){const t=th(n,e);if(!t)return e;const i=Pd(t,n);return Ti(i,i.next),Ti(t,t.next)}function th(n,e){let t=e;const i=n.x,r=n.y;let a=-1/0,s;if(ir(n,t))return t;do{if(ir(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>a&&(a=f,s=t.x<t.next.x?t:t.next,f===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let d=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Rd(r<c?i:a,r,l,c,r<c?a:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Fr(t,n)&&(f<d||f===d&&(t.x>s.x||t.x===s.x&&nh(s,t)))&&(s=t,d=f)}t=t.next}while(t!==o);return s}function nh(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function ih(n,e,t,i){let r=n;do r.z===0&&(r.z=Fo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,rh(r)}function rh(n){let e,t=1;do{let i=n,r;n=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let l=t;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,t*=2}while(e>1);return n}function Fo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ah(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rd(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function yr(n,e,t,i,r,a,s,o){return!(n===s&&e===o)&&Rd(n,e,t,i,r,a,s,o)}function sh(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!oh(n,e)&&(Fr(n,e)&&Fr(e,n)&&ch(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||ir(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ir(n,e){return n.x===e.x&&n.y===e.y}function Cd(n,e,t,i){const r=Ta(ft(n,e,t)),a=Ta(ft(n,e,i)),s=Ta(ft(t,i,n)),o=Ta(ft(t,i,e));return!!(r!==a&&s!==o||r===0&&Ea(n,t,e)||a===0&&Ea(n,i,e)||s===0&&Ea(t,n,i)||o===0&&Ea(t,e,i))}function Ea(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ta(n){return n>0?1:n<0?-1:0}function oh(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Fr(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function ch(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pd(n,e){const t=No(n.i,n.x,n.y),i=No(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function el(n,e,t,i){const r=No(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function No(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lh(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class dh{static triangulate(e,t,i=2){return Yu(e,t,i)}}class tc{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return tc.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];tl(e),nl(i,e);let s=e.length;t.forEach(tl);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,nl(i,t[l]);const o=dh.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function tl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class qr extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=t/l,m=[],g=[],b=[],p=[];for(let u=0;u<d;u++){const T=u*h-s;for(let M=0;M<c;M++){const x=M*f-a;g.push(x,-T,0),b.push(0,0,1),p.push(M/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const M=T+c*u,x=T+c*(u+1),C=T+1+c*(u+1),P=T+1+c*u;m.push(M,x,P),m.push(x,C,P)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class fh extends si{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class uh extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hh extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ph extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dd extends ec{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ld extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mh extends Ld{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Us=new ct,il=new U,rl=new U;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;il.setFromMatrixPosition(e.matrixWorld),t.position.copy(il),rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rl),t.updateMatrixWorld(),Us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Us,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Id extends xd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _h extends gh{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new _h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bh extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const al=new ct;class xh{constructor(e,t,i=0,r=1/0){this.ray=new jo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return al.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(al),this}intersectObject(e,t=!0,i=[]){return Oo(e,this,i,t),i.sort(sl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Oo(e[r],this,i,t);return i.sort(sl),i}}function sl(n,e){return n.distance-e.distance}function Oo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)Oo(a[s],e,t,!0)}}function ol(n,e,t,i){const r=Sh(i);switch(t){case sd:return n*e;case cd:return n*e/r.components*r.byteLength;case qo:return n*e/r.components*r.byteLength;case ld:return n*e*2/r.components*r.byteLength;case Yo:return n*e*2/r.components*r.byteLength;case od:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case $o:return n*e*4/r.components*r.byteLength;case Da:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:case oo:return Math.max(n,16)*Math.max(e,8)/4;case ro:case so:return Math.max(n,8)*Math.max(e,8)/2;case co:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ao:case wo:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Do:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sh(n){switch(n){case En:case nd:return{byteLength:1,components:1};case Rr:case id:case Vr:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Mi:case Vo:case Nn:return{byteLength:4,components:1};case rd:case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function Ud(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function yh(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],b=f[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,f[h]=b)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const b=f[m];n.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
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
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
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
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
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
#endif`,Oh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$h=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,km=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Km=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,t0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Mh,alphahash_pars_fragment:Eh,alphamap_fragment:Th,alphamap_pars_fragment:Ah,alphatest_fragment:wh,alphatest_pars_fragment:Rh,aomap_fragment:Ch,aomap_pars_fragment:Ph,batching_pars_vertex:Dh,batching_vertex:Lh,begin_vertex:Ih,beginnormal_vertex:Uh,bsdfs:Fh,iridescence_fragment:Nh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Kh,displacementmap_vertex:Zh,emissivemap_fragment:jh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:rp,envmap_physical_pars_fragment:mp,envmap_vertex:ap,fog_vertex:sp,fog_pars_vertex:op,fog_fragment:cp,fog_pars_fragment:lp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:up,lights_lambert_pars_fragment:hp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:_p,lights_phong_fragment:vp,lights_phong_pars_fragment:bp,lights_physical_fragment:xp,lights_physical_pars_fragment:Sp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Pp,map_particle_fragment:Dp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Np,morphnormal_vertex:Op,morphtarget_pars_vertex:Bp,morphtarget_vertex:kp,normal_fragment_begin:zp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Vp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:Zp,packing:jp,premultiplied_alpha_fragment:Jp,project_vertex:Qp,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:sm,shadowmask_pars_fragment:om,skinbase_vertex:cm,skinning_pars_vertex:lm,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:um,specularmap_pars_fragment:hm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:_m,uv_pars_fragment:vm,uv_pars_vertex:bm,uv_vertex:xm,worldpos_vertex:Sm,background_vert:ym,background_frag:Mm,backgroundCube_vert:Em,backgroundCube_frag:Tm,cube_vert:Am,cube_frag:wm,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Dm,equirect_vert:Lm,equirect_frag:Im,linedashed_vert:Um,linedashed_frag:Fm,meshbasic_vert:Nm,meshbasic_frag:Om,meshlambert_vert:Bm,meshlambert_frag:km,meshmatcap_vert:zm,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:Vm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:Zm,points_frag:jm,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:e0,sprite_frag:t0},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},_n={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};_n.physical={uniforms:Ft([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Aa={r:0,b:0,g:0},pi=new Tn,n0=new ct;function i0(n,e,t,i,r,a,s){const o=new We(0);let l=a===!0?0:1,c,d,f=null,h=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function b(M){let x=!1;const C=g(M);C===null?u(o,l):C&&C.isColor&&(u(C,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===Ya)?(d===void 0&&(d=new Gt(new Xr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:nr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(pi)),d.material.toneMapped=Ye.getTransfer(C.colorSpace)!==Qe,(f!==C||h!==C.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Gt(new qr(2,2),new ni({name:"BackgroundMaterial",uniforms:nr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(C.colorSpace)!==Qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,x){M.getRGB(Aa,bd(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,x,s)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:b,addToRenderList:p,dispose:T}}function r0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(S,D,k,V,K){let X=!1;const Y=f(V,k,D);a!==Y&&(a=Y,c(a.object)),X=m(S,V,k,K),X&&g(S,V,k,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,x(S,D,k,V),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function f(S,D,k){const V=k.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let X=K[D.id];X===void 0&&(X={},K[D.id]=X);let Y=X[V];return Y===void 0&&(Y=h(l()),X[V]=Y),Y}function h(S){const D=[],k=[],V=[];for(let K=0;K<t;K++)D[K]=0,k[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function m(S,D,k,V){const K=a.attributes,X=D.attributes;let Y=0;const j=k.getAttributes();for(const z in j)if(j[z].location>=0){const de=K[z];let Me=X[z];if(Me===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;Y++}return a.attributesNum!==Y||a.index!==V}function g(S,D,k,V){const K={},X=D.attributes;let Y=0;const j=k.getAttributes();for(const z in j)if(j[z].location>=0){let de=X[z];de===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),K[z]=Me,Y++}a.attributes=K,a.attributesNum=Y,a.index=V}function b(){const S=a.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function p(S){u(S,0)}function u(S,D){const k=a.newAttributes,V=a.enabledAttributes,K=a.attributeDivisors;k[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),K[S]!==D&&(n.vertexAttribDivisor(S,D),K[S]=D)}function T(){const S=a.newAttributes,D=a.enabledAttributes;for(let k=0,V=D.length;k<V;k++)D[k]!==S[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function M(S,D,k,V,K,X,Y){Y===!0?n.vertexAttribIPointer(S,D,k,K,X):n.vertexAttribPointer(S,D,k,V,K,X)}function x(S,D,k,V){b();const K=V.attributes,X=k.getAttributes(),Y=D.defaultAttributeValues;for(const j in X){const z=X[j];if(z.location>=0){let se=K[j];if(se===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const de=se.normalized,Me=se.itemSize,He=e.get(se);if(He===void 0)continue;const nt=He.buffer,at=He.type,$e=He.bytesPerElement,q=at===n.INT||at===n.UNSIGNED_INT||se.gpuType===Vo;if(se.isInterleavedBufferAttribute){const J=se.data,he=J.stride,De=se.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)u(z.location+ye,J.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ye=0;ye<z.locationSize;ye++)M(z.location+ye,Me/z.locationSize,at,de,he*$e,(De+Me/z.locationSize*ye)*$e,q)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)u(z.location+J,se.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<z.locationSize;J++)p(z.location+J);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let J=0;J<z.locationSize;J++)M(z.location+J,Me/z.locationSize,at,de,Me*$e,Me/z.locationSize*J*$e,q)}}else if(Y!==void 0){const de=Y[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}T()}function C(){N();for(const S in i){const D=i[S];for(const k in D){const V=D[k];for(const K in V)d(V[K].object),delete V[K];delete D[k]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const k in D){const V=D[k];for(const K in V)d(V[K].object),delete V[K];delete D[k]}delete i[S.id]}function R(S){for(const D in i){const k=i[D];if(k[S.id]===void 0)continue;const V=k[S.id];for(const K in V)d(V[K].object),delete V[K];delete k[S.id]}}function N(){y(),s=!0,a!==r&&(a=r,c(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:p,disableUnusedAttributes:T}}function a0(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,f){f!==0&&(n.drawArraysInstanced(i,c,d,f),t.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];t.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let g=0;for(let b=0;b<f;b++)g+=d[b]*h[b];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function s0(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==on&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Nn&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:P}}function o0(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Zn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,b=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||g===null||g.length===0||a&&!p)a?d(null):c();else{const T=a?0:i,M=T*4;let x=u.clippingState||null;l.value=x,x=d(g,h,M,m);for(let C=0;C!==M;++C)x[C]=t[C];u.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,g){const b=f!==null?f.length:0;let p=null;if(b!==0){if(p=l.value,g!==!0||p===null){const u=m+b*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,x=m;M!==b;++M,x+=4)s.copy(f[M]).applyMatrix4(T,o),s.normal.toArray(p,x),p[x+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function c0(n){let e=new WeakMap;function t(s,o){return o===eo?s.mapping=Qi:o===to&&(s.mapping=er),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===eo||o===to)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Bu(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const Ki=4,cl=[.125,.215,.35,.446,.526,.582],vi=20,Fs=new Id,ll=new We;let Ns=null,Os=0,Bs=0,ks=!1;const gi=(1+Math.sqrt(5))/2,$i=1/gi,dl=[new U(-gi,$i,0),new U(gi,$i,0),new U(-$i,0,gi),new U($i,0,gi),new U(0,gi,-$i),new U(0,gi,$i),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],l0=new U;class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=l0}=a;Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Os,Bs),this._renderer.xr.enabled=ks,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Bs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Vr,format:on,colorSpace:tr,depthBuffer:!1},r=ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(a)),this._blurMaterial=f0(a,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,i,r,a){const l=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(ll),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const b=new gd({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),p=new Gt(new Xr,b);let u=!1;const T=e.background;T?T.isColor&&(b.color.copy(T),e.background=null,u=!0):(b.color.copy(ll),u=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[M],a.y,a.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[M]));const C=this._cubeSize;wa(r,x*C,M>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qi||e.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Gt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Fs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=dl[(r-a-1)%dl.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Gt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*vi-1),b=a/g,p=isFinite(a)?1+Math.floor(d*b):vi;p>vi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const u=[];let T=0;for(let R=0;R<vi;++R){const N=R/b,y=Math.exp(-N*N/2);u.push(y),R===0?T+=y:R<p&&(T+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const x=this._sizeLods[r],C=3*x*(r>M-Ki?r-M+Ki:0),P=4*(this._cubeSize-x);wa(t,C,P,3*x,2*x),l.setRenderTarget(t),l.render(f,Fs)}}function d0(n){const e=[],t=[],i=[];let r=n;const a=n-Ki+1+cl.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Ki?l=cl[s-n+Ki-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,b=3,p=2,u=1,T=new Float32Array(b*g*m),M=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,N=P>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(y,b*g*P),M.set(h,p*g*P);const S=[P,P,P,P,P,P];x.set(S,u*g*P)}const C=new Wt;C.setAttribute("position",new fn(T,b)),C.setAttribute("uv",new fn(M,p)),C.setAttribute("faceIndex",new fn(x,u)),e.push(C),r>Ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ul(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function f0(n,e,t){const i=new Float32Array(vi),r=new U(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function hl(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function pl(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function u0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===eo||l===to,d=l===Qi||l===er;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function h0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function p0(n,e,t,i){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,g=f.attributes.position;let b=0;if(m!==null){const T=m.array;b=m.version;for(let M=0,x=T.length;M<x;M+=3){const C=T[M+0],P=T[M+1],R=T[M+2];h.push(C,P,P,R,R,C)}}else if(g!==void 0){const T=g.array;b=g.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const C=M+0,P=M+1,R=M+2;h.push(C,P,P,R,R,C)}}else return;const p=new(hd(h)?vd:_d)(h,1);p.version=b;const u=a.get(f);u&&e.remove(u),a.set(f,p)}function d(f){const h=a.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function m0(n,e,t){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,m){n.drawElements(i,m,a,h*s),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,a,h*s,g),t.update(m,i,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,h,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function f(h,m,g,b){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/s,m[u],b[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,h,0,b,0,g);let u=0;for(let T=0;T<g;T++)u+=m[T]*b[T];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function g0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _0(n,e,t){const i=new WeakMap,r=new ht;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),b===!0&&(x=2),p===!0&&(x=3);let C=o.attributes.position.count*x,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*P*4*f),N=new pd(R,C,P,f);N.type=Nn,N.needsUpdate=!0;const y=x*4;for(let D=0;D<f;D++){const k=u[D],V=T[D],K=M[D],X=C*P*4*D;for(let Y=0;Y<k.count;Y++){const j=Y*y;g===!0&&(r.fromBufferAttribute(k,Y),R[X+j+0]=r.x,R[X+j+1]=r.y,R[X+j+2]=r.z,R[X+j+3]=0),b===!0&&(r.fromBufferAttribute(V,Y),R[X+j+4]=r.x,R[X+j+5]=r.y,R[X+j+6]=r.z,R[X+j+7]=0),p===!0&&(r.fromBufferAttribute(K,Y),R[X+j+8]=r.x,R[X+j+9]=r.y,R[X+j+10]=r.z,R[X+j+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new ze(C,P)},i.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function v0(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Fd=new Nt,ml=new Td(1,1),Nd=new pd,Od=new Su,Bd=new Sd,gl=[],_l=[],vl=new Float32Array(16),bl=new Float32Array(9),xl=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=gl[r];if(a===void 0&&(a=new Float32Array(r),gl[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=_l[e];t===void 0&&(t=new Int32Array(e),_l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function M0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;xl.set(i),n.uniformMatrix2fv(this.addr,!1,xl),yt(t,i)}}function E0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;bl.set(i),n.uniformMatrix3fv(this.addr,!1,bl),yt(t,i)}}function T0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;vl.set(i),n.uniformMatrix4fv(this.addr,!1,vl),yt(t,i)}}function A0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function P0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function U0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(ml.compareFunction=fd,a=ml):a=Fd,t.setTexture2D(e||a,r)}function F0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Od,r)}function N0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bd,r)}function O0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nd,r)}function B0(n){switch(n){case 5126:return b0;case 35664:return x0;case 35665:return S0;case 35666:return y0;case 35674:return M0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return w0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return D0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}function k0(n,e){n.uniform1fv(this.addr,e)}function z0(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function H0(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function G0(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function V0(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W0(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X0(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q0(n,e){n.uniform1iv(this.addr,e)}function Y0(n,e){n.uniform2iv(this.addr,e)}function $0(n,e){n.uniform3iv(this.addr,e)}function K0(n,e){n.uniform4iv(this.addr,e)}function Z0(n,e){n.uniform1uiv(this.addr,e)}function j0(n,e){n.uniform2uiv(this.addr,e)}function J0(n,e){n.uniform3uiv(this.addr,e)}function Q0(n,e){n.uniform4uiv(this.addr,e)}function eg(n,e,t){const i=this.cache,r=e.length,a=Ka(t,r);St(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Fd,a[s])}function tg(n,e,t){const i=this.cache,r=e.length,a=Ka(t,r);St(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Od,a[s])}function ng(n,e,t){const i=this.cache,r=e.length,a=Ka(t,r);St(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Bd,a[s])}function ig(n,e,t){const i=this.cache,r=e.length,a=Ka(t,r);St(i,a)||(n.uniform1iv(this.addr,a),yt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Nd,a[s])}function rg(n){switch(n){case 5126:return k0;case 35664:return z0;case 35665:return H0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return $0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return j0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class ag{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class sg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rg(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function Sl(n,e){n.seq.push(e),n.map[e.id]=e}function cg(n,e,t){const i=n.name,r=i.length;for(zs.lastIndex=0;;){const a=zs.exec(i),s=zs.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Sl(t,c===void 0?new ag(o,n,e):new sg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new og(o),Sl(t,f)),t=f}}}class Fa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);cg(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lg=37297;let dg=0;function fg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ml=new Oe;function ug(n){Ye._getMatrix(Ml,Ye.workingColorSpace,n);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Oa:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function El(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+fg(n.getShaderSource(e),o)}else return a}function hg(n,e){const t=ug(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pg(n,e){let t;switch(e){case Ff:t="Linear";break;case Nf:t="Reinhard";break;case Of:t="Cineon";break;case ed:t="ACESFilmic";break;case kf:t="AgX";break;case zf:t="Neutral";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new U;function mg(){Ye.getLuminanceCoefficients(Ra);const n=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function _g(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Mr(n){return n!==""}function Tl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(n){return n.replace(bg,Sg)}const xg=new Map;function Sg(n,e){let t=ke[e];if(t===void 0){const i=xg.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(yg,Mg)}function Mg(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Rl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Eg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===er&&(e="ENVMAP_MODE_REFRACTION"),e}function wg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cg(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Eg(t),c=Tg(t),d=Ag(t),f=wg(t),h=Rg(t),m=gg(t),g=_g(a),b=r.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),u.length>0&&(u+=`
`)):(p=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),u=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ke.tonemapping_pars_fragment:"",t.toneMapping!==ei?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,hg("linearToOutputTexel",t.outputColorSpace),mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),s=Bo(s),s=Tl(s,t),s=Al(s,t),o=Bo(o),o=Tl(o,t),o=Al(o,t),s=wl(s),o=wl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=T+p+s,x=T+u+o,C=yl(r,r.VERTEX_SHADER,M),P=yl(r,r.FRAGMENT_SHADER,x);r.attachShader(b,C),r.attachShader(b,P),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(D){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(b)||"",V=r.getShaderInfoLog(C)||"",K=r.getShaderInfoLog(P)||"",X=k.trim(),Y=V.trim(),j=K.trim();let z=!0,se=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,C,P);else{const de=El(r,C,"vertex"),Me=El(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+de+`
`+Me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||j==="")&&(se=!1);se&&(D.diagnostics={runnable:z,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:j,prefix:u}})}r.deleteShader(C),r.deleteShader(P),N=new Fa(r,b),y=vg(r,b)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,lg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=P,this}let Pg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lg(e),t.set(e,i)),i}}class Lg{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}}function Ig(n,e,t,i,r,a,s){const o=new Jo,l=new Dg,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,D,k,V){const K=k.fog,X=V.geometry,Y=y.isMeshStandardMaterial?k.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),z=j&&j.mapping===Ya?j.image.height:null,se=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=de!==void 0?de.length:0;let He=0;X.morphAttributes.position!==void 0&&(He=1),X.morphAttributes.normal!==void 0&&(He=2),X.morphAttributes.color!==void 0&&(He=3);let nt,at,$e,q;if(se){const Ke=_n[se];nt=Ke.vertexShader,at=Ke.fragmentShader}else nt=y.vertexShader,at=y.fragmentShader,l.update(y),$e=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const J=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,ye=V.isBatchedMesh===!0,Xe=!!y.map,Rt=!!y.matcap,A=!!j,st=!!y.aoMap,Fe=!!y.lightMap,Ce=!!y.bumpMap,ge=!!y.normalMap,ot=!!y.displacementMap,_e=!!y.emissiveMap,Be=!!y.metalnessMap,Mt=!!y.roughnessMap,gt=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,F=y.iridescence>0,W=y.sheen>0,Z=y.transmission>0,H=gt&&!!y.anisotropyMap,Se=E&&!!y.clearcoatMap,ie=E&&!!y.clearcoatNormalMap,ve=E&&!!y.clearcoatRoughnessMap,be=F&&!!y.iridescenceMap,te=F&&!!y.iridescenceThicknessMap,le=W&&!!y.sheenColorMap,Re=W&&!!y.sheenRoughnessMap,xe=!!y.specularMap,oe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,w=Z&&!!y.transmissionMap,ne=Z&&!!y.thicknessMap,re=!!y.gradientMap,ue=!!y.alphaMap,Q=y.alphaTest>0,$=!!y.alphaHash,me=!!y.extensions;let Ie=ei;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const it={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:at,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ye,batchingColor:ye&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:tr,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:Rt,envMap:A,envMapMode:A&&j.mapping,envMapCubeUVHeight:z,aoMap:st,lightMap:Fe,bumpMap:Ce,normalMap:ge,displacementMap:h&&ot,emissiveMap:_e,normalMapObjectSpace:ge&&y.normalMapType===Wf,normalMapTangentSpace:ge&&y.normalMapType===dd,metalnessMap:Be,roughnessMap:Mt,anisotropy:gt,anisotropyMap:H,clearcoat:E,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:_,iridescence:F,iridescenceMap:be,iridescenceThicknessMap:te,sheen:W,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:oe,specularIntensityMap:Ne,transmission:Z,transmissionMap:w,thicknessMap:ne,gradientMap:re,opaque:y.transparent===!1&&y.blending===Zi&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:$,combine:y.combine,mapUv:Xe&&b(y.map.channel),aoMapUv:st&&b(y.aoMap.channel),lightMapUv:Fe&&b(y.lightMap.channel),bumpMapUv:Ce&&b(y.bumpMap.channel),normalMapUv:ge&&b(y.normalMap.channel),displacementMapUv:ot&&b(y.displacementMap.channel),emissiveMapUv:_e&&b(y.emissiveMap.channel),metalnessMapUv:Be&&b(y.metalnessMap.channel),roughnessMapUv:Mt&&b(y.roughnessMap.channel),anisotropyMapUv:H&&b(y.anisotropyMap.channel),clearcoatMapUv:Se&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&b(y.sheenRoughnessMap.channel),specularMapUv:xe&&b(y.specularMap.channel),specularColorMapUv:oe&&b(y.specularColorMap.channel),specularIntensityMapUv:Ne&&b(y.specularIntensityMap.channel),transmissionMapUv:w&&b(y.transmissionMap.channel),thicknessMapUv:ne&&b(y.thicknessMap.channel),alphaMapUv:ue&&b(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ge||gt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Xe||ue),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vn,flipSided:y.side===wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function u(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(S,y),M(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const S=g[y.type];let D;if(S){const k=_n[S];D=Uu.clone(k.uniforms)}else D=y.uniforms;return D}function C(y,S){let D;for(let k=0,V=d.length;k<V;k++){const K=d[k];if(K.cacheKey===S){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Cg(n,S,y,a),d.push(D)),D}function P(y){if(--y.usedTimes===0){const S=d.indexOf(y);d[S]=d[d.length-1],d.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:P,releaseShaderCache:R,programs:d,dispose:N}}function Ug(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function Fg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pl(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(f,h,m,g,b,p){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:b,group:p},n[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=b,u.group=p),e++,u}function o(f,h,m,g,b,p){const u=s(f,h,m,g,b,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,h,m,g,b,p){const u=s(f,h,m,g,b,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||Fg),i.length>1&&i.sort(h||Cl),r.length>1&&r.sort(h||Cl)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function Ng(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Pl,n.set(i,[s])):r>=a.length?(s=new Pl,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Og(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Bg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kg=0;function zg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hg(n){const e=new Og,t=Bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,a=new ct,s=new ct;function o(c){let d=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,b=0,p=0,u=0,T=0,M=0,x=0,C=0,P=0,R=0;c.sort(zg);for(let y=0,S=c.length;y<S;y++){const D=c[y],k=D.color,V=D.intensity,K=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*V,f+=k.g*V,h+=k.b*V;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],V);R++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(k).multiplyScalar(V),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[b]=Y;const j=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[b]=j.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[b]=z,i.spotShadowMap[b]=X,x++}b++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(k).multiplyScalar(V),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const j=D.shadow,z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(V),Y.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[u]=Y,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==b||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==T||N.numPointShadows!==M||N.numSpotShadows!==x||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=m,N.pointLength=g,N.spotLength=b,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=T,N.numPointShadows=M,N.numSpotShadows=x,N.numSpotMaps=C,N.numLightProbes=R,i.version=kg++)}function l(c,d){let f=0,h=0,m=0,g=0,b=0;const p=d.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const M=c[u];if(M.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),f++}else if(M.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),s.identity(),a.copy(M.matrixWorld),a.premultiply(p),s.extractRotation(a),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const x=i.hemi[b];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),b++}}}return{setup:o,setupView:l,state:i}}function Dl(n){const e=new Hg(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Gg(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Dl(n),e.set(r,[o])):a>=s.length?(o=new Dl(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
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
}`;function Xg(n,e,t){let i=new Qo;const r=new ze,a=new ze,s=new ht,o=new hh({depthPacking:Vf}),l=new ph,c={},d=t.maxTextureSize,f={[ln]:wt,[wt]:ln,[vn]:vn},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Vg,fragmentShader:Wg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Gt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let u=this.type;this.render=function(P,R,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=u!==Fn&&this.type===Fn,K=u===Fn&&this.type!==Fn;for(let X=0,Y=P.length;X<Y;X++){const j=P[X],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();if(r.multiply(se),a.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/se.x),r.x=a.x*se.x,z.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/se.y),r.y=a.y*se.y,z.mapSize.y=a.y)),z.map===null||V===!0||K===!0){const Me=this.type!==Fn?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new Ei(r.x,r.y,Me),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const de=z.getViewportCount();for(let Me=0;Me<de;Me++){const He=z.getViewport(Me);s.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),k.viewport(s),z.updateMatrices(j,Me),i=z.getFrustum(),x(R,N,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Fn&&T(z,N),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(y,S,D)};function T(P,R){const N=e.update(b);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ei(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,h,b,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,m,b,null)}function M(P,R,N,y){let S=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=S.uuid,V=R.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let X=K[V];X===void 0&&(X=S.clone(),K[V]=X,R.addEventListener("dispose",C)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Fn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=N}return S}function x(P,R,N,y,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Fn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),K=P.material;if(Array.isArray(K)){const X=V.groups;for(let Y=0,j=X.length;Y<j;Y++){const z=X[Y],se=K[z.materialIndex];if(se&&se.visible){const de=M(P,se,y,S);P.onBeforeShadow(n,P,R,N,V,de,z),n.renderBufferDirect(N,null,V,de,P,z),P.onAfterShadow(n,P,R,N,V,de,z)}}}else if(K.visible){const X=M(P,K,y,S);P.onBeforeShadow(n,P,R,N,V,X,null),n.renderBufferDirect(N,null,V,X,P,null),P.onAfterShadow(n,P,R,N,V,X,null)}}const k=P.children;for(let V=0,K=k.length;V<K;V++)x(k[V],R,N,y,S)}function C(P){P.target.removeEventListener("dispose",C);for(const N in c){const y=c[N],S=P.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const qg={[Ys]:$s,[Ks]:Js,[Zs]:Qs,[Ji]:js,[$s]:Ys,[Js]:Ks,[Qs]:Zs,[js]:Ji};function Yg(n,e){function t(){let w=!1;const ne=new ht;let re=null;const ue=new ht(0,0,0,0);return{setMask:function(Q){re!==Q&&!w&&(n.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){w=Q},setClear:function(Q,$,me,Ie,it){it===!0&&(Q*=Ie,$*=Ie,me*=Ie),ne.set(Q,$,me,Ie),ue.equals(ne)===!1&&(n.clearColor(Q,$,me,Ie),ue.copy(ne))},reset:function(){w=!1,re=null,ue.set(-1,0,0,0)}}}function i(){let w=!1,ne=!1,re=null,ue=null,Q=null;return{setReversed:function($){if(ne!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return ne},setTest:function($){$?J(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function($){re!==$&&!w&&(n.depthMask($),re=$)},setFunc:function($){if(ne&&($=qg[$]),ue!==$){switch($){case Ys:n.depthFunc(n.NEVER);break;case $s:n.depthFunc(n.ALWAYS);break;case Ks:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Zs:n.depthFunc(n.EQUAL);break;case js:n.depthFunc(n.GEQUAL);break;case Js:n.depthFunc(n.GREATER);break;case Qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=$}},setLocked:function($){w=$},setClear:function($){Q!==$&&(ne&&($=1-$),n.clearDepth($),Q=$)},reset:function(){w=!1,re=null,ue=null,Q=null,ne=!1}}}function r(){let w=!1,ne=null,re=null,ue=null,Q=null,$=null,me=null,Ie=null,it=null;return{setTest:function(Ke){w||(Ke?J(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!w&&(n.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,Rn,mn){(re!==Ke||ue!==Rn||Q!==mn)&&(n.stencilFunc(Ke,Rn,mn),re=Ke,ue=Rn,Q=mn)},setOp:function(Ke,Rn,mn){($!==Ke||me!==Rn||Ie!==mn)&&(n.stencilOp(Ke,Rn,mn),$=Ke,me=Rn,Ie=mn)},setLocked:function(Ke){w=Ke},setClear:function(Ke){it!==Ke&&(n.clearStencil(Ke),it=Ke)},reset:function(){w=!1,ne=null,re=null,ue=null,Q=null,$=null,me=null,Ie=null,it=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],g=null,b=!1,p=null,u=null,T=null,M=null,x=null,C=null,P=null,R=new We(0,0,0),N=0,y=!1,S=null,D=null,k=null,V=null,K=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=j>=2);let se=null,de={};const Me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),nt=new ht().fromArray(Me),at=new ht().fromArray(He);function $e(w,ne,re,ue){const Q=new Uint8Array(4),$=n.createTexture();n.bindTexture(w,$),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<re;me++)w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ne+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return $}const q={};q[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),J(n.DEPTH_TEST),s.setFunc(Ji),Ce(!1),ge(Ec),J(n.CULL_FACE),st(Qn);function J(w){d[w]!==!0&&(n.enable(w),d[w]=!0)}function he(w){d[w]!==!1&&(n.disable(w),d[w]=!1)}function De(w,ne){return f[w]!==ne?(n.bindFramebuffer(w,ne),f[w]=ne,w===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),w===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function ye(w,ne){let re=m,ue=!1;if(w){re=h.get(ne),re===void 0&&(re=[],h.set(ne,re));const Q=w.textures;if(re.length!==Q.length||re[0]!==n.COLOR_ATTACHMENT0){for(let $=0,me=Q.length;$<me;$++)re[$]=n.COLOR_ATTACHMENT0+$;re.length=Q.length,ue=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ue=!0);ue&&n.drawBuffers(re)}function Xe(w){return g!==w?(n.useProgram(w),g=w,!0):!1}const Rt={[_i]:n.FUNC_ADD,[gf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};Rt[vf]=n.MIN,Rt[bf]=n.MAX;const A={[xf]:n.ZERO,[Sf]:n.ONE,[yf]:n.SRC_COLOR,[Xs]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[Mf]:n.ONE_MINUS_SRC_COLOR,[qs]:n.ONE_MINUS_SRC_ALPHA,[wf]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Pf]:n.ONE_MINUS_CONSTANT_COLOR,[Df]:n.CONSTANT_ALPHA,[Lf]:n.ONE_MINUS_CONSTANT_ALPHA};function st(w,ne,re,ue,Q,$,me,Ie,it,Ke){if(w===Qn){b===!0&&(he(n.BLEND),b=!1);return}if(b===!1&&(J(n.BLEND),b=!0),w!==mf){if(w!==p||Ke!==y){if((u!==_i||x!==_i)&&(n.blendEquation(n.FUNC_ADD),u=_i,x=_i),Ke)switch(w){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFunc(n.ONE,n.ONE);break;case Ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,M=null,C=null,P=null,R.set(0,0,0),N=0,p=w,y=Ke}return}Q=Q||ne,$=$||re,me=me||ue,(ne!==u||Q!==x)&&(n.blendEquationSeparate(Rt[ne],Rt[Q]),u=ne,x=Q),(re!==T||ue!==M||$!==C||me!==P)&&(n.blendFuncSeparate(A[re],A[ue],A[$],A[me]),T=re,M=ue,C=$,P=me),(Ie.equals(R)===!1||it!==N)&&(n.blendColor(Ie.r,Ie.g,Ie.b,it),R.copy(Ie),N=it),p=w,y=!1}function Fe(w,ne){w.side===vn?he(n.CULL_FACE):J(n.CULL_FACE);let re=w.side===wt;ne&&(re=!re),Ce(re),w.blending===Zi&&w.transparent===!1?st(Qn):st(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),a.setMask(w.colorWrite);const ue=w.stencilWrite;o.setTest(ue),ue&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),_e(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(w){S!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),S=w)}function ge(w){w!==hf?(J(n.CULL_FACE),w!==D&&(w===Ec?n.cullFace(n.BACK):w===pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),D=w}function ot(w){w!==k&&(Y&&n.lineWidth(w),k=w)}function _e(w,ne,re){w?(J(n.POLYGON_OFFSET_FILL),(V!==ne||K!==re)&&(n.polygonOffset(ne,re),V=ne,K=re)):he(n.POLYGON_OFFSET_FILL)}function Be(w){w?J(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Mt(w){w===void 0&&(w=n.TEXTURE0+X-1),se!==w&&(n.activeTexture(w),se=w)}function gt(w,ne,re){re===void 0&&(se===null?re=n.TEXTURE0+X-1:re=se);let ue=de[re];ue===void 0&&(ue={type:void 0,texture:void 0},de[re]=ue),(ue.type!==w||ue.texture!==ne)&&(se!==re&&(n.activeTexture(re),se=re),n.bindTexture(w,ne||q[w]),ue.type=w,ue.texture=ne)}function E(){const w=de[se];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{n.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{n.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{n.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{n.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{n.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{n.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(w){nt.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),nt.copy(w))}function Re(w){at.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),at.copy(w))}function xe(w,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let ue=re.get(w);ue===void 0&&(ue=n.getUniformBlockIndex(ne,w.name),re.set(w,ue))}function oe(w,ne){const ue=c.get(ne).get(w);l.get(ne)!==ue&&(n.uniformBlockBinding(ne,ue,w.__bindingPointIndex),l.set(ne,ue))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},se=null,de={},f={},h=new WeakMap,m=[],g=null,b=!1,p=null,u=null,T=null,M=null,x=null,C=null,P=null,R=new We(0,0,0),N=0,y=!1,S=null,D=null,k=null,V=null,K=null,nt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:J,disable:he,bindFramebuffer:De,drawBuffers:ye,useProgram:Xe,setBlending:st,setMaterial:Fe,setFlipSided:Ce,setCullFace:ge,setLineWidth:ot,setPolygonOffset:_e,setScissorTest:Be,activeTexture:Mt,bindTexture:gt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:be,texImage3D:te,updateUBOMapping:xe,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:ve,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:le,viewport:Re,reset:Ne}}function $g(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):ka("canvas")}function b(E,_,F){let W=1;const Z=gt(E);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const H=Math.floor(W*Z.width),Se=Math.floor(W*Z.height);f===void 0&&(f=g(H,Se));const ie=_?g(H,Se):f;return ie.width=H,ie.height=Se,ie.getContext("2d").drawImage(E,0,0,H,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+Se+")."),ie}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,F,W,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=_;if(_===n.RED&&(F===n.FLOAT&&(H=n.R32F),F===n.HALF_FLOAT&&(H=n.R16F),F===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.R8UI),F===n.UNSIGNED_SHORT&&(H=n.R16UI),F===n.UNSIGNED_INT&&(H=n.R32UI),F===n.BYTE&&(H=n.R8I),F===n.SHORT&&(H=n.R16I),F===n.INT&&(H=n.R32I)),_===n.RG&&(F===n.FLOAT&&(H=n.RG32F),F===n.HALF_FLOAT&&(H=n.RG16F),F===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RG8UI),F===n.UNSIGNED_SHORT&&(H=n.RG16UI),F===n.UNSIGNED_INT&&(H=n.RG32UI),F===n.BYTE&&(H=n.RG8I),F===n.SHORT&&(H=n.RG16I),F===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGB8UI),F===n.UNSIGNED_SHORT&&(H=n.RGB16UI),F===n.UNSIGNED_INT&&(H=n.RGB32UI),F===n.BYTE&&(H=n.RGB8I),F===n.SHORT&&(H=n.RGB16I),F===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),F===n.UNSIGNED_INT&&(H=n.RGBA32UI),F===n.BYTE&&(H=n.RGBA8I),F===n.SHORT&&(H=n.RGBA16I),F===n.INT&&(H=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),_===n.RGBA){const Se=Z?Oa:Ye.getTransfer(W);F===n.FLOAT&&(H=n.RGBA32F),F===n.HALF_FLOAT&&(H=n.RGBA16F),F===n.UNSIGNED_BYTE&&(H=Se===Qe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(E,_){let F;return E?_===null||_===Mi||_===Cr?F=n.DEPTH24_STENCIL8:_===Nn?F=n.DEPTH32F_STENCIL8:_===Rr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mi||_===Cr?F=n.DEPTH_COMPONENT24:_===Nn?F=n.DEPTH_COMPONENT32F:_===Rr&&(F=n.DEPTH_COMPONENT16),F}function C(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){const _=E.target;_.removeEventListener("dispose",P),N(_),_.isVideoTexture&&d.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),S(_)}function N(E){const _=i.get(E);if(_.__webglInit===void 0)return;const F=E.source,W=h.get(F);if(W){const Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(E),Object.keys(W).length===0&&h.delete(F)}i.remove(E)}function y(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const F=E.source,W=h.get(F);delete W[_.__cacheKey],s.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let W=0,Z=F.length;W<Z;W++){const H=i.get(F[W]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),s.memory.textures--),i.remove(F[W])}i.remove(E)}let D=0;function k(){D=0}function V(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function K(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){const F=i.get(E);if(E.isVideoTexture&&Be(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function Y(E,_){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function j(E,_){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function z(E,_){const F=i.get(E);if(E.version>0&&F.__version!==E.version){J(F,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const se={[no]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},de={[dn]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[ls]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},Me={[Xf]:n.NEVER,[jf]:n.ALWAYS,[qf]:n.LESS,[fd]:n.LEQUAL,[Yf]:n.EQUAL,[Zf]:n.GEQUAL,[$f]:n.GREATER,[Kf]:n.NOTEQUAL};function He(E,_){if(_.type===Nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===ls||_.magFilter===ta||_.magFilter===xi||_.minFilter===yn||_.minFilter===ls||_.minFilter===ta||_.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,se[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,se[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,se[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==ta&&_.minFilter!==xi||_.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function nt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));const W=_.source;let Z=h.get(W);Z===void 0&&(Z={},h.set(W,Z));const H=K(_);if(H!==E.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Z[H].usedTimes++;const Se=Z[E.__cacheKey];Se!==void 0&&(Z[E.__cacheKey].usedTimes--,Se.usedTimes===0&&y(_)),E.__cacheKey=H,E.__webglTexture=Z[H].texture}return F}function at(E,_,F){return Math.floor(Math.floor(E/F)/_)}function $e(E,_,F,W){const H=E.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,W,_.data);else{H.sort((te,le)=>te.start-le.start);let Se=0;for(let te=1;te<H.length;te++){const le=H[Se],Re=H[te],xe=le.start+le.count,oe=at(Re.start,_.width,4),Ne=at(le.start,_.width,4);Re.start<=xe+1&&oe===Ne&&at(Re.start+Re.count-1,_.width,4)===oe?le.count=Math.max(le.count,Re.start+Re.count-le.start):(++Se,H[Se]=Re)}H.length=Se+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let te=0,le=H.length;te<le;te++){const Re=H[te],xe=Math.floor(Re.start/4),oe=Math.ceil(Re.count/4),Ne=xe%_.width,w=Math.floor(xe/_.width),ne=oe,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,w),t.texSubImage2D(n.TEXTURE_2D,0,Ne,w,ne,re,F,W,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function q(E,_,F){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const Z=nt(E,_),H=_.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+F);const Se=i.get(H);if(H.version!==Se.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const ie=Ye.getPrimaries(Ye.workingColorSpace),ve=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),be=_.colorSpace===jn||ie===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=b(_.image,!1,r.maxTextureSize);te=Mt(_,te);const le=a.convert(_.format,_.colorSpace),Re=a.convert(_.type);let xe=M(_.internalFormat,le,Re,_.colorSpace,_.isVideoTexture);He(W,_);let oe;const Ne=_.mipmaps,w=_.isVideoTexture!==!0,ne=Se.__version===void 0||Z===!0,re=H.dataReady,ue=C(_,te);if(_.isDepthTexture)xe=x(_.format===Dr,_.type),ne&&(w?t.texStorage2D(n.TEXTURE_2D,1,xe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,le,Re,null));else if(_.isDataTexture)if(Ne.length>0){w&&ne&&t.texStorage2D(n.TEXTURE_2D,ue,xe,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],w?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,Re,oe.data):t.texImage2D(n.TEXTURE_2D,Q,xe,oe.width,oe.height,0,le,Re,oe.data);_.generateMipmaps=!1}else w?(ne&&t.texStorage2D(n.TEXTURE_2D,ue,xe,te.width,te.height),re&&$e(_,te,le,Re)):t.texImage2D(n.TEXTURE_2D,0,xe,te.width,te.height,0,le,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){w&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,xe,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,$=Ne.length;Q<$;Q++)if(oe=Ne[Q],_.format!==on)if(le!==null)if(w){if(re)if(_.layerUpdates.size>0){const me=ol(oe.width,oe.height,_.format,_.type);for(const Ie of _.layerUpdates){const it=oe.data.subarray(Ie*me/oe.data.BYTES_PER_ELEMENT,(Ie+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ie,oe.width,oe.height,1,le,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,le,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,xe,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,le,Re,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,xe,oe.width,oe.height,te.depth,0,le,Re,oe.data)}else{w&&ne&&t.texStorage2D(n.TEXTURE_2D,ue,xe,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],_.format!==on?le!==null?w?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,oe.width,oe.height,le,Re,oe.data):t.texImage2D(n.TEXTURE_2D,Q,xe,oe.width,oe.height,0,le,Re,oe.data)}else if(_.isDataArrayTexture)if(w){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,xe,te.width,te.height,te.depth),re)if(_.layerUpdates.size>0){const Q=ol(te.width,te.height,_.format,_.type);for(const $ of _.layerUpdates){const me=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,le,Re,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,te.width,te.height,te.depth,0,le,Re,te.data);else if(_.isData3DTexture)w?(ne&&t.texStorage3D(n.TEXTURE_3D,ue,xe,te.width,te.height,te.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,xe,te.width,te.height,te.depth,0,le,Re,te.data);else if(_.isFramebufferTexture){if(ne)if(w)t.texStorage2D(n.TEXTURE_2D,ue,xe,te.width,te.height);else{let Q=te.width,$=te.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,xe,Q,$,0,le,Re,null),Q>>=1,$>>=1}}else if(Ne.length>0){if(w&&ne){const Q=gt(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ue,xe,Q.width,Q.height)}for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],w?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le,Re,oe):t.texImage2D(n.TEXTURE_2D,Q,xe,le,Re,oe);_.generateMipmaps=!1}else if(w){if(ne){const Q=gt(te);t.texStorage2D(n.TEXTURE_2D,ue,xe,Q.width,Q.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,xe,le,Re,te);p(_)&&u(W),Se.__version=H.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,F){if(_.image.length!==6)return;const W=nt(E,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const H=i.get(Z);if(Z.version!==H.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const Se=Ye.getPrimaries(Ye.workingColorSpace),ie=_.colorSpace===jn?null:Ye.getPrimaries(_.colorSpace),ve=_.colorSpace===jn||Se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!be&&!te?le[$]=b(_.image[$],!0,r.maxCubemapSize):le[$]=te?_.image[$].image:_.image[$],le[$]=Mt(_,le[$]);const Re=le[0],xe=a.convert(_.format,_.colorSpace),oe=a.convert(_.type),Ne=M(_.internalFormat,xe,oe,_.colorSpace),w=_.isVideoTexture!==!0,ne=H.__version===void 0||W===!0,re=Z.dataReady;let ue=C(_,Re);He(n.TEXTURE_CUBE_MAP,_);let Q;if(be){w&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ne,Re.width,Re.height);for(let $=0;$<6;$++){Q=le[$].mipmaps;for(let me=0;me<Q.length;me++){const Ie=Q[me];_.format!==on?xe!==null?w?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Ie.width,Ie.height,xe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Ie.width,Ie.height,xe,oe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,Ie.width,Ie.height,0,xe,oe,Ie.data)}}}else{if(Q=_.mipmaps,w&&ne){Q.length>0&&ue++;const $=gt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(te){w?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,xe,oe,le[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,le[$].width,le[$].height,0,xe,oe,le[$].data);for(let me=0;me<Q.length;me++){const it=Q[me].image[$].image;w?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,it.width,it.height,xe,oe,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,it.width,it.height,0,xe,oe,it.data)}}else{w?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,oe,le[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,xe,oe,le[$]);for(let me=0;me<Q.length;me++){const Ie=Q[me];w?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,xe,oe,Ie.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,xe,oe,Ie.image[$])}}}p(_)&&u(n.TEXTURE_CUBE_MAP),H.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function he(E,_,F,W,Z,H){const Se=a.convert(F.format,F.colorSpace),ie=a.convert(F.type),ve=M(F.internalFormat,Se,ie,F.colorSpace),be=i.get(_),te=i.get(F);if(te.__renderTarget=_,!be.__hasExternalTextures){const le=Math.max(1,_.width>>H),Re=Math.max(1,_.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,ve,le,Re,_.depth,0,Se,ie,null):t.texImage2D(Z,H,ve,le,Re,0,Se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),_e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,te.__webglTexture,0,ot(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,te.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(E,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,H=x(_.stencilBuffer,Z),Se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ot(_);_e(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,H,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,E)}else{const W=_.textures;for(let Z=0;Z<W.length;Z++){const H=W[Z],Se=a.convert(H.format,H.colorSpace),ie=a.convert(H.type),ve=M(H.internalFormat,Se,ie,H.colorSpace),be=ot(_);F&&_e(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ve,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ve,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ve,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Z=W.__webglTexture,H=ot(_);if(_.depthTexture.format===Pr)_e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Dr)_e(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(E){const _=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=E.texture.mipmaps;W&&W.length>0?ye(_.__webglFramebuffer[0],E):ye(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),De(_.__webglDepthbuffer[W],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(E,_,F){const W=i.get(E);_!==void 0&&he(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(E)}function A(E){const _=E.texture,F=i.get(E),W=i.get(_);E.addEventListener("dispose",R);const Z=E.textures,H=E.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,s.memory.textures++),H){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[ie][ve]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ie=0,ve=Z.length;ie<ve;ie++){const be=i.get(Z[ie]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&_e(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const ve=Z[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const be=a.convert(ve.format,ve.colorSpace),te=a.convert(ve.type),le=M(ve.internalFormat,be,te,ve.colorSpace,E.isXRRenderTarget===!0),Re=ot(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,le,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),De(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)he(F.__webglFramebuffer[ie][ve],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else he(F.__webglFramebuffer[ie],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,ve=Z.length;ie<ve;ie++){const be=Z[ie],te=i.get(be);let le=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),He(le,be),he(F.__webglFramebuffer,E,be,n.COLOR_ATTACHMENT0+ie,le,0),p(be)&&u(le)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,W.__webglTexture),He(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)he(F.__webglFramebuffer[ve],E,_,n.COLOR_ATTACHMENT0,ie,ve);else he(F.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ie,0);p(_)&&u(ie),t.unbindTexture()}E.depthBuffer&&Xe(E)}function st(E){const _=E.textures;for(let F=0,W=_.length;F<W;F++){const Z=_[F];if(p(Z)){const H=T(E),Se=i.get(Z).__webglTexture;t.bindTexture(H,Se),u(H),t.unbindTexture()}}}const Fe=[],Ce=[];function ge(E){if(E.samples>0){if(_e(E)===!1){const _=E.textures,F=E.width,W=E.height;let Z=n.COLOR_BUFFER_BIT;const H=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(E),ie=_.length>1;if(ie)for(let be=0;be<_.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ve=E.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let be=0;be<_.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);const te=i.get(_[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,Z,n.NEAREST),l===!0&&(Fe.length=0,Ce.length=0,Fe.push(n.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Fe.push(H),Ce.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let be=0;be<_.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);const te=i.get(_[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ot(E){return Math.min(r.maxSamples,E.samples)}function _e(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(E){const _=s.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Mt(E,_){const F=E.colorSpace,W=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==tr&&F!==jn&&(Ye.getTransfer(F)===Qe?(W!==on||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Rt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e}function Kg(n,e){function t(i,r=jn){let a;const s=Ye.getTransfer(r);if(i===En)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nd)return n.BYTE;if(i===id)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Vo)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Vr)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===od)return n.RGB;if(i===on)return n.RGBA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===cd)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===ld)return n.RG;if(i===Yo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===Da||i===La||i===Ia||i===Ua)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ro||i===ao||i===so||i===oo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ro)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===so)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===co||i===lo||i===fo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===co||i===lo)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===fo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uo||i===ho||i===po||i===mo||i===go||i===_o||i===vo||i===bo||i===xo||i===So||i===yo||i===Mo||i===Eo||i===To)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===uo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===po)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===go)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===So)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===wo||i===Ro)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ao)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Co||i===Po||i===Do||i===Lo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Co)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Po)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:Zg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qg extends or{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,g=null;const b=typeof XRWebGLBinding<"u",p=new Jg,u={},T=t.getContextAttributes();let M=null,x=null;const C=[],P=[],R=new ze;let N=null;const y=new Qt;y.viewport=new ht;const S=new Qt;S.viewport=new ht;const D=[y,S],k=new bh;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=C[q];return J===void 0&&(J=new Ps,C[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=C[q];return J===void 0&&(J=new Ps,C[q]=J),J.getGripSpace()},this.getHand=function(q){let J=C[q];return J===void 0&&(J=new Ps,C[q]=J),J.getHandSpace()};function X(q){const J=P.indexOf(q.inputSource);if(J===-1)return;const he=C[J];he!==void 0&&(he.update(q.inputSource,q.frame,c||s),he.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let q=0;q<C.length;q++){const J=P[q];J!==null&&(P[q]=null,C[q].disconnect(J))}V=null,K=null,p.reset();for(const q in u)delete u[q];e.setRenderTarget(M),m=null,h=null,f=null,r=null,x=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,De=null,ye=null;T.depth&&(ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=T.stencil?Dr:Pr,De=T.stencil?Cr:Mi);const Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};f=this.getBinding(),h=f.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ei(h.textureWidth,h.textureHeight,{format:on,type:En,depthTexture:new Td(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ei(m.framebufferWidth,m.framebufferHeight,{format:on,type:En,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(q){for(let J=0;J<q.removed.length;J++){const he=q.removed[J],De=P.indexOf(he);De>=0&&(P[De]=null,C[De].disconnect(he))}for(let J=0;J<q.added.length;J++){const he=q.added[J];let De=P.indexOf(he);if(De===-1){for(let Xe=0;Xe<C.length;Xe++)if(Xe>=P.length){P.push(he),De=Xe;break}else if(P[Xe]===null){P[Xe]=he,De=Xe;break}if(De===-1)break}const ye=C[De];ye&&ye.connect(he)}}const z=new U,se=new U;function de(q,J,he){z.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(he.matrixWorld);const De=z.distanceTo(se),ye=J.projectionMatrix.elements,Xe=he.projectionMatrix.elements,Rt=ye[14]/(ye[10]-1),A=ye[14]/(ye[10]+1),st=(ye[9]+1)/ye[5],Fe=(ye[9]-1)/ye[5],Ce=(ye[8]-1)/ye[0],ge=(Xe[8]+1)/Xe[0],ot=Rt*Ce,_e=Rt*ge,Be=De/(-Ce+ge),Mt=Be*-Ce;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const gt=Rt+Be,E=A+Be,_=ot-Mt,F=_e+(De-Mt),W=st*A/E*gt,Z=Fe*A/E*gt;q.projectionMatrix.makePerspective(_,F,W,Z,gt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Me(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,he=q.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(he=p.depthFar)),k.near=S.near=y.near=J,k.far=S.far=y.far=he,(V!==k.near||K!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,K=k.far),k.layers.mask=q.layers.mask|6,y.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;const De=q.parent,ye=k.cameras;Me(k,De);for(let Xe=0;Xe<ye.length;Xe++)Me(ye[Xe],De);ye.length===2?de(k,y,S):k.projectionMatrix.copy(y.projectionMatrix),He(q,k,De)};function He(q,J,he){he===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return u[q]};let nt=null;function at(q,J){if(d=J.getViewerPose(c||s),g=J,d!==null){const he=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let De=!1;he.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let A=0;A<he.length;A++){const st=he[A];let Fe=null;if(m!==null)Fe=m.getViewport(st);else{const ge=f.getViewSubImage(h,st);Fe=ge.viewport,A===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let Ce=D[A];Ce===void 0&&(Ce=new Qt,Ce.layers.enable(A),Ce.viewport=new ht,D[A]=Ce),Ce.matrix.fromArray(st.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(st.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),A===0&&(k.matrix.copy(Ce.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(Ce)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const A=f.getDepthInformation(he[0]);A&&A.isValid&&A.texture&&p.init(A,r.renderState)}if(ye&&ye.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let A=0;A<he.length;A++){const st=he[A].camera;if(st){let Fe=u[st];Fe||(Fe=new Ad,u[st]=Fe);const Ce=f.getCameraImage(st);Fe.sourceTexture=Ce}}}}for(let he=0;he<C.length;he++){const De=P[he],ye=C[he];De!==null&&ye!==void 0&&ye.update(De,J,c||s)}nt&&nt(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const $e=new Ud;$e.setAnimationLoop(at),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const mi=new Tn,e_=new ct;function t_(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,bd(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,M,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),f(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(a(p,u),g(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),b(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,T,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===wt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===wt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u),M=T.envMap,x=T.envMapRotation;M&&(p.envMap.value=M,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(mi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,T,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function b(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function n_(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const x=M.program;i.uniformBlockBinding(T,x)}function c(T,M){let x=r[T.id];x===void 0&&(g(T),x=d(T),r[T.id]=x,T.addEventListener("dispose",p));const C=M.program;i.updateUBOMapping(T,C);const P=e.render.frame;a[T.id]!==P&&(h(T),a[T.id]=P)}function d(T){const M=f();T.__bindingPointIndex=M;const x=n.createBuffer(),C=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function f(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=r[T.id],x=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,R=x.length;P<R;P++){const N=Array.isArray(x[P])?x[P]:[x[P]];for(let y=0,S=N.length;y<S;y++){const D=N[y];if(m(D,P,y,C)===!0){const k=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let X=0;X<V.length;X++){const Y=V[X],j=b(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,k+K,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,M,x,C){const P=T.value,R=M+"_"+x;if(C[R]===void 0)return typeof P=="number"||typeof P=="boolean"?C[R]=P:C[R]=P.clone(),!0;{const N=C[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(T){const M=T.uniforms;let x=0;const C=16;for(let R=0,N=M.length;R<N;R++){const y=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,D=y.length;S<D;S++){const k=y[S],V=Array.isArray(k.value)?k.value:[k.value];for(let K=0,X=V.length;K<X;K++){const Y=V[K],j=b(Y),z=x%C,se=z%j.boundary,de=z+se;x+=se,de!==0&&C-de<j.storage&&(x+=C-de),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=j.storage}}}const P=x%C;return P>0&&(x+=C-P),T.__size=x,T.__cache={},this}function b(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const x=s.indexOf(M.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);s=[],r={},a={}}return{bind:l,update:c,dispose:u}}class i_{constructor(e={}){const{canvas:t=pu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),b=new Int32Array(4);let p=null,u=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Ht;let P=0,R=0,N=null,y=-1,S=null;const D=new ht,k=new ht;let V=null;const K=new We(0);let X=0,Y=t.width,j=t.height,z=1,se=null,de=null;const Me=new ht(0,0,Y,j),He=new ht(0,0,Y,j);let nt=!1;const at=new Qo;let $e=!1,q=!1;const J=new ct,he=new U,De=new ht,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Rt(){return N===null?z:1}let A=i;function st(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Q,!1),A===null){const L="webgl2";if(A=st(L,v),A===null)throw st(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Fe,Ce,ge,ot,_e,Be,Mt,gt,E,_,F,W,Z,H,Se,ie,ve,be,te,le,Re,xe,oe,Ne;function w(){Fe=new h0(A),Fe.init(),xe=new Kg(A,Fe),Ce=new s0(A,Fe,e,xe),ge=new Yg(A,Fe),Ce.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),ot=new g0(A),_e=new Ug,Be=new $g(A,Fe,ge,_e,Ce,xe,ot),Mt=new c0(x),gt=new u0(x),E=new yh(A),oe=new r0(A,E),_=new p0(A,E,ot,oe),F=new v0(A,_,E,ot),te=new _0(A,Ce,Be),ie=new o0(_e),W=new Ig(x,Mt,gt,Fe,Ce,oe,ie),Z=new t_(x,_e),H=new Ng,Se=new Gg(Fe),be=new i0(x,Mt,gt,ge,F,m,l),ve=new Xg(x,F,Ce),Ne=new n_(A,ot,Ce,ge),le=new a0(A,Fe,ot),Re=new m0(A,Fe,ot),ot.programs=W.programs,x.capabilities=Ce,x.extensions=Fe,x.properties=_e,x.renderLists=H,x.shadowMap=ve,x.state=ge,x.info=ot}w();const ne=new Qg(x,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Fe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Fe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(Y,j,!1))},this.getSize=function(v){return v.set(Y,j)},this.setSize=function(v,L,O=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,j=L,t.width=Math.floor(v*z),t.height=Math.floor(L*z),O===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Y*z,j*z).floor()},this.setDrawingBufferSize=function(v,L,O){Y=v,j=L,z=O,t.width=Math.floor(v*O),t.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,L,O,B){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,L,O,B),ge.viewport(D.copy(Me).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(He)},this.setScissor=function(v,L,O,B){v.isVector4?He.set(v.x,v.y,v.z,v.w):He.set(v,L,O,B),ge.scissor(k.copy(He).multiplyScalar(z).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(v){ge.setScissorTest(nt=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,O=!0){let B=0;if(v){let I=!1;if(N!==null){const ee=N.texture.format;I=ee===$o||ee===Yo||ee===qo}if(I){const ee=N.texture.type,ce=ee===En||ee===Mi||ee===Rr||ee===Cr||ee===Wo||ee===Xo,pe=be.getClearColor(),fe=be.getClearAlpha(),we=pe.r,Pe=pe.g,Ee=pe.b;ce?(g[0]=we,g[1]=Pe,g[2]=Ee,g[3]=fe,A.clearBufferuiv(A.COLOR,0,g)):(b[0]=we,b[1]=Pe,b[2]=Ee,b[3]=fe,A.clearBufferiv(A.COLOR,0,b))}else B|=A.COLOR_BUFFER_BIT}L&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),be.dispose(),H.dispose(),Se.dispose(),_e.dispose(),Mt.dispose(),gt.dispose(),F.dispose(),oe.dispose(),Ne.dispose(),W.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",mn),ne.removeEventListener("sessionend",vc),ci.stop()};function re(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ot.autoReset,L=ve.enabled,O=ve.autoUpdate,B=ve.needsUpdate,I=ve.type;w(),ot.autoReset=v,ve.enabled=L,ve.autoUpdate=O,ve.needsUpdate=B,ve.type=I}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){const L=v.target;L.removeEventListener("dispose",$),me(L)}function me(v){Ie(v),_e.remove(v)}function Ie(v){const L=_e.get(v).programs;L!==void 0&&(L.forEach(function(O){W.releaseProgram(O)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,B,I,ee){L===null&&(L=ye);const ce=I.isMesh&&I.matrixWorld.determinant()<0,pe=of(v,L,O,B,I);ge.setMaterial(B,ce);let fe=O.index,we=1;if(B.wireframe===!0){if(fe=_.getWireframeAttribute(O),fe===void 0)return;we=2}const Pe=O.drawRange,Ee=O.attributes.position;let Ge=Pe.start*we,Je=(Pe.start+Pe.count)*we;ee!==null&&(Ge=Math.max(Ge,ee.start*we),Je=Math.min(Je,(ee.start+ee.count)*we)),fe!==null?(Ge=Math.max(Ge,0),Je=Math.min(Je,fe.count)):Ee!=null&&(Ge=Math.max(Ge,0),Je=Math.min(Je,Ee.count));const ut=Je-Ge;if(ut<0||ut===1/0)return;oe.setup(I,B,pe,O,fe);let rt,tt=le;if(fe!==null&&(rt=E.get(fe),tt=Re,tt.setIndex(rt)),I.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Rt()),tt.setMode(A.LINES)):tt.setMode(A.TRIANGLES);else if(I.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*Rt()),I.isLineSegments?tt.setMode(A.LINES):I.isLineLoop?tt.setMode(A.LINE_LOOP):tt.setMode(A.LINE_STRIP)}else I.isPoints?tt.setMode(A.POINTS):I.isSprite&&tt.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))tt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ae=I._multiDrawStarts,lt=I._multiDrawCounts,qe=I._multiDrawCount,Xt=fe?E.get(fe).bytesPerElement:1,Pi=_e.get(B).currentProgram.getUniforms();for(let qt=0;qt<qe;qt++)Pi.setValue(A,"_gl_DrawID",qt),tt.render(Ae[qt]/Xt,lt[qt])}else if(I.isInstancedMesh)tt.renderInstances(Ge,ut,I.count);else if(O.isInstancedBufferGeometry){const Ae=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,lt=Math.min(O.instanceCount,Ae);tt.renderInstances(Ge,ut,lt)}else tt.render(Ge,ut)};function it(v,L,O){v.transparent===!0&&v.side===vn&&v.forceSinglePass===!1?(v.side=wt,v.needsUpdate=!0,ea(v,L,O),v.side=ln,v.needsUpdate=!0,ea(v,L,O),v.side=vn):ea(v,L,O)}this.compile=function(v,L,O=null){O===null&&(O=v),u=Se.get(O),u.init(L),M.push(u),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),v!==O&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const B=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const pe=ee[ce];it(pe,O,I),B.add(pe)}else it(ee,O,I),B.add(ee)}),u=M.pop(),B},this.compileAsync=function(v,L,O=null){const B=this.compile(v,L,O);return new Promise(I=>{function ee(){if(B.forEach(function(ce){_e.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){I(v);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ke=null;function Rn(v){Ke&&Ke(v)}function mn(){ci.stop()}function vc(){ci.start()}const ci=new Ud;ci.setAnimationLoop(Rn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(v){Ke=v,ne.setAnimationLoop(v),v===null?ci.stop():ci.start()},ne.addEventListener("sessionstart",mn),ne.addEventListener("sessionend",vc),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(L),L=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,L,N),u=Se.get(v,M.length),u.init(L),M.push(u),J.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),at.setFromProjectionMatrix(J,Mn,L.reversedDepth),q=this.localClippingEnabled,$e=ie.init(this.clippingPlanes,q),p=H.get(v,T.length),p.init(),T.push(p),ne.enabled===!0&&ne.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&os(ee,L,-1/0,x.sortObjects)}os(v,L,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(se,de),Xe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Xe&&be.addToRenderList(p,v),this.info.render.frame++,$e===!0&&ie.beginShadows();const O=u.state.shadowsArray;ve.render(O,v,L),$e===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,I=p.transmissive;if(u.setupLights(),L.isArrayCamera){const ee=L.cameras;if(I.length>0)for(let ce=0,pe=ee.length;ce<pe;ce++){const fe=ee[ce];xc(B,I,v,fe)}Xe&&be.render(v);for(let ce=0,pe=ee.length;ce<pe;ce++){const fe=ee[ce];bc(p,v,fe,fe.viewport)}}else I.length>0&&xc(B,I,v,L),Xe&&be.render(v),bc(p,v,L);N!==null&&R===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(x,v,L),oe.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(u=M[M.length-1],$e===!0&&ie.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function os(v,L,O,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||at.intersectsSprite(v)){B&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);const ce=F.update(v),pe=v.material;pe.visible&&p.push(v,ce,pe,O,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||at.intersectsObject(v))){const ce=F.update(v),pe=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(pe)){const fe=ce.groups;for(let we=0,Pe=fe.length;we<Pe;we++){const Ee=fe[we],Ge=pe[Ee.materialIndex];Ge&&Ge.visible&&p.push(v,ce,Ge,O,De.z,Ee)}}else pe.visible&&p.push(v,ce,pe,O,De.z,null)}}const ee=v.children;for(let ce=0,pe=ee.length;ce<pe;ce++)os(ee[ce],L,O,B)}function bc(v,L,O,B){const I=v.opaque,ee=v.transmissive,ce=v.transparent;u.setupLightsView(O),$e===!0&&ie.setGlobalState(x.clippingPlanes,O),B&&ge.viewport(D.copy(B)),I.length>0&&Qr(I,L,O),ee.length>0&&Qr(ee,L,O),ce.length>0&&Qr(ce,L,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function xc(v,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Ei(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Vr:En,minFilter:xi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ee=u.state.transmissionRenderTarget[B.id],ce=B.viewport||D;ee.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),fe=x.getActiveCubeFace(),we=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(K),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&be.render(O);const Pe=x.toneMapping;x.toneMapping=ei;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),$e===!0&&ie.setGlobalState(x.clippingPlanes,B),Qr(v,O,B),Be.updateMultisampleRenderTarget(ee),Be.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Je=0,ut=L.length;Je<ut;Je++){const rt=L[Je],tt=rt.object,Ae=rt.geometry,lt=rt.material,qe=rt.group;if(lt.side===vn&&tt.layers.test(B.layers)){const Xt=lt.side;lt.side=wt,lt.needsUpdate=!0,Sc(tt,O,B,Ae,lt,qe),lt.side=Xt,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Be.updateMultisampleRenderTarget(ee),Be.updateRenderTargetMipmap(ee))}x.setRenderTarget(pe,fe,we),x.setClearColor(K,X),Ee!==void 0&&(B.viewport=Ee),x.toneMapping=Pe}function Qr(v,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ee=v.length;I<ee;I++){const ce=v[I],pe=ce.object,fe=ce.geometry,we=ce.group;let Pe=ce.material;Pe.allowOverride===!0&&B!==null&&(Pe=B),pe.layers.test(O.layers)&&Sc(pe,L,O,fe,Pe,we)}}function Sc(v,L,O,B,I,ee){v.onBeforeRender(x,L,O,B,I,ee),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(x,L,O,B,v,ee),I.transparent===!0&&I.side===vn&&I.forceSinglePass===!1?(I.side=wt,I.needsUpdate=!0,x.renderBufferDirect(O,L,B,I,v,ee),I.side=ln,I.needsUpdate=!0,x.renderBufferDirect(O,L,B,I,v,ee),I.side=vn):x.renderBufferDirect(O,L,B,I,v,ee),v.onAfterRender(x,L,O,B,I,ee)}function ea(v,L,O){L.isScene!==!0&&(L=ye);const B=_e.get(v),I=u.state.lights,ee=u.state.shadowsArray,ce=I.state.version,pe=W.getParameters(v,I.state,ee,L,O),fe=W.getProgramCacheKey(pe);let we=B.programs;B.environment=v.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(v.isMeshStandardMaterial?gt:Mt).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",$),we=new Map,B.programs=we);let Pe=we.get(fe);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===ce)return Mc(v,pe),Pe}else pe.uniforms=W.getUniforms(v),v.onBeforeCompile(pe,x),Pe=W.acquireProgram(pe,fe),we.set(fe,Pe),B.uniforms=pe.uniforms;const Ee=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Mc(v,pe),B.needsLights=lf(v),B.lightsStateVersion=ce,B.needsLights&&(Ee.ambientLightColor.value=I.state.ambient,Ee.lightProbe.value=I.state.probe,Ee.directionalLights.value=I.state.directional,Ee.directionalLightShadows.value=I.state.directionalShadow,Ee.spotLights.value=I.state.spot,Ee.spotLightShadows.value=I.state.spotShadow,Ee.rectAreaLights.value=I.state.rectArea,Ee.ltc_1.value=I.state.rectAreaLTC1,Ee.ltc_2.value=I.state.rectAreaLTC2,Ee.pointLights.value=I.state.point,Ee.pointLightShadows.value=I.state.pointShadow,Ee.hemisphereLights.value=I.state.hemi,Ee.directionalShadowMap.value=I.state.directionalShadowMap,Ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ee.spotShadowMap.value=I.state.spotShadowMap,Ee.spotLightMatrix.value=I.state.spotLightMatrix,Ee.spotLightMap.value=I.state.spotLightMap,Ee.pointShadowMap.value=I.state.pointShadowMap,Ee.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function yc(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Fa.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Mc(v,L){const O=_e.get(v);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function of(v,L,O,B,I){L.isScene!==!0&&(L=ye),Be.resetTextureUnits();const ee=L.fog,ce=B.isMeshStandardMaterial?L.environment:null,pe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tr,fe=(B.isMeshStandardMaterial?gt:Mt).get(B.envMap||ce),we=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!O.morphAttributes.position,Ge=!!O.morphAttributes.normal,Je=!!O.morphAttributes.color;let ut=ei;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ut=x.toneMapping);const rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=rt!==void 0?rt.length:0,Ae=_e.get(B),lt=u.state.lights;if($e===!0&&(q===!0||v!==S)){const It=v===S&&B.id===y;ie.setState(B,v,It)}let qe=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==pe||I.isBatchedMesh&&Ae.batching===!1||!I.isBatchedMesh&&Ae.batching===!0||I.isBatchedMesh&&Ae.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ae.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ae.instancing===!1||!I.isInstancedMesh&&Ae.instancing===!0||I.isSkinnedMesh&&Ae.skinning===!1||!I.isSkinnedMesh&&Ae.skinning===!0||I.isInstancedMesh&&Ae.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ae.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ae.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ae.instancingMorph===!1&&I.morphTexture!==null||Ae.envMap!==fe||B.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Pe||Ae.morphTargets!==Ee||Ae.morphNormals!==Ge||Ae.morphColors!==Je||Ae.toneMapping!==ut||Ae.morphTargetsCount!==tt)&&(qe=!0):(qe=!0,Ae.__version=B.version);let Xt=Ae.currentProgram;qe===!0&&(Xt=ea(B,L,I));let Pi=!1,qt=!1,hr=!1;const dt=Xt.getUniforms(),Zt=Ae.uniforms;if(ge.useProgram(Xt.program)&&(Pi=!0,qt=!0,hr=!0),B.id!==y&&(y=B.id,qt=!0),Pi||S!==v){ge.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",v.projectionMatrix),dt.setValue(A,"viewMatrix",v.matrixWorldInverse);const kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(A,he.setFromMatrixPosition(v.matrixWorld)),Ce.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,qt=!0,hr=!0)}if(I.isSkinnedMesh){dt.setOptional(A,I,"bindMatrix"),dt.setOptional(A,I,"bindMatrixInverse");const It=I.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(A,"boneTexture",It.boneTexture,Be))}I.isBatchedMesh&&(dt.setOptional(A,I,"batchingTexture"),dt.setValue(A,"batchingTexture",I._matricesTexture,Be),dt.setOptional(A,I,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",I._indirectTexture,Be),dt.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",I._colorsTexture,Be));const jt=O.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&te.update(I,O,Xt),(qt||Ae.receiveShadow!==I.receiveShadow)&&(Ae.receiveShadow=I.receiveShadow,dt.setValue(A,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Zt.envMap.value=fe,Zt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Zt.envMapIntensity.value=L.environmentIntensity),qt&&(dt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&cf(Zt,hr),ee&&B.fog===!0&&Z.refreshFogUniforms(Zt,ee),Z.refreshMaterialUniforms(Zt,B,z,j,u.state.transmissionRenderTarget[v.id]),Fa.upload(A,yc(Ae),Zt,Be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fa.upload(A,yc(Ae),Zt,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(A,"center",I.center),dt.setValue(A,"modelViewMatrix",I.modelViewMatrix),dt.setValue(A,"normalMatrix",I.normalMatrix),dt.setValue(A,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const It=B.uniformsGroups;for(let kt=0,cs=It.length;kt<cs;kt++){const li=It[kt];Ne.update(li,Xt),Ne.bind(li,Xt)}}return Xt}function cf(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function lf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,O){const B=_e.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(v.texture).__webglTexture=L,_e.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const O=_e.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const df=A.createFramebuffer();this.setRenderTarget=function(v,L=0,O=0){N=v,P=L,R=O;let B=!0,I=null,ee=!1,ce=!1;if(v){const fe=_e.get(v);if(fe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(v);else if(fe.__hasExternalTextures)Be.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(fe.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(v)}}const we=v.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ce=!0);const Pe=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?I=Pe[L][O]:I=Pe[L],ee=!0):v.samples>0&&Be.useMultisampledRTT(v)===!1?I=_e.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[O]:I=Pe,D.copy(v.viewport),k.copy(v.scissor),V=v.scissorTest}else D.copy(Me).multiplyScalar(z).floor(),k.copy(He).multiplyScalar(z).floor(),V=nt;if(O!==0&&(I=df),ge.bindFramebuffer(A.FRAMEBUFFER,I)&&B&&ge.drawBuffers(v,I),ge.viewport(D),ge.scissor(k),ge.setScissorTest(V),ee){const fe=_e.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,fe.__webglTexture,O)}else if(ce){const fe=L;for(let we=0;we<v.textures.length;we++){const Pe=_e.get(v.textures[we]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+we,Pe.__webglTexture,O,fe)}}else if(v!==null&&O!==0){const fe=_e.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(v,L,O,B,I,ee,ce,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){ge.bindFramebuffer(A.FRAMEBUFFER,fe);try{const we=v.textures[pe],Pe=we.format,Ee=we.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&O>=0&&O<=v.height-I&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(L,O,B,I,xe.convert(Pe),xe.convert(Ee),ee))}finally{const we=N!==null?_e.get(N).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,L,O,B,I,ee,ce,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(L>=0&&L<=v.width-B&&O>=0&&O<=v.height-I){ge.bindFramebuffer(A.FRAMEBUFFER,fe);const we=v.textures[pe],Pe=we.format,Ee=we.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ge),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(L,O,B,I,xe.convert(Pe),xe.convert(Ee),0);const Je=N!==null?_e.get(N).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,Je);const ut=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await mu(A,ut,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ge),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(Ge),A.deleteSync(ut),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,O=0){const B=Math.pow(2,-O),I=Math.floor(v.image.width*B),ee=Math.floor(v.image.height*B),ce=L!==null?L.x:0,pe=L!==null?L.y:0;Be.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,ce,pe,I,ee),ge.unbindTexture()};const ff=A.createFramebuffer(),uf=A.createFramebuffer();this.copyTextureToTexture=function(v,L,O=null,B=null,I=0,ee=null){ee===null&&(I!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=I,I=0):ee=0);let ce,pe,fe,we,Pe,Ee,Ge,Je,ut;const rt=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(O!==null)ce=O.max.x-O.min.x,pe=O.max.y-O.min.y,fe=O.isBox3?O.max.z-O.min.z:1,we=O.min.x,Pe=O.min.y,Ee=O.isBox3?O.min.z:0;else{const jt=Math.pow(2,-I);ce=Math.floor(rt.width*jt),pe=Math.floor(rt.height*jt),v.isDataArrayTexture?fe=rt.depth:v.isData3DTexture?fe=Math.floor(rt.depth*jt):fe=1,we=0,Pe=0,Ee=0}B!==null?(Ge=B.x,Je=B.y,ut=B.z):(Ge=0,Je=0,ut=0);const tt=xe.convert(L.format),Ae=xe.convert(L.type);let lt;L.isData3DTexture?(Be.setTexture3D(L,0),lt=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Be.setTexture2DArray(L,0),lt=A.TEXTURE_2D_ARRAY):(Be.setTexture2D(L,0),lt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const qe=A.getParameter(A.UNPACK_ROW_LENGTH),Xt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Pi=A.getParameter(A.UNPACK_SKIP_PIXELS),qt=A.getParameter(A.UNPACK_SKIP_ROWS),hr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ee);const dt=v.isDataArrayTexture||v.isData3DTexture,Zt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const jt=_e.get(v),It=_e.get(L),kt=_e.get(jt.__renderTarget),cs=_e.get(It.__renderTarget);ge.bindFramebuffer(A.READ_FRAMEBUFFER,kt.__webglFramebuffer),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let li=0;li<fe;li++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(v).__webglTexture,I,Ee+li),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(L).__webglTexture,ee,ut+li)),A.blitFramebuffer(we,Pe,ce,pe,Ge,Je,ce,pe,A.DEPTH_BUFFER_BIT,A.NEAREST);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||_e.has(v)){const jt=_e.get(v),It=_e.get(L);ge.bindFramebuffer(A.READ_FRAMEBUFFER,ff),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,uf);for(let kt=0;kt<fe;kt++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jt.__webglTexture,I,Ee+kt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jt.__webglTexture,I),Zt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,ee,ut+kt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,It.__webglTexture,ee),I!==0?A.blitFramebuffer(we,Pe,ce,pe,Ge,Je,ce,pe,A.COLOR_BUFFER_BIT,A.NEAREST):Zt?A.copyTexSubImage3D(lt,ee,Ge,Je,ut+kt,we,Pe,ce,pe):A.copyTexSubImage2D(lt,ee,Ge,Je,we,Pe,ce,pe);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Zt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(lt,ee,Ge,Je,ut,ce,pe,fe,tt,Ae,rt.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(lt,ee,Ge,Je,ut,ce,pe,fe,tt,rt.data):A.texSubImage3D(lt,ee,Ge,Je,ut,ce,pe,fe,tt,Ae,rt):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,Ge,Je,ce,pe,tt,Ae,rt.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,Ge,Je,rt.width,rt.height,tt,rt.data):A.texSubImage2D(A.TEXTURE_2D,ee,Ge,Je,ce,pe,tt,Ae,rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Xt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pi),A.pixelStorei(A.UNPACK_SKIP_ROWS,qt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,hr),ee===0&&L.generateMipmaps&&A.generateMipmap(lt),ge.unbindTexture()},this.initRenderTarget=function(v){_e.get(v).__webglFramebuffer===void 0&&Be.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Be.setTextureCube(v,0):v.isData3DTexture?Be.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Be.setTexture2DArray(v,0):Be.setTexture2D(v,0),ge.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const ic=(n,e)=>{try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}},rc=(n,e)=>{try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return!1}},pt=1e-7,Ll=1e5,Hn=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]),Yr=n=>n.reduce((e,t,i)=>{const r=n[(i+1)%n.length];return e+t[0]*r[1]-r[0]*t[1]},0)/2,r_=n=>{const e=Yr(n);if(Math.abs(e)<pt)return n.reduce((r,a)=>[r[0]+a[0],r[1]+a[1]],[0,0]).map(r=>r/n.length);let t=0,i=0;for(let r=0;r<n.length;r+=1){const a=n[r],s=n[(r+1)%n.length],o=a[0]*s[1]-s[0]*a[1];t+=(a[0]+s[0])*o,i+=(a[1]+s[1])*o}return[t/(6*e),i/(6*e)]},a_=(n,e,t)=>{const i=Hn(t.a,t.b,n),r=Hn(t.a,t.b,e),a=i-r;if(Math.abs(a)<pt)return n;const s=i/a;return[n[0]+(e[0]-n[0])*s,n[1]+(e[1]-n[1])*s]},rr=(n,e,t)=>{const i=[];for(let r=0;r<n.length;r+=1){const a=n[r],s=n[(r+1)%n.length],o=Hn(e.a,e.b,a)*t>=-pt,l=Hn(e.a,e.b,s)*t>=-pt;o&&i.push(a),o!==l&&i.push(a_(a,s,e))}return i.filter((r,a)=>{const s=i[(a+i.length-1)%i.length];return!s||Math.hypot(r[0]-s[0],r[1]-s[1])>pt})},Ai=n=>n.length>=3&&Math.abs(Yr(n))>pt,s_=n=>{const e=n.rotation??0,t=([a,s])=>[n.position[0]+a*Math.cos(e)-s*Math.sin(e),n.position[1]+a*Math.sin(e)+s*Math.cos(e)];if(n.kind==="star")return[[...Array(10)].map((a,s)=>{const o=s%2?.15:.34,l=Math.PI/2+s*Math.PI/5;return t([Math.cos(l)*o,Math.sin(l)*o])})];const i=[[-.3,-.08],[.3,-.08],[.3,.08],[-.3,.08]],r=(a,s)=>{const o=s*Math.PI/4;return t([a[0]*Math.cos(o)-a[1]*Math.sin(o),a[0]*Math.sin(o)+a[1]*Math.cos(o)])};return[i.map(a=>r(a,1)),i.map(a=>r(a,-1))]},o_=(n,e)=>{const t=s_(n);return(n.kind==="star"?t[0].map((r,a)=>[n.position,r,t[0][(a+1)%t[0].length]]):t).map(r=>{for(let a=0;a<e.polygon.length;a+=1)r=rr(r,{a:e.polygon[a],b:e.polygon[(a+1)%e.polygon.length]},1);return r}).filter(Ai)},kd=n=>{const e=[1/0,1/0,-1/0,-1/0];for(const[t,i]of n)e[0]=Math.min(e[0],t),e[1]=Math.min(e[1],i),e[2]=Math.max(e[2],t),e[3]=Math.max(e[3],i);return e},c_=(n,e,t)=>{const i=kd(n);if(i[2]<=t[0]+pt||t[2]<=i[0]+pt||i[3]<=t[1]+pt||t[3]<=i[1]+pt)return[n];const r=[],a=Math.sign(Yr(e));for(let s=0;s<e.length&&Ai(n);s+=1){const o={a:e[s],b:e[(s+1)%e.length]},l=rr(n,o,-a);Ai(l)&&r.push(l),n=rr(n,o,a)}return r},zd=()=>[1,0,0,1,0,0],mt=(n,e)=>[n[0]*e[0]+n[2]*e[1]+n[4],n[1]*e[0]+n[3]*e[1]+n[5]],Hd=(n,e)=>[n[0]*e[0]+n[2]*e[1],n[1]*e[0]+n[3]*e[1],n[0]*e[2]+n[2]*e[3],n[1]*e[2]+n[3]*e[3],n[0]*e[4]+n[2]*e[5]+n[4],n[1]*e[4]+n[3]*e[5]+n[5]],ac=n=>{const e=n.b[0]-n.a[0],t=n.b[1]-n.a[1],i=e*e+t*t;if(i<pt)throw new Error("A crease must have length.");const r=e/Math.sqrt(i),a=t/Math.sqrt(i),s=2*r*r-1,o=2*r*a,l=o,c=2*a*a-1;return[s,o,l,c,n.a[0]-s*n.a[0]-l*n.a[1],n.a[1]-o*n.a[0]-c*n.a[1]]},ko=(n,e,t)=>Math.abs(Hn(e,t,n))>pt?!1:(n[0]-e[0])*(n[0]-t[0])+(n[1]-e[1])*(n[1]-t[1])<=pt,Si=(n,e,t=!0)=>{let i=!1;for(let r=0,a=e.length-1;r<e.length;a=r++){const s=e[a],o=e[r];if(ko(n,s,o))return t;s[1]>n[1]!=o[1]>n[1]&&n[0]<(o[0]-s[0])*(n[1]-s[1])/(o[1]-s[1])+s[0]&&(i=!i)}return i},hn=(n,e)=>{const t=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return Math.abs(Hn(e.a,e.b,n))/t<1e-5},l_=(n,e)=>{const t=[];let i=0;const r=(a,s)=>{if(++i>2e4)throw new Error("Too many crease combinations; reduce creases or target moves.");s.size>=e||n.forEach((o,l)=>{if(s.has(l))return;const c={a:mt(a,o.a),b:mt(a,o.b)};t.some(d=>hn(c.a,d)&&hn(c.b,d))||t.push(c),r(Hd(ac(o),a),new Set([...s,l]))})};return r(zd(),new Set),t},d_=n=>({transforms:n.transforms.map(e=>[...e]),frontUp:[...n.frontUp],layerOrder:[...n.layerOrder],usedCreases:[...n.usedCreases],moves:n.moves}),f_=n=>{const e=[];for(const t of n)for(const i of n.slice(t.id+1))for(let r=0;r<t.polygon.length;r+=1){const a=t.polygon[r],s=t.polygon[(r+1)%t.polygon.length];for(let o=0;o<i.polygon.length;o+=1){const l=i.polygon[o],c=i.polygon[(o+1)%i.polygon.length];if(!hn(l,{a,b:s})||!hn(c,{a,b:s}))continue;const d=[a,s,l,c].filter(f=>ko(f,a,s)&&ko(f,l,c));d.sort((f,h)=>(f[0]-h[0])*(s[0]-a[0])+(f[1]-h[1])*(s[1]-a[1])),!(d.length<2||Math.hypot(d[0][0]-d.at(-1)[0],d[0][1]-d.at(-1)[1])<1e-6)&&e.push({faces:[t.id,i.id],edge:[d[0],d.at(-1)]})}}return e},u_=n=>{const e=a=>Array.isArray(a)&&a.length===2&&a.every(Number.isFinite);if(!Array.isArray(n?.paper?.vertices)||n.paper.vertices.length<3)throw new Error(`Level ${n?.id??"unknown"} needs at least three paper vertices.`);if(!n.paper.vertices.every(e))throw new Error("Paper vertices must have finite coordinates.");if(!Array.isArray(n.creases)||!Array.isArray(n.markings))throw new Error("Creases and markings must be arrays.");if(n.par!=null&&(!Number.isInteger(n.par)||n.par<1||n.par>10))throw new Error("Target moves must be an integer from 1 to 10.");if(n.geometryDepth!=null&&(!Number.isInteger(n.geometryDepth)||n.geometryDepth<1||n.geometryDepth>10))throw new Error("Geometry depth must be an integer from 1 to 10.");if(Yr(n.paper.vertices)<=0)throw new Error(`Level ${n.id} paper vertices must be counter-clockwise.`);n.paper.vertices.forEach((a,s,o)=>{const l=o[(s+1)%o.length];if(Math.hypot(l[0]-a[0],l[1]-a[1])<pt||o.some(c=>Hn(a,l,c)<-pt))throw new Error("Paper must be convex with distinct neighboring vertices.")});let t=[n.paper.vertices.map(a=>[...a])];n.creases.forEach(a=>{if(!e(a?.a)||!e(a?.b))throw new Error("Crease endpoints must have finite coordinates.");if(Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1])**2<pt)throw new Error(`Level ${n.id} has a zero-length crease.`)}),l_(n.creases,n.geometryDepth??n.par??n.creases.length).forEach(a=>{t=t.flatMap(s=>{const o=rr(s,a,1),l=rr(s,a,-1);return Ai(o)&&Ai(l)?[o,l]:[s]})});const i=t.map((a,s)=>{const o=r_(a),l=n.creases.map(c=>a.some(d=>hn(d,c)));return{id:s,polygon:a,center:o,touchesCrease:l}}),r=n.markings.map((a,s)=>{if(!e(a?.position)||a.anchor!=null&&!e(a.anchor)||!["front","back"].includes(a.side)||!["star","cross"].includes(a.kind)||a.rotation!=null&&!Number.isFinite(a.rotation)||a.alignmentGroup!=null&&(a.kind!=="star"||typeof a.alignmentGroup!="string"||!a.alignmentGroup))throw new Error(`Marking ${s} has invalid coordinates, side, kind, or alignment group.`);const o=a.anchor??a.position,c=i.filter(d=>Si(o,d.polygon))[0];if(!c)throw new Error(`Marking ${s} in ${n.id} is outside the paper.`);if(!a.anchor&&n.creases.some(d=>hn(a.position,d)))throw new Error(`Marking ${s} in ${n.id} lies on a crease.`);return{...a,id:s,faceId:c.id,ink:o_(a,c)}});return{level:n,faces:i,markings:r,connections:f_(i)}},h_=n=>({transforms:n.faces.map(()=>zd()),frontUp:n.faces.map(()=>!0),layerOrder:n.faces.map(e=>e.id),usedCreases:n.level.creases.map(()=>!1),moves:0}),Za=(n,e)=>({a:mt(e,n.a),b:mt(e,n.b)}),Il=new WeakMap,p_=(n,e,t,i,r,a)=>{let s=Il.get(n);s||(s=new WeakMap,Il.set(n,s));let o=s.get(e);o||(o=new Map,s.set(e,o));const l=`${t}/${i}/${a}/${r}`;if(o.has(l))return{...o.get(l),flapFace:r};const c=m_(n,e,t,i,r,a);if(o.set(l,c),c.legal)for(const d of c.moving){const f=Za(n.level.creases[t],e.transforms[d]);JSON.stringify(f)===JSON.stringify(c.line)&&o.set(`${t}/${i}/${a}/${d}`,c)}return c},m_=(n,e,t,i,r,a)=>{if(!Number.isInteger(r)||!n.faces[r]||![1,-1].includes(a))return{legal:!1,reason:"Unknown flap or viewing side."};const s=n.level.creases[t],o=Za(s,e.transforms[r]),l=new Set;n.connections.forEach((p,u)=>{p.edge.every(T=>hn(mt(e.transforms[p.faces[0]],T),o))&&l.add(u)});const c=new Set([r]);let d=!0;for(;d;)d=!1,n.connections.forEach(({faces:[p,u]},T)=>{l.has(T)||c.has(p)===c.has(u)||(c.add(p),c.add(u),d=!0)});const f=[...c].sort((p,u)=>p-u),h=n.faces.filter(p=>!c.has(p.id)).map(p=>p.id),m=n.faces.map(p=>kn(n,e,p.id));if(!h.length||f.some(p=>m[p].some(u=>Hn(o.a,o.b,u)*i<-pt)))return{legal:!1,reason:"That flap cannot turn without bending or tearing connected paper."};if(!n.connections.some(({faces:[p,u],edge:T},M)=>l.has(M)&&c.has(p)!==c.has(u)&&T.every(x=>hn(x,s))))return{legal:!1,reason:"No connected crease remains for that flap."};const b=new Map(e.layerOrder.map((p,u)=>[p,u]));for(const p of f)for(const u of h){if((b.get(u)-b.get(p))*a<=0)continue;let T=m[p];const M=m[u],x=Math.sign(Yr(M));for(let C=0;C<M.length&&Ai(T);C+=1)T=rr(T,{a:M[C],b:M[(C+1)%M.length]},x);if(Ai(T))return{legal:!1,reason:"Turn the paper over to reach that flap."}}return{legal:!0,line:o,moving:f,stationary:h,flapFace:r}},$r=(n,e,t,i,r=null,a=1)=>{const s=n.level.creases[t];if(!s||![1,-1].includes(i))return{legal:!1,reason:"Unknown crease or fold side."};if(r!==null)return p_(n,e,t,i,r,a);const o=n.faces.filter(g=>g.touchesCrease[t]).map(g=>g.id);if(!o.length)return{legal:!1,reason:"No connected hinge remains."};const l=[];o.forEach(g=>{const b=Za(s,e.transforms[g]),p=l.find(({line:u})=>hn(b.a,u)&&hn(b.b,u));p?p.count+=1:l.push({line:b,count:1})}),l.sort((g,b)=>b.count-g.count);const c=l[0].line,d=n.faces.map(g=>{const b=g.polygon.map(T=>Hn(c.a,c.b,mt(e.transforms[g.id],T))),p=b.some(T=>T>pt),u=b.some(T=>T<-pt);return p&&u?null:p?1:u?-1:0});if(d.includes(null))return{legal:!1,reason:"A paper layer crosses the hinge without a bend."};const f=n.faces.filter(g=>d[g.id]===i).map(g=>g.id),h=n.faces.filter(g=>d[g.id]!==i).map(g=>g.id);if(!f.length||!h.length)return{legal:!1,reason:"The crease does not divide the paper into two flaps."};const m=g=>n.faces[g].polygon.some(b=>hn(mt(e.transforms[g],b),c));return!f.some(m)||!h.some(m)?{legal:!1,reason:"No connected hinge remains on both sides."}:{legal:!0,line:c,moving:f,stationary:h}},oi=(n,e,t,i,r=1,a=null)=>{const s=$r(n,e,t,i,a,r);if(!s.legal)return{state:e,...s};if(![1,-1].includes(r))return{state:e,legal:!1,reason:"A fold must land on the front or back stack."};const o=d_(e),l=ac(s.line);s.moving.forEach(h=>{o.transforms[h]=Hd(l,o.transforms[h]),o.frontUp[h]=!o.frontUp[h]});const c=new Set(s.moving),d=o.layerOrder.filter(h=>!c.has(h)),f=o.layerOrder.filter(h=>c.has(h)).reverse();return o.layerOrder=r===1?[...d,...f]:[...f,...d],o.usedCreases[t]=!0,o.lastFold={crease:t,foldSide:i,stackSide:r,flapFace:a},o.moves+=1,{state:o,stackSide:r,...s}},ja=n=>{const e=u_(n);let t=h_(e);for(const i of n.initialFolds??[]){const r=oi(e,t,i.crease,i.foldSide,i.stackSide,i.flapFace);if(!r.legal)throw new Error(`Illegal initial fold in ${n.id}: ${r.reason}`);t=r.state}return t.moves=0,{runtime:e,state:t}},kn=(n,e,t)=>n.faces[t].polygon.map(i=>mt(e.transforms[t],i)),g_=(n,e,t,i=null,r=1,a=!1)=>{const o=(r===1?[...e.layerOrder].reverse():e.layerOrder).find(g=>Si(t,kn(n,e,g)));if(o===void 0)return[];const l=a?null:o,c=n.level.creases.flatMap((g,b)=>[1,-1].flatMap(p=>{const u=$r(n,e,b,p,l,r);return u.legal?u.moving.some(M=>Si(t,kn(n,e,M)))?[{...u,crease:b,foldSide:p,stackSide:r,flapFace:l}]:[]:[]}));if(!i)return c;const d=e.lastFold?.crease??-1;if(d<0)return c;const f=n.faces.filter(g=>e.transforms[g.id].some((b,p)=>Math.abs(b-i.transforms[g.id][p])>pt)).map(g=>g.id),h=f.find(g=>n.faces[g].touchesCrease[d]),m=f.some(g=>Si(t,kn(n,e,g)));return h===void 0||!m||!a&&!c.some(g=>g.crease===d&&g.moving.length===f.length&&f.every(b=>g.moving.includes(b)))?c:[{crease:d,unfold:!0,targetState:i,moving:f,stationary:n.faces.filter(g=>!f.includes(g.id)).map(g=>g.id),line:Za(n.level.creases[d],e.transforms[h]),stackSide:r},...c]},__=(n,e,t,i,r=null,a=1,s=!1)=>{const o=Math.hypot(...i);if(o<.06)return null;let l=null;for(const c of g_(n,e,t,r,a,s)){const d=mt(ac(c.line),t),f=[d[0]-t[0],d[1]-t[1]],h=Math.hypot(...f);if(h<.08)continue;const m=(i[0]*f[0]+i[1]*f[1])/(o*h);if(m<.2)continue;const g=h/2/(m*m);(!l||g<l.score)&&(l={...c,fullDisplacement:f,score:g})}return l},Ja=(n,e)=>{const t=new Map(e.layerOrder.map((a,s)=>[a,s])),i=n.faces.map(a=>kn(n,e,a.id)),r=i.map(kd);return n.markings.map(a=>{const s=a.faceId,o=a.side==="front"&&e.frontUp[s]||a.side==="back"&&!e.frontUp[s],l=mt(e.transforms[s],a.position);let c=a.ink.map(f=>f.map(h=>mt(e.transforms[s],h)));for(const f of e.layerOrder)if((o?t.get(f)>t.get(s):t.get(f)<t.get(s))&&(c=c.flatMap(m=>c_(m,i[f],r[f]))),!c.length)break;const d=!c.length;return{...a,position:l,covered:d,visible:!d}})},Gd=(n,e,t=.08)=>{if(!n.markings.some(r=>r.alignmentGroup))return[];const i=new Map;for(const r of Ja(n,e)){if(!r.alignmentGroup)continue;const a=i.get(r.alignmentGroup)??[];a.push(r),i.set(r.alignmentGroup,a)}return[...i].map(([r,a])=>({id:r,aligned:a.length>1&&a.every(s=>Math.hypot(s.position[0]-a[0].position[0],s.position[1]-a[0].position[1])<=t),visible:a.some(s=>s.visible),count:a.length}))},Va=(n,e)=>Ja(n,e).every(r=>r.alignmentGroup||(r.kind==="star"?r.visible:!r.visible))&&Gd(n,e).every(({aligned:r,visible:a})=>r&&a),zo=n=>Math.round(n*Ll)/Ll,Ho=n=>JSON.stringify({transforms:n.transforms.map(e=>e.map(zo)),frontUp:n.frontUp,layerOrder:n.layerOrder}),Or=(n,e)=>{const t=[],i=new Set;for(let r=0;r<n.level.creases.length;r+=1)for(const a of[1,-1])for(const s of[1,-1])for(const o of[null,...n.faces.map(l=>l.id)]){const l=$r(n,e,r,a,o,s);if(!l.legal)continue;const c=JSON.stringify([r,s,l.line,l.moving]);i.has(c)||(i.add(c),t.push({crease:r,foldSide:a,stackSide:s,...o===null?{}:{flapFace:o}}))}return t},v_=(n,e,t=1e4,i=1/0)=>{if(!Number.isInteger(t)||t<1)throw new Error("Search limit must be a positive integer.");if(i!==1/0&&(!Number.isInteger(i)||i<0))throw new Error("Search depth must be a nonnegative integer.");const r=Ho(e),a=[{state:e,path:[]}],s=new Set([r]),o=Or(n,e);let l=!1;for(let c=0;c<a.length;c+=1){const d=a[c];if(Va(n,d.state))return{solvable:!0,solution:d.path,solutionLength:d.path.length,legalFirstMoves:o,reachableStateCount:s.size,truncated:!1};if(!(d.path.length>=i))for(const f of Or(n,d.state)){const h=oi(n,d.state,f.crease,f.foldSide,f.stackSide,f.flapFace).state,m=Ho(h);if(!s.has(m)){if(s.size>=t){l=!0;continue}s.add(m),a.push({state:h,path:[...d.path,f]})}}}return{solvable:!1,solution:[],solutionLength:null,legalFirstMoves:o,reachableStateCount:s.size,truncated:l}},b_=["right","up-right","up","up-left","left","down-left","down","down-right"],Vd=(n,e,t)=>{let i=e;return t.map(r=>{const a=$r(n,i,r.crease,r.foldSide,r.flapFace,r.stackSide);if(!a.legal)return"illegal";const s=a.moving[0],o=mt(i.transforms[s],n.faces[s].center),l=oi(n,i,r.crease,r.foldSide,r.stackSide,r.flapFace),c=mt(l.state.transforms[s],n.faces[s].center),d=Math.atan2(c[1]-o[1],c[0]-o[0]),f=b_[(Math.round(d/(Math.PI/4))+8)%8],h=r.stackSide>0?"front":"back";return i=l.state,`${f}:${h}`}).join(" ")},x_=(n,e,t)=>{const i=({a:o,b:l})=>{let c=l[1]-o[1],d=o[0]-l[0],f=-(c*o[0]+d*o[1]);const h=Math.hypot(c,d);return c/=h,d/=h,f/=h,(c<-pt||Math.abs(c)<pt&&d<0)&&(c*=-1,d*=-1,f*=-1),[c,d,f].map(zo).join(",")},r=n.level.paper.vertices.map(o=>o.map(zo).join(",")).join(";"),a=n.level.creases.map(i).sort().join(";"),s=Vd(n,e,t).replace(/:(front|back)/g,"");return`${r}|${a}|${s}`},Wd=(n,e=1e4,t=null)=>{try{const{runtime:i,state:r}=ja(n),a=Va(i,r);let s;if(t!==null){if(!Array.isArray(t))throw new Error("Invalid saved solution.");let c=r;for(const d of t){const f=oi(i,c,d.crease,d.foldSide,d.stackSide,d.flapFace);if(!f.legal)throw new Error("The saved solution contains an illegal fold.");c=f.state}if(!Va(i,c))throw new Error("The saved solution does not solve the puzzle.");s={solvable:!0,solution:t,solutionLength:t.length,legalFirstMoves:Or(i,r),reachableStateCount:t.length+1,truncated:!1}}else s=v_(i,r,e);const o=!a&&s.solvable&&!s.truncated,l=a?"The puzzle starts solved.":s.truncated?"The solver could not prove a solution within the search limit.":s.solvable?null:"The solver exhausted every reachable state without finding a solution.";return{...s,allowed:o,startsSolved:a,reason:l}}catch(i){return{allowed:!1,solvable:!1,startsSolved:!1,truncated:!1,solution:[],solutionLength:null,legalFirstMoves:[],reachableStateCount:0,reason:i instanceof Error?i.message:String(i)}}},S_=[[0,0],[4,0],[4,4],[0,4]],Ul=.06,Br=3,ar=12,cn=4,Fl=10,bt=1e-7,Er=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]),Ca=(n,e,t)=>n[0]>=Math.min(e[0],t[0])-bt&&n[0]<=Math.max(e[0],t[0])+bt&&n[1]>=Math.min(e[1],t[1])-bt&&n[1]<=Math.max(e[1],t[1])+bt,y_=(n,e,t,i)=>{const r=Er(n,e,t),a=Er(n,e,i),s=Er(t,i,n),o=Er(t,i,e);return(r>bt&&a<-bt||r<-bt&&a>bt)&&(s>bt&&o<-bt||s<-bt&&o>bt)?!0:Math.abs(r)<=bt&&Ca(t,n,e)||Math.abs(a)<=bt&&Ca(i,n,e)||Math.abs(s)<=bt&&Ca(n,t,i)||Math.abs(o)<=bt&&Ca(e,t,i)},M_=(n,e,t)=>{const i=t[0]-e[0],r=t[1]-e[1],a=i*i+r*r;if(!a)return Math.hypot(n[0]-e[0],n[1]-e[1]);const s=Math.max(0,Math.min(1,((n[0]-e[0])*i+(n[1]-e[1])*r)/a));return Math.hypot(n[0]-(e[0]+s*i),n[1]-(e[1]+s*r))},E_=(n,e)=>Math.min(...e.map((t,i)=>M_(n,t,e[(i+1)%e.length]))),Xd=n=>{const e=n[0]*n[3]-n[1]*n[2],t=n[3]/e,i=-n[1]/e,r=-n[2]/e,a=n[0]/e;return[t,i,r,a,-(t*n[4]+r*n[5]),-(i*n[4]+a*n[5])]},kr=()=>({id:"custom-level",title:"Untitled fold",chapter:"Custom",hint:"",paper:{vertices:S_.map(n=>[...n])},creases:[],markings:[],par:1}),T_=n=>{if(!Number.isInteger(n)||n<Br||n>ar)throw new Error(`Choose ${Br}–${ar} vertices.`);const e=1.65;return Array.from({length:n},(t,i)=>{const r=Math.PI/2+(n%2===0?Math.PI/n:0)+i*Math.PI*2/n;return[2+Math.cos(r)*e,2+Math.sin(r)*e]})},sc=n=>{if(!Array.isArray(n)||n.length<Br)throw new Error("A paper polygon needs at least three vertices.");if(n.length>ar)throw new Error(`Choose at most ${ar} vertices.`);const e=n.map(r=>{if(!Array.isArray(r)||r.length<2||!Number.isFinite(r[0])||!Number.isFinite(r[1]))throw new Error("Every paper vertex needs finite x and y coordinates.");if(r[0]<0||r[0]>cn||r[1]<0||r[1]>cn)throw new Error(`Keep the paper inside the ${cn} × ${cn} editor area.`);return[r[0],r[1]]});for(let r=0;r<e.length;r+=1){const a=e[(r+1)%e.length];if(Math.hypot(a[0]-e[r][0],a[1]-e[r][1])<.02)throw new Error("Keep neighboring vertices apart.");for(let s=r+1;s<e.length;s+=1)if(!(s===r||s===(r+1)%e.length||r===(s+1)%e.length)&&y_(e[r],a,e[s],e[(s+1)%e.length]))throw new Error("Paper edges cannot cross or overlap.")}const t=e.reduce((r,a,s)=>{const o=e[(s+1)%e.length];return r+a[0]*o[1]-o[0]*a[1]},0)/2;if(Math.abs(t)<bt)throw new Error("The paper polygon has no area.");const i=Math.sign(t);for(let r=0;r<e.length;r+=1){const a=e[(r-1+e.length)%e.length],s=e[r],o=e[(r+1)%e.length];if(Er(a,s,o)*i<-bt)throw new Error("Paper must stay convex; drag the vertex back outside the sheet.");const l=[a[0]-s[0],a[1]-s[1]],c=[o[0]-s[0],o[1]-s[1]],d=Math.max(-1,Math.min(1,(l[0]*c[0]+l[1]*c[1])/(Math.hypot(...l)*Math.hypot(...c))));if(Math.acos(d)*180/Math.PI<Fl-bt)throw new Error(`Paper angles must be at least ${Fl} degrees.`)}return t>0?e:e.reverse()},Qa=(n,e=[])=>{const t=ja(n),i=t.state;let r=i;const a=[],s=[];for(const o of e){const l=o.flapAnchor?t.runtime.faces.find(d=>Si(o.flapAnchor,d.polygon))?.id:o.flapFace;if(o.flapAnchor&&l===void 0)break;const c=oi(t.runtime,r,o.crease,o.foldSide,o.stackSide,l);if(!c.legal)break;s.push(r),r=c.state,a.push({...o,...l==null?{}:{flapFace:l}})}return{...t,resetState:i,state:r,moves:a,history:s}},A_=(n,e,t,i,r)=>{const a=Xd(e.transforms[t]),s=mt(a,i),o=mt(a,r);if(Math.hypot(o[0]-s[0],o[1]-s[1])<.08)throw new Error("Drag a longer crease.");return{...n,creases:[...n.creases,{a:s,b:o}]}},w_=(n,e,t,i,r)=>{const a=n.faces.map(c=>{const d=kn(n,e,c.id);return{face:c,onPaper:Si(t,d),interior:Si(t,d,!1),boundaryDistance:E_(t,d)}}).filter(({onPaper:c,boundaryDistance:d})=>c||d<=Ul);if(!a.length)return[];const s=a.filter(({face:c})=>!a.some(d=>d.interior&&(i[d.face.id]-i[c.id])*r>1e-5)),o=s.filter(({boundaryDistance:c})=>c<=Ul);if(o.length>1)return o.map(({face:c})=>c.id);const l=r>0?Math.max(...s.map(({face:c})=>i[c.id])):Math.min(...s.map(({face:c})=>i[c.id]));return s.filter(({face:c})=>Math.abs(i[c.id]-l)<1e-5).map(({face:c})=>c.id)},R_=(n,e,t,i,r,a,s)=>{const o=[...new Set(i)];if(!o.length)throw new Error("Paint on an exposed paper surface.");const l=a==="star"&&o.length>1?`A${1+Math.max(0,...n.markings.map(({alignmentGroup:d})=>Number(d?.slice(1))||0))}`:null,c=o.map(d=>{const f=Xd(t.transforms[d]),h=mt(f,r),m=e.faces[d].center,g=s>0===t.frontUp[d];return{position:h,anchor:[h[0]+(m[0]-h[0])*.02,h[1]+(m[1]-h[1])*.02],side:g?"front":"back",kind:a,...l?{alignmentGroup:l}:{}}});return{...n,markings:[...n.markings,...c]}},C_=[[0,0],[4,0],[4,4],[0,4]],Nl={a:[2,0],b:[2,4]},Ol={a:[0,2],b:[4,2]},P_={a:[0,1],b:[4,1]},D_={a:[1,0],b:[1,4]},L_={a:[3,0],b:[3,4]},Bl={a:[0,0],b:[4,4]},kl={a:[0,4],b:[4,0]},zl=n=>Array.from({length:n},(e,t)=>{const i=t*Math.PI/n,r=Math.cos(i)*3,a=Math.sin(i)*3;return{a:[2-r,2-a],b:[2+r,2+a]}}),gn=(n,e,t,i,r,a={})=>({id:n,title:e,chapter:t,paper:{vertices:C_},creases:i,markings:r,...a}),I_=[gn("first-cover","Cover the ink","First fold",[Nl],[{position:[1,2],side:"front",kind:"cross"}],{par:1,hint:"Fold the marked half over the crease."}),gn("fold-under","Fold underneath","Turn the paper",[P_],[{position:[2,.5],side:"back",kind:"cross"},{position:[2,3],side:"front",kind:"star"}],{par:1,hint:"Turn the back toward you, then fold the marked flap toward the screen."}),gn("front-stack","Corner stack","Two folds",[Nl,Ol],[{position:[1,3],side:"back",kind:"cross"},{position:[3,3],side:"back",kind:"star"}],{par:2,hint:"Use each crease once; keep both folds on the front stack."}),gn("three-forward","Three-way close","Three folds",[D_,L_,Ol],[{position:[.5,3],side:"back",kind:"star"},{position:[2,3],side:"back",kind:"cross"},{position:[3.5,3],side:"back",kind:"star"}],{par:3,hint:"Close both side flaps before the horizontal crease."}),gn("diagonal-reveal","Turn the corner","Diagonal folds",[Bl],[{position:[1,3],side:"front",kind:"cross"},{position:[1,3],side:"back",kind:"star"}],{par:1,hint:"Fold the marked corner across the diagonal."}),gn("diagonal-cross","Crossed corners","Diagonal folds",[Bl,kl],[{position:[2,3.3],side:"back",kind:"star"},{position:[3.3,2],side:"back",kind:"cross"}],{par:2,hint:"The second diagonal belongs behind the first."}),gn("diagonal-stack","Diamond stack","Diagonal stack",[{a:[0,1],b:[3,4]},{a:[1,0],b:[4,3]},kl],[{position:[1.5,3.5],side:"back",kind:"cross"},{position:[2.8,2.8],side:"back",kind:"star"},{position:[3.5,1.5],side:"back",kind:"cross"}],{par:3,hint:"Fold both diagonal edges before closing the stack from behind."}),gn("oblique-cross","Crooked cross","Oblique folds",[{a:[0,.7],b:[4,3.1]},{a:[.8,4],b:[3.5,0]}],[{position:[1.6713,.6776],side:"back",kind:"star"},{position:[.7674,2.4336],side:"back",kind:"cross"}],{par:2,hint:"The two crooked folds land on opposite sides of the stack."}),gn("five-ray-lock","Five-point lock","Radial folds",zl(5),[{position:[.6667,1.5156],side:"back",kind:"star"},{position:[.6667,2.4844],side:"back",kind:"cross"},{position:[3.013,.7192],side:"back",kind:"cross"},{position:[2,3.3333],side:"back",kind:"cross"}],{par:3,hint:"Only three of the five rays belong in the lock."}),gn("ten-ray-lock","Ten-way lock","Crease maze",zl(10),[{position:[.7578,3.2422],side:"back",kind:"star"},{position:[.8578,.7578],side:"back",kind:"cross"},{position:[3.3333,1.7834],side:"back",kind:"cross"},{position:[.6667,1.299],side:"back",kind:"star"},{position:[3.3333,2.701],side:"back",kind:"star"}],{par:2,hint:"Ten hinges are visible. The markings identify the two that matter."})],oc=JSON.parse('[{"id":"first-cover","title":"Cover the ink","chapter":"Tutorial","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[2,0],"b":[2,4]}],"markings":[{"position":[1,2],"side":"front","kind":"cross"}],"par":1,"hint":"Fold the marked half over the crease.","generation":{"tutorial":true,"solution":[{"crease":0,"foldSide":1,"stackSide":1}],"fingerprint":"fold-behavior-v3:a34cb849b20b7df2ae479549f775c94b55ed086a9588d7a1d259e4efa1d9d6ff","openingFingerprint":"fold-opening-v3:9f9c064726c5e3cee571fc36212a2ca920e157e91d2146c1a2a4a605b00ac09f","strategyFingerprints":["fold-strategy-v2:ce67dc12b207a794fbfeeb17b83fb399709abe0434963b88f30ae3d2e42bd17d"]}},{"id":"generated-370ed2f80b48","title":"Grid 002","chapter":"Grid","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[2,0],"b":[2,4]},{"a":[1,0],"b":[1,4]},{"a":[3,0],"b":[3,4]}],"markings":[{"position":[1.5,2],"side":"back","kind":"cross"},{"position":[0.5,2],"side":"front","kind":"cross"},{"position":[2.5,2],"side":"back","kind":"star"}],"par":2,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:8259629f1dd04f8bbf40fbf9afa313956a68a80f4a21ead72a3c63d19d1253ce","openingFingerprint":"fold-opening-v3:8f63b9e38d38cc78f78bd0be7cfb46707f202a67bce6f37f70ada343b1444f2f","previousFingerprints":["fold-behavior-v2:813c0e0cb48bbb1ea6687ae898b9b6298b936aedb06337870943370ed2f80b48","fold-opening-v2:fe11ee4f80652575423d2f11cfe53c5f7a265e76c032c2e8223ab3407acf880d"],"strategyFingerprints":["fold-strategy-v2:787d535837bc3256fddbe5c6ae11f5489c772784c1680a87a4f335d7a481f23d","fold-strategy-v2:3c260d084450eaab0933b93500cdfde0ecaf5681d2594f7418de3b59b7dd9e85"],"solution":[{"crease":0,"foldSide":1,"stackSide":1},{"crease":1,"foldSide":1,"stackSide":1}]}},{"id":"generated-e143751ca9ec","title":"Diagonal 003","chapter":"Diagonal","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,-1],"b":[4,3]},{"a":[0,5],"b":[4,1]},{"a":[0,4],"b":[4,0]}],"markings":[{"position":[1.2499999999999987,2.25],"side":"back","kind":"cross"},{"position":[3.261904761904761,3.452380952380949],"side":"front","kind":"star"},{"position":[2.750000000000001,0.7500000000000001],"side":"front","kind":"star"},{"position":[0.7142857142857152,1.1904761904761916],"side":"back","kind":"star"},{"position":[1.7499999999999991,2.75],"side":"front","kind":"cross"}],"par":2,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:f63e3cf4febd53420d2c0acc325a69899a97ddd3500057bc6c66e143751ca9ec","openingFingerprint":"fold-opening-v3:42c5eccb24aa1cb6eaa1cfc138f28e0bfa9e500584b0e7e19a3034c88ea9c08f","strategyFingerprints":["fold-strategy-v2:8d2b4331a0031d62d50ee521329d6e48159ef04be2e4792c1ad69955c682d760","fold-strategy-v2:526600060e8b79a9bc6815124fb6830799df0b4fc041d2fcd8434be2826ea8f1"],"solution":[{"crease":1,"foldSide":1,"stackSide":1},{"crease":2,"foldSide":-1,"stackSide":-1,"flapFace":0}]}},{"id":"generated-fdeca3fef39a","title":"Folded Grid 004","chapter":"Folded Grid","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[2,0],"b":[2,4]},{"a":[0,2],"b":[4,2]},{"a":[0,1],"b":[4,1]}],"markings":[{"position":[3,2.5],"side":"back","kind":"cross"},{"position":[1,1.5],"side":"front","kind":"cross"},{"position":[3,0.5],"side":"front","kind":"cross"},{"position":[3,2.5],"side":"front","kind":"star"}],"par":2,"initialFolds":[{"crease":0,"foldSide":-1,"stackSide":-1}],"analysisDepth":3,"geometryDepth":4,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"fingerprint":"fold-behavior-v3:a5dbbd24757d97d6d16dbdf51567fb397c7df73c64e1b112ac2cfdeca3fef39a","openingFingerprint":"fold-opening-v3:168ce8eb778c577bdb91eac84622e7c8d35ad8df77c46ea7c39a76586d47fb2c","strategyFingerprints":["fold-strategy-v2:2419ad47b396e9b6ac79ad17f22842397b782af364418d7ed330270b0fc46d3a","fold-strategy-v2:15e011a19c932f16486414b1be287fa087ca50d1d6612a755ee99f7b1af95e1c","fold-strategy-v2:06dfd8747ad876b1fe9b5f9272bab3fb3414f15f396a9b7951ad5d74191982bb","fold-strategy-v2:2bcf2be1590c203c8c4697a5d997f4fb714d87cc195138459fcbf98b12de1041","fold-strategy-v2:b4538f1a0a640b2be637d1975493a549b0d313c06d634a54617766ef9558abda","fold-strategy-v2:592f50a7c2d26ae6f311c898a849926c7da3f3196fd7dd37ee3fa4c06dcae3d8","fold-strategy-v2:98ae49730a1ce739d87ac154563f24339581d7cf9405a92317d3c8201faf2f42","fold-strategy-v2:67402a16998cefbee1bc77836940e47a45d43923dcf33aec470742396686c712"],"solution":[{"crease":1,"foldSide":1,"stackSide":1},{"crease":2,"foldSide":1,"stackSide":-1}]}},{"id":"generated-33d9e7c1d90f","title":"Folded Mixed 005","chapter":"Folded Mixed","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,4],"b":[4,0]},{"a":[3,0],"b":[3,4]},{"a":[0,3],"b":[4,-1]}],"markings":[{"position":[0.6333333333333334,0.5000000000000003],"side":"back","kind":"star"},{"position":[0.6333333333333334,0.5000000000000003],"side":"front","kind":"star"},{"position":[2.5555555555555545,3.222222222222221],"side":"front","kind":"star"},{"position":[3.444444444444446,3.2222222222222237],"side":"back","kind":"cross"}],"par":2,"initialFolds":[{"crease":0,"foldSide":1,"stackSide":1}],"analysisDepth":3,"geometryDepth":4,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"fingerprint":"fold-behavior-v3:4e4c396d933c1ec39e5032d8a34e5100fd3f4435ace465e7dade33d9e7c1d90f","openingFingerprint":"fold-opening-v3:5f1afc3ede74ee14bcf81e49076d31d689a1a506bb760b2939a85a8801d2b210","strategyFingerprints":["fold-strategy-v2:526d695f511be5c5cef48b62d2177b54499345eadd9a63cc073725136521dc09"],"solution":[{"crease":0,"foldSide":-1,"stackSide":1,"flapFace":0},{"crease":1,"foldSide":-1,"stackSide":-1}]}},{"id":"generated-7ee4af65a68d","title":"Mixed 006","chapter":"Mixed","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,-1],"b":[4,3]},{"a":[0,6],"b":[4,2]},{"a":[0,1],"b":[4,5]}],"markings":[{"position":[0.9888888888888877,2.8555555555555565],"side":"back","kind":"cross"},{"position":[0.9888888888888877,2.8555555555555565],"side":"front","kind":"cross"},{"position":[3.388888888888891,3.388888888888892],"side":"front","kind":"cross"},{"position":[3.388888888888891,3.388888888888892],"side":"back","kind":"star"},{"position":[1.6212121212121198,1.6212121212121215],"side":"front","kind":"cross"}],"par":3,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:16a3514aecb5c2db875845100bc8dbd0a80859862cc544174f1f7ee4af65a68d","openingFingerprint":"fold-opening-v3:16a3514aecb5c2db875845100bc8dbd0a80859862cc544174f1f7ee4af65a68d","strategyFingerprints":["fold-strategy-v2:05d54350e3aafd51603ee103ec056b1f15c114294e8ab41a4a79de05074c6df5","fold-strategy-v2:5b2c191fc472d58666372fd72bc1517bc371fd725b0c2a7da5282420068dcd75","fold-strategy-v2:dbcd6fae7da8d1e846b0fc9e43f85577d38c58957e74f4bd50d3f7d88716cf5c","fold-strategy-v2:89731de7dac0aed2e0bd81347f20bb0406839b2e7a71d8ad8f7fd729a9752427"],"solution":[{"crease":2,"foldSide":1,"stackSide":1},{"crease":0,"foldSide":-1,"stackSide":1},{"crease":1,"foldSide":1,"stackSide":1}]}},{"id":"generated-2d3c8fc4a146","title":"Diagonal 007","chapter":"Diagonal","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,-2],"b":[4,2]},{"a":[0,5],"b":[4,1]},{"a":[0,4],"b":[4,0]}],"markings":[{"position":[3,0.4999999999999997],"side":"front","kind":"star"},{"position":[0.9117647058823539,1.049019607843138],"side":"back","kind":"star"},{"position":[3.5,0.999999999999999],"side":"front","kind":"cross"},{"position":[1.499999999999999,2.0000000000000004],"side":"front","kind":"star"},{"position":[1.9999999999999987,2.5],"side":"front","kind":"cross"}],"par":3,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:8c50e201b62ae722a6df57c93186a9576c067c3802cc0ccdf2782d3c8fc4a146","openingFingerprint":"fold-opening-v3:8c50e201b62ae722a6df57c93186a9576c067c3802cc0ccdf2782d3c8fc4a146","strategyFingerprints":["fold-strategy-v2:8416fab9015f157b4d53c445f5572329fa7414694384cc3cdaa254c27a4d6fa5","fold-strategy-v2:84dd22bec9baed2f104b40d4e1e75fa6af4434e7ca420f5c4b59139e00e34ad3","fold-strategy-v2:2177fd0d98fdecdaed968a46d7d39b2aa84fc1a0e0305cda5c778e476231c028","fold-strategy-v2:30d582e477bd09d157787d2e116236fb332b54afbf79cf13d47e9d94d502e4a4"],"solution":[{"crease":1,"foldSide":1,"stackSide":1},{"crease":2,"foldSide":-1,"stackSide":-1,"flapFace":0},{"crease":0,"foldSide":1,"stackSide":1}]}},{"id":"generated-95ab6dd56553","title":"Grid 008","chapter":"Grid","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,2],"b":[4,2]},{"a":[0,1],"b":[4,1]},{"a":[1,0],"b":[1,4]}],"markings":[{"position":[0.5,2.5],"side":"back","kind":"star"},{"position":[2.5,3.5],"side":"front","kind":"cross"},{"position":[0.5,0.5],"side":"front","kind":"cross"},{"position":[0.5,1.5],"side":"back","kind":"star"}],"par":3,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:69d34bb3569f7c6913e068f3435f193519604e31f398d0018a6095ab6dd56553","openingFingerprint":"fold-opening-v3:69d34bb3569f7c6913e068f3435f193519604e31f398d0018a6095ab6dd56553","strategyFingerprints":["fold-strategy-v2:a4202403b6692654e442f850e80953ea3cf7d67d6db4e8b17397cc5af2425d8f","fold-strategy-v2:ca441085acc49c7eecbe80b11399eda18edc5e764feb3954463f2ebb046bd28a","fold-strategy-v2:4e6bced8a1d4355394f0c154fb3adddbd27f46d8159156fc5d83ed41c156d809","fold-strategy-v2:b18a9cd5c679ef59edb5caaf0c79a21a74ec0e38ac540aaba68dfaa9fea188c7","fold-strategy-v2:946bcb4201f0ba7d43901754102e09eefcd93b02ee135d6610a65c1dabb216f0","fold-strategy-v2:6f38333f269cfd75523a75ab65f84bbb13d195bef28b00843922d380999e8eab","fold-strategy-v2:61c05eccb776e86406a88d08f7d399bcbe9d9863d82872ee2725f5d35d8e412c","fold-strategy-v2:c9037f2e24f9e68a5695d58fc3f85f4635db915b3e252bba87331b4abf5e4036"],"solution":[{"crease":1,"foldSide":-1,"stackSide":1},{"crease":0,"foldSide":1,"stackSide":1},{"crease":1,"foldSide":1,"stackSide":-1}]}},{"id":"generated-41247cb009db","title":"Grid 009","chapter":"Grid","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[0,1],"b":[4,1]},{"a":[0,3],"b":[4,3]},{"a":[2,0],"b":[2,4]}],"markings":[{"position":[1,0.5],"side":"front","kind":"star"},{"position":[3,2],"side":"back","kind":"cross"},{"position":[1,2],"side":"back","kind":"star"}],"par":3,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","geometryDepth":3,"generation":{"fingerprint":"fold-behavior-v3:3c31b2633015d37e8f682fb08752fe02ffbb2491d5c6c7312df441247cb009db","openingFingerprint":"fold-opening-v3:3c31b2633015d37e8f682fb08752fe02ffbb2491d5c6c7312df441247cb009db","strategyFingerprints":["fold-strategy-v2:a874679b67fe3c8b4fbcb0a9f86148b2423c8e2c7a0e1dd67eb53b22e5ca543e","fold-strategy-v2:1e06c482a1b0f184f81a92a263eb439a700454cc4fcc1bff9b393aa717f1c23d","fold-strategy-v2:c55009cbccdb55da3ec1554edc79c16cfee204ae22b6bf34e15190cf29877a47","fold-strategy-v2:f4e901379b6848843d4bda091c3a6673fd4e12a558049b20473effe043e426ab","fold-strategy-v2:45a985b2817e886a6561b11dac0d417a8acb87eb803c28b538650900f43fd971","fold-strategy-v2:c6e16191a95d1bd55386cbb9d63b6e5769bd56d4ec761ee0ce56565a0221ae29","fold-strategy-v2:b9782d6139b50c7028864cc554f94f309790739bece87207f18db52ac785c697","fold-strategy-v2:497fcd628519deb2bd5d88311ab68b18dda18f7adc58979946369858fe839041"],"solution":[{"crease":0,"foldSide":-1,"stackSide":-1},{"crease":2,"foldSide":1,"stackSide":1},{"crease":1,"foldSide":1,"stackSide":-1,"flapFace":2}]}},{"id":"generated-25769a341003","title":"Folded Grid 010","chapter":"Folded Grid","paper":{"vertices":[[0,0],[4,0],[4,4]]},"creases":[{"a":[3,0],"b":[3,4]},{"a":[0,1],"b":[4,1]},{"a":[0,2],"b":[4,2]}],"markings":[{"position":[3.5,2.5],"side":"back","kind":"cross"},{"position":[2.2222222222222223,1.4444444444444444],"side":"back","kind":"cross"},{"position":[3.5,0.5],"side":"front","kind":"star"}],"par":3,"initialFolds":[{"crease":0,"foldSide":-1,"stackSide":1}],"analysisDepth":4,"geometryDepth":5,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"solution":[{"crease":0,"foldSide":1,"stackSide":1,"flapFace":3},{"crease":2,"foldSide":1,"stackSide":-1},{"crease":1,"foldSide":1,"stackSide":-1}],"fingerprint":"fold-behavior-v3:7bc742c3266bafe1c2157090d9798770a1f8e90321071a2cde0f25769a341003","openingFingerprint":"fold-opening-v3:f7190ea7c40c681660f1446b9239431dd16342d8a81b77c0015623d6740e9bf7","strategyFingerprints":["fold-strategy-v2:6ed410633b170d603564ef36128f1e9da7beed24b4c1d542b6c694877958332f","fold-strategy-v2:8f6375250ba0fd9fe96e06e415125de1264989cac027a436b2e244e1393efb57"]}},{"id":"generated-88c8d49235b1","title":"Folded Grid 011","chapter":"Folded Grid","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[2,0],"b":[2,4]},{"a":[0,2],"b":[4,2]},{"a":[0,1],"b":[4,1]}],"markings":[{"position":[1,1.5],"side":"back","kind":"star"},{"position":[1,2.5],"side":"front","kind":"cross"},{"position":[3,3.5],"side":"front","kind":"star"}],"par":3,"initialFolds":[{"crease":0,"foldSide":-1,"stackSide":-1}],"analysisDepth":3,"geometryDepth":4,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"fingerprint":"fold-behavior-v3:c04e287a7650dacf344ef8d2d9aff595f2d5f56f6595ec6d37e488c8d49235b1","openingFingerprint":"fold-opening-v3:c04e287a7650dacf344ef8d2d9aff595f2d5f56f6595ec6d37e488c8d49235b1","strategyFingerprints":["fold-strategy-v2:a0e04fecaf0706ff7d60e419019541632ff237a3d4b70e7de132aa14ce09eded","fold-strategy-v2:bc8becb9c2b7ab56dcadcf550993bf3ebcfe82e33bd3b11c0191cd913e86e947","fold-strategy-v2:25e2f2e61729fbb920c7bdd0e4b8d29fc184ba185df3a58297c0c9da148b66be","fold-strategy-v2:e8745ffe8442783f628526d21b92923b3dcb08c85810cc0a9f077c2ae9b67625"],"solution":[{"crease":0,"foldSide":1,"stackSide":1,"flapFace":0},{"crease":2,"foldSide":1,"stackSide":-1},{"crease":1,"foldSide":1,"stackSide":-1}]}},{"id":"generated-b8808769e959","title":"Folded Mixed 012","chapter":"Folded Mixed","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,4],"b":[4,0]},{"a":[3,0],"b":[3,4]},{"a":[0,3],"b":[4,-1]}],"markings":[{"position":[3.444444444444446,3.2222222222222237],"side":"front","kind":"cross"},{"position":[3.444444444444446,3.2222222222222237],"side":"back","kind":"cross"},{"position":[0.6333333333333334,0.5000000000000003],"side":"front","kind":"star"},{"position":[2.5555555555555545,3.222222222222221],"side":"back","kind":"cross"},{"position":[0.6333333333333334,0.5000000000000003],"side":"back","kind":"star"}],"par":3,"initialFolds":[{"crease":0,"foldSide":1,"stackSide":1}],"analysisDepth":3,"geometryDepth":4,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"fingerprint":"fold-behavior-v3:f6a3513ab2f228fc0a05a8d6d7a455fd4a1eecaee1042e038fcab8808769e959","openingFingerprint":"fold-opening-v3:f6a3513ab2f228fc0a05a8d6d7a455fd4a1eecaee1042e038fcab8808769e959","strategyFingerprints":["fold-strategy-v2:99fc81f0beefe74643eae74d4074c833cf424f442e253c870e01ce279255d7cf","fold-strategy-v2:3bb64a86609592c34fda25f28cdd47cbac1ac8c181e89e2eaa55ba6bbb3b8b9e","fold-strategy-v2:34b213fbaaf4ef216822a5c083e11c9c7bfcba0e238c03e9061bc1616746e0f9","fold-strategy-v2:5e58e448c99899b65a03f615326ba918a4a38587874b3ff45370c8faf1b632a6","fold-strategy-v2:515b19acbaf8d343ff2e4b52e54c83ecbc83dc8df50ecbd789fe3b12f42961a8","fold-strategy-v2:fee043ba0609b7bd2e90fd88c6878399035ff814766c63d710cae68c00d4a7c0","fold-strategy-v2:c9f563d424c2a8dffa0c39d1d44a1a0faf627fce542c8e53c0ad517b3236549a","fold-strategy-v2:4c1544370ebdb92c2cc666db01a4c6d008de6d2225e1a8d914e2564f77f48f18"],"solution":[{"crease":0,"foldSide":-1,"stackSide":1,"flapFace":0},{"crease":1,"foldSide":-1,"stackSide":-1},{"crease":0,"foldSide":1,"stackSide":-1}]}},{"id":"generated-5d434d13c4c0","title":"Mixed 013","chapter":"Mixed","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,2],"b":[4,-2]},{"a":[0,1],"b":[4,1]},{"a":[0,5],"b":[4,1]}],"markings":[{"position":[2.4999999999999996,1.4999999999999998],"side":"back","kind":"star"},{"position":[0.5833333333333334,2.500000000000001],"side":"front","kind":"cross"},{"position":[3.5,2.5],"side":"front","kind":"cross"},{"position":[2.499999999999999,0.5833333333333331],"side":"front","kind":"cross"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:b744174481a186dcfa17e8995787e63e4999ec5f6d88566b82915d434d13c4c0","openingFingerprint":"fold-opening-v3:b744174481a186dcfa17e8995787e63e4999ec5f6d88566b82915d434d13c4c0","strategyFingerprints":["fold-strategy-v2:8f3b17be4735ae3d986f914e2d3241d60944143952e351dd56dabe08956cbf0d","fold-strategy-v2:49aac9be278c45efeffa9be29c97668c382116d8be02daabbf506ad6eadb3242","fold-strategy-v2:5bc82b5c8c65f35657123992486028e1680da928ecd7cca5187c101b7a83a9ff","fold-strategy-v2:7162e582f0faa9ee33c6b1269b323b6a59cf7f74397861d62938b886495fe9cb","fold-strategy-v2:23303b197424d7df95f0bcf50c2d565d61bec9d353c8ed209528a0fbdfd3976a","fold-strategy-v2:3ac45f3b7ed41caca1dd2c2e74db208d04a7a20f9b4b670b1413fb50445cee71","fold-strategy-v2:81d911824b63a4a07cfb7a1ee3aea7aed709055dc74330e85f9847440c43cbbb","fold-strategy-v2:49a9d58c2367842a08429dc6df908690aa12bf80788ed0188660ed2e1f6d6cc6","fold-strategy-v2:f6d005f837649e4e99c766484e535291ba95fe578dcd143726cb51c72fd24e25","fold-strategy-v2:789dde8e2e55f24e593cab21eb5ea2541f82d478aafa3fc8721a2bdae31cd4b7","fold-strategy-v2:c0c0bd90abeec0c38e5ec7dbf0c878a052f08813b7146402d087ef4e08afdea5","fold-strategy-v2:6f25b64d9d1c5480faf6fa180838651c3f4d5f498accf8ef3e1cb03e87864ef7","fold-strategy-v2:c121ad244baab6bc38e3b98dbb7d9fa62c2f4fb16aea54d03da96cc90992c6f1","fold-strategy-v2:6394081667e1da5631a2cc186caa4d45058e8d9ac46b42bfea92adef3f41457b","fold-strategy-v2:40ff1487ee4f29f6fbc687e9187ff4293c6bba7f344cce578e1dacfda7815e73","fold-strategy-v2:ec5c03c25b3267e7b1024479c9d80b567fdd2a10503580a32d573d83cb58d0aa","fold-strategy-v2:5ea943e9cbd919ffa01421b7b165eb8ba9d72c80b3c54fc6bc660550e390e0b4","fold-strategy-v2:bc4e531b7fd25ed71f6589fe7f4709cd38c1246fe20696cbf4538fa83c5bc65d","fold-strategy-v2:a349e4170bed2fe57ff4dc530bbbe2a09ff5cb546ccc1720ab8f3cae3cc4c49f","fold-strategy-v2:052deda57928c650f32f803d23e73b87b543de6561bf6fea0b2bfe9e16fd268d","fold-strategy-v2:99616d90249c8b6a61621b0b430960f8a31f525229a311a3089ce3e1d0974e9e","fold-strategy-v2:96e7ad04e8005c6fd5cf43de3506e1fa149b8629f55bb8e0e0c320a4e46983f6","fold-strategy-v2:5bd5dbd6672bdae23765a7cad6d82f1eba473c290dfad5d47ff47ca062cdd29b","fold-strategy-v2:6c2dd93c41d1ac85929e6ccf8228aeb4beb90f99a6a00f7ac55239d4e63d370e","fold-strategy-v2:c3bbc8fcae747a9d974afc32fdf521c2b8afb80d46caf93bd3036fb195452fa5","fold-strategy-v2:a0ac4733d786c50ea2cce832dcb9a970bda2a52fe6426fafccca2d84c0ff8951","fold-strategy-v2:65c00da60fdfa5521d0f4cac13ab723ede8a93e9b3a86b83055a94e0d1e6ff87","fold-strategy-v2:23b2f221d725fceed11499eec4a12a25b2d914bf68bdc2dba3dc6f7dcc543b7d","fold-strategy-v2:28df121caaf09c55c0e95270543f5c22cf58995d64976b7087e7651694e3819f","fold-strategy-v2:908f755f603a606d5bc316a9ce97b10b6bacbe9a3888f8b60395d7ff35b23de7","fold-strategy-v2:a0a8c1a1d74e87ed5636608d2040c8ac501bbb850919f4d78ec51bde7e68fa93","fold-strategy-v2:fca297323e4c085e0db5b4aaf401ff60b63df5cf07ba33887307ecb529715326","fold-strategy-v2:179e21a4b23e659b83a484f0664e922ac490d42c5cb8f46246f481b6b7cc6f1c","fold-strategy-v2:cc0dc1196c22d11ba884aa9c378ea5b80dd56321e1d618183e94581e7a0e1d71","fold-strategy-v2:34f158ea3e14aa8cfb7aabc4f46caa764bd8d1075dcbed6aacd5e044f9241a45","fold-strategy-v2:1edc7362085db4375bf300c270247217bc20c0ddc9740d1317dcdffdaeda1d58","fold-strategy-v2:7dbee58d528efe4495f85687b3342e2df8c7cc540ed31681391a7e8146e390dc","fold-strategy-v2:4d15225b13cb28f94eb25636091e6a91c2d0700bf9c204b730b4e5ce1a4dc240","fold-strategy-v2:f50c2585a50a9fa856915e2628d31e70d95fb60a7b0823e6e8ea795b33fa73d3","fold-strategy-v2:228db9543cfba0d34e4b1d1e922240c479280b60d4674b98fa93039ee3f88ff5","fold-strategy-v2:796b0e563a69045cdd2c1c3f7c4ac359d8dfd3dd88887c4d1229bc52f92e65d8","fold-strategy-v2:69af42bb9466e62d04b81f13ef44188912a4d13261cf88290c408cc786130252","fold-strategy-v2:94864862abbcfefdaaa990c55f27e7da5b1bd4791f7d4d0440a456ddb085693e","fold-strategy-v2:2b20d3eb08b589443af0853371a96a3acf33195da86eb8960bd78c925992b090","fold-strategy-v2:9151f944905cecf609ddf5a1dead943ab9bbb0acd3a0d418cf5ab056ba47606f","fold-strategy-v2:e0af107c956a44eeee4d45f5e06d588733fd0493e72086f4f31f647e3b955947","fold-strategy-v2:289e7e04864019135f717b1614998faf41a748464b090801e67f85379ba3c0e2","fold-strategy-v2:0e4c420d9d08ad40e4098a11a9f6da88b34779a6efcaf9d29f95f97eb67577e6","fold-strategy-v2:1e4347363d5f2cd843a83d908c91c124ac38b337824982285cbdc391069c622b","fold-strategy-v2:b5a39903a7e3220263c9389409c34a19818b775ece36d914e07525df267ca535","fold-strategy-v2:5baaf7727c450b721983afb47154e2a0b1424fe3d0642d0f01ea2cb9e004c576","fold-strategy-v2:e07a39d893a9d27a8d6ef8aa418391057bb58f8854fd3da6c642abcd10d598b4","fold-strategy-v2:d0e84321bbf019f893be599e388e8fb652cce84058071283a7fb9aeaafd89967","fold-strategy-v2:41e2a63b81b50afd615fce912410921afe949539d99aa8941cfcf87f08316d0c","fold-strategy-v2:30c534be70181c5f7c8c3bb66951d79bb6fd2ef805a8d17556cb0cde5c257c4a","fold-strategy-v2:672cefaa1e6cd7c46b29190656246de6d10cc7c8eda45c9ee7c61dbdfbcddeb0","fold-strategy-v2:5a92cdbdd989bbc7eced180a4c17c12de11efd9981eb3a396e2165538f44f9c6","fold-strategy-v2:2e9099da1e9ae84778dd983ff9bb46ea72524fe6e95efb1a38e81356452f3939","fold-strategy-v2:b1a87a16a90ff2426b3a2dd856ec7286e09cc527e8df3e746f080603d950478b","fold-strategy-v2:91101c0159f4975a08651729035d2d1ff6d99fe786fd78493dcb232adaaf4d6a","fold-strategy-v2:b4868416024a40d6be0a5cafec773b45dfcb16a55f26e54bb26806e2059c1b7f","fold-strategy-v2:336bdfc16882b04fea91a353b50de8b4ad71081dbd0d2c93a19519ba0cd02dc5","fold-strategy-v2:e70d504fe3ad7626796eb48d6048088aface14d05e10c51db9b7d439acfbb354","fold-strategy-v2:7e2b7a1f84b688d3e470c8c459bc24515aef4d9fd473053e4cd2bd754a4c5bf2","fold-strategy-v2:128a95bfccd5efdf316200701608b910920b5cfa23775850a541d58b9f809305","fold-strategy-v2:b8b82844df9de3e2c0b18b555f588f344aa3bb61a4899d6b7b6b378dc2f63325","fold-strategy-v2:11c092d1f30951c5e7f9a133831b601d0ea23e83755d2b8d9556f49cadeff711","fold-strategy-v2:ed724b0fdddae23fa6165ba1f5ea8bc895540a3943f8ba6ac195be24b3ddbfa8","fold-strategy-v2:8e2a18f988a652f47659b5b88ff1b1086580b859d0ad4f532c829beb2b1e108a","fold-strategy-v2:30d98e66bf1502fadafac534320d3200e9448c0973665c1457ecd27d788fa107","fold-strategy-v2:0b2faf1c9714050d1ed99aa61c6d224f5cf59b4e96395fac794d70d68be15fab","fold-strategy-v2:fb9a186d6f0cc22ee462a833c6603f70ef36bb84b6669d40d67458cfa0814cef","fold-strategy-v2:ef6145d99b6582885cb19630770115fcb053900468499830d84bc0267ff34875","fold-strategy-v2:31031b1945c94209c0d7b783d6fa10297f37d48e7dcd44a630f642f54df3b754","fold-strategy-v2:ba111cbacca456398b28983bd806f087dba2bec9fe3fb619f333164f2ec31b4e","fold-strategy-v2:fce9d4e68c06363374fba98a699949d51bd23aa291697e6946c15e43c62deabe","fold-strategy-v2:bca9dc9ecee4236130e3982d88f1e104834e7c047e45fdfe4b0e731d3d42b865","fold-strategy-v2:71f362fa61f32ab3c339fb6752e154644f99b0ead12505678aa49f9e6d327e05","fold-strategy-v2:d503cd7f9aa554b5d76a8f832fdf2f30f4f6b627d114047a4fbcbe0efe12e549","fold-strategy-v2:890791e09ce16860858a5f97197e1ad9d16db7d6a55ea01da48f3caca594f85e","fold-strategy-v2:27258bd60cd455bc00a6f53c7a122422ec2aafaa1414764a6d54a42e88a5f9a6","fold-strategy-v2:23343a4b9ea40ae26fd35992015b07495034f4008359f98ac1dddf14a67c77f1","fold-strategy-v2:2f6e9dd4e3effe1bdbeded5cc83b53950e74539d2533aefc1456a437151e3242","fold-strategy-v2:57ea7912bd284aa5757ba11c676f3a63aefc0b66df74278424bb3127608fe6d3","fold-strategy-v2:a7b191083670d3a27b42d1197d8ef4fa5b2b613cc64747c2711aaaea6103d2ae","fold-strategy-v2:78631d35df3b631b632c035ca65798a66d5b083e9be82289555449dae0cf8af8","fold-strategy-v2:c8be3f95d6aea40fc8ae64b8c84ae6ef408902d91d2cdfc619247955b6dafee5","fold-strategy-v2:7b789d3714e6bd0826adfa6efc14cafc4ec8e554a1388272b32545982b80bf22","fold-strategy-v2:9f03ce250010bc21c31e74e2e39ff069a78d16f0db0eb6b0f9a2aae01973f064","fold-strategy-v2:dff1fb891bb126750be571ddc406e5a5270b8a8c76df8e0a39a507e56706e0b8","fold-strategy-v2:aef30ce482d36ec8cc53e7645d73491a3ff413be6c8b8c79a71aaedbfa2674b5","fold-strategy-v2:d2916d37ff2567d9f5461602172b22a4536cf946f486121380d787035ee19535","fold-strategy-v2:b497c89398794aa2f468243a5fa23c02518826b7dfce268ae3d32bcd477e8066","fold-strategy-v2:d0abe3ce7cec872540711f9fc54dbf0806b505d785e14ba86660f9a6bd4244c9","fold-strategy-v2:4fb075c03bc946d83a0758bd4bb33831ea0de61900a70e61a13d005de8663d2e","fold-strategy-v2:efdf3476e5bde4689cb3e053d7e501f845b309ca86b083b0733fd2e38375a57b","fold-strategy-v2:736bcbacf8c4b06b13aeef8ee4517de9426b428b1b5ed7a384d1a4b0bdd73b51","fold-strategy-v2:0cca499615d4325b5ac22fee3250d9366baca524dedf665138eb7964469a0104","fold-strategy-v2:5ded3b788c2546a6c7bdaa7aa2b3e3b40e71e021bb408587c610a74e963179a4","fold-strategy-v2:20e283a3c60173608bc7766be783c1a27bdf08c9e29aec2f303f62617af7bedf","fold-strategy-v2:673efdba812611bf7293ac00f25e9c4c0c0d4a259b71ec42847bfac1da2a3914","fold-strategy-v2:ae4d985e9f71449aceff19bacea28cd377e471b48dd3f51a8f7cabd254450947","fold-strategy-v2:a3e35ce51a7b75fd20a1b608523fac418172c06c16389973f116b5e717f4371b","fold-strategy-v2:d0574dbf0e30161986c4b20a6d2670b1052078d6d9586e97ea2c59213a729127","fold-strategy-v2:e6a54423d5ca034d18560f912054aaa170768a695044464528d0a81ab72d6451","fold-strategy-v2:48fec59e37d3d38aae7940a60f8ea8104ce3bc0a75acd70297edb17e2faf900f","fold-strategy-v2:a47964261f4320595abdf56cec6e1d28d1e93f1be9148705090bae403b2bdaf7","fold-strategy-v2:c72feac3afe1b6410aaedd6babebb6ca3928fc1931063ba1114d8d5c1e4175a2","fold-strategy-v2:cbe227bc565a260c599b257ce30b63b72a559cf86084e82e3235c3a408c70498","fold-strategy-v2:e370ed3516cfd1262d53ac3e744d9723d31cd70c6edc2f9e7765f4831e2b9f29","fold-strategy-v2:413f1b379a36b467ee8d94f8fc1fecc74977c641fbde2ae0b333cea8474eb81c","fold-strategy-v2:025a6674efb28df866942bc7c72a687d58f416c04355f1129a9570228e42e1c6","fold-strategy-v2:e196f4d5f2636568ac3f036aa8339f457dc1514d77b829b6487d643b41455105","fold-strategy-v2:1ca45067cb8ea3ec63637b0a844d8fe0fdbea75a1a3f17a5068f14fef8a0b41c","fold-strategy-v2:d3f5f2899a03a3243be2d4fe00d900d11dec737dd5e625532168e23a8e704d16","fold-strategy-v2:3a22283f2d88f365c173d51bb6de788fce0dd4857ca893b84576273437e5236e","fold-strategy-v2:69ffbe16c5e165fdf02e0afd57bba1414d6f5b1f80799566c55fdcb912982b1e","fold-strategy-v2:6738482c6dbb3790dc3ed0757d2cb5cd6b4e9c4842213bc84a99b21b087be1aa"],"solution":[{"crease":0,"foldSide":-1,"stackSide":1},{"crease":1,"foldSide":-1,"stackSide":1},{"crease":1,"foldSide":-1,"stackSide":1,"flapFace":7},{"crease":2,"foldSide":1,"stackSide":1}]}},{"id":"generated-08598017099e","title":"Mixed 014","chapter":"Mixed","paper":{"vertices":[[0,0],[4,0],[4,4],[0,4]]},"creases":[{"a":[1,0],"b":[1,4]},{"a":[2,0],"b":[2,4]},{"a":[0,6],"b":[4,2]}],"markings":[{"position":[1.4666666666666666,1.2666666666666666],"side":"front","kind":"star"},{"position":[3.500000000000001,1.5000000000000013],"side":"front","kind":"cross"},{"position":[3.499999999999993,3.4999999999999933],"side":"front","kind":"cross"},{"position":[0.5333333333333333,1.2666666666666666],"side":"front","kind":"cross"},{"position":[2.555555555555556,2.2222222222222237],"side":"front","kind":"star"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:6f6e2d295c7677b35257263c81d39c710c670f4e5464049d1fc008598017099e","openingFingerprint":"fold-opening-v3:6f6e2d295c7677b35257263c81d39c710c670f4e5464049d1fc008598017099e","strategyFingerprints":["fold-strategy-v2:091441bdf744b7b3bcda433d6a6b789e6d1e0741bfa670f4a3c7dbec3c635b49","fold-strategy-v2:9cf61bd0664951e378ab904f6902ababe2ac0ea79d50a44fdf4c527d82eed627","fold-strategy-v2:724f1ba2c66677066efeef3fc2e57c3a094cc7748d483f0329228ae1bfb690c1","fold-strategy-v2:68d64f2a91f6074621049f5c843dce5b14659da2ff0106d8e344b37299298dc8","fold-strategy-v2:b457916c7dde00ecf1986c4dd90605b43894583fe99d29adea2911bedd5a6f43","fold-strategy-v2:9b71be4a4041d9a360a95c97ac8d5810e6ba883ea0b97179199d73ab9e4e3f84","fold-strategy-v2:222c16a9b2f01e9aa968cfdb1c8dd9255840b3ba7de84e5771adc68a550c61c3","fold-strategy-v2:3efbf7754cf740ce9db9953ce6d2619ade229f888ca46822d992683abd38310f","fold-strategy-v2:0311162aeade223c064d11a61a6bd76a563ef6ddfb48d72da785c483ecde19f0","fold-strategy-v2:0bd1c93cc029301bab5d69bb538e79713fb47b14832b3c3f40406a549d6e60d4","fold-strategy-v2:6d29556be9105a4dcfc55addf679b2eafd7a9c0761a4c7df971d9f335d9ab14c","fold-strategy-v2:6a0ca24c3218f69c472802c70cc0a406c13c350644e515815b9c5a0e6418eed7","fold-strategy-v2:a2e7858c4c418de9fd0f30974b8bd56831972b633630b5c5d03bcc1f5c3ea0e1","fold-strategy-v2:fd8faab01c6a2a65c2022dd2ffd7bf8739fc8afdb8fd852ed2800b4822ae7f1a","fold-strategy-v2:d7b1b3cf6ce0750a6138932f1110d19ee4ae3d5b4320de6edb1752c80731a85b","fold-strategy-v2:2a6e543a1baa40364bb0d12cd2af285adb4809d1478bf5ea0f9352fabea3028a","fold-strategy-v2:7195d59a7c3da51b776e4fc227277611ff8e1538f4a09d34125f4b8c27f8f814","fold-strategy-v2:2104912d039169c60c9e90d1abd16ca1e93b1efa0261d278c4849441c4169dde","fold-strategy-v2:591f384540269731d56bce383a93b30e1670351c059776d16b319483560e5f57","fold-strategy-v2:7d78bd5011055293f1b202357d43ef5ff8e4b208c18e034d62da3da16a06aca6","fold-strategy-v2:4e99838aa06b7ee0606d4ec2cc8af4417e4938cd54f1a2f858d2028675bd870b","fold-strategy-v2:58618c5e342fe1f5e3c958232f4f05cfa80b42c0a75eff5ebff86eb5bd8a3a19","fold-strategy-v2:b3c4a13202a2c1ef6487b636df0e7c5ccda5a908a2861baef419cb82c51465ce","fold-strategy-v2:c549276bb2ac03fef4e9c051451d667a01fa6125c12c3117984ef23242a000e4","fold-strategy-v2:c806ec9f0ded209535890db477b736731a2c4254c0bf6f00ebdd5f3fe7e92e28","fold-strategy-v2:dc5af2957e4bd2b7c8be1ad61951866ae6c2fc6b69c46f8b66c32eed6d6dd22c","fold-strategy-v2:9ecb4af6e6d6db561f4efe90a19a47e0feed97022d76cb5f880e687d5f8062a3","fold-strategy-v2:2b98b16d00c13992fb42faf2fe0c6f4a9a15fcf724185398db5e4df88401b474","fold-strategy-v2:fae9a28c4219b86007070067ec51908516eb55b3d04b88a36b07aed3660acbe3","fold-strategy-v2:6e1d02d39d41bccb41cd5bae7514e436484e12d77926801854abaced9a03cdd8","fold-strategy-v2:d66260848d531315d6d6b65e58bd1159e0ebac803e888a974bbdbbc910e36009","fold-strategy-v2:9d35086399ce23601f6a52bcba2ac0b1c376ac2c815c04475893a0e8390eb07f"],"solution":[{"crease":0,"foldSide":1,"stackSide":-1},{"crease":2,"foldSide":1,"stackSide":-1},{"crease":1,"foldSide":1,"stackSide":-1},{"crease":0,"foldSide":1,"stackSide":1}]}},{"id":"generated-c2a839ab0220","title":"Diagonal 015","chapter":"Diagonal","paper":{"vertices":[[0,0],[3,0],[4,1],[4,4],[1,4],[0,3]]},"creases":[{"a":[0,5],"b":[4,1]},{"a":[0,-1],"b":[4,3]},{"a":[0,4],"b":[4,0]}],"markings":[{"position":[3.2619047619047605,3.452380952380952],"side":"front","kind":"star"},{"position":[1.2499999999999982,2.2499999999999996],"side":"back","kind":"star"},{"position":[3.249999999999997,1.2499999999999991],"side":"back","kind":"cross"},{"position":[1.7499999999999987,2.7499999999999987],"side":"back","kind":"cross"},{"position":[3.249999999999997,1.2499999999999991],"side":"front","kind":"star"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:477aea1d0097e7f542bcec5ba67e3828b19075301614c11bcab3c2a839ab0220","openingFingerprint":"fold-opening-v3:477aea1d0097e7f542bcec5ba67e3828b19075301614c11bcab3c2a839ab0220","strategyFingerprints":["fold-strategy-v2:d47b22beee44ac8138ead60ad5b4c69754941183230a7324784bd99a5b218033","fold-strategy-v2:0d1ab0b26d72db153633f9ddb50ab2aed12b45034c18305b63fda6427b805137","fold-strategy-v2:22d76c68bc19f52c860b130879045f862c5c7a852738ec78b759144671ad139a","fold-strategy-v2:dbe158a1b2cd16c30a2ae09d82ee30603fe0d3cda65520ef4d4855978c0d1723","fold-strategy-v2:f703c3cfcaf6b4604cea6c2b36c60cefb27429f3d1913f78fddcd4749e6d0ad2","fold-strategy-v2:fc87c40df043377e65466bff1f8c66c6319b63eece5b6da2a50ecfb94823f394","fold-strategy-v2:fc2cb359b7f7be2636928f38ebdc61237ba8fdfb1aad4b72f20bd6370246e2ea","fold-strategy-v2:4109f139fc8d2c6baad49a8f3148798a2ebcaab520a85ab4e489ca982ddf00fb"],"solution":[{"crease":0,"foldSide":1,"stackSide":-1},{"crease":2,"foldSide":1,"stackSide":-1},{"crease":2,"foldSide":-1,"stackSide":1,"flapFace":4},{"crease":1,"foldSide":1,"stackSide":1,"flapFace":1}]}},{"id":"generated-15ce9a2a43aa","title":"Grid 016","chapter":"Grid","paper":{"vertices":[[0,0],[4,0],[4,3],[0,3]]},"creases":[{"a":[0,2],"b":[4,2]},{"a":[3,0],"b":[3,4]},{"a":[1,0],"b":[1,4]},{"a":[2,0],"b":[2,4]}],"markings":[{"position":[1.5,2.5],"side":"back","kind":"star"},{"position":[3.5,1],"side":"front","kind":"cross"},{"position":[2.5,1],"side":"front","kind":"star"},{"position":[1.5,1],"side":"front","kind":"cross"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:60d332a1d2ef5b82a369098e1efd8bafa5f82cfcc103ef6f5f4d15ce9a2a43aa","openingFingerprint":"fold-opening-v3:60d332a1d2ef5b82a369098e1efd8bafa5f82cfcc103ef6f5f4d15ce9a2a43aa","strategyFingerprints":["fold-strategy-v2:7ee989e70d7ca132c425c532e44892b1836123ffd6cc39b31ee62043db1c7f12","fold-strategy-v2:d567bfeda855ab376eeb511e7ac9106f8e090fb37748a638ac712aa6cde15cf2","fold-strategy-v2:d58dc052b1d714513cfff1106d71c2fc559a238c05775d5a2030a1cf9ab43bb7","fold-strategy-v2:8ecd4e37c0cb36c34bfbf96f5a7558c6729d2b5563df828e1642a02cfdbe0e95","fold-strategy-v2:488f48ab18400586ea5d530b507855682c05945e34b01401c2cdfd0403169783","fold-strategy-v2:e645d97af19399cd7a650bcaaa09718448dc9b988cafdbcd02c2e75a4f86d873","fold-strategy-v2:49d764364332ad5f861808d459e970c6d9e837e85d471dc1b0a5aa7974f95dba","fold-strategy-v2:b460869185fe1d33a0f2aa0c113f6cb11a5b37b7d1c6407591d541bcffdde9d8","fold-strategy-v2:ec32064c74f181b5936365aba6acab419e72fadf23e2cb93e017c6a54ab9b514","fold-strategy-v2:24bee0133089e9c92f43cee3d9a6ea0357a8c458619eb89eac1528e1cba0323e","fold-strategy-v2:cf754226268d5e2536213cb2f688bd8b340ce70dfa36ceade7b263df9d62beea","fold-strategy-v2:8916fc8b8aa7c50cf9649d9be499056bac5fb7b85730a81bae5ecd31521a3890","fold-strategy-v2:1081b73bad823488240cf55ad47b73c46e6868c166e168329b4d50408f547b2b","fold-strategy-v2:48bdd4f2ed35044f5de7abfcfab258c32a0720de3e9d2637e2c89f6badd53688","fold-strategy-v2:b6b69b306dc6af863c89200cea86367ee1a6673ec2b78e9880098d9b86531feb","fold-strategy-v2:2adaf31949f11222471e482d54d0c664fd03eae8be3bcf521f5460073fb55207","fold-strategy-v2:e0a7ade9ea5028a00e9b2f264b62517bf4ca20796dc52a71d46b33793e143ebf","fold-strategy-v2:dcf8e51bb499d4ecb288f216d8eb028bef5145214fc70b6050fd8f76b91452ae","fold-strategy-v2:19164925fbcea334a32df619e9a19916b991866ccd0c48057b4187b02fc7ba56","fold-strategy-v2:628ab5ad129fa986149dcd29a06a30658dcd3c75af36405286c8ede7edd01daf","fold-strategy-v2:10b7219c81efe782c2e3fb30e3d22df53437de4b5382dd56d86b866c28295b9c","fold-strategy-v2:14d70093a71123a87f73bc81108e0dadb280023e2d0e7daac7397f92e43632d5","fold-strategy-v2:688a423d3ef6dae5806b0d66e8bcbcd21a78bbb62bdf0356f37706a9110b5b87","fold-strategy-v2:f8408b4060267c58e966acca24cb9e2a2c6f18d2b9d84dbff0efa18fe2742d26","fold-strategy-v2:5d40f578f01f9d8e6f9681bfd70cc7d277f8ead74602991a458164664180af68","fold-strategy-v2:4ab933e341b14f774566afa2a267a2fde03e54381be29795ba357d8dc5a4edf9","fold-strategy-v2:3266db49d7ca8a8c0eab6061ef2f1ef6ea20fbe9cfebe7c3d50ae32125cca848","fold-strategy-v2:f5085d4dcf67bb0a727431cd49d2f4337066bc457a6227619db20309e027157c","fold-strategy-v2:dd161d7aecfd0085ddceb5244a756f2fce65020edf6ebadb56f9e3e228f810bf","fold-strategy-v2:564e481595a59399ed02a22c4b9a5505457aa27a68b052cb14edd145197d5295","fold-strategy-v2:dd55183357352928f93367c9c257b96c4f2642d50c9e12b8ca65a07a6ab60010","fold-strategy-v2:5529d8f5d7fb6a82f069f5924299f8e755c6e692981d8945ae26c8c23b9d7f11","fold-strategy-v2:7b72f7339d1a9563273b51124e12ca580d72696e0cfe5804dfcceb53fbf2bff6","fold-strategy-v2:5a08d3d3760a719099f47a2c59f32c5dbbf3d6dd030ff8e2e513fa1985ab69ce","fold-strategy-v2:b8d3207d9925749175a2760f80e0fdec8c74bb816598e9763583064f53dbe07b","fold-strategy-v2:37969f9e1d6f078a4780e483b09bafd2bb6099f596f498054ef1bd9dd10794f3","fold-strategy-v2:3e8f813b47151f8493b15bd08e62423d5f105712db7b3cad2c8adb3698353a1d","fold-strategy-v2:31f81f2fdf36a2fe05f4b226f9f412cd7ad7b07058c86059a5c7f1b769db5754","fold-strategy-v2:d73ebd4138ab5b72e21f87fe8c4240a19cdee9cd618ee5664b517e27d9e3d4e7","fold-strategy-v2:0d0e52e02d81a06545885c59481daefb115bbf819572aee4e5440c3a63b96232","fold-strategy-v2:257dbf7b38d009d1f4966bb7aa91f907d7da4d0bc595a8586dd4dfda330578c3","fold-strategy-v2:187b572e24e45fb3acebad794af316eea21833d156a00022d00043cf3f6518a7","fold-strategy-v2:b468697215413c7e93914c0b5ef7e7ea7ba2fbf69d2daf571d38331b1dd0f99b","fold-strategy-v2:692afce4e1df5b1773fbfaffa41378e0261434fcbf2457829ea8347fbe4c7853","fold-strategy-v2:8d89acaaebeca98fa4efd25d1159b963846f4e63d44bc6b4bc3ba091c5f9e6a2","fold-strategy-v2:1cdf1e8b3e9aced8d04bdac66550536e0ef6ddf03f9d90ff483dc3cfb9d77f6f","fold-strategy-v2:b46eac1fdd1d77dd8746251451a4d419d38e5e35b4b97d93705fec9c7c63a5b9","fold-strategy-v2:0b39757a95e03c08d68e272b2a67e6089bc496c12873094459cdcdb2c2eb0c6d"],"solution":[{"crease":1,"foldSide":-1,"stackSide":-1},{"crease":2,"foldSide":1,"stackSide":1},{"crease":0,"foldSide":1,"stackSide":1},{"crease":3,"foldSide":1,"stackSide":1}]}},{"id":"generated-d3f4d0ac6f12","title":"Grid 017","chapter":"Grid","paper":{"vertices":[[0,0],[4,0],[4,3],[0,3]]},"creases":[{"a":[0,2],"b":[4,2]},{"a":[3,0],"b":[3,4]},{"a":[0,3],"b":[4,3]},{"a":[2,0],"b":[2,4]}],"markings":[{"position":[0.5,0.5],"side":"back","kind":"star"},{"position":[0.5,2.5],"side":"front","kind":"cross"},{"position":[3.5,0.5],"side":"back","kind":"cross"},{"position":[1.5,1.5],"side":"back","kind":"cross"},{"position":[3.5,0.5],"side":"front","kind":"star"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:b52b04f56352da6c3caf00b759e77fd4ae022a04b5b05ecc2526d3f4d0ac6f12","openingFingerprint":"fold-opening-v3:b52b04f56352da6c3caf00b759e77fd4ae022a04b5b05ecc2526d3f4d0ac6f12","strategyFingerprints":["fold-strategy-v2:35bf9620172eb9962baaa69fd002882eab4f48413e7cde5534678d216f941b1c","fold-strategy-v2:d3dc8002d07b14ebd5ffdf06ec1cfbda11572145e249e80f785e13b2b6515ae4","fold-strategy-v2:9776b6134a36dd828de5391a4954e647396a768eec77f01e376d038bf13cf394","fold-strategy-v2:1733246badb9d0ca0356e0e0c4afa12db5e67b9e38f97c5195a5484fc1126a00","fold-strategy-v2:d06130f0aa2399aaeffaaccbce9ab4c59fcd1325e51034e11372f1abe3e69b0a","fold-strategy-v2:84295f84d53b3c31a1862e0c0ac3679fb36281b305eed1222a4959f9c0ace4dc","fold-strategy-v2:3ec36c4e7c018fdeaca4f208670ad87d2ea030563be7070d9ebc6df33a6b10b0","fold-strategy-v2:d1117d634379bd85208b746aae99db5f33d19d62ad95f13cb3329b7e578bf9bc","fold-strategy-v2:cc1f412c826f1136fa0ca073bfc4214cac6ac87e9f4ae55194719a096ecd76a2","fold-strategy-v2:12d568839a0de270dfd72bb32c6cf85dd71260cea8f8a75a1dd1f66e0824c219","fold-strategy-v2:a4b393dce36d1b04b503cae831c77bc51a57d953ac0e23a733a605c61755a5f8","fold-strategy-v2:cb8b4b4cf615cca24cd4b38908c341766fd251adfb47d032c0fd15292fbd123e","fold-strategy-v2:eae3ce81f5ece0e580d79233da819cec929a2c2b847ee3a7c697a3bee54ae49d","fold-strategy-v2:0e3a42b14ed7196286505d8183ae4f5113aa50b1802b1e98fc0894a9a41ba48c","fold-strategy-v2:ddd4bb853de6ef2e9252f9e757dbaf09707c4109964362ad142ada2aee7a8557","fold-strategy-v2:c2fda025e5e80e5e7a1bac73074b64de3ee81a68fb3bf0c68763df1ec1b33804","fold-strategy-v2:a62252a8169871d78909db8dbf6c987290b6a5d20e8ddc8e0d61f52094572f42","fold-strategy-v2:971b0cc7567da00953941935d6d8a49d8468fc3fdd8b299e69079219ef77e44b","fold-strategy-v2:770dcb28ed2d1c6786eddc5c10cc142082d9121c4d961ea6deb9dd7151cc3692","fold-strategy-v2:61a37a34604d4c4db5232e4c5f4392ca4e5fce7436e00276e0c33c349fa03c4f","fold-strategy-v2:433b0dfe0deb5add794b155dfcca71bf6d4d1750737118adc3f61c602d8cb14a","fold-strategy-v2:e30537450a06a8ae98df9ecfa056aececbe66a29aae52ffebde7de70a18cf632","fold-strategy-v2:fd84ce8539bdc163bf1e900c9a4cdf786e1190fd9ef9c940870c285b74555ffc","fold-strategy-v2:09e00c74c2f5c6f9cfdf9ebb02cd6f4fe933e35583bcfe9e324eede4ef4a5c76","fold-strategy-v2:e8e3947cccf55bf1cf611959b17753690773303a2985d0765f897207db2c7faf","fold-strategy-v2:ebcdfa368ada96c07112a4538efb7a29a553bf46c424f2b891c2489b5db2b859","fold-strategy-v2:ffbc3e90f03313158ddcac8f663b09c7605606b215dff6a5ff9a1b556ee762f8","fold-strategy-v2:4cc1c18124b6d13365b8e82bc28007e5c4d3d238ca5be869ba597521e0dbb812","fold-strategy-v2:9700540a25efd8d6c65b7a4a8cd6d36f1d153a34b3fe8e49a26e73f1de928367","fold-strategy-v2:27f1949cb76f09bfd898614595ad6386b3dfc0cdedb5e35557d7008f234a1eab","fold-strategy-v2:051a10b73ae404045b2f45ba0e722e9d23b14df6214ab4fca223fa6e3453865a","fold-strategy-v2:c5d2abce1f0123c05f33af7047f00a8228207e3197f9ecbc5a4bf501f5d9af04"],"solution":[{"crease":0,"foldSide":1,"stackSide":1},{"crease":1,"foldSide":1,"stackSide":-1},{"crease":2,"foldSide":1,"stackSide":1},{"crease":3,"foldSide":1,"stackSide":-1}]}},{"id":"generated-482ec1cd34c8","title":"Grid 018","chapter":"Grid","paper":{"vertices":[[0,0],[4,0],[4,3],[0,3]]},"creases":[{"a":[0,3],"b":[4,3]},{"a":[1,0],"b":[1,4]},{"a":[3,0],"b":[3,4]},{"a":[0,2],"b":[4,2]}],"markings":[{"position":[0.5,2.5],"side":"front","kind":"star"},{"position":[3.5,0.5],"side":"back","kind":"star"},{"position":[2,2.5],"side":"front","kind":"cross"},{"position":[3.5,2.5],"side":"front","kind":"star"}],"par":4,"analysisDepth":4,"geometryDepth":4,"hint":"Keep the stars exposed and hide every cross. Both sides of the paper count.","generation":{"fingerprint":"fold-behavior-v3:44ae4ecfec2c88612e95c57e5a1a6a8dbb2cda3600bb6403ea7a482ec1cd34c8","openingFingerprint":"fold-opening-v3:44ae4ecfec2c88612e95c57e5a1a6a8dbb2cda3600bb6403ea7a482ec1cd34c8","strategyFingerprints":["fold-strategy-v2:daa725eaa23a57f44c4708152956365c132b70e1ca4762c6f69307753c741991","fold-strategy-v2:4bcebb50ed6002116844d831ab3cae60b9f53fccd42a159715bd92f08d2eb3d5","fold-strategy-v2:389202c06da2762cf51cada81994266c51a28250398ab21325dd469b5ea10299","fold-strategy-v2:108e9540a01f434eef4a0398c9ac515859c501919ed98f39a118a4302cc12b7e","fold-strategy-v2:6f03a3ab95081a543a8f6d815f8e5f4c15dfb3968b9b4a06dbd0c3ae185c5f3b","fold-strategy-v2:405ea1ec7d15ad949a4f3c4aa6af4191899a16a43dd9832b7eba8048b27c3626","fold-strategy-v2:65cdbedbeea8846c3025195ebe4cf648d72cc761b3bbfcb04caa36c2c75e5749","fold-strategy-v2:da92cbaf579e970f2375ea3b39c0fa9edf31381d5a75ac8cf29be94ff32a3657","fold-strategy-v2:cf9f4afe45a0dba0c16424fea285e155ce5119d3d6c172ea741052c277a3bd17","fold-strategy-v2:0d2d84de8093fbb6cb2fe3a338a0371b91a7c99f372e5c48a38f3ad932022e32","fold-strategy-v2:22576b0476cc60b7db19bcee0011e50b5fd89285a28872aaebe31e5913924020","fold-strategy-v2:8d328008a42bddb4cf6730f54355f2917a7d40fcc507fef2acfeabad32d7cb55","fold-strategy-v2:4d333725ee8b038ace2c2402e14d187bc01c69d3ef311fea129dc04af4356db5","fold-strategy-v2:aed6c23c4b3f373cc94d87bc2065414890ba1cbe1a6a2e773d22980d55cae463","fold-strategy-v2:0f576142ee2cf02a88ce4329a28b11bd15112d8be5fe6216d44fca4f2d1faca7","fold-strategy-v2:64c592a51b58f28495f9f6309ebee929e1dca191960157011fb453e7aa7abbd4"],"solution":[{"crease":3,"foldSide":1,"stackSide":-1},{"crease":1,"foldSide":1,"stackSide":1,"flapFace":7},{"crease":2,"foldSide":1,"stackSide":1},{"crease":0,"foldSide":1,"stackSide":-1}]}},{"id":"generated-1070d339f7bb","title":"Folded Grid 019","chapter":"Folded Grid","paper":{"vertices":[[0,0],[4,0],[4,4]]},"creases":[{"a":[3,0],"b":[3,4]},{"a":[0,1],"b":[4,1]},{"a":[0,2],"b":[4,2]}],"markings":[{"position":[3.5,1.5],"side":"front","kind":"star"},{"position":[2.2222222222222223,1.4444444444444444],"side":"front","kind":"cross"},{"position":[3.5,2.5],"side":"front","kind":"cross"}],"par":4,"initialFolds":[{"crease":0,"foldSide":-1,"stackSide":1}],"analysisDepth":4,"geometryDepth":5,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"solution":[{"crease":0,"foldSide":1,"stackSide":1,"flapFace":3},{"crease":2,"foldSide":1,"stackSide":-1},{"crease":0,"foldSide":-1,"stackSide":-1},{"crease":1,"foldSide":-1,"stackSide":1}],"fingerprint":"fold-behavior-v3:00df7a4d13cc79452c8d3e3563425e483b0585b4e8dc208edc1a1070d339f7bb","openingFingerprint":"fold-opening-v3:00df7a4d13cc79452c8d3e3563425e483b0585b4e8dc208edc1a1070d339f7bb","strategyFingerprints":["fold-strategy-v2:ae907d07189d0041006cab99df7955e780bef0d89e16eb4cf44782452baf884c","fold-strategy-v2:ee0f813c1d32b087fb8658fda28c5eecfee2a4a0aaee9273fc4ea1a6b98a6dbe","fold-strategy-v2:9036ae4da4c069a33b1ae5e57f841d1cd1c534439ffce8bf619292a074122985","fold-strategy-v2:843ac4a54680d12ca0fd85e589cdf0a40c3b63600d7aaf08b2273bed63d3359e","fold-strategy-v2:13591a0a5c9d4403c701742d841cd77b104060b7974c189c1e764ffeff5f51f1","fold-strategy-v2:788fb9b71a8eabdfbe7cd568d9556c1d2049873dccb06019c4cc5a94930ad24c","fold-strategy-v2:d59c693a9d464e78e0d93b0abf0c19e4c1c6a399a6f5acfc9840fd83760a3e93","fold-strategy-v2:6e894635b7ba89205476a781fac52f6586cfb8a45a30616a87ae993f08fb7062","fold-strategy-v2:4e9ff3a888b7f9fb6099defee6748fad7eedb7d17619ce3eec201fa5d95401fd","fold-strategy-v2:b4937669c390872bdc7f75d6f9db8d564b6e59096e134ada57f6fbb68540422c","fold-strategy-v2:f6b955fa04261ef595f3a724c3d8b0b4b9dd18a621e9b606c43eb1155c0a208f","fold-strategy-v2:03fdd7d1a781822505f56893fa09c03224ff039c7c56a07f51b254ee4b66a064","fold-strategy-v2:a65e423373fa63af02c7430370e7fb73ceb7084961e1fc32bed8f3e4d8d70f81","fold-strategy-v2:3938a64720f97dbf7e6d79e048fab9eb340a522c4b19d37abef308dd117e6cd5","fold-strategy-v2:f5198dff24b84fc387ba6428ecf8d4ef4cd7e59d8ae683a11008393cb3733424","fold-strategy-v2:8a5ca86f90ef4d81a84e6b11c9a7b857aead1a063a978990be196b3906a68a37"]}},{"id":"generated-2e8811b386dd","title":"Folded Grid 020","chapter":"Folded Grid","paper":{"vertices":[[0,0],[4,0],[4,4]]},"creases":[{"a":[3,0],"b":[3,4]},{"a":[0,1],"b":[4,1]},{"a":[0,2],"b":[4,2]}],"markings":[{"position":[3.5,0.5],"side":"front","kind":"star"},{"position":[3.5,2.5],"side":"back","kind":"star"},{"position":[2.2222222222222223,1.4444444444444444],"side":"front","kind":"cross"},{"position":[3.5,2.5],"side":"front","kind":"cross"}],"par":4,"initialFolds":[{"crease":0,"foldSide":-1,"stackSide":1}],"analysisDepth":4,"geometryDepth":5,"hint":"The paper starts folded. Open or refold its exposed flaps. Keep the stars exposed and hide every cross. Both sides count.","generation":{"solution":[{"crease":0,"foldSide":1,"stackSide":1,"flapFace":3},{"crease":2,"foldSide":1,"stackSide":1},{"crease":0,"foldSide":-1,"stackSide":-1},{"crease":1,"foldSide":-1,"stackSide":1,"flapFace":0}],"fingerprint":"fold-behavior-v3:aaf0fffa9eddcefd9a99027a45516b5a1a0e94a0cd66ea7636472e8811b386dd","openingFingerprint":"fold-opening-v3:aaf0fffa9eddcefd9a99027a45516b5a1a0e94a0cd66ea7636472e8811b386dd","strategyFingerprints":["fold-strategy-v2:c2715498ccf2ecabc3f0ea51165f76628793445d08c495cf844d47caff1c9df4","fold-strategy-v2:f959074a867dd78aecef776ab6fb79cfa3ac01311b72fe6a262553e760ff15f4","fold-strategy-v2:e82e59b84f1173caad34fd9d33588c6378c3193b9589d81e19b560a8d193a72a","fold-strategy-v2:95d7d3a17026de5a516113396a89a95f59764bb2415a467c4e1a34396a616de2","fold-strategy-v2:841c29bf924c60e75fdc2b571aed1ffae7ed31930817cb81e8cf871452e55aaf","fold-strategy-v2:d8f132e02730519b337c6c17be7053c1f78f5b1787e9d4c6da3878ea329eeb38","fold-strategy-v2:208f350e692c8e8de6750f210f459ed73bb7a19442aed0101dcee62775d26afb","fold-strategy-v2:5ebe85bfdca2f93559bae673c322a363b49bedeb14a4738b407e7c90a05f295f","fold-strategy-v2:9be2aaaca775d3adc7c00fa03fffd4173f04f3f7f9be4f50a98c837b1e3f608e","fold-strategy-v2:1975626ba5e9e4ee6043b4c50f6ca1767bba086d9a299e2236f801b30ef2b1ce","fold-strategy-v2:e5b22cd85388f3a3def4b95c2c42d586bddb9c837e72b27f3ac121a7298b5dba","fold-strategy-v2:e357958b891a6db4c0ae7aaacca39b82ec2315fee7d046568fbdf005e75f3dad","fold-strategy-v2:2e39c68df4866cab6df63181c3d7cf78485509d2e27a6918a832a64aa6c9c553","fold-strategy-v2:42b0ce6e6d50b1476ce4f2b20941c6c36afdcef70e33723948fa3d929f01e09a","fold-strategy-v2:c836db6b0baad02fe010bc2359d1f467205b54674253329157ce0bb816ff7850","fold-strategy-v2:59dc899f7c9c10bd848a29766d20164389bf0f7bdd0eec967023e59e556ecc19","fold-strategy-v2:a953c09d036eb4260da9f1688d83629257091c0556e8b76817abd2b5df802dee","fold-strategy-v2:7f73ce4566763a2c3bb7de08957bafbd03e1e522a989479550ef86fe38b896b2","fold-strategy-v2:5bdfdf3418b17359e8db3dc7475acf1752eb4ec26ddc1452706ea2f5e5671899","fold-strategy-v2:2b3f336ea630675223282ed07afb7db7d18dfe52c6cf8b1d26390090339b4599","fold-strategy-v2:b1e8e4ee3896ee16569b139c789d73a6c75230b1d2aad5607c8e9d5a054e2bb6","fold-strategy-v2:058ef134809d489253f9857ffb9d97526cd1c9a1fa70bdcda2eb5dae7136e7d2","fold-strategy-v2:196cffca524ced7123b28ad8cadbd4b11002e09f6aafb1a0fbe82ffc30ff2441","fold-strategy-v2:308a41990b81cd056a788184a2af91d2bd02f96273d03200986b7285a3d9e207","fold-strategy-v2:5eba759f12a7355a7cb3720055fcf0784af2944b0b2f6d2c89f3c582b2210d0a","fold-strategy-v2:bf5ca61112ed0f290e0f22ef8a7efe469cdea0a7c3c604e3807aa6c1acdd0e10","fold-strategy-v2:5d6cb8eef1512c32c6e8e4e9c1889d7b33848bdc2f179629b3ca15fd72994f16","fold-strategy-v2:78057a9b421c4b0beaf28f770be6217ff895ccd14ba4d771eab2488ca8cb07c6","fold-strategy-v2:91a57f96ccfc93efedf5298c9f4e90bee247997dab24a63c60fdf7b592926122","fold-strategy-v2:8b6f9cfc8dfa5a5abaf48368f945718ab49e2adc1a06873eea279d7fa9370e48","fold-strategy-v2:6e80d09810c8d3b339dafec668d660f5cb6263cebf524902ed03002bb439d0f9","fold-strategy-v2:90b0570eee65cb800c1cee19aa1e96c867349f14d0e129c934749bd9c30140ea","fold-strategy-v2:3463c6696e61c8b31b0febbede0b48d074ff9750f77e0f3f8f9cb51db6885d21","fold-strategy-v2:5a936fe3582464ddcdb0109a6585a6f59ac7e96be22c0f79764cc66206e91d3c","fold-strategy-v2:f4539b2a698d5c71c89f6d1210deb4a8bc73f28c427494738b35d2647ef3f0b7","fold-strategy-v2:6a7583a38b6386dd610e0a3c731c49b1d8bc1d8519ce6511bf2bcec8fca2453b"]}}]'),Hl=(n,e)=>{const t=n.map(([i,r])=>i*e[0]+r*e[1]);return[Math.min(...t),Math.max(...t)]},U_=n=>{const e=n.map(([t,i])=>new ze(t,i));return tc.triangulateShape(e,[]).map(t=>t.map(i=>n[i]))},Gl=(n,e,t)=>{for(let i=0;i<n.length;i+=1){const r=n[i],a=n[(i+1)%n.length],s=[-(a[1]-r[1]),a[0]-r[0]],[o,l]=Hl(n,s),[c,d]=Hl(e,s);if(l<=c+t||d<=o+t)return!0}return!1},F_=(n,e,t=1e-6)=>!Gl(n,e,t)&&!Gl(e,n,t),qd=(n,e,t)=>{const i=n.map(()=>0);e.forEach((a,s)=>{for(let o=0;o<s;o+=1){const l=e[o];F_(n[a],n[l])&&(i[a]=Math.max(i[a],i[l]+t))}});const r=Math.max(0,...i)/2;return i.map(a=>a-r)},N_=(n,e,t)=>n.map((i,r)=>i+(e[r]-i)*t),O_=(n,e,t=1e-6)=>{for(const i of e){const r=(n.b[0]-n.a[0])*(i[1]-n.a[1])-(n.b[1]-n.a[1])*(i[0]-n.a[0]);if(Math.abs(r)>t)return Math.sign(r)}return 0},B_=(n,e,t)=>O_(n,[e])*t,Hs=(n,e)=>(n?1:-1)*(e==="front"?1:-1),k_=([n,e,t])=>[n,e,t+9],z_=(n,e,t)=>Math.max(0,e+t-Math.min(...n)),H_=(n,e,t,i)=>{const r=(n[0]-e[0])*(t[1]-e[1])-(n[1]-e[1])*(t[0]-e[0]);return Math.abs(r)>i?!1:(n[0]-e[0])*(n[0]-t[0])+(n[1]-e[1])*(n[1]-t[1])<=i},G_=(n,e,t=1e-6)=>{const i=e.b[0]-e.a[0],r=e.b[1]-e.a[1],a=Math.hypot(i,r);if(a<=t)return null;const s=n.filter(l=>Math.abs(i*(l[1]-e.a[1])-r*(l[0]-e.a[0]))/a<=t).sort((l,c)=>(l[0]-e.a[0])*i+(l[1]-e.a[1])*r-((c[0]-e.a[0])*i+(c[1]-e.a[1])*r));if(s.length<2)return null;const o=[s[0],s.at(-1)];return Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1])>t?o:null},V_=(n,e,t=1e-6)=>{const i=[];for(let r=0;r<n.length;r+=1){const a=n[r],s=n[(r+1)%n.length],o=[(a[0]+s[0])/2,(a[1]+s[1])/2];e.some((c,d)=>H_(o,c,e[(d+1)%e.length],t))&&i.push([a,s])}return i},W_=(n,e,t,i)=>{const r=[];for(const s of[t,-t])for(const o of e)r.push(new U(o[0]-n.position.x,o[1]-n.position.y,s));const a=new Uo(new Wt().setFromPoints(r),i);return a.computeLineDistances(),n.add(a),a},G=n=>document.querySelector(n),zr=G("#canvas-host"),X_=G("#stage"),es=.024,bn=es/2,Wa=-3,q_=.06,Y_=matchMedia("(prefers-reduced-motion: reduce)"),sr=new URLSearchParams(location.search).get("pack")!=="curated"&&oc.length>0,zt=sr?oc:I_,Vl=ic("fold-rejected",[]),Na=new Set(Array.isArray(Vl)?Vl.filter(n=>typeof n=="string"):[]),Yd=n=>[n.id,n.generation?.fingerprint,n.generation?.openingFingerprint,...n.generation?.previousFingerprints??[]].filter(Boolean),Hr=n=>Yd(n).some(e=>Na.has(e)),Wl=new Map,Xl=new Map,Tr=zt.map(n=>{const e=Wd(n,1e4,sr?n.generation?.solution??null:null);if(!e.allowed||sr)return e;const t=ja(n),i=Vd(t.runtime,t.state,e.solution),r=Wl.get(i);if(r)return{...e,allowed:!1,reason:`Its shortest solution repeats “${r}”.`};const a=x_(t.runtime,t.state,e.solution),s=Xl.get(a);return s?{...e,allowed:!1,reason:`Its physical solution repeats “${s}”.`}:(Wl.set(i,n.title),Xl.set(a,n.title),{...e,signature:i})}),et=new i_({antialias:!0,alpha:!0});et.setPixelRatio(Math.min(devicePixelRatio,2));et.shadowMap.enabled=!0;et.shadowMap.type=Jl;et.outputColorSpace=Ht;et.toneMapping=ed;et.toneMappingExposure=1.04;zr.append(et.domElement);const lr=new zu;lr.background=new We(15196113);const Dt=new Qt(35,1,.1,50);Dt.position.set(2,2,9);Dt.lookAt(2,2,0);lr.add(new mh(16776172,11051410,2.3));const Ot=new vh(16774622,3.2);Ot.position.set(-3,5,8);Ot.castShadow=!0;Ot.shadow.mapSize.set(1024,1024);Ot.shadow.camera.left=-7;Ot.shadow.camera.right=7;Ot.shadow.camera.top=7;Ot.shadow.camera.bottom=-7;Ot.shadow.bias=-4e-4;Ot.shadow.normalBias=.015;Ot.shadow.radius=2.5;lr.add(Ot,Ot.target);const ts=new Gt(new qr(30,30),new fh({color:5326654,opacity:.38,transparent:!0}));ts.position.z=Wa;ts.receiveShadow=!0;lr.add(ts);const Bt=new Jn,ii=new Jn,ri=new Jn;Bt.add(ii,ri);lr.add(Bt);const ns=new xh,Gs=new ze,ql=new Zn(new U(0,0,1),0),xn=new U(2,2,0);let is=[],cc=[],Kr=[],Zr=[],_t=0,Le,Ue,rs,Sn,An=null,Gn=[],Vn=null,Te=null,At=null,Tt=!1,Gr=!1,Yl,Un,Vt=!1,je=kr(),pn=[],yi=[],zn="fold",Lt=null,Kt=je.paper.vertices.map(n=>[...n]),wi=null;const lc=()=>{const n=Le.level.paper.vertices.map(([e,t])=>new U(e-xn.x,t-xn.y,0).applyQuaternion(Bt.quaternion).z);Bt.position.z=z_(n,Wa,q_),Bt.updateMatrixWorld(!0)},$d=()=>{ts.position.set(xn.x,xn.y,Wa),Ot.position.fromArray(k_(xn.toArray())),Ot.target.position.set(xn.x,xn.y,Wa),Ot.target.updateMatrixWorld(),lc()},$l=ic("fold-completed",[]),Xa=new Set(Array.isArray($l)?$l:[]),dr=n=>{n.traverse(e=>{e.geometry?.dispose(),e.material?.userData?.local&&e.material.dispose(),e.material?.map?.userData?.local&&e.material.map.dispose()}),n.clear()},Vs=(n,e=[0,0],t=0)=>{const i=[];for(const a of U_(n))for(const s of a)i.push(s[0]-e[0],s[1]-e[1],t);const r=new Wt;return r.setAttribute("position",new un(i,3)),r.computeVertexNormals(),r},Kl=(n,e=[0,0],t=0)=>new Wt().setFromPoints(n.flatMap(([i,r])=>[i,r]).map(i=>new U(i[0]-e[0],i[1]-e[1],t))),$_=(n,e=[0,0])=>{const t=[];for(const[r,a]of n){const s=[r[0]-e[0],r[1]-e[1],-bn],o=[a[0]-e[0],a[1]-e[1],-bn],l=[r[0]-e[0],r[1]-e[1],bn],c=[a[0]-e[0],a[1]-e[1],bn];t.push(...s,...o,...c,...s,...c,...l)}const i=new Wt;return i.setAttribute("position",new un(t,3)),i.computeVertexNormals(),i},Pa=n=>{const e=new uh(n);return e.userData.local=!0,e},K_=n=>{const e=document.createElement("canvas");e.width=180,e.height=72;const t=e.getContext("2d");t.fillStyle="rgba(41, 40, 34, 0.82)",t.beginPath(),t.roundRect(10,8,160,56,18),t.fill(),t.fillStyle="white",t.font="500 27px ui-monospace, monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(n,90,37);const i=new qu(e);i.colorSpace=Ht,i.userData.local=!0;const r=new yd({map:i,depthTest:!1});r.userData.local=!0;const a=new Gu(r);return a.scale.set(.58,.23,1),a.renderOrder=20,a},Z_=(n,e)=>{const t=e?.moving.has(n.id),i=t?e.line.a:[0,0],r=kn(Le,Ue,n.id),a=Ue.frontUp[n.id]?1:-1,s=Hs(Ue.frontUp[n.id],"front")>0?ln:wt,o=Hs(Ue.frontUp[n.id],"back")>0?ln:wt,l=new Jn;l.position.set(i[0],i[1],Zr[n.id]),l.userData.faceId=n.id,Kr[n.id]=l;const c=Vn&&Vn.moving.includes(n.id),d=Pa({color:c?16050896:16776692,roughness:.92,metalness:0,side:s}),f=Pa({color:c?11259844:13097168,roughness:.88,metalness:0,side:o}),h=new Gt(Vs(r,i,a*bn),d),m=new Gt(Vs(r,i,-a*bn),f);h.userData.faceId=m.userData.faceId=n.id,is.push(h,m),h.castShadow=m.castShadow=!0,h.receiveShadow=m.receiveShadow=!0,l.add(h,m);const g=V_(n.polygon,Le.level.paper.vertices).map(([T,M])=>[mt(Ue.transforms[n.id],T),mt(Ue.transforms[n.id],M)]),b=Pa({color:12037534,roughness:.95,metalness:0,side:vn}),p=new Gt($_(g,i),b);p.castShadow=!0,p.receiveShadow=!0,l.add(p);const u=new ec({color:9340794,transparent:!0,opacity:.48});u.userData.local=!0,l.add(new Uo(Kl(g,i,bn+.001),u),new Uo(Kl(g,i,-bn-.001),u));for(const T of Le.markings.filter(M=>M.faceId===n.id)){const M=(T.side==="front"?1:-1)*a*(bn+.004),x=Hs(Ue.frontUp[n.id],T.side)>0?ln:wt,C=Pa({color:T.kind==="star"?15908172:14115413,emissive:T.kind==="star"?3875840:2556928,emissiveIntensity:.09,roughness:.75,side:x});for(const P of T.ink){const R=P.map(N=>mt(Ue.transforms[n.id],N));l.add(new Gt(Vs(R,i,M),C))}}if(G("#debug-labels").checked){const T=mt(Ue.transforms[n.id],n.center),M=K_(`F${n.id} · ${Ue.frontUp[n.id]?"F":"B"}`);M.position.set(T[0]-i[0],T[1]-i[1],.055),l.add(M)}return t&&cc.push(l),l},j_=()=>{Le.faces.forEach(n=>{const e=Kr[n.id];Le.level.creases.forEach((t,i)=>{if(!n.touchesCrease[i])return;const r=G_(n.polygon,t);if(!r)return;const a=r.map(d=>mt(Ue.transforms[n.id],d)),s=Ue.usedCreases[i],o=i===An,l=new Dd({color:o?2846306:7301987,dashSize:o?.12:.07,gapSize:.07,transparent:!0,opacity:o?.95:s?.35:.62,depthTest:!0});l.userData.local=!0;const c=W_(e,a,bn+.002,l);c.userData.crease=i})})},Ri=(n=null)=>{dr(ii),is=[],cc=[],Kr=[],Zr=qd(Le.faces.map(e=>kn(Le,Ue,e.id)),Ue.layerOrder,es),Le.faces.forEach(e=>ii.add(Z_(e,n))),j_()},as=(n=!1)=>{const e=Le.level.paper.vertices,t=e.map(f=>f[0]),i=e.map(f=>f[1]),r=(Math.min(...t)+Math.max(...t))/2,a=(Math.min(...i)+Math.max(...i))/2;xn.set(r,a,0),Bt.position.x=r,Bt.position.y=a,ii.position.set(-r,-a,0),ri.position.copy(ii.position),n&&Bt.quaternion.identity();const s=Math.max(...t)-Math.min(...t)+1.8,o=Math.max(...i)-Math.min(...i)+1.8;Dt.aspect=Math.max(zr.clientWidth/zr.clientHeight,.1);const l=ud.degToRad(Dt.fov/2),c=Math.max(o/(2*Math.tan(l)),s/(2*Math.tan(l)*Dt.aspect))*1.08,d=new U(0,-.38,1).normalize();Dt.position.copy(xn).addScaledVector(d,c),Dt.up.set(0,1,0),Dt.lookAt(xn),Dt.updateProjectionMatrix(),$d()},Zl=n=>`C${n.crease+1}${n.foldSide>0?"+":"−"}${n.stackSide>0?"F":"B"}`,J_=()=>{const n=Ja(Le,Ue),e=Ue.layerOrder.map((a,s)=>`L${s}: F${a} ${Ue.frontUp[a]?"front":"back"}`).join(`
`),t=n.map(a=>`${a.kind==="star"?"★":"×"}${a.id} F${a.faceId} ${a.side} → ${a.visible?"VISIBLE":"covered"}`).join(`
`),i=Or(Le,Ue).map(Zl).join("  ")||"none",r=Sn.solvable?Sn.solution.map(Zl).join(" → ")||"already solved":Sn.truncated?"search truncated":"none";G("#debug-output").textContent=[`STATE  ${Ho(Ue)}`,`LEGAL  ${i}`,`LAYERS bottom → top
${e}`,`MARKINGS
${t}`,`BFS  ${r}`,`shortest ${Sn.solutionLength??"—"} · reached ${Sn.reachableStateCount}`].join(`

`)},Q_=()=>{Xa.add(Le.level.id),rc("fold-completed",[...Xa]),_c()},dc=()=>{const n=new U(0,0,1).applyQuaternion(Bt.quaternion),e=Dt.position.clone().sub(Bt.position);return n.dot(e)>=0?1:-1},wn=()=>{Te&&(G("#win-card").hidden=!0);const n=dc();G("#gesture-label").textContent=n>0?"Front facing":"Back facing",Te?.candidate?G("#gesture-status").textContent=`Crease ${Te.candidate.crease+1} · ${Math.round(Te.progress*100)}% ${Te.candidate.unfold?"unfolded":"folded"}`:Te?G("#gesture-status").textContent="Pull toward a crease":At?G("#gesture-status").textContent="Orbiting paper":Vt&&zn!=="fold"?G("#gesture-status").textContent=zn==="crease"?"Drag a straight crease on the paper":`Click exposed paper to paint a ${zn}`:G("#gesture-status").textContent=G("#whole-stack").checked?"Drag the whole stack":"Drag the exposed flap",document.querySelectorAll(".crease-item").forEach((e,t)=>{e.classList.toggle("active",t===An),e.classList.toggle("used",Ue.usedCreases[t]),e.querySelector("span").textContent=Ue.usedCreases[t]?"creased":`C${t+1}`})},jr=()=>{const n=Ja(Le,Ue),e=n.filter(l=>l.kind==="star"&&!l.alignmentGroup),t=n.filter(l=>l.kind==="cross"),i=e.filter(l=>l.visible).length,r=t.filter(l=>!l.visible).length,a=Gd(Le,Ue),s=a.filter(({aligned:l,visible:c})=>l&&c).length;G("#stars-status").textContent=`${i} / ${e.length}`,G("#crosses-status").textContent=`${r} / ${t.length}`,G("#alignment-objective").hidden=!a.length,G("#alignment-status").textContent=`${s} / ${a.length}`,G("#moves").textContent=Ue.moves,G("#undo-button").disabled=Tt||!!Te||(Vt?!yi.length:!Gn.length),wn(),J_();const o=!Vt&&!Te&&!Tt&&Va(Le,Ue);G("#win-card").hidden=!o,o&&(G("#win-summary").textContent=`${Ue.moves} move${Ue.moves===1?"":"s"} · target ${Le.level.par}`,G("#next-button").innerHTML=_t===zt.length-1?"Back to puzzle 1 <span>↺</span>":"Next puzzle <span>→</span>",Xa.has(Le.level.id)||Q_(),Gr||Kd(660,.16,.045,.08)),Gr=o,window.__FOLD_DEBUG__={level:Le.level,state:Ue,visibility:n,solver:Sn,legalMoves:Or(Le,Ue),render:{camera:Dt.type,faceElevations:[...Zr],creaseElevations:Kr.flatMap(l=>l.children.filter(c=>c.userData.crease!=null).map(()=>l.position.z)),paperThickness:es},loadLevel:Ci}},tn=n=>{clearTimeout(Yl);const e=G("#toast");e.textContent=n,e.classList.add("show"),Yl=setTimeout(()=>e.classList.remove("show"),1800)},Kd=(n,e=.1,t=.025,i=0)=>{try{Un??=new AudioContext;const r=Un.createOscillator(),a=Un.createGain();r.type="sine",r.frequency.value=n,a.gain.setValueAtTime(1e-4,Un.currentTime+i),a.gain.exponentialRampToValueAtTime(t,Un.currentTime+i+.015),a.gain.exponentialRampToValueAtTime(1e-4,Un.currentTime+i+e),r.connect(a).connect(Un.destination),r.start(Un.currentTime+i),r.stop(Un.currentTime+i+e+.02)}catch{}},fc=n=>{const e=et.domElement.getBoundingClientRect();Gs.x=(n.clientX-e.left)/e.width*2-1,Gs.y=-((n.clientY-e.top)/e.height)*2+1,ns.setFromCamera(Gs,Dt)},Zd=n=>{fc(n);const e=new U(0,0,1).applyQuaternion(Bt.quaternion);ql.setFromNormalAndCoplanarPoint(e,Bt.position);const t=ns.ray.intersectPlane(ql,new U);return t?(ii.worldToLocal(t),[t.x,t.y]):null},ev=(n,e)=>{const t=e.b[0]-e.a[0],i=e.b[1]-e.a[1],r=t*t+i*i,a=((n[0]-e.a[0])*t+(n[1]-e.a[1])*i)/r,s=[e.a[0]+t*a,e.a[1]+i*a];return[2*s[0]-n[0],2*s[1]-n[1]]},tv=(n,e,t)=>{const i=__(Le,Ue,n,e,Gn.at(-1),t,Te.wholeStack);return i?{...i,stackSide:t}:null},qa=n=>{if(!Te?.candidate)return;Te.progress=ud.clamp(n,0,1);const e=Te.candidate,t=new U(e.line.b[0]-e.line.a[0],e.line.b[1]-e.line.a[1],0).normalize(),i=Math.PI*e.animationSign*Te.progress,r=new ti().setFromAxisAngle(t,i);cc.forEach(s=>s.quaternion.copy(r));const a=N_(Zr,Te.finalElevations,Te.progress);Kr.forEach((s,o)=>{s.position.z=a[o]}),wn()},nv=n=>{const e=n.unfold?n.targetState:oi(Le,Ue,n.crease,n.foldSide,n.stackSide,n.flapFace).state;Te.candidate={...n,animationSign:B_(n.line,Te.start,n.stackSide)},Te.finalElevations=qd(Le.faces.map(t=>kn(Le,e,t.id)),e.layerOrder,es),Te.progress=0,Vn=Te.candidate,An=n.crease,Ri({moving:new Set(Te.candidate.moving),line:Te.candidate.line}),qa(0)},iv=n=>{const e=Zd(n);if(!e)return;const t=[e[0]-Te.start[0],e[1]-Te.start[1]],i=Te.progress<.14?tv(Te.start,t,Te.stackSide):null;if(i&&i.crease!==Te.candidate?.crease&&nv(i),!Te.candidate){wn();return}const r=Te.candidate.fullDisplacement,a=(t[0]*r[0]+t[1]*r[1])/(r[0]*r[0]+r[1]*r[1]);qa(a)},Ws=n=>{const e=Te;if(n){const t=e.candidate;if(Vt&&pc(),t.unfold)Ue=t.targetState,Gn.pop(),Vt&&pn.pop();else{const i=oi(Le,Ue,t.crease,t.foldSide,t.stackSide,t.flapFace);Gn.push(Ue),Ue=i.state}Vt&&!t.unfold&&pn.push({crease:t.crease,foldSide:t.foldSide,stackSide:t.stackSide,...t.flapFace==null?{}:{flapFace:t.flapFace,flapAnchor:[...Le.faces[t.flapFace].center]}}),Kd(210,.09,.018)}Te=null,Vn=null,An=null,Tt=!1,et.domElement.classList.remove("folding"),Ri(),jr()},jd=n=>{if(!Te?.candidate){Ws(!1);return}const e=Te.progress,t=n?1:0;if(G("#instant-folds").checked||Y_.matches||Math.abs(t-e)<.01){qa(t),Ws(n);return}Tt=!0;const r=performance.now(),a=Te,s=260*Math.abs(t-e),o=l=>{if(Te!==a)return;const c=Math.min(1,(l-r)/s),d=1-(1-c)**3;qa(e+(t-e)*d),c<1?requestAnimationFrame(o):Ws(n)};requestAnimationFrame(o)},rv=n=>{if(Tt||At)return;fc(n);const e=ns.intersectObjects(is,!1)[0];if(!e)return;const t=ii.worldToLocal(e.point.clone());et.domElement.setPointerCapture(n.pointerId),et.domElement.classList.add("folding"),Te={pointerId:n.pointerId,start:[t.x,t.y],stackSide:dc(),wholeStack:n.shiftKey||G("#whole-stack").checked,candidate:null,progress:0},An=null,Vn=null,wn()},av=n=>{Tt||Te||(et.domElement.setPointerCapture(n.pointerId),et.domElement.classList.add("orbiting"),At={pointerId:n.pointerId,x:n.clientX,y:n.clientY},An=null,wn())},sv=n=>{const e=n.clientX-At.x,t=n.clientY-At.y;At.x=n.clientX,At.y=n.clientY,Dt.updateMatrixWorld();const i=new U().setFromMatrixColumn(Dt.matrixWorld,1),r=new U().setFromMatrixColumn(Dt.matrixWorld,0);Bt.quaternion.premultiply(new ti().setFromAxisAngle(i,e*.007)),Bt.quaternion.premultiply(new ti().setFromAxisAngle(r,t*.007)),lc(),wn()},Jd=()=>{At=null,et.domElement.classList.remove("orbiting"),wn()},ov=n=>JSON.parse(JSON.stringify(n)),cv=()=>({solvable:!1,truncated:!1,solution:[],solutionLength:null,legalFirstMoves:[],reachableStateCount:0}),uc=()=>{rc("fold-editor-draft",je)||tn("Draft could not be saved locally. Export JSON to keep your work.")},Jr=()=>{const n={...je,title:G("#editor-title").value.trim()||"Untitled fold",hint:G("#editor-hint").value.trim(),par:Math.max(1,Math.min(10,Math.round(Number(G("#editor-par").value)||1)))};try{n.par!==je.par?ur(n):(je=n,uc())}catch(e){G("#editor-par").value=je.par,tn(e instanceof Error?e.message:String(e))}},ai=(n="Maximum sheet size: 4 × 4.",e=!1)=>{const t=G("#polygon-status");t.textContent=n,t.classList.toggle("bad",e)},fr=()=>{const n=G("#polygon-editor");G("#polygon-vertices").value=Kt.length,n.querySelector("polygon").setAttribute("points",Kt.map(([t,i])=>`${t},${cn-i}`).join(" ")),n.querySelector("g").replaceChildren(...Kt.map(([t,i],r)=>{const a=document.createElementNS("http://www.w3.org/2000/svg","circle");return a.setAttribute("cx",t),a.setAttribute("cy",cn-i),a.setAttribute("r",.1),a.setAttribute("tabindex","0"),a.setAttribute("role","button"),a.setAttribute("aria-label",`Vertex ${r+1}`),a.dataset.index=r,a}))},lv=n=>{const e=G("#polygon-editor"),t=e.getScreenCTM();if(!t)return null;const i=e.createSVGPoint();i.x=n.clientX,i.y=n.clientY;const r=i.matrixTransform(t.inverse());return[Math.round(Math.max(0,Math.min(cn,r.x))*1e3)/1e3,Math.round(Math.max(0,Math.min(cn,cn-r.y))*1e3)/1e3]},Qd=(n,e,t=!1)=>{const i=Kt.map((r,a)=>a===n?e:[...r]);try{return sc(i),Kt=i,ai(),fr(),t&&G("#polygon-editor").querySelector(`[data-index="${n}"]`)?.focus(),!0}catch(r){return ai(r instanceof Error?r.message:String(r),!0),!1}},hc=()=>{const n=G("#polygon-vertices"),e=Math.max(Br,Math.min(ar,Math.round(Number(n.value)||Kt.length)));n.value=e,Kt=T_(e),ai(),fr()},ef=n=>{if(Tt||Te||At)return;zn=n,Lt=null,dr(ri),document.querySelectorAll("#editor-toolbox button").forEach(t=>{t.classList.toggle("active",t.dataset.tool===n),t.setAttribute("aria-pressed",String(t.dataset.tool===n))}),et.domElement.classList.toggle("editor-crease",n==="crease"),et.domElement.classList.toggle("editor-paint",n==="star"||n==="cross");const e={fold:"Drag an exposed flap to fold or reopen it. Whole stack moves all layers.",crease:"Drag on any exposed face. Folded coordinates map back onto the material.",star:"Click to stamp. A click shared by seam faces creates an alignment goal.",cross:"Click to place crosses on every equally exposed face at that point."};G("#editor-help").textContent=e[n],wn()},ss=(n=!1)=>{const e=Qa(je,pn);Le=e.runtime,rs=e.resetState,Ue=e.state,pn=e.moves,Gn=e.history,An=null,Vn=null,Te=null,Tt=!1,et.domElement.classList.remove("folding"),Sn=cv(),G("#chapter-label").textContent="Level editor",G("#level-count").textContent=`${Le.level.creases.length} creases · ${Le.level.markings.length} stamps`,rf(),n?as(!0):$d(),Ri(),jr()},pc=()=>{yi.push({draft:ov(je),moves:pn.map(n=>({...n}))}),yi.length>60&&yi.shift()},ur=(n,e=!1,t=!1)=>{Qa(n,t?[]:pn),pc(),t&&(pn=[]),je=n,uc(),ss(e)},dv=()=>{if(Tt||Te||!yi.length)return;const n=yi.pop();je=n.draft,pn=n.moves,Kt=je.paper.vertices.map(e=>[...e]),G("#editor-title").value=je.title,G("#editor-hint").value=je.hint??"",G("#editor-par").value=je.par??1,uc(),ai(),fr(),ss(!0)},mc=n=>{fc(n);const e=ns.intersectObjects(is,!1)[0];if(!e)return null;const t=ii.worldToLocal(e.point.clone());return{faceId:e.object.userData.faceId,point:[t.x,t.y]}},tf=n=>{if(dr(ri),!Lt||!n)return;const e=new Dd({color:2846306,dashSize:.1,gapSize:.05,depthTest:!1});e.userData.local=!0;const t=new Wt().setFromPoints([new U(Lt.start[0],Lt.start[1],.12),new U(n[0],n[1],.12)]),i=new Ed(t,e);i.computeLineDistances(),ri.add(i)},fv=n=>{const e=mc(n);e&&(et.domElement.setPointerCapture(n.pointerId),Lt={pointerId:n.pointerId,faceId:e.faceId,start:e.point,end:e.point},tf(e.point))},uv=n=>{const e=Zd(n);e&&(Lt.end=e,tf(e))},hv=()=>{const n=Lt;Lt=null,dr(ri);try{ur(A_(je,Ue,n.faceId,n.start,n.end)),tn(`Crease ${je.creases.length} added`)}catch(e){tn(e instanceof Error?e.message:String(e))}},pv=n=>{const e=mc(n);if(!e)return;const t=dc(),i=w_(Le,Ue,e.point,Zr,t);try{const r=R_(je,Le,Ue,i,e.point,zn,t),a=r.markings.length-je.markings.length;ur(r),tn(a>1&&zn==="star"?"Alignment group stamped":`${zn} stamped`)}catch(r){tn(r instanceof Error?r.message:String(r))}},mv=()=>{Vt=!0,wi=null;try{je=ic("fold-editor-draft",kr()),Qa(je)}catch{je=kr()}pn=[],yi=[],Kt=je.paper.vertices.map(n=>[...n]),document.querySelectorAll(".play-only").forEach(n=>{n.hidden=!0}),G("#editor-sidebar").hidden=!1,G("#levels-button").hidden=!0,G("#editor-button").textContent="Play",G("#editor-title").value=je.title,G("#editor-hint").value=je.hint??"",G("#editor-par").value=je.par??1,G("#editor-json").value="",G("#editor-result").textContent="",ai(),fr(),ef("fold"),ss(!0)},gv=()=>{Vt=!1,wi=null,Lt=null,dr(ri),document.querySelectorAll(".play-only").forEach(n=>{n.hidden=!1}),G("#editor-sidebar").hidden=!0,G("#levels-button").hidden=!1,G("#editor-button").textContent="Editor",et.domElement.classList.remove("editor-crease","editor-paint"),Ci(_t)},nf=()=>{if(Vt){dv();return}Tt||Te||!Gn.length||(Ue=Gn.pop(),Gr=!1,Vn=null,An=null,Ri(),jr())},gc=()=>{if(!(Tt||Te||At)){if(Vt){if(!pn.length)return;pc(),pn=[],ss(!0);return}Ue=rs,Gn=[],Gr=!1,Vn=null,An=null,as(!0),Ri(),jr()}},rf=()=>{const n=G("#crease-list");n.replaceChildren(),Le.level.creases.forEach((e,t)=>{const i=document.createElement("div");i.className="crease-item",i.textContent=`Crease ${t+1}`;const r=document.createElement("span");r.textContent=`C${t+1}`,i.append(r),n.append(i)})},_v=([n,e])=>Math.abs(n)>Math.abs(e)*1.4?n>0?"right":"left":Math.abs(e)>Math.abs(n)*1.4?e>0?"up":"down":`${e>0?"up":"down"}-${n>0?"right":"left"}`,vv=()=>{const n=G("#solution-list");n.replaceChildren();let e=rs;Sn.solution.forEach(t=>{const i=$r(Le,e,t.crease,t.foldSide,t.flapFace,t.stackSide),r=i.moving[0],a=mt(e.transforms[r],Le.faces[r].center),s=ev(a,i.line),o=_v([s[0]-a[0],s[1]-a[1]]),l=document.createElement("li"),c=document.createElement("strong");c.textContent=`Crease ${t.crease+1} · drag ${o}`;const d=document.createElement("span");d.textContent=`${t.stackSide>0?"Front facing":"Back facing"} · ${t.flapFace==null?"Shift-drag stack":"Drag exposed flap"}`,l.append(c,d),n.append(l),e=oi(Le,e,t.crease,t.foldSide,t.stackSide,t.flapFace).state}),G("#solution-count").textContent=`${Sn.solutionLength} moves`,G("#solution-panel").open=!1,G("#solution-label").textContent="Show solution"};function _c(){const n=G("#level-grid");n.replaceChildren(),zt.forEach((e,t)=>{const i=Tr[t],r=document.createElement("button");r.type="button",r.disabled=!i.allowed,r.title=i.reason??`Verified solvable in ${i.solutionLength} moves.`,r.classList.toggle("current",t===_t),r.classList.toggle("complete",Xa.has(e.id)),r.classList.toggle("rejected",Hr(e));const a=document.createElement("small");a.textContent=`${String(t+1).padStart(2,"0")} · ${e.chapter}${i.allowed?"":" · blocked"}${Hr(e)?" · rejected":""}`;const s=document.createElement("strong");s.textContent=e.title,r.append(a,s),r.addEventListener("click",()=>{G("#level-dialog").close(),Ci(t)}),n.append(r)})}function Ci(n){const e=(n+zt.length)%zt.length;_t=e;for(let i=0;!Tr[_t].allowed&&i<zt.length;i+=1)_t=(_t+1)%zt.length;if(!Tr[_t].allowed)throw new Error("No solver-verified levels are available.");_t!==e&&tn(Tr[e].reason);const t=ja(zt[_t]);if(Le=t.runtime,Ue=t.state,rs=Ue,Gn=[],An=null,Vn=null,Te=null,At=null,Tt=!1,et.domElement.classList.remove("folding","orbiting"),Gr=!1,Sn=Tr[_t],G("#chapter-label").textContent=Le.level.chapter,G("#level-count").textContent=`${String(_t+1).padStart(2,"0")} / ${zt.length}`,G("#level-number").textContent=`Puzzle ${String(_t+1).padStart(2,"0")}`,G("#level-title").textContent=Le.level.title,G("#level-hint").textContent=Le.level.hint,G("#par").textContent=Le.level.par,G("#playtest-panel").hidden=!sr,G("#playtest-previous").disabled=_t===0,G("#playtest-next").disabled=_t===zt.length-1,G("#playtest-next").textContent=_t===zt.length-1?"End of pack":"Next →",G("#reject-level").textContent=Hr(Le.level)?"Restore this level":"Reject this level",sr){const i=new URL(location.href);i.searchParams.set("level",Le.level.id),window.history.replaceState(null,"",i)}rf(),vv(),_c(),as(!0),Ri(),jr()}et.domElement.addEventListener("pointerdown",n=>{n.preventDefault(),!(Tt||Te||At||Lt)&&(n.button===2||n.button===0&&(n.altKey||!mc(n))?av(n):n.button===0&&Vt&&zn==="crease"?fv(n):n.button===0&&Vt&&["star","cross"].includes(zn)?pv(n):n.button===0&&rv(n))});et.domElement.addEventListener("pointermove",n=>{Lt?.pointerId===n.pointerId?uv(n):Te?.pointerId===n.pointerId&&!Tt?iv(n):At?.pointerId===n.pointerId&&sv(n)});et.domElement.addEventListener("pointerup",n=>{Lt?.pointerId===n.pointerId?hv():Te?.pointerId===n.pointerId&&!Tt?jd(!!(Te.candidate&&Te.progress>=.55)):At?.pointerId===n.pointerId&&Jd()});et.domElement.addEventListener("pointercancel",n=>{Lt?.pointerId===n.pointerId?(Lt=null,dr(ri)):Te?.pointerId===n.pointerId&&!Tt?jd(!1):At?.pointerId===n.pointerId&&Jd()});et.domElement.addEventListener("contextmenu",n=>n.preventDefault());G("#undo-button").addEventListener("click",nf);G("#reset-button").addEventListener("click",gc);G("#whole-stack").addEventListener("change",wn);G("#flip-side").addEventListener("click",()=>{Tt||Te||At||Lt||(Bt.rotateY(Math.PI),lc(),wn())});G("#next-button").addEventListener("click",()=>Ci(_t+1));G("#solution-panel").addEventListener("toggle",n=>{G("#solution-label").textContent=n.currentTarget.open?"Hide solution":"Show solution"});G("#editor-button").addEventListener("click",()=>{Tt||Te||At||Lt||(Vt?gv():mv())});G("#levels-button").addEventListener("click",()=>G("#level-dialog").showModal());G("#close-levels").addEventListener("click",()=>G("#level-dialog").close());G("#pack-select").value=sr?"generated":"curated";G("#pack-select option[value='generated']").disabled=!oc.length;G("#pack-select").addEventListener("change",n=>{const e=new URL(location.href);e.searchParams.set("pack",n.target.value),e.searchParams.delete("level"),location.href=e.href});G("#playtest-previous").addEventListener("click",()=>{_t>0&&Ci(_t-1)});G("#playtest-next").addEventListener("click",()=>{_t<zt.length-1&&Ci(_t+1)});G("#reject-level").addEventListener("click",()=>{const n=Hr(Le.level);for(const e of Yd(Le.level))n?Na.delete(e):Na.add(e);rc("fold-rejected",[...Na])||tn("Could not save locally. Export your blacklist to keep it."),G("#reject-level").textContent=n?"Reject this level":"Restore this level",_c()});G("#export-blacklist").addEventListener("click",()=>{const n=new Blob([JSON.stringify(zt.filter(Hr),null,2)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download="fold-playtest-blacklist.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)});G("#debug-labels").addEventListener("change",()=>{Te||Ri()});G(".brand").addEventListener("click",n=>{n.preventDefault(),gc()});document.querySelectorAll("#editor-toolbox button").forEach(n=>{n.addEventListener("click",()=>ef(n.dataset.tool))});for(const n of["#editor-title","#editor-hint"])G(n).addEventListener("input",Jr);G("#editor-par").addEventListener("change",Jr);G("#polygon-vertices").addEventListener("input",n=>{const e=Number(n.currentTarget.value);Number.isInteger(e)&&e>=Br&&e<=ar&&hc()});G("#polygon-vertices").addEventListener("change",hc);G("#polygon-reset").addEventListener("click",hc);G("#polygon-editor").addEventListener("pointerdown",n=>{if(!Vt||!(n.target instanceof SVGCircleElement))return;n.preventDefault();const e=n.currentTarget;wi={index:Number(n.target.dataset.index),pointerId:n.pointerId},e.setPointerCapture(n.pointerId),e.classList.add("dragging")});G("#polygon-editor").addEventListener("pointermove",n=>{if(wi?.pointerId!==n.pointerId)return;const e=lv(n);e&&Qd(wi.index,e)});const af=n=>{if(wi?.pointerId!==n.pointerId)return;const e=n.currentTarget;e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId),e.classList.remove("dragging"),wi=null};G("#polygon-editor").addEventListener("pointerup",af);G("#polygon-editor").addEventListener("pointercancel",af);G("#polygon-editor").addEventListener("keydown",n=>{if(!(n.target instanceof SVGCircleElement))return;const t={ArrowLeft:[-.05,0],ArrowRight:[.05,0],ArrowUp:[0,.05],ArrowDown:[0,-.05]}[n.key];if(!t)return;n.preventDefault();const i=Number(n.target.dataset.index),r=Kt[i];Qd(i,[Math.max(0,Math.min(cn,r[0]+t[0])),Math.max(0,Math.min(cn,r[1]+t[1]))],!0)});G("#polygon-apply").addEventListener("click",()=>{try{Jr();const n=sc(Kt);ur({...je,paper:{vertices:n},creases:[],markings:[]},!0,!0),ai("Shape applied."),tn("Paper shape applied; creases and stamps cleared")}catch(n){tn(n instanceof Error?n.message:String(n))}});G("#editor-new").addEventListener("click",()=>{const n=kr();ur(n,!0,!0),Kt=n.paper.vertices.map(e=>[...e]),G("#editor-title").value=n.title,G("#editor-hint").value=n.hint,G("#editor-par").value=n.par,G("#editor-json").value="",G("#editor-result").textContent="",ai(),fr()});G("#editor-validate").addEventListener("click",()=>{Jr();const n=Wd(je,5e4),e=G("#editor-result");e.classList.toggle("good",n.allowed),e.classList.toggle("bad",!n.allowed),e.textContent=n.allowed?`Solvable in ${n.solutionLength} move${n.solutionLength===1?"":"s"}; ${n.reachableStateCount} states checked.`:n.reason,G("#editor-json").value=JSON.stringify(je,null,2)});G("#editor-export").addEventListener("click",()=>{Jr(),G("#editor-json").value=JSON.stringify(je,null,2),G("#editor-json").focus(),G("#editor-json").select()});G("#editor-import").addEventListener("click",()=>{try{const n=JSON.parse(G("#editor-json").value),e={...kr(),...n,paper:{vertices:sc(n.paper?.vertices??[])},creases:n.creases??[],markings:n.markings??[]};Qa(e),ur(e,!0,!0),Kt=e.paper.vertices.map(t=>[...t]),G("#editor-title").value=e.title,G("#editor-hint").value=e.hint??"",G("#editor-par").value=e.par,ai(),fr(),tn("Level JSON loaded")}catch(n){tn(n instanceof Error?n.message:String(n))}});addEventListener("keydown",n=>{n.target.closest?.("input, textarea, select, [contenteditable='true']")||G("#level-dialog").open||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),nf()):n.key.toLowerCase()==="r"&&!n.ctrlKey&&!n.metaKey&&gc())});const sf=()=>{et.setSize(zr.clientWidth,zr.clientHeight,!1),Le&&as()};new ResizeObserver(sf).observe(X_);et.setAnimationLoop(()=>et.render(lr,Dt));sf();Ci(Math.max(0,zt.findIndex(n=>n.id===new URLSearchParams(location.search).get("level"))));

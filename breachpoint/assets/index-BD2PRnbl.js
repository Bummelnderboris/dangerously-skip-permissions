(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="169",ql=0,ka=1,Yl=2,Jo=1,Qo=2,li=3,Ai=0,Te=1,ci=2,di=0,hn=1,Nn=2,Ha=3,Ga=4,Kl=5,Bi=100,$l=101,jl=102,Zl=103,Jl=104,Ql=200,tc=201,ec=202,ic=203,wr=204,Ar=205,nc=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,hc=213,uc=214,Rr=0,Cr=1,Pr=2,fn=3,Lr=4,Dr=5,Ir=6,Ur=7,tl=0,dc=1,fc=2,wi=0,el=1,il=2,nl=3,ga=4,pc=5,sl=6,rl=7,al=300,pn=301,mn=302,Nr=303,Fr=304,Ns=306,As=1e3,Hi=1001,Or=1002,ke=1003,mc=1004,qn=1005,Ye=1006,Ws=1007,Gi=1008,mi=1009,ol=1010,ll=1011,Fn=1012,_a=1013,Vi=1014,hi=1015,fi=1016,va=1017,xa=1018,gn=1020,cl=35902,hl=1021,ul=1022,$e=1023,dl=1024,fl=1025,un=1026,_n=1027,pl=1028,Ma=1029,ml=1030,ya=1031,Sa=1033,xs=33776,Ms=33777,ys=33778,Ss=33779,zr=35840,Br=35841,kr=35842,Hr=35843,Gr=36196,Vr=37492,Wr=37496,Xr=37808,qr=37809,Yr=37810,Kr=37811,$r=37812,jr=37813,Zr=37814,Jr=37815,Qr=37816,ta=37817,ea=37818,ia=37819,na=37820,sa=37821,bs=36492,ra=36494,aa=36495,gl=36283,oa=36284,la=36285,ca=36286,gc=3200,_c=3201,_l=0,vc=1,Ti="",qe="srgb",Ri="srgb-linear",ba="display-p3",Fs="display-p3-linear",Rs="linear",te="srgb",Cs="rec709",Ps="p3",qi=7680,Va=519,xc=512,Mc=513,yc=514,vl=515,Sc=516,bc=517,Ec=518,Tc=519,Wa=35044,Xa="300 es",ui=2e3,Ls=2001;class Mn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,ha=180/Math.PI;function Hn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function wc(s,t){return(s%t+t)%t}function qs(s,t,e){return(1-e)*s+e*t}function En(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,n,r,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],g=i[8],v=n[0],d=n[3],f=n[6],b=n[1],S=n[4],T=n[7],U=n[2],R=n[5],A=n[8];return r[0]=a*v+o*b+l*U,r[3]=a*d+o*S+l*R,r[6]=a*f+o*T+l*A,r[1]=c*v+h*b+u*U,r[4]=c*d+h*S+u*R,r[7]=c*f+h*T+u*A,r[2]=p*v+m*b+g*U,r[5]=p*d+m*S+g*R,r[8]=p*f+m*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,g=e*u+i*p+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=p*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Nt;function xl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ac(){const s=Ds("canvas");return s.style.display="block",s}const qa={};function Es(s){s in qa||(qa[s]=!0,console.warn(s))}function Rc(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Cc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ya=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tn={[Ri]:{transfer:Rs,primaries:Cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[qe]:{transfer:te,primaries:Cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fs]:{transfer:Rs,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ka),fromReference:s=>s.applyMatrix3(Ya)},[ba]:{transfer:te,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ka),fromReference:s=>s.applyMatrix3(Ya).convertLinearToSRGB()}},Lc=new Set([Ri,Fs]),qt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Tn[t].toReference,n=Tn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Tn[s].primaries},getTransfer:function(s){return s===Ti?Rs:Tn[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Tn[t].luminanceCoefficients)}};function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class Dc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Ds("canvas")),Yi.width=t.width,Yi.height=t.height;const i=Yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(dn(e[i]/255)*255):e[i]=dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ic=0;class Ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push($s(n[a].image)):r.push($s(n[a]))}else r=$s(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function $s(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uc=0;class we extends Mn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,i=Hi,n=Hi,r=Ye,a=Gi,o=$e,l=mi,c=we.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Hn(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=al;we.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,i=0,n=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],v=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,T=(m+1)/2,U=(f+1)/2,R=(h+p)/4,A=(u+v)/4,P=(g+d)/4;return S>T&&S>U?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=R/i,r=A/i):T>U?T<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(T),i=R/n,r=P/n):U<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(U),i=A/r,n=P/r),this.set(i,n,r,e),this}let b=Math.sqrt((d-g)*(d-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(u-v)/b,this.z=(p-h)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Mn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new we(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ml(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yl extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fc extends we{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==p||c!==m||h!==g){let d=1-o;const f=l*p+c*m+h*g+u*v,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,f*b);d=Math.sin(d*R)/U,o=Math.sin(o*R)/U}const T=o*b;if(l=l*d+p*T,c=c*d+m*T,h=h*d+g*T,u=u*d+v*T,d===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*p,t[e+1]=l*g+h*p+c*u-o*m,t[e+2]=c*g+h*m+o*p-l*u,t[e+3]=h*g-o*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),p=l(i/2),m=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-n)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=n*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new w,$a=new yn;class pi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yn.copy(i.boundingBox)),Yn.applyMatrix4(t.matrixWorld),this.union(Yn)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wn),Kn.subVectors(this.max,wn),Ki.subVectors(t.a,wn),$i.subVectors(t.b,wn),ji.subVectors(t.c,wn),xi.subVectors($i,Ki),Mi.subVectors(ji,$i),Pi.subVectors(Ki,ji);let e=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Pi.z,Pi.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Pi.z,0,-Pi.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Pi.y,Pi.x,0];return!Zs(e,Ki,$i,ji,Kn)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Ki,$i,ji,Kn))?!1:($n.crossVectors(xi,Mi),e=[$n.x,$n.y,$n.z],Zs(e,Ki,$i,ji,Kn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new w,new w,new w,new w,new w,new w,new w,new w],Ve=new w,Yn=new pi,Ki=new w,$i=new w,ji=new w,xi=new w,Mi=new w,Pi=new w,wn=new w,Kn=new w,$n=new w,Li=new w;function Zs(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Li.fromArray(s,r);const o=n.x*Math.abs(Li.x)+n.y*Math.abs(Li.y)+n.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Oc=new pi,An=new w,Js=new w;class Gn{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Oc.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;An.subVectors(t,this.center);const e=An.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(An,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(An.copy(t.center).add(Js)),this.expandByPoint(An.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new w,Qs=new w,jn=new w,yi=new w,tr=new w,Zn=new w,er=new w;class Os{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Qs.copy(t).add(e).multiplyScalar(.5),jn.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(jn),o=yi.dot(this.direction),l=-yi.dot(jn),c=yi.lengthSq(),h=Math.abs(1-a*a);let u,p,m,g;if(h>0)if(u=a*l-o,p=a*o-l,g=r*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Qs).addScaledVector(jn,p),m}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),n=si.dot(si)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,n=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,n=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,n,r){tr.subVectors(e,t),Zn.subVectors(i,t),er.crossVectors(tr,Zn);let a=this.direction.dot(er),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,t);const l=o*this.direction.dot(Zn.crossVectors(yi,Zn));if(l<0)return null;const c=o*this.direction.dot(tr.cross(yi));if(c<0||l+c>a)return null;const h=-o*yi.dot(er);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,i,n,r,a,o,l,c,h,u,p,m,g,v,d){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,p,m,g,v,d)}set(t,e,i,n,r,a,o,l,c,h,u,p,m,g,v,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,m=l*u,g=c*h,v=c*u;e[0]=p+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,m=l*u,g=c*h,v=c*u;e[0]=p-v*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,m=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+v,e[1]=l*u,e[5]=v*c+p,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-p*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+v,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Si.crossVectors(i,Fe),Si.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Si.crossVectors(i,Fe)),Si.normalize(),Jn.crossVectors(Fe,Si),n[0]=Si.x,n[4]=Jn.x,n[8]=Fe.x,n[1]=Si.y,n[5]=Jn.y,n[9]=Fe.y,n[2]=Si.z,n[6]=Jn.z,n[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],g=i[2],v=i[6],d=i[10],f=i[14],b=i[3],S=i[7],T=i[11],U=i[15],R=n[0],A=n[4],P=n[8],V=n[12],_=n[1],y=n[5],z=n[9],B=n[13],W=n[2],$=n[6],k=n[10],j=n[14],G=n[3],lt=n[7],ct=n[11],vt=n[15];return r[0]=a*R+o*_+l*W+c*G,r[4]=a*A+o*y+l*$+c*lt,r[8]=a*P+o*z+l*k+c*ct,r[12]=a*V+o*B+l*j+c*vt,r[1]=h*R+u*_+p*W+m*G,r[5]=h*A+u*y+p*$+m*lt,r[9]=h*P+u*z+p*k+m*ct,r[13]=h*V+u*B+p*j+m*vt,r[2]=g*R+v*_+d*W+f*G,r[6]=g*A+v*y+d*$+f*lt,r[10]=g*P+v*z+d*k+f*ct,r[14]=g*V+v*B+d*j+f*vt,r[3]=b*R+S*_+T*W+U*G,r[7]=b*A+S*y+T*$+U*lt,r[11]=b*P+S*z+T*k+U*ct,r[15]=b*V+S*B+T*j+U*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],v=t[7],d=t[11],f=t[15];return g*(+r*l*u-n*c*u-r*o*p+i*c*p+n*o*m-i*l*m)+v*(+e*l*m-e*c*p+r*a*p-n*a*m+n*c*h-r*l*h)+d*(+e*c*u-e*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+f*(-n*o*h-e*l*u+e*o*p+n*a*u-i*a*p+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],v=t[13],d=t[14],f=t[15],b=u*d*c-v*p*c+v*l*m-o*d*m-u*l*f+o*p*f,S=g*p*c-h*d*c-g*l*m+a*d*m+h*l*f-a*p*f,T=h*v*c-g*u*c+g*o*m-a*v*m-h*o*f+a*u*f,U=g*u*l-h*v*l-g*o*p+a*v*p+h*o*d-a*u*d,R=e*b+i*S+n*T+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(v*p*r-u*d*r-v*n*m+i*d*m+u*n*f-i*p*f)*A,t[2]=(o*d*r-v*l*r+v*n*c-i*d*c-o*n*f+i*l*f)*A,t[3]=(u*l*r-o*p*r-u*n*c+i*p*c+o*n*m-i*l*m)*A,t[4]=S*A,t[5]=(h*d*r-g*p*r+g*n*m-e*d*m-h*n*f+e*p*f)*A,t[6]=(g*l*r-a*d*r-g*n*c+e*d*c+a*n*f-e*l*f)*A,t[7]=(a*p*r-h*l*r+h*n*c-e*p*c-a*n*m+e*l*m)*A,t[8]=T*A,t[9]=(g*u*r-h*v*r-g*i*m+e*v*m+h*i*f-e*u*f)*A,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*m-e*o*m)*A,t[12]=U*A,t[13]=(h*v*n-g*u*n+g*i*p-e*v*p-h*i*d+e*u*d)*A,t[14]=(g*o*n-a*v*n-g*i*l+e*v*l+a*i*d-e*o*d)*A,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*p+e*o*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,g=r*u,v=a*h,d=a*u,f=o*u,b=l*c,S=l*h,T=l*u,U=i.x,R=i.y,A=i.z;return n[0]=(1-(v+f))*U,n[1]=(m+T)*U,n[2]=(g-S)*U,n[3]=0,n[4]=(m-T)*R,n[5]=(1-(p+f))*R,n[6]=(d+b)*R,n[7]=0,n[8]=(g+S)*A,n[9]=(d-b)*A,n[10]=(1-(p+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Zi.set(n[0],n[1],n[2]).length();const a=Zi.set(n[4],n[5],n[6]).length(),o=Zi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],We.copy(this);const c=1/r,h=1/a,u=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=ui){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),p=(i+n)/(i-n);let m,g;if(o===ui)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ls)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=ui){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),p=(e+t)*c,m=(i+n)*h;let g,v;if(o===ui)g=(a+r)*u,v=-2*u;else if(o===Ls)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new w,We=new ie,zc=new w(0,0,0),Bc=new w(1,1,1),Si=new w,Jn=new w,Fe=new w,ja=new ie,Za=new yn;class Je{constructor(t=0,e=0,i=0,n=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],p=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kc=0;const Ja=new w,Ji=new yn,ri=new ie,Qn=new w,Rn=new w,Hc=new w,Gc=new yn,Qa=new w(1,0,0),to=new w(0,1,0),eo=new w(0,0,1),io={type:"added"},Vc={type:"removed"},Qi={type:"childadded",child:null},ir={type:"childremoved",child:null};class he extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new w,e=new Je,i=new yn,n=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new Nt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(to,t)}rotateZ(t){return this.rotateOnAxis(eo,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(to,t)}translateZ(t){return this.translateOnAxis(eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qn.copy(t):Qn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Rn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Rn,Qn,this.up):ri.lookAt(Qn,Rn,this.up),this.quaternion.setFromRotationMatrix(ri),n&&(ri.extractRotation(n.matrixWorld),Ji.setFromRotationMatrix(ri),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(io),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc),ir.child=t,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(io),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}he.DEFAULT_UP=new w(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new w,ai=new w,nr=new w,oi=new w,tn=new w,en=new w,no=new w,sr=new w,rr=new w,ar=new w,or=new Jt,lr=new Jt,cr=new Jt;class Ke{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Xe.subVectors(t,e),n.cross(Xe);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Xe.subVectors(n,e),ai.subVectors(i,e),nr.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ai),l=Xe.dot(nr),c=ai.dot(ai),h=ai.dot(nr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return or.setScalar(0),lr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(t,e),lr.fromBufferAttribute(t,i),cr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(or,r.x),a.addScaledVector(lr,r.y),a.addScaledVector(cr,r.z),a}static isFrontFacing(t,e,i,n){return Xe.subVectors(i,e),ai.subVectors(t,e),Xe.cross(ai).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Xe.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;tn.subVectors(n,i),en.subVectors(r,i),sr.subVectors(t,i);const l=tn.dot(sr),c=en.dot(sr);if(l<=0&&c<=0)return e.copy(i);rr.subVectors(t,n);const h=tn.dot(rr),u=en.dot(rr);if(h>=0&&u<=h)return e.copy(n);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(tn,a);ar.subVectors(t,r);const m=tn.dot(ar),g=en.dot(ar);if(g>=0&&m<=g)return e.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(en,o);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return no.subVectors(r,n),o=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(no,o);const f=1/(d+v+p);return a=v*f,o=p*f,e.copy(i).addScaledVector(tn,a).addScaledVector(en,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ts={h:0,s:0,l:0};function hr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=wc(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=hr(a,r,t+1/3),this.g=hr(a,r,t),this.b=hr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const i=Sl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Le(ye.r*255,0,255))*65536+Math.round(Le(ye.g*255,0,255))*256+Math.round(Le(ye.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,r=ye.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=qe){qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(ts);const i=qs(bi.h,ts.h,e),n=qs(bi.s,ts.s,e),r=qs(bi.l,ts.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Lt;Lt.NAMES=Sl;let Wc=0;class Wi extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=hn,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Ar,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hn&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Ar&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new w,es=new wt;class ei{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wa,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=En(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),n=Pe(n,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}}class bl extends ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class El extends ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends ei{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xc=0;const Be=new ie,ur=new he,nn=new w,Oe=new pi,Cn=new pi,ge=new w;class Ae extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xl(t)?El:bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return ur.lookAt(t),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nn).negate(),this.translate(nn.x,nn.y,nn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Oe.min,Cn.min),Oe.expandByPoint(ge),ge.addVectors(Oe.max,Cn.max),Oe.expandByPoint(ge)):(Oe.expandByPoint(Cn.min),Oe.expandByPoint(Cn.max))}Oe.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(nn.fromBufferAttribute(t,c),ge.add(nn)),n=Math.max(n,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new w,l[P]=new w;const c=new w,h=new w,u=new w,p=new wt,m=new wt,g=new wt,v=new w,d=new w;function f(P,V,_){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,V),u.fromBufferAttribute(i,_),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),m.sub(p),g.sub(p);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(y),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(y),o[P].add(v),o[V].add(v),o[_].add(v),l[P].add(d),l[V].add(d),l[_].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,V=b.length;P<V;++P){const _=b[P],y=_.start,z=_.count;for(let B=y,W=y+z;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new w,T=new w,U=new w,R=new w;function A(P){U.fromBufferAttribute(n,P),R.copy(U);const V=o[P];S.copy(V),S.sub(U.multiplyScalar(U.dot(V))).normalize(),T.crossVectors(R,V);const y=T.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,y)}for(let P=0,V=b.length;P<V;++P){const _=b[P],y=_.start,z=_.count;for(let B=y,W=y+z;B<W;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),v=t.getX(p+1),d=t.getX(p+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)n.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,d=l.length;v<d;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new ei(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new ie,Di=new Os,is=new Gn,ro=new w,ns=new w,ss=new w,rs=new w,dr=new w,as=new w,ao=new w,os=new w;class Ft extends he{constructor(t=new Ae,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(dr.fromBufferAttribute(u,t),a?as.addScaledVector(dr,h):as.addScaledVector(dr.sub(e),h))}e.add(as)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(is.containsPoint(Di.origin)===!1&&(Di.intersectSphere(is,ro)===null||Di.origin.distanceToSquared(ro)>(t.far-t.near)**2))&&(so.copy(r).invert(),Di.copy(t.ray).applyMatrix4(so),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const d=p[g],f=a[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,U=S;T<U;T+=3){const R=o.getX(T),A=o.getX(T+1),P=o.getX(T+2);n=ls(this,f,t,i,c,h,u,R,A,P),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=g,f=v;d<f;d+=3){const b=o.getX(d),S=o.getX(d+1),T=o.getX(d+2);n=ls(this,a,t,i,c,h,u,b,S,T),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const d=p[g],f=a[d.materialIndex],b=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=b,U=S;T<U;T+=3){const R=T,A=T+1,P=T+2;n=ls(this,f,t,i,c,h,u,R,A,P),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=g,f=v;d<f;d+=3){const b=d,S=d+1,T=d+2;n=ls(this,a,t,i,c,h,u,b,S,T),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function qc(s,t,e,i,n,r,a,o){let l;if(t.side===Te?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Ai,o),l===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(os);return c<e.near||c>e.far?null:{distance:c,point:os.clone(),object:s}}function ls(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,ns),s.getVertexPosition(l,ss),s.getVertexPosition(c,rs);const h=qc(s,t,e,i,ns,ss,rs,ao);if(h){const u=new w;Ke.getBarycoord(ao,ns,ss,rs,u),n&&(h.uv=Ke.getInterpolatedAttribute(n,o,l,c,u,new wt)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,o,l,c,u,new wt)),a&&(h.normal=Ke.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new w,materialIndex:0};Ke.getNormal(ns,ss,rs,p.normal),h.face=p,h.barycoord=u}return h}class Se extends Ae{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(v,d,f,b,S,T,U,R,A,P,V){const _=T/A,y=U/P,z=T/2,B=U/2,W=R/2,$=A+1,k=P+1;let j=0,G=0;const lt=new w;for(let ct=0;ct<k;ct++){const vt=ct*y-B;for(let Wt=0;Wt<$;Wt++){const $t=Wt*_-z;lt[v]=$t*b,lt[d]=vt*S,lt[f]=W,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[d]=0,lt[f]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Wt/A),u.push(1-ct/P),j+=1}}for(let ct=0;ct<P;ct++)for(let vt=0;vt<A;vt++){const Wt=p+vt+$*ct,$t=p+vt+$*(ct+1),X=p+(vt+1)+$*(ct+1),Q=p+(vt+1)+$*ct;l.push(Wt,$t,Q),l.push($t,X,Q),G+=6}o.addGroup(m,G,V),m+=G,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const i=vn(s[e]);for(const n in i)t[n]=i[n]}return t}function Yc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const On={clone:vn,merge:be};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vn(t.uniforms),this.uniformsGroups=Yc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wl extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new w,oo=new wt,lo=new wt;class De extends wl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,oo,lo),e.subVectors(lo,oo)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sn=-90,rn=1;class jc extends he{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new De(sn,rn,t,e);n.layers=this.layers,this.add(n);const r=new De(sn,rn,t,e);r.layers=this.layers,this.add(r);const a=new De(sn,rn,t,e);a.layers=this.layers,this.add(a);const o=new De(sn,rn,t,e);o.layers=this.layers,this.add(o);const l=new De(sn,rn,t,e);l.layers=this.layers,this.add(l);const c=new De(sn,rn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Al extends we{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pn,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Al(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Se(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Te,blending:di});r.uniforms.tEquirect.value=e;const a=new Ft(n,r),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Ye),new jc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const fr=new w,Jc=new w,Qc=new Nt;class Oi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=fr.subVectors(i,e).cross(Jc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qc.getNormalMatrix(t),n=this.coplanarPoint(fr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Gn,cs=new w;class Ta{constructor(t=new Oi,e=new Oi,i=new Oi,n=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],p=n[7],m=n[8],g=n[9],v=n[10],d=n[11],f=n[12],b=n[13],S=n[14],T=n[15];if(i[0].setComponents(l-r,p-c,d-m,T-f).normalize(),i[1].setComponents(l+r,p+c,d+m,T+f).normalize(),i[2].setComponents(l+a,p+h,d+g,T+b).normalize(),i[3].setComponents(l-a,p-h,d-g,T-b).normalize(),i[4].setComponents(l-o,p-u,d-v,T-S).normalize(),e===ui)i[5].setComponents(l+o,p+u,d+v,T+S).normalize();else if(e===Ls)i[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(cs.x=n.normal.x>0?t.max.x:t.min.x,cs.y=n.normal.y>0?t.max.y:t.min.y,cs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rl(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function th(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class gi extends Ae{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,p=e/l,m=[],g=[],v=[],d=[];for(let f=0;f<h;f++){const b=f*p-a;for(let S=0;S<c;S++){const T=S*u-r;g.push(T,-b,0),v.push(0,0,1),d.push(S/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const S=b+c*f,T=b+c*(f+1),U=b+1+c*(f+1),R=b+1+c*f;m.push(S,T,R),m.push(T,U,R)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.widthSegments,t.heightSegments)}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
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
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oh=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
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
#endif`,hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
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
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
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
#endif`,Qh=`struct PhysicalMaterial {
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
}`,tu=`
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
#endif`,eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hu=`#if defined( USE_POINTS_UV )
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
#endif`,uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gu=`#ifdef USE_MORPHTARGETS
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
#endif`,_u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
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
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bu=`float getShadowMask() {
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
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hu=`#ifdef USE_SKINNING
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
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
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
#endif`,$u=`#ifdef USE_TRANSMISSION
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
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,ld=`#define DISTANCE
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
}`,cd=`#define DISTANCE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`uniform float scale;
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 diffuse;
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
}`,gd=`#define LAMBERT
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
}`,_d=`#define LAMBERT
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
}`,vd=`#define MATCAP
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
}`,xd=`#define MATCAP
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
}`,Md=`#define NORMAL
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
}`,yd=`#define NORMAL
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
}`,Sd=`#define PHONG
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
}`,bd=`#define PHONG
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
}`,Ed=`#define STANDARD
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
}`,Td=`#define STANDARD
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
}`,wd=`#define TOON
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
}`,Ad=`#define TOON
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
}`,Rd=`uniform float size;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ld=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:eh,alphahash_pars_fragment:ih,alphamap_fragment:nh,alphamap_pars_fragment:sh,alphatest_fragment:rh,alphatest_pars_fragment:ah,aomap_fragment:oh,aomap_pars_fragment:lh,batching_pars_vertex:ch,batching_vertex:hh,begin_vertex:uh,beginnormal_vertex:dh,bsdfs:fh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:vh,clipping_planes_vertex:xh,color_fragment:Mh,color_pars_fragment:yh,color_pars_vertex:Sh,color_vertex:bh,common:Eh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ah,displacementmap_vertex:Rh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Ph,colorspace_fragment:Lh,colorspace_pars_fragment:Dh,envmap_fragment:Ih,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Yh,envmap_vertex:Oh,fog_vertex:zh,fog_pars_vertex:Bh,fog_fragment:kh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Wh,lights_lambert_pars_fragment:Xh,lights_pars_begin:qh,lights_toon_fragment:Kh,lights_toon_pars_fragment:$h,lights_phong_fragment:jh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Qh,lights_fragment_begin:tu,lights_fragment_maps:eu,lights_fragment_end:iu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:su,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:au,map_fragment:ou,map_pars_fragment:lu,map_particle_fragment:cu,map_particle_pars_fragment:hu,metalnessmap_fragment:uu,metalnessmap_pars_fragment:du,morphinstance_vertex:fu,morphcolor_vertex:pu,morphnormal_vertex:mu,morphtarget_pars_vertex:gu,morphtarget_vertex:_u,normal_fragment_begin:vu,normal_fragment_maps:xu,normal_pars_fragment:Mu,normal_pars_vertex:yu,normal_vertex:Su,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Au,opaque_fragment:Ru,packing:Cu,premultiplied_alpha_fragment:Pu,project_vertex:Lu,dithering_fragment:Du,dithering_pars_fragment:Iu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Fu,shadowmap_pars_vertex:Ou,shadowmap_vertex:zu,shadowmask_pars_fragment:Bu,skinbase_vertex:ku,skinning_pars_vertex:Hu,skinning_vertex:Gu,skinnormal_vertex:Vu,specularmap_fragment:Wu,specularmap_pars_fragment:Xu,tonemapping_fragment:qu,tonemapping_pars_fragment:Yu,transmission_fragment:Ku,transmission_pars_fragment:$u,uv_pars_fragment:ju,uv_pars_vertex:Zu,uv_vertex:Ju,worldpos_vertex:Qu,background_vert:td,background_frag:ed,backgroundCube_vert:id,backgroundCube_frag:nd,cube_vert:sd,cube_frag:rd,depth_vert:ad,depth_frag:od,distanceRGBA_vert:ld,distanceRGBA_frag:cd,equirect_vert:hd,equirect_frag:ud,linedashed_vert:dd,linedashed_frag:fd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:gd,meshlambert_frag:_d,meshmatcap_vert:vd,meshmatcap_frag:xd,meshnormal_vert:Md,meshnormal_frag:yd,meshphong_vert:Sd,meshphong_frag:bd,meshphysical_vert:Ed,meshphysical_frag:Td,meshtoon_vert:wd,meshtoon_frag:Ad,points_vert:Rd,points_frag:Cd,shadow_vert:Pd,shadow_frag:Ld,sprite_vert:Dd,sprite_frag:Id},it={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Qe={basic:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:be([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:be([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:be([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:be([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:be([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:be([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:be([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:be([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:be([it.common,it.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:be([it.lights,it.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Qe.physical={uniforms:be([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const hs={r:0,b:0,g:0},Ui=new Je,Ud=new ie;function Nd(s,t,e,i,n,r,a){const o=new Lt(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1;const T=g(b);T===null?f(o,l):T&&T.isColor&&(f(T,1),S=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function d(b,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===Ns)?(h===void 0&&(h=new Ft(new Se(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:vn(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ui.copy(S.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Ui)),h.material.toneMapped=qt.getTransfer(T.colorSpace)!==te,(u!==T||p!==T.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ft(new gi(2,2),new Ee({name:"BackgroundMaterial",uniforms:vn(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(T.colorSpace)!==te,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,m=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(hs,Tl(s)),i.buffers.color.setClear(hs.r,hs.g,hs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:v,addToRenderList:d}}function Fd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=p(null);let r=n,a=!1;function o(_,y,z,B,W){let $=!1;const k=u(B,z,y);r!==k&&(r=k,c(r.object)),$=m(_,B,z,W),$&&g(_,B,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(_,y,z,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,y,z){const B=z.wireframe===!0;let W=i[_.id];W===void 0&&(W={},i[_.id]=W);let $=W[y.id];$===void 0&&($={},W[y.id]=$);let k=$[B];return k===void 0&&(k=p(l()),$[B]=k),k}function p(_){const y=[],z=[],B=[];for(let W=0;W<e;W++)y[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:z,attributeDivisors:B,object:_,attributes:{},index:null}}function m(_,y,z,B){const W=r.attributes,$=y.attributes;let k=0;const j=z.getAttributes();for(const G in j)if(j[G].location>=0){const ct=W[G];let vt=$[G];if(vt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(_,y,z,B){const W={},$=y.attributes;let k=0;const j=z.getAttributes();for(const G in j)if(j[G].location>=0){let ct=$[G];ct===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor));const vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),W[G]=vt,k++}r.attributes=W,r.attributesNum=k,r.index=B}function v(){const _=r.newAttributes;for(let y=0,z=_.length;y<z;y++)_[y]=0}function d(_){f(_,0)}function f(_,y){const z=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;z[_]=1,B[_]===0&&(s.enableVertexAttribArray(_),B[_]=1),W[_]!==y&&(s.vertexAttribDivisor(_,y),W[_]=y)}function b(){const _=r.newAttributes,y=r.enabledAttributes;for(let z=0,B=y.length;z<B;z++)y[z]!==_[z]&&(s.disableVertexAttribArray(z),y[z]=0)}function S(_,y,z,B,W,$,k){k===!0?s.vertexAttribIPointer(_,y,z,W,$):s.vertexAttribPointer(_,y,z,B,W,$)}function T(_,y,z,B){v();const W=B.attributes,$=z.getAttributes(),k=y.defaultAttributeValues;for(const j in $){const G=$[j];if(G.location>=0){let lt=W[j];if(lt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),lt!==void 0){const ct=lt.normalized,vt=lt.itemSize,Wt=t.get(lt);if(Wt===void 0)continue;const $t=Wt.buffer,X=Wt.type,Q=Wt.bytesPerElement,gt=X===s.INT||X===s.UNSIGNED_INT||lt.gpuType===_a;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Dt=ht.stride,Et=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)f(G.location+Bt,ht.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)d(G.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Bt=0;Bt<G.locationSize;Bt++)S(G.location+Bt,vt/G.locationSize,X,ct,Dt*Q,(Et+vt/G.locationSize*Bt)*Q,gt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)f(G.location+ht,lt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<G.locationSize;ht++)d(G.location+ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ht=0;ht<G.locationSize;ht++)S(G.location+ht,vt/G.locationSize,X,ct,vt*Q,vt/G.locationSize*ht*Q,gt)}}else if(k!==void 0){const ct=k[j];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(G.location,ct);break;case 3:s.vertexAttrib3fv(G.location,ct);break;case 4:s.vertexAttrib4fv(G.location,ct);break;default:s.vertexAttrib1fv(G.location,ct)}}}}b()}function U(){P();for(const _ in i){const y=i[_];for(const z in y){const B=y[z];for(const W in B)h(B[W].object),delete B[W];delete y[z]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const y=i[_.id];for(const z in y){const B=y[z];for(const W in B)h(B[W].object),delete B[W];delete y[z]}delete i[_.id]}function A(_){for(const y in i){const z=i[y];if(z[_.id]===void 0)continue;const B=z[_.id];for(const W in B)h(B[W].object),delete B[W];delete z[_.id]}}function P(){V(),a=!0,r!==n&&(r=n,c(r.object))}function V(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:d,disableUnusedAttributes:b}}function Od(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,i,1)}function l(c,h,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<p.length;v++)e.update(g,i,p[v])}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zd(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==$e&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hi&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:U,maxSamples:R}}function Bd(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Oi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||n;return n=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!d)r?h(null):c();else{const b=r?0:i,S=b*4;let T=f.clippingState||null;l.value=T,T=h(g,p,S,m);for(let U=0;U!==S;++U)T[U]=e[U];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,p,m,g){const v=u!==null?u.length:0;let d=null;if(v!==0){if(d=l.value,g!==!0||d===null){const f=m+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<f)&&(d=new Float32Array(f));for(let S=0,T=m;S!==v;++S,T+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function kd(s){let t=new WeakMap;function e(a,o){return o===Nr?a.mapping=pn:o===Fr&&(a.mapping=mn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nr||o===Fr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class wa extends wl{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cn=4,co=[.125,.215,.35,.446,.526,.582],ki=20,pr=new wa,ho=new Lt;let mr=null,gr=0,_r=0,vr=!1;const zi=(1+Math.sqrt(5))/2,an=1/zi,uo=[new w(-zi,an,0),new w(zi,an,0),new w(-an,0,zi),new w(an,0,zi),new w(0,zi,-an),new w(0,zi,an),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mr,gr,_r),this._renderer.xr.enabled=vr,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pn||t.mapping===mn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),_r=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:fi,format:$e,colorSpace:Ri,depthBuffer:!1},n=po(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hd(r)),this._blurMaterial=Gd(r,t,e)}return n}_compileMaterial(t){const e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,i,n){const o=new De(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(ho),h.toneMapping=wi,h.autoClear=!1;const m=new He({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Ft(new Se,m);let v=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy(ho),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;us(n,b*S,f>2?S:0,S,S),h.setRenderTarget(n),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===pn||t.mapping===mn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,pr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uo[(n-r-1)%uo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ki-1),v=r/g,d=isFinite(r)?1+Math.floor(h*v):ki;d>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ki}`);const f=[];let b=0;for(let A=0;A<ki;++A){const P=A/v,V=Math.exp(-P*P/2);f.push(V),A===0?b+=V:A<d&&(b+=2*V)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;const T=this._sizeLods[n],U=3*T*(n>S-cn?n-S+cn:0),R=4*(this._cubeSize-T);us(e,U,R,3*T,2*T),l.setRenderTarget(e),l.render(u,pr)}}function Hd(s){const t=[],e=[],i=[];let n=s;const r=s-cn+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-cn?l=co[a-s+cn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,d=2,f=1,b=new Float32Array(v*g*m),S=new Float32Array(d*g*m),T=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,P=R>2?0:-1,V=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(V,v*g*R),S.set(p,d*g*R);const _=[R,R,R,R,R,R];T.set(_,f*g*R)}const U=new Ae;U.setAttribute("position",new ei(b,v)),U.setAttribute("uv",new ei(S,d)),U.setAttribute("faceIndex",new ei(T,f)),t.push(U),n>cn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function po(s,t,e){const i=new Ze(s,t,e);return i.texture.mapping=Ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Gd(s,t,e){const i=new Float32Array(ki),n=new w(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function mo(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function go(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Vd(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nr||l===Fr,h=l===pn||l===mn;if(c||h){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new fo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&n(m)?(e===null&&(e=new fo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Wd(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xd(s,t,e,i){const n={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let d=0,f=v.length;d<f;d++)t.remove(v[d])}p.removeEventListener("dispose",a),delete n[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return n[p.id]===!0||(p.addEventListener("dispose",a),n[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)t.update(p[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let d=0,f=v.length;d<f;d++)t.update(v[d],s.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let S=0,T=b.length;S<T;S+=3){const U=b[S+0],R=b[S+1],A=b[S+2];p.push(U,R,R,A,A,U)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,T=b.length/3-1;S<T;S+=3){const U=S+0,R=S+1,A=S+2;p.push(U,R,R,A,A,U)}}else return;const d=new(xl(p)?El:bl)(p,1);d.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qd(s,t,e){let i;function n(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){s.drawElements(i,m,r,p*a),e.update(m,i,1)}function c(p,m,g){g!==0&&(s.drawElementsInstanced(i,m,r,p*a,g),e.update(m,i,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];e.update(d,i,1)}function u(p,m,g,v){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],v[f]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=m[b];for(let b=0;b<v.length;b++)e.update(f,i,v[b])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Kd(s,t,e){const i=new WeakMap,n=new Jt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let _=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var m=_;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),v===!0&&(T=2),d===!0&&(T=3);let U=o.attributes.position.count*T,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*R*4*u),P=new yl(A,U,R,u);P.type=hi,P.needsUpdate=!0;const V=T*4;for(let y=0;y<u;y++){const z=f[y],B=b[y],W=S[y],$=U*R*4*y;for(let k=0;k<z.count;k++){const j=k*V;g===!0&&(n.fromBufferAttribute(z,k),A[$+j+0]=n.x,A[$+j+1]=n.y,A[$+j+2]=n.z,A[$+j+3]=0),v===!0&&(n.fromBufferAttribute(B,k),A[$+j+4]=n.x,A[$+j+5]=n.y,A[$+j+6]=n.z,A[$+j+7]=0),d===!0&&(n.fromBufferAttribute(W,k),A[$+j+8]=n.x,A[$+j+9]=n.y,A[$+j+10]=n.z,A[$+j+11]=W.itemSize===4?n.w:1)}}p={count:u,texture:P,size:new wt(U,R)},i.set(o,p),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function $d(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Cl extends we{constructor(t,e,i,n,r,a,o,l,c,h=un){if(h!==un&&h!==_n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===un&&(i=Vi),i===void 0&&h===_n&&(i=gn),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pl=new we,_o=new Cl(1,1),Ll=new yl,Dl=new Fc,Il=new Al,vo=[],xo=[],Mo=new Float32Array(16),yo=new Float32Array(9),So=new Float32Array(4);function Sn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=vo[n];if(r===void 0&&(r=new Float32Array(n),vo[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function zs(s,t){let e=xo[t];e===void 0&&(e=new Int32Array(t),xo[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function tf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;So.set(i),s.uniformMatrix2fv(this.addr,!1,So),me(e,i)}}function ef(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;yo.set(i),s.uniformMatrix3fv(this.addr,!1,yo),me(e,i)}}function nf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;Mo.set(i),s.uniformMatrix4fv(this.addr,!1,Mo),me(e,i)}}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function df(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(_o.compareFunction=vl,r=_o):r=Pl,e.setTexture2D(t||r,n)}function ff(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Dl,n)}function pf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Il,n)}function mf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ll,n)}function gf(s){switch(s){case 5126:return jd;case 35664:return Zd;case 35665:return Jd;case 35666:return Qd;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return hf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function _f(s,t){s.uniform1fv(this.addr,t)}function vf(s,t){const e=Sn(t,this.size,2);s.uniform2fv(this.addr,e)}function xf(s,t){const e=Sn(t,this.size,3);s.uniform3fv(this.addr,e)}function Mf(s,t){const e=Sn(t,this.size,4);s.uniform4fv(this.addr,e)}function yf(s,t){const e=Sn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sf(s,t){const e=Sn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bf(s,t){const e=Sn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ef(s,t){s.uniform1iv(this.addr,t)}function Tf(s,t){s.uniform2iv(this.addr,t)}function wf(s,t){s.uniform3iv(this.addr,t)}function Af(s,t){s.uniform4iv(this.addr,t)}function Rf(s,t){s.uniform1uiv(this.addr,t)}function Cf(s,t){s.uniform2uiv(this.addr,t)}function Pf(s,t){s.uniform3uiv(this.addr,t)}function Lf(s,t){s.uniform4uiv(this.addr,t)}function Df(s,t,e){const i=this.cache,n=t.length,r=zs(e,n);pe(i,r)||(s.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Pl,r[a])}function If(s,t,e){const i=this.cache,n=t.length,r=zs(e,n);pe(i,r)||(s.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Dl,r[a])}function Uf(s,t,e){const i=this.cache,n=t.length,r=zs(e,n);pe(i,r)||(s.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Il,r[a])}function Nf(s,t,e){const i=this.cache,n=t.length,r=zs(e,n);pe(i,r)||(s.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ll,r[a])}function Ff(s){switch(s){case 5126:return _f;case 35664:return vf;case 35665:return xf;case 35666:return Mf;case 35674:return yf;case 35675:return Sf;case 35676:return bf;case 5124:case 35670:return Ef;case 35667:case 35671:return Tf;case 35668:case 35672:return wf;case 35669:case 35673:return Af;case 5125:return Rf;case 36294:return Cf;case 36295:return Pf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}class Of{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}}class zf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ff(e.type)}}class Bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function bo(s,t){s.seq.push(t),s.map[t.id]=t}function kf(s,t,e){const i=s.name,n=i.length;for(xr.lastIndex=0;;){const r=xr.exec(i),a=xr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){bo(e,c===void 0?new Of(o,s,t):new zf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Bf(o),bo(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);kf(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Eo(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Hf=37297;let Gf=0;function Vf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Wf(s){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(s);let i;switch(t===e?i="":t===Ps&&e===Cs?i="LinearDisplayP3ToLinearSRGB":t===Cs&&e===Ps&&(i="LinearSRGBToLinearDisplayP3"),s){case Ri:case Fs:return[i,"LinearTransferOETF"];case qe:case ba:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function To(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Vf(s.getShaderSource(t),a)}else return n}function Xf(s,t){const e=Wf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qf(s,t){let e;switch(t){case el:e="Linear";break;case il:e="Reinhard";break;case nl:e="Cineon";break;case ga:e="ACESFilmic";break;case sl:e="AgX";break;case rl:e="Neutral";break;case pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new w;function Yf(){qt.getLuminanceCoefficients(ds);const s=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(In).join(`
`)}function $f(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function In(s){return s!==""}function wo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ao(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(Zf,Qf)}const Jf=new Map;function Qf(s,t){let e=Ut[t];if(e===void 0){const i=Jf.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(s){return s.replace(tp,ep)}function ep(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Co(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ip(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function np(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pn:case mn:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mn:t="ENVMAP_MODE_REFRACTION";break}return t}function rp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tl:t="ENVMAP_BLENDING_MULTIPLY";break;case dc:t="ENVMAP_BLENDING_MIX";break;case fc:t="ENVMAP_BLENDING_ADD";break}return t}function ap(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function op(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ip(e),c=np(e),h=sp(e),u=rp(e),p=ap(e),m=Kf(e),g=$f(r),v=n.createProgram();let d,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(In).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(In).join(`
`),f.length>0&&(f+=`
`)):(d=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(In).join(`
`),f=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Ut.tonemapping_pars_fragment:"",e.toneMapping!==wi?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),Yf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(In).join(`
`)),a=ua(a),a=wo(a,e),a=Ao(a,e),o=ua(o),o=wo(o,e),o=Ao(o,e),a=Ro(a),o=Ro(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+d+a,T=b+f+o,U=Eo(n,n.VERTEX_SHADER,S),R=Eo(n,n.FRAGMENT_SHADER,T);n.attachShader(v,U),n.attachShader(v,R),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(y){if(s.debug.checkShaderErrors){const z=n.getProgramInfoLog(v).trim(),B=n.getShaderInfoLog(U).trim(),W=n.getShaderInfoLog(R).trim();let $=!0,k=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,U,R);else{const j=To(n,U,"vertex"),G=To(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+z+`
`+j+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(k=!1);k&&(y.diagnostics={runnable:$,programLog:z,vertexShader:{log:B,prefix:d},fragmentShader:{log:W,prefix:f}})}n.deleteShader(U),n.deleteShader(R),P=new Ts(n,v),V=jf(n,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(v,Hf)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}let lp=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hp(t),e.set(t,i)),i}}class hp{constructor(t){this.id=lp++,this.code=t,this.usedTimes=0}}function up(s,t,e,i,n,r,a){const o=new Ea,l=new cp,c=new Set,h=[],u=n.logarithmicDepthBuffer,p=n.reverseDepthBuffer,m=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,y,z,B,W){const $=B.fog,k=W.geometry,j=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||j),lt=G&&G.mapping===Ns?G.image.height:null,ct=v[_.type];_.precision!==null&&(g=n.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const vt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Wt=vt!==void 0?vt.length:0;let $t=0;k.morphAttributes.position!==void 0&&($t=1),k.morphAttributes.normal!==void 0&&($t=2),k.morphAttributes.color!==void 0&&($t=3);let X,Q,gt,ht;if(ct){const Ce=Qe[ct];X=Ce.vertexShader,Q=Ce.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,l.update(_),gt=l.getVertexShaderID(_),ht=l.getFragmentShaderID(_);const Dt=s.getRenderTarget(),Et=W.isInstancedMesh===!0,Bt=W.isBatchedMesh===!0,Zt=!!_.map,kt=!!_.matcap,C=!!G,Ie=!!_.aoMap,Ot=!!_.lightMap,Gt=!!_.bumpMap,At=!!_.normalMap,ne=!!_.displacementMap,Pt=!!_.emissiveMap,E=!!_.metalnessMap,x=!!_.roughnessMap,N=_.anisotropy>0,Y=_.clearcoat>0,Z=_.dispersion>0,q=_.iridescence>0,xt=_.sheen>0,nt=_.transmission>0,ut=N&&!!_.anisotropyMap,Vt=Y&&!!_.clearcoatMap,tt=Y&&!!_.clearcoatNormalMap,dt=Y&&!!_.clearcoatRoughnessMap,Rt=q&&!!_.iridescenceMap,Ct=q&&!!_.iridescenceThicknessMap,ft=xt&&!!_.sheenColorMap,zt=xt&&!!_.sheenRoughnessMap,It=!!_.specularMap,Qt=!!_.specularColorMap,L=!!_.specularIntensityMap,at=nt&&!!_.transmissionMap,H=nt&&!!_.thicknessMap,K=!!_.gradientMap,st=!!_.alphaMap,ot=_.alphaTest>0,Ht=!!_.alphaHash,ue=!!_.extensions;let Re=wi;_.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Re=s.toneMapping);const Xt={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&W._colorsTexture!==null,instancing:Et,instancingColor:Et&&W.instanceColor!==null,instancingMorph:Et&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Dt===null?s.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Ri,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:kt,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:lt,aoMap:Ie,lightMap:Ot,bumpMap:Gt,normalMap:At,displacementMap:m&&ne,emissiveMap:Pt,normalMapObjectSpace:At&&_.normalMapType===vc,normalMapTangentSpace:At&&_.normalMapType===_l,metalnessMap:E,roughnessMap:x,anisotropy:N,anisotropyMap:ut,clearcoat:Y,clearcoatMap:Vt,clearcoatNormalMap:tt,clearcoatRoughnessMap:dt,dispersion:Z,iridescence:q,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:xt,sheenColorMap:ft,sheenRoughnessMap:zt,specularMap:It,specularColorMap:Qt,specularIntensityMap:L,transmission:nt,transmissionMap:at,thicknessMap:H,gradientMap:K,opaque:_.transparent===!1&&_.blending===hn&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:Ht,combine:_.combine,mapUv:Zt&&d(_.map.channel),aoMapUv:Ie&&d(_.aoMap.channel),lightMapUv:Ot&&d(_.lightMap.channel),bumpMapUv:Gt&&d(_.bumpMap.channel),normalMapUv:At&&d(_.normalMap.channel),displacementMapUv:ne&&d(_.displacementMap.channel),emissiveMapUv:Pt&&d(_.emissiveMap.channel),metalnessMapUv:E&&d(_.metalnessMap.channel),roughnessMapUv:x&&d(_.roughnessMap.channel),anisotropyMapUv:ut&&d(_.anisotropyMap.channel),clearcoatMapUv:Vt&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:tt&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:zt&&d(_.sheenRoughnessMap.channel),specularMapUv:It&&d(_.specularMap.channel),specularColorMapUv:Qt&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:at&&d(_.transmissionMap.channel),thicknessMapUv:H&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(At||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(Zt||st),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:$t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ci,flipSided:_.side===Te,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function b(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)y.push(z),y.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(S(y,_),T(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function T(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function U(_){const y=v[_.type];let z;if(y){const B=Qe[y];z=On.clone(B.uniforms)}else z=_.uniforms;return z}function R(_,y){let z;for(let B=0,W=h.length;B<W;B++){const $=h[B];if($.cacheKey===y){z=$,++z.usedTimes;break}}return z===void 0&&(z=new op(s,y,_,r),h.push(z)),z}function A(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:U,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:V}}function dp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function fp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Po(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lo(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,p,m,g,v,d){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:d},s[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=d),t++,f}function o(u,p,m,g,v,d){const f=a(u,p,m,g,v,d);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function l(u,p,m,g,v,d){const f=a(u,p,m,g,v,d);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||fp),i.length>1&&i.sort(p||Po),n.length>1&&n.sort(p||Po)}function h(){for(let u=t,p=s.length;u<p;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function pp(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Lo,s.set(i,[a])):n>=r.length?(a=new Lo,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Lt};break;case"SpotLight":e={position:new w,direction:new w,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function gp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _p=0;function vp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xp(s){const t=new mp,e=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const n=new w,r=new ie,a=new ie;function o(c){let h=0,u=0,p=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,g=0,v=0,d=0,f=0,b=0,S=0,T=0,U=0,R=0,A=0;c.sort(vp);for(let V=0,_=c.length;V<_;V++){const y=c[V],z=y.color,B=y.intensity,W=y.distance,$=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=z.r*B,u+=z.g*B,p+=z.b*B;else if(y.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(y.sh.coefficients[k],B);A++}else if(y.isDirectionalLight){const k=t.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const j=y.shadow,G=e.get(y);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=y.shadow.matrix,b++}i.directional[m]=k,m++}else if(y.isSpotLight){const k=t.get(y);k.position.setFromMatrixPosition(y.matrixWorld),k.color.copy(z).multiplyScalar(B),k.distance=W,k.coneCos=Math.cos(y.angle),k.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),k.decay=y.decay,i.spot[v]=k;const j=y.shadow;if(y.map&&(i.spotLightMap[U]=y.map,U++,j.updateMatrices(y),y.castShadow&&R++),i.spotLightMatrix[v]=j.matrix,y.castShadow){const G=e.get(y);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=$,T++}v++}else if(y.isRectAreaLight){const k=t.get(y);k.color.copy(z).multiplyScalar(B),k.halfWidth.set(y.width*.5,0,0),k.halfHeight.set(0,y.height*.5,0),i.rectArea[d]=k,d++}else if(y.isPointLight){const k=t.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),k.distance=y.distance,k.decay=y.decay,y.castShadow){const j=y.shadow,G=e.get(y);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=y.shadow.matrix,S++}i.point[g]=k,g++}else if(y.isHemisphereLight){const k=t.get(y);k.skyColor.copy(y.color).multiplyScalar(B),k.groundColor.copy(y.groundColor).multiplyScalar(B),i.hemi[f]=k,f++}}d>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==d||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==U||P.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=d,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=d,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=U,P.numLightProbes=A,i.version=_p++)}function l(c,h){let u=0,p=0,m=0,g=0,v=0;const d=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const S=c[f];if(S.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),u++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:i}}function Do(s){const t=new xp(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mp(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Do(s),t.set(n,[o])):r>=a.length?(o=new Do(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class yp extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
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
}`;function Tp(s,t,e){let i=new Ta;const n=new wt,r=new wt,a=new Jt,o=new yp({depthPacking:_c}),l=new Sp,c={},h=e.maxTextureSize,u={[Ai]:Te,[Te]:Ai,[ci]:ci},p=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bp,fragmentShader:Ep}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let f=this.type;this.render=function(R,A,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const V=s.getRenderTarget(),_=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),z=s.state;z.setBlending(di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==li&&this.type===li,W=f===li&&this.type!==li;for(let $=0,k=R.length;$<k;$++){const j=R[$],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const lt=G.getFrameExtents();if(n.multiply(lt),r.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/lt.x),n.x=r.x*lt.x,G.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/lt.y),n.y=r.y*lt.y,G.mapSize.y=r.y)),G.map===null||B===!0||W===!0){const vt=this.type!==li?{minFilter:ke,magFilter:ke}:{};G.map!==null&&G.map.dispose(),G.map=new Ze(n.x,n.y,vt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ct=G.getViewportCount();for(let vt=0;vt<ct;vt++){const Wt=G.getViewport(vt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),z.viewport(a),G.updateMatrices(j,vt),i=G.getFrustum(),T(A,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===li&&b(G,P),G.needsUpdate=!1}f=this.type,d.needsUpdate=!1,s.setRenderTarget(V,_,y)};function b(R,A){const P=t.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ze(n.x,n.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,P,p,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,P,m,v,null)}function S(R,A,P,V){let _=null;const y=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)_=y;else if(_=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=_.uuid,B=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let $=W[B];$===void 0&&($=_.clone(),W[B]=$,A.addEventListener("dispose",U)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,V===li?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=s.properties.get(_);z.light=P}return _}function T(R,A,P,V,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const $=B.groups;for(let k=0,j=$.length;k<j;k++){const G=$[k],lt=W[G.materialIndex];if(lt&&lt.visible){const ct=S(R,lt,V,_);R.onBeforeShadow(s,R,A,P,B,ct,G),s.renderBufferDirect(P,null,B,ct,R,G),R.onAfterShadow(s,R,A,P,B,ct,G)}}}else if(W.visible){const $=S(R,W,V,_);R.onBeforeShadow(s,R,A,P,B,$,null),s.renderBufferDirect(P,null,B,$,R,null),R.onAfterShadow(s,R,A,P,B,$,null)}}const z=R.children;for(let B=0,W=z.length;B<W;B++)T(z[B],A,P,V,_)}function U(R){R.target.removeEventListener("dispose",U);for(const P in c){const V=c[P],_=R.target.uuid;_ in V&&(V[_].dispose(),delete V[_])}}}const wp={[Rr]:Cr,[Pr]:Ir,[Lr]:Ur,[fn]:Dr,[Cr]:Rr,[Ir]:Pr,[Ur]:Lr,[Dr]:fn};function Ap(s){function t(){let L=!1;const at=new Jt;let H=null;const K=new Jt(0,0,0,0);return{setMask:function(st){H!==st&&!L&&(s.colorMask(st,st,st,st),H=st)},setLocked:function(st){L=st},setClear:function(st,ot,Ht,ue,Re){Re===!0&&(st*=ue,ot*=ue,Ht*=ue),at.set(st,ot,Ht,ue),K.equals(at)===!1&&(s.clearColor(st,ot,Ht,ue),K.copy(at))},reset:function(){L=!1,H=null,K.set(-1,0,0,0)}}}function e(){let L=!1,at=!1,H=null,K=null,st=null;return{setReversed:function(ot){at=ot},setTest:function(ot){ot?gt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(ot){H!==ot&&!L&&(s.depthMask(ot),H=ot)},setFunc:function(ot){if(at&&(ot=wp[ot]),K!==ot){switch(ot){case Rr:s.depthFunc(s.NEVER);break;case Cr:s.depthFunc(s.ALWAYS);break;case Pr:s.depthFunc(s.LESS);break;case fn:s.depthFunc(s.LEQUAL);break;case Lr:s.depthFunc(s.EQUAL);break;case Dr:s.depthFunc(s.GEQUAL);break;case Ir:s.depthFunc(s.GREATER);break;case Ur:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ot}},setLocked:function(ot){L=ot},setClear:function(ot){st!==ot&&(s.clearDepth(ot),st=ot)},reset:function(){L=!1,H=null,K=null,st=null}}}function i(){let L=!1,at=null,H=null,K=null,st=null,ot=null,Ht=null,ue=null,Re=null;return{setTest:function(Xt){L||(Xt?gt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Xt){at!==Xt&&!L&&(s.stencilMask(Xt),at=Xt)},setFunc:function(Xt,Ce,ii){(H!==Xt||K!==Ce||st!==ii)&&(s.stencilFunc(Xt,Ce,ii),H=Xt,K=Ce,st=ii)},setOp:function(Xt,Ce,ii){(ot!==Xt||Ht!==Ce||ue!==ii)&&(s.stencilOp(Xt,Ce,ii),ot=Xt,Ht=Ce,ue=ii)},setLocked:function(Xt){L=Xt},setClear:function(Xt){Re!==Xt&&(s.clearStencil(Xt),Re=Xt)},reset:function(){L=!1,at=null,H=null,K=null,st=null,ot=null,Ht=null,ue=null,Re=null}}}const n=new t,r=new e,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,g=!1,v=null,d=null,f=null,b=null,S=null,T=null,U=null,R=new Lt(0,0,0),A=0,P=!1,V=null,_=null,y=null,z=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,k=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=k>=2);let G=null,lt={};const ct=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),Wt=new Jt().fromArray(ct),$t=new Jt().fromArray(vt);function X(L,at,H,K){const st=new Uint8Array(4),ot=s.createTexture();s.bindTexture(L,ot),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<H;Ht++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(at+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return ot}const Q={};Q[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),r.setFunc(fn),Ot(!1),Gt(ka),gt(s.CULL_FACE),C(di);function gt(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function ht(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function Dt(L,at){return h[L]!==at?(s.bindFramebuffer(L,at),h[L]=at,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=at),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Et(L,at){let H=p,K=!1;if(L){H=u.get(at),H===void 0&&(H=[],u.set(at,H));const st=L.textures;if(H.length!==st.length||H[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Ht=st.length;ot<Ht;ot++)H[ot]=s.COLOR_ATTACHMENT0+ot;H.length=st.length,K=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,K=!0);K&&s.drawBuffers(H)}function Bt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Zt={[Bi]:s.FUNC_ADD,[$l]:s.FUNC_SUBTRACT,[jl]:s.FUNC_REVERSE_SUBTRACT};Zt[Zl]=s.MIN,Zt[Jl]=s.MAX;const kt={[Ql]:s.ZERO,[tc]:s.ONE,[ec]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[oc]:s.SRC_ALPHA_SATURATE,[rc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[ic]:s.ONE_MINUS_SRC_COLOR,[Ar]:s.ONE_MINUS_SRC_ALPHA,[ac]:s.ONE_MINUS_DST_COLOR,[sc]:s.ONE_MINUS_DST_ALPHA,[lc]:s.CONSTANT_COLOR,[cc]:s.ONE_MINUS_CONSTANT_COLOR,[hc]:s.CONSTANT_ALPHA,[uc]:s.ONE_MINUS_CONSTANT_ALPHA};function C(L,at,H,K,st,ot,Ht,ue,Re,Xt){if(L===di){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),L!==Kl){if(L!==v||Xt!==P){if((d!==Bi||S!==Bi)&&(s.blendEquation(s.FUNC_ADD),d=Bi,S=Bi),Xt)switch(L){case hn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,b=null,T=null,U=null,R.set(0,0,0),A=0,v=L,P=Xt}return}st=st||at,ot=ot||H,Ht=Ht||K,(at!==d||st!==S)&&(s.blendEquationSeparate(Zt[at],Zt[st]),d=at,S=st),(H!==f||K!==b||ot!==T||Ht!==U)&&(s.blendFuncSeparate(kt[H],kt[K],kt[ot],kt[Ht]),f=H,b=K,T=ot,U=Ht),(ue.equals(R)===!1||Re!==A)&&(s.blendColor(ue.r,ue.g,ue.b,Re),R.copy(ue),A=Re),v=L,P=!1}function Ie(L,at){L.side===ci?ht(s.CULL_FACE):gt(s.CULL_FACE);let H=L.side===Te;at&&(H=!H),Ot(H),L.blending===hn&&L.transparent===!1?C(di):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),n.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){V!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),V=L)}function Gt(L){L!==ql?(gt(s.CULL_FACE),L!==_&&(L===ka?s.cullFace(s.BACK):L===Yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),_=L}function At(L){L!==y&&($&&s.lineWidth(L),y=L)}function ne(L,at,H){L?(gt(s.POLYGON_OFFSET_FILL),(z!==at||B!==H)&&(s.polygonOffset(at,H),z=at,B=H)):ht(s.POLYGON_OFFSET_FILL)}function Pt(L){L?gt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function E(L){L===void 0&&(L=s.TEXTURE0+W-1),G!==L&&(s.activeTexture(L),G=L)}function x(L,at,H){H===void 0&&(G===null?H=s.TEXTURE0+W-1:H=G);let K=lt[H];K===void 0&&(K={type:void 0,texture:void 0},lt[H]=K),(K.type!==L||K.texture!==at)&&(G!==H&&(s.activeTexture(H),G=H),s.bindTexture(L,at||Q[L]),K.type=L,K.texture=at)}function N(){const L=lt[G];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Wt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Wt.copy(L))}function ft(L){$t.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),$t.copy(L))}function zt(L,at){let H=l.get(at);H===void 0&&(H=new WeakMap,l.set(at,H));let K=H.get(L);K===void 0&&(K=s.getUniformBlockIndex(at,L.name),H.set(L,K))}function It(L,at){const K=l.get(at).get(L);o.get(at)!==K&&(s.uniformBlockBinding(at,K,L.__bindingPointIndex),o.set(at,K))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,lt={},h={},u=new WeakMap,p=[],m=null,g=!1,v=null,d=null,f=null,b=null,S=null,T=null,U=null,R=new Lt(0,0,0),A=0,P=!1,V=null,_=null,y=null,z=null,B=null,Wt.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}return{buffers:{color:n,depth:r,stencil:a},enable:gt,disable:ht,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Bt,setBlending:C,setMaterial:Ie,setFlipSided:Ot,setCullFace:Gt,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Pt,activeTexture:E,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:dt,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:It,texStorage2D:Vt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ut,scissor:Ct,viewport:ft,reset:Qt}}function Io(s,t,e,i){const n=Rp(i);switch(e){case hl:return s*t;case dl:return s*t;case fl:return s*t*2;case pl:return s*t/n.components*n.byteLength;case Ma:return s*t/n.components*n.byteLength;case ml:return s*t*2/n.components*n.byteLength;case ya:return s*t*2/n.components*n.byteLength;case ul:return s*t*3/n.components*n.byteLength;case $e:return s*t*4/n.components*n.byteLength;case Sa:return s*t*4/n.components*n.byteLength;case xs:case Ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Br:case Hr:return Math.max(s,16)*Math.max(t,8)/4;case zr:case kr:return Math.max(s,8)*Math.max(t,8)/2;case Gr:case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case bs:case ra:case aa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gl:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(s){switch(s){case mi:case ol:return{byteLength:1,components:1};case Fn:case ll:case fi:return{byteLength:2,components:1};case va:case xa:return{byteLength:2,components:4};case Vi:case _a:case hi:return{byteLength:4,components:1};case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Cp(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Ds("canvas")}function v(E,x,N){let Y=1;const Z=Pt(E);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(Y*Z.width),xt=Math.floor(Y*Z.height);u===void 0&&(u=g(q,xt));const nt=x?g(q,xt):u;return nt.width=q,nt.height=xt,nt.getContext("2d").drawImage(E,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+xt+")."),nt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function d(E){return E.generateMipmaps&&E.minFilter!==ke&&E.minFilter!==Ye}function f(E){s.generateMipmap(E)}function b(E,x,N,Y,Z=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=x;if(x===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),x===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),x===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const xt=Z?Rs:qt.getTransfer(Y);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=xt===te?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,x){let N;return E?x===null||x===Vi||x===gn?N=s.DEPTH24_STENCIL8:x===hi?N=s.DEPTH32F_STENCIL8:x===Fn&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vi||x===gn?N=s.DEPTH_COMPONENT24:x===hi?N=s.DEPTH_COMPONENT32F:x===Fn&&(N=s.DEPTH_COMPONENT16),N}function T(E,x){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function U(E){const x=E.target;x.removeEventListener("dispose",U),A(x),x.isVideoTexture&&h.delete(x)}function R(E){const x=E.target;x.removeEventListener("dispose",R),V(x)}function A(E){const x=i.get(E);if(x.__webglInit===void 0)return;const N=E.source,Y=p.get(N);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(E),Object.keys(Y).length===0&&p.delete(N)}i.remove(E)}function P(E){const x=i.get(E);s.deleteTexture(x.__webglTexture);const N=E.source,Y=p.get(N);delete Y[x.__cacheKey],a.memory.textures--}function V(E){const x=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const q=i.get(N[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(N[Y])}i.remove(E)}let _=0;function y(){_=0}function z(){const E=_;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),_+=1,E}function B(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function W(E,x){const N=i.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(N,E,x);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function $(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){$t(N,E,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function k(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){$t(N,E,x);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function j(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){X(N,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}const G={[As]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},lt={[ke]:s.NEAREST,[mc]:s.NEAREST_MIPMAP_NEAREST,[qn]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[Gi]:s.LINEAR_MIPMAP_LINEAR},ct={[xc]:s.NEVER,[Tc]:s.ALWAYS,[Mc]:s.LESS,[vl]:s.LEQUAL,[yc]:s.EQUAL,[Ec]:s.GEQUAL,[Sc]:s.GREATER,[bc]:s.NOTEQUAL};function vt(E,x){if(x.type===hi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===Ws||x.magFilter===qn||x.magFilter===Gi||x.minFilter===Ye||x.minFilter===Ws||x.minFilter===qn||x.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,G[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,G[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,G[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,lt[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==qn&&x.minFilter!==Gi||x.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",U));const Y=x.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const q=B(x);if(q!==E.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[q].usedTimes++;const xt=Z[E.__cacheKey];xt!==void 0&&(Z[E.__cacheKey].usedTimes--,xt.usedTimes===0&&P(x)),E.__cacheKey=q,E.__webglTexture=Z[q].texture}return N}function $t(E,x,N){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=Wt(E,x),q=x.source;e.bindTexture(Y,E.__webglTexture,s.TEXTURE0+N);const xt=i.get(q);if(q.version!==xt.__version||Z===!0){e.activeTexture(s.TEXTURE0+N);const nt=qt.getPrimaries(qt.workingColorSpace),ut=x.colorSpace===Ti?null:qt.getPrimaries(x.colorSpace),Vt=x.colorSpace===Ti||nt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let tt=v(x.image,!1,n.maxTextureSize);tt=ne(x,tt);const dt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let Ct=b(x.internalFormat,dt,Rt,x.colorSpace,x.isVideoTexture);vt(Y,x);let ft;const zt=x.mipmaps,It=x.isVideoTexture!==!0,Qt=xt.__version===void 0||Z===!0,L=q.dataReady,at=T(x,tt);if(x.isDepthTexture)Ct=S(x.format===_n,x.type),Qt&&(It?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,dt,Rt,null));else if(x.isDataTexture)if(zt.length>0){It&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let H=0,K=zt.length;H<K;H++)ft=zt[H],It?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,H,Ct,ft.width,ft.height,0,dt,Rt,ft.data);x.generateMipmaps=!1}else It?(Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,tt.width,tt.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,Rt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,dt,Rt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,zt[0].width,zt[0].height,tt.depth);for(let H=0,K=zt.length;H<K;H++)if(ft=zt[H],x.format!==$e)if(dt!==null)if(It){if(L)if(x.layerUpdates.size>0){const st=Io(ft.width,ft.height,x.format,x.type);for(const ot of x.layerUpdates){const Ht=ft.data.subarray(ot*st/ft.data.BYTES_PER_ELEMENT,(ot+1)*st/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,ot,ft.width,ft.height,1,dt,Ht,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ct,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ft.width,ft.height,tt.depth,dt,Rt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,Ct,ft.width,ft.height,tt.depth,0,dt,Rt,ft.data)}else{It&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let H=0,K=zt.length;H<K;H++)ft=zt[H],x.format!==$e?dt!==null?It?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,H,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,H,Ct,ft.width,ft.height,0,dt,Rt,ft.data)}else if(x.isDataArrayTexture)if(It){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){const H=Io(tt.width,tt.height,x.format,x.type);for(const K of x.layerUpdates){const st=tt.data.subarray(K*H/tt.data.BYTES_PER_ELEMENT,(K+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,dt,Rt,st)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Rt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,dt,Rt,tt.data);else if(x.isData3DTexture)It?(Qt&&e.texStorage3D(s.TEXTURE_3D,at,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,dt,Rt,tt.data);else if(x.isFramebufferTexture){if(Qt)if(It)e.texStorage2D(s.TEXTURE_2D,at,Ct,tt.width,tt.height);else{let H=tt.width,K=tt.height;for(let st=0;st<at;st++)e.texImage2D(s.TEXTURE_2D,st,Ct,H,K,0,dt,Rt,null),H>>=1,K>>=1}}else if(zt.length>0){if(It&&Qt){const H=Pt(zt[0]);e.texStorage2D(s.TEXTURE_2D,at,Ct,H.width,H.height)}for(let H=0,K=zt.length;H<K;H++)ft=zt[H],It?L&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,dt,Rt,ft):e.texImage2D(s.TEXTURE_2D,H,Ct,dt,Rt,ft);x.generateMipmaps=!1}else if(It){if(Qt){const H=Pt(tt);e.texStorage2D(s.TEXTURE_2D,at,Ct,H.width,H.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Rt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,dt,Rt,tt);d(x)&&f(Y),xt.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function X(E,x,N){if(x.image.length!==6)return;const Y=Wt(E,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+N);const q=i.get(Z);if(Z.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+N);const xt=qt.getPrimaries(qt.workingColorSpace),nt=x.colorSpace===Ti?null:qt.getPrimaries(x.colorSpace),ut=x.colorSpace===Ti||xt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Vt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Vt&&!tt?dt[K]=v(x.image[K],!0,n.maxCubemapSize):dt[K]=tt?x.image[K].image:x.image[K],dt[K]=ne(x,dt[K]);const Rt=dt[0],Ct=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),zt=b(x.internalFormat,Ct,ft,x.colorSpace),It=x.isVideoTexture!==!0,Qt=q.__version===void 0||Y===!0,L=Z.dataReady;let at=T(x,Rt);vt(s.TEXTURE_CUBE_MAP,x);let H;if(Vt){It&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,zt,Rt.width,Rt.height);for(let K=0;K<6;K++){H=dt[K].mipmaps;for(let st=0;st<H.length;st++){const ot=H[st];x.format!==$e?Ct!==null?It?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,ot.width,ot.height,Ct,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,zt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,ot.width,ot.height,Ct,ft,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,zt,ot.width,ot.height,0,Ct,ft,ot.data)}}}else{if(H=x.mipmaps,It&&Qt){H.length>0&&at++;const K=Pt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,zt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){It?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Ct,ft,dt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,dt[K].width,dt[K].height,0,Ct,ft,dt[K].data);for(let st=0;st<H.length;st++){const Ht=H[st].image[K].image;It?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,Ht.width,Ht.height,Ct,ft,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,zt,Ht.width,Ht.height,0,Ct,ft,Ht.data)}}else{It?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,ft,dt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,Ct,ft,dt[K]);for(let st=0;st<H.length;st++){const ot=H[st];It?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,Ct,ft,ot.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,zt,Ct,ft,ot.image[K])}}}d(x)&&f(s.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Q(E,x,N,Y,Z,q){const xt=r.convert(N.format,N.colorSpace),nt=r.convert(N.type),ut=b(N.internalFormat,xt,nt,N.colorSpace);if(!i.get(x).__hasExternalTextures){const tt=Math.max(1,x.width>>q),dt=Math.max(1,x.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ut,tt,dt,x.depth,0,xt,nt,null):e.texImage2D(Z,q,ut,tt,dt,0,xt,nt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Gt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,i.get(N).__webglTexture,0,Ot(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,i.get(N).__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(E,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(x.stencilBuffer,Z),xt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=Ot(x);Gt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,q,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,E)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],xt=r.convert(q.format,q.colorSpace),nt=r.convert(q.type),ut=b(q.internalFormat,xt,nt,q.colorSpace),Vt=Ot(x);N&&Gt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,ut,x.width,x.height):Gt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const Y=i.get(x.depthTexture).__webglTexture,Z=Ot(x);if(x.depthTexture.format===un)Gt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(x.depthTexture.format===_n)Gt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(E){const x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),gt(x.__webglDepthbuffer[Y],E,!1);else{const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),gt(x.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(E,x,N){const Y=i.get(E);x!==void 0&&Q(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Dt(E)}function Bt(E){const x=E.texture,N=i.get(E),Y=i.get(x);E.addEventListener("dispose",R);const Z=E.textures,q=E.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[nt][ut]=s.createFramebuffer()}else N.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)N.__webglFramebuffer[nt]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(xt)for(let nt=0,ut=Z.length;nt<ut;nt++){const Vt=i.get(Z[nt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Gt(E)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const ut=Z[nt];N.__webglColorRenderbuffer[nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const Vt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),dt=b(ut.internalFormat,Vt,tt,ut.colorSpace,E.isXRRenderTarget===!0),Rt=Ot(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,dt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),vt(s.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Q(N.__webglFramebuffer[nt][ut],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ut);else Q(N.__webglFramebuffer[nt],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let nt=0,ut=Z.length;nt<ut;nt++){const Vt=Z[nt],tt=i.get(Vt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),vt(s.TEXTURE_2D,Vt),Q(N.__webglFramebuffer,E,Vt,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,0),d(Vt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(nt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),vt(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)Q(N.__webglFramebuffer[ut],E,x,s.COLOR_ATTACHMENT0,nt,ut);else Q(N.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,nt,0);d(x)&&f(nt),e.unbindTexture()}E.depthBuffer&&Dt(E)}function Zt(E){const x=E.textures;for(let N=0,Y=x.length;N<Y;N++){const Z=x[N];if(d(Z)){const q=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xt=i.get(Z).__webglTexture;e.bindTexture(q,xt),f(q),e.unbindTexture()}}}const kt=[],C=[];function Ie(E){if(E.samples>0){if(Gt(E)===!1){const x=E.textures,N=E.width,Y=E.height;let Z=s.COLOR_BUFFER_BIT;const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=i.get(E),nt=x.length>1;if(nt)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Vt=i.get(x[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,s.NEAREST),l===!0&&(kt.length=0,C.length=0,kt.push(s.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(kt.push(q),C.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),nt)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Vt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ot(E){return Math.min(n.maxSamples,E.samples)}function Gt(E){const x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ne(E,x){const N=E.colorSpace,Y=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ri&&N!==Ti&&(qt.getTransfer(N)===te?(Y!==$e||Z!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=y,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=Et,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Gt}function Pp(s,t){function e(i,n=Ti){let r;const a=qt.getTransfer(n);if(i===mi)return s.UNSIGNED_BYTE;if(i===va)return s.UNSIGNED_SHORT_4_4_4_4;if(i===xa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ol)return s.BYTE;if(i===ll)return s.SHORT;if(i===Fn)return s.UNSIGNED_SHORT;if(i===_a)return s.INT;if(i===Vi)return s.UNSIGNED_INT;if(i===hi)return s.FLOAT;if(i===fi)return s.HALF_FLOAT;if(i===hl)return s.ALPHA;if(i===ul)return s.RGB;if(i===$e)return s.RGBA;if(i===dl)return s.LUMINANCE;if(i===fl)return s.LUMINANCE_ALPHA;if(i===un)return s.DEPTH_COMPONENT;if(i===_n)return s.DEPTH_STENCIL;if(i===pl)return s.RED;if(i===Ma)return s.RED_INTEGER;if(i===ml)return s.RG;if(i===ya)return s.RG_INTEGER;if(i===Sa)return s.RGBA_INTEGER;if(i===xs||i===Ms||i===ys||i===Ss)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zr||i===Br||i===kr||i===Hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gr||i===Vr||i===Wr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gr||i===Vr)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xr||i===qr||i===Yr||i===Kr||i===$r||i===jr||i===Zr||i===Jr||i===Qr||i===ta||i===ea||i===ia||i===na||i===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$r)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bs||i===ra||i===aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===bs)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gl||i===oa||i===la||i===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class Lp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class je extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,i),f=this._getHandJoint(c,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new we,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ee({vertexShader:Ip,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fp extends Mn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null;const v=new Np,d=e.getContextAttributes();let f=null,b=null;const S=[],T=[],U=new wt;let R=null;const A=new De;A.layers.enable(1),A.viewport=new Jt;const P=new De;P.layers.enable(2),P.viewport=new Jt;const V=[A,P],_=new Lp;_.layers.enable(1),_.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new Mr,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new Mr,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new Mr,S[X]=Q),Q.getHandSpace()};function B(X){const Q=T.indexOf(X.inputSource);if(Q===-1)return;const gt=S[Q];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",$);for(let X=0;X<S.length;X++){const Q=T[X];Q!==null&&(T[X]=null,S[X].disconnect(Q))}y=null,z=null,v.reset(),t.setRenderTarget(f),m=null,p=null,u=null,n=null,b=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",W),n.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),n.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Ze(m.framebufferWidth,m.framebufferHeight,{format:$e,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,gt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?_n:un,gt=d.stencil?gn:Vi);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(n,e),p=u.createProjectionLayer(Dt),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Ze(p.textureWidth,p.textureHeight,{format:$e,type:mi,depthTexture:new Cl(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),$t.setContext(n),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(X){for(let Q=0;Q<X.removed.length;Q++){const gt=X.removed[Q],ht=T.indexOf(gt);ht>=0&&(T[ht]=null,S[ht].disconnect(gt))}for(let Q=0;Q<X.added.length;Q++){const gt=X.added[Q];let ht=T.indexOf(gt);if(ht===-1){for(let Et=0;Et<S.length;Et++)if(Et>=T.length){T.push(gt),ht=Et;break}else if(T[Et]===null){T[Et]=gt,ht=Et;break}if(ht===-1)break}const Dt=S[ht];Dt&&Dt.connect(gt)}}const k=new w,j=new w;function G(X,Q,gt){k.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const ht=k.distanceTo(j),Dt=Q.projectionMatrix.elements,Et=gt.projectionMatrix.elements,Bt=Dt[14]/(Dt[10]-1),Zt=Dt[14]/(Dt[10]+1),kt=(Dt[9]+1)/Dt[5],C=(Dt[9]-1)/Dt[5],Ie=(Dt[8]-1)/Dt[0],Ot=(Et[8]+1)/Et[0],Gt=Bt*Ie,At=Bt*Ot,ne=ht/(-Ie+Ot),Pt=ne*-Ie;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Dt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const E=Bt+ne,x=Zt+ne,N=Gt-Pt,Y=At+(ht-Pt),Z=kt*Zt/x*E,q=C*Zt/x*E;X.projectionMatrix.makePerspective(N,Y,Z,q,E,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function lt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Q=X.near,gt=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),_.near=P.near=A.near=Q,_.far=P.far=A.far=gt,(y!==_.near||z!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,z=_.far);const ht=X.parent,Dt=_.cameras;lt(_,ht);for(let Et=0;Et<Dt.length;Et++)lt(Dt[Et],ht);Dt.length===2?G(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),ct(X,_,ht)};function ct(X,Q,gt){gt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ha*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let vt=null;function Wt(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ht=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Et=0;Et<gt.length;Et++){const Bt=gt[Et];let Zt=null;if(m!==null)Zt=m.getViewport(Bt);else{const C=u.getViewSubImage(p,Bt);Zt=C.viewport,Et===0&&(t.setRenderTargetTextures(b,C.colorTexture,p.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(b))}let kt=V[Et];kt===void 0&&(kt=new De,kt.layers.enable(Et),kt.viewport=new Jt,V[Et]=kt),kt.matrix.fromArray(Bt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Bt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Et===0&&(_.matrix.copy(kt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(kt)}const Dt=n.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Et=u.getDepthInformation(gt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,n.renderState)}}for(let gt=0;gt<S.length;gt++){const ht=T[gt],Dt=S[gt];ht!==null&&Dt!==void 0&&Dt.update(ht,Q,c||a)}vt&&vt(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const $t=new Rl;$t.setAnimationLoop(Wt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const Ni=new Je,Op=new ie;function zp(s,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Tl(s)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function n(d,f,b,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,T)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),v(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,b,S):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Te&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Te&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const b=t.get(f),S=b.envMap,T=b.envMapRotation;S&&(d.envMap.value=S,Ni.copy(T),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),d.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(Ni)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,b,S){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*b,d.scale.value=S*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,b){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){const b=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Bp(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const T=S.program;i.uniformBlockBinding(b,T)}function c(b,S){let T=n[b.id];T===void 0&&(g(b),T=h(b),n[b.id]=T,b.addEventListener("dispose",d));const U=S.program;i.updateUBOMapping(b,U);const R=t.render.frame;r[b.id]!==R&&(p(b),r[b.id]=R)}function h(b){const S=u();b.__bindingPointIndex=S;const T=s.createBuffer(),U=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,U,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,T),T}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=n[b.id],T=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,A=T.length;R<A;R++){const P=Array.isArray(T[R])?T[R]:[T[R]];for(let V=0,_=P.length;V<_;V++){const y=P[V];if(m(y,R,V,U)===!0){const z=y.__offset,B=Array.isArray(y.value)?y.value:[y.value];let W=0;for(let $=0;$<B.length;$++){const k=B[$],j=v(k);typeof k=="number"||typeof k=="boolean"?(y.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,z+W,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=0,y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=0,y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=0):(k.toArray(y.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,S,T,U){const R=b.value,A=S+"_"+T;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const P=U[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return U[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(b){const S=b.uniforms;let T=0;const U=16;for(let A=0,P=S.length;A<P;A++){const V=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,y=V.length;_<y;_++){const z=V[_],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=B.length;W<$;W++){const k=B[W],j=v(k),G=T%U,lt=G%j.boundary,ct=G+lt;T+=lt,ct!==0&&U-ct<j.storage&&(T+=U-ct),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=j.storage}}}const R=T%U;return R>0&&(T+=U-R),b.__size=T,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function d(b){const S=b.target;S.removeEventListener("dispose",d);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function f(){for(const b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class kp{constructor(t={}){const{canvas:e=Ac(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,d=null;const f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=wi,this.toneMappingExposure=1;const S=this;let T=!1,U=0,R=0,A=null,P=-1,V=null;const _=new Jt,y=new Jt;let z=null;const B=new Lt(0);let W=0,$=e.width,k=e.height,j=1,G=null,lt=null;const ct=new Jt(0,0,$,k),vt=new Jt(0,0,$,k);let Wt=!1;const $t=new Ta;let X=!1,Q=!1;const gt=new ie,ht=new ie,Dt=new w,Et=new Jt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function kt(){return A===null?j:1}let C=i;function Ie(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",ot,!1),C===null){const D="webgl2";if(C=Ie(D,M),C===null)throw Ie(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ot,Gt,At,ne,Pt,E,x,N,Y,Z,q,xt,nt,ut,Vt,tt,dt,Rt,Ct,ft,zt,It,Qt,L;function at(){Ot=new Wd(C),Ot.init(),It=new Pp(C,Ot),Gt=new zd(C,Ot,t,It),At=new Ap(C),Gt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),ne=new Yd(C),Pt=new dp,E=new Cp(C,Ot,At,Pt,Gt,It,ne),x=new kd(S),N=new Vd(S),Y=new th(C),Qt=new Fd(C,Y),Z=new Xd(C,Y,ne,Qt),q=new $d(C,Z,Y,ne),Ct=new Kd(C,Gt,E),tt=new Bd(Pt),xt=new up(S,x,N,Ot,Gt,Qt,tt),nt=new zp(S,Pt),ut=new pp,Vt=new Mp(Ot),Rt=new Nd(S,x,N,At,q,p,l),dt=new Tp(S,q,Gt),L=new Bp(C,ne,Gt,At),ft=new Od(C,Ot,ne),zt=new qd(C,Ot,ne),ne.programs=xt.programs,S.capabilities=Gt,S.extensions=Ot,S.properties=Pt,S.renderLists=ut,S.shadowMap=dt,S.state=At,S.info=ne}at();const H=new Fp(S,C);this.xr=H,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize($,k,!1))},this.getSize=function(M){return M.set($,k)},this.setSize=function(M,D,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,k=D,e.width=Math.floor(M*j),e.height=Math.floor(D*j),F===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set($*j,k*j).floor()},this.setDrawingBufferSize=function(M,D,F){$=M,k=D,j=F,e.width=Math.floor(M*F),e.height=Math.floor(D*F),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(ct)},this.setViewport=function(M,D,F,O){M.isVector4?ct.set(M.x,M.y,M.z,M.w):ct.set(M,D,F,O),At.viewport(_.copy(ct).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,D,F,O){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,D,F,O),At.scissor(y.copy(vt).multiplyScalar(j).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(M){At.setScissorTest(Wt=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,D=!0,F=!0){let O=0;if(M){let I=!1;if(A!==null){const et=A.texture.format;I=et===Sa||et===ya||et===Ma}if(I){const et=A.texture.type,rt=et===mi||et===Vi||et===Fn||et===gn||et===va||et===xa,pt=Rt.getClearColor(),_t=Rt.getClearAlpha(),bt=pt.r,Tt=pt.g,Mt=pt.b;rt?(m[0]=bt,m[1]=Tt,m[2]=Mt,m[3]=_t,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=bt,g[1]=Tt,g[2]=Mt,g[3]=_t,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}D&&(O|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Vt.dispose(),Pt.dispose(),x.dispose(),N.dispose(),q.dispose(),Qt.dispose(),L.dispose(),xt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Da),H.removeEventListener("sessionend",Ia),Ci.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=ne.autoReset,D=dt.enabled,F=dt.autoUpdate,O=dt.needsUpdate,I=dt.type;at(),ne.autoReset=M,dt.enabled=D,dt.autoUpdate=F,dt.needsUpdate=O,dt.type=I}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ht(M){const D=M.target;D.removeEventListener("dispose",Ht),ue(D)}function ue(M){Re(M),Pt.remove(M)}function Re(M){const D=Pt.get(M).programs;D!==void 0&&(D.forEach(function(F){xt.releaseProgram(F)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,F,O,I,et){D===null&&(D=Bt);const rt=I.isMesh&&I.matrixWorld.determinant()<0,pt=Gl(M,D,F,O,I);At.setMaterial(O,rt);let _t=F.index,bt=1;if(O.wireframe===!0){if(_t=Z.getWireframeAttribute(F),_t===void 0)return;bt=2}const Tt=F.drawRange,Mt=F.attributes.position;let jt=Tt.start*bt,se=(Tt.start+Tt.count)*bt;et!==null&&(jt=Math.max(jt,et.start*bt),se=Math.min(se,(et.start+et.count)*bt)),_t!==null?(jt=Math.max(jt,0),se=Math.min(se,_t.count)):Mt!=null&&(jt=Math.max(jt,0),se=Math.min(se,Mt.count));const oe=se-jt;if(oe<0||oe===1/0)return;Qt.setup(I,O,pt,F,_t);let Ue,Yt=ft;if(_t!==null&&(Ue=Y.get(_t),Yt=zt,Yt.setIndex(Ue)),I.isMesh)O.wireframe===!0?(At.setLineWidth(O.wireframeLinewidth*kt()),Yt.setMode(C.LINES)):Yt.setMode(C.TRIANGLES);else if(I.isLine){let yt=O.linewidth;yt===void 0&&(yt=1),At.setLineWidth(yt*kt()),I.isLineSegments?Yt.setMode(C.LINES):I.isLineLoop?Yt.setMode(C.LINE_LOOP):Yt.setMode(C.LINE_STRIP)}else I.isPoints?Yt.setMode(C.POINTS):I.isSprite&&Yt.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Yt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const yt=I._multiDrawStarts,_e=I._multiDrawCounts,Kt=I._multiDrawCount,Ge=_t?Y.get(_t).bytesPerElement:1,Xi=Pt.get(O).currentProgram.getUniforms();for(let Ne=0;Ne<Kt;Ne++)Xi.setValue(C,"_gl_DrawID",Ne),Yt.render(yt[Ne]/Ge,_e[Ne])}else if(I.isInstancedMesh)Yt.renderInstances(jt,oe,I.count);else if(F.isInstancedBufferGeometry){const yt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,_e=Math.min(F.instanceCount,yt);Yt.renderInstances(jt,oe,_e)}else Yt.render(jt,oe)};function Xt(M,D,F){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=Te,M.needsUpdate=!0,Xn(M,D,F),M.side=Ai,M.needsUpdate=!0,Xn(M,D,F),M.side=ci):Xn(M,D,F)}this.compile=function(M,D,F=null){F===null&&(F=M),d=Vt.get(F),d.init(D),b.push(d),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),M!==F&&M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const O=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const et=I.material;if(et)if(Array.isArray(et))for(let rt=0;rt<et.length;rt++){const pt=et[rt];Xt(pt,F,I),O.add(pt)}else Xt(et,F,I),O.add(et)}),b.pop(),d=null,O},this.compileAsync=function(M,D,F=null){const O=this.compile(M,D,F);return new Promise(I=>{function et(){if(O.forEach(function(rt){Pt.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){I(M);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ce=null;function ii(M){Ce&&Ce(M)}function Da(){Ci.stop()}function Ia(){Ci.start()}const Ci=new Rl;Ci.setAnimationLoop(ii),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(M){Ce=M,H.setAnimationLoop(M),M===null?Ci.stop():Ci.start()},H.addEventListener("sessionstart",Da),H.addEventListener("sessionend",Ia),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,A),d=Vt.get(M,b.length),d.init(D),b.push(d),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$t.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,X=tt.init(this.clippingPlanes,Q),v=ut.get(M,f.length),v.init(),f.push(v),H.enabled===!0&&H.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&ks(et,D,-1/0,S.sortObjects)}ks(M,D,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(G,lt),Zt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Zt&&Rt.addToRenderList(v,M),this.info.render.frame++,X===!0&&tt.beginShadows();const F=d.state.shadowsArray;dt.render(F,M,D),X===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=v.opaque,I=v.transmissive;if(d.setupLights(),D.isArrayCamera){const et=D.cameras;if(I.length>0)for(let rt=0,pt=et.length;rt<pt;rt++){const _t=et[rt];Na(O,I,M,_t)}Zt&&Rt.render(M);for(let rt=0,pt=et.length;rt<pt;rt++){const _t=et[rt];Ua(v,M,_t,_t.viewport)}}else I.length>0&&Na(O,I,M,D),Zt&&Rt.render(M),Ua(v,M,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(S,M,D),Qt.resetDefaultState(),P=-1,V=null,b.pop(),b.length>0?(d=b[b.length-1],X===!0&&tt.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ks(M,D,F,O){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$t.intersectsSprite(M)){O&&Et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);const rt=q.update(M),pt=M.material;pt.visible&&v.push(M,rt,pt,F,Et.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$t.intersectsObject(M))){const rt=q.update(M),pt=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Et.copy(M.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Et.copy(rt.boundingSphere.center)),Et.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(pt)){const _t=rt.groups;for(let bt=0,Tt=_t.length;bt<Tt;bt++){const Mt=_t[bt],jt=pt[Mt.materialIndex];jt&&jt.visible&&v.push(M,rt,jt,F,Et.z,Mt)}}else pt.visible&&v.push(M,rt,pt,F,Et.z,null)}}const et=M.children;for(let rt=0,pt=et.length;rt<pt;rt++)ks(et[rt],D,F,O)}function Ua(M,D,F,O){const I=M.opaque,et=M.transmissive,rt=M.transparent;d.setupLightsView(F),X===!0&&tt.setGlobalState(S.clippingPlanes,F),O&&At.viewport(_.copy(O)),I.length>0&&Wn(I,D,F),et.length>0&&Wn(et,D,F),rt.length>0&&Wn(rt,D,F),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Na(M,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new Ze(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?fi:mi,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=d.state.transmissionRenderTarget[O.id],rt=O.viewport||_;et.setSize(rt.z,rt.w);const pt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Zt&&Rt.render(F);const _t=S.toneMapping;S.toneMapping=wi;const bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),X===!0&&tt.setGlobalState(S.clippingPlanes,O),Wn(M,F,O),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Mt=0,jt=D.length;Mt<jt;Mt++){const se=D[Mt],oe=se.object,Ue=se.geometry,Yt=se.material,yt=se.group;if(Yt.side===ci&&oe.layers.test(O.layers)){const _e=Yt.side;Yt.side=Te,Yt.needsUpdate=!0,Fa(oe,F,O,Ue,Yt,yt),Yt.side=_e,Yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}S.setRenderTarget(pt),S.setClearColor(B,W),bt!==void 0&&(O.viewport=bt),S.toneMapping=_t}function Wn(M,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let I=0,et=M.length;I<et;I++){const rt=M[I],pt=rt.object,_t=rt.geometry,bt=O===null?rt.material:O,Tt=rt.group;pt.layers.test(F.layers)&&Fa(pt,D,F,_t,bt,Tt)}}function Fa(M,D,F,O,I,et){M.onBeforeRender(S,D,F,O,I,et),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(S,D,F,O,M,et),I.transparent===!0&&I.side===ci&&I.forceSinglePass===!1?(I.side=Te,I.needsUpdate=!0,S.renderBufferDirect(F,D,O,I,M,et),I.side=Ai,I.needsUpdate=!0,S.renderBufferDirect(F,D,O,I,M,et),I.side=ci):S.renderBufferDirect(F,D,O,I,M,et),M.onAfterRender(S,D,F,O,I,et)}function Xn(M,D,F){D.isScene!==!0&&(D=Bt);const O=Pt.get(M),I=d.state.lights,et=d.state.shadowsArray,rt=I.state.version,pt=xt.getParameters(M,I.state,et,D,F),_t=xt.getProgramCacheKey(pt);let bt=O.programs;O.environment=M.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(M.isMeshStandardMaterial?N:x).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",Ht),bt=new Map,O.programs=bt);let Tt=bt.get(_t);if(Tt!==void 0){if(O.currentProgram===Tt&&O.lightsStateVersion===rt)return za(M,pt),Tt}else pt.uniforms=xt.getUniforms(M),M.onBeforeCompile(pt,S),Tt=xt.acquireProgram(pt,_t),bt.set(_t,Tt),O.uniforms=pt.uniforms;const Mt=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),za(M,pt),O.needsLights=Wl(M),O.lightsStateVersion=rt,O.needsLights&&(Mt.ambientLightColor.value=I.state.ambient,Mt.lightProbe.value=I.state.probe,Mt.directionalLights.value=I.state.directional,Mt.directionalLightShadows.value=I.state.directionalShadow,Mt.spotLights.value=I.state.spot,Mt.spotLightShadows.value=I.state.spotShadow,Mt.rectAreaLights.value=I.state.rectArea,Mt.ltc_1.value=I.state.rectAreaLTC1,Mt.ltc_2.value=I.state.rectAreaLTC2,Mt.pointLights.value=I.state.point,Mt.pointLightShadows.value=I.state.pointShadow,Mt.hemisphereLights.value=I.state.hemi,Mt.directionalShadowMap.value=I.state.directionalShadowMap,Mt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Mt.spotShadowMap.value=I.state.spotShadowMap,Mt.spotLightMatrix.value=I.state.spotLightMatrix,Mt.spotLightMap.value=I.state.spotLightMap,Mt.pointShadowMap.value=I.state.pointShadowMap,Mt.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Tt,O.uniformsList=null,Tt}function Oa(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function za(M,D){const F=Pt.get(M);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Gl(M,D,F,O,I){D.isScene!==!0&&(D=Bt),E.resetTextureUnits();const et=D.fog,rt=O.isMeshStandardMaterial?D.environment:null,pt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ri,_t=(O.isMeshStandardMaterial?N:x).get(O.envMap||rt),bt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Tt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!F.morphAttributes.position,jt=!!F.morphAttributes.normal,se=!!F.morphAttributes.color;let oe=wi;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(oe=S.toneMapping);const Ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Ue!==void 0?Ue.length:0,yt=Pt.get(O),_e=d.state.lights;if(X===!0&&(Q===!0||M!==V)){const ze=M===V&&O.id===P;tt.setState(O,M,ze)}let Kt=!1;O.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==_e.state.version||yt.outputColorSpace!==pt||I.isBatchedMesh&&yt.batching===!1||!I.isBatchedMesh&&yt.batching===!0||I.isBatchedMesh&&yt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&yt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&yt.instancing===!1||!I.isInstancedMesh&&yt.instancing===!0||I.isSkinnedMesh&&yt.skinning===!1||!I.isSkinnedMesh&&yt.skinning===!0||I.isInstancedMesh&&yt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&yt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&yt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&yt.instancingMorph===!1&&I.morphTexture!==null||yt.envMap!==_t||O.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==bt||yt.vertexTangents!==Tt||yt.morphTargets!==Mt||yt.morphNormals!==jt||yt.morphColors!==se||yt.toneMapping!==oe||yt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,yt.__version=O.version);let Ge=yt.currentProgram;Kt===!0&&(Ge=Xn(O,D,I));let Xi=!1,Ne=!1,Hs=!1;const le=Ge.getUniforms(),vi=yt.uniforms;if(At.useProgram(Ge.program)&&(Xi=!0,Ne=!0,Hs=!0),O.id!==P&&(P=O.id,Ne=!0),Xi||V!==M){Gt.reverseDepthBuffer?(gt.copy(M.projectionMatrix),Cc(gt),Pc(gt),le.setValue(C,"projectionMatrix",gt)):le.setValue(C,"projectionMatrix",M.projectionMatrix),le.setValue(C,"viewMatrix",M.matrixWorldInverse);const ze=le.map.cameraPosition;ze!==void 0&&ze.setValue(C,Dt.setFromMatrixPosition(M.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&le.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,Ne=!0,Hs=!0)}if(I.isSkinnedMesh){le.setOptional(C,I,"bindMatrix"),le.setOptional(C,I,"bindMatrixInverse");const ze=I.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),le.setValue(C,"boneTexture",ze.boneTexture,E))}I.isBatchedMesh&&(le.setOptional(C,I,"batchingTexture"),le.setValue(C,"batchingTexture",I._matricesTexture,E),le.setOptional(C,I,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",I._indirectTexture,E),le.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",I._colorsTexture,E));const Gs=F.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Ct.update(I,F,Ge),(Ne||yt.receiveShadow!==I.receiveShadow)&&(yt.receiveShadow=I.receiveShadow,le.setValue(C,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vi.envMap.value=_t,vi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(vi.envMapIntensity.value=D.environmentIntensity),Ne&&(le.setValue(C,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&Vl(vi,Hs),et&&O.fog===!0&&nt.refreshFogUniforms(vi,et),nt.refreshMaterialUniforms(vi,O,j,k,d.state.transmissionRenderTarget[M.id]),Ts.upload(C,Oa(yt),vi,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ts.upload(C,Oa(yt),vi,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&le.setValue(C,"center",I.center),le.setValue(C,"modelViewMatrix",I.modelViewMatrix),le.setValue(C,"normalMatrix",I.normalMatrix),le.setValue(C,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ze=O.uniformsGroups;for(let Vs=0,Xl=ze.length;Vs<Xl;Vs++){const Ba=ze[Vs];L.update(Ba,Ge),L.bind(Ba,Ge)}}return Ge}function Vl(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Wl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,F){Pt.get(M.texture).__webglTexture=D,Pt.get(M.depthTexture).__webglTexture=F;const O=Pt.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const F=Pt.get(M);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,F=0){A=M,U=D,R=F;let O=!0,I=null,et=!1,rt=!1;if(M){const _t=Pt.get(M);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(_t.__hasExternalTextures)E.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Pt.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(rt=!0);const Tt=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?I=Tt[D][F]:I=Tt[D],et=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?I=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?I=Tt[F]:I=Tt,_.copy(M.viewport),y.copy(M.scissor),z=M.scissorTest}else _.copy(ct).multiplyScalar(j).floor(),y.copy(vt).multiplyScalar(j).floor(),z=Wt;if(At.bindFramebuffer(C.FRAMEBUFFER,I)&&O&&At.drawBuffers(M,I),At.viewport(_),At.scissor(y),At.setScissorTest(z),et){const _t=Pt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,F)}else if(rt){const _t=Pt.get(M.texture),bt=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.__webglTexture,F||0,bt)}P=-1},this.readRenderTargetPixels=function(M,D,F,O,I,et,rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){At.bindFramebuffer(C.FRAMEBUFFER,pt);try{const _t=M.texture,bt=_t.format,Tt=_t.type;if(!Gt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-O&&F>=0&&F<=M.height-I&&C.readPixels(D,F,O,I,It.convert(bt),It.convert(Tt),et)}finally{const _t=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,D,F,O,I,et,rt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){const _t=M.texture,bt=_t.format,Tt=_t.type;if(!Gt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-O&&F>=0&&F<=M.height-I){At.bindFramebuffer(C.FRAMEBUFFER,pt);const Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,et.byteLength,C.STREAM_READ),C.readPixels(D,F,O,I,It.convert(bt),It.convert(Tt),0);const jt=A!==null?Pt.get(A).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,jt);const se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Rc(C,se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,et),C.deleteBuffer(Mt),C.deleteSync(se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,F=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(M.image.width*O),et=Math.floor(M.image.height*O),rt=D!==null?D.x:0,pt=D!==null?D.y:0;E.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,rt,pt,I,et),At.unbindTexture()},this.copyTextureToTexture=function(M,D,F=null,O=null,I=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],D=arguments[2],I=arguments[3]||0,F=null);let et,rt,pt,_t,bt,Tt;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,pt=F.min.x,_t=F.min.y):(et=M.image.width,rt=M.image.height,pt=0,_t=0),O!==null?(bt=O.x,Tt=O.y):(bt=0,Tt=0);const Mt=It.convert(D.format),jt=It.convert(D.type);E.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const se=C.getParameter(C.UNPACK_ROW_LENGTH),oe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ue=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),yt=C.getParameter(C.UNPACK_SKIP_IMAGES),_e=M.isCompressedTexture?M.mipmaps[I]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,_e.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_e.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,I,bt,Tt,et,rt,Mt,jt,_e.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,I,bt,Tt,_e.width,_e.height,Mt,_e.data):C.texSubImage2D(C.TEXTURE_2D,I,bt,Tt,et,rt,Mt,jt,_e),C.pixelStorei(C.UNPACK_ROW_LENGTH,se),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,yt),I===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(M,D,F=null,O=null,I=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],D=arguments[3],I=arguments[4]||0);let et,rt,pt,_t,bt,Tt,Mt,jt,se;const oe=M.isCompressedTexture?M.mipmaps[I]:M.image;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,pt=F.max.z-F.min.z,_t=F.min.x,bt=F.min.y,Tt=F.min.z):(et=oe.width,rt=oe.height,pt=oe.depth,_t=0,bt=0,Tt=0),O!==null?(Mt=O.x,jt=O.y,se=O.z):(Mt=0,jt=0,se=0);const Ue=It.convert(D.format),Yt=It.convert(D.type);let yt;if(D.isData3DTexture)E.setTexture3D(D,0),yt=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)E.setTexture2DArray(D,0),yt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const _e=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),Xi=C.getParameter(C.UNPACK_SKIP_ROWS),Ne=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(yt,I,Mt,jt,se,et,rt,pt,Ue,Yt,oe.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(yt,I,Mt,jt,se,et,rt,pt,Ue,oe.data):C.texSubImage3D(yt,I,Mt,jt,se,et,rt,pt,Ue,Yt,oe),C.pixelStorei(C.UNPACK_ROW_LENGTH,_e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne),I===0&&D.generateMipmaps&&C.generateMipmap(yt),At.unbindTexture()},this.initRenderTarget=function(M){Pt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){U=0,R=0,A=null,At.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ba?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Fs?"display-p3":"srgb"}}class Ra{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new Ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uo extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ca extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Is=new w,Us=new w,No=new ie,Pn=new Os,fs=new Gn,yr=new w,Fo=new w;class Ul extends he{constructor(t=new Ae,e=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Is.fromBufferAttribute(e,n-1),Us.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Is.distanceTo(Us);t.setAttribute("lineDistance",new fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(n),fs.radius+=r,t.ray.intersectsSphere(fs)===!1)return;No.copy(n).invert(),Pn.copy(t.ray).applyMatrix4(No);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=c){const f=h.getX(v),b=h.getX(v+1),S=ps(this,t,Pn,l,f,b);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),d=h.getX(m),f=ps(this,t,Pn,l,v,d);f&&e.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=c){const f=ps(this,t,Pn,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=ps(this,t,Pn,l,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ps(s,t,e,i,n,r){const a=s.geometry.attributes.position;if(Is.fromBufferAttribute(a,n),Us.fromBufferAttribute(a,r),e.distanceSqToSegment(Is,Us,yr,Fo)>i)return;yr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(yr);if(!(l<t.near||l>t.far))return{distance:l,point:Fo.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class Nl extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oo=new ie,da=new Os,ms=new Gn,gs=new w;class Hp extends he{constructor(t=new Ae,e=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(n),ms.radius+=r,t.ray.intersectsSphere(ms)===!1)return;Oo.copy(n).invert(),da.copy(t.ray).applyMatrix4(Oo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,v=m;g<v;g++){const d=c.getX(g);gs.fromBufferAttribute(u,d),zo(gs,d,l,n,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=p,v=m;g<v;g++)gs.fromBufferAttribute(u,g),zo(gs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zo(s,t,e,i,n,r,a){const o=da.distanceSqToPoint(s);if(o<e){const l=new w;da.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Gp extends we{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn extends Ae{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],p=[],m=[];let g=0;const v=[],d=i/2;let f=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(p,3)),this.setAttribute("uv",new fe(m,2));function b(){const T=new w,U=new w;let R=0;const A=(e-t)/i;for(let P=0;P<=r;P++){const V=[],_=P/r,y=_*(e-t)+t;for(let z=0;z<=n;z++){const B=z/n,W=B*l+o,$=Math.sin(W),k=Math.cos(W);U.x=y*$,U.y=-_*i+d,U.z=y*k,u.push(U.x,U.y,U.z),T.set($,A,k).normalize(),p.push(T.x,T.y,T.z),m.push(B,1-_),V.push(g++)}v.push(V)}for(let P=0;P<n;P++)for(let V=0;V<r;V++){const _=v[V][P],y=v[V+1][P],z=v[V+1][P+1],B=v[V][P+1];t>0&&(h.push(_,y,B),R+=3),e>0&&(h.push(y,z,B),R+=3)}c.addGroup(f,R,0),f+=R}function S(T){const U=g,R=new wt,A=new w;let P=0;const V=T===!0?t:e,_=T===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,d*_,0),p.push(0,_,0),m.push(.5,.5),g++;const y=g;for(let z=0;z<=n;z++){const W=z/n*l+o,$=Math.cos(W),k=Math.sin(W);A.x=V*k,A.y=d*_,A.z=V*$,u.push(A.x,A.y,A.z),p.push(0,_,0),R.x=$*.5+.5,R.y=k*.5*_+.5,m.push(R.x,R.y),g++}for(let z=0;z<n;z++){const B=U+z,W=y+z;T===!0?h.push(W,W+1,B):h.push(W+1,W,B),P+=3}c.addGroup(f,P,T===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends zn{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Pa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _i extends Ae{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,p=new w,m=[],g=[],v=[],d=[];for(let f=0;f<=i;f++){const b=[],S=f/i;let T=0;f===0&&a===0?T=.5/e:f===i&&l===Math.PI&&(T=-.5/e);for(let U=0;U<=e;U++){const R=U/e;u.x=-t*Math.cos(n+R*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(n+R*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),d.push(R+T,1-S),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const S=h[f][b+1],T=h[f][b],U=h[f+1][b],R=h[f+1][b+1];(f!==0||a>0)&&m.push(S,T,R),(f!==i-1||l<Math.PI)&&m.push(T,U,R)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vp extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ee extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bs extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fl extends Bs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sr=new ie,Bo=new w,ko=new w;class Ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ho=new ie,Ln=new w,br=new w;class Wp extends Ol{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ln.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ln),br.copy(i.position),br.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(br),i.updateMatrixWorld(),n.makeTranslation(-Ln.x,-Ln.y,-Ln.z),Ho.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho)}}class Un extends Bs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Wp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xp extends Ol{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fa extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Xp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qp extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Go();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Go(){return performance.now()}const Vo=new ie;class Kp{constructor(t,e,i=0,n=1/0){this.ray=new Os(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vo),this}intersectObject(t,e=!0,i=[]){return pa(t,this,i,e),i.sort(Wo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)pa(t[n],this,i,e);return i.sort(Wo),i}}function Wo(s,t){return s.distance-t.distance}function pa(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)pa(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const zl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class bn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $p=new wa(-1,1,1,-1,0,1);class jp extends Ae{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}}const Zp=new jp;class La{constructor(t){this._mesh=new Ft(Zp,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$p)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Jp extends bn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=On.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new La(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xo extends bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Qp extends bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new wt);this._width=i.width,this._height=i.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jp(zl),this.copyPass.material.blending=di,this.clock=new Yp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xo!==void 0&&(a instanceof Xo?i=!0:a instanceof Qp&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class em extends bn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const im={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xn extends bn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,a,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const p=new Ze(r,a,{type:fi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new Ze(r,a,{type:fi});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=im;this.highPassUniforms=On.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zl;this.copyUniforms=On.clone(h.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new La(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=xn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}xn.BlurDirectionX=new wt(1,0);xn.BlurDirectionY=new wt(0,1);const nm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sm extends bn{constructor(){super();const t=nm;this.uniforms=On.clone(t.uniforms),this.material=new Vp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new La(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===el?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rm{constructor(t){this.container=t,this.renderer=new kp({antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qo,this.renderer.toneMapping=ga,this.renderer.toneMappingExposure=1.25,this.renderer.outputColorSpace=qe,t.appendChild(this.renderer.domElement),this.scene=new Uo,this.scene.background=new Lt(658964),this.camera=new De(80,window.innerWidth/window.innerHeight,.05,600),this.camera.position.set(0,1.7,0),this.viewScene=new Uo,this.viewCamera=new De(60,window.innerWidth/window.innerHeight,.01,10),this.viewLight=new Fl(13623536,3158072,1.5),this.viewScene.add(this.viewLight);const e=new fa(16777215,2.2);e.position.set(.5,1.2,1),this.viewScene.add(e);const i=new fa(9416920,.8);i.position.set(-.8,.2,.6),this.viewScene.add(i),this.baseFov=80,window.addEventListener("resize",()=>this.onResize()),this.quality="high",this._setupComposer()}_setupComposer(){const t=window.innerWidth,e=window.innerHeight;this.composer=new tm(this.renderer),this.composer.addPass(new em(this.scene,this.camera)),this.bloomPass=new xn(new wt(t,e),.7,.5,.72),this.composer.addPass(this.bloomPass),this.composer.addPass(new sm),this.bloomEnabled=!0}setQuality(t){this.quality=t,t==="low"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.bloomEnabled=!1):t==="medium"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0,this.bloomEnabled=!0,this.bloomPass.strength=.5):(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.bloomEnabled=!0,this.bloomPass.strength=.7),this.renderer.shadowMap.needsUpdate=!0,this.composer?.setPixelRatio?.(this.renderer.getPixelRatio())}setFov(t){this.baseFov=t,this.camera.fov=t,this.camera.updateProjectionMatrix()}onResize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewCamera.aspect=t/e,this.viewCamera.updateProjectionMatrix(),this.composer?.setSize(t,e),this.bloomPass?.resolution?.set(t,e)}render(){const t=this.renderer;this.bloomEnabled?this.composer.render():(t.autoClear=!0,t.render(this.scene,this.camera)),t.autoClear=!1,t.clearDepth(),t.render(this.viewScene,this.viewCamera),t.autoClear=!0}}const St=(s,t,e)=>s<t?t:s>e?e:s,ti=(s,t,e)=>s+(t-s)*e,ce=(s,t,e,i)=>ti(s,t,1-Math.exp(-e*i)),J=(s=1,t=0)=>t+Math.random()*(s-t),ws=(s,t)=>Math.floor(J(s,t+1)),am=s=>s[Math.random()*s.length|0],qo=s=>s*Math.PI/180;function om(s=1){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const lm=new w;new w;new w;class Er{constructor(t,e,i=0){this.factory=t,this.reset=e,this.free=[];for(let n=0;n<i;n++)this.free.push(t())}acquire(){return this.free.pop()||this.factory()}release(t){this.reset&&this.reset(t),this.free.push(t)}}const Yo={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",sprint:"ShiftLeft",crouch:"KeyC",leanLeft:"KeyQ",leanRight:"KeyE",reload:"KeyR",grenade:"KeyG",interact:"KeyF",tactical:"KeyV",weapon1:"Digit1",weapon2:"Digit2",weapon3:"Digit3",weapon4:"Digit4",weapon5:"Digit5",pause:"Escape",scoreboard:"Tab",mute:"KeyM"},cm={sensitivity:1,fov:80,invertY:!1,masterVol:.8,sfxVol:.9,musicVol:.45,quality:"high",bobAmount:1,showDamageNumbers:!0};class hm{constructor(t){this.canvas=t,this.keys=new Set,this.mouse={dx:0,dy:0},this.buttons={left:!1,right:!1},this.locked=!1,this.wheel=0,this.pressed=new Set,this.released=new Set,this.mousePressed={left:!1,right:!1},this.enabled=!0,this.bindings=this._load("bp_bindings",Yo),this.settings=this._load("bp_settings",cm),this._onKeyDown=e=>this._keyDown(e),this._onKeyUp=e=>this._keyUp(e),this._onMouseDown=e=>this._mouseDown(e),this._onMouseUp=e=>this._mouseUp(e),this._onMouseMove=e=>this._mouseMove(e),this._onWheel=e=>this._onWheelEvt(e),this._onLockChange=()=>this._lockChange(),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),window.addEventListener("wheel",this._onWheel,{passive:!0}),document.addEventListener("pointerlockchange",this._onLockChange)}_load(t,e){try{const i=localStorage.getItem(t);if(i)return{...e,...JSON.parse(i)}}catch{}return{...e}}saveBindings(){try{localStorage.setItem("bp_bindings",JSON.stringify(this.bindings))}catch{}}saveSettings(){try{localStorage.setItem("bp_settings",JSON.stringify(this.settings))}catch{}}resetBindings(){this.bindings={...Yo},this.saveBindings()}requestLock(){this.canvas.requestPointerLock?.()}exitLock(){document.exitPointerLock?.()}_lockChange(){this.locked=document.pointerLockElement===this.canvas}_keyDown(t){t.code==="Tab"&&t.preventDefault(),this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code)}_keyUp(t){this.keys.delete(t.code),this.released.add(t.code)}_mouseDown(t){t.button===0&&(this.buttons.left=!0,this.mousePressed.left=!0),t.button===2&&(this.buttons.right=!0,this.mousePressed.right=!0)}_mouseUp(t){t.button===0&&(this.buttons.left=!1),t.button===2&&(this.buttons.right=!1)}_mouseMove(t){!this.locked||!this.enabled||(this.mouse.dx+=t.movementX||0,this.mouse.dy+=t.movementY||0)}_onWheelEvt(t){this.wheel+=Math.sign(t.deltaY)}action(t){return this.keys.has(this.bindings[t])}actionPressed(t){return this.pressed.has(this.bindings[t])}endFrame(){this.mouse.dx=0,this.mouse.dy=0,this.pressed.clear(),this.released.clear(),this.mousePressed.left=!1,this.mousePressed.right=!1,this.wheel=0}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousedown",this._onMouseDown),window.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("wheel",this._onWheel),document.removeEventListener("pointerlockchange",this._onLockChange)}}class um{constructor(){this.ctx=null,this.master=null,this.sfxGain=null,this.musicGain=null,this.muted=!1,this.masterVol=.8,this.sfxVol=.9,this.musicVol=.45,this.noiseBuf=null,this._musicTimer=0,this._musicOn=!1,this._step=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.masterVol,this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.sfxVol,this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVol,this.musicGain.connect(this.master);const e=this.ctx.sampleRate*1;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const i=this.noiseBuf.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1}get t(){return this.ctx?this.ctx.currentTime:0}setMute(t){this.muted=t,this.master&&(this.master.gain.value=t?0:this.masterVol)}setMaster(t){this.masterVol=t,this.master&&!this.muted&&(this.master.gain.value=t)}setSfx(t){this.sfxVol=t,this.sfxGain&&(this.sfxGain.gain.value=t)}setMusic(t){this.musicVol=t,this.musicGain&&(this.musicGain.gain.value=t)}_noise(t,e){const i=this.ctx.createBufferSource();return i.buffer=this.noiseBuf,i.loop=!0,i.connect(e),i.start(),i.stop(this.t+t),i}_env(t,e,i,n,r,a=this.t){t.gain.setValueAtTime(1e-4,a),t.gain.exponentialRampToValueAtTime(e,a+i),t.gain.exponentialRampToValueAtTime(1e-4,a+i+n),t.connect(r)}gunshot(t={}){if(!this.ctx)return;const e=this.t,i=this.sfxGain,{body:n=140,crackHz:r=1800,dur:a=.22,level:o=.9,q:l=.8,sub:c=!0}=t;if(c){const g=this.ctx.createOscillator(),v=this.ctx.createGain();g.type="sine",g.frequency.setValueAtTime(n*1.6,e),g.frequency.exponentialRampToValueAtTime(n*.5,e+a*.7),this._env(v,o*.9,.002,a,i,e),g.connect(v),g.start(e),g.stop(e+a+.05)}const h=this.ctx.createGain(),u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(r,e),u.frequency.exponentialRampToValueAtTime(r*.4,e+a*.5),u.Q.value=l,this._env(h,o,.001,a*.6,i,e),u.connect(h),this._noise(a*.7,u);const p=this.ctx.createGain(),m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=3e3,this._env(p,o*.5,5e-4,.05,i,e),m.connect(p),this._noise(.06,m)}enemyShot(){this.gunshot({body:110,crackHz:1200,dur:.16,level:.32,q:.7})}click(){if(!this.ctx)return;const t=this.t,e=this.ctx.createGain(),i=this.ctx.createOscillator();i.type="square",i.frequency.value=900,this._env(e,.15,.001,.03,this.sfxGain,t),i.connect(e),i.start(t),i.stop(t+.05)}reloadClick(t=1){if(!this.ctx)return;const e=this.t,i=this.ctx.createGain(),n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=2200*t,n.Q.value=3,this._env(i,.3,.001,.06,this.sfxGain,e),n.connect(i),this._noise(.07,n)}shell(){if(!this.ctx)return;const t=this.t+J(0,.02),e=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=3200+J(-400,400),i.Q.value=4,this._env(e,.12,.001,.08,this.sfxGain,t),i.connect(e),this._noise(.09,i)}hitmarker(t=!1){if(!this.ctx)return;const e=this.t,i=this.ctx.createGain(),n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(t?1700:1100,e),t&&n.frequency.exponentialRampToValueAtTime(2400,e+.04),this._env(i,.22,.001,t?.09:.05,this.sfxGain,e),n.connect(i),n.start(e),n.stop(e+.12)}impact(t="concrete"){if(!this.ctx)return;const e=this.t,i=this.ctx.createGain(),n=this.ctx.createBiquadFilter();if(n.type=t==="metal"?"bandpass":"lowpass",n.frequency.value=t==="metal"?2600:900,n.Q.value=t==="metal"?6:1,this._env(i,t==="metal"?.18:.14,.001,.07,this.sfxGain,e),n.connect(i),this._noise(.08,n),t==="metal"){const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.value=1800+J(-200,400),this._env(a,.08,.001,.12,this.sfxGain,e),r.connect(a),r.start(e),r.stop(e+.16)}}explosion(){if(!this.ctx)return;const t=this.t,e=this.sfxGain,i=this.ctx.createOscillator(),n=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(120,t),i.frequency.exponentialRampToValueAtTime(28,t+.6),this._env(n,1,.003,.7,e,t),i.connect(n),i.start(t),i.stop(t+.8);const r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(2400,t),a.frequency.exponentialRampToValueAtTime(200,t+.5),this._env(r,.9,.002,.6,e,t),a.connect(r),this._noise(.7,a)}footstep(){if(!this.ctx)return;const t=this.t,e=this.ctx.createGain(),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=500+J(-80,120),this._env(e,.06,.002,.06,this.sfxGain,t),i.connect(e),this._noise(.07,i)}hurt(){if(!this.ctx)return;const t=this.t,e=this.ctx.createGain(),i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(320,t),i.frequency.exponentialRampToValueAtTime(140,t+.18),this._env(e,.25,.002,.2,this.sfxGain,t),i.connect(e),i.start(t),i.stop(t+.25)}alarm(){if(!this.ctx)return;const t=this.t,e=this.ctx.createGain(),i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(660,t),i.frequency.linearRampToValueAtTime(440,t+.3),i.frequency.linearRampToValueAtTime(660,t+.6);const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=800,n.Q.value=2,this._env(e,.18,.05,.55,this.sfxGain,t),i.connect(n),n.connect(e),i.start(t),i.stop(t+.65)}waveStinger(t=!0){if(!this.ctx)return;const e=this.t;(t?[220,277,330,440]:[440,330,220]).forEach((n,r)=>{const a=e+r*.09,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sawtooth",o.frequency.value=n;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=1400,l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(.2,a+.02),l.gain.exponentialRampToValueAtTime(1e-4,a+.25),o.connect(c),c.connect(l),l.connect(this.sfxGain),o.start(a),o.stop(a+.3)})}pickup(){if(!this.ctx)return;const t=this.t;[880,1320].forEach((e,i)=>{const n=t+i*.06,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.value=e,this._env(a,.16,.002,.12,this.sfxGain,n),r.connect(a),r.start(n),r.stop(n+.16)})}startMusic(t=0){if(!this.ctx||this._musicOn)return;this._musicOn=!0,this._musicIntensity=t,this._scheduleMusic();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.value=55;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=220,i.gain.value=.06,e.connect(n),n.connect(i),i.connect(this.musicGain),e.start(),this._drone={o:e,g:i}}setIntensity(t){this._musicIntensity=St(t,0,1)}_scheduleMusic(){if(!this._musicOn)return;const t=[0,3,7,10,12,10,7,3],e=110,i=.26,n=this._step%t.length,r=t[n],a=e*Math.pow(2,r/12),o=this.t,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="square",l.frequency.value=a;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=600+(this._musicIntensity||0)*2600;const u=.05+(this._musicIntensity||0)*.06;if(c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(u,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+i*.9),l.connect(h),h.connect(c),c.connect(this.musicGain),l.start(o),l.stop(o+i),this._musicIntensity>.35&&n%2===0){const p=this.ctx.createGain(),m=this.ctx.createBiquadFilter();m.type="highpass",m.frequency.value=5e3,this._env(p,.05*this._musicIntensity,.001,.04,this.musicGain,o),m.connect(p),this._noise(.05,m)}this._step++,this._musicTimeout=setTimeout(()=>this._scheduleMusic(),i*1e3)}stopMusic(){if(this._musicOn=!1,clearTimeout(this._musicTimeout),this._drone){try{this._drone.o.stop()}catch{}this._drone=null}}}const mt=new um;class dm{constructor(t,e,i,n=1.8,r=.7){this.cell=n,this.minX=e.x,this.minZ=e.z,this.cols=Math.ceil((i.x-e.x)/n),this.rows=Math.ceil((i.z-e.z)/n),this.blocked=new Uint8Array(this.cols*this.rows),this._build(t,r)}_build(t,e){const i=t.filter(n=>n.max.y>.4&&n.min.y<2.2);for(let n=0;n<this.rows;n++)for(let r=0;r<this.cols;r++){const a=this.minX+(r+.5)*this.cell,o=this.minZ+(n+.5)*this.cell;let l=0;for(const c of i)if(a>c.min.x-e&&a<c.max.x+e&&o>c.min.z-e&&o<c.max.z+e){l=1;break}this.blocked[n*this.cols+r]=l}}_idx(t,e){return e*this.cols+t}inBounds(t,e){return t>=0&&t<this.cols&&e>=0&&e<this.rows}isBlockedCell(t,e){return!this.inBounds(t,e)||this.blocked[this._idx(t,e)]===1}worldToCell(t,e){return{c:Math.floor((t-this.minX)/this.cell),r:Math.floor((e-this.minZ)/this.cell)}}cellToWorld(t,e){return{x:this.minX+(t+.5)*this.cell,z:this.minZ+(e+.5)*this.cell}}_nearestOpen(t,e){if(!this.isBlockedCell(t,e))return{c:t,r:e};for(let i=1;i<=6;i++)for(let n=-i;n<=i;n++)for(let r=-i;r<=i;r++)if(!(Math.abs(n)!==i&&Math.abs(r)!==i)&&!this.isBlockedCell(t+n,e+r))return{c:t+n,r:e+r};return null}findPath(t,e){const i=this.worldToCell(t.x,t.z),n=this.worldToCell(e.x,e.z),r=this._nearestOpen(i.c,i.r),a=this._nearestOpen(n.c,n.r);if(!r||!a)return null;if(r.c===a.c&&r.r===a.r)return[{x:e.x,z:e.z}];const o=this.cols,l=this._idx(r.c,r.r),c=this._idx(a.c,a.r),h=[l],u=new Map,p=new Map([[l,0]]),m=new Map([[l,this._h(r,a)]]),g=new Set([l]);let v=0;for(;h.length&&v++<4e3;){let d=0,f=1/0;for(let R=0;R<h.length;R++){const A=m.get(h[R])??1/0;A<f&&(f=A,d=R)}const b=h[d];if(b===c)return this._reconstruct(u,b,e);h.splice(d,1),g.delete(b);const S=b%o,T=(b-S)/o,U=p.get(b);for(let R=-1;R<=1;R++)for(let A=-1;A<=1;A++){if(!R&&!A)continue;const P=S+R,V=T+A;if(this.isBlockedCell(P,V)||R&&A&&(this.isBlockedCell(S+R,T)||this.isBlockedCell(S,T+A)))continue;const _=this._idx(P,V),z=U+(R&&A?1.4142:1);z<(p.get(_)??1/0)&&(u.set(_,b),p.set(_,z),m.set(_,z+this._h({c:P,r:V},a)),g.has(_)||(h.push(_),g.add(_)))}}return null}_h(t,e){const i=Math.abs(t.c-e.c),n=Math.abs(t.r-e.r);return i+n+(1.4142-2)*Math.min(i,n)}_reconstruct(t,e,i){const n=[e];for(;t.has(e);)e=t.get(e),n.unshift(e);const r=n.map(a=>{const o=a%this.cols,l=(a-o)/this.cols;return this.cellToWorld(o,l)});return r.length&&(r[r.length-1]={x:i.x,z:i.z}),this._smooth(r)}_smooth(t){if(t.length<=2)return t;const e=[t[0]];let i=0;for(let n=2;n<t.length;n++)this._lineBlocked(t[i],t[n])&&(e.push(t[n-1]),i=n-1);return e.push(t[t.length-1]),e}_lineBlocked(t,e){const i=Math.ceil(Math.hypot(e.x-t.x,e.z-t.z)/(this.cell*.5));for(let n=1;n<i;n++){const r=n/i,a=t.x+(e.x-t.x)*r,o=t.z+(e.z-t.z)*r,{c:l,r:c}=this.worldToCell(a,o);if(this.isBlockedCell(l,c))return!0}return!1}}function Fi(s="#3a3f47",t=.12,e=256,i=!1){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d");r.fillStyle=s,r.fillRect(0,0,e,e);for(let o=0;o<e*e*t;o++){const l=Math.random()*e,c=Math.random()*e,h=Math.random()*.18;r.fillStyle=Math.random()>.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,r.fillRect(l,c,1+Math.random()*2,1+Math.random()*2)}if(i){r.strokeStyle="rgba(0,0,0,0.25)",r.lineWidth=2;for(let o=0;o<=e;o+=e/4)r.beginPath(),r.moveTo(0,o),r.lineTo(e,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,e),r.stroke()}const a=new Gp(n);return a.wrapS=a.wrapT=As,a.anisotropy=4,a}class fm{constructor(t){this.scene=t,this.colliders=[],this.navPoints=[],this.coverPoints=[],this.spawnPoints=[],this.objectivePoints=[],this.lights=[],this.alarmLights=[],this.group=new je,t.add(this.group),this.bounds=new pi(new w(-60,-1,-60),new w(60,30,60)),this._buildMaterials(),this._buildSky(),this._buildLighting(),this._buildLevel(),this.navGrid=new dm(this.colliders,new w(-48,0,-48),new w(48,0,48),1.8,.7)}_buildMaterials(){const t=Fi("#23262c",.14,256,!0);t.repeat.set(40,40),this.mat={floor:new ee({map:t,roughness:.92,metalness:.05,color:4475994}),wall:new ee({map:Fi("#41464e",.1),roughness:.85,metalness:.1,color:4869975}),metal:new ee({map:Fi("#5a5f66",.08),roughness:.5,metalness:.7,color:6975608}),darkMetal:new ee({color:3356477,roughness:.6,metalness:.6}),crate:new ee({map:Fi("#6b5733",.12),roughness:.8,metalness:.1,color:8020536}),crateMil:new ee({map:Fi("#3c4a37",.1),roughness:.8,color:4609343}),barrel:new ee({color:11746091,roughness:.55,metalness:.35}),barrelBlue:new ee({color:2845619,roughness:.55,metalness:.35}),concrete:new ee({map:Fi("#3a3e44",.12),roughness:.95,color:4343372}),glassEmis:new ee({color:658706,emissive:1192e3,emissiveIntensity:.6,metalness:.4,roughness:.2}),pipe:new ee({color:5593954,roughness:.4,metalness:.8}),sign:new ee({color:1119256,emissive:16724770,emissiveIntensity:1.6}),signCyan:new ee({color:528404,emissive:3397375,emissiveIntensity:1.4}),grate:new ee({color:2895926,roughness:.6,metalness:.6})}}_buildSky(){const t=new _i(400,32,16),e=new Lt(660512),i=new Lt(1843760),n=new Lt(3752271),r=[],a=t.attributes.position;for(let u=0;u<a.count;u++){const p=a.getY(u)/400,m=new Lt().copy(i).lerp(n,1-Math.abs(p)).lerp(e,Math.max(0,p));r.push(m.r,m.g,m.b)}t.setAttribute("color",new fe(r,3));const o=new He({vertexColors:!0,side:Te,fog:!1});this.scene.add(new Ft(t,o));const l=new Ae,c=[];for(let u=0;u<1200;u++){const p=new w(J(-1,1),J(.05,1),J(-1,1)).normalize().multiplyScalar(380);c.push(p.x,p.y,p.z)}l.setAttribute("position",new fe(c,3));const h=new Hp(l,new Nl({color:10466248,size:1.1,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8}));this.scene.add(h),this.scene.fog=new Ra(1185830,.0085)}_buildLighting(){const t=new Fl(9085629,2238515,1.6);this.scene.add(t),this.scene.add(new qp(4872816,.6));const e=new fa(12112622,1.8);e.position.set(40,60,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const i=70;e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.camera.near=1,e.shadow.camera.far=180,e.shadow.bias=-8e-4,this.scene.add(e),this.moon=e}_addCollider(t){t.updateMatrixWorld(!0);const e=new pi().setFromObject(t);return this.colliders.push(e),e}_box(t,e,i,n,r,a,o,l={}){const c=new Se(t,e,i),h=new Ft(c,o);return h.position.set(n,r,a),l.ry&&(h.rotation.y=l.ry),h.castShadow=l.cast!==!1,h.receiveShadow=l.receive!==!1,this.group.add(h),l.collide!==!1&&this._addCollider(h),h}_lamp(t,e,i=16767392,n=3.2,r=7){this._box(.18,r,.18,t,r/2,e,this.mat.pipe,{cast:!1}),this._box(.8,.12,.4,t,r,e+.2,this.mat.darkMetal,{cast:!1,collide:!1});const a=new Ft(new Se(.5,.12,.3),new ee({color:273,emissive:i,emissiveIntensity:2}));a.position.set(t,r-.05,e+.35),this.group.add(a);const o=new Un(i,n,30,1.7);o.position.set(t,r-.3,e+.35),this.scene.add(o),this.lights.push(o)}_alarmLight(t,e,i){const n=new Ft(new _i(.22,12,8),new ee({color:2228224,emissive:16711680,emissiveIntensity:1}));n.position.set(t,e,i),this.group.add(n);const r=new Un(16716032,0,16,2);r.position.set(t,e,i),this.scene.add(r),this.alarmLights.push({light:r,mesh:n,phase:J(0,6.28)})}_crate(t,e,i=1.4,n=!1){const r=this._box(i,i,i,t,i/2,e,n?this.mat.crateMil:this.mat.crate,{ry:J(-.2,.2)});return this.coverPoints.push({pos:new w(t,0,e),size:i}),r}_barrel(t,e,i=!1){const n=new zn(.45,.45,1.1,14),r=new Ft(n,i?this.mat.barrelBlue:this.mat.barrel);r.position.set(t,.55,e),r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const a=new pi().setFromObject(r);return this.colliders.push(a),this.coverPoints.push({pos:new w(t,0,e),size:.9}),{mesh:r,explosive:!i,x:t,z:e}}_container(t,e,i,n){const l=new ee({map:Fi("#2c3a4a",.1),color:n,roughness:.7,metalness:.3}),c=this._box(6,2.6,2.5,t,2.6/2,e,l,{ry:i});return this.coverPoints.push({pos:new w(t,0,e),size:3}),c}_buildLevel(){const t=this.mat,e=new Ft(new gi(140,140),t.floor);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.group.add(e);const i=50,n=6;this._box(i*2,n,1,0,n/2,-i,t.wall),this._box(i*2,n,1,0,n/2,i,t.wall),this._box(1,n,i*2,-i,n/2,0,t.wall),this._box(1,n,i*2,i,n/2,0,t.wall);for(const[P,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])this._box(3,9,3,P*(i-1.5),4.5,V*(i-1.5),t.concrete);const r=-14,a=-10,o=24,l=20,c=8;this._box(o,c,.6,r,c/2,a-l/2,t.wall),this._box(8,c,.6,r-8,c/2,a+l/2,t.wall),this._box(8,c,.6,r+8,c/2,a+l/2,t.wall),this._box(.6,c,l,r-o/2,c/2,a,t.wall),this._box(.6,c,6,r+o/2,c/2,a-7,t.wall),this._box(.6,c,6,r+o/2,c/2,a+7,t.wall),this._box(o+1,.5,l+1,r,c,a,t.metal,{cast:!0});for(const P of[-6,6])for(const V of[-5,5])this._box(.7,c,.7,r+P,c/2,a+V,t.concrete);this._crate(r-7,a-6,1.6,!0),this._crate(r-7,a-4.4,1.6,!0),this._crate(r+7,a+5,1.6,!0),this._crate(r+4,a-6,1.4,!0),this._crate(r,a,1.8,!0),this._crate(r+1.6,a,1.4,!0);const h=3,u=3.2,p=-16,m=16,g=16;this._box(h,.3,m-p,g,u,(p+m)/2,t.grate,{receive:!0});for(const P of[-h/2,h/2])this._box(.08,1,m-p,g+P,u+.6,(p+m)/2,t.pipe,{collide:!1,cast:!1});for(let P=p;P<=m;P+=4)this._box(.3,u,.3,g,u/2,P,t.pipe,{collide:!1});const v=this._box(3,.3,6,g-3,u-1.2,m-3,t.grate,{collide:!0});v.rotation.x=-.32,v.updateMatrixWorld(!0),this.navPoints.push({x:g,z:0,y:u},{x:g,z:-10,y:u},{x:g,z:10,y:u});const d=-34,f=12,b=12,S=12,T=5;this._box(b,T,.4,d,T/2,f-S/2,t.concrete),this._box(.4,T,S,d-b/2,T/2,f,t.concrete),this._box(.4,T,S,d+b/2,T/2,f,t.concrete),this._box(b,T,.4,d-3,T/2,f+S/2,t.concrete),this._box(b+.5,.4,S+.5,d,T,f,t.metal);for(let P=0;P<4;P++){this._box(1,3.2,2,d-4+P*2.4,1.6,f-3,t.glassEmis);const V=new Un(3397375,.5,6,2);V.position.set(d-4+P*2.4,2,f-1.5),this.scene.add(V),this.lights.push(V)}this.objectivePoints.push({pos:new w(d,0,f),radius:5,name:"SERVER VAULT"}),this._container(20,18,.2,10242618),this._container(26,16,-.4,3828380),this._container(24,24,1.2,6982730),this._container(-30,-18,.1,10259002),this._container(-24,-22,.9,4868700),this.objectivePoints.push({pos:new w(24,0,20),radius:5,name:"CARGO YARD"});const U=[[4,6],[8,10],[-4,14],[12,-6],[-10,18],[18,-14],[-18,6],[2,-16],[-6,-8],[10,20],[-16,-6],[30,-4],[-30,20],[6,-22]];for(const[P,V]of U)this._crate(P,V,J(1.2,1.7),Math.random()>.5);const R=[[5,7],[9,9],[-5,13],[13,-5],[-11,17],[3,-15],[-7,-7],[31,-3]];this.barrels=[];for(const[P,V]of R)this.barrels.push(this._barrel(P+J(-.5,.5),V+J(-.5,.5),Math.random()>.7));for(let P=0;P<6;P++){const V=J(-40,40),_=new Ft(new zn(.2,.2,J(8,20),8),t.pipe);_.rotation.z=Math.PI/2,_.position.set(V,J(7,9),J(-40,40)),_.castShadow=!0,this.group.add(_)}this._lamp(-8,8),this._lamp(14,-8),this._lamp(-20,-14,16773328),this._lamp(22,22,16767392),this._lamp(-34,24,3397375,1.8,6),this._lamp(0,30),this._lamp(34,0),this._alarmLight(-14,7.5,0),this._alarmLight(16,4,-16),this._alarmLight(16,4,16),this._alarmLight(-34,4.5,6),this._alarmLight(0,5,-49),this._box(4,1.2,.2,-14,8.5,.2,t.sign,{collide:!1,cast:!1}),this._box(3,.9,.2,-34,5.2,6,t.signCyan,{collide:!1,cast:!1});for(let P=-42;P<=42;P+=7)for(let V=-42;V<=42;V+=7)this._pointBlocked(P,V,.8)||this.navPoints.push({x:P,z:V,y:0});const A=[[-44,-44],[44,-44],[-44,44],[44,44],[0,-46],[0,46],[-46,0],[46,0],[-40,30],[40,-30],[30,40],[-30,-40],[44,12],[-44,-12],[12,44],[-12,-44]];for(const[P,V]of A)this._pointBlocked(P,V,1)||this.spawnPoints.push({x:P,z:V});this.objectivePoints.push({pos:new w(0,0,0),radius:6,name:"CENTRAL YARD"})}_pointBlocked(t,e,i=.5){for(const n of this.colliders)if(t+i>n.min.x&&t-i<n.max.x&&e+i>n.min.z&&e-i<n.max.z&&n.min.y<2.5)return!0;return!1}get playerSpawn(){return new w(0,1.7,22)}update(t,e){for(const i of this.alarmLights)if(e){i.phase+=t*6;const n=Math.sin(i.phase)*.5+.5;i.light.intensity=n*3,i.mesh.material.emissiveIntensity=.3+n*2}else i.light.intensity*=1-t*4,i.mesh.material.emissiveIntensity=.4}}const on=1.8,Ko=1.1,pm=.12,ve=.36;class mm{constructor(t,e,i){this.engine=t,this.input=e,this.world=i,this.camera=t.camera,this.pos=i.playerSpawn.clone(),this.vel=new w,this.yaw=Math.PI,this.pitch=0,this.height=on,this.targetHeight=on,this.onGround=!0,this.crouching=!1,this.sprinting=!1,this.sliding=!1,this.slideTime=0,this.lean=0,this.targetLean=0,this.mantle=null,this.bob=0,this.bobAmount=0,this.viewTilt=0,this.recoilKick=new wt,this.recoilOffset=new wt,this.landDip=0,this.breath=0,this.adsBlend=0,this.shakeT=0,this.shakeMag=0,this.maxHealth=100,this.health=100,this.maxArmor=100,this.armor=0,this.regenDelay=4.5,this.regenRate=22,this.lastDamageTime=-99,this.dead=!1,this.maxStamina=100,this.stamina=100,this.speedMul=1,this.lastStepDist=0,this.time=0,this.damageDir=null,this.damageDirTime=0}reset(){this.pos.copy(this.world.playerSpawn),this.vel.set(0,0,0),this.health=this.maxHealth,this.armor=0,this.dead=!1,this.stamina=this.maxStamina,this.yaw=Math.PI,this.pitch=0,this.height=on,this.targetHeight=on,this.crouching=!1,this.sliding=!1,this.mantle=null}get eyePos(){return new w(this.pos.x,this.pos.y+this.height-pm,this.pos.z)}addRecoil(t,e){this.recoilKick.x+=t,this.recoilKick.y+=e}shake(t,e=.3){this.shakeMag=Math.max(this.shakeMag,t),this.shakeT=Math.max(this.shakeT,e)}damage(t,e){if(this.dead)return;this.lastDamageTime=this.time;let i=t;if(this.armor>0){const n=Math.min(this.armor,i*.6);this.armor-=n,i-=n}if(this.health-=i,mt.hurt(),this.shake(St(t/30,.1,.5),.25),e){const n=new w().subVectors(e,this.eyePos);this.damageDir=Math.atan2(n.x,n.z),this.damageDirTime=this.time}this.health<=0&&(this.health=0,this.dead=!0)}heal(t){this.health=St(this.health+t,0,this.maxHealth)}addArmor(t){this.armor=St(this.armor+t,0,this.maxArmor)}_look(t){const e=this.input.settings.sensitivity*.0022,i=this.input.settings.invertY?-1:1;this.yaw-=this.input.mouse.dx*e,this.pitch-=this.input.mouse.dy*e*i,this.pitch=St(this.pitch,-qo(89),qo(89))}_wishDir(){const t=(this.input.action("forward")?1:0)-(this.input.action("back")?1:0),e=(this.input.action("right")?1:0)-(this.input.action("left")?1:0),i=new w;if(t||e){const n=Math.sin(this.yaw),r=Math.cos(this.yaw);i.x=-n*t+r*e,i.z=-r*t-n*e,i.normalize()}return i}update(t,e){if(this.time+=t,this.dead){this._updateCamera(t);return}if(e||this._look(t),this.mantle){const m=this.mantle;m.t+=t;const g=St(m.t/m.dur,0,1),v=Math.min(1,g*1.6),d=St((g-.35)/.65,0,1);this.pos.x=ti(m.sx,m.ex,d),this.pos.z=ti(m.sz,m.ez,d),this.pos.y=ti(m.sy,m.ey,v),this.landDip=.05,g>=1&&(this.mantle=null,this.onGround=!0,this.vel.set(0,0,0)),this._updateCamera(t);return}const i=this._wishDir(),n=i.lengthSq()>.01,r=this.input.action("crouch"),a=this.input.action("sprint")&&this.input.action("forward")&&this.stamina>5&&!this.crouching;if(this.input.actionPressed("crouch")&&this.sprinting&&this.onGround&&this.vel.length()>4&&!this.sliding){this.sliding=!0,this.slideTime=.55;const m=new w(this.vel.x,0,this.vel.z);m.length()<7&&m.setLength(7),this.vel.x=m.x*1.25,this.vel.z=m.z*1.25,mt.footstep()}this.sliding&&(this.slideTime-=t,(this.slideTime<=0||!this.onGround)&&(this.sliding=!1)),this.crouching=(r||this.sliding)&&this.onGround,this.sprinting=a&&!this.sliding,this.targetHeight=this.crouching?Ko:on,this.targetHeight>this.height&&this._ceilingBlocked()&&(this.targetHeight=this.height),this.height=ce(this.height,this.targetHeight,14,t),this.sprinting&&n?this.stamina=St(this.stamina-18*t,0,this.maxStamina):this.stamina=St(this.stamina+12*t,0,this.maxStamina);let o=5.4;this.crouching&&(o=2.6),this.sprinting&&(o=8.4),o*=this.speedMul,this.adsBlend>.5&&!this.sprinting&&(o*=.7);const l=this.onGround?this.sliding?2:52:9,c=this.onGround?this.sliding?2.2:11:.2,h=new w(this.vel.x,0,this.vel.z);if(n&&!this.sliding){const m=i.clone().multiplyScalar(o);h.x=ce(h.x,m.x,l*.12,t),h.z=ce(h.z,m.z,l*.12,t)}else{const m=h.length();if(m>0){const g=m*c*t,v=Math.max(0,m-g);h.multiplyScalar(m>0?v/m:0)}}if(this.vel.x=h.x,this.vel.z=h.z,this.input.actionPressed("jump")&&!this.sliding){if(this._tryMantle(i)){this._updateCamera(t);return}this.onGround&&(this.vel.y=6.4,this.onGround=!1)}this.vel.y-=22*t,this.vel.y=Math.max(this.vel.y,-40);let u=0;this.input.action("leanLeft")&&(u+=1),this.input.action("leanRight")&&(u-=1),this.sprinting&&(u=0),this.targetLean=u,this.lean=ce(this.lean,this.targetLean,12,t),this._moveCollide(t);const p=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&p>1.2){this.bob+=t*p*(this.sprinting?1.5:1.1);const m=this.sprinting?2:2.6;this.bob-this.lastStepDist>m&&(this.lastStepDist=this.bob,this.sliding||mt.footstep())}this.bobAmount=ce(this.bobAmount,St(p/8,0,1)*(this.crouching?.5:1),8,t),this._updateCamera(t)}_ceilingBlocked(){const t=this.pos.y+on;for(const e of this.world.colliders)if(this.pos.x+ve>e.min.x&&this.pos.x-ve<e.max.x&&this.pos.z+ve>e.min.z&&this.pos.z-ve<e.max.z&&e.min.y<t+.1&&e.min.y>this.pos.y+Ko)return!0;return!1}_tryStep(t,e){if(!this.onGround&&this.vel.y>.5)return!1;const i=t.max.y,n=i-this.pos.y;if(n<=.02||n>e)return!1;for(const r of this.world.colliders)if(r!==t&&this.pos.x+ve>r.min.x&&this.pos.x-ve<r.max.x&&this.pos.z+ve>r.min.z&&this.pos.z-ve<r.max.z&&r.min.y<i+this.height&&r.max.y>i+.05)return!1;return this.pos.y=i+.001,this.onGround=!0,this.vel.y<0&&(this.vel.y=0),!0}_tryMantle(t){if(this.mantle||this.sliding||t.lengthSq()<.1)return!1;const e=t.clone().normalize(),i=this.pos.x+e.x*(ve+.35),n=this.pos.z+e.z*(ve+.35);let r=null;for(const c of this.world.colliders){if(i<c.min.x-.1||i>c.max.x+.1||n<c.min.z-.1||n>c.max.z+.1)continue;const h=c.max.y-this.pos.y;h>.6&&h<=1.7&&(!r||c.max.y<r.max.y)&&(r=c)}if(!r)return!1;const a=r.max.y,o=this.pos.x+e.x*(ve+.55),l=this.pos.z+e.z*(ve+.55);for(const c of this.world.colliders)if(o+ve>c.min.x&&o-ve<c.max.x&&l+ve>c.min.z&&l-ve<c.max.z&&c.min.y<a+this.height-.1&&c.max.y>a+.05)return!1;return this.mantle={sx:this.pos.x,sy:this.pos.y,sz:this.pos.z,ex:o,ey:a+.02,ez:l,t:0,dur:.34},this.vel.set(0,0,0),mt.footstep(),!0}_moveCollide(t){const e=ve,i=.62;this.pos.x+=this.vel.x*t;for(const l of this.world.colliders)this._overlapXZ(l,e)&&this._overlapY(l)&&(this._tryStep(l,i)||(this.vel.x>0?this.pos.x=l.min.x-e:this.vel.x<0&&(this.pos.x=l.max.x+e),this.vel.x=0));this.pos.z+=this.vel.z*t;for(const l of this.world.colliders)this._overlapXZ(l,e)&&this._overlapY(l)&&(this._tryStep(l,i)||(this.vel.z>0?this.pos.z=l.min.z-e:this.vel.z<0&&(this.pos.z=l.max.z+e),this.vel.z=0));const n=this.pos.y;this.pos.y+=this.vel.y*t;let r=0,a=this.pos.y<=r;for(const l of this.world.colliders){if(!this._overlapXZ(l,e))continue;const c=l.max.y,h=l.min.y;n>=c-.05&&this.pos.y<=c&&this.vel.y<=0&&(c>r&&(r=c),a=!0),this.vel.y>0&&n+this.height<=h+.02&&this.pos.y+this.height>=h&&(this.pos.y=h-this.height,this.vel.y=-1)}this.pos.y<=r&&this.vel.y<=0?(!this.onGround&&this.vel.y<-7&&(this.landDip=St(-this.vel.y/40,0,.35),this.shake(St(-this.vel.y/60,0,.3),.18),mt.footstep()),this.pos.y=r,this.vel.y=0,this.onGround=!0):this.vel.y<0&&a?(this.pos.y=r,this.vel.y=0,this.onGround=!0):this.onGround=!1;const o=48.2;this.pos.x=St(this.pos.x,-o,o),this.pos.z=St(this.pos.z,-o,o)}_overlapXZ(t,e){return this.pos.x+e>t.min.x&&this.pos.x-e<t.max.x&&this.pos.z+e>t.min.z&&this.pos.z-e<t.max.z}_overlapY(t){const e=this.pos.y+.15;return this.pos.y+this.height>t.min.y&&e<t.max.y}_updateCamera(t){const e=this.camera,i=this.eyePos;this.recoilOffset.x=ce(this.recoilOffset.x,0,9,t),this.recoilOffset.y=ce(this.recoilOffset.y,0,9,t),this.recoilOffset.x+=this.recoilKick.x,this.recoilOffset.y+=this.recoilKick.y,this.recoilKick.set(0,0);const n=this.bobAmount*(this.input.settings.bobAmount??1)*(this.adsBlend>.5?.3:1),r=Math.cos(this.bob)*.035*n,a=Math.abs(Math.sin(this.bob))*.05*n;this.breath+=t;const o=Math.sin(this.breath*1.4)*.006;this.landDip=ce(this.landDip,0,8,t);let l=0,c=0;if(this.shakeT>0){this.shakeT-=t;const U=this.shakeMag*(this.shakeT>0?1:0);l=(Math.random()*2-1)*U*.06,c=(Math.random()*2-1)*U*.06,this.shakeT<=0&&(this.shakeMag=0)}const h=this.lean*.55,u=Math.sin(this.yaw),m=Math.cos(this.yaw),g=-u;e.position.set(i.x+m*h+r*m+l,i.y+a+o-this.landDip+c,i.z+g*h+r*g),-this.vel.x*Math.cos(this.yaw)*0;const v=this.pitch+this.recoilOffset.x,d=this.yaw+this.recoilOffset.y,f=-this.lean*.12+(this.sliding?.06:0),b=new Je(v,d,f,"YXZ");e.quaternion.setFromEuler(b);const S=this.sprinting?6:0,T=this.input.settings.fov;this._displayFov=T+S}}class gm{constructor(t){this.scene=t,this.group=new je,t.add(this.group),this.particles=[],this.tracers=[],this.decals=[],this.flashes=[],this.maxDecals=120,this._sparkGeo=new _i(.05,5,4),this._decalGeo=new gi(.28,.28),this._particlePool=new Er(()=>{const e=new Ft(this._sparkGeo,new He({color:16755251,transparent:!0}));return e.visible=!1,this.group.add(e),e}),this._tracerPool=new Er(()=>{const e=new Ae;e.setAttribute("position",new fe(new Float32Array(6),3));const i=new Ul(e,new Ca({color:16773280,transparent:!0}));return i.visible=!1,i.frustumCulled=!1,this.group.add(i),i}),this._decalMat=new He({color:526344,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),this.muzzleLights=[];for(let e=0;e<4;e++){const i=new Un(16764006,0,9,2);i.visible=!1,t.add(i),this.muzzleLights.push({light:i,t:0})}this._flashGeoStar=new gi(.14,.14),this._flashGeoCone=new Pa(.045,.2,7,1,!0),this._flashPool=new Er(()=>{const e=new je,i=new Ft(this._flashGeoStar,new He({color:16773296,transparent:!0,blending:Nn,depthWrite:!1,fog:!1})),n=new Ft(this._flashGeoCone,new He({color:16765040,transparent:!0,blending:Nn,depthWrite:!1,fog:!1}));return n.rotation.x=-Math.PI/2,n.position.z=-.12,e.add(i),e.add(n),e.visible=!1,this.group.add(e),e})}muzzleFlash(t,e,i=1){const n=this._flashPool.acquire();n.visible=!0,n.position.copy(t),n.quaternion.setFromUnitVectors(new w(0,0,-1),e),n.rotateZ(J(0,Math.PI*2));const r=i*J(.85,1.2);n.scale.setScalar(r),n.children[0].material.opacity=1,n.children[1].material.opacity=.9,this.flashes.push({grp:n,life:.05,maxLife:.05})}_spawnParticle(t,e,i,n,r,a=-9,o=!0,l=2){const c=this._particlePool.acquire();c.visible=!0,c.position.copy(t),c.scale.setScalar(n/.05),c.material.color.setHex(i),c.material.opacity=1,this.particles.push({m:c,vel:e.clone(),life:r,maxLife:r,gravity:a,fade:o,drag:l,size:n})}sparks(t,e,i=10,n=16763989){for(let r=0;r<i;r++){const a=new w(e.x+J(-1,1),e.y+J(-.2,1.2),e.z+J(-1,1)).normalize().multiplyScalar(J(3,9));this._spawnParticle(t,a,n,J(.03,.07),J(.18,.4),-14,!0,3)}for(let r=0;r<3;r++){const a=new w(J(-.5,.5),J(.4,1),J(-.5,.5));this._spawnParticle(t,a,5593180,J(.1,.2),J(.4,.8),1.5,!0,1.5)}}blood(t,e,i=14){for(let n=0;n<i;n++){const r=e.clone().multiplyScalar(J(1,4)).add(new w(J(-2,2),J(0,3),J(-2,2)));this._spawnParticle(t,r,10230292,J(.04,.09),J(.3,.6),-16,!0,2)}for(let n=0;n<5;n++){const r=e.clone().multiplyScalar(J(.5,2)).add(new w(J(-1,1),J(0,1.5),J(-1,1)));this._spawnParticle(t,r,7016202,J(.06,.12),J(.2,.4),-3,!0,3)}}debris(t,e=8,i=5593180){for(let n=0;n<e;n++){const r=new w(J(-3,3),J(2,7),J(-3,3));this._spawnParticle(t,r,i,J(.05,.12),J(.5,1.1),-16,!0,1)}}explosion(t){for(let e=0;e<30;e++){const i=new w(J(-1,1),J(-.3,1),J(-1,1)).normalize().multiplyScalar(J(4,14)),n=[16768358,16746547,16733474][ws(0,2)];this._spawnParticle(t,i,n,J(.15,.4),J(.3,.7),-2,!0,2.5)}for(let e=0;e<18;e++){const i=new w(J(-1,1),J(.5,2),J(-1,1)).multiplyScalar(J(1,4));this._spawnParticle(t,i,3355962,J(.3,.7),J(.8,1.6),1.2,!0,1.2)}this.debris(t,16,546),this.muzzleFlashLight(t,16755268,8,.3)}tracer(t,e,i=16773280,n=.06){const r=this._tracerPool.acquire();r.visible=!0;const a=r.geometry.attributes.position.array;a[0]=t.x,a[1]=t.y,a[2]=t.z,a[3]=e.x,a[4]=e.y,a[5]=e.z,r.geometry.attributes.position.needsUpdate=!0,r.material.color.setHex(i),r.material.opacity=.9,this.tracers.push({line:r,life:n,maxLife:n})}decal(t,e){if(this.decals.length>=this.maxDecals){const r=this.decals.shift();this.group.remove(r.mesh),r.mesh.geometry.dispose?.()}const i=new Ft(this._decalGeo,this._decalMat.clone());i.position.copy(t).addScaledVector(e,.015);const n=new yn().setFromUnitVectors(new w(0,0,1),e);i.quaternion.copy(n),i.rotateZ(J(0,Math.PI*2)),i.scale.setScalar(J(.7,1.2)),this.group.add(i),this.decals.push({mesh:i,life:16,maxLife:16})}muzzleFlashLight(t,e=16764006,i=4,n=.06){for(const r of this.muzzleLights)if(!r.light.visible){r.light.visible=!0,r.light.color.setHex(e),r.light.intensity=i,r.light.position.copy(t),r.t=n,r.maxT=n;return}}update(t){for(let e=this.particles.length-1;e>=0;e--){const i=this.particles[e];if(i.life-=t,i.life<=0){i.m.visible=!1,this._particlePool.release(i.m),this.particles.splice(e,1);continue}if(i.vel.y+=i.gravity*t,i.vel.multiplyScalar(Math.max(0,1-i.drag*t)),i.m.position.addScaledVector(i.vel,t),i.m.position.y<.02&&(i.m.position.y=.02,i.vel.y=0,i.vel.multiplyScalar(.6)),i.fade){const n=i.life/i.maxLife;i.m.material.opacity=n,i.m.scale.setScalar(i.size/.05*(.5+n*.5))}}for(let e=this.tracers.length-1;e>=0;e--){const i=this.tracers[e];if(i.life-=t,i.life<=0){i.line.visible=!1,this._tracerPool.release(i.line),this.tracers.splice(e,1);continue}i.line.material.opacity=i.life/i.maxLife*.9}for(let e=this.decals.length-1;e>=0;e--){const i=this.decals[e];if(i.life-=t,i.life<=0){this.group.remove(i.mesh),this.decals.splice(e,1);continue}i.life<2&&(i.mesh.material.opacity=i.life/2*.9)}for(const e of this.muzzleLights)e.light.visible&&(e.t-=t,e.light.intensity=St(e.t/e.maxT,0,1)*e.light.intensity,e.t<=0&&(e.light.visible=!1,e.light.intensity=0));for(let e=this.flashes.length-1;e>=0;e--){const i=this.flashes[e];if(i.life-=t,i.life<=0){i.grp.visible=!1,this._flashPool.release(i.grp),this.flashes.splice(e,1);continue}const n=i.life/i.maxLife;i.grp.children[0].material.opacity=n,i.grp.children[1].material.opacity=n*.9}}clearTransient(){for(const t of this.particles)t.m.visible=!1,this._particlePool.release(t.m);this.particles.length=0;for(const t of this.tracers)t.line.visible=!1,this._tracerPool.release(t.line);this.tracers.length=0;for(const t of this.decals)this.group.remove(t.mesh);this.decals.length=0;for(const t of this.flashes)t.grp.visible=!1,this._flashPool.release(t.grp);this.flashes.length=0}}const re={IDLE:0,PATROL:1,ALERT:2,COMBAT:3,COVER:4,FLANK:5,DEAD:6},_m={rifleman:{name:"RIFLEMAN",health:100,speed:3.2,color:4872776,accent:10135626,fireRate:1.6,burst:4,burstGap:.12,damage:9,range:60,accuracy:.85,coverBias:.55,scoreVal:100,headHeight:1.62},rusher:{name:"RUSHER",health:70,speed:5.6,color:6961722,accent:14178874,fireRate:.8,burst:6,burstGap:.07,damage:7,range:18,accuracy:.6,coverBias:.1,scoreVal:120,headHeight:1.55,melee:!0},heavy:{name:"HEAVY",health:320,speed:2,color:3816010,accent:5925592,fireRate:2.2,burst:8,burstGap:.1,damage:12,range:45,accuracy:.78,coverBias:.3,scoreVal:250,headHeight:1.78,big:!0,grenades:!0},sniper:{name:"MARKSMAN",health:65,speed:2.6,color:2765632,accent:16726832,fireRate:3.4,burst:1,burstGap:0,damage:42,range:95,accuracy:.97,coverBias:.7,scoreVal:180,headHeight:1.66,sniper:!0,chargeTime:1.3},titan:{name:"TITAN",health:2600,speed:1.7,color:2367276,accent:16742938,fireRate:1.4,burst:12,burstGap:.08,damage:14,range:55,accuracy:.8,coverBias:.05,scoreVal:2500,headHeight:2.3,big:!0,boss:!0,grenades:!0}};let vm=0;class xm{constructor(t,e,i){this.mgr=t,this.type=e,this.def=_m[e],this.id=vm++,this.pos=i.clone(),this.pos.y=0,this.vel=new w,this.yaw=J(0,Math.PI*2),this.health=this.def.health*t.healthMul,this.maxHealth=this.health,this.state=re.PATROL,this.stateTime=0,this.target=null,this.fireTimer=J(.5,1.5),this.burstLeft=0,this.burstTimer=0,this.alertLevel=0,this.lastSeenPos=null,this.coverPoint=null,this.reactionTimer=0,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=J(.5,1.5),this.hitFlash=0,this.dead=!1,this.deathTime=0,this.muzzleCooldown=0,this.path=null,this.pathIndex=0,this.pathGoal=null,this.repathTimer=J(0,.5),this.suppressed=0,this.grenadeCD=J(3,8),this._build()}_build(){const t=this.def,e=new je,i=new ee({color:t.color,roughness:.7,metalness:.2}),n=new ee({color:t.accent,roughness:.6,metalness:.3,emissive:t.accent,emissiveIntensity:.15}),r=new ee({color:2106410,roughness:.5,metalness:.4}),a=t.boss?1.9:t.big?1.25:1,o=new Ft(new Se(.5*a,.7*a,.3*a),i);o.position.y=1.1*a,o.castShadow=!0,e.add(o);const l=new Ft(new Se(.42*a,.4*a,.06),n);l.position.set(0,1.18*a,.16*a),e.add(l);const c=new Ft(new _i(.18*a,12,10),r);c.position.y=t.headHeight*a,c.castShadow=!0,e.add(c);const h=new Ft(new Se(.22*a,.07,.04),new ee({color:528404,emissive:t.accent,emissiveIntensity:1.2}));h.position.set(0,t.headHeight*a,.16*a),e.add(h);const u=new Ft(new Se(.42*a,.75*a,.28*a),i);u.position.y=.42*a,u.castShadow=!0,e.add(u);const p=new Se(.13*a,.6*a,.13*a),m=new Ft(p,i);m.position.set(-.34*a,1.1*a,.1),e.add(m);const g=new Ft(p,i);g.position.set(.34*a,1.1*a,.1),e.add(g),this.rArm=g,this.lArm=m,this.legsMesh=u,this.torsoMesh=o;const v=t.sniper?.85:.5,d=new Ft(new Se(.08,.08,v),new ee({color:1447963,metalness:.6,roughness:.4}));if(d.position.set(.34*a,1.1*a,.2+v/2),e.add(d),this.gunMesh=d,this.muzzlePos=new w,t.sniper){const T=new Ae;T.setAttribute("position",new fe(new Float32Array(6),3)),this.laser=new Ul(T,new Ca({color:16722458,transparent:!0,opacity:0})),this.laser.frustumCulled=!1,this.mgr.scene.add(this.laser),this.charging=0}e.position.copy(this.pos),this.group=e,this.scaleF=a,this.headHit=new Ft(new _i(.24*a,8,6),new He({visible:!1})),this.headHit.position.y=t.headHeight*a,this.headHit.userData={enemy:this,zone:"head"},e.add(this.headHit),this.bodyHit=new Ft(new Se(.6*a,1*a,.45*a),new He({visible:!1})),this.bodyHit.position.y=.95*a,this.bodyHit.userData={enemy:this,zone:"body"},e.add(this.bodyHit),this.mgr.scene.add(e),this.mgr.hitboxes.push(this.headHit,this.bodyHit);const f=new Ft(new gi(.7,.08),new He({color:0,transparent:!0,opacity:.5,depthTest:!1})),b=new Ft(new gi(.68,.05),new He({color:16730942,depthTest:!1}));b.position.z=.001;const S=new je;S.add(f),S.add(b),S.position.y=(t.headHeight+.35)*a,S.visible=!1,S.renderOrder=999,e.add(S),this.bar=S,this.barFg=b}get eyePos(){return new w(this.pos.x,this.def.headHeight*this.scaleF,this.pos.z)}damage(t,e,i){if(this.dead)return 0;const n=t;return this.health-=t,this._lastWasHead=e==="head",this.hitFlash=1,this.suppressed=Math.min(1,this.suppressed+.6),this.alertLevel=1,this.lastSeenPos=this.mgr.player.eyePos.clone(),(this.state===re.IDLE||this.state===re.PATROL)&&this._enterCombat(),this.health<=0?(this._die(i),n):(Math.random()<.3&&(this.reactionTimer=Math.max(this.reactionTimer,.15)),n)}_die(t){this.dead=!0,this.state=re.DEAD,this.deathTime=0,this.bar.visible=!1,this.ragVel=(t?t.clone():new w(J(-1,1),0,J(-1,1))).setY(0).normalize(),this.ragSpin=J(-4,4),this.fallAngle=0,this.mgr._removeHitboxes(this),this.mgr.onKill(this),mt.hurt()}_enterCombat(){this.state=re.COMBAT,this.stateTime=0,this.reactionTimer=this.mgr.reactionTime*J(.7,1.3)}_hasLOS(t){return!this.mgr.segmentBlocked(this.eyePos,t)}_findCover(){const t=this.mgr.player.eyePos;let e=null,i=-1/0;for(const n of this.mgr.world.coverPoints){const r=n.pos.distanceTo(this.pos);if(r>28)continue;const a=new w().subVectors(n.pos,t).setY(0).normalize(),o=n.pos.clone().addScaledVector(a,n.size*.6+.5);o.y=0;const l=this.mgr.segmentBlocked(new w(o.x,1.2,o.z),t);let c=-r*.4+(l?30:-5)-this.pos.distanceTo(o)*.3;c>i&&(i=c,e=o)}return e}update(t,e){if(this.dead){this._updateDeath(t);return}this.stateTime+=t,this.hitFlash=ce(this.hitFlash,0,8,t),this.muzzleCooldown-=t,this.reactionTimer>0&&(this.reactionTimer-=t),this.suppressed>0&&(this.suppressed=Math.max(0,this.suppressed-t*.6)),this.grenadeCD>0&&(this.grenadeCD-=t);const i=new w().subVectors(e.eyePos,this.eyePos),n=i.length(),r=!e.dead&&n<75&&this._canSeePlayer(e,i,n);switch(this.laser&&this._updateLaser(e,r),r?(this.alertLevel=Math.min(1,this.alertLevel+t*3),this.lastSeenPos=e.eyePos.clone()):this.alertLevel=Math.max(0,this.alertLevel-t*.25),this.state){case re.IDLE:case re.PATROL:this._statePatrol(t,r);break;case re.ALERT:this._stateAlert(t,r);break;case re.COMBAT:this._stateCombat(t,e,r,n);break;case re.COVER:this._stateCover(t,e,r,n);break;case re.FLANK:this._stateFlank(t,e,r,n);break}this._integrate(t),this._animate(t)}_canSeePlayer(t,e,i){if(i>75)return!1;if(this.alertLevel<.5){const n=new w(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=e.clone().setY(0).normalize();if(n.dot(r)<.2)return!1}return this._hasLOS(t.eyePos)}_statePatrol(t,e){if(e&&this.alertLevel>.4){this.state=re.ALERT,this.stateTime=0,this.reactionTimer=this.mgr.reactionTime,this.mgr.alertNearby(this.pos,18);return}(!this.target||this.pos.distanceTo(new w(this.target.x,0,this.target.z))<1.5)&&(this.target=this.mgr.randomNavNear(this.pos,18)),this._navTo(this.target,this.def.speed*.5,t)}_stateAlert(t,e){this.lastSeenPos&&this._faceTo(this.lastSeenPos,t,6),this.reactionTimer<=0&&this._enterCombat(),!e&&this.stateTime>2.5&&(this.state=re.PATROL,this.alertLevel=.3)}_stateCombat(t,e,i,n){const r=this.def;if(this.lastSeenPos&&this._faceTo(e.eyePos,t,8),!i){if(this.def.grenades&&this.lastSeenPos&&this.stateTime<3&&this.grenadeCD<=0){const u=this.pos.distanceTo(this.lastSeenPos);u>8&&u<30&&Math.random()<.6?(this.mgr.throwEnemyGrenade(this.eyePos.clone(),this.lastSeenPos.clone()),this.grenadeCD=J(8,13)):this.grenadeCD=J(2,4)}this.lastSeenPos&&(this._navTo({x:this.lastSeenPos.x,z:this.lastSeenPos.z},r.speed,t),this.pos.distanceTo(this.lastSeenPos)<2&&this.stateTime>1&&(this.state=re.PATROL,this.alertLevel=.4));return}if(this.type==="rusher"){n>2.2?this._navTo({x:e.pos.x,z:e.pos.z},r.speed,t):this._meleeOrShoot(t,e,n),this._shoot(t,e,n);return}this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeDir*=-1,this.strafeTimer=J(.8,1.8));const a=St(r.range*.55,8,40),o=new w,c=new w().subVectors(e.pos,this.pos).setY(0).clone().normalize(),h=new w(-c.z,0,c.x);if(n>a+4?o.add(c):n<a-4&&o.addScaledVector(c,-1),o.addScaledVector(h,this.strafeDir*.8),this._steer(o,r.speed*.85,t),this.def.grenades&&n>9&&n<30&&this.grenadeCD<=0&&this.stateTime>1.5&&this._tryGrenade(e,n),Math.random()<r.coverBias*t*.8&&(this.health<this.maxHealth*.6||this.stateTime>3)){const u=this._findCover();u&&(this.coverPoint=u,this.state=re.COVER,this.stateTime=0)}this.type!=="heavy"&&Math.random()<.15*t&&this.stateTime>4&&(this.state=re.FLANK,this.stateTime=0,this.flankTarget=this._flankPoint(e)),this._shoot(t,e,n)}_stateCover(t,e,i,n){const r=this.coverPoint;if(!r){this.state=re.COMBAT;return}this.pos.distanceTo(r)<1.4?(this._faceTo(e.eyePos,t,8),i&&this._shoot(t,e,n),this.stateTime>J(2.5,4.5)&&(this.state=re.COMBAT,this.stateTime=0)):this._navTo({x:r.x,z:r.z},this.def.speed,t)}_stateFlank(t,e,i,n){if(!this.flankTarget||this.pos.distanceTo(new w(this.flankTarget.x,0,this.flankTarget.z))<2||this.stateTime>5){this.state=re.COMBAT,this.stateTime=0;return}this._navTo(this.flankTarget,this.def.speed,t),i&&this.stateTime>1&&this._shoot(t,e,n)}_flankPoint(t){const e=Math.random()>.5?1:-1,i=new w().subVectors(this.pos,t.pos).setY(0).normalize(),n=new w(-i.z,0,i.x).multiplyScalar(e*12),r=t.pos.clone().add(i.multiplyScalar(10)).add(n);return{x:St(r.x,-46,46),z:St(r.z,-46,46)}}_meleeOrShoot(t,e,i){i<2.4&&this.muzzleCooldown<=0&&(e.damage(this.def.damage*1.8,this.pos.clone()),this.muzzleCooldown=.9,this.player_meleeFlash=.15)}_updateLaser(t,e){if(!((this.charging||0)>.02&&e)){this.laser.material.opacity=ce(this.laser.material.opacity,0,12,.016);return}const n=this.eyePos.clone(),r=new w(Math.sin(this.yaw),0,Math.cos(this.yaw));n.addScaledVector(r,.6);const a=t.eyePos.clone(),o=this.laser.geometry.attributes.position.array;o[0]=n.x,o[1]=n.y,o[2]=n.z,o[3]=a.x,o[4]=a.y,o[5]=a.z,this.laser.geometry.attributes.position.needsUpdate=!0,this.laser.material.opacity=.25+this.charging*.7}_tryGrenade(t,e){return!this.def.grenades||this.grenadeCD>0||e<8||e>32?!1:Math.random()<.5?(this.mgr.throwEnemyGrenade(this.eyePos.clone(),t.pos.clone()),this.grenadeCD=J(7,12),!0):(this.grenadeCD=J(2,4),!1)}_shoot(t,e,i){const n=this.def;if(!(this.reactionTimer>0)&&!(i>n.range*1.2)){if(this.mgr.segmentBlocked(this.eyePos,e.eyePos)){n.sniper&&(this.charging=0);return}if(n.sniper){this._faceTo(e.eyePos,t,10),this.charging=Math.min(1,(this.charging||0)+t/n.chargeTime),this.charging>=1&&this.fireTimer<=0&&(this._fireBullet(e,i,!0),this.charging=0,this.fireTimer=n.fireRate/this.mgr.fireRateMul*J(.9,1.2)),this.fireTimer-=t;return}if(this.burstLeft>0){this.burstTimer-=t,this.burstTimer<=0&&(this._fireBullet(e,i),this.burstLeft--,this.burstTimer=n.burstGap);return}this.fireTimer-=t,this.fireTimer<=0&&(this.burstLeft=n.burst,this.burstTimer=0,this.fireTimer=n.fireRate/this.mgr.fireRateMul*J(.8,1.2))}}_fireBullet(t,e,i=!1){const n=this.def,r=n.accuracy*this.mgr.accuracyMul*(1-(this.suppressed||0)*.5),a=Math.hypot(t.vel.x,t.vel.z)>4?.18:0;let o=St(r-e/(n.range*2.5)-a,.05,.95);i&&(o=.97),this.muzzleCooldown=.05,mt.enemyShot();const l=n.sniper?16722458:16737860,c=this.eyePos.clone(),h=new w(Math.sin(this.yaw),0,Math.cos(this.yaw));c.addScaledVector(h,.5);const u=t.eyePos.clone();Math.random()>o?(u.add(new w(J(-2,2),J(-1,2),J(-2,2))),this.mgr.effects.tracer(c,u,l,n.sniper?.12:.05)):(this.mgr.effects.tracer(c,u,l,n.sniper?.12:.05),t.damage(n.damage*J(.85,1.15),this.pos.clone())),this.mgr.effects.muzzleFlashLight(c,n.sniper?16724770:16746564,n.sniper?4:2.5,.05),this.mgr.effects.muzzleFlash(c,h,n.boss?1.2:.7),this.muzzleFlashT=.05}_moveToward(t,e,i){const n=new w(t.x-this.pos.x,0,t.z-this.pos.z);n.lengthSq()<1e-4||(this._steer(n,e,i),this._faceMovement(i))}_navTo(t,e,i){const n=t.x,r=t.z;if(Math.hypot(n-this.pos.x,r-this.pos.z)<2.5){this._moveToward(t,e,i),this.path=null;return}this.repathTimer-=i;const o=!this.pathGoal||Math.hypot(this.pathGoal.x-n,this.pathGoal.z-r)>3;if(!this.path||this.pathIndex>=this.path.length||this.repathTimer<=0&&o){const c=this.mgr.findPath(this.pos,{x:n,z:r});this.path=c&&c.length?c:null,this.pathIndex=0,this.pathGoal={x:n,z:r},this.repathTimer=J(.4,.8)}if(!this.path){this._moveToward(t,e,i);return}let l=this.path[this.pathIndex];for(;l&&Math.hypot(l.x-this.pos.x,l.z-this.pos.z)<1.3;)this.pathIndex++,l=this.path[this.pathIndex];if(!l){this._moveToward(t,e,i);return}this._moveToward(l,e,i)}_steer(t,e,i){t=t.clone().setY(0),t.lengthSq()>0&&t.normalize();const n=this.mgr.avoidance(this);t.add(n),t.lengthSq()>0&&t.normalize();const r=t.multiplyScalar(e);this.vel.x=ce(this.vel.x,r.x,10,i),this.vel.z=ce(this.vel.z,r.z,10,i)}_faceMovement(t){if(Math.hypot(this.vel.x,this.vel.z)>.3){const e=Math.atan2(this.vel.x,this.vel.z);this.yaw=this._lerpAngle(this.yaw,e,t*8)}}_faceTo(t,e,i=6){const n=Math.atan2(t.x-this.pos.x,t.z-this.pos.z);this.yaw=this._lerpAngle(this.yaw,n,e*i)}_lerpAngle(t,e,i){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return t+n*St(i,0,1)}_integrate(t){const e=.35*this.scaleF;this.pos.x+=this.vel.x*t;for(const i of this.mgr.world.colliders)i.min.y>1.5||this.pos.x+e>i.min.x&&this.pos.x-e<i.max.x&&this.pos.z+e>i.min.z&&this.pos.z-e<i.max.z&&(this.vel.x>0?this.pos.x=i.min.x-e:this.vel.x<0&&(this.pos.x=i.max.x+e),this.vel.x=0);this.pos.z+=this.vel.z*t;for(const i of this.mgr.world.colliders)i.min.y>1.5||this.pos.x+e>i.min.x&&this.pos.x-e<i.max.x&&this.pos.z+e>i.min.z&&this.pos.z-e<i.max.z&&(this.vel.z>0?this.pos.z=i.min.z-e:this.vel.z<0&&(this.pos.z=i.max.z+e),this.vel.z=0);this.pos.x=St(this.pos.x,-47,47),this.pos.z=St(this.pos.z,-47,47),this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.yaw}_animate(t){const e=Math.hypot(this.vel.x,this.vel.z);this._walkPhase=(this._walkPhase||0)+t*e*2.2;const i=Math.sin(this._walkPhase)*St(e/4,0,1)*.5;this.legsMesh&&(this.legsMesh.rotation.x=i*.3),this.lArm&&(this.lArm.rotation.x=i),this.rArm&&(this.rArm.rotation.x=-i*.3);const r=this.hitFlash*.8;this.torsoMesh.material.emissive?.setRGB(r,0,0),this.legsMesh.material.emissive?.setRGB(r,0,0),this.health<this.maxHealth&&!this.dead&&(this.bar.visible=!0,this.barFg.scale.x=St(this.health/this.maxHealth,0,1),this.barFg.position.x=-(1-this.barFg.scale.x)*.34,this.bar.quaternion.copy(this.mgr.camera.quaternion))}_updateDeath(t){if(this.deathTime+=t,this.fallAngle<Math.PI/2){this.fallAngle=Math.min(Math.PI/2,this.fallAngle+t*4),this.group.rotation.x=-this.fallAngle*Math.sign(this.ragVel.z||1)*0;const e=new w(this.ragVel.z,0,-this.ragVel.x);this.group.setRotationFromAxisAngle(e,this.fallAngle),this.group.rotation.y=this.yaw}if(this.group.position.x+=this.ragVel.x*t*1.2*Math.max(0,1-this.deathTime),this.group.position.z+=this.ragVel.z*t*1.2*Math.max(0,1-this.deathTime),this.deathTime>4){const e=St((this.deathTime-4)/1.5,0,1);this.group.position.y=-e*1.5,this.group.traverse(i=>{i.isMesh&&i.material&&(i.material.transparent=!0,i.material.opacity=1-e)}),e>=1&&(this._remove=!0)}}dispose(){this.mgr.scene.remove(this.group),this.laser&&(this.mgr.scene.remove(this.laser),this.laser.geometry.dispose(),this.laser.material.dispose(),this.laser=null),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose?.(),t.material.map&&t.material.map.dispose?.(),t.material.dispose?.())})}}class Mm{constructor(t,e,i,n,r){this.scene=t,this.world=e,this.player=i,this.effects=n,this.camera=r,this.enemies=[],this.hitboxes=[],this.raycaster=new Kp,this.onKillCb=null,this.enemyGrenades=[],this.healthMul=1,this.accuracyMul=1,this.fireRateMul=1,this.reactionTime=.45}setDifficulty({healthMul:t,accuracyMul:e,fireRateMul:i,reactionTime:n}){this.healthMul=t,this.accuracyMul=e,this.fireRateMul=i,this.reactionTime=n}spawn(t,e){const i=new xm(this,t,e);return this.enemies.push(i),i}get alive(){return this.enemies.filter(t=>!t.dead).length}onKill(t){this.onKillCb?.(t)}_removeHitboxes(t){this.hitboxes=this.hitboxes.filter(e=>e.userData.enemy!==t)}alertNearby(t,e){for(const i of this.enemies)i.dead||i.pos.distanceTo(t)<e&&(i.state===re.IDLE||i.state===re.PATROL)&&(i.alertLevel=Math.max(i.alertLevel,.6),i.lastSeenPos=this.player.eyePos.clone(),i.state=re.ALERT,i.stateTime=0,i.reactionTimer=this.reactionTime*J(1,2))}alertAll(){for(const t of this.enemies)t.dead||(t.alertLevel=1,t.lastSeenPos=this.player.eyePos.clone(),(t.state===re.IDLE||t.state===re.PATROL)&&(t.state=re.COMBAT,t.reactionTimer=this.reactionTime))}findPath(t,e){return this.world.navGrid?this.world.navGrid.findPath(t,e):null}throwEnemyGrenade(t,e){const i=new _i(.12,8,6),n=new ee({color:3811866,emissive:16729088,emissiveIntensity:.4,roughness:.7}),r=new Ft(i,n);r.position.copy(t),this.scene.add(r);const a=new w(e.x-t.x,0,e.z-t.z),o=a.length(),l=St(o/12,.7,1.8),c=a.multiplyScalar(1/l);c.y=.5*18*l,this.enemyGrenades.push({mesh:r,vel:c,fuse:l+.5})}_updateEnemyGrenades(t){for(let e=this.enemyGrenades.length-1;e>=0;e--){const i=this.enemyGrenades[e];if(i.fuse-=t,i.vel.y-=18*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.position.y<.12&&(i.mesh.position.y=.12,i.vel.y=-i.vel.y*.4,i.vel.x*=.7,i.vel.z*=.7),i.mesh.material.emissiveIntensity=.4+Math.abs(Math.sin(i.fuse*18))*(i.fuse<.8?1.4:.3),i.fuse<=0){const n=i.mesh.position.clone();this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.effects.explosion(n),mt.explosion();const r=this.player.eyePos.distanceTo(n),a=6;r<a&&!this.player.dead&&!this.segmentBlocked(n,this.player.eyePos)?(this.player.damage(95*(1-r/a),n),this.player.shake(.6,.4)):r<a*1.6&&this.player.shake(.25,.25),this.enemyGrenades.splice(e,1)}}}randomNavNear(t,e){const i=this.world.navPoints.filter(n=>{const r=n.x-t.x,a=n.z-t.z;return r*r+a*a<e*e&&(n.y||0)<1});return i.length?am(i):{x:St(t.x+J(-10,10),-45,45),z:St(t.z+J(-10,10),-45,45)}}segmentBlocked(t,e){const i=lm.subVectors(e,t),n=i.length();if(n<.001)return!1;i.multiplyScalar(1/n);for(const r of this.world.colliders)if(!(r.max.y<.3)&&this._rayBox(t,i,r,n))return!0;return!1}_rayBox(t,e,i,n){let r=0,a=n;for(const o of["x","y","z"]){const l=1/(e[o]||1e-9);let c=(i.min[o]-t[o])*l,h=(i.max[o]-t[o])*l;if(c>h){const u=c;c=h,h=u}if(r=Math.max(r,c),a=Math.min(a,h),r>a)return!1}return r>=0&&r<=n}avoidance(t){const e=new w;for(const n of this.enemies){if(n===t||n.dead)continue;const r=t.pos.x-n.pos.x,a=t.pos.z-n.pos.z,o=r*r+a*a;if(o<2.2&&o>.001){const l=Math.sqrt(o);e.x+=r/l*(2.2-l)*.6,e.z+=a/l*(2.2-l)*.6}}if(new w((this.vel,0)),Math.hypot(t.vel.x,t.vel.z)>.2){const n=new w(t.vel.x,0,t.vel.z).normalize(),r=new w(t.pos.x+n.x*1.4,.8,t.pos.z+n.z*1.4);for(const a of this.world.colliders)if(!(a.min.y>1.5)&&r.x>a.min.x-.4&&r.x<a.max.x+.4&&r.z>a.min.z-.4&&r.z<a.max.z+.4){e.x+=-n.z*1.2,e.z+=n.x*1.2;break}}return e}resolveHit(t,e,i,n,r,a,o){this.raycaster.set(t,e),this.raycaster.far=i;const l=this.raycaster.intersectObjects(this.hitboxes,!1),c=this._raycastWorld(t,e,i);let h=l.length?l[0]:null;if(h&&c&&c.distance<h.distance&&(h=null),h){const u=h.object.userData,p=u.enemy,m=h.distance;let g=r;n&&(m>n[1]?g*=.4:m>n[0]&&(g*=ti(1,.4,(m-n[0])/(n[1]-n[0]))));const v=u.zone==="head";v&&(g*=a);const d=e.clone();return p.damage(g,u.zone,d),this.effects.blood(h.point.clone(),e.clone(),v?20:12),{point:h.point,normal:h.face?.normal||e.clone().negate(),enemy:p,zone:u.zone,damage:g,headshot:v,killed:p.dead,distance:m}}if(c){const u=c.material;return this.effects.sparks(c.point.clone(),c.normal.clone(),8,u==="metal"?16773312:16764006),this.effects.decal(c.point.clone(),c.normal.clone()),mt.impact(u),c.barrel&&c.barrel.explosive&&this._explodeBarrel(c.barrel),{point:c.point,normal:c.normal,world:!0,distance:c.distance}}return null}_raycastWorld(t,e,i){let n=null;for(const r of this.world.colliders){const a=this._rayBoxT(t,e,r,i);if(a!==null&&(!n||a<n.distance)){const o=t.clone().addScaledVector(e,a),l=this._boxNormal(r,o),c=r.max.y-r.min.y>4?"concrete":Math.abs(r.max.x-r.min.x)>3?"metal":"concrete";n={distance:a,point:o,normal:l,material:c}}}for(const r of this.world.barrels||[]){if(!r.mesh.parent)continue;const a=new pi().setFromObject(r.mesh),o=this._rayBoxT(t,e,a,i);if(o!==null&&(!n||o<n.distance)){const l=t.clone().addScaledVector(e,o);n={distance:o,point:l,normal:this._boxNormal(a,l),material:"metal",barrel:r}}}return n}_rayBoxT(t,e,i,n){let r=-1/0,a=1/0;for(const o of["x","y","z"]){const l=1/(e[o]||1e-9);let c=(i.min[o]-t[o])*l,h=(i.max[o]-t[o])*l;if(c>h){const u=c;c=h,h=u}if(r=Math.max(r,c),a=Math.min(a,h),r>a)return null}return r<0&&(r=a),r<0||r>n?null:r}_boxNormal(t,e){const i=new w;t.getCenter(i);const n=new w().subVectors(e,i),r=new w().subVectors(t.max,t.min).multiplyScalar(.5),a=n.x/(r.x||1),o=n.y/(r.y||1),l=n.z/(r.z||1),c=Math.abs(a),h=Math.abs(o),u=Math.abs(l);return c>=h&&c>=u?new w(Math.sign(a),0,0):h>=u?new w(0,Math.sign(o),0):new w(0,0,Math.sign(l))}_explodeBarrel(t){if(t._exploded)return;t._exploded=!0;const e=t.mesh.position.clone();this.effects.explosion(e),mt.explosion(),this.player.shake(.5,.35),this.explode(e,6,110),this.scene.remove(t.mesh)}explode(t,e,i){for(const r of this.enemies){if(r.dead)continue;const a=r.pos.distanceTo(t);if(a<e){const o=1-a/e,l=new w().subVectors(r.pos,t).setY(0).normalize();this.segmentBlocked(t,r.eyePos)||r.damage(i*o,"body",l)}}for(const r of this.world.barrels||[])r.explosive&&!r._exploded&&r.mesh.position.distanceTo(t)<e&&setTimeout(()=>this._explodeBarrel(r),80);const n=this.player.eyePos.distanceTo(t);n<e&&!this.player.dead&&this.player.damage(i*(1-n/e)*.8,t)}onShotFired(t,e,i){this.alertNearby(this.player.pos,30*(i.sound.level||.7))}update(t){for(let e=this.enemies.length-1;e>=0;e--){const i=this.enemies[e];i.update(t,this.player),i._remove&&(i.dispose(),this.enemies.splice(e,1))}this._updateEnemyGrenades(t)}clear(){for(const t of this.enemies)t.dispose();this.enemies.length=0,this.hitboxes.length=0;for(const t of this.enemyGrenades)this.scene.remove(t.mesh),t.mesh.geometry.dispose?.(),t.mesh.material.dispose?.();this.enemyGrenades.length=0}}const ae={rifle:{name:"VK-7 RIFLE",short:"RIFLE",slot:1,auto:!0,damage:24,headMult:2.1,rpm:620,mag:30,reserve:150,reloadTime:2.1,spread:.012,adsSpread:.003,moveSpreadMul:2.4,range:200,falloff:[40,110],recoil:{pitch:.012,yaw:.006,kick:.9,recover:9},pattern:"rising",adsFov:58,zoom:1,pellets:1,switchTime:.5,sound:{body:150,crackHz:1900,dur:.18,level:.85,q:.8},color:2895667,tracerColor:16773280},smg:{name:"WR-9 SMG",short:"SMG",slot:2,auto:!0,damage:17,headMult:1.8,rpm:900,mag:36,reserve:200,reloadTime:1.8,spread:.02,adsSpread:.008,moveSpreadMul:1.8,range:120,falloff:[22,60],recoil:{pitch:.009,yaw:.009,kick:.6,recover:11},pattern:"random",adsFov:64,zoom:1,pellets:1,switchTime:.4,sound:{body:130,crackHz:1600,dur:.12,level:.7,q:.7},color:3487805,tracerColor:16769152},shotgun:{name:"M3 BREACHER",short:"SHOTGUN",slot:3,auto:!1,damage:13,headMult:1.5,rpm:95,mag:7,reserve:56,reloadTime:.55,shellReload:!0,spread:.075,adsSpread:.05,moveSpreadMul:1.3,range:45,falloff:[8,26],recoil:{pitch:.04,yaw:.01,kick:2.4,recover:7},pattern:"random",adsFov:70,zoom:1,pellets:9,switchTime:.55,sound:{body:90,crackHz:1100,dur:.28,level:1,q:.6},color:3813160,tracerColor:16765040},sniper:{name:"LR-50 MARKSMAN",short:"SNIPER",slot:4,auto:!1,damage:95,headMult:2.6,rpm:50,mag:5,reserve:30,reloadTime:2.6,spread:.03,adsSpread:6e-4,moveSpreadMul:3.5,range:300,falloff:[120,260],recoil:{pitch:.06,yaw:.01,kick:3.2,recover:6},pattern:"rising",adsFov:26,zoom:2.4,pellets:1,switchTime:.7,scoped:!0,sound:{body:70,crackHz:2300,dur:.34,level:1,q:.9},color:2303531,tracerColor:10543359},pistol:{name:"P-11 SIDEARM",short:"PISTOL",slot:5,auto:!1,damage:28,headMult:2,rpm:320,mag:12,reserve:96,reloadTime:1.4,spread:.016,adsSpread:.005,moveSpreadMul:1.6,range:90,falloff:[18,50],recoil:{pitch:.02,yaw:.008,kick:1.1,recover:12},pattern:"random",adsFov:66,zoom:1,pellets:1,switchTime:.3,sound:{body:120,crackHz:1700,dur:.14,level:.7,q:.8},color:2764081,tracerColor:16769184}},ln={fuse:1.5,radius:7,damage:130,throwForce:16,count:3};class ym{constructor(t,e){this.key=t,this.def=e,this.group=new je,this._build(),this.muzzle=new he,this._muzzlePos.add(this.muzzle)}_mat(t,e=.6,i=.5,n=0){return new ee({color:t,metalness:e,roughness:i,emissive:n})}_part(t,e,i,n,r,a,o){const l=new Ft(new Se(t,e,i),o);return l.position.set(n,r,a),this.group.add(l),l}_build(){const t=this.def,e=this._mat(t.color,.6,.45),i=this._mat(1447963,.5,.6),n=this._mat(4475215,.8,.35);this._muzzlePos=new he,this.group.add(this._muzzlePos),this.key==="rifle"?(this._part(.07,.07,.7,0,0,-.35,e),this._part(.05,.05,.5,0,.01,-.75,i),this._part(.06,.14,.12,0,-.12,-.1,i),this._part(.06,.16,.08,0,-.16,-.32,n),this._part(.06,.05,.18,0,.06,-.2,i),this._muzzlePos.position.set(0,.01,-1)):this.key==="smg"?(this._part(.07,.08,.45,0,0,-.25,e),this._part(.045,.045,.32,0,.01,-.5,i),this._part(.06,.13,.1,0,-.11,-.05,i),this._part(.05,.2,.06,0,-.18,-.18,n),this._muzzlePos.position.set(0,.01,-.66)):this.key==="shotgun"?(this._part(.08,.09,.6,0,0,-.32,e),this._part(.06,.06,.55,0,-.02,-.6,i),this._part(.07,.07,.16,0,-.04,-.5,n),this._part(.07,.13,.1,0,-.1,-.05,i),this._muzzlePos.position.set(0,0,-.92)):this.key==="sniper"?(this._part(.07,.08,.85,0,0,-.45,e),this._part(.05,.05,.7,0,.01,-.95,i),this._part(.05,.05,.28,0,.1,-.35,i),this._part(.09,.09,.06,0,.1,-.22,n),this._part(.07,.14,.12,0,-.12,-.08,i),this._part(.06,.16,.08,0,-.16,-.3,n),this._muzzlePos.position.set(0,.01,-1.3)):this.key==="pistol"&&(this._part(.06,.09,.32,0,0,-.16,e),this._part(.04,.04,.14,0,.02,-.32,i),this._part(.055,.16,.09,0,-.13,-.02,i),this._muzzlePos.position.set(0,.02,-.4)),this.group.traverse(r=>{r.isMesh&&(r.castShadow=!1,r.receiveShadow=!1)})}}class Sm{constructor(t,e,i,n){this.engine=t,this.player=e,this.effects=i,this.combat=n,this.rng=om(12345),this.viewRoot=new je,t.viewCamera.add(this.viewRoot),t.viewScene.add(t.viewCamera),this.viewmodels={};for(const r of Object.keys(ae)){const a=new ym(r,ae[r]);a.group.visible=!1,this.viewRoot.add(a.group),this.viewmodels[r]=a}this.owned=["rifle","pistol"],this.handSpeed=1,this.ammo={};for(const r of Object.keys(ae))this.ammo[r]={mag:ae[r].mag,reserve:ae[r].reserve};this.grenades=ln.count,this.current="rifle",this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.shellsToLoad=0,this.switching=0,this.pendingWeapon=null,this.ads=0,this.adsTarget=0,this.spreadHeat=0,this.recoilStep=0,this.viewmodelPos=new w,this.viewmodelRot=new w,this.swayVel=new wt,this.projectiles=[],this._equip(this.current,!0)}get def(){return ae[this.current]}get state(){return this.ammo[this.current]}giveWeapon(t){this.owned.includes(t)||(this.owned.push(t),this.ammo[t]={mag:ae[t].mag,reserve:ae[t].reserve})}refillReserve(t,e){const i=this.ammo[t];i&&(i.reserve=Math.min(ae[t].reserve,i.reserve+e))}addGrenades(t){this.grenades=Math.min(9,this.grenades+t)}resetForRun(){this.owned=["rifle","pistol"];for(const t of Object.keys(ae))this.ammo[t]={mag:ae[t].mag,reserve:ae[t].reserve};this.grenades=ln.count,this.reloading=!1,this.switching=0,this.ads=0,this.adsTarget=0,this._equip("rifle",!0);for(const t of this.projectiles)this.effects.scene.remove(t.mesh);this.projectiles.length=0}_equip(t,e=!1){for(const i of Object.keys(this.viewmodels))this.viewmodels[i].group.visible=i===t;this.current=t,this.reloading=!1,this.shellsToLoad=0,this.recoilStep=0,this.spreadHeat=0,e&&(this.switching=0)}switchTo(t){t===this.current||!this.owned.includes(t)||this.switching>0||(this.pendingWeapon=t,this.switching=this.def.switchTime*this.handSpeed,mt.reloadClick(.8))}cycle(t){let i=(this.owned.indexOf(this.current)+t+this.owned.length)%this.owned.length;this.switchTo(this.owned[i])}startReload(){const t=this.state,e=this.def;this.reloading||t.mag>=e.mag||t.reserve<=0||(this.reloading=!0,e.shellReload?(this.shellsToLoad=Math.min(e.mag-t.mag,t.reserve),this.reloadTimer=e.reloadTime*this.handSpeed,mt.reloadClick(.7)):(this.reloadTimer=e.reloadTime*this.handSpeed,mt.reloadClick(.9),setTimeout(()=>mt.reloadClick(1.1),e.reloadTime*this.handSpeed*500)))}_finishReload(){const t=this.state,i=this.def.mag-t.mag,n=Math.min(i,t.reserve);t.mag+=n,t.reserve-=n,this.reloading=!1}canFire(){return!this.reloading&&this.switching<=0&&this.fireTimer<=0&&this.state.mag>0&&!this.player.dead&&!this.player.sprinting}tryFire(t){const e=this.def;if(!this.player.sprinting&&!(this.reloading||this.switching>0)&&!(!e.auto&&t!=="pressed")&&!(this.fireTimer>0)){if(this.state.mag<=0){t==="pressed"&&(mt.click(),this.startReload());return}this._fire()}}_fire(){const t=this.def,e=this.state;e.mag--,this.fireTimer=60/t.rpm;const i=this.engine.camera,n=this.player.eyePos.clone(),r=new w(0,0,-1).applyQuaternion(i.quaternion),a=Math.hypot(this.player.vel.x,this.player.vel.z)>1.5;let o=ti(t.spread,t.adsSpread,this.ads);a&&!this.player.onGround?o*=t.moveSpreadMul*1.3:a&&(o*=ti(t.moveSpreadMul,1.2,this.ads)),this.player.onGround||(o*=1.4),o*=1+this.spreadHeat*.5,this.spreadHeat=St(this.spreadHeat+.12,0,2.2);const l=t.pellets;for(let u=0;u<l;u++){const p=r.clone(),m=(this.rng()*2-1)*o,g=(this.rng()*2-1)*o,v=new w().crossVectors(r,new w(0,1,0)).normalize(),d=new w().crossVectors(v,r).normalize();p.addScaledVector(v,m).addScaledVector(d,g).normalize();const f=this.combat.resolveHit(n,p,t.range,t.falloff,t.damage,t.headMult,t.tracerColor),b=f?f.point:n.clone().addScaledVector(p,t.range),S=n.clone().addScaledVector(r,.6).addScaledVector(v,.15).add(new w(0,-.12,0));(u===0||l<=3||this.rng()>.5)&&this.effects.tracer(S,b,t.tracerColor)}this._applyRecoil();const c=new w().crossVectors(r,new w(0,1,0)).normalize(),h=n.clone().addScaledVector(r,.9).addScaledVector(c,.12).add(new w(0,-.12,0));this.effects.muzzleFlashLight(h,16764006,5,.05),this.effects.muzzleFlash(h,r,t.pellets>1?1.5:t.scoped?1.3:1),mt.gunshot(t.sound),mt.shell(),this._kick=Math.min(1.2,(this._kick||0)+t.recoil.kick*.5),this.player.shake(St(t.recoil.kick*.05,.03,.25),.12),this._muzzleFlashT=.04,this.combat.onShotFired?.(n,r,t),e.mag===0&&this.startReload()}_applyRecoil(){const t=this.def.recoil,e=ti(1,.55,this.ads);let i=t.pitch,n=(this.rng()*2-1)*t.yaw;if(this.def.pattern==="rising"){const r=Math.min(this.recoilStep,12);i=t.pitch*(1+r*.06),n=(Math.sin(r*1.3)*.5+(this.rng()*2-1)*.5)*t.yaw}this.recoilStep++,this.player.addRecoil(i*e,n*e)}throwGrenade(){if(this.grenades<=0||this.player.dead)return;this.grenades--;const t=this.engine.camera,e=this.player.eyePos.clone(),i=new w(0,0,-1).applyQuaternion(t.quaternion),n=new _i(.13,10,8),r=new ee({color:3095082,metalness:.3,roughness:.7,emissive:3346688,emissiveIntensity:.2}),a=new Ft(n,r);a.castShadow=!0,a.position.copy(e).addScaledVector(i,.5),this.effects.scene.add(a);const o=i.clone().multiplyScalar(ln.throwForce).add(new w(0,2.5,0));this.projectiles.push({mesh:a,vel:o,fuse:ln.fuse,bounced:0}),mt.reloadClick(.6)}_updateProjectiles(t){const e=this.combat.colliders;for(let i=this.projectiles.length-1;i>=0;i--){const n=this.projectiles[i];n.fuse-=t,n.vel.y-=18*t;const r=n.mesh.position.clone().addScaledVector(n.vel,t);r.y<.13&&(r.y=.13,n.vel.y=-n.vel.y*.45,n.vel.x*=.7,n.vel.z*=.7,n.bounced++);for(const a of e)if(r.x>a.min.x-.13&&r.x<a.max.x+.13&&r.y>a.min.y-.13&&r.y<a.max.y+.13&&r.z>a.min.z-.13&&r.z<a.max.z+.13){const o=Math.min(r.x-(a.min.x-.13),a.max.x+.13-r.x),l=Math.min(r.z-(a.min.z-.13),a.max.z+.13-r.z);o<l?(n.vel.x=-n.vel.x*.5,r.x=n.mesh.position.x):(n.vel.z=-n.vel.z*.5,r.z=n.mesh.position.z),n.vel.multiplyScalar(.8);break}n.mesh.position.copy(r),n.mesh.material.emissiveIntensity=.2+Math.abs(Math.sin(n.fuse*20))*(n.fuse<.6?1.5:.4),n.fuse<=0&&(this.effects.scene.remove(n.mesh),this.effects.explosion(n.mesh.position.clone()),mt.explosion(),this.player.shake(.6,.4),this.combat.explode(n.mesh.position.clone(),ln.radius,ln.damage),this.projectiles.splice(i,1))}}update(t,e,i){if(this.fireTimer-=t,this.spreadHeat=ce(this.spreadHeat,0,6,t),this.fireTimer<-1&&(this.recoilStep=ce(this.recoilStep,0,8,t)),this.switching>0&&(this.switching-=t,this.switching<=0&&this.pendingWeapon&&(this._equip(this.pendingWeapon),this.pendingWeapon=null,this.switching=this.def.switchTime*.5*this.handSpeed,mt.reloadClick(1))),this.reloading&&(this.reloadTimer-=t,this.def.shellReload?this.reloadTimer<=0&&this.shellsToLoad>0&&(this.state.mag++,this.state.reserve--,this.shellsToLoad--,mt.reloadClick(1.1),this.reloadTimer=this.def.reloadTime*this.handSpeed,(this.shellsToLoad<=0||this.state.reserve<=0)&&(this.reloading=!1)):this.reloadTimer<=0&&this._finishReload()),this.adsTarget=e.buttons.right&&!this.player.sprinting&&this.switching<=0?1:0,this.ads=ce(this.ads,this.adsTarget,16,t),this.player.adsBlend=this.ads,!i){e.buttons.left&&this.tryFire(e.mousePressed.left?"pressed":"held"),e.actionPressed("reload")&&this.startReload(),e.actionPressed("grenade")&&this.throwGrenade();for(const n of this.owned){const r=ae[n];e.actionPressed("weapon"+r.slot)&&this.switchTo(n)}e.wheel!==0&&this.cycle(e.wheel>0?1:-1)}this._updateProjectiles(t),this._updateViewmodel(t,e),this._updateFov(t)}_updateFov(t){const e=this.player._displayFov??this.engine.baseFov,i=this.def.adsFov,n=ti(e,i,this.ads);this.engine.camera.fov=ce(this.engine.camera.fov,n,18,t),this.engine.camera.updateProjectionMatrix(),this.def.scoped?this.viewRoot.visible=this.ads<.6:this.viewRoot.visible=!0}_updateViewmodel(t,e){const i=this.viewmodels[this.current];if(!i)return;const n=St(-e.mouse.dx*6e-4,-.04,.04),r=St(-e.mouse.dy*6e-4,-.04,.04);this.swayVel.x=ce(this.swayVel.x,n,8,t),this.swayVel.y=ce(this.swayVel.y,r,8,t);const a=new w(.18,-.18,-.42),o=this.def.scoped?new w(0,-.06,-.2):new w(0,-.105,-.28),l=a.clone().lerp(o,this.ads),c=Math.hypot(this.player.vel.x,this.player.vel.z),h=St(c/8,0,1)*(1-this.ads*.7);if(l.x+=Math.cos(this.player.bob)*.012*h+this.swayVel.x,l.y+=Math.abs(Math.sin(this.player.bob))*.012*h+this.swayVel.y,this.player.sprinting&&(l.x+=.1,l.y-=.08,l.z+=.05),this._kick=ce(this._kick||0,0,12,t),l.z+=this._kick*.06,this.reloading&&!this.def.shellReload){const u=1-St(this.reloadTimer/this.def.reloadTime,0,1),p=Math.sin(u*Math.PI);l.y-=p*.12,i.group.rotation.x=p*.5}else this.reloading&&this.def.shellReload?(l.y-=.04,i.group.rotation.x=ce(i.group.rotation.x,.15,10,t)):i.group.rotation.x=ce(i.group.rotation.x,0,12,t);if(this.switching>0){const u=Math.sin(St(this.switching/Math.max(.001,this.def.switchTime),0,1)*Math.PI);l.y-=u*.25}this.viewmodelPos.lerp(l,St(t*16,0,1)),i.group.position.copy(this.viewmodelPos),i.group.rotation.x+=this._kick*.12,i.group.rotation.z=-this.swayVel.x*2+this.player.lean*.05}}const bm=`
#ui-root, #ui-root * { font-family: var(--mono); }
.center { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }
.screen { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
  background:radial-gradient(ellipse at center, rgba(8,12,18,0.82), rgba(3,5,8,0.97));
  pointer-events:auto; z-index:20; }
.screen.scan::after { content:''; position:absolute; inset:0; pointer-events:none;
  background:repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 3px); }
.brand { font-size:clamp(48px,10vw,120px); font-weight:700; letter-spacing:0.14em; line-height:0.9;
  color:#eef3f7; text-shadow:0 0 30px rgba(75,210,255,0.25); }
.brand b { color:var(--accent); }
.sub { color:#8fa3b3; letter-spacing:0.5em; font-size:13px; margin-top:14px; text-transform:uppercase; }
.menu-card { width:min(620px,92vw); padding:38px 42px; background:rgba(10,14,20,0.72);
  border:1px solid rgba(120,160,190,0.18); border-radius:4px;
  box-shadow:0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04); backdrop-filter:blur(6px); }
.menu-title { font-size:26px; letter-spacing:0.3em; color:#cfe0ec; margin-bottom:6px; text-transform:uppercase; }
.menu-desc { color:#7f93a3; font-size:13px; margin-bottom:24px; line-height:1.6; }
.btn { display:flex; align-items:center; justify-content:space-between; gap:14px;
  width:100%; padding:15px 20px; margin:9px 0; cursor:pointer; color:#dbe6ee;
  background:linear-gradient(90deg, rgba(40,54,68,0.5), rgba(24,32,42,0.3));
  border:1px solid rgba(120,160,190,0.18); border-left:3px solid var(--accent2);
  transition:all .14s ease; letter-spacing:0.08em; font-size:15px; text-align:left; }
.btn:hover { background:linear-gradient(90deg, rgba(75,210,255,0.18), rgba(40,54,68,0.4));
  border-left-color:var(--accent); transform:translateX(4px); }
.btn small { color:#7f93a3; font-size:11px; letter-spacing:0.05em; }
.btn.primary { border-left-color:var(--accent); background:linear-gradient(90deg, rgba(255,75,62,0.16), rgba(40,30,30,0.3)); }
.btn.ghost { border-left-color:rgba(120,160,190,0.3); }
.row { display:flex; gap:12px; align-items:center; justify-content:space-between; margin:14px 0; }
.row label { color:#aebdc9; font-size:13px; letter-spacing:0.06em; flex:1; }
.row .val { color:var(--accent2); font-size:13px; min-width:54px; text-align:right; }
input[type=range]{ -webkit-appearance:none; flex:2; height:4px; background:#2a3744; border-radius:2px; outline:none; }
input[type=range]::-webkit-slider-thumb{ -webkit-appearance:none; width:16px; height:16px; border-radius:50%;
  background:var(--accent2); cursor:pointer; box-shadow:0 0 8px rgba(75,210,255,0.6); }
.toggle { width:46px; height:24px; border-radius:13px; background:#2a3744; position:relative; cursor:pointer; transition:.2s; flex:none; }
.toggle.on { background:var(--accent2); }
.toggle::after { content:''; position:absolute; top:3px; left:3px; width:18px; height:18px; border-radius:50%; background:#dbe6ee; transition:.2s; }
.toggle.on::after { left:25px; }
.seg { display:flex; gap:6px; }
.seg .opt { padding:7px 14px; border:1px solid rgba(120,160,190,0.2); cursor:pointer; font-size:12px; color:#8fa3b3; letter-spacing:0.08em; }
.seg .opt.on { background:var(--accent2); color:#06202a; border-color:var(--accent2); }
.hint { color:#6f8393; font-size:12px; text-align:center; margin-top:18px; letter-spacing:0.08em; }
.kbd { display:inline-block; padding:1px 7px; border:1px solid rgba(150,170,190,0.4); border-radius:3px; margin:0 2px; color:#cfe0ec; font-size:11px; }

/* HUD */
#hud { position:absolute; inset:0; pointer-events:none; z-index:5; }
#crosshair { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }
.ch-line { position:absolute; background:rgba(230,240,248,0.85); box-shadow:0 0 3px rgba(0,0,0,0.7); }
#hitmarker { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); opacity:0; }
.hm-line { position:absolute; width:11px; height:2px; background:#fff; box-shadow:0 0 4px #000; }
#vitals { position:absolute; left:34px; bottom:30px; width:280px; }
.vbar-wrap { margin-bottom:7px; }
.vbar-label { display:flex; justify-content:space-between; font-size:11px; color:#9fb1bf; letter-spacing:0.12em; margin-bottom:3px; }
.vbar { height:11px; background:rgba(10,16,22,0.7); border:1px solid rgba(120,160,190,0.25); position:relative; overflow:hidden; }
.vbar-fill { height:100%; width:100%; transition:width .12s linear; }
.vbar-fill.hp { background:linear-gradient(90deg,#ff4b3e,#ff8a3e); }
.vbar-fill.armor { background:linear-gradient(90deg,#4bd2ff,#4b8aff); }
.vbar-fill.stam { background:linear-gradient(90deg,#6cf06c,#bcf06c); height:4px; }
#ammo { position:absolute; right:38px; bottom:30px; text-align:right; }
#ammo .mag { font-size:54px; font-weight:700; color:#eef3f7; line-height:0.9; text-shadow:0 0 14px rgba(0,0,0,0.6); }
#ammo .mag .res { font-size:22px; color:#8fa3b3; font-weight:400; }
#ammo .wname { font-size:13px; color:var(--accent2); letter-spacing:0.22em; margin-top:6px; }
#ammo .nades { font-size:12px; color:#aebdc9; margin-top:4px; letter-spacing:0.1em; }
#ammo .tac { font-size:12px; color:var(--warn); margin-top:5px; letter-spacing:0.1em; }
#ammo .tac .kbd { font-size:10px; }
#ammo.empty .mag { color:var(--accent); }
#topbar { position:absolute; top:22px; left:50%; transform:translateX(-50%); text-align:center; }
#wave { font-size:13px; color:#9fb1bf; letter-spacing:0.3em; }
#wave b { color:var(--accent); }
#score { font-size:30px; color:#eef3f7; font-weight:700; letter-spacing:0.04em; }
#combo { font-size:14px; color:var(--warn); letter-spacing:0.1em; height:18px; transition:opacity .2s; }
#objective { position:absolute; top:22px; right:34px; text-align:right; max-width:320px; }
#objective .otitle { font-size:11px; color:#7f93a3; letter-spacing:0.2em; }
#objective .otext { font-size:15px; color:#cfe0ec; margin-top:4px; letter-spacing:0.04em; }
#objective .oprog { font-size:13px; color:var(--accent2); margin-top:3px; }
#minimap-wrap { position:absolute; top:20px; left:24px; }
#minimap { border:1px solid rgba(120,160,190,0.3); background:rgba(8,12,18,0.6); border-radius:3px; }
#compass { position:absolute; top:0; left:50%; transform:translateX(-50%); width:340px; height:26px; overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 18%,#000 82%,transparent); }
#compass-strip { position:absolute; top:4px; white-space:nowrap; font-size:12px; color:#aebdc9; letter-spacing:0.1em; }
#compass-strip .card { color:var(--accent2); font-weight:700; }
#killfeed { position:absolute; top:64px; right:34px; text-align:right; }
.kf { font-size:13px; color:#cfe0ec; margin:3px 0; opacity:1; transition:opacity .4s; letter-spacing:0.04em; }
.kf .x { color:var(--accent); margin:0 6px; }
.kf.head .x { color:var(--warn); }
#dmgnums { position:absolute; inset:0; overflow:hidden; }
.dnum { position:absolute; font-size:16px; font-weight:700; color:#ffe066; text-shadow:0 0 4px #000; transition:all .6s ease-out; }
.dnum.head { color:#ff5b4b; font-size:21px; }
#vignette { position:absolute; inset:0; pointer-events:none; box-shadow:inset 0 0 200px rgba(150,0,0,0); transition:box-shadow .25s; }
#lowhp { position:absolute; inset:0; pointer-events:none; opacity:0;
  background:radial-gradient(ellipse at center, transparent 40%, rgba(120,0,0,0.5) 100%); transition:opacity .3s; }
#dmgdir { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:260px; height:260px; }
.ddi { position:absolute; left:50%; top:50%; width:50px; height:50px; margin:-110px 0 0 -25px;
  transform-origin:25px 110px; opacity:0; transition:opacity .3s; }
.ddi svg { width:100%; height:100%; }
#flash { position:absolute; inset:0; background:#fff; opacity:0; pointer-events:none; transition:opacity .3s; }
#banner { position:absolute; left:50%; top:32%; transform:translate(-50%,-50%); text-align:center; opacity:0; transition:opacity .4s; }
#banner .bt { font-size:42px; font-weight:700; letter-spacing:0.16em; color:#eef3f7; text-shadow:0 0 24px rgba(255,75,62,0.4); }
#banner .bs { font-size:15px; color:var(--accent2); letter-spacing:0.3em; margin-top:8px; }
#hint { position:absolute; left:50%; bottom:120px; transform:translateX(-50%); text-align:center;
  color:#cfe0ec; font-size:14px; letter-spacing:0.08em; opacity:0; transition:opacity .2s; }
#hint .kbd { font-size:13px; }
#scoped { position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .12s; }
#bossbar { position:absolute; top:54px; left:50%; transform:translateX(-50%); width:min(520px,60vw); }
#bossbar .bosslabel { display:flex; justify-content:space-between; font-size:12px; letter-spacing:0.2em; color:var(--accent); margin-bottom:4px; }
#bossbar .bosstrack { height:9px; background:rgba(20,8,8,0.8); border:1px solid rgba(255,75,62,0.5); }
#bossbar .bossfill { height:100%; width:100%; background:linear-gradient(90deg,#ff7a1a,#ff2a1a); transition:width .15s; box-shadow:0 0 12px rgba(255,75,62,0.6); }
.stat-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px 28px; margin:20px 0; }
.stat { border-left:2px solid var(--accent2); padding-left:12px; }
.stat .k { font-size:11px; color:#7f93a3; letter-spacing:0.16em; }
.stat .v { font-size:24px; color:#eef3f7; font-weight:700; }
.buy-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:16px 0; }
.buy { padding:14px; border:1px solid rgba(120,160,190,0.2); border-left:3px solid var(--good); cursor:pointer; transition:.14s; }
.buy:hover { background:rgba(108,240,108,0.1); transform:translateY(-2px); }
.buy.cant { opacity:0.4; border-left-color:#555; cursor:not-allowed; }
.buy .bn { font-size:14px; color:#dbe6ee; letter-spacing:0.06em; }
.buy .bc { font-size:13px; color:var(--good); margin-top:4px; }
.buy .bd { font-size:11px; color:#7f93a3; margin-top:3px; }
#credits { font-size:15px; color:var(--good); letter-spacing:0.1em; }
.fadein { animation:fadein .5s ease; }
@keyframes fadein { from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:none;} }
.blink { animation:blink 1s steps(2) infinite; }
@keyframes blink { 50%{opacity:0.3;} }
`;class Em{constructor(t,e){this.root=t,this.game=e;const i=document.createElement("style");i.textContent=bm,document.head.appendChild(i),this.minimapSize=168,this._buildHUD(),this.killfeedItems=[],this._comboHideT=0,this._lastHp=100}_el(t,e,i,n){const r=document.createElement(t);return e&&(r.className=e),i!=null&&(r.innerHTML=i),(n||this.root).appendChild(r),r}_buildHUD(){const t=this._el("div","","",this.root);t.id="hud",t.classList.add("hidden"),this.hud=t;const e=this._el("div","","",t);e.id="crosshair",this.chLines=[];for(let p=0;p<4;p++){const m=this._el("div","ch-line","",e);this.chLines.push(m)}this.chDot=this._el("div","ch-line","",e),this.chDot.style.width="2px",this.chDot.style.height="2px",this.chDot.style.left="-1px",this.chDot.style.top="-1px";const i=this._el("div","","",t);i.id="hitmarker",this.hitmarker=i;for(const[p]of[["45deg"],["135deg"],["225deg"],["315deg"]]){const m=this._el("div","hm-line","",i);m.style.transform=`rotate(${p}) translate(8px,0)`}const n=this._el("div","","",t);n.id="vitals",n.innerHTML=`
      <div class="vbar-wrap">
        <div class="vbar-label"><span>HEALTH</span><span id="hpval">100</span></div>
        <div class="vbar"><div class="vbar-fill hp" id="hpfill"></div></div>
      </div>
      <div class="vbar-wrap" id="armorwrap" style="display:none">
        <div class="vbar-label"><span>ARMOR</span><span id="armorval">0</span></div>
        <div class="vbar"><div class="vbar-fill armor" id="armorfill"></div></div>
      </div>
      <div class="vbar" style="height:4px;border:none;background:transparent;margin-top:2px">
        <div class="vbar-fill stam" id="stamfill"></div>
      </div>`,this.hpval=n.querySelector("#hpval"),this.hpfill=n.querySelector("#hpfill"),this.armorwrap=n.querySelector("#armorwrap"),this.armorval=n.querySelector("#armorval"),this.armorfill=n.querySelector("#armorfill"),this.stamfill=n.querySelector("#stamfill");const r=this._el("div","","",t);r.id="ammo",r.innerHTML=`<div class="mag"><span id="magval">30</span><span class="res"> / <span id="resval">150</span></span></div>
      <div class="wname" id="wname">VK-7 RIFLE</div>
      <div class="nades" id="nades">⊕ FRAG ×3</div>
      <div class="tac hidden" id="tac">✦ AIRSTRIKE <span class="kbd">V</span> <span id="taccount">×1</span></div>`,this.ammoEl=r,this.magval=r.querySelector("#magval"),this.resval=r.querySelector("#resval"),this.wname=r.querySelector("#wname"),this.nades=r.querySelector("#nades"),this.tac=r.querySelector("#tac"),this.taccount=r.querySelector("#taccount");const a=this._el("div","","",t);a.id="topbar",a.innerHTML='<div id="wave"></div><div id="score">0</div><div id="combo"></div>',this.waveEl=a.querySelector("#wave"),this.scoreEl=a.querySelector("#score"),this.comboEl=a.querySelector("#combo");const o=this._el("div","","",t);o.id="objective",o.innerHTML='<div class="otitle">OBJECTIVE</div><div class="otext" id="otext">—</div><div class="oprog" id="oprog"></div>',this.otext=o.querySelector("#otext"),this.oprog=o.querySelector("#oprog");const l=this._el("div","","",t);l.id="minimap-wrap";const c=document.createElement("canvas");c.id="minimap",c.width=this.minimapSize,c.height=this.minimapSize,l.appendChild(c),this.miniCanvas=c,this.miniCtx=c.getContext("2d");const h=this._el("div","","",t);h.id="compass",this.compassStrip=this._el("div","","",h),this.compassStrip.id="compass-strip",this.killfeed=this._el("div","","",t),this.killfeed.id="killfeed",this.dmgnums=this._el("div","","",t),this.dmgnums.id="dmgnums",this.vignette=this._el("div","","",t),this.vignette.id="vignette",this.lowhp=this._el("div","","",t),this.lowhp.id="lowhp",this.dmgdir=this._el("div","","",t),this.dmgdir.id="dmgdir",this.flash=this._el("div","","",t),this.flash.id="flash",this.dirIndicators=[],this.scoped=this._el("div","","",t),this.scoped.id="scoped",this.scoped.innerHTML=`<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs><mask id="sc"><rect width="100" height="100" fill="white"/><circle cx="50" cy="50" r="26" fill="black"/></mask></defs>
      <rect width="100" height="100" fill="#000" mask="url(#sc)"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#000" stroke-width="1.2"/>
      <line x1="50" y1="24" x2="50" y2="76" stroke="#000" stroke-width="0.3"/>
      <line x1="24" y1="50" x2="76" y2="50" stroke="#000" stroke-width="0.3"/>
      <line x1="50" y1="40" x2="50" y2="60" stroke="#1a1a1a" stroke-width="0.5"/>
      <line x1="40" y1="50" x2="60" y2="50" stroke="#1a1a1a" stroke-width="0.5"/>
    </svg>`;const u=this._el("div","","",t);u.id="bossbar",u.classList.add("hidden"),u.innerHTML=`<div class="bosslabel"><span id="bossname">TITAN</span><span id="bosshp">100%</span></div>
      <div class="bosstrack"><div class="bossfill" id="bossfill"></div></div>`,this.bossbar=u,this.bossfill=u.querySelector("#bossfill"),this.bossname=u.querySelector("#bossname"),this.bosshp=u.querySelector("#bosshp"),this.banner=this._el("div","",'<div class="bt"></div><div class="bs"></div>',t),this.banner.id="banner",this.hint=this._el("div","","",t),this.hint.id="hint"}show(){this.hud.classList.remove("hidden")}hide(){this.hud.classList.add("hidden")}setCrosshair(t,e){const i=St(4+t*600,4,40),n=7,r=2;this.chDot.style.display=e?"none":"block";const a=[{x:0,y:-i-n,w:r,h:n},{x:0,y:i,w:r,h:n},{x:-i-n,y:0,w:n,h:r},{x:i,y:0,w:n,h:r}];this.chLines.forEach((o,l)=>{const c=a[l];o.style.display=e?"none":"block",o.style.width=c.w+"px",o.style.height=c.h+"px",o.style.left=c.x-c.w/2+"px",o.style.top=c.y-c.h/2+"px"})}hitmark(t,e){const i=this.hitmarker;i.style.transition="none",i.style.opacity="1",i.querySelectorAll(".hm-line").forEach(n=>{n.style.background=e?"#ff4b3e":t?"#ffcf4b":"#fff"}),i.offsetWidth,i.style.transition="opacity .3s ease",i.style.opacity="0"}damageNumber(t,e){if(!this.game.input.settings.showDamageNumbers)return;const i=this._el("div","dnum"+(e?" head":""),Math.round(t),this.dmgnums),n=50+(Math.random()*8-4),r=44+(Math.random()*6-3);i.style.left=n+"%",i.style.top=r+"%",requestAnimationFrame(()=>{i.style.top=r-8+"%",i.style.opacity="0"}),setTimeout(()=>i.remove(),650)}killFeed(t,e){const i=this._el("div","kf"+(e?" head":""),`OPERATOR <span class="x">${e?"◈":"✕"}</span> ${t}`,this.killfeed);setTimeout(()=>{i.style.opacity="0"},2600),setTimeout(()=>i.remove(),3100)}showDamageDir(t){const e=this._el("div","ddi",'<svg viewBox="0 0 50 50"><path d="M25 4 L36 22 L25 16 L14 22 Z" fill="#ff3b2e"/></svg>',this.dmgdir);e.style.transform=`rotate(${t}rad)`,requestAnimationFrame(()=>e.style.opacity="1"),setTimeout(()=>{e.style.opacity="0"},700),setTimeout(()=>e.remove(),1100)}banner_(t,e,i=1.6){this.banner.querySelector(".bt").textContent=t,this.banner.querySelector(".bs").textContent=e||"",this.banner.style.opacity="1",clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>{this.banner.style.opacity="0"},i*1e3)}showHint(t){t?(this.hint.innerHTML=t,this.hint.style.opacity="1"):this.hint.style.opacity="0"}flashScreen(t=.6){this.flash.style.transition="none",this.flash.style.opacity=t,this.flash.offsetWidth,this.flash.style.transition="opacity .4s",this.flash.style.opacity="0"}update(t,e){const i=St(e.health/e.maxHealth,0,1);if(this.hpfill.style.width=i*100+"%",this.hpval.textContent=Math.ceil(e.health),e.armor>0?(this.armorwrap.style.display="block",this.armorfill.style.width=St(e.armor/e.maxArmor,0,1)*100+"%",this.armorval.textContent=Math.ceil(e.armor)):this.armorwrap.style.display="none",this.stamfill.style.width=St(e.stamina/100,0,1)*100+"%",this.lowhp.style.opacity=i<.35?(.35-i)/.35:0,this.magval.textContent=e.mag,this.resval.textContent=e.reserve,this.wname.textContent=e.weaponName,this.nades.textContent=`⊕ FRAG ×${e.grenades}`,this.ammoEl.classList.toggle("empty",e.mag===0),e.airstrike>0?(this.tac.classList.remove("hidden"),this.tac.classList.add("blink"),this.taccount.textContent="×"+e.airstrike):(this.tac.classList.add("hidden"),this.tac.classList.remove("blink")),this.scoreEl.textContent=e.score.toLocaleString(),this.waveEl.innerHTML=e.waveText,e.combo>1?(this.comboEl.style.opacity="1",this.comboEl.textContent=`COMBO ×${e.combo}`):this.comboEl.style.opacity="0",this.otext.textContent=e.objective||"—",this.oprog.textContent=e.objectiveProg||"",this.setCrosshair(e.crosshairSpread,e.scoped&&e.ads>.6),this.scoped.style.opacity=e.scoped&&e.ads>.6?1:0,e.boss&&e.boss.alive){this.bossbar.classList.remove("hidden");const n=St(e.boss.hp/e.boss.maxHp,0,1);this.bossfill.style.width=n*100+"%",this.bossname.textContent=e.boss.name,this.bosshp.textContent=Math.ceil(n*100)+"%"}else this.bossbar.classList.add("hidden");this._updateCompass(e.yaw),this._drawMinimap(e)}_updateCompass(t){let e=(-t*180/Math.PI%360+360)%360;const i=["N","30","60","E","120","150","S","210","240","W","300","330"];let n="";const r=340/120;for(let a=-180;a<=180;a+=30){const o=(e+a+360)%360,l=Math.round(o/30)%12,c=i[l],h=["N","E","S","W"].includes(c);n+=`<span style="display:inline-block;width:${30*r}px;text-align:center" class="${h?"card":""}">${h?c:"·"}</span>`}this.compassStrip.innerHTML=n,this.compassStrip.style.left=170-340/2+"px"}_drawMinimap(t){const e=this.miniCtx,i=this.minimapSize,n=i/2,a=n/56;e.clearRect(0,0,i,i),e.save(),e.translate(n,n),e.rotate(t.yaw),e.fillStyle="rgba(120,150,175,0.22)";for(const o of t.colliders){if(o.max.y<.5)continue;const l=(o.min.x+o.max.x)/2-t.px,c=(o.min.z+o.max.z)/2-t.pz,h=(o.max.x-o.min.x)*a,u=(o.max.z-o.min.z)*a;e.fillRect(l*a-h/2,c*a-u/2,h,u)}if(t.objMarker)for(const o of t.objMarker){const l=(o.pos.x-t.px)*a,c=(o.pos.z-t.pz)*a;e.beginPath(),e.arc(l,c,o.r*a,0,Math.PI*2),e.strokeStyle=o.color,e.lineWidth=1.5,e.stroke()}for(const o of t.enemies){const l=(o.x-t.px)*a,c=(o.z-t.pz)*a;l*l+c*c>n*n||(e.fillStyle=o.alert?"#ff4b3e":"#ff9b3e",e.beginPath(),e.arc(l,c,3,0,Math.PI*2),e.fill())}e.restore(),e.fillStyle="#4bd2ff",e.beginPath(),e.moveTo(n,n-6),e.lineTo(n-4,n+5),e.lineTo(n+4,n+5),e.closePath(),e.fill(),e.strokeStyle="rgba(120,160,190,0.3)",e.lineWidth=1,e.beginPath(),e.arc(n,n,n-1,0,Math.PI*2),e.stroke()}setVignette(t){this.vignette.style.boxShadow=`inset 0 0 200px rgba(150,0,0,${t})`}}class Tm{constructor(t,e){this.root=t,this.game=e,this.input=e.input,this.current=null,this.remapping=null,window.addEventListener("keydown",i=>this._captureRemap(i),!0)}_screen(t=!0){const e=document.createElement("div");return e.className="screen"+(t?" scan":""),this.root.appendChild(e),e}clear(){this.current&&(this.current.remove(),this.current=null)}_btn(t,e,i,n,r=""){const a=document.createElement("div");return a.className="btn "+r,a.innerHTML=`<span>${e}</span>${i?`<small>${i}</small>`:""}`,a.onclick=()=>{mt.click(),n()},a.onmouseenter=()=>mt.click(),t.appendChild(a),a}showMain(){this.clear();const t=this._screen();t.innerHTML=`
      <div style="text-align:center">
        <div class="brand fadein">BREACH<b>POINT</b></div>
        <div class="sub fadein">GHOST DIVISION · ZERO HOUR</div>
        <div class="menu-card fadein" style="margin-top:40px; text-align:left"></div>
        <div class="hint fadein">An original browser FPS · Three.js · Click a mode, then click to lock the mouse</div>
      </div>`;const e=t.querySelector(".menu-card");this._btn(e,"SURVIVAL","Endless escalating waves",()=>this.showLoadout("survival"),"primary"),this._btn(e,"OPERATION","Secure & hold all sectors",()=>this.showLoadout("operation")),this._btn(e,"SETTINGS","Sensitivity · audio · graphics · controls",()=>this.showSettings("main")),this._btn(e,"HOW TO PLAY","Controls & briefing",()=>this.showHelp()),this.current=t}showLoadout(t){this.clear();const e=this._screen(),i=this.game.loadout||(this.game.loadout={primary:"rifle",perk:null}),n=document.createElement("div");n.className="menu-card fadein",n.style.maxWidth="680px",n.innerHTML=`<div class="menu-title">LOADOUT</div>
      <div class="menu-desc">${t==="survival"?"SURVIVAL — hold against endless waves.":"OPERATION — secure all sectors."} Choose your kit, operator.</div>`,e.appendChild(n);const r=m=>{const g=document.createElement("div");return g.style.cssText="margin:14px 0 8px;color:#8fa3b3;letter-spacing:0.2em;font-size:12px",g.textContent=m,n.appendChild(g),g};r("PRIMARY WEAPON");const a=document.createElement("div");a.className="buy-grid",n.appendChild(a);const o=()=>{a.innerHTML="";for(const m of Bl){const g=ae[m],v=i.primary===m,d=document.createElement("div");d.className="buy",d.style.borderLeftColor=v?"var(--accent)":"rgba(120,160,190,0.3)",v&&(d.style.background="rgba(255,75,62,0.12)"),d.innerHTML=`<div class="bn">${g.name}${v?" ✓":""}</div><div class="bd">${g.auto?"Auto":"Semi"} · ${g.rpm} RPM · ${g.mag} rds · ${g.pellets>1?g.pellets+" pellets":"dmg "+g.damage}</div>`,d.onclick=()=>{i.primary=m,mt.click(),o()},a.appendChild(d)}};o(),r("PERK");const l=document.createElement("div");l.className="buy-grid",n.appendChild(l);const c=()=>{l.innerHTML="";const m=[["none",{name:"NO PERK",desc:"Run clean"}],...Object.entries(Am)];for(const[g,v]of m){const d=g==="none"?null:g,f=i.perk===d,b=document.createElement("div");b.className="buy",b.style.borderLeftColor=f?"var(--good)":"rgba(120,160,190,0.3)",f&&(b.style.background="rgba(108,240,108,0.1)"),b.innerHTML=`<div class="bn">${v.name}${f?" ✓":""}</div><div class="bd">${v.desc}</div>`,b.onclick=()=>{i.perk=d,mt.click(),c()},l.appendChild(b)}};c();const h=document.createElement("div");h.style.cssText="display:flex;gap:10px;margin-top:18px";const u=document.createElement("div");u.className="btn ghost",u.style.flex="1",u.innerHTML="<span>◂ BACK</span>",u.onclick=()=>{mt.click(),this.showMain()};const p=document.createElement("div");p.className="btn primary",p.style.flex="2",p.innerHTML="<span>DEPLOY ▸</span><small>Begin the operation</small>",p.onclick=()=>{mt.click(),this.game.startMode(t)},h.appendChild(u),h.appendChild(p),n.appendChild(h),this.current=e}showHelp(){this.clear();const t=this._screen();t.innerHTML=`
      <div class="menu-card fadein" style="max-width:680px">
        <div class="menu-title">FIELD MANUAL</div>
        <div class="menu-desc">You are a lone operator. Hostiles will detect, flank, and take cover — keep moving, use cover, aim for the head.</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 28px;font-size:13px;color:#bccad6;line-height:2">
          <div><span class="kbd">W A S D</span> Move</div>
          <div><span class="kbd">Shift</span> Sprint</div>
          <div><span class="kbd">C</span> Crouch / Slide</div>
          <div><span class="kbd">Space</span> Jump</div>
          <div><span class="kbd">Q</span> / <span class="kbd">E</span> Lean</div>
          <div><span class="kbd">Mouse</span> Look</div>
          <div><span class="kbd">LMB</span> Fire</div>
          <div><span class="kbd">RMB</span> Aim (ADS)</div>
          <div><span class="kbd">R</span> Reload</div>
          <div><span class="kbd">G</span> Grenade</div>
          <div><span class="kbd">1-5</span> / Wheel Switch weapon</div>
          <div><span class="kbd">F</span> Interact / Buy</div>
          <div><span class="kbd">Esc</span> Pause</div>
          <div><span class="kbd">M</span> Mute</div>
        </div>
        <div class="menu-desc" style="margin-top:18px">SURVIVAL: survive waves, earn credits on kills, spend them between waves on weapons, armor, ammo and upgrades.
        OPERATION: capture and hold every sector marked on your map to win.</div>
      </div>`;const e=document.createElement("div");e.style.textAlign="center",t.appendChild(e),this._btn(t.querySelector(".menu-card"),"◂ BACK","",()=>this.showMain(),"ghost"),this.current=t}showSettings(t="main"){this.clear();const e=this.input.settings,i=this._screen(),n=document.createElement("div");n.className="menu-card fadein",n.style.maxWidth="680px",n.innerHTML='<div class="menu-title">SETTINGS</div>',i.appendChild(n);const r=(v,d,f,b,S,T)=>{const U=document.createElement("div");U.className="row",U.innerHTML=`<label>${v}</label>`;const R=document.createElement("input");R.type="range",R.min=f,R.max=b,R.step=S,R.value=e[d];const A=document.createElement("span");A.className="val",A.textContent=T(e[d]),R.oninput=()=>{e[d]=parseFloat(R.value),A.textContent=T(e[d]),this.game.applySettings(),this.input.saveSettings()},U.appendChild(R),U.appendChild(A),n.appendChild(U)};r("Mouse Sensitivity","sensitivity",.1,3,.05,v=>v.toFixed(2)),r("Field of View","fov",60,110,1,v=>v+"°"),r("Master Volume","masterVol",0,1,.05,v=>Math.round(v*100)+"%"),r("SFX Volume","sfxVol",0,1,.05,v=>Math.round(v*100)+"%"),r("Music Volume","musicVol",0,1,.05,v=>Math.round(v*100)+"%"),r("View Bob","bobAmount",0,1.5,.05,v=>Math.round(v*100)+"%");const a=(v,d)=>{const f=document.createElement("div");f.className="row",f.innerHTML=`<label>${v}</label>`;const b=document.createElement("div");b.className="toggle"+(e[d]?" on":""),b.onclick=()=>{e[d]=!e[d],b.classList.toggle("on",e[d]),this.game.applySettings(),this.input.saveSettings(),mt.click()},f.appendChild(b),n.appendChild(f)};a("Invert Look Y","invertY"),a("Damage Numbers","showDamageNumbers");const o=document.createElement("div");o.className="row",o.innerHTML="<label>Graphics Quality</label>";const l=document.createElement("div");l.className="seg",["low","medium","high"].forEach(v=>{const d=document.createElement("div");d.className="opt"+(e.quality===v?" on":""),d.textContent=v.toUpperCase(),d.onclick=()=>{e.quality=v,l.querySelectorAll(".opt").forEach(f=>f.classList.remove("on")),d.classList.add("on"),this.game.applySettings(),this.input.saveSettings(),mt.click()},l.appendChild(d)}),o.appendChild(l),n.appendChild(o);const c=document.createElement("div");c.style.cssText="margin:22px 0 10px;color:#8fa3b3;letter-spacing:0.2em;font-size:12px",c.textContent="CONTROLS — click a key to rebind",n.appendChild(c);const h=document.createElement("div");h.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:6px 20px";const u={forward:"Forward",back:"Back",left:"Left",right:"Right",jump:"Jump",sprint:"Sprint",crouch:"Crouch",leanLeft:"Lean L",leanRight:"Lean R",reload:"Reload",grenade:"Grenade",interact:"Interact"};this.remapBtns={};for(const v of Object.keys(u)){const d=document.createElement("div");d.style.cssText="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#aebdc9";const f=document.createElement("span");f.className="kbd",f.style.cursor="pointer",f.style.minWidth="60px",f.style.textAlign="center",f.textContent=this._keyName(this.input.bindings[v]),f.onclick=()=>this._beginRemap(v,f),this.remapBtns[v]=f,d.innerHTML=`<span>${u[v]}</span>`,d.appendChild(f),h.appendChild(d)}n.appendChild(h);const p=document.createElement("div");p.style.cssText="display:flex;gap:10px;margin-top:20px";const m=document.createElement("div");m.className="btn ghost",m.style.flex="1",m.innerHTML="<span>◂ BACK</span>",m.onclick=()=>{mt.click(),t==="pause"?this.showPause():this.showMain()};const g=document.createElement("div");g.className="btn ghost",g.style.flex="1",g.innerHTML="<span>RESET CONTROLS</span>",g.onclick=()=>{mt.click(),this.input.resetBindings();for(const v of Object.keys(this.remapBtns))this.remapBtns[v].textContent=this._keyName(this.input.bindings[v])},p.appendChild(m),p.appendChild(g),n.appendChild(p),this.current=i}_keyName(t){return t.replace("Key","").replace("Digit","").replace("Left"," L").replace("Right"," R").replace("Arrow","").replace("Space","SPACE").replace("Control","CTRL").replace("Shift","SHIFT")}_beginRemap(t,e){this.remapping={action:t,el:e},e.textContent="...",e.classList.add("blink")}_captureRemap(t){this.remapping&&(t.preventDefault(),t.stopPropagation(),t.code!=="Escape"&&(this.input.bindings[this.remapping.action]=t.code,this.input.saveBindings()),this.remapping.el.classList.remove("blink"),this.remapping.el.textContent=this._keyName(this.input.bindings[this.remapping.action]),this.remapping=null)}showPause(){this.clear();const t=this._screen(),e=document.createElement("div");e.className="menu-card fadein",e.innerHTML=`<div class="menu-title">PAUSED</div><div class="menu-desc">${this.game.modeName} · Wave ${this.game.wave}</div>`,t.appendChild(e),this._btn(e,"RESUME","Back to the fight",()=>this.game.resume(),"primary"),this._btn(e,"SETTINGS","",()=>this.showSettings("pause")),this._btn(e,"RESTART","Restart this mode",()=>this.game.restart()),this._btn(e,"ABANDON","Return to main menu",()=>this.game.quitToMenu(),"ghost"),this.current=t}showResults(t,e){this.clear();const i=this._screen(),n=document.createElement("div");n.className="menu-card fadein",n.style.maxWidth="620px";const r=t.shots>0?Math.round(t.hits/t.shots*100):0;n.innerHTML=`
      <div class="menu-title" style="color:${e?"var(--good)":"var(--accent)"}">${e?"SECTOR SECURED":"OPERATOR DOWN"}</div>
      <div class="menu-desc">${e?"All objectives neutralized. Outstanding work.":"You held the line as long as you could."}</div>
      <div class="stat-grid">
        <div class="stat"><div class="k">SCORE</div><div class="v">${t.score.toLocaleString()}</div></div>
        <div class="stat"><div class="k">WAVE REACHED</div><div class="v">${t.wave}</div></div>
        <div class="stat"><div class="k">KILLS</div><div class="v">${t.kills}</div></div>
        <div class="stat"><div class="k">HEADSHOTS</div><div class="v">${t.headshots}</div></div>
        <div class="stat"><div class="k">ACCURACY</div><div class="v">${r}%</div></div>
        <div class="stat"><div class="k">TIME SURVIVED</div><div class="v">${wm(t.time)}</div></div>
        <div class="stat"><div class="k">BEST COMBO</div><div class="v">×${t.bestCombo}</div></div>
        <div class="stat"><div class="k">LEVEL</div><div class="v">${t.level}</div></div>
      </div>`,i.appendChild(n),this._btn(n,"REDEPLOY","Run it back",()=>this.game.restart(),"primary"),this._btn(n,"MAIN MENU","",()=>this.game.quitToMenu(),"ghost"),this.current=i}showBuy(t){this.clear();const e=this._screen(),i=this.game,n=document.createElement("div");n.className="menu-card fadein",n.style.maxWidth="720px",n.innerHTML=`<div class="menu-title">ARMORY</div>
      <div class="menu-desc">Wave ${i.wave} cleared. Spend credits, then redeploy. <span id="credits">⛁ ${i.credits} CR</span></div>`,e.appendChild(n);const r=document.createElement("div");r.className="buy-grid",n.appendChild(r);const a=()=>n.querySelector("#credits");i.getShopItems();const o=()=>{r.innerHTML="",a().textContent=`⛁ ${i.credits} CR`;for(const c of i.getShopItems()){const h=i.credits>=c.cost&&!c.owned,u=document.createElement("div");u.className="buy"+(h?"":" cant"),u.innerHTML=`<div class="bn">${c.name}</div><div class="bc">${c.owned?"OWNED":"⛁ "+c.cost+" CR"}</div><div class="bd">${c.desc}</div>`,h&&(u.onclick=()=>{i.buy(c.id)?(mt.pickup(),o()):mt.click()}),r.appendChild(u)}};o();const l=document.createElement("div");l.className="btn primary",l.style.marginTop="14px",l.innerHTML="<span>REDEPLOY ▸</span><small>Start next wave</small>",l.onclick=()=>{mt.click(),t()},n.appendChild(l),this.current=e}}function wm(s){const t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${e.toString().padStart(2,"0")}`}const xe={MENU:"menu",PLAYING:"playing",PAUSED:"paused",BUY:"buy",RESULTS:"results"},Am={juggernaut:{name:"JUGGERNAUT",desc:"+40 max health, tougher armor"},lightweight:{name:"LIGHTWEIGHT",desc:"Move & sprint faster, longer slides"},fasthands:{name:"FAST HANDS",desc:"Faster reloads & weapon swaps"},scavenger:{name:"SCAVENGER",desc:"Larger ammo reserves & better pickups"}},Bl=["rifle","smg","shotgun"];class Rm{constructor(t,e){this.engine=t,this.input=e,this.scene=t.scene,this.state=xe.MENU,this.mode=null,this.uiRoot=document.getElementById("ui-root"),this.world=new fm(this.scene),this.effects=new gm(this.scene),this.player=new mm(t,e,this.world),this.enemies=new Mm(this.scene,this.world,this.player,this.effects,t.camera),this._pendingPelletHit=0;const i={colliders:this.world.colliders,resolveHit:(n,r,a,o,l,c,h)=>{const u=this.enemies.resolveHit(n,r,a,o,l,c,h);return u&&u.enemy&&(this._pendingPelletHit++,u.headshot&&this.stats.headshots++,this.hud.hitmark(u.headshot,u.killed),this.hud.damageNumber(u.damage,u.headshot),mt.hitmarker(u.headshot)),u},explode:(n,r,a)=>this.enemies.explode(n,r,a),onShotFired:(n,r,a)=>{this.stats.shots++,this._pendingPelletHit>0&&this.stats.hits++,this._pendingPelletHit=0,this.enemies.onShotFired(n,r,a)}};this.weapons=new Sm(t,this.player,this.effects,i),this.enemies.onKillCb=n=>this._onKill(n),this.hud=new Em(this.uiRoot,this),this.menus=new Tm(this.uiRoot,this),this._resetRunState(),this.loadout={primary:"rifle",perk:null},this.applySettings()}_resetRunState(){this.score=0,this.credits=0,this.xp=0,this.level=1,this.wave=0,this.combo=1,this.comboTimer=0,this.bestCombo=1,this.runTime=0,this.alarmActive=!1,this.stats={score:0,kills:0,headshots:0,shots:0,hits:0,time:0,wave:0,bestCombo:1,level:1},this._spawnQueue=[],this._spawnTimer=0,this._waveActive=!1,this._betweenWaves=!1,this.objectives=[],this.boss=null,this.upgrades={health:0,regen:0,speed:0,ammo:0},this.killsTowardStrike=0,this.airstrikeCharges=0,this._strikeBlasts=[],this._clearPickups()}_grantStrikeProgress(){this.killsTowardStrike++,this.killsTowardStrike>=6&&(this.killsTowardStrike=0,this.airstrikeCharges=Math.min(3,this.airstrikeCharges+1),this.hud.banner_("AIRSTRIKE READY","PRESS [V] TO DEPLOY",1.8),mt.waveStinger(!0))}callAirstrike(){if(this.airstrikeCharges<=0||this.player.dead)return;this.airstrikeCharges--;const t=this.enemies.enemies.filter(n=>!n.dead);let e,i;if(t.length)e=t.reduce((n,r)=>n+r.pos.x,0)/t.length,i=t.reduce((n,r)=>n+r.pos.z,0)/t.length;else{const n=new w(0,0,-1).applyQuaternion(this.engine.camera.quaternion);e=this.player.pos.x+n.x*18,i=this.player.pos.z+n.z*18}this.hud.banner_("STRIKE INBOUND","",1.4),mt.alarm();for(let n=0;n<9;n++){const r=J(0,Math.PI*2),a=J(0,9);this._strikeBlasts.push({x:St(e+Math.cos(r)*a,-46,46),z:St(i+Math.sin(r)*a,-46,46),t:.5+n*.18+J(-.05,.05)})}}_updateStrikes(t){if(this._strikeBlasts.length)for(let e=this._strikeBlasts.length-1;e>=0;e--){const i=this._strikeBlasts[e];if(i.t-=t,i.t<=0){const n=new w(i.x,.4,i.z);this.effects.explosion(n),mt.explosion(),this.enemies.explode(n,8,160);const r=this.player.eyePos.distanceTo(n);this.player.shake(St(1.2-r/30,.15,.8),.4),this._strikeBlasts.splice(e,1)}}}get modeName(){return this.mode==="survival"?"SURVIVAL":"OPERATION"}applySettings(){const t=this.input.settings;mt.setMaster(t.masterVol),mt.setSfx(t.sfxVol),mt.setMusic(t.musicVol),this.engine.setFov(t.fov),this.engine.setQuality(t.quality)}startMode(t){mt.init(),this.mode=t,this._resetRunState(),this.player.reset(),this.weapons.resetForRun(),this.enemies.clear(),this.effects.clearTransient(),this._applyUpgrades(),this._applyLoadout(),this.state=xe.PLAYING,this._wasLocked=!1,this._lockGrace=.5,this.menus.clear(),this.hud.show(),mt.startMusic(.2),t==="survival"?this._startSurvival():this._startOperation(),this._requestLock()}_requestLock(){this.input.requestLock()}pause(){this.state===xe.PLAYING&&(this.state=xe.PAUSED,this.input.exitLock(),this.menus.showPause(),mt.setIntensity(.05))}resume(){this.state=xe.PLAYING,this._wasLocked=!1,this._lockGrace=.5,this.menus.clear(),this._requestLock()}restart(){this.menus.clear(),this.startMode(this.mode)}quitToMenu(){this.state=xe.MENU,this.input.exitLock(),this.enemies.clear(),this.effects.clearTransient(),this.hud.hide(),mt.stopMusic(),this.menus.showMain()}_gameOver(t){this.state!==xe.RESULTS&&(this.state=xe.RESULTS,this.input.exitLock(),this.stats.score=this.score,this.stats.time=this.runTime,this.stats.wave=this.wave,this.stats.bestCombo=this.bestCombo,this.stats.level=this.level,mt.stopMusic(),mt.waveStinger(t),setTimeout(()=>this.menus.showResults(this.stats,t),t?800:1400))}_startSurvival(){this.wave=0,this.hud.banner_("SURVIVAL","HOLD THE LINE",2.2),this._nextWave()}_nextWave(){this.wave++,this.stats.wave=this.wave,this._betweenWaves=!1,this._waveActive=!0,this.alarmActive=!0;const t=this.wave;this.enemies.setDifficulty({healthMul:1+t*.12,accuracyMul:St(.7+t*.04,.7,1.25),fireRateMul:St(1+t*.05,1,2),reactionTime:St(.6-t*.03,.18,.6)}),mt.setIntensity(St(.25+t*.06,0,1));const e=t%5===0,i=Math.min(6+Math.floor(t*1.8),26),n=[];for(let r=0;r<i;r++){let a="rifleman";const o=Math.random();t>=3&&o<.25+t*.01&&(a="rusher"),t>=4&&o>.85&&(a="heavy"),t>=5&&o>.78&&o<.86&&(a="sniper"),t>=8&&o>.7&&(a=Math.random()>.5?"heavy":"rusher"),n.push(a)}this.boss=null,e&&n.unshift("titan"),this._spawnQueue=n,this._spawnTimer=1,this._maxConcurrent=Math.min(6+Math.floor(t*.8),16),mt.waveStinger(!0),mt.alarm(),this.hud.banner_(`WAVE ${this.wave}`,`${i} HOSTILES INBOUND`,2)}_updateSurvival(t){if(this._spawnQueue.length>0&&(this._spawnTimer-=t,this._spawnTimer<=0&&this.enemies.alive<this._maxConcurrent)){const e=this._spawnQueue.shift();this._spawnEnemy(e),this._spawnTimer=J(.4,1.1)}this._waveActive&&this._spawnQueue.length===0&&this.enemies.alive===0&&(this._waveActive=!1,this.alarmActive=!1,this._endWaveToShop())}_endWaveToShop(){const t=250+this.wave*100;this.credits+=t,this.score+=t,this.hud.banner_("WAVE CLEAR",`+${t} CR BONUS`,1.8),mt.waveStinger(!0),this.state=xe.BUY,this.input.exitLock(),mt.setIntensity(.05),setTimeout(()=>{this.state===xe.BUY&&this.menus.showBuy(()=>this._closeShop())},900)}_closeShop(){this.menus.clear(),this.state=xe.PLAYING,this._wasLocked=!1,this._lockGrace=.5,this._requestLock(),this._nextWave()}_startOperation(){this.wave=1,this.enemies.setDifficulty({healthMul:1.1,accuracyMul:.9,fireRateMul:1.1,reactionTime:.4}),mt.setIntensity(.4);const t=this.world.objectivePoints.slice();this.objectives=[];const e=[];for(let i=0;i<3&&t.length;i++){const n=ws(0,t.length-1);e.push(t.splice(n,1)[0])}for(const i of e)this.objectives.push({pos:i.pos.clone(),radius:i.radius,name:i.name,progress:0,captured:!1});this.alarmActive=!0,this.hud.banner_("OPERATION","SECURE ALL SECTORS",2.4),this._opReinforceTimer=2;for(let i=0;i<8;i++)this._spawnEnemy(i%4===0?"heavy":i%3===0?"rusher":"rifleman")}_updateOperation(t){if(this.objectives.filter(r=>!r.captured).length>0&&(this._opReinforceTimer-=t,this._opReinforceTimer<=0&&this.enemies.alive<14)){const r=Math.random()<.2?"heavy":Math.random()<.4?"rusher":"rifleman";this._spawnEnemy(r),this._opReinforceTimer=J(2.5,4.5)}const i=this.player.pos;let n=null;for(const r of this.objectives){if(r.captured)continue;const o=Math.hypot(i.x-r.pos.x,i.z-r.pos.z)<r.radius,l=this.enemies.enemies.some(c=>!c.dead&&Math.hypot(c.pos.x-r.pos.x,c.pos.z-r.pos.z)<r.radius);if(o&&!l){if(r.progress=St(r.progress+t/6,0,1),n=r,r.progress>=1&&!r.captured){r.captured=!0;const c=1e3;this.score+=c,this.credits+=500,mt.pickup(),this.hud.banner_("SECTOR SECURED",r.name,1.8),this.hud.flashScreen(.3)}}else o&&l?n=r:r.progress=St(r.progress-t/12,0,1)}this._activeObjective=n,this.objectives.every(r=>r.captured)&&(this.alarmActive=!1,this._gameOver(!0))}_spawnEnemy(t){const e=this.world.spawnPoints;if(!e.length)return;let i=null,n=-1/0;for(let a=0;a<6;a++){const o=e[ws(0,e.length-1)],l=Math.hypot(o.x-this.player.pos.x,o.z-this.player.pos.z),c=l+J(0,8);c>n&&l>16&&(n=c,i=o)}i=i||e[ws(0,e.length-1)];const r=this.enemies.spawn(t,new w(i.x,0,i.z));return t==="titan"&&(this.boss=r,this.hud.banner_("⚠ TITAN INBOUND","ELITE TARGET",2.2),mt.alarm()),r}_spawnPickup(t){const e=Math.random();let i;e<.5?i="ammo":e<.78?i="armor":i="health";const n={ammo:16764747,armor:4969215,health:7139436},r=new Se(.32,.32,.32),a=new ee({color:n[i],emissive:n[i],emissiveIntensity:.9,metalness:.3,roughness:.4}),o=new Ft(r,a);o.position.set(t.x,.6,t.z),o.castShadow=!0,this.scene.add(o);const l=new Un(n[i],.6,4,2);l.position.copy(o.position),this.scene.add(l),this.pickups.push({mesh:o,light:l,type:i,bob:Math.random()*6.28,life:22})}_updatePickups(t){if(!this.pickups)return;const e=this.player;for(let i=this.pickups.length-1;i>=0;i--){const n=this.pickups[i];n.life-=t,n.bob+=t*2,n.mesh.position.y=.55+Math.sin(n.bob)*.12,n.mesh.rotation.y+=t*2,n.light.position.y=n.mesh.position.y;const r=Math.hypot(e.pos.x-n.mesh.position.x,e.pos.z-n.mesh.position.z);if(n.life<4&&(n.mesh.visible=Math.floor(n.life*6)%2===0),r<1.4&&!e.dead){let o=!0;if(n.type==="ammo"){for(const l of Object.keys(ae))this.weapons.refillReserve(l,Math.round(ae[l].reserve*.3));this.hud.banner_("AMMO","",.8)}else n.type==="armor"?e.armor>=e.maxArmor?o=!1:e.addArmor(40):n.type==="health"&&(e.health>=e.maxHealth?o=!1:e.heal(40));if(o){mt.pickup(),this._removePickup(i);continue}}n.life<=0&&this._removePickup(i)}}_removePickup(t){const e=this.pickups[t];this.scene.remove(e.mesh),this.scene.remove(e.light),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.pickups.splice(t,1)}_clearPickups(){if(this.pickups)for(let t=this.pickups.length-1;t>=0;t--)this._removePickup(t);this.pickups=[]}_onKill(t){const e=t.def.scoreVal;Math.random()<(t.type==="heavy"?1:.28)&&this._spawnPickup(t.pos);const i=Math.round(e*this.combo);this.score+=i,this.credits+=Math.round(e*.6),this.stats.kills++,this.xp+=e,this.combo=St(this.combo+1,1,12),this.comboTimer=4,this.bestCombo=Math.max(this.bestCombo,this.combo);const n=this.level*1e3;this.xp>=n&&(this.xp-=n,this.level++,this.hud.banner_("RANK UP",`LEVEL ${this.level}`,1.4),mt.waveStinger(!0)),this.hud.killFeed(t.def.name,t._lastWasHead),this._grantStrikeProgress()}getShopItems(){const t=this.weapons,e=[],i=[{id:"smg",name:ae.smg.name,cost:1200,desc:"High RPM · close range"},{id:"shotgun",name:ae.shotgun.name,cost:1500,desc:"Devastating up close"},{id:"sniper",name:ae.sniper.name,cost:2200,desc:"One-shot headshots"}];for(const n of i)e.push({...n,owned:t.owned.includes(n.id)});return e.push({id:"ammo",name:"AMMO RESUPPLY",cost:400,desc:"Refill all reserves",owned:!1}),e.push({id:"armor",name:"ARMOR PLATES",cost:600,desc:"Restore 100 armor",owned:this.player.armor>=90}),e.push({id:"grenades",name:"FRAG ×3",cost:500,desc:"Restock grenades",owned:this.weapons.grenades>=6}),e.push({id:"up_health",name:`MAX HEALTH +25 (Lv${this.upgrades.health+1})`,cost:800+this.upgrades.health*400,desc:"Permanent this run",owned:this.upgrades.health>=4}),e.push({id:"up_regen",name:`FAST REGEN (Lv${this.upgrades.regen+1})`,cost:700+this.upgrades.regen*350,desc:"Heal sooner & faster",owned:this.upgrades.regen>=3}),e.push({id:"up_speed",name:`MOBILITY (Lv${this.upgrades.speed+1})`,cost:700+this.upgrades.speed*350,desc:"Move & sprint faster",owned:this.upgrades.speed>=3}),e}buy(t){const i=this.getShopItems().find(n=>n.id===t);if(!i||i.owned||this.credits<i.cost)return!1;if(this.credits-=i.cost,["smg","shotgun","sniper"].includes(t))this.weapons.giveWeapon(t);else if(t==="ammo")for(const n of Object.keys(ae))this.weapons.refillReserve(n,ae[n].reserve);else t==="armor"?this.player.addArmor(100):t==="grenades"?this.weapons.addGrenades(3):t==="up_health"?(this.upgrades.health++,this._applyUpgrades(),this.player.health=this.player.maxHealth):t==="up_regen"?(this.upgrades.regen++,this._applyUpgrades()):t==="up_speed"&&(this.upgrades.speed++,this._applyUpgrades());return!0}_applyUpgrades(){const t=this.loadout?.perk==="juggernaut"?40:0;this.player.maxHealth=100+this.upgrades.health*25+t,this.player.regenDelay=4.5-this.upgrades.regen*1,this.player.regenRate=22+this.upgrades.regen*14,this.player.speedMul=1+this.upgrades.speed*.08+(this.loadout?.perk==="lightweight"?.15:0)}_applyLoadout(){const t=this.loadout||{primary:"rifle",perk:null},e=Bl.includes(t.primary)?t.primary:"rifle";if(this.weapons.giveWeapon(e),this.weapons._equip(e,!0),this.weapons.owned=[e,"pistol"].filter((i,n,r)=>r.indexOf(i)===n),this.weapons.handSpeed=t.perk==="fasthands"?.6:1,t.perk==="scavenger")for(const i of Object.keys(ae)){const n=this.weapons.ammo[i];n&&(n.reserve=Math.round(ae[i].reserve*1.5))}this.player.health=this.player.maxHealth,t.perk==="juggernaut"&&this.player.addArmor(50)}update(t){if(this.world.update(t,this.alarmActive&&this.state===xe.PLAYING),this.state===xe.PLAYING){this.runTime+=t,this.player.update(t,!1);const e=this.player;!e.dead&&e.time-e.lastDamageTime>e.regenDelay&&e.health<e.maxHealth&&e.heal(e.regenRate*t),this.combo>1&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1)),this.weapons.update(t,this.input,!1),this.enemies.update(t),this.effects.update(t),this._updatePickups(t),this._updateStrikes(t),this.input.actionPressed("tactical")&&this.callAirstrike(),this.mode==="survival"?this._updateSurvival(t):this._updateOperation(t),e.dead&&this.state===xe.PLAYING&&(mt.setIntensity(0),this._gameOver(!1)),this._lockGrace>0&&(this._lockGrace-=t);const i=!this.input.locked&&this._wasLocked&&this._lockGrace<=0;(this.input.actionPressed("pause")||i)&&this.pause(),this._wasLocked=this.input.locked,this.input.actionPressed("mute")&&mt.setMute(!mt.muted),this._updateHUD(t);const n=e.time-e.lastDamageTime;this.hud.setVignette(St((1-n)*.5,0,.5)*(e.dead?1.6:1))}else this.effects.update(t),(this.state===xe.PAUSED||this.state===xe.BUY)&&this.state===xe.PAUSED&&this.input.actionPressed("pause")&&this.resume()}_updateHUD(t){const e=this.player,i=this.weapons,n=i.def,r=i.state;let a="",o="",l="",c=[];if(this.mode==="survival")a=`WAVE <b>${this.wave}</b> · ${this.enemies.alive} LEFT`,o=this._waveActive?"Eliminate all hostiles":"Prepare for next wave",l=`Score multiplier ×${this.combo}`;else{a=`OPERATION · ${this.objectives.filter(g=>g.captured).length}/${this.objectives.length} SECTORS`;const m=this._activeObjective;o=m?`Secure: ${m.name}`:"Move to a marked sector",m&&(l=`Capture ${Math.round(m.progress*100)}%`),c=this.objectives.filter(g=>!g.captured).map(g=>({pos:g.pos,r:g.radius,color:g===this._activeObjective?"#6cf06c":"#4bd2ff"}))}const h=Math.hypot(e.vel.x,e.vel.z)>1.5;let u=ti(n.spread,n.adsSpread,i.ads);h&&(u*=1.8),u*=1+i.spreadHeat*.5,this.hud.update(t,{health:e.health,maxHealth:e.maxHealth,armor:e.armor,maxArmor:e.maxArmor,stamina:e.stamina,mag:r.mag,reserve:r.reserve,weaponName:n.name,grenades:i.grenades,airstrike:this.airstrikeCharges,score:this.score,waveText:a,combo:this.combo,objective:o,objectiveProg:l,objMarker:c,crosshairSpread:u,scoped:n.scoped,ads:i.ads,boss:this.boss?{alive:!this.boss.dead,hp:this.boss.health,maxHp:this.boss.maxHealth,name:this.boss.def.name}:null,yaw:e.yaw,px:e.pos.x,pz:e.pos.z,colliders:this.world.colliders,enemies:this.enemies.enemies.filter(p=>!p.dead).map(p=>({x:p.pos.x,z:p.pos.z,alert:p.alertLevel>.5}))})}}const Cm=document.getElementById("app"),Vn=new rm(Cm),Bn=new hm(Vn.renderer.domElement),kn=new Rm(Vn,Bn);window.addEventListener("contextmenu",s=>s.preventDefault());const kl=()=>{mt.init(),window.removeEventListener("pointerdown",kl)};window.addEventListener("pointerdown",kl);kn.menus.showMain();Vn.renderer.domElement.addEventListener("click",()=>{kn.state==="playing"&&!Bn.locked&&Bn.requestLock()});const _s=1/120,$o=.25;let jo=performance.now()/1e3,Dn=0,Zo=60,vs=0,Tr=0;function Hl(s){const t=s/1e3;let e=t-jo;jo=t,e>$o&&(e=$o),Dn+=e;let i=0;for(;Dn>=_s&&i<8;)kn.update(_s),Dn-=_s,i++;Dn>_s*8&&(Dn=0),Vn.render(),Bn.endFrame(),vs+=e,Tr++,vs>=1&&(Zo=Tr/vs,vs=0,Tr=0,kn._fps=Zo),requestAnimationFrame(Hl)}requestAnimationFrame(Hl);window.__bp={engine:Vn,input:Bn,game:kn};

var Gf=Object.defineProperty;var Vf=(n,e,t)=>e in n?Gf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var sr=(n,e,t)=>Vf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function za(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},Gi=[],fn=()=>{},kf=()=>!1,Ps=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ha=n=>n.startsWith("onUpdate:"),_t=Object.assign,Ga=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wf=Object.prototype.hasOwnProperty,Ze=(n,e)=>Wf.call(n,e),Ue=Array.isArray,Vi=n=>Ls(n)==="[object Map]",tu=n=>Ls(n)==="[object Set]",Fe=n=>typeof n=="function",ht=n=>typeof n=="string",$n=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",nu=n=>(st(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),iu=Object.prototype.toString,Ls=n=>iu.call(n),Xf=n=>Ls(n).slice(8,-1),ru=n=>Ls(n)==="[object Object]",Va=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_r=za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qf=/-(\w)/g,qn=Ds(n=>n.replace(qf,(e,t)=>t?t.toUpperCase():"")),Yf=/\B([A-Z])/g,Si=Ds(n=>n.replace(Yf,"-$1").toLowerCase()),su=Ds(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ys=Ds(n=>n?`on${su(n)}`:""),kn=(n,e)=>!Object.is(n,e),Ks=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ou=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Kf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Rl;const Is=()=>Rl||(Rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yr(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Jf(i):yr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||st(n))return n}const $f=/;(?![^(]*\))/g,jf=/:([^]+)/,Zf=/\/\*[^]*?\*\//g;function Jf(n){const e={};return n.replace(Zf,"").split($f).forEach(t=>{if(t){const i=t.split(jf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ka(n){let e="";if(ht(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=ka(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eh=za(Qf);function au(n){return!!n||n===""}const lu=n=>!!(n&&n.__v_isRef===!0),zo=n=>ht(n)?n:n==null?"":Ue(n)||st(n)&&(n.toString===iu||!Fe(n.toString))?lu(n)?zo(n.value):JSON.stringify(n,cu,2):String(n),cu=(n,e)=>lu(e)?cu(n,e.value):Vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$s(i,s)+" =>"]=r,t),{})}:tu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$s(t))}:$n(e)?$s(e):st(e)&&!Ue(e)&&!ru(e)?String(e):e,$s=(n,e="")=>{var t;return $n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class th{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function nh(){return Ht}let tt;const js=new WeakSet;class uu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,js.has(this)&&(js.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cl(this),du(this);const e=tt,t=nn;tt=this,nn=!0;try{return this.fn()}finally{pu(this),tt=e,nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qa(e);this.deps=this.depsTail=void 0,Cl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?js.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let fu=0,gr,vr;function hu(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=gr,gr=n}function Wa(){fu++}function Xa(){if(--fu>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;gr;){let e=gr;for(gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function du(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),qa(i),ih(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ho(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function mu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr))return;n.globalVersion=Tr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ho(n)){n.flags&=-3;return}const t=tt,i=nn;tt=n,nn=!0;try{du(n);const r=n.fn(n._value);(e.version===0||kn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{tt=t,nn=i,pu(n),n.flags&=-3}}function qa(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)qa(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ih(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let nn=!0;const _u=[];function jn(){_u.push(nn),nn=!1}function Zn(){const n=_u.pop();nn=n===void 0?!0:n}function Cl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=tt;tt=void 0;try{e()}finally{tt=t}}}let Tr=0;class rh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ya{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!tt||!nn||tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==tt)t=this.activeLink=new rh(tt,this),tt.deps?(t.prevDep=tt.depsTail,tt.depsTail.nextDep=t,tt.depsTail=t):tt.deps=tt.depsTail=t,gu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=tt.depsTail,t.nextDep=void 0,tt.depsTail.nextDep=t,tt.depsTail=t,tt.deps===t&&(tt.deps=i)}return t}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){Wa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Xa()}}}function gu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Go=new WeakMap,mi=Symbol(""),Vo=Symbol(""),br=Symbol("");function St(n,e,t){if(nn&&tt){let i=Go.get(n);i||Go.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ya),r.map=i,r.key=t),r.track()}}function Tn(n,e,t,i,r,s){const o=Go.get(n);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(Wa(),e==="clear")o.forEach(a);else{const l=Ue(n),c=l&&Va(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===br||!$n(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mi)),Vi(n)&&a(o.get(Vo)));break;case"delete":l||(a(o.get(mi)),Vi(n)&&a(o.get(Vo)));break;case"set":Vi(n)&&a(o.get(mi));break}}Xa()}function Ti(n){const e=je(n);return e===n?e:(St(e,"iterate",br),Yt(n)?e:e.map(Et))}function Us(n){return St(n=je(n),"iterate",br),n}const sh={__proto__:null,[Symbol.iterator](){return Zs(this,Symbol.iterator,Et)},concat(...n){return Ti(this).concat(...n.map(e=>Ue(e)?Ti(e):e))},entries(){return Zs(this,"entries",n=>(n[1]=Et(n[1]),n))},every(n,e){return _n(this,"every",n,e,void 0,arguments)},filter(n,e){return _n(this,"filter",n,e,t=>t.map(Et),arguments)},find(n,e){return _n(this,"find",n,e,Et,arguments)},findIndex(n,e){return _n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _n(this,"findLast",n,e,Et,arguments)},findLastIndex(n,e){return _n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _n(this,"forEach",n,e,void 0,arguments)},includes(...n){return Js(this,"includes",n)},indexOf(...n){return Js(this,"indexOf",n)},join(n){return Ti(this).join(n)},lastIndexOf(...n){return Js(this,"lastIndexOf",n)},map(n,e){return _n(this,"map",n,e,void 0,arguments)},pop(){return or(this,"pop")},push(...n){return or(this,"push",n)},reduce(n,...e){return Pl(this,"reduce",n,e)},reduceRight(n,...e){return Pl(this,"reduceRight",n,e)},shift(){return or(this,"shift")},some(n,e){return _n(this,"some",n,e,void 0,arguments)},splice(...n){return or(this,"splice",n)},toReversed(){return Ti(this).toReversed()},toSorted(n){return Ti(this).toSorted(n)},toSpliced(...n){return Ti(this).toSpliced(...n)},unshift(...n){return or(this,"unshift",n)},values(){return Zs(this,"values",Et)}};function Zs(n,e,t){const i=Us(n),r=i[e]();return i!==n&&!Yt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const oh=Array.prototype;function _n(n,e,t,i,r,s){const o=Us(n),a=o!==n&&!Yt(n),l=o[e];if(l!==oh[e]){const f=l.apply(n,s);return a?Et(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Et(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Pl(n,e,t,i){const r=Us(n);let s=t;return r!==n&&(Yt(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Et(a),l,n)}),r[e](s,...i)}function Js(n,e,t){const i=je(n);St(i,"iterate",br);const r=i[e](...t);return(r===-1||r===!1)&&Za(t[0])?(t[0]=je(t[0]),i[e](...t)):r}function or(n,e,t=[]){jn(),Wa();const i=je(n)[e].apply(n,t);return Xa(),Zn(),i}const ah=za("__proto__,__v_isRef,__isVue"),vu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($n));function lh(n){$n(n)||(n=String(n));const e=je(this);return St(e,"has",n),e.hasOwnProperty(n)}class xu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?vh:yu:s?Eu:Su).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){let l;if(o&&(l=sh[t]))return l;if(t==="hasOwnProperty")return lh}const a=Reflect.get(e,t,yt(e)?e:i);return($n(t)?vu.has(t):ah(t))||(r||St(e,"get",t),s)?a:yt(a)?o&&Va(t)?a:a.value:st(a)?r?Tu(a):$a(a):a}}class Mu extends xu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=gi(s);if(!Yt(i)&&!gi(i)&&(s=je(s),i=je(i)),!Ue(e)&&yt(s)&&!yt(i))return l?!1:(s.value=i,!0)}const o=Ue(e)&&Va(t)?Number(t)<e.length:Ze(e,t),a=Reflect.set(e,t,i,yt(e)?e:r);return e===je(r)&&(o?kn(i,s)&&Tn(e,"set",t,i):Tn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Tn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!$n(t)||!vu.has(t))&&St(e,"has",t),i}ownKeys(e){return St(e,"iterate",Ue(e)?"length":mi),Reflect.ownKeys(e)}}class ch extends xu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const uh=new Mu,fh=new ch,hh=new Mu(!0);const ko=n=>n,zr=n=>Reflect.getPrototypeOf(n);function dh(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=Vi(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?ko:e?Wo:Et;return!e&&St(s,"iterate",l?Vo:mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Hr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ph(n,e){const t={get(r){const s=this.__v_raw,o=je(s),a=je(r);n||(kn(r,a)&&St(o,"get",r),St(o,"get",a));const{has:l}=zr(o),c=e?ko:n?Wo:Et;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&St(je(r),"iterate",mi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=je(s),a=je(r);return n||(kn(r,a)&&St(o,"has",r),St(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=je(a),c=e?ko:n?Wo:Et;return!n&&St(l,"iterate",mi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return _t(t,n?{add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear")}:{add(r){!e&&!Yt(r)&&!gi(r)&&(r=je(r));const s=je(this);return zr(s).has.call(s,r)||(s.add(r),Tn(s,"add",r,r)),this},set(r,s){!e&&!Yt(s)&&!gi(s)&&(s=je(s));const o=je(this),{has:a,get:l}=zr(o);let c=a.call(o,r);c||(r=je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?kn(s,u)&&Tn(o,"set",r,s):Tn(o,"add",r,s),this},delete(r){const s=je(this),{has:o,get:a}=zr(s);let l=o.call(s,r);l||(r=je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Tn(s,"delete",r,void 0),c},clear(){const r=je(this),s=r.size!==0,o=r.clear();return s&&Tn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dh(r,n,e)}),t}function Ka(n,e){const t=ph(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const mh={get:Ka(!1,!1)},_h={get:Ka(!1,!0)},gh={get:Ka(!0,!1)};const Su=new WeakMap,Eu=new WeakMap,yu=new WeakMap,vh=new WeakMap;function xh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mh(n){return n.__v_skip||!Object.isExtensible(n)?0:xh(Xf(n))}function $a(n){return gi(n)?n:ja(n,!1,uh,mh,Su)}function Sh(n){return ja(n,!1,hh,_h,Eu)}function Tu(n){return ja(n,!0,fh,gh,yu)}function ja(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Mh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ki(n){return gi(n)?ki(n.__v_raw):!!(n&&n.__v_isReactive)}function gi(n){return!!(n&&n.__v_isReadonly)}function Yt(n){return!!(n&&n.__v_isShallow)}function Za(n){return n?!!n.__v_raw:!1}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Eh(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&ou(n,"__v_skip",!0),n}const Et=n=>st(n)?$a(n):n,Wo=n=>st(n)?Tu(n):n;function yt(n){return n?n.__v_isRef===!0:!1}function xr(n){return yh(n,!1)}function yh(n,e){return yt(n)?n:new Th(n,e)}class Th{constructor(e,t){this.dep=new Ya,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:je(e),this._value=t?e:Et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Yt(e)||gi(e);e=i?e:je(e),kn(e,t)&&(this._rawValue=e,this._value=i?e:Et(e),this.dep.trigger())}}function bh(n){return yt(n)?n.value:n}const Ah={get:(n,e,t)=>e==="__v_raw"?n:bh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bu(n){return ki(n)?n:new Proxy(n,Ah)}class wh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ya(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&tt!==this)return hu(this,!0),!0}get value(){const e=this.dep.track();return mu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rh(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new wh(i,r,t)}const Gr={},Ms=new WeakMap;let li;function Ch(n,e=!1,t=li){if(t){let i=Ms.get(t);i||Ms.set(t,i=[]),i.push(n)}}function Ph(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=b=>r?b:Yt(b)||r===!1||r===0?Hn(b,1):Hn(b);let u,f,h,m,x=!1,E=!1;if(yt(n)?(f=()=>n.value,x=Yt(n)):ki(n)?(f=()=>c(n),x=!0):Ue(n)?(E=!0,x=n.some(b=>ki(b)||Yt(b)),f=()=>n.map(b=>{if(yt(b))return b.value;if(ki(b))return c(b);if(Fe(b))return l?l(b,2):b()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){jn();try{h()}finally{Zn()}}const b=li;li=u;try{return l?l(n,3,[m]):n(m)}finally{li=b}}:f=fn,e&&r){const b=f,B=r===!0?1/0:r;f=()=>Hn(b(),B)}const p=nh(),d=()=>{u.stop(),p&&Ga(p.effects,u)};if(s&&e){const b=e;e=(...B)=>{b(...B),d()}}let w=E?new Array(n.length).fill(Gr):Gr;const T=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const B=u.run();if(r||x||(E?B.some((L,R)=>kn(L,w[R])):kn(B,w))){h&&h();const L=li;li=u;try{const R=[B,w===Gr?void 0:E&&w[0]===Gr?[]:w,m];l?l(e,3,R):e(...R),w=B}finally{li=L}}}else u.run()};return a&&a(T),u=new uu(f),u.scheduler=o?()=>o(T,!1):T,m=b=>Ch(b,!1,u),h=u.onStop=()=>{const b=Ms.get(u);if(b){if(l)l(b,4);else for(const B of b)B();Ms.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Hn(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yt(n))Hn(n.value,e,t);else if(Ue(n))for(let i=0;i<n.length;i++)Hn(n[i],e,t);else if(tu(n)||Vi(n))n.forEach(i=>{Hn(i,e,t)});else if(ru(n)){for(const i in n)Hn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(n,e,t,i){try{return i?n(...i):n()}catch(r){Ns(r,e,t)}}function dn(n,e,t,i){if(Fe(n)){const r=Pr(n,e,t,i);return r&&nu(r)&&r.catch(s=>{Ns(s,e,t)}),r}if(Ue(n)){const r=[];for(let s=0;s<n.length;s++)r.push(dn(n[s],e,t,i));return r}}function Ns(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){jn(),Pr(s,null,10,[n,l,c]),Zn();return}}Lh(n,t,r,i,o)}function Lh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const wt=[];let sn=-1;const Wi=[];let Bn=null,zi=0;const Au=Promise.resolve();let Ss=null;function Dh(n){const e=Ss||Au;return n?e.then(this?n.bind(this):n):e}function Ih(n){let e=sn+1,t=wt.length;for(;e<t;){const i=e+t>>>1,r=wt[i],s=Ar(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ja(n){if(!(n.flags&1)){const e=Ar(n),t=wt[wt.length-1];!t||!(n.flags&2)&&e>=Ar(t)?wt.push(n):wt.splice(Ih(e),0,n),n.flags|=1,wu()}}function wu(){Ss||(Ss=Au.then(Cu))}function Uh(n){Ue(n)?Wi.push(...n):Bn&&n.id===-1?Bn.splice(zi+1,0,n):n.flags&1||(Wi.push(n),n.flags|=1),wu()}function Ll(n,e,t=sn+1){for(;t<wt.length;t++){const i=wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ru(n){if(Wi.length){const e=[...new Set(Wi)].sort((t,i)=>Ar(t)-Ar(i));if(Wi.length=0,Bn){Bn.push(...e);return}for(Bn=e,zi=0;zi<Bn.length;zi++){const t=Bn[zi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Bn=null,zi=0}}const Ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cu(n){try{for(sn=0;sn<wt.length;sn++){const e=wt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<wt.length;sn++){const e=wt[sn];e&&(e.flags&=-2)}sn=-1,wt.length=0,Ru(),Ss=null,(wt.length||Wi.length)&&Cu()}}let cn=null,Pu=null;function Es(n){const e=cn;return cn=n,Pu=n&&n.type.__scopeId||null,e}function Nh(n,e=cn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hl(-1);const s=Es(e);let o;try{o=n(...r)}finally{Es(s),i._d&&Hl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ei(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(jn(),dn(l,t,8,[n.el,a,n,e]),Zn())}}const Fh=Symbol("_vte"),Oh=n=>n.__isTeleport;function Qa(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Qa(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function el(n,e){return Fe(n)?_t({name:n.name},e,{setup:n}):n}function Lu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xo(n,e,t,i,r=!1){if(Ue(n)){n.forEach((x,E)=>Xo(x,e&&(Ue(e)?e[E]:e),t,i,r));return}if(Mr(i)&&!r)return;const s=i.shapeFlag&4?ol(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,h=je(f),m=f===nt?()=>!1:x=>Ze(h,x);if(c!=null&&c!==l&&(ht(c)?(u[c]=null,m(c)&&(f[c]=null)):yt(c)&&(c.value=null)),Fe(l))Pr(l,a,12,[o,u]);else{const x=ht(l),E=yt(l);if(x||E){const p=()=>{if(n.f){const d=x?m(l)?f[l]:u[l]:l.value;r?Ue(d)&&Ga(d,s):Ue(d)?d.includes(s)||d.push(s):x?(u[l]=[s],m(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else x?(u[l]=o,m(l)&&(f[l]=o)):E&&(l.value=o,n.k&&(u[n.k]=o))};o?(p.id=-1,zt(p,t)):p()}}}Is().requestIdleCallback;Is().cancelIdleCallback;const Mr=n=>!!n.type.__asyncLoader,Du=n=>n.type.__isKeepAlive;function Bh(n,e){Iu(n,"a",e)}function zh(n,e){Iu(n,"da",e)}function Iu(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Du(r.parent.vnode)&&Hh(i,e,t,r),r=r.parent}}function Hh(n,e,t,i){const r=Fs(e,n,i,!0);nl(()=>{Ga(i[e],r)},t)}function Fs(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{jn();const a=Lr(t),l=dn(e,t,n,o);return a(),Zn(),l});return i?r.unshift(s):r.push(s),s}}const Pn=n=>(e,t=Rt)=>{(!Rr||n==="sp")&&Fs(n,(...i)=>e(...i),t)},Gh=Pn("bm"),tl=Pn("m"),Vh=Pn("bu"),kh=Pn("u"),Wh=Pn("bum"),nl=Pn("um"),Xh=Pn("sp"),qh=Pn("rtg"),Yh=Pn("rtc");function Kh(n,e=Rt){Fs("ec",n,e)}const $h=Symbol.for("v-ndc");function Dl(n,e,t,i){let r;const s=t,o=Ue(n);if(o||ht(n)){const a=o&&ki(n);let l=!1;a&&(l=!Yt(n),n=Us(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Et(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(st(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const qo=n=>n?ef(n)?ol(n):qo(n.parent):null,Sr=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qo(n.parent),$root:n=>qo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>il(n),$forceUpdate:n=>n.f||(n.f=()=>{Ja(n.update)}),$nextTick:n=>n.n||(n.n=Dh.bind(n.proxy)),$watch:n=>gd.bind(n)}),Qs=(n,e)=>n!==nt&&!n.__isScriptSetup&&Ze(n,e),jh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qs(i,e))return o[e]=1,i[e];if(r!==nt&&Ze(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(t!==nt&&Ze(t,e))return o[e]=4,t[e];Yo&&(o[e]=0)}}const u=Sr[e];let f,h;if(u)return e==="$attrs"&&St(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&Ze(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ze(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Qs(r,e)?(r[e]=t,!0):i!==nt&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==nt&&Ze(n,o)||Qs(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(Sr,o)||Ze(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Il(n){return Ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Yo=!0;function Zh(n){const e=il(n),t=n.proxy,i=n.ctx;Yo=!1,e.beforeCreate&&Ul(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:E,deactivated:p,beforeDestroy:d,beforeUnmount:w,destroyed:T,unmounted:b,render:B,renderTracked:L,renderTriggered:R,errorCaptured:H,serverPrefetch:le,expose:v,inheritAttrs:y,components:$,directives:q,filters:ee}=e;if(c&&Jh(c,i,null),o)for(const j in o){const z=o[j];Fe(z)&&(i[j]=z.bind(t))}if(r){const j=r.call(t,t);st(j)&&(n.data=$a(j))}if(Yo=!0,s)for(const j in s){const z=s[j],he=Fe(z)?z.bind(t,t):Fe(z.get)?z.get.bind(t,t):fn,de=!Fe(z)&&Fe(z.set)?z.set.bind(t):fn,Me=zd({get:he,set:de});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ne=>Me.value=Ne})}if(a)for(const j in a)Uu(a[j],i,t,j);if(l){const j=Fe(l)?l.call(t):l;Reflect.ownKeys(j).forEach(z=>{rd(z,j[z])})}u&&Ul(u,n,"c");function X(j,z){Ue(z)?z.forEach(he=>j(he.bind(t))):z&&j(z.bind(t))}if(X(Gh,f),X(tl,h),X(Vh,m),X(kh,x),X(Bh,E),X(zh,p),X(Kh,H),X(Yh,L),X(qh,R),X(Wh,w),X(nl,b),X(Xh,le),Ue(v))if(v.length){const j=n.exposed||(n.exposed={});v.forEach(z=>{Object.defineProperty(j,z,{get:()=>t[z],set:he=>t[z]=he})})}else n.exposed||(n.exposed={});B&&n.render===fn&&(n.render=B),y!=null&&(n.inheritAttrs=y),$&&(n.components=$),q&&(n.directives=q),le&&Lu(n)}function Jh(n,e,t=fn){Ue(n)&&(n=Ko(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=us(r.from||i,r.default,!0):s=us(r.from||i):s=us(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ul(n,e,t){dn(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uu(n,e,t,i){let r=i.includes(".")?Ku(t,i):()=>t[i];if(ht(n)){const s=e[n];Fe(s)&&to(r,s)}else if(Fe(n))to(r,n.bind(t));else if(st(n))if(Ue(n))n.forEach(s=>Uu(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&to(r,s,n)}}function il(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ys(l,c,o,!0)),ys(l,e,o)),st(e)&&s.set(e,l),l}function ys(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ys(n,s,t,!0),r&&r.forEach(o=>ys(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Qh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Qh={data:Nl,props:Fl,emits:Fl,methods:pr,computed:pr,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:pr,directives:pr,watch:td,provide:Nl,inject:ed};function Nl(n,e){return e?n?function(){return _t(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function ed(n,e){return pr(Ko(n),Ko(e))}function Ko(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function pr(n,e){return n?_t(Object.create(null),n,e):e}function Fl(n,e){return n?Ue(n)&&Ue(e)?[...new Set([...n,...e])]:_t(Object.create(null),Il(n),Il(e??{})):e}function td(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Nu(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function id(n,e){return function(i,r=null){Fe(i)||(i=_t({},i)),r!=null&&!st(r)&&(r=null);const s=Nu(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:nd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Hd,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Fe(u.install)?(o.add(u),u.install(c,...f)):Fe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||Kt(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,ol(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(dn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Xi;Xi=c;try{return u()}finally{Xi=f}}};return c}}let Xi=null;function rd(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function us(n,e,t=!1){const i=Rt||cn;if(i||Xi){const r=Xi?Xi._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const Fu={},Ou=()=>Object.create(Fu),Bu=n=>Object.getPrototypeOf(n)===Fu;function sd(n,e,t,i=!1){const r={},s=Ou();n.propsDefaults=Object.create(null),zu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Sh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function od(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Os(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ze(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=qn(h);r[x]=$o(l,a,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{zu(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=Si(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=$o(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Tn(n.attrs,"set","")}function zu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(_r(l))continue;const c=e[l];let u;r&&Ze(r,u=qn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Os(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=$o(r,l,f,c[f],n,!Ze(c,f))}}return o}function $o(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Lr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Si(t))&&(i=!0))}return i}const ad=new WeakMap;function Hu(n,e,t=!1){const i=t?ad:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Fe(n)){const u=f=>{l=!0;const[h,m]=Hu(f,e,!0);_t(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Gi),Gi;if(Ue(s))for(let u=0;u<s.length;u++){const f=qn(s[u]);Ol(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=qn(u);if(Ol(f)){const h=s[u],m=o[f]=Ue(h)||Fe(h)?{type:h}:_t({},h),x=m.type;let E=!1,p=!0;if(Ue(x))for(let d=0;d<x.length;++d){const w=x[d],T=Fe(w)&&w.name;if(T==="Boolean"){E=!0;break}else T==="String"&&(p=!1)}else E=Fe(x)&&x.name==="Boolean";m[0]=E,m[1]=p,(E||Ze(m,"default"))&&a.push(f)}}const c=[o,a];return st(n)&&i.set(n,c),c}function Ol(n){return n[0]!=="$"&&!_r(n)}const Gu=n=>n[0]==="_"||n==="$stable",rl=n=>Ue(n)?n.map(an):[an(n)],ld=(n,e,t)=>{if(e._n)return e;const i=Nh((...r)=>rl(e(...r)),t);return i._c=!1,i},Vu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Gu(r))continue;const s=n[r];if(Fe(s))e[r]=ld(r,s,i);else if(s!=null){const o=rl(s);e[r]=()=>o}}},ku=(n,e)=>{const t=rl(e);n.slots.default=()=>t},Wu=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},cd=(n,e,t)=>{const i=n.slots=Ou();if(n.vnode.shapeFlag&32){const r=e._;r?(Wu(i,e,t),t&&ou(i,"_",r,!0)):Vu(e,i)}else e&&ku(n,e)},ud=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Wu(r,e,t):(s=!e.$stable,Vu(e,r)),o=e}else e&&(ku(n,e),o={default:1});if(s)for(const a in r)!Gu(a)&&o[a]==null&&delete r[a]},zt=Td;function fd(n){return hd(n)}function hd(n,e){const t=Is();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=fn,insertStaticContent:x}=n,E=(g,C,F,K=null,G=null,Z=null,J=void 0,M=null,_=!!C.dynamicChildren)=>{if(g===C)return;g&&!ar(g,C)&&(K=pe(g),Ne(g,G,Z,!0),g=null),C.patchFlag===-2&&(_=!1,C.dynamicChildren=null);const{type:A,ref:O,shapeFlag:N}=C;switch(A){case Bs:p(g,C,F,K);break;case vi:d(g,C,F,K);break;case io:g==null&&w(C,F,K,J);break;case Wt:$(g,C,F,K,G,Z,J,M,_);break;default:N&1?B(g,C,F,K,G,Z,J,M,_):N&6?q(g,C,F,K,G,Z,J,M,_):(N&64||N&128)&&A.process(g,C,F,K,G,Z,J,M,_,ze)}O!=null&&G&&Xo(O,g&&g.ref,Z,C||g,!C)},p=(g,C,F,K)=>{if(g==null)i(C.el=a(C.children),F,K);else{const G=C.el=g.el;C.children!==g.children&&c(G,C.children)}},d=(g,C,F,K)=>{g==null?i(C.el=l(C.children||""),F,K):C.el=g.el},w=(g,C,F,K)=>{[g.el,g.anchor]=x(g.children,C,F,K,g.el,g.anchor)},T=({el:g,anchor:C},F,K)=>{let G;for(;g&&g!==C;)G=h(g),i(g,F,K),g=G;i(C,F,K)},b=({el:g,anchor:C})=>{let F;for(;g&&g!==C;)F=h(g),r(g),g=F;r(C)},B=(g,C,F,K,G,Z,J,M,_)=>{C.type==="svg"?J="svg":C.type==="math"&&(J="mathml"),g==null?L(C,F,K,G,Z,J,M,_):le(g,C,G,Z,J,M,_)},L=(g,C,F,K,G,Z,J,M)=>{let _,A;const{props:O,shapeFlag:N,transition:U,dirs:ie}=g;if(_=g.el=o(g.type,Z,O&&O.is,O),N&8?u(_,g.children):N&16&&H(g.children,_,null,K,G,eo(g,Z),J,M),ie&&ei(g,null,K,"created"),R(_,g,g.scopeId,J,K),O){for(const oe in O)oe!=="value"&&!_r(oe)&&s(_,oe,null,O[oe],Z,K);"value"in O&&s(_,"value",null,O.value,Z),(A=O.onVnodeBeforeMount)&&rn(A,K,g)}ie&&ei(g,null,K,"beforeMount");const te=dd(G,U);te&&U.beforeEnter(_),i(_,C,F),((A=O&&O.onVnodeMounted)||te||ie)&&zt(()=>{A&&rn(A,K,g),te&&U.enter(_),ie&&ei(g,null,K,"mounted")},G)},R=(g,C,F,K,G)=>{if(F&&m(g,F),K)for(let Z=0;Z<K.length;Z++)m(g,K[Z]);if(G){let Z=G.subTree;if(C===Z||ju(Z.type)&&(Z.ssContent===C||Z.ssFallback===C)){const J=G.vnode;R(g,J,J.scopeId,J.slotScopeIds,G.parent)}}},H=(g,C,F,K,G,Z,J,M,_=0)=>{for(let A=_;A<g.length;A++){const O=g[A]=M?zn(g[A]):an(g[A]);E(null,O,C,F,K,G,Z,J,M)}},le=(g,C,F,K,G,Z,J)=>{const M=C.el=g.el;let{patchFlag:_,dynamicChildren:A,dirs:O}=C;_|=g.patchFlag&16;const N=g.props||nt,U=C.props||nt;let ie;if(F&&ti(F,!1),(ie=U.onVnodeBeforeUpdate)&&rn(ie,F,C,g),O&&ei(C,g,F,"beforeUpdate"),F&&ti(F,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(M,""),A?v(g.dynamicChildren,A,M,F,K,eo(C,G),Z):J||z(g,C,M,null,F,K,eo(C,G),Z,!1),_>0){if(_&16)y(M,N,U,F,G);else if(_&2&&N.class!==U.class&&s(M,"class",null,U.class,G),_&4&&s(M,"style",N.style,U.style,G),_&8){const te=C.dynamicProps;for(let oe=0;oe<te.length;oe++){const Ee=te[oe],se=N[Ee],ue=U[Ee];(ue!==se||Ee==="value")&&s(M,Ee,se,ue,G,F)}}_&1&&g.children!==C.children&&u(M,C.children)}else!J&&A==null&&y(M,N,U,F,G);((ie=U.onVnodeUpdated)||O)&&zt(()=>{ie&&rn(ie,F,C,g),O&&ei(C,g,F,"updated")},K)},v=(g,C,F,K,G,Z,J)=>{for(let M=0;M<C.length;M++){const _=g[M],A=C[M],O=_.el&&(_.type===Wt||!ar(_,A)||_.shapeFlag&70)?f(_.el):F;E(_,A,O,null,K,G,Z,J,!0)}},y=(g,C,F,K,G)=>{if(C!==F){if(C!==nt)for(const Z in C)!_r(Z)&&!(Z in F)&&s(g,Z,C[Z],null,G,K);for(const Z in F){if(_r(Z))continue;const J=F[Z],M=C[Z];J!==M&&Z!=="value"&&s(g,Z,M,J,G,K)}"value"in F&&s(g,"value",C.value,F.value,G)}},$=(g,C,F,K,G,Z,J,M,_)=>{const A=C.el=g?g.el:a(""),O=C.anchor=g?g.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:ie}=C;ie&&(M=M?M.concat(ie):ie),g==null?(i(A,F,K),i(O,F,K),H(C.children||[],F,O,G,Z,J,M,_)):N>0&&N&64&&U&&g.dynamicChildren?(v(g.dynamicChildren,U,F,G,Z,J,M),(C.key!=null||G&&C===G.subTree)&&Xu(g,C,!0)):z(g,C,F,O,G,Z,J,M,_)},q=(g,C,F,K,G,Z,J,M,_)=>{C.slotScopeIds=M,g==null?C.shapeFlag&512?G.ctx.activate(C,F,K,J,_):ee(C,F,K,G,Z,J,_):re(g,C,_)},ee=(g,C,F,K,G,Z,J)=>{const M=g.component=Id(g,K,G);if(Du(g)&&(M.ctx.renderer=ze),Ud(M,!1,J),M.asyncDep){if(G&&G.registerDep(M,X,J),!g.el){const _=M.subTree=Kt(vi);d(null,_,C,F)}}else X(M,g,C,F,G,Z,J)},re=(g,C,F)=>{const K=C.component=g.component;if(Ed(g,C,F))if(K.asyncDep&&!K.asyncResolved){j(K,C,F);return}else K.next=C,K.update();else C.el=g.el,K.vnode=C},X=(g,C,F,K,G,Z,J)=>{const M=()=>{if(g.isMounted){let{next:N,bu:U,u:ie,parent:te,vnode:oe}=g;{const Te=qu(g);if(Te){N&&(N.el=oe.el,j(g,N,J)),Te.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Ee=N,se;ti(g,!1),N?(N.el=oe.el,j(g,N,J)):N=oe,U&&Ks(U),(se=N.props&&N.props.onVnodeBeforeUpdate)&&rn(se,te,N,oe),ti(g,!0);const ue=no(g),Ae=g.subTree;g.subTree=ue,E(Ae,ue,f(Ae.el),pe(Ae),g,G,Z),N.el=ue.el,Ee===null&&yd(g,ue.el),ie&&zt(ie,G),(se=N.props&&N.props.onVnodeUpdated)&&zt(()=>rn(se,te,N,oe),G)}else{let N;const{el:U,props:ie}=C,{bm:te,m:oe,parent:Ee,root:se,type:ue}=g,Ae=Mr(C);if(ti(g,!1),te&&Ks(te),!Ae&&(N=ie&&ie.onVnodeBeforeMount)&&rn(N,Ee,C),ti(g,!0),U&&Ve){const Te=()=>{g.subTree=no(g),Ve(U,g.subTree,g,G,null)};Ae&&ue.__asyncHydrate?ue.__asyncHydrate(U,g,Te):Te()}else{se.ce&&se.ce._injectChildStyle(ue);const Te=g.subTree=no(g);E(null,Te,F,K,g,G,Z),C.el=Te.el}if(oe&&zt(oe,G),!Ae&&(N=ie&&ie.onVnodeMounted)){const Te=C;zt(()=>rn(N,Ee,Te),G)}(C.shapeFlag&256||Ee&&Mr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&zt(g.a,G),g.isMounted=!0,C=F=K=null}};g.scope.on();const _=g.effect=new uu(M);g.scope.off();const A=g.update=_.run.bind(_),O=g.job=_.runIfDirty.bind(_);O.i=g,O.id=g.uid,_.scheduler=()=>Ja(O),ti(g,!0),A()},j=(g,C,F)=>{C.component=g;const K=g.vnode.props;g.vnode=C,g.next=null,od(g,C.props,K,F),ud(g,C.children,F),jn(),Ll(g),Zn()},z=(g,C,F,K,G,Z,J,M,_=!1)=>{const A=g&&g.children,O=g?g.shapeFlag:0,N=C.children,{patchFlag:U,shapeFlag:ie}=C;if(U>0){if(U&128){de(A,N,F,K,G,Z,J,M,_);return}else if(U&256){he(A,N,F,K,G,Z,J,M,_);return}}ie&8?(O&16&&Se(A,G,Z),N!==A&&u(F,N)):O&16?ie&16?de(A,N,F,K,G,Z,J,M,_):Se(A,G,Z,!0):(O&8&&u(F,""),ie&16&&H(N,F,K,G,Z,J,M,_))},he=(g,C,F,K,G,Z,J,M,_)=>{g=g||Gi,C=C||Gi;const A=g.length,O=C.length,N=Math.min(A,O);let U;for(U=0;U<N;U++){const ie=C[U]=_?zn(C[U]):an(C[U]);E(g[U],ie,F,null,G,Z,J,M,_)}A>O?Se(g,G,Z,!0,!1,N):H(C,F,K,G,Z,J,M,_,N)},de=(g,C,F,K,G,Z,J,M,_)=>{let A=0;const O=C.length;let N=g.length-1,U=O-1;for(;A<=N&&A<=U;){const ie=g[A],te=C[A]=_?zn(C[A]):an(C[A]);if(ar(ie,te))E(ie,te,F,null,G,Z,J,M,_);else break;A++}for(;A<=N&&A<=U;){const ie=g[N],te=C[U]=_?zn(C[U]):an(C[U]);if(ar(ie,te))E(ie,te,F,null,G,Z,J,M,_);else break;N--,U--}if(A>N){if(A<=U){const ie=U+1,te=ie<O?C[ie].el:K;for(;A<=U;)E(null,C[A]=_?zn(C[A]):an(C[A]),F,te,G,Z,J,M,_),A++}}else if(A>U)for(;A<=N;)Ne(g[A],G,Z,!0),A++;else{const ie=A,te=A,oe=new Map;for(A=te;A<=U;A++){const we=C[A]=_?zn(C[A]):an(C[A]);we.key!=null&&oe.set(we.key,A)}let Ee,se=0;const ue=U-te+1;let Ae=!1,Te=0;const me=new Array(ue);for(A=0;A<ue;A++)me[A]=0;for(A=ie;A<=N;A++){const we=g[A];if(se>=ue){Ne(we,G,Z,!0);continue}let Ge;if(we.key!=null)Ge=oe.get(we.key);else for(Ee=te;Ee<=U;Ee++)if(me[Ee-te]===0&&ar(we,C[Ee])){Ge=Ee;break}Ge===void 0?Ne(we,G,Z,!0):(me[Ge-te]=A+1,Ge>=Te?Te=Ge:Ae=!0,E(we,C[Ge],F,null,G,Z,J,M,_),se++)}const He=Ae?pd(me):Gi;for(Ee=He.length-1,A=ue-1;A>=0;A--){const we=te+A,Ge=C[we],P=we+1<O?C[we+1].el:K;me[A]===0?E(null,Ge,F,P,G,Z,J,M,_):Ae&&(Ee<0||A!==He[Ee]?Me(Ge,F,P,2):Ee--)}}},Me=(g,C,F,K,G=null)=>{const{el:Z,type:J,transition:M,children:_,shapeFlag:A}=g;if(A&6){Me(g.component.subTree,C,F,K);return}if(A&128){g.suspense.move(C,F,K);return}if(A&64){J.move(g,C,F,ze);return}if(J===Wt){i(Z,C,F);for(let N=0;N<_.length;N++)Me(_[N],C,F,K);i(g.anchor,C,F);return}if(J===io){T(g,C,F);return}if(K!==2&&A&1&&M)if(K===0)M.beforeEnter(Z),i(Z,C,F),zt(()=>M.enter(Z),G);else{const{leave:N,delayLeave:U,afterLeave:ie}=M,te=()=>i(Z,C,F),oe=()=>{N(Z,()=>{te(),ie&&ie()})};U?U(Z,te,oe):oe()}else i(Z,C,F)},Ne=(g,C,F,K=!1,G=!1)=>{const{type:Z,props:J,ref:M,children:_,dynamicChildren:A,shapeFlag:O,patchFlag:N,dirs:U,cacheIndex:ie}=g;if(N===-2&&(G=!1),M!=null&&Xo(M,null,F,g,!0),ie!=null&&(C.renderCache[ie]=void 0),O&256){C.ctx.deactivate(g);return}const te=O&1&&U,oe=!Mr(g);let Ee;if(oe&&(Ee=J&&J.onVnodeBeforeUnmount)&&rn(Ee,C,g),O&6)ae(g.component,F,K);else{if(O&128){g.suspense.unmount(F,K);return}te&&ei(g,null,C,"beforeUnmount"),O&64?g.type.remove(g,C,F,ze,K):A&&!A.hasOnce&&(Z!==Wt||N>0&&N&64)?Se(A,C,F,!1,!0):(Z===Wt&&N&384||!G&&O&16)&&Se(_,C,F),K&&Xe(g)}(oe&&(Ee=J&&J.onVnodeUnmounted)||te)&&zt(()=>{Ee&&rn(Ee,C,g),te&&ei(g,null,C,"unmounted")},F)},Xe=g=>{const{type:C,el:F,anchor:K,transition:G}=g;if(C===Wt){Q(F,K);return}if(C===io){b(g);return}const Z=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(g.shapeFlag&1&&G&&!G.persisted){const{leave:J,delayLeave:M}=G,_=()=>J(F,Z);M?M(g.el,Z,_):_()}else Z()},Q=(g,C)=>{let F;for(;g!==C;)F=h(g),r(g),g=F;r(C)},ae=(g,C,F)=>{const{bum:K,scope:G,job:Z,subTree:J,um:M,m:_,a:A}=g;Bl(_),Bl(A),K&&Ks(K),G.stop(),Z&&(Z.flags|=8,Ne(J,g,C,F)),M&&zt(M,C),zt(()=>{g.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Se=(g,C,F,K=!1,G=!1,Z=0)=>{for(let J=Z;J<g.length;J++)Ne(g[J],C,F,K,G)},pe=g=>{if(g.shapeFlag&6)return pe(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const C=h(g.anchor||g.el),F=C&&C[Fh];return F?h(F):C};let De=!1;const Pe=(g,C,F)=>{g==null?C._vnode&&Ne(C._vnode,null,null,!0):E(C._vnode||null,g,C,null,null,null,F),C._vnode=g,De||(De=!0,Ll(),Ru(),De=!1)},ze={p:E,um:Ne,m:Me,r:Xe,mt:ee,mc:H,pc:z,pbc:v,n:pe,o:n};let qe,Ve;return{render:Pe,hydrate:qe,createApp:id(Pe,qe)}}function eo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function dd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xu(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Xu(o,a)),a.type===Bs&&(a.el=o.el)}}function pd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function qu(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qu(e)}function Bl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const md=Symbol.for("v-scx"),_d=()=>us(md);function to(n,e,t){return Yu(n,e,t)}function Yu(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:o}=t,a=_t({},t),l=e&&i||!e&&s!=="post";let c;if(Rr){if(s==="sync"){const m=_d();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=fn,m.resume=fn,m.pause=fn,m}}const u=Rt;a.call=(m,x,E)=>dn(m,u,x,E);let f=!1;s==="post"?a.scheduler=m=>{zt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(m,x)=>{x?m():Ja(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Ph(n,e,a);return Rr&&(c?c.push(h):l&&h()),h}function gd(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?Ku(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=Lr(this),a=Yu(r,s.bind(i),t);return o(),a}function Ku(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const vd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qn(e)}Modifiers`]||n[`${Si(e)}Modifiers`];function xd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&vd(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>ht(u)?u.trim():u)),o.number&&(r=t.map(Kf)));let a,l=i[a=Ys(e)]||i[a=Ys(qn(e))];!l&&s&&(l=i[a=Ys(Si(e))]),l&&dn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,dn(c,n,6,r)}}function $u(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Fe(n)){const l=c=>{const u=$u(c,e,!0);u&&(a=!0,_t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>o[l]=null):_t(o,s),st(n)&&i.set(n,o),o)}function Os(n,e){return!n||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,Si(e))||Ze(n,e))}function no(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:x,inheritAttrs:E}=n,p=Es(n);let d,w;try{if(t.shapeFlag&4){const b=r||i,B=b;d=an(c.call(B,b,u,f,m,h,x)),w=a}else{const b=e;d=an(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),w=e.props?a:Md(a)}}catch(b){Er.length=0,Ns(b,n,1),d=Kt(vi)}let T=d;if(w&&E!==!1){const b=Object.keys(w),{shapeFlag:B}=T;b.length&&B&7&&(s&&b.some(Ha)&&(w=Sd(w,s)),T=$i(T,w,!1,!0))}return t.dirs&&(T=$i(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Qa(T,t.transition),d=T,Es(p),d}const Md=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ps(t))&&((e||(e={}))[t]=n[t]);return e},Sd=(n,e)=>{const t={};for(const i in n)(!Ha(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ed(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?zl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Os(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zl(i,o,c):!0:!!o;return!1}function zl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Os(t,s))return!0}return!1}function yd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ju=n=>n.__isSuspense;function Td(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):Uh(n)}const Wt=Symbol.for("v-fgt"),Bs=Symbol.for("v-txt"),vi=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),Er=[];let Gt=null;function bn(n=!1){Er.push(Gt=n?null:[])}function bd(){Er.pop(),Gt=Er[Er.length-1]||null}let wr=1;function Hl(n){wr+=n,n<0&&Gt&&(Gt.hasOnce=!0)}function Zu(n){return n.dynamicChildren=wr>0?Gt||Gi:null,bd(),wr>0&&Gt&&Gt.push(n),n}function Gn(n,e,t,i,r,s){return Zu(vt(n,e,t,i,r,s,!0))}function Ad(n,e,t,i,r){return Zu(Kt(n,e,t,i,r,!0))}function Ju(n){return n?n.__v_isVNode===!0:!1}function ar(n,e){return n.type===e.type&&n.key===e.key}const Qu=({key:n})=>n??null,fs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||yt(n)||Fe(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function vt(n,e=null,t=null,i=0,r=null,s=n===Wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qu(e),ref:e&&fs(e),scopeId:Pu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(sl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),wr>0&&!o&&Gt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gt.push(l),l}const Kt=wd;function wd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$h)&&(n=vi),Ju(n)){const a=$i(n,e,!0);return t&&sl(a,t),wr>0&&!s&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(n)]=a:Gt.push(a)),a.patchFlag=-2,a}if(Bd(n)&&(n=n.__vccOpts),e){e=Rd(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=ka(a)),st(l)&&(Za(l)&&!Ue(l)&&(l=_t({},l)),e.style=yr(l))}const o=ht(n)?1:ju(n)?128:Oh(n)?64:st(n)?4:Fe(n)?2:0;return vt(n,e,t,i,r,o,s,!0)}function Rd(n){return n?Za(n)||Bu(n)?_t({},n):n:null}function $i(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Pd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qu(c),ref:e&&e.ref?t&&s?Ue(s)?s.concat(fs(e)):[s,fs(e)]:fs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$i(n.ssContent),ssFallback:n.ssFallback&&$i(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Qa(u,l.clone(u)),u}function Cd(n=" ",e=0){return Kt(Bs,null,n,e)}function Gl(n="",e=!1){return e?(bn(),Ad(vi,null,n)):Kt(vi,null,n)}function an(n){return n==null||typeof n=="boolean"?Kt(vi):Ue(n)?Kt(Wt,null,n.slice()):Ju(n)?zn(n):Kt(Bs,null,String(n))}function zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$i(n)}function sl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),sl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Bu(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[Cd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Pd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ka([e.class,i.class]));else if(r==="style")e.style=yr([e.style,i.style]);else if(Ps(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function rn(n,e,t,i=null){dn(n,e,7,[t,i])}const Ld=Nu();let Dd=0;function Id(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ld,s={uid:Dd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new th(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hu(i,r),emitsOptions:$u(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xd.bind(null,s),n.ce&&n.ce(s),s}let Rt=null,Ts,jo;{const n=Is(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ts=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),jo=e("__VUE_SSR_SETTERS__",t=>Rr=t)}const Lr=n=>{const e=Rt;return Ts(n),n.scope.on(),()=>{n.scope.off(),Ts(e)}},Vl=()=>{Rt&&Rt.scope.off(),Ts(null)};function ef(n){return n.vnode.shapeFlag&4}let Rr=!1;function Ud(n,e=!1,t=!1){e&&jo(e);const{props:i,children:r}=n.vnode,s=ef(n);sd(n,i,s,e),cd(n,r,t);const o=s?Nd(n,e):void 0;return e&&jo(!1),o}function Nd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jh);const{setup:i}=t;if(i){jn();const r=n.setupContext=i.length>1?Od(n):null,s=Lr(n),o=Pr(i,n,0,[n.props,r]),a=nu(o);if(Zn(),s(),(a||n.sp)&&!Mr(n)&&Lu(n),a){if(o.then(Vl,Vl),e)return o.then(l=>{kl(n,l,e)}).catch(l=>{Ns(l,n,0)});n.asyncDep=o}else kl(n,o,e)}else tf(n,e)}function kl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=bu(e)),tf(n,t)}let Wl;function tf(n,e,t){const i=n.type;if(!n.render){if(!e&&Wl&&!i.render){const r=i.template||il(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:a},o),l);i.render=Wl(r,c)}}n.render=i.render||fn}{const r=Lr(n);jn();try{Zh(n)}finally{Zn(),r()}}}const Fd={get(n,e){return St(n,"get",""),n[e]}};function Od(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fd),slots:n.slots,emit:n.emit,expose:e}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bu(Eh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Sr)return Sr[t](n)},has(e,t){return t in e||t in Sr}})):n.proxy}function Bd(n){return Fe(n)&&"__vccOpts"in n}const zd=(n,e)=>Rh(n,e,Rr),Hd="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zo;const Xl=typeof window<"u"&&window.trustedTypes;if(Xl)try{Zo=Xl.createPolicy("vue",{createHTML:n=>n})}catch{}const nf=Zo?n=>Zo.createHTML(n):n=>n,Gd="http://www.w3.org/2000/svg",Vd="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,ql=yn&&yn.createElement("template"),kd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?yn.createElementNS(Gd,n):e==="mathml"?yn.createElementNS(Vd,n):t?yn.createElement(n,{is:t}):yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>yn.createTextNode(n),createComment:n=>yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ql.innerHTML=nf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ql.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Wd=Symbol("_vtc");function Xd(n,e,t){const i=n[Wd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yl=Symbol("_vod"),qd=Symbol("_vsh"),Yd=Symbol(""),Kd=/(^|;)\s*display\s*:/;function $d(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&hs(i,a,"")}else for(const o in e)t[o]==null&&hs(i,o,"");for(const o in t)o==="display"&&(s=!0),hs(i,o,t[o])}else if(r){if(e!==t){const o=i[Yd];o&&(t+=";"+o),i.cssText=t,s=Kd.test(t)}}else e&&n.removeAttribute("style");Yl in n&&(n[Yl]=s?i.display:"",n[qd]&&(i.display="none"))}const Kl=/\s*!important$/;function hs(n,e,t){if(Ue(t))t.forEach(i=>hs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=jd(n,e);Kl.test(t)?n.setProperty(Si(i),t.replace(Kl,""),"important"):n[i]=t}}const $l=["Webkit","Moz","ms"],ro={};function jd(n,e){const t=ro[e];if(t)return t;let i=qn(e);if(i!=="filter"&&i in n)return ro[e]=i;i=su(i);for(let r=0;r<$l.length;r++){const s=$l[r]+i;if(s in n)return ro[e]=s}return e}const jl="http://www.w3.org/1999/xlink";function Zl(n,e,t,i,r,s=eh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jl,e.slice(6,e.length)):n.setAttributeNS(jl,e,t):t==null||s&&!au(t)?n.removeAttribute(e):n.setAttribute(e,s?"":$n(t)?String(t):t)}function Jl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=au(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Zd(n,e,t,i){n.addEventListener(e,t,i)}function Jd(n,e,t,i){n.removeEventListener(e,t,i)}const Ql=Symbol("_vei");function Qd(n,e,t,i,r=null){const s=n[Ql]||(n[Ql]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ep(e);if(i){const c=s[e]=ip(i,r);Zd(n,a,c,l)}else o&&(Jd(n,a,o,l),s[e]=void 0)}}const ec=/(?:Once|Passive|Capture)$/;function ep(n){let e;if(ec.test(n)){e={};let i;for(;i=n.match(ec);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Si(n.slice(2)),e]}let so=0;const tp=Promise.resolve(),np=()=>so||(tp.then(()=>so=0),so=Date.now());function ip(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;dn(rp(i,t.value),e,5,[i])};return t.value=n,t.attached=np(),t}function rp(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Xd(n,i,o):e==="style"?$d(n,t,i):Ps(e)?Ha(e)||Qd(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):op(n,e,i,o))?(Jl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zl(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ht(i))?Jl(n,qn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zl(n,e,i,o))};function op(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&tc(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tc(e)&&ht(t)?!1:e in n}const ap=_t({patchProp:sp},kd);let nc;function lp(){return nc||(nc=fd(ap))}const cp=(...n)=>{const e=lp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=fp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,up(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function up(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fp(n){return ht(n)?document.querySelector(n):n}const hp="/portfolio/assets/fleche-vers-le-haut-tTNjgn9P.png",al=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},dp={},pp={class:"Presentation"};function mp(n,e){return bn(),Gn("section",pp,e[0]||(e[0]=[vt("div",{class:"Presentation__textcontainer"},[vt("h1",null,"AckerProd"),vt("div",{class:"Presentation__textcontainer__text"},[vt("p",null,"Station de développement web et 3D"),vt("button",null,[vt("img",{src:hp})])])],-1)]))}const _p=al(dp,[["render",mp],["__scopeId","data-v-5c5616b4"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="169",gp=0,ic=1,vp=2,rf=1,xp=2,En=3,Yn=0,It=1,An=2,Wn=0,qi=1,rc=2,sc=3,oc=4,Mp=5,fi=100,Sp=101,Ep=102,yp=103,Tp=104,bp=200,Ap=201,wp=202,Rp=203,Jo=204,Qo=205,Cp=206,Pp=207,Lp=208,Dp=209,Ip=210,Up=211,Np=212,Fp=213,Op=214,ea=0,ta=1,na=2,ji=3,ia=4,ra=5,sa=6,oa=7,cl=0,Bp=1,zp=2,Xn=0,Hp=1,Gp=2,Vp=3,kp=4,Wp=5,Xp=6,qp=7,sf=300,Zi=301,Ji=302,aa=303,la=304,zs=306,ca=1e3,di=1001,ua=1002,qt=1003,Yp=1004,Vr=1005,Qt=1006,oo=1007,pi=1008,Cn=1009,of=1010,af=1011,Cr=1012,ul=1013,xi=1014,wn=1015,Dr=1016,fl=1017,hl=1018,Qi=1020,lf=35902,cf=1021,uf=1022,tn=1023,ff=1024,hf=1025,Yi=1026,er=1027,df=1028,dl=1029,pf=1030,pl=1031,ml=1033,ds=33776,ps=33777,ms=33778,_s=33779,fa=35840,ha=35841,da=35842,pa=35843,ma=36196,_a=37492,ga=37496,va=37808,xa=37809,Ma=37810,Sa=37811,Ea=37812,ya=37813,Ta=37814,ba=37815,Aa=37816,wa=37817,Ra=37818,Ca=37819,Pa=37820,La=37821,gs=36492,Da=36494,Ia=36495,mf=36283,Ua=36284,Na=36285,Fa=36286,Kp=3200,$p=3201,_f=0,jp=1,Vn="",on="srgb",Jn="srgb-linear",_l="display-p3",Hs="display-p3-linear",bs="linear",rt="srgb",As="rec709",ws="p3",bi=7680,ac=519,Zp=512,Jp=513,Qp=514,gf=515,em=516,tm=517,nm=518,im=519,lc=35044,cc="300 es",Rn=2e3,Rs=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,Oa=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function rm(n,e){return(n%e+e)%e}function lo(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],E=r[0],p=r[3],d=r[6],w=r[1],T=r[4],b=r[7],B=r[2],L=r[5],R=r[8];return s[0]=o*E+a*w+l*B,s[3]=o*p+a*T+l*L,s[6]=o*d+a*b+l*R,s[1]=c*E+u*w+f*B,s[4]=c*p+u*T+f*L,s[7]=c*d+u*b+f*R,s[2]=h*E+m*w+x*B,s[5]=h*p+m*T+x*L,s[8]=h*d+m*b+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=f*E,e[1]=(r*c-u*i)*E,e[2]=(a*i-r*o)*E,e[3]=h*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=m*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Be;function vf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sm(){const n=Cs("canvas");return n.style.display="block",n}const uc={};function vs(n){n in uc||(uc[n]=!0,console.warn(n))}function om(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function am(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fc=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hc=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Jn]:{transfer:bs,primaries:As,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[on]:{transfer:rt,primaries:As,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hs]:{transfer:bs,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc)},[_l]:{transfer:rt,primaries:ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc).convertLinearToSRGB()}},cm=new Set([Jn,Hs]),Je={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cr[e].toReference,r=cr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return cr[n].primaries},getTransfer:function(n){return n===Vn?bs:cr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(cr[e].luminanceCoefficients)}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Cs("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fm=0;class xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fo(r[o].image)):s.push(fo(r[o]))}else s=fo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hm=0;class Ut extends nr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=di,r=di,s=Qt,o=pi,a=tn,l=Cn,c=Ut.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ir(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sf;Ut.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],E=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(m+1)/2,B=(d+1)/2,L=(u+h)/4,R=(f+E)/4,H=(x+p)/4;return T>b&&T>B?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=L/i,s=R/i):b>B?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=H/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=R/s,r=H/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-x)*(p-x)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(f-E)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends dm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mf extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pm extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=E;return}if(f!==E||l!==h||c!==m||u!==x){let p=1-a;const d=l*h+c*m+u*x+f*E,w=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const B=Math.sqrt(T),L=Math.atan2(B,d*w);p=Math.sin(p*L)/B,a=Math.sin(a*L)/B}const b=a*w;if(l=l*p+h*b,c=c*p+m*b,u=u*p+x*b,f=f*p+E*b,p===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=B,c*=B,u*=B,f*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-a*m,e[t+2]=c*x+u*m+a*h-l*f,e[t+3]=u*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new W,dc=new Ur;class Nr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(s,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Wr.subVectors(this.max,ur),wi.subVectors(e.a,ur),Ri.subVectors(e.b,ur),Ci.subVectors(e.c,ur),Dn.subVectors(Ri,wi),In.subVectors(Ci,Ri),ni.subVectors(wi,Ci);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-ni.z,ni.y,Dn.z,0,-Dn.x,In.z,0,-In.x,ni.z,0,-ni.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-ni.y,ni.x,0];return!po(t,wi,Ri,Ci,Wr)||(t=[1,0,0,0,1,0,0,0,1],!po(t,wi,Ri,Ci,Wr))?!1:(Xr.crossVectors(Dn,In),t=[Xr.x,Xr.y,Xr.z],po(t,wi,Ri,Ci,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new W,new W,new W,new W,new W,new W,new W,new W],jt=new W,kr=new Nr,wi=new W,Ri=new W,Ci=new W,Dn=new W,In=new W,ni=new W,ur=new W,Wr=new W,Xr=new W,ii=new W;function po(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ii.fromArray(n,s);const a=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mm=new Nr,fr=new W,mo=new W;class gl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(mo)),this.expandByPoint(fr.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new W,_o=new W,qr=new W,Un=new W,go=new W,Yr=new W,vo=new W;class _m{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_o.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(_o);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=Un.dot(this.direction),l=-Un.dot(qr),c=Un.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const E=1/u;f*=E,h*=E,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_o).addScaledVector(qr,h),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){go.subVectors(t,e),Yr.subVectors(i,e),vo.crossVectors(go,Yr);let o=this.direction.dot(vo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(Yr.crossVectors(Un,Yr));if(l<0)return null;const c=a*this.direction.dot(go.cross(Un));if(c<0||l+c>o)return null;const u=-a*Un.dot(vo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,x,E,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,x,E,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,x,E,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=E,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,E=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-E*c,t[9]=-a*l,t[2]=E-h*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,E=c*f;t[0]=h+E*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=E+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,E=c*f;t[0]=h-E*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=E-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,E=a*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+E,t[1]=l*f,t[5]=E*c+h,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=E-h*f,t[8]=x*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,E=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+E,t[5]=o*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*u,t[10]=E*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,vm)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Nn.crossVectors(i,Ot),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Nn.crossVectors(i,Ot)),Nn.normalize(),Kr.crossVectors(Ot,Nn),r[0]=Nn.x,r[4]=Kr.x,r[8]=Ot.x,r[1]=Nn.y,r[5]=Kr.y,r[9]=Ot.y,r[2]=Nn.z,r[6]=Kr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],E=i[6],p=i[10],d=i[14],w=i[3],T=i[7],b=i[11],B=i[15],L=r[0],R=r[4],H=r[8],le=r[12],v=r[1],y=r[5],$=r[9],q=r[13],ee=r[2],re=r[6],X=r[10],j=r[14],z=r[3],he=r[7],de=r[11],Me=r[15];return s[0]=o*L+a*v+l*ee+c*z,s[4]=o*R+a*y+l*re+c*he,s[8]=o*H+a*$+l*X+c*de,s[12]=o*le+a*q+l*j+c*Me,s[1]=u*L+f*v+h*ee+m*z,s[5]=u*R+f*y+h*re+m*he,s[9]=u*H+f*$+h*X+m*de,s[13]=u*le+f*q+h*j+m*Me,s[2]=x*L+E*v+p*ee+d*z,s[6]=x*R+E*y+p*re+d*he,s[10]=x*H+E*$+p*X+d*de,s[14]=x*le+E*q+p*j+d*Me,s[3]=w*L+T*v+b*ee+B*z,s[7]=w*R+T*y+b*re+B*he,s[11]=w*H+T*$+b*X+B*de,s[15]=w*le+T*q+b*j+B*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],E=e[7],p=e[11],d=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+E*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],E=e[13],p=e[14],d=e[15],w=f*p*c-E*h*c+E*l*m-a*p*m-f*l*d+a*h*d,T=x*h*c-u*p*c-x*l*m+o*p*m+u*l*d-o*h*d,b=u*E*c-x*f*c+x*a*m-o*E*m-u*a*d+o*f*d,B=x*f*l-u*E*l-x*a*h+o*E*h+u*a*p-o*f*p,L=t*w+i*T+r*b+s*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=w*R,e[1]=(E*h*s-f*p*s-E*r*m+i*p*m+f*r*d-i*h*d)*R,e[2]=(a*p*s-E*l*s+E*r*c-i*p*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*R,e[4]=T*R,e[5]=(u*p*s-x*h*s+x*r*m-t*p*m-u*r*d+t*h*d)*R,e[6]=(x*l*s-o*p*s-x*r*c+t*p*c+o*r*d-t*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*R,e[8]=b*R,e[9]=(x*f*s-u*E*s-x*i*m+t*E*m+u*i*d-t*f*d)*R,e[10]=(o*E*s-x*a*s+x*i*c-t*E*c-o*i*d+t*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*R,e[12]=B*R,e[13]=(u*E*r-x*f*r+x*i*h-t*E*h-u*i*p+t*f*p)*R,e[14]=(x*a*r-o*E*r-x*i*l+t*E*l+o*i*p-t*a*p)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,x=s*f,E=o*u,p=o*f,d=a*f,w=l*c,T=l*u,b=l*f,B=i.x,L=i.y,R=i.z;return r[0]=(1-(E+d))*B,r[1]=(m+b)*B,r[2]=(x-T)*B,r[3]=0,r[4]=(m-b)*L,r[5]=(1-(h+d))*L,r[6]=(p+w)*L,r[7]=0,r[8]=(x+T)*R,r[9]=(p-w)*R,r[10]=(1-(h+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),a=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/o,f=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,x;if(a===Rn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Rs)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Rn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let x,E;if(a===Rn)x=(o+s)*f,E=-2*f;else if(a===Rs)x=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=E,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new W,Zt=new lt,gm=new W(0,0,0),vm=new W(1,1,1),Nn=new W,Kr=new W,Ot=new W,pc=new lt,mc=new Ur;class pn{constructor(e=0,t=0,i=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xm=0;const _c=new W,Li=new Ur,xn=new lt,$r=new W,hr=new W,Mm=new W,Sm=new Ur,gc=new W(1,0,0),vc=new W(0,1,0),xc=new W(0,0,1),Mc={type:"added"},Em={type:"removed"},Di={type:"childadded",child:null},xo={type:"childremoved",child:null};class Tt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new W,t=new pn,i=new Ur,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Be}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(hr,$r,this.up):xn.lookAt($r,hr,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(xn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Em),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new W(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new W,Mn=new W,Mo=new W,Sn=new W,Ii=new W,Ui=new W,Sc=new W,So=new W,Eo=new W,yo=new W,To=new at,bo=new at,Ao=new at;class en{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),Mn.subVectors(i,t),Mo.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(Mn),l=Jt.dot(Mo),c=Mn.dot(Mn),u=Mn.dot(Mo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return To.setScalar(0),bo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(To,s.x),o.addScaledVector(bo,s.y),o.addScaledVector(Ao,s.z),o}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),Mn.subVectors(e,t),Jt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,i),Ui.subVectors(s,i),So.subVectors(e,i);const l=Ii.dot(So),c=Ui.dot(So);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,r);const u=Ii.dot(Eo),f=Ui.dot(Eo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ii,o);yo.subVectors(e,s);const m=Ii.dot(yo),x=Ui.dot(yo);if(x>=0&&m<=x)return t.copy(s);const E=m*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Ui,a);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Sc.subVectors(s,r),a=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Sc,a);const d=1/(p+E+h);return o=E*d,a=h*d,t.copy(i).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=rm(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wo(o,s,e+1/3),this.g=wo(o,s,e),this.b=wo(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Dt(Mt.r*255,0,255))*65536+Math.round(Dt(Mt.g*255,0,255))*256+Math.round(Dt(Mt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=on){Je.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(jr);const i=lo(Fn.h,jr.h,t),r=lo(Fn.s,jr.s,t),s=lo(Fn.l,jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new ke;ke.NAMES=Ef;let ym=0;class Fr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yf extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new W,Zr=new Qe;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Tf extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bf extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _i extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tm=0;const kt=new lt,Ro=new Tt,Ni=new W,Bt=new Nr,dr=new Nr,mt=new W;class Ei extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?bf:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Bt.min,dr.min),Bt.expandByPoint(mt),mt.addVectors(Bt.max,dr.max),Bt.expandByPoint(mt)):(Bt.expandByPoint(dr.min),Bt.expandByPoint(dr.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),mt.add(Ni)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new W,l[H]=new W;const c=new W,u=new W,f=new W,h=new Qe,m=new Qe,x=new Qe,E=new W,p=new W;function d(H,le,v){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,le),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,H),m.fromBufferAttribute(s,le),x.fromBufferAttribute(s,v),u.sub(c),f.sub(c),m.sub(h),x.sub(h);const y=1/(m.x*x.y-x.x*m.y);isFinite(y)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(y),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(y),a[H].add(E),a[le].add(E),a[v].add(E),l[H].add(p),l[le].add(p),l[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let H=0,le=w.length;H<le;++H){const v=w[H],y=v.start,$=v.count;for(let q=y,ee=y+$;q<ee;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new W,b=new W,B=new W,L=new W;function R(H){B.fromBufferAttribute(r,H),L.copy(B);const le=a[H];T.copy(le),T.sub(B.multiplyScalar(B.dot(le))).normalize(),b.crossVectors(L,le);const y=b.dot(l[H])<0?-1:1;o.setXYZW(H,T.x,T.y,T.z,y)}for(let H=0,le=w.length;H<le;++H){const v=w[H],y=v.start,$=v.count;for(let q=y,ee=y+$;q<ee;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let E=0,p=l.length;E<p;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new lt,ri=new _m,Jr=new gl,yc=new W,Qr=new W,es=new W,ts=new W,Co=new W,ns=new W,Tc=new W,is=new W;class un extends Tt{constructor(e=new Ei,t=new yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Co.fromBufferAttribute(f,e),o?ns.addScaledVector(Co,u):ns.addScaledVector(Co.sub(t),u))}t.add(ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Jr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Jr,yc)===null||ri.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(Ec.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Ec),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){const p=h[x],d=o[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,B=T;b<B;b+=3){const L=a.getX(b),R=a.getX(b+1),H=a.getX(b+2);r=rs(this,d,e,i,c,u,f,L,R,H),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let p=x,d=E;p<d;p+=3){const w=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);r=rs(this,o,e,i,c,u,f,w,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=h.length;x<E;x++){const p=h[x],d=o[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,B=T;b<B;b+=3){const L=b,R=b+1,H=b+2;r=rs(this,d,e,i,c,u,f,L,R,H),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=x,d=E;p<d;p+=3){const w=p,T=p+1,b=p+2;r=rs(this,o,e,i,c,u,f,w,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function bm(n,e,t,i,r,s,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yn,a),l===null)return null;is.copy(a),is.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:n}}function rs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qr),n.getVertexPosition(l,es),n.getVertexPosition(c,ts);const u=bm(n,e,t,i,Qr,es,ts,Tc);if(u){const f=new W;en.getBarycoord(Tc,Qr,es,ts,f),r&&(u.uv=en.getInterpolatedAttribute(r,a,l,c,f,new Qe)),s&&(u.uv1=en.getInterpolatedAttribute(s,a,l,c,f,new Qe)),o&&(u.normal=en.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new W,materialIndex:0};en.getNormal(Qr,es,ts,h.normal),u.face=h,u.barycoord=f}return u}class ir extends Ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(f,2));function x(E,p,d,w,T,b,B,L,R,H,le){const v=b/R,y=B/H,$=b/2,q=B/2,ee=L/2,re=R+1,X=H+1;let j=0,z=0;const he=new W;for(let de=0;de<X;de++){const Me=de*y-q;for(let Ne=0;Ne<re;Ne++){const Xe=Ne*v-$;he[E]=Xe*w,he[p]=Me*T,he[d]=ee,c.push(he.x,he.y,he.z),he[E]=0,he[p]=0,he[d]=L>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ne/R),f.push(1-de/H),j+=1}}for(let de=0;de<H;de++)for(let Me=0;Me<R;Me++){const Ne=h+Me+re*de,Xe=h+Me+re*(de+1),Q=h+(Me+1)+re*(de+1),ae=h+(Me+1)+re*de;l.push(Ne,Xe,ae),l.push(Xe,Q,ae),z+=6}a.addGroup(m,z,le),m+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Af(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const wm={clone:tr,merge:At};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wf extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new W,bc=new Qe,Ac=new Qe;class Xt extends wf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,bc,Ac),t.subVectors(Ac,bc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class Pm extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const o=new Xt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Rf extends Ut{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lm extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Wn});s.uniforms.tEquirect.value=t;const o=new un(r,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Qt),new Pm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Po=new W,Dm=new W,Im=new Be;class ci{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Po.subVectors(i,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Im.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new gl,ss=new W;class vl{constructor(e=new ci,t=new ci,i=new ci,r=new ci,s=new ci,o=new ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],x=r[9],E=r[10],p=r[11],d=r[12],w=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,p-m,b-d).normalize(),i[1].setComponents(l+s,h+c,p+m,b+d).normalize(),i[2].setComponents(l+o,h+u,p+x,b+w).normalize(),i[3].setComponents(l-o,h-u,p-x,b-w).normalize(),i[4].setComponents(l-a,h-f,p-E,b-T).normalize(),t===Rn)i[5].setComponents(l+a,h+f,p+E,b+T).normalize();else if(t===Rs)i[5].setComponents(a,f,E,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Um(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],E=f[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,f[h]=E)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const E=f[m];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Gs extends Ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],x=[],E=[],p=[];for(let d=0;d<u;d++){const w=d*h-o;for(let T=0;T<c;T++){const b=T*f-s;x.push(b,-w,0),E.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const T=w+c*d,b=w+c*(d+1),B=w+1+c*(d+1),L=w+1+c*d;m.push(T,b,L),m.push(b,B,L)}this.setIndex(m),this.setAttribute("position",new _i(x,3)),this.setAttribute("normal",new _i(E,3)),this.setAttribute("uv",new _i(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r_=`#define PI 3.141592653589793
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
} // validated`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o_=`vec3 transformedNormal = objectNormal;
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
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`
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
}`,d_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A_=`uniform bool receiveShadow;
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
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
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
#endif`,I_=`struct PhysicalMaterial {
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
}`,U_=`
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
#endif`,N_=`#if defined( RE_IndirectDiffuse )
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W_=`#if defined( USE_POINTS_UV )
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
#endif`,X_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`#ifdef USE_MORPHTARGETS
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
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,rv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Nm,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:Gm,aomap_pars_fragment:Vm,batching_pars_vertex:km,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:Ym,iridescence_fragment:Km,bumpmap_pars_fragment:$m,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Qm,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:r_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:o_,displacementmap_pars_vertex:a_,displacementmap_vertex:l_,emissivemap_fragment:c_,emissivemap_pars_fragment:u_,colorspace_fragment:f_,colorspace_pars_fragment:h_,envmap_fragment:d_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:__,envmap_physical_pars_fragment:w_,envmap_vertex:g_,fog_vertex:v_,fog_pars_vertex:x_,fog_fragment:M_,fog_pars_fragment:S_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:y_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:b_,lights_pars_begin:A_,lights_toon_fragment:R_,lights_toon_pars_fragment:C_,lights_phong_fragment:P_,lights_phong_pars_fragment:L_,lights_physical_fragment:D_,lights_physical_pars_fragment:I_,lights_fragment_begin:U_,lights_fragment_maps:N_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:H_,map_fragment:G_,map_pars_fragment:V_,map_particle_fragment:k_,map_particle_pars_fragment:W_,metalnessmap_fragment:X_,metalnessmap_pars_fragment:q_,morphinstance_vertex:Y_,morphcolor_vertex:K_,morphnormal_vertex:$_,morphtarget_pars_vertex:j_,morphtarget_vertex:Z_,normal_fragment_begin:J_,normal_fragment_maps:Q_,normal_pars_fragment:eg,normal_pars_vertex:tg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:ug,project_vertex:fg,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:gg,shadowmap_vertex:vg,shadowmask_pars_fragment:xg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:Eg,skinnormal_vertex:yg,specularmap_fragment:Tg,specularmap_pars_fragment:bg,tonemapping_fragment:Ag,tonemapping_pars_fragment:wg,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Pg,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ig,background_vert:Ug,background_frag:Ng,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:Hg,depth_frag:Gg,distanceRGBA_vert:Vg,distanceRGBA_frag:kg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:qg,linedashed_frag:Yg,meshbasic_vert:Kg,meshbasic_frag:$g,meshlambert_vert:jg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:rv,meshphysical_frag:sv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:lv,points_frag:cv,shadow_vert:uv,shadow_frag:fv,sprite_vert:hv,sprite_frag:dv},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ln={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ln.physical={uniforms:At([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const os={r:0,b:0,g:0},oi=new pn,pv=new lt;function mv(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function E(w){let T=!1;const b=x(w);b===null?d(a,l):b&&b.isColor&&(d(b,1),T=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,T){const b=x(T);b&&(b.isCubeTexture||b.mapping===zs)?(u===void 0&&(u=new un(new ir(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:tr(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),oi.copy(T.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(oi)),u.material.toneMapped=Je.getTransfer(b.colorSpace)!==rt,(f!==b||h!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new un(new Gs(2,2),new Kn({name:"BackgroundMaterial",uniforms:tr(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,T){w.getRGB(os,Af(n)),i.buffers.color.setClear(os.r,os.g,os.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:E,addToRenderList:p}}function _v(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,y,$,q,ee){let re=!1;const X=f(q,$,y);s!==X&&(s=X,c(s.object)),re=m(v,q,$,ee),re&&x(v,q,$,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,b(v,y,$,q),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,y,$){const q=$.wireframe===!0;let ee=i[v.id];ee===void 0&&(ee={},i[v.id]=ee);let re=ee[y.id];re===void 0&&(re={},ee[y.id]=re);let X=re[q];return X===void 0&&(X=h(l()),re[q]=X),X}function h(v){const y=[],$=[],q=[];for(let ee=0;ee<t;ee++)y[ee]=0,$[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:$,attributeDivisors:q,object:v,attributes:{},index:null}}function m(v,y,$,q){const ee=s.attributes,re=y.attributes;let X=0;const j=$.getAttributes();for(const z in j)if(j[z].location>=0){const de=ee[z];let Me=re[z];if(Me===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;X++}return s.attributesNum!==X||s.index!==q}function x(v,y,$,q){const ee={},re=y.attributes;let X=0;const j=$.getAttributes();for(const z in j)if(j[z].location>=0){let de=re[z];de===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),ee[z]=Me,X++}s.attributes=ee,s.attributesNum=X,s.index=q}function E(){const v=s.newAttributes;for(let y=0,$=v.length;y<$;y++)v[y]=0}function p(v){d(v,0)}function d(v,y){const $=s.newAttributes,q=s.enabledAttributes,ee=s.attributeDivisors;$[v]=1,q[v]===0&&(n.enableVertexAttribArray(v),q[v]=1),ee[v]!==y&&(n.vertexAttribDivisor(v,y),ee[v]=y)}function w(){const v=s.newAttributes,y=s.enabledAttributes;for(let $=0,q=y.length;$<q;$++)y[$]!==v[$]&&(n.disableVertexAttribArray($),y[$]=0)}function T(v,y,$,q,ee,re,X){X===!0?n.vertexAttribIPointer(v,y,$,ee,re):n.vertexAttribPointer(v,y,$,q,ee,re)}function b(v,y,$,q){E();const ee=q.attributes,re=$.getAttributes(),X=y.defaultAttributeValues;for(const j in re){const z=re[j];if(z.location>=0){let he=ee[j];if(he===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){const de=he.normalized,Me=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;const Xe=Ne.buffer,Q=Ne.type,ae=Ne.bytesPerElement,Se=Q===n.INT||Q===n.UNSIGNED_INT||he.gpuType===ul;if(he.isInterleavedBufferAttribute){const pe=he.data,De=pe.stride,Pe=he.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<z.locationSize;ze++)d(z.location+ze,pe.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<z.locationSize;ze++)p(z.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ze=0;ze<z.locationSize;ze++)T(z.location+ze,Me/z.locationSize,Q,de,De*ae,(Pe+Me/z.locationSize*ze)*ae,Se)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)d(z.location+pe,he.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<z.locationSize;pe++)p(z.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let pe=0;pe<z.locationSize;pe++)T(z.location+pe,Me/z.locationSize,Q,de,Me*ae,Me/z.locationSize*pe*ae,Se)}}else if(X!==void 0){const de=X[j];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(z.location,de);break;case 3:n.vertexAttrib3fv(z.location,de);break;case 4:n.vertexAttrib4fv(z.location,de);break;default:n.vertexAttrib1fv(z.location,de)}}}}w()}function B(){H();for(const v in i){const y=i[v];for(const $ in y){const q=y[$];for(const ee in q)u(q[ee].object),delete q[ee];delete y[$]}delete i[v]}}function L(v){if(i[v.id]===void 0)return;const y=i[v.id];for(const $ in y){const q=y[$];for(const ee in q)u(q[ee].object),delete q[ee];delete y[$]}delete i[v.id]}function R(v){for(const y in i){const $=i[y];if($[v.id]===void 0)continue;const q=$[v.id];for(const ee in q)u(q[ee].object),delete q[ee];delete $[v.id]}}function H(){le(),o=!0,s!==r&&(s=r,c(s.object))}function le(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:le,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:p,disableUnusedAttributes:w}}function gv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let E=0;E<f;E++)x+=u[E];for(let E=0;E<h.length;E++)t.update(x,i,h[E])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const H=R===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!H)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=x>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:B,maxSamples:L}}function xv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ci,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,T=w*4;let b=d.clippingState||null;l.value=b,b=u(x,h,T,m);for(let B=0;B!==T;++B)b[B]=t[B];d.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,x!==!0||p===null){const d=m+E*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=m;T!==E;++T,b+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function Mv(n){let e=new WeakMap;function t(o,a){return a===aa?o.mapping=Zi:a===la&&(o.mapping=Ji),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===aa||a===la)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pf extends wf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,wc=[.125,.215,.35,.446,.526,.582],hi=20,Lo=new Pf,Rc=new ke;let Do=null,Io=0,Uo=0,No=!1;const ui=(1+Math.sqrt(5))/2,Bi=1/ui,Cc=[new W(-ui,Bi,0),new W(ui,Bi,0),new W(-Bi,0,ui),new W(Bi,0,ui),new W(0,ui,-Bi),new W(0,ui,Bi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Io,Uo),this._renderer.xr.enabled=No,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Dr,format:tn,colorSpace:Jn,depthBuffer:!1},r=Lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(s)),this._blurMaterial=Ev(s,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,r){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rc),u.toneMapping=Xn,u.autoClear=!1;const m=new yf({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),x=new un(new ir,m);let E=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,E=!0):(m.color.copy(Rc),E=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const T=this._cubeSize;as(r,w*T,d>2?T:0,T,T),u.setRenderTarget(r),E&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zi||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cc[(r-s-1)%Cc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new un(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hi-1),E=s/x,p=isFinite(s)?1+Math.floor(u*E):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let w=0;for(let R=0;R<hi;++R){const H=R/E,le=Math.exp(-H*H/2);d.push(le),R===0?w+=le:R<p&&(w+=2*le)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=x,h.mipInt.value=T-i;const b=this._sizeLods[r],B=3*b*(r>T-Hi?r-T+Hi:0),L=4*(this._cubeSize-b);as(t,B,L,3*b,2*b),l.setRenderTarget(t),l.render(f,Lo)}}function Sv(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+wc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hi?l=wc[o-n+Hi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,E=3,p=2,d=1,w=new Float32Array(E*x*m),T=new Float32Array(p*x*m),b=new Float32Array(d*x*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,H=L>2?0:-1,le=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];w.set(le,E*x*L),T.set(h,p*x*L);const v=[L,L,L,L,L,L];b.set(v,d*x*L)}const B=new Ei;B.setAttribute("position",new hn(w,E)),B.setAttribute("uv",new hn(T,p)),B.setAttribute("faceIndex",new hn(b,d)),e.push(B),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lc(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ev(n,e,t){const i=new Float32Array(hi),r=new W(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Dc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ic(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function yv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===aa||l===la,u=l===Zi||l===Ji;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Pc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Pc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bv(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const E=h.morphAttributes[x];for(let p=0,d=E.length;p<d;p++)e.remove(E[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const E=m[x];for(let p=0,d=E.length;p<d;p++)e.update(E[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let E=0;if(m!==null){const w=m.array;E=m.version;for(let T=0,b=w.length;T<b;T+=3){const B=w[T+0],L=w[T+1],R=w[T+2];h.push(B,L,L,R,R,B)}}else if(x!==void 0){const w=x.array;E=x.version;for(let T=0,b=w.length/3-1;T<b;T+=3){const B=T+0,L=T+1,R=T+2;h.push(B,L,L,R,R,B)}}else return;const p=new(vf(h)?bf:Tf)(h,1);p.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Av(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,x){x!==0&&(n.drawElementsInstanced(i,m,s,h*o,x),t.update(m,i,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let p=0;for(let d=0;d<x;d++)p+=m[d];t.update(p,i,1)}function f(h,m,x,E){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],E[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,E,0,x);let d=0;for(let w=0;w<x;w++)d+=m[w];for(let w=0;w<E.length;w++)t.update(d,i,E[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Rv(n,e,t){const i=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let v=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var m=v;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),E===!0&&(b=2),p===!0&&(b=3);let B=a.attributes.position.count*b,L=1;B>e.maxTextureSize&&(L=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const R=new Float32Array(B*L*4*f),H=new Mf(R,B,L,f);H.type=wn,H.needsUpdate=!0;const le=b*4;for(let y=0;y<f;y++){const $=d[y],q=w[y],ee=T[y],re=B*L*4*y;for(let X=0;X<$.count;X++){const j=X*le;x===!0&&(r.fromBufferAttribute($,X),R[re+j+0]=r.x,R[re+j+1]=r.y,R[re+j+2]=r.z,R[re+j+3]=0),E===!0&&(r.fromBufferAttribute(q,X),R[re+j+4]=r.x,R[re+j+5]=r.y,R[re+j+6]=r.z,R[re+j+7]=0),p===!0&&(r.fromBufferAttribute(ee,X),R[re+j+8]=r.x,R[re+j+9]=r.y,R[re+j+10]=r.z,R[re+j+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:H,size:new Qe(B,L)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let p=0;p<c.length;p++)x+=c[p];const E=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",E),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Cv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Lf extends Ut{constructor(e,t,i,r,s,o,a,l,c,u=Yi){if(u!==Yi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yi&&(i=xi),i===void 0&&u===er&&(i=Qi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Df=new Ut,Uc=new Lf(1,1),If=new Mf,Uf=new pm,Nf=new Rf,Nc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nc[r];if(s===void 0&&(s=new Float32Array(r),Nc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vs(n,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;zc.set(i),n.uniformMatrix2fv(this.addr,!1,zc),pt(t,i)}}function Nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Bc.set(i),n.uniformMatrix3fv(this.addr,!1,Bc),pt(t,i)}}function Fv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Oc.set(i),n.uniformMatrix4fv(this.addr,!1,Oc),pt(t,i)}}function Ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Gv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Xv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uc.compareFunction=gf,s=Uc):s=Df,t.setTexture2D(e||s,r)}function qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uf,r)}function Yv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function Kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||If,r)}function $v(n){switch(n){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Iv;case 35674:return Uv;case 35675:return Nv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return kv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Kv}}function jv(n,e){n.uniform1fv(this.addr,e)}function Zv(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Jv(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Qv(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function ex(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tx(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nx(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ix(n,e){n.uniform1iv(this.addr,e)}function rx(n,e){n.uniform2iv(this.addr,e)}function sx(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function ax(n,e){n.uniform1uiv(this.addr,e)}function lx(n,e){n.uniform2uiv(this.addr,e)}function cx(n,e){n.uniform3uiv(this.addr,e)}function ux(n,e){n.uniform4uiv(this.addr,e)}function fx(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Df,s[o])}function hx(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uf,s[o])}function dx(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nf,s[o])}function px(n,e,t){const i=this.cache,r=e.length,s=Vs(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||If,s[o])}function mx(n){switch(n){case 5126:return jv;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class _x{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}}class gx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}}class vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Hc(n,e){n.seq.push(e),n.map[e.id]=e}function xx(n,e,t){const i=n.name,r=i.length;for(Fo.lastIndex=0;;){const s=Fo.exec(i),o=Fo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hc(t,c===void 0?new _x(a,n,e):new gx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vx(a),Hc(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Mx=37297;let Sx=0;function Ex(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yx(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===ws&&t===As?i="LinearDisplayP3ToLinearSRGB":e===As&&t===ws&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case Hs:return[i,"LinearTransferOETF"];case on:case _l:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ex(n.getShaderSource(e),o)}else return r}function Tx(n,e){const t=yx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bx(n,e){let t;switch(e){case Hp:t="Linear";break;case Gp:t="Reinhard";break;case Vp:t="Cineon";break;case kp:t="ACESFilmic";break;case Xp:t="AgX";break;case qp:t="Neutral";break;case Wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new W;function Ax(){Je.getLuminanceCoefficients(ls);const n=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Rx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(Px,Dx)}const Lx=new Map;function Dx(n,e){let t=Oe[e];if(t===void 0){const i=Lx.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(n){return n.replace(Ix,Ux)}function Ux(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Nx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Fx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Bx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Bp:e="ENVMAP_BLENDING_MIX";break;case zp:e="ENVMAP_BLENDING_ADD";break}return e}function zx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Nx(t),c=Fx(t),u=Ox(t),f=Bx(t),h=zx(t),m=wx(t),x=Rx(s),E=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(p=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Tx("linearToOutputTexel",t.outputColorSpace),Ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Ba(o),o=kc(o,t),o=Wc(o,t),a=Ba(a),a=kc(a,t),a=Wc(a,t),o=Xc(o),a=Xc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=w+p+o,b=w+d+a,B=Gc(r,r.VERTEX_SHADER,T),L=Gc(r,r.FRAGMENT_SHADER,b);r.attachShader(E,B),r.attachShader(E,L),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(y){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(E).trim(),q=r.getShaderInfoLog(B).trim(),ee=r.getShaderInfoLog(L).trim();let re=!0,X=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,B,L);else{const j=Vc(r,B,"vertex"),z=Vc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+$+`
`+j+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||ee==="")&&(X=!1);X&&(y.diagnostics={runnable:re,programLog:$,vertexShader:{log:q,prefix:p},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(B),r.deleteShader(L),H=new xs(r,E),le=Cx(r,E)}let H;this.getUniforms=function(){return H===void 0&&R(this),H};let le;this.getAttributes=function(){return le===void 0&&R(this),le};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(E,Mx)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=L,this}let Gx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kx(e),t.set(e,i)),i}}class kx{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}}function Wx(n,e,t,i,r,s,o){const a=new Sf,l=new Vx,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,y,$,q,ee){const re=q.fog,X=ee.geometry,j=v.isMeshStandardMaterial?q.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),he=z&&z.mapping===zs?z.image.height:null,de=E[v.type];v.precision!==null&&(x=r.getMaxPrecision(v.precision),x!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",x,"instead."));const Me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=Me!==void 0?Me.length:0;let Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let Q,ae,Se,pe;if(de){const Pt=ln[de];Q=Pt.vertexShader,ae=Pt.fragmentShader}else Q=v.vertexShader,ae=v.fragmentShader,l.update(v),Se=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);const De=n.getRenderTarget(),Pe=ee.isInstancedMesh===!0,ze=ee.isBatchedMesh===!0,qe=!!v.map,Ve=!!v.matcap,g=!!z,C=!!v.aoMap,F=!!v.lightMap,K=!!v.bumpMap,G=!!v.normalMap,Z=!!v.displacementMap,J=!!v.emissiveMap,M=!!v.metalnessMap,_=!!v.roughnessMap,A=v.anisotropy>0,O=v.clearcoat>0,N=v.dispersion>0,U=v.iridescence>0,ie=v.sheen>0,te=v.transmission>0,oe=A&&!!v.anisotropyMap,Ee=O&&!!v.clearcoatMap,se=O&&!!v.clearcoatNormalMap,ue=O&&!!v.clearcoatRoughnessMap,Ae=U&&!!v.iridescenceMap,Te=U&&!!v.iridescenceThicknessMap,me=ie&&!!v.sheenColorMap,He=ie&&!!v.sheenRoughnessMap,we=!!v.specularMap,Ge=!!v.specularColorMap,P=!!v.specularIntensityMap,ve=te&&!!v.transmissionMap,Y=te&&!!v.thicknessMap,ne=!!v.gradientMap,_e=!!v.alphaMap,xe=v.alphaTest>0,We=!!v.alphaHash,ut=!!v.extensions;let Ct=Xn;v.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ct=n.toneMapping);const Ye={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:ae,defines:v.defines,customVertexShaderID:Se,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:x,batching:ze,batchingColor:ze&&ee._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&ee.instanceColor!==null,instancingMorph:Pe&&ee.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:De===null?n.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Jn,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:Ve,envMap:g,envMapMode:g&&z.mapping,envMapCubeUVHeight:he,aoMap:C,lightMap:F,bumpMap:K,normalMap:G,displacementMap:m&&Z,emissiveMap:J,normalMapObjectSpace:G&&v.normalMapType===jp,normalMapTangentSpace:G&&v.normalMapType===_f,metalnessMap:M,roughnessMap:_,anisotropy:A,anisotropyMap:oe,clearcoat:O,clearcoatMap:Ee,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,dispersion:N,iridescence:U,iridescenceMap:Ae,iridescenceThicknessMap:Te,sheen:ie,sheenColorMap:me,sheenRoughnessMap:He,specularMap:we,specularColorMap:Ge,specularIntensityMap:P,transmission:te,transmissionMap:ve,thicknessMap:Y,gradientMap:ne,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:xe,alphaHash:We,combine:v.combine,mapUv:qe&&p(v.map.channel),aoMapUv:C&&p(v.aoMap.channel),lightMapUv:F&&p(v.lightMap.channel),bumpMapUv:K&&p(v.bumpMap.channel),normalMapUv:G&&p(v.normalMap.channel),displacementMapUv:Z&&p(v.displacementMap.channel),emissiveMapUv:J&&p(v.emissiveMap.channel),metalnessMapUv:M&&p(v.metalnessMap.channel),roughnessMapUv:_&&p(v.roughnessMap.channel),anisotropyMapUv:oe&&p(v.anisotropyMap.channel),clearcoatMapUv:Ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(v.sheenRoughnessMap.channel),specularMapUv:we&&p(v.specularMap.channel),specularColorMapUv:Ge&&p(v.specularColorMap.channel),specularIntensityMapUv:P&&p(v.specularIntensityMap.channel),transmissionMapUv:ve&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:_e&&p(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(G||A),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!X.attributes.uv&&(qe||_e),fog:!!re,useFog:v.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function w(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const $ in v.defines)y.push($),y.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(T(y,v),b(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),v.push(a.mask)}function B(v){const y=E[v.type];let $;if(y){const q=ln[y];$=wm.clone(q.uniforms)}else $=v.uniforms;return $}function L(v,y){let $;for(let q=0,ee=u.length;q<ee;q++){const re=u[q];if(re.cacheKey===y){$=re,++$.usedTimes;break}}return $===void 0&&($=new Hx(n,y,v,s),u.push($)),$}function R(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function H(v){l.remove(v)}function le(){l.dispose()}return{getParameters:d,getProgramCacheKey:w,getUniforms:B,acquireProgram:L,releaseProgram:R,releaseShaderCache:H,programs:u,dispose:le}}function Xx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,x,E,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:E,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=E,d.group=p),e++,d}function a(f,h,m,x,E,p){const d=o(f,h,m,x,E,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,x,E,p){const d=o(f,h,m,x,E,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||qx),i.length>1&&i.sort(h||Yc),r.length>1&&r.sort(h||Yc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Yx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kc,n.set(i,[o])):r>=s.length?(o=new Kc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ke};break;case"SpotLight":t={position:new W,direction:new W,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function $x(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jx=0;function Zx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jx(n){const e=new Kx,t=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new lt,o=new lt;function a(c){let u=0,f=0,h=0;for(let le=0;le<9;le++)i.probe[le].set(0,0,0);let m=0,x=0,E=0,p=0,d=0,w=0,T=0,b=0,B=0,L=0,R=0;c.sort(Zx);for(let le=0,v=c.length;le<v;le++){const y=c[le],$=y.color,q=y.intensity,ee=y.distance,re=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=$.r*q,f+=$.g*q,h+=$.b*q;else if(y.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(y.sh.coefficients[X],q);R++}else if(y.isDirectionalLight){const X=e.get(y);if(X.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const j=y.shadow,z=t.get(y);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=y.shadow.matrix,w++}i.directional[m]=X,m++}else if(y.isSpotLight){const X=e.get(y);X.position.setFromMatrixPosition(y.matrixWorld),X.color.copy($).multiplyScalar(q),X.distance=ee,X.coneCos=Math.cos(y.angle),X.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),X.decay=y.decay,i.spot[E]=X;const j=y.shadow;if(y.map&&(i.spotLightMap[B]=y.map,B++,j.updateMatrices(y),y.castShadow&&L++),i.spotLightMatrix[E]=j.matrix,y.castShadow){const z=t.get(y);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[E]=z,i.spotShadowMap[E]=re,b++}E++}else if(y.isRectAreaLight){const X=e.get(y);X.color.copy($).multiplyScalar(q),X.halfWidth.set(y.width*.5,0,0),X.halfHeight.set(0,y.height*.5,0),i.rectArea[p]=X,p++}else if(y.isPointLight){const X=e.get(y);if(X.color.copy(y.color).multiplyScalar(y.intensity),X.distance=y.distance,X.decay=y.decay,y.castShadow){const j=y.shadow,z=t.get(y);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=y.shadow.matrix,T++}i.point[x]=X,x++}else if(y.isHemisphereLight){const X=e.get(y);X.skyColor.copy(y.color).multiplyScalar(q),X.groundColor.copy(y.groundColor).multiplyScalar(q),i.hemi[d]=X,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const H=i.hash;(H.directionalLength!==m||H.pointLength!==x||H.spotLength!==E||H.rectAreaLength!==p||H.hemiLength!==d||H.numDirectionalShadows!==w||H.numPointShadows!==T||H.numSpotShadows!==b||H.numSpotMaps!==B||H.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+B-L,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,H.directionalLength=m,H.pointLength=x,H.spotLength=E,H.rectAreaLength=p,H.hemiLength=d,H.numDirectionalShadows=w,H.numPointShadows=T,H.numSpotShadows=b,H.numSpotMaps=B,H.numLightProbes=R,i.version=jx++)}function l(c,u){let f=0,h=0,m=0,x=0,E=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const T=c[d];if(T.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),E++}}}return{setup:a,setupView:l,state:i}}function $c(n){const e=new Jx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $c(n),e.set(r,[a])):s>=o.length?(a=new $c(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class e0 extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t0 extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
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
}`;function r0(n,e,t){let i=new vl;const r=new Qe,s=new Qe,o=new at,a=new e0({depthPacking:$p}),l=new t0,c={},u=t.maxTextureSize,f={[Yn]:It,[It]:Yn,[An]:An},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ei;x.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new un(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let d=this.type;this.render=function(L,R,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const le=n.getRenderTarget(),v=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Wn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=d!==En&&this.type===En,ee=d===En&&this.type!==En;for(let re=0,X=L.length;re<X;re++){const j=L[re],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const he=z.getFrameExtents();if(r.multiply(he),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,z.mapSize.y=s.y)),z.map===null||q===!0||ee===!0){const Me=this.type!==En?{minFilter:qt,magFilter:qt}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(r.x,r.y,Me),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const de=z.getViewportCount();for(let Me=0;Me<de;Me++){const Ne=z.getViewport(Me);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),$.viewport(o),z.updateMatrices(j,Me),i=z.getFrustum(),b(R,H,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===En&&w(z,H),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(le,v,y)};function w(L,R){const H=e.update(E);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Mi(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(R,null,H,h,E,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(R,null,H,m,E,null)}function T(L,R,H,le){let v=null;const y=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(y!==void 0)v=y;else if(v=H.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=v.uuid,q=R.uuid;let ee=c[$];ee===void 0&&(ee={},c[$]=ee);let re=ee[q];re===void 0&&(re=v.clone(),ee[q]=re,R.addEventListener("dispose",B)),v=re}if(v.visible=R.visible,v.wireframe=R.wireframe,le===En?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:f[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,H.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const $=n.properties.get(v);$.light=H}return v}function b(L,R,H,le,v){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===En)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const q=e.update(L),ee=L.material;if(Array.isArray(ee)){const re=q.groups;for(let X=0,j=re.length;X<j;X++){const z=re[X],he=ee[z.materialIndex];if(he&&he.visible){const de=T(L,he,le,v);L.onBeforeShadow(n,L,R,H,q,de,z),n.renderBufferDirect(H,null,q,de,L,z),L.onAfterShadow(n,L,R,H,q,de,z)}}}else if(ee.visible){const re=T(L,ee,le,v);L.onBeforeShadow(n,L,R,H,q,re,null),n.renderBufferDirect(H,null,q,re,L,null),L.onAfterShadow(n,L,R,H,q,re,null)}}const $=L.children;for(let q=0,ee=$.length;q<ee;q++)b($[q],R,H,le,v)}function B(L){L.target.removeEventListener("dispose",B);for(const H in c){const le=c[H],v=L.target.uuid;v in le&&(le[v].dispose(),delete le[v])}}}const s0={[ea]:ta,[na]:sa,[ia]:oa,[ji]:ra,[ta]:ea,[sa]:na,[oa]:ia,[ra]:ji};function o0(n){function e(){let P=!1;const ve=new at;let Y=null;const ne=new at(0,0,0,0);return{setMask:function(_e){Y!==_e&&!P&&(n.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){P=_e},setClear:function(_e,xe,We,ut,Ct){Ct===!0&&(_e*=ut,xe*=ut,We*=ut),ve.set(_e,xe,We,ut),ne.equals(ve)===!1&&(n.clearColor(_e,xe,We,ut),ne.copy(ve))},reset:function(){P=!1,Y=null,ne.set(-1,0,0,0)}}}function t(){let P=!1,ve=!1,Y=null,ne=null,_e=null;return{setReversed:function(xe){ve=xe},setTest:function(xe){xe?Se(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!P&&(n.depthMask(xe),Y=xe)},setFunc:function(xe){if(ve&&(xe=s0[xe]),ne!==xe){switch(xe){case ea:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case na:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case ia:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case sa:n.depthFunc(n.GREATER);break;case oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=xe}},setLocked:function(xe){P=xe},setClear:function(xe){_e!==xe&&(n.clearDepth(xe),_e=xe)},reset:function(){P=!1,Y=null,ne=null,_e=null}}}function i(){let P=!1,ve=null,Y=null,ne=null,_e=null,xe=null,We=null,ut=null,Ct=null;return{setTest:function(Ye){P||(Ye?Se(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Ye){ve!==Ye&&!P&&(n.stencilMask(Ye),ve=Ye)},setFunc:function(Ye,Pt,mn){(Y!==Ye||ne!==Pt||_e!==mn)&&(n.stencilFunc(Ye,Pt,mn),Y=Ye,ne=Pt,_e=mn)},setOp:function(Ye,Pt,mn){(xe!==Ye||We!==Pt||ut!==mn)&&(n.stencilOp(Ye,Pt,mn),xe=Ye,We=Pt,ut=mn)},setLocked:function(Ye){P=Ye},setClear:function(Ye){Ct!==Ye&&(n.clearStencil(Ye),Ct=Ye)},reset:function(){P=!1,ve=null,Y=null,ne=null,_e=null,xe=null,We=null,ut=null,Ct=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,x=!1,E=null,p=null,d=null,w=null,T=null,b=null,B=null,L=new ke(0,0,0),R=0,H=!1,le=null,v=null,y=null,$=null,q=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,X=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),re=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),re=X>=2);let z=null,he={};const de=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ne=new at().fromArray(de),Xe=new at().fromArray(Me);function Q(P,ve,Y,ne){const _e=new Uint8Array(4),xe=n.createTexture();n.bindTexture(P,xe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<Y;We++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ve+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return xe}const ae={};ae[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),s.setFunc(ji),F(!1),K(ic),Se(n.CULL_FACE),g(Wn);function Se(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function pe(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function De(P,ve){return u[P]!==ve?(n.bindFramebuffer(P,ve),u[P]=ve,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ve),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Pe(P,ve){let Y=h,ne=!1;if(P){Y=f.get(ve),Y===void 0&&(Y=[],f.set(ve,Y));const _e=P.textures;if(Y.length!==_e.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,We=_e.length;xe<We;xe++)Y[xe]=n.COLOR_ATTACHMENT0+xe;Y.length=_e.length,ne=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ne=!0);ne&&n.drawBuffers(Y)}function ze(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const qe={[fi]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[Ep]:n.FUNC_REVERSE_SUBTRACT};qe[yp]=n.MIN,qe[Tp]=n.MAX;const Ve={[bp]:n.ZERO,[Ap]:n.ONE,[wp]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function g(P,ve,Y,ne,_e,xe,We,ut,Ct,Ye){if(P===Wn){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&(Se(n.BLEND),x=!0),P!==Mp){if(P!==E||Ye!==H){if((p!==fi||T!==fi)&&(n.blendEquation(n.FUNC_ADD),p=fi,T=fi),Ye)switch(P){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rc:n.blendFunc(n.ONE,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}d=null,w=null,b=null,B=null,L.set(0,0,0),R=0,E=P,H=Ye}return}_e=_e||ve,xe=xe||Y,We=We||ne,(ve!==p||_e!==T)&&(n.blendEquationSeparate(qe[ve],qe[_e]),p=ve,T=_e),(Y!==d||ne!==w||xe!==b||We!==B)&&(n.blendFuncSeparate(Ve[Y],Ve[ne],Ve[xe],Ve[We]),d=Y,w=ne,b=xe,B=We),(ut.equals(L)===!1||Ct!==R)&&(n.blendColor(ut.r,ut.g,ut.b,Ct),L.copy(ut),R=Ct),E=P,H=!1}function C(P,ve){P.side===An?pe(n.CULL_FACE):Se(n.CULL_FACE);let Y=P.side===It;ve&&(Y=!Y),F(Y),P.blending===qi&&P.transparent===!1?g(Wn):g(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const ne=P.stencilWrite;o.setTest(ne),ne&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(P){le!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),le=P)}function K(P){P!==gp?(Se(n.CULL_FACE),P!==v&&(P===ic?n.cullFace(n.BACK):P===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),v=P}function G(P){P!==y&&(re&&n.lineWidth(P),y=P)}function Z(P,ve,Y){P?(Se(n.POLYGON_OFFSET_FILL),($!==ve||q!==Y)&&(n.polygonOffset(ve,Y),$=ve,q=Y)):pe(n.POLYGON_OFFSET_FILL)}function J(P){P?Se(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function M(P){P===void 0&&(P=n.TEXTURE0+ee-1),z!==P&&(n.activeTexture(P),z=P)}function _(P,ve,Y){Y===void 0&&(z===null?Y=n.TEXTURE0+ee-1:Y=z);let ne=he[Y];ne===void 0&&(ne={type:void 0,texture:void 0},he[Y]=ne),(ne.type!==P||ne.texture!==ve)&&(z!==Y&&(n.activeTexture(Y),z=Y),n.bindTexture(P,ve||ae[P]),ne.type=P,ne.texture=ve)}function A(){const P=he[z];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(P){Ne.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function me(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function He(P,ve){let Y=l.get(ve);Y===void 0&&(Y=new WeakMap,l.set(ve,Y));let ne=Y.get(P);ne===void 0&&(ne=n.getUniformBlockIndex(ve,P.name),Y.set(P,ne))}function we(P,ve){const ne=l.get(ve).get(P);a.get(ve)!==ne&&(n.uniformBlockBinding(ve,ne,P.__bindingPointIndex),a.set(ve,ne))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},z=null,he={},u={},f=new WeakMap,h=[],m=null,x=!1,E=null,p=null,d=null,w=null,T=null,b=null,B=null,L=new ke(0,0,0),R=0,H=!1,le=null,v=null,y=null,$=null,q=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Se,disable:pe,bindFramebuffer:De,drawBuffers:Pe,useProgram:ze,setBlending:g,setMaterial:C,setFlipSided:F,setCullFace:K,setLineWidth:G,setPolygonOffset:Z,setScissorTest:J,activeTexture:M,bindTexture:_,unbindTexture:A,compressedTexImage2D:O,compressedTexImage3D:N,texImage2D:ue,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:se,texSubImage2D:U,texSubImage3D:ie,compressedTexSubImage2D:te,compressedTexSubImage3D:oe,scissor:Te,viewport:me,reset:Ge}}function jc(n,e,t,i){const r=a0(i);switch(t){case cf:return n*e;case ff:return n*e;case hf:return n*e*2;case df:return n*e/r.components*r.byteLength;case dl:return n*e/r.components*r.byteLength;case pf:return n*e*2/r.components*r.byteLength;case pl:return n*e*2/r.components*r.byteLength;case uf:return n*e*3/r.components*r.byteLength;case tn:return n*e*4/r.components*r.byteLength;case ml:return n*e*4/r.components*r.byteLength;case ds:case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ms:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case pa:return Math.max(n,16)*Math.max(e,8)/4;case fa:case da:return Math.max(n,8)*Math.max(e,8)/2;case ma:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gs:case Da:case Ia:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mf:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(n){switch(n){case Cn:case of:return{byteLength:1,components:1};case Cr:case af:case Dr:return{byteLength:2,components:1};case fl:case hl:return{byteLength:2,components:4};case xi:case ul:case wn:return{byteLength:4,components:1};case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function l0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,_){return m?new OffscreenCanvas(M,_):Cs("canvas")}function E(M,_,A){let O=1;const N=J(M);if((N.width>A||N.height>A)&&(O=A/Math.max(N.width,N.height)),O<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const U=Math.floor(O*N.width),ie=Math.floor(O*N.height);f===void 0&&(f=x(U,ie));const te=_?x(U,ie):f;return te.width=U,te.height=ie,te.getContext("2d").drawImage(M,0,0,U,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+U+"x"+ie+")."),te}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==qt&&M.minFilter!==Qt}function d(M){n.generateMipmap(M)}function w(M,_,A,O,N=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let U=_;if(_===n.RED&&(A===n.FLOAT&&(U=n.R32F),A===n.HALF_FLOAT&&(U=n.R16F),A===n.UNSIGNED_BYTE&&(U=n.R8)),_===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(U=n.R8UI),A===n.UNSIGNED_SHORT&&(U=n.R16UI),A===n.UNSIGNED_INT&&(U=n.R32UI),A===n.BYTE&&(U=n.R8I),A===n.SHORT&&(U=n.R16I),A===n.INT&&(U=n.R32I)),_===n.RG&&(A===n.FLOAT&&(U=n.RG32F),A===n.HALF_FLOAT&&(U=n.RG16F),A===n.UNSIGNED_BYTE&&(U=n.RG8)),_===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(U=n.RG8UI),A===n.UNSIGNED_SHORT&&(U=n.RG16UI),A===n.UNSIGNED_INT&&(U=n.RG32UI),A===n.BYTE&&(U=n.RG8I),A===n.SHORT&&(U=n.RG16I),A===n.INT&&(U=n.RG32I)),_===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(U=n.RGB8UI),A===n.UNSIGNED_SHORT&&(U=n.RGB16UI),A===n.UNSIGNED_INT&&(U=n.RGB32UI),A===n.BYTE&&(U=n.RGB8I),A===n.SHORT&&(U=n.RGB16I),A===n.INT&&(U=n.RGB32I)),_===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),A===n.UNSIGNED_INT&&(U=n.RGBA32UI),A===n.BYTE&&(U=n.RGBA8I),A===n.SHORT&&(U=n.RGBA16I),A===n.INT&&(U=n.RGBA32I)),_===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),_===n.RGBA){const ie=N?bs:Je.getTransfer(O);A===n.FLOAT&&(U=n.RGBA32F),A===n.HALF_FLOAT&&(U=n.RGBA16F),A===n.UNSIGNED_BYTE&&(U=ie===rt?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function T(M,_){let A;return M?_===null||_===xi||_===Qi?A=n.DEPTH24_STENCIL8:_===wn?A=n.DEPTH32F_STENCIL8:_===Cr&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===Qi?A=n.DEPTH_COMPONENT24:_===wn?A=n.DEPTH_COMPONENT32F:_===Cr&&(A=n.DEPTH_COMPONENT16),A}function b(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==qt&&M.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function B(M){const _=M.target;_.removeEventListener("dispose",B),R(_),_.isVideoTexture&&u.delete(_)}function L(M){const _=M.target;_.removeEventListener("dispose",L),le(_)}function R(M){const _=i.get(M);if(_.__webglInit===void 0)return;const A=M.source,O=h.get(A);if(O){const N=O[_.__cacheKey];N.usedTimes--,N.usedTimes===0&&H(M),Object.keys(O).length===0&&h.delete(A)}i.remove(M)}function H(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const A=M.source,O=h.get(A);delete O[_.__cacheKey],o.memory.textures--}function le(M){const _=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let N=0;N<_.__webglFramebuffer[O].length;N++)n.deleteFramebuffer(_.__webglFramebuffer[O][N]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const A=M.textures;for(let O=0,N=A.length;O<N;O++){const U=i.get(A[O]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),o.memory.textures--),i.remove(A[O])}i.remove(M)}let v=0;function y(){v=0}function $(){const M=v;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),v+=1,M}function q(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function ee(M,_){const A=i.get(M);if(M.isVideoTexture&&G(M),M.isRenderTargetTexture===!1&&M.version>0&&A.__version!==M.version){const O=M.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(A,M,_);return}}t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+_)}function re(M,_){const A=i.get(M);if(M.version>0&&A.__version!==M.version){Xe(A,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+_)}function X(M,_){const A=i.get(M);if(M.version>0&&A.__version!==M.version){Xe(A,M,_);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+_)}function j(M,_){const A=i.get(M);if(M.version>0&&A.__version!==M.version){Q(A,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+_)}const z={[ca]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},he={[qt]:n.NEAREST,[Yp]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},de={[Zp]:n.NEVER,[im]:n.ALWAYS,[Jp]:n.LESS,[gf]:n.LEQUAL,[Qp]:n.EQUAL,[nm]:n.GEQUAL,[em]:n.GREATER,[tm]:n.NOTEQUAL};function Me(M,_){if(_.type===wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===oo||_.magFilter===Vr||_.magFilter===pi||_.minFilter===Qt||_.minFilter===oo||_.minFilter===Vr||_.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,z[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,z[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,z[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,he[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==Vr&&_.minFilter!==pi||_.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ne(M,_){let A=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",B));const O=_.source;let N=h.get(O);N===void 0&&(N={},h.set(O,N));const U=q(_);if(U!==M.__cacheKey){N[U]===void 0&&(N[U]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,A=!0),N[U].usedTimes++;const ie=N[M.__cacheKey];ie!==void 0&&(N[M.__cacheKey].usedTimes--,ie.usedTimes===0&&H(_)),M.__cacheKey=U,M.__webglTexture=N[U].texture}return A}function Xe(M,_,A){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const N=Ne(M,_),U=_.source;t.bindTexture(O,M.__webglTexture,n.TEXTURE0+A);const ie=i.get(U);if(U.version!==ie.__version||N===!0){t.activeTexture(n.TEXTURE0+A);const te=Je.getPrimaries(Je.workingColorSpace),oe=_.colorSpace===Vn?null:Je.getPrimaries(_.colorSpace),Ee=_.colorSpace===Vn||te===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=E(_.image,!1,r.maxTextureSize);se=Z(_,se);const ue=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type);let Te=w(_.internalFormat,ue,Ae,_.colorSpace,_.isVideoTexture);Me(O,_);let me;const He=_.mipmaps,we=_.isVideoTexture!==!0,Ge=ie.__version===void 0||N===!0,P=U.dataReady,ve=b(_,se);if(_.isDepthTexture)Te=T(_.format===er,_.type),Ge&&(we?t.texStorage2D(n.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Ae,null));else if(_.isDataTexture)if(He.length>0){we&&Ge&&t.texStorage2D(n.TEXTURE_2D,ve,Te,He[0].width,He[0].height);for(let Y=0,ne=He.length;Y<ne;Y++)me=He[Y],we?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ue,Ae,me.data):t.texImage2D(n.TEXTURE_2D,Y,Te,me.width,me.height,0,ue,Ae,me.data);_.generateMipmaps=!1}else we?(Ge&&t.texStorage2D(n.TEXTURE_2D,ve,Te,se.width,se.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ue,Ae,se.data)):t.texImage2D(n.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Ae,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){we&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,He[0].width,He[0].height,se.depth);for(let Y=0,ne=He.length;Y<ne;Y++)if(me=He[Y],_.format!==tn)if(ue!==null)if(we){if(P)if(_.layerUpdates.size>0){const _e=jc(me.width,me.height,_.format,_.type);for(const xe of _.layerUpdates){const We=me.data.subarray(xe*_e/me.data.BYTES_PER_ELEMENT,(xe+1)*_e/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,xe,me.width,me.height,1,ue,We,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,se.depth,ue,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Te,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,se.depth,ue,Ae,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Te,me.width,me.height,se.depth,0,ue,Ae,me.data)}else{we&&Ge&&t.texStorage2D(n.TEXTURE_2D,ve,Te,He[0].width,He[0].height);for(let Y=0,ne=He.length;Y<ne;Y++)me=He[Y],_.format!==tn?ue!==null?we?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me.width,me.height,ue,Ae,me.data):t.texImage2D(n.TEXTURE_2D,Y,Te,me.width,me.height,0,ue,Ae,me.data)}else if(_.isDataArrayTexture)if(we){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,se.width,se.height,se.depth),P)if(_.layerUpdates.size>0){const Y=jc(se.width,se.height,_.format,_.type);for(const ne of _.layerUpdates){const _e=se.data.subarray(ne*Y/se.data.BYTES_PER_ELEMENT,(ne+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,ue,Ae,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Ae,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,ue,Ae,se.data);else if(_.isData3DTexture)we?(Ge&&t.texStorage3D(n.TEXTURE_3D,ve,Te,se.width,se.height,se.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Ae,se.data)):t.texImage3D(n.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,ue,Ae,se.data);else if(_.isFramebufferTexture){if(Ge)if(we)t.texStorage2D(n.TEXTURE_2D,ve,Te,se.width,se.height);else{let Y=se.width,ne=se.height;for(let _e=0;_e<ve;_e++)t.texImage2D(n.TEXTURE_2D,_e,Te,Y,ne,0,ue,Ae,null),Y>>=1,ne>>=1}}else if(He.length>0){if(we&&Ge){const Y=J(He[0]);t.texStorage2D(n.TEXTURE_2D,ve,Te,Y.width,Y.height)}for(let Y=0,ne=He.length;Y<ne;Y++)me=He[Y],we?P&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ue,Ae,me):t.texImage2D(n.TEXTURE_2D,Y,Te,ue,Ae,me);_.generateMipmaps=!1}else if(we){if(Ge){const Y=J(se);t.texStorage2D(n.TEXTURE_2D,ve,Te,Y.width,Y.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ae,se)}else t.texImage2D(n.TEXTURE_2D,0,Te,ue,Ae,se);p(_)&&d(O),ie.__version=U.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Q(M,_,A){if(_.image.length!==6)return;const O=Ne(M,_),N=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+A);const U=i.get(N);if(N.version!==U.__version||O===!0){t.activeTexture(n.TEXTURE0+A);const ie=Je.getPrimaries(Je.workingColorSpace),te=_.colorSpace===Vn?null:Je.getPrimaries(_.colorSpace),oe=_.colorSpace===Vn||ie===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!Ee&&!se?ue[ne]=E(_.image[ne],!0,r.maxCubemapSize):ue[ne]=se?_.image[ne].image:_.image[ne],ue[ne]=Z(_,ue[ne]);const Ae=ue[0],Te=s.convert(_.format,_.colorSpace),me=s.convert(_.type),He=w(_.internalFormat,Te,me,_.colorSpace),we=_.isVideoTexture!==!0,Ge=U.__version===void 0||O===!0,P=N.dataReady;let ve=b(_,Ae);Me(n.TEXTURE_CUBE_MAP,_);let Y;if(Ee){we&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,He,Ae.width,Ae.height);for(let ne=0;ne<6;ne++){Y=ue[ne].mipmaps;for(let _e=0;_e<Y.length;_e++){const xe=Y[_e];_.format!==tn?Te!==null?we?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,xe.width,xe.height,Te,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,He,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,xe.width,xe.height,Te,me,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,He,xe.width,xe.height,0,Te,me,xe.data)}}}else{if(Y=_.mipmaps,we&&Ge){Y.length>0&&ve++;const ne=J(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){we?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Te,me,ue[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ue[ne].width,ue[ne].height,0,Te,me,ue[ne].data);for(let _e=0;_e<Y.length;_e++){const We=Y[_e].image[ne].image;we?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,We.width,We.height,Te,me,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,He,We.width,We.height,0,Te,me,We.data)}}else{we?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,me,ue[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Te,me,ue[ne]);for(let _e=0;_e<Y.length;_e++){const xe=Y[_e];we?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Te,me,xe.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,He,Te,me,xe.image[ne])}}}p(_)&&d(n.TEXTURE_CUBE_MAP),U.__version=N.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ae(M,_,A,O,N,U){const ie=s.convert(A.format,A.colorSpace),te=s.convert(A.type),oe=w(A.internalFormat,ie,te,A.colorSpace);if(!i.get(_).__hasExternalTextures){const se=Math.max(1,_.width>>U),ue=Math.max(1,_.height>>U);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,U,oe,se,ue,_.depth,0,ie,te,null):t.texImage2D(N,U,oe,se,ue,0,ie,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,N,i.get(A).__webglTexture,0,F(_)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,N,i.get(A).__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(M,_,A){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const O=_.depthTexture,N=O&&O.isDepthTexture?O.type:null,U=T(_.stencilBuffer,N),ie=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=F(_);K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,U,_.width,_.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,U,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,U,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,M)}else{const O=_.textures;for(let N=0;N<O.length;N++){const U=O[N],ie=s.convert(U.format,U.colorSpace),te=s.convert(U.type),oe=w(U.internalFormat,ie,te,U.colorSpace),Ee=F(_);A&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,oe,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,N=F(_);if(_.depthTexture.format===Yi)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(_.depthTexture.format===er)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function De(M){const _=i.get(M),A=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const O=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){const N=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",N)};O.addEventListener("dispose",N),_.__depthDisposeCallback=N}_.__boundDepthTexture=O}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,M)}else if(A){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=n.createRenderbuffer(),Se(_.__webglDepthbuffer[O],M,!1);else{const N=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,U)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Se(_.__webglDepthbuffer,M,!1);else{const O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,N)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(M,_,A){const O=i.get(M);_!==void 0&&ae(O.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&De(M)}function ze(M){const _=M.texture,A=i.get(M),O=i.get(_);M.addEventListener("dispose",L);const N=M.textures,U=M.isWebGLCubeRenderTarget===!0,ie=N.length>1;if(ie||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,o.memory.textures++),U){A.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer[te]=[];for(let oe=0;oe<_.mipmaps.length;oe++)A.__webglFramebuffer[te][oe]=n.createFramebuffer()}else A.__webglFramebuffer[te]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)A.__webglFramebuffer[te]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(ie)for(let te=0,oe=N.length;te<oe;te++){const Ee=i.get(N[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&K(M)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let te=0;te<N.length;te++){const oe=N[te];A.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[te]);const Ee=s.convert(oe.format,oe.colorSpace),se=s.convert(oe.type),ue=w(oe.internalFormat,Ee,se,oe.colorSpace,M.isXRRenderTarget===!0),Ae=F(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,A.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(A.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Me(n.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ae(A.__webglFramebuffer[te][oe],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe);else ae(A.__webglFramebuffer[te],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let te=0,oe=N.length;te<oe;te++){const Ee=N[te],se=i.get(Ee);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Me(n.TEXTURE_2D,Ee),ae(A.__webglFramebuffer,M,Ee,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,0),p(Ee)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(te=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,O.__webglTexture),Me(te,_),_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ae(A.__webglFramebuffer[oe],M,_,n.COLOR_ATTACHMENT0,te,oe);else ae(A.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,te,0);p(_)&&d(te),t.unbindTexture()}M.depthBuffer&&De(M)}function qe(M){const _=M.textures;for(let A=0,O=_.length;A<O;A++){const N=_[A];if(p(N)){const U=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ie=i.get(N).__webglTexture;t.bindTexture(U,ie),d(U),t.unbindTexture()}}}const Ve=[],g=[];function C(M){if(M.samples>0){if(K(M)===!1){const _=M.textures,A=M.width,O=M.height;let N=n.COLOR_BUFFER_BIT;const U=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(M),te=_.length>1;if(te)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);const Ee=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,A,O,0,0,A,O,N,n.NEAREST),l===!0&&(Ve.length=0,g.length=0,Ve.push(n.COLOR_ATTACHMENT0+oe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ve.push(U),g.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);const Ee=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function F(M){return Math.min(r.maxSamples,M.samples)}function K(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function G(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Z(M,_){const A=M.colorSpace,O=M.format,N=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||A!==Jn&&A!==Vn&&(Je.getTransfer(A)===rt?(O!==tn||N!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),_}function J(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=y,this.setTexture2D=ee,this.setTexture2DArray=re,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Pe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=K}function c0(n,e){function t(i,r=Vn){let s;const o=Je.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===of)return n.BYTE;if(i===af)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Dr)return n.HALF_FLOAT;if(i===cf)return n.ALPHA;if(i===uf)return n.RGB;if(i===tn)return n.RGBA;if(i===ff)return n.LUMINANCE;if(i===hf)return n.LUMINANCE_ALPHA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===df)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===pf)return n.RG;if(i===pl)return n.RG_INTEGER;if(i===ml)return n.RGBA_INTEGER;if(i===ds||i===ps||i===ms||i===_s)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fa||i===ha||i===da||i===pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===_a||i===ga)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ma||i===_a)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===va||i===xa||i===Ma||i===Sa||i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===La)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===va)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ba)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ca)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gs||i===Da||i===Ia)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gs)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mf||i===Ua||i===Na||i===Fa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class u0 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cs extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),d=this._getHandJoint(c,E);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:h0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends nr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const E=new p0,p=t.getContextAttributes();let d=null,w=null;const T=[],b=[],B=new Qe;let L=null;const R=new Xt;R.layers.enable(1),R.viewport=new at;const H=new Xt;H.layers.enable(2),H.viewport=new at;const le=[R,H],v=new u0;v.layers.enable(1),v.layers.enable(2);let y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=T[Q];return ae===void 0&&(ae=new Oo,T[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=T[Q];return ae===void 0&&(ae=new Oo,T[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=T[Q];return ae===void 0&&(ae=new Oo,T[Q]=ae),ae.getHandSpace()};function q(Q){const ae=b.indexOf(Q.inputSource);if(ae===-1)return;const Se=T[ae];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||o),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){const ae=b[Q];ae!==null&&(b[Q]=null,T[Q].disconnect(ae))}y=null,$=null,E.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,w=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Mi(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Se=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?er:Yi,Se=p.stencil?Qi:xi);const De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Mi(h.textureWidth,h.textureHeight,{format:tn,type:Cn,depthTexture:new Lf(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function re(Q){for(let ae=0;ae<Q.removed.length;ae++){const Se=Q.removed[ae],pe=b.indexOf(Se);pe>=0&&(b[pe]=null,T[pe].disconnect(Se))}for(let ae=0;ae<Q.added.length;ae++){const Se=Q.added[ae];let pe=b.indexOf(Se);if(pe===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=b.length){b.push(Se),pe=Pe;break}else if(b[Pe]===null){b[Pe]=Se,pe=Pe;break}if(pe===-1)break}const De=T[pe];De&&De.connect(Se)}}const X=new W,j=new W;function z(Q,ae,Se){X.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const pe=X.distanceTo(j),De=ae.projectionMatrix.elements,Pe=Se.projectionMatrix.elements,ze=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),Ve=(De[9]+1)/De[5],g=(De[9]-1)/De[5],C=(De[8]-1)/De[0],F=(Pe[8]+1)/Pe[0],K=ze*C,G=ze*F,Z=pe/(-C+F),J=Z*-C;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(J),Q.translateZ(Z),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const M=ze+Z,_=qe+Z,A=K-J,O=G+(pe-J),N=Ve*qe/_*M,U=g*qe/_*M;Q.projectionMatrix.makePerspective(A,O,N,U,M,_),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,Se=Q.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),v.near=H.near=R.near=ae,v.far=H.far=R.far=Se,(y!==v.near||$!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,$=v.far);const pe=Q.parent,De=v.cameras;he(v,pe);for(let Pe=0;Pe<De.length;Pe++)he(De[Pe],pe);De.length===2?z(v,R,H):v.projectionMatrix.copy(R.projectionMatrix),de(Q,v,pe)};function de(Q,ae,Se){Se===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Oa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let Me=null;function Ne(Q,ae){if(u=ae.getViewerPose(c||o),x=ae,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let pe=!1;Se.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Pe=0;Pe<Se.length;Pe++){const ze=Se[Pe];let qe=null;if(m!==null)qe=m.getViewport(ze);else{const g=f.getViewSubImage(h,ze);qe=g.viewport,Pe===0&&(e.setRenderTargetTextures(w,g.colorTexture,h.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(w))}let Ve=le[Pe];Ve===void 0&&(Ve=new Xt,Ve.layers.enable(Pe),Ve.viewport=new at,le[Pe]=Ve),Ve.matrix.fromArray(ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(qe.x,qe.y,qe.width,qe.height),Pe===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(Ve)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Pe=f.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&E.init(e,Pe,r.renderState)}}for(let Se=0;Se<T.length;Se++){const pe=b[Se],De=T[Se];pe!==null&&De!==void 0&&De.update(pe,ae,c||o)}Me&&Me(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Xe=new Cf;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const ai=new pn,_0=new lt;function g0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Af(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),E(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,w,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===It&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===It&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),T=w.envMap,b=w.envMapRotation;T&&(p.envMap.value=T,ai.copy(b),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(ai)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function E(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const b=T.program;i.uniformBlockBinding(w,b)}function c(w,T){let b=r[w.id];b===void 0&&(x(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",p));const B=T.program;i.updateUBOMapping(w,B);const L=e.render.frame;s[w.id]!==L&&(h(w),s[w.id]=L)}function u(w){const T=f();w.__bindingPointIndex=T;const b=n.createBuffer(),B=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,B,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=r[w.id],b=w.uniforms,B=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let L=0,R=b.length;L<R;L++){const H=Array.isArray(b[L])?b[L]:[b[L]];for(let le=0,v=H.length;le<v;le++){const y=H[le];if(m(y,L,le,B)===!0){const $=y.__offset,q=Array.isArray(y.value)?y.value:[y.value];let ee=0;for(let re=0;re<q.length;re++){const X=q[re],j=E(X);typeof X=="number"||typeof X=="boolean"?(y.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,$+ee,y.__data)):X.isMatrix3?(y.__data[0]=X.elements[0],y.__data[1]=X.elements[1],y.__data[2]=X.elements[2],y.__data[3]=0,y.__data[4]=X.elements[3],y.__data[5]=X.elements[4],y.__data[6]=X.elements[5],y.__data[7]=0,y.__data[8]=X.elements[6],y.__data[9]=X.elements[7],y.__data[10]=X.elements[8],y.__data[11]=0):(X.toArray(y.__data,ee),ee+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,T,b,B){const L=w.value,R=T+"_"+b;if(B[R]===void 0)return typeof L=="number"||typeof L=="boolean"?B[R]=L:B[R]=L.clone(),!0;{const H=B[R];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return B[R]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function x(w){const T=w.uniforms;let b=0;const B=16;for(let R=0,H=T.length;R<H;R++){const le=Array.isArray(T[R])?T[R]:[T[R]];for(let v=0,y=le.length;v<y;v++){const $=le[v],q=Array.isArray($.value)?$.value:[$.value];for(let ee=0,re=q.length;ee<re;ee++){const X=q[ee],j=E(X),z=b%B,he=z%j.boundary,de=z+he;b+=he,de!==0&&B-de<j.storage&&(b+=B-de),$.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=j.storage}}}const L=b%B;return L>0&&(b+=B-L),w.__size=b,w.__cache={},this}function E(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function p(w){const T=w.target;T.removeEventListener("dispose",p);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class x0{constructor(e={}){const{canvas:t=sm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),x=new Int32Array(4);let E=null,p=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=Xn,this.toneMappingExposure=1;const T=this;let b=!1,B=0,L=0,R=null,H=-1,le=null;const v=new at,y=new at;let $=null;const q=new ke(0);let ee=0,re=t.width,X=t.height,j=1,z=null,he=null;const de=new at(0,0,re,X),Me=new at(0,0,re,X);let Ne=!1;const Xe=new vl;let Q=!1,ae=!1;const Se=new lt,pe=new lt,De=new W,Pe=new at,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ve(){return R===null?j:1}let g=i;function C(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",xe,!1),g===null){const D="webgl2";if(g=C(D,S),g===null)throw C(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let F,K,G,Z,J,M,_,A,O,N,U,ie,te,oe,Ee,se,ue,Ae,Te,me,He,we,Ge,P;function ve(){F=new Tv(g),F.init(),we=new c0(g,F),K=new vv(g,F,e,we),G=new o0(g),K.reverseDepthBuffer&&G.buffers.depth.setReversed(!0),Z=new wv(g),J=new Xx,M=new l0(g,F,G,J,K,we,Z),_=new Mv(T),A=new yv(T),O=new Um(g),Ge=new _v(g,O),N=new bv(g,O,Z,Ge),U=new Cv(g,N,O,Z),Te=new Rv(g,K,M),se=new xv(J),ie=new Wx(T,_,A,F,K,Ge,se),te=new g0(T,J),oe=new Yx,Ee=new Qx(F),Ae=new mv(T,_,A,G,U,h,l),ue=new r0(T,U,K),P=new v0(g,Z,K,G),me=new gv(g,F,Z),He=new Av(g,F,Z),Z.programs=ie.programs,T.capabilities=K,T.extensions=F,T.properties=J,T.renderLists=oe,T.shadowMap=ue,T.state=G,T.info=Z}ve();const Y=new m0(T,g);this.xr=Y,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const S=F.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=F.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(re,X,!1))},this.getSize=function(S){return S.set(re,X)},this.setSize=function(S,D,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,X=D,t.width=Math.floor(S*j),t.height=Math.floor(D*j),V===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(re*j,X*j).floor()},this.setDrawingBufferSize=function(S,D,V){re=S,X=D,j=V,t.width=Math.floor(S*V),t.height=Math.floor(D*V),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(de)},this.setViewport=function(S,D,V,k){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,D,V,k),G.viewport(v.copy(de).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Me)},this.setScissor=function(S,D,V,k){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,D,V,k),G.scissor(y.copy(Me).multiplyScalar(j).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(S){G.setScissorTest(Ne=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S=!0,D=!0,V=!0){let k=0;if(S){let I=!1;if(R!==null){const ce=R.texture.format;I=ce===ml||ce===pl||ce===dl}if(I){const ce=R.texture.type,ge=ce===Cn||ce===xi||ce===Cr||ce===Qi||ce===fl||ce===hl,ye=Ae.getClearColor(),be=Ae.getClearAlpha(),Le=ye.r,Ie=ye.g,Re=ye.b;ge?(m[0]=Le,m[1]=Ie,m[2]=Re,m[3]=be,g.clearBufferuiv(g.COLOR,0,m)):(x[0]=Le,x[1]=Ie,x[2]=Re,x[3]=be,g.clearBufferiv(g.COLOR,0,x))}else k|=g.COLOR_BUFFER_BIT}D&&(k|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(k|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),oe.dispose(),Ee.dispose(),J.dispose(),_.dispose(),A.dispose(),U.dispose(),Ge.dispose(),P.dispose(),ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ml),Y.removeEventListener("sessionend",Sl),Qn.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Z.autoReset,D=ue.enabled,V=ue.autoUpdate,k=ue.needsUpdate,I=ue.type;ve(),Z.autoReset=S,ue.enabled=D,ue.autoUpdate=V,ue.needsUpdate=k,ue.type=I}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function We(S){const D=S.target;D.removeEventListener("dispose",We),ut(D)}function ut(S){Ct(S),J.remove(S)}function Ct(S){const D=J.get(S).programs;D!==void 0&&(D.forEach(function(V){ie.releaseProgram(V)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,V,k,I,ce){D===null&&(D=ze);const ge=I.isMesh&&I.matrixWorld.determinant()<0,ye=Of(S,D,V,k,I);G.setMaterial(k,ge);let be=V.index,Le=1;if(k.wireframe===!0){if(be=N.getWireframeAttribute(V),be===void 0)return;Le=2}const Ie=V.drawRange,Re=V.attributes.position;let et=Ie.start*Le,it=(Ie.start+Ie.count)*Le;ce!==null&&(et=Math.max(et,ce.start*Le),it=Math.min(it,(ce.start+ce.count)*Le)),be!==null?(et=Math.max(et,0),it=Math.min(it,be.count)):Re!=null&&(et=Math.max(et,0),it=Math.min(it,Re.count));const ot=it-et;if(ot<0||ot===1/0)return;Ge.setup(I,k,ye,V,be);let Nt,Ke=me;if(be!==null&&(Nt=O.get(be),Ke=He,Ke.setIndex(Nt)),I.isMesh)k.wireframe===!0?(G.setLineWidth(k.wireframeLinewidth*Ve()),Ke.setMode(g.LINES)):Ke.setMode(g.TRIANGLES);else if(I.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),G.setLineWidth(Ce*Ve()),I.isLineSegments?Ke.setMode(g.LINES):I.isLineLoop?Ke.setMode(g.LINE_LOOP):Ke.setMode(g.LINE_STRIP)}else I.isPoints?Ke.setMode(g.POINTS):I.isSprite&&Ke.setMode(g.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ke.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))Ke.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ce=I._multiDrawStarts,gt=I._multiDrawCounts,$e=I._multiDrawCount,$t=be?O.get(be).bytesPerElement:1,yi=J.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<$e;Ft++)yi.setValue(g,"_gl_DrawID",Ft),Ke.render(Ce[Ft]/$t,gt[Ft])}else if(I.isInstancedMesh)Ke.renderInstances(et,ot,I.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,Ce);Ke.renderInstances(et,ot,gt)}else Ke.render(et,ot)};function Ye(S,D,V){S.transparent===!0&&S.side===An&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,Br(S,D,V),S.side=Yn,S.needsUpdate=!0,Br(S,D,V),S.side=An):Br(S,D,V)}this.compile=function(S,D,V=null){V===null&&(V=S),p=Ee.get(V),p.init(D),w.push(p),V.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==V&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ce=I.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const ye=ce[ge];Ye(ye,V,I),k.add(ye)}else Ye(ce,V,I),k.add(ce)}),w.pop(),p=null,k},this.compileAsync=function(S,D,V=null){const k=this.compile(S,D,V);return new Promise(I=>{function ce(){if(k.forEach(function(ge){J.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){I(S);return}setTimeout(ce,10)}F.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Pt=null;function mn(S){Pt&&Pt(S)}function Ml(){Qn.stop()}function Sl(){Qn.start()}const Qn=new Cf;Qn.setAnimationLoop(mn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){Pt=S,Y.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},Y.addEventListener("sessionstart",Ml),Y.addEventListener("sessionend",Sl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,D,R),p=Ee.get(S,w.length),p.init(D),w.push(p),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Xe.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,Q=se.init(this.clippingPlanes,ae),E=oe.get(S,d.length),E.init(),d.push(E),Y.enabled===!0&&Y.isPresenting===!0){const ce=T.xr.getDepthSensingMesh();ce!==null&&ks(ce,D,-1/0,T.sortObjects)}ks(S,D,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(z,he),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Ae.addToRenderList(E,S),this.info.render.frame++,Q===!0&&se.beginShadows();const V=p.state.shadowsArray;ue.render(V,S,D),Q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=E.opaque,I=E.transmissive;if(p.setupLights(),D.isArrayCamera){const ce=D.cameras;if(I.length>0)for(let ge=0,ye=ce.length;ge<ye;ge++){const be=ce[ge];yl(k,I,S,be)}qe&&Ae.render(S);for(let ge=0,ye=ce.length;ge<ye;ge++){const be=ce[ge];El(E,S,be,be.viewport)}}else I.length>0&&yl(k,I,S,D),qe&&Ae.render(S),El(E,S,D);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(T,S,D),Ge.resetDefaultState(),H=-1,le=null,w.pop(),w.length>0?(p=w[w.length-1],Q===!0&&se.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?E=d[d.length-1]:E=null};function ks(S,D,V,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Xe.intersectsSprite(S)){k&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);const ge=U.update(S),ye=S.material;ye.visible&&E.push(S,ge,ye,V,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Xe.intersectsObject(S))){const ge=U.update(S),ye=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Pe.copy(ge.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const be=ge.groups;for(let Le=0,Ie=be.length;Le<Ie;Le++){const Re=be[Le],et=ye[Re.materialIndex];et&&et.visible&&E.push(S,ge,et,V,Pe.z,Re)}}else ye.visible&&E.push(S,ge,ye,V,Pe.z,null)}}const ce=S.children;for(let ge=0,ye=ce.length;ge<ye;ge++)ks(ce[ge],D,V,k)}function El(S,D,V,k){const I=S.opaque,ce=S.transmissive,ge=S.transparent;p.setupLightsView(V),Q===!0&&se.setGlobalState(T.clippingPlanes,V),k&&G.viewport(v.copy(k)),I.length>0&&Or(I,D,V),ce.length>0&&Or(ce,D,V),ge.length>0&&Or(ge,D,V),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function yl(S,D,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Mi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Dr:Cn,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=p.state.transmissionRenderTarget[k.id],ge=k.viewport||v;ce.setSize(ge.z,ge.w);const ye=T.getRenderTarget();T.setRenderTarget(ce),T.getClearColor(q),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),qe&&Ae.render(V);const be=T.toneMapping;T.toneMapping=Xn;const Le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Q===!0&&se.setGlobalState(T.clippingPlanes,k),Or(S,V,k),M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce),F.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,et=D.length;Re<et;Re++){const it=D[Re],ot=it.object,Nt=it.geometry,Ke=it.material,Ce=it.group;if(Ke.side===An&&ot.layers.test(k.layers)){const gt=Ke.side;Ke.side=It,Ke.needsUpdate=!0,Tl(ot,V,k,Nt,Ke,Ce),Ke.side=gt,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce))}T.setRenderTarget(ye),T.setClearColor(q,ee),Le!==void 0&&(k.viewport=Le),T.toneMapping=be}function Or(S,D,V){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ce=S.length;I<ce;I++){const ge=S[I],ye=ge.object,be=ge.geometry,Le=k===null?ge.material:k,Ie=ge.group;ye.layers.test(V.layers)&&Tl(ye,D,V,be,Le,Ie)}}function Tl(S,D,V,k,I,ce){S.onBeforeRender(T,D,V,k,I,ce),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(T,D,V,k,S,ce),I.transparent===!0&&I.side===An&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,T.renderBufferDirect(V,D,k,I,S,ce),I.side=Yn,I.needsUpdate=!0,T.renderBufferDirect(V,D,k,I,S,ce),I.side=An):T.renderBufferDirect(V,D,k,I,S,ce),S.onAfterRender(T,D,V,k,I,ce)}function Br(S,D,V){D.isScene!==!0&&(D=ze);const k=J.get(S),I=p.state.lights,ce=p.state.shadowsArray,ge=I.state.version,ye=ie.getParameters(S,I.state,ce,D,V),be=ie.getProgramCacheKey(ye);let Le=k.programs;k.environment=S.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(S.isMeshStandardMaterial?A:_).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",We),Le=new Map,k.programs=Le);let Ie=Le.get(be);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ge)return Al(S,ye),Ie}else ye.uniforms=ie.getUniforms(S),S.onBeforeCompile(ye,T),Ie=ie.acquireProgram(ye,be),Le.set(be,Ie),k.uniforms=ye.uniforms;const Re=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=se.uniform),Al(S,ye),k.needsLights=zf(S),k.lightsStateVersion=ge,k.needsLights&&(Re.ambientLightColor.value=I.state.ambient,Re.lightProbe.value=I.state.probe,Re.directionalLights.value=I.state.directional,Re.directionalLightShadows.value=I.state.directionalShadow,Re.spotLights.value=I.state.spot,Re.spotLightShadows.value=I.state.spotShadow,Re.rectAreaLights.value=I.state.rectArea,Re.ltc_1.value=I.state.rectAreaLTC1,Re.ltc_2.value=I.state.rectAreaLTC2,Re.pointLights.value=I.state.point,Re.pointLightShadows.value=I.state.pointShadow,Re.hemisphereLights.value=I.state.hemi,Re.directionalShadowMap.value=I.state.directionalShadowMap,Re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Re.spotShadowMap.value=I.state.spotShadowMap,Re.spotLightMatrix.value=I.state.spotLightMatrix,Re.spotLightMap.value=I.state.spotLightMap,Re.pointShadowMap.value=I.state.pointShadowMap,Re.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function bl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=xs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Al(S,D){const V=J.get(S);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Of(S,D,V,k,I){D.isScene!==!0&&(D=ze),M.resetTextureUnits();const ce=D.fog,ge=k.isMeshStandardMaterial?D.environment:null,ye=R===null?T.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Jn,be=(k.isMeshStandardMaterial?A:_).get(k.envMap||ge),Le=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,it=!!V.morphAttributes.color;let ot=Xn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ot=T.toneMapping);const Nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=Nt!==void 0?Nt.length:0,Ce=J.get(k),gt=p.state.lights;if(Q===!0&&(ae===!0||S!==le)){const Vt=S===le&&k.id===H;se.setState(k,S,Vt)}let $e=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gt.state.version||Ce.outputColorSpace!==ye||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==be||k.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ie||Ce.morphTargets!==Re||Ce.morphNormals!==et||Ce.morphColors!==it||Ce.toneMapping!==ot||Ce.morphTargetsCount!==Ke)&&($e=!0):($e=!0,Ce.__version=k.version);let $t=Ce.currentProgram;$e===!0&&($t=Br(k,D,I));let yi=!1,Ft=!1,Ws=!1;const ct=$t.getUniforms(),Ln=Ce.uniforms;if(G.useProgram($t.program)&&(yi=!0,Ft=!0,Ws=!0),k.id!==H&&(H=k.id,Ft=!0),yi||le!==S){K.reverseDepthBuffer?(Se.copy(S.projectionMatrix),am(Se),lm(Se),ct.setValue(g,"projectionMatrix",Se)):ct.setValue(g,"projectionMatrix",S.projectionMatrix),ct.setValue(g,"viewMatrix",S.matrixWorldInverse);const Vt=ct.map.cameraPosition;Vt!==void 0&&Vt.setValue(g,De.setFromMatrixPosition(S.matrixWorld)),K.logarithmicDepthBuffer&&ct.setValue(g,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(g,"isOrthographic",S.isOrthographicCamera===!0),le!==S&&(le=S,Ft=!0,Ws=!0)}if(I.isSkinnedMesh){ct.setOptional(g,I,"bindMatrix"),ct.setOptional(g,I,"bindMatrixInverse");const Vt=I.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(g,"boneTexture",Vt.boneTexture,M))}I.isBatchedMesh&&(ct.setOptional(g,I,"batchingTexture"),ct.setValue(g,"batchingTexture",I._matricesTexture,M),ct.setOptional(g,I,"batchingIdTexture"),ct.setValue(g,"batchingIdTexture",I._indirectTexture,M),ct.setOptional(g,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(g,"batchingColorTexture",I._colorsTexture,M));const Xs=V.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Te.update(I,V,$t),(Ft||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,ct.setValue(g,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ln.envMap.value=be,Ln.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Ln.envMapIntensity.value=D.environmentIntensity),Ft&&(ct.setValue(g,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&Bf(Ln,Ws),ce&&k.fog===!0&&te.refreshFogUniforms(Ln,ce),te.refreshMaterialUniforms(Ln,k,j,X,p.state.transmissionRenderTarget[S.id]),xs.upload(g,bl(Ce),Ln,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xs.upload(g,bl(Ce),Ln,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(g,"center",I.center),ct.setValue(g,"modelViewMatrix",I.modelViewMatrix),ct.setValue(g,"normalMatrix",I.normalMatrix),ct.setValue(g,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vt=k.uniformsGroups;for(let qs=0,Hf=Vt.length;qs<Hf;qs++){const wl=Vt[qs];P.update(wl,$t),P.bind(wl,$t)}}return $t}function Bf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function zf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,D,V){J.get(S.texture).__webglTexture=D,J.get(S.depthTexture).__webglTexture=V;const k=J.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const V=J.get(S);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,V=0){R=S,B=D,L=V;let k=!0,I=null,ce=!1,ge=!1;if(S){const be=J.get(S);if(be.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(g.FRAMEBUFFER,null),k=!1;else if(be.__webglFramebuffer===void 0)M.setupRenderTarget(S);else if(be.__hasExternalTextures)M.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Re=S.depthTexture;if(be.__boundDepthTexture!==Re){if(Re!==null&&J.has(Re)&&(S.width!==Re.image.width||S.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);const Ie=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?I=Ie[D][V]:I=Ie[D],ce=!0):S.samples>0&&M.useMultisampledRTT(S)===!1?I=J.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?I=Ie[V]:I=Ie,v.copy(S.viewport),y.copy(S.scissor),$=S.scissorTest}else v.copy(de).multiplyScalar(j).floor(),y.copy(Me).multiplyScalar(j).floor(),$=Ne;if(G.bindFramebuffer(g.FRAMEBUFFER,I)&&k&&G.drawBuffers(S,I),G.viewport(v),G.scissor(y),G.setScissorTest($),ce){const be=J.get(S.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,V)}else if(ge){const be=J.get(S.texture),Le=D||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,be.__webglTexture,V||0,Le)}H=-1},this.readRenderTargetPixels=function(S,D,V,k,I,ce,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){G.bindFramebuffer(g.FRAMEBUFFER,ye);try{const be=S.texture,Le=be.format,Ie=be.type;if(!K.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&V>=0&&V<=S.height-I&&g.readPixels(D,V,k,I,we.convert(Le),we.convert(Ie),ce)}finally{const be=R!==null?J.get(R).__webglFramebuffer:null;G.bindFramebuffer(g.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,D,V,k,I,ce,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){const be=S.texture,Le=be.format,Ie=be.type;if(!K.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-k&&V>=0&&V<=S.height-I){G.bindFramebuffer(g.FRAMEBUFFER,ye);const Re=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Re),g.bufferData(g.PIXEL_PACK_BUFFER,ce.byteLength,g.STREAM_READ),g.readPixels(D,V,k,I,we.convert(Le),we.convert(Ie),0);const et=R!==null?J.get(R).__webglFramebuffer:null;G.bindFramebuffer(g.FRAMEBUFFER,et);const it=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await om(g,it,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Re),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ce),g.deleteBuffer(Re),g.deleteSync(it),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,V=0){S.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-V),I=Math.floor(S.image.width*k),ce=Math.floor(S.image.height*k),ge=D!==null?D.x:0,ye=D!==null?D.y:0;M.setTexture2D(S,0),g.copyTexSubImage2D(g.TEXTURE_2D,V,0,0,ge,ye,I,ce),G.unbindTexture()},this.copyTextureToTexture=function(S,D,V=null,k=null,I=0){S.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],D=arguments[2],I=arguments[3]||0,V=null);let ce,ge,ye,be,Le,Ie;V!==null?(ce=V.max.x-V.min.x,ge=V.max.y-V.min.y,ye=V.min.x,be=V.min.y):(ce=S.image.width,ge=S.image.height,ye=0,be=0),k!==null?(Le=k.x,Ie=k.y):(Le=0,Ie=0);const Re=we.convert(D.format),et=we.convert(D.type);M.setTexture2D(D,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,D.unpackAlignment);const it=g.getParameter(g.UNPACK_ROW_LENGTH),ot=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Nt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ke=g.getParameter(g.UNPACK_SKIP_ROWS),Ce=g.getParameter(g.UNPACK_SKIP_IMAGES),gt=S.isCompressedTexture?S.mipmaps[I]:S.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(g.UNPACK_SKIP_ROWS,be),S.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,I,Le,Ie,ce,ge,Re,et,gt.data):S.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,I,Le,Ie,gt.width,gt.height,Re,gt.data):g.texSubImage2D(g.TEXTURE_2D,I,Le,Ie,ce,ge,Re,et,gt),g.pixelStorei(g.UNPACK_ROW_LENGTH,it),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ce),I===0&&D.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(S,D,V=null,k=null,I=0){S.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,S=arguments[2],D=arguments[3],I=arguments[4]||0);let ce,ge,ye,be,Le,Ie,Re,et,it;const ot=S.isCompressedTexture?S.mipmaps[I]:S.image;V!==null?(ce=V.max.x-V.min.x,ge=V.max.y-V.min.y,ye=V.max.z-V.min.z,be=V.min.x,Le=V.min.y,Ie=V.min.z):(ce=ot.width,ge=ot.height,ye=ot.depth,be=0,Le=0,Ie=0),k!==null?(Re=k.x,et=k.y,it=k.z):(Re=0,et=0,it=0);const Nt=we.convert(D.format),Ke=we.convert(D.type);let Ce;if(D.isData3DTexture)M.setTexture3D(D,0),Ce=g.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)M.setTexture2DArray(D,0),Ce=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,D.unpackAlignment);const gt=g.getParameter(g.UNPACK_ROW_LENGTH),$e=g.getParameter(g.UNPACK_IMAGE_HEIGHT),$t=g.getParameter(g.UNPACK_SKIP_PIXELS),yi=g.getParameter(g.UNPACK_SKIP_ROWS),Ft=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,be),g.pixelStorei(g.UNPACK_SKIP_ROWS,Le),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ie),S.isDataTexture||S.isData3DTexture?g.texSubImage3D(Ce,I,Re,et,it,ce,ge,ye,Nt,Ke,ot.data):D.isCompressedArrayTexture?g.compressedTexSubImage3D(Ce,I,Re,et,it,ce,ge,ye,Nt,ot.data):g.texSubImage3D(Ce,I,Re,et,it,ce,ge,ye,Nt,Ke,ot),g.pixelStorei(g.UNPACK_ROW_LENGTH,gt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,$e),g.pixelStorei(g.UNPACK_SKIP_PIXELS,$t),g.pixelStorei(g.UNPACK_SKIP_ROWS,yi),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ft),I===0&&D.generateMipmaps&&g.generateMipmap(Ce),G.unbindTexture()},this.initRenderTarget=function(S){J.get(S).__webglFramebuffer===void 0&&M.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?M.setTextureCube(S,0):S.isData3DTexture?M.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?M.setTexture2DArray(S,0):M.setTexture2D(S,0),G.unbindTexture()},this.resetState=function(){B=0,L=0,R=null,G.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Hs?"display-p3":"srgb"}}class M0 extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S0 extends Fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ff extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bo=new lt,Zc=new W,Jc=new W;class E0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends E0{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T0 extends Ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class b0 extends Ff{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const Qc=xr(!1),eu=xr(0),A0=()=>({scrollDown:Qc,isScrollDown:()=>{window.addEventListener("scroll",()=>{const e=window.scrollY;Qc.value=e>eu.value,eu.value=e})}}),{isScrollDown:w0,scrollDown:R0}=A0();class C0{constructor(){sr(this,"scene");sr(this,"camera");sr(this,"mesh");sr(this,"renderer");const e=document.querySelector("#three");if(e){w0();const{width:t,height:i}=e==null?void 0:e.getBoundingClientRect();this.scene=new M0,this.camera=new Xt(45,t/i,.1,1e3),this.camera.position.set(0,0,4);const r=new ke("#ffb3f2"),s=new ir(.2,.2,.2),o=new S0({color:r,emissive:r,emissiveIntensity:.8,specular:new ke(16777215),shininess:100}),a=new un(s,o);this.mesh=a,this.mesh.scale.x=4,this.mesh.scale.y=4,this.mesh.scale.z=4,this.renderer=new x0({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(t,i),e==null||e.appendChild(this.renderer.domElement),this.scene.add(this.mesh);const l=new T0(16777215,1);l.position.set(5,5,5).normalize(),this.scene.add(l);const c=new b0(4210752);this.scene.add(c),window.addEventListener("scroll",this.moveOnScroll.bind(this)),this.tick()}}tick(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>{this.move(),this.tick()})}moveOnScroll(){R0.value===!0?(this.mesh.scale.x>=7||(this.mesh.scale.x+=.1,this.mesh.scale.y+=.1,this.mesh.scale.z+=.1),this.mesh.rotation.x+=.02,this.mesh.rotation.y+=.02):(this.mesh.scale.x<=4||(this.mesh.scale.x-=.1,this.mesh.scale.y-=.1,this.mesh.scale.z-=.1),this.mesh.rotation.x-=.02,this.mesh.rotation.y-=.02)}move(){this.mesh.rotation.x+=.001,this.mesh.rotation.y+=.001}}const P0={class:"SecondSection"},L0=el({__name:"SecondSection",setup(n){return tl(()=>{new C0}),(e,t)=>(bn(),Gn("section",P0,t[0]||(t[0]=[vt("div",{class:"SecondSection__Mesh",id:"three"},null,-1),vt("div",{class:"SecondSection__Text"},[vt("p",null," Développeur front-end JavaScript/TypeScript, je crée surtout des applications avec Vue.js et Nuxt. Depuis quelque temps, la 3D m'intrigue fortement, je me lance donc dans l'apprentissage et la création de petites expériences et jeux sympas avec Three.js. J’ai aussi envie d’explorer des technos immersives comme la réalité virtuelle et augmentée pour enrichir l'expérience utilisateur. ")],-1)])))}}),D0=al(L0,[["__scopeId","data-v-ea75ef8d"]]),I0={class:"ThirdSection"},U0=["onClick"],N0={class:"ThirdSection__slider__project__title"},F0={key:1,class:"ThirdSection__containerMobile"},O0=["onClick"],B0={class:"ThirdSection__containerMobile__slider__project__title"},z0=el({__name:"ThirdSection",setup(n){const e=xr(),t=xr(),i=xr(),r=[{background:"/portfolio/rpgamebackground.PNG",url:"https://ackermiam.github.io/rp-game/",name:"rp-game"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"},{background:"/portfolio/egirlinvaderbackground.PNG",url:"https://ackermiam.github.io/egirl-invaders/",name:"egirl-invaders"}],s=()=>window.innerWidth<=900,o=()=>{const l=e.value.offsetTop/(t.value.scrollHeight-e.value.offsetHeight),c=e.value.scrollWidth-window.innerWidth;e.value.style.transform=`translateX(${-l*c}px)`},a=l=>{window.open(l,"_blank")};return tl(()=>{t.value&&(t.value.style.setProperty("--sliderWidth",`${r.length*i.value[0].clientWidth+r.length*50+1050}px`),window.addEventListener("scroll",o))}),nl(()=>{window.removeEventListener("scroll",o)}),(l,c)=>(bn(),Gn("section",I0,[s()?Gl("",!0):(bn(),Gn("div",{key:0,class:"ThirdSection__container",ref_key:"scrollableContent",ref:t},[vt("div",{class:"ThirdSection__slider",ref_key:"animatedContent",ref:e},[(bn(),Gn(Wt,null,Dl(r,(u,f)=>vt("div",{key:f,class:"ThirdSection__slider__project",style:yr({background:`url(${u.background})`}),ref_for:!0,ref_key:"slide",ref:u,onClick:h=>a(u.url)},[vt("h3",N0,zo(u.name),1)],12,U0)),64))],512)],512)),s()?(bn(),Gn("div",F0,[vt("div",{class:"ThirdSection__containerMobile__slider",ref_key:"animatedContent",ref:e},[(bn(),Gn(Wt,null,Dl(r,(u,f)=>vt("div",{key:f,class:"ThirdSection__containerMobile__slider__project",style:yr({background:`url(${u.background})`}),ref_for:!0,ref_key:"slide",ref:u,onClick:h=>a(u.url)},[vt("h3",B0,zo(u.name),1)],12,O0)),64))],512)])):Gl("",!0)]))}}),H0=al(z0,[["__scopeId","data-v-2b2564ad"]]),G0=el({__name:"App",setup(n){return(e,t)=>(bn(),Gn(Wt,null,[Kt(_p),Kt(D0),Kt(H0)],64))}});cp(G0).mount("#app");

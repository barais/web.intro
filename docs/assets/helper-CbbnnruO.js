const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webSocket-DY8HPfG5.js","assets/server-D5r0YahC.js","assets/modules/vue-CHNgrS5A.js","assets/index-KJZsuQFl.js","assets/modules/shiki-B4CAAHVZ.js","assets/modules/shiki-BPvBenZD.css","assets/index-s3LE1jYg.css","assets/http-BMMcV1Do.js"])))=>i.map(i=>d[i]);
import{aa as u,ab as F,z as p,ac as q,y as V,L as J}from"./index-KJZsuQFl.js";import{K as P,aF as W}from"./modules/vue-CHNgrS5A.js";var _=(t=>(t[t.CLEAR=0]="CLEAR",t[t.OPEN=1]="OPEN",t[t.CLOSED=2]="CLOSED",t))(_||{});const y=P({});let Q=[],Z=[];u(y,"$syncUp",!0);u(y,"$syncDown",!0);u(y,"$paused",!1);u(y,"$onSet",t=>Q.push(t));u(y,"$onPatch",t=>Z.push(t));F();u(y,"$patch",async()=>!1);const b=P({});let tt=[],et=[];u(b,"$syncUp",!0);u(b,"$syncDown",!0);u(b,"$paused",!1);u(b,"$onSet",t=>tt.push(t));u(b,"$onPatch",t=>et.push(t));F();u(b,"$patch",async()=>!1);var k;const m=(k=p.pollSettings)!=null&&k.server?P({}):q(y,{}).state;var G;const T=(G=p.pollSettings)!=null&&G.server?P({}):q(b,{}).state;var R,nt=new Uint8Array(16);function st(){if(!R&&(R=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(nt)}const it=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ot(t){return typeof t=="string"&&it.test(t)}var l=[];for(var L=0;L<256;++L)l.push((L+256).toString(16).substr(1));function rt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!ot(n))throw TypeError("Stringified UUID is invalid");return n}function at(t,e,n){t=t||{};var s=t.random||(t.rng||st)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,rt(s)}const $=W("slidev-poll-device-id",at()),C=W("slidev-poll-user-id",T[$.value]??""),X=[],lt=t=>{X.push(t)};setTimeout(()=>{C&&!T[$.value]&&X.forEach(t=>{t(C.value)})});let w,I,E,A,x,B=()=>{};const N=new Promise(t=>{B=t}),S=(async()=>{var t;(t=p.pollSettings)!=null&&t.server?p.pollSettings.server.startsWith("ws")?{answer:A,connect:w,login:x,reset:E,setStatus:I}=await V(()=>import("./webSocket-DY8HPfG5.js"),__vite__mapDeps([0,1,2,3,4,5,6])):{answer:A,connect:w,login:x,reset:E,setStatus:I}=await V(()=>import("./http-BMMcV1Do.js"),__vite__mapDeps([7,1,2,3,4,5,6])):B()})();async function Pt(t,e){m[t]&&e!==null&&(m[t].results[$.value]=e,await S,await N,A==null||A(t,e))}async function Nt(){await S,w==null||w(B)}async function ht(t){T[$.value]=t,await S,await N,x==null||x(t)}lt(ht);async function Lt(t){m[t].results={},m[t].status=_.CLEAR,await S,await N,E==null||E(t)}async function _t(t,e){m[t].status=e,await S,await N,I==null||I(t,e)}function Tt(t){m[t]={results:{},status:_.CLEAR}}const ct=t=>[...new Set(t)],ut=(t,e)=>t.filter(n=>!e.includes(n)),ft=(t,e)=>t.filter(n=>e.includes(n)),gt=t=>typeof t=="bigint"||!Number.isNaN(Number(t))&&Math.floor(Number(t))===t,pt=t=>typeof t=="bigint"||t>=0&&Number.isSafeInteger(t);function v(t,e){if(e.length===0)return t;let n;const s=[...t];for(let i=s.length-1,o=0,g=0;i>0;i--,o++){o%=e.length,g+=n=e[o].codePointAt(0);const h=(n+o+g)%i,c=s[i],r=s[h];s[h]=c,s[i]=r}return s}const dt=(t,e)=>{const n=[];let s=t;if(typeof s=="bigint"){const i=BigInt(e.length);do n.unshift(e[Number(s%i)]),s/=i;while(s>BigInt(0))}else do n.unshift(e[s%e.length]),s=Math.floor(s/e.length);while(s>0);return n},mt=(t,e)=>t.reduce((n,s)=>{const i=e.indexOf(s);if(i===-1)throw new Error(`The provided ID (${t.join("")}) is invalid, as it contains characters that do not exist in the alphabet (${e.join("")})`);if(typeof n=="bigint")return n*BigInt(e.length)+BigInt(i);const o=n*e.length+i;return Number.isSafeInteger(o)?o:(K("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment"),BigInt(n)*BigInt(e.length)+BigInt(i))},0),yt=/^\+?\d+$/,bt=t=>{if(!yt.test(t))return Number.NaN;const e=Number.parseInt(t,10);return Number.isSafeInteger(e)?e:(K("Unable to encode the provided BigInt string without loss of information due to lack of support for BigInt type in the current environment"),BigInt(t))},vt=(t,e,n)=>Array.from({length:Math.ceil(t.length/e)},(s,i)=>n(t.slice(i*e,(i+1)*e))),D=t=>new RegExp(t.map(e=>z(e)).sort((e,n)=>n.length-e.length).join("|")),wt=t=>new RegExp(`^[${t.map(e=>z(e)).sort((e,n)=>n.length-e.length).join("")}]+$`),z=t=>t.replace(/[\s#$()*+,.?[\\\]^{|}-]/g,"\\$&"),K=(t="BigInt is not available in this environment")=>{if(typeof BigInt!="function")throw new TypeError(t)},H=16,j=3.5,It=12,O=16,Et=12,U=100;class At{constructor(e="",n=0,s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",i="cfhistuCFHISTU"){if(this.minLength=n,typeof n!="number")throw new TypeError(`Hashids: Provided 'minLength' has to be a number (is ${typeof n})`);if(typeof e!="string")throw new TypeError(`Hashids: Provided 'salt' has to be a string (is ${typeof e})`);if(typeof s!="string")throw new TypeError(`Hashids: Provided alphabet has to be a string (is ${typeof s})`);const o=Array.from(e),g=Array.from(s),h=Array.from(i);this.salt=o;const c=ct(g);if(c.length<H)throw new Error(`Hashids: alphabet must contain at least ${H} unique characters, provided: ${c.join("")}`);this.alphabet=ut(c,h);const r=ft(h,c);this.seps=v(r,o);let a,f;(this.seps.length===0||this.alphabet.length/this.seps.length>j)&&(a=Math.ceil(this.alphabet.length/j),a>this.seps.length&&(f=a-this.seps.length,this.seps.push(...this.alphabet.slice(0,f)),this.alphabet=this.alphabet.slice(f))),this.alphabet=v(this.alphabet,o);const d=Math.ceil(this.alphabet.length/It);this.alphabet.length<3?(this.guards=this.seps.slice(0,d),this.seps=this.seps.slice(d)):(this.guards=this.alphabet.slice(0,d),this.alphabet=this.alphabet.slice(d)),this.guardsRegExp=D(this.guards),this.sepsRegExp=D(this.seps),this.allowedCharsRegExp=wt([...this.alphabet,...this.guards,...this.seps])}encode(e,...n){const s="";let i=Array.isArray(e)?e:[...e!=null?[e]:[],...n];return i.length===0||(i.every(gt)||(i=i.map(o=>typeof o=="bigint"||typeof o=="number"?o:bt(String(o)))),!i.every(pt))?s:this._encode(i).join("")}decode(e){return!e||typeof e!="string"||e.length===0?[]:this._decode(e)}encodeHex(e){let n=e;switch(typeof n){case"bigint":n=n.toString(O);break;case"string":if(!/^[\dA-Fa-f]+$/.test(n))return"";break;default:throw new Error(`Hashids: The provided value is neither a string, nor a BigInt (got: ${typeof n})`)}const s=vt(n,Et,i=>Number.parseInt(`1${i}`,16));return this.encode(s)}decodeHex(e){return this.decode(e).map(n=>n.toString(O).slice(1)).join("")}isValidId(e){return this.allowedCharsRegExp.test(e)}_encode(e){let{alphabet:n}=this;const s=e.reduce((r,a,f)=>r+(typeof a=="bigint"?Number(a%BigInt(f+U)):a%(f+U)),0);let i=[n[s%n.length]];const o=[...i],{seps:g}=this,{guards:h}=this;if(e.forEach((r,a)=>{const f=o.concat(this.salt,n);n=v(n,f);const d=dt(r,n);if(i.push(...d),a+1<e.length){const M=d[0].codePointAt(0)+a,Y=typeof r=="bigint"?Number(r%BigInt(M)):r%M;i.push(g[Y%g.length])}}),i.length<this.minLength){const r=(s+i[0].codePointAt(0))%h.length;if(i.unshift(h[r]),i.length<this.minLength){const a=(s+i[2].codePointAt(0))%h.length;i.push(h[a])}}const c=Math.floor(n.length/2);for(;i.length<this.minLength;){n=v(n,n),i.unshift(...n.slice(c)),i.push(...n.slice(0,c));const r=i.length-this.minLength;if(r>0){const a=r/2;i=i.slice(a,a+this.minLength)}}return i}_decode(e){if(!this.isValidId(e))throw new Error(`The provided ID (${e}) is invalid, as it contains characters that do not exist in the alphabet (${this.guards.join("")}${this.seps.join("")}${this.alphabet.join("")})`);const n=e.split(this.guardsRegExp),s=n.length===3||n.length===2?1:0,i=n[s];if(i.length===0)return[];const o=i[Symbol.iterator]().next().value,g=i.slice(o.length).split(this.sepsRegExp);let h=this.alphabet;const c=[];for(const r of g){const a=[o,...this.salt,...h],f=v(h,a.slice(0,h.length));c.push(mt(Array.from(r),f)),h=f}return this._encode(c).join("")!==e?[]:c}}const xt=new At;function Bt(t,e){return t===void 0||e===void 0?!1:e instanceof Array?e.includes(t):Number(e)===t}function Mt(t,e,n){var i,o;const s=(o=(i=m[t])==null?void 0:i.results)==null?void 0:o[$.value];if(e){if(s instanceof Array&&n||typeof s=="number"&&!n)return s;if(n&&typeof s=="number")return[s];if(!n&&s instanceof Array)return s[0]}return n?[]:null}function $t(t,e=0){let n=3735928559^e,s=1103547991^e;for(let i=0,o;i<t.length;i++)o=t.charCodeAt(i),n=Math.imul(n^o,2654435761),s=Math.imul(s^o,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&s)+(n>>>0)}function Vt(){const t=J.value.map(e=>{var n,s;return((s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.content)??""}).join(`
`);return xt.encode($t(t))}function Ct(){var t;return(t=p.pollSettings)!=null&&t.server?p.pollSettings.server.endsWith("/")?p.pollSettings.server.slice(0,-1):p.pollSettings.server:""}export{_ as P,T as a,Pt as b,Nt as c,$ as d,Tt as e,Ct as f,Mt as g,Vt as h,Bt as i,ht as l,m as p,Lt as r,_t as s,C as u};

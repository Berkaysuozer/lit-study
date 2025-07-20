(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis,at=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),pt=new WeakMap;let tr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(at&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=pt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&pt.set(t,e))}return e}toString(){return this.cssText}};const Rr=r=>new tr(typeof r=="string"?r:r+"",void 0,st),H=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new tr(t,r,st)},Ir=(r,e)=>{if(at)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=Oe.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},yt=at?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Rr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jr,defineProperty:Lr,getOwnPropertyDescriptor:Ur,getOwnPropertyNames:qr,getOwnPropertySymbols:Wr,getPrototypeOf:Hr}=Object,ze=globalThis,gt=ze.trustedTypes,zr=gt?gt.emptyScript:"",Vr=ze.reactiveElementPolyfillSupport,ge=(r,e)=>r,et={toAttribute(r,e){switch(e){case Boolean:r=r?zr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},rr=(r,e)=>!jr(r,e),bt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:rr};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;let le=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Lr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:a}=Ur(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const o=i?.call(this);a?.call(this,s),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const e=Hr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const t=this.properties,n=[...qr(t),...Wr(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(yt(i))}else e!==void 0&&t.push(yt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ir(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:et).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:et;this._$Em=i;const o=s.fromAttribute(t,a.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){const i=this.constructor,a=this[e];if(n??=i.getPropertyOptions(e),!((n.hasChanged??rr)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:a},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,a]of n){const{wrapped:s}=a,o=this[i];s!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,a,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};le.elementStyles=[],le.shadowRootOptions={mode:"open"},le[ge("elementProperties")]=new Map,le[ge("finalized")]=new Map,Vr?.({ReactiveElement:le}),(ze.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,Re=ot.trustedTypes,vt=Re?Re.createPolicy("lit-html",{createHTML:r=>r}):void 0,nr="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,ir="?"+V,Br=`<${ir}>`,ie=document,ve=()=>ie.createComment(""),we=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,Yr=r=>lt(r)||typeof r?.[Symbol.iterator]=="function",Je=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,xt=/>/g,X=RegExp(`>|${Je}(?:([^\\s"'>=/]+)(${Je}*=${Je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,_t=/"/g,ar=/^(?:script|style|textarea|title)$/i,Jr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),D=Jr(1),de=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Et=new WeakMap,ee=ie.createTreeWalker(ie,129);function sr(r,e){if(!lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(e):e}const Gr=(r,e)=>{const t=r.length-1,n=[];let i,a=e===2?"<svg>":e===3?"<math>":"",s=fe;for(let o=0;o<t;o++){const l=r[o];let d,u,c=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===fe?u[1]==="!--"?s=wt:u[1]!==void 0?s=xt:u[2]!==void 0?(ar.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=X):u[3]!==void 0&&(s=X):s===X?u[0]===">"?(s=i??fe,c=-1):u[1]===void 0?c=-2:(c=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?X:u[3]==='"'?_t:$t):s===_t||s===$t?s=X:s===wt||s===xt?s=fe:(s=X,i=void 0);const m=s===X&&r[o+1].startsWith("/>")?" ":"";a+=s===fe?l+Br:c>=0?(n.push(d),l.slice(0,c)+nr+l.slice(c)+V+m):l+V+(c===-2?o:m)}return[sr(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class xe{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let a=0,s=0;const o=e.length-1,l=this.parts,[d,u]=Gr(e,t);if(this.el=xe.createElement(d,n),ee.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=ee.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(nr)){const h=u[s++],m=i.getAttribute(c).split(V),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:p[2],strings:m,ctor:p[1]==="."?Qr:p[1]==="?"?Zr:p[1]==="@"?Kr:Ve}),i.removeAttribute(c)}else c.startsWith(V)&&(l.push({type:6,index:a}),i.removeAttribute(c));if(ar.test(i.tagName)){const c=i.textContent.split(V),h=c.length-1;if(h>0){i.textContent=Re?Re.emptyScript:"";for(let m=0;m<h;m++)i.append(c[m],ve()),ee.nextNode(),l.push({type:2,index:++a});i.append(c[h],ve())}}}else if(i.nodeType===8)if(i.data===ir)l.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf(V,c+1))!==-1;)l.push({type:7,index:a}),c+=V.length-1}a++}}static createElement(e,t){const n=ie.createElement("template");return n.innerHTML=e,n}}function he(r,e,t=r,n){if(e===de)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl;const a=we(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=he(r,i._$AS(r,e.values),i,n)),e}class Xr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??ie).importNode(t,!0);ee.currentNode=i;let a=ee.nextNode(),s=0,o=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new Ee(a,a.nextSibling,this,e):l.type===1?d=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(d=new en(a,this,e)),this._$AV.push(d),l=n[++o]}s!==l?.index&&(a=ee.nextNode(),s++)}return ee.currentNode=ie,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),we(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==de&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xe.createElement(sr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const a=new Xr(i,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new xe(e)),t}k(e){lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const a of e)i===t.length?t.push(n=new Ee(this.O(ve()),this.O(ve()),this,this.options)):n=t[i],n._$AI(a),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,a){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,t=this,n,i){const a=this.strings;let s=!1;if(a===void 0)e=he(this,e,t,0),s=!we(e)||e!==this._$AH&&e!==de,s&&(this._$AH=e);else{const o=e;let l,d;for(e=a[0],l=0;l<a.length-1;l++)d=he(this,o[n+l],t,l),d===de&&(d=this._$AH[l]),s||=!we(d)||d!==this._$AH[l],d===P?e=P:e!==P&&(e+=(d??"")+a[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qr extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class Zr extends Ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}class Kr extends Ve{constructor(e,t,n,i,a){super(e,t,n,i,a),this.type=5}_$AI(e,t=this){if((e=he(this,e,t,0)??P)===de)return;const n=this._$AH,i=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==P&&(n===P||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}}const tn=ot.litHtmlPolyfillSupport;tn?.(xe,Ee),(ot.litHtmlVersions??=[]).push("3.3.1");const rn=(r,e,t)=>{const n=t?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const a=t?.renderBefore??null;n._$litPart$=i=new Ee(e.insertBefore(ve(),a),a,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis;class F extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return de}}F._$litElement$=!0,F.finalized=!0,ct.litElementHydrateSupport?.({LitElement:F});const nn=ct.litElementPolyfillSupport;nn?.({LitElement:F});(ct.litElementVersions??=[]).push("4.2.1");function an(r){for(var e=[],t=0;t<r.length;){var n=r[t];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:t,value:r[t++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:r[t++]});continue}if(n==="{"){e.push({type:"OPEN",index:t,value:r[t++]});continue}if(n==="}"){e.push({type:"CLOSE",index:t,value:r[t++]});continue}if(n===":"){for(var i="",a=t+1;a<r.length;){var s=r.charCodeAt(a);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){i+=r[a++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:i}),t=a;continue}if(n==="("){var o=1,l="",a=t+1;if(r[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<r.length;){if(r[a]==="\\"){l+=r[a++]+r[a++];continue}if(r[a]===")"){if(o--,o===0){a++;break}}else if(r[a]==="("&&(o++,r[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));l+=r[a++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(t));if(!l)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:l}),t=a;continue}e.push({type:"CHAR",index:t,value:r[t++]})}return e.push({type:"END",index:t,value:""}),e}function ut(r,e){e===void 0&&(e={});for(var t=an(r),n=e.prefixes,i=n===void 0?"./":n,a=e.delimiter,s=a===void 0?"/#?":a,o=[],l=0,d=0,u="",c=function(A){if(d<t.length&&t[d].type===A)return t[d++].value},h=function(A){var k=c(A);if(k!==void 0)return k;var w=t[d],M=w.type,Ae=w.index;throw new TypeError("Unexpected ".concat(M," at ").concat(Ae,", expected ").concat(A))},m=function(){for(var A="",k;k=c("CHAR")||c("ESCAPED_CHAR");)A+=k;return A},p=function(A){for(var k=0,w=s;k<w.length;k++){var M=w[k];if(A.indexOf(M)>-1)return!0}return!1},x=function(A){var k=o[o.length-1],w=A||(k&&typeof k=="string"?k:"");if(k&&!w)throw new TypeError('Must have text between two parameters, missing text after "'.concat(k.name,'"'));return!w||p(w)?"[^".concat(B(s),"]+?"):"(?:(?!".concat(B(w),")[^").concat(B(s),"])+?")};d<t.length;){var v=c("CHAR"),f=c("NAME"),g=c("PATTERN");if(f||g){var _=v||"";i.indexOf(_)===-1&&(u+=_,_=""),u&&(o.push(u),u=""),o.push({name:f||l++,prefix:_,suffix:"",pattern:g||x(_),modifier:c("MODIFIER")||""});continue}var b=v||c("ESCAPED_CHAR");if(b){u+=b;continue}u&&(o.push(u),u="");var E=c("OPEN");if(E){var _=m(),S=c("NAME")||"",O=c("PATTERN")||"",N=m();h("CLOSE"),o.push({name:S||(O?l++:""),pattern:S&&!O?x(_):O,prefix:_,suffix:N,modifier:c("MODIFIER")||""});continue}h("END")}return o}function or(r,e){return lr(ut(r,e),e)}function lr(r,e){e===void 0&&(e={});var t=dt(e),n=e.encode,i=n===void 0?function(l){return l}:n,a=e.validate,s=a===void 0?!0:a,o=r.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),t)});return function(l){for(var d="",u=0;u<r.length;u++){var c=r[u];if(typeof c=="string"){d+=c;continue}var h=l?l[c.name]:void 0,m=c.modifier==="?"||c.modifier==="*",p=c.modifier==="*"||c.modifier==="+";if(Array.isArray(h)){if(!p)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(h.length===0){if(m)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var x=0;x<h.length;x++){var v=i(h[x],c);if(s&&!o[u].test(v))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(v,'"'));d+=c.prefix+v+c.suffix}continue}if(typeof h=="string"||typeof h=="number"){var v=i(String(h),c);if(s&&!o[u].test(v))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(v,'"'));d+=c.prefix+v+c.suffix;continue}if(!m){var f=p?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(f))}}return d}}function B(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dt(r){return r&&r.sensitive?"":"i"}function sn(r,e){if(!e)return r;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,i=t.exec(r.source);i;)e.push({name:i[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),i=t.exec(r.source);return r}function on(r,e,t){var n=r.map(function(i){return cr(i,e,t).source});return new RegExp("(?:".concat(n.join("|"),")"),dt(t))}function ln(r,e,t){return cn(ut(r,t),e,t)}function cn(r,e,t){t===void 0&&(t={});for(var n=t.strict,i=n===void 0?!1:n,a=t.start,s=a===void 0?!0:a,o=t.end,l=o===void 0?!0:o,d=t.encode,u=d===void 0?function(k){return k}:d,c=t.delimiter,h=c===void 0?"/#?":c,m=t.endsWith,p=m===void 0?"":m,x="[".concat(B(p),"]|$"),v="[".concat(B(h),"]"),f=s?"^":"",g=0,_=r;g<_.length;g++){var b=_[g];if(typeof b=="string")f+=B(u(b));else{var E=B(u(b.prefix)),S=B(u(b.suffix));if(b.pattern)if(e&&e.push(b),E||S)if(b.modifier==="+"||b.modifier==="*"){var O=b.modifier==="*"?"?":"";f+="(?:".concat(E,"((?:").concat(b.pattern,")(?:").concat(S).concat(E,"(?:").concat(b.pattern,"))*)").concat(S,")").concat(O)}else f+="(?:".concat(E,"(").concat(b.pattern,")").concat(S,")").concat(b.modifier);else{if(b.modifier==="+"||b.modifier==="*")throw new TypeError('Can not repeat "'.concat(b.name,'" without a prefix and suffix'));f+="(".concat(b.pattern,")").concat(b.modifier)}else f+="(?:".concat(E).concat(S,")").concat(b.modifier)}}if(l)i||(f+="".concat(v,"?")),f+=t.endsWith?"(?=".concat(x,")"):"$";else{var N=r[r.length-1],A=typeof N=="string"?v.indexOf(N[N.length-1])>-1:N===void 0;i||(f+="(?:".concat(v,"(?=").concat(x,"))?")),A||(f+="(?=".concat(v,"|").concat(x,")"))}return new RegExp(f,dt(t))}function cr(r,e,t){return r instanceof RegExp?sn(r,e):Array.isArray(r)?on(r,e,t):ln(r,e,t)}function K(r){return typeof r=="object"&&!!r}function $e(r){return typeof r=="function"}function L(r){return typeof r=="string"}function Ie(r=[]){return Array.isArray(r)?r:[r]}function Y(r){return`[Vaadin.Router] ${r}`}class ur extends Error{code;context;constructor(e){super(Y(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const re=Symbol("NotFoundResult");function dr(r){return new ur(r)}function hr(r){return(Array.isArray(r)?r[0]:r)??""}function je(r){return hr(r?.path)}function un(r){return Array.isArray(r)&&r.length>0?r:void 0}const tt=new Map;tt.set("|false",{keys:[],pattern:/(?:)/u});function St(r){try{return decodeURIComponent(r)}catch{return r}}function dn(r,e,t=!1,n=[],i){const a=`${r}|${String(t)}`,s=hr(e);let o=tt.get(a);if(!o){const u=[];o={keys:u,pattern:cr(r,u,{end:t,strict:r===""})},tt.set(a,o)}const l=o.pattern.exec(s);if(!l)return null;const d={...i};for(let u=1;u<l.length;u++){const c=o.keys[u-1],h=c.name,m=l[u];(m!==void 0||!Object.hasOwn(d,h))&&(c.modifier==="+"||c.modifier==="*"?d[h]=m?m.split(/[/?#]/u).map(St):[]:d[h]=m&&St(m))}return{keys:[...n,...o.keys],params:d,path:l[0]}}var hn=dn;function fr(r,e,t,n,i){let a,s,o=0,l=je(r);return l.startsWith("/")&&(t&&(l=l.substring(1)),t=!0),{next(d){if(r===d)return{done:!0,value:void 0};r.__children??=un(r.children);const u=r.__children??[],c=!r.__children&&!r.children;if(!a&&(a=hn(l,e,c,n,i),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:r}};if(a&&u.length>0)for(;o<u.length;){if(!s){const m=u[o];m.parent=r;let p=a.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),s=fr(m,e.substring(p),t,a.keys,a.params)}const h=s.next(d);if(!h.done)return{done:!1,value:h.value};s=null,o+=1}return{done:!0,value:void 0}}}}var fn=fr;function mn(r){if($e(r.route.action))return r.route.action(r)}function pn(r,e){let t=r;for(;t;)if(t=t.parent,t===e)return!0;return!1}function yn(r){return!!r&&typeof r=="object"&&"next"in r&&"params"in r&&"result"in r&&"route"in r}class gn extends Error{code;context;constructor(e,t){let n=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=je(e.route);i&&(n+=` Resolution had failed on route: '${i}'`),super(n,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}function bn(r,e){const{path:t,route:n}=e;if(n&&!n.__synthetic){const i={path:t,route:n};if(n.parent&&r.chain)for(let a=r.chain.length-1;a>=0&&r.chain[a].route!==n.parent;a--)r.chain.pop();r.chain?.push(i)}}class mr{baseUrl;#r;errorHandler;resolveRoute;#e;constructor(e,{baseUrl:t="",context:n,errorHandler:i,resolveRoute:a=mn}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=i,this.resolveRoute=a,Array.isArray(e)?this.#e={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#e={...e,parent:void 0},this.#r={...n,hash:"",async next(){return re},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#r}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(e){const t=this,n={...this.#r,...L(e)?{pathname:e}:e,next:d},i=fn(this.#e,this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),a=this.resolveRoute;let s=null,o=null,l=n;async function d(u=!1,c=s?.value?.route,h){const m=h===null?s?.value?.route:void 0;if(s=o??i.next(m),o=null,!u&&(s.done||!pn(s.value.route,c)))return o=s,re;if(s.done)throw dr(n);l={...n,params:s.value.params,route:s.value.route,chain:l.chain?.slice()},bn(l,s.value);const p=await a(l);return p!=null&&p!==re?(l.result=yn(p)?p.result:p,t.#r=l,l):await d(u,c,p)}try{return await d(!0,this.#e)}catch(u){const c=u instanceof ur?u:new gn(l,{code:500,cause:u});if(this.errorHandler)return l.result=this.errorHandler(c),l;throw u}}setRoutes(e){this.#e.__children=[...Ie(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=e.startsWith("/")?new URL(t).origin+e:`./${e}`,i=new URL(n,t).href;if(i.startsWith(t))return i.slice(t.length)}addRoutes(e){return this.#e.__children=[...this.#e.__children??[],...Ie(e)],this.getRoutes()}}function pr(r,e,t,n){const i=e.name??n?.(e);if(i&&(r.has(i)?r.get(i)?.push(e):r.set(i,[e])),Array.isArray(t))for(const a of t)a.parent=e,pr(r,a,a.__children??a.children,n)}function At(r,e){const t=r.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function vn(r,e={}){if(!(r instanceof mr))throw new TypeError("An instance of Resolver is expected");const t=new Map,n=new Map;return(i,a)=>{let s=At(n,i);if(!s&&(n.clear(),pr(n,r.root,r.root.__children,e.cacheKeyProvider),s=At(n,i),!s))throw new Error(`Route "${i}" not found`);let o=s.fullPath?t.get(s.fullPath):void 0;if(!o){let u=je(s),c=s.parent;for(;c;){const p=je(c);p&&(u=`${p.replace(/\/$/u,"")}/${u.replace(/^\//u,"")}`),c=c.parent}const h=ut(u),m=Object.create(null);for(const p of h)L(p)||(m[p.name]=!0);o={keys:m,tokens:h},t.set(u,o),s.fullPath=u}let d=lr(o.tokens,{encode:encodeURIComponent,...e})(a)||"/";if(e.stringifyQueryParams&&a){const u={};for(const[h,m]of Object.entries(a))!(h in o.keys)&&m&&(u[h]=m);const c=e.stringifyQueryParams(u);c&&(d+=c.startsWith("?")?c:`?${c}`)}return d}}var wn=vn;const xn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ne=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function $n(){function r(){return!0}return yr(r)}function _n(){try{return En()?!0:Sn()?Ne?!An():!$n():!1}catch{return!1}}function En(){return localStorage.getItem("vaadin.developmentmode.force")}function Sn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function An(){return!!(Ne&&Object.keys(Ne).map(e=>Ne[e]).filter(e=>e.productionMode).length>0)}function yr(r,e){if(typeof r!="function")return;const t=xn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const Dt=function(r,e){if(window.Vaadin.developmentMode)return yr(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=_n());function Dn(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const kn=function(){if(typeof Dt=="function")return Dt(Dn)};function Pn(r,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Pn();kn();const On=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Nn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};async function Tn(r,e){return r.classList.add(e),await new Promise(t=>{if(On(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Nn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}var kt=Tn;function gr(r){if(!r||!L(r.path))throw new Error(Y('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!$e(r.action)&&!Array.isArray(r.children)&&!$e(r.children)&&!L(r.component)&&!L(r.redirect))throw new Error(Y(`Expected route config "${r.path}" to include either "component, redirect" or "action" function but none found.`));r.redirect&&["bundle","component"].forEach(e=>{e in r&&console.warn(Y(`Route config "${String(r.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Pt(r){Ie(r).forEach(e=>gr(e))}function Cn({next:r,...e}){return e}function Te(r,e){const t=e.__effectiveBaseUrl;return t?new URL(r.replace(/^\//u,""),t).pathname:r}function br(r){return r.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Fn(r){return br(r.map(e=>e.route))}function R({chain:r=[],hash:e="",params:t={},pathname:n="",redirectFrom:i,resolver:a,search:s=""},o){const l=r.map(d=>d.route);return{baseUrl:a?.baseUrl??"",getUrl:(d={})=>a?Te(or(Fn(r))({...t,...d}),a):"",hash:e,params:t,pathname:n,redirectFrom:i,route:o??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function Ot(r,e){const t={...r.params};return{redirect:{from:r.pathname,params:t,pathname:e}}}function Mn(r,e){if(e.location=R(r),r.chain){const t=r.chain.map(n=>n.route).indexOf(r.route);r.chain[t].element=e}return e}function Ce(r,e,...t){if(typeof r=="function")return r.apply(e,t)}function Nt(r,e,...t){return n=>n&&K(n)&&("cancel"in n||"redirect"in n)?n:Ce(e?.[r],e,...t)}function Rn(r,e){if(!Array.isArray(r)&&!K(r))throw new Error(Y(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(r)}`));const t=Ie(r);t.forEach(n=>gr(n)),e.__children=t}function be(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function In(r){if(typeof r!="object")return String(r);const[e="Unknown"]=/ (.*)\]$/u.exec(String(r))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}function jn(r){const{port:e,protocol:t}=r,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function Tt(r){if(r instanceof Element)return r.nodeName.toLowerCase()}function Ct(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r instanceof MouseEvent?r.composedPath():r.path??[];for(let l=0;l<t.length;l++){const d=t[l];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e instanceof Node&&Tt(e)!=="a";)e=e.parentNode;if(!e||Tt(e)!=="a")return;const n=e;if(n.target&&n.target.toLowerCase()!=="_self"||n.hasAttribute("download")||n.hasAttribute("router-ignore")||n.pathname===window.location.pathname&&n.hash!==""||(n.origin||jn(n))!==window.location.origin)return;const{hash:a,pathname:s,search:o}=n;be("go",{hash:a,pathname:s,search:o})&&r instanceof MouseEvent&&(r.preventDefault(),r.type==="click"&&window.scrollTo(0,0))}const Ln={activate(){window.document.addEventListener("click",Ct)},inactivate(){window.document.removeEventListener("click",Ct)}};var Un=Ln;function Ft(r){if(r.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:n}=window.location;be("go",{hash:e,pathname:t,search:n})}const qn={activate(){window.addEventListener("popstate",Ft)},inactivate(){window.removeEventListener("popstate",Ft)}};var Wn=qn;let Mt=[];const Hn={CLICK:Un,POPSTATE:Wn};function Rt(r=[]){Mt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Mt=r}const zn=256;function me(){return{cancel:!0}}const It={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return re}};class ue extends mr{location=R({resolver:this});ready=Promise.resolve(this.location);#r=new WeakSet;#e=new WeakSet;#u=this.#b.bind(this);#s=0;#a;__previousContext;#o;#n=null;#t=null;constructor(e,t){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async a=>await this.#v(a)}),Rt(Object.values(Hn)),this.setOutlet(e),this.subscribe()}async#v(e){const{route:t}=e;if($e(t.children)){let i=await t.children(Cn(e));$e(t.children)||({children:i}=t),Rn(i,t)}const n={component:i=>{const a=document.createElement(i);return this.#e.add(a),a},prevent:me,redirect:i=>Ot(e,i)};return await Promise.resolve().then(async()=>{if(this.#i(e))return await Ce(t.action,t,e,n)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===re||K(i)&&"redirect"in i))return i;if(L(t.redirect))return n.redirect(t.redirect)}).then(i=>{if(i!=null)return i;if(L(t.component))return n.component(t.component)})}setOutlet(e){e&&this.#y(e),this.#a=e}getOutlet(){return this.#a}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#o=void 0,Pt(e),super.setRoutes(e),t||this.#b(),await this.ready}addRoutes(e){return Pt(e),super.addRoutes(e)}async render(e,t=!1){this.#s+=1;const n=this.#s,i={...It,...L(e)?{hash:"",search:"",pathname:e}:e,__renderId:n};return this.ready=this.#w(i,t),await this.ready}async#w(e,t){const{__renderId:n}=e;try{const i=await this.resolve(e),a=await this.#l(i);if(!this.#i(a))return this.location;const s=this.__previousContext;if(a===s)return this.#c(s,!0),this.location;if(this.location=R(a),t&&this.#c(a,n===1),be("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.#g(a,s),this.__previousContext=a,this.location;this.#_(a,s);const o=this.#k(a);if(this.#D(a),this.#A(a,s),await o,this.#i(a))return this.#E(),this.__previousContext=a,this.location}catch(i){if(n===this.#s){t&&this.#c(this.context);for(const a of this.#a?.children??[])a.remove();throw this.location=R(Object.assign(e,{resolver:this})),be("error",{router:this,error:i,...e}),i}}return this.location}async#l(e,t=e){const n=await this.#d(t),a=n!==t?n:e,o=Te(br(n.chain??[]),this)===n.pathname,l=async(u,c=u.route,h)=>{const m=await u.next(!1,c,h);return m===null||m===re?o?u:c.parent!=null?await l(u,c.parent,m):m:m},d=await l(n);if(d==null||d===re)throw dr(a);return d!==n?await this.#l(a,d):await this.#x(n)}async#d(e){const{result:t}=e;if(t instanceof HTMLElement)return Mn(e,t),e;if(t&&"redirect"in t){const n=await this.#p(t.redirect,e.__redirectCount,e.__renderId);return await this.#d(n)}throw t instanceof Error?t:new Error(Y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${In(t)}". Double check the action return value for the route.`))}async#x(e){return await this.#$(e).then(async t=>t===this.__previousContext||t===e?t:await this.#l(t))}async#$(e){const t=this.__previousContext??{},n=t.chain??[],i=e.chain??[];let a=Promise.resolve(void 0);const s=o=>Ot(e,o);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let o=0;o<Math.min(n.length,i.length)&&!(n[o].route!==i[o].route||n[o].path!==i[o].path&&n[o].element!==i[o].element||!this.#m(n[o].element,i[o].element));e.__divergedChainIndex++,o++);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex===i.length&&this.#m(e.result,t.result),e.__skipAttach){for(let o=i.length-1;o>=0;o--)a=this.#h(a,e,{prevent:me},n[o]);for(let o=0;o<i.length;o++)a=this.#f(a,e,{prevent:me,redirect:s},i[o]),n[o].element.location=R(e,n[o].route)}else for(let o=n.length-1;o>=e.__divergedChainIndex;o--)a=this.#h(a,e,{prevent:me},n[o])}if(!e.__skipAttach)for(let o=0;o<i.length;o++)o<e.__divergedChainIndex?o<n.length&&n[o].element&&(n[o].element.location=R(e,n[o].route)):(a=this.#f(a,e,{prevent:me,redirect:s},i[o]),i[o].element&&(i[o].element.location=R(e,i[o].route)));return await a.then(async o=>{if(o&&K(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in o)return await this.#p(o.redirect,e.__redirectCount,e.__renderId)}return e})}async#h(e,t,n,i){const a=R(t);let s=await e;if(this.#i(t)&&(s=Nt("onBeforeLeave",i.element,a,n,this)(s)),!(K(s)&&"redirect"in s))return s}async#f(e,t,n,i){const a=R(t,i.route),s=await e;if(this.#i(t))return Nt("onBeforeEnter",i.element,a,n,this)(s)}#m(e,t){return e instanceof Element&&t instanceof Element?this.#e.has(e)&&this.#e.has(t)?e.localName===t.localName:e===t:!1}#i(e){return e.__renderId===this.#s}async#p(e,t=0,n=0){if(t>zn)throw new Error(Y(`Too many redirects when rendering ${e.from}`));return await this.resolve({...It,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:n})}#y(e=this.#a){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(Y(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#c({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const a=i?"replaceState":"pushState";window.history[a](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(e,t){let n=this.#a;for(let i=0;i<(e.__divergedChainIndex??0);i++){const a=t?.chain?.[i].element;if(a)if(a.parentNode===n)e.chain[i].element=a,n=a;else break}return n}#_(e,t){this.#y(),this.#S();const n=this.#g(e,t);this.#n=[],this.#t=Array.from(n?.children??[]).filter(a=>this.#r.has(a)&&a!==e.result);let i=n;for(let a=e.__divergedChainIndex??0;a<(e.chain?.length??0);a++){const s=e.chain[a].element;s&&(i?.appendChild(s),this.#r.add(s),i===n&&this.#n.push(s),i=s)}}#E(){if(this.#t)for(const e of this.#t)e.remove();this.#t=null,this.#n=null}#S(){if(this.#t&&this.#n){for(const e of this.#n)e.remove();this.#t=null,this.#n=null}}#A(e,t){if(!(!t?.chain||e.__divergedChainIndex==null))for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.#i(e);n--){const i=t.chain[n].element;if(i)try{const a=R(e);Ce(i.onAfterLeave,i,a,{},this)}finally{if(this.#t?.includes(i))for(const a of i.children)a.remove()}}}#D(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#i(e);t++){const n=e.chain[t].element;if(n){const i=R(e,e.chain[t].route);Ce(n.onAfterEnter,n,i,{},this)}}}async#k(e){const t=this.#t?.[0],n=this.#n?.[0],i=[],{chain:a=[]}=e;let s;for(let o=a.length-1;o>=0;o--)if(a[o].route.animate){s=a[o].route.animate;break}if(t&&n&&s){const o=K(s)&&s.leave?s.leave:"leaving",l=K(s)&&s.enter?s.enter:"entering";i.push(kt(t,o)),i.push(kt(n,l))}return await Promise.all(i),e}subscribe(){window.addEventListener("vaadin-router-go",this.#u)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#u)}#b(e){const{pathname:t,search:n,hash:i}=e instanceof CustomEvent?e.detail:window.location;L(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Rt(e)}urlForName(e,t){return this.#o||(this.#o=wn(this,{cacheKeyProvider(n){return"component"in n&&typeof n.component=="string"?n.component:void 0}})),Te(this.#o(e,t??void 0),this)}urlForPath(e,t){return Te(or(e)(t??void 0),this)}static go(e){const{pathname:t,search:n,hash:i}=L(e)?new URL(e,"http://a"):e;return be("go",{pathname:t,search:n,hash:i})}}const vr={en:{employeeListTitle:"Employee List Page",employeeListDescription:"Here employees will be listed.",addEmployee:"Add Employee",delete:"Delete",edit:"Edit",confirmDelete:"Are you sure you want to delete this employee?",id:"ID",firstName:"First Name",lastName:"Last Name",employmentDate:"Date of Employment",birthDate:"Birth Date",phone:"Phone",email:"Email",department:"Department",position:"Position",actions:"Actions"},tr:{employeeListTitle:"Çalışan Listesi",employeeListDescription:"Burada çalışanlar listelenecek.",addEmployee:"Çalışan Ekle",delete:"Sil",edit:"Düzenle",confirmDelete:"Bu çalışanı silmek istediğinizden emin misiniz?",id:"ID",firstName:"Ad",lastName:"Soyad",employmentDate:"İşe Giriş",birthDate:"Doğum Tarihi",phone:"Telefon",email:"Email",department:"Bölüm",position:"Pozisyon",actions:"Aksiyonla"}};let Be=localStorage.getItem("app-language")||"tr";document.documentElement.lang=Be;function y(r){return vr[Be][r]||r}function Vn(r){vr[r]&&(Be=r,document.documentElement.lang=r,localStorage.setItem("app-language",r),window.location.reload())}function jt(){return Be}class Bn extends F{constructor(){super(),this.activeRoute=window.location.pathname,this.currentLang=jt()}handleNavigation(e,t){t.preventDefault(),this.activeRoute=e,ue.go(e)}toggleLanguage(){const e=this.currentLang==="tr"?"en":"tr";Vn(e),this.currentLang=jt()}render(){return D`
      <div class="navbar">
        <div class="logo">
        <img src="/assets/ing-logo.png" class="logo-img" alt="ING Logo">
          <span class="logo-text">
            ING
          </span>
        </div>
        
        <div class="nav-right">
          <a href="/employees" 
             class="${this.activeRoute==="/employees"?"active":""}"
             @click="${e=>this.handleNavigation("/employees",e)}">
            <iconify-icon icon="mdi:account-group"></iconify-icon> Employees
          </a>
          <button class="add-new-btn" @click="${e=>this.handleNavigation("/employees/add",e)}">
            <iconify-icon icon="mdi:plus"></iconify-icon> Add New
          </button>
          
          <div class="language-selector" @click="${this.toggleLanguage}">
            <iconify-icon icon="emojione:flag-for-${this.currentLang==="tr"?"turkey":"united-kingdom"}"></iconify-icon>
          </div>
        </div>
      </div>
    `}static styles=H`
  :host {
    display: block;
    width: 100%;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 60px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    font-size: 24px;
  }
  .logo-img {
    width: 30px;
  }
  
  .logo-text {
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
  }
  
  .nav-right a {
    text-decoration: none;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    margin: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .nav-right a.active {
    color: var(--primary-color);
  }
  
  .nav-right iconify-icon {
    margin-right: 5px;
  }
  
  .nav-right {
    color: var(--primary-color);
    display: flex;
    align-items: center;
     margin-left: 15px;
  }
  
  
  .add-new-btn {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 4px;
    font-weight: 100;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .language-selector {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .language-selector iconify-icon {
    width: 34px;
    height: 34px;
    display : flex;
    align-items: center;
  }
`}customElements.define("app-navbar",Bn);const Yn=[{id:1,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:2,firstName:"Ahmet",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:3,firstName:"Mehmet",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:4,firstName:"Ayşe",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:5,firstName:"Fatma",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:6,firstName:"Mustafa",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:7,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:8,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:9,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:10,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:11,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:12,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:13,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:14,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:15,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:16,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:17,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:18,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:19,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:20,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:21,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:22,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:23,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:24,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:25,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:26,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:27,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:28,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:29,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:30,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:31,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:32,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:33,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:34,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:35,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:36,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:37,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:38,firstName:"Mert Can",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:39,firstName:"Burak",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:40,firstName:"Fatma",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:41,firstName:"Ayşe",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:42,firstName:"Mehmet",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:43,firstName:"Ahmet",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"},{id:44,firstName:"Berkay",lastName:"Sourtimes",employmentDate:"2022-09-09",birthDate:"1998-04-08",phone:"+905321234567",email:"berkay@sourtimes.com",department:"Analytics",position:"Junior"}],wr="ing_employees";function Jn(){const r=localStorage.getItem(wr);return r?JSON.parse(r):Yn}let W=Jn();function rt(){return W}function ht(){localStorage.setItem(wr,JSON.stringify(W))}function Gn(r){const e=Math.max(...W.map(t=>t.id),0);r.id=e+1,W=[...W,r],ht()}function Xn(r,e){W=W.map(t=>t.id===r?{...t,...e}:t),ht()}function Qn(r){W=W.filter(e=>e.id!==r),ht()}class Zn extends F{static properties={currentPage:{type:Number},totalPages:{type:Number},itemsPerPage:{type:Number},totalItems:{type:Number}};constructor(){super(),this.currentPage=1,this.totalPages=1,this.itemsPerPage=10,this.totalItems=0}goToPage(e){e>=1&&e<=this.totalPages&&(this.currentPage=e,this.dispatchEvent(new CustomEvent("page-changed",{detail:{page:this.currentPage},bubbles:!0,composed:!0})))}render(){const e=Math.min(5,this.totalPages);let t=Math.max(1,this.currentPage-Math.floor(e/2)),n=Math.min(this.totalPages,t+e-1);n-t+1<e&&(t=Math.max(1,n-e+1));const i=[];for(let a=t;a<=n;a++)i.push(D`
        <button 
          class=${a===this.currentPage?"active":""}
          @click=${()=>this.goToPage(a)}
        >
          ${a}
        </button>
      `);return D`
      <div class="pagination">
        <button 
          ?disabled=${this.currentPage===1}
          @click=${()=>this.goToPage(this.currentPage-1)}
        >
          <iconify-icon icon="mdi:chevron-left"></iconify-icon>
        </button>
        
        ${i}
        
        <button 
          ?disabled=${this.currentPage===this.totalPages}
          @click=${()=>this.goToPage(this.currentPage+1)}
        >
          <iconify-icon icon="mdi:chevron-right"></iconify-icon>
        </button>
      </div>
    `}static styles=H`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
  
  
  .pagination button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: white;
    cursor: pointer;
    border-radius: 50%;
    border: 0px;
  }
  
  .pagination button:disabled iconify-icon {
    color: #ccc;
  }
  
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pagination .active {
    background: var(--primary-color);
    color: white;
  }
  
  .pagination .active iconify-icon {
    color: white;
  }
`}customElements.define("app-pagination",Zn);const xr=6048e5,Kn=864e5,Lt=Symbol.for("constructDateFrom");function G(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&Lt in r?r[Lt](e):r instanceof Date?new r.constructor(e):new Date(e)}function I(r,e){return G(e||r,r)}let ei={};function Ye(){return ei}function _e(r,e){const t=Ye(),n=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,i=I(r,e?.in),a=i.getDay(),s=(a<n?7:0)+a-n;return i.setDate(i.getDate()-s),i.setHours(0,0,0,0),i}function Le(r,e){return _e(r,{...e,weekStartsOn:1})}function $r(r,e){const t=I(r,e?.in),n=t.getFullYear(),i=G(t,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const a=Le(i),s=G(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=Le(s);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Ut(r){const e=I(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function ti(r,...e){const t=G.bind(null,e.find(n=>typeof n=="object"));return e.map(t)}function qt(r,e){const t=I(r,e?.in);return t.setHours(0,0,0,0),t}function ri(r,e,t){const[n,i]=ti(t?.in,r,e),a=qt(n),s=qt(i),o=+a-Ut(a),l=+s-Ut(s);return Math.round((o-l)/Kn)}function ni(r,e){const t=$r(r,e),n=G(r,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Le(n)}function ii(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ai(r){return!(!ii(r)&&typeof r!="number"||isNaN(+I(r)))}function si(r,e){const t=I(r,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const oi={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},li=(r,e,t)=>{let n;const i=oi[r];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};function Ge(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const ci={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ui={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},di={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},hi={date:Ge({formats:ci,defaultWidth:"full"}),time:Ge({formats:ui,defaultWidth:"full"}),dateTime:Ge({formats:di,defaultWidth:"full"})},fi={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mi=(r,e,t,n)=>fi[r];function pe(r){return(e,t)=>{const n=t?.context?String(t.context):"standalone";let i;if(n==="formatting"&&r.formattingValues){const s=r.defaultFormattingWidth||r.defaultWidth,o=t?.width?String(t.width):s;i=r.formattingValues[o]||r.formattingValues[s]}else{const s=r.defaultWidth,o=t?.width?String(t.width):r.defaultWidth;i=r.values[o]||r.values[s]}const a=r.argumentCallback?r.argumentCallback(e):e;return i[a]}}const pi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},yi={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},gi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},bi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},wi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},xi=(r,e)=>{const t=Number(r),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},$i={ordinalNumber:xi,era:pe({values:pi,defaultWidth:"wide"}),quarter:pe({values:yi,defaultWidth:"wide",argumentCallback:r=>r-1}),month:pe({values:gi,defaultWidth:"wide"}),day:pe({values:bi,defaultWidth:"wide"}),dayPeriod:pe({values:vi,defaultWidth:"wide",formattingValues:wi,defaultFormattingWidth:"wide"})};function ye(r){return(e,t={})=>{const n=t.width,i=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],a=e.match(i);if(!a)return null;const s=a[0],o=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?Ei(o,c=>c.test(s)):_i(o,c=>c.test(s));let d;d=r.valueCallback?r.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const u=e.slice(s.length);return{value:d,rest:u}}}function _i(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Ei(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Si(r){return(e,t={})=>{const n=e.match(r.matchPattern);if(!n)return null;const i=n[0],a=e.match(r.parsePattern);if(!a)return null;let s=r.valueCallback?r.valueCallback(a[0]):a[0];s=t.valueCallback?t.valueCallback(s):s;const o=e.slice(i.length);return{value:s,rest:o}}}const Ai=/^(\d+)(th|st|nd|rd)?/i,Di=/\d+/i,ki={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pi={any:[/^b/i,/^(a|c)/i]},Oi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ni={any:[/1/i,/2/i,/3/i,/4/i]},Ti={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ci={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ri={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ii={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ji={ordinalNumber:Si({matchPattern:Ai,parsePattern:Di,valueCallback:r=>parseInt(r,10)}),era:ye({matchPatterns:ki,defaultMatchWidth:"wide",parsePatterns:Pi,defaultParseWidth:"any"}),quarter:ye({matchPatterns:Oi,defaultMatchWidth:"wide",parsePatterns:Ni,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ye({matchPatterns:Ti,defaultMatchWidth:"wide",parsePatterns:Ci,defaultParseWidth:"any"}),day:ye({matchPatterns:Fi,defaultMatchWidth:"wide",parsePatterns:Mi,defaultParseWidth:"any"}),dayPeriod:ye({matchPatterns:Ri,defaultMatchWidth:"any",parsePatterns:Ii,defaultParseWidth:"any"})},Li={code:"en-US",formatDistance:li,formatLong:hi,formatRelative:mi,localize:$i,match:ji,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ui(r,e){const t=I(r,e?.in);return ri(t,si(t))+1}function qi(r,e){const t=I(r,e?.in),n=+Le(t)-+ni(t);return Math.round(n/xr)+1}function _r(r,e){const t=I(r,e?.in),n=t.getFullYear(),i=Ye(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,s=G(e?.in||r,0);s.setFullYear(n+1,0,a),s.setHours(0,0,0,0);const o=_e(s,e),l=G(e?.in||r,0);l.setFullYear(n,0,a),l.setHours(0,0,0,0);const d=_e(l,e);return+t>=+o?n+1:+t>=+d?n:n-1}function Wi(r,e){const t=Ye(),n=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,i=_r(r,e),a=G(e?.in||r,0);return a.setFullYear(i,0,n),a.setHours(0,0,0,0),_e(a,e)}function Hi(r,e){const t=I(r,e?.in),n=+_e(t,e)-+Wi(t,e);return Math.round(n/xr)+1}function $(r,e){const t=r<0?"-":"",n=Math.abs(r).toString().padStart(e,"0");return t+n}const z={y(r,e){const t=r.getFullYear(),n=t>0?t:1-t;return $(e==="yy"?n%100:n,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):$(t+1,2)},d(r,e){return $(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return $(r.getHours()%12||12,e.length)},H(r,e){return $(r.getHours(),e.length)},m(r,e){return $(r.getMinutes(),e.length)},s(r,e){return $(r.getSeconds(),e.length)},S(r,e){const t=e.length,n=r.getMilliseconds(),i=Math.trunc(n*Math.pow(10,t-3));return $(i,e.length)}},se={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wt={G:function(r,e,t){const n=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const n=r.getFullYear(),i=n>0?n:1-n;return t.ordinalNumber(i,{unit:"year"})}return z.y(r,e)},Y:function(r,e,t,n){const i=_r(r,n),a=i>0?i:1-i;if(e==="YY"){const s=a%100;return $(s,2)}return e==="Yo"?t.ordinalNumber(a,{unit:"year"}):$(a,e.length)},R:function(r,e){const t=$r(r);return $(t,e.length)},u:function(r,e){const t=r.getFullYear();return $(t,e.length)},Q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return $(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return $(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(r,e,t){const n=r.getMonth();switch(e){case"M":case"MM":return z.M(r,e);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(r,e,t){const n=r.getMonth();switch(e){case"L":return String(n+1);case"LL":return $(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(r,e,t,n){const i=Hi(r,n);return e==="wo"?t.ordinalNumber(i,{unit:"week"}):$(i,e.length)},I:function(r,e,t){const n=qi(r);return e==="Io"?t.ordinalNumber(n,{unit:"week"}):$(n,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):z.d(r,e)},D:function(r,e,t){const n=Ui(r);return e==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):$(n,e.length)},E:function(r,e,t){const n=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(r,e,t,n){const i=r.getDay(),a=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return $(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(r,e,t,n){const i=r.getDay(),a=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return $(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(r,e,t){const n=r.getDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return $(i,e.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(r,e,t){const i=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(r,e,t){const n=r.getHours();let i;switch(n===12?i=se.noon:n===0?i=se.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(r,e,t){const n=r.getHours();let i;switch(n>=17?i=se.evening:n>=12?i=se.afternoon:n>=4?i=se.morning:i=se.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let n=r.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return z.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):z.H(r,e)},K:function(r,e,t){const n=r.getHours()%12;return e==="Ko"?t.ordinalNumber(n,{unit:"hour"}):$(n,e.length)},k:function(r,e,t){let n=r.getHours();return n===0&&(n=24),e==="ko"?t.ordinalNumber(n,{unit:"hour"}):$(n,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):z.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):z.s(r,e)},S:function(r,e){return z.S(r,e)},X:function(r,e,t){const n=r.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return zt(n);case"XXXX":case"XX":return Q(n);case"XXXXX":case"XXX":default:return Q(n,":")}},x:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"x":return zt(n);case"xxxx":case"xx":return Q(n);case"xxxxx":case"xxx":default:return Q(n,":")}},O:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ht(n,":");case"OOOO":default:return"GMT"+Q(n,":")}},z:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ht(n,":");case"zzzz":default:return"GMT"+Q(n,":")}},t:function(r,e,t){const n=Math.trunc(+r/1e3);return $(n,e.length)},T:function(r,e,t){return $(+r,e.length)}};function Ht(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),i=Math.trunc(n/60),a=n%60;return a===0?t+String(i):t+String(i)+e+$(a,2)}function zt(r,e){return r%60===0?(r>0?"-":"+")+$(Math.abs(r)/60,2):Q(r,e)}function Q(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),i=$(Math.trunc(n/60),2),a=$(n%60,2);return t+i+e+a}const Vt=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Er=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},zi=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],n=t[1],i=t[2];if(!i)return Vt(r,e);let a;switch(n){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",Vt(n,e)).replace("{{time}}",Er(i,e))},Vi={p:Er,P:zi},Bi=/^D+$/,Yi=/^Y+$/,Ji=["D","DD","YY","YYYY"];function Gi(r){return Bi.test(r)}function Xi(r){return Yi.test(r)}function Qi(r,e,t){const n=Zi(r,e,t);if(console.warn(n),Ji.includes(r))throw new RangeError(n)}function Zi(r,e,t){const n=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ki=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ea=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ta=/^'([^]*?)'?$/,ra=/''/g,na=/[a-zA-Z]/;function Sr(r,e,t){const n=Ye(),i=n.locale??Li,a=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,s=n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=I(r,t?.in);if(!ai(o))throw new RangeError("Invalid time value");let l=e.match(ea).map(u=>{const c=u[0];if(c==="p"||c==="P"){const h=Vi[c];return h(u,i.formatLong)}return u}).join("").match(Ki).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const c=u[0];if(c==="'")return{isToken:!1,value:ia(u)};if(Wt[c])return{isToken:!0,value:u};if(c.match(na))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");return{isToken:!1,value:u}});i.localize.preprocessor&&(l=i.localize.preprocessor(o,l));const d={firstWeekContainsDate:a,weekStartsOn:s,locale:i};return l.map(u=>{if(!u.isToken)return u.value;const c=u.value;(Xi(c)||Gi(c))&&Qi(c,e,String(r));const h=Wt[c[0]];return h(o,c,i.localize,d)}).join("")}function ia(r){const e=r.match(ta);return e?e[1].replace(ra,"'"):r}function Ue(r){return Sr(r,"dd/MM/yyyy")}function De(r){return Sr(r,"yyyy-MM-dd")}function Ar(r){if(r){const e=r.slice(-10);return`+90 ${e.slice(0,3)} ${e.slice(3,6)} ${e.slice(6)}`}else return""}class aa extends F{static properties={data:{type:Array}};constructor(){super(),this.data=[]}handleEdit(e){this.dispatchEvent(new CustomEvent("edit-item",{detail:{employee:e}}))}handleDelete(e){this.dispatchEvent(new CustomEvent("delete-item",{detail:{employee:e}}))}render(){return D`
      <table>
        <thead>
          <tr>
            <th>${y("firstName")}</th>
            <th>${y("lastName")}</th>
            <th>${y("employmentDate")}</th>
            <th>${y("birthDate")}</th>
            <th>${y("phone")}</th>
            <th>${y("email")}</th>
            <th>${y("department")}</th>
            <th>${y("position")}</th>
            <th>${y("actions")}</th>
          </tr>
        </thead>
        <tbody>
          ${this.data.map(e=>D`
            <tr>
              <td data-label="${y("firstName")}">${e.firstName}</td>
              <td data-label="${y("lastName")}">${e.lastName}</td>
              <td data-label="${y("employmentDate")}">${Ue(e.employmentDate)}</td>
              <td data-label="${y("birthDate")}">${Ue(e.birthDate)}</td>
              <td data-label="${y("phone")}">${Ar(e.phone)}</td>
              <td data-label="${y("email")}">${e.email}</td>
              <td data-label="${y("department")}">${e.department}</td>
              <td data-label="${y("position")}">${e.position}</td>
              <td data-label="${y("actions")}">
                <div class="actions">
                  <span class="edit-icon" @click=${()=>this.handleEdit(e)}>
                    <iconify-icon icon="mdi:pencil"></iconify-icon>
                  </span>
                  <span class="delete-icon" @click=${()=>this.handleDelete(e)}>
                    <iconify-icon icon="mdi:delete"></iconify-icon>
                  </span>
                </div>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `}static styles=H`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
    overflow-x: auto;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 5px;
  }
  
  th, td {
    padding: 20px;
    text-align: left;
    white-space: nowrap;
    background: white;
    border: none;
  }
  
  th {
    border: none;
    color: var(--primary-color);
  }
  
  tr {
    border-top: 0.5px solid lightgray;
    padding: 20px;
  }
  
  tr:first-child {
    border-top: none;
  }
  
  tbody tr:first-child {
    border-top: 0.5px solid lightgray;
  }
  
  .actions {
    display: flex;
    justify-content: center;
     margin-left: 0.5rem;
  }
  
  .edit-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .edit-icon iconify-icon {
    font-size: 20px;
  }
  
  .delete-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .delete-icon iconify-icon {
    font-size: 20px;
  }
  
  @media (max-width: 700px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }
    
    thead tr {
      display: none;
    }
    
    tr {
      margin-bottom: 1rem;
      border-bottom: 2px solid #eee;
    }
    
    td {
      border: none;
      position: relative;
      padding-left: 50%;
      min-height: 2.5em;
    }
    
    td:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 45%;
      white-space: nowrap;
      font-weight: bold;
      padding-left: 0.5rem;
      content: attr(data-label);
    }
  }
`}customElements.define("data-table",aa);class sa extends F{static properties={employee:{type:Object}};constructor(){super(),this.employee={}}handleEdit(){this.dispatchEvent(new CustomEvent("edit-employee",{detail:{employee:this.employee},bubbles:!0,composed:!0}))}handleDelete(){this.dispatchEvent(new CustomEvent("delete-employee",{detail:{employee:this.employee},bubbles:!0,composed:!0}))}render(){const e=this.employee;return D`
      <div class="card">
        <div class="card-content">
          <div class="info-group">
            <div class="info-item">
              <p class="info-label">${y("firstName")}:</p>
              <p class="info-value">${e.firstName||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("employmentDate")}:</p>
              <p class="info-value">${Ue(e.employmentDate)||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("phone")}:</p>
              <p class="info-value">${Ar(e.phone)||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("department")}:</p>
              <p class="info-value">${e.department||""}</p>
            </div>
          </div>
          
          <div class="info-group">
            <div class="info-item">
              <p class="info-label">${y("lastName")}:</p>
              <p class="info-value">${e.lastName||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("birthDate")}:</p>
              <p class="info-value">${Ue(e.birthDate)||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("email")}:</p>
              <p class="info-value">${e.email||""}</p>
            </div>
            <div class="info-item">
              <p class="info-label">${y("position")}:</p>
              <p class="info-value">${e.position||""}</p>
            </div>
          </div>
        </div>
        
        <div class="card-actions">
          <button class="action-btn edit-btn" @click=${this.handleEdit}>
            <iconify-icon icon="mdi:pencil"></iconify-icon>
            ${y("edit")}
          </button>
          <button class="action-btn delete-btn" @click=${this.handleDelete}>
            <iconify-icon icon="mdi:delete"></iconify-icon>
            ${y("delete")}
          </button>
        </div>
      </div>
    `}static styles=H`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    transition: box-shadow 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .card-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  
  .info-group {
    display: flex;
    flex-direction: column;
    width: 48%;
  }

  .info-item {
    display: block;
  }
  
  .info-label {
    font-weight: 600;
    color: gray;
    font-size: 14px;
  }
  
  .info-value {
    font-weight: 600;
    font-size: 15px;
  }
  
  .card-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .card-actions > * {
    margin-left: 10px;
  }
  
  .card-actions > *:first-child {
    margin-left: 0;
  }
  
  .action-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
  
  .edit-btn {
    background-color: #525099;
    color: white;
  }
  
  .delete-btn {
    background-color: #FF6006;
    color: white;
  }
  
  .action-btn iconify-icon {
    color: white;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .info-group {
      width: 100%;
    }
  }
`}customElements.define("employee-card",sa);class oa extends F{static properties={currentView:{type:String}};constructor(){super(),this.currentView=localStorage.getItem("viewToggle")||"table"}updated(e){e.has("currentView")&&this.currentView&&localStorage.setItem("viewToggle",this.currentView)}handleViewChange(e){this.currentView=e,localStorage.setItem("viewToggle",e),this.dispatchEvent(new CustomEvent("view-changed",{detail:{view:this.currentView},bubbles:!0,composed:!0}))}render(){return D`
      <div class="view-toggle">
        <button 
          class="toggle-btn ${this.currentView==="table"?"active":""}"
          @click=${()=>this.handleViewChange("table")}
          title="Table View"
        >
          <iconify-icon icon="mdi:table"></iconify-icon>
        </button>
        
        <button 
          class="toggle-btn ${this.currentView==="card"?"active":""}"
          @click=${()=>this.handleViewChange("card")}
          title="Card View"
        >
          <iconify-icon icon="mdi:view-grid"></iconify-icon>
        </button>
      </div>
    `}static styles=H`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .view-toggle {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .toggle-btn:hover {
    background-color: rgba(243, 156, 18, 0.1);
  }
  
  .toggle-btn.active {
    background-color: var(--primary-color);
  }
  
  .toggle-btn.active iconify-icon {
    color: white;
  }
  
  .toggle-btn iconify-icon {
    font-size: 20px;
  }
`}customElements.define("view-toggle",oa);class la extends F{static properties={employees:{type:Array},currentPage:{type:Number},itemsPerPage:{type:Number},totalPages:{type:Number},currentView:{type:String}};constructor(){super(),this.employees=rt(),this.currentPage=1,this.itemsPerPage=10,this.totalPages=Math.ceil(this.employees.length/this.itemsPerPage),this.currentView=localStorage.getItem("viewToggle")||"table"}handleViewChange(e){this.currentView=e.detail.view}handleEdit(e){const t=e.detail.employee;ue.go(`/employees/edit?id=${t.id}`)}handleDelete(e){const t=e.detail.employee;this.showConfirmModal({title:"Delete Employee",message:`Are you sure you want to delete ${t.firstName} ${t.lastName}?`},n=>{n&&(Qn(t.id),this.employees=rt(),this.totalPages=Math.ceil(this.employees.length/this.itemsPerPage))})}showConfirmModal(e,t){this.shadowRoot.querySelector("confirm-modal").open(e,t)}getCurrentPageEmployees(){const e=[...this.employees].reverse(),t=(this.currentPage-1)*this.itemsPerPage,n=t+this.itemsPerPage;return e.slice(t,n)}handlePageChange(e){this.currentPage=e.detail.page}render(){const e=this.getCurrentPageEmployees();return D`
      <div class="page-header">
        <view-toggle .currentView=${this.currentView} @view-changed=${this.handleViewChange}></view-toggle>
      </div>
      
      <div class="table-view ${this.currentView==="table"?"active":""}">
        <data-table 
          .data=${e}
          @edit-item=${this.handleEdit}
          @delete-item=${this.handleDelete}
        ></data-table>
      </div>
      
      <div class="card-view ${this.currentView==="card"?"active":""}">
        <div class="cards-container">
          ${e.map(t=>D`
            <employee-card 
              .employee=${t}
              @edit-employee=${this.handleEdit}
              @delete-employee=${this.handleDelete}
            ></employee-card>
          `)}
        </div>
      </div>
      
      <app-pagination 
        .currentPage=${this.currentPage}
        .totalPages=${this.totalPages}
        .itemsPerPage=${this.itemsPerPage}
        .totalItems=${this.employees.length}
        @page-changed=${this.handlePageChange}
      ></app-pagination>
      
      <confirm-modal></confirm-modal>
    `}static styles=H`
  :host {
    display: block;
    width: 100%;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  h2 {
    color: #2c3e50;
  }
  
  .page-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
  }
  
  .page-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin: 0;
  }
  
  .table-view,
  .card-view {
    display: none;
  }
  
  .table-view.active,
  .card-view.active {
    display: block;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cards-container employee-card {
    width: 580px;
    margin: 10px;
  }
  
  /* 700px altında otomatik card view */
  @media (max-width: 700px) {
    .table-view {
      display: none !important;
    }
    
    .card-view {
      display: block !important;
    }
    
    .cards-container {
      justify-content: center;
    }
    
    .cards-container employee-card {
      width: 100%;
      max-width: 580px;
    }
    
    .page-header {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 15px;
    }
  }
`}customElements.define("employee-list",la);function ca(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xe,Bt;function ua(){if(Bt)return Xe;Bt=1;function r(f){this._maxSize=f,this.clear()}r.prototype.clear=function(){this._size=0,this._values=Object.create(null)},r.prototype.get=function(f){return this._values[f]},r.prototype.set=function(f,g){return this._size>=this._maxSize&&this.clear(),f in this._values||this._size++,this._values[f]=g};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,t=/^\d+$/,n=/^\d/,i=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,a=/^\s*(['"]?)(.*?)(\1)\s*$/,s=512,o=new r(s),l=new r(s),d=new r(s);Xe={Cache:r,split:c,normalizePath:u,setter:function(f){var g=u(f);return l.get(f)||l.set(f,function(b,E){for(var S=0,O=g.length,N=b;S<O-1;){var A=g[S];if(A==="__proto__"||A==="constructor"||A==="prototype")return b;N=N[g[S++]]}N[g[S]]=E})},getter:function(f,g){var _=u(f);return d.get(f)||d.set(f,function(E){for(var S=0,O=_.length;S<O;)if(E!=null||!g)E=E[_[S++]];else return;return E})},join:function(f){return f.reduce(function(g,_){return g+(m(_)||t.test(_)?"["+_+"]":(g?".":"")+_)},"")},forEach:function(f,g,_){h(Array.isArray(f)?f:c(f),g,_)}};function u(f){return o.get(f)||o.set(f,c(f).map(function(g){return g.replace(a,"$2")}))}function c(f){return f.match(e)||[""]}function h(f,g,_){var b=f.length,E,S,O,N;for(S=0;S<b;S++)E=f[S],E&&(v(E)&&(E='"'+E+'"'),N=m(E),O=!N&&/^\d+$/.test(E),g.call(_,E,N,O,S,f))}function m(f){return typeof f=="string"&&f&&["'",'"'].indexOf(f.charAt(0))!==-1}function p(f){return f.match(n)&&!f.match(t)}function x(f){return i.test(f)}function v(f){return!m(f)&&(p(f)||x(f))}return Xe}var ne=ua(),Qe,Yt;function da(){if(Yt)return Qe;Yt=1;const r=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,e=u=>u.match(r)||[],t=u=>u[0].toUpperCase()+u.slice(1),n=(u,c)=>e(u).join(c).toLowerCase(),i=u=>e(u).reduce((c,h)=>`${c}${c?h[0].toUpperCase()+h.slice(1).toLowerCase():h.toLowerCase()}`,"");return Qe={words:e,upperFirst:t,camelCase:i,pascalCase:u=>t(i(u)),snakeCase:u=>n(u,"_"),kebabCase:u=>n(u,"-"),sentenceCase:u=>t(n(u," ")),titleCase:u=>e(u).map(t).join(" ")},Qe}var Ze=da(),ke={exports:{}},Jt;function ha(){if(Jt)return ke.exports;Jt=1,ke.exports=function(i){return r(e(i),i)},ke.exports.array=r;function r(i,a){var s=i.length,o=new Array(s),l={},d=s,u=t(a),c=n(i);for(a.forEach(function(m){if(!c.has(m[0])||!c.has(m[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});d--;)l[d]||h(i[d],d,new Set);return o;function h(m,p,x){if(x.has(m)){var v;try{v=", node was:"+JSON.stringify(m)}catch{v=""}throw new Error("Cyclic dependency"+v)}if(!c.has(m))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(m));if(!l[p]){l[p]=!0;var f=u.get(m)||new Set;if(f=Array.from(f),p=f.length){x.add(m);do{var g=f[--p];h(g,c.get(g),x)}while(p);x.delete(m)}o[--s]=m}}}function e(i){for(var a=new Set,s=0,o=i.length;s<o;s++){var l=i[s];a.add(l[0]),a.add(l[1])}return Array.from(a)}function t(i){for(var a=new Map,s=0,o=i.length;s<o;s++){var l=i[s];a.has(l[0])||a.set(l[0],new Set),a.has(l[1])||a.set(l[1],new Set),a.get(l[0]).add(l[1])}return a}function n(i){for(var a=new Map,s=0,o=i.length;s<o;s++)a.set(i[s],s);return a}return ke.exports}var fa=ha();const ma=ca(fa),pa=Object.prototype.toString,ya=Error.prototype.toString,ga=RegExp.prototype.toString,ba=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",va=/^Symbol\((.*)\)(.*)$/;function wa(r){return r!=+r?"NaN":r===0&&1/r<0?"-0":""+r}function Gt(r,e=!1){if(r==null||r===!0||r===!1)return""+r;const t=typeof r;if(t==="number")return wa(r);if(t==="string")return e?`"${r}"`:r;if(t==="function")return"[Function "+(r.name||"anonymous")+"]";if(t==="symbol")return ba.call(r).replace(va,"Symbol($1)");const n=pa.call(r).slice(8,-1);return n==="Date"?isNaN(r.getTime())?""+r:r.toISOString(r):n==="Error"||r instanceof Error?"["+ya.call(r)+"]":n==="RegExp"?ga.call(r):null}function J(r,e){let t=Gt(r,e);return t!==null?t:JSON.stringify(r,function(n,i){let a=Gt(this[n],e);return a!==null?a:i},2)}function Dr(r){return r==null?[]:[].concat(r)}let kr,Pr,Or,xa=/\$\{\s*(\w+)\s*\}/g;kr=Symbol.toStringTag;class Xt{constructor(e,t,n,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[kr]="Error",this.name="ValidationError",this.value=t,this.path=n,this.type=i,this.errors=[],this.inner=[],Dr(e).forEach(a=>{if(C.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Pr=Symbol.hasInstance;Or=Symbol.toStringTag;class C extends Error{static formatError(e,t){const n=t.label||t.path||"this";return t=Object.assign({},t,{path:n,originalPath:t.path}),typeof e=="string"?e.replace(xa,(i,a)=>J(t[a])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,n,i,a){const s=new Xt(e,t,n,i);if(a)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Or]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,C)}static[Pr](e){return Xt[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let j={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:r,type:e,value:t,originalValue:n})=>{const i=n!=null&&n!==t?` (cast from the value \`${J(n,!0)}\`).`:".";return e!=="mixed"?`${r} must be a \`${e}\` type, but the final value was: \`${J(t,!0)}\``+i:`${r} must match the configured type. The validated value was: \`${J(t,!0)}\``+i}},T={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},$a={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},nt={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},_a={isValue:"${path} field must be ${value}"},Fe={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},Ea={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Sa={notType:r=>{const{path:e,value:t,spec:n}=r,i=n.types.length;if(Array.isArray(t)){if(t.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${t.length} for value: \`${J(t,!0)}\``;if(t.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${t.length} for value: \`${J(t,!0)}\``}return C.formatError(j.notType,r)}};Object.assign(Object.create(null),{mixed:j,string:T,number:$a,date:nt,object:Fe,array:Ea,boolean:_a,tuple:Sa});const ft=r=>r&&r.__isYupSchema__;class qe{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:a}=t,s=typeof n=="function"?n:(...o)=>o.every(l=>l===n);return new qe(e,(o,l)=>{var d;let u=s(...o)?i:a;return(d=u?.(l))!=null?d:l})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let n=this.refs.map(a=>a.getValue(t?.value,t?.parent,t?.context)),i=this.fn(n,e,t);if(i===void 0||i===e)return e;if(!ft(i))throw new TypeError("conditions must return a schema object");return i.resolve(t)}}const Pe={context:"$",value:"."};class ae{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Pe.context,this.isValue=this.key[0]===Pe.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Pe.context:this.isValue?Pe.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&ne.getter(this.path,!0),this.map=t.map}getValue(e,t,n){let i=this.isContext?n:this.isValue?e:t;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,t){return this.getValue(e,t?.parent,t?.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}ae.prototype.__isYupRef=!0;const te=r=>r==null;function oe(r){function e({value:t,path:n="",options:i,originalValue:a,schema:s},o,l){const{name:d,test:u,params:c,message:h,skipAbsent:m}=r;let{parent:p,context:x,abortEarly:v=s.spec.abortEarly,disableStackTrace:f=s.spec.disableStackTrace}=i;function g(w){return ae.isRef(w)?w.getValue(t,p,x):w}function _(w={}){const M=Object.assign({value:t,originalValue:a,label:s.spec.label,path:w.path||n,spec:s.spec,disableStackTrace:w.disableStackTrace||f},c,w.params);for(const mt of Object.keys(M))M[mt]=g(M[mt]);const Ae=new C(C.formatError(w.message||h,M),t,M.path,w.type||d,M.disableStackTrace);return Ae.params=M,Ae}const b=v?o:l;let E={path:n,parent:p,type:d,from:i.from,createError:_,resolve:g,options:i,originalValue:a,schema:s};const S=w=>{C.isError(w)?b(w):w?l(null):b(_())},O=w=>{C.isError(w)?b(w):o(w)};if(m&&te(t))return S(!0);let A;try{var k;if(A=u.call(E,t,E),typeof((k=A)==null?void 0:k.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(A).then(S,O)}}catch(w){O(w);return}S(A)}return e.OPTIONS=r,e}function Aa(r,e,t,n=t){let i,a,s;return e?(ne.forEach(e,(o,l,d)=>{let u=l?o.slice(1,o.length-1):o;r=r.resolve({context:n,parent:i,value:t});let c=r.type==="tuple",h=d?parseInt(u,10):0;if(r.innerType||c){if(c&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(t&&h>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);i=t,t=t&&t[h],r=c?r.spec.types[h]:r.innerType}if(!d){if(!r.fields||!r.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${s} which is a type: "${r.type}")`);i=t,t=t&&t[u],r=r.fields[u]}a=u,s=l?"["+o+"]":"."+o}),{schema:r,parent:i,parentPath:a}):{parent:i,parentPath:e,schema:r}}class We extends Set{describe(){const e=[];for(const t of this.values())e.push(ae.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const n of this.values())t.push(e(n));return t}clone(){return new We(this.values())}merge(e,t){const n=this.clone();return e.forEach(i=>n.add(i)),t.forEach(i=>n.delete(i)),n}}function ce(r,e=new Map){if(ft(r)||!r||typeof r!="object")return r;if(e.has(r))return e.get(r);let t;if(r instanceof Date)t=new Date(r.getTime()),e.set(r,t);else if(r instanceof RegExp)t=new RegExp(r),e.set(r,t);else if(Array.isArray(r)){t=new Array(r.length),e.set(r,t);for(let n=0;n<r.length;n++)t[n]=ce(r[n],e)}else if(r instanceof Map){t=new Map,e.set(r,t);for(const[n,i]of r.entries())t.set(n,ce(i,e))}else if(r instanceof Set){t=new Set,e.set(r,t);for(const n of r)t.add(ce(n,e))}else if(r instanceof Object){t={},e.set(r,t);for(const[n,i]of Object.entries(r))t[n]=ce(i,e)}else throw Error(`Unable to clone ${r}`);return t}class U{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new We,this._blacklist=new We,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(j.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e?.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=ce(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=t,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,n=e.clone();const i=Object.assign({},t.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},t.internalTests,n.internalTests),n._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),n._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),n.tests=t.tests,n.exclusiveTests=t.exclusiveTests,n.withMutation(a=>{e.tests.forEach(s=>{a.test(s.OPTIONS)})}),n.transforms=[...t.transforms,...n.transforms],n}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let n=t.conditions;t=t.clone(),t.conditions=[],t=n.reduce((i,a)=>a.resolve(i,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,n,i,a;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(n=e.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(a=e.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(e,t={}){let n=this.resolve(Object.assign({value:e},t)),i=t.assert==="ignore-optionality",a=n._cast(e,t);if(t.assert!==!1&&!n.isType(a)){if(i&&te(a))return a;let s=J(e),o=J(a);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${s} 
`+(o!==s?`result of cast: ${o}`:""))}return a}_cast(e,t){let n=e===void 0?e:this.transforms.reduce((i,a)=>a.call(this,i,e,this),e);return n===void 0&&(n=this.getDefault(t)),n}_validate(e,t={},n,i){let{path:a,originalValue:s=e,strict:o=this.spec.strict}=t,l=e;o||(l=this._cast(l,Object.assign({assert:!1},t)));let d=[];for(let u of Object.values(this.internalTests))u&&d.push(u);this.runTests({path:a,value:l,originalValue:s,options:t,tests:d},n,u=>{if(u.length)return i(u,l);this.runTests({path:a,value:l,originalValue:s,options:t,tests:this.tests},n,i)})}runTests(e,t,n){let i=!1,{tests:a,value:s,originalValue:o,path:l,options:d}=e,u=x=>{i||(i=!0,t(x,s))},c=x=>{i||(i=!0,n(x,s))},h=a.length,m=[];if(!h)return c([]);let p={value:s,originalValue:o,path:l,options:d,schema:this};for(let x=0;x<a.length;x++){const v=a[x];v(p,u,function(g){g&&(Array.isArray(g)?m.push(...g):m.push(g)),--h<=0&&c(m)})}}asNestedTest({key:e,index:t,parent:n,parentPath:i,originalParent:a,options:s}){const o=e??t;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof o=="number";let d=n[o];const u=Object.assign({},s,{strict:!0,parent:n,value:d,originalValue:a[o],key:void 0,[l?"index":"key"]:o,path:l||o.includes(".")?`${i||""}[${l?o:`"${o}"`}]`:(i?`${i}.`:"")+e});return(c,h,m)=>this.resolve(u)._validate(d,u,h,m)}validate(e,t){var n;let i=this.resolve(Object.assign({},t,{value:e})),a=(n=t?.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((s,o)=>i._validate(e,t,(l,d)=>{C.isError(l)&&(l.value=d),o(l)},(l,d)=>{l.length?o(new C(l,d,void 0,void 0,a)):s(d)}))}validateSync(e,t){var n;let i=this.resolve(Object.assign({},t,{value:e})),a,s=(n=t?.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(o,l)=>{throw C.isError(o)&&(o.value=l),o},(o,l)=>{if(o.length)throw new C(o,e,void 0,void 0,s);a=l}),a}isValid(e,t){return this.validate(e,t).then(()=>!0,n=>{if(C.isError(n))return!1;throw n})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(n){if(C.isError(n))return!1;throw n}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):ce(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const n=this.clone({nullable:e});return n.internalTests.nullable=oe({message:t,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(e,t){const n=this.clone({optional:e});return n.internalTests.optionality=oe({message:t,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(e=j.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=j.notNull){return this.nullability(!1,e)}required(e=j.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=j.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=oe(t),a=t.exclusive||t.name&&n.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(n.exclusiveTests[t.name]=!!t.exclusive),n.tests=n.tests.filter(s=>!(s.OPTIONS.name===t.name&&(a||s.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let n=this.clone(),i=Dr(e).map(a=>new ae(a));return i.forEach(a=>{a.isSibling&&n.deps.push(a.key)}),n.conditions.push(typeof t=="function"?new qe(i,t):qe.fromOptions(i,t)),n}typeError(e){let t=this.clone();return t.internalTests.typeError=oe({message:e,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=j.oneOf){let n=this.clone();return e.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=oe({message:t,name:"oneOf",skipAbsent:!0,test(i){let a=this.schema._whitelist,s=a.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:s}})}}),n}notOneOf(e,t=j.notOneOf){let n=this.clone();return e.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=oe({message:t,name:"notOneOf",test(i){let a=this.schema._blacklist,s=a.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(a).join(", "),resolved:s}}):!0}}),n}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:n,meta:i,optional:a,nullable:s}=t.spec;return{meta:i,label:n,optional:a,nullable:s,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,d,u)=>u.findIndex(c=>c.name===l.name)===d)}}}U.prototype.__isYupSchema__=!0;for(const r of["validate","validateSync"])U.prototype[`${r}At`]=function(e,t,n={}){const{parent:i,parentPath:a,schema:s}=Aa(this,e,t,n.context);return s[r](i&&i[a],Object.assign({},n,{parent:i,path:e}))};for(const r of["equals","is"])U.prototype[r]=U.prototype.oneOf;for(const r of["not","nope"])U.prototype[r]=U.prototype.notOneOf;const Da=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ka(r){const e=it(r);if(!e)return Date.parse?Date.parse(r):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function it(r){var e,t;const n=Da.exec(r);return n?{year:q(n[1]),month:q(n[2],1)-1,day:q(n[3],1),hour:q(n[4]),minute:q(n[5]),second:q(n[6]),millisecond:n[7]?q(n[7].substring(0,3)):0,precision:(e=(t=n[7])==null?void 0:t.length)!=null?e:void 0,z:n[8]||void 0,plusMinus:n[9]||void 0,hourOffset:q(n[10]),minuteOffset:q(n[11])}:null}function q(r,e=0){return Number(r)||e}let Pa=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Oa=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Na=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Ta="^\\d{4}-\\d{2}-\\d{2}",Ca="\\d{2}:\\d{2}:\\d{2}",Fa="(([+-]\\d{2}(:?\\d{2})?)|Z)",Ma=new RegExp(`${Ta}T${Ca}(\\.\\d+)?${Fa}$`),Ra=r=>te(r)||r===r.trim(),Ia={}.toString();function Z(){return new Nr}class Nr extends U{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,n)=>{if(!n.spec.coerce||n.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Ia?e:i})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||j.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=T.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(n){return n.length===this.resolve(e)}})}min(e,t=T.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n.length>=this.resolve(e)}})}max(e,t=T.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(n){return n.length<=this.resolve(e)}})}matches(e,t){let n=!1,i,a;return t&&(typeof t=="object"?{excludeEmptyString:n=!1,message:i,name:a}=t:i=t),this.test({name:a||"matches",message:i||T.matches,params:{regex:e},skipAbsent:!0,test:s=>s===""&&n||s.search(e)!==-1})}email(e=T.email){return this.matches(Pa,{name:"email",message:e,excludeEmptyString:!0})}url(e=T.url){return this.matches(Oa,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=T.uuid){return this.matches(Na,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",n,i;return e&&(typeof e=="object"?{message:t="",allowOffset:n=!1,precision:i=void 0}=e:t=e),this.matches(Ma,{name:"datetime",message:t||T.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||T.datetime_offset,params:{allowOffset:n},skipAbsent:!0,test:a=>{if(!a||n)return!0;const s=it(a);return s?!!s.z:!1}}).test({name:"datetime_precision",message:t||T.datetime_precision,params:{precision:i},skipAbsent:!0,test:a=>{if(!a||i==null)return!0;const s=it(a);return s?s.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=T.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Ra})}lowercase(e=T.lowercase){return this.transform(t=>te(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>te(t)||t===t.toLowerCase()})}uppercase(e=T.uppercase){return this.transform(t=>te(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>te(t)||t===t.toUpperCase()})}}Z.prototype=Nr.prototype;let Tr=new Date(""),ja=r=>Object.prototype.toString.call(r)==="[object Date]";function He(){return new Se}class Se extends U{constructor(){super({type:"date",check(e){return ja(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,n)=>!n.spec.coerce||n.isType(e)||e===null?e:(e=ka(e),isNaN(e)?Se.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let n;if(ae.isRef(e))n=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(e,t=nt.min){let n=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(e,t=nt.max){let n=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}Se.INVALID_DATE=Tr;He.prototype=Se.prototype;He.INVALID_DATE=Tr;function La(r,e=[]){let t=[],n=new Set,i=new Set(e.map(([s,o])=>`${s}-${o}`));function a(s,o){let l=ne.split(s)[0];n.add(l),i.has(`${o}-${l}`)||t.push([o,l])}for(const s of Object.keys(r)){let o=r[s];n.add(s),ae.isRef(o)&&o.isSibling?a(o.path,s):ft(o)&&"deps"in o&&o.deps.forEach(l=>a(l,s))}return ma.array(Array.from(n),t).reverse()}function Qt(r,e){let t=1/0;return r.some((n,i)=>{var a;if((a=e.path)!=null&&a.includes(n))return t=i,!0}),t}function Cr(r){return(e,t)=>Qt(r,e)-Qt(r,t)}const Ua=(r,e,t)=>{if(typeof r!="string")return r;let n=r;try{n=JSON.parse(r)}catch{}return t.isType(n)?n:r};function Me(r){if("fields"in r){const e={};for(const[t,n]of Object.entries(r.fields))e[t]=Me(n);return r.setFields(e)}if(r.type==="array"){const e=r.optional();return e.innerType&&(e.innerType=Me(e.innerType)),e}return r.type==="tuple"?r.optional().clone({types:r.spec.types.map(Me)}):"optional"in r?r.optional():r}const qa=(r,e)=>{const t=[...ne.normalizePath(e)];if(t.length===1)return t[0]in r;let n=t.pop(),i=ne.getter(ne.join(t),!0)(r);return!!(i&&n in i)};let Zt=r=>Object.prototype.toString.call(r)==="[object Object]";function Kt(r,e){let t=Object.keys(r.fields);return Object.keys(e).filter(n=>t.indexOf(n)===-1)}const Wa=Cr([]);function Fr(r){return new Mr(r)}class Mr extends U{constructor(e){super({type:"object",check(t){return Zt(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Wa,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var n;let i=super._cast(e,t);if(i===void 0)return this.getDefault(t);if(!this._typeCheck(i))return i;let a=this.fields,s=(n=t.stripUnknown)!=null?n:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},d=Object.assign({},t,{parent:l,__validating:t.__validating||!1}),u=!1;for(const c of o){let h=a[c],m=c in i;if(h){let p,x=i[c];d.path=(t.path?`${t.path}.`:"")+c,h=h.resolve({value:x,context:t.context,parent:l});let v=h instanceof U?h.spec:void 0,f=v?.strict;if(v!=null&&v.strip){u=u||c in i;continue}p=!t.__validating||!f?h.cast(i[c],d):i[c],p!==void 0&&(l[c]=p)}else m&&!s&&(l[c]=i[c]);(m!==c in l||l[c]!==i[c])&&(u=!0)}return u?l:i}_validate(e,t={},n,i){let{from:a=[],originalValue:s=e,recursive:o=this.spec.recursive}=t;t.from=[{schema:this,value:s},...a],t.__validating=!0,t.originalValue=s,super._validate(e,t,n,(l,d)=>{if(!o||!Zt(d)){i(l,d);return}s=s||d;let u=[];for(let c of this._nodes){let h=this.fields[c];!h||ae.isRef(h)||u.push(h.asNestedTest({options:t,key:c,parent:d,parentPath:t.path,originalParent:s}))}this.runTests({tests:u,value:d,originalValue:s,options:t},n,c=>{i(c.sort(this._sortErrors).concat(l),d)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),n=t.fields;for(let[i,a]of Object.entries(this.fields)){const s=n[i];n[i]=s===void 0?a:s}return t.withMutation(i=>i.setFields(n,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{var i;const a=this.fields[n];let s=e;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[n]})),t[n]=a&&"getDefault"in a?a.getDefault(s):void 0}),t}setFields(e,t){let n=this.clone();return n.fields=e,n._nodes=La(e,t),n._sortErrors=Cr(Object.keys(e)),t&&(n._excludedEdges=t),n}shape(e,t=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),i=[...n._excludedEdges,...t]),n.setFields(Object.assign(n.fields,e),i)})}partial(){const e={};for(const[t,n]of Object.entries(this.fields))e[t]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(e)}deepPartial(){return Me(this)}pick(e){const t={};for(const n of e)this.fields[n]&&(t[n]=this.fields[n]);return this.setFields(t,this._excludedEdges.filter(([n,i])=>e.includes(n)&&e.includes(i)))}omit(e){const t=[];for(const n of Object.keys(this.fields))e.includes(n)||t.push(n);return this.pick(t)}from(e,t,n){let i=ne.getter(e,!0);return this.transform(a=>{if(!a)return a;let s=a;return qa(a,e)&&(s=Object.assign({},a),n||delete s[e],s[t]=i(a)),s})}json(){return this.transform(Ua)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||Fe.exact,test(t){if(t==null)return!0;const n=Kt(this.schema,t);return n.length===0||this.createError({params:{properties:n.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=Fe.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:t,test(i){if(i==null)return!0;const a=Kt(this.schema,i);return!e||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,t=Fe.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const n={};for(const i of Object.keys(t))n[e(i)]=t[i];return n})}camelCase(){return this.transformKeys(Ze.camelCase)}snakeCase(){return this.transformKeys(Ze.snakeCase)}constantCase(){return this.transformKeys(e=>Ze.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),n=super.describe(e);n.fields={};for(const[a,s]of Object.entries(t.fields)){var i;let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[a]})),n.fields[a]=s.describe(o)}return n}}Fr.prototype=Mr.prototype;const Ha=Fr({firstName:Z().required("First name is required"),lastName:Z().required("Last name is required"),email:Z().email("Please enter a valid email address").required("Email is required"),phone:Z().required("Phone number is required").matches(/^\+90\d{10}$/,"Phone number must be in format: +905451111111"),birthDate:He().required("Birth date is required"),employmentDate:He().required("Employment date is required"),department:Z().oneOf(["Analytics","Tech"],"Please select a valid department").required("Department is required"),position:Z().oneOf(["Junior","Medior","Senior"],"Please select a valid position").required("Position is required")});function er(r){try{return Ha.validateSync(r,{abortEarly:!1}),{}}catch(e){const t={};return e.inner&&e.inner.forEach(n=>{t[n.path]=n.message}),t}}class za extends F{static properties={isOpen:{type:Boolean},title:{type:String},message:{type:String},confirmed:{type:Boolean}};constructor(){super(),this.isOpen=!1,this.title="Confirm",this.message="Are you sure?",this.confirmed=!1}open(e={},t){this.title=e.title||this.title,this.message=e.message||this.message,this.isOpen=!0,this.confirmed=!1,this.callback=t}close(){this.isOpen=!1}confirm(){this.confirmed=!0,this.callback(!0),this.close()}cancel(){this.confirmed=!1,this.callback(!1),this.close()}render(){return this.isOpen?D`
      <div class="overlay" @click=${this.cancel}>
        <div class="modal">
          <h3>${this.title}</h3>
          <p>${this.message}</p>
          <div class="buttons">
            <button class="btn btn-cancel" @click=${this.cancel}>Cancel</button>
            <button class="btn btn-confirm" @click=${this.confirm}>Confirm</button>
          </div>
        </div>
      </div>
    `:D``}static styles=H`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .modal {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 300px;
      text-align: center;
    }
    
      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .btn-cancel {
       background: #f0f0f0; 
     }
       
    .btn-confirm {
       background: #f39c12; color: white; 
     }
  `}customElements.define("confirm-modal",za);class Va extends F{static properties={employee:{type:Object},isEditing:{type:Boolean},errors:{type:Object}};constructor(){super(),this.employee=null,this.isEditing=!1,this.errors={},this.formData={firstName:"",lastName:"",employmentDate:"",birthDate:"",phone:"",email:"",department:"",position:""}}connectedCallback(){super.connectedCallback(),this.loadEmployeeFromUrl()}loadEmployeeFromUrl(){const t=new URLSearchParams(window.location.search).get("id");if(t){const i=rt().find(a=>a.id===parseInt(t));i&&(this.employee=i,this.isEditing=!0,this.formData={...i,birthDate:De(i.birthDate),employmentDate:De(i.employmentDate)})}}handleInputChange(e){const{name:t,value:n}=e.target;this.formData[t]=n;const i=er(this.formData);this.errors={...this.errors,[t]:i[t]||""},this.requestUpdate()}validateForm(){return this.errors=er(this.formData),Object.keys(this.errors).length===0}handleSubmit(e){if(e.preventDefault(),!this.validateForm())return;const t={...this.formData,birthDate:De(this.formData.birthDate),employmentDate:De(this.formData.employmentDate)};this.isEditing?this.showConfirmModal({title:"Update Employee",message:"Are you sure you want to update this employee?"},n=>{n&&(Xn(this.employee.id,t),ue.go("/employees"))}):(Gn(t),ue.go("/employees"))}showConfirmModal(e,t){const n=this.shadowRoot.querySelector("confirm-modal");n&&n.open(e,t)}handleCancel(){ue.go("/employees")}render(){const e=this.isEditing?"Edit Employee":"Add Employee";return D`
      <div class="form-container">
        <div class="form-header">
          <h2 class="form-title">${e}</h2>
        </div>
        
        <form @submit=${this.handleSubmit}>
          <div class="form-layout">
            <div class="form-row">
              <label class="form-label">${y("firstName")}</label>
              <input 
                type="text" 
                name="firstName" 
                class="form-input ${this.errors.firstName?"error":""}" 
                .value=${this.formData.firstName}
                @input=${this.handleInputChange}
                required
              >
              ${this.errors.firstName?D`<div class="error-message">${this.errors.firstName}</div>`:""}
            </div>
            
            <div class="form-row">
              <label class="form-label">${y("lastName")}</label>
              <input 
                type="text" 
                name="lastName" 
                class="form-input ${this.errors.lastName?"error":""}" 
                .value=${this.formData.lastName}
                @input=${this.handleInputChange}
                required
              >
              ${this.errors.lastName?D`<div class="error-message">${this.errors.lastName}</div>`:""}
            </div>
            
            <div class="form-row">
              <label class="form-label">${y("birthDate")}</label>
              <div class="input-wrapper">
                <input 
                  type="date" 
                  name="birthDate" 
                  class="form-input ${this.errors.birthDate?"error":""}" 
                  .value=${this.formData.birthDate}
                  @input=${this.handleInputChange}
                  required
                >
              </div>
              ${this.errors.birthDate?D`<div class="error-message">${this.errors.birthDate}</div>`:""}
            </div>
            
            <div class="form-row">
              <label class="form-label">${y("phone")}</label>
              <input 
                type="tel" 
                name="phone" 
                class="form-input ${this.errors.phone?"error":""}" 
                .value=${this.formData.phone}
                @input=${this.handleInputChange}
                placeholder="+905451111111"
                required
              >
              ${this.errors.phone?D`<div class="error-message">${this.errors.phone}</div>`:""}
            </div>
            
            <div class="form-row">
              <label class="form-label">${y("department")}</label>
              <select 
                name="department" 
                class="form-select ${this.errors.department?"error":""}" 
                .value=${this.formData.department}
                @change=${this.handleInputChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Analytics">Analytics</option>
                <option value="Tech">Tech</option>
              </select>
              ${this.errors.department?D`<div class="error-message">${this.errors.department}</div>`:""}
            </div>
            
            <div class="form-row">
              <label class="form-label">${y("position")}</label>
              <select 
                name="position" 
                class="form-select ${this.errors.position?"error":""}" 
                .value=${this.formData.position}
                @change=${this.handleInputChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Junior">Junior</option>
                <option value="Medior">Medior</option>
                <option value="Senior">Senior</option>
              </select>
              ${this.errors.position?D`<div class="error-message">${this.errors.position}</div>`:""}
            </div>
          </div>
          
          <div class="form-row full-width">
            <div class="form-layout">
              <div class="form-row">
                <label class="form-label">${y("employmentDate")}</label>
                <div class="input-wrapper">
                  <input 
                    type="date" 
                    name="employmentDate" 
                    class="form-input ${this.errors.employmentDate?"error":""}" 
                    .value=${this.formData.employmentDate}
                    @input=${this.handleInputChange}
                    required
                  >
                </div>
                ${this.errors.employmentDate?D`<div class="error-message">${this.errors.employmentDate}</div>`:""}
              </div>
              
              <div class="form-row">
                <label class="form-label">${y("email")}</label>
                <input 
                  type="email" 
                  name="email" 
                  class="form-input ${this.errors.email?"error":""}" 
                  .value=${this.formData.email}
                  @input=${this.handleInputChange}
                  required
                >
                ${this.errors.email?D`<div class="error-message">${this.errors.email}</div>`:""}
              </div>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click=${this.handleCancel}>
              <iconify-icon icon="mdi:close"></iconify-icon>
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              <iconify-icon icon="mdi:content-save"></iconify-icon>
              ${this.isEditing?"Update":"Save"}
            </button>
          </div>
        </form>
      </div>
      
      <confirm-modal></confirm-modal>
    `}static styles=H`
  :host {
    display: block;
    --primary-color: #f39c12;
  }
  
  iconify-icon {
    color: var(--primary-color);
  }
  
  .form-container {
    background: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }
  
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .form-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin: 0;
  }
  
  .form-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  
  .form-row {
    display: flex;
    flex-direction: column;
    width: 48%;
  }
  
  .form-row.full-width {
    width: 100%;
  }
  
  .form-row.full-width  {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  
  .form-label {
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  .form-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  
  .form-input.error {
    border-color: #e74c3c;
  }
  
  .form-select {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background: white;
    cursor: pointer;
  }
  
  .form-select:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  
  .form-select.error {
    border-color: #e74c3c;
  }
  
  .input-wrapper {
    width: 94%;
    position: relative;
  }
  input {
    width: 94%;
  }

  input[type="date"] {
    width: 100%;
  }

  .error-message {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .form-actions > * {
    margin-left: 15px;
  }
  
  .form-actions > *:first-child {
    margin-left: 0;
  }
  
  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
  }
  
  .btn iconify-icon {
    margin-right: 8px;
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #e67e22;
  }
  
  .btn-secondary {
    background-color: white;
    color: #007bff;
    border: 1px solid #007bff;
  }
  
  .btn-secondary:hover {
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    .form-row {
      width: 100%;
    }
    
    .form-actions {
      flex-direction: column;
    }
  }
`}customElements.define("employee-form",Va);let Ke;function Ba(r){return Ke=new ue(r),Ke.setRoutes([{path:"/",redirect:"/employees"},{path:"/employees",component:"employee-list"},{path:"/employees/add",component:"employee-form"},{path:"/employees/edit",component:"employee-form"}]),Ke}class Ya extends F{static styles=H`
    :host {
      display: block;
      min-height: 100vh;
      --primary-color: #f39c12;
    }
    
    iconify-icon {
      color: var(--primary-color);
    }
    
    .app-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .content {
      margin-top: 20px;
      width: 100%;
      max-width: 1600px;
    }
  `;firstUpdated(){const e=this.shadowRoot.querySelector(".content");Ba(e)}render(){return D`
      <div class="app-container">
        <app-navbar></app-navbar>
        
        <div class="content">
          <!-- Router container -->
        </div>
      </div>
    `}}customElements.define("ing-hub-app",Ya);

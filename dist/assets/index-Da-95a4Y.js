(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function a0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var eg={exports:{}},jl={},tg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),l0=Symbol.for("react.portal"),u0=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),m0=Symbol.for("react.suspense"),g0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),Qd=Symbol.iterator;function v0(n){return n===null||typeof n!="object"?null:(n=Qd&&n[Qd]||n["@@iterator"],typeof n=="function"?n:null)}var ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,rg={};function js(n,e,t){this.props=n,this.context=e,this.refs=rg,this.updater=t||ng}js.prototype.isReactComponent={};js.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};js.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sg(){}sg.prototype=js.prototype;function Uf(n,e,t){this.props=n,this.context=e,this.refs=rg,this.updater=t||ng}var Ff=Uf.prototype=new sg;Ff.constructor=Uf;ig(Ff,js.prototype);Ff.isPureReactComponent=!0;var Jd=Array.isArray,og=Object.prototype.hasOwnProperty,Of={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function lg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)og.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:n,key:s,ref:o,props:r,_owner:Of.current}}function x0(n,e){return{$$typeof:ta,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function kf(n){return typeof n=="object"&&n!==null&&n.$$typeof===ta}function y0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var eh=/\/+/g;function vu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?y0(""+n.key):e.toString(36)}function tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ta:case l0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+vu(o,0):i,Jd(r)?(t="",n!=null&&(t=n.replace(eh,"$&/")+"/"),tl(r,e,t,"",function(u){return u})):r!=null&&(kf(r)&&(r=x0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+vu(s,a);o+=tl(s,e,t,l,r)}else if(l=v0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+vu(s,a++),o+=tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(n,e,t){if(n==null)return n;var i=[],r=0;return tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function S0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var nn={current:null},nl={transition:null},M0={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Of};function ug(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ca,forEach:function(n,e,t){ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ca(n,function(){e++}),e},toArray:function(n){return ca(n,function(e){return e})||[]},only:function(n){if(!kf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=js;Ge.Fragment=u0;Ge.Profiler=f0;Ge.PureComponent=Uf;Ge.StrictMode=c0;Ge.Suspense=m0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;Ge.act=ug;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ig({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)og.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ta,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:h0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:d0,_context:n},n.Consumer=n};Ge.createElement=lg;Ge.createFactory=function(n){var e=lg.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:p0,render:n}};Ge.isValidElement=kf;Ge.lazy=function(n){return{$$typeof:_0,_payload:{_status:-1,_result:n},_init:S0}};Ge.memo=function(n,e){return{$$typeof:g0,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=nl.transition;nl.transition={};try{n()}finally{nl.transition=e}};Ge.unstable_act=ug;Ge.useCallback=function(n,e){return nn.current.useCallback(n,e)};Ge.useContext=function(n){return nn.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return nn.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return nn.current.useEffect(n,e)};Ge.useId=function(){return nn.current.useId()};Ge.useImperativeHandle=function(n,e,t){return nn.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return nn.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return nn.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return nn.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return nn.current.useReducer(n,e,t)};Ge.useRef=function(n){return nn.current.useRef(n)};Ge.useState=function(n){return nn.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return nn.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return nn.current.useTransition()};Ge.version="18.3.1";tg.exports=Ge;var Bf=tg.exports;const zn=a0(Bf);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=Bf,T0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,R0=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C0={key:!0,ref:!0,__self:!0,__source:!0};function cg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)w0.call(e,i)&&!C0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:T0,type:n,key:s,ref:o,props:r,_owner:R0.current}}jl.Fragment=A0;jl.jsx=cg;jl.jsxs=cg;eg.exports=jl;var Tn=eg.exports,Rc={},fg={exports:{}},xn={},dg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,U){var z=N.length;N.push(U);e:for(;0<z;){var Y=z-1>>>1,$=N[Y];if(0<r($,U))N[Y]=U,N[z]=$,z=Y;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],z=N.pop();if(z!==U){N[0]=z;e:for(var Y=0,$=N.length,G=$>>>1;Y<G;){var K=2*(Y+1)-1,ae=N[K],fe=K+1,pe=N[fe];if(0>r(ae,z))fe<$&&0>r(pe,ae)?(N[Y]=pe,N[fe]=z,Y=fe):(N[Y]=ae,N[K]=z,Y=K);else if(fe<$&&0>r(pe,z))N[Y]=pe,N[fe]=z,Y=fe;else break e}}return U}function r(N,U){var z=N.sortIndex-U.sortIndex;return z!==0?z:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var U=t(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=N)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(u)}}function y(N){if(x=!1,v(N),!_)if(t(l)!==null)_=!0,X(C);else{var U=t(u);U!==null&&q(y,U.startTime-N)}}function C(N,U){_=!1,x&&(x=!1,d(D),D=-1),p=!0;var z=h;try{for(v(U),f=t(l);f!==null&&(!(f.expirationTime>U)||N&&!W());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var $=Y(f.expirationTime<=U);U=n.unstable_now(),typeof $=="function"?f.callback=$:f===t(l)&&i(l),v(U)}else i(l);f=t(l)}if(f!==null)var G=!0;else{var K=t(u);K!==null&&q(y,K.startTime-U),G=!1}return G}finally{f=null,h=z,p=!1}}var w=!1,R=null,D=-1,M=5,T=-1;function W(){return!(n.unstable_now()-T<M)}function j(){if(R!==null){var N=n.unstable_now();T=N;var U=!0;try{U=R(!0,N)}finally{U?ne():(w=!1,R=null)}}else w=!1}var ne;if(typeof g=="function")ne=function(){g(j)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,H=P.port2;P.port1.onmessage=j,ne=function(){H.postMessage(null)}}else ne=function(){m(j,0)};function X(N){R=N,w||(w=!0,ne())}function q(N,U){D=m(function(){N(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,X(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var z=h;h=U;try{return N()}finally{h=z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return U()}finally{h=z}},n.unstable_scheduleCallback=function(N,U,z){var Y=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=z+$,N={id:c++,callback:U,priorityLevel:N,startTime:z,expirationTime:$,sortIndex:-1},z>Y?(N.sortIndex=z,e(u,N),t(l)===null&&N===t(u)&&(x?(d(D),D=-1):x=!0,q(y,z-Y))):(N.sortIndex=$,e(l,N),_||p||(_=!0,X(C))),N},n.unstable_shouldYield=W,n.unstable_wrapCallback=function(N){var U=h;return function(){var z=h;h=U;try{return N.apply(this,arguments)}finally{h=z}}}})(hg);dg.exports=hg;var b0=dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=Bf,vn=b0;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,Uo={};function Hr(n,e){Ls(n,e),Ls(n+"Capture",e)}function Ls(n,e){for(Uo[n]=e,n=0;n<e.length;n++)pg.add(e[n])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,P0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function N0(n){return Cc.call(nh,n)?!0:Cc.call(th,n)?!1:P0.test(n)?nh[n]=!0:(th[n]=!0,!1)}function I0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function D0(n,e,t,i){if(e===null||typeof e>"u"||I0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ot[n]=new rn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ot[e]=new rn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ot[n]=new rn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ot[n]=new rn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ot[n]=new rn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ot[n]=new rn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ot[n]=new rn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ot[n]=new rn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ot[n]=new rn(n,5,!1,n.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Hf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(zf,Hf);Ot[e]=new rn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(zf,Hf);Ot[e]=new rn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(zf,Hf);Ot[e]=new rn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ot[n]=new rn(n,1,!1,n.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ot[n]=new rn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vf(n,e,t,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D0(e,t,r,i)&&(t=null),i||r===null?N0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ri=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),ih=Symbol.iterator;function to(n){return n===null||typeof n!="object"?null:(n=ih&&n[ih]||n["@@iterator"],typeof n=="function"?n:null)}var mt=Object.assign,xu;function vo(n){if(xu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xu=e&&e[1]||""}return`
`+xu+n}var yu=!1;function Su(n,e){if(!n||yu)return"";yu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?vo(n):""}function U0(n){switch(n.tag){case 5:return vo(n.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return n=Su(n.type,!1),n;case 11:return n=Su(n.type.render,!1),n;case 1:return n=Su(n.type,!0),n;default:return""}}function Nc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ls:return"Fragment";case as:return"Portal";case bc:return"Profiler";case Gf:return"StrictMode";case Lc:return"Suspense";case Pc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case gg:return(n.displayName||"Context")+".Consumer";case mg:return(n._context.displayName||"Context")+".Provider";case Wf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Xf:return e=n.displayName||null,e!==null?e:Nc(n.type)||"Memo";case Oi:e=n._payload,n=n._init;try{return Nc(n(e))}catch{}}return null}function F0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O0(n){var e=vg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function da(n){n._valueTracker||(n._valueTracker=O0(n))}function xg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ml(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ic(n,e){var t=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function rh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yg(n,e){e=e.checked,e!=null&&Vf(n,"checked",e,!1)}function Dc(n,e){yg(n,e);var t=rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uc(n,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function sh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uc(n,e,t){(e!=="number"||ml(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var xo=Array.isArray;function Ss(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Fc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function oh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(xo(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:rr(t)}}function Sg(n,e){var t=rr(e.value),i=rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ah(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Mg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Mg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ha,Eg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(n){k0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mo[e]=Mo[n]})});function Tg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mo.hasOwnProperty(n)&&Mo[n]?(""+e).trim():e+"px"}function Ag(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Tg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var B0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(n,e){if(e){if(B0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Bc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function jf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hc=null,Ms=null,Es=null;function lh(n){if(n=ra(n)){if(typeof Hc!="function")throw Error(J(280));var e=n.stateNode;e&&(e=Zl(e),Hc(n.stateNode,n.type,e))}}function wg(n){Ms?Es?Es.push(n):Es=[n]:Ms=n}function Rg(){if(Ms){var n=Ms,e=Es;if(Es=Ms=null,lh(n),e)for(n=0;n<e.length;n++)lh(e[n])}}function Cg(n,e){return n(e)}function bg(){}var Mu=!1;function Lg(n,e,t){if(Mu)return n(e,t);Mu=!0;try{return Cg(n,e,t)}finally{Mu=!1,(Ms!==null||Es!==null)&&(bg(),Rg())}}function Oo(n,e){var t=n.stateNode;if(t===null)return null;var i=Zl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var Vc=!1;if(Mi)try{var no={};Object.defineProperty(no,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Vc=!1}function z0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Eo=!1,gl=null,_l=!1,Gc=null,H0={onError:function(n){Eo=!0,gl=n}};function V0(n,e,t,i,r,s,o,a,l){Eo=!1,gl=null,z0.apply(H0,arguments)}function G0(n,e,t,i,r,s,o,a,l){if(V0.apply(this,arguments),Eo){if(Eo){var u=gl;Eo=!1,gl=null}else throw Error(J(198));_l||(_l=!0,Gc=u)}}function Vr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Pg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function uh(n){if(Vr(n)!==n)throw Error(J(188))}function W0(n){var e=n.alternate;if(!e){if(e=Vr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return uh(r),n;if(s===i)return uh(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Ng(n){return n=W0(n),n!==null?Ig(n):null}function Ig(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ig(n);if(e!==null)return e;n=n.sibling}return null}var Dg=vn.unstable_scheduleCallback,ch=vn.unstable_cancelCallback,X0=vn.unstable_shouldYield,j0=vn.unstable_requestPaint,yt=vn.unstable_now,q0=vn.unstable_getCurrentPriorityLevel,qf=vn.unstable_ImmediatePriority,Ug=vn.unstable_UserBlockingPriority,vl=vn.unstable_NormalPriority,Y0=vn.unstable_LowPriority,Fg=vn.unstable_IdlePriority,ql=null,ni=null;function K0(n){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(ql,n,void 0,(n.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Q0,$0=Math.log,Z0=Math.LN2;function Q0(n){return n>>>=0,n===0?32:31-($0(n)/Z0|0)|0}var pa=64,ma=4194304;function yo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=t&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Wn(e),r=1<<t,i|=n[t],e&=~r;return i}function J0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=J0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Wc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Og(){var n=pa;return pa<<=1,!(pa&4194240)&&(pa=64),n}function Eu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function na(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Wn(e),n[e]=t}function tx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Wn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Yf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Wn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ze=0;function kg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Bg,Kf,zg,Hg,Vg,Xc=!1,ga=[],qi=null,Yi=null,Ki=null,ko=new Map,Bo=new Map,zi=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(n,e){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function io(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Kf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ix(n,e,t,i,r){switch(e){case"focusin":return qi=io(qi,n,e,t,i,r),!0;case"dragenter":return Yi=io(Yi,n,e,t,i,r),!0;case"mouseover":return Ki=io(Ki,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,io(ko.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,io(Bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Gg(n){var e=Er(n.target);if(e!==null){var t=Vr(e);if(t!==null){if(e=t.tag,e===13){if(e=Pg(t),e!==null){n.blockedOn=e,Vg(n.priority,function(){zg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=jc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);zc=i,t.target.dispatchEvent(i),zc=null}else return e=ra(t),e!==null&&Kf(e),n.blockedOn=t,!1;e.shift()}return!0}function dh(n,e,t){il(n)&&t.delete(e)}function rx(){Xc=!1,qi!==null&&il(qi)&&(qi=null),Yi!==null&&il(Yi)&&(Yi=null),Ki!==null&&il(Ki)&&(Ki=null),ko.forEach(dh),Bo.forEach(dh)}function ro(n,e){n.blockedOn===e&&(n.blockedOn=null,Xc||(Xc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,rx)))}function zo(n){function e(r){return ro(r,n)}if(0<ga.length){ro(ga[0],n);for(var t=1;t<ga.length;t++){var i=ga[t];i.blockedOn===n&&(i.blockedOn=null)}}for(qi!==null&&ro(qi,n),Yi!==null&&ro(Yi,n),Ki!==null&&ro(Ki,n),ko.forEach(e),Bo.forEach(e),t=0;t<zi.length;t++)i=zi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<zi.length&&(t=zi[0],t.blockedOn===null);)Gg(t),t.blockedOn===null&&zi.shift()}var Ts=Ri.ReactCurrentBatchConfig,yl=!0;function sx(n,e,t,i){var r=Ze,s=Ts.transition;Ts.transition=null;try{Ze=1,$f(n,e,t,i)}finally{Ze=r,Ts.transition=s}}function ox(n,e,t,i){var r=Ze,s=Ts.transition;Ts.transition=null;try{Ze=4,$f(n,e,t,i)}finally{Ze=r,Ts.transition=s}}function $f(n,e,t,i){if(yl){var r=jc(n,e,t,i);if(r===null)Iu(n,e,i,Sl,t),fh(n,i);else if(ix(r,n,e,t,i))i.stopPropagation();else if(fh(n,i),e&4&&-1<nx.indexOf(n)){for(;r!==null;){var s=ra(r);if(s!==null&&Bg(s),s=jc(n,e,t,i),s===null&&Iu(n,e,i,Sl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Iu(n,e,i,null,t)}}var Sl=null;function jc(n,e,t,i){if(Sl=null,n=jf(i),n=Er(n),n!==null)if(e=Vr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Pg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Sl=n,null}function Wg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case qf:return 1;case Ug:return 4;case vl:case Y0:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Vi=null,Zf=null,rl=null;function Xg(){if(rl)return rl;var n,e=Zf,t=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rl=r.slice(n,1<i?1-i:void 0)}function sl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _a(){return!0}function hh(){return!1}function yn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:hh,this.isPropagationStopped=hh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qf=yn(qs),ia=mt({},qs,{view:0,detail:0}),ax=yn(ia),Tu,Au,so,Yl=mt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==so&&(so&&n.type==="mousemove"?(Tu=n.screenX-so.screenX,Au=n.screenY-so.screenY):Au=Tu=0,so=n),Tu)},movementY:function(n){return"movementY"in n?n.movementY:Au}}),ph=yn(Yl),lx=mt({},Yl,{dataTransfer:0}),ux=yn(lx),cx=mt({},ia,{relatedTarget:0}),wu=yn(cx),fx=mt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=yn(fx),hx=mt({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),px=yn(hx),mx=mt({},qs,{data:0}),mh=yn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=vx[n])?!!e[n]:!1}function Jf(){return xx}var yx=mt({},ia,{key:function(n){if(n.key){var e=gx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jf,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sx=yn(yx),Mx=mt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=yn(Mx),Ex=mt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jf}),Tx=yn(Ex),Ax=mt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=yn(Ax),Rx=mt({},Yl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=yn(Rx),bx=[9,13,27,32],ed=Mi&&"CompositionEvent"in window,To=null;Mi&&"documentMode"in document&&(To=document.documentMode);var Lx=Mi&&"TextEvent"in window&&!To,jg=Mi&&(!ed||To&&8<To&&11>=To),_h=" ",vh=!1;function qg(n,e){switch(n){case"keyup":return bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function Px(n,e){switch(n){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(vh=!0,_h);case"textInput":return n=e.data,n===_h&&vh?null:n;default:return null}}function Nx(n,e){if(us)return n==="compositionend"||!ed&&qg(n,e)?(n=Xg(),rl=Zf=Vi=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jg&&e.locale!=="ko"?null:e.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ix[n.type]:e==="textarea"}function Kg(n,e,t,i){wg(i),e=Ml(e,"onChange"),0<e.length&&(t=new Qf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ao=null,Ho=null;function Dx(n){o_(n,0)}function Kl(n){var e=ds(n);if(xg(e))return n}function Ux(n,e){if(n==="change")return e}var $g=!1;if(Mi){var Ru;if(Mi){var Cu="oninput"in document;if(!Cu){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),Cu=typeof yh.oninput=="function"}Ru=Cu}else Ru=!1;$g=Ru&&(!document.documentMode||9<document.documentMode)}function Sh(){Ao&&(Ao.detachEvent("onpropertychange",Zg),Ho=Ao=null)}function Zg(n){if(n.propertyName==="value"&&Kl(Ho)){var e=[];Kg(e,Ho,n,jf(n)),Lg(Dx,e)}}function Fx(n,e,t){n==="focusin"?(Sh(),Ao=e,Ho=t,Ao.attachEvent("onpropertychange",Zg)):n==="focusout"&&Sh()}function Ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(Ho)}function kx(n,e){if(n==="click")return Kl(e)}function Bx(n,e){if(n==="input"||n==="change")return Kl(e)}function zx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var qn=typeof Object.is=="function"?Object.is:zx;function Vo(n,e){if(qn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Cc.call(e,r)||!qn(n[r],e[r]))return!1}return!0}function Mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eh(n,e){var t=Mh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mh(t)}}function Qg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var n=window,e=ml();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ml(n.document)}return e}function td(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Hx(n){var e=Jg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qg(t.ownerDocument.documentElement,t)){if(i!==null&&td(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Eh(t,s);var o=Eh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vx=Mi&&"documentMode"in document&&11>=document.documentMode,cs=null,qc=null,wo=null,Yc=!1;function Th(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yc||cs==null||cs!==ml(i)||(i=cs,"selectionStart"in i&&td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Vo(wo,i)||(wo=i,i=Ml(qc,"onSelect"),0<i.length&&(e=new Qf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=cs)))}function va(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},bu={},e_={};Mi&&(e_=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function $l(n){if(bu[n])return bu[n];if(!fs[n])return n;var e=fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in e_)return bu[n]=e[t];return n}var t_=$l("animationend"),n_=$l("animationiteration"),i_=$l("animationstart"),r_=$l("transitionend"),s_=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,e){s_.set(n,e),Hr(e,[n])}for(var Lu=0;Lu<Ah.length;Lu++){var Pu=Ah[Lu],Gx=Pu.toLowerCase(),Wx=Pu[0].toUpperCase()+Pu.slice(1);or(Gx,"on"+Wx)}or(t_,"onAnimationEnd");or(n_,"onAnimationIteration");or(i_,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(r_,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function wh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,G0(i,e,void 0,n),n.currentTarget=null}function o_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wh(r,a,u),s=l}}}if(_l)throw n=Gc,_l=!1,Gc=null,n}function st(n,e){var t=e[Jc];t===void 0&&(t=e[Jc]=new Set);var i=n+"__bubble";t.has(i)||(a_(e,n,2,!1),t.add(i))}function Nu(n,e,t){var i=0;e&&(i|=4),a_(t,n,i,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[xa]){n[xa]=!0,pg.forEach(function(t){t!=="selectionchange"&&(Xx.has(t)||Nu(t,!1,n),Nu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[xa]||(e[xa]=!0,Nu("selectionchange",!1,e))}}function a_(n,e,t,i){switch(Wg(e)){case 1:var r=sx;break;case 4:r=ox;break;default:r=$f}t=r.bind(null,e,t,n),r=void 0,!Vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Iu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lg(function(){var u=s,c=jf(t),f=[];e:{var h=s_.get(n);if(h!==void 0){var p=Qf,_=n;switch(n){case"keypress":if(sl(t)===0)break e;case"keydown":case"keyup":p=Sx;break;case"focusin":_="focus",p=wu;break;case"focusout":_="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tx;break;case t_:case n_:case i_:p=dx;break;case r_:p=wx;break;case"scroll":p=ax;break;case"wheel":p=Cx;break;case"copy":case"cut":case"paste":p=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gh}var x=(e&4)!==0,m=!x&&n==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Oo(g,d),y!=null&&x.push(Wo(g,y,v)))),m)break;g=g.return}0<x.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==zc&&(_=t.relatedTarget||t.fromElement)&&(Er(_)||_[Ei]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Er(_):null,_!==null&&(m=Vr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=ph,y="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(x=gh,y="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:ds(p),v=_==null?h:ds(_),h=new x(y,g+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,Er(c)===u&&(x=new x(d,g+"enter",_,t,c),x.target=v,x.relatedTarget=m,y=x),m=y,p&&_)t:{for(x=p,d=_,g=0,v=x;v;v=Gr(v))g++;for(v=0,y=d;y;y=Gr(y))v++;for(;0<g-v;)x=Gr(x),g--;for(;0<v-g;)d=Gr(d),v--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Gr(x),d=Gr(d)}x=null}else x=null;p!==null&&Rh(f,h,p,x,!1),_!==null&&m!==null&&Rh(f,m,_,x,!0)}}e:{if(h=u?ds(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Ux;else if(xh(h))if($g)C=Bx;else{C=Ox;var w=Fx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=kx);if(C&&(C=C(n,u))){Kg(f,C,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Uc(h,"number",h.value)}switch(w=u?ds(u):window,n){case"focusin":(xh(w)||w.contentEditable==="true")&&(cs=w,qc=u,wo=null);break;case"focusout":wo=qc=cs=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Th(f,t,c);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Th(f,t,c)}var R;if(ed)e:{switch(n){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else us?qg(n,t)&&(D="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(jg&&t.locale!=="ko"&&(us||D!=="onCompositionStart"?D==="onCompositionEnd"&&us&&(R=Xg()):(Vi=c,Zf="value"in Vi?Vi.value:Vi.textContent,us=!0)),w=Ml(u,D),0<w.length&&(D=new mh(D,n,null,t,c),f.push({event:D,listeners:w}),R?D.data=R:(R=Yg(t),R!==null&&(D.data=R)))),(R=Lx?Px(n,t):Nx(n,t))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(c=new mh("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=R))}o_(f,e)})}function Wo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ml(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(n,t),s!=null&&i.unshift(Wo(n,s,r)),s=Oo(n,e),s!=null&&i.push(Wo(n,s,r))),n=n.return}return i}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oo(t,s),l!=null&&o.unshift(Wo(t,l,a))):r||(l=Oo(t,s),l!=null&&o.push(Wo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var jx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(jx,`
`).replace(qx,"")}function ya(n,e,t){if(e=Ch(e),Ch(n)!==e&&t)throw Error(J(425))}function El(){}var Kc=null,$c=null;function Zc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(n){return bh.resolve(null).then(n).catch($x)}:Qc;function $x(n){setTimeout(function(){throw n})}function Du(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zo(e)}function $i(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Lh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ys,Xo="__reactProps$"+Ys,Ei="__reactContainer$"+Ys,Jc="__reactEvents$"+Ys,Zx="__reactListeners$"+Ys,Qx="__reactHandles$"+Ys;function Er(n){var e=n[Jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ei]||t[Jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Lh(n);n!==null;){if(t=n[Jn])return t;n=Lh(n)}return e}n=t,t=n.parentNode}return null}function ra(n){return n=n[Jn]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function Zl(n){return n[Xo]||null}var ef=[],hs=-1;function ar(n){return{current:n}}function at(n){0>hs||(n.current=ef[hs],ef[hs]=null,hs--)}function rt(n,e){hs++,ef[hs]=n.current,n.current=e}var sr={},Xt=ar(sr),ln=ar(!1),Nr=sr;function Ps(n,e){var t=n.type.contextTypes;if(!t)return sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function Tl(){at(ln),at(Xt)}function Ph(n,e,t){if(Xt.current!==sr)throw Error(J(168));rt(Xt,e),rt(ln,t)}function l_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,F0(n)||"Unknown",r));return mt({},t,i)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Nr=Xt.current,rt(Xt,n),rt(ln,ln.current),!0}function Nh(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=l_(n,e,Nr),i.__reactInternalMemoizedMergedChildContext=n,at(ln),at(Xt),rt(Xt,n)):at(ln),rt(ln,t)}var gi=null,Ql=!1,Uu=!1;function u_(n){gi===null?gi=[n]:gi.push(n)}function Jx(n){Ql=!0,u_(n)}function lr(){if(!Uu&&gi!==null){Uu=!0;var n=0,e=Ze;try{var t=gi;for(Ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}gi=null,Ql=!1}catch(r){throw gi!==null&&(gi=gi.slice(n+1)),Dg(qf,lr),r}finally{Ze=e,Uu=!1}}return null}var ps=[],ms=0,wl=null,Rl=0,An=[],wn=0,Ir=null,_i=1,vi="";function _r(n,e){ps[ms++]=Rl,ps[ms++]=wl,wl=n,Rl=e}function c_(n,e,t){An[wn++]=_i,An[wn++]=vi,An[wn++]=Ir,Ir=n;var i=_i;n=vi;var r=32-Wn(i)-1;i&=~(1<<r),t+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Wn(e)+r|t<<r|i,vi=s+n}else _i=1<<s|t<<r|i,vi=n}function nd(n){n.return!==null&&(_r(n,1),c_(n,1,0))}function id(n){for(;n===wl;)wl=ps[--ms],ps[ms]=null,Rl=ps[--ms],ps[ms]=null;for(;n===Ir;)Ir=An[--wn],An[wn]=null,vi=An[--wn],An[wn]=null,_i=An[--wn],An[wn]=null}var _n=null,mn=null,lt=!1,Vn=null;function f_(n,e){var t=Ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ih(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,_n=n,mn=$i(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,_n=n,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ir!==null?{id:_i,overflow:vi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,_n=n,mn=null,!0):!1;default:return!1}}function tf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nf(n){if(lt){var e=mn;if(e){var t=e;if(!Ih(n,e)){if(tf(n))throw Error(J(418));e=$i(t.nextSibling);var i=_n;e&&Ih(n,e)?f_(i,t):(n.flags=n.flags&-4097|2,lt=!1,_n=n)}}else{if(tf(n))throw Error(J(418));n.flags=n.flags&-4097|2,lt=!1,_n=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function Sa(n){if(n!==_n)return!1;if(!lt)return Dh(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zc(n.type,n.memoizedProps)),e&&(e=mn)){if(tf(n))throw d_(),Error(J(418));for(;e;)f_(n,e),e=$i(e.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){mn=$i(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}mn=null}}else mn=_n?$i(n.stateNode.nextSibling):null;return!0}function d_(){for(var n=mn;n;)n=$i(n.nextSibling)}function Ns(){mn=_n=null,lt=!1}function rd(n){Vn===null?Vn=[n]:Vn.push(n)}var ey=Ri.ReactCurrentBatchConfig;function oo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function Ma(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Uh(n){var e=n._init;return e(n._payload)}function h_(n){function e(d,g){if(n){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=er(d,g),d.index=0,d.sibling=null,d}function s(d,g,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,v,y){return g===null||g.tag!==6?(g=Vu(v,d.mode,y),g.return=d,g):(g=r(g,v),g.return=d,g)}function l(d,g,v,y){var C=v.type;return C===ls?c(d,g,v.props.children,y,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Oi&&Uh(C)===g.type)?(y=r(g,v.props),y.ref=oo(d,g,v),y.return=d,y):(y=dl(v.type,v.key,v.props,null,d.mode,y),y.ref=oo(d,g,v),y.return=d,y)}function u(d,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Gu(v,d.mode,y),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function c(d,g,v,y,C){return g===null||g.tag!==7?(g=Cr(v,d.mode,y,C),g.return=d,g):(g=r(g,v),g.return=d,g)}function f(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vu(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:return v=dl(g.type,g.key,g.props,null,d.mode,v),v.ref=oo(d,null,g),v.return=d,v;case as:return g=Gu(g,d.mode,v),g.return=d,g;case Oi:var y=g._init;return f(d,y(g._payload),v)}if(xo(g)||to(g))return g=Cr(g,d.mode,v,null),g.return=d,g;Ma(d,g)}return null}function h(d,g,v,y){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return v.key===C?l(d,g,v,y):null;case as:return v.key===C?u(d,g,v,y):null;case Oi:return C=v._init,h(d,g,C(v._payload),y)}if(xo(v)||to(v))return C!==null?null:c(d,g,v,y,null);Ma(d,v)}return null}function p(d,g,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(g,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fa:return d=d.get(y.key===null?v:y.key)||null,l(g,d,y,C);case as:return d=d.get(y.key===null?v:y.key)||null,u(g,d,y,C);case Oi:var w=y._init;return p(d,g,v,w(y._payload),C)}if(xo(y)||to(y))return d=d.get(v)||null,c(g,d,y,C,null);Ma(g,y)}return null}function _(d,g,v,y){for(var C=null,w=null,R=g,D=g=0,M=null;R!==null&&D<v.length;D++){R.index>D?(M=R,R=null):M=R.sibling;var T=h(d,R,v[D],y);if(T===null){R===null&&(R=M);break}n&&R&&T.alternate===null&&e(d,R),g=s(T,g,D),w===null?C=T:w.sibling=T,w=T,R=M}if(D===v.length)return t(d,R),lt&&_r(d,D),C;if(R===null){for(;D<v.length;D++)R=f(d,v[D],y),R!==null&&(g=s(R,g,D),w===null?C=R:w.sibling=R,w=R);return lt&&_r(d,D),C}for(R=i(d,R);D<v.length;D++)M=p(R,d,D,v[D],y),M!==null&&(n&&M.alternate!==null&&R.delete(M.key===null?D:M.key),g=s(M,g,D),w===null?C=M:w.sibling=M,w=M);return n&&R.forEach(function(W){return e(d,W)}),lt&&_r(d,D),C}function x(d,g,v,y){var C=to(v);if(typeof C!="function")throw Error(J(150));if(v=C.call(v),v==null)throw Error(J(151));for(var w=C=null,R=g,D=g=0,M=null,T=v.next();R!==null&&!T.done;D++,T=v.next()){R.index>D?(M=R,R=null):M=R.sibling;var W=h(d,R,T.value,y);if(W===null){R===null&&(R=M);break}n&&R&&W.alternate===null&&e(d,R),g=s(W,g,D),w===null?C=W:w.sibling=W,w=W,R=M}if(T.done)return t(d,R),lt&&_r(d,D),C;if(R===null){for(;!T.done;D++,T=v.next())T=f(d,T.value,y),T!==null&&(g=s(T,g,D),w===null?C=T:w.sibling=T,w=T);return lt&&_r(d,D),C}for(R=i(d,R);!T.done;D++,T=v.next())T=p(R,d,D,T.value,y),T!==null&&(n&&T.alternate!==null&&R.delete(T.key===null?D:T.key),g=s(T,g,D),w===null?C=T:w.sibling=T,w=T);return n&&R.forEach(function(j){return e(d,j)}),lt&&_r(d,D),C}function m(d,g,v,y){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:e:{for(var C=v.key,w=g;w!==null;){if(w.key===C){if(C=v.type,C===ls){if(w.tag===7){t(d,w.sibling),g=r(w,v.props.children),g.return=d,d=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Oi&&Uh(C)===w.type){t(d,w.sibling),g=r(w,v.props),g.ref=oo(d,w,v),g.return=d,d=g;break e}t(d,w);break}else e(d,w);w=w.sibling}v.type===ls?(g=Cr(v.props.children,d.mode,y,v.key),g.return=d,d=g):(y=dl(v.type,v.key,v.props,null,d.mode,y),y.ref=oo(d,g,v),y.return=d,d=y)}return o(d);case as:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=Gu(v,d.mode,y),g.return=d,d=g}return o(d);case Oi:return w=v._init,m(d,g,w(v._payload),y)}if(xo(v))return _(d,g,v,y);if(to(v))return x(d,g,v,y);Ma(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,v),g.return=d,d=g):(t(d,g),g=Vu(v,d.mode,y),g.return=d,d=g),o(d)):t(d,g)}return m}var Is=h_(!0),p_=h_(!1),Cl=ar(null),bl=null,gs=null,sd=null;function od(){sd=gs=bl=null}function ad(n){var e=Cl.current;at(Cl),n._currentValue=e}function rf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function As(n,e){bl=n,sd=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(an=!0),n.firstContext=null)}function In(n){var e=n._currentValue;if(sd!==n)if(n={context:n,memoizedValue:e,next:null},gs===null){if(bl===null)throw Error(J(308));gs=n,bl.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return e}var Tr=null;function ld(n){Tr===null?Tr=[n]:Tr.push(n)}function m_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ld(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ti(n,i)}function Ti(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ki=!1;function ud(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Si(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(n,t)}return r=i.interleaved,r===null?(e.next=e,ld(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(n,t)}function ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Yf(n,t)}}function Fh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ll(n,e,t,i){var r=n.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,x=a;switch(h=e,p=t,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=mt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,n.lanes=o,n.memoizedState=f}}function Oh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var sa={},ii=ar(sa),jo=ar(sa),qo=ar(sa);function Ar(n){if(n===sa)throw Error(J(174));return n}function cd(n,e){switch(rt(qo,e),rt(jo,n),rt(ii,sa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Oc(e,n)}at(ii),rt(ii,e)}function Ds(){at(ii),at(jo),at(qo)}function __(n){Ar(qo.current);var e=Ar(ii.current),t=Oc(e,n.type);e!==t&&(rt(jo,n),rt(ii,t))}function fd(n){jo.current===n&&(at(ii),at(jo))}var dt=ar(0);function Pl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function dd(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var al=Ri.ReactCurrentDispatcher,Ou=Ri.ReactCurrentBatchConfig,Dr=0,pt=null,Et=null,Lt=null,Nl=!1,Ro=!1,Yo=0,ty=0;function Bt(){throw Error(J(321))}function hd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!qn(n[t],e[t]))return!1;return!0}function pd(n,e,t,i,r,s){if(Dr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=n===null||n.memoizedState===null?sy:oy,n=t(i,r),Ro){s=0;do{if(Ro=!1,Yo=0,25<=s)throw Error(J(301));s+=1,Lt=Et=null,e.updateQueue=null,al.current=ay,n=t(i,r)}while(Ro)}if(al.current=Il,e=Et!==null&&Et.next!==null,Dr=0,Lt=Et=pt=null,Nl=!1,e)throw Error(J(300));return n}function md(){var n=Yo!==0;return Yo=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?pt.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function Dn(){if(Et===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=Et.next;var e=Lt===null?pt.memoizedState:Lt.next;if(e!==null)Lt=e,Et=n;else{if(n===null)throw Error(J(310));Et=n,n={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Lt===null?pt.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function Ko(n,e){return typeof e=="function"?e(n):e}function ku(n){var e=Dn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=Et,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=c,Ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,pt.lanes|=s,Ur|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Bu(n){var e=Dn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function v_(){}function x_(n,e){var t=pt,i=Dn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,gd(M_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(t.flags|=2048,$o(9,S_.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(J(349));Dr&30||y_(t,e,r)}return r}function y_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function S_(n,e,t,i){e.value=t,e.getSnapshot=i,E_(e)&&T_(n)}function M_(n,e,t){return t(function(){E_(e)&&T_(n)})}function E_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!qn(n,t)}catch{return!0}}function T_(n){var e=Ti(n,1);e!==null&&Xn(e,n,1,-1)}function kh(n){var e=Zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},e.queue=n,n=n.dispatch=ry.bind(null,pt,n),[e.memoizedState,n]}function $o(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function A_(){return Dn().memoizedState}function ll(n,e,t,i){var r=Zn();pt.flags|=n,r.memoizedState=$o(1|e,t,void 0,i===void 0?null:i)}function Jl(n,e,t,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&hd(i,o.deps)){r.memoizedState=$o(e,t,s,i);return}}pt.flags|=n,r.memoizedState=$o(1|e,t,s,i)}function Bh(n,e){return ll(8390656,8,n,e)}function gd(n,e){return Jl(2048,8,n,e)}function w_(n,e){return Jl(4,2,n,e)}function R_(n,e){return Jl(4,4,n,e)}function C_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function b_(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4,4,C_.bind(null,e,n),t)}function _d(){}function L_(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function P_(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function N_(n,e,t){return Dr&21?(qn(t,e)||(t=Og(),pt.lanes|=t,Ur|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,an=!0),n.memoizedState=t)}function ny(n,e){var t=Ze;Ze=t!==0&&4>t?t:4,n(!0);var i=Ou.transition;Ou.transition={};try{n(!1),e()}finally{Ze=t,Ou.transition=i}}function I_(){return Dn().memoizedState}function iy(n,e,t){var i=Ji(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},D_(n))U_(e,t);else if(t=m_(n,e,t,i),t!==null){var r=Jt();Xn(t,n,i,r),F_(t,e,i)}}function ry(n,e,t){var i=Ji(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(D_(n))U_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,ld(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=m_(n,e,r,i),t!==null&&(r=Jt(),Xn(t,n,i,r),F_(t,e,i))}}function D_(n){var e=n.alternate;return n===pt||e!==null&&e===pt}function U_(n,e){Ro=Nl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function F_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Yf(n,t)}}var Il={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},sy={readContext:In,useCallback:function(n,e){return Zn().memoizedState=[n,e===void 0?null:e],n},useContext:In,useEffect:Bh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ll(4194308,4,C_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ll(4194308,4,n,e)},useInsertionEffect:function(n,e){return ll(4,2,n,e)},useMemo:function(n,e){var t=Zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=iy.bind(null,pt,n),[i.memoizedState,n]},useRef:function(n){var e=Zn();return n={current:n},e.memoizedState=n},useState:kh,useDebugValue:_d,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=kh(!1),e=n[0];return n=ny.bind(null,n[1]),Zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=pt,r=Zn();if(lt){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),Nt===null)throw Error(J(349));Dr&30||y_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Bh(M_.bind(null,i,s,n),[n]),i.flags|=2048,$o(9,S_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Zn(),e=Nt.identifierPrefix;if(lt){var t=vi,i=_i;t=(i&~(1<<32-Wn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Yo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ty++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},oy={readContext:In,useCallback:L_,useContext:In,useEffect:gd,useImperativeHandle:b_,useInsertionEffect:w_,useLayoutEffect:R_,useMemo:P_,useReducer:ku,useRef:A_,useState:function(){return ku(Ko)},useDebugValue:_d,useDeferredValue:function(n){var e=Dn();return N_(e,Et.memoizedState,n)},useTransition:function(){var n=ku(Ko)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:v_,useSyncExternalStore:x_,useId:I_,unstable_isNewReconciler:!1},ay={readContext:In,useCallback:L_,useContext:In,useEffect:gd,useImperativeHandle:b_,useInsertionEffect:w_,useLayoutEffect:R_,useMemo:P_,useReducer:Bu,useRef:A_,useState:function(){return Bu(Ko)},useDebugValue:_d,useDeferredValue:function(n){var e=Dn();return Et===null?e.memoizedState=n:N_(e,Et.memoizedState,n)},useTransition:function(){var n=Bu(Ko)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:v_,useSyncExternalStore:x_,useId:I_,unstable_isNewReconciler:!1};function Bn(n,e){if(n&&n.defaultProps){e=mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function sf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var eu={isMounted:function(n){return(n=n._reactInternals)?Vr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=Ji(n),s=Si(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Xn(e,n,r,i),ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=Ji(n),s=Si(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Xn(e,n,r,i),ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Jt(),i=Ji(n),r=Si(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(n,r,i),e!==null&&(Xn(e,n,i,t),ol(e,n,i))}};function zh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(t,i)||!Vo(r,s):!0}function O_(n,e,t){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=un(e)?Nr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ps(n,r):sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Hh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&eu.enqueueReplaceState(e,e.state,null)}function of(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ud(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=un(e)?Nr:Xt.current,r.context=Ps(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&eu.enqueueReplaceState(r,r.state,null),Ll(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,e){try{var t="",i=e;do t+=U0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function zu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function af(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function k_(n,e,t){t=Si(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ul||(Ul=!0,_f=i),af(n,e)},t}function B_(n,e,t){t=Si(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){af(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){af(n,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Vh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ly;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=My.bind(null,n,e,t),e.then(n,n))}function Gh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Si(-1,1),e.tag=2,Zi(t,e,1))),t.lanes|=1),n)}var uy=Ri.ReactCurrentOwner,an=!1;function Zt(n,e,t,i){e.child=n===null?p_(e,null,t,i):Is(e,n.child,t,i)}function Xh(n,e,t,i,r){t=t.render;var s=e.ref;return As(e,r),i=pd(n,e,t,i,s,r),t=md(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(lt&&t&&nd(e),e.flags|=1,Zt(n,e,i,r),e.child)}function jh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ad(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,z_(n,e,s,i,r)):(n=dl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(o,i)&&n.ref===e.ref)return Ai(n,e,r)}return e.flags|=1,n=er(s,i),n.ref=e.ref,n.return=e,e.child=n}function z_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Vo(s,i)&&n.ref===e.ref)if(an=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(an=!0);else return e.lanes=n.lanes,Ai(n,e,r)}return lf(n,e,t,i,r)}function H_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(vs,pn),pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(vs,pn),pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(vs,pn),pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(vs,pn),pn|=i;return Zt(n,e,r,t),e.child}function V_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lf(n,e,t,i,r){var s=un(t)?Nr:Xt.current;return s=Ps(e,s),As(e,r),t=pd(n,e,t,i,s,r),i=md(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(lt&&i&&nd(e),e.flags|=1,Zt(n,e,t,r),e.child)}function qh(n,e,t,i,r){if(un(t)){var s=!0;Al(e)}else s=!1;if(As(e,r),e.stateNode===null)ul(n,e),O_(e,t,i),of(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=In(u):(u=un(t)?Nr:Xt.current,u=Ps(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hh(e,o,i,u),ki=!1;var h=e.memoizedState;o.state=h,Ll(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||ki?(typeof c=="function"&&(sf(e,t,c,i),l=e.memoizedState),(a=ki||zh(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,g_(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=In(l):(l=un(t)?Nr:Xt.current,l=Ps(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Hh(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,Ll(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||ln.current||ki?(typeof p=="function"&&(sf(e,t,p,i),_=e.memoizedState),(u=ki||zh(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return uf(n,e,t,i,s,r)}function uf(n,e,t,i,r,s){V_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Nh(e,t,!1),Ai(n,e,s);i=e.stateNode,uy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Is(e,n.child,null,s),e.child=Is(e,null,a,s)):Zt(n,e,a,s),e.memoizedState=i.state,r&&Nh(e,t,!0),e.child}function G_(n){var e=n.stateNode;e.pendingContext?Ph(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(n,e.context,!1),cd(n,e.containerInfo)}function Yh(n,e,t,i,r){return Ns(),rd(r),e.flags|=256,Zt(n,e,t,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function ff(n){return{baseLanes:n,cachePool:null,transitions:null}}function W_(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(dt,r&1),n===null)return nf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,i,0,null),n=Cr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ff(t),e.memoizedState=cf,n):vd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cy(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Cr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ff(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=cf,i}return s=n.child,n=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function vd(n,e){return e=iu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ea(n,e,t,i){return i!==null&&rd(i),Is(e,n.child,null,t),n=vd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function cy(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=zu(Error(J(422))),Ea(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=iu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,n.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=cf,s);if(!(e.mode&1))return Ea(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=zu(s,i,void 0),Ea(n,e,o,i)}if(a=(o&n.childLanes)!==0,an||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(n,r),Xn(i,n,r,-1))}return Td(),i=zu(Error(J(421))),Ea(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ey.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,mn=$i(r.nextSibling),_n=e,lt=!0,Vn=null,n!==null&&(An[wn++]=_i,An[wn++]=vi,An[wn++]=Ir,_i=n.id,vi=n.overflow,Ir=e),e=vd(e,i.children),e.flags|=4096,e)}function Kh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),rf(n.return,e,t)}function Hu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function X_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kh(n,t,e);else if(n.tag===19)Kh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hu(e,!0,t,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ur|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function fy(n,e,t){switch(e.tag){case 3:G_(e),Ns();break;case 5:__(e);break;case 1:un(e.type)&&Al(e);break;case 4:cd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?W_(n,e,t):(rt(dt,dt.current&1),n=Ai(n,e,t),n!==null?n.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return X_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(n,e,t)}return Ai(n,e,t)}var j_,df,q_,Y_;j_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};df=function(){};q_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ar(ii.current);var s=null;switch(t){case"input":r=Ic(n,r),i=Ic(n,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Fc(n,r),i=Fc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=El)}kc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Y_=function(n,e,t,i){t!==i&&(e.flags|=4)};function ao(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function dy(n,e,t){var i=e.pendingProps;switch(id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return un(e.type)&&Tl(),zt(e),null;case 3:return i=e.stateNode,Ds(),at(ln),at(Xt),dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Sa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(yf(Vn),Vn=null))),df(n,e),zt(e),null;case 5:fd(e);var r=Ar(qo.current);if(t=e.type,n!==null&&e.stateNode!=null)q_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return zt(e),null}if(n=Ar(ii.current),Sa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Xo]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)st(So[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":rh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":oh(i,s),st("invalid",i)}kc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,n),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":da(i),sh(i,s,!0);break;case"textarea":da(i),ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Jn]=e,n[Xo]=i,j_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Bc(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)st(So[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":rh(n,i),r=Ic(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),st("invalid",n);break;case"textarea":oh(n,i),r=Fc(n,i),st("invalid",n);break;default:r=i}kc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ag(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fo(n,l):typeof l=="number"&&Fo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Vf(n,s,l,o))}switch(t){case"input":da(n),sh(n,i,!1);break;case"textarea":da(n),ah(n);break;case"option":i.value!=null&&n.setAttribute("value",""+rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ss(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=El)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(n&&e.stateNode!=null)Y_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=Ar(qo.current),Ar(ii.current),Sa(e)){if(i=e.stateNode,t=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==t)&&(n=_n,n!==null))switch(n.tag){case 3:ya(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ya(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return zt(e),null;case 13:if(at(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&mn!==null&&e.mode&1&&!(e.flags&128))d_(),Ns(),e.flags|=98560,s=!1;else if(s=Sa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Jn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Vn!==null&&(yf(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?Tt===0&&(Tt=3):Td())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ds(),df(n,e),n===null&&Go(e.stateNode.containerInfo),zt(e),null;case 10:return ad(e.type._context),zt(e),null;case 17:return un(e.type)&&Tl(),zt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ao(s,!1);else{if(Tt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pl(n),o!==null){for(e.flags|=128,ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>Fs&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return zt(e),null}else 2*yt()-s.renderingStartTime>Fs&&t!==1073741824&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=dt.current,rt(dt,i?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return Ed(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function hy(n,e){switch(id(e),e.tag){case 1:return un(e.type)&&Tl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ds(),at(ln),at(Xt),dd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return fd(e),null;case 13:if(at(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Ns()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(dt),null;case 4:return Ds(),null;case 10:return ad(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Ta=!1,Gt=!1,py=typeof WeakSet=="function"?WeakSet:Set,ce=null;function _s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function hf(n,e,t){try{t()}catch(i){vt(n,e,i)}}var $h=!1;function my(n,e){if(Kc=yl,n=Jg(),td(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for($c={focusedElem:n,selectionRange:t},yl=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return _=$h,$h=!1,_}function Co(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,t,s)}r=r.next}while(r!==i)}}function tu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function pf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function K_(n){var e=n.alternate;e!==null&&(n.alternate=null,K_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Jn],delete e[Xo],delete e[Jc],delete e[Zx],delete e[Qx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $_(n){return n.tag===5||n.tag===3||n.tag===4}function Zh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(n=n.child,n!==null))for(mf(n,e,t),n=n.sibling;n!==null;)mf(n,e,t),n=n.sibling}function gf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(gf(n,e,t),n=n.sibling;n!==null;)gf(n,e,t),n=n.sibling}var Dt=null,Hn=!1;function Li(n,e,t){for(t=t.child;t!==null;)Z_(n,e,t),t=t.sibling}function Z_(n,e,t){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(ql,t)}catch{}switch(t.tag){case 5:Gt||_s(t,e);case 6:var i=Dt,r=Hn;Dt=null,Li(n,e,t),Dt=i,Hn=r,Dt!==null&&(Hn?(n=Dt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Dt.removeChild(t.stateNode));break;case 18:Dt!==null&&(Hn?(n=Dt,t=t.stateNode,n.nodeType===8?Du(n.parentNode,t):n.nodeType===1&&Du(n,t),zo(n)):Du(Dt,t.stateNode));break;case 4:i=Dt,r=Hn,Dt=t.stateNode.containerInfo,Hn=!0,Li(n,e,t),Dt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(t,e,o),r=r.next}while(r!==i)}Li(n,e,t);break;case 1:if(!Gt&&(_s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}Li(n,e,t);break;case 21:Li(n,e,t);break;case 22:t.mode&1?(Gt=(i=Gt)||t.memoizedState!==null,Li(n,e,t),Gt=i):Li(n,e,t);break;default:Li(n,e,t)}}function Qh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new py),e.forEach(function(i){var r=Ty.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Un(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Hn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Hn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Dt===null)throw Error(J(160));Z_(s,o,r),Dt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,n),e=e.sibling}function Q_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(e,n),$n(n),i&4){try{Co(3,n,n.return),tu(3,n)}catch(x){vt(n,n.return,x)}try{Co(5,n,n.return)}catch(x){vt(n,n.return,x)}}break;case 1:Un(e,n),$n(n),i&512&&t!==null&&_s(t,t.return);break;case 5:if(Un(e,n),$n(n),i&512&&t!==null&&_s(t,t.return),n.flags&32){var r=n.stateNode;try{Fo(r,"")}catch(x){vt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yg(r,s),Bc(a,o);var u=Bc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Ag(r,f):c==="dangerouslySetInnerHTML"?Eg(r,f):c==="children"?Fo(r,f):Vf(r,c,f,u)}switch(a){case"input":Dc(r,s);break;case"textarea":Sg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ss(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(x){vt(n,n.return,x)}}break;case 6:if(Un(e,n),$n(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){vt(n,n.return,x)}}break;case 3:if(Un(e,n),$n(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){vt(n,n.return,x)}break;case 4:Un(e,n),$n(n);break;case 13:Un(e,n),$n(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sd=yt())),i&4&&Qh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Gt=(u=Gt)||c,Un(e,n),Gt=u):Un(e,n),$n(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ce=n,c=n.child;c!==null;){for(f=ce=c;ce!==null;){switch(h=ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:Co(4,h,h.return);break;case 1:_s(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){vt(i,t,x)}}break;case 5:_s(h,h.return);break;case 22:if(h.memoizedState!==null){ep(f);continue}}p!==null?(p.return=h,ce=p):ep(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tg("display",o))}catch(x){vt(n,n.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){vt(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,n),$n(n),i&4&&Qh(n);break;case 21:break;default:Un(e,n),$n(n)}}function $n(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if($_(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=Zh(n);gf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zh(n);mf(n,a,o);break;default:throw Error(J(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function gy(n,e,t){ce=n,J_(n)}function J_(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Ta;var u=Gt;if(Ta=o,(Gt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?tp(r):l!==null?(l.return=o,ce=l):tp(r);for(;s!==null;)ce=s,J_(s),s=s.sibling;ce=r,Ta=a,Gt=u}Jh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Jh(n)}}function Jh(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Bn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Oh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Gt||e.flags&512&&pf(e)}catch(h){vt(e,e.return,h)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function ep(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function tp(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tu(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{pf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{pf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var _y=Math.ceil,Dl=Ri.ReactCurrentDispatcher,xd=Ri.ReactCurrentOwner,Pn=Ri.ReactCurrentBatchConfig,qe=0,Nt=null,Mt=null,Ut=0,pn=0,vs=ar(0),Tt=0,Zo=null,Ur=0,nu=0,yd=0,bo=null,sn=null,Sd=0,Fs=1/0,mi=null,Ul=!1,_f=null,Qi=null,Aa=!1,Gi=null,Fl=0,Lo=0,vf=null,cl=-1,fl=0;function Jt(){return qe&6?yt():cl!==-1?cl:cl=yt()}function Ji(n){return n.mode&1?qe&2&&Ut!==0?Ut&-Ut:ey.transition!==null?(fl===0&&(fl=Og()),fl):(n=Ze,n!==0||(n=window.event,n=n===void 0?16:Wg(n.type)),n):1}function Xn(n,e,t,i){if(50<Lo)throw Lo=0,vf=null,Error(J(185));na(n,t,i),(!(qe&2)||n!==Nt)&&(n===Nt&&(!(qe&2)&&(nu|=t),Tt===4&&Hi(n,Ut)),cn(n,i),t===1&&qe===0&&!(e.mode&1)&&(Fs=yt()+500,Ql&&lr()))}function cn(n,e){var t=n.callbackNode;ex(n,e);var i=xl(n,n===Nt?Ut:0);if(i===0)t!==null&&ch(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ch(t),e===1)n.tag===0?Jx(np.bind(null,n)):u_(np.bind(null,n)),Kx(function(){!(qe&6)&&lr()}),t=null;else{switch(kg(i)){case 1:t=qf;break;case 4:t=Ug;break;case 16:t=vl;break;case 536870912:t=Fg;break;default:t=vl}t=av(t,ev.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ev(n,e){if(cl=-1,fl=0,qe&6)throw Error(J(327));var t=n.callbackNode;if(ws()&&n.callbackNode!==t)return null;var i=xl(n,n===Nt?Ut:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ol(n,i);else{e=i;var r=qe;qe|=2;var s=nv();(Nt!==n||Ut!==e)&&(mi=null,Fs=yt()+500,Rr(n,e));do try{yy();break}catch(a){tv(n,a)}while(!0);od(),Dl.current=s,qe=r,Mt!==null?e=0:(Nt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=Wc(n),r!==0&&(i=r,e=xf(n,r))),e===1)throw t=Zo,Rr(n,0),Hi(n,i),cn(n,yt()),t;if(e===6)Hi(n,i);else{if(r=n.current.alternate,!(i&30)&&!vy(r)&&(e=Ol(n,i),e===2&&(s=Wc(n),s!==0&&(i=s,e=xf(n,s))),e===1))throw t=Zo,Rr(n,0),Hi(n,i),cn(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:vr(n,sn,mi);break;case 3:if(Hi(n,i),(i&130023424)===i&&(e=Sd+500-yt(),10<e)){if(xl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Qc(vr.bind(null,n,sn,mi),e);break}vr(n,sn,mi);break;case 4:if(Hi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_y(i/1960))-i,10<i){n.timeoutHandle=Qc(vr.bind(null,n,sn,mi),i);break}vr(n,sn,mi);break;case 5:vr(n,sn,mi);break;default:throw Error(J(329))}}}return cn(n,yt()),n.callbackNode===t?ev.bind(null,n):null}function xf(n,e){var t=bo;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=Ol(n,e),n!==2&&(e=sn,sn=t,e!==null&&yf(e)),n}function yf(n){sn===null?sn=n:sn.push.apply(sn,n)}function vy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(n,e){for(e&=~yd,e&=~nu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Wn(e),i=1<<t;n[t]=-1,e&=~i}}function np(n){if(qe&6)throw Error(J(327));ws();var e=xl(n,0);if(!(e&1))return cn(n,yt()),null;var t=Ol(n,e);if(n.tag!==0&&t===2){var i=Wc(n);i!==0&&(e=i,t=xf(n,i))}if(t===1)throw t=Zo,Rr(n,0),Hi(n,e),cn(n,yt()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,vr(n,sn,mi),cn(n,yt()),null}function Md(n,e){var t=qe;qe|=1;try{return n(e)}finally{qe=t,qe===0&&(Fs=yt()+500,Ql&&lr())}}function Fr(n){Gi!==null&&Gi.tag===0&&!(qe&6)&&ws();var e=qe;qe|=1;var t=Pn.transition,i=Ze;try{if(Pn.transition=null,Ze=1,n)return n()}finally{Ze=i,Pn.transition=t,qe=e,!(qe&6)&&lr()}}function Ed(){pn=vs.current,at(vs)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Yx(t)),Mt!==null)for(t=Mt.return;t!==null;){var i=t;switch(id(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:Ds(),at(ln),at(Xt),dd();break;case 5:fd(i);break;case 4:Ds();break;case 13:at(dt);break;case 19:at(dt);break;case 10:ad(i.type._context);break;case 22:case 23:Ed()}t=t.return}if(Nt=n,Mt=n=er(n.current,null),Ut=pn=e,Tt=0,Zo=null,yd=nu=Ur=0,sn=bo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(t=Tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Tr=null}return n}function tv(n,e){do{var t=Mt;try{if(od(),al.current=Il,Nl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Dr=0,Lt=Et=pt=null,Ro=!1,Yo=0,xd.current=null,t===null||t.return===null){Tt=1,Zo=e,Mt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gh(o);if(p!==null){p.flags&=-257,Wh(p,o,a,s,e),p.mode&1&&Vh(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Vh(s,u,e),Td();break e}l=Error(J(426))}}else if(lt&&a.mode&1){var m=Gh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wh(m,o,a,s,e),rd(Us(l,a));break e}}s=l=Us(l,a),Tt!==4&&(Tt=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=k_(s,l,e);Fh(s,d);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qi===null||!Qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=B_(s,a,e);Fh(s,y);break e}}s=s.return}while(s!==null)}rv(t)}catch(C){e=C,Mt===t&&t!==null&&(Mt=t=t.return);continue}break}while(!0)}function nv(){var n=Dl.current;return Dl.current=Il,n===null?Il:n}function Td(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Nt===null||!(Ur&268435455)&&!(nu&268435455)||Hi(Nt,Ut)}function Ol(n,e){var t=qe;qe|=2;var i=nv();(Nt!==n||Ut!==e)&&(mi=null,Rr(n,e));do try{xy();break}catch(r){tv(n,r)}while(!0);if(od(),qe=t,Dl.current=i,Mt!==null)throw Error(J(261));return Nt=null,Ut=0,Tt}function xy(){for(;Mt!==null;)iv(Mt)}function yy(){for(;Mt!==null&&!X0();)iv(Mt)}function iv(n){var e=ov(n.alternate,n,pn);n.memoizedProps=n.pendingProps,e===null?rv(n):Mt=e,xd.current=null}function rv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=hy(t,e),t!==null){t.flags&=32767,Mt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Tt=6,Mt=null;return}}else if(t=dy(t,e,pn),t!==null){Mt=t;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=n}while(e!==null);Tt===0&&(Tt=5)}function vr(n,e,t){var i=Ze,r=Pn.transition;try{Pn.transition=null,Ze=1,Sy(n,e,t,i)}finally{Pn.transition=r,Ze=i}return null}function Sy(n,e,t,i){do ws();while(Gi!==null);if(qe&6)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(tx(n,s),n===Nt&&(Mt=Nt=null,Ut=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Aa||(Aa=!0,av(vl,function(){return ws(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=Ze;Ze=1;var a=qe;qe|=4,xd.current=null,my(n,t),Q_(t,n),Hx($c),yl=!!Kc,$c=Kc=null,n.current=t,gy(t),j0(),qe=a,Ze=o,Pn.transition=s}else n.current=t;if(Aa&&(Aa=!1,Gi=n,Fl=r),s=n.pendingLanes,s===0&&(Qi=null),K0(t.stateNode),cn(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,n=_f,_f=null,n;return Fl&1&&n.tag!==0&&ws(),s=n.pendingLanes,s&1?n===vf?Lo++:(Lo=0,vf=n):Lo=0,lr(),null}function ws(){if(Gi!==null){var n=kg(Fl),e=Pn.transition,t=Ze;try{if(Pn.transition=null,Ze=16>n?16:n,Gi===null)var i=!1;else{if(n=Gi,Gi=null,Fl=0,qe&6)throw Error(J(331));var r=qe;for(qe|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:Co(8,c,s)}var f=c.child;if(f!==null)f.return=c,ce=f;else for(;ce!==null;){c=ce;var h=c.sibling,p=c.return;if(K_(c),c===u){ce=null;break}if(h!==null){h.return=p,ce=h;break}ce=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ce=d;break e}ce=s.return}}var g=n.current;for(ce=g;ce!==null;){o=ce;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ce=v;else e:for(o=g;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ce=y;break e}ce=a.return}}if(qe=r,lr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(ql,n)}catch{}i=!0}return i}finally{Ze=t,Pn.transition=e}}return!1}function ip(n,e,t){e=Us(t,e),e=k_(n,e,1),n=Zi(n,e,1),e=Jt(),n!==null&&(na(n,1,e),cn(n,e))}function vt(n,e,t){if(n.tag===3)ip(n,n,t);else for(;e!==null;){if(e.tag===3){ip(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){n=Us(t,n),n=B_(e,n,1),e=Zi(e,n,1),n=Jt(),e!==null&&(na(e,1,n),cn(e,n));break}}e=e.return}}function My(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Jt(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(Ut&t)===t&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>yt()-Sd?Rr(n,0):yd|=t),cn(n,e)}function sv(n,e){e===0&&(n.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var t=Jt();n=Ti(n,e),n!==null&&(na(n,e,t),cn(n,t))}function Ey(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),sv(n,t)}function Ty(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),sv(n,t)}var ov;ov=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return an=!1,fy(n,e,t);an=!!(n.flags&131072)}else an=!1,lt&&e.flags&1048576&&c_(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(n,e),n=e.pendingProps;var r=Ps(e,Xt.current);As(e,t),r=pd(null,e,i,n,r,t);var s=md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ud(e),r.updater=eu,e.stateNode=r,r._reactInternals=e,of(e,i,n,t),e=uf(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&nd(e),Zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wy(i),n=Bn(i,n),r){case 0:e=lf(null,e,i,n,t);break e;case 1:e=qh(null,e,i,n,t);break e;case 11:e=Xh(null,e,i,n,t);break e;case 14:e=jh(null,e,i,Bn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),lf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),qh(n,e,i,r,t);case 3:e:{if(G_(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,g_(n,e),Ll(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(J(423)),e),e=Yh(n,e,i,t,r);break e}else if(i!==r){r=Us(Error(J(424)),e),e=Yh(n,e,i,t,r);break e}else for(mn=$i(e.stateNode.containerInfo.firstChild),_n=e,lt=!0,Vn=null,t=p_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ns(),i===r){e=Ai(n,e,t);break e}Zt(n,e,i,t)}e=e.child}return e;case 5:return __(e),n===null&&nf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Zc(i,r)?o=null:s!==null&&Zc(i,s)&&(e.flags|=32),V_(n,e),Zt(n,e,o,t),e.child;case 6:return n===null&&nf(e),null;case 13:return W_(n,e,t);case 4:return cd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Is(e,null,i,t):Zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Xh(n,e,i,r,t);case 7:return Zt(n,e,e.pendingProps,t),e.child;case 8:return Zt(n,e,e.pendingProps.children,t),e.child;case 12:return Zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Cl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),rf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),rf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,t),r=In(r),i=i(r),e.flags|=1,Zt(n,e,i,t),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),jh(n,e,i,r,t);case 15:return z_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ul(n,e),e.tag=1,un(i)?(n=!0,Al(e)):n=!1,As(e,t),O_(e,i,r),of(e,i,r,t),uf(null,e,i,!0,n,t);case 19:return X_(n,e,t);case 22:return H_(n,e,t)}throw Error(J(156,e.tag))};function av(n,e){return Dg(n,e)}function Ay(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(n,e,t,i){return new Ay(n,e,t,i)}function Ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wy(n){if(typeof n=="function")return Ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Wf)return 11;if(n===Xf)return 14}return 2}function er(n,e){var t=n.alternate;return t===null?(t=Ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function dl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ad(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ls:return Cr(t.children,r,s,e);case Gf:o=8,r|=8;break;case bc:return n=Ln(12,t,e,r|2),n.elementType=bc,n.lanes=s,n;case Lc:return n=Ln(13,t,e,r),n.elementType=Lc,n.lanes=s,n;case Pc:return n=Ln(19,t,e,r),n.elementType=Pc,n.lanes=s,n;case _g:return iu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mg:o=10;break e;case gg:o=9;break e;case Wf:o=11;break e;case Xf:o=14;break e;case Oi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=Ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Cr(n,e,t,i){return n=Ln(7,n,i,e),n.lanes=t,n}function iu(n,e,t,i){return n=Ln(22,n,i,e),n.elementType=_g,n.lanes=t,n.stateNode={isHidden:!1},n}function Vu(n,e,t){return n=Ln(6,n,null,e),n.lanes=t,n}function Gu(n,e,t){return e=Ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ry(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wd(n,e,t,i,r,s,o,a,l){return n=new Ry(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),n}function Cy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function lv(n){if(!n)return sr;n=n._reactInternals;e:{if(Vr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(un(t))return l_(n,t,e)}return e}function uv(n,e,t,i,r,s,o,a,l){return n=wd(t,i,!0,n,r,s,o,a,l),n.context=lv(null),t=n.current,i=Jt(),r=Ji(t),s=Si(i,r),s.callback=e??null,Zi(t,s,r),n.current.lanes=r,na(n,r,i),cn(n,i),n}function ru(n,e,t,i){var r=e.current,s=Jt(),o=Ji(r);return t=lv(t),e.context===null?e.context=t:e.pendingContext=t,e=Si(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zi(r,e,o),n!==null&&(Xn(n,r,o,s),ol(n,r,o)),o}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Rd(n,e){rp(n,e),(n=n.alternate)&&rp(n,e)}function by(){return null}var cv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cd(n){this._internalRoot=n}su.prototype.render=Cd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));ru(n,e,null,null)};su.prototype.unmount=Cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fr(function(){ru(null,n,null,null)}),e[Ei]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<zi.length&&e!==0&&e<zi[t].priority;t++);zi.splice(t,0,n),t===0&&Gg(n)}};function bd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sp(){}function Ly(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=kl(o);s.call(u)}}var o=uv(e,i,n,0,null,!1,!1,"",sp);return n._reactRootContainer=o,n[Ei]=o.current,Go(n.nodeType===8?n.parentNode:n),Fr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=kl(l);a.call(u)}}var l=wd(n,0,!1,null,null,!1,!1,"",sp);return n._reactRootContainer=l,n[Ei]=l.current,Go(n.nodeType===8?n.parentNode:n),Fr(function(){ru(e,l,t,i)}),l}function au(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kl(o);a.call(l)}}ru(e,o,n,r)}else o=Ly(t,e,n,r,i);return kl(o)}Bg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=yo(e.pendingLanes);t!==0&&(Yf(e,t|1),cn(e,yt()),!(qe&6)&&(Fs=yt()+500,lr()))}break;case 13:Fr(function(){var i=Ti(n,1);if(i!==null){var r=Jt();Xn(i,n,1,r)}}),Rd(n,1)}};Kf=function(n){if(n.tag===13){var e=Ti(n,134217728);if(e!==null){var t=Jt();Xn(e,n,134217728,t)}Rd(n,134217728)}};zg=function(n){if(n.tag===13){var e=Ji(n),t=Ti(n,e);if(t!==null){var i=Jt();Xn(t,n,e,i)}Rd(n,e)}};Hg=function(){return Ze};Vg=function(n,e){var t=Ze;try{return Ze=n,e()}finally{Ze=t}};Hc=function(n,e,t){switch(e){case"input":if(Dc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zl(i);if(!r)throw Error(J(90));xg(i),Dc(i,r)}}}break;case"textarea":Sg(n,t);break;case"select":e=t.value,e!=null&&Ss(n,!!t.multiple,e,!1)}};Cg=Md;bg=Fr;var Py={usingClientEntryPoint:!1,Events:[ra,ds,Zl,wg,Rg,Md]},lo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ng(n),n===null?null:n.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{ql=wa.inject(Ny),ni=wa}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py;xn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(e))throw Error(J(200));return Cy(n,e,null,t)};xn.createRoot=function(n,e){if(!bd(n))throw Error(J(299));var t=!1,i="",r=cv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wd(n,1,!1,null,null,t,!1,i,r),n[Ei]=e.current,Go(n.nodeType===8?n.parentNode:n),new Cd(e)};xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Ng(e),n=n===null?null:n.stateNode,n};xn.flushSync=function(n){return Fr(n)};xn.hydrate=function(n,e,t){if(!ou(e))throw Error(J(200));return au(null,n,e,!0,t)};xn.hydrateRoot=function(n,e,t){if(!bd(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=cv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=uv(e,null,n,1,t??null,r,!1,s,o),n[Ei]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new su(e)};xn.render=function(n,e,t){if(!ou(e))throw Error(J(200));return au(null,n,e,!1,t)};xn.unmountComponentAtNode=function(n){if(!ou(n))throw Error(J(40));return n._reactRootContainer?(Fr(function(){au(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1};xn.unstable_batchedUpdates=Md;xn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ou(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return au(n,e,t,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(n){console.error(n)}}fv(),fg.exports=xn;var Iy=fg.exports,op=Iy;Rc.createRoot=op.createRoot,Rc.hydrateRoot=op.hydrateRoot;const Dy="modulepreload",Uy=function(n){return"/"+n},ap={},Fy=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Uy(l),l in ap)return;ap[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Dy,u||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="160",Oy=0,lp=1,ky=2,dv=1,By=2,pi=3,wi=0,en=1,ei=2,tr=0,Rs=1,up=2,cp=3,fp=4,zy=5,Sr=100,Hy=101,Vy=102,dp=103,hp=104,Gy=200,Wy=201,Xy=202,jy=203,Sf=204,Mf=205,qy=206,Yy=207,Ky=208,$y=209,Zy=210,Qy=211,Jy=212,eS=213,tS=214,nS=0,iS=1,rS=2,Bl=3,sS=4,oS=5,aS=6,lS=7,hv=0,uS=1,cS=2,nr=0,fS=1,dS=2,hS=3,pS=4,mS=5,gS=6,pp="attached",_S="detached",pv=300,Os=301,ks=302,Ef=303,Tf=304,lu=306,Bs=1e3,Rn=1001,zl=1002,Pt=1003,Af=1004,hl=1005,on=1006,mv=1007,Or=1008,ir=1009,vS=1010,xS=1011,Pd=1012,gv=1013,Wi=1014,xi=1015,Qo=1016,_v=1017,vv=1018,br=1020,yS=1021,Cn=1023,SS=1024,MS=1025,Lr=1026,zs=1027,ES=1028,xv=1029,TS=1030,yv=1031,Sv=1033,Wu=33776,Xu=33777,ju=33778,qu=33779,mp=35840,gp=35841,_p=35842,vp=35843,Mv=36196,xp=37492,yp=37496,Sp=37808,Mp=37809,Ep=37810,Tp=37811,Ap=37812,wp=37813,Rp=37814,Cp=37815,bp=37816,Lp=37817,Pp=37818,Np=37819,Ip=37820,Dp=37821,Yu=36492,Up=36494,Fp=36495,AS=36283,Op=36284,kp=36285,Bp=36286,Jo=2300,Hs=2301,Ku=2302,zp=2400,Hp=2401,Vp=2402,wS=2500,RS=0,Ev=1,wf=2,Tv=3e3,Pr=3001,CS=3200,bS=3201,Av=0,LS=1,bn="",ht="srgb",It="srgb-linear",Nd="display-p3",uu="display-p3-linear",Hl="linear",ot="srgb",Vl="rec709",Gl="p3",Wr=7680,Gp=519,PS=512,NS=513,IS=514,wv=515,DS=516,US=517,FS=518,OS=519,Rf=35044,Wp="300 es",Cf=1035,yi=2e3,Wl=2001;class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xp=1234567;const Po=Math.PI/180,Vs=180/Math.PI;function jn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function Id(n,e){return(n%e+e)%e}function kS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function BS(n,e,t){return n!==e?(t-n)/(e-n):0}function No(n,e,t){return(1-t)*n+t*e}function zS(n,e,t,i){return No(n,e,1-Math.exp(-t*i))}function HS(n,e=1){return e-Math.abs(Id(n,e*2)-e)}function VS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function GS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function WS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function XS(n,e){return n+Math.random()*(e-n)}function jS(n){return n*(.5-Math.random())}function qS(n){n!==void 0&&(Xp=n);let e=Xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YS(n){return n*Po}function KS(n){return n*Vs}function bf(n){return(n&n-1)===0&&n!==0}function $S(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ZS(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const QS={DEG2RAD:Po,RAD2DEG:Vs,generateUUID:jn,clamp:Wt,euclideanModulo:Id,mapLinear:kS,inverseLerp:BS,lerp:No,damp:zS,pingpong:HS,smoothstep:VS,smootherstep:GS,randInt:WS,randFloat:XS,randFloatSpread:jS,seededRandom:qS,degToRad:YS,radToDeg:KS,isPowerOfTwo:bf,ceilPowerOfTwo:$S,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:ZS,normalize:Je,denormalize:ti};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],g=r[1],v=r[4],y=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*m+a*v+l*w,s[6]=o*d+a*y+l*R,s[1]=u*x+c*g+f*C,s[4]=u*m+c*v+f*w,s[7]=u*d+c*y+f*R,s[2]=h*x+p*g+_*C,s[5]=h*m+p*v+_*w,s[8]=h*d+p*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-u*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($u.makeScale(e,t)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,t){return this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new ze;function Rv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JS(){const n=ea("canvas");return n.style.display="block",n}const jp={};function Io(n){n in jp||(jp[n]=!0,console.warn(n))}const qp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[It]:{transfer:Hl,primaries:Vl,toReference:n=>n,fromReference:n=>n},[ht]:{transfer:ot,primaries:Vl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uu]:{transfer:Hl,primaries:Gl,toReference:n=>n.applyMatrix3(Yp),fromReference:n=>n.applyMatrix3(qp)},[Nd]:{transfer:ot,primaries:Gl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yp),fromReference:n=>n.applyMatrix3(qp).convertLinearToSRGB()}},eM=new Set([It,uu]),Ye={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!eM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ra[e].toReference,r=Ra[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ra[n].primaries},getTransfer:function(n){return n===bn?Hl:Ra[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xr;class Cv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=ea("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qu(r[o].image)):s.push(Qu(r[o]))}else s=Qu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;class Ft extends Ks{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Rn,r=Rn,s=on,o=Or,a=Cn,l=ir,u=Ft.DEFAULT_ANISOTROPY,c=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=jn(),this.name="",this.source=new bv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Pr?ht:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Pr:Tv}set encoding(e){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?ht:bn}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=pv;Ft.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,C=(d+1)/2,w=(c+h)/4,R=(f+x)/4,D=(_+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=D/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends Ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?ht:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends iM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lv extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rM extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||u!==p||c!==_){let m=1-a;const d=l*h+u*p+c*_+f*x,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,d*g);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*g;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,f=f*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new L,Kp=new ur;class Ci{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),ba.subVectors(this.max,uo),jr.subVectors(e.a,uo),qr.subVectors(e.b,uo),Yr.subVectors(e.c,uo),Pi.subVectors(qr,jr),Ni.subVectors(Yr,qr),dr.subVectors(jr,Yr);let t=[0,-Pi.z,Pi.y,0,-Ni.z,Ni.y,0,-dr.z,dr.y,Pi.z,0,-Pi.x,Ni.z,0,-Ni.x,dr.z,0,-dr.x,-Pi.y,Pi.x,0,-Ni.y,Ni.x,0,-dr.y,dr.x,0];return!ec(t,jr,qr,Yr,ba)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,jr,qr,Yr,ba))?!1:(La.crossVectors(Pi,Ni),t=[La.x,La.y,La.z],ec(t,jr,qr,Yr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Ca=new Ci,jr=new L,qr=new L,Yr=new L,Pi=new L,Ni=new L,dr=new L,uo=new L,ba=new L,La=new L,hr=new L;function ec(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=t.dot(hr),c=i.dot(hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const sM=new Ci,co=new L,tc=new L;class si{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(tc)),this.expandByPoint(co.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new L,nc=new L,Pa=new L,Ii=new L,ic=new L,Na=new L,rc=new L;class cu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nc.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(nc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pa),a=Ii.dot(this.direction),l=-Ii.dot(Pa),u=Ii.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nc).addScaledVector(Pa,h),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,r,s){ic.subVectors(t,e),Na.subVectors(i,e),rc.crossVectors(ic,Na);let o=this.direction.dot(rc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Na.crossVectors(Ii,Na));if(l<0)return null;const u=a*this.direction.dot(ic.cross(Ii));if(u<0||l+u>o)return null;const c=-a*Ii.dot(rc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,x,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,x,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,x=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-x*u,t[9]=-a*l,t[2]=x-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,x=u*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,x=u*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=x-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,x=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+x,t[1]=l*f,t[5]=x*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,x=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+x,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oM,e,aM)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Di.crossVectors(i,dn),Di.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Di.crossVectors(i,dn)),Di.normalize(),Ia.crossVectors(dn,Di),r[0]=Di.x,r[4]=Ia.x,r[8]=dn.x,r[1]=Di.y,r[5]=Ia.y,r[9]=dn.y,r[2]=Di.z,r[6]=Ia.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],g=i[3],v=i[7],y=i[11],C=i[15],w=r[0],R=r[4],D=r[8],M=r[12],T=r[1],W=r[5],j=r[9],ne=r[13],P=r[2],H=r[6],X=r[10],q=r[14],N=r[3],U=r[7],z=r[11],Y=r[15];return s[0]=o*w+a*T+l*P+u*N,s[4]=o*R+a*W+l*H+u*U,s[8]=o*D+a*j+l*X+u*z,s[12]=o*M+a*ne+l*q+u*Y,s[1]=c*w+f*T+h*P+p*N,s[5]=c*R+f*W+h*H+p*U,s[9]=c*D+f*j+h*X+p*z,s[13]=c*M+f*ne+h*q+p*Y,s[2]=_*w+x*T+m*P+d*N,s[6]=_*R+x*W+m*H+d*U,s[10]=_*D+x*j+m*X+d*z,s[14]=_*M+x*ne+m*q+d*Y,s[3]=g*w+v*T+y*P+C*N,s[7]=g*R+v*W+y*H+C*U,s[11]=g*D+v*j+y*X+C*z,s[15]=g*M+v*ne+y*q+C*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],g=f*m*u-x*h*u+x*l*p-a*m*p-f*l*d+a*h*d,v=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,y=c*x*u-_*f*u+_*a*p-o*x*p-c*a*d+o*f*d,C=_*f*l-c*x*l-_*a*h+o*x*h+c*a*m-o*f*m,w=t*g+i*v+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=g*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*d+t*h*d)*R,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*d-t*l*d)*R,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*R,e[8]=y*R,e[9]=(_*f*s-c*x*s-_*i*p+t*x*p+c*i*d-t*f*d)*R,e[10]=(o*x*s-_*a*s+_*i*u-t*x*u-o*i*d+t*a*d)*R,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(c*x*r-_*f*r+_*i*h-t*x*h-c*i*m+t*f*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,x=o*c,m=o*f,d=a*f,g=l*u,v=l*c,y=l*f,C=i.x,w=i.y,R=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(_+v)*R,r[9]=(m-g)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,c=1/o,f=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=yi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===yi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,x;if(a===yi)_=(o+s)*f,x=-2*f;else if(a===Wl)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kr=new L,On=new He,oM=new L(0,0,0),aM=new L(1,1,1),Di=new L,Ia=new L,dn=new L,$p=new He,Zp=new ur;class fu{constructor(e=0,t=0,i=0,r=fu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fu.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Qp=new L,$r=new ur,ci=new He,Da=new L,fo=new L,uM=new L,cM=new ur,Jp=new L(1,0,0),em=new L(0,1,0),tm=new L(0,0,1),fM={type:"added"},dM={type:"removed"};class ut extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new L,t=new fu,i=new ur,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new ze}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,t){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Da.copy(e):Da.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(fo,Da,this.up):ci.lookAt(Da,fo,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ci),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ut.DEFAULT_UP=new L(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new L,fi=new L,sc=new L,di=new L,Zr=new L,Qr=new L,nm=new L,oc=new L,ac=new L,lc=new L;let Ua=!1;class Gn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),fi.subVectors(i,t),sc.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(fi),l=kn.dot(sc),u=fi.dot(fi),c=fi.dot(sc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),fi.subVectors(e,t),kn.cross(fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),oc.subVectors(e,i);const l=Zr.dot(oc),u=Qr.dot(oc);if(l<=0&&u<=0)return t.copy(i);ac.subVectors(e,r);const c=Zr.dot(ac),f=Qr.dot(ac);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zr,o);lc.subVectors(e,s);const p=Zr.dot(lc),_=Qr.dot(lc);if(_>=0&&p<=_)return t.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Qr,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return nm.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(nm,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function uc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Id(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=uc(o,s,e+1/3),this.g=uc(o,s,e),this.b=uc(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const i=Nv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ye.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Wt(Vt.r*255,0,255))*65536+Math.round(Wt(Vt.g*255,0,255))*256+Math.round(Wt(Vt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ht){Ye.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Fa);const i=No(Ui.h,Fa.h,t),r=No(Ui.s,Fa.s,t),s=No(Ui.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Re;Re.NAMES=Nv;let hM=0;class ri extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Rs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sf&&(i.blendSrc=this.blendSrc),this.blendDst!==Mf&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new L,Oa=new Xe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rf&&(e.usage=this.usage),e}}class Iv extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dv extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pM=0;const Mn=new He,cc=new ut,Jr=new L,hn=new Ci,ho=new Ci,bt=new L;class Yn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rv(e)?Dv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(hn.min,ho.min),hn.expandByPoint(bt),bt.addVectors(hn.max,ho.max),hn.expandByPoint(bt)):(hn.expandByPoint(ho.min),hn.expandByPoint(ho.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),bt.add(Jr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new L,c[T]=new L;const f=new L,h=new L,p=new L,_=new Xe,x=new Xe,m=new Xe,d=new L,g=new L;function v(T,W,j){f.fromArray(r,T*3),h.fromArray(r,W*3),p.fromArray(r,j*3),_.fromArray(o,T*2),x.fromArray(o,W*2),m.fromArray(o,j*2),h.sub(f),p.sub(f),x.sub(_),m.sub(_);const ne=1/(x.x*m.y-m.x*x.y);isFinite(ne)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ne),g.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(ne),u[T].add(d),u[W].add(d),u[j].add(d),c[T].add(g),c[W].add(g),c[j].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,W=y.length;T<W;++T){const j=y[T],ne=j.start,P=j.count;for(let H=ne,X=ne+P;H<X;H+=3)v(i[H+0],i[H+1],i[H+2])}const C=new L,w=new L,R=new L,D=new L;function M(T){R.fromArray(s,T*3),D.copy(R);const W=u[T];C.copy(W),C.sub(R.multiplyScalar(R.dot(W))).normalize(),w.crossVectors(D,W);const ne=w.dot(c[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=ne}for(let T=0,W=y.length;T<W;++T){const j=y[T],ne=j.start,P=j.count;for(let H=ne,X=ne+P;H<X;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,u=new L,c=new L,f=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new tn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new He,pr=new cu,ka=new si,rm=new L,es=new L,ts=new L,ns=new L,fc=new L,Ba=new L,za=new Xe,Ha=new Xe,Va=new Xe,sm=new L,om=new L,am=new L,Ga=new L,Wa=new L;class gn extends ut{constructor(e=new Yn,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(fc.fromBufferAttribute(f,e),o?Ba.addScaledVector(fc,c):Ba.addScaledVector(fc.sub(t),c))}t.add(Ba)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(ka.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ka,rm)===null||pr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),pr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const w=a.getX(y),R=a.getX(y+1),D=a.getX(y+2);r=Xa(this,d,e,i,u,c,f,w,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Xa(this,o,e,i,u,c,f,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=v;y<C;y+=3){const w=y,R=y+1,D=y+2;r=Xa(this,d,e,i,u,c,f,w,R,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const g=m,v=m+1,y=m+2;r=Xa(this,o,e,i,u,c,f,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function mM(n,e,t,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Wa);return u<t.near||u>t.far?null:{distance:u,point:Wa.clone(),object:n}}function Xa(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,es),n.getVertexPosition(l,ts),n.getVertexPosition(u,ns);const c=mM(n,e,t,i,es,ts,ns,Ga);if(c){r&&(za.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,u),c.uv=Gn.getInterpolation(Ga,es,ts,ns,za,Ha,Va,new Xe)),s&&(za.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,u),c.uv1=Gn.getInterpolation(Ga,es,ts,ns,za,Ha,Va,new Xe),c.uv2=c.uv1),o&&(sm.fromBufferAttribute(o,a),om.fromBufferAttribute(o,l),am.fromBufferAttribute(o,u),c.normal=Gn.getInterpolation(Ga,es,ts,ns,sm,om,am,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new L,materialIndex:0};Gn.getNormal(es,ts,ns,f.normal),c.face=f}return c}class oa extends Yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(f,2));function _(x,m,d,g,v,y,C,w,R,D,M){const T=y/R,W=C/D,j=y/2,ne=C/2,P=w/2,H=R+1,X=D+1;let q=0,N=0;const U=new L;for(let z=0;z<X;z++){const Y=z*W-ne;for(let $=0;$<H;$++){const G=$*T-j;U[x]=G*g,U[m]=Y*v,U[d]=P,u.push(U.x,U.y,U.z),U[x]=0,U[m]=0,U[d]=w>0?1:-1,c.push(U.x,U.y,U.z),f.push($/R),f.push(1-z/D),q+=1}}for(let z=0;z<D;z++)for(let Y=0;Y<R;Y++){const $=h+Y+H*z,G=h+Y+H*(z+1),K=h+(Y+1)+H*(z+1),ae=h+(Y+1)+H*z;l.push($,G,ae),l.push(G,K,ae),N+=6}a.addGroup(p,N,M),p+=N,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Gs(n[t]);for(const r in i)e[r]=i[r]}return e}function gM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uv(n){return n.getRenderTarget()===null?n.outputColorSpace:Ye.workingColorSpace}const _M={clone:Gs,merge:$t};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fv extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends Fv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,rs=1;class yM extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new Qt(is,rs,e,t);s.layers=this.layers,this.add(s);const o=new Qt(is,rs,e,t);o.layers=this.layers,this.add(o);const a=new Qt(is,rs,e,t);a.layers=this.layers,this.add(a);const l=new Qt(is,rs,e,t);l.layers=this.layers,this.add(l);const u=new Qt(is,rs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ov extends Ft{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pr?ht:bn),this.texture=new Ov(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oa(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:tr});s.uniforms.tEquirect.value=t;const o=new gn(r,s),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=on),new yM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const dc=new L,MM=new L,EM=new ze;class xr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dc.subVectors(i,t).cross(MM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||EM.getNormalMatrix(e),r=this.coplanarPoint(dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new si,ja=new L;class Dd{constructor(e=new xr,t=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],d=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+_,y+g).normalize(),i[3].setComponents(l-o,h-c,m-_,y-g).normalize(),i[4].setComponents(l-a,h-f,m-x,y-v).normalize(),t===yi)i[5].setComponents(l+a,h+f,m+x,y+v).normalize();else if(t===Wl)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function TM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let x=0,m=_.length;x<m;x++){const d=_[x];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Ud extends Yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<c;d++){const g=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;_.push(y,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const v=g+u*d,y=g+u*(d+1),C=g+1+u*(d+1),w=g+1+u*d;p.push(v,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.width,e.height,e.widthSegments,e.heightSegments)}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,hE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,TE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,AE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
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
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fT=`#ifdef USE_SKINNING
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
#endif`,dT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hT=`#ifdef USE_SKINNING
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
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
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
}`,PT=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,NT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
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
}`,BT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zT=`#define LAMBERT
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
}`,HT=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,VT=`#define MATCAP
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
}`,GT=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WT=`#define NORMAL
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
}`,XT=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
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
}`,qT=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YT=`#define STANDARD
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
}`,KT=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$T=`#define TOON
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
}`,ZT=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QT=`uniform float size;
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
}`,JT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,tA=`uniform vec3 color;
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
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,iA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,De={alphahash_fragment:AM,alphahash_pars_fragment:wM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:bM,alphatest_pars_fragment:LM,aomap_fragment:PM,aomap_pars_fragment:NM,batching_pars_vertex:IM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:jM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:$M,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:uE,fog_fragment:cE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_fragment:hE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:xE,lights_toon_pars_fragment:yE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:wE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:PE,map_fragment:NE,map_pars_fragment:IE,map_particle_fragment:DE,map_particle_pars_fragment:UE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:oT,shadowmap_pars_vertex:aT,shadowmap_vertex:lT,shadowmask_pars_fragment:uT,skinbase_vertex:cT,skinning_pars_vertex:fT,skinning_vertex:dT,skinnormal_vertex:hT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:_T,transmission_fragment:vT,transmission_pars_fragment:xT,uv_pars_fragment:yT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:AT,backgroundCube_vert:wT,backgroundCube_frag:RT,cube_vert:CT,cube_frag:bT,depth_vert:LT,depth_frag:PT,distanceRGBA_vert:NT,distanceRGBA_frag:IT,equirect_vert:DT,equirect_frag:UT,linedashed_vert:FT,linedashed_frag:OT,meshbasic_vert:kT,meshbasic_frag:BT,meshlambert_vert:zT,meshlambert_frag:HT,meshmatcap_vert:VT,meshmatcap_frag:GT,meshnormal_vert:WT,meshnormal_frag:XT,meshphong_vert:jT,meshphong_frag:qT,meshphysical_vert:YT,meshphysical_frag:KT,meshtoon_vert:$T,meshtoon_frag:ZT,points_vert:QT,points_frag:JT,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},re={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:$t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:$t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:$t([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:$t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:$t([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:$t([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:$t([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:$t([re.lights,re.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Qn.physical={uniforms:$t([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const qa={r:0,b:0,g:0};function rA(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let g=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),g=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===lu)?(c===void 0&&(c=new gn(new oa(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Gs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==ot,(f!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new gn(new Ud(2,2),new Br({name:"BackgroundMaterial",uniforms:Gs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,d){m.getRGB(qa,Uv(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function sA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(P,H,X,q,N){let U=!1;if(o){const z=x(q,X,H);u!==z&&(u=z,p(u.object)),U=d(P,q,X,N),U&&g(P,q,X,N)}else{const z=H.wireframe===!0;(u.geometry!==q.id||u.program!==X.id||u.wireframe!==z)&&(u.geometry=q.id,u.program=X.id,u.wireframe=z,U=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(U||c)&&(c=!1,D(P,H,X,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,H,X){const q=X.wireframe===!0;let N=a[P.id];N===void 0&&(N={},a[P.id]=N);let U=N[H.id];U===void 0&&(U={},N[H.id]=U);let z=U[q];return z===void 0&&(z=m(h()),U[q]=z),z}function m(P){const H=[],X=[],q=[];for(let N=0;N<r;N++)H[N]=0,X[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function d(P,H,X,q){const N=u.attributes,U=H.attributes;let z=0;const Y=X.getAttributes();for(const $ in Y)if(Y[$].location>=0){const K=N[$];let ae=U[$];if(ae===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;z++}return u.attributesNum!==z||u.index!==q}function g(P,H,X,q){const N={},U=H.attributes;let z=0;const Y=X.getAttributes();for(const $ in Y)if(Y[$].location>=0){let K=U[$];K===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),N[$]=ae,z++}u.attributes=N,u.attributesNum=z,u.index=q}function v(){const P=u.newAttributes;for(let H=0,X=P.length;H<X;H++)P[H]=0}function y(P){C(P,0)}function C(P,H){const X=u.newAttributes,q=u.enabledAttributes,N=u.attributeDivisors;X[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),N[P]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),N[P]=H)}function w(){const P=u.newAttributes,H=u.enabledAttributes;for(let X=0,q=H.length;X<q;X++)H[X]!==P[X]&&(n.disableVertexAttribArray(X),H[X]=0)}function R(P,H,X,q,N,U,z){z===!0?n.vertexAttribIPointer(P,H,X,N,U):n.vertexAttribPointer(P,H,X,q,N,U)}function D(P,H,X,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=q.attributes,U=X.getAttributes(),z=H.defaultAttributeValues;for(const Y in U){const $=U[Y];if($.location>=0){let G=N[Y];if(G===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const K=G.normalized,ae=G.itemSize,fe=t.get(G);if(fe===void 0)continue;const pe=fe.buffer,Le=fe.type,Ne=fe.bytesPerElement,Ee=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||G.gpuType===gv);if(G.isInterleavedBufferAttribute){const je=G.data,F=je.stride,jt=G.offset;if(je.isInstancedInterleavedBuffer){for(let xe=0;xe<$.locationSize;xe++)C($.location+xe,je.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let xe=0;xe<$.locationSize;xe++)y($.location+xe);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let xe=0;xe<$.locationSize;xe++)R($.location+xe,ae/$.locationSize,Le,K,F*Ne,(jt+ae/$.locationSize*xe)*Ne,Ee)}else{if(G.isInstancedBufferAttribute){for(let je=0;je<$.locationSize;je++)C($.location+je,G.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let je=0;je<$.locationSize;je++)y($.location+je);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let je=0;je<$.locationSize;je++)R($.location+je,ae/$.locationSize,Le,K,ae*Ne,ae/$.locationSize*je*Ne,Ee)}}else if(z!==void 0){const K=z[Y];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv($.location,K);break;case 3:n.vertexAttrib3fv($.location,K);break;case 4:n.vertexAttrib4fv($.location,K);break;default:n.vertexAttrib1fv($.location,K)}}}}w()}function M(){j();for(const P in a){const H=a[P];for(const X in H){const q=H[X];for(const N in q)_(q[N].object),delete q[N];delete H[X]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const H=a[P.id];for(const X in H){const q=H[X];for(const N in q)_(q[N].object),delete q[N];delete H[X]}delete a[P.id]}function W(P){for(const H in a){const X=a[H];if(X[P.id]===void 0)continue;const q=X[P.id];for(const N in q)_(q[N].object),delete q[N];delete X[P.id]}}function j(){ne(),c=!0,u!==l&&(u=l,p(u.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:ne,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function oA(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function aA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),C=v&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function lA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new xr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let y=d.clippingState||null;l.value=y,y=c(_,h,v,p);for(let C=0;C!==v;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function uA(n){let e=new WeakMap;function t(o,a){return a===Ef?o.mapping=Os:a===Tf&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ef||a===Tf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new SM(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fd extends Fv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,lm=[.125,.215,.35,.446,.526,.582],Mr=20,hc=new Fd,um=new Re;let pc=null,mc=0,gc=0;const yr=(1+Math.sqrt(5))/2,ss=1/yr,cm=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,yr,ss),new L(0,yr,-ss),new L(ss,0,yr),new L(-ss,0,yr),new L(yr,ss,0),new L(-yr,ss,0)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Qo,format:Cn,colorSpace:It,depthBuffer:!1},r=dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cA(s)),this._blurMaterial=fA(s,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,i,r){const a=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(um),c.toneMapping=nr,c.autoClear=!1;const p=new Xi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new gn(new oa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(um),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Ya(r,g*v,d>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Os||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cm[(r-1)%cm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new gn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),x=s/_,m=isFinite(s)?1+Math.floor(c*x):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const d=[];let g=0;for(let R=0;R<Mr;++R){const D=R/x,M=Math.exp(-D*D/2);d.push(M),R===0?g+=M:R<m&&(g+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-xs?r-v+xs:0),w=4*(this._cubeSize-y);Ya(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(f,hc)}}function cA(n){const e=[],t=[],i=[];let r=n;const s=n-xs+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xs?l=lm[o-n+xs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,x=3,m=2,d=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,D=w>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];g.set(M,x*_*w),v.set(h,m*_*w);const T=[w,w,w,w,w,w];y.set(T,d*_*w)}const C=new Yn;C.setAttribute("position",new tn(g,x)),C.setAttribute("uv",new tn(v,m)),C.setAttribute("faceIndex",new tn(y,d)),e.push(C),r>xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dm(n,e,t){const i=new kr(n,e,t);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fA(n,e,t){const i=new Float32Array(Mr),r=new L(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Od(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function hm(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function pm(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Od(){return`

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
	`}function dA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ef||l===Tf,c=l===Os||l===ks;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new fm(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new fm(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pA(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,y=g.length;v<y;v+=3){const C=g[v+0],w=g[v+1],R=g[v+2];h.push(C,w,w,R,R,C)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const C=v+0,w=v+1,R=v+2;h.push(C,w,w,R,R,C)}}else return;const m=new(Rv(h)?Dv:Iv)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function mA(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,x){if(x===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,a,p*l,x),t.update(_,s,x)}function h(p,_,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,x);let d=0;for(let g=0;g<x;g++)d+=_[g];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function gA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _A(n,e){return n[0]-e[0]}function vA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let H=function(){ne.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let T=c.attributes.position.count*M,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const j=new Float32Array(T*W*4*x),ne=new Lv(j,T,W,x);ne.type=xi,ne.needsUpdate=!0;const P=M*4;for(let X=0;X<x;X++){const q=w[X],N=R[X],U=D[X],z=T*W*4*X;for(let Y=0;Y<q.count;Y++){const $=Y*P;v===!0&&(o.fromBufferAttribute(q,Y),j[z+$+0]=o.x,j[z+$+1]=o.y,j[z+$+2]=o.z,j[z+$+3]=0),y===!0&&(o.fromBufferAttribute(N,Y),j[z+$+4]=o.x,j[z+$+5]=o.y,j[z+$+6]=o.z,j[z+$+7]=0),C===!0&&(o.fromBufferAttribute(U,Y),j[z+$+8]=o.x,j[z+$+9]=o.y,j[z+$+10]=o.z,j[z+$+11]=U.itemSize===4?o.w:1)}}m={count:x,texture:ne,size:new Xe(T,W)},s.set(c,m),c.addEventListener("dispose",H)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const g=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<_;y++){const C=x[y];C[0]=y,C[1]=h[y]}x.sort(vA);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(_A);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],w=C[0],R=C[1];w!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),d&&c.getAttribute("morphNormal"+y)!==d[w]&&c.setAttribute("morphNormal"+y,d[w]),r[y]=R,g+=R):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-g;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function yA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Bv extends Ft{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Lr,c!==Lr&&c!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Lr&&(i=Wi),i===void 0&&c===zs&&(i=br),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zv=new Ft,Hv=new Bv(1,1);Hv.compareFunction=wv;const Vv=new Lv,Gv=new rM,Wv=new Ov,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function du(n,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function AA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),wt(t,i)}}function wA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;vm.set(i),n.uniformMatrix3fv(this.addr,!1,vm),wt(t,i)}}function RA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;_m.set(i),n.uniformMatrix4fv(this.addr,!1,_m),wt(t,i)}}function CA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function LA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function DA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function FA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Hv:zv;t.setTexture2D(e||s,r)}function OA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gv,r)}function kA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wv,r)}function BA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vv,r)}function zA(n){switch(n){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return bA;case 35668:case 35672:return LA;case 35669:case 35673:return PA;case 5125:return NA;case 36294:return IA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(n,e){n.uniform1fv(this.addr,e)}function VA(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function GA(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function WA(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function XA(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jA(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qA(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YA(n,e){n.uniform1iv(this.addr,e)}function KA(n,e){n.uniform2iv(this.addr,e)}function $A(n,e){n.uniform3iv(this.addr,e)}function ZA(n,e){n.uniform4iv(this.addr,e)}function QA(n,e){n.uniform1uiv(this.addr,e)}function JA(n,e){n.uniform2uiv(this.addr,e)}function ew(n,e){n.uniform3uiv(this.addr,e)}function tw(n,e){n.uniform4uiv(this.addr,e)}function nw(n,e,t){const i=this.cache,r=e.length,s=du(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zv,s[o])}function iw(n,e,t){const i=this.cache,r=e.length,s=du(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gv,s[o])}function rw(n,e,t){const i=this.cache,r=e.length,s=du(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wv,s[o])}function sw(n,e,t){const i=this.cache,r=e.length,s=du(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vv,s[o])}function ow(n){switch(n){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return XA;case 35675:return jA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return KA;case 35668:case 35672:return $A;case 35669:case 35673:return ZA;case 5125:return QA;case 36294:return JA;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}class aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zA(t.type)}}class lw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ow(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function ym(n,e){n.seq.push(e),n.map[e.id]=e}function cw(n,e,t){const i=n.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),o=_c.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ym(t,u===void 0?new aw(a,n,e):new lw(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new uw(a),ym(t,f)),t=f}}}class pl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fw=37297;let dw=0;function hw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pw(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===Gl&&t===Vl?i="LinearDisplayP3ToLinearSRGB":e===Vl&&t===Gl&&(i="LinearSRGBToLinearDisplayP3"),n){case It:case uu:return[i,"LinearTransferOETF"];case ht:case Nd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hw(n.getShaderSource(e),o)}else return r}function mw(n,e){const t=pw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gw(n,e){let t;switch(e){case fS:t="Linear";break;case dS:t="Reinhard";break;case hS:t="OptimizedCineon";break;case pS:t="ACESFilmic";break;case gS:t="AgX";break;case mS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _w(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function vw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function xw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ys(n){return n!==""}function Em(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(n){return n.replace(Sw,Ew)}const Mw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ew(n,e){let t=De[e];if(t===void 0){const i=Mw.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(n){return n.replace(Tw,Aw)}function Aw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ww(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===By?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Rw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hv:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function Lw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ww(t),u=Rw(t),c=Cw(t),f=bw(t),h=Lw(t),p=t.isWebGL2?"":_w(t),_=vw(t),x=xw(s),m=r.createProgram();let d,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ys).join(`
`),d.length>0&&(d+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ys).join(`
`),g.length>0&&(g+=`
`)):(d=[wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),g=[p,wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?De.tonemapping_pars_fragment:"",t.toneMapping!==nr?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=Lf(o),o=Em(o,t),o=Tm(o,t),a=Lf(a),a=Em(a,t),a=Tm(a,t),o=Am(o),a=Am(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+d+o,C=v+g+a,w=Sm(r,r.VERTEX_SHADER,y),R=Sm(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(j){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(R).trim();let X=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,R);else{const N=Mm(r,w,"vertex"),U=Mm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+N+`
`+U)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||H==="")&&(q=!1);q&&(j.diagnostics={runnable:X,programLog:ne,vertexShader:{log:P,prefix:d},fragmentShader:{log:H,prefix:g}})}r.deleteShader(w),r.deleteShader(R),M=new pl(r,m),T=yw(r,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,fw)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let Nw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dw(e),t.set(e,i)),i}}class Dw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Uw(n,e,t,i,r,s,o){const a=new Pv,l=new Iw,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,W,j,ne){const P=j.fog,H=ne.geometry,X=M.isMeshStandardMaterial?j.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),N=q&&q.mapping===lu?q.image.height:null,U=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Y=z!==void 0?z.length:0;let $=0;H.morphAttributes.position!==void 0&&($=1),H.morphAttributes.normal!==void 0&&($=2),H.morphAttributes.color!==void 0&&($=3);let G,K,ae,fe;if(U){const qt=Qn[U];G=qt.vertexShader,K=qt.fragmentShader}else G=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const pe=n.getRenderTarget(),Le=ne.isInstancedMesh===!0,Ne=ne.isBatchedMesh===!0,Ee=!!M.map,je=!!M.matcap,F=!!q,jt=!!M.aoMap,xe=!!M.lightMap,Ce=!!M.bumpMap,me=!!M.normalMap,ct=!!M.displacementMap,Ue=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,ee=M.clearcoat>0,Q=M.iridescence>0,te=M.sheen>0,ge=M.transmission>0,le=k&&!!M.anisotropyMap,de=ee&&!!M.clearcoatMap,Me=ee&&!!M.clearcoatNormalMap,Fe=ee&&!!M.clearcoatRoughnessMap,Z=Q&&!!M.iridescenceMap,Qe=Q&&!!M.iridescenceThicknessMap,Ve=te&&!!M.sheenColorMap,we=te&&!!M.sheenRoughnessMap,ve=!!M.specularMap,he=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Ke=ge&&!!M.transmissionMap,gt=ge&&!!M.thicknessMap,ke=!!M.gradientMap,ie=!!M.alphaMap,b=M.alphaTest>0,se=!!M.alphaHash,oe=!!M.extensions,Te=!!H.attributes.uv1,ye=!!H.attributes.uv2,tt=!!H.attributes.uv3;let nt=nr;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:c,shaderID:U,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,instancing:Le,instancingColor:Le&&ne.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:It,map:Ee,matcap:je,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:N,aoMap:jt,lightMap:xe,bumpMap:Ce,normalMap:me,displacementMap:h&&ct,emissiveMap:Ue,normalMapObjectSpace:me&&M.normalMapType===LS,normalMapTangentSpace:me&&M.normalMapType===Av,metalnessMap:A,roughnessMap:S,anisotropy:k,anisotropyMap:le,clearcoat:ee,clearcoatMap:de,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:Qe,sheen:te,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:ve,specularColorMap:he,specularIntensityMap:Ie,transmission:ge,transmissionMap:Ke,thicknessMap:gt,gradientMap:ke,opaque:M.transparent===!1&&M.blending===Rs,alphaMap:ie,alphaTest:b,alphaHash:se,combine:M.combine,mapUv:Ee&&x(M.map.channel),aoMapUv:jt&&x(M.aoMap.channel),lightMapUv:xe&&x(M.lightMap.channel),bumpMapUv:Ce&&x(M.bumpMap.channel),normalMapUv:me&&x(M.normalMap.channel),displacementMapUv:ct&&x(M.displacementMap.channel),emissiveMapUv:Ue&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:le&&x(M.anisotropyMap.channel),clearcoatMapUv:de&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(M.sheenRoughnessMap.channel),specularMapUv:ve&&x(M.specularMap.channel),specularColorMapUv:he&&x(M.specularColorMap.channel),specularIntensityMapUv:Ie&&x(M.specularIntensityMap.channel),transmissionMapUv:Ke&&x(M.transmissionMap.channel),thicknessMapUv:gt&&x(M.thicknessMap.channel),alphaMapUv:ie&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:ye,vertexUv3s:tt,pointsUvs:ne.isPoints===!0&&!!H.attributes.uv&&(Ee||ie),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ei,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)T.push(W),T.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=_[M.type];let W;if(T){const j=Qn[T];W=_M.clone(j.uniforms)}else W=M.uniforms;return W}function C(M,T){let W;for(let j=0,ne=u.length;j<ne;j++){const P=u[j];if(P.cacheKey===T){W=P,++W.usedTimes;break}}return W===void 0&&(W=new Pw(n,T,M,s),u.push(W)),W}function w(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:D}}function Fw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ow(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Ow),i.length>1&&i.sort(h||Rm),r.length>1&&r.sort(h||Rm)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cm,n.set(i,[o])):r>=s.length?(o=new Cm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function zw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hw=0;function Vw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gw(n,e){const t=new Bw,i=zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new L);const s=new L,o=new He,a=new He;function l(c,f){let h=0,p=0,_=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,m=0,d=0,g=0,v=0,y=0,C=0,w=0,R=0,D=0,M=0;c.sort(Vw);const T=f===!0?Math.PI:1;for(let j=0,ne=c.length;j<ne;j++){const P=c[j],H=P.color,X=P.intensity,q=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*X*T,p+=H.g*X*T,_+=H.b*X*T;else if(P.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(P.sh.coefficients[U],X);M++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const z=P.shadow,Y=i.get(P);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=U,x++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(H).multiplyScalar(X*T),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,r.spot[d]=U;const z=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,z.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[d]=z.matrix,P.castShadow){const Y=i.get(P);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,r.spotShadow[d]=Y,r.spotShadowMap[d]=N,w++}d++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(H).multiplyScalar(X),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=U,g++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*T),U.distance=P.distance,U.decay=P.decay,P.castShadow){const z=P.shadow,Y=i.get(P);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=P.shadow.matrix,C++}r.point[m]=U,m++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(X*T),U.groundColor.copy(P.groundColor).multiplyScalar(X*T),r.hemi[v]=U,v++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==x||W.pointLength!==m||W.spotLength!==d||W.rectAreaLength!==g||W.hemiLength!==v||W.numDirectionalShadows!==y||W.numPointShadows!==C||W.numSpotShadows!==w||W.numSpotMaps!==R||W.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+R-D,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,W.directionalLength=x,W.pointLength=m,W.spotLength=d,W.rectAreaLength=g,W.hemiLength=v,W.numDirectionalShadows=y,W.numPointShadows=C,W.numSpotShadows=w,W.numSpotMaps=R,W.numLightProbes=M,r.version=Hw++)}function u(c,f){let h=0,p=0,_=0,x=0,m=0;const d=f.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(y.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function bm(n,e){const t=new Gw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Ww(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new bm(n,e),t.set(s,[l])):o>=a.length?(l=new bm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xw extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jw extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
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
}`;function Kw(n,e,t){let i=new Dd;const r=new Xe,s=new Xe,o=new et,a=new Xw({depthPacking:bS}),l=new jw,u={},c=t.maxTextureSize,f={[wi]:en,[en]:wi,[ei]:ei},h=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:qw,fragmentShader:Yw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yn;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let d=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),j=n.state;j.setBlending(tr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ne=d!==pi&&this.type===pi,P=d===pi&&this.type!==pi;for(let H=0,X=w.length;H<X;H++){const q=w[H],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||ne===!0||P===!0){const Y=this.type!==pi?{minFilter:Pt,magFilter:Pt}:{};N.map!==null&&N.map.dispose(),N.map=new kr(r.x,r.y,Y),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const z=N.getViewportCount();for(let Y=0;Y<z;Y++){const $=N.getViewport(Y);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),j.viewport(o),N.updateMatrices(q,Y),i=N.getFrustum(),y(R,D,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===pi&&g(N,D),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,W)};function g(w,R){const D=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,D,p,x,null)}function v(w,R,D,M){let T=null;const W=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)T=W;else if(T=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=T.uuid,ne=R.uuid;let P=u[j];P===void 0&&(P={},u[j]=P);let H=P[ne];H===void 0&&(H=T.clone(),P[ne]=H,R.addEventListener("dispose",C)),T=H}if(T.visible=R.visible,T.wireframe=R.wireframe,M===pi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=n.properties.get(T);j.light=D}return T}function y(w,R,D,M,T){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const ne=e.update(w),P=w.material;if(Array.isArray(P)){const H=ne.groups;for(let X=0,q=H.length;X<q;X++){const N=H[X],U=P[N.materialIndex];if(U&&U.visible){const z=v(w,U,M,T);w.onBeforeShadow(n,w,R,D,ne,z,N),n.renderBufferDirect(D,null,ne,z,w,N),w.onAfterShadow(n,w,R,D,ne,z,N)}}}else if(P.visible){const H=v(w,P,M,T);w.onBeforeShadow(n,w,R,D,ne,H,null),n.renderBufferDirect(D,null,ne,H,w,null),w.onAfterShadow(n,w,R,D,ne,H,null)}}const j=w.children;for(let ne=0,P=j.length;ne<P;ne++)y(j[ne],R,D,M,T)}function C(w){w.target.removeEventListener("dispose",C);for(const D in u){const M=u[D],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function $w(n,e,t){const i=t.isWebGL2;function r(){let b=!1;const se=new et;let oe=null;const Te=new et(0,0,0,0);return{setMask:function(ye){oe!==ye&&!b&&(n.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){b=ye},setClear:function(ye,tt,nt,Rt,qt){qt===!0&&(ye*=Rt,tt*=Rt,nt*=Rt),se.set(ye,tt,nt,Rt),Te.equals(se)===!1&&(n.clearColor(ye,tt,nt,Rt),Te.copy(se))},reset:function(){b=!1,oe=null,Te.set(-1,0,0,0)}}}function s(){let b=!1,se=null,oe=null,Te=null;return{setTest:function(ye){ye?Ne(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ye){se!==ye&&!b&&(n.depthMask(ye),se=ye)},setFunc:function(ye){if(oe!==ye){switch(ye){case nS:n.depthFunc(n.NEVER);break;case iS:n.depthFunc(n.ALWAYS);break;case rS:n.depthFunc(n.LESS);break;case Bl:n.depthFunc(n.LEQUAL);break;case sS:n.depthFunc(n.EQUAL);break;case oS:n.depthFunc(n.GEQUAL);break;case aS:n.depthFunc(n.GREATER);break;case lS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=ye}},setLocked:function(ye){b=ye},setClear:function(ye){Te!==ye&&(n.clearDepth(ye),Te=ye)},reset:function(){b=!1,se=null,oe=null,Te=null}}}function o(){let b=!1,se=null,oe=null,Te=null,ye=null,tt=null,nt=null,Rt=null,qt=null;return{setTest:function(it){b||(it?Ne(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(it){se!==it&&!b&&(n.stencilMask(it),se=it)},setFunc:function(it,Yt,Kn){(oe!==it||Te!==Yt||ye!==Kn)&&(n.stencilFunc(it,Yt,Kn),oe=it,Te=Yt,ye=Kn)},setOp:function(it,Yt,Kn){(tt!==it||nt!==Yt||Rt!==Kn)&&(n.stencilOp(it,Yt,Kn),tt=it,nt=Yt,Rt=Kn)},setLocked:function(it){b=it},setClear:function(it){qt!==it&&(n.clearStencil(it),qt=it)},reset:function(){b=!1,se=null,oe=null,Te=null,ye=null,tt=null,nt=null,Rt=null,qt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,x=[],m=null,d=!1,g=null,v=null,y=null,C=null,w=null,R=null,D=null,M=new Re(0,0,0),T=0,W=!1,j=null,ne=null,P=null,H=null,X=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=U>=2);let Y=null,$={};const G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ae=new et().fromArray(G),fe=new et().fromArray(K);function pe(b,se,oe,Te){const ye=new Uint8Array(4),tt=n.createTexture();n.bindTexture(b,tt),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<oe;nt++)i&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(se+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return tt}const Le={};Le[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(Bl),Ue(!1),A(lp),Ne(n.CULL_FACE),me(tr);function Ne(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function Ee(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function je(b,se){return p[b]!==se?(n.bindFramebuffer(b,se),p[b]=se,i&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(b,se){let oe=x,Te=!1;if(b)if(oe=_.get(se),oe===void 0&&(oe=[],_.set(se,oe)),b.isWebGLMultipleRenderTargets){const ye=b.texture;if(oe.length!==ye.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,nt=ye.length;tt<nt;tt++)oe[tt]=n.COLOR_ATTACHMENT0+tt;oe.length=ye.length,Te=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function jt(b){return m!==b?(n.useProgram(b),m=b,!0):!1}const xe={[Sr]:n.FUNC_ADD,[Hy]:n.FUNC_SUBTRACT,[Vy]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[dp]=n.MIN,xe[hp]=n.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(xe[dp]=b.MIN_EXT,xe[hp]=b.MAX_EXT)}const Ce={[Gy]:n.ZERO,[Wy]:n.ONE,[Xy]:n.SRC_COLOR,[Sf]:n.SRC_ALPHA,[Zy]:n.SRC_ALPHA_SATURATE,[Ky]:n.DST_COLOR,[qy]:n.DST_ALPHA,[jy]:n.ONE_MINUS_SRC_COLOR,[Mf]:n.ONE_MINUS_SRC_ALPHA,[$y]:n.ONE_MINUS_DST_COLOR,[Yy]:n.ONE_MINUS_DST_ALPHA,[Qy]:n.CONSTANT_COLOR,[Jy]:n.ONE_MINUS_CONSTANT_COLOR,[eS]:n.CONSTANT_ALPHA,[tS]:n.ONE_MINUS_CONSTANT_ALPHA};function me(b,se,oe,Te,ye,tt,nt,Rt,qt,it){if(b===tr){d===!0&&(Ee(n.BLEND),d=!1);return}if(d===!1&&(Ne(n.BLEND),d=!0),b!==zy){if(b!==g||it!==W){if((v!==Sr||w!==Sr)&&(n.blendEquation(n.FUNC_ADD),v=Sr,w=Sr),it)switch(b){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case up:n.blendFunc(n.ONE,n.ONE);break;case cp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case up:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,C=null,R=null,D=null,M.set(0,0,0),T=0,g=b,W=it}return}ye=ye||se,tt=tt||oe,nt=nt||Te,(se!==v||ye!==w)&&(n.blendEquationSeparate(xe[se],xe[ye]),v=se,w=ye),(oe!==y||Te!==C||tt!==R||nt!==D)&&(n.blendFuncSeparate(Ce[oe],Ce[Te],Ce[tt],Ce[nt]),y=oe,C=Te,R=tt,D=nt),(Rt.equals(M)===!1||qt!==T)&&(n.blendColor(Rt.r,Rt.g,Rt.b,qt),M.copy(Rt),T=qt),g=b,W=!1}function ct(b,se){b.side===ei?Ee(n.CULL_FACE):Ne(n.CULL_FACE);let oe=b.side===en;se&&(oe=!oe),Ue(oe),b.blending===Rs&&b.transparent===!1?me(tr):me(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Te=b.stencilWrite;u.setTest(Te),Te&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),k(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(b){j!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),j=b)}function A(b){b!==Oy?(Ne(n.CULL_FACE),b!==ne&&(b===lp?n.cullFace(n.BACK):b===ky?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),ne=b}function S(b){b!==P&&(N&&n.lineWidth(b),P=b)}function k(b,se,oe){b?(Ne(n.POLYGON_OFFSET_FILL),(H!==se||X!==oe)&&(n.polygonOffset(se,oe),H=se,X=oe)):Ee(n.POLYGON_OFFSET_FILL)}function ee(b){b?Ne(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Q(b){b===void 0&&(b=n.TEXTURE0+q-1),Y!==b&&(n.activeTexture(b),Y=b)}function te(b,se,oe){oe===void 0&&(Y===null?oe=n.TEXTURE0+q-1:oe=Y);let Te=$[oe];Te===void 0&&(Te={type:void 0,texture:void 0},$[oe]=Te),(Te.type!==b||Te.texture!==se)&&(Y!==oe&&(n.activeTexture(oe),Y=oe),n.bindTexture(b,se||Le[b]),Te.type=b,Te.texture=se)}function ge(){const b=$[Y];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){ae.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ae.copy(b))}function Ke(b){fe.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),fe.copy(b))}function gt(b,se){let oe=f.get(se);oe===void 0&&(oe=new WeakMap,f.set(se,oe));let Te=oe.get(b);Te===void 0&&(Te=n.getUniformBlockIndex(se,b.name),oe.set(b,Te))}function ke(b,se){const Te=f.get(se).get(b);c.get(se)!==Te&&(n.uniformBlockBinding(se,Te,b.__bindingPointIndex),c.set(se,Te))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Y=null,$={},p={},_=new WeakMap,x=[],m=null,d=!1,g=null,v=null,y=null,C=null,w=null,R=null,D=null,M=new Re(0,0,0),T=0,W=!1,j=null,ne=null,P=null,H=null,X=null,ae.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Ee,bindFramebuffer:je,drawBuffers:F,useProgram:jt,setBlending:me,setMaterial:ct,setFlipSided:Ue,setCullFace:A,setLineWidth:S,setPolygonOffset:k,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:ve,texImage3D:he,updateUBOMapping:gt,uniformBlockBinding:ke,texStorage2D:Ve,texStorage3D:we,texSubImage2D:Me,texSubImage3D:Fe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Qe,scissor:Ie,viewport:Ke,reset:ie}}function Zw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):ea("canvas")}function x(A,S,k,ee){let Q=1;if((A.width>ee||A.height>ee)&&(Q=ee/Math.max(A.width,A.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=S?Xl:Math.floor,ge=te(Q*A.width),le=te(Q*A.height);f===void 0&&(f=_(ge,le));const de=k?_(ge,le):f;return de.width=ge,de.height=le,de.getContext("2d").drawImage(A,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+le+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return bf(A.width)&&bf(A.height)}function d(A){return a?!1:A.wrapS!==Rn||A.wrapT!==Rn||A.minFilter!==Pt&&A.minFilter!==on}function g(A,S){return A.generateMipmaps&&S&&A.minFilter!==Pt&&A.minFilter!==on}function v(A){n.generateMipmap(A)}function y(A,S,k,ee,Q=!1){if(a===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=S;if(S===n.RED&&(k===n.FLOAT&&(te=n.R32F),k===n.HALF_FLOAT&&(te=n.R16F),k===n.UNSIGNED_BYTE&&(te=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.R8UI),k===n.UNSIGNED_SHORT&&(te=n.R16UI),k===n.UNSIGNED_INT&&(te=n.R32UI),k===n.BYTE&&(te=n.R8I),k===n.SHORT&&(te=n.R16I),k===n.INT&&(te=n.R32I)),S===n.RG&&(k===n.FLOAT&&(te=n.RG32F),k===n.HALF_FLOAT&&(te=n.RG16F),k===n.UNSIGNED_BYTE&&(te=n.RG8)),S===n.RGBA){const ge=Q?Hl:Ye.getTransfer(ee);k===n.FLOAT&&(te=n.RGBA32F),k===n.HALF_FLOAT&&(te=n.RGBA16F),k===n.UNSIGNED_BYTE&&(te=ge===ot?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(A,S,k){return g(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Pt||A===Af||A===hl?n.NEAREST:n.LINEAR}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S),S.isVideoTexture&&c.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),W(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,ee=h.get(k);if(ee){const Q=ee[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(ee).length===0&&h.delete(k)}i.remove(A)}function T(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const k=A.source,ee=h.get(k);delete ee[S.__cacheKey],o.memory.textures--}function W(A){const S=A.texture,k=i.get(A),ee=i.get(S);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let te=0;te<k.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(k.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)n.deleteFramebuffer(k.__webglFramebuffer[Q]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,te=S.length;Q<te;Q++){const ge=i.get(S[Q]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(S[Q])}i.remove(S),i.remove(A)}let j=0;function ne(){j=0}function P(){const A=j;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),j+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const k=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,A,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function q(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function N(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function U(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){fe(k,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const z={[Bs]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},Y={[Pt]:n.NEAREST,[Af]:n.NEAREST_MIPMAP_NEAREST,[hl]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[mv]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},$={[PS]:n.NEVER,[OS]:n.ALWAYS,[NS]:n.LESS,[wv]:n.LEQUAL,[IS]:n.EQUAL,[FS]:n.GEQUAL,[DS]:n.GREATER,[US]:n.NOTEQUAL};function G(A,S,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,z[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,z[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,z[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Y[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Y[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Rn||S.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Pt&&S.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Pt||S.minFilter!==hl&&S.minFilter!==Or||S.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const ee=S.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=H(S);if(te!==A.__cacheKey){Q[te]===void 0&&(Q[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[te].usedTimes++;const ge=Q[A.__cacheKey];ge!==void 0&&(Q[A.__cacheKey].usedTimes--,ge.usedTimes===0&&T(S)),A.__cacheKey=te,A.__webglTexture=Q[te].texture}return k}function ae(A,S,k){let ee=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=n.TEXTURE_3D);const Q=K(A,S),te=S.source;t.bindTexture(ee,A.__webglTexture,n.TEXTURE0+k);const ge=i.get(te);if(te.version!==ge.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const le=Ye.getPrimaries(Ye.workingColorSpace),de=S.colorSpace===bn?null:Ye.getPrimaries(S.colorSpace),Me=S.colorSpace===bn||le===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Fe=d(S)&&m(S.image)===!1;let Z=x(S.image,Fe,!1,r.maxTextureSize);Z=Ue(S,Z);const Qe=m(Z)||a,Ve=s.convert(S.format,S.colorSpace);let we=s.convert(S.type),ve=y(S.internalFormat,Ve,we,S.colorSpace,S.isVideoTexture);G(ee,S,Qe);let he;const Ie=S.mipmaps,Ke=a&&S.isVideoTexture!==!0&&ve!==Mv,gt=ge.__version===void 0||Q===!0,ke=C(S,Z,Qe);if(S.isDepthTexture)ve=n.DEPTH_COMPONENT,a?S.type===xi?ve=n.DEPTH_COMPONENT32F:S.type===Wi?ve=n.DEPTH_COMPONENT24:S.type===br?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:S.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Lr&&ve===n.DEPTH_COMPONENT&&S.type!==Pd&&S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wi,we=s.convert(S.type)),S.format===zs&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=br,we=s.convert(S.type))),gt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ve,Z.width,Z.height,0,Ve,we,null));else if(S.isDataTexture)if(Ie.length>0&&Qe){Ke&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,ve,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)he=Ie[ie],Ke?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,Ve,we,he.data):t.texImage2D(n.TEXTURE_2D,ie,ve,he.width,he.height,0,Ve,we,he.data);S.generateMipmaps=!1}else Ke?(gt&&t.texStorage2D(n.TEXTURE_2D,ke,ve,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Ve,we,Z.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Z.width,Z.height,0,Ve,we,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ve,Ie[0].width,Ie[0].height,Z.depth);for(let ie=0,b=Ie.length;ie<b;ie++)he=Ie[ie],S.format!==Cn?Ve!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,Ve,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ve,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,Z.depth,Ve,we,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ve,he.width,he.height,Z.depth,0,Ve,we,he.data)}else{Ke&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,ve,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)he=Ie[ie],S.format!==Cn?Ve!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,Ve,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,he.width,he.height,Ve,we,he.data):t.texImage2D(n.TEXTURE_2D,ie,ve,he.width,he.height,0,Ve,we,he.data)}else if(S.isDataArrayTexture)Ke?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ve,we,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,Ve,we,Z.data);else if(S.isData3DTexture)Ke?(gt&&t.texStorage3D(n.TEXTURE_3D,ke,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ve,we,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,Ve,we,Z.data);else if(S.isFramebufferTexture){if(gt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ke,ve,Z.width,Z.height);else{let ie=Z.width,b=Z.height;for(let se=0;se<ke;se++)t.texImage2D(n.TEXTURE_2D,se,ve,ie,b,0,Ve,we,null),ie>>=1,b>>=1}}else if(Ie.length>0&&Qe){Ke&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,ve,Ie[0].width,Ie[0].height);for(let ie=0,b=Ie.length;ie<b;ie++)he=Ie[ie],Ke?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ve,we,he):t.texImage2D(n.TEXTURE_2D,ie,ve,Ve,we,he);S.generateMipmaps=!1}else Ke?(gt&&t.texStorage2D(n.TEXTURE_2D,ke,ve,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,we,Z)):t.texImage2D(n.TEXTURE_2D,0,ve,Ve,we,Z);g(S,Qe)&&v(ee),ge.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,k){if(S.image.length!==6)return;const ee=K(A,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const te=i.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const ge=Ye.getPrimaries(Ye.workingColorSpace),le=S.colorSpace===bn?null:Ye.getPrimaries(S.colorSpace),de=S.colorSpace===bn||ge===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!Me&&!Fe?Z[ie]=x(S.image[ie],!1,!0,r.maxCubemapSize):Z[ie]=Fe?S.image[ie].image:S.image[ie],Z[ie]=Ue(S,Z[ie]);const Qe=Z[0],Ve=m(Qe)||a,we=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),he=y(S.internalFormat,we,ve,S.colorSpace),Ie=a&&S.isVideoTexture!==!0,Ke=te.__version===void 0||ee===!0;let gt=C(S,Qe,Ve);G(n.TEXTURE_CUBE_MAP,S,Ve);let ke;if(Me){Ie&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,he,Qe.width,Qe.height);for(let ie=0;ie<6;ie++){ke=Z[ie].mipmaps;for(let b=0;b<ke.length;b++){const se=ke[b];S.format!==Cn?we!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,we,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,se.width,se.height,we,ve,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,he,se.width,se.height,0,we,ve,se.data)}}}else{ke=S.mipmaps,Ie&&Ke&&(ke.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,he,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(Fe){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,we,ve,Z[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,Z[ie].width,Z[ie].height,0,we,ve,Z[ie].data);for(let b=0;b<ke.length;b++){const oe=ke[b].image[ie].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,oe.width,oe.height,we,ve,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,he,oe.width,oe.height,0,we,ve,oe.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,ve,Z[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,he,we,ve,Z[ie]);for(let b=0;b<ke.length;b++){const se=ke[b];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,we,ve,se.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,he,we,ve,se.image[ie])}}}g(S,Ve)&&v(n.TEXTURE_CUBE_MAP),te.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,k,ee,Q,te){const ge=s.convert(k.format,k.colorSpace),le=s.convert(k.type),de=y(k.internalFormat,ge,le,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>te),Z=Math.max(1,S.height>>te);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,de,Fe,Z,S.depth,0,ge,le,null):t.texImage2D(Q,te,de,Fe,Z,0,ge,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Q,i.get(k).__webglTexture,0,Ce(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,Q,i.get(k).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(A,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||me(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xi?ee=n.DEPTH_COMPONENT32F:Q.type===Wi&&(ee=n.DEPTH_COMPONENT24));const te=Ce(S);me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Ce(S);k&&me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],ge=s.convert(te.format,te.colorSpace),le=s.convert(te.type),de=y(te.internalFormat,ge,le,te.colorSpace),Me=Ce(S);k&&me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,de,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ee=i.get(S.depthTexture).__webglTexture,Q=Ce(S);if(S.depthTexture.format===Lr)me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===zs)me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=n.createRenderbuffer(),Le(S.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Le(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(A,S,k){const ee=i.get(A);S!==void 0&&pe(ee.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ee(A)}function F(A){const S=A.texture,k=i.get(A),ee=i.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=S.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,ge=m(A)||a;if(Q){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)k.__webglFramebuffer[le][de]=n.createFramebuffer()}else k.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)k.__webglFramebuffer[le]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const le=A.texture;for(let de=0,Me=le.length;de<Me;de++){const Fe=i.get(le[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&me(A)===!1){const le=te?S:[S];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Me=le[de];k.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Fe=s.convert(Me.format,Me.colorSpace),Z=s.convert(Me.type),Qe=y(Me.internalFormat,Fe,Z,Me.colorSpace,A.isXRRenderTarget===!0),Ve=Ce(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Qe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,k.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),G(n.TEXTURE_CUBE_MAP,S,ge);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(k.__webglFramebuffer[le][de],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else pe(k.__webglFramebuffer[le],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=A.texture;for(let de=0,Me=le.length;de<Me;de++){const Fe=le[de],Z=i.get(Fe);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),G(n.TEXTURE_2D,Fe,ge),pe(k.__webglFramebuffer,A,Fe,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),g(Fe,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),G(le,S,ge),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(k.__webglFramebuffer[de],A,S,n.COLOR_ATTACHMENT0,le,de);else pe(k.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,le,0);g(S,ge)&&v(le),t.unbindTexture()}A.depthBuffer&&Ee(A)}function jt(A){const S=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,Q=k.length;ee<Q;ee++){const te=k[ee];if(g(te,S)){const ge=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(te).__webglTexture;t.bindTexture(ge,le),v(ge),t.unbindTexture()}}}function xe(A){if(a&&A.samples>0&&me(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,ee=A.height;let Q=n.COLOR_BUFFER_BIT;const te=[],ge=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(A),de=A.isWebGLMultipleRenderTargets===!0;if(de)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){te.push(n.COLOR_ATTACHMENT0+Me),A.depthBuffer&&te.push(ge);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Me]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),de){const Z=i.get(S[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,k,ee,0,0,k,ee,Q,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,le.__webglColorRenderbuffer[Me]);const Fe=i.get(S[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(r.maxSamples,A.samples)}function me(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(A){const S=o.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function Ue(A,S){const k=A.colorSpace,ee=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Cf||k!==It&&k!==bn&&(Ye.getTransfer(k)===ot?a===!1?e.has("EXT_sRGB")===!0&&ee===Cn?(A.format=Cf,A.minFilter=on,A.generateMipmaps=!1):S=Cv.sRGBToLinear(S):(ee!==Cn||Q!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=je,this.setupRenderTarget=F,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=me}function Qw(n,e,t){const i=t.isWebGL2;function r(s,o=bn){let a;const l=Ye.getTransfer(o);if(s===ir)return n.UNSIGNED_BYTE;if(s===_v)return n.UNSIGNED_SHORT_4_4_4_4;if(s===vv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===vS)return n.BYTE;if(s===xS)return n.SHORT;if(s===Pd)return n.UNSIGNED_SHORT;if(s===gv)return n.INT;if(s===Wi)return n.UNSIGNED_INT;if(s===xi)return n.FLOAT;if(s===Qo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yS)return n.ALPHA;if(s===Cn)return n.RGBA;if(s===SS)return n.LUMINANCE;if(s===MS)return n.LUMINANCE_ALPHA;if(s===Lr)return n.DEPTH_COMPONENT;if(s===zs)return n.DEPTH_STENCIL;if(s===Cf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ES)return n.RED;if(s===xv)return n.RED_INTEGER;if(s===TS)return n.RG;if(s===yv)return n.RG_INTEGER;if(s===Sv)return n.RGBA_INTEGER;if(s===Wu||s===Xu||s===ju||s===qu)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===_p||s===vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_p)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xp||s===yp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xp)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sp||s===Mp||s===Ep||s===Tp||s===Ap||s===wp||s===Rp||s===Cp||s===bp||s===Lp||s===Pp||s===Np||s===Ip||s===Dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ep)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ap)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Np)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yu||s===Up||s===Fp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yu)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===AS||s===Op||s===kp||s===Bp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Op)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Jw extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wr extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class t1 extends Ks{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const x=t.getContextAttributes();let m=null,d=null;const g=[],v=[],y=new Xe;let C=null;const w=new Qt;w.layers.enable(1),w.viewport=new et;const R=new Qt;R.layers.enable(2),R.viewport=new et;const D=[w,R],M=new Jw;M.layers.enable(1),M.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=g[G];return K===void 0&&(K=new vc,g[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=g[G];return K===void 0&&(K=new vc,g[G]=K),K.getGripSpace()},this.getHand=function(G){let K=g[G];return K===void 0&&(K=new vc,g[G]=K),K.getHandSpace()};function j(G){const K=v.indexOf(G.inputSource);if(K===-1)return;const ae=g[K];ae!==void 0&&(ae.update(G.inputSource,G.frame,u||o),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function ne(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",P);for(let G=0;G<g.length;G++){const K=v[G];K!==null&&(v[G]=null,g[G].disconnect(K))}T=null,W=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new kr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ae=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?zs:Lr,ae=x.stencil?br:Wi);const pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new kr(h.textureWidth,h.textureHeight,{format:Cn,type:ir,depthTexture:new Bv(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(d);Le.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(G){for(let K=0;K<G.removed.length;K++){const ae=G.removed[K],fe=v.indexOf(ae);fe>=0&&(v[fe]=null,g[fe].disconnect(ae))}for(let K=0;K<G.added.length;K++){const ae=G.added[K];let fe=v.indexOf(ae);if(fe===-1){for(let Le=0;Le<g.length;Le++)if(Le>=v.length){v.push(ae),fe=Le;break}else if(v[Le]===null){v[Le]=ae,fe=Le;break}if(fe===-1)break}const pe=g[fe];pe&&pe.connect(ae)}}const H=new L,X=new L;function q(G,K,ae){H.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const fe=H.distanceTo(X),pe=K.projectionMatrix.elements,Le=ae.projectionMatrix.elements,Ne=pe[14]/(pe[10]-1),Ee=pe[14]/(pe[10]+1),je=(pe[9]+1)/pe[5],F=(pe[9]-1)/pe[5],jt=(pe[8]-1)/pe[0],xe=(Le[8]+1)/Le[0],Ce=Ne*jt,me=Ne*xe,ct=fe/(-jt+xe),Ue=ct*-jt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ue),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const A=Ne+ct,S=Ee+ct,k=Ce-Ue,ee=me+(fe-Ue),Q=je*Ee/S*A,te=F*Ee/S*A;G.projectionMatrix.makePerspective(k,ee,Q,te,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function N(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.near=R.near=w.near=G.near,M.far=R.far=w.far=G.far,(T!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,W=M.far);const K=G.parent,ae=M.cameras;N(M,K);for(let fe=0;fe<ae.length;fe++)N(ae[fe],K);ae.length===2?q(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),U(G,M,K)};function U(G,K,ae){ae===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let z=null;function Y(G,K){if(c=K.getViewerPose(u||o),_=K,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let fe=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let pe=0;pe<ae.length;pe++){const Le=ae[pe];let Ne=null;if(p!==null)Ne=p.getViewport(Le);else{const je=f.getViewSubImage(h,Le);Ne=je.viewport,pe===0&&(e.setRenderTargetTextures(d,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Ee=D[pe];Ee===void 0&&(Ee=new Qt,Ee.layers.enable(pe),Ee.viewport=new et,D[pe]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),pe===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ee)}}for(let ae=0;ae<g.length;ae++){const fe=v[ae],pe=g[ae];fe!==null&&pe!==void 0&&pe.update(fe,K,u||o)}z&&z(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const $=new kv;$.setAnimationLoop(Y),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}function n1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Uv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(_(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function c(g){const v=f();g.__bindingPointIndex=v;const y=n.createBuffer(),C=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,C=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,R=y.length;w<R;w++){const D=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,T=D.length;M<T;M++){const W=D[M];if(p(W,w,M,C)===!0){const j=W.__offset,ne=Array.isArray(W.value)?W.value:[W.value];let P=0;for(let H=0;H<ne.length;H++){const X=ne[H],q=x(X);typeof X=="number"||typeof X=="boolean"?(W.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,j+P,W.__data)):X.isMatrix3?(W.__data[0]=X.elements[0],W.__data[1]=X.elements[1],W.__data[2]=X.elements[2],W.__data[3]=0,W.__data[4]=X.elements[3],W.__data[5]=X.elements[4],W.__data[6]=X.elements[5],W.__data[7]=0,W.__data[8]=X.elements[6],W.__data[9]=X.elements[7],W.__data[10]=X.elements[8],W.__data[11]=0):(X.toArray(W.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,y,C){const w=g.value,R=v+"_"+y;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const D=C[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return C[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(g){const v=g.uniforms;let y=0;const C=16;for(let R=0,D=v.length;R<D;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,W=M.length;T<W;T++){const j=M[T],ne=Array.isArray(j.value)?j.value:[j.value];for(let P=0,H=ne.length;P<H;P++){const X=ne[P],q=x(X),N=y%C;N!==0&&C-N<q.boundary&&(y+=C-N),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=q.storage}}}const w=y%C;return w>0&&(y+=C-w),g.__size=y,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Xv{constructor(e={}){const{canvas:t=JS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const v=this;let y=!1,C=0,w=0,R=null,D=-1,M=null;const T=new et,W=new et;let j=null;const ne=new Re(0);let P=0,H=t.width,X=t.height,q=1,N=null,U=null;const z=new et(0,0,H,X),Y=new et(0,0,H,X);let $=!1;const G=new Dd;let K=!1,ae=!1,fe=null;const pe=new He,Le=new Xe,Ne=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return R===null?q:1}let F=i;function jt(E,I){for(let B=0;B<E.length;B++){const V=E[B],O=t.getContext(V,I);if(O!==null)return O}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ld}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",se,!1),F===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),F=jt(I,E),F===null)throw jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Ce,me,ct,Ue,A,S,k,ee,Q,te,ge,le,de,Me,Fe,Z,Qe,Ve,we,ve,he,Ie,Ke;function gt(){xe=new hA(F),Ce=new aA(F,xe,e),xe.init(Ce),he=new Qw(F,xe,Ce),me=new $w(F,xe,Ce),ct=new gA(F),Ue=new Fw,A=new Zw(F,xe,me,Ue,Ce,he,ct),S=new uA(v),k=new dA(v),ee=new TM(F,Ce),Ie=new sA(F,xe,ee,Ce),Q=new pA(F,ee,ct,Ie),te=new yA(F,Q,ee,ct),Ve=new xA(F,Ce,A),Fe=new lA(Ue),ge=new Uw(v,S,k,xe,Ce,Ie,Fe),le=new n1(v,Ue),de=new kw,Me=new Ww(xe,Ce),Qe=new rA(v,S,k,me,te,h,l),Z=new Kw(v,te,Ce),Ke=new i1(F,ct,Ce,me),we=new oA(F,xe,ct,Ce),ve=new mA(F,xe,ct,Ce),ct.programs=ge.programs,v.capabilities=Ce,v.extensions=xe,v.properties=Ue,v.renderLists=de,v.shadowMap=Z,v.state=me,v.info=ct}gt();const ke=new t1(v,F);this.xr=ke,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(H,X,!1))},this.getSize=function(E){return E.set(H,X)},this.setSize=function(E,I,B=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,X=I,t.width=Math.floor(E*q),t.height=Math.floor(I*q),B===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(H*q,X*q).floor()},this.setDrawingBufferSize=function(E,I,B){H=E,X=I,q=B,t.width=Math.floor(E*B),t.height=Math.floor(I*B),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,I,B,V){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,I,B,V),me.viewport(T.copy(z).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,I,B,V){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,I,B,V),me.scissor(W.copy(Y).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(E){me.setScissorTest($=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(E=!0,I=!0,B=!0){let V=0;if(E){let O=!1;if(R!==null){const ue=R.texture.format;O=ue===Sv||ue===yv||ue===xv}if(O){const ue=R.texture.type,_e=ue===ir||ue===Wi||ue===Pd||ue===br||ue===_v||ue===vv,Se=Qe.getClearColor(),Ae=Qe.getClearAlpha(),Oe=Se.r,be=Se.g,Pe=Se.b;_e?(p[0]=Oe,p[1]=be,p[2]=Pe,p[3]=Ae,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Oe,_[1]=be,_[2]=Pe,_[3]=Ae,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}I&&(V|=F.DEPTH_BUFFER_BIT),B&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),Me.dispose(),Ue.dispose(),S.dispose(),k.dispose(),te.dispose(),Ie.dispose(),Ke.dispose(),ge.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",qt),ke.removeEventListener("sessionend",it),fe&&(fe.dispose(),fe=null),Yt.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=ct.autoReset,I=Z.enabled,B=Z.autoUpdate,V=Z.needsUpdate,O=Z.type;gt(),ct.autoReset=E,Z.enabled=I,Z.autoUpdate=B,Z.needsUpdate=V,Z.type=O}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const I=E.target;I.removeEventListener("dispose",oe),Te(I)}function Te(E){ye(E),Ue.remove(E)}function ye(E){const I=Ue.get(E).programs;I!==void 0&&(I.forEach(function(B){ge.releaseProgram(B)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,B,V,O,ue){I===null&&(I=Ee);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Se=i0(E,I,B,V,O);me.setMaterial(V,_e);let Ae=B.index,Oe=1;if(V.wireframe===!0){if(Ae=Q.getWireframeAttribute(B),Ae===void 0)return;Oe=2}const be=B.drawRange,Pe=B.attributes.position;let xt=be.start*Oe,fn=(be.start+be.count)*Oe;ue!==null&&(xt=Math.max(xt,ue.start*Oe),fn=Math.min(fn,(ue.start+ue.count)*Oe)),Ae!==null?(xt=Math.max(xt,0),fn=Math.min(fn,Ae.count)):Pe!=null&&(xt=Math.max(xt,0),fn=Math.min(fn,Pe.count));const Ct=fn-xt;if(Ct<0||Ct===1/0)return;Ie.setup(O,V,Se,B,Ae);let ai,ft=we;if(Ae!==null&&(ai=ee.get(Ae),ft=ve,ft.setIndex(ai)),O.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*je()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(O.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),me.setLineWidth(Be*je()),O.isLineSegments?ft.setMode(F.LINES):O.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else O.isPoints?ft.setMode(F.POINTS):O.isSprite&&ft.setMode(F.TRIANGLES);if(O.isBatchedMesh)ft.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ft.renderInstances(xt,Ct,O.count);else if(B.isInstancedBufferGeometry){const Be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pu=Math.min(B.instanceCount,Be);ft.renderInstances(xt,Ct,pu)}else ft.render(xt,Ct)};function tt(E,I,B){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,ua(E,I,B),E.side=wi,E.needsUpdate=!0,ua(E,I,B),E.side=ei):ua(E,I,B)}this.compile=function(E,I,B=null){B===null&&(B=E),m=Me.get(B),m.init(),g.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==B&&E.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);const V=new Set;return E.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Se=ue[_e];tt(Se,B,O),V.add(Se)}else tt(ue,B,O),V.add(ue)}),g.pop(),m=null,V},this.compileAsync=function(E,I,B=null){const V=this.compile(E,I,B);return new Promise(O=>{function ue(){if(V.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){O(E);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nt=null;function Rt(E){nt&&nt(E)}function qt(){Yt.stop()}function it(){Yt.start()}const Yt=new kv;Yt.setAnimationLoop(Rt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(E){nt=E,ke.setAnimationLoop(E),E===null?Yt.stop():Yt.start()},ke.addEventListener("sessionstart",qt),ke.addEventListener("sessionend",it),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,R),m=Me.get(E,g.length),m.init(),g.push(m),pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ae),x=de.get(E,d.length),x.init(),d.push(x),Kn(E,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(N,U),this.info.render.frame++,K===!0&&Fe.beginShadows();const B=m.state.shadowsArray;if(Z.render(B,E,I),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(x,E),m.setupLights(v._useLegacyLights),I.isArrayCamera){const V=I.cameras;for(let O=0,ue=V.length;O<ue;O++){const _e=V[O];jd(x,E,_e,_e.viewport)}}else jd(x,E,I);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,I),Ie.resetDefaultState(),D=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Kn(E,I,B,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){V&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const _e=te.update(E),Se=E.material;Se.visible&&x.push(E,_e,Se,B,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const _e=te.update(E),Se=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(Se)){const Ae=_e.groups;for(let Oe=0,be=Ae.length;Oe<be;Oe++){const Pe=Ae[Oe],xt=Se[Pe.materialIndex];xt&&xt.visible&&x.push(E,_e,xt,B,Ne.z,Pe)}}else Se.visible&&x.push(E,_e,Se,B,Ne.z,null)}}const ue=E.children;for(let _e=0,Se=ue.length;_e<Se;_e++)Kn(ue[_e],I,B,V)}function jd(E,I,B,V){const O=E.opaque,ue=E.transmissive,_e=E.transparent;m.setupLightsView(B),K===!0&&Fe.setGlobalState(v.clippingPlanes,B),ue.length>0&&n0(O,ue,I,B),V&&me.viewport(T.copy(V)),O.length>0&&la(O,I,B),ue.length>0&&la(ue,I,B),_e.length>0&&la(_e,I,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function n0(E,I,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ue=Ce.isWebGL2;fe===null&&(fe=new kr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Qo:ir,minFilter:Or,samples:ue?4:0})),v.getDrawingBufferSize(Le),ue?fe.setSize(Le.x,Le.y):fe.setSize(Xl(Le.x),Xl(Le.y));const _e=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(ne),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Se=v.toneMapping;v.toneMapping=nr,la(E,B,V),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe);let Ae=!1;for(let Oe=0,be=I.length;Oe<be;Oe++){const Pe=I[Oe],xt=Pe.object,fn=Pe.geometry,Ct=Pe.material,ai=Pe.group;if(Ct.side===ei&&xt.layers.test(V.layers)){const ft=Ct.side;Ct.side=en,Ct.needsUpdate=!0,qd(xt,B,V,fn,Ct,ai),Ct.side=ft,Ct.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe)),v.setRenderTarget(_e),v.setClearColor(ne,P),v.toneMapping=Se}function la(E,I,B){const V=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ue=E.length;O<ue;O++){const _e=E[O],Se=_e.object,Ae=_e.geometry,Oe=V===null?_e.material:V,be=_e.group;Se.layers.test(B.layers)&&qd(Se,I,B,Ae,Oe,be)}}function qd(E,I,B,V,O,ue){E.onBeforeRender(v,I,B,V,O,ue),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,I,B,V,E,ue),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,v.renderBufferDirect(B,I,V,O,E,ue),O.side=wi,O.needsUpdate=!0,v.renderBufferDirect(B,I,V,O,E,ue),O.side=ei):v.renderBufferDirect(B,I,V,O,E,ue),E.onAfterRender(v,I,B,V,O,ue)}function ua(E,I,B){I.isScene!==!0&&(I=Ee);const V=Ue.get(E),O=m.state.lights,ue=m.state.shadowsArray,_e=O.state.version,Se=ge.getParameters(E,O.state,ue,I,B),Ae=ge.getProgramCacheKey(Se);let Oe=V.programs;V.environment=E.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||V.environment),Oe===void 0&&(E.addEventListener("dispose",oe),Oe=new Map,V.programs=Oe);let be=Oe.get(Ae);if(be!==void 0){if(V.currentProgram===be&&V.lightsStateVersion===_e)return Kd(E,Se),be}else Se.uniforms=ge.getUniforms(E),E.onBuild(B,Se,v),E.onBeforeCompile(Se,v),be=ge.acquireProgram(Se,Ae),Oe.set(Ae,be),V.uniforms=Se.uniforms;const Pe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),Kd(E,Se),V.needsLights=s0(E),V.lightsStateVersion=_e,V.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=be,V.uniformsList=null,be}function Yd(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=pl.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Kd(E,I){const B=Ue.get(E);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function i0(E,I,B,V,O){I.isScene!==!0&&(I=Ee),A.resetTextureUnits();const ue=I.fog,_e=V.isMeshStandardMaterial?I.environment:null,Se=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:It,Ae=(V.isMeshStandardMaterial?k:S).get(V.envMap||_e),Oe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,be=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!B.morphAttributes.position,xt=!!B.morphAttributes.normal,fn=!!B.morphAttributes.color;let Ct=nr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const ai=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=ai!==void 0?ai.length:0,Be=Ue.get(V),pu=m.state.lights;if(K===!0&&(ae===!0||E!==M)){const Sn=E===M&&V.id===D;Fe.setState(V,E,Sn)}let _t=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==pu.state.version||Be.outputColorSpace!==Se||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||Be.envMap!==Ae||V.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Fe.numPlanes||Be.numIntersection!==Fe.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==be||Be.morphTargets!==Pe||Be.morphNormals!==xt||Be.morphColors!==fn||Be.toneMapping!==Ct||Ce.isWebGL2===!0&&Be.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,Be.__version=V.version);let cr=Be.currentProgram;_t===!0&&(cr=ua(V,I,O));let $d=!1,eo=!1,mu=!1;const kt=cr.getUniforms(),fr=Be.uniforms;if(me.useProgram(cr.program)&&($d=!0,eo=!0,mu=!0),V.id!==D&&(D=V.id,eo=!0),$d||M!==E){kt.setValue(F,"projectionMatrix",E.projectionMatrix),kt.setValue(F,"viewMatrix",E.matrixWorldInverse);const Sn=kt.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,Ne.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&kt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,eo=!0,mu=!0)}if(O.isSkinnedMesh){kt.setOptional(F,O,"bindMatrix"),kt.setOptional(F,O,"bindMatrixInverse");const Sn=O.skeleton;Sn&&(Ce.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),kt.setValue(F,"boneTexture",Sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(kt.setOptional(F,O,"batchingTexture"),kt.setValue(F,"batchingTexture",O._matricesTexture,A));const gu=B.morphAttributes;if((gu.position!==void 0||gu.normal!==void 0||gu.color!==void 0&&Ce.isWebGL2===!0)&&Ve.update(O,B,cr),(eo||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,kt.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(fr.envMap.value=Ae,fr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),eo&&(kt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&r0(fr,mu),ue&&V.fog===!0&&le.refreshFogUniforms(fr,ue),le.refreshMaterialUniforms(fr,V,q,X,fe),pl.upload(F,Yd(Be),fr,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pl.upload(F,Yd(Be),fr,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&kt.setValue(F,"center",O.center),kt.setValue(F,"modelViewMatrix",O.modelViewMatrix),kt.setValue(F,"normalMatrix",O.normalMatrix),kt.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let _u=0,o0=Sn.length;_u<o0;_u++)if(Ce.isWebGL2){const Zd=Sn[_u];Ke.update(Zd,cr),Ke.bind(Zd,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function r0(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function s0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,I,B){Ue.get(E.texture).__webglTexture=I,Ue.get(E.depthTexture).__webglTexture=B;const V=Ue.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const B=Ue.get(E);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,B=0){R=E,C=I,w=B;let V=!0,O=null,ue=!1,_e=!1;if(E){const Ae=Ue.get(E);Ae.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Ae.__webglFramebuffer===void 0?A.setupRenderTarget(E):Ae.__hasExternalTextures&&A.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const be=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[I])?O=be[I][B]:O=be[I],ue=!0):Ce.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?O=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[B]:O=be,T.copy(E.viewport),W.copy(E.scissor),j=E.scissorTest}else T.copy(z).multiplyScalar(q).floor(),W.copy(Y).multiplyScalar(q).floor(),j=$;if(me.bindFramebuffer(F.FRAMEBUFFER,O)&&Ce.drawBuffers&&V&&me.drawBuffers(E,O),me.viewport(T),me.scissor(W),me.setScissorTest(j),ue){const Ae=Ue.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,B)}else if(_e){const Ae=Ue.get(E.texture),Oe=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Oe)}D=-1},this.readRenderTargetPixels=function(E,I,B,V,O,ue,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){me.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Ae=E.texture,Oe=Ae.format,be=Ae.type;if(Oe!==Cn&&he.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=be===Qo&&(xe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&xe.has("EXT_color_buffer_float"));if(be!==ir&&he.convert(be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===xi&&(Ce.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&B>=0&&B<=E.height-O&&F.readPixels(I,B,V,O,he.convert(Oe),he.convert(be),ue)}finally{const Ae=R!==null?Ue.get(R).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,I,B=0){const V=Math.pow(2,-B),O=Math.floor(I.image.width*V),ue=Math.floor(I.image.height*V);A.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,E.x,E.y,O,ue),me.unbindTexture()},this.copyTextureToTexture=function(E,I,B,V=0){const O=I.image.width,ue=I.image.height,_e=he.convert(B.format),Se=he.convert(B.type);A.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,O,ue,_e,Se,I.image.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,_e,I.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,_e,Se,I.image),V===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(E,I,B,V,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,_e=E.max.y-E.min.y+1,Se=E.max.z-E.min.z+1,Ae=he.convert(V.format),Oe=he.convert(V.type);let be;if(V.isData3DTexture)A.setTexture3D(V,0),be=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Pe=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ct=F.getParameter(F.UNPACK_SKIP_ROWS),ai=F.getParameter(F.UNPACK_SKIP_IMAGES),ft=B.isCompressedTexture?B.mipmaps[O]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(be,O,I.x,I.y,I.z,ue,_e,Se,Ae,Oe,ft.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(be,O,I.x,I.y,I.z,ue,_e,Se,Ae,ft.data)):F.texSubImage3D(be,O,I.x,I.y,I.z,ue,_e,Se,Ae,Oe,ft),F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ai),O===0&&V.generateMipmaps&&F.generateMipmap(be),me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,me.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nd?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Pr:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?ht:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r1 extends Xv{}r1.prototype.isWebGL1Renderer=!0;class s1 extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new L;class kd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lm=new L,Pm=new et,Nm=new et,a1=new L,Im=new He,Ka=new L,xc=new si,Dm=new He,yc=new cu;class l1 extends gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pp,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(r),e.ray.intersectsSphere(xc)!==!1&&(Dm.copy(r).invert(),yc.copy(e.ray).applyMatrix4(Dm),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_S?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Pm.fromBufferAttribute(r.attributes.skinIndex,e),Nm.fromBufferAttribute(r.attributes.skinWeight,e),Lm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Nm.getComponent(s);if(o!==0){const a=Pm.getComponent(s);Im.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(a1.copy(Lm).applyMatrix4(Im),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class jv extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class u1 extends Ft{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Pt,c=Pt,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Um=new He,c1=new He;class Bd{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:c1;Um.multiplyMatrices(a,t[s]),Um.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Bd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new u1(t,e,e,Cn,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new jv),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Pf extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new He,Fm=new He,$a=[],Om=new Ci,f1=new He,po=new gn,mo=new si;class d1 extends gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pf(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,f1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Om.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Om)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),mo.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),e.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),Fm.multiplyMatrices(i,os),po.matrixWorld=Fm,po.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){const l=$a[o];l.instanceId=s,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class qv extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const km=new L,Bm=new L,zm=new He,Sc=new cu,Za=new si;class zd extends ut{constructor(e=new Yn,t=new qv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)km.fromBufferAttribute(t,r-1),Bm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=km.distanceTo(Bm);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;zm.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(zm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new L,c=new L,f=new L,h=new L,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let v=d,y=g-1;v<y;v+=p){const C=_.getX(v),w=_.getX(v+1);if(u.fromBufferAttribute(m,C),c.fromBufferAttribute(m,w),Sc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let v=d,y=g-1;v<y;v+=p){if(u.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),Sc.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Hm=new L,Vm=new L;class h1 extends zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Hm.fromBufferAttribute(t,r),Vm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hm.distanceTo(Vm);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p1 extends zd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yv extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new He,Nf=new cu,Qa=new si,Ja=new L;class m1 extends ut{constructor(e=new Yn,t=new Yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Gm.copy(r).invert(),Nf.copy(e.ray).applyMatrix4(Gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=u.getX(_);Ja.fromBufferAttribute(f,m),Wm(Ja,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,x=p;_<x;_++)Ja.fromBufferAttribute(f,_),Wm(Ja,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wm(n,e,t,i,r,s,o){const a=Nf.distanceSqToPoint(n);if(a<t){const l=new L;Nf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Hd extends Yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new L,h=new L,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],v=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(w+y,1-v),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){const v=c[d][g+1],y=c[d][g],C=c[d+1][g],w=c[d+1][g+1];(d!==0||o>0)&&p.push(v,y,w),(d!==i-1||l<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vd extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Av,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Vd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function el(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function g1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Xm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Kv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class aa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class v1 extends aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zp,endingEnd:zp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hp:s=e,a=2*t-i;break;case Vp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hp:o=e,l=2*i-t;break;case Vp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),x=_*_,m=x*_,d=-h*m+2*h*x-h*_,g=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*_+1,v=(-1-p)*m+(1.5+p)*x+.5*_,y=p*m-p*x;for(let C=0;C!==a;++C)s[C]=d*o[c+C]+g*o[u+C]+v*o[l+C]+y*o[f+C];return s}}class x1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let h=0;h!==a;++h)s[h]=o[u+h]*f+o[l+h]*c;return s}}class y1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=el(t,this.TimeBufferType),this.values=el(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:el(e.times,Array),values:el(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new y1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new v1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Ku:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&g1(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ku,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){const x=t[f+_];if(x!==t[h+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Hs;class Zs extends oi{}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Jo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class $v extends oi{}$v.prototype.ValueTypeName="color";class Ws extends oi{}Ws.prototype.ValueTypeName="number";class S1 extends aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)ur.slerpFlat(s,0,o,u-a,o,u,l);return s}}class zr extends oi{InterpolantFactoryMethodLinear(e){return new S1(this.times,this.values,this.getValueSize(),e)}}zr.prototype.ValueTypeName="quaternion";zr.prototype.DefaultInterpolation=Hs;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends oi{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Jo;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends oi{}Xs.prototype.ValueTypeName="vector";class M1{constructor(e,t=-1,i,r=wS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(T1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(oi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const c=_1(l);l=Xm(l,1,c),u=Xm(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let h=r[f];h||(r[f]=h=[]),h.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,_,x){if(p.length!==0){const m=[],d=[];Kv(p,m,d,_),m.length!==0&&x.push(new f(h,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const h=u[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let x=0;x<h[_].morphTargets.length;x++)p[h[_].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let g=0;g!==h[_].morphTargets.length;++g){const v=h[_];m.push(v.time),d.push(v.morphTarget===x?1:0)}r.push(new Ws(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Xs,p+".position",h,"pos",r),i(zr,p+".quaternion",h,"rot",r),i(Xs,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function E1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return $v;case"quaternion":return zr;case"bool":case"boolean":return Zs;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function T1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=E1(n.type);if(n.times===void 0){const t=[],i=[];Kv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ji={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class A1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const w1=new A1;class Js{constructor(e){this.manager=e!==void 0?e:w1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class R1 extends Error{constructor(e,t){super(e),this.response=t}}class Zv extends Js{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ji.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=hi[e],f=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){g();function g(){f.read().then(({done:v,value:y})=>{if(v)d.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,R=c.length;w<R;w++){const D=c[w];D.onProgress&&D.onProgress(C)}d.enqueue(y),g()}})}}});return new Response(m)}else throw new R1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{ji.add(e,u);const c=hi[e];delete hi[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=hi[e];if(c===void 0)throw this.manager.itemError(e),u;delete hi[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class C1 extends Js{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ji.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ea("img");function l(){c(),ji.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Qv extends Js{constructor(e){super(e)}load(e,t,i,r){const s=new Ft,o=new C1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class hu extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Mc=new He,jm=new L,qm=new L;class Gd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b1 extends Gd{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class L1 extends hu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new b1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ym=new He,go=new L,Ec=new L;class P1 extends Gd{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Ec.copy(i.position),Ec.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ec),i.updateMatrixWorld(),r.makeTranslation(-go.x,-go.y,-go.z),Ym.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ym)}}class N1 extends hu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new P1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class I1 extends Gd{constructor(){super(new Fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jv extends hu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class D1 extends hu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Do{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class U1 extends Js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ji.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return ji.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),ji.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ji.add(e,l),s.manager.itemStart(e)}}const Wd="\\[\\]\\.:\\/",F1=new RegExp("["+Wd+"]","g"),Xd="[^"+Wd+"]",O1="[^"+Wd.replace("\\.","")+"]",k1=/((?:WC+[\/:])*)/.source.replace("WC",Xd),B1=/(WCOD+)?/.source.replace("WCOD",O1),z1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),H1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),V1=new RegExp("^"+k1+B1+z1+H1+"$"),G1=["material","materials","bones","map"];class W1{constructor(e,t,i){const r=i||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class $e{constructor(e,t,i){this.path=t,this.parsedPath=i||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,i):new $e(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F1,"")}static parseTrackName(e){const t=V1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);G1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=W1;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);class X1 extends zn.Component{constructor(e){super(e);const{onRequestSession:t,onEndSession:i,textEnterXRTitle:r="START XR",textXRNotFoundTitle:s="XR NOT FOUND",textExitXRTitle:o="EXIT  XR"}=e;this.onRequestSession=t,this.onEndSession=i,this.textEnterXRTitle=r,this.textXRNotFoundTitle=s,this.textExitXRTitle=o,this.state={enabled:!1,label:r,immersive:!1},this.handleClick=this.handleClick.bind(this)}get domElement(){return this.buttonRef.current}get enabled(){return this.state.enabled}set enabled(e){this.setState({enabled:e,label:e?this.textEnterXRTitle:this.textXRNotFoundTitle})}setSession(e){e?this.setState({immersive:!0,label:this.textExitXRTitle}):this.setState({immersive:!1,label:this.textEnterXRTitle})}handleClick(){this.state.enabled&&(this.state.immersive?this.onEndSession&&this.onEndSession():this.onRequestSession&&this.onRequestSession())}render(){return Tn.jsx("button",{ref:this.buttonRef,className:"barebones-button",disabled:!this.state.enabled,onClick:this.handleClick,children:this.state.label})}}X1.prototype.buttonRef=zn.createRef();function Km(n,e){if(e===RS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wf||e===Ev){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===wf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class j1 extends Js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Z1(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new cR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Do.extractUrlBase(e);o=Do.resolveURL(u,this.path)}else o=Do.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Zv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(c){t(c),s.manager.itemEnd(e)},a)}catch(c){a(c)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===e0){try{o[We.KHR_BINARY_GLTF]=new fR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new TR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:o[f]=new K1;break;case We.KHR_DRACO_MESH_COMPRESSION:o[f]=new dR(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[f]=new hR;break;case We.KHR_MESH_QUANTIZATION:o[f]=new pR;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function q1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Y1{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Re(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],It);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Jv(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new N1(c),u.distance=f;break;case"spot":u=new L1(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Bi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class K1{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Xi}extendParams(e,t,i){const r=[];e.color=new Re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,ht))}return Promise.all(r)}}class $1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}}class Q1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],It),Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class iR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class oR{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class aR{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lR{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uR{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,h=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(c*f);return o.decodeGltfBuffer(new Uint8Array(p),c,f,h,r.mode,r.filter),p})})}else return null}}class cR{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==En.TRIANGLES&&u.mode!==En.TRIANGLE_STRIP&&u.mode!==En.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(c=>(l[u]=c,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],h=u[0].count,p=[];for(const _ of f){const x=new He,m=new L,d=new ur,g=new L(1,1,1),v=new d1(_.geometry,_.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&g.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(m,d,g));for(const y in l)if(y==="_COLOR_0"){const C=l[y];v.instanceColor=new Pf(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);ut.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const e0="glTF",_o=12,$m={JSON:1313821514,BIN:5130562};class fR{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_o),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==e0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-_o,s=new DataView(e,_o);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===$m.JSON){const u=new Uint8Array(e,_o+o,a);this.content=i.decode(u)}else if(l===$m.BIN){const u=_o+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const c in o){const f=If[c]||c.toLowerCase();a[f]=o[c]}for(const c in e.attributes){const f=If[c]||c.toLowerCase();if(o[c]!==void 0){const h=i.accessors[e.attributes[c]],p=bs[h.componentType];u[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f,h){r.decodeDracoFile(c,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}f(p)},a,u,It,h)})})}}class hR{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pR{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class t0 extends aa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,c=r-t,f=(i-t)/c,h=f*f,p=h*f,_=e*u,x=_-u,m=-2*p+3*h,d=p-h,g=1-m,v=d-h+f;for(let y=0;y!==a;y++){const C=o[x+y+a],w=o[x+y+l]*c,R=o[_+y+a],D=o[_+y]*c;s[y]=g*C+v*w+m*R+d*D}return s}}const mR=new ur;class gR extends t0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return mR.fromArray(s).normalize().toArray(s),s}}const En={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zm={9728:Pt,9729:on,9984:Af,9985:mv,9986:hl,9987:Or},Qm={33071:Rn,33648:zl,10497:Bs},Tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},If={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_R={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Jo},Ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Vd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),n.DefaultMaterial}function gr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xR(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],h=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function yR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SR(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wc(t.attributes):e=n.indices+":"+wc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+wc(n.targets[i]);return e}function wc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Df(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ER=new He;class TR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new Qv(this.options.manager):this.textureLoader=new U1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return gr(s,a,r),Bi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,c]of o.children.entries())s(c,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Do.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Tc[r.type],a=bs[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new tn(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Tc[r.type],u=bs[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,m;if(p&&p!==f){const d=Math.floor(h/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let v=t.cache.get(g);v||(x=new u(a,d*p,r.count*p/c),v=new o1(x,p/c),t.cache.add(g,v)),m=new kd(v,l,h%p/c,_)}else a===null?x=new u(r.count*l):x=new u(a,h,r.count*l),m=new tn(x,l,_);if(r.sparse!==void 0){const d=Tc.SCALAR,g=bs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new g(o[1],v,r.sparse.count*d),w=new u(o[2],y,r.sparse.count*l);a!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized));for(let R=0,D=C.length;R<D;R++){const M=C[R];if(m.setX(M,w[R*l]),l>=2&&m.setY(M,w[R*l+1]),l>=3&&m.setZ(M,w[R*l+2]),l>=4&&m.setW(M,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=o.name||a.name||"",c.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(c.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return c.magFilter=Zm[h.magFilter]||on,c.minFilter=Zm[h.minFilter]||Or,c.wrapS=Qm[h.wrapS]||Bs,c.wrapT=Qm[h.wrapT]||Bs,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Ft(x);m.needsUpdate=!0,h(m)}),t.load(Do.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return u===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||MR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Yv,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new qv,ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Vd}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],It),a.opacity=h[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",f.baseColorTexture,ht)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ei);const c=s.alphaMode||Ac.OPAQUE;if(c===Ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===Ac.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Xi&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Xi&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Xi){const f=s.emissiveFactor;a.emissive=new Re().setRGB(f[0],f[1],f[2],It)}return s.emissiveTexture!==void 0&&o!==Xi&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ht)),Promise.all(u).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Bi(f,s),t.associations.set(f,{materials:e}),s.extensions&&gr(r,f,s),f})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],c=SR(u),f=r[c];if(f)o.push(f.promise);else{let h;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(u):h=Jm(new Yn,u,t),r[c]={primitive:u,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const c=o[l].material===void 0?vR(this.cache):this.getDependency("material",o[l].material);a.push(c)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,_=c.length;p<_;p++){const x=c[p],m=o[p];let d;const g=u[p];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new l1(x,g):new gn(x,g),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?d.geometry=Km(d.geometry,Ev):m.mode===En.TRIANGLE_FAN&&(d.geometry=Km(d.geometry,wf));else if(m.mode===En.LINES)d=new h1(x,g);else if(m.mode===En.LINE_STRIP)d=new zd(x,g);else if(m.mode===En.LINE_LOOP)d=new p1(x,g);else if(m.mode===En.POINTS)d=new m1(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&yR(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Bi(d,s),m.extensions&&gr(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&gr(r,f[0],s),f[0];const h=new wr;s.extensions&&gr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,_=f.length;p<_;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Qt(QS.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Fd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,c=o.length;u<c;u++){const f=o[u];if(f){a.push(f);const h=new He;s!==null&&h.fromArray(s.array,u*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Bd(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],c=[];for(let f=0,h=r.channels.length;f<h;f++){const p=r.channels[f],_=r.samplers[p.sampler],x=p.target,m=x.node,d=r.parameters!==void 0?r.parameters[_.input]:_.input,g=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",g)),u.push(_),c.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(f){const h=f[0],p=f[1],_=f[2],x=f[3],m=f[4],d=[];for(let g=0,v=h.length;g<v;g++){const y=h[g],C=p[g],w=_[g],R=x[g],D=m[g];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=i._createAnimationTracks(y,C,w,R,D);if(M)for(let T=0;T<M.length;T++)d.push(M[T])}return new M1(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,c=a.length;u<c;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const c=u[0],f=u[1],h=u[2];h!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(h,ER)});for(let p=0,_=f.length;p<_;p++)c.add(f[p]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let c;if(s.isBone===!0?c=new jv:u.length>1?c=new wr:u.length===1?c=u[0]:c=new ut,c!==u[0])for(let f=0,h=u.length;f<h;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=o),Bi(c,s),s.extensions&&gr(i,c,s),s.matrix!==void 0){const f=new He;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new wr;i.name&&(s.name=r.createUniqueName(i.name)),Bi(s,i),i.extensions&&gr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let c=0,f=l.length;c<f;c++)s.add(l[c]);const u=c=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof ri||h instanceof Ft)&&f.set(h,p);return c.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let u;switch(Fi[s.path]){case Fi.weights:u=Ws;break;case Fi.rotation:u=zr;break;case Fi.position:case Fi.scale:u=Xs;break;default:switch(i.itemSize){case 1:u=Ws;break;case 2:case 3:default:u=Xs;break}break}const c=r.interpolation!==void 0?_R[r.interpolation]:Hs,f=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const _=new u(l[h]+"."+Fi[s.path],t.array,f,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Df(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof zr?gR:t0;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AR(n,e,t){const i=e.attributes,r=new Ci;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new L(l[0],l[1],l[2]),new L(u[0],u[1],u[2])),a.normalized){const c=Df(bs[a.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const x=Df(bs[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new si;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Jm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=If[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ye.workingColorSpace!==It&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Bi(n,e),AR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?xR(n,e.targets,t):n})}function wR(){const n=new s1,e=new Hd(500,60,40),t=new Qv().load("media/textures/milky-way-4k.png");t.colorSpace=ht;const i=new Xi({map:t,side:en,depthWrite:!1}),r=new gn(e,i);n.add(r);const s=new ut;s.scale.set(.1,.1,.1),n.add(s),new j1().load("media/gltf/space/space.gltf",u=>{s.add(u.scene)},void 0,u=>{console.error("Failed to load space.gltf",u)});const a=new D1(16777215,.6);n.add(a);const l=new Jv(16777215,1);return l.position.set(5,5,5),n.add(l),{scene:n,skybox:r,solarSystemRoot:s,update(u){}}}const RR=(()=>{const n=new URLSearchParams(window.location.search),e={};for(const[t,i]of n)e[t]=i;return e})();function CR(n,e){const t=RR[n];return t===void 0?e:t==="true"||t==="1"}function bR(){const n=zn.useRef(null),e=zn.useRef(null),t=zn.useRef(null),i=zn.useRef(null),r=zn.useRef(null);zn.useEffect(()=>{CR("usePolyfill",!0)&&Fy(()=>import("https://cdn.jsdelivr.net/npm/webxr-polyfill@latest/build/webxr-polyfill.module.js"),[]).then(p=>{const _=p.default||p.WebXRPolyfill||p;new _}).catch(p=>{console.warn("webxr-polyfill failed to load",p)});const o=new Xv({antialias:!0,alpha:!0,xrCompatible:!0});o.xr.enabled=!0,o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight,!1),document.body.appendChild(o.domElement),n.current=o;const a=wR();e.current=a;const l=new Qt(70,window.innerWidth/window.innerHeight,.01,1e3);l.position.set(0,1.6,3),t.current=l;const u=()=>{const p=window.innerWidth,_=window.innerHeight;o.setSize(p,_,!1),l.aspect=p/_,l.updateProjectionMatrix()};window.addEventListener("resize",u),u();const c=()=>{a.skybox&&(a.skybox.visible=!0),r.current&&r.current.setSession(null),i.current=null},f=()=>{navigator.xr&&navigator.xr.requestSession("immersive-ar",{optionalFeatures:["local-floor"]}).then(p=>{i.current=p,r.current&&r.current.setSession(p),a.skybox.visible=!1,p.addEventListener("end",c),o.xr.setSession(p)}).catch(p=>{console.warn("requestSession(immersive-ar) failed",p)})},h=()=>{const p=i.current;p&&p.end()};return r.current={onRequestSession:f,onEndSession:h,setSession:p=>{}},o.setAnimationLoop((p,_)=>{a.update(0),_?o.render(a.scene,o.xr.getCamera()):o.render(a.scene,l)}),()=>{o.setAnimationLoop(null),window.removeEventListener("resize",u),o.dispose(),o.domElement&&o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement)}},[]),zn.useEffect(()=>{},[]);const s=o=>{o?r.current&&r.current.onEndSession():r.current&&r.current.onRequestSession()};return Tn.jsx(Tn.Fragment,{children:Tn.jsxs("header",{children:[Tn.jsxs("details",{open:!0,children:[Tn.jsx("summary",{children:"Indoor Navigation Demo 4"}),Tn.jsxs("p",{children:["This sample demonstrates how to use an 'immersive-ar' XRSession to present a virtual object to a transparent or passthrough XR device. The logic is largely the same as the corresponding VR sample, with the primary difference being that no background is rendered."," ",Tn.jsx("a",{className:"back",href:"./",children:"Back"})]})]}),Tn.jsx(LR,{ref:r,onClickBridge:s})]})})}class LR extends zn.Component{constructor(e){super(e),this.state={enabled:!1,immersive:!1,label:"START AR"},this._xrButtonProps=e.xrButtonProps||{},this.handleClick=this.handleClick.bind(this)}componentDidMount(){navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported("immersive-ar").then(e=>this.setState({enabled:e})).catch(()=>this.setState({enabled:!1}))}setSession(e){this.setState({immersive:!!e,label:e?"EXIT  AR":"START AR"})}handleClick(){this.state.enabled&&this.props.onClickBridge(this.state.immersive)}render(){return Tn.jsx("button",{className:"barebones-button",disabled:!this.state.enabled,onClick:this.handleClick,children:this.state.enabled?this.state.label:"AR NOT FOUND"})}}Rc.createRoot(document.getElementById("root")).render(Tn.jsx(zn.StrictMode,{children:Tn.jsx(bR,{})}));

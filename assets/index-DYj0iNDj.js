(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function YE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rx={exports:{}},mu={},sx={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),$E=Symbol.for("react.portal"),qE=Symbol.for("react.fragment"),KE=Symbol.for("react.strict_mode"),ZE=Symbol.for("react.profiler"),JE=Symbol.for("react.provider"),QE=Symbol.for("react.context"),eT=Symbol.for("react.forward_ref"),tT=Symbol.for("react.suspense"),nT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),wg=Symbol.iterator;function rT(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ax=Object.assign,lx={};function yo(t,e,n){this.props=t,this.context=e,this.refs=lx,this.updater=n||ox}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cx(){}cx.prototype=yo.prototype;function Tp(t,e,n){this.props=t,this.context=e,this.refs=lx,this.updater=n||ox}var wp=Tp.prototype=new cx;wp.constructor=Tp;ax(wp,yo.prototype);wp.isPureReactComponent=!0;var Ag=Array.isArray,ux=Object.prototype.hasOwnProperty,Ap={current:null},fx={key:!0,ref:!0,__self:!0,__source:!0};function dx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ux.call(e,i)&&!fx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ha,type:t,key:s,ref:o,props:r,_owner:Ap.current}}function sT(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function oT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cg=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oT(""+t.key):e.toString(36)}function Kl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ha:case $E:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wu(o,0):i,Ag(r)?(n="",t!=null&&(n=t.replace(Cg,"$&/")+"/"),Kl(r,e,n,"",function(c){return c})):r!=null&&(Cp(r)&&(r=sT(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ag(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wu(s,a);o+=Kl(s,e,n,l,r)}else if(l=rT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wu(s,a++),o+=Kl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var i=[],r=0;return Kl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function aT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Zl={transition:null},lT={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Ap};function hx(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=yo;je.Fragment=qE;je.Profiler=ZE;je.PureComponent=Tp;je.StrictMode=KE;je.Suspense=tT;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT;je.act=hx;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ax({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ap.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ux.call(e,l)&&!fx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:QE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JE,_context:t},t.Consumer=t};je.createElement=dx;je.createFactory=function(t){var e=dx.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:eT,render:t}};je.isValidElement=Cp;je.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:aT}};je.memo=function(t,e){return{$$typeof:nT,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};je.unstable_act=hx;je.useCallback=function(t,e){return pn.current.useCallback(t,e)};je.useContext=function(t){return pn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};je.useEffect=function(t,e){return pn.current.useEffect(t,e)};je.useId=function(){return pn.current.useId()};je.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return pn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};je.useRef=function(t){return pn.current.useRef(t)};je.useState=function(t){return pn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return pn.current.useTransition()};je.version="18.3.1";sx.exports=je;var ae=sx.exports;const cT=YE(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=ae,fT=Symbol.for("react.element"),dT=Symbol.for("react.fragment"),hT=Object.prototype.hasOwnProperty,pT=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mT={key:!0,ref:!0,__self:!0,__source:!0};function px(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hT.call(e,i)&&!mT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fT,type:t,key:s,ref:o,props:r,_owner:pT.current}}mu.Fragment=dT;mu.jsx=px;mu.jsxs=px;rx.exports=mu;var D=rx.exports,vd={},mx={exports:{}},Nn={},gx={exports:{}},vx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,k){var G=U.length;U.push(k);e:for(;0<G;){var F=G-1>>>1,J=U[F];if(0<r(J,k))U[F]=k,U[G]=J,G=F;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],G=U.pop();if(G!==k){U[0]=G;e:for(var F=0,J=U.length,re=J>>>1;F<re;){var le=2*(F+1)-1,Ae=U[le],Ne=le+1,Z=U[Ne];if(0>r(Ae,G))Ne<J&&0>r(Z,Ae)?(U[F]=Z,U[Ne]=G,F=Ne):(U[F]=Ae,U[le]=G,F=le);else if(Ne<J&&0>r(Z,G))U[F]=Z,U[Ne]=G,F=Ne;else break e}}return k}function r(U,k){var G=U.sortIndex-k.sortIndex;return G!==0?G:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=U)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(U){if(x=!1,S(U),!m)if(n(l)!==null)m=!0,H(E);else{var k=n(c);k!==null&&B(y,k.startTime-U)}}function E(U,k){m=!1,x&&(x=!1,h(_),_=-1),p=!0;var G=u;try{for(S(k),d=n(l);d!==null&&(!(d.expirationTime>k)||U&&!N());){var F=d.callback;if(typeof F=="function"){d.callback=null,u=d.priorityLevel;var J=F(d.expirationTime<=k);k=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),S(k)}else i(l);d=n(l)}if(d!==null)var re=!0;else{var le=n(c);le!==null&&B(y,le.startTime-k),re=!1}return re}finally{d=null,u=G,p=!1}}var A=!1,w=null,_=-1,C=5,P=-1;function N(){return!(t.unstable_now()-P<C)}function O(){if(w!==null){var U=t.unstable_now();P=U;var k=!0;try{k=w(!0,U)}finally{k?L():(A=!1,w=null)}}else A=!1}var L;if(typeof v=="function")L=function(){v(O)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,I=b.port2;b.port1.onmessage=O,L=function(){I.postMessage(null)}}else L=function(){g(O,0)};function H(U){w=U,A||(A=!0,L())}function B(U,k){_=g(function(){U(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,H(E))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var k=3;break;default:k=u}var G=u;u=k;try{return U()}finally{u=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=u;u=U;try{return k()}finally{u=G}},t.unstable_scheduleCallback=function(U,k,G){var F=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?F+G:F):G=F,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=G+J,U={id:f++,callback:k,priorityLevel:U,startTime:G,expirationTime:J,sortIndex:-1},G>F?(U.sortIndex=G,e(c,U),n(l)===null&&U===n(c)&&(x?(h(_),_=-1):x=!0,B(y,G-F))):(U.sortIndex=J,e(l,U),m||p||(m=!0,H(E))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var k=u;return function(){var G=u;u=k;try{return U.apply(this,arguments)}finally{u=G}}}})(vx);gx.exports=vx;var gT=gx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT=ae,In=gT;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _x=new Set,fa={};function ms(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(fa[t]=e,t=0;t<e.length;t++)_x.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,_T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Rg={};function xT(t){return _d.call(Rg,t)?!0:_d.call(bg,t)?!1:_T.test(t)?Rg[t]=!0:(bg[t]=!0,!1)}function yT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ST(t,e,n,i){if(e===null||typeof e>"u"||yT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ST(e,n,r,i)&&(n=null),i||r===null?xT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),xx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Sx=Symbol.for("react.offscreen"),Pg=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Xu;function jo(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var ju=!1;function Yu(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function MT(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case xd:return"Profiler";case Lp:return"StrictMode";case yd:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yx:return(t.displayName||"Context")+".Consumer";case xx:return(t._context.displayName||"Context")+".Provider";case Dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Md(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Md(t(e))}catch{}}return null}function ET(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Md(e);case 8:return e===Lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TT(t){var e=Mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=TT(t))}function Ex(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tx(t,e){e=e.checked,e!=null&&Pp(t,"checked",e,!1)}function Td(t,e){Tx(t,e);var n=Pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Yo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function wx(t,e){var n=Pr(e.value),i=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ax(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ax(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,Cx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wT=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){wT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function bx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function Rx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AT=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(t,e){if(e){if(AT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function Np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,eo=null,to=null;function Ug(t){if(t=Xa(t)){if(typeof Ld!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=yu(e),Ld(t.stateNode,t.type,e))}}function Px(t){eo?to?to.push(t):to=[t]:eo=t}function Lx(){if(eo){var t=eo,e=to;if(to=eo=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function Dx(t,e){return t(e)}function Ix(){}var $u=!1;function Nx(t,e,n){if($u)return t(e,n);$u=!0;try{return Dx(t,e,n)}finally{$u=!1,(eo!==null||to!==null)&&(Ix(),Lx())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Dd=!1;if(qi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Dd=!1}function CT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ea=!1,wc=null,Ac=!1,Id=null,bT={onError:function(t){ea=!0,wc=t}};function RT(t,e,n,i,r,s,o,a,l){ea=!1,wc=null,CT.apply(bT,arguments)}function PT(t,e,n,i,r,s,o,a,l){if(RT.apply(this,arguments),ea){if(ea){var c=wc;ea=!1,wc=null}else throw Error(oe(198));Ac||(Ac=!0,Id=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ux(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(gs(t)!==t)throw Error(oe(188))}function LT(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fg(r),t;if(s===i)return Fg(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Fx(t){return t=LT(t),t!==null?Ox(t):null}function Ox(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ox(t);if(e!==null)return e;t=t.sibling}return null}var kx=In.unstable_scheduleCallback,Og=In.unstable_cancelCallback,DT=In.unstable_shouldYield,IT=In.unstable_requestPaint,bt=In.unstable_now,NT=In.unstable_getCurrentPriorityLevel,Up=In.unstable_ImmediatePriority,Bx=In.unstable_UserBlockingPriority,Cc=In.unstable_NormalPriority,UT=In.unstable_LowPriority,Vx=In.unstable_IdlePriority,gu=null,Ti=null;function FT(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:BT,OT=Math.log,kT=Math.LN2;function BT(t){return t>>>=0,t===0?32:31-(OT(t)/kT|0)|0}var ol=64,al=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$o(a):(s&=o,s!==0&&(i=$o(s)))}else o=n&~r,o!==0?i=$o(o):s!==0&&(i=$o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function VT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=VT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zx(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function HT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Hx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gx,Op,Wx,Xx,jx,Ud=!1,ll=[],yr=null,Sr=null,Mr=null,pa=new Map,ma=new Map,mr=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Ro(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Op(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function WT(t,e,n,i,r){switch(e){case"focusin":return yr=Ro(yr,t,e,n,i,r),!0;case"dragenter":return Sr=Ro(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Ro(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Ro(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Ro(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function Yx(t){var e=Yr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ux(n),e!==null){t.blockedOn=e,jx(t.priority,function(){Wx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pd=i,n.target.dispatchEvent(i),Pd=null}else return e=Xa(n),e!==null&&Op(e),t.blockedOn=n,!1;e.shift()}return!0}function Bg(t,e,n){Jl(t)&&n.delete(e)}function XT(){Ud=!1,yr!==null&&Jl(yr)&&(yr=null),Sr!==null&&Jl(Sr)&&(Sr=null),Mr!==null&&Jl(Mr)&&(Mr=null),pa.forEach(Bg),ma.forEach(Bg)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,XT)))}function ga(t){function e(r){return Po(r,t)}if(0<ll.length){Po(ll[0],t);for(var n=1;n<ll.length;n++){var i=ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Po(yr,t),Sr!==null&&Po(Sr,t),Mr!==null&&Po(Mr,t),pa.forEach(e),ma.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)Yx(n),n.blockedOn===null&&mr.shift()}var no=tr.ReactCurrentBatchConfig,Rc=!0;function jT(t,e,n,i){var r=ot,s=no.transition;no.transition=null;try{ot=1,kp(t,e,n,i)}finally{ot=r,no.transition=s}}function YT(t,e,n,i){var r=ot,s=no.transition;no.transition=null;try{ot=4,kp(t,e,n,i)}finally{ot=r,no.transition=s}}function kp(t,e,n,i){if(Rc){var r=Fd(t,e,n,i);if(r===null)of(t,e,i,Pc,n),kg(t,i);else if(WT(r,t,e,n,i))i.stopPropagation();else if(kg(t,i),e&4&&-1<GT.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Gx(s),s=Fd(t,e,n,i),s===null&&of(t,e,i,Pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else of(t,e,i,null,n)}}var Pc=null;function Fd(t,e,n,i){if(Pc=null,t=Np(i),t=Yr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ux(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pc=t,null}function $x(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NT()){case Up:return 1;case Bx:return 4;case Cc:case UT:return 16;case Vx:return 536870912;default:return 16}default:return 16}}var _r=null,Bp=null,Ql=null;function qx(){if(Ql)return Ql;var t,e=Bp,n=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ql=r.slice(t,1<i?1-i:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Vg(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Vg,this.isPropagationStopped=Vg,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=Un(So),Wa=Tt({},So,{view:0,detail:0}),$T=Un(Wa),Ku,Zu,Lo,vu=Tt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Ku=t.screenX-Lo.screenX,Zu=t.screenY-Lo.screenY):Zu=Ku=0,Lo=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),zg=Un(vu),qT=Tt({},vu,{dataTransfer:0}),KT=Un(qT),ZT=Tt({},Wa,{relatedTarget:0}),Ju=Un(ZT),JT=Tt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),QT=Un(JT),ew=Tt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tw=Un(ew),nw=Tt({},So,{data:0}),Hg=Un(nw),iw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ow(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sw[t])?!!e[t]:!1}function zp(){return ow}var aw=Tt({},Wa,{key:function(t){if(t.key){var e=iw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lw=Un(aw),cw=Tt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Un(cw),uw=Tt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),fw=Un(uw),dw=Tt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),hw=Un(dw),pw=Tt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mw=Un(pw),gw=[9,13,27,32],Hp=qi&&"CompositionEvent"in window,ta=null;qi&&"documentMode"in document&&(ta=document.documentMode);var vw=qi&&"TextEvent"in window&&!ta,Kx=qi&&(!Hp||ta&&8<ta&&11>=ta),Wg=" ",Xg=!1;function Zx(t,e){switch(t){case"keyup":return gw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function _w(t,e){switch(t){case"compositionend":return Jx(e);case"keypress":return e.which!==32?null:(Xg=!0,Wg);case"textInput":return t=e.data,t===Wg&&Xg?null:t;default:return null}}function xw(t,e){if(Os)return t==="compositionend"||!Hp&&Zx(t,e)?(t=qx(),Ql=Bp=_r=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kx&&e.locale!=="ko"?null:e.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yw[t.type]:e==="textarea"}function Qx(t,e,n,i){Px(i),e=Lc(e,"onChange"),0<e.length&&(n=new Vp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,va=null;function Sw(t){uy(t,0)}function _u(t){var e=Vs(t);if(Ex(e))return t}function Mw(t,e){if(t==="change")return e}var ey=!1;if(qi){var Qu;if(qi){var ef="oninput"in document;if(!ef){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),ef=typeof Yg.oninput=="function"}Qu=ef}else Qu=!1;ey=Qu&&(!document.documentMode||9<document.documentMode)}function $g(){na&&(na.detachEvent("onpropertychange",ty),va=na=null)}function ty(t){if(t.propertyName==="value"&&_u(va)){var e=[];Qx(e,va,t,Np(t)),Nx(Sw,e)}}function Ew(t,e,n){t==="focusin"?($g(),na=e,va=n,na.attachEvent("onpropertychange",ty)):t==="focusout"&&$g()}function Tw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(va)}function ww(t,e){if(t==="click")return _u(e)}function Aw(t,e){if(t==="input"||t==="change")return _u(e)}function Cw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:Cw;function _a(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=qg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iy(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bw(t){var e=iy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(i!==null&&Gp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kg(n,s);var o=Kg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rw=qi&&"documentMode"in document&&11>=document.documentMode,ks=null,Od=null,ia=null,kd=!1;function Zg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||ks==null||ks!==Tc(i)||(i=ks,"selectionStart"in i&&Gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&_a(ia,i)||(ia=i,i=Lc(Od,"onSelect"),0<i.length&&(e=new Vp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},tf={},ry={};qi&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function xu(t){if(tf[t])return tf[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ry)return tf[t]=e[n];return t}var sy=xu("animationend"),oy=xu("animationiteration"),ay=xu("animationstart"),ly=xu("transitionend"),cy=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){cy.set(t,e),ms(e,[t])}for(var nf=0;nf<Jg.length;nf++){var rf=Jg[nf],Pw=rf.toLowerCase(),Lw=rf[0].toUpperCase()+rf.slice(1);Ir(Pw,"on"+Lw)}Ir(sy,"onAnimationEnd");Ir(oy,"onAnimationIteration");Ir(ay,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(ly,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dw=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Qg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,PT(i,e,void 0,t),t.currentTarget=null}function uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}}}if(Ac)throw t=Id,Ac=!1,Id=null,t}function mt(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var i=t+"__bubble";n.has(i)||(fy(e,t,2,!1),n.add(i))}function sf(t,e,n){var i=0;e&&(i|=4),fy(n,t,i,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[fl]){t[fl]=!0,_x.forEach(function(n){n!=="selectionchange"&&(Dw.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,sf("selectionchange",!1,e))}}function fy(t,e,n,i){switch($x(e)){case 1:var r=jT;break;case 4:r=YT;break;default:r=kp}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function of(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Nx(function(){var c=s,f=Np(n),d=[];e:{var u=cy.get(t);if(u!==void 0){var p=Vp,m=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":p=lw;break;case"focusin":m="focus",p=Ju;break;case"focusout":m="blur",p=Ju;break;case"beforeblur":case"afterblur":p=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fw;break;case sy:case oy:case ay:p=QT;break;case ly:p=hw;break;case"scroll":p=$T;break;case"wheel":p=mw;break;case"copy":case"cut":case"paste":p=tw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gg}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?u!==null?u+"Capture":null:u;x=[];for(var v=c,S;v!==null;){S=v;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,h!==null&&(y=ha(v,h),y!=null&&x.push(ya(v,y,S)))),g)break;v=v.return}0<x.length&&(u=new p(u,m,null,n,f),d.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Pd&&(m=n.relatedTarget||n.fromElement)&&(Yr(m)||m[Ki]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Yr(m):null,m!==null&&(g=gs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=zg,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gg,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?u:Vs(p),S=m==null?u:Vs(m),u=new x(y,v+"leave",p,n,f),u.target=g,u.relatedTarget=S,y=null,Yr(f)===c&&(x=new x(h,v+"enter",m,n,f),x.target=S,x.relatedTarget=g,y=x),g=y,p&&m)t:{for(x=p,h=m,v=0,S=x;S;S=ys(S))v++;for(S=0,y=h;y;y=ys(y))S++;for(;0<v-S;)x=ys(x),v--;for(;0<S-v;)h=ys(h),S--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=ys(x),h=ys(h)}x=null}else x=null;p!==null&&e0(d,u,p,x,!1),m!==null&&g!==null&&e0(d,g,m,x,!0)}}e:{if(u=c?Vs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=Mw;else if(jg(u))if(ey)E=Aw;else{E=Tw;var A=Ew}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=ww);if(E&&(E=E(t,c))){Qx(d,E,n,f);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&wd(u,"number",u.value)}switch(A=c?Vs(c):window,t){case"focusin":(jg(A)||A.contentEditable==="true")&&(ks=A,Od=c,ia=null);break;case"focusout":ia=Od=ks=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,Zg(d,n,f);break;case"selectionchange":if(Rw)break;case"keydown":case"keyup":Zg(d,n,f)}var w;if(Hp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Os?Zx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kx&&n.locale!=="ko"&&(Os||_!=="onCompositionStart"?_==="onCompositionEnd"&&Os&&(w=qx()):(_r=f,Bp="value"in _r?_r.value:_r.textContent,Os=!0)),A=Lc(c,_),0<A.length&&(_=new Hg(_,t,null,n,f),d.push({event:_,listeners:A}),w?_.data=w:(w=Jx(n),w!==null&&(_.data=w)))),(w=vw?_w(t,n):xw(t,n))&&(c=Lc(c,"onBeforeInput"),0<c.length&&(f=new Hg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=w))}uy(d,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iw=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(Iw,`
`).replace(Nw,"")}function dl(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(oe(425))}function Dc(){}var Bd=null,Vd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(Ow)}:Hd;function Ow(t){setTimeout(function(){throw t})}function af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Si="__reactFiber$"+Mo,Sa="__reactProps$"+Mo,Ki="__reactContainer$"+Mo,Gd="__reactEvents$"+Mo,kw="__reactListeners$"+Mo,Bw="__reactHandles$"+Mo;function Yr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i0(t);t!==null;){if(n=t[Si])return n;t=i0(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[Si]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function yu(t){return t[Sa]||null}var Wd=[],zs=-1;function Nr(t){return{current:t}}function gt(t){0>zs||(t.current=Wd[zs],Wd[zs]=null,zs--)}function ht(t,e){zs++,Wd[zs]=t.current,t.current=e}var Lr={},an=Nr(Lr),yn=Nr(!1),ss=Lr;function co(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ic(){gt(yn),gt(an)}function r0(t,e,n){if(an.current!==Lr)throw Error(oe(168));ht(an,e),ht(yn,n)}function dy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,ET(t)||"Unknown",r));return Tt({},n,i)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ss=an.current,ht(an,t),ht(yn,yn.current),!0}function s0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=dy(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,gt(yn),gt(an),ht(an,t)):gt(yn),ht(yn,n)}var zi=null,Su=!1,lf=!1;function hy(t){zi===null?zi=[t]:zi.push(t)}function Vw(t){Su=!0,hy(t)}function Ur(){if(!lf&&zi!==null){lf=!0;var t=0,e=ot;try{var n=zi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Su=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),kx(Up,Ur),r}finally{ot=e,lf=!1}}return null}var Hs=[],Gs=0,Uc=null,Fc=0,Bn=[],Vn=0,os=null,Gi=1,Wi="";function Wr(t,e){Hs[Gs++]=Fc,Hs[Gs++]=Uc,Uc=t,Fc=e}function py(t,e,n){Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=os,os=t;var i=Gi;t=Wi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-li(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function Wp(t){t.return!==null&&(Wr(t,1),py(t,1,0))}function Xp(t){for(;t===Uc;)Uc=Hs[--Gs],Hs[Gs]=null,Fc=Hs[--Gs],Hs[Gs]=null;for(;t===os;)os=Bn[--Vn],Bn[Vn]=null,Wi=Bn[--Vn],Bn[Vn]=null,Gi=Bn[--Vn],Bn[Vn]=null}var Pn=null,bn=null,_t=!1,ri=null;function my(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,bn=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,bn=null,!0):!1;default:return!1}}function Xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(_t){var e=bn;if(e){var n=e;if(!o0(t,e)){if(Xd(t))throw Error(oe(418));e=Er(n.nextSibling);var i=Pn;e&&o0(t,e)?my(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(Xd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function hl(t){if(t!==Pn)return!1;if(!_t)return a0(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=bn)){if(Xd(t))throw gy(),Error(oe(418));for(;e;)my(t,e),e=Er(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Pn?Er(t.stateNode.nextSibling):null;return!0}function gy(){for(var t=bn;t;)t=Er(t.nextSibling)}function uo(){bn=Pn=null,_t=!1}function jp(t){ri===null?ri=[t]:ri.push(t)}var zw=tr.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function vy(t){function e(h,v){if(t){var S=h.deletions;S===null?(h.deletions=[v],h.flags|=16):S.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Cr(h,v),h.index=0,h.sibling=null,h}function s(h,v,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<v?(h.flags|=2,v):S):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,S,y){return v===null||v.tag!==6?(v=mf(S,h.mode,y),v.return=h,v):(v=r(v,S),v.return=h,v)}function l(h,v,S,y){var E=S.type;return E===Fs?f(h,v,S.props.children,y,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dr&&l0(E)===v.type)?(y=r(v,S.props),y.ref=Do(h,v,S),y.return=h,y):(y=ac(S.type,S.key,S.props,null,h.mode,y),y.ref=Do(h,v,S),y.return=h,y)}function c(h,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=gf(S,h.mode,y),v.return=h,v):(v=r(v,S.children||[]),v.return=h,v)}function f(h,v,S,y,E){return v===null||v.tag!==7?(v=ts(S,h.mode,y,E),v.return=h,v):(v=r(v,S),v.return=h,v)}function d(h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mf(""+v,h.mode,S),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case il:return S=ac(v.type,v.key,v.props,null,h.mode,S),S.ref=Do(h,null,v),S.return=h,S;case Us:return v=gf(v,h.mode,S),v.return=h,v;case dr:var y=v._init;return d(h,y(v._payload),S)}if(Yo(v)||Co(v))return v=ts(v,h.mode,S,null),v.return=h,v;pl(h,v)}return null}function u(h,v,S,y){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:a(h,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case il:return S.key===E?l(h,v,S,y):null;case Us:return S.key===E?c(h,v,S,y):null;case dr:return E=S._init,u(h,v,E(S._payload),y)}if(Yo(S)||Co(S))return E!==null?null:f(h,v,S,y,null);pl(h,S)}return null}function p(h,v,S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(S)||null,a(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case il:return h=h.get(y.key===null?S:y.key)||null,l(v,h,y,E);case Us:return h=h.get(y.key===null?S:y.key)||null,c(v,h,y,E);case dr:var A=y._init;return p(h,v,S,A(y._payload),E)}if(Yo(y)||Co(y))return h=h.get(S)||null,f(v,h,y,E,null);pl(v,y)}return null}function m(h,v,S,y){for(var E=null,A=null,w=v,_=v=0,C=null;w!==null&&_<S.length;_++){w.index>_?(C=w,w=null):C=w.sibling;var P=u(h,w,S[_],y);if(P===null){w===null&&(w=C);break}t&&w&&P.alternate===null&&e(h,w),v=s(P,v,_),A===null?E=P:A.sibling=P,A=P,w=C}if(_===S.length)return n(h,w),_t&&Wr(h,_),E;if(w===null){for(;_<S.length;_++)w=d(h,S[_],y),w!==null&&(v=s(w,v,_),A===null?E=w:A.sibling=w,A=w);return _t&&Wr(h,_),E}for(w=i(h,w);_<S.length;_++)C=p(w,h,_,S[_],y),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?_:C.key),v=s(C,v,_),A===null?E=C:A.sibling=C,A=C);return t&&w.forEach(function(N){return e(h,N)}),_t&&Wr(h,_),E}function x(h,v,S,y){var E=Co(S);if(typeof E!="function")throw Error(oe(150));if(S=E.call(S),S==null)throw Error(oe(151));for(var A=E=null,w=v,_=v=0,C=null,P=S.next();w!==null&&!P.done;_++,P=S.next()){w.index>_?(C=w,w=null):C=w.sibling;var N=u(h,w,P.value,y);if(N===null){w===null&&(w=C);break}t&&w&&N.alternate===null&&e(h,w),v=s(N,v,_),A===null?E=N:A.sibling=N,A=N,w=C}if(P.done)return n(h,w),_t&&Wr(h,_),E;if(w===null){for(;!P.done;_++,P=S.next())P=d(h,P.value,y),P!==null&&(v=s(P,v,_),A===null?E=P:A.sibling=P,A=P);return _t&&Wr(h,_),E}for(w=i(h,w);!P.done;_++,P=S.next())P=p(w,h,_,P.value,y),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?_:P.key),v=s(P,v,_),A===null?E=P:A.sibling=P,A=P);return t&&w.forEach(function(O){return e(h,O)}),_t&&Wr(h,_),E}function g(h,v,S,y){if(typeof S=="object"&&S!==null&&S.type===Fs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case il:e:{for(var E=S.key,A=v;A!==null;){if(A.key===E){if(E=S.type,E===Fs){if(A.tag===7){n(h,A.sibling),v=r(A,S.props.children),v.return=h,h=v;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dr&&l0(E)===A.type){n(h,A.sibling),v=r(A,S.props),v.ref=Do(h,A,S),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}S.type===Fs?(v=ts(S.props.children,h.mode,y,S.key),v.return=h,h=v):(y=ac(S.type,S.key,S.props,null,h.mode,y),y.ref=Do(h,v,S),y.return=h,h=y)}return o(h);case Us:e:{for(A=S.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(h,v.sibling),v=r(v,S.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=gf(S,h.mode,y),v.return=h,h=v}return o(h);case dr:return A=S._init,g(h,v,A(S._payload),y)}if(Yo(S))return m(h,v,S,y);if(Co(S))return x(h,v,S,y);pl(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,S),v.return=h,h=v):(n(h,v),v=mf(S,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return g}var fo=vy(!0),_y=vy(!1),Oc=Nr(null),kc=null,Ws=null,Yp=null;function $p(){Yp=Ws=kc=null}function qp(t){var e=Oc.current;gt(Oc),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function io(t,e){kc=t,Yp=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Yp!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(kc===null)throw Error(oe(308));Ws=t,kc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var $r=null;function Kp(t){$r===null?$r=[t]:$r.push(t)}function xy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fp(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bc(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,x=a;switch(u=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){d=m.call(p,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,u=typeof m=="function"?m.call(p,d,u):m,u==null)break e;d=Tt({},d,u);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=d}}function u0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ja={},wi=Nr(ja),Ma=Nr(ja),Ea=Nr(ja);function qr(t){if(t===ja)throw Error(oe(174));return t}function Jp(t,e){switch(ht(Ea,e),ht(Ma,t),ht(wi,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cd(e,t)}gt(wi),ht(wi,e)}function ho(){gt(wi),gt(Ma),gt(Ea)}function Sy(t){qr(Ea.current);var e=qr(wi.current),n=Cd(e,t.type);e!==n&&(ht(Ma,t),ht(wi,n))}function Qp(t){Ma.current===t&&(gt(wi),gt(Ma))}var yt=Nr(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function em(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var nc=tr.ReactCurrentDispatcher,uf=tr.ReactCurrentBatchConfig,as=0,Mt=null,Ot=null,Gt=null,zc=!1,ra=!1,Ta=0,Hw=0;function Qt(){throw Error(oe(321))}function tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function nm(t,e,n,i,r,s){if(as=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?jw:Yw,t=n(i,r),ra){s=0;do{if(ra=!1,Ta=0,25<=s)throw Error(oe(301));s+=1,Gt=Ot=null,e.updateQueue=null,nc.current=$w,t=n(i,r)}while(ra)}if(nc.current=Hc,e=Ot!==null&&Ot.next!==null,as=0,Gt=Ot=Mt=null,zc=!1,e)throw Error(oe(300));return t}function im(){var t=Ta!==0;return Ta=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Yn(){if(Ot===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function wa(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=f,ls|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function df(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function My(){}function Ey(t,e){var n=Mt,i=Yn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,rm(Ay.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,wy.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(oe(349));as&30||Ty(n,e,r)}return r}function Ty(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wy(t,e,n,i){e.value=n,e.getSnapshot=i,Cy(e)&&by(t)}function Ay(t,e,n){return n(function(){Cy(e)&&by(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function by(t){var e=Zi(t,1);e!==null&&ci(e,t,1,-1)}function f0(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=Xw.bind(null,Mt,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ry(){return Yn().memoizedState}function ic(t,e,n,i){var r=xi();Mt.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&tm(i,o.deps)){r.memoizedState=Aa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function d0(t,e){return ic(8390656,8,t,e)}function rm(t,e){return Mu(2048,8,t,e)}function Py(t,e){return Mu(4,2,t,e)}function Ly(t,e){return Mu(4,4,t,e)}function Dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iy(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,Dy.bind(null,e,t),n)}function sm(){}function Ny(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Uy(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fy(t,e,n){return as&21?(hi(n,e)||(n=zx(),Mt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function Gw(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=uf.transition;uf.transition={};try{t(!1),e()}finally{ot=n,uf.transition=i}}function Oy(){return Yn().memoizedState}function Ww(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ky(t))By(e,n);else if(n=xy(t,e,n,i),n!==null){var r=dn();ci(n,t,i,r),Vy(n,e,i)}}function Xw(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ky(t))By(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xy(t,e,r,i),n!==null&&(r=dn(),ci(n,t,i,r),Vy(n,e,i))}}function ky(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function By(t,e){ra=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fp(t,n)}}var Hc={readContext:jn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},jw={readContext:jn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:d0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,Dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ww.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:f0,useDebugValue:sm,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=f0(!1),e=t[0];return t=Gw.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=xi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Wt===null)throw Error(oe(349));as&30||Ty(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,d0(Ay.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,wy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Wt.identifierPrefix;if(_t){var n=Wi,i=Gi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yw={readContext:jn,useCallback:Ny,useContext:jn,useEffect:rm,useImperativeHandle:Iy,useInsertionEffect:Py,useLayoutEffect:Ly,useMemo:Uy,useReducer:ff,useRef:Ry,useState:function(){return ff(wa)},useDebugValue:sm,useDeferredValue:function(t){var e=Yn();return Fy(e,Ot.memoizedState,t)},useTransition:function(){var t=ff(wa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:My,useSyncExternalStore:Ey,useId:Oy,unstable_isNewReconciler:!1},$w={readContext:jn,useCallback:Ny,useContext:jn,useEffect:rm,useImperativeHandle:Iy,useInsertionEffect:Py,useLayoutEffect:Ly,useMemo:Uy,useReducer:df,useRef:Ry,useState:function(){return df(wa)},useDebugValue:sm,useDeferredValue:function(t){var e=Yn();return Ot===null?e.memoizedState=t:Fy(e,Ot.memoizedState,t)},useTransition:function(){var t=df(wa)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:My,useSyncExternalStore:Ey,useId:Oy,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eu={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Ar(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ci(e,t,r,i),tc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Ar(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ci(e,t,r,i),tc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Ar(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(ci(e,t,i,n),tc(e,t,i))}};function h0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function zy(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=Sn(e)?ss:an.current,i=e.contextTypes,s=(i=i!=null)?co(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function p0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Eu.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=Sn(e)?ss:an.current,r.context=co(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Eu.enqueueReplaceState(r,r.state,null),Bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",i=e;do n+=MT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qw=typeof WeakMap=="function"?WeakMap:Map;function Hy(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wc||(Wc=!0,oh=i),Kd(t,e)},n}function Gy(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cA.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var Kw=tr.ReactCurrentOwner,xn=!1;function un(t,e,n,i){e.child=t===null?_y(e,null,n,i):fo(e,t.child,n,i)}function _0(t,e,n,i,r){n=n.render;var s=e.ref;return io(e,r),i=nm(t,e,n,i,s,r),n=im(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&n&&Wp(e),e.flags|=1,un(t,e,i,r),e.child)}function x0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wy(t,e,s,i,r)):(t=ac(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Zd(t,e,n,i,r)}function Xy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(js,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(js,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(js,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(js,Cn),Cn|=i;return un(t,e,r,n),e.child}function jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var s=Sn(n)?ss:an.current;return s=co(e,s),io(e,r),n=nm(t,e,n,i,s,r),i=im(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&i&&Wp(e),e.flags|=1,un(t,e,n,r),e.child)}function y0(t,e,n,i,r){if(Sn(n)){var s=!0;Nc(e)}else s=!1;if(io(e,r),e.stateNode===null)rc(t,e),zy(e,n,i),qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=Sn(n)?ss:an.current,c=co(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&p0(e,o,i,c),hr=!1;var u=e.memoizedState;o.state=u,Bc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||yn.current||hr?(typeof f=="function"&&($d(e,n,f,i),l=e.memoizedState),(a=hr||h0(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=Sn(n)?ss:an.current,l=co(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&p0(e,o,i,l),hr=!1,u=e.memoizedState,o.state=u,Bc(e,i,o,r);var m=e.memoizedState;a!==d||u!==m||yn.current||hr?(typeof p=="function"&&($d(e,n,p,i),m=e.memoizedState),(c=hr||h0(e,n,c,i,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,s,r)}function Jd(t,e,n,i,r,s){jy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&s0(e,n,!1),Ji(t,e,s);i=e.stateNode,Kw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fo(e,t.child,null,s),e.child=fo(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&s0(e,n,!0),e.child}function Yy(t){var e=t.stateNode;e.pendingContext?r0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&r0(t,e.context,!1),Jp(t,e.containerInfo)}function S0(t,e,n,i,r){return uo(),jp(r),e.flags|=256,un(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $y(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,i,0,null),t=ts(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Qd,t):om(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function om(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,i){return i!==null&&jp(i),fo(e,t.child,null,n),t=om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=hf(Error(oe(422))),ml(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Au({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fo(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Qd,s);if(!(e.mode&1))return ml(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=hf(s,i,void 0),ml(t,e,o,i)}if(a=(o&t.childLanes)!==0,xn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),ci(i,t,r,-1))}return dm(),i=hf(Error(oe(421))),ml(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=Er(r.nextSibling),Pn=e,_t=!0,ri=null,t!==null&&(Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=os,Gi=t.id,Wi=t.overflow,os=e),e=om(e,i.children),e.flags|=4096,e)}function M0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function pf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pf(e,!0,n,null,s);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jw(t,e,n){switch(e.tag){case 3:Yy(e),uo();break;case 5:Sy(e);break;case 1:Sn(e.type)&&Nc(e);break;case 4:Jp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?$y(t,e,n):(ht(yt,yt.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return Ji(t,e,n)}var Ky,th,Zy,Jy;Ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};Zy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(wi.current);var s=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Ad(t,r),i=Ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dc)}bd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Io(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qw(t,e,n){var i=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&Ic(),en(e),null;case 3:return i=e.stateNode,ho(),gt(yn),gt(an),em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(ch(ri),ri=null))),th(t,e),en(e),null;case 5:Qp(e);var r=qr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)Zy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return en(e),null}if(t=qr(wi.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)mt(qo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Lg(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Ig(i,s),mt("invalid",i)}bd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":rl(i),Dg(i,s,!0);break;case"textarea":rl(i),Ng(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ax(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Sa]=i,Ky(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)mt(qo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Lg(t,i),r=Ed(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Ig(t,i),r=Ad(t,i),mt("invalid",t);break;default:r=i}bd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Pp(t,s,l,o))}switch(n){case"input":rl(t),Dg(t,i,!1);break;case"textarea":rl(t),Ng(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Jy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=qr(Ea.current),qr(wi.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return en(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&bn!==null&&e.mode&1&&!(e.flags&128))gy(),uo(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Si]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ri!==null&&(ch(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?kt===0&&(kt=3):dm())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return ho(),th(t,e),t===null&&xa(e.stateNode.containerInfo),en(e),null;case 10:return qp(e.type._context),en(e),null;case 17:return Sn(e.type)&&Ic(),en(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>mo&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return en(e),null}else 2*bt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return fm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function eA(t,e){switch(Xp(e),e.tag){case 1:return Sn(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),gt(yn),gt(an),em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return ho(),null;case 10:return qp(e.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var gl=!1,rn=!1,tA=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function nh(t,e,n){try{n()}catch(i){wt(t,e,i)}}var E0=!1;function nA(t,e){if(Bd=Rc,t=iy(),Gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},Rc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return m=E0,E0=!1,m}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nh(e,n,s)}r=r.next}while(r!==i)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qy(t){var e=t.alternate;e!==null&&(t.alternate=null,Qy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Sa],delete e[Gd],delete e[kw],delete e[Bw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eS(t){return t.tag===5||t.tag===3||t.tag===4}function T0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}function sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Xt=null,ii=!1;function sr(t,e,n){for(n=n.child;n!==null;)tS(t,e,n),n=n.sibling}function tS(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:rn||Xs(n,e);case 6:var i=Xt,r=ii;Xt=null,sr(t,e,n),Xt=i,ii=r,Xt!==null&&(ii?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ii?(t=Xt,n=n.stateNode,t.nodeType===8?af(t.parentNode,n):t.nodeType===1&&af(t,n),ga(t)):af(Xt,n.stateNode));break;case 4:i=Xt,r=ii,Xt=n.stateNode.containerInfo,ii=!0,sr(t,e,n),Xt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),r=r.next}while(r!==i)}sr(t,e,n);break;case 1:if(!rn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,sr(t,e,n),rn=i):sr(t,e,n);break;default:sr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tA),e.forEach(function(i){var r=fA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ii=!1;break e;case 3:Xt=a.stateNode.containerInfo,ii=!0;break e;case 4:Xt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Xt===null)throw Error(oe(160));tS(s,o,r),Xt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nS(e,t),e=e.sibling}function nS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),gi(t),i&4){try{sa(3,t,t.return),Tu(3,t)}catch(x){wt(t,t.return,x)}try{sa(5,t,t.return)}catch(x){wt(t,t.return,x)}}break;case 1:qn(e,t),gi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(qn(e,t),gi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(x){wt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tx(r,s),Rd(a,o);var c=Rd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Rx(r,d):f==="dangerouslySetInnerHTML"?Cx(r,d):f==="children"?da(r,d):Pp(r,f,d,c)}switch(a){case"input":Td(r,s);break;case"textarea":wx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qs(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Qs(r,!!s.multiple,s.defaultValue,!0):Qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(x){wt(t,t.return,x)}}break;case 6:if(qn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){wt(t,t.return,x)}}break;case 3:if(qn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(x){wt(t,t.return,x)}break;case 4:qn(e,t),gi(t);break;case 13:qn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cm=bt())),i&4&&w0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,qn(e,t),rn=c):qn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(d=Te=f;Te!==null;){switch(u=Te,p=u.child,u.tag){case 0:case 11:case 14:case 15:sa(4,u,u.return);break;case 1:Xs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){wt(i,n,x)}}break;case 5:Xs(u,u.return);break;case 22:if(u.memoizedState!==null){C0(d);continue}}p!==null?(p.return=u,Te=p):C0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bx("display",o))}catch(x){wt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){wt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),gi(t),i&4&&w0(t);break;case 21:break;default:qn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eS(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=T0(t);sh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=T0(t);rh(t,a,o);break;default:throw Error(oe(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iA(t,e,n){Te=t,iS(t)}function iS(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||gl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=gl;var c=rn;if(gl=o,(rn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?b0(r):l!==null?(l.return=o,Te=l):b0(r);for(;s!==null;)Te=s,iS(s),s=s.sibling;Te=r,gl=a,rn=c}A0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):A0(t)}}function A0(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&u0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}u0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}rn||e.flags&512&&ih(e)}catch(u){wt(e,e.return,u)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function C0(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function b0(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{ih(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{ih(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var rA=Math.ceil,Gc=tr.ReactCurrentDispatcher,am=tr.ReactCurrentOwner,Wn=tr.ReactCurrentBatchConfig,Ze=0,Wt=null,It=null,$t=0,Cn=0,js=Nr(0),kt=0,Ca=null,ls=0,wu=0,lm=0,oa=null,_n=null,cm=0,mo=1/0,Vi=null,Wc=!1,oh=null,wr=null,vl=!1,xr=null,Xc=0,aa=0,ah=null,sc=-1,oc=0;function dn(){return Ze&6?bt():sc!==-1?sc:sc=bt()}function Ar(t){return t.mode&1?Ze&2&&$t!==0?$t&-$t:zw.transition!==null?(oc===0&&(oc=zx()),oc):(t=ot,t!==0||(t=window.event,t=t===void 0?16:$x(t.type)),t):1}function ci(t,e,n,i){if(50<aa)throw aa=0,ah=null,Error(oe(185));Ga(t,n,i),(!(Ze&2)||t!==Wt)&&(t===Wt&&(!(Ze&2)&&(wu|=n),kt===4&&gr(t,$t)),Mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(mo=bt()+500,Su&&Ur()))}function Mn(t,e){var n=t.callbackNode;zT(t,e);var i=bc(t,t===Wt?$t:0);if(i===0)n!==null&&Og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Og(n),e===1)t.tag===0?Vw(R0.bind(null,t)):hy(R0.bind(null,t)),Fw(function(){!(Ze&6)&&Ur()}),n=null;else{switch(Hx(i)){case 1:n=Up;break;case 4:n=Bx;break;case 16:n=Cc;break;case 536870912:n=Vx;break;default:n=Cc}n=fS(n,rS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rS(t,e){if(sc=-1,oc=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(ro()&&t.callbackNode!==n)return null;var i=bc(t,t===Wt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jc(t,i);else{e=i;var r=Ze;Ze|=2;var s=oS();(Wt!==t||$t!==e)&&(Vi=null,mo=bt()+500,es(t,e));do try{aA();break}catch(a){sS(t,a)}while(!0);$p(),Gc.current=s,Ze=r,It!==null?e=0:(Wt=null,$t=0,e=kt)}if(e!==0){if(e===2&&(r=Nd(t),r!==0&&(i=r,e=lh(t,r))),e===1)throw n=Ca,es(t,0),gr(t,i),Mn(t,bt()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!sA(r)&&(e=jc(t,i),e===2&&(s=Nd(t),s!==0&&(i=s,e=lh(t,s))),e===1))throw n=Ca,es(t,0),gr(t,i),Mn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Xr(t,_n,Vi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=cm+500-bt(),10<e)){if(bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hd(Xr.bind(null,t,_n,Vi),e);break}Xr(t,_n,Vi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rA(i/1960))-i,10<i){t.timeoutHandle=Hd(Xr.bind(null,t,_n,Vi),i);break}Xr(t,_n,Vi);break;case 5:Xr(t,_n,Vi);break;default:throw Error(oe(329))}}}return Mn(t,bt()),t.callbackNode===n?rS.bind(null,t):null}function lh(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=jc(t,e),t!==2&&(e=_n,_n=n,e!==null&&ch(e)),t}function ch(t){_n===null?_n=t:_n.push.apply(_n,t)}function sA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~lm,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function R0(t){if(Ze&6)throw Error(oe(327));ro();var e=bc(t,0);if(!(e&1))return Mn(t,bt()),null;var n=jc(t,e);if(t.tag!==0&&n===2){var i=Nd(t);i!==0&&(e=i,n=lh(t,i))}if(n===1)throw n=Ca,es(t,0),gr(t,e),Mn(t,bt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,_n,Vi),Mn(t,bt()),null}function um(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(mo=bt()+500,Su&&Ur())}}function cs(t){xr!==null&&xr.tag===0&&!(Ze&6)&&ro();var e=Ze;Ze|=1;var n=Wn.transition,i=ot;try{if(Wn.transition=null,ot=1,t)return t()}finally{ot=i,Wn.transition=n,Ze=e,!(Ze&6)&&Ur()}}function fm(){Cn=js.current,gt(js)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uw(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Xp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ic();break;case 3:ho(),gt(yn),gt(an),em();break;case 5:Qp(i);break;case 4:ho();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:qp(i.type._context);break;case 22:case 23:fm()}n=n.return}if(Wt=t,It=t=Cr(t.current,null),$t=Cn=e,kt=0,Ca=null,lm=wu=ls=0,_n=oa=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$r=null}return t}function sS(t,e){do{var n=It;try{if($p(),nc.current=Hc,zc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zc=!1}if(as=0,Gt=Ot=Mt=null,ra=!1,Ta=0,am.current=null,n===null||n.return===null){kt=1,Ca=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=g0(o);if(p!==null){p.flags&=-257,v0(p,o,a,s,e),p.mode&1&&m0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){m0(s,c,e),dm();break e}l=Error(oe(426))}}else if(_t&&a.mode&1){var g=g0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),v0(g,o,a,s,e),jp(po(l,a));break e}}s=l=po(l,a),kt!==4&&(kt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Hy(s,l,e);c0(s,h);break e;case 1:a=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wr===null||!wr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Gy(s,a,e);c0(s,y);break e}}s=s.return}while(s!==null)}lS(n)}catch(E){e=E,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function oS(){var t=Gc.current;return Gc.current=Hc,t===null?Hc:t}function dm(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(ls&268435455)&&!(wu&268435455)||gr(Wt,$t)}function jc(t,e){var n=Ze;Ze|=2;var i=oS();(Wt!==t||$t!==e)&&(Vi=null,es(t,e));do try{oA();break}catch(r){sS(t,r)}while(!0);if($p(),Ze=n,Gc.current=i,It!==null)throw Error(oe(261));return Wt=null,$t=0,kt}function oA(){for(;It!==null;)aS(It)}function aA(){for(;It!==null&&!DT();)aS(It)}function aS(t){var e=uS(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?lS(t):It=e,am.current=null}function lS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eA(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=Qw(n,e,Cn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function Xr(t,e,n){var i=ot,r=Wn.transition;try{Wn.transition=null,ot=1,lA(t,e,n,i)}finally{Wn.transition=r,ot=i}return null}function lA(t,e,n,i){do ro();while(xr!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HT(t,s),t===Wt&&(It=Wt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,fS(Cc,function(){return ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=ot;ot=1;var a=Ze;Ze|=4,am.current=null,nA(t,n),nS(n,t),bw(Vd),Rc=!!Bd,Vd=Bd=null,t.current=n,iA(n),IT(),Ze=a,ot=o,Wn.transition=s}else t.current=n;if(vl&&(vl=!1,xr=t,Xc=r),s=t.pendingLanes,s===0&&(wr=null),FT(n.stateNode),Mn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wc)throw Wc=!1,t=oh,oh=null,t;return Xc&1&&t.tag!==0&&ro(),s=t.pendingLanes,s&1?t===ah?aa++:(aa=0,ah=t):aa=0,Ur(),null}function ro(){if(xr!==null){var t=Hx(Xc),e=Wn.transition,n=ot;try{if(Wn.transition=null,ot=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Xc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:sa(8,f,s)}var d=f.child;if(d!==null)d.return=f,Te=d;else for(;Te!==null;){f=Te;var u=f.sibling,p=f.return;if(Qy(f),f===c){Te=null;break}if(u!==null){u.return=p,Te=u;break}Te=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Te=S;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(E){wt(a,a.return,E)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(Ze=r,Ur(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{ot=n,Wn.transition=e}}return!1}function P0(t,e,n){e=po(n,e),e=Hy(t,e,1),t=Tr(t,e,1),e=dn(),t!==null&&(Ga(t,1,e),Mn(t,e))}function wt(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=po(n,t),t=Gy(e,t,1),e=Tr(e,t,1),t=dn(),e!==null&&(Ga(e,1,t),Mn(e,t));break}}e=e.return}}function cA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&($t&n)===n&&(kt===4||kt===3&&($t&130023424)===$t&&500>bt()-cm?es(t,0):lm|=n),Mn(t,e)}function cS(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=dn();t=Zi(t,e),t!==null&&(Ga(t,e,n),Mn(t,n))}function uA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cS(t,n)}function fA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),cS(t,n)}var uS;uS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,Jw(t,e,n);xn=!!(t.flags&131072)}else xn=!1,_t&&e.flags&1048576&&py(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rc(t,e),t=e.pendingProps;var r=co(e,an.current);io(e,n),r=nm(null,e,i,t,r,n);var s=im();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zp(e),r.updater=Eu,e.stateNode=r,r._reactInternals=e,qd(e,i,t,n),e=Jd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Wp(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hA(i),t=ti(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=y0(null,e,i,t,n);break e;case 11:e=_0(null,e,i,t,n);break e;case 14:e=x0(null,e,i,ti(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),y0(t,e,i,r,n);case 3:e:{if(Yy(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yy(t,e),Bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=po(Error(oe(423)),e),e=S0(t,e,i,n,r);break e}else if(i!==r){r=po(Error(oe(424)),e),e=S0(t,e,i,n,r);break e}else for(bn=Er(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ri=null,n=_y(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),i===r){e=Ji(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return Sy(e),t===null&&jd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zd(i,r)?o=null:s!==null&&zd(i,s)&&(e.flags|=32),jy(t,e),un(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return $y(t,e,n);case 4:return Jp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fo(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),_0(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Oc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!yn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,io(e,n),r=jn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),x0(t,e,i,r,n);case 15:return Wy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),rc(t,e),e.tag=1,Sn(i)?(t=!0,Nc(e)):t=!1,io(e,n),zy(e,i,r),qd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return qy(t,e,n);case 22:return Xy(t,e,n)}throw Error(oe(156,e.tag))};function fS(t,e){return kx(t,e)}function dA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new dA(t,e,n,i)}function hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hA(t){if(typeof t=="function")return hm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dp)return 11;if(t===Ip)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return ts(n.children,r,s,e);case Lp:o=8,r|=8;break;case xd:return t=Gn(12,n,e,r|2),t.elementType=xd,t.lanes=s,t;case yd:return t=Gn(13,n,e,r),t.elementType=yd,t.lanes=s,t;case Sd:return t=Gn(19,n,e,r),t.elementType=Sd,t.lanes=s,t;case Sx:return Au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xx:o=10;break e;case yx:o=9;break e;case Dp:o=11;break e;case Ip:o=14;break e;case dr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ts(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Au(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=Sx,t.lanes=n,t.stateNode={isHidden:!1},t}function mf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function gf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pm(t,e,n,i,r,s,o,a,l){return t=new pA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(s),t}function mA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dS(t){if(!t)return Lr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return dy(t,n,e)}return e}function hS(t,e,n,i,r,s,o,a,l){return t=pm(n,i,!0,t,r,s,o,a,l),t.context=dS(null),n=t.current,i=dn(),r=Ar(n),s=ji(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,Ga(t,r,i),Mn(t,i),t}function Cu(t,e,n,i){var r=e.current,s=dn(),o=Ar(r);return n=dS(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,o),t!==null&&(ci(t,r,o,s),tc(t,r,o)),o}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function L0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mm(t,e){L0(t,e),(t=t.alternate)&&L0(t,e)}function gA(){return null}var pS=typeof reportError=="function"?reportError:function(t){console.error(t)};function gm(t){this._internalRoot=t}bu.prototype.render=gm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Cu(t,e,null,null)};bu.prototype.unmount=gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){Cu(null,t,null,null)}),e[Ki]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&Yx(t)}};function vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function vA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yc(o);s.call(c)}}var o=hS(e,i,t,0,null,!1,!1,"",D0);return t._reactRootContainer=o,t[Ki]=o.current,xa(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yc(l);a.call(c)}}var l=pm(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=l,t[Ki]=l.current,xa(t.nodeType===8?t.parentNode:t),cs(function(){Cu(e,l,n,i)}),l}function Pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yc(o);a.call(l)}}Cu(e,o,t,r)}else o=vA(n,e,t,r,i);return Yc(o)}Gx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(Fp(e,n|1),Mn(e,bt()),!(Ze&6)&&(mo=bt()+500,Ur()))}break;case 13:cs(function(){var i=Zi(t,1);if(i!==null){var r=dn();ci(i,t,1,r)}}),mm(t,1)}};Op=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=dn();ci(e,t,134217728,n)}mm(t,134217728)}};Wx=function(t){if(t.tag===13){var e=Ar(t),n=Zi(t,e);if(n!==null){var i=dn();ci(n,t,e,i)}mm(t,e)}};Xx=function(){return ot};jx=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Ld=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yu(i);if(!r)throw Error(oe(90));Ex(i),Td(i,r)}}}break;case"textarea":wx(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};Dx=um;Ix=cs;var _A={usingClientEntryPoint:!1,Events:[Xa,Vs,yu,Px,Lx,um]},No={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xA={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fx(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{gu=_l.inject(xA),Ti=_l}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(e))throw Error(oe(200));return mA(t,e,null,n)};Nn.createRoot=function(t,e){if(!vm(t))throw Error(oe(299));var n=!1,i="",r=pS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pm(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,xa(t.nodeType===8?t.parentNode:t),new gm(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Fx(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return cs(t)};Nn.hydrate=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Pu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!vm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=pS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hS(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Nn.render=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Pu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(oe(40));return t._reactRootContainer?(cs(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=um;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Pu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function mS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mS)}catch(t){console.error(t)}}mS(),mx.exports=Nn;var yA=mx.exports,I0=yA;vd.createRoot=I0.createRoot,vd.hydrateRoot=I0.hydrateRoot;function SA({words:t,typeSpeed:e=70,deleteSpeed:n=35,pause:i=1500,className:r=""}){const s=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[o,a]=ae.useState(0),[l,c]=ae.useState(s?t[0]:""),[f,d]=ae.useState(!1);return ae.useEffect(()=>{if(s)return;const u=t[o%t.length];let p;return!f&&l===u?p=setTimeout(()=>d(!0),i):f&&l===""?(d(!1),a(m=>(m+1)%t.length)):p=setTimeout(()=>{c(m=>f?u.slice(0,m.length-1):u.slice(0,m.length+1))},f?n:e),()=>clearTimeout(p)},[l,f,o,t,e,n,i,s]),D.jsxs("span",{className:`typewriter ${r}`,children:[D.jsx("span",{className:"typewriter-text",children:l}),!s&&D.jsx("span",{className:"typewriter-cursor","aria-hidden":"true"})]})}const _m=ae.createContext({});function xm(t){const e=ae.useRef(null);return e.current===null&&(e.current=t()),e.current}const MA=typeof window<"u",ba=MA?ae.useLayoutEffect:ae.useEffect,Lu=ae.createContext(null);function ym(t,e){t.indexOf(e)===-1&&t.push(e)}function $c(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ii=(t,e,n)=>n>e?e:n<t?t:n;let Du=()=>{};const bi={},Sm=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),gS=t=>typeof t=="object"&&t!==null,Mm=t=>/^0[^.\s]+$/u.test(t);function vS(t){let e;return()=>(e===void 0&&(e=t()),e)}const ui=t=>t,Ya=(...t)=>t.reduce((e,n)=>i=>n(e(i))),us=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class qc{constructor(){this.subscriptions=[]}add(e){return ym(this.subscriptions,e),()=>this.remove(e)}remove(e){$c(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xn=t=>t*1e3,Rn=t=>t/1e3,_S=(t,e)=>e?t*(1e3/e):0,vf=(t,e,n)=>t*(3*(1-t)*((1-t)*e+t*n)+t*t);function $a(t,e,n,i){return t===e&&n===i?ui:r=>{let s=0,o=1,a=r;for(let l=0;;l++){a>=s&&a<=o||(a=(s+o)/2);const c=vf(a,t,n)-r;if(c*c<1e-28||l===40)break;c>0?o=a:s=a,a-=c*1e-7/(vf(a+1e-7,t,n)-r-c)}return vf(a,e,i)}}const xS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,yS=t=>e=>1-t(1-e),SS=$a(.33,1.53,.69,.99),Em=yS(SS),MS=xS(Em),ES=t=>t>=1?1:(t*=2)<1?.5*Em(t):.5*(2-Math.pow(2,-10*(t-1))),Tm=t=>1-Math.sin(Math.acos(t)),TS=yS(Tm),wS=xS(Tm),EA=$a(.42,0,1,1),TA=$a(0,0,.58,1),wm=$a(.42,0,.58,1),wA=t=>Array.isArray(t)&&typeof t[0]!="number",Am=t=>Array.isArray(t)&&typeof t[0]=="number",AA={linear:ui,easeIn:EA,easeInOut:wm,easeOut:TA,circIn:Tm,circInOut:wS,circOut:TS,backIn:Em,backInOut:MS,backOut:SS,anticipate:ES},CA=t=>typeof t=="string",N0=t=>{if(Am(t)){Du(t.length===4);const[e,n,i,r]=t;return $a(e,n,i,r)}else if(CA(t))return AA[t];return t},Dt={delta:0,timestamp:0,isProcessing:!1};let lc;function bA(){lc=void 0}const St={now:()=>(lc===void 0&&St.set(Dt.isProcessing||bi.useManualTiming?Dt.timestamp:performance.now()),lc),set:t=>{lc=t,queueMicrotask(bA)}},so=t=>Math.round(t*1e5)/1e5,AS=t=>e=>typeof e=="string"&&e.startsWith(t),CS=AS("--"),RA=AS("var(--"),Iu=t=>RA(t)?PA.test(t.split("/*")[0].trim()):!1,PA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function _f(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Eo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ra={...Eo,transform:t=>Ii(0,1,t)},xl={...Eo,default:1},Cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function LA(t){return t==null}const DA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bm=(t,e)=>n=>!!(typeof n=="string"&&DA.test(n)&&n.startsWith(t)||e&&!LA(n)&&Object.prototype.hasOwnProperty.call(n,e)),bS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Cm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},IA=t=>Ii(0,255,t),xf={...Eo,transform:t=>Math.round(IA(t))},Kr={test:bm("rgb","red"),parse:bS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+xf.transform(t)+", "+xf.transform(e)+", "+xf.transform(n)+", "+so(Ra.transform(i))+")"};function NA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const uh={test:bm("#"),parse:NA,transform:Kr.transform},qa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Bi=qa("deg"),Ai=qa("%"),we=qa("px"),UA=qa("vh"),FA=qa("vw"),U0={...Ai,parse:t=>Ai.parse(t)/100,transform:t=>Ai.transform(t*100)},Ys={test:bm("hsl","hue"),parse:bS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ai.transform(so(e))+", "+Ai.transform(so(n))+", "+so(Ra.transform(i))+")"},Ft={test:t=>Kr.test(t)||uh.test(t)||Ys.test(t),parse:t=>Kr.test(t)?Kr.parse(t):Ys.test(t)?Ys.parse(t):uh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Kr.transform(t):Ys.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},OA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,RS=new RegExp(Cm.source),PS=new RegExp(OA.source,"i");function kA(t){return isNaN(t)&&typeof t=="string"&&(RS.test(t)||PS.test(t))}const LS="number",DS="color",BA="var",VA="var(",F0="${}",zA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function HA(t){const e=t.toString();return RS.test(e)||PS.test(e)}function Pa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(zA,l=>(Ft.test(l)?(i.color.push(s),r.push(DS),n.push(Ft.parse(l))):l.startsWith(VA)?(i.var.push(s),r.push(BA),n.push(l)):(i.number.push(s),r.push(LS),n.push(parseFloat(l))),++s,F0)).split(F0);return{values:n,split:a,indexes:i,types:r}}function GA(t){return Pa(t).values}function IS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===LS?r+=so(i[s]):o===DS?r+=Ft.transform(i[s]):r+=i[s]}return r}}function WA(t){return IS(Pa(t))}const XA=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t,jA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:XA(t);function YA(t){const e=Pa(t);return IS(e)(e.values.map((i,r)=>jA(i,e.split[r])))}const Ln={test:kA,parse:GA,createTransformer:WA,getAnimatableNone:YA};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function $A({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=yf(l,a,t+1/3),s=yf(l,a,t),o=yf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Kc(t,e){return n=>n>0?e:t}const st=(t,e,n)=>t+(e-t)*n,Sf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},qA=[uh,Kr,Ys],KA=t=>qA.find(e=>e.test(t));function O0(t){const e=KA(t);if(!e)return!1;let n=e.parse(t);return e===Ys&&(n=$A(n)),n}const k0=(t,e)=>{const n=O0(t),i=O0(e);if(!n||!i)return Kc(t,e);const r={...n};return s=>(r.red=Sf(n.red,i.red,s),r.green=Sf(n.green,i.green,s),r.blue=Sf(n.blue,i.blue,s),r.alpha=st(n.alpha,i.alpha,s),Kr.transform(r))},fh=new Set(["none","hidden"]);function ZA(t,e){return fh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function JA(t,e){return n=>st(t,e,n)}function Rm(t){return typeof t=="number"?JA:typeof t=="string"?Iu(t)?Kc:Ft.test(t)?k0:t1:Array.isArray(t)?NS:typeof t=="object"?Ft.test(t)?k0:QA:Kc}function NS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Rm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function QA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Rm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function e1(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const t1=(t,e)=>{const n=Ln.createTransformer(e),i=Pa(t),r=Pa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?fh.has(t)&&!r.values.length||fh.has(e)&&!i.values.length?ZA(t,e):Ya(NS(e1(i,r),r.values),n):Kc(t,e)},B0=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function n1(t,e){const n=B0.exec(t);if(!n)return;const i=B0.exec(e);if(!i||n[2]!==i[2])return;const r=n[2],s=parseFloat(n[1]),o=parseFloat(i[1]);return a=>so(st(s,o,a))+r}function Pm(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return st(t,e,n);if(typeof t=="string"&&typeof e=="string"){const r=n1(t,e);if(r)return r}return Rm(t)(t,e)}const yl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function i1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new Set;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(n.add(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const f=e;e=n,n=f,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const r1=40;function US(t,e,n={delta:0,timestamp:0,isProcessing:!1}){let i=!1,r=!0;const s=()=>i=!0,o=yl.reduce((S,y)=>(S[y]=i1(s),S),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:d,preRender:u,render:p,postRender:m}=o,x=()=>{const S=bi.useManualTiming,y=S?n.timestamp:performance.now();i=!1,S||(n.delta=r?1e3/60:Math.max(Math.min(y-n.timestamp,r1),1)),n.timestamp=y,n.isProcessing=!0,a.process(n),l.process(n),c.process(n),f.process(n),d.process(n),u.process(n),p.process(n),m.process(n),n.isProcessing=!1,i&&e&&(r=!1,t(x))},g=()=>{i=!0,r=!0,n.isProcessing||t(x)};return{schedule:yl.reduce((S,y)=>{const E=o[y];return S[y]=(A,w=!1,_=!1)=>(i||g(),E.schedule(A,w,_)),S},{}),cancel:S=>{for(let y=0;y<yl.length;y++)o[yl[y]].cancel(S)},state:n,steps:o}}const{schedule:lt,cancel:Dr,steps:Mf}=US(typeof requestAnimationFrame<"u"?requestAnimationFrame:ui,!0,Dt),FS=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>lt.update(e,n),stop:()=>Dr(e),now:()=>Dt.isProcessing?Dt.timestamp:St.now()}},OS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Lm=2e4;function Dm(t,e=50,n=Lm,i){let r=0,s=t.next(r);for(;!s.done&&r<n;)r+=e,s=t.next(r);return r>=n?1/0:r}function s1(t,e=100,n){const{keyframes:i,velocity:r}=t,s=i&&i[i.length-1]-i[0],o=n({...t,velocity:r&&s?r*e/s:r,keyframes:[0,e]}),a=Math.min(Dm(o),Lm);return{type:"keyframes",ease:l=>o.next(a*l).value/e,duration:Rn(a)}}const jt={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},kS=t=>t<0?1/Math.max(1+t,jt.minDamping):Math.max(1-t,jt.minDamping);function BS(t,e){if(!(t>1))return 1;const n=Math.sqrt(t*t-1),i=t-n,r=t+n,s=2*n*Math.exp(-e)*(1+e);return VS(o=>r*Math.exp(-i*o)-i*Math.exp(-r*o)-s,o=>Math.exp(-r*o)-Math.exp(-i*o),e)/e}function dh(t,e){return t*Math.sqrt(1-e*e)}const o1=12;function VS(t,e,n){let i=n;for(let r=1;r<o1;r++)i=i-t(i)/e(i);return i}const Ef=.001;function a1({duration:t=jt.duration,bounce:e=jt.bounce}){let n,i;const r=kS(e);t=Ii(jt.minDuration,jt.maxDuration,Rn(t)),r<1?(n=c=>{const f=c*r,d=f*t,u=dh(c,r),p=Math.exp(-d);return Ef-f/u*p},i=c=>{const d=c*r*t,u=r*r*c*c*t,p=Math.exp(-d),m=dh(c*c,r);return(-n(c)+Ef>0?-1:1)*-u*p/m}):(n=c=>{const f=Math.exp(-c*t),d=c*t+1;return-Ef+f*d},i=c=>{const f=Math.exp(-c*t),d=-c*(t*t);return f*d});const s=5/t,o=VS(n,i,s),a=o*BS(r,o*t),l=a*a;return{stiffness:l,damping:r*2*Math.sqrt(l),duration:Xn(t)}}const hh=(t,e)=>(e?t>=0:t>0)&&t<1/0;function Tf(t,e){if(hh(t,e))return t}function l1(t){const e=Tf(t.stiffness),n=Tf(t.damping,!0),i=Tf(t.mass),r={...t,stiffness:e??jt.stiffness,damping:n??jt.damping,mass:i??jt.mass,isResolvedFromDuration:!1,isTimeDefined:(e??n??i)===void 0&&(t.duration!==void 0||t.bounce!==void 0)};if(r.isTimeDefined){if(t.visualDuration){const s=kS(t.bounce||0),o=2*Math.PI/(t.visualDuration*1.2)*BS(s,2*Math.PI/1.2);r.stiffness=o*o,r.damping=2*s*Math.sqrt(r.stiffness)}else Object.assign(r,a1(r)),r.isResolvedFromDuration=!0;(!hh(r.stiffness)||!hh(r.damping,!0))&&(r.stiffness=jt.stiffness,r.damping=jt.damping)}return r}function Zc(t=jt.visualDuration,e=jt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t,i=n.keyframes[0],r=n.keyframes[n.keyframes.length-1],s={done:!1,value:i},{stiffness:o,damping:a,mass:l,duration:c,isResolvedFromDuration:f,isTimeDefined:d}=l1({...n}),u=w=>d?0:-Rn(w),p=a/(2*Math.sqrt(o*l)),m=Rn(Math.sqrt(o/l)),x=p*m,g={target:r,delta:r-i,velocity:u(n.velocity||0)||0,restSpeed:0,restDelta:0},h=()=>{const w=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(w?jt.restSpeed.granular:jt.restSpeed.default),g.restDelta=n.restDelta||(w?jt.restDelta.granular:jt.restDelta.default)};h();let v,S,y;if(p<1){const w=dh(m,p),_={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};y=()=>{_.A=(g.velocity+x*g.delta)/w,_.sinC=x*_.A+g.delta*w,_.cosC=x*g.delta-_.A*w};const C=P=>{P!==_.t&&(_.t=P,_.env=Math.exp(-x*P),_.sin=Math.sin(w*P),_.cos=Math.cos(w*P))};v=P=>(C(P),g.target-_.env*(_.A*_.sin+g.delta*_.cos)),S=P=>(C(P),_.env*(_.sinC*_.sin+_.cosC*_.cos))}else if(p===1){v=_=>g.target-Math.exp(-m*_)*(g.delta+(g.velocity+m*g.delta)*_);const w={C:0};y=()=>{w.C=g.velocity+m*g.delta},S=_=>Math.exp(-m*_)*(m*w.C*_-g.velocity)}else{const w=m*Math.sqrt(p*p-1),_=x-w,C=x+w,P=d?1/0:300/w,N=(L,b)=>Math.exp(b>P?-L*P-x*(b-P):-L*b),O={S:0,F:0};y=()=>{const L=(g.velocity+x*g.delta)/w;O.S=(g.delta+L)/2,O.F=(g.delta-L)/2},v=L=>g.target-O.S*N(_,L)-O.F*N(C,L),S=L=>_*O.S*N(_,L)+C*O.F*N(C,L)}y();const E=f&&c||null,A={calculatedDuration:E,retarget:(w,_)=>{g.target=w[w.length-1],g.delta=g.target-w[0],g.velocity=u(_),n.restSpeed&&n.restDelta||h(),A.calculatedDuration=E,s.done=!1,y()},velocity:w=>Xn(S(w)),next:w=>{const _=v(w);if(f)s.done=w>=c;else{const C=Xn(S(w));s.done=Math.abs(C)<=g.restSpeed&&Math.abs(g.target-_)<=g.restDelta}return s.value=s.done?g.target:_,s},toString:()=>{const w=Math.min(Dm(A),Lm),_=OS(C=>A.next(w*C).value,w,30);return w+"ms "+_},toTransition:()=>{}};return A}Zc.applyToOptions=t=>{const e=s1(t,100,Zc);return t.ease=e.ease,t.duration=Xn(e.duration),t.type="keyframes",t};function Jc({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=w=>w<a||w>l,m=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let x=n*e;const g=d+x,h=o===void 0?g:o(g);h!==g&&(x=h-d);const v=w=>-x*Math.exp(-w/i),S=w=>{const _=v(w);u.done=Math.abs(_)<=c,u.value=u.done?h:h+_};let y,E;const A=w=>{p(u.value)&&(y=w,E=Zc({keyframes:[u.value,m(u.value)],velocity:-v(w)/i*1e3,damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return A(0),{calculatedDuration:null,next:w=>{let _=!1;return!E&&y===void 0&&(_=!0,S(w),A(w)),y!==void 0&&w>=y?E.next(w-y):(!_&&S(w),u)}}}function c1(t,e,n){const i=[],r=n||bi.mix||Pm,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||ui:e;a=Ya(l,a)}i.push(a)}return i}function u1(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Du(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=c1(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=us(t[d],t[d+1],f);return a[d](u)};return n?f=>c(Ii(t[0],t[s-1],f)):c}function f1(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=us(0,e,i);t.push(st(n,1,r))}}function zS(t){const e=[0];return f1(e,t.length-1),e}function d1(t,e){return t.map(n=>n*e)}function h1(t,e){return t.map(()=>e||wm).splice(0,t.length-1)}function br({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=wA(i)?i.map(N0):N0(i)||wm,s={done:!1,value:e[0]};if(e.length===2&&!Array.isArray(r)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){const[l,c]=e,f=l===c?void 0:(bi.mix||Pm)(l,c);return{calculatedDuration:t,next:d=>(s.value=f?f(r(t>0?Ii(0,1,d/t):1)):c,s.done=d>=t,s)}}const o=d1(n&&n.length===e.length?n:zS(e),t),a=u1(o,e,{ease:Array.isArray(r)?r:h1(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const p1=5;function m1(t,e,n){const i=Math.max(e-p1,0);return _S(n-t(i),e-i)}function g1(t,e,n=0){return e<=0?n:t.velocity?t.velocity(e):m1(i=>t.next(i).value,e,t.next(e).value)}const v1=t=>t!==null;function La(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(v1),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const _1={decay:Jc,inertia:Jc,tween:br,keyframes:br,spring:Zc};function HS(t){typeof t.type=="string"&&(t.type=_1[t.type])}const x1=40,GS=(t,e)=>e-t>x1&&!bi.useManualTiming?e:t;function WS(t,e){return{kind:t,animation:e,timestamp:St.now(),frameTimestamp:Dt.timestamp,frameIsProcessing:Dt.isProcessing}}function XS(t,e,n){const i=globalThis.__MOTION_INSPECT__;if(i)try{i({...WS("animation-start",t),options:n?{...e,...n}:e})}catch{}}function y1(t,e){const n=globalThis.__MOTION_INSPECT__;if(n)try{n({...WS("layout-animation-start",t),node:e})}catch{}}class Im{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){var e;this.isResolved=!0,(e=this._resolve)==null||e.call(this)}then(e,n){return this.finished.then(e,n)}}const S1=t=>t/100,ph=t=>Math.round(t*1e4)/1e4;class Da extends Im{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==St.now()&&this.tick(St.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),XS(this,this.options)}initAnimation(){const{options:e}=this;HS(e);const{type:n=br,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||br;l!==br&&typeof a[0]!="number"&&(this.mixKeyframes=Ya(S1,Pm(a[0],a[1])),a=[0,100]);const c=l(a===e.keyframes?e:{...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Dm(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,calculatedDuration:s}=this;if(this.startTime===null)return i.next(0);const{delay:o=0,keyframes:a,type:l,onUpdate:c,finalKeyframe:f}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=GS(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const d=this.currentTime-o*(this.playbackSpeed>=0?1:-1),u=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);const p=this.generate(this.currentTime,u);let{done:m}=p;!u&&s!==null&&(m=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&m);return x&&l!==Jc&&(p.value=La(a,this.options,f,this.speed)),c&&c(p.value),x&&this.finish(),p}at(e){return this.holdTime??ph((e-this.startTime)*this.playbackSpeed)}sampleAt(e,n){const{options:i,totalDuration:r}=this,s=this.at(e)-(i.delay||0);return s>=r&&i.type!==Jc?La(i.keyframes,i,n?void 0:i.finalKeyframe):this.generate(Math.max(s,0),s<0).value}generate(e,n){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a}=this,{keyframes:l,repeat:c,repeatType:f,repeatDelay:d}=this.options;let u=e,p=i;if(c){const x=Math.min(e,r)/a;let g=Math.floor(x),h=x%1;!h&&x>=1&&(h=1),h===1&&g--,g=Math.min(g,c+1),!!(g%2)&&(f==="reverse"?(h=1-h,d&&(h-=d/a)):f==="mirror"&&(p=o)),u=Ii(0,1,h)*a}let m;return n?(this.delayState.value=l[0],m=this.delayState):m=p.next(u),s&&!n&&(m.value=s(m.value)),m}then(e,n){return this.finished.then(e,n)}get duration(){return Rn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Rn(e)}get time(){return Rn(this.currentTime)}set time(e){e=Xn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return g1(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(St.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Rn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=FS,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime/(this.playbackSpeed||1):this.startTime||(this.startTime=n??(this.pendingStartTime=i)),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(St.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}const M1=new Set(["brightness","contrast","saturate","opacity"]);function E1(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Cm)||[];if(!i)return t;const r=n.replace(i,"");let s=M1.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const T1=/\b([a-z-]*)\(.*?\)/gu,mh={...Ln,getAnimatableNone:t=>{const e=t.match(T1);return e?e.map(E1).join(" "):t}},gh={...Ln,getAnimatableNone:t=>{const e=Ln.parse(t);return Ln.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},V0={...Eo,transform:Math.round},w1={rotate:Bi,pathRotation:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:xl,scaleX:xl,scaleY:xl,scaleZ:xl,skew:Bi,skewX:Bi,skewY:Bi,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:Ra,originX:U0,originY:U0,originZ:we},Ia={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,inset:we,insetBlock:we,insetBlockStart:we,insetBlockEnd:we,insetInline:we,insetInlineStart:we,insetInlineEnd:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,paddingBlock:we,paddingBlockStart:we,paddingBlockEnd:we,paddingInline:we,paddingInlineStart:we,paddingInlineEnd:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,marginBlock:we,marginBlockStart:we,marginBlockEnd:we,marginInline:we,marginInlineStart:we,marginInlineEnd:we,fontSize:we,backgroundPositionX:we,backgroundPositionY:we,...w1,zIndex:V0,fillOpacity:Ra,strokeOpacity:Ra,numOctaves:V0},A1={...Ia,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:mh,WebkitFilter:mh,mask:gh,WebkitMask:gh},jS=t=>A1[t],C1=new Set([mh,gh]);function Nm(t,e){let n=jS(t);return C1.has(n)||(n=Ln),n.getAnimatableNone?n.getAnimatableNone(e):void 0}function b1(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Zr=t=>t*180/Math.PI,vh=t=>{const e=Zr(Math.atan2(t[1],t[0]));return _h(e)},R1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:vh,rotateZ:vh,skewX:t=>Zr(Math.atan(t[1])),skewY:t=>Zr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},_h=t=>(t=t%360,t<0&&(t+=360),t),z0=vh,H0=t=>Math.hypot(t[0],t[1]),G0=t=>Math.hypot(t[4],t[5]),P1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:H0,scaleY:G0,scaleZ:t=>Math.hypot(t[8],t[9],t[10]),scale:t=>(H0(t)+G0(t))/2,rotateX:t=>_h(Zr(Math.atan2(t[6],t[5]))),rotateY:t=>_h(Zr(Math.atan2(-t[2],t[0]))),rotateZ:z0,rotate:z0,skewX:t=>Zr(Math.atan(t[4])),skewY:t=>Zr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Na(t){return t.includes("scale")?1:0}function xh(t,e){if(!t||t==="none")return Na(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=P1,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=R1,r=a}if(!r)return Na(e);const s=i[e],o=r[1].split(",").map(D1);return typeof s=="function"?s(o):o[s]}const L1=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return xh(n,e)};function D1(t){return parseFloat(t.trim())}const Qi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rr=new Set([...Qi,"pathRotation"]),W0=t=>t===Eo||t===we,I1=new Set(["x","y","z"]),N1=Qi.filter(t=>!I1.has(t));function U1(t){const e=[];return N1.forEach(n=>{const i=t.getValue(n);if(i!==void 0){const r=i.get(),s=n.startsWith("scale")?1:0;if(r===s)return;e.push([n,r]),i.set(s)}}),e}const F1=new Set(["bottom","right"]);function X0(t,e,n,i,r,s){const o=parseFloat(t);if(!isNaN(o))return o;const{min:a,max:l}=e()[n],c=l-a;return s==="border-box"?c:c-parseFloat(i)-parseFloat(r)}const ns={width:({width:t,paddingLeft:e="0",paddingRight:n="0",boxSizing:i},r)=>X0(t,r,"x",e,n,i),height:({height:t,paddingTop:e="0",paddingBottom:n="0",boxSizing:i},r)=>X0(t,r,"y",e,n,i),top:({top:t})=>parseFloat(t),left:({left:t})=>parseFloat(t),bottom:({top:t},e)=>{const{y:n}=e();return parseFloat(t)+(n.max-n.min)},right:({left:t},e)=>{const{x:n}=e();return parseFloat(t)+(n.max-n.min)},x:({transform:t})=>xh(t,"x"),y:({transform:t})=>xh(t,"y")};ns.translateX=ns.x;ns.translateY=ns.y;const is=new Set;let yh=!1,Sh=!1,Mh=!1;function YS(){if(Sh){const t=[],e=new Set,n=new Set;is.forEach(r=>{r.needsMeasurement&&(t.push(r),e.add(r.element),F1.has(r.name)&&n.add(r.element))});const i=new Map;n.forEach(r=>{const s=U1(r);s.length&&(i.set(r,s),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const s=i.get(r);s&&s.forEach(([o,a])=>{var l;(l=r.getValue(o))==null||l.set(a)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Sh=!1,yh=!1,is.forEach(t=>t.complete(Mh)),is.clear()}function $S(){is.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Sh=!0)})}function O1(){Mh=!0,$S(),YS(),Mh=!1}function k1(t,e,n){if(typeof t=="string"){if(Sm(t)||Mm(t))return parseFloat(t);if(!Ln.test(t)&&Ln.test(n))return Nm(e,n)}return t??void 0}class Um{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(is.add(this),yh||(yh=!0,lt.read($S),lt.resolveKeyframes(YS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=k1(i.readValue(n,o),n,o);a!==void 0&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}b1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),is.delete(this)}cancel(){this.state==="scheduled"&&(is.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const B1=t=>t.startsWith("--");function qS(t,e,n){B1(e)?t.style.setProperty(e,n):t.style[e]=n}const V1={};function KS(t,e){const n=vS(t);return()=>V1[e]??n()}const z1=KS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Fm=KS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$s=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Eh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:$s([0,.65,.55,1]),circOut:$s([.55,0,1,.45]),backIn:$s([.31,.01,.66,-.59]),backOut:$s([.33,1.53,.69,.99])};function ZS(t,e){if(t)return typeof t=="function"?Fm()?OS(t,e):"ease-out":Am(t)?$s(t):Array.isArray(t)?t.map(n=>ZS(n,e)||Eh.easeOut):Eh[t]}function H1(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const d=ZS(a,r);Array.isArray(d)&&(f.easing=d);const u={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(u.pseudoElement=c),t.animate(f,u)}function JS(t){return typeof t=="function"&&"applyToOptions"in t}function G1({type:t,...e}){return JS(t)&&Fm()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class QS extends Im{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Du(typeof e.type!="string");const c=G1(e);this.animation=H1(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=La(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(f),qS(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()},XS(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Rn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Rn(e)}get time(){return Rn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:n,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&z1()?(this.animation.timeline=e,n==null||n(this.animation),ui):i(this)}}const eM={anticipate:ES,backInOut:MS,circInOut:wS};function W1(t){return t in eM}function X1(t){typeof t.ease=="string"&&W1(t.ease)&&(t.ease=eM[t.ease])}const Qc=10;class j1 extends QS{constructor(e){X1(e),HS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state==="running"?(St.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){const{motionValue:n,onUpdate:i,onComplete:r,onPlay:s,onStop:o,element:a,...l}=this.options;this.sampler=new Da({...l,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){const{state:e}=this;if(e==="running"||e==="paused")return this.sample(this.elapsed())}updateMotionValue(e){const{motionValue:n,element:i,name:r}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const{speed:s}=this,o=this.elapsed(),a=this.state==="running"&&s?Ii(0,Qc,o):0,l=this.sample(o);i&&r&&qS(i,r,l),n.setWithVelocity(this.sample(o-a*Math.sign(s)),l,a/Math.abs(s||1))}}const j0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ln.test(t)||t==="0")&&!t.startsWith("url("));function Y1(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function $1(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=j0(r,e),a=j0(s,e);return!o||!a?!1:Y1(t)||(n==="spring"||JS(n))&&i}function Th(t){t.duration=0,t.type="keyframes"}const wh=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),q1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function K1(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&q1.test(t[e]))return!0;return!1}const Y0=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),tM=vS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Z1(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!n||!(wh.has(n)||Y0.has(n)))return!1;const l=(d=e==null?void 0:e.owner)==null?void 0:d.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:f}=e.owner.getProps();return tM()&&(wh.has(n)||Y0.has(n)&&K1(a))&&(n!=="transform"||!f)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const eu=(t,e)=>e&&typeof t=="number"?e.transform(t):t,nM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},J1=Qi.length;function iM(t,e,n){let i="",r=!0;for(let o=0;o<J1;o++){const a=Qi[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const f=parseFloat(l);c=a.startsWith("scale")?f===1:f===0}if(!c||n){const f=eu(l,Ia[a]);if(!c){r=!1;const d=nM[a]||a;i+=`${d}(${f}) `}n&&(e[a]=f)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${eu(s,Ia.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}const go=new WeakMap,Q1=200,Sl=.001,eC=.1,tC=.001,nC=100,iC=t=>/^(linear|ease(In|Out|InOut))$/.test(t),wf=(t,e)=>t-e,$0=(t,e,n)=>{const i=[];for(let r=0;r<=n;r++)i.push(st(t,e,r/n));return i},cc=t=>t.motionValue.owner,uc=t=>go.get(t),qs=(t,e)=>{var n;return t.latestValues?t.latestValues[e]:(n=t.getValue(e))==null?void 0:n.get()},rC=({name:t,motionValue:e})=>{var n;return t&&Qi.includes(t)&&((n=e==null?void 0:e.owner)==null?void 0:n.current)instanceof HTMLElement&&tM()&&Fm()};function sC(t){var r;const e=cc(t),{onUpdate:n,transformTemplate:i}=e.getProps();return!t.isHandoff&&!n&&!t.hasOnUpdate&&!i&&t.type!=="inertia"&&(qs(e,"transform")||"none")==="none"&&!qs(e,"pathRotation")&&!((r=e.projection)!=null&&r.isProjecting())}class oC extends Da{constructor(e){const n=cc(e).current,{driver:i=FS}=e;let r;const s=sC(e);e.driver=a=>{const l=i(a);return{js:l,now:l.now,start:(c=!0)=>{const f=uc(n);!f||f.isJS?l.start(c):f.schedule(!1,!c)},stop:()=>{l.stop();const c=uc(n);c&&!c.isFinishing&&c.release(r)}}},super(e),r=this,this.canAccelerate=s;const{stop:o}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),o()}}get group(){return uc(cc(this.options).current)}get js(){var e;return(e=this.driver)==null?void 0:e.js}get name(){return this.options.name}timing(){const{startTime:e,speed:n,totalDuration:i}=this,{delay:r=0,repeatType:s}=this.options;return this.holdTime!==null?[1/0,0]:i===1/0?[e+r/n,this.resolvedDuration*(s==="loop"?1:2)/n||1]:[e+(r+i)/n,0]}isAccelerated(){const{group:e,state:n}=this;return(e==null?void 0:e.tracks.has(this))&&!e.isJS&&this.canAccelerate&&(n==="running"||n==="paused")}liveValue(){return this.isAccelerated()?this.sampleAt(St.now()):void 0}tween(){const{keyframes:e,type:n,ease:i,times:r,repeat:s,delay:o=0}=this.options,a=Am(i)?$s(i):iC(i)&&Eh[i];if(a&&!s&&!r&&e.length===2&&n===br&&this.holdTime===null){const l=this.startTime+o/this.speed;return[l,l+this.resolvedDuration/this.speed,a]}}boundaries(e,n){const{startTime:i,speed:r,resolvedDuration:s,options:o}=this,{delay:a=0,repeat:l=0,repeatDelay:c=0,repeatType:f,times:d,keyframes:u,type:p}=o,m=(p||br)===br?d||zS(u):[0,1],x=i+a/r,g=[];if(this.holdTime!==null||!(s>0))return g;for(let h=Math.max(0,Math.floor((e-x)*r/s));h<=l;h++){const v=x+h*s/r;if(v>n)break;for(const S of m){const y=v+(h%2&&f&&f!=="loop"?1-S:S)*(s-c)/r;y>e&&y<n&&g.push(y)}}return g}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){const e=St.now();this.options.motionValue.setWithVelocity(this.sampleAt(e-Qc,!0),this.sampleAt(e,!0),Qc)}play(){this.isStopped||((this.group||aC(cc(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&(this.sync(),this.group.schedule(!1))}complete(){super.complete();const{group:e}=this;e&&!e.isJS&&this.canAccelerate&&this.tick(St.now())}get time(){return this.isAccelerated()?Rn(Ii(0,this.totalDuration,this.at(St.now())-(this.options.delay||0))):super.time}set time(e){super.time=e,this.isAccelerated()&&this.sync()}attachTimeline(e){var n;return this.canAccelerate=!1,(n=this.group)==null||n.demote(!0),super.attachTimeline(e)}}function aC(t){const e=t.current,n=new Set,i=new Map;let r={},s=[],o=new Map,a=[],l=!1,c=!1,f=!1,d=!1,u=-1/0;const p=L=>{for(const b of n)if(b.name===L)return!0},m=(L,b)=>{const I={};for(const H of L===void 0?Qi:s){const B=i.get(H),U=L===void 0?qs(t,H):B?B.sampleAt(b>L&&!B.timing()[1]?b:L):r[H];U!==void 0&&(I[H]=U)}return I},x=(L,b)=>{let I="";const H=m(L,b);for(const B in H)I+=(nM[B]||B)+"("+eu(H[B],Ia[B])+") ";return I||"none"},g=(L=m())=>{e.style.transform=iM(L,{})},h=(L=!0)=>{L&&g(),a.forEach(({animation:b})=>b.cancel()),a=[]},v=(L,b,I=1/0)=>{const H={animation:L,offset:b,end:I};L.startTime=St.now()+b,I<1/0&&(L.onfinish=()=>{H.isDone=!0,a.some(B=>B.end===1/0)&&(L.cancel(),a=a.filter(B=>B!==H)),O.schedule(!1)}),L.oncancel=()=>a.includes(H)&&O.demote(),a.push(H)},S=(L,b,I)=>{const H=(U,k)=>Math.abs(L(k)-L(U)),B=H(b,I);for(;I-b>.01;){const U=(b+I)/2;H(b,U)>H(U,I)?I=U:b=U}return H(b,I)>B/2?[b,I]:[]},y=(L,b,I,H)=>{const B=Math.min(Q1,Math.max(2,Math.ceil((I-b)/Qc)));if(H.length*4>B)return;const U=$0(b,I,B).concat(H).sort(wf),k=le=>us(b,I,le);let G,F;for(const le of L){const Ae=U.map(ue=>le.numberAt(ue)),[Ne]=Ae,Z=Ae.map(ue=>ue-Ne),te=Z[Z.length-1],Se=Z.some(ue=>Math.abs(ue)*Sl>Math.abs(te))?0:te,Fe=Z.map(ue=>Se?ue/Se:ue);if(Se){if(!G)G=Fe,F=ue=>(le.numberAt(ue)-Ne)/Se;else if(Fe.some((ue,Be)=>!(Math.abs(ue-G[Be])<=Sl)))return}else if(Fe.some(ue=>!(Math.abs(ue)<=Sl)))return}if(!G||G.every((le,Ae)=>Math.abs(le-k(U[Ae]))<=Sl))return"linear";const J=[],re=(le,Ae=F(le))=>J.push(ph(Ae)+" "+ph(k(le)*100)+"%");return G.forEach((le,Ae)=>{Ae&&Math.abs(le-G[Ae-1])>.2&&S(F,U[Ae-1],U[Ae]).forEach(Ne=>re(Ne)),re(U[Ae],le)}),"linear("+J+")"},E=(L,b,I,H)=>{const B=[b],U=(J,re)=>L.every(le=>!(Math.abs(le.numberAt((J+re)/2)-(le.numberAt(J)+le.numberAt(re))/2)>(le.name.startsWith("scale")?tC:eC))),k=(J,re,le)=>{if(re-J<1||U(J,re))B.push(re);else if(le<4)k(J,(J+re)/2,le+1),k((J+re)/2,re,le+1);else{for(const Ae of L)B.push(...S(Ne=>Ae.numberAt(Ne),J,re));B.push(re)}},G=$0(b,I,Math.ceil((I-b)/100));for(const J of H)G.push(J,Math.min(J+.01,I));let F=b;for(const J of G.sort(wf))J>F&&k(F,J,0),F=J;return B.sort(wf)},A=L=>{let b;for(const I of L){const H=I.tween();if(!H||b!=null&&b.some((B,U)=>U<2?Math.abs(H[U]-B)>1:H[U]!==B))return;b=H}return b},w=(L,b,I,H={fill:"both"},B,U)=>{const k=L.flatMap(le=>le.boundaries(b,I)),G=U||y(L,b,I,k),F=G?[b,I]:E(L,b,I,k),J=F.map(le=>x(le,B));let re={transform:J};return G||(re.offset=F.map(le=>us(b,I,le))),J.every(le=>le===J[0])&&(g(m(b,B)),re=null),e.animate(re,{...H,duration:I-b,easing:G||"linear"})},_=L=>{let b=L,I=0,H=0;const B=[],U=[],k=new Set;i.clear(),o=new Map;for(const F of n){i.set(F.name,F);const[J,re]=F.timing(),le=J===1/0;if(o.set(F,[F.at(L),F.speed,le]),le){F.sync();continue}if(F.speed<0)return;if(re){if(I){const Ae=(J-H)/re;if(Math.abs(re-I)>1||Math.abs(Ae-Math.round(Ae))*I>1)return}else I=re,H=J;U.push(F)}else k.add(J);B.push(F),b=Math.max(b,J)}r={},s=Qi.filter(F=>{if(i.has(F))return!0;const J=r[F]=qs(t,F);return J!==void 0&&parseFloat(J)!==(F.startsWith("scale")?1:0)}),h(!1);const G=!I&&A(B);try{if(G&&G[1]>L){const[F,J,re]=G;v(w(B,F,J,void 0,void 0,re),F-L,J-F)}else b>L&&(v(w(B,L,b),0,b-L),k.forEach(F=>F<b-1&&v(e.animate(null,{duration:F-L}),0,F-L)));if(I){const F=H+Math.floor((b-H)/I)*I;v(w(U,F,F+I,{iterations:1/0,iterationStart:(b-F)/I,fill:"forwards"},b),b-L)}}catch{return}return a.length||h(),!0},C=L=>{let b,I=0;for(const H of n){const B=o.get(H);if(!B)return!1;const[U,k,G]=B,F=H.at(L),J=H.timing()[0]===1/0;if(G){if(J&&F===U)continue;return!1}const re=(F-U)/k,le=J?0:H.speed/k;if(b===void 0)b=re,I=le;else if(Math.abs(re-b)>1||le!==I)return!1}if(b===void 0)return!0;if(!a.length)return!1;for(const{offset:H,end:B,isDone:U}of a){const k=b-H;if(B<1/0&&(U?k<B-1:k<0||k>=B))return!1}for(const{animation:H,offset:B,isDone:U}of a){if(U)continue;const k=b-B;I?(H.playbackRate=I,H.startTime=L-k/I):(H.pause(),H.currentTime=k)}return!0},P=()=>n.size?!1:(f=!0,uc(e)===O&&go.delete(e),O.isJS||h(),!0),N=()=>{const L=St.now();if(O.isJS||(O.isFinishing=!0,n.forEach(H=>{const[B,U]=H.timing();H.state==="running"&&H.speed>0&&!U&&B<=L+1&&(H.complete(),r[H.name]=qs(t,H.name),o.has(H)||(l=!0))}),O.isFinishing=!1),c=!1,f||(n.forEach(({state:H},B)=>{(H==="idle"||H==="finished")&&n.delete(B)}),P()))return;for(const H of n)if(!H.canAccelerate)return O.demote(!0);O.isJS&&(O.isJS=!1,l=!0,n.forEach(H=>{var B;return(B=H.js)==null?void 0:B.stop()}));const b=l,I=d;if(l=d=!1,b||!C(L)){if(I){if(L-u<nC)return O.demote();u=L}if(!_(L))return O.demote()}},O={tracks:n,isJS:!1,isFinishing:!1,schedule(L,b){f||(l||(l=L),d||(d=!!b),c||(c=!0,Dt.isProcessing?lt.render(N,!1,!0):queueMicrotask(N)))},release(L){const{state:b}=L;(b==="idle"||b==="finished")&&n.delete(L),P()||O.schedule(!0)},check(){if(!O.isJS){for(const L in r)if(qs(t,L)!==r[L]&&!p(L))return O.schedule(!0,!0)}},demote(L){O.isJS||f||(n.forEach(b=>{b.isAccelerated()&&b.sync(),L||(b.canAccelerate=!1)}),O.isJS=!0,o=new Map,h(),n.forEach(b=>{var I;return b.state==="running"&&((I=b.js)==null?void 0:I.start())}))}};return go.set(e,O),O}class lC extends Im{constructor(e){var l;super(),this.stop=()=>{var c,f;this._animation&&(this._animation.stop(),(c=this.stopTimeline)==null||c.call(this)),(f=this.keyframeResolver)==null||f.cancel()},this.createdAt=St.now();const{keyframes:n,name:i,motionValue:r,element:s}=e,o=e;o.autoplay??(o.autoplay=!0),o.delay??(o.delay=0),o.type??(o.type="keyframes"),o.repeat??(o.repeat=0),o.repeatDelay??(o.repeatDelay=0),o.repeatType??(o.repeatType="loop");const a=(s==null?void 0:s.KeyframeResolver)||Um;this.keyframeResolver=new a(n,(c,f,d)=>this.onKeyframesResolved(c,f,o,!d),i,r,s),(l=this.keyframeResolver)==null||l.scheduleResolve()}onKeyframesResolved(e,n,i,r){var g,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=St.now();let d=!0;$1(e,s,o,a)||(d=!1,(bi.instantAnimations||!l)&&(f==null||f(La(e,i,n))),e[0]=e[e.length-1],Th(i),i.repeat=0);const{onComplete:u}=i;i.finalKeyframe=n,i.keyframes=e,i.onComplete=()=>{u==null||u(),this.notifyFinished()};const p=d&&!c&&Z1(i),m=!p&&rC(i);r&&(p||m||this.resolvedAt!==this.createdAt)&&(i.startTime??(i.startTime=GS(this.createdAt,this.resolvedAt)));let x;if(p){i.element=(h=(g=i.motionValue)==null?void 0:g.owner)==null?void 0:h.current;try{x=new j1(i)}catch{x=new Da(i)}}else m?x=new oC(i):x=new Da(i);this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this._animation.finished:super.finished}then(e,n){return this.finished.finally(e).then(()=>{})}liveValue(){var e,n;return(n=(e=this._animation)==null?void 0:e.liveValue)==null?void 0:n.call(e)}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),O1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function rM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const q0=30,cC=t=>!isNaN(parseFloat(t));class uC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=St.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=St.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){var i;return e==="change"?this.onChangeSubscribe(n):((i=this.events)[e]||(i[e]=new qc)).add(n)}onChangeSubscribe(e){const{events:n}=this;return!n.change&&!this.changeSubscriber?this.changeSubscriber=e:(n.change||(n.change=new qc,n.change.add(this.changeSubscriber),this.changeSubscriber=void 0),n.change.add(e)),()=>{var i;this.changeSubscriber===e?this.changeSubscriber=void 0:(i=n.change)==null||i.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){lt.read(()=>{var e;!this.changeSubscriber&&!((e=this.events.change)!=null&&e.getSize())&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){var i;const{current:e,changeSubscriber:n}=this;n?n(e):(i=this.events.change)==null||i.notify(e)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){var n,i;const e=(i=(n=this.animation)==null?void 0:n.liveValue)==null?void 0:i.call(n);return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=St.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>q0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q0);return _S(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{var s;this.hasAnimated=!0;let i=!1,r;r=e(()=>{var o;i=!0,(o=this.events.animationComplete)==null||o.notify(),this.animation===r&&this.clearAnimation(),n()}),i||(this.animation=r),(s=this.events.animationStart)==null||s.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function vo(t,e){return new uC(t,e)}function sM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Om(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?sM(n,t):n}const fC={type:"spring",stiffness:500,damping:25,restSpeed:10},dC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),hC={type:"keyframes",duration:.8},pC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mC=(t,{keyframes:e})=>e.length>2?hC:Rr.has(t)?t.startsWith("scale")?dC(e[1]):fC:pC,gC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vC(t){for(const e in t)if(!gC.has(e))return!0;return!1}const km=(t,e,n,i={},r,s)=>o=>{const a=Om(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Xn(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r,hasOnUpdate:!!a.onUpdate};vC(a)||Object.assign(f,mC(t,f)),f.duration&&(f.duration=Xn(f.duration)),f.repeatDelay&&(f.repeatDelay=Xn(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Th(f),f.delay===0&&(d=!0)),(bi.instantAnimations||bi.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,Th(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const u=La(f.keyframes,a);if(u!==void 0){lt.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new Da(f):new lC(f)},_C=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xC(t){const e=_C.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Bm(t,e,n=1){const[i,r]=xC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Sm(o)?parseFloat(o):o}return Iu(r)?Bm(r,e,n+1):r}function yC(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function oM(t,e,n,i){const r=s=>typeof s=="function"?s(n!==void 0?n:t.custom,...yC(i)):s;return e=r(e),typeof e=="string"&&(e=t.variants&&t.variants[e]),r(e)}function rs(t,e,n){return oM(t.getProps(),e,n,t)}const aM=(t,e)=>{var n;return e==="exit"?(n=t.presenceContext)==null?void 0:n.custom:void 0},lM=new Set(["width","height","top","left","right","bottom",...Qi]),SC=t=>Array.isArray(t);function MC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,vo(n))}function EC(t){return SC(t)?t[t.length-1]||0:t}function TC(t,e){const n=rs(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=EC(s[o]);MC(t,o,a)}}const qt=t=>!!(t&&t.getVelocity);function wC(t){return!!(qt(t)&&t.add)}function Ah(t,e){const n=t.getValue("willChange");if(wC(n))return n.add(e);if(!n&&bi.WillChange){const i=new bi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Vm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const AC="framerAppearId",cM="data-"+Vm(AC);function uM(t){return t.props[cM]}const CC=typeof window<"u";function bC({protectedKeys:t,needsAnimating:e},n){const i=n in t&&!e[n];return e[n]=!1,i}function fM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var m,x;let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?sM(s,l):l;const c=s==null?void 0:s.reduceMotion,f=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],u=r&&((m=t.animationState)==null?void 0:m.getState()[r]),p=s==null?void 0:s.path;p&&(p.animateValues?p.animateValues(g=>t.getValue(g,t.latestValues[g]??0),a,s,n,d):(x=p.animateVisualElement)==null||x.call(p,t,a,s,n,d));for(const g in a){const h=t.getValue(g,t.latestValues[g]??null),v=a[g];if(v===void 0||u&&bC(u,g))continue;const S={delay:n,...Om(s||{},g)};f&&(S.skipAnimations=!0);const y=h.get();if(y!==void 0&&!h.isAnimating()&&!Array.isArray(v)&&v===y&&!S.velocity){lt.update(()=>h.set(v));continue}let E=!1;if(CC&&window.MotionHandoffAnimation){const _=uM(t);if(_){const C=window.MotionHandoffAnimation(_,g,lt);C!==null&&(S.startTime=C,E=!0)}}Ah(t,g);const A=c??t.shouldReduceMotion;h.start(km(g,h,v,A&&lM.has(g)?{type:!1}:S,t,E));const w=h.animation;w&&d.push(w)}if(o){const g=()=>lt.update(()=>{o&&TC(t,o)});d.length?Promise.all(d).then(g):g()}return d}function Ch(t,e,n={}){const i=rs(t,e,aM(t,n.type)),r=n.transitionOverride||((i==null?void 0:i.transition)??(t.getDefaultTransition()||{})),s=()=>Promise.all(i?fM(t,i,n):[]),o=(l=0)=>{const{variantChildren:c}=t,{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=r,p=[];return c==null||c.forEach(m=>{m.notify("AnimationStart",e),p.push(Ch(m,e,{...n,delay:l+(typeof f=="function"?0:f)+rM(c,m,f,d,u)}).then(()=>m.notify("AnimationComplete",e)))}),Promise.all(p)},{when:a}=r;return a?a==="beforeChildren"?s().then(()=>o()):o().then(s):Promise.all([s(),o(n.delay)])}function RC(t,e,n={}){return t.notify("AnimationStart",e),(Array.isArray(e)?Promise.all(e.map(r=>Ch(t,r,n))):typeof e=="string"?Ch(t,e,n):Promise.all(fM(t,rs(t,e,n.custom),n))).then(()=>{t.notify("AnimationComplete",e)})}const PC={test:t=>t==="auto",parse:t=>t},LC=t=>e=>e.test(t),DC=[Eo,we,Ai,Bi,FA,UA,PC],K0=t=>DC.find(LC(t));function IC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Mm(t):!0}const NC=new Set(["auto","none","0"]);function UC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!NC.has(s)&&HA(s)&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]!==r&&(t[s]=Nm(n,r))}class FC extends Um{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){const{unresolvedKeyframes:e,element:n,motionValue:i}=this,r=e[0]??(i==null?void 0:i.get());if(!(n!=null&&n.current)||r===void 0)return!1;for(let s=0;s<e.length;s++)if(_f(s?e[s]:r))return!1;return!0}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),Iu(d))){const u=Bm(d,n.current);u!==void 0&&(e[f]=u),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!lM.has(i)||e.length!==2)return;const[r,s]=e;if(typeof r=="number"&&typeof s=="number")return;const o=K0(r),a=K0(s),l=_f(r),c=_f(s);if(l!==c&&ns[i]){this.needsMeasurement=!0;return}if(o!==a)if(W0(o)&&W0(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else ns[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||IC(e[r]))&&i.push(r);i.length&&UC(e,i,n)}measure(){const{element:e,name:n}=this;return ns[n](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){var s;const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&((s=this.motionValue)==null||s.jump(r,!1))}measureEndState(){var s,o;const{element:e,unresolvedKeyframes:n}=this;if(!e||!e.current)return;(s=this.motionValue)==null||s.jump(this.measuredOrigin,!1);const i=n.length-1,r=n[i];n[i]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}}const zm=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function fc(t){return gS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}function Hm(t){return gS(t)&&"ownerSVGElement"in t}function dM(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}function Gm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Rr.has(l)){o=!0;continue}else if(CS(l)){r[l]=c;continue}else{const f=eu(c,Ia[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=iM(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}const OC={offset:"stroke-dashoffset",array:"stroke-dasharray"},kC={offset:"strokeDashoffset",array:"strokeDasharray"};function BC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?OC:kC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const hM=["transform","opacity","clipPath","filter","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function pM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Gm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:u}=t;for(const p of hM)d[p]!==void 0&&(u[p]=d[p],delete d[p]);(u.transform||d.transformOrigin)&&(u.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&BC(d,r,s,o,!1)}function mM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function VC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function zC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Af(t){return t===void 0||t===1}function bh({scale:t,scaleX:e,scaleY:n}){return!Af(t)||!Af(e)||!Af(n)}function jr(t){return bh(t)||gM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.rotateZ||t.skewX||t.skewY}function gM(t){return Z0(t.x)||Z0(t.y)}function Z0(t){return t&&t!=="0%"}function tu(t,e,n){const i=t-n,r=e*i;return n+r}function J0(t,e,n,i,r){return r!==void 0&&(t=tu(t,r,i)),tu(t,n,i)+e}function Rh(t,e=0,n=1,i,r){t.min=J0(t.min,e,n,i,r),t.max=J0(t.max,e,n,i,r)}function vM(t,{x:e,y:n}){Rh(t.x,e.translate,e.scale,e.originPoint),Rh(t.y,n.translate,n.scale,n.originPoint)}const Q0=.999999999999,ev=1.0000000000001;function HC(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(si(t.x,-s.scroll.offset.x),si(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,vM(t,o)),i&&jr(s.latestValues)&&dc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<ev&&e.x>Q0&&(e.x=1),e.y<ev&&e.y>Q0&&(e.y=1)}function si(t,e){t.min+=e,t.max+=e}function tv(t,e,n,i,r=.5){const s=st(t.min,t.max,r);Rh(t,e,n,s,i)}function nv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function dc(t,e,n){const i=n??t;tv(t.x,nv(e.x,i.x),e.scaleX,e.scale,e.originX),tv(t.y,nv(e.y,i.y),e.scaleY,e.scale,e.originY)}function _M(t,e){return mM(zC(t.getBoundingClientRect(),e))}function GC(t,e,n){const i=_M(t,n),{scroll:r}=e;return r&&(si(i.x,r.offset.x),si(i.y,r.offset.y)),i}const{schedule:Wm}=US(queueMicrotask,!1);function WC(t,e,n){const i=qt(t)?t:vo(t);return i.start(km("",i,e,n)),i.animation}const Ua={};function XC(t,e){const n=St.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Dr(i),t(s-e))};return lt.setup(i,!0),()=>Dr(i)}function jC(t){return Hm(t)&&t.tagName==="svg"}function hc(t){return qt(t)?t.get():t}const iv=t=>typeof t=="number"?t:parseFloat(t),YC=zm.length,xM=["rotate","rotateX","rotateY","rotateZ","skewX","skewY"],$C=xM.length,rv=t=>typeof t=="number"||we.test(t);function qC(t,e,n,i,r,s){r?(t.opacity=st(0,n.opacity??1,KC(i)),t.opacityExit=st(e.opacity??1,0,ZC(i))):s&&(t.opacity=st(e.opacity??1,n.opacity??1,i));for(let o=0;o<YC;o++){const a=zm[o];let l=sv(e,a),c=sv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||rv(l)===rv(c)?(t[a]=Math.max(st(iv(l),iv(c),i),0),(Ai.test(c)||Ai.test(l))&&(t[a]+="%")):t[a]=c}for(let o=0;o<$C;o++){const a=xM[o];(e[a]||n[a])&&(t[a]=st(e[a]||0,n[a]||0,i))}}function sv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const KC=yM(0,.5,TS),ZC=yM(.5,.95,ui);function yM(t,e,n){return i=>i<t?0:i>e?1:n(us(t,e,i))}function Ph(t,e){t.min=e.min,t.max=e.max}function Kn(t,e){Ph(t.x,e.x),Ph(t.y,e.y)}function ov(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const SM=1e-4,JC=1-SM,QC=1+SM,MM=.01,eb=0-MM,tb=0+MM;function fn(t){return t.max-t.min}function nb(t,e,n){return Math.abs(t-e)<=n}function av(t,e,n,i=.5){t.origin=i,t.originPoint=st(e.min,e.max,t.origin),t.scale=fn(n)/fn(e),t.translate=st(n.min,n.max,t.origin)-t.originPoint,(t.scale>=JC&&t.scale<=QC||isNaN(t.scale))&&(t.scale=1),(t.translate>=eb&&t.translate<=tb||isNaN(t.translate))&&(t.translate=0)}function la(t,e,n,i){av(t.x,e.x,n.x,i?i.originX:void 0),av(t.y,e.y,n.y,i?i.originY:void 0)}function lv(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+fn(e)}function ib(t,e,n,i){lv(t.x,e.x,n.x,i==null?void 0:i.x),lv(t.y,e.y,n.y,i==null?void 0:i.y)}function cv(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+fn(e)}function nu(t,e,n,i){cv(t.x,e.x,n.x,i==null?void 0:i.x),cv(t.y,e.y,n.y,i==null?void 0:i.y)}function uv(t,e,n,i,r){return t-=e,t=tu(t,1/n,i),r!==void 0&&(t=tu(t,1/r,i)),t}function rb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ai.test(e)&&(e=parseFloat(e),e=st(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=st(s.min,s.max,i);t===s&&(a-=e),t.min=uv(t.min,e,n,a,r),t.max=uv(t.max,e,n,a,r)}function fv(t,e,[n,i,r],s,o){rb(t,e[n],e[i],e[r],e.scale,s,o)}const sb=["x","scaleX","originX"],ob=["y","scaleY","originY"];function dv(t,e,n,i){fv(t.x,e,sb,n?n.x:void 0,i?i.x:void 0),fv(t.y,e,ob,n?n.y:void 0,i?i.y:void 0)}const hv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ks=()=>({x:hv(),y:hv()}),pv=()=>({min:0,max:0}),Ut=()=>({x:pv(),y:pv()});function mv(t){return t.translate===0&&t.scale===1}function EM(t){return mv(t.x)&&mv(t.y)}function gv(t,e){return t.min===e.min&&t.max===e.max}function ab(t,e){return gv(t.x,e.x)&&gv(t.y,e.y)}function vv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function TM(t,e){return vv(t.x,e.x)&&vv(t.y,e.y)}function _v(t){return fn(t.x)/fn(t.y)}function xv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class lb{constructor(){this.members=[]}add(e){ym(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&($c(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if($c(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}function yv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Uo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const n=yv(t,e.target.x),i=yv(t,e.target.y);return`${n}% ${i}%`}},cb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Ln.parse(t);if(r.length>5)return i;const s=Ln.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=st(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},ub={borderRadius:{...Uo,applyTo:[...zm]},borderTopLeftRadius:Uo,borderTopRightRadius:Uo,borderBottomLeftRadius:Uo,borderBottomRightRadius:Uo,boxShadow:cb};function fb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,pathRotation:d,rotateX:u,rotateY:p,rotateZ:m,skewX:x,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotate(${d}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`rotateZ(${m}deg) `),x&&(i+=`skewX(${x}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}function ni(t){return[t("x"),t("y")]}const db=(t,e)=>t.depth-e.depth;class hb{constructor(){this.children=[],this.isDirty=!1}add(e){ym(this.children,e),this.isDirty=!0}remove(e){$c(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(db),this.isDirty=!1,this.children.forEach(e)}}const pc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};Object.assign(Ua,{...ub,...Ua});const Cf=["","X","Y","Z"],pb=1e3;let mb=0;function bf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}const Rf=({instance:t})=>{var e;return t&&((e=go.get(t))==null?void 0:e.demote())};function wM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=uM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",lt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&wM(i)}function AM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=mb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_b),this.nodes.forEach(Ab),this.nodes.forEach(Cb),this.nodes.forEach(xb)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new hb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new qc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Hm(o)&&!jC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const u=()=>this.root.updateBlockedByResize=!1;lt.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,f&&f(),f=XC(u,250),pc.hasAnimatedSinceResize&&(pc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ev)))})}a&&this.root.registerSharedNode(a,this),this.addLayoutListener()}addLayoutListener(){const{layoutId:o,layout:a,visualElement:l,animate:c}=this.options;!this.instance||this.hasLayoutListener||c===!1||!l||!(o||a)||(this.hasLayoutListener=!0,this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||l.getDefaultTransition()||Lb,{onLayoutAnimationStart:x,onLayoutAnimationComplete:g}=l.getProps(),h=!this.targetLayout||!TM(this.targetLayout,p),v=!d&&u;if(this.options.layoutRoot||this.resumeFrom||v||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...Om(m,"layout"),onPlay:x,onComplete:g};(l.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(f,v,S.path)}else d||Ev(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),this.hasLayoutListener=!1,Dr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;Rf(this),this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,Rf(d),(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1),d.isAnimationBlocked&&(d.dragSnapshot||(d.dragSnapshot=d.measure()),this.dragAncestor=d)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(Sb),this.nodes.forEach(Sv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Eb),this.nodes.forEach(Tb),this.nodes.forEach(wb),this.nodes.forEach(gb),this.nodes.forEach(vb)):this.nodes.forEach(Mv),this.clearAllSnapshots();const a=St.now();Dt.delta=Ii(0,1e3/60,a-Dt.timestamp),Dt.timestamp=a,Dt.isProcessing=!0,Mf.update.process(Dt),Mf.preRender.process(Dt),Mf.render.process(Dt),Dt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yb),this.sharedNodes.forEach((o,a)=>o.members.length?o.removeLeadSnapshot():this.sharedNodes.delete(a))}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected||(this.layoutCorrected=Ut()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;o&&Rf(this);const a=this.projectionDelta&&!EM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||jr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Db(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ut();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Ib))){const{scroll:f}=this.root;f&&(si(a.x,f.offset.x),si(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=Ut();if(Kn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&Kn(a,o),si(a.x,d.offset.x),si(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var f,d;const c=l||Ut();Kn(c,o);for(let u=0;u<this.path.length;u++){const p=this.path[u];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(si(c.x,-p.scroll.offset.x),si(c.y,-p.scroll.offset.y)),jr(p.latestValues)&&dc(c,p.latestValues,(f=p.layout)==null?void 0:f.layoutBox)}return jr(this.latestValues)&&dc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=Ut();Kn(a,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];if(!jr(f.latestValues))continue;let d;f.instance&&(bh(f.latestValues)&&f.updateSnapshot(),d=Ut(),Kn(d,f.measurePageBox())),dv(a,f.latestValues,(l=f.snapshot)==null?void 0:l.layoutBox,d)}return jr(this.latestValues)&&dv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0},this.addLayoutListener()}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Dt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=Dt.timestamp;const u=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&u&&u.layout?this.createRelativeTarget(u,this.layout.layoutBox,u.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ib(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Kn(this.target,this.layout.layoutBox),vM(this.target,this.targetDelta)):Kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?this.createRelativeTarget(u,this.target,u.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||bh(this.parent.latestValues)||gM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),nu(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Kn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Dt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Kn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,u=this.treeScale.y;HC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ut());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ov(this.prevProjectionDelta.x,this.projectionDelta.x),ov(this.prevProjectionDelta.y,this.projectionDelta.y)),la(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==u||!xv(this.projectionDelta.x,this.prevProjectionDelta.x)||!xv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ks(),this.projectionDelta=Ks(),this.projectionDeltaWithTransform=Ks()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,f=c?c.latestValues:{},d={...this.latestValues},u=Ks();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ut(),m=c?c.source:void 0,x=this.layout?this.layout.source:void 0,g=m!==x,h=this.getStack(),v=!h||h.members.length<=1,S=!!(g&&!v&&this.options.crossfade===!0&&!this.path.some(Pb));this.animationProgress=0;let y;const E=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=A=>{const w=A/1e3,_=E==null?void 0:E(w);_?(u.x.translate=_.x,u.x.scale=st(o.x.scale,1,w),u.x.origin=o.x.origin,u.x.originPoint=o.x.originPoint,u.y.translate=_.y,u.y.scale=st(o.y.scale,1,w),u.y.origin=o.y.origin,u.y.originPoint=o.y.originPoint):(Tv(u.x,o.x,w),Tv(u.y,o.y,w)),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nu(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Rb(this.relativeTarget,this.relativeTargetOrigin,p,w),y&&ab(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ut()),Kn(y,this.relativeTarget)),g&&(this.animationValues=d,qC(d,f,this.latestValues,w,S,v)),_&&_.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=_.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Dr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lt.update(()=>{pc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=vo(0)),this.motionValue.jump(0,!1),this.currentAnimation=WC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),y1(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead(),{targetWithTransforms:a,layout:l,latestValues:c}=o;let{target:f}=o;if(!(!a||!f||!l)){if(this!==o&&this.layout&&l&&CM(this.options.animationType,this.layout.layoutBox,l.layoutBox)){f=this.target||Ut();const d=fn(this.layout.layoutBox.x);f.x.min=o.target.x.min,f.x.max=f.x.min+d;const u=fn(this.layout.layoutBox.y);f.y.min=o.target.y.min,f.y.max=f.y.min+u}Kn(a,f),dc(a,c),la(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new lb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&bf("z",o,c,this.animationValues);for(let f=0;f<Cf.length;f++)bf(`rotate${Cf[f]}`,o,c,this.animationValues),bf(`skew${Cf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=hc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=hc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=fb(this.projectionDeltaWithTransform,this.treeScale,f);l&&(d=l(f,d)),o.transform=d;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in Ua){if(f[m]===void 0)continue;const{correct:x,applyTo:g,isCSSVariable:h}=Ua[m],v=d==="none"?f[m]:x(f[m],c);if(g){const S=g.length;for(let y=0;y<S;y++)o[g[y]]=v}else h?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=c===this?hc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Sv),this.root.sharedNodes.clear()}}}function gb(t){t.updateLayout(),Mb(t)}function vb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")ni(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(u);u.min=i[d].min,u.max=u.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Ph(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else CM(s,e.layoutBox,i)&&ni(d=>{const u=o?e.measuredBox[d]:e.layoutBox[d],p=fn(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ks();la(a,i,e.layoutBox);const l=Ks();o?la(l,t.applyTransform(r,!0),e.measuredBox):la(l,i,e.layoutBox);const c=!EM(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const m=t.options.layoutAnchor||void 0,x=Ut();nu(x,e.layoutBox,u.layoutBox,m);const g=Ut();nu(g,i,p.layoutBox,m),TM(x,g)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function _b(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function xb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yb(t){t.clearSnapshot()}function Sv(t){t.clearMeasurements()}function Sb(t){t.isLayoutDirty=!0,t.updateLayout()}function Mv(t){t.isLayoutDirty=!1}function Mb(t){const{snapshot:e,dragAncestor:n}=t,i=n==null?void 0:n.layout;if(!e||!i||t.resumeFrom||t.isAnimationBlocked)return;const r=n.dragSnapshot;ni(s=>si(e.layoutBox[s],i.layoutBox[s].min-r.layoutBox[s].min))}function Eb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.dragSnapshot||t.layout,t.isLayoutDirty=!0)}function Tb(t){var e;t.relativeTarget&&((e=t.relativeParent)!=null&&e.isLayoutDirty)&&(t.currentAnimation?t.isLayoutDirty=!0:(t.targetDelta=void 0,t.removeRelativeTarget()))}function wb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ev(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Ab(t){t.resolveTargetDelta()}function Cb(t){t.calcProjection()}function bb(t){t.resetSkewAndRotation()}function Tv(t,e,n){t.translate=st(e.translate,0,n),t.scale=st(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function wv(t,e,n,i){t.min=st(e.min,n.min,i),t.max=st(e.max,n.max,i)}function Rb(t,e,n,i){wv(t.x,e.x,n.x,i),wv(t.y,e.y,n.y,i)}function Pb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Lb={duration:.45,ease:[.4,0,.1,1]},Av=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Cv=Av("applewebkit/")&&!Av("chrome/")?Math.round:ui;function bv(t){t.min=Cv(t.min),t.max=Cv(t.max)}function Db(t){bv(t.x),bv(t.y)}function CM(t,e,n){return t==="position"||t==="preserve-aspect"&&!nb(_v(e),_v(n),.2)}function Ib(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}function Fa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const Nb=AM({attachResizeListener:(t,e)=>Fa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Pf={current:void 0},bM=AM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Pf.current){const t=new Nb({});t.mount(window),t.setOptions({layoutScroll:!0}),Pf.current=t}return Pf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ub=new WeakMap;function Nu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Oa(t){return typeof t=="string"||Array.isArray(t)}const Xm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rv=["initial",...Xm];function Uu(t){if(Nu(t.animate))return!0;for(let e=0;e<Rv.length;e++)if(Oa(t[Rv[e]]))return!0;return!1}function RM(t){return!!(Uu(t)||t.variants)}function Fb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(qt(r))t.addValue(i,r);else if(qt(s))t.addValue(i,vo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,vo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Lh={current:null},PM={current:!1},Ob=typeof window<"u";function kb(){if(PM.current=!0,!!Ob)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Lh.current=t.matches;t.addEventListener("change",e),e()}else Lh.current=!1}const Pv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let iu={};function LM(t){iu=t}function Bb(){return iu}class Vb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Um,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=St.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,lt.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Uu(n),this.isVariantNode=RM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const m=u[p];c[p]!==void 0&&qt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];if(this.current=e,Ub.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.isVariantNode&&!this.isControllingVariants){let r=this;do r=r.props.inherit!==!1&&r.parent;while(r&&!r.isVariantNode);if(r){const{variantChildren:s}=r;s.add(this),this.removeFromVariantTree=()=>s.delete(this)}}this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(PM.current||kb(),this.shouldReduceMotion=Lh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Dr(this.notifyUpdate),Dr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&wh.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,d=new QS({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Xn(f)}),u=o(d);this.valueSubscriptions.set(e,()=>{u(),d.cancel()});return}const i=Rr.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{var a;this.latestValues[e]=o,this.props.onUpdate&&lt.preRender(this.notifyUpdate),i&&(this.projection&&(this.projection.isTransformDirty=!0),(a=go.get(this.current))==null||a.check()),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!e.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in iu){const n=iu[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){var s;const{transformTemplate:i,onUpdate:r}=this.props;(e.transformTemplate||i)&&this.scheduleRender(),(e.transformTemplate&&!i||e.onUpdate&&!r)&&((s=go.get(this.current))==null||s.demote()),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let o=0;o<Pv.length;o++){const a=Pv[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const l="on"+a,c=e[l];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=Fb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,n){const i=this.values.get(e);if(n!==i){i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n);const r=n.get();r!==void 0&&(this.latestValues[e]=r)}}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){var r;if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=vo(n??((r=this.getDefaultValue)==null?void 0:r.call(this,e)),{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Sm(i)||Mm(i))?i=parseFloat(i):typeof i!="number"&&!Ln.test(i)&&Ln.test(n)&&(i=Nm(e,n)),this.setBaseTarget(e,qt(i)?i.get():i)),qt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}on(e,n){return this.events[e]||(this.events[e]=new qc),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Wm.render(this.render)}}class DM extends Vb{constructor(){super(...arguments),this.KeyframeResolver=FC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;qt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function IM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function NM(t,{layout:e,layoutId:n}){return Rr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ua[t]||t==="opacity")}function jm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(qt(i[a])||r&&qt(r[a])||NM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function zb(t){return window.getComputedStyle(t)}class Hb extends DM{constructor(){super(...arguments),this.type="html",this.renderInstance=IM}mount(e){Du(!!e.style),super.mount(e)}readValueFromInstance(e,n){var i;if(Rr.has(n))return(i=this.projection)!=null&&i.isProjecting?Na(n):L1(e,n);{const r=zb(e),s=(CS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return _M(e,n)}build(e,n,i){Gm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return jm(e,n,i)}}const Ym=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Fu(t){return{point:{x:t.pageX,y:t.pageY}}}const Gb=t=>e=>Ym(e)&&t(e,Fu(e));function ca(t,e,n,i){return Fa(t,e,Gb(n),i)}const mc=new WeakMap;let fr;const UM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Hm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],Wb=UM("inline","width","offsetWidth"),Xb=UM("block","height","offsetHeight");function jb({target:t,borderBoxSize:e}){var n;(n=mc.get(t))==null||n.forEach(i=>{i(t,{get width(){return Wb(t,e)},get height(){return Xb(t,e)}})})}function Yb(t){t.forEach(jb)}function $b(){typeof ResizeObserver>"u"||(fr=new ResizeObserver(Yb))}function qb(t,e){fr||$b();const n=dM(t);return n.forEach(i=>{let r=mc.get(i);r||(r=new Set,mc.set(i,r)),r.add(e),fr==null||fr.observe(i)}),()=>{n.forEach(i=>{const r=mc.get(i);r==null||r.delete(e),r!=null&&r.size||fr==null||fr.unobserve(i)})}}const gc=new Set;let Zs;function Kb(){Zs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};gc.forEach(e=>e(t))},window.addEventListener("resize",Zs)}function Zb(t){return gc.add(t),Zs||Kb(),()=>{gc.delete(t),!gc.size&&typeof Zs=="function"&&(window.removeEventListener("resize",Zs),Zs=void 0)}}function Lv(t,e){return typeof t=="function"?Zb(t):qb(t,e)}const Dv=(t,e)=>Math.abs(t-e);function Jb(t,e){const n=Dv(t.x,e.x),i=Dv(t.y,e.y);return Math.sqrt(n**2+i**2)}const Iv=new Set(["auto","scroll"]);class FM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ml(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Lf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,g=Jb(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!g)return;const{point:h}=m;this.history.push({...h,timestamp:St.now()});const{onStart:v,onMove:S}=this.handlers;x||(v&&v(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,m)},this.handlePointerMove=(m,x)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=Ml(x,this.transformPagePoint),this.hasPendingMove=!0,lt.update(this.updatePoint,!0)},this.handlePointerUp=(m,x)=>{this.hasPendingMove&&this.updatePoint(),this.end();const{onEnd:g,onSessionEnd:h,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Lf(m.type==="pointercancel"?this.lastMoveEventInfo:Ml(x,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,S),h&&h(m,S)},!Ym(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Fu(e),c=Ml(l,this.transformPagePoint),{point:f}=c,{timestamp:d}=Dt;this.history=[{...f,timestamp:d}];const{onSessionStart:u}=n;u&&u(e,Lf(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=Ya(ca(this.contextWindow,"pointermove",this.handlePointerMove,p),ca(this.contextWindow,"pointerup",this.handlePointerUp,p),ca(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Iv.has(i.overflowX)||Iv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),lt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dr(this.updatePoint)}}function Ml(t,e){return e?{point:e(t.point)}:t}function Nv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Lf({point:t},e){return{point:t,delta:Nv(t,OM(e)),offset:Nv(t,Qb(e)),velocity:eR(e,.1)}}function Qb(t){return t[0]}function OM(t){return t[t.length-1]}function eR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=OM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Xn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Xn(e)*2&&(i=t[1]);const s=Rn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const tR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function nR(t){return tR.has(t.tagName)||t.isContentEditable===!0}const iR=new Set(["INPUT","SELECT","TEXTAREA"]);function rR(t){return iR.has(t.tagName)||t.isContentEditable===!0}const ei={x:!1,y:!1};function kM(){return ei.x||ei.y}function sR(t){return t==="x"||t==="y"?ei[t]?null:(ei[t]=!0,()=>{ei[t]=!1}):ei.x||ei.y?null:(ei.x=ei.y=!0,()=>{ei.x=ei.y=!1})}function oR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?st(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?st(n,t,i.max):Math.min(t,n)),t}function Uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function aR(t,{top:e,left:n,bottom:i,right:r}){return{x:Uv(t.x,n,r),y:Uv(t.y,e,i)}}function Fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function lR(t,e){return{x:Fv(t.x,e.x),y:Fv(t.y,e.y)}}function cR(t,e){let n=.5;const i=fn(t),r=fn(e);return r>i?n=us(e.min,e.max-i,t.min):i>r&&(n=us(t.min,t.max-r,e.min)),Ii(0,1,n)}function uR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Dh=.35;function fR(t=Dh){return t===!1?t=0:t===!0&&(t=Dh),{x:Ov(t,"left","right"),y:Ov(t,"top","bottom")}}function Ov(t,e,n){return{min:kv(t,e),max:kv(t,n)}}function kv(t,e){return typeof t=="number"?t:t[e]||0}const dR=new WeakMap;class hR{constructor(e,n=()=>e.getProps()){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e,this.readProps=n}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){var d;const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=u=>{n&&this.snapToCursor(u),this.stopAnimation()},o=(u,p)=>{const{drag:m,dragPropagation:x,onDragStart:g}=this.getProps();if(m&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=sR(m),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ni(v=>{let S=this.getAxisMotionValue(v).get()||0;if(Iu(S)&&(S=Bm(S,this.visualElement.current)||0),we.test(S))S=parseFloat(S);else if(Ai.test(S)){const{projection:y}=this.visualElement;if(y&&y.layout){const E=y.layout.layoutBox[v];E&&(S=fn(E)*(parseFloat(S)/100))}}this.originPoint[v]=S}),g&&lt.update(()=>g(u,p),!1,!0),Ah(this.visualElement,"transform");const{animationState:h}=this.visualElement;h&&h.setActive("whileDrag",!0)},a=(u,p)=>{this.latestPointerEvent=u,this.latestPanInfo=p;const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:g,onDrag:h}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:v}=p;if(x&&this.currentDirection===null){if(this.currentDirection=mR(v),this.currentDirection===null)return;g&&g(this.currentDirection)}this.updateAxis("x",p.point,v),this.updateAxis("y",p.point,v),this.visualElement.render(),h&&lt.update(()=>h(u,p),!1,!0)},l=(u,p)=>{this.latestPointerEvent=u,this.latestPanInfo=p,this.stop(u,p),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:u}=this.getProps();(u||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new FM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:(d=this.visualElement.current)==null?void 0:d.ownerDocument.defaultView,element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&lt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!El(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=oR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;Fo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=aR(i.layoutBox,e):this.constraints=!1,this.elastic=fR(n),r!==this.constraints&&!Fo(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&ni(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=uR(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!Fo(e))return!1;const i=Bv(e),{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=GC(i,r.root,this.visualElement.getTransformPagePoint());let o=lR(r.layout.layoutBox,s);if(n){const a=n(VC(o));this.hasMutatedConstraints=!!a,a&&(o=mM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ni(f=>{if(!El(f,n,this.currentDirection))return;let d=l&&l[f]||{};(o===!0||o===f)&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ah(this.visualElement,e),i.start(km(e,i,0,n,this.visualElement,!1))}stopAnimation(){ni(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.readProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:n}){var a;const{drag:i}=this.getProps(),r={x:e,y:n},s=((a=this.visualElement.getTransformPagePoint())==null?void 0:a(r))||r,o=this.visualElement.measureViewportBox();ni(l=>{if(!El(l,i,this.currentDirection))return;const c=this.getAxisMotionValue(l),{min:f,max:d}=o[l];c.set((c.get()||0)+s[l]-st(f,d,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Fo(n)||!i||!this.constraints)return;this.stopAnimation();const r=this.constraints,s={x:0,y:0};ni(a=>{const l=this.getAxisMotionValue(a).get();s[a]=cR({min:l,max:l},r[a])});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),ni(a=>{const l=this.getAxisMotionValue(a);if(!El(a,e,null)||!l.get())return;const{min:c,max:f}=this.constraints[a];l.set(st(c,f,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dR.set(this.visualElement,this);const e=this.visualElement.current,n=ca(e,"pointerdown",c=>{const{drag:f,dragListener:d=!0}=this.getProps(),u=c.target,p=u!==e&&rR(u);f&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps(),f=Fo(c)&&Bv(c);f&&(this.constraints=this.resolveRefConstraints(),i||(i=pR(e,f,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),lt.read(r);const a=Fa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(ni(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=c[d].translate,u.set(u.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.readProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Dh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Fo(t){return!!t&&typeof t=="object"&&("current"in t||"nodeType"in t)}const Bv=t=>"current"in t?t.current:t;function Vv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function pR(t,e,n){const i=Lv(t,Vv(n)),r=Lv(e,Vv(n));return()=>{i(),r()}}function El(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function mR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}function BM(t,e){const n=dM(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function gR(t){return!(t.pointerType==="touch"||kM())}function vR(t,e,n={}){const[i,r,s]=BM(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),f()},u=g=>{a=!1,window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",u),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",u,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},x=g=>{if(!gR(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",x,r),o.addEventListener("pointerdown",p,r)}),s}const VM=(t,e)=>e?t===e?!0:VM(t,e.parentElement):!1,vc=new WeakSet;function zv(t){return e=>{e.key==="Enter"&&t(e)}}function Df(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const _R=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=zv(()=>{if(vc.has(n))return;Df(n,"down");const r=zv(()=>{Df(n,"up")}),s=()=>Df(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Hv(t){return Ym(t)&&!kM()}const Gv=new WeakSet;function xR(t,e,n={}){const[i,r,s]=BM(t,n),o=a=>{const l=a.currentTarget;if(!Hv(a)||Gv.has(a))return;vc.add(l),n.stopPropagation&&Gv.add(a);const c=e(l,a),f={...r,capture:!0},d=(m,x)=>{window.removeEventListener("pointerup",u,f),window.removeEventListener("pointercancel",p,f),vc.has(l)&&vc.delete(l),Hv(m)&&typeof c=="function"&&c(m,{success:x})},u=m=>{d(m,l===window||l===document||n.useGlobalTarget||VM(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",u,f),window.addEventListener("pointercancel",p,f)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),fc(a)&&(a.addEventListener("focus",c=>_R(c,r)),!nR(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}const zM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),HM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function yR(t,e,n,i){IM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(zM.has(r)?r:Vm(r),e.attrs[r])}function GM(t,e,n){const i=jm(t,e,n);for(const r in t)if(r!=="children"&&(qt(t[r])||qt(e[r]))){const s=Qi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class SR extends DM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ut}getBaseTargetFromProps(e,n){return Rr.has(n)?super.getBaseTargetFromProps(e,n)??Na(n):e[n]}getDefaultValue(e){return Rr.has(e)?this.latestValues[e]??Na(e):void 0}readValueFromInstance(e,n){if(Rr.has(n)){const i=jS(n);return i&&i.default||0}if(hM.includes(n)){const r=getComputedStyle(e)[n];if(typeof r=="string"&&r)return r.trim()}return n=zM.has(n)?n:Vm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return GM(e,n,i)}build(e,n,i){pM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){yR(e,n,i,r)}mount(e){this.isSVGTag=HM(e.tagName),super.mount(e)}}function WM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const MR=[...Xm].reverse();function ER(t){let e=a=>Promise.all(a.map(({animation:l,options:c})=>RC(t,l,c))),n=Wv(),i=!0,r=!1;function s(a){var v;const{props:l,parent:c,manuallyAnimateOnMount:f}=t,d=i||r,u=[],p=new Set;let m={},x=1/0,g=t;do g=g.props.inherit!==!1&&g.parent;while(g&&!g.isControllingVariants);if(MR.forEach((S,y)=>{var U,k;const E=n[S],A=l[S],w=g&&g.props[S],_=A!==void 0?A:Oa(w)||w===!1?w:void 0,C=Oa(_),P=S===a?E.isActive:null;P===!1&&(x=y);const N=C&&A===void 0&&!(d&&f);if(E.protectedKeys={...m},!E.isActive&&P===null||!_&&!E.prevProp||Nu(_)||typeof _=="boolean")return;if(S==="exit"&&E.isActive&&P!==!0){m={...m,...E.prevResolvedValues};return}const O=TR(E.prevProp,_);let L=O||C&&(P&&!N||y>x),b=!1;const I=Array.isArray(_)?_:[_];let H={};if(P!==!1)for(const G of I){const{transition:F,transitionEnd:J,...re}=rs(t,G,aM(t,S))||{};H={...H,...re,...J}}const{prevResolvedValues:B}=E;for(const G in{...B,...H}){if(G in m)continue;const F=H[G],J=B[G],re=Array.isArray(F)&&Array.isArray(J)?!WM(F,J)||O:F!==J;if(re&&F==null)p.add(G);else if(re||F!==void 0&&p.has(G)){L=!0,p.delete(G)&&(b=!0),E.needsAnimating[G]=!0;const le=t.getValue(G);le&&(le.liveStyle=!1)}else E.protectedKeys[G]=!0}if(E.prevProp=_,E.prevResolvedValues=H,E.isActive&&(m={...m,...H}),L&&(!(N&&O)||b))for(const G of I){const F={type:S};if(typeof G=="string"&&d&&f&&(c!=null&&c.enteringChildren)){const J=(k=(U=rs(c,G))==null?void 0:U.transition)==null?void 0:k.delayChildren;F.delay=rM(c.enteringChildren,t,J)}u.push({animation:G,options:F})}}),p.size){const{initial:S}=l,y={},E=typeof S!="boolean"&&rs(t,Array.isArray(S)?S[0]:S,(v=t.presenceContext)==null?void 0:v.custom);E&&E.transition&&(y.transition=E.transition),p.forEach(A=>{const w=t.getValue(A);w&&(w.liveStyle=!0);const _=E&&!Array.isArray(S)?E[A]:void 0,C=t.getBaseTargetFromProps(l,A);y[A]=(_!==void 0?_:C!==void 0&&!qt(C)?C:t.initialValues[A]===void 0?t.baseTarget[A]:void 0)??null}),u.push({animation:y})}const h=d&&t.blockInitialAnimation||i&&!f&&(l.initial===!1||l.initial===l.animate);return i=r=!1,!h&&u.length?e(u):Promise.resolve()}function o(a,l){var f;if(n[a].isActive===l)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(d=>{var u;return(u=d.animationState)==null?void 0:u.setActive(a,l)}),n[a].isActive=l;const c=s(a);for(const d in n)n[d].protectedKeys={};return c}return{animateChanges:s,setActive:o,setAnimateFunction:a=>{e=a(t)},getState:()=>n,reset:()=>{n=Wv(),r=!0}}}function TR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!WM(e,t):!1}function Wv(){const t={};for(const e of Xm)t[e]={isActive:e==="animate",protectedKeys:{},needsAnimating:{},prevResolvedValues:{}};return t}const $m=ae.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Xv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function wR(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Xv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Xv(t[r],null)}}}}function AR(...t){return ae.useCallback(wR(...t),t)}class CR extends ae.Component{getSnapshotBeforeUpdate(e){const n=this.props.getElement();if(fc(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=fc(i)&&i.offsetWidth||0,s=fc(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function bR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s,popNode:o}){var m;const a=ae.useId(),l=ae.useRef(null),c=ae.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:f}=ae.useContext($m),d=s!==!1?((m=t.props)==null?void 0:m.ref)??(t==null?void 0:t.ref):void 0,u=AR(l,d),p=()=>{var x;return l.current||((x=o==null?void 0:o.current)==null?void 0:x.current)};return ae.useInsertionEffect(()=>{const{width:x,height:g,top:h,left:v,right:S,bottom:y,direction:E}=c.current,A=p();if(e||s===!1||!A||!x||!g)return;const w=E==="rtl",_=n==="left"?w?`right: ${S}`:`left: ${v}`:w?`left: ${v}`:`right: ${S}`,C=i==="bottom"?`bottom: ${y}`:`top: ${h}`;A.dataset.motionPopId=a;const P=A.ownerDocument,N=P.createElement("style");f&&(N.nonce=f);const O=r??P.head;return O.appendChild(N),N.sheet&&N.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${g}px !important;
            ${_}px !important;
            ${C}px !important;
          }
        `),()=>{A.removeAttribute("data-motion-pop-id"),O.contains(N)&&O.removeChild(N)}},[e]),D.jsx(CR,{isPresent:e,getElement:p,sizeRef:c,pop:s,children:s===!1?t:ae.cloneElement(t,{ref:u})})}const RR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const f=xm(PR),d=ae.useId(),u=ae.useRef(),p=ae.useRef(n),m=ae.useRef(i);ba(()=>{p.current=n,m.current=i});let x=!0,g=ae.useMemo(()=>(x=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:h=>{f.set(h,!0);for(const v of f.values())if(!v)return;i&&i()},register:(h,v)=>{var S,y;return f.set(h,!1),v&&((y=(S=v.parent)==null?void 0:S.presenceContext)==null?void 0:y.id)!==d&&(u.current=v),()=>{var E;f.delete(h),!p.current&&!f.size&&((E=m.current)==null||E.call(m))}}}),[n,f,i]);return s&&x&&(g={...g}),ae.useMemo(()=>{f.forEach((h,v)=>f.set(v,!1))},[n]),ae.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=D.jsx(bR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,popNode:u,children:t}),D.jsx(Lu.Provider,{value:g,children:t})};function PR(){return new Map}function XM(t=!0){const e=ae.useContext(Lu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ae.useId();ae.useEffect(()=>{if(t)return r(s)},[t]);const o=ae.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Oo=t=>t.key||"";function jv(t){const e=[];return ae.Children.forEach(t,n=>{ae.isValidElement(n)&&e.push(n)}),e}const Yv=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[f,d]=XM(o),u=ae.useMemo(()=>jv(t),[t]),p=o&&!f?[]:u.map(Oo),m=ae.useRef(!0),x=xm(()=>new Map),g=ae.useRef(new Set),[h,v]=ae.useState(u),[S,y]=ae.useState(u);ba(()=>{o&&!f&&!S.length&&(d==null||d())},[f,o,S.length,d]);const E=ae.useRef();ae.useEffect(()=>()=>{const _=E.current;E.current=void 0,_==null||_()},[S]),ba(()=>{m.current=!1;for(let _=0;_<S.length;_++){const C=Oo(S[_]);p.includes(C)?(x.delete(C),g.current.delete(C)):x.get(C)!==!0&&x.set(C,!1)}},[S,p.length,p.join("-")]);const A=[];if(u!==h){let _=[...u],C=0;for(const P of S){const N=p.indexOf(Oo(P));N===-1?(_.splice(C++,0,P),A.push(P)):C=N+A.length+1}return A.every(P=>x.get(Oo(P)))?_=u:s==="wait"&&(_=A),y(jv(_)),v(u),null}const{forceRender:w}=ae.useContext(_m);return D.jsx(D.Fragment,{children:S.map(_=>{const C=Oo(_),P=o&&!f?!1:u===S||p.includes(C),N=()=>{if(g.current.has(C))return;if(x.has(C))g.current.add(C),x.set(C,!0);else return;let O=!0;x.forEach(L=>{L||(O=!1)}),O&&(w==null||w(),v([]),o&&(d==null||d()),E.current=i)};return D.jsx(RR,{isPresent:P,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:P?void 0:N,anchorX:a,anchorY:l,children:_},C)})})},jM=ae.createContext({strict:!1}),$v={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let qv=!1;function LR(){if(qv)return;const t={};for(const e in $v)t[e]={isEnabled:n=>$v[e].some(i=>!!n[i])};LM(t),qv=!0}function YM(){return LR(),Bb()}function DR(t){const e=YM();for(const n in t)e[n]={...e[n],...t[n]};LM(e)}const Ou=ae.createContext({});function IR(t,e){if(Uu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Oa(n)?n:void 0,animate:Oa(i)?i:void 0}}return t.inherit!==!1?e:{}}function NR(t){const{initial:e,animate:n}=IR(t,ae.useContext(Ou));return ae.useMemo(()=>({initial:e,animate:n}),[Kv(e),Kv(n)])}function Kv(t){return Array.isArray(t)?t.join(" "):t}const qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $M(t,e,n){for(const i in e)!qt(e[i])&&!NM(i,n)&&(t[i]=e[i])}function UR({transformTemplate:t},e){return ae.useMemo(()=>{const n=qm();return Gm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function FR(t,e){const n=t.style||{},i={};return $M(i,n,t),Object.assign(i,UR(t,e)),i}function OR(t,e){const n={},i=FR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const qM=()=>({...qm(),attrs:{}});function kR(t,e,n,i){const r=ae.useMemo(()=>{const s=qM();return pM(s,e,HM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};$M(s,t.style,t),r.style={...s,...r.style}}return r}const BR=new Set(["animate","exit","variants","initial","style","values","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ru(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||BR.has(t)}function VR(t,e){return t.startsWith("on")?!ru(t):(e==null?void 0:e(t))??!ru(t)}function zR(t,e,n,i){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||qt(t[s])||(VR(s,i)||n===!0&&ru(s)||!e&&!ru(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}const HR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Km(t){return typeof t!="string"||t.includes("-")?!1:!!(HR.indexOf(t)>-1||/[A-Z]/u.test(t))}function GR(t,e,n,{latestValues:i},r,s=!1,o,a){const c=(o??Km(t)?kR:OR)(e,i,r,t),f=zR(e,typeof t=="string",s,a),d=t!==ae.Fragment?{...f,...c,ref:n}:{},{children:u}=e,p=ae.useMemo(()=>qt(u)?u.get():u,[u]);return ae.createElement(t,{...d,children:p})}function WR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:XR(n,i,r,t),renderState:e()}}function XR(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=hc(s[u]);let{initial:o,animate:a}=t;const l=Uu(t),c=RM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!Nu(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const m=oM(t,u[p]);if(m){const{transitionEnd:x,transition:g,...h}=m;for(const v in h){let S=h[v];if(Array.isArray(S)){const y=f?S.length-1:0;S=S[y]}S!==null&&(r[v]=S)}for(const v in x)r[v]=x[v]}}}return r}const KM=t=>(e,n)=>{const i=ae.useContext(Ou),r=ae.useContext(Lu),s=()=>WR(t,e,i,r);return n?s():xm(s)},jR=KM({scrapeMotionValuesFromProps:jm,createRenderState:qm}),YR=KM({scrapeMotionValuesFromProps:GM,createRenderState:qM}),$R=Symbol.for("motionComponentSymbol");function qR(t,e,n){const i=ae.useRef(n);ae.useInsertionEffect(()=>{i.current=n});const r=ae.useRef(null);return ae.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const ZM=ae.createContext({});function KR(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZR(t,e,n,i,r,s){var S,y;const{visualElement:o}=ae.useContext(Ou),a=ae.useContext(jM),l=ae.useContext(Lu),c=ae.useContext($m),f=c.reducedMotion,d=c.skipAnimations,u=ae.useRef(null),p=ae.useRef(!1);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:s}),p.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));const m=u.current,x=ae.useContext(ZM);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&JR(u.current,n,r,x);const g=ae.useRef(!1);ae.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[cM],v=ae.useRef(!!h&&typeof window<"u"&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,h))&&((y=window.MotionHasOptimisedAnimation)==null?void 0:y.call(window,h)));return ba(()=>{var E;!p.current||!m||((E=m.animationState)==null||E.animateChanges(),m.enteringChildren=void 0)},[]),ba(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),ae.useEffect(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,h)}),v.current=!1),m.enteringChildren=void 0)}),m}function JR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:f,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:JM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&KR(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:f})}function JM(t){if(t)return t.options.allowProjection!==!1?t.projection:JM(t.parent)}function If(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&DR(i);const s=n?n==="svg":Km(t),o=s?YR:jR;function a(c,f){let d;const u={...ae.useContext($m),...c,layoutId:QR(c)},{isStatic:p,isValidProp:m}=u,x=NR(c),g=o(c,p);if(!p&&typeof window<"u"){eP();const h=tP(u);d=h.MeasureLayout,x.visualElement=ZR(t,g,u,r,h.ProjectionNode,s)}return D.jsxs(Ou.Provider,{value:x,children:[d&&x.visualElement?D.jsx(d,{visualElement:x.visualElement,...u}):null,GR(t,c,qR(g,x.visualElement,f),g,p,e,s,m)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=ae.forwardRef(a);return l[$R]=t,l}function QR({layoutId:t}){const e=ae.useContext(_m).id;return e&&t!==void 0?e+"-"+t:t}function eP(t,e){ae.useContext(jM).strict}function tP(t){const e=YM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function nP(t,e){if(typeof Proxy>"u")return If;const n=new Map,i=(s,o)=>If(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,If(o,void 0,t,e)),n.get(o))})}const iP=(t,e)=>e.isSVG??Km(t)?new SR(e):new Hb(e,{allowProjection:t!==ae.Fragment});class rP extends Fr{constructor(e){super(e),e.animationState||(e.animationState=ER(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Nu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let sP=0;class oP extends Fr{constructor(){super(...arguments),this.id=sP++}update(){var l;const{presenceContext:e,prevPresenceContext:n,animationState:i}=this.node;if(!e||!i)return;const{isPresent:r,onExitComplete:s}=e,o=n==null?void 0:n.isPresent;if(r===o)return;if(r&&o===!1){if(this.exit===!0){const{initial:c}=this.node.getProps();if(c&&!Array.isArray(c)){const{transition:f,transitionEnd:d,...u}=rs(this.node,c)||{};for(const p in u)(l=this.node.getValue(p))==null||l.jump(u[p])}this.node.blockInitialAnimation=!1,i.reset(),i.animateChanges()}else i.setActive("exit",!1);this.exit=void 0;return}const a=this.exit=i.setActive("exit",!r);s&&!r&&a.then(()=>{this.exit===a&&(this.exit=!0,s(this.id))})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id,this.node))}unmount(){}}const aP={animation:{Feature:rP},exit:{Feature:oP}};class lP extends Fr{constructor(e){super(e),this.removeGroupControls=ui,this.removeListeners=ui,this.controls=new hR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ui}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const cP=({current:t})=>t?t.ownerDocument.defaultView:null,Nf=t=>(e,n)=>{t&&lt.update(()=>t(e,n),!1,!0)};class uP extends Fr{constructor(){super(...arguments),this.removePointerDownListener=ui}onPointerDown(e){this.session=new FM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:cP(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Nf(e),onStart:Nf(n),onMove:Nf(i),onEnd:(s,o)=>{delete this.session,r&&lt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ca(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Uf=!1;const Zv=({layout:t,layoutDependency:e})=>({layout:t,layoutDependency:e,animationType:typeof t=="string"?t:"both"});class fP extends ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Uf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,...Zv(this.props),onExitComplete:()=>this.safeToRemove()})),pc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layout:n,layoutDependency:i,visualElement:r,drag:s,isPresent:o}=this.props,{projection:a}=r;return a&&(a.isPresent=o,(e.layoutDependency!==i||e.layout!==n)&&a.setOptions({...a.options,...Zv(this.props)}),Uf=!0,s||e.layoutDependency!==i||i===void 0||e.isPresent!==o?a.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?a.promote():a.relegate()||lt.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Wm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Uf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function QM(t){const[e,n]=XM(),i=ae.useContext(_m);return D.jsx(fP,{...t,layoutGroup:i,switchLayoutGroup:ae.useContext(ZM),isPresent:e,safeToRemove:n})}const dP={pan:{Feature:uP},drag:{Feature:lP,ProjectionNode:bM,MeasureLayout:QM}};function Jv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&lt.postRender(()=>s(e,Fu(e)))}class hP extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=vR(e,(n,i)=>(Jv(this.node,i,"Start"),r=>Jv(this.node,r,"End"))))}unmount(){}}class pP extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ya(Fa(this.node.current,"focus",()=>this.onFocus()),Fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&lt.postRender(()=>s(e,Fu(e)))}class mP extends Fr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=xR(e,(r,s)=>(Qv(this.node,s,"Start"),(o,{success:a})=>Qv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Ih=new WeakMap,Ff=new WeakMap,gP=t=>{const e=Ih.get(t.target);e&&e(t)},vP=t=>{t.forEach(gP)};function _P({root:t,...e}){const n=t||document;Ff.has(n)||Ff.set(n,{});const i=Ff.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(vP,{root:t,...e})),i[r]}function xP(t,e,n){const i=_P(e);return Ih.set(t,n),i.observe(t),()=>{Ih.delete(t),i.unobserve(t)}}const yP={some:0,all:1};class SP extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:yP[r]},a=c=>{const{isIntersecting:f}=c;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),p=f?d:u;p&&p(c)};this.stopObserver=xP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(MP(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function MP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const EP={inView:{Feature:SP},tap:{Feature:mP},focus:{Feature:pP},hover:{Feature:hP}},TP={layout:{ProjectionNode:bM,MeasureLayout:QM}},wP={...aP,...EP,...dP,...TP},AP=nP(wP,iP),e_=AP;function CP({categories:t,skills:e}){const[n,i]=ae.useState("all"),[r,s]=ae.useState(null),o=ae.useMemo(()=>{const c={};return t.forEach(f=>c[f.id]=f),c},[t]),a=ae.useMemo(()=>n==="all"?e:e.filter(c=>c.cat===n),[e,n]),l=c=>{s(f=>f&&f.id===c.id?null:c)};return D.jsxs("div",{className:"cloud",children:[D.jsxs("div",{className:"cloud-head",children:[D.jsx("p",{className:"cloud-subtitle",children:"Click a skill for context. Filter by discipline to focus the set."}),D.jsxs("div",{className:"cloud-filters",role:"tablist","aria-label":"Skill categories",children:[D.jsx("button",{type:"button",className:`cloud-pill ${n==="all"?"is-active":""}`,onClick:()=>{i("all"),s(null)},children:"All"}),t.map(c=>D.jsxs("button",{type:"button",className:`cloud-pill ${n===c.id?"is-active":""}`,style:{"--c":c.color},onClick:()=>{i(f=>f===c.id?"all":c.id),s(null)},children:[D.jsx("span",{className:"cloud-pill-dot",style:{background:c.color}}),c.label]},c.id))]})]}),D.jsx("div",{className:"cloud-chips",children:D.jsx(Yv,{mode:"popLayout",initial:!1,children:a.map((c,f)=>{const d=o[c.cat],u=r&&r.id===c.id;return D.jsxs(e_.button,{type:"button",layout:!0,initial:{opacity:0,scale:.85,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85},transition:{delay:Math.min(f*.015,.3),type:"spring",stiffness:320,damping:26},className:`cloud-chip ${u?"is-selected":""}`,style:{"--c":d?d.color:"#a6265a"},onClick:()=>l(c),"aria-pressed":u,children:[D.jsx("span",{className:"cloud-chip-dot",style:{background:d?d.color:"#a6265a"}}),c.name,c.endorsements?D.jsx("span",{className:"cloud-chip-count",children:c.endorsements}):null]},c.id)})})}),D.jsx(Yv,{mode:"wait",children:r&&D.jsxs(e_.div,{className:"cloud-detail",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.22},style:{"--c":o[r.cat]?o[r.cat].color:"#a6265a"},children:[D.jsx("span",{className:"cloud-detail-cat",children:o[r.cat]?o[r.cat].label:"Skill"}),D.jsx("h4",{className:"cloud-detail-name",children:r.name}),D.jsx("p",{className:"cloud-detail-desc",children:r.description}),r.context&&D.jsx("p",{className:"cloud-detail-context",children:r.context})]},r.id)}),D.jsx("p",{className:"cloud-hint",children:r?"Click the chip again to close.":"Pick a chip to read more."})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zm="186",bP=0,t_=1,RP=2,_c=1,PP=2,Ko=3,fs=0,En=1,Hi=2,Yi=0,ua=1,su=2,n_=3,i_=4,LP=5,Ns=100,DP=101,IP=102,NP=103,UP=104,FP=200,OP=201,kP=202,BP=203,eE=204,tE=205,VP=206,zP=207,HP=208,GP=209,WP=210,XP=211,jP=212,YP=213,$P=214,Nh=0,Uh=1,Fh=2,ka=3,Oh=4,kh=5,Bh=6,Vh=7,nE=0,qP=1,KP=2,Ci=0,iE=1,rE=2,sE=3,oE=4,aE=5,lE=6,cE=7,uE=300,ds=301,_o=302,Of=303,kf=304,ku=306,zh=1e3,Xi=1001,Hh=1002,Yt=1003,ZP=1004,Tl=1005,sn=1006,Bf=1007,Jr=1008,Hn=1009,fE=1010,dE=1011,Ba=1012,Jm=1013,Ri=1014,Mi=1015,Pi=1016,Qm=1017,eg=1018,Va=1020,hE=35902,pE=35899,mE=1021,gE=1022,ai=1023,er=1026,Qr=1027,vE=1028,tg=1029,hs=1030,ng=1031,ig=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Gh=35840,Wh=35841,Xh=35842,jh=35843,Yh=36196,$h=37492,qh=37496,Kh=37488,Zh=37489,ou=37490,Jh=37491,Qh=37808,ep=37809,tp=37810,np=37811,ip=37812,rp=37813,sp=37814,op=37815,ap=37816,lp=37817,cp=37818,up=37819,fp=37820,dp=37821,hp=36492,pp=36494,mp=36495,gp=36283,vp=36284,au=36285,_p=36286,JP=3200,r_=0,QP=1,vr="",kn="srgb",lu="srgb-linear",cu="linear",rt="srgb",Vf=7680,eL=519,tL=512,nL=513,iL=514,rg=515,rL=516,sL=517,sg=518,oL=519,aL=35044,s_="300 es",Ei=2e3,uu=2001;function lL(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cL(){const t=fu("canvas");return t.style.display="block",t}const o_={};function a_(...t){const e="THREE."+t.shift();console.log(e,...t)}function _E(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=_E(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function oo(...t){const e=t.join(" ");e in o_||(o_[e]=!0,Oe(...t))}function uL(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const fL={[Nh]:Uh,[Fh]:Bh,[Oh]:Vh,[ka]:kh,[Uh]:Nh,[Bh]:Fh,[Vh]:Oh,[kh]:ka};class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=Math.PI/180,xp=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function dL(t,e){return(t%e+e)%e}function Hf(t,e,n){return(1-n)*t+n*e}function ko(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ug=class ug{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ug.prototype.isVector2=!0;let et=ug;class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==p||f!==m){let g=l*u+c*p+f*m+d*x;g<0&&(u=-u,p=-p,m=-m,x=-x,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);h=Math.sin(h*v)/S,a=Math.sin(a*v)/S,l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+x*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+m*a,d=d*h+x*a;const v=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=v,c*=v,f*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+f*d+l*p-c*u,e[n+1]=l*m+f*u+c*d-a*p,e[n+2]=c*m+f*p+a*u-l*d,e[n+3]=f*m-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"YXZ":this._x=u*f*d+c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"ZXY":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d-u*p*m;break;case"ZYX":this._x=u*f*d-c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d+u*p*m;break;case"YZX":this._x=u*f*d+c*p*m,this._y=c*p*d+u*f*m,this._z=c*f*m-u*p*d,this._w=c*f*d-u*p*m;break;case"XZY":this._x=u*f*d-c*p*m,this._y=c*p*d-u*f*m,this._z=c*f*m+u*p*d,this._w=c*f*d+u*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fg=class fg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fg.prototype.isVector3=!0;let j=fg;const Gf=new j,l_=new To,dg=class dg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],m=i[8],x=r[0],g=r[3],h=r[6],v=r[1],S=r[4],y=r[7],E=r[2],A=r[5],w=r[8];return s[0]=o*x+a*v+l*E,s[3]=o*g+a*S+l*A,s[6]=o*h+a*y+l*w,s[1]=c*x+f*v+d*E,s[4]=c*g+f*S+d*A,s[7]=c*h+f*y+d*w,s[2]=u*x+p*v+m*E,s[5]=u*g+p*S+m*A,s[8]=u*h+p*y+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,m=n*d+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wf.makeScale(e,n)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wf.makeRotation(-e)),this}translate(e,n){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dg.prototype.isMatrix3=!0;let ke=dg;const Wf=new ke,c_=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hL(){const t={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=ao(r.r),r.g=ao(r.g),r.b=ao(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?cu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[lu]:{primaries:e,whitePoint:i,transfer:cu,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const $e=hL();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ao(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ss;class pL{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=fu("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mL=0;class og{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mL++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xf(r[o].image)):s.push(Xf(r[o]))}else s=Xf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pL.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let gL=0;const jf=new j;class on extends vs{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Xi,r=Xi,s=sn,o=Jr,a=ai,l=Hn,c=on.DEFAULT_ANISOTROPY,f=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gL++}),this.uuid=Ka(),this.name="",this.source=new og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jf).x}get height(){return this.source.getSize(jf).y}get depth(){return this.source.getSize(jf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=uE;on.DEFAULT_ANISOTROPY=1;const hg=class hg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,E=(h+1)/2,A=(f+u)/4,w=(d+x)/4,_=(m+g)/4;return S>y&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=w/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hg.prototype.isVector4=!0;let At=hg;class vL extends vs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new og(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends vL{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xE extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _L extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pu=class pu{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,x,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,m,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,m=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,m=c*f,x=c*d;n[0]=u+x*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-m,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,m=c*f,x=c*d;n[0]=u-x*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*f,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,m=a*f,x=a*d;n[0]=l*f,n[4]=m*c-p,n[8]=u*c+x,n[1]=l*d,n[5]=x*c+u,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*f,n[4]=x-u*d,n[8]=m*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+m,n[10]=u-x*d}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+x,n[5]=o*f,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*f,n[10]=x*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xL,e,yL)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),or.crossVectors(i,wn),or.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),or.crossVectors(i,wn)),or.normalize(),wl.crossVectors(wn,or),r[0]=or.x,r[4]=wl.x,r[8]=wn.x,r[1]=or.y,r[5]=wl.y,r[9]=wn.y,r[2]=or.z,r[6]=wl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],m=i[2],x=i[6],g=i[10],h=i[14],v=i[3],S=i[7],y=i[11],E=i[15],A=r[0],w=r[4],_=r[8],C=r[12],P=r[1],N=r[5],O=r[9],L=r[13],b=r[2],I=r[6],H=r[10],B=r[14],U=r[3],k=r[7],G=r[11],F=r[15];return s[0]=o*A+a*P+l*b+c*U,s[4]=o*w+a*N+l*I+c*k,s[8]=o*_+a*O+l*H+c*G,s[12]=o*C+a*L+l*B+c*F,s[1]=f*A+d*P+u*b+p*U,s[5]=f*w+d*N+u*I+p*k,s[9]=f*_+d*O+u*H+p*G,s[13]=f*C+d*L+u*B+p*F,s[2]=m*A+x*P+g*b+h*U,s[6]=m*w+x*N+g*I+h*k,s[10]=m*_+x*O+g*H+h*G,s[14]=m*C+x*L+g*B+h*F,s[3]=v*A+S*P+y*b+E*U,s[7]=v*w+S*N+y*I+E*k,s[11]=v*_+S*O+y*H+E*G,s[15]=v*C+S*L+y*B+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],m=e[3],x=e[7],g=e[11],h=e[15],v=l*p-c*u,S=a*p-c*d,y=a*u-l*d,E=o*p-c*f,A=o*u-l*f,w=o*d-a*f;return n*(x*v-g*S+h*y)-i*(m*v-g*E+h*A)+r*(m*S-x*E+h*w)-s*(m*y-x*A+g*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],m=e[12],x=e[13],g=e[14],h=e[15],v=n*a-i*o,S=n*l-r*o,y=n*c-s*o,E=i*l-r*a,A=i*c-s*a,w=r*c-s*l,_=f*x-d*m,C=f*g-u*m,P=f*h-p*m,N=d*g-u*x,O=d*h-p*x,L=u*h-p*g,b=v*L-S*O+y*N+E*P-A*C+w*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/b;return e[0]=(a*L-l*O+c*N)*I,e[1]=(r*O-i*L-s*N)*I,e[2]=(x*w-g*A+h*E)*I,e[3]=(u*A-d*w-p*E)*I,e[4]=(l*P-o*L-c*C)*I,e[5]=(n*L-r*P+s*C)*I,e[6]=(g*y-m*w-h*S)*I,e[7]=(f*w-u*y+p*S)*I,e[8]=(o*O-a*P+c*_)*I,e[9]=(i*P-n*O-s*_)*I,e[10]=(m*A-x*y+h*v)*I,e[11]=(d*y-f*A-p*v)*I,e[12]=(a*C-o*N-l*_)*I,e[13]=(n*N-i*C+r*_)*I,e[14]=(x*S-m*E-g*v)*I,e[15]=(f*E-d*S+u*v)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,m=s*d,x=o*f,g=o*d,h=a*d,v=l*c,S=l*f,y=l*d,E=i.x,A=i.y,w=i.z;return r[0]=(1-(x+h))*E,r[1]=(p+y)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(u+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+S)*w,r[9]=(g-v)*w,r[10]=(1-(u+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ms.set(r[0],r[1],r[2]).length();const a=Ms.set(r[4],r[5],r[6]).length(),l=Ms.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const c=1/o,f=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===Ei)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===uu)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===Ei)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===uu)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};pu.prototype.isMatrix4=!0;let Et=pu;const Ms=new j,Zn=new Et,xL=new j(0,0,0),yL=new j(1,1,1),or=new j,wl=new j,wn=new j,f_=new Et,d_=new To;class ps{constructor(e=0,n=0,i=0,r=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class yE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SL=0;const h_=new j,Es=new To,Ni=new Et,Al=new j,Bo=new j,ML=new j,EL=new To,p_=new j(1,0,0),m_=new j(0,1,0),g_=new j(0,0,1),v_={type:"added"},TL={type:"removed"},Ts={type:"childadded",child:null},Yf={type:"childremoved",child:null};class hn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SL++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new j,n=new ps,i=new To,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Al.copy(e):Al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Bo,Al,this.up):Ni.lookAt(Al,Bo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ni),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TL),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,ML),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,EL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hn.DEFAULT_UP=new j(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wL={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const SE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=dL(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qf(o,s,e+1/3),this.g=qf(o,s,e),this.b=qf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=SE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return $e.workingToColorSpace(nn.copy(this),e),Math.round(Xe(nn.r*255,0,255))*65536+Math.round(Xe(nn.g*255,0,255))*256+Math.round(Xe(nn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kn){$e.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Cl);const i=Hf(ar.h,Cl.h,n),r=Hf(ar.s,Cl.s,n),s=Hf(ar.l,Cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new qe;qe.NAMES=SE;class AL extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new j,Ui=new j,Kf=new j,Fi=new j,ws=new j,As=new j,__=new j,Zf=new j,Jf=new j,Qf=new j,ed=new At,td=new At,nd=new At;class oi{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ui.subVectors(i,n),Kf.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Ui),l=Jn.dot(Kf),c=Ui.dot(Ui),f=Ui.dot(Kf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ui.subVectors(e,n),Jn.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),As.subVectors(s,i),Zf.subVectors(e,i);const l=ws.dot(Zf),c=As.dot(Zf);if(l<=0&&c<=0)return n.copy(i);Jf.subVectors(e,r);const f=ws.dot(Jf),d=As.dot(Jf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ws,o);Qf.subVectors(e,s);const p=ws.dot(Qf),m=As.dot(Qf);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(As,a);const g=f*m-p*d;if(g<=0&&d-f>=0&&p-m>=0)return __.subVectors(s,r),a=(d-f)/(d-f+(p-m)),n.copy(r).addScaledVector(__,a);const h=1/(g+x+u);return o=x*h,a=u*h,n.copy(i).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Rl.subVectors(this.max,Vo),Cs.subVectors(e.a,Vo),bs.subVectors(e.b,Vo),Rs.subVectors(e.c,Vo),lr.subVectors(bs,Cs),cr.subVectors(Rs,bs),kr.subVectors(Cs,Rs);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-kr.z,kr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,kr.z,0,-kr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-kr.y,kr.x,0];return!id(n,Cs,bs,Rs,Rl)||(n=[1,0,0,0,1,0,0,0,1],!id(n,Cs,bs,Rs,Rl))?!1:(Pl.crossVectors(lr,cr),n=[Pl.x,Pl.y,Pl.z],id(n,Cs,bs,Rs,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new j,new j,new j,new j,new j,new j,new j,new j],Qn=new j,bl=new Za,Cs=new j,bs=new j,Rs=new j,lr=new j,cr=new j,kr=new j,Vo=new j,Rl=new j,Pl=new j,Br=new j;function id(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Br.fromArray(t,s);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),f=i.dot(Br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Lt=new j,Ll=new et;let CL=0;class di extends vs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CL++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=aL,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ko(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ME extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class EE extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dn extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const bL=new Za,zo=new j,rd=new j;class Ja{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(rd)),this.expandByPoint(zo.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RL=0;const On=new Et,sd=new hn,Ps=new j,An=new Za,Ho=new Za,Ht=new j;class Tn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RL++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lL(e)?EE:ME)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(An.min,Ho.min),An.expandByPoint(Ht),Ht.addVectors(An.max,Ho.max),An.expandByPoint(Ht)):(An.expandByPoint(Ho.min),An.expandByPoint(Ho.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ht.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ht.add(Ps)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new j,l[_]=new j;const c=new j,f=new j,d=new j,u=new et,p=new et,m=new et,x=new j,g=new j;function h(_,C,P){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,P),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,P),f.sub(c),d.sub(c),p.sub(u),m.sub(u);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(N),a[_].add(x),a[C].add(x),a[P].add(x),l[_].add(g),l[C].add(g),l[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,C=v.length;_<C;++_){const P=v[_],N=P.start,O=P.count;for(let L=N,b=N+O;L<b;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new j,y=new j,E=new j,A=new j;function w(_){E.fromBufferAttribute(r,_),A.copy(E);const C=a[_];S.copy(C),S.sub(E.multiplyScalar(E.dot(C))).normalize(),y.crossVectors(A,C);const N=y.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,N)}for(let _=0,C=v.length;_<C;++_){const P=v[_],N=P.start,O=P.count;for(let L=N,b=N+O;L<b;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,f=new j,d=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let h=0;h<f;h++)u[m++]=c[p++]}return new di(u,f,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new j,PL=new j,LL=new ke;class pr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=od.subVectors(i,n).cross(PL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(od),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LL.getNormalMatrix(e),r=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let DL=0;class wo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DL++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=ua,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eE,this.blendDst=tE,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eL,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vf,this.stencilZFail=Vf,this.stencilZPass=Vf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new j,ad=new j,Dl=new j,Il=new j;class ag{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ad.copy(e).add(n).multiplyScalar(.5),Dl.copy(n).sub(e).normalize(),Il.copy(this.origin).sub(ad);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Dl),a=Il.dot(this.direction),l=-Il.dot(Dl),c=Il.lengthSq(),f=Math.abs(1-o*o);let d,u,p,m;if(f>0)if(d=o*l-a,u=o*a-l,m=s*f,d>=0)if(u>=-m)if(u<=m){const x=1/f;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ad).addScaledVector(Dl,u),p}intersectSphere(e,n){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,m=n.x-o.x,x=n.y-o.y,g=n.z-o.z,h=i.x-o.x,v=i.y-o.y,S=i.z-o.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(f);let w,_,C,P,N,O,L,b,I,H,B,U;if(y>=E&&y>=A?(C=l,O=d,I=m,U=h,l>=0?(w=c,_=f,P=u,N=p,L=x,b=g,H=v,B=S):(w=f,_=c,P=p,N=u,L=g,b=x,H=S,B=v)):E>=A?(C=c,O=u,I=x,U=v,c>=0?(w=f,_=l,P=p,N=d,L=g,b=m,H=S,B=h):(w=l,_=f,P=d,N=p,L=m,b=g,H=h,B=S)):(C=f,O=p,I=g,U=S,f>=0?(w=l,_=c,P=d,N=u,L=m,b=x,H=h,B=v):(w=c,_=l,P=u,N=d,L=x,b=m,H=v,B=h)),C===0)return null;const k=w/C,G=_/C,F=1/C,J=P-k*O,re=N-G*O,le=L-k*I,Ae=b-G*I,Ne=H-k*U,Z=B-G*U,te=Ne*Ae-Z*le,Se=J*Z-re*Ne,Fe=le*re-Ae*J;if(r){if(te<0||Se<0||Fe<0)return null}else if((te<0||Se<0||Fe<0)&&(te>0||Se>0||Fe>0))return null;const ue=te+Se+Fe;if(ue===0)return null;const Be=F*(te*O+Se*I+Fe*U);return(ue>0?Be<0:Be>0)?null:this.at(Be/ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lg extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=nE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x_=new Et,Vr=new ag,Nl=new Ja,y_=new j,Ul=new j,Fl=new j,Ol=new j,ld=new j,kl=new j,S_=new j,Bl=new j;class Li extends hn{constructor(e=new Tn,n=new lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(ld.fromBufferAttribute(d,e),o?kl.addScaledVector(ld,f):kl.addScaledVector(ld.sub(n),f))}n.add(kl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Nl,y_)===null||Vr.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=S;y<E;y+=3){const A=a.getX(y),w=a.getX(y+1),_=a.getX(y+2);r=Vl(this,h,e,i,c,f,d,A,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const v=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);r=Vl(this,o,e,i,c,f,d,v,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,E=S;y<E;y+=3){const A=y,w=y+1,_=y+2;r=Vl(this,h,e,i,c,f,d,A,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const v=g,S=g+1,y=g+2;r=Vl(this,o,e,i,c,f,d,v,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function IL(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fs,a),l===null)return null;Bl.copy(a),Bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bl);return c<n.near||c>n.far?null:{distance:c,point:Bl.clone(),object:t}}function Vl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ul),t.getVertexPosition(l,Fl),t.getVertexPosition(c,Ol);const f=IL(t,e,n,i,Ul,Fl,Ol,S_);if(f){const d=new j;oi.getBarycoord(S_,Ul,Fl,Ol,d),r&&(f.uv=oi.getInterpolatedAttribute(r,a,l,c,d,new et)),s&&(f.uv1=oi.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(f.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new j,materialIndex:0};oi.getNormal(Ul,Fl,Ol,u.normal),f.face=u,f.barycoord=d}return f}class NL extends on{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Yt,f=Yt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zr=new Ja,UL=new et(.5,.5),zl=new j;class TE{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],m=s[8],x=s[9],g=s[10],h=s[11],v=s[12],S=s[13],y=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,h-m,E-v).normalize(),r[1].setComponents(c+o,p+f,h+m,E+v).normalize(),r[2].setComponents(c+a,p+d,h+x,E+S).normalize(),r[3].setComponents(c-a,p-d,h-x,E-S).normalize(),i)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,p-u,h-g,E-y).normalize();else if(r[4].setComponents(c-l,p-u,h-g,E-y).normalize(),n===Ei)r[5].setComponents(c+l,p+u,h+g,E+y).normalize();else if(n===uu)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=UL.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zl.x=r.normal.x>0?e.max.x:e.min.x,zl.y=r.normal.y>0?e.max.y:e.min.y,zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wE extends wo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new j,hu=new j,M_=new Et,Go=new ag,Hl=new Ja,cd=new j,E_=new j;class FL extends hn{constructor(e=new Tn,n=new wE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)du.fromBufferAttribute(n,r-1),hu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Dn(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(r),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;M_.copy(r).invert(),Go.copy(e.ray).applyMatrix4(M_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const h=f.getX(x),v=f.getX(x+1),S=Gl(this,e,Go,l,h,v,x);S&&n.push(S)}if(this.isLineLoop){const x=f.getX(m-1),g=f.getX(p),h=Gl(this,e,Go,l,x,g,m-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const h=Gl(this,e,Go,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=Gl(this,e,Go,l,m-1,p,m-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(du.fromBufferAttribute(a,r),hu.fromBufferAttribute(a,s),n.distanceSqToSegment(du,hu,cd,E_)>i)return;cd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(cd);if(!(c<e.near||c>e.far))return{distance:c,point:E_.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class AE extends wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T_=new Et,yp=new ag,Wl=new Ja,Xl=new j;class OL extends hn{constructor(e=new Tn,n=new AE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;T_.copy(r).invert(),yp.copy(e.ray).applyMatrix4(T_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,x=p;m<x;m++){const g=c.getX(m);Xl.fromBufferAttribute(d,g),w_(Xl,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=u,x=p;m<x;m++)Xl.fromBufferAttribute(d,m),w_(Xl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function w_(t,e,n,i,r,s,o){const a=yp.distanceSqToPoint(t);if(a<n){const l=new j;yp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class CE extends on{constructor(e=[],n=ds,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kL extends on{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class za extends on{constructor(e,n,i=Ri,r,s,o,a=Yt,l=Yt,c,f=er,d=1){if(f!==er&&f!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new og(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class BL extends za{constructor(e,n=Ri,i=ds,r,s,o=Yt,a=Yt,l,c=er){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bE extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(f,3)),this.setAttribute("uv",new Dn(d,2));function m(x,g,h,v,S,y,E,A,w,_,C){const P=y/w,N=E/_,O=y/2,L=E/2,b=A/2,I=w+1,H=_+1;let B=0,U=0;const k=new j;for(let G=0;G<H;G++){const F=G*N-L;for(let J=0;J<I;J++){const re=J*P-O;k[x]=re*v,k[g]=F*S,k[h]=b,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[h]=A>0?1:-1,f.push(k.x,k.y,k.z),d.push(J/w),d.push(1-G/_),B+=1}}for(let G=0;G<_;G++)for(let F=0;F<w;F++){const J=u+F+I*G,re=u+F+I*(G+1),le=u+(F+1)+I*(G+1),Ae=u+(F+1)+I*G;l.push(J,re,Ae),l.push(re,le,Ae),U+=6}a.addGroup(p,U,C),p+=U,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class VL{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],u=i[r+1]-f,p=(o-f)/u;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new et:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new j,r=[],s=[],o=[],a=new j,l=new Et;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Xe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function zL(t,e){const n=1-t;return n*n*e}function HL(t,e){return 2*(1-t)*t*e}function GL(t,e){return t*t*e}function ud(t,e,n,i){return zL(t,e)+HL(t,n)+GL(t,i)}class WL extends VL{constructor(e=new j,n=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new j){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ud(e,r.x,s.x,o.x),ud(e,r.y,s.y,o.y),ud(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bu extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],m=[],x=[],g=[];for(let h=0;h<f;h++){const v=h*u-o;for(let S=0;S<c;S++){const y=S*d-s;m.push(y,-v,0),x.push(0,0,1),g.push(S/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const S=v+c*h,y=v+c*(h+1),E=v+1+c*(h+1),A=v+1+c*h;p.push(S,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class cg extends Tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new j,u=new j,p=[],m=[],x=[],g=[];for(let h=0;h<=i;h++){const v=[],S=h/i,y=o+S*a,E=e*Math.cos(y),A=Math.sqrt(e*e-E*E);let w=0;h===0&&o===0?w=.5/n:h===i&&l===Math.PI&&(w=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;d.x=-A*Math.cos(P),d.y=E,d.z=A*Math.sin(P),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(C+w,1-S),v.push(c++)}f.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const S=f[h][v+1],y=f[h][v],E=f[h+1][v],A=f[h+1][v+1];(h!==0||o>0)&&p.push(S,y,A),(h!==i-1||l<Math.PI)&&p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(A_(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(A_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function A_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function XL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function RE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const jL={clone:xo,merge:cn};var YL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$L=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YL,this.fragmentShader=$L,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=XL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qL extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class KL extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZL extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jl=new j,Yl=new To,vi=new j;class PE extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jl,Yl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Yl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(jl,Yl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Yl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new j,C_=new et,b_=new et;class zn extends PE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,C_,b_),n.subVectors(b_,C_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class LE extends PE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=-90,Ds=1;class JL extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Ls,Ds,e,n);r.layers=this.layers,this.add(r);const s=new zn(Ls,Ds,e,n);s.layers=this.layers,this.add(s);const o=new zn(Ls,Ds,e,n);o.layers=this.layers,this.add(o);const a=new zn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const l=new zn(Ls,Ds,e,n);l.layers=this.layers,this.add(l);const c=new zn(Ls,Ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class QL extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class eD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const pg=class pg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};pg.prototype.isMatrix2=!0;let R_=pg;function P_(t,e,n,i){const r=tD(i);switch(n){case mE:return t*e;case vE:return t*e/r.components*r.byteLength;case tg:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case ng:return t*e*2/r.components*r.byteLength;case gE:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case ig:return t*e*4/r.components*r.byteLength;case xc:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case jh:return Math.max(t,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(t,8)*Math.max(e,8)/2;case Yh:case $h:case Kh:case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qh:case ou:case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case op:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hp:case pp:case mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gp:case vp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case au:case _p:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tD(t){switch(t){case Hn:case fE:return{byteLength:1,components:1};case Ba:case dE:case Pi:return{byteLength:2,components:1};case Qm:case eg:return{byteLength:2,components:4};case Ri:case Jm:case Mi:return{byteLength:4,components:1};case hE:case pE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zm}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DE(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nD(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const x=d[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var iD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rD=`#ifdef USE_ALPHAHASH
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
#endif`,sD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cD=`#ifdef USE_AOMAP
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
#endif`,uD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fD=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gD=`#ifdef USE_IRIDESCENCE
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
#endif`,vD=`#ifdef USE_BUMPMAP
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
#endif`,_D=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ED=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AD=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,CD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bD=`vec3 transformedNormal = objectNormal;
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
#endif`,RD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ID="gl_FragColor = linearToOutputTexel( gl_FragColor );",ND=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OD=`#ifdef USE_ENVMAP
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
#endif`,kD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WD=`#ifdef USE_GRADIENTMAP
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
}`,XD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$D=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,qD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,KD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,t3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n3=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,r3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h3=`#if defined( USE_POINTS_UV )
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
#endif`,p3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`#ifdef USE_MORPHTARGETS
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
#endif`,y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A3=`#ifdef USE_NORMALMAP
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
#endif`,C3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,V3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,z3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,H3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,G3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W3=`#ifdef USE_SKINNING
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
#endif`,X3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j3=`#ifdef USE_SKINNING
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
#endif`,Y3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z3=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J3=`#ifdef USE_TRANSMISSION
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
#endif`,Q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
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
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`#include <common>
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
}`,u2=`#if DEPTH_PACKING == 3200
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
}`,f2=`#define DISTANCE
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
}`,d2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
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
}`,g2=`uniform vec3 diffuse;
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
}`,v2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,x2=`#define LAMBERT
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
}`,y2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,S2=`#define MATCAP
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
}`,M2=`#define MATCAP
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
}`,E2=`#define NORMAL
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
}`,T2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w2=`#define PHONG
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
}`,A2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,C2=`#define STANDARD
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
}`,b2=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,R2=`#define TOON
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
}`,P2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,L2=`uniform float size;
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
}`,D2=`uniform vec3 diffuse;
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
}`,I2=`#include <common>
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
}`,N2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,U2=`uniform float rotation;
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
}`,F2=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:iD,alphahash_pars_fragment:rD,alphamap_fragment:sD,alphamap_pars_fragment:oD,alphatest_fragment:aD,alphatest_pars_fragment:lD,aomap_fragment:cD,aomap_pars_fragment:uD,batching_pars_vertex:fD,batching_vertex:dD,begin_vertex:hD,beginnormal_vertex:pD,bsdfs:mD,iridescence_fragment:gD,bumpmap_pars_fragment:vD,clipping_planes_fragment:_D,clipping_planes_pars_fragment:xD,clipping_planes_pars_vertex:yD,clipping_planes_vertex:SD,color_fragment:MD,color_pars_fragment:ED,color_pars_vertex:TD,color_vertex:wD,common:AD,cube_uv_reflection_fragment:CD,defaultnormal_vertex:bD,displacementmap_pars_vertex:RD,displacementmap_vertex:PD,emissivemap_fragment:LD,emissivemap_pars_fragment:DD,colorspace_fragment:ID,colorspace_pars_fragment:ND,envmap_fragment:UD,envmap_common_pars_fragment:FD,envmap_pars_fragment:OD,envmap_pars_vertex:kD,envmap_physical_pars_fragment:qD,envmap_vertex:BD,fog_vertex:VD,fog_pars_vertex:zD,fog_fragment:HD,fog_pars_fragment:GD,gradientmap_pars_fragment:WD,lightmap_pars_fragment:XD,lights_lambert_fragment:jD,lights_lambert_pars_fragment:YD,lights_pars_begin:$D,lights_toon_fragment:KD,lights_toon_pars_fragment:ZD,lights_phong_fragment:JD,lights_phong_pars_fragment:QD,lights_physical_fragment:e3,lights_physical_pars_fragment:t3,lights_fragment_begin:n3,lights_fragment_maps:i3,lights_fragment_end:r3,lightprobes_pars_fragment:s3,logdepthbuf_fragment:o3,logdepthbuf_pars_fragment:a3,logdepthbuf_pars_vertex:l3,logdepthbuf_vertex:c3,map_fragment:u3,map_pars_fragment:f3,map_particle_fragment:d3,map_particle_pars_fragment:h3,metalnessmap_fragment:p3,metalnessmap_pars_fragment:m3,morphinstance_vertex:g3,morphcolor_vertex:v3,morphnormal_vertex:_3,morphtarget_pars_vertex:x3,morphtarget_vertex:y3,normal_fragment_begin:S3,normal_fragment_maps:M3,normal_pars_fragment:E3,normal_pars_vertex:T3,normal_vertex:w3,normalmap_pars_fragment:A3,clearcoat_normal_fragment_begin:C3,clearcoat_normal_fragment_maps:b3,clearcoat_pars_fragment:R3,iridescence_pars_fragment:P3,opaque_fragment:L3,packing:D3,premultiplied_alpha_fragment:I3,project_vertex:N3,dithering_fragment:U3,dithering_pars_fragment:F3,roughnessmap_fragment:O3,roughnessmap_pars_fragment:k3,shadowmap_pars_fragment:B3,shadowmap_pars_vertex:V3,shadowmap_vertex:z3,shadowmask_pars_fragment:H3,skinbase_vertex:G3,skinning_pars_vertex:W3,skinning_vertex:X3,skinnormal_vertex:j3,specularmap_fragment:Y3,specularmap_pars_fragment:$3,tonemapping_fragment:q3,tonemapping_pars_fragment:K3,transmission_fragment:Z3,transmission_pars_fragment:J3,uv_pars_fragment:Q3,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:r2,backgroundCube_vert:s2,backgroundCube_frag:o2,cube_vert:a2,cube_frag:l2,depth_vert:c2,depth_frag:u2,distance_vert:f2,distance_frag:d2,equirect_vert:h2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:v2,meshbasic_frag:_2,meshlambert_vert:x2,meshlambert_frag:y2,meshmatcap_vert:S2,meshmatcap_frag:M2,meshnormal_vert:E2,meshnormal_frag:T2,meshphong_vert:w2,meshphong_frag:A2,meshphysical_vert:C2,meshphysical_frag:b2,meshtoon_vert:R2,meshtoon_frag:P2,points_vert:L2,points_frag:D2,shadow_vert:I2,shadow_frag:N2,sprite_vert:U2,sprite_frag:F2},ve={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yi={basic:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:cn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:cn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:cn([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:cn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:cn([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:cn([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:cn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:cn([ve.lights,ve.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};yi.physical={uniforms:cn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const $l={r:0,b:0,g:0},O2=new Et,IE=new ke;IE.set(-1,0,0,0,1,0,0,0,1);function k2(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function m(v){let S=!1;const y=p(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===ku)?(c===void 0&&(c=new Li(new Qa(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:xo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(IE),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,(f!==y||d!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Li(new Bu(2,2),new Di({name:"BackgroundMaterial",uniforms:xo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB($l,RE(t)),n.buffers.color.setClear($l.r,$l.g,$l.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:x,dispose:h}}function B2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(N,O,L,b,I){let H=!1;const B=d(N,b,L,O);s!==B&&(s=B,c(s.object)),H=p(N,b,L,I),H&&m(N,b,L,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(N,O,L,b),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function d(N,O,L,b){const I=b.wireframe===!0;let H=i[O.id];H===void 0&&(H={},i[O.id]=H);const B=N.isInstancedMesh===!0?N.id:0;let U=H[B];U===void 0&&(U={},H[B]=U);let k=U[L.id];k===void 0&&(k={},U[L.id]=k);let G=k[I];return G===void 0&&(G=u(l()),k[I]=G),G}function u(N){const O=[],L=[],b=[];for(let I=0;I<n;I++)O[I]=0,L[I]=0,b[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:b,object:N,attributes:{},index:null}}function p(N,O,L,b){const I=s.attributes,H=O.attributes;let B=0;const U=L.getAttributes();for(const k in U)if(U[k].location>=0){const F=I[k];let J=H[k];if(J===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;B++}return s.attributesNum!==B||s.index!==b}function m(N,O,L,b){const I={},H=O.attributes;let B=0;const U=L.getAttributes();for(const k in U)if(U[k].location>=0){let F=H[k];F===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(F=N.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),I[k]=J,B++}s.attributes=I,s.attributesNum=B,s.index=b}function x(){const N=s.newAttributes;for(let O=0,L=N.length;O<L;O++)N[O]=0}function g(N){h(N,0)}function h(N,O){const L=s.newAttributes,b=s.enabledAttributes,I=s.attributeDivisors;L[N]=1,b[N]===0&&(t.enableVertexAttribArray(N),b[N]=1),I[N]!==O&&(t.vertexAttribDivisor(N,O),I[N]=O)}function v(){const N=s.newAttributes,O=s.enabledAttributes;for(let L=0,b=O.length;L<b;L++)O[L]!==N[L]&&(t.disableVertexAttribArray(L),O[L]=0)}function S(N,O,L,b,I,H,B){B===!0?t.vertexAttribIPointer(N,O,L,I,H):t.vertexAttribPointer(N,O,L,b,I,H)}function y(N,O,L,b){x();const I=b.attributes,H=L.getAttributes(),B=O.defaultAttributeValues;for(const U in H){const k=H[U];if(k.location>=0){let G=I[U];if(G===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const F=G.normalized,J=G.itemSize,re=e.get(G);if(re===void 0)continue;const le=re.buffer,Ae=re.type,Ne=re.bytesPerElement,Z=Ae===t.INT||Ae===t.UNSIGNED_INT||G.gpuType===Jm;if(G.isInterleavedBufferAttribute){const te=G.data,Se=te.stride,Fe=G.offset;if(te.isInstancedInterleavedBuffer){for(let ue=0;ue<k.locationSize;ue++)h(k.location+ue,te.meshPerAttribute);N.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<k.locationSize;ue++)g(k.location+ue);t.bindBuffer(t.ARRAY_BUFFER,le);for(let ue=0;ue<k.locationSize;ue++)S(k.location+ue,J/k.locationSize,Ae,F,Se*Ne,(Fe+J/k.locationSize*ue)*Ne,Z)}else{if(G.isInstancedBufferAttribute){for(let te=0;te<k.locationSize;te++)h(k.location+te,G.meshPerAttribute);N.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let te=0;te<k.locationSize;te++)g(k.location+te);t.bindBuffer(t.ARRAY_BUFFER,le);for(let te=0;te<k.locationSize;te++)S(k.location+te,J/k.locationSize,Ae,F,J*Ne,J/k.locationSize*te*Ne,Z)}}else if(B!==void 0){const F=B[U];if(F!==void 0)switch(F.length){case 2:t.vertexAttrib2fv(k.location,F);break;case 3:t.vertexAttrib3fv(k.location,F);break;case 4:t.vertexAttrib4fv(k.location,F);break;default:t.vertexAttrib1fv(k.location,F)}}}}v()}function E(){C();for(const N in i){const O=i[N];for(const L in O){const b=O[L];for(const I in b){const H=b[I];for(const B in H)f(H[B].object),delete H[B];delete b[I]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const L in O){const b=O[L];for(const I in b){const H=b[I];for(const B in H)f(H[B].object),delete H[B];delete b[I]}}delete i[N.id]}function w(N){for(const O in i){const L=i[O];for(const b in L){const I=L[b];if(I[N.id]===void 0)continue;const H=I[N.id];for(const B in H)f(H[B].object),delete H[B];delete I[N.id]}}}function _(N){for(const O in i){const L=i[O],b=N.isInstancedMesh===!0?N.id:0,I=L[b];if(I!==void 0){for(const H in I){const B=I[H];for(const U in B)f(B[U].object),delete B[U];delete I[H]}delete L[b],Object.keys(L).length===0&&delete i[O]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function V2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function z2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ai&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const _=w===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Hn&&w!==Mi&&!_&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:A}}function H2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,S=v*4;let y=h.clippingState||null;l.value=y,y=f(m,u,S,p);for(let E=0;E!==S;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const h=p+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,y=p;S!==x;++S,y+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const Js=4,G2=6,W2=20,X2=256,Wo=new LE,L_=new qe;let fd=null,dd=0,hd=0,pd=!1;const j2=new j,Hr=new j;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=j2}=s;fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,dd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Pi,format:ai,colorSpace:lu,depthBuffer:!1},r=I_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y2(s)),this._blurMaterial=q2(s,e,n),this._ggxMaterial=$2(s,e,n)}return r}_compileMaterial(e){const n=new Li(new Tn,e);this._renderer.compile(n,Wo)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(L_),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Qa,new lg({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(L_),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const E=this._cubeSize;Is(r,y*E,S>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(x,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===_o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=c*1.25,p=d*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Js?i-m+Js:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Is(s,g,h,3*x,2*x),r.setRenderTarget(s),r.render(a,Wo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Is(e,g,h,3*x,2*x),r.setRenderTarget(e),r.render(a,Wo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-Js?r-this._lodMax+Js:0),u=4*(this._cubeSize-f);Is(n,d,u,3*f,2*f),o.setRenderTarget(n),o.render(l,Wo)}}function Y2(t){const e=[],n=[];let i=t;const r=t-Js+1+G2;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,m=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let h=0;h<d;h++){const v=h%3*2/3-1,S=h>2?0:-1,y=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];m.set(y,p*u*h);for(let E=0;E<u;E++){const A=f[E*2]*2-1,w=f[E*2+1]*2-1;h===0?Hr.set(1,w,A):h===1?Hr.set(-A,1,-w):h===2?Hr.set(-A,w,1):h===3?Hr.set(-1,w,-A):h===4?Hr.set(-A,-1,w):Hr.set(A,w,-1),Hr.toArray(x,(h*u+E)*p)}}const g=new Tn;g.setAttribute("position",new di(m,p)),g.setAttribute("outputDirection",new di(x,p)),n.push(new Li(g,null)),i>Js&&i--}return{lodMeshes:n,sizeLods:e}}function I_(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $2(t,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function q2(t,e,n){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:W2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function N_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function U_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class NE extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Yi});s.uniforms.tEquirect.value=n;const o=new Li(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=sn),new JL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function K2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Of||p===kf)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new NE(m.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===Of||p===kf,x=p===ds||p===_o;if(m||x){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new D_(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new D_(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===Of?u.mapping=ds:p===kf&&(u.mapping=_o),u}function l(u){let p=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Z2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oo("WebGLRenderer: "+i+" extension not supported."),r}}}function J2(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,m=d.attributes.position;let x=0;if(m===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let S=0,y=v.length;S<y;S+=3){const E=v[S+0],A=v[S+1],w=v[S+2];u.push(E,A,A,w,w,E)}}else{const v=m.array;x=m.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const E=S+0,A=S+1,w=S+2;u.push(E,A,A,w,w,E)}}const g=new(m.count>=65535?EE:ME)(u,1);g.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Q2(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function eI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tI(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let E=a.attributes.position.count*y,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*d),_=new xE(w,E,A,d);_.type=Mi,_.needsUpdate=!0;const C=y*4;for(let N=0;N<d;N++){const O=h[N],L=v[N],b=S[N],I=E*A*4*N;for(let H=0;H<O.count;H++){const B=H*C;m===!0&&(r.fromBufferAttribute(O,H),w[I+B+0]=r.x,w[I+B+1]=r.y,w[I+B+2]=r.z,w[I+B+3]=0),x===!0&&(r.fromBufferAttribute(L,H),w[I+B+4]=r.x,w[I+B+5]=r.y,w[I+B+6]=r.z,w[I+B+7]=0),g===!0&&(r.fromBufferAttribute(b,H),w[I+B+8]=r.x,w[I+B+9]=r.y,w[I+B+10]=r.z,w[I+B+11]=b.itemSize===4?r.w:1)}}u={count:d,texture:_,size:new et(E,A)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function nI(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const iI={[iE]:"LINEAR_TONE_MAPPING",[rE]:"REINHARD_TONE_MAPPING",[sE]:"CINEON_TONE_MAPPING",[oE]:"ACES_FILMIC_TONE_MAPPING",[lE]:"AGX_TONE_MAPPING",[cE]:"NEUTRAL_TONE_MAPPING",[aE]:"CUSTOM_TONE_MAPPING"};function rI(t,e,n,i,r,s){const o=new fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Tn;c.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const f=new qL({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Li(c,f),u=new LE(-1,1,1,-1,0,1);let p=null,m=null,x=!1,g,h=null,v=[],S=!1;this.setSize=function(y,E){o.setSize(y,E),a!==null&&a.setSize(y,E),l!==null&&l.setSize(y,E);for(let A=0;A<v.length;A++){const w=v[A];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){v=y,S=v.length>0&&v[0].isRenderPass===!0;const E=o.width,A=o.height;v.length>0&&a===null&&(a=new fi(E,A,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(E,A,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const _=v[w];_.setSize&&_.setSize(E,A)}},this.begin=function(y,E){if(x||y.toneMapping===Ci&&v.length===0)return!1;if(h=E,E!==null){const A=E.width,w=E.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return S===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=g,x=!0;let A=o,w=a;for(let _=0;_<v.length;_++){const C=v[_];C.enabled!==!1&&(C.render(y,w,A,E),C.needsSwap!==!1&&(A=w,w=w===a?l:a))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,f.defines={},$e.getTransfer(p)===rt&&(f.defines.SRGB_TRANSFER="");const _=iI[m];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(h),y.render(d,u),h=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const UE=new on,Sp=new za(1,1),FE=new xE,OE=new _L,kE=new CE,F_=[],O_=[],k_=new Float32Array(16),B_=new Float32Array(9),V_=new Float32Array(4);function Ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=F_[r];if(s===void 0&&(s=new Float32Array(r),F_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zu(t,e){let n=O_[e];n===void 0&&(n=new Int32Array(e),O_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function aI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function lI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function cI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;V_.set(i),t.uniformMatrix2fv(this.addr,!1,V_),Vt(n,i)}}function uI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;B_.set(i),t.uniformMatrix3fv(this.addr,!1,B_),Vt(n,i)}}function fI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;k_.set(i),t.uniformMatrix4fv(this.addr,!1,k_),Vt(n,i)}}function dI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function pI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function mI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function gI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function _I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function xI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function yI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sp.compareFunction=n.isReversedDepthBuffer()?sg:rg,s=Sp):s=UE,n.setTexture2D(e||s,r)}function SI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OE,r)}function MI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kE,r)}function EI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||FE,r)}function TI(t){switch(t){case 5126:return sI;case 35664:return oI;case 35665:return aI;case 35666:return lI;case 35674:return cI;case 35675:return uI;case 35676:return fI;case 5124:case 35670:return dI;case 35667:case 35671:return hI;case 35668:case 35672:return pI;case 35669:case 35673:return mI;case 5125:return gI;case 36294:return vI;case 36295:return _I;case 36296:return xI;case 35678:case 36198:case 36298:case 36306:case 35682:return yI;case 35679:case 36299:case 36307:return SI;case 35680:case 36300:case 36308:case 36293:return MI;case 36289:case 36303:case 36311:case 36292:return EI}}function wI(t,e){t.uniform1fv(this.addr,e)}function AI(t,e){const n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function CI(t,e){const n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function bI(t,e){const n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function RI(t,e){const n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PI(t,e){const n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LI(t,e){const n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DI(t,e){t.uniform1iv(this.addr,e)}function II(t,e){t.uniform2iv(this.addr,e)}function NI(t,e){t.uniform3iv(this.addr,e)}function UI(t,e){t.uniform4iv(this.addr,e)}function FI(t,e){t.uniform1uiv(this.addr,e)}function OI(t,e){t.uniform2uiv(this.addr,e)}function kI(t,e){t.uniform3uiv(this.addr,e)}function BI(t,e){t.uniform4uiv(this.addr,e)}function VI(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Sp:o=UE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function zI(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||OE,s[o])}function HI(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||kE,s[o])}function GI(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||FE,s[o])}function WI(t){switch(t){case 5126:return wI;case 35664:return AI;case 35665:return CI;case 35666:return bI;case 35674:return RI;case 35675:return PI;case 35676:return LI;case 5124:case 35670:return DI;case 35667:case 35671:return II;case 35668:case 35672:return NI;case 35669:case 35673:return UI;case 5125:return FI;case 36294:return OI;case 36295:return kI;case 36296:return BI;case 35678:case 36198:case 36298:case 36306:case 35682:return VI;case 35679:case 36299:case 36307:return zI;case 35680:case 36300:case 36308:case 36293:return HI;case 36289:case 36303:case 36311:case 36292:return GI}}class XI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TI(n.type)}}class jI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WI(n.type)}}class YI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const md=/(\w+)(\])?(\[|\.)?/g;function z_(t,e){t.seq.push(e),t.map[e.id]=e}function $I(t,e,n){const i=t.name,r=i.length;for(md.lastIndex=0;;){const s=md.exec(i),o=md.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){z_(n,c===void 0?new XI(a,t,e):new jI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new YI(a),z_(n,d)),n=d}}}class Ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);$I(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function H_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qI=37297;let KI=0;function ZI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const G_=new ke;function JI(t){$e._getMatrix(G_,$e.workingColorSpace,t);const e=`mat3( ${G_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case cu:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function W_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+ZI(t.getShaderSource(e),a)}else return s}function QI(t,e){const n=JI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eN={[iE]:"Linear",[rE]:"Reinhard",[sE]:"Cineon",[oE]:"ACESFilmic",[lE]:"AgX",[cE]:"Neutral",[aE]:"Custom"};function tN(t,e){const n=eN[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ql=new j;function nN(){$e.getLuminanceCoefficients(ql);const t=ql.x.toFixed(4),e=ql.y.toFixed(4),n=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function rN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Jo(t){return t!==""}function X_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(t){return t.replace(oN,lN)}const aN=new Map;function lN(t,e){let n=He[e];if(n===void 0){const i=aN.get(e);if(i!==void 0)n=He[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mp(n)}const cN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(t){return t.replace(cN,uN)}function uN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fN={[_c]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function dN(t){return fN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hN={[ds]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[ku]:"ENVMAP_TYPE_CUBE_UV"};function pN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":hN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const mN={[_o]:"ENVMAP_MODE_REFRACTION"};function gN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":mN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vN={[nE]:"ENVMAP_BLENDING_MULTIPLY",[qP]:"ENVMAP_BLENDING_MIX",[KP]:"ENVMAP_BLENDING_ADD"};function _N(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vN[t.combine]||"ENVMAP_BLENDING_NONE"}function xN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dN(n),c=pN(n),f=gN(n),d=_N(n),u=xN(n),p=iN(n),m=rN(s),x=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Jo).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Jo).join(`
`),h.length>0&&(h+=`
`)):(g=[$_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),h=[$_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?He.tonemapping_pars_fragment:"",n.toneMapping!==Ci?tN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,QI("linearToOutputTexel",n.outputColorSpace),nN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jo).join(`
`)),o=Mp(o),o=X_(o,n),o=j_(o,n),a=Mp(a),a=X_(a,n),a=j_(a,n),o=Y_(o),a=Y_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===s_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=v+g+o,y=v+h+a,E=H_(r,r.VERTEX_SHADER,S),A=H_(r,r.FRAGMENT_SHADER,y);r.attachShader(x,E),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(E)||"",b=r.getShaderInfoLog(A)||"",I=O.trim(),H=L.trim(),B=b.trim();let U=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,A);else{const G=W_(r,E,"vertex"),F=W_(r,A,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+G+`
`+F)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(H===""||B==="")&&(k=!1);k&&(N.diagnostics={runnable:U,programLog:I,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:h}})}r.deleteShader(E),r.deleteShader(A),_=new Ec(r,x),C=sN(r,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,qI)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KI++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let SN=0;class MN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EN(e),n.set(e,i)),i}}class EN{constructor(e){this.id=SN++,this.code=e,this.usedTimes=0}}function TN(t){return t===hs||t===ou||t===au}function wN(t,e,n,i,r,s){const o=new yE,a=new MN,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,C,P,N,O,L){const b=N.fog,I=O.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||H,B),k=U&&U.mapping===ku?U.image.height:null,G=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=F!==void 0?F.length:0;let re=0;I.morphAttributes.position!==void 0&&(re=1),I.morphAttributes.normal!==void 0&&(re=2),I.morphAttributes.color!==void 0&&(re=3);let le,Ae,Ne,Z;if(G){const ft=yi[G];le=ft.vertexShader,Ae=ft.fragmentShader}else{le=_.vertexShader,Ae=_.fragmentShader;const ft=a.getVertexShaderStage(_),tt=a.getFragmentShaderStage(_);a.update(_,ft,tt),Ne=ft.id,Z=tt.id}const te=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,ue=O.isBatchedMesh===!0,Be=!!_.map,Nt=!!_.matcap,Ge=!!U,Je=!!_.aoMap,ut=!!_.lightMap,Ye=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,zt=!!_.displacementMap,gn=!!_.emissiveMap,xt=!!_.metalnessMap,Rt=!!_.roughnessMap,W=_.anisotropy>0,Zt=_.clearcoat>0,it=_.dispersion>0,R=_.retroreflectivity>0,M=_.iridescence>0,X=_.sheen>0,q=_.transmission>0,Q=W&&!!_.anisotropyMap,ce=Zt&&!!_.clearcoatMap,fe=Zt&&!!_.clearcoatNormalMap,ee=Zt&&!!_.clearcoatRoughnessMap,ie=M&&!!_.iridescenceMap,de=M&&!!_.iridescenceThicknessMap,Le=X&&!!_.sheenColorMap,ge=X&&!!_.sheenRoughnessMap,he=!!_.specularMap,De=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Ve=q&&!!_.transmissionMap,z=q&&!!_.thicknessMap,pe=!!_.gradientMap,ne=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,se=!!_.extensions;let Ie=Ci;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const Re={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:le,fragmentShader:Ae,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ue,batchingColor:ue&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:Nt,envMap:Ge,envMapMode:Ge&&U.mapping,envMapCubeUVHeight:k,aoMap:Je,lightMap:ut,bumpMap:Ye,normalMap:vt,displacementMap:zt,emissiveMap:gn,normalMapObjectSpace:vt&&_.normalMapType===QP,normalMapTangentSpace:vt&&_.normalMapType===r_,packedNormalMap:vt&&_.normalMapType===r_&&TN(_.normalMap.format),metalnessMap:xt,roughnessMap:Rt,anisotropy:W,anisotropyMap:Q,clearcoat:Zt,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:it,retroreflection:R,iridescence:M,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:X,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:he,specularColorMap:De,specularIntensityMap:Ue,transmission:q,transmissionMap:Ve,thicknessMap:z,gradientMap:pe,opaque:_.transparent===!1&&_.blending===ua&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:Be&&m(_.map.channel),aoMapUv:Je&&m(_.aoMap.channel),lightMapUv:ut&&m(_.lightMap.channel),bumpMapUv:Ye&&m(_.bumpMap.channel),normalMapUv:vt&&m(_.normalMap.channel),displacementMapUv:zt&&m(_.displacementMap.channel),emissiveMapUv:gn&&m(_.emissiveMap.channel),metalnessMapUv:xt&&m(_.metalnessMap.channel),roughnessMapUv:Rt&&m(_.roughnessMap.channel),anisotropyMapUv:Q&&m(_.anisotropyMap.channel),clearcoatMapUv:ce&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:Ue&&m(_.specularIntensityMap.channel),transmissionMapUv:Ve&&m(_.transmissionMap.channel),thicknessMapUv:z&&m(_.thicknessMap.channel),alphaMapUv:ne&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||W),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Be||ne),fog:!!b,useFog:_.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:gn&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(h(C,_),v(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function h(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const C=p[_.type];let P;if(C){const N=yi[C];P=jL.clone(N.uniforms)}else P=_.uniforms;return P}function y(_,C){let P=f.get(C);return P!==void 0?++P.usedTimes:(P=new yN(t,C,_,r),c.push(P),f.set(C,P)),P}function E(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:w}}function AN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function q_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function K_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,x,g,h){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:h},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=h),e++,v}function l(u,p,m,x,g,h,v){v.reversedDepth===!0&&(g=-g);const S=a(u,p,m,x,g,h);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):n.push(S)}function c(u,p,m,x,g,h){const v=a(u,p,m,x,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,p){n.length>1&&n.sort(u||CN),i.length>1&&i.sort(p||q_),r.length>1&&r.sort(p||q_)}function d(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function bN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new K_,t.set(i,[o])):r>=s.length?(o=new K_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new qe};break;case"SpotLight":n={position:new j,direction:new j,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function PN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LN=0;function DN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IN(t){const e=new RN,n=PN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Et,o=new Et;function a(c){let f=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,m=0,x=0,g=0,h=0,v=0,S=0,y=0,E=0,A=0,w=0,_=0,C=0,P=0;c.sort(DN);for(let O=0,L=c.length;O<L;O++){const b=c[O],I=b.color,H=b.intensity,B=b.distance;let U=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===hs?U=b.shadow.map.texture:U=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)f+=I.r*H,d+=I.g*H,u+=I.b*H;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],H);P++}else if(b.isSunLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const G=b.shadow,F=n.get(b);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[m]=F,i.sunShadowMap[m]=U;const J=G.getViewportCount();for(let re=0;re<J;re++)i.sunShadowMatrix[x+re]=G.getMatrix(re),i.sunShadowCascade[x+re]=G._cascadeData[re];x+=J,m++}i.sun[p]=k,p++}else if(b.isDirectionalLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const G=b.shadow,F=n.get(b);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=b.shadow.matrix,E++}i.directional[g]=k,g++}else if(b.isSpotLight){const k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(I).multiplyScalar(H),k.distance=B,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[v]=k;const G=b.shadow;if(b.map&&(i.spotLightMap[_]=b.map,_++,G.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=G.matrix,b.castShadow){const F=n.get(b);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=U,w++}v++}else if(b.isRectAreaLight){const k=e.get(b);k.color.copy(I).multiplyScalar(H),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[S]=k,S++}else if(b.isPointLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const G=b.shadow,F=n.get(b);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,F.shadowCameraNear=G.camera.near,F.shadowCameraFar=G.camera.far,i.pointShadow[h]=F,i.pointShadowMap[h]=U,i.pointShadowMatrix[h]=b.shadow.matrix,A++}i.point[h]=k,h++}else if(b.isHemisphereLight){const k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(H),k.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[y]=k,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==h||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==E||N.numPointShadows!==A||N.numSpotShadows!==w||N.numSpotMaps!==_||N.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=h,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.sunLength=p,N.directionalLength=g,N.pointLength=h,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=E,N.numPointShadows=A,N.numSpotShadows=w,N.numSpotMaps=_,N.numLightProbes=P,i.version=LN++)}function l(c,f){let d=0,u=0,p=0,m=0,x=0,g=0;const h=f.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const y=c[v];if(y.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),d++}else if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),u++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),m++}else if(y.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),o.identity(),s.copy(y.matrixWorld),s.premultiply(h),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:a,setupView:l,state:i}}function Z_(t){const e=new IN(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function NN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Z_(t),e.set(r,[a])):s>=o.length?(a=new Z_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const UN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ON=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],kN=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],J_=new Et,Xo=new j,gd=new j;function BN(t,e,n){let i=new TE;const r=new et,s=new et,o=new At,a=new KL,l=new ZL,c={},f=n.maxTextureSize,d={[fs]:En,[En]:fs,[Hi]:Hi},u=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:UN,fragmentShader:FN}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Tn;m.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Li(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let h=this.type;this.render=function(A,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===PP&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_c);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=h!==this.type;L&&w.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(I=>I.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,I=A.length;b<I;b++){const H=A[b],B=H.shadow;if(B===void 0){Oe("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const U=B.getFrameExtents();r.multiply(U),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/U.x),r.x=s.x*U.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/U.y),r.y=s.y*U.y,B.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ko){if(H.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new fi(r.x,r.y,{format:hs,type:Pi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new za(r.x,r.y,Mi),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=er,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt}else H.isPointLight?(B.map=new NE(r.x),B.map.depthTexture=new BL(r.x,Ri)):(B.map=new fi(r.x,r.y),B.map.depthTexture=new za(r.x,r.y,Ri)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=er,this.type===_c?(B.map.depthTexture.compareFunction=k?sg:rg,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const G=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,_);for(let F=0;F<G;F++){const J=B.getCamera(F);if(H.isPointLight){const re=B.camera,le=B.matrix,Ae=H.distance||re.far;Ae!==re.far&&(re.far=Ae,re.updateProjectionMatrix()),Xo.setFromMatrixPosition(H.matrixWorld),re.position.copy(Xo),gd.copy(re.position),gd.add(ON[F]),re.up.copy(kN[F]),re.lookAt(gd),re.updateMatrixWorld(),le.makeTranslation(-Xo.x,-Xo.y,-Xo.z),J_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(J_,re.coordinateSystem,re.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,F),t.clear();else{F===0&&(t.setRenderTarget(B.map),t.clear());const re=B.getViewport(F);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(o)}i=B.getFrustum(F),y(w,_,J,H,this.type)}B.isPointLightShadow!==!0&&this.type===Ko&&v(B,_),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(C,P,N)};function v(A,w){const _=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(r.x,r.y,{format:hs,type:Pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,_,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,_,p,x,null)}function S(A,w,_,C){let P=null;const N=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=P.uuid,L=w.uuid;let b=c[O];b===void 0&&(b={},c[O]=b);let I=b[L];I===void 0&&(I=P.clone(),b[L]=I,w.addEventListener("dispose",E)),P=I}if(P.visible=w.visible,P.wireframe=w.wireframe,C===Ko?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=_}return P}function y(A,w,_,C,P){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===Ko)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const L=e.update(A),b=A.material;if(Array.isArray(b)){const I=L.groups;for(let H=0,B=I.length;H<B;H++){const U=I[H],k=b[U.materialIndex];if(k&&k.visible){const G=S(A,k,C,P);A.onBeforeShadow(t,A,w,_,L,G,U),t.renderBufferDirect(_,null,L,G,A,U),A.onAfterShadow(t,A,w,_,L,G,U)}}}else if(b.visible){const I=S(A,b,C,P);A.onBeforeShadow(t,A,w,_,L,I,null),t.renderBufferDirect(_,null,L,I,A,null),A.onAfterShadow(t,A,w,_,L,I,null)}}const O=A.children;for(let L=0,b=O.length;L<b;L++)y(O[L],w,_,C,P)}function E(A){A.target.removeEventListener("dispose",E);for(const _ in c){const C=c[_],P=A.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function VN(t,e){function n(){let z=!1;const pe=new At;let ne=null;const me=new At(0,0,0,0);return{setMask:function(ye){ne!==ye&&!z&&(t.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){z=ye},setClear:function(ye,se,Ie,Re,ft){ft===!0&&(ye*=Re,se*=Re,Ie*=Re),pe.set(ye,se,Ie,Re),me.equals(pe)===!1&&(t.clearColor(ye,se,Ie,Re),me.copy(pe))},reset:function(){z=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let z=!1,pe=!1,ne=null,me=null,ye=null;return{setReversed:function(se){if(pe!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const Re=ye;ye=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(se){se?te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!z&&(t.depthMask(se),ne=se)},setFunc:function(se){if(pe&&(se=fL[se]),me!==se){switch(se){case Nh:t.depthFunc(t.NEVER);break;case Uh:t.depthFunc(t.ALWAYS);break;case Fh:t.depthFunc(t.LESS);break;case ka:t.depthFunc(t.LEQUAL);break;case Oh:t.depthFunc(t.EQUAL);break;case kh:t.depthFunc(t.GEQUAL);break;case Bh:t.depthFunc(t.GREATER);break;case Vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){z=se},setClear:function(se){ye!==se&&(ye=se,pe&&(se=1-se),t.clearDepth(se))},reset:function(){z=!1,ne=null,me=null,ye=null,pe=!1}}}function r(){let z=!1,pe=null,ne=null,me=null,ye=null,se=null,Ie=null,Re=null,ft=null;return{setTest:function(tt){z||(tt?te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!z&&(t.stencilMask(tt),pe=tt)},setFunc:function(tt,$n,pi){(ne!==tt||me!==$n||ye!==pi)&&(t.stencilFunc(tt,$n,pi),ne=tt,me=$n,ye=pi)},setOp:function(tt,$n,pi){(se!==tt||Ie!==$n||Re!==pi)&&(t.stencilOp(tt,$n,pi),se=tt,Ie=$n,Re=pi)},setLocked:function(tt){z=tt},setClear:function(tt){ft!==tt&&(t.clearStencil(tt),ft=tt)},reset:function(){z=!1,pe=null,ne=null,me=null,ye=null,se=null,Ie=null,Re=null,ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,m=[],x=null,g=!1,h=null,v=null,S=null,y=null,E=null,A=null,w=null,_=new qe(0,0,0),C=0,P=!1,N=null,O=null,L=null,b=null,I=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,U=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=U>=2);let G=null,F={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),le=new At().fromArray(J),Ae=new At().fromArray(re);function Ne(z,pe,ne,me){const ye=new Uint8Array(4),se=t.createTexture();t.bindTexture(z,se),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<ne;Ie++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(pe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return se}const Z={};Z[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(t.DEPTH_TEST),o.setFunc(ka),Ye(!1),vt(t_),te(t.CULL_FACE),Je(Yi);function te(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function Se(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function Fe(z,pe){return u[z]!==pe?(t.bindFramebuffer(z,pe),u[z]=pe,z===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),z===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function ue(z,pe){let ne=m,me=!1;if(z){ne=p.get(pe),ne===void 0&&(ne=[],p.set(pe,ne));const ye=z.textures;if(ne.length!==ye.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ie=ye.length;se<Ie;se++)ne[se]=t.COLOR_ATTACHMENT0+se;ne.length=ye.length,me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,me=!0);me&&t.drawBuffers(ne)}function Be(z){return x!==z?(t.useProgram(z),x=z,!0):!1}const Nt={[Ns]:t.FUNC_ADD,[DP]:t.FUNC_SUBTRACT,[IP]:t.FUNC_REVERSE_SUBTRACT};Nt[NP]=t.MIN,Nt[UP]=t.MAX;const Ge={[FP]:t.ZERO,[OP]:t.ONE,[kP]:t.SRC_COLOR,[eE]:t.SRC_ALPHA,[WP]:t.SRC_ALPHA_SATURATE,[HP]:t.DST_COLOR,[VP]:t.DST_ALPHA,[BP]:t.ONE_MINUS_SRC_COLOR,[tE]:t.ONE_MINUS_SRC_ALPHA,[GP]:t.ONE_MINUS_DST_COLOR,[zP]:t.ONE_MINUS_DST_ALPHA,[XP]:t.CONSTANT_COLOR,[jP]:t.ONE_MINUS_CONSTANT_COLOR,[YP]:t.CONSTANT_ALPHA,[$P]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(z,pe,ne,me,ye,se,Ie,Re,ft,tt){if(z===Yi){g===!0&&(Se(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),z!==LP){if(z!==h||tt!==P){if((v!==Ns||E!==Ns)&&(t.blendEquation(t.FUNC_ADD),v=Ns,E=Ns),tt)switch(z){case ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case su:t.blendFunc(t.ONE,t.ONE);break;case n_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",z);break}else switch(z){case ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case su:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case n_:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",z);break}S=null,y=null,A=null,w=null,_.set(0,0,0),C=0,h=z,P=tt}return}ye=ye||pe,se=se||ne,Ie=Ie||me,(pe!==v||ye!==E)&&(t.blendEquationSeparate(Nt[pe],Nt[ye]),v=pe,E=ye),(ne!==S||me!==y||se!==A||Ie!==w)&&(t.blendFuncSeparate(Ge[ne],Ge[me],Ge[se],Ge[Ie]),S=ne,y=me,A=se,w=Ie),(Re.equals(_)===!1||ft!==C)&&(t.blendColor(Re.r,Re.g,Re.b,ft),_.copy(Re),C=ft),h=z,P=!1}function ut(z,pe){z.side===Hi?Se(t.CULL_FACE):te(t.CULL_FACE);let ne=z.side===En;pe&&(ne=!ne),Ye(ne),z.blending===ua&&z.transparent===!1?Je(Yi):Je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const me=z.stencilWrite;a.setTest(me),me&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(z){N!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),N=z)}function vt(z){z!==bP?(te(t.CULL_FACE),z!==O&&(z===t_?t.cullFace(t.BACK):z===RP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),O=z}function zt(z){z!==L&&(B&&t.lineWidth(z),L=z)}function gn(z,pe,ne){z?(te(t.POLYGON_OFFSET_FILL),(b!==pe||I!==ne)&&(b=pe,I=ne,o.getReversed()&&(pe=-pe),t.polygonOffset(pe,ne))):Se(t.POLYGON_OFFSET_FILL)}function xt(z){z?te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Rt(z){z===void 0&&(z=t.TEXTURE0+H-1),G!==z&&(t.activeTexture(z),G=z)}function W(z,pe,ne){ne===void 0&&(G===null?ne=t.TEXTURE0+H-1:ne=G);let me=F[ne];me===void 0&&(me={type:void 0,texture:void 0},F[ne]=me),(me.type!==z||me.texture!==pe)&&(G!==ne&&(t.activeTexture(ne),G=ne),t.bindTexture(z,pe||Z[z]),me.type=z,me.texture=pe)}function Zt(){const z=F[G];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function M(){try{t.texSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function X(){try{t.texSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function ce(){try{t.texStorage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function fe(){try{t.texStorage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function ee(){try{t.texImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function ie(){try{t.texImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function de(z){return d[z]!==void 0?d[z]:t.getParameter(z)}function Le(z,pe){d[z]!==pe&&(t.pixelStorei(z,pe),d[z]=pe)}function ge(z){le.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),le.copy(z))}function he(z){Ae.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Ae.copy(z))}function De(z,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let me=ne.get(z);me===void 0&&(me=t.getUniformBlockIndex(pe,z.name),ne.set(z,me))}function Ue(z,pe){const me=c.get(pe).get(z);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,z.__bindingPointIndex),l.set(pe,me))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},G=null,F={},u={},p=new WeakMap,m=[],x=null,g=!1,h=null,v=null,S=null,y=null,E=null,A=null,w=null,_=new qe(0,0,0),C=0,P=!1,N=null,O=null,L=null,b=null,I=null,le.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Fe,drawBuffers:ue,useProgram:Be,setBlending:Je,setMaterial:ut,setFlipSided:Ye,setCullFace:vt,setLineWidth:zt,setPolygonOffset:gn,setScissorTest:xt,activeTexture:Rt,bindTexture:W,unbindTexture:Zt,compressedTexImage2D:it,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Le,getParameter:de,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:fe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ge,viewport:he,reset:Ve}}function zN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return m?new OffscreenCanvas(R,M):fu("canvas")}function g(R,M,X){let q=1;const Q=it(R);if((Q.width>X||Q.height>X)&&(q=X/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);u===void 0&&(u=x(ce,fe));const ee=M?x(ce,fe):u;return ee.width=ce,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,ce,fe),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+fe+")."),ee}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,M,X,q,Q,ce=!1){if(R!==null){if(t[R]!==void 0)return t[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),X===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),M===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),X===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),X===t.UNSIGNED_INT&&(ee=t.RGB32UI),X===t.BYTE&&(ee=t.RGB8I),X===t.SHORT&&(ee=t.RGB16I),X===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),X===t.UNSIGNED_INT&&(ee=t.RGBA32UI),X===t.BYTE&&(ee=t.RGBA8I),X===t.SHORT&&(ee=t.RGBA16I),X===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),X===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const ie=ce?cu:$e.getTransfer(Q);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=ie===rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),X===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,M){let X;return R?M===null||M===Ri||M===Va?X=t.DEPTH24_STENCIL8:M===Mi?X=t.DEPTH32F_STENCIL8:M===Ba&&(X=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===Va?X=t.DEPTH_COMPONENT24:M===Mi?X=t.DEPTH_COMPONENT32F:M===Ba&&(X=t.DEPTH_COMPONENT16),X}function A(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&d.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),N(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,q=p.get(X);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(q).length===0&&p.delete(X)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const X=R.source,q=p.get(X);delete q[M.__cacheKey],o.memory.textures--}function N(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let q=0,Q=X.length;q<Q;q++){const ce=i.get(X[q]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(X[q])}i.remove(R)}let O=0;function L(){O=0}function b(){return O}function I(R){O=R}function H(){const R=O;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function U(R,M){const X=i.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const q=R.image;if(q===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,R,M);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function k(R,M){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Se(X,R,M);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function G(R,M){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Se(X,R,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function F(R,M){const X=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Fe(X,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const J={[zh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Hh]:t.MIRRORED_REPEAT},re={[Yt]:t.NEAREST,[ZP]:t.NEAREST_MIPMAP_NEAREST,[Tl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Bf]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},le={[tL]:t.NEVER,[oL]:t.ALWAYS,[nL]:t.LESS,[rg]:t.LEQUAL,[iL]:t.EQUAL,[sg]:t.GEQUAL,[rL]:t.GREATER,[sL]:t.NOTEQUAL};function Ae(R,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Bf||M.magFilter===Tl||M.magFilter===Jr||M.minFilter===sn||M.minFilter===Bf||M.minFilter===Tl||M.minFilter===Jr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,J[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==Tl&&M.minFilter!==Jr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const q=M.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const ce=B(M);if(ce!==R.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[ce].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),R.__cacheKey=ce,R.__webglTexture=Q[ce].texture}return X}function Z(R,M,X){return Math.floor(Math.floor(R/X)/M)}function te(R,M,X,q){const ce=R.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,X,q,M.data);else{ce.sort((Le,ge)=>Le.start-ge.start);let fe=0;for(let Le=1;Le<ce.length;Le++){const ge=ce[fe],he=ce[Le],De=ge.start+ge.count,Ue=Z(he.start,M.width,4),Ve=Z(ge.start,M.width,4);he.start<=De+1&&Ue===Ve&&Z(he.start+he.count-1,M.width,4)===Ue?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++fe,ce[fe]=he)}ce.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Le=0,ge=ce.length;Le<ge;Le++){const he=ce[Le],De=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),Ve=De%M.width,z=Math.floor(De/M.width),pe=Ue,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ve,z,pe,ne,X,q,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Se(R,M,X){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Q=Ne(R,M),ce=M.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+X);const fe=i.get(ce);if(ce.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=$e.getPrimaries($e.workingColorSpace),me=M.colorSpace===vr?null:$e.getPrimaries(M.colorSpace),ye=M.colorSpace===vr||ne===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=g(M.image,!1,r.maxTextureSize);ie=Zt(M,ie);const de=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let ge=y(M.internalFormat,de,Le,M.normalized,M.colorSpace,M.isVideoTexture);Ae(q,M);let he;const De=M.mipmaps,Ue=M.isVideoTexture!==!0,Ve=fe.__version===void 0||Q===!0,z=ce.dataReady,pe=A(M,ie);if(M.isDepthTexture)ge=E(M.format===Qr,M.type),Ve&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,de,Le,null));else if(M.isDataTexture)if(De.length>0){Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Ue?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,de,Le,he.data);M.generateMipmaps=!1}else Ue?(Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height),z&&te(M,ie,de,Le)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,de,Le,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,De[0].width,De[0].height,ie.depth);for(let ne=0,me=De.length;ne<me;ne++)if(he=De[ne],M.format!==ai)if(de!==null)if(Ue){if(z)if(M.layerUpdates.size>0){const ye=P_(he.width,he.height,M.format,M.type);for(const se of M.layerUpdates){const Ie=he.data.subarray(se*ye/he.data.BYTES_PER_ELEMENT,(se+1)*ye/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,se,he.width,he.height,1,de,Ie)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,he.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,de,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,de,Le,he.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],M.format!==ai?de!==null?Ue?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,de,Le,he.data)}else if(M.isDataArrayTexture)if(Ue){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,ie.width,ie.height,ie.depth),z)if(M.layerUpdates.size>0){const ne=P_(ie.width,ie.height,M.format,M.type);for(const me of M.layerUpdates){const ye=ie.data.subarray(me*ne/ie.data.BYTES_PER_ELEMENT,(me+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,de,Le,ye)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(M.isData3DTexture)Ue?(Ve&&n.texStorage3D(t.TEXTURE_3D,pe,ge,ie.width,ie.height,ie.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(M.isFramebufferTexture){if(Ve)if(Ue)n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height);else{let ne=ie.width,me=ie.height;for(let ye=0;ye<pe;ye++)n.texImage2D(t.TEXTURE_2D,ye,ge,ne,me,0,de,Le,null),ne>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(M),ne.onpaint=me=>{const ye=me.changedElements;for(const se of d)ye.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const ye=t.RGBA,se=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,se,Ie,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ue&&Ve){const ne=it(De[0]);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Ue?z&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,Le,he):n.texImage2D(t.TEXTURE_2D,ne,ge,de,Le,he);M.generateMipmaps=!1}else if(Ue){if(Ve){const ne=it(ie);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Le,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,de,Le,ie);h(M)&&v(q),fe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Fe(R,M,X){if(M.image.length!==6)return;const q=Ne(R,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const ce=i.get(Q);if(Q.version!==ce.__version||q===!0){n.activeTexture(t.TEXTURE0+X);const fe=$e.getPrimaries($e.workingColorSpace),ee=M.colorSpace===vr?null:$e.getPrimaries(M.colorSpace),ie=M.colorSpace===vr||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!de&&!Le?ge[se]=g(M.image[se],!0,r.maxCubemapSize):ge[se]=Le?M.image[se].image:M.image[se],ge[se]=Zt(M,ge[se]);const he=ge[0],De=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Ve=y(M.internalFormat,De,Ue,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,pe=ce.__version===void 0||q===!0,ne=Q.dataReady;let me=A(M,he);Ae(t.TEXTURE_CUBE_MAP,M);let ye;if(de){z&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,he.width,he.height);for(let se=0;se<6;se++){ye=ge[se].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const Re=ye[Ie];M.format!==ai?De!==null?z?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Re.width,Re.height,De,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Re.width,Re.height,0,Re.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Re.width,Re.height,De,Ue,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Re.width,Re.height,0,De,Ue,Re.data)}}}else{if(ye=M.mipmaps,z&&pe){ye.length>0&&me++;const se=it(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Le){z?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,Ue,ge[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,ge[se].width,ge[se].height,0,De,Ue,ge[se].data);for(let Ie=0;Ie<ye.length;Ie++){const ft=ye[Ie].image[se].image;z?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,ft.width,ft.height,De,Ue,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,ft.width,ft.height,0,De,Ue,ft.data)}}else{z?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Ue,ge[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,Ue,ge[se]);for(let Ie=0;Ie<ye.length;Ie++){const Re=ye[Ie];z?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,De,Ue,Re.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,De,Ue,Re.image[se])}}}h(M)&&v(t.TEXTURE_CUBE_MAP),ce.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,X,q,Q,ce){const fe=s.convert(X.format,X.colorSpace),ee=s.convert(X.type),ie=y(X.internalFormat,fe,ee,X.normalized,X.colorSpace),de=i.get(M),Le=i.get(X);if(Le.__renderTarget=M,!de.__hasExternalTextures){const ge=Math.max(1,M.width>>ce),he=Math.max(1,M.height>>ce);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ce,ie,ge,he,M.depth,0,fe,ee,null):n.texImage2D(Q,ce,ie,ge,he,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Le.__webglTexture,0,xt(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Le.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ce=E(M.stencilBuffer,Q),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(M),ce,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(M),ce,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const ce=q[Q],fe=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ie=y(ce.internalFormat,fe,ee,ce.normalized,ce.colorSpace);Rt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(M),ie,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(M),ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Nt(R,M,X){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),Le=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===er?ge=t.DEPTH_COMPONENT24:M.depthTexture.format===Qr&&(ge=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,M.width,M.height,0,de,Le,null)}}else U(M.depthTexture,0);const ce=Q.__webglTexture,fe=xt(M),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,ie=M.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else if(M.depthTexture.format===Qr)Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)Nt(M.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Nt(M.__webglFramebuffer[0],R,0):Nt(M.__webglFramebuffer,R,0)}else if(X){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),Be(M.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ce)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Be(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(R,M,X){const q=i.get(R);M!==void 0&&ue(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ge(R)}function ut(R){const M=R.texture,X=i.get(R),q=i.get(M);R.addEventListener("dispose",_);const Q=R.textures,ce=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),ce){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ie=0;ie<M.mipmaps.length;ie++)X.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else X.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)X.__webglFramebuffer[ee]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ie=Q.length;ee<ie;ee++){const de=i.get(Q[ee]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Rt(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];X.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const de=s.convert(ie.format,ie.colorSpace),Le=s.convert(ie.type),ge=y(ie.internalFormat,de,Le,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),he=xt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ue(X.__webglFramebuffer[ee][ie],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else ue(X.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ie=Q.length;ee<ie;ee++){const de=Q[ee],Le=i.get(de);let ge=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Le.__webglTexture),Ae(ge,de),ue(X.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+ee,ge,0),h(de)&&v(ge)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),Ae(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ue(X.__webglFramebuffer[ie],R,M,t.COLOR_ATTACHMENT0,ee,ie);else ue(X.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ee,0);h(M)&&v(ee),n.unbindTexture()}R.depthBuffer&&Ge(R)}function Ye(R){const M=R.textures;for(let X=0,q=M.length;X<q;X++){const Q=M[X];if(h(Q)){const ce=S(R),fe=i.get(Q).__webglTexture;n.bindTexture(ce,fe),v(ce),n.unbindTexture()}}}const vt=[],zt=[];function gn(R){if(R.samples>0){if(Rt(R)===!1){const M=R.textures,X=R.width,q=R.height;let Q=t.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ee=M.length>1;if(ee)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,X,q,0,0,X,q,Q,t.NEAREST),l===!0&&(vt.length=0,zt.length=0,vt.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(vt.push(ce),zt.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,zt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function xt(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Zt(R,M){const X=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==lu&&X!==vr&&($e.getTransfer(X)===rt?(q!==ai||Q!==Hn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",X)),M}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.getTextureUnits=b,this.setTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=Je,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HN(t,e){function n(i,r=vr){let s;const o=$e.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===Qm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===fE)return t.BYTE;if(i===dE)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===Jm)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Pi)return t.HALF_FLOAT;if(i===mE)return t.ALPHA;if(i===gE)return t.RGB;if(i===ai)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===vE)return t.RED;if(i===tg)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===ng)return t.RG_INTEGER;if(i===ig)return t.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gh||i===Wh||i===Xh||i===jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===ou||i===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yh||i===$h)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kh)return s.COMPRESSED_R11_EAC;if(i===Zh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ou)return s.COMPRESSED_RG11_EAC;if(i===Jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ep)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===np)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ip)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===op)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ap)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===up)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hp||i===pp||i===mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hp)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===vp||i===au||i===_p)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_p)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WN=`
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

}`;class XN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:GN,fragmentShader:WN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Li(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jN extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new XN,h={},v=n.getContextAttributes();let S=null,y=null;const E=[],A=[],w=new et;let _=null,C=null;const P=new zn;P.viewport=new At;const N=new zn;N.viewport=new At;const O=[P,N],L=new QL;let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=E[Z];return te===void 0&&(te=new $f,E[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=E[Z];return te===void 0&&(te=new $f,E[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=E[Z];return te===void 0&&(te=new $f,E[Z]=te),te.getHandSpace()};function H(Z){const te=A.indexOf(Z.inputSource);if(te===-1)return;const Se=E[te];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<E.length;Z++){const te=A[Z];te!==null&&(A[Z]=null,E[Z].disconnect(te))}b=null,I=null,g.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(S),p=null,u=null,d=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,ue=null;v.depth&&(ue=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=v.stencil?Qr:er,Fe=v.stencil?Va:Ri);const Be={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new fi(u.textureWidth,u.textureHeight,{format:ai,type:Hn,depthTexture:new za(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(Z){for(let te=0;te<Z.removed.length;te++){const Se=Z.removed[te],Fe=A.indexOf(Se);Fe>=0&&(A[Fe]=null,E[Fe].disconnect(Se))}for(let te=0;te<Z.added.length;te++){const Se=Z.added[te];let Fe=A.indexOf(Se);if(Fe===-1){for(let Be=0;Be<E.length;Be++)if(Be>=A.length){A.push(Se),Fe=Be;break}else if(A[Be]===null){A[Be]=Se,Fe=Be;break}if(Fe===-1)break}const ue=E[Fe];ue&&ue.connect(Se)}}const k=new j,G=new j;function F(Z,te,Se){k.setFromMatrixPosition(te.matrixWorld),G.setFromMatrixPosition(Se.matrixWorld);const Fe=k.distanceTo(G),ue=te.projectionMatrix.elements,Be=Se.projectionMatrix.elements,Nt=ue[14]/(ue[10]-1),Ge=ue[14]/(ue[10]+1),Je=(ue[9]+1)/ue[5],ut=(ue[9]-1)/ue[5],Ye=(ue[8]-1)/ue[0],vt=(Be[8]+1)/Be[0],zt=Nt*Ye,gn=Nt*vt,xt=Fe/(-Ye+vt),Rt=xt*-Ye;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ue[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const W=Nt+xt,Zt=Ge+xt,it=zt-Rt,R=gn+(Fe-Rt),M=Je*Ge/Zt*W,X=ut*Ge/Zt*W;Z.projectionMatrix.makePerspective(it,R,M,X,W,Zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,Se=Z.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),L.near=N.near=P.near=te,L.far=N.far=P.far=Se,(b!==L.near||I!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),b=L.near,I=L.far),L.layers.mask=Z.layers.mask|6,P.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Fe=Z.parent,ue=L.cameras;J(L,Fe);for(let Be=0;Be<ue.length;Be++)J(ue[Be],Fe);ue.length===2?F(L,P,N):L.projectionMatrix.copy(P.projectionMatrix),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),re(Z,L,Fe)};function re(Z,te,Se){Se===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return h[Z]};let le=null;function Ae(Z,te){if(f=te.getViewerPose(c||o),m=te,f!==null){const Se=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;Se.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge];let ut=null;if(p!==null)ut=p.getViewport(Je);else{const vt=d.getViewSubImage(u,Je);ut=vt.viewport,Ge===0&&(e.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(y))}let Ye=O[Ge];Ye===void 0&&(Ye=new zn,Ye.layers.enable(Ge),Ye.viewport=new At,O[Ge]=Ye),Ye.matrix.fromArray(Je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Ge===0&&(L.matrix.copy(Ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push(Ye)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const Ge=d.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(ue&&ue.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge].camera;if(Je){let ut=h[Je];ut||(ut=new bE,h[Je]=ut);const Ye=d.getCameraImage(Je);ut.sourceTexture=Ye}}}}for(let Se=0;Se<E.length;Se++){const Fe=A[Se],ue=E[Se];Fe!==null&&ue!==void 0&&ue.update(Fe,te,c||o)}le&&le(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}const Ne=new DE;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}const YN=new Et,BE=new ke;BE.set(-1,0,0,0,1,0,0,0,1);function $N(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,RE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===En&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===En&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),S=v.envMap,y=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(YN.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(BE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const A=E.program;i.uniformBlockBinding(y,A)}function c(y,E){let A=r[y.id];A===void 0&&(g(y),A=f(y),r[y.id]=A,y.addEventListener("dispose",v));const w=E.program;i.updateUBOMapping(y,w);const _=e.render.frame;s[y.id]!==_&&(u(y),s[y.id]=_)}function f(y){const E=d();y.__bindingPointIndex=E;const A=t.createBuffer(),w=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const E=r[y.id],A=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,C=A.length;_<C;_++){const P=A[_];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)p(P[N],_,N,w);else p(P,_,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,A,w){if(x(y,E,A,w)===!0){const _=y.__offset,C=y.value;if(Array.isArray(C)){let P=0;for(let N=0;N<C.length;N++){const O=C[N],L=h(O);m(O,y.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function m(y,E,A){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,A)}function x(y,E,A,w){const _=y.value,C=E+"_"+A;if(w[C]===void 0)return typeof _=="number"||typeof _=="boolean"?w[C]=_:ArrayBuffer.isView(_)?w[C]=_.slice():w[C]=_.clone(),!0;{const P=w[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(y){const E=y.uniforms;let A=0;const w=16;for(let C=0,P=E.length;C<P;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let O=0,L=N.length;O<L;O++){const b=N[O],I=Array.isArray(b.value)?b.value:[b.value];for(let H=0,B=I.length;H<B;H++){const U=I[H],k=h(U),G=A%w,F=G%k.boundary,J=G+F;A+=F,J!==0&&w-J<k.storage&&(A+=w-J),b.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=A,A+=k.storage}}}const _=A%w;return _>0&&(A+=w-_),y.__size=A,y.__cache={},this}function h(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",y),E}function v(y){const E=y.target;E.removeEventListener("dispose",v);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const KN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function ZN(){return _i===null&&(_i=new NL(KN,16,16,hs,Pi),_i.name="DFG_LUT",_i.minFilter=sn,_i.magFilter=sn,_i.wrapS=Xi,_i.wrapT=Xi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class JN{constructor(e={}){const{canvas:n=cL(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=p,g=new Set([ig,ng,tg]),h=new Set([Hn,Ri,Ba,Va,Qm,eg]),v=new Uint32Array(4),S=new Int32Array(4),y=new j;let E=null,A=null;const w=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,O=null,L=null,b=null,I=null;this._outputColorSpace=kn;let H=0,B=0,U=null,k=-1,G=null;const F=new At,J=new At;let re=null;const le=new qe(0);let Ae=0,Ne=n.width,Z=n.height,te=1,Se=null,Fe=null;const ue=new At(0,0,Ne,Z),Be=new At(0,0,Ne,Z);let Nt=!1;const Ge=new TE;let Je=!1,ut=!1;const Ye=new Et,vt=new j,zt=new At,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Rt(){return U===null?te:1}let W=i;function Zt(T,V){return n.getContext(T,V)}let it,R,M,X,q,Q,ce,fe,ee,ie,de,Le,ge,he,De,Ue,Ve,z,pe,ne,me,ye,se;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zm}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",$n,!1),W===null){const V="webgl2";if(W=Zt(V,T),W===null)throw Zt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(T){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",$n,!1),Qe("WebGLRenderer: "+T.message),T}function Ie(){it=new Z2(W),it.init(),me=new HN(W,it),R=new z2(W,it,e,me),M=new VN(W,it),R.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),L=W.createFramebuffer(),b=W.createFramebuffer(),I=W.createFramebuffer(),X=new eI(W),q=new AN,Q=new zN(W,it,M,q,R,me,X),ce=new K2(P),fe=new nD(W),ye=new B2(W,fe),ee=new J2(W,fe,X,ye),ie=new nI(W,ee,fe,ye,X),z=new tI(W,R,Q),De=new H2(q),de=new wN(P,ce,it,R,ye,De),Le=new $N(P,q),ge=new bN,he=new NN(it),Ve=new k2(P,ce,M,ie,m,l),Ue=new BN(P,ie,R),se=new qN(W,X,R,M),pe=new V2(W,it,X),ne=new Q2(W,it,X),X.programs=de.programs,P.capabilities=R,P.extensions=it,P.properties=q,P.renderLists=ge,P.shadowMap=Ue,P.state=M,P.info=X}x!==Hn&&(C=new rI(x,n.width,n.height,a,r,s));const Re=new jN(P,W);this.xr=Re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Ne,Z,!1))},this.getSize=function(T){return T.set(Ne,Z)},this.setSize=function(T,V,K=!0){if(Re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=T,Z=V,n.width=Math.floor(T*te),n.height=Math.floor(V*te),K===!0&&(n.style.width=T+"px",n.style.height=V+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Ne*te,Z*te).floor()},this.setDrawingBufferSize=function(T,V,K){Ne=T,Z=V,te=K,n.width=Math.floor(T*K),n.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===Hn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,V,K,Y){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,V,K,Y),M.viewport(F.copy(ue).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,V,K,Y){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,V,K,Y),M.scissor(J.copy(Be).multiplyScalar(te).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){M.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,K=!0){let Y=0;if(T){let $=!1;if(U!==null){const xe=U.texture.format;$=g.has(xe)}if($){const xe=U.texture.type,Ee=h.has(xe),_e=Ve.getClearColor(),Ce=Ve.getClearAlpha(),Pe=_e.r,ze=_e.g,We=_e.b;Ee?(v[0]=Pe,v[1]=ze,v[2]=We,v[3]=Ce,W.clearBufferuiv(W.COLOR,0,v)):(S[0]=Pe,S[1]=ze,S[2]=We,S[3]=Ce,W.clearBufferiv(W.COLOR,0,S))}else Y|=W.COLOR_BUFFER_BIT}V&&(Y|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&W.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",$n,!1),Ve.dispose(),ge.dispose(),he.dispose(),q.dispose(),ce.dispose(),ie.dispose(),ye.dispose(),se.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",gg),Re.removeEventListener("sessionend",vg),Or.stop()};function ft(T){T.preventDefault(),a_("WebGLRenderer: Context Lost."),N=!0}function tt(){a_("WebGLRenderer: Context Restored."),N=!1;const T=X.autoReset,V=Ue.enabled,K=Ue.autoUpdate,Y=Ue.needsUpdate,$=Ue.type;Ie(),X.autoReset=T,Ue.enabled=V,Ue.autoUpdate=K,Ue.needsUpdate=Y,Ue.type=$}function $n(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pi(T){const V=T.target;V.removeEventListener("dispose",pi),VE(V)}function VE(T){zE(T),q.remove(T)}function zE(T){const V=q.get(T).programs;V!==void 0&&(V.forEach(function(K){de.releaseProgram(K)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,Y,$,xe){V===null&&(V=gn);const Ee=$.isMesh&&$.matrixWorld.determinantAffine()<0,_e=WE(T,V,K,Y,$);M.setMaterial(Y,Ee);let Ce=K.index,Pe=1;if(Y.wireframe===!0){if(Ce=ee.getWireframeAttribute(K),Ce===void 0)return;Pe=2}const ze=K.drawRange,We=K.attributes.position;let be=ze.start*Pe,nt=(ze.start+ze.count)*Pe;xe!==null&&(be=Math.max(be,xe.start*Pe),nt=Math.min(nt,(xe.start+xe.count)*Pe)),Ce!==null?(be=Math.max(be,0),nt=Math.min(nt,Ce.count)):We!=null&&(be=Math.max(be,0),nt=Math.min(nt,We.count));const Pt=nt-be;if(Pt<0||Pt===1/0)return;ye.setup($,Y,_e,K,Ce);let pt,ct=pe;if(Ce!==null&&(pt=fe.get(Ce),ct=ne,ct.setIndex(pt)),$.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*Rt()),ct.setMode(W.LINES)):ct.setMode(W.TRIANGLES);else if($.isLine){let Jt=Y.linewidth;Jt===void 0&&(Jt=1),M.setLineWidth(Jt*Rt()),$.isLineSegments?ct.setMode(W.LINES):$.isLineLoop?ct.setMode(W.LINE_LOOP):ct.setMode(W.LINE_STRIP)}else $.isPoints?ct.setMode(W.POINTS):$.isSprite&&ct.setMode(W.TRIANGLES);if($.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,Me=$._multiDrawCounts,ln=$._multiDrawCount,Ke=Ce?fe.get(Ce).bytesPerElement:1,Fn=q.get(Y).currentProgram.getUniforms();for(let mi=0;mi<ln;mi++)Fn.setValue(W,"_gl_DrawID",mi),ct.render(Jt[mi]/Ke,Me[mi])}else if($.isInstancedMesh)ct.renderInstances(be,Pt,$.count);else if(K.isInstancedBufferGeometry){const Jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Jt);ct.renderInstances(be,Pt,Me)}else ct.render(be,Pt)};function mg(T,V,K,Y){O!==null&&T.isNodeMaterial&&O.setObject(Y,T),Je===!0&&De.setState(T,K,!1),T.transparent===!0&&T.side===Hi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,tl(T,V,Y),T.side=fs,T.needsUpdate=!0,tl(T,V,Y),T.side=Hi):tl(T,V,Y)}this.compile=function(T,V,K=null){K===null&&(K=T),O!==null&&O.renderStart(T,V,K),A=he.get(K),A.init(V),_.push(A),K.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),T!==K&&T.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),ut=this.localClippingEnabled,Je=De.init(this.clippingPlanes,ut),Je===!0&&De.setGlobalState(this.clippingPlanes,V),O!==null&&Ue.render(A.state.shadowsArray,K,V);const Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const xe=$.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){const _e=xe[Ee];mg(_e,K,V,$),Y.add(_e)}else mg(xe,K,V,$),Y.add(xe)}),A=_.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(T,V,K=null){const Y=this.compile(T,V,K);return new Promise($=>{function xe(){if(Y.forEach(function(Ee){const Ce=q.get(Ee).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Ee)}),Y.size===0){$(T);return}setTimeout(xe,10)}it.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Hu=null;function HE(T){Hu&&Hu(T)}function gg(){Or.stop()}function vg(){Or.start()}const Or=new DE;Or.setAnimationLoop(HE),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(T){Hu=T,Re.setAnimationLoop(T),T===null?Or.stop():Or.start()},Re.addEventListener("sessionstart",gg),Re.addEventListener("sessionend",vg),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(T,V);const K=Re.enabled===!0&&Re.isPresenting===!0,Y=C!==null&&(U===null||K)&&C.begin(P,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(V),V=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,V,U),A=he.get(T,_.length),A.init(V),A.state.textureUnits=Q.getTextureUnits(),_.push(A),Ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ge.setFromProjectionMatrix(Ye,Ei,V.reversedDepth),ut=this.localClippingEnabled,Je=De.init(this.clippingPlanes,ut),E=ge.get(T,w.length),E.init(),w.push(E),Re.enabled===!0&&Re.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Gu(Ee,V,-1/0,P.sortObjects)}Gu(T,V,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(A.state.lightsArray),P.sortObjects===!0&&E.sort(Se,Fe),xt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,xt&&Ve.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&De.beginShadows();const $=A.state.shadowsArray;if(Ue.render($,T,V),Je===!0&&De.endShadows(),(Y&&C.hasRenderPass())===!1){const Ee=E.opaque,_e=E.transmissive;if(A.setupLights(),V.isArrayCamera){const Ce=V.cameras;if(_e.length>0)for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe];xg(Ee,_e,T,We)}xt&&Ve.render(T);for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe];_g(E,T,We,We.viewport)}}else _e.length>0&&xg(Ee,_e,T,V),xt&&Ve.render(T),_g(E,T,V)}U!==null&&B===0&&(Q.updateMultisampleRenderTarget(U),Q.updateRenderTargetMipmap(U)),Y&&C.end(P),T.isScene===!0&&T.onAfterRender(P,T,V),ye.resetDefaultState(),k=-1,G=null,_.pop(),_.length>0?(A=_[_.length-1],Q.setTextureUnits(A.state.textureUnits),Je===!0&&De.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,O!==null&&O.renderEnd()};function Gu(T,V,K,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ge)){Y&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ye);const Ee=ie.update(T),_e=T.material;_e.visible&&E.push(T,Ee,_e,K,zt.z,null,V)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ge))){const Ee=ie.update(T),_e=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),zt.copy(Ee.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(Ye)),Array.isArray(_e)){const Ce=Ee.groups;for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe],be=_e[We.materialIndex];be&&be.visible&&E.push(T,Ee,be,K,zt.z,We,V)}}else _e.visible&&E.push(T,Ee,_e,K,zt.z,null,V)}}const xe=T.children;for(let Ee=0,_e=xe.length;Ee<_e;Ee++)Gu(xe[Ee],V,K,Y)}function _g(T,V,K,Y){const{opaque:$,transmissive:xe,transparent:Ee}=T;A.setupLightsView(K),Je===!0&&De.setGlobalState(P.clippingPlanes,K),Y&&M.viewport(F.copy(Y)),$.length>0&&el($,V,K),xe.length>0&&el(xe,V,K),Ee.length>0&&el(Ee,V,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function xg(T,V,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const be=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new fi(1,1,{generateMipmaps:!0,type:be?Pi:Hn,minFilter:Jr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const xe=A.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||F;xe.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(le),Ae=P.getClearAlpha(),Ae<1&&P.setClearColor(16777215,.5),P.clear(),xt&&Ve.render(K);const ze=P.toneMapping;P.toneMapping=Ci;const We=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),Je===!0&&De.setGlobalState(P.clippingPlanes,Y),el(T,K,Y),Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe),it.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let nt=0,Pt=V.length;nt<Pt;nt++){const pt=V[nt],{object:ct,geometry:Jt,material:Me,group:ln}=pt;if(Me.side===Hi&&ct.layers.test(Y.layers)){const Ke=Me.side;Me.side=En,Me.needsUpdate=!0,yg(ct,K,Y,Jt,Me,ln),Me.side=Ke,Me.needsUpdate=!0,be=!0}}be===!0&&(Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe))}P.setRenderTarget(_e,Ce,Pe),P.setClearColor(le,Ae),We!==void 0&&(Y.viewport=We),P.toneMapping=ze}function el(T,V,K){const Y=V.isScene===!0?V.overrideMaterial:null;for(let $=0,xe=T.length;$<xe;$++){const Ee=T[$],{object:_e,geometry:Ce,group:Pe}=Ee;let ze=Ee.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),_e.layers.test(K.layers)&&yg(_e,V,K,Ce,ze,Pe)}}function yg(T,V,K,Y,$,xe){O!==null&&$.isNodeMaterial&&O.setObject(T,$),T.onBeforeRender(P,V,K,Y,$,xe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(P,V,K,Y,T,xe),$.transparent===!0&&$.side===Hi&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,P.renderBufferDirect(K,V,Y,$,T,xe),$.side=fs,$.needsUpdate=!0,P.renderBufferDirect(K,V,Y,$,T,xe),$.side=Hi):P.renderBufferDirect(K,V,Y,$,T,xe),T.onAfterRender(P,V,K,Y,$,xe)}function tl(T,V,K){V.isScene!==!0&&(V=gn);const Y=q.get(T),$=A.state.lights,xe=A.state.shadowsArray,Ee=$.state.version,_e=de.getParameters(T,$.state,xe,V,K,A.state.lightProbeGridArray),Ce=de.getProgramCacheKey(_e);let Pe=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=ce.get(T.envMap||Y.environment,ze),Y.envMapRotation=Y.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",pi),Pe=new Map,Y.programs=Pe);let We=Pe.get(Ce);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===Ee)return Mg(T,_e),We}else _e.uniforms=de.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,K,_e),T.onBeforeCompile(_e,P),We=de.acquireProgram(_e,Ce),Pe.set(Ce,We),Y.uniforms=_e.uniforms;const be=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=De.uniform),Mg(T,_e),Y.needsLights=jE(T),Y.lightsStateVersion=Ee,Y.needsLights&&(be.ambientLightColor.value=$.state.ambient,be.lightProbe.value=$.state.probe,be.sunLights.value=$.state.sun,be.sunLightShadows.value=$.state.sunShadow,be.directionalLights.value=$.state.directional,be.directionalLightShadows.value=$.state.directionalShadow,be.spotLights.value=$.state.spot,be.spotLightShadows.value=$.state.spotShadow,be.rectAreaLights.value=$.state.rectArea,be.ltc_1.value=$.state.rectAreaLTC1,be.ltc_2.value=$.state.rectAreaLTC2,be.pointLights.value=$.state.point,be.pointLightShadows.value=$.state.pointShadow,be.hemisphereLights.value=$.state.hemi,be.sunShadowMatrix.value=$.state.sunShadowMatrix,be.sunShadowCascade.value=$.state.sunShadowCascade,be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,be.spotLightMatrix.value=$.state.spotLightMatrix,be.spotLightMap.value=$.state.spotLightMap,be.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=A.state.lightProbeGridArray.length>0,Y.currentProgram=We,Y.uniformsList=null,We}function Sg(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Mg(T,V){const K=q.get(T);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function GE(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(V.matrixWorld);for(let K=0,Y=T.length;K<Y;K++){const $=T[K];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function WE(T,V,K,Y,$){V.isScene!==!0&&(V=gn),Q.resetTextureUnits();const xe=V.fog,Ee=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,_e=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:$e.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pe=ce.get(Y.envMap||Ee,Ce),ze=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),be=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,Pt=!!K.morphAttributes.color;let pt=Ci;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=P.toneMapping);const ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=ct!==void 0?ct.length:0,Me=q.get(Y),ln=A.state.lights;if(Je===!0&&(ut===!0||T!==G)){const dt=T===G&&Y.id===k;De.setState(Y,T,dt)}let Ke=!1;Y.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==ln.state.version||Me.outputColorSpace!==_e||$.isBatchedMesh&&Me.batching===!1||!$.isBatchedMesh&&Me.batching===!0||$.isBatchedMesh&&Me.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Me.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Me.instancing===!1||!$.isInstancedMesh&&Me.instancing===!0||$.isSkinnedMesh&&Me.skinning===!1||!$.isSkinnedMesh&&Me.skinning===!0||$.isInstancedMesh&&Me.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Me.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Me.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Me.instancingMorph===!1&&$.morphTexture!==null||Me.envMap!==Pe||Y.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==We||Me.morphTargets!==be||Me.morphNormals!==nt||Me.morphColors!==Pt||Me.toneMapping!==pt||Me.morphTargetsCount!==Jt||!!Me.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Me.__version=Y.version);let Fn=Me.currentProgram;Ke===!0&&(Fn=tl(Y,V,$),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,Fn,Me));let mi=!1,nr=!1,_s=!1;const at=Fn.getUniforms(),Ct=Me.uniforms;if(M.useProgram(Fn.program)&&(mi=!0,nr=!0,_s=!0),Y.id!==k&&(k=Y.id,nr=!0),Me.needsLights){const dt=GE(A.state.lightProbeGridArray,$);Me.lightProbeGrid!==dt&&(Me.lightProbeGrid=dt,nr=!0)}if(mi||G!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(W,"projectionMatrix",T.projectionMatrix),at.setValue(W,"viewMatrix",T.matrixWorldInverse);const rr=at.map.cameraPosition;rr!==void 0&&rr.setValue(W,vt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&at.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,nr=!0,_s=!0)}if(Me.needsLights&&(ln.state.sunShadowMap.length>0&&at.setValue(W,"sunShadowMap",ln.state.sunShadowMap,Q),ln.state.directionalShadowMap.length>0&&at.setValue(W,"directionalShadowMap",ln.state.directionalShadowMap,Q),ln.state.spotShadowMap.length>0&&at.setValue(W,"spotShadowMap",ln.state.spotShadowMap,Q),ln.state.pointShadowMap.length>0&&at.setValue(W,"pointShadowMap",ln.state.pointShadowMap,Q)),$.isSkinnedMesh){at.setOptional(W,$,"bindMatrix"),at.setOptional(W,$,"bindMatrixInverse");const dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),at.setValue(W,"boneTexture",dt.boneTexture,Q))}$.isBatchedMesh&&(at.setOptional(W,$,"batchingTexture"),at.setValue(W,"batchingTexture",$._matricesTexture,Q),at.setOptional(W,$,"batchingIdTexture"),at.setValue(W,"batchingIdTexture",$._indirectTexture,Q),at.setOptional(W,$,"batchingColorTexture"),$._colorsTexture!==null&&at.setValue(W,"batchingColorTexture",$._colorsTexture,Q));const ir=K.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&z.update($,K,Fn),(nr||Me.receiveShadow!==$.receiveShadow)&&(Me.receiveShadow=$.receiveShadow,at.setValue(W,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Ct.envMapIntensity.value=V.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=ZN()),nr){if(at.setValue(W,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&XE(Ct,_s),xe&&Y.fog===!0&&Le.refreshFogUniforms(Ct,xe),Le.refreshMaterialUniforms(Ct,Y,te,Z,A.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const dt=Me.lightProbeGrid;Ct.probesSH.value=dt.texture,Ct.probesMin.value.copy(dt.boundingBox.min),Ct.probesMax.value.copy(dt.boundingBox.max),Ct.probesResolution.value.copy(dt.resolution)}Ec.upload(W,Sg(Me),Ct,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ec.upload(W,Sg(Me),Ct,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&at.setValue(W,"center",$.center),at.setValue(W,"modelViewMatrix",$.modelViewMatrix),at.setValue(W,"normalMatrix",$.normalMatrix),at.setValue(W,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const dt=Y.uniformsGroups;for(let rr=0,xs=dt.length;rr<xs;rr++){const Tg=dt[rr];se.update(Tg,Fn),se.bind(Tg,Fn)}}return Fn}function XE(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function jE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,V,K){const Y=q.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=V,q.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const K=q.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,K=0){U=T,H=V,B=K;let Y=null,$=!1,xe=!1;if(T){const _e=q.get(T);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,_e.__webglFramebuffer),F.copy(T.viewport),J.copy(T.scissor),re=T.scissorTest,M.viewport(F),M.scissor(J),M.setScissorTest(re),k=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(_e.__hasExternalTextures)Q.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(_e.__boundDepthTexture!==ze){if(ze!==null&&q.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Pe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[V])?Y=Pe[V][K]:Y=Pe[V],$=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?Y=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[K]:Y=Pe,F.copy(T.viewport),J.copy(T.scissor),re=T.scissorTest}else F.copy(ue).multiplyScalar(te).floor(),J.copy(Be).multiplyScalar(te).floor(),re=Nt;if(K!==0&&(Y=L),M.bindFramebuffer(W.FRAMEBUFFER,Y)&&M.drawBuffers(T,Y),M.viewport(F),M.scissor(J),M.setScissorTest(re),$){const _e=q.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e.__webglTexture,K)}else if(xe){const _e=V;for(let Ce=0;Ce<T.textures.length;Ce++){const Pe=q.get(T.textures[Ce]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,K,_e)}}else if(T!==null&&K!==0){const _e=q.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,_e.__webglTexture,K)}k=-1};function Eg(T){const V=q.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=R.textureFormatReadable(T.format),V.__typeReadable=R.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,K,Y,$,xe,Ee,_e=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){M.bindFramebuffer(W.FRAMEBUFFER,Ce);try{const Pe=T.textures[_e],ze=Pe.format,We=Pe.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+_e);const be=Eg(Pe);if(be.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&K>=0&&K<=T.height-$&&W.readPixels(V,K,Y,$,me.convert(ze),me.convert(We),xe)}finally{const Pe=U!==null?q.get(U).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,V,K,Y,$,xe,Ee,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(V>=0&&V<=T.width-Y&&K>=0&&K<=T.height-$){M.bindFramebuffer(W.FRAMEBUFFER,Ce);const Pe=T.textures[_e],ze=Pe.format,We=Pe.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+_e);const be=Eg(Pe);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.bufferData(W.PIXEL_PACK_BUFFER,xe.byteLength,W.STREAM_READ),W.readPixels(V,K,Y,$,me.convert(ze),me.convert(We),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Pt=U!==null?q.get(U).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Pt);const pt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await uL(W,pt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,xe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(nt),W.deleteSync(pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,K=0){const Y=Math.pow(2,-K),$=Math.floor(T.image.width*Y),xe=Math.floor(T.image.height*Y),Ee=V!==null?V.x:0,_e=V!==null?V.y:0;Q.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,Ee,_e,$,xe),M.unbindTexture()},this.copyTextureToTexture=function(T,V,K=null,Y=null,$=0,xe=0){let Ee,_e,Ce,Pe,ze,We,be,nt,Pt;const pt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(K!==null)Ee=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Pe=K.min.x,ze=K.min.y,We=K.isBox3?K.min.z:0;else{const Ct=Math.pow(2,-$);Ee=Math.floor(pt.width*Ct),_e=Math.floor(pt.height*Ct),T.isDataArrayTexture?Ce=pt.depth:T.isData3DTexture?Ce=Math.floor(pt.depth*Ct):Ce=1,Pe=0,ze=0,We=0}Y!==null?(be=Y.x,nt=Y.y,Pt=Y.z):(be=0,nt=0,Pt=0);const ct=me.convert(V.format),Jt=me.convert(V.type);let Me;V.isData3DTexture?(Q.setTexture3D(V,0),Me=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Q.setTexture2DArray(V,0),Me=W.TEXTURE_2D_ARRAY):(Q.setTexture2D(V,0),Me=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);const ln=M.getParameter(W.UNPACK_ROW_LENGTH),Ke=M.getParameter(W.UNPACK_IMAGE_HEIGHT),Fn=M.getParameter(W.UNPACK_SKIP_PIXELS),mi=M.getParameter(W.UNPACK_SKIP_ROWS),nr=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(W.UNPACK_SKIP_ROWS,ze),M.pixelStorei(W.UNPACK_SKIP_IMAGES,We);const _s=T.isDataArrayTexture||T.isData3DTexture,at=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const Ct=q.get(T),ir=q.get(V),dt=q.get(Ct.__renderTarget),rr=q.get(ir.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,dt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let xs=0;xs<Ce;xs++)_s&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,q.get(T).__webglTexture,$,We+xs),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,q.get(V).__webglTexture,xe,Pt+xs)),W.blitFramebuffer(Pe,ze,Ee,_e,be,nt,Ee,_e,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||q.has(T)){const Ct=q.get(T),ir=q.get(V);M.bindFramebuffer(W.READ_FRAMEBUFFER,b),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,I);for(let dt=0;dt<Ce;dt++)_s?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ct.__webglTexture,$,We+dt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ct.__webglTexture,$),at?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ir.__webglTexture,xe,Pt+dt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ir.__webglTexture,xe),$!==0?W.blitFramebuffer(Pe,ze,Ee,_e,be,nt,Ee,_e,W.COLOR_BUFFER_BIT,W.NEAREST):at?W.copyTexSubImage3D(Me,xe,be,nt,Pt+dt,Pe,ze,Ee,_e):W.copyTexSubImage2D(Me,xe,be,nt,Pe,ze,Ee,_e);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Me,xe,be,nt,Pt,Ee,_e,Ce,ct,Jt,pt.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Me,xe,be,nt,Pt,Ee,_e,Ce,ct,pt.data):W.texSubImage3D(Me,xe,be,nt,Pt,Ee,_e,Ce,ct,Jt,pt):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,xe,be,nt,Ee,_e,ct,Jt,pt.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,xe,be,nt,pt.width,pt.height,ct,pt.data):W.texSubImage2D(W.TEXTURE_2D,xe,be,nt,Ee,_e,ct,Jt,pt);M.pixelStorei(W.UNPACK_ROW_LENGTH,ln),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ke),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Fn),M.pixelStorei(W.UNPACK_SKIP_ROWS,mi),M.pixelStorei(W.UNPACK_SKIP_IMAGES,nr),xe===0&&V.generateMipmaps&&W.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){H=0,B=0,U=null,M.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function Q_({variant:t="hero"}){const e=ae.useRef(null);return ae.useEffect(()=>{const n=e.current;if(!n)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new AL,s=new zn(50,n.clientWidth/n.clientHeight,.1,200),o=t==="hero";s.position.z=o?30:40;const a=new JN({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(n.clientWidth,n.clientHeight),n.appendChild(a.domElement);const l=new Zo;r.add(l);const c=o?9:12,f=new qe("#a6265a"),d=new qe("#f0a6c0"),u=new qe("#ffb35c"),p=i?90:190,m=new Float32Array(p*3),x=new Float32Array(p*3),g=[];for(let F=0;F<p;F++){const J=Math.acos(1-2*(F+.5)/p),re=Math.PI*(1+Math.sqrt(5))*F,le=Math.sin(J)*Math.cos(re),Ae=Math.sin(J)*Math.sin(re),Ne=Math.cos(J);m[F*3]=le*c,m[F*3+1]=Ae*c,m[F*3+2]=Ne*c,g.push(new j(le,Ae,Ne));const Z=Math.random(),te=Z<.55?f:Z<.85?d:u;x[F*3]=te.r,x[F*3+1]=te.g,x[F*3+2]=te.b}const h=new Tn;h.setAttribute("position",new di(m,3)),h.setAttribute("color",new di(x,3));const v=(()=>{const J=document.createElement("canvas");J.width=64,J.height=64;const re=J.getContext("2d"),le=re.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return le.addColorStop(0,"rgba(255,255,255,1)"),le.addColorStop(.4,"rgba(255,255,255,0.55)"),le.addColorStop(1,"rgba(255,255,255,0)"),re.fillStyle=le,re.fillRect(0,0,64,64),new kL(J)})(),S=new AE({size:o?.85:.7,map:v,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:su,sizeAttenuation:!0}),y=new OL(h,S);l.add(y);const E=new wE({color:15771328,transparent:!0,opacity:.28,blending:su}),A=i?20:46,w=[];for(let F=0;F<A;F++){const J=Math.floor(Math.random()*p),re=Math.floor(Math.random()*p);if(J===re)continue;const le=g[J].clone().multiplyScalar(c),Ae=g[re].clone().multiplyScalar(c),Ne=le.clone().add(Ae).multiplyScalar(.5),Z=le.distanceTo(Ae),te=Ne.clone().normalize().multiplyScalar(Z*.55);Ne.add(te);const Fe=new WL(le,Ne,Ae).getPoints(28),ue=new Tn().setFromPoints(Fe),Be=new FL(ue,E);E.needsUpdate=!0,l.add(Be),w.push(ue)}const _=new lg({color:10888794,transparent:!0,opacity:.04,wireframe:!0}),C=new cg(c,18,14),P=new Li(C,_);l.add(P),l.rotation.z=.18;const N={x:0,y:0},O={x:0,y:0},L=F=>{N.x=(F.clientX/window.innerWidth-.5)*2,N.y=(F.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",L);const b={progress:0,current:0},I=()=>{const F=document.documentElement.scrollHeight-window.innerHeight;b.progress=F>0?Math.min(1,Math.max(0,window.scrollY/F)):0};I(),window.addEventListener("scroll",I,{passive:!0});const H=new eD;let B;const U=()=>{const F=H.getElapsedTime(),J=!o;if(!i){O.x+=(N.x-O.x)*.03,O.y+=(N.y-O.y)*.03,b.current+=(b.progress-b.current)*.06;const re=J?F*.16+b.current*Math.PI*1.4:F*.12;l.rotation.y=re+O.x*.5,l.rotation.x=Math.sin(F*.2)*.08-O.y*.3+(J?b.current*.5:0),J&&(s.position.z=c*2.4+b.current*10,s.position.y=-O.y*2.2-b.current*4,l.position.y=-b.current*3),s.position.x=O.x*3,s.lookAt(0,0,0)}a.render(r,s),B=requestAnimationFrame(U)};U();const k=()=>{n&&(s.aspect=n.clientWidth/n.clientHeight,s.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))};window.addEventListener("resize",k);const G=()=>{document.hidden?cancelAnimationFrame(B):(H.start(),U())};return document.addEventListener("visibilitychange",G),()=>{cancelAnimationFrame(B),window.removeEventListener("pointermove",L),window.removeEventListener("scroll",I),window.removeEventListener("resize",k),document.removeEventListener("visibilitychange",G),h.dispose(),S.dispose(),v.dispose(),C.dispose(),_.dispose(),w.forEach(F=>F.dispose()),E.dispose(),a.dispose(),a.domElement.parentNode===n&&n.removeChild(a.domElement)}},[t]),D.jsx("div",{className:`globe-3d globe-3d--${t}`,ref:e,"aria-hidden":"true"})}function ex({children:t}){const e=ae.useRef(null);return ae.useEffect(()=>{const n=e.current;if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i={x:0,y:0},r={x:0,y:0};let s=0,o=0,a;const l=u=>{const p=n.getBoundingClientRect();i.x=(u.clientX-p.left)/p.width-.5,i.y=(u.clientY-p.top)/p.height-.5},c=()=>{i.x=0,i.y=0},f=()=>{const u=n.getBoundingClientRect(),p=window.innerHeight,m=(u.top+u.height/2-p/2)/(p/2);s=Math.max(-1,Math.min(1,m))},d=()=>{r.x+=(i.x-r.x)*.07,r.y+=(i.y-r.y)*.07,o+=(s-o)*.07;const u=-r.y*9-o*3,p=r.x*11;n.style.transform=`rotateX(${u.toFixed(2)}deg) rotateY(${p.toFixed(2)}deg)`,a=requestAnimationFrame(d)};return window.addEventListener("pointermove",l,{passive:!0}),n.addEventListener("pointerleave",c),window.addEventListener("scroll",f,{passive:!0}),f(),a=requestAnimationFrame(d),()=>{cancelAnimationFrame(a),window.removeEventListener("pointermove",l),n.removeEventListener("pointerleave",c),window.removeEventListener("scroll",f)}},[]),D.jsx("div",{className:"showcase-stage",ref:e,children:t})}function QN({item:t,onClose:e}){return ae.useEffect(()=>{if(!t)return;const n=r=>{r.key==="Escape"&&e()},i=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n),document.body.style.overflow=i}},[t,e]),t?D.jsx("div",{className:"lightbox",role:"dialog","aria-modal":"true","aria-label":t.title,onClick:e,children:D.jsxs("div",{className:"lightbox-panel",onClick:n=>n.stopPropagation(),children:[D.jsx("button",{type:"button",className:"lightbox-close",onClick:e,"aria-label":"Close",children:D.jsx("ion-icon",{name:"close"})}),D.jsx("h4",{className:"lightbox-title",children:t.title}),t.desc?D.jsx("p",{className:"lightbox-desc",children:t.desc}):null,D.jsx("img",{className:"lightbox-img",src:t.src,alt:t.alt})]})}):null}const Ep={pronouns:"She/Her",education:"Indian Institute of Management Rohtak",email:"shahazrafayaz@gmail.com"},eU=[{id:"social",label:"Social Media",color:"#a6265a"},{id:"content",label:"Content & Copy",color:"#c2410c"},{id:"email",label:"Email Marketing",color:"#0f766e"},{id:"influencer",label:"Influencer",color:"#7c3aed"},{id:"events",label:"Events",color:"#b45309"},{id:"partnerships",label:"Partnerships",color:"#1d4ed8"},{id:"strategy",label:"Brand Strategy",color:"#0891b2"}],tU=[{id:"social-media-management",name:"Social Media Management",cat:"social",endorsements:1,description:"Running day-to-day social presence end-to-end: planning, publishing and community engagement across channels.",context:"Daily practice at Bambuyu."},{id:"content-planning",name:"Content Planning",cat:"social",description:"Building content calendars that map posts to launches, campaigns and marketing objectives.",context:"Bambuyu"},{id:"community-engagement",name:"Community Engagement",cat:"social",description:"Nurturing an active audience through replies, DMs and conversation-led community building.",context:"Bambuyu"},{id:"audience-growth",name:"Audience Growth",cat:"social",description:"Growing reach and followers through consistent storytelling and audience-first content.",context:"Gramiyaa LinkedIn — 40% follower increase."},{id:"content-creation",name:"Content Creation & Design",cat:"content",description:"Designing and producing social content, campaign creatives and brand communication assets.",context:"Bambuyu"},{id:"copywriting",name:"Copywriting",cat:"content",endorsements:1,description:"Writing clear, persuasive copy for campaigns, captions, landing pages and brand messaging.",context:"Marketing Intern at Oliveboard."},{id:"content-writing",name:"Content Writing",cat:"content",description:"Long-form and short-form writing for brand storytelling, blogs and debatable content pieces.",context:"Content Writer at AWAAZ."},{id:"storytelling",name:"Brand Storytelling",cat:"content",description:"Turning product and founder stories into narratives audiences actually follow and share.",context:"Gramiyaa"},{id:"email-strategy",name:"Email Strategy",cat:"email",description:"Planning email programmes end-to-end — from strategy and segmentation to timing.",context:"Bambuyu"},{id:"email-campaigns",name:"Email Campaigns",cat:"email",description:"Designing, executing and tracking email campaigns with performance reporting.",context:"Bambuyu"},{id:"email-design",name:"Email Design",cat:"email",description:"Building on-brand, responsive email layouts that hold up across clients.",context:"Bambuyu"},{id:"performance-tracking",name:"Performance Tracking",cat:"email",description:"Measuring opens, clicks and conversions, then iterating on what the data shows.",context:"Bambuyu"},{id:"influencer-marketing",name:"Influencer Marketing",cat:"influencer",description:"Identifying and managing creators, coordinating collaborations and overseeing content execution.",context:"Bambuyu"},{id:"creator-management",name:"Creator Management",cat:"influencer",description:"Running creator relationships end-to-end: sourcing, briefing, review and follow-up.",context:"Bambuyu"},{id:"deliverable-negotiation",name:"Deliverable Negotiation",cat:"influencer",description:"Negotiating deliverables, timelines and rates that work for both brand and creator.",context:"Bambuyu"},{id:"event-management",name:"Event Management",cat:"events",endorsements:1,description:"Planning and running brand events, pop-ups, activations and on-ground marketing initiatives.",context:"Endorsed skill. Gramiyaa — 4 on-ground events every month."},{id:"marketing-event-planning",name:"Marketing Event Planning",cat:"events",endorsements:1,description:"Planning events as marketing instruments — designed around awareness and consumer education.",context:"Endorsed skill. Gramiyaa."},{id:"activations",name:"On-ground Activations",cat:"events",description:"Executing consumer-facing activations that drive trial and brand recall.",context:"Gramiyaa"},{id:"brand-partnerships",name:"Brand Partnerships",cat:"partnerships",description:"Building and managing collaborations with brands and partners to drive awareness and engagement.",context:"Bambuyu"},{id:"barter-collaborations",name:"Barter Collaborations",cat:"partnerships",description:"Running strategic offline barter deals with academies, universities and event partners.",context:"Gramiyaa — 10+ partners."},{id:"b2b-onboarding",name:"B2B Onboarding",cat:"partnerships",description:"Turning partners into paying B2B customers and keeping long-term accounts alive.",context:"Gramiyaa — cooking academies as a new sales channel."},{id:"content-strategy",name:"Content Strategy",cat:"strategy",description:"Developing content ideas and campaigns aligned to brand positioning and launch objectives.",context:"Bambuyu"},{id:"business-marketing",name:"Business Marketing",cat:"strategy",endorsements:1,description:"Commercial marketing thinking — connecting activity to pipeline, sales and business goals.",context:"Marketing Intern at Oliveboard."},{id:"marketing-support",name:"Marketing Support",cat:"strategy",description:"Cross-functional marketing support across campaigns, collateral and coordination.",context:"Marketing Intern at Oliveboard."},{id:"consumer-education",name:"Consumer Education",cat:"strategy",description:"Educating consumers on category and product value, especially in health and wellness.",context:"Gramiyaa — wood cold-pressed oils."},{id:"fmcg",name:"FMCG Marketing",cat:"strategy",description:"Marketing fast-moving consumer goods to mass audiences across online and offline channels.",context:"Gramiyaa, Bambuyu."}],nU=[{company:"Bambuyu",icon:"bag-handle-outline",role:"Community & Content Executive",location:"UAE",date:"Feb 2026 — Present",duration:"",type:"Full-time",summary:"Owning brand assets, creative production and community growth — from UGC and AI-assisted renders to collaborations, e-commerce and retention.",responsibilities:[{title:"Brand Assets & Content",desc:"Own the creative asset library — UGC, AI renders, campaigns and marketing assets."},{title:"AI & Creative Production",desc:"Use Claude and Higgsfield to develop renders and brief internal and external designers to brand guidelines."},{title:"Cross-Functional Execution",desc:"Coordinate with Operations, E-commerce and partners like Noon Minutes and Talabat."},{title:"UGC, Influencer & Co-Marketing",desc:"Execute paid and barter creator collaborations and own brand co-marketing partnerships end-to-end."},{title:"Amazon & E-commerce",desc:"Led the Amazon storefront and A+ Content redesign — briefing to final QA."},{title:"Brand Activations & CRM",desc:"Managed 15+ activations across UAE and own Klaviyo retention marketing, delivering 40+ campaigns."}]},{company:"Gramiyaa",icon:"leaf-outline",role:"Brand Executive",location:"India",date:"Aug 2024 — Jan 2026",duration:"",type:"Full-time",summary:"Drove offline brand growth through exhibitions, barter partnerships and a new B2B channel — while growing the brand's LinkedIn presence.",responsibilities:[{title:"Exhibitions & Events",desc:"Ran national and international exhibitions — 300+ leads at ANUGA Select India 2025."},{title:"B2B & Barter Partnerships",desc:"Built a new B2B channel by converting cooking academies into bulk-sales partners, eliminating sponsorship costs through barter deals."},{title:"Social Media & Content Strategy",desc:"Grew LinkedIn and Instagram organically — +74.9% page views, +56.1% visitors."}],metrics:[{value:"74.9%",label:"increase in page views"},{value:"56.1%",label:"rise in unique visitors"},{value:"300+",label:"qualified leads at ANUGA 2025"}],metricsNote:"Organic LinkedIn & Instagram results."},{company:"Oliveboard",icon:"school-outline",role:"Marketing Intern",location:"India",date:"May 2024 — Jul 2024",duration:"",type:"Internship",summary:"Ran email, push and WhatsApp campaigns end-to-end and coordinated webinars from planning to live execution.",responsibilities:[{title:"Email, Push & WhatsApp Campaigns",desc:"Ran audience-segmented email, push and WhatsApp campaigns — 48% open rate on WhatsApp."},{title:"Webinar Coordination",desc:"Coordinated webinars end-to-end, from planning to live execution."}]}],iU="/AZRA-FAYAZ/assets/azra%20profile-CBGpO8IX.png",tx="/AZRA-FAYAZ/assets/azra-jps-3zP-JeJ-.jpeg",nx="/AZRA-FAYAZ/assets/content-grid-C4awkRT9.webp",ix="/AZRA-FAYAZ/assets/email-campaigns-DFg4hQe0.webp";function Gr(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}const rU=[{code:"+1",country:"United States"},{code:"+1",country:"Canada"},{code:"+7",country:"Russia / Kazakhstan"},{code:"+20",country:"Egypt"},{code:"+27",country:"South Africa"},{code:"+30",country:"Greece"},{code:"+31",country:"Netherlands"},{code:"+32",country:"Belgium"},{code:"+33",country:"France"},{code:"+34",country:"Spain"},{code:"+36",country:"Hungary"},{code:"+39",country:"Italy"},{code:"+40",country:"Romania"},{code:"+41",country:"Switzerland"},{code:"+43",country:"Austria"},{code:"+44",country:"United Kingdom"},{code:"+45",country:"Denmark"},{code:"+46",country:"Sweden"},{code:"+47",country:"Norway"},{code:"+48",country:"Poland"},{code:"+49",country:"Germany"},{code:"+51",country:"Peru"},{code:"+52",country:"Mexico"},{code:"+54",country:"Argentina"},{code:"+55",country:"Brazil"},{code:"+56",country:"Chile"},{code:"+57",country:"Colombia"},{code:"+60",country:"Malaysia"},{code:"+61",country:"Australia"},{code:"+62",country:"Indonesia"},{code:"+63",country:"Philippines"},{code:"+64",country:"New Zealand"},{code:"+65",country:"Singapore"},{code:"+66",country:"Thailand"},{code:"+81",country:"Japan"},{code:"+82",country:"South Korea"},{code:"+84",country:"Vietnam"},{code:"+86",country:"China"},{code:"+90",country:"Turkey"},{code:"+91",country:"India"},{code:"+92",country:"Pakistan"},{code:"+93",country:"Afghanistan"},{code:"+94",country:"Sri Lanka"},{code:"+95",country:"Myanmar"},{code:"+98",country:"Iran"},{code:"+212",country:"Morocco"},{code:"+213",country:"Algeria"},{code:"+216",country:"Tunisia"},{code:"+218",country:"Libya"},{code:"+220",country:"Gambia"},{code:"+233",country:"Ghana"},{code:"+234",country:"Nigeria"},{code:"+249",country:"Sudan"},{code:"+250",country:"Rwanda"},{code:"+251",country:"Ethiopia"},{code:"+254",country:"Kenya"},{code:"+255",country:"Tanzania"},{code:"+256",country:"Uganda"},{code:"+260",country:"Zambia"},{code:"+263",country:"Zimbabwe"},{code:"+351",country:"Portugal"},{code:"+352",country:"Luxembourg"},{code:"+353",country:"Ireland"},{code:"+354",country:"Iceland"},{code:"+358",country:"Finland"},{code:"+359",country:"Bulgaria"},{code:"+370",country:"Lithuania"},{code:"+371",country:"Latvia"},{code:"+372",country:"Estonia"},{code:"+380",country:"Ukraine"},{code:"+381",country:"Serbia"},{code:"+385",country:"Croatia"},{code:"+420",country:"Czech Republic"},{code:"+421",country:"Slovakia"},{code:"+852",country:"Hong Kong"},{code:"+853",country:"Macau"},{code:"+855",country:"Cambodia"},{code:"+880",country:"Bangladesh"},{code:"+886",country:"Taiwan"},{code:"+960",country:"Maldives"},{code:"+962",country:"Jordan"},{code:"+963",country:"Syria"},{code:"+964",country:"Iraq"},{code:"+965",country:"Kuwait"},{code:"+966",country:"Saudi Arabia"},{code:"+967",country:"Yemen"},{code:"+968",country:"Oman"},{code:"+971",country:"United Arab Emirates"},{code:"+972",country:"Israel"},{code:"+973",country:"Bahrain"},{code:"+974",country:"Qatar"},{code:"+975",country:"Bhutan"},{code:"+976",country:"Mongolia"},{code:"+977",country:"Nepal"},{code:"+992",country:"Tajikistan"},{code:"+993",country:"Turkmenistan"},{code:"+994",country:"Azerbaijan"},{code:"+995",country:"Georgia"},{code:"+998",country:"Uzbekistan"}],sU="971524328500",oU=Ep.email;function aU(){const[t,e]=ae.useState(null),[n,i]=ae.useState("+91"),[r,s]=ae.useState([]),[o,a]=ae.useState(null),l=u=>s(p=>p.includes(u)?p.filter(m=>m!==u):[...p,u]),c=u=>{u.preventDefault(),e("ok"),u.currentTarget.reset()},f=()=>{var v,S,y,E;const u=(v=document.getElementById("name"))==null?void 0:v.value.trim(),p=(S=document.getElementById("email"))==null?void 0:S.value.trim(),m=(y=document.getElementById("phone"))==null?void 0:y.value.trim(),x=(E=document.getElementById("message"))==null?void 0:E.value.trim();if(!u||!p||!x){alert("Please fill in your name, email and message before sending a WhatsApp message.");return}const g=`Hi, I am ${u}. Email: ${p}. Phone: ${m?`${n} ${m}`:"—"}. Message: ${x}`,h=`https://wa.me/${sU}?text=${encodeURIComponent(g)}`;window.open(h,"_blank","noopener,noreferrer")},d=()=>{var v,S,y,E;const u=(v=document.getElementById("name"))==null?void 0:v.value.trim(),p=(S=document.getElementById("email"))==null?void 0:S.value.trim(),m=(y=document.getElementById("phone"))==null?void 0:y.value.trim(),x=(E=document.getElementById("message"))==null?void 0:E.value.trim(),g=`Message from ${u||"Portfolio visitor"}`,h=`Name: ${u}
Email: ${p}
Phone: ${m?`${n} ${m}`:"—"}

${x}`;window.location.href=`mailto:${oU}?subject=${encodeURIComponent(g)}&body=${encodeURIComponent(h)}`};return D.jsxs("div",{className:"page",children:[D.jsxs("header",{className:"hero",id:"home",children:[D.jsx(Q_,{variant:"hero"}),D.jsxs("nav",{className:"navbar",children:[D.jsx("a",{className:"brand",href:"#home",onClick:u=>{u.preventDefault(),Gr("home")},"aria-label":"Azra home",children:"Azra"}),D.jsxs("div",{className:"nav-links",children:[D.jsx("a",{href:"#about",onClick:u=>{u.preventDefault(),Gr("about")},children:"About"}),D.jsx("a",{href:"#experience",onClick:u=>{u.preventDefault(),Gr("experience")},children:"Experience"}),D.jsx("a",{href:"#skills",onClick:u=>{u.preventDefault(),Gr("skills")},children:"Skills"}),D.jsx("a",{href:"#work",onClick:u=>{u.preventDefault(),Gr("work")},children:"Work"}),D.jsx("a",{href:"#contact",onClick:u=>{u.preventDefault(),Gr("contact")},children:"Contact"})]})]}),D.jsxs("div",{className:"hero-content",children:[D.jsx("div",{className:"hero-left",children:D.jsx("div",{className:"hero-photo",children:D.jsx("img",{src:iU,alt:"Azra Fayaz"})})}),D.jsxs("div",{className:"hero-right",children:[D.jsx("p",{className:"eyebrow",children:"Greetings and warm regards"}),D.jsxs("h1",{children:["I’m",D.jsx("br",{}),D.jsx("span",{className:"full-name",children:"AZRA FAYAZ"}),D.jsx("span",{className:"pronouns",children:Ep.pronouns}),D.jsx("br",{}),D.jsx("span",{className:"title-line",children:D.jsx(SA,{words:["Social Media Strategist","Community & Brand","Content & Influencer Marketing","AI-Assisted Creative"]})})]}),D.jsx("p",{className:"hero-headline",children:"Performance-Focused. Audience-Driven. Story-Led."}),D.jsx("p",{children:"A Community & Content Strategist turning performance data and human behaviour into content and community moments that make a brand feel like someone, not something."}),D.jsx("a",{className:"primary-btn",href:"#contact",onClick:u=>{u.preventDefault(),Gr("contact")},children:"Let’s talk"})]})]})]}),D.jsx(Q_,{variant:"page"}),D.jsxs("main",{children:[D.jsx("section",{className:"section section-about",id:"about",children:D.jsxs("div",{className:"section-inner about-photo-card",children:[D.jsx("div",{className:"about-photo-blur",style:{backgroundImage:`url(${tx})`},"aria-hidden":"true"}),D.jsx("div",{className:"about-photo-sharp",style:{backgroundImage:`url(${tx})`},"aria-hidden":"true"}),D.jsx("div",{className:"about-photo-scrim","aria-hidden":"true"}),D.jsxs("div",{className:"about-photo-content",children:[D.jsx("h2",{children:"Who I am"}),D.jsxs("div",{className:"about-cols",children:[D.jsxs("div",{className:"prose",children:[D.jsx("p",{className:"lead",children:"A Community & Content Strategist who turns performance data and human behaviour into content and community moments that make a brand feel like someone, not something."}),D.jsx("p",{children:"Across social, email, influencer and on-ground work, I plan it, make it, ship it, then read the numbers to keep what wins."})]}),D.jsxs("div",{className:"about-side",children:[D.jsxs("div",{className:"approach-card",children:[D.jsx("span",{className:"approach-tag",children:"My approach is simple"}),D.jsx("p",{children:"Understand the audience, create with intent, and deliver content that moves people - emotionally and analytically."})]}),D.jsxs("blockquote",{className:"quote-card",children:[D.jsx("p",{children:"“Her strategies helped us shift from posting randomly to posting with purpose.”"}),D.jsx("cite",{children:"Bashar Karoubi - Founder, Bambuyu"})]})]})]}),D.jsxs("ul",{className:"fact-row",children:[D.jsxs("li",{children:[D.jsx("span",{className:"fact-value",children:"50+"}),D.jsx("span",{className:"fact-label",children:"campaigns strategised · AED 100k+ revenue"})]}),D.jsxs("li",{children:[D.jsx("span",{className:"fact-value",children:"45+"}),D.jsx("span",{className:"fact-label",children:"brand activations handled"})]}),D.jsxs("li",{children:[D.jsx("span",{className:"fact-value",children:"1300+"}),D.jsx("span",{className:"fact-label",children:"leads generated"})]}),D.jsxs("li",{children:[D.jsx("span",{className:"fact-value",children:"40+"}),D.jsx("span",{className:"fact-label",children:"creators worked with"})]})]})]})]})}),D.jsx("section",{className:"section section-experience",id:"experience",children:D.jsxs("div",{className:"section-inner",children:[D.jsx("h2",{children:"Experience"}),D.jsx("ol",{className:"timeline",children:nU.map(u=>D.jsxs("li",{className:"tl-item",children:[D.jsx("span",{className:"tl-marker","aria-hidden":"true",children:D.jsx("ion-icon",{name:u.icon})}),D.jsxs("div",{className:"tl-body",children:[D.jsxs("div",{className:"tl-head",children:[D.jsxs("div",{className:"tl-company",children:[u.company,D.jsx("span",{className:"tl-type",children:u.type})]}),D.jsxs("div",{className:"tl-date",children:[u.date," · ",u.duration]})]}),D.jsx("div",{className:"tl-role",children:u.role}),D.jsx("div",{className:"tl-location",children:u.location}),D.jsx("p",{className:"tl-summary",children:u.summary}),u.responsibilities.length>0&&D.jsxs(D.Fragment,{children:[D.jsxs("button",{type:"button",className:`tl-toggle ${r.includes(u.company)?"is-open":""}`,onClick:()=>l(u.company),"aria-expanded":r.includes(u.company),children:[D.jsx("ion-icon",{name:r.includes(u.company)?"chevron-up":"chevron-down"}),r.includes(u.company)?"Hide achievements":`Show ${u.responsibilities.length} achievements`]}),D.jsx("div",{className:`tl-points-wrap ${r.includes(u.company)?"is-open":""}`,children:D.jsx("ul",{className:"tl-points",children:u.responsibilities.map(p=>D.jsxs("li",{children:[D.jsx("strong",{children:p.title}),D.jsx("span",{children:p.desc})]},p.title))})})]}),u.metrics&&D.jsxs("div",{className:"tl-metrics",children:[u.metrics.map(p=>D.jsxs("div",{className:"tl-metric",children:[D.jsx("span",{className:"tl-metric-value",children:p.value}),D.jsx("span",{className:"tl-metric-label",children:p.label})]},p.label)),D.jsx("p",{className:"tl-metrics-note",children:u.metricsNote})]})]})]},u.company))})]})}),D.jsx("section",{className:"section section-skills",id:"skills",children:D.jsxs("div",{className:"section-inner",children:[D.jsx("h2",{children:"Skills"}),D.jsx(CP,{categories:eU,skills:tU})]})}),D.jsx("section",{className:"section section-work",id:"work",children:D.jsxs("div",{className:"section-inner",children:[D.jsx("h2",{children:"What I do"}),D.jsxs("ul",{className:"work-list",children:[D.jsxs("li",{children:[D.jsx("strong",{children:"Content & influencer."})," Create brand content and lead influencer partnerships end-to-end."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Brand collaborations."})," Own co-marketing and creator collaborations from brief to execution."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Email marketing."})," Run retention email end-to-end — planning, design and execution."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Brand socials."})," Manage daily social presence across Instagram, LinkedIn, TikTok and Facebook."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"AI-powered content."})," Use AI to speed up creative production and workflow."]})]}),D.jsx("h3",{className:"work-subheading",children:"Strategy principles"}),D.jsxs("ul",{className:"principles-list",children:[D.jsxs("li",{children:[D.jsx("strong",{children:"Audit before you create."})," Fix what’s quietly broken before you build what’s next."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Segment by behaviour, not by blast."})," Same message to everyone wastes the few who’d have converted."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Chase the moment, not the feature."})," Creative comes from where people actually meet the brand."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Ship it. Measure it. Keep what wins."})," Instinct picks the idea. Data picks the winner."]})]}),D.jsx("p",{className:"principles-note",children:"Strategy isn’t just a plan — it’s a language between brand and audience."}),D.jsx("h3",{className:"work-subheading",children:"Strategy tips"}),D.jsxs("ol",{className:"tips-list",children:[D.jsx("li",{children:"Your audience follows clarity, not complexity."}),D.jsx("li",{children:"Trends are tools, not the blueprint."}),D.jsx("li",{children:"Make your messaging unmistakable."}),D.jsx("li",{children:"Good strategy feels simple, but never shallow."})]}),D.jsx("h3",{className:"work-subheading",children:"Education"}),D.jsxs("ul",{className:"work-list work-list-plain",children:[D.jsx("li",{children:Ep.education}),D.jsx("li",{children:"B.Sc. (Hons) Microbiology - University of Delhi (GPA 3.8/4.0)"})]}),D.jsx("h3",{className:"work-subheading",children:"Selected work"}),D.jsxs("div",{className:"showcase-grid",children:[D.jsx("article",{className:"showcase showcase--grid",children:D.jsx(ex,{children:D.jsxs("div",{className:"showcase-card",children:[D.jsx("button",{type:"button",className:"showcase-media",onClick:()=>a({src:nx,title:"Content Calendar",desc:"A weekly grid planned around what the audience actually responds to - product, education and community moments planned together, not one at a time.",alt:"Weekly social content grid for Bambuyu across Instagram, LinkedIn and TikTok, with reach and engagement figures on each post"}),"aria-label":"Open Content Calendar slide full size",children:D.jsx("img",{className:"showcase-img",src:nx,alt:"Weekly social content grid for Bambuyu across Instagram, LinkedIn and TikTok, with reach and engagement figures on each post",loading:"lazy"})}),D.jsxs("div",{className:"showcase-overlay",children:[D.jsx("h4",{className:"showcase-title",children:"Content Calendar"}),D.jsx("p",{className:"showcase-desc",children:"A weekly grid planned around what the audience actually responds to - product, education and community moments planned together, not one at a time."})]}),D.jsx("span",{className:"showcase-expand","aria-hidden":"true",children:D.jsx("ion-icon",{name:"expand-outline"})})]})})}),D.jsx("article",{className:"showcase showcase--email",children:D.jsx(ex,{children:D.jsxs("div",{className:"showcase-card",children:[D.jsx("button",{type:"button",className:"showcase-media",onClick:()=>a({src:ix,title:"Email Marketing",desc:"Launch, seasonal and retention emails written end to end - offer, design and send, so the message lands the same way it was planned.",alt:"Bambuyu email campaigns including a back-to-school sale, a product launch and a giveaway landing page"}),"aria-label":"Open Email Marketing slide full size",children:D.jsx("img",{className:"showcase-img",src:ix,alt:"Bambuyu email campaigns including a back-to-school sale, a product launch and a giveaway landing page",loading:"lazy"})}),D.jsxs("div",{className:"showcase-overlay",children:[D.jsx("h4",{className:"showcase-title",children:"Email Marketing"}),D.jsx("p",{className:"showcase-desc",children:"Launch, seasonal and retention emails written end to end - offer, design and send, so the message lands the same way it was planned."})]}),D.jsx("span",{className:"showcase-expand","aria-hidden":"true",children:D.jsx("ion-icon",{name:"expand-outline"})})]})})})]})]})}),D.jsx("section",{className:"section section-contact",id:"contact",children:D.jsxs("div",{className:"section-inner",children:[D.jsx("h2",{children:"Contact"}),D.jsx("p",{className:"contact-intro",children:"Open to marketing roles and brand collaborations. Send a message through the form — use WhatsApp or Email below to reach me directly."}),D.jsxs("form",{className:"contact-form",onSubmit:c,children:[D.jsxs("div",{className:"form-row",children:[D.jsxs("div",{className:"form-field",children:[D.jsx("label",{htmlFor:"name",children:"Name"}),D.jsx("input",{id:"name",name:"name",type:"text",required:!0})]}),D.jsxs("div",{className:"form-field",children:[D.jsx("label",{htmlFor:"email",children:"Email"}),D.jsx("input",{id:"email",name:"email",type:"email",required:!0})]})]}),D.jsx("label",{htmlFor:"phone",children:"Phone"}),D.jsxs("div",{className:"phone-field",children:[D.jsx("select",{className:"country-select",value:n,onChange:u=>i(u.target.value),"aria-label":"Country code",children:rU.map(u=>D.jsxs("option",{value:u.code,children:[u.country," (",u.code,")"]},`${u.code}-${u.country}`))}),D.jsx("input",{id:"phone",name:"phone",type:"tel",placeholder:"Phone number",required:!0})]}),D.jsx("input",{type:"hidden",name:"country_code",value:n}),D.jsx("label",{htmlFor:"message",children:"Message"}),D.jsx("textarea",{id:"message",name:"message",rows:"5",required:!0}),D.jsxs("div",{className:"button-row",children:[D.jsxs("button",{type:"button",onClick:f,children:[D.jsx("ion-icon",{name:"logo-whatsapp"})," WhatsApp"]}),D.jsxs("button",{type:"button",onClick:d,children:[D.jsx("ion-icon",{name:"mail-outline"})," Email"]})]}),t==="contact"&&D.jsx("p",{className:"submit-message","data-status":"info",children:"The form is being connected to an inbox. Please reach out on LinkedIn in the meantime."}),t==="ok"&&D.jsx("p",{className:"submit-message","data-status":"success",children:"Thanks for reaching out. I’ll get back to you soon."})]}),D.jsx("div",{className:"social-row",children:D.jsx("a",{href:"https://www.linkedin.com/in/azra-fayaz-4307bb378/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:D.jsx("ion-icon",{name:"logo-linkedin"})})})]})})]}),D.jsx(QN,{item:o,onClose:()=>a(null)})]})}function lU(){return D.jsx(aU,{})}vd.createRoot(document.getElementById("root")).render(D.jsx(cT.StrictMode,{children:D.jsx(lU,{})}));
